// Print one graph of graphs.json (tools/gil/extract.cjs): every node with its non-default pins and the composite ports.
//   node tools/gil/dump.cjs <dir>/graphs.json <graphId>
// Pin "kind:index": 1 exec in, 2 exec out, 3 data in, 4 data out, 5 signal-name selector. "=v" literal, "->node.kind:index" connections.
// Node numbers are per export: re-check them against the export you are wiring from.
const fs = require('fs');
const [file, id] = process.argv.slice(2);
if (!file || !id) { console.error('usage: node tools/gil/dump.cjs <graphs.json> <graphId>'); process.exit(2); }
const g = JSON.parse(fs.readFileSync(file, 'utf8')); const byId = new Map(g.map(x => [x.id, x]));
const G = byId.get(+id); if (!G) throw Error('no graph ' + id);
console.log('graph', G.id, G.name, 'nodes', G.nodes.length);
for (const n of G.nodes) {
  const pins = n.pins.map(p => {
    let s = p.kind + ':' + p.index;
    if (p.literal !== undefined && p.literal !== '' && !(Array.isArray(p.literal) && !p.literal.length)) s += '=' + JSON.stringify(p.literal).slice(0, 40);
    if (p.connections.length) s += '->' + p.connections.map(c => c.node + '.' + c.kind + ':' + c.index).join(',');
    return s;
  }).filter(s => s.includes('=') || s.includes('->'));
  const t = n.target && byId.has(n.target) ? ' [' + byId.get(n.target).name + ' ' + n.target + ']' : '';
  console.log('#' + n.id + ' ' + n.name + t + '  ' + pins.join('  '));
}
if (G.ports && G.ports.length) console.log('ports', JSON.stringify(G.ports));
