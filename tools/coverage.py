# 覆盖率校验：源页面每个节点 = 函数 / 原生语法映射 / TODO 项，且函数确实存在于 src 中
import json,re,os,collections,glob
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
raw=json.load(open(os.path.join(R,'tools','nodes.raw.json')))
cov=json.load(open(os.path.join(R,'coverage.json')))
src=''.join(open(f).read() for f in glob.glob(os.path.join(R,'src','**','*.ts'),recursive=True))
PAGE={'event':'事件节点 mhn7ko01v3yw','exec':'执行节点 mhw66orrrfkm','flow':'流程控制节点 mhe8yn9bysd6','query':'查询节点 mhwbqlrw655q','operation':'运算节点 mhnd4l069tk0'}
out=['# 覆盖率报告（tools/coverage.py 生成）','','| 页面 | 中文页节点数 | 英文页节点数 | 函数(声明) | 函数(真实实现) | 原生语法映射 | TODO | 缺失 |','|---|---|---|---|---|---|---|---|']
tot=collections.Counter(); bad=[]
for p,name in PAGE.items():
  zt=[re.sub(r'^\s*\d+\s*\.\s*','',n['title']) for c in raw[p+'.zh-cn'] for n in c['nodes']]
  ne=sum(len(c['nodes']) for c in raw[p+'.en-us'])
  cs=[c for c in cov if c['page']==p]; k=collections.Counter(c['kind'] for c in cs)
  missing=[t for t in zt if t not in {c['zh'] for c in cs}]
  for c in cs:
    if c['kind']!='native' and not re.search(r'export (declare )?function '+re.escape(c['target'])+r'\b',src): bad.append(c['target'])
  out.append(f"| {name} | {len(zt)} | {ne} | {k['function']} | {k['implemented']} | {k['native']} | {k['todo']} | {len(missing)} |")
  for x in ('function','implemented','native','todo'): tot[x]+=k[x]
  tot['zh']+=len(zt); tot['en']+=ne; tot['miss']+=len(missing)
out.append(f"| **合计** | {tot['zh']} | {tot['en']} | {tot['function']} | {tot['implemented']} | {tot['native']} | {tot['todo']} | {tot['miss']} |")
out+=['',f'函数声明在 src 中存在性校验失败：{bad or "无"}','','## 节点 → 标识符 对照表','','| 页面 | 中文节点名 | 英文节点名 | 方式 | 标识符 / 原生语法 |','|---|---|---|---|---|']
KN={'function':'声明','implemented':'实现','native':'原生语法','todo':'TODO'}
for c in cov: out.append(f"| {c['page']} | {c['zh']} | {c['en']} | {KN[c['kind']]} | `{c['target']}` |")
open(os.path.join(R,'COVERAGE.md'),'w').write('\n'.join(out)+'\n')
print('\n'.join(out[:11])); print('bad',bad)
