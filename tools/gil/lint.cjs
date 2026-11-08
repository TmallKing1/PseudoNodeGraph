// Editor rules that TypeScript cannot express, checked on pseudo-code files (2026-11-08, from the 大富豪 project).
//   node tools/gil/lint.cjs <dir|file.ts>... [--roles=<roles.json>] [--only=<regex>]
// A file's role (one editor graph per file) is, in order: --roles {"<file name without .ts>": "main"|"composite"},
// a header comment "// @graph main" / "// @graph composite", else "main" when it registers an event (on*(...)).
// (Composites MAY contain event nodes, e.g. a timer-delay composite waiting for its own timer, so events are not a role signal
// when --roles or @graph is given.)
// Rules (each finding is "file:line rule message"; exit code 1 when any):
//   main-import       a graph imports / re-exports a main graph: main graphs cannot call each other, only composites can be shared
//   dynamic-module    import() / require(): not an editor connection
//   struct-fields     an interface with more than 50 fields (the editor's struct field limit)
//   signal-literal    sendSignal / sendClientScriptedSignal whose parameters are not an object literal: the signal pins
//                     are filled at the send node itself, signal data cannot be carried as one value
//   local-container   a local variable holding a dictionary or struct (new Map, a Dict/Map/Struct type, or an interface
//                     tagged /** @struct */): local variables support scalars and lists only; connect it to a pin instead
//   event-payload     a local holding the whole ev.params (destructuring is fine)
// Uses the "typescript" package (devDependency). Read-only.
const fs = require('fs'), path = require('path'), ts = require('typescript');
const args = process.argv.slice(2), opt = (k) => (args.find(x => x.startsWith('--' + k + '=')) || '').slice(k.length + 3) || undefined;
const targets = args.filter(x => !x.startsWith('--'));
if (!targets.length) { console.error('usage: node tools/gil/lint.cjs <dir|file.ts>... [--roles=roles.json] [--only=regex]'); process.exit(2); }
const roles = opt('roles') ? JSON.parse(fs.readFileSync(opt('roles'), 'utf8')) : {};
const only = opt('only') ? new RegExp(opt('only')) : null;
const files = targets.flatMap(t => fs.statSync(t).isDirectory() ? fs.readdirSync(t).filter(f => f.endsWith('.ts')).map(f => path.join(t, f)) : [t]).map(f => path.resolve(f));
const MAX_FIELDS = 50, CONTAINER = /\b(?:Dict|Map|Struct)\b/;
const sources = new Map(files.map(f => [f, ts.createSourceFile(f, fs.readFileSync(f, 'utf8'), ts.ScriptTarget.Latest, true)]));
const callee = (n, a) => n.expression.getText(a).replace(/^\w+\./, '');
function registersEvent(a) { let found = false; (function walk(n) { if (ts.isCallExpression(n) && /^on[A-Z]\w*$/.test(callee(n, a))) found = true; if (!found) ts.forEachChild(n, walk); })(a); return found; }
function roleOf(file) {
  const name = path.basename(file, '.ts');
  if (roles[name]) return roles[name];
  const a = sources.get(file); const tag = a && a.text.match(/^\s*\/\/\s*@graph\s+(main|composite)\b/m);
  if (tag) return tag[1];
  if (a) return registersEvent(a) ? 'main' : 'composite';
  return roles[name];
}
const structs = new Set();
for (const a of sources.values()) for (const s of a.statements) if (ts.isInterfaceDeclaration(s) && ts.getJSDocTags(s).some(t => t.tagName.text === 'struct')) structs.add(s.name.text);
const findings = [];
const report = (a, n, rule, msg) => findings.push(path.relative(process.cwd(), a.fileName) + ':' + (a.getLineAndCharacterOfPosition(n.getStart(a)).line + 1) + ' ' + rule + ' ' + msg);
const holdsContainer = (text) => CONTAINER.test(text) || [...structs].some(s => new RegExp('\\b' + s + '\\b').test(text));
for (const [file, a] of sources) {
  if (only && !only.test(path.basename(file))) continue;
  (function visit(n) {
    if ((ts.isImportDeclaration(n) || ts.isExportDeclaration(n)) && n.moduleSpecifier && n.moduleSpecifier.text.startsWith('.')) {
      const dest = path.resolve(path.dirname(file), n.moduleSpecifier.text).replace(/\.ts$/, '') + '.ts';
      if ((sources.has(dest) || roles[path.basename(dest, '.ts')]) && roleOf(dest) === 'main') report(a, n, 'main-import', 'imports main graph ' + path.basename(dest, '.ts'));
    }
    if (ts.isCallExpression(n)) {
      if (n.expression.kind === ts.SyntaxKind.ImportKeyword || n.expression.getText(a) === 'require') report(a, n, 'dynamic-module', 'import()/require() is not an editor connection');
      const name = callee(n, a);
      if ((name === 'sendSignal' || name === 'sendClientScriptedSignal') && n.arguments.length && !ts.isObjectLiteralExpression(n.arguments[n.arguments.length - 1])) report(a, n, 'signal-literal', name + ' parameters must be an object literal at the send node');
    }
    if (ts.isInterfaceDeclaration(n) && n.members.length > MAX_FIELDS) report(a, n, 'struct-fields', n.name.text + ' has ' + n.members.length + ' fields (limit ' + MAX_FIELDS + ')');
    if (ts.isVariableDeclaration(n) && !ts.isSourceFile(n.parent.parent.parent)) {   // locals only, not module-level declarations
      const init = n.initializer;
      if (init && ts.isNewExpression(init) && init.expression.getText(a) === 'Map') report(a, n, 'local-container', 'local dictionary');
      else if (n.type && holdsContainer(n.type.getText(a))) report(a, n, 'local-container', 'local typed ' + n.type.getText(a));
      else if (init && ts.isCallExpression(init) && (init.typeArguments || []).some(t => holdsContainer(t.getText(a)))) report(a, n, 'local-container', 'local from ' + init.expression.getText(a) + '<' + init.typeArguments.map(t => t.getText(a)).join(',') + '>');
      if (init && init.getText(a) === 'ev.params' && !ts.isObjectBindingPattern(n.name)) report(a, n, 'event-payload', 'whole ev.params in a local');
    }
    ts.forEachChild(n, visit);
  })(a);
}
for (const x of findings) console.log(x);
console.log(JSON.stringify({ files: sources.size, checked: only ? [...sources.keys()].filter(f => only.test(path.basename(f))).length : sources.size, findings: findings.length }));
process.exit(findings.length ? 1 : 0);
