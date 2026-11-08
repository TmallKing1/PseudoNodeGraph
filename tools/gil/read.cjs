// Read-only decoder for .gil (level export, file_type 2) and .gia (resource / trace export, file_type 3).
// Container: big-endian u32 header (size-4, version 1, magic 0x326, file_type, payload length) + payload + tail magic 0x679.
// Payload: protobuf wire format without a schema. Every length-delimited field is also tried as a nested message
// (message_candidate) and as UTF-8 text (text_candidate); fixed fields keep float_candidate. The whole tree is re-encoded
// and compared byte-for-byte with the source, so nothing is lost or invented. Never writes the game file.
//   node tools/gil/read.cjs <file.gil|file.gia> <outDir>
// Writes <outDir>/<stem>.decoded.json, .strings.json, .summary.json (+ .inventory.json for a resource .gia).
// Also reads the debug-log .gia files of 千星沙箱 (Beyond_Debug_Log): different container, same protobuf; use .strings.json.
// Ported from the 大富豪 project's read_gil.cjs / read_gia.cjs (2026-11-08); format notes in tools/gil/FORMAT.md.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
if (process.argv.length < 4) { console.error('usage: node tools/gil/read.cjs <file.gil|file.gia> <outDir>'); process.exit(2); }
const input = path.resolve(process.argv[2]);
const out = path.resolve(process.argv[3]);
const stem = path.basename(input, path.extname(input));
const b = fs.readFileSync(input);
function varint(buf, pos, end) {
  let n = 0n;
  for (let i = 0; i < 10; i++) {
    if (pos >= end) throw Error('Truncated varint');
    const x = buf[pos++]; n |= BigInt(x & 127) << BigInt(i * 7);
    if (!(x & 128)) { if (n > 0xffffffffffffffffn) throw Error('Overflow'); return [n, pos]; }
  }
  throw Error('Invalid varint');
}
function numeric(n) { return n <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(n) : n.toString(); }
function parse(start, end, depth = 0) {
  if (depth > 48) throw Error('Depth limit');
  const fields = []; let pos = start;
  while (pos < end) {
    const offset = pos; let tag; [tag, pos] = varint(b, pos, end);
    const field = Number(tag >> 3n), wire = Number(tag & 7n);
    if (!field || field > 536870911 || ![0, 1, 2, 5].includes(wire)) throw Error('Invalid tag');
    const f = { field, wire, offset };
    if (wire === 0) { let n; [n, pos] = varint(b, pos, end); f.value = numeric(n); }
    else if (wire === 1 || wire === 5) {
      const size = wire === 1 ? 8 : 4;
      if (pos + size > end) throw Error('Truncated fixed value');
      f.hex = b.subarray(pos, pos + size).toString('hex');
      f.unsigned = wire === 1 ? numeric(b.readBigUInt64LE(pos)) : b.readUInt32LE(pos);
      const float = wire === 1 ? b.readDoubleLE(pos) : b.readFloatLE(pos);
      f.float_candidate = Number.isFinite(float) ? float : String(float); pos += size;
    } else {
      let n; [n, pos] = varint(b, pos, end); const len = Number(n);
      if (!Number.isSafeInteger(len) || len > end - pos) throw Error('Truncated bytes');
      f.data_offset = pos; f.length = len;
      f.hex = b.subarray(pos, pos + len).toString('hex');
      const str = b.subarray(pos, pos + len).toString('utf8');
      if (len && Buffer.from(str, 'utf8').equals(b.subarray(pos, pos + len)) && !/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/u.test(str)) f.text_candidate = str;
      if (len) { try { f.message_candidate = parse(pos, pos + len, depth + 1); } catch {} }
      pos += len;
    }
    f.encoded_length = pos - offset; fields.push(f);
  }
  return fields;
}
function field(fields, n) { return fields.find(f => f.field === n); }
function locator(f) { return Object.fromEntries((f?.message_candidate || []).map(x => [x.field, x.value ?? x.text_candidate ?? x.hex])); }
if (b.length < 8) throw Error('File too small');
// Debug-log .gia (千星沙箱 Beyond_Debug_Log, trace / log export): u32 BE size-4, u32 BE size-8, then protobuf to the end.
const isLog = b.readUInt32BE(0) === b.length - 4 && b.readUInt32BE(4) === b.length - 8;
let header, checks, START, END;
if (isLog) {
  header = { actual_size: b.length, declared_size_excluding_first_word: b.readUInt32BE(0), payload_length: b.readUInt32BE(4), file_type: 'debug-log' };
  checks = { size: true, payload_length: true }; START = 8; END = b.length;
} else {
  if (b.length < 24) throw Error('File too small');
  header = { actual_size: b.length, declared_size_excluding_tail: b.readUInt32BE(0), container_version: b.readUInt32BE(4), head_magic: b.readUInt32BE(8), file_type: b.readUInt32BE(12), payload_length: b.readUInt32BE(16), tail_magic: b.readUInt32BE(b.length - 4) };
  checks = { size: header.declared_size_excluding_tail === b.length - 4, payload_length: header.payload_length === b.length - 24, head_magic: header.head_magic === 0x326, tail_magic: header.tail_magic === 0x679, known_type: header.file_type === 2 || header.file_type === 3 };
  if (Object.values(checks).some(v => !v)) throw Error('Invalid .gil/.gia header: ' + JSON.stringify({ header, checks }));
  START = 20; END = b.length - 4;
}
const root = parse(START, END);
function encodeVarint(value) {
  let n = BigInt(value); const result = [];
  do { let x = Number(n & 127n); n >>= 7n; result.push(x | (n ? 128 : 0)); } while (n);
  return Buffer.from(result);
}
let verifiedMessages = 0;
function verify(fields, start, end) {
  const chunks = [];
  for (const f of fields) {
    chunks.push(encodeVarint(BigInt(f.field) * 8n + BigInt(f.wire)));
    if (f.wire === 0) chunks.push(encodeVarint(f.value));
    else if (f.wire === 2) {
      chunks.push(encodeVarint(f.length), Buffer.from(f.hex, 'hex'));
      if (f.message_candidate) verify(f.message_candidate, f.data_offset, f.data_offset + f.length);
    } else chunks.push(Buffer.from(f.hex, 'hex'));
  }
  if (!Buffer.concat(chunks).equals(b.subarray(start, end))) throw Error('Byte roundtrip mismatch at ' + start);
  verifiedMessages++;
}
verify(root, START, END);
const strings = [];
function walk(fields, prefix) {
  const count = {};
  for (const f of fields) {
    const key = prefix + '/' + f.field + '[' + (count[f.field] = (count[f.field] || 0) + 1) + ']';
    if (f.text_candidate !== undefined) strings.push({ path: key, offset: f.data_offset, text: f.text_candidate });
    if (f.message_candidate) { walk(f.message_candidate, key); delete f.hex; }
  }
}
const sha256 = crypto.createHash('sha256').update(b).digest('hex');
const kind = isLog ? 'debug-log' : header.file_type === 2 ? 'gil' : 'gia';
// .gia: top-level fields 1 (primary, may repeat) / 2 (dependencies) are resources, per the community gia.proto.
const resources = kind === 'gia' ? root.filter(f => [1, 2].includes(f.field) && f.message_candidate).map((f, i) => {
  const m = f.message_candidate;
  return { index: i, role: f.field === 1 ? 'primary' : 'dependency', offset: f.data_offset, bytes: f.length, name: field(m, 3)?.text_candidate, identity: locator(field(m, 1)), resource_class: field(m, 5)?.value, references: m.filter(x => x.field === 2).map(locator) };
}) : undefined;
walk(root, 'root');
fs.mkdirSync(out, { recursive: true });
const sections = root.map(f => ({ field: f.field, wire: f.wire, offset: f.offset, bytes: f.length, value: f.value, text: f.text_candidate, children: f.message_candidate?.length }));
const summary = { source: input, kind, sha256, header, checks, verifiedMessages, string_count: strings.length, sections,
  export_tag: kind === 'gia' ? field(root, 3)?.text_candidate : undefined, engine_version: kind === 'gia' ? field(root, 5)?.text_candidate : undefined,
  resource_count: resources?.length,
  caveat: 'Field meanings beyond the paths in tools/gil/FORMAT.md are candidates, not a verified schema.' };
fs.writeFileSync(path.join(out, stem + '.decoded.json'), JSON.stringify({ header, fields: root }));
fs.writeFileSync(path.join(out, stem + '.strings.json'), JSON.stringify(strings, null, 2));
fs.writeFileSync(path.join(out, stem + '.summary.json'), JSON.stringify(summary, null, 2));
if (resources) fs.writeFileSync(path.join(out, stem + '.inventory.json'), JSON.stringify(resources, null, 2));
console.log(JSON.stringify({ kind, sha256, size: b.length, verifiedMessages, strings: strings.length, resources: resources?.length, out: path.join(out, stem + '.decoded.json') }, null, 2));
