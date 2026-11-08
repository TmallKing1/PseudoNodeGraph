// Semantic extraction from a decoded .gil (tools/gil/read.cjs output). Read-only; writes JSON next to the input.
//   node tools/gil/extract.cjs <dir>/<stem>.decoded.json [graphId|name ...]
// Writes in the same directory:
//   graphs.json        every node graph: nodes (type code, name, composite target, pins with literal / connections) and composite ports
//   definitions.json   composite node definitions (interface id, name, implementing graph)
//   entities.json      entities from sections 4/5/8: name, mounted graphs, custom variables defined in the editor (name, type code)
//   variable-checks.json
//     undefined  - get/set custom variable with a literal name that no entity defines: created dynamically at run time,
//                  so it is NOT synced to clients (observed 2026-11-08), and a typo silently makes a new variable
//     mismatches - literal name whose value pin type differs from the defined type
//     emptyNames - get/set without a name (neither literal, connection nor composite input)
// With graph ids or a name fragment, also prints those graphs (non-default pins only).
// Paths and codes: tools/gil/FORMAT.md. Names: data/node-types.json. Ported from the 大富豪 project (2026-11-08).
const fs = require('fs'), path = require('path');
const [file, ...selected] = process.argv.slice(2);
if (!file) { console.error('usage: node tools/gil/extract.cjs <stem>.decoded.json [graphId|name ...]'); process.exit(2); }
const dir = path.dirname(path.resolve(file));
const d = JSON.parse(fs.readFileSync(file, 'utf8'));
const f = (a, n) => a && a.find(x => x.field === n);
const m = (a, n) => f(a, n) && f(a, n).message_candidate;
const v = (a, n) => f(a, n) && f(a, n).value;
const text = (a, n) => f(a, n) && f(a, n).text_candidate;
// Pin values: 101-106 scalars (102 int64, sign-wrapped; 105 string), 109 list, 110 wrapper.
function literal(a) {
  if (!a) return undefined;
  if (m(a, 110)) return literal(m(m(a, 110), 2));
  if (f(a, 109)) return (m(a, 109) || []).filter(x => x.field === 1).map(x => literal(x.message_candidate));
  for (const k of [101, 102, 103, 104, 105, 106]) {
    const x = f(a, k);
    if (x) {
      const y = f(x.message_candidate, 1);
      const z = k === 105 ? (y && y.text_candidate !== undefined ? y.text_candidate : '') : (y ? (y.value ?? y.float_candidate ?? 0) : 0);
      return k === 102 && typeof z === 'string' ? Number(BigInt.asIntN(64, BigInt(z))) : z;
    }
  }
  return undefined;
}
function plain(a) {
  const o = {};
  for (const x of a || []) {
    const z = x.message_candidate ? plain(x.message_candidate) : x.value ?? x.text_candidate ?? x.float_candidate ?? x.hex;
    if (o[x.field] === undefined) o[x.field] = z; else if (Array.isArray(o[x.field])) o[x.field].push(z); else o[x.field] = [o[x.field], z];
  }
  return o;
}
const table = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'node-types.json'), 'utf8'));
const names = new Map(table.types.map(t => [t.typeId, t.zhName]));
const section = m(d.fields, 10), definitions = [];
for (const x of section.filter(x => x.field === 2)) {
  const a = m(x.message_candidate, 1);
  definitions.push({ id: v(m(m(a, 4), 1), 5), name: text(a, 200), target: v(m(m(a, 4), 4), 5) });
}
const defs = new Map(definitions.map(x => [x.id, x]));
const graphs = [];
function visit(a) {
  const id = v(m(a, 1), 5), kind = v(m(a, 1), 3);
  if (id && a.some(x => x.field === 3 && v(x.message_candidate, 1) !== undefined) && String(kind).startsWith('21')) {
    const nodes = a.filter(x => x.field === 3).map(x => {
      const n = x.message_candidate, type = v(m(n, 2), 5), def = defs.get(type);
      return {
        id: v(n, 1), type, name: (def && def.name) || names.get(type) || '?', target: def && def.target,
        pins: n.filter(x => x.field === 4).map(x => {
          const p = x.message_candidate;
          return {
            kind: v(m(p, 1), 1), index: v(m(p, 1), 2) || 0, kernelIndex: v(m(p, 2), 2) || 0, type: v(p, 4), literal: literal(m(p, 3)),
            connections: p.filter(y => y.field === 5).map(y => ({ node: v(y.message_candidate, 1), kind: v(m(y.message_candidate, 2), 1), index: v(m(y.message_candidate, 2), 2) || 0 })),
          };
        }),
      };
    });
    const def = definitions.find(x => x.target === id);
    graphs.push({ id, name: text(a, 2) || (def && def.name), kind, nodes, ports: a.filter(x => x.field === 4).map(x => plain(x.message_candidate)) });
    return;
  }
  for (const x of a || []) if (x.message_candidate) visit(x.message_candidate);
}
visit(section);
// Entities: section 4 keeps name / graphs / variables in components 6/7/8, sections 5 and 8 in 5/6/7.
const entities = [];
for (const s of [4, 5, 8]) for (const e of (m(d.fields, s) || []).filter(x => x.field === 1)) {
  const a = e.message_candidate, entity = { section: s, id: v(a, 1), name: '', graphs: [], variables: [] }, c = s === 4 ? [6, 7, 8] : [5, 6, 7];
  for (const comp of a.filter(x => x.field === c[0])) if (v(comp.message_candidate, 1) === 1) entity.name = text(m(comp.message_candidate, 11), 1);
  for (const comp of a.filter(x => x.field === c[1])) if (v(comp.message_candidate, 1) === 3) entity.graphs = (m(comp.message_candidate, 13) || []).filter(x => x.field === 1).map(x => v(m(x.message_candidate, 1), 2));
  for (const comp of a.filter(x => x.field === c[2])) if (v(comp.message_candidate, 1) === 1) entity.variables = (m(comp.message_candidate, 11) || []).filter(x => x.field === 1).map(x => ({ name: text(x.message_candidate, 2), type: v(x.message_candidate, 3) }));
  entities.push(entity);
}
const defined = new Map();
for (const e of entities) for (const x of e.variables) { if (!defined.has(x.name)) defined.set(x.name, new Set()); defined.get(x.name).add(x.type); }
const SET = 22, GET = 50, undefinedNames = {}, mismatches = [], emptyNames = [];
for (const g of graphs) for (const n of g.nodes) if (n.type === SET || n.type === GET) {
  const name = n.pins.find(p => p.kind === 3 && p.index === 1);
  const val = n.pins.find(p => p.kind === (n.type === SET ? 3 : 4) && p.index === (n.type === SET ? 2 : 0));
  const external = g.ports.some(p => p['1'] && p['1']['1'] === 3 && p['2'] === n.id && p['3'] && p['3']['1'] === 3 && (p['3']['2'] || 0) === 1);
  if (!external && !(name && name.connections.length) && !(name && name.literal)) emptyNames.push({ graph: g.id, node: n.id });
  if (!(name && name.literal)) continue;
  if (!defined.has(name.literal)) (undefinedNames[name.literal] = undefinedNames[name.literal] || []).push({ graph: g.id, node: n.id, op: n.type === SET ? 'set' : 'get' });
  else if (val && val.type && !defined.get(name.literal).has(val.type)) mismatches.push({ graph: g.id, node: n.id, name: name.literal, actual: val.type, declared: [...defined.get(name.literal)] });
}
fs.writeFileSync(path.join(dir, 'graphs.json'), JSON.stringify(graphs, null, 1));
fs.writeFileSync(path.join(dir, 'definitions.json'), JSON.stringify(definitions, null, 1));
fs.writeFileSync(path.join(dir, 'entities.json'), JSON.stringify(entities, null, 1));
fs.writeFileSync(path.join(dir, 'variable-checks.json'), JSON.stringify({ undefined: undefinedNames, mismatches, emptyNames }, null, 1));
const unnamed = {};
for (const g of graphs) for (const n of g.nodes) if (n.name === '?') unnamed[n.type] = (unnamed[n.type] || 0) + 1;
console.log(JSON.stringify({
  graphs: graphs.length, nodes: graphs.reduce((s, g) => s + g.nodes.length, 0), composites: definitions.length, entities: entities.length,
  definedVariables: defined.size, undefinedVariableNames: Object.keys(undefinedNames).length, typeMismatches: mismatches.length, emptyNames: emptyNames.length, unnamedTypes: unnamed,
}));
for (const g of graphs.filter(g => selected.includes('' + g.id) || (selected.length && g.name && g.name.includes(selected[0])))) {
  console.log('GRAPH', g.id, g.name, 'PORTS', JSON.stringify(g.ports));
  for (const n of g.nodes) console.log('#' + n.id, n.name, n.target || n.type, JSON.stringify(n.pins.filter(p => p.connections.length || p.kind === 5 || p.literal !== undefined).map(p => ({ p: p.kind + ':' + p.index, c: p.connections.length ? p.connections : undefined, v: p.literal }))));
}
