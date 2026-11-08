// One-off builder for data/node-types.json: editor node type code -> Chinese node name -> library function.
//   node tools/gil/build-node-types.cjs --logic=<logic-graphs.json> [--export=<graphs.json>]... [--identities=<node-identities.json>]
// Inputs (2026-11-08, from the 大富豪 project):
//   --logic       nodes extracted from an older export, named by a community node dictionary (shell/kernel ids, pin names/types)
//   --export      graphs.json written by tools/gil/extract.cjs for a newer export (adds type codes seen there and pin indices)
//   --identities  type codes the dictionary lacked, named by the user ({types:{code:name}})
// Only built-in nodes (identity kind 22000) are kept; composite nodes (kind 22001) belong to each project.
const fs = require('fs'), path = require('path');
const arg = (k) => process.argv.filter(x => x.startsWith('--' + k + '=')).map(x => x.slice(k.length + 3));
const root = path.join(__dirname, '..', '..');
const coverage = JSON.parse(fs.readFileSync(path.join(root, 'coverage.json'), 'utf8'));
const byZh = new Map(coverage.map(c => [c.zh, c]));
// Editor names that differ from the documentation (seen in exports; 大富豪 transcribe.cjs).
const ALIASES = { '修改玩家背景音乐': '设置玩家背景音乐', '对列表修改值': '对列表设置值', '修改背包道具数量': '增加背包道具数量',
  '修改背包货币数量': '增加背包货币数量', '修改全局计时器': '增加全局计时器的值', '变更成就进度计数': '增加成就进度计数',
  '传送玩家': '传送玩家(超限)', '修改界面布局内界面控件状态': '设置界面控件(组)状态' };
const types = new Map();
function entry(id) { if (!types.has(id)) types.set(id, { typeId: id, sources: [] }); return types.get(id); }
function name(e, zh, source) {
  if (!zh || zh === '?' || zh.startsWith('unknown:')) return;
  if (!e.zhName) e.zhName = zh; else if (e.zhName !== zh) (e.otherNames ??= []).includes(zh) || e.otherNames.push(zh);
  if (!e.sources.includes(source)) e.sources.push(source);
}
const [logic] = arg('logic');
if (!logic) { console.error('need --logic=<logic-graphs.json>'); process.exit(2); }
for (const g of JSON.parse(fs.readFileSync(logic, 'utf8')).graphs) for (const n of g.nodes) {
  if (n.shell.kind !== 22000) continue;
  const e = entry(n.shell.id); name(e, n.name, 'community-dictionary');
  if (n.kernel && n.kernel.id !== n.shell.id) e.kernelId = n.kernel.id;
  e.instances = (e.instances || 0) + 1;
  // Keep the richest pin list seen (pins without a value or connection are often omitted).
  const pins = n.pins.filter(p => p.name).map(p => ({ kind: p.kind, index: p.index, name: p.name, type: p.type }));
  if (!e.pins || pins.length > e.pins.length) e.pins = pins;
}
for (const file of arg('export')) for (const g of JSON.parse(fs.readFileSync(file, 'utf8'))) for (const n of g.nodes) {
  if (n.type >= 1e9 || n.target) continue;          // composite instance
  const e = entry(n.type); if (!e.sources.includes('export-observed')) e.sources.push('export-observed');
  e.exportInstances = (e.exportInstances || 0) + 1;
}
for (const file of arg('identities')) for (const [id, zh] of Object.entries(JSON.parse(fs.readFileSync(file, 'utf8')).types || {})) name(entry(+id), zh, 'user-provided');
// Creator checks (2026-11-08): the dictionary names of the entries absent from the latest export match the editor;
// the editor now calls 模运算 「余运算」. Types 1 and 6 were named from how they are wired in the 大富豪 export
// (1: one string input, placed after 终止定时器 to log a timeout; 6: exec out wired to a loop's 中断 input), then checked in the editor.
const CREATOR_VERIFIED = [316, 382, 383, 521, 750], EDITOR_NAMES = { 208: '余运算' }, INFERRED = { 1: '打印字符串', 6: '跳出循环' };
for (const id of CREATOR_VERIFIED) if (types.has(id)) types.get(id).sources.push('creator-verified');
for (const [id, zh] of Object.entries(EDITOR_NAMES)) if (types.has(+id)) types.get(+id).editorName = zh;
for (const [id, zh] of Object.entries(INFERRED)) if (types.has(+id) && !types.get(+id).zhName) { name(types.get(+id), zh, 'inferred-from-wiring'); types.get(+id).sources.push('creator-verified'); }
for (const e of types.values()) {
  const doc = e.zhName && (byZh.get(e.zhName) || byZh.get(ALIASES[e.zhName]));
  if (e.zhName && ALIASES[e.zhName]) e.docName = ALIASES[e.zhName];
  if (doc) { e.fn = doc.target; e.mapping = doc.kind; e.page = doc.page; }
}
const list = [...types.values()].sort((a, b) => a.typeId - b.typeId);
const out = { generated: new Date().toISOString().slice(0, 10),
  note: 'Built-in node type codes as stored in .gil exports (node field 2/5). zhName from a community node dictionary, user reports or both; '
    + 'fn from coverage.json (mapping "native" = written as TS syntax). Pin lists come from one export and use the editor\'s pin kinds '
    + '(1 exec in, 2 exec out, 3 data in, 4 data out, 5 signal-name selector) and pin type codes (tools/gil/FORMAT.md). Evidence: inferred unless noted.',
  sources: { logic: path.basename(logic), export: arg('export').map(f => path.basename(path.dirname(f)) + '/' + path.basename(f)), identities: arg('identities').map(f => path.basename(f)) },
  counts: { types: list.length, named: list.filter(e => e.zhName).length, withFunction: list.filter(e => e.fn).length },
  types: list };
fs.mkdirSync(path.join(root, 'data'), { recursive: true });
fs.writeFileSync(path.join(root, 'data', 'node-types.json'), JSON.stringify(out, null, 1) + '\n');
console.log(out.counts, 'unnamed:', list.filter(e => !e.zhName).map(e => e.typeId).join(' '),
  '\nnamed without function:', list.filter(e => e.zhName && !e.fn).map(e => e.typeId + ':' + e.zhName).join(' '));
