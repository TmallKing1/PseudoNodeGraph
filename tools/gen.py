# 生成器：由 nodegraph-src/aligned.json 生成 TypeScript 声明
import json,re,os,collections
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A=json.load(open(os.path.join(ROOT,'tools','aligned.json')))
OPS=json.load(open(os.path.join(ROOT,'tools','op_impls.json'))) if os.path.exists(os.path.join(ROOT,'tools','op_impls.json')) else {}
FIX={'No. of Tasks Configured':'Set Task Count','Se nd':'Send','Slo t':'Slot','Valu e':'Value','Creatio n':'Creation','Emtity':'Entity','Paraneter':'Parameter'}
PAGE={'event':('events','事件节点','mhn7ko01v3yw'),'exec':('execution','执行节点','mhw66orrrfkm'),'flow':('flow','流程控制节点','mhe8yn9bysd6'),'query':('query','查询节点','mhwbqlrw655q'),'operation':('operation','运算节点','mhnd4l069tk0')}
# 原生语法映射（不生成函数）
NATIVE={
 ('flow','双分支'):'if (cond) { ... } else { ... }',
 ('flow','多分支'):'switch (expr) { case 1: ...; default: ... }（仅整数或字符串）',
 ('exec','有限循环'):'for (let i = start; i <= end; i++) { ... }（闭区间，见文档）',
 ('exec','跳出循环'):'break;',
 ('exec','列表迭代循环'):'for (const item of list) { ... }',
 ('exec','设置局部变量'):'let x: T = value; x = newValue;',
 ('query','获取局部变量'):'let x: T = initial;（读取直接使用变量 x）',
 ('operation','拼装列表'):'const list: T[] = [a, b, c];',
 ('operation','拼装结构体'):'const s: MyStruct = { field1: v1, field2: v2 };（结构体用 interface 声明）',
 ('operation','拆分结构体'):'const { field1, field2 } = s;',
 ('exec','修改结构体'):'s.field1 = v1;',
}
TYPE={'实体':'Entity','整数':'int','浮点数':'float','布尔值':'bool','三维向量':'Vec3','GUID':'GUID','配置ID':'ConfigId','字符串':'str','整数列表':'int[]','实体列表':'Entity[]','阵营':'Faction','字符串列表':'str[]','元件ID':'PrefabId','配置ID列表':'ConfigId[]','自定义变量快照':'CustomVariableSnapshot','局部变量':'LocalVariable','浮点数列表':'float[]','GUID列表':'GUID[]'}
ENUMMAP=[ # (zh param name, desc keyword or None, enum type)
 ('实体类型',None,'EntityType'),('条件：比较类型',None,'ComparisonType'),('原因','倒下','DownReason'),('元素类型',None,'ElementType'),
 ('移除原因',None,'UnitStatusRemovalReason'),('元素反应类型',None,'ElementalReactionType'),('完成原因',None,'DeckSelectorCompletionReason'),
 ('变化原因',None,'InventoryItemChangeReason'),('排序方式',None,'SortOrder'),('颜色叠加类型',None,'ColorBlendType'),('颜色叠加模式',None,'ColorBlendType'),
 ('填充材质类型',None,'FillMaterialType'),('材质',None,'FillMaterialType'),('伤害跳字类型',None,'DamagePopUpType'),('移动方式',None,'FixedPointMovementMode'),
 ('参数类型',None,'FixedPointParamType'),('跟随坐标系',None,'FollowCoordinateSystem'),('跟随类型',None,'FollowType'),('施加结果',None,'UnitStatusApplyResult'),
 ('移除方式',None,'UnitStatusRemovalMethod'),('已有技能处理',None,'ExistingSkillHandling'),('显示状态',None,'UIControlDisplayStatus'),
 ('技能槽位',None,'SkillSlot'),('角色技能槽位',None,'SkillSlot'),('指定槽位',None,'SkillSlot'),('原槽位技能处理',None,'OriginalSlotSkillHandling'),
 ('衰减方式',None,'SoundAttenuationMode'),('刷新方式',None,'DeckSelectorRefreshMode'),('结算状态','逃跑','RankSettlementStatus'),('结算状态',None,'SettlementStatus'),
 ('掉落类型',None,'LootType'),('规则类型',None,'ScanTagRuleType'),('游玩方式',None,'GameplayMode'),('当前受打断状态',None,'InterruptStatus'),
 ('输入设备类型',None,'InputDeviceType'),('取整方式',None,'RoundingMode')]
SIGOV={
 'assemblyDictionary':('<K extends DictKey, V extends NodeValue>','...pairs: [key: K, value: V][]','Dict<K, V>'),
}
ZHNAME={'是否暴击':'isCrit','能力单元所属实体':'abilityUnitOwnerEntity','受击等级':'hitLevel','发起者实体':'initiatorEntity'}
# 官方英文名变更时保留已有标识符（避免运算节点实现键失效）
ID_OVERRIDE={('operation','余运算'):'moduloOperation'}
SIGOV['sendSignal']=('<K extends SignalName>','signalName: K, params: SignalParams<K>','void')
SIGOV['sendClientScriptedSignal']=('<K extends SignalName>','signalName: K, targetPlayer: Entity, params: SignalParams<K>','void')
SIGBASE=['','—— 信号语义（创作者补充）——','信号在编辑器【服务器信号管理器】中定义：每个信号有信号名和有序参数列表（参数名+类型），信号名与参数列表一一对应。','在节点上选择信号名后，节点会追加该信号的参数引脚。伪代码中用 SignalRegistry 声明信号（见 core/signals.ts / README），信号名与参数在类型检查时校验。']
SEM={
 'sendSignal':SIGBASE+['【发送信号】入参：信号名 + 该信号的参数。遍历所有实体，触发所有监听同名信号的【监听信号】节点。','客户端 Lua 脚本无法接收此信号（需用【发送客户端脚本信号】）。','@param signalName 信号名（编辑器下拉选择，必须是 SignalRegistry 中声明的信号）','@param params 该信号的参数（按信号定义，字段名=参数名）'],
 'sendClientScriptedSignal':SIGBASE+['【发送客户端脚本信号】入参：信号名、目标玩家（玩家实体）+ 该信号的参数。','发送到目标玩家客户端的 Lua 脚本，客户端用 script:RegisterServerSignalHandler 接收。','@param signalName 信号名（必须是 SignalRegistry 中声明的信号）','@param targetPlayer 目标玩家（玩家实体）','@param params 该信号的参数'],
 'onMonitorSignal':SIGBASE+['【监听信号】参数：信号名；出参：事件源实体、事件源GUID、信号来源实体 + 该信号的参数（ev.params）。只响应完全同名的信号。','可由以下方式触发：客户端节点图「向服务器节点图发送信号」、客户端 Lua ServerSignal:SendSignal()、服务端【发送信号】。','@param signalName 要监听的信号名（必须是 SignalRegistry 中声明的信号）'],
}
RANK_NODES={'设置玩家段位变化分数','获取玩家段位变化分数'}
def enumType(zhname,desc,title):
  for n,k,t in ENUMMAP:
    if n==zhname and (k is None or (k in desc)):
      if t=='SettlementStatus' and any(r in title for r in RANK_NODES): return 'RankSettlementStatus'
      return t
  return 'OpaqueEnum<"%s">'%zhname
def fix(s):
  for a,b in FIX.items(): s=s.replace(a,b)
  return s
def words(s):
  s=fix(s); s=s.replace('&',' and ').replace('π','')
  s=re.sub(r"'s\b",'s',s); s=re.sub(r'\(UTC\+0\)','UTC',s)
  return [w for w in re.split(r'[^A-Za-z0-9]+',s) if w]
def camel(s):
  w=words(s)
  if not w: return ''
  r=w[0][0].lower()+w[0][1:] if not w[0].isupper() or len(w[0])<=1 else w[0].lower()
  r=r if not r[0].isdigit() else '_'+r
  return r+''.join(x[0].upper()+x[1:] for x in w[1:])
def pascal(s):
  c=camel(s).lstrip('_'); return c[0].upper()+c[1:]
RESERVED={'delete','new','class','function','default','switch','case','for','if','else','return','var','let','const','in','of','enum','type','interface','this','break','continue','do','while','with','yield','void','typeof','instanceof','export','import','super','throw','try','catch','finally','true','false','null','debugger','extends','package','private','protected','public','static','implements','await','arguments','eval'}
def title(t): return re.sub(r'^\s*\d+\s*\.\s*','',t).strip()
def clean_text(lines):
  out=[]
  for l in lines:
    if l in('节点功能','节点参数','Node Functions','Node Parameters','Node Function','Node Parameter') or l.startswith('[TABLE'): continue
    out.append(l)
  return out
def esc(s): return s.replace('*/','*\\/')
KM={'入参':'in','出参':'out','Input Parameter':'in','Output Parameter':'out','Input Paraneter':'in'}
def rows(x):
  z=x['zh']['tables'][0][1:]; e=x['en']['tables'][0][1:]
  # 按(方向,同方向序号)对齐
  ek=collections.defaultdict(list)
  for r in e: ek[KM.get(r[0],r[0])].append(r)
  cnt=collections.Counter(); res=[]
  for r in z:
    k=KM.get(r[0],'none'); i=cnt[k]; cnt[k]+=1
    er=ek[k][i] if i<len(ek[k]) else None
    res.append(dict(kind=k,zh=r[1],ztype=r[2],zdesc=r[3] if len(r)>3 else '',en=er[1] if er else None,edesc=er[3] if er and len(er)>3 else ''))
  return res
def tsType(r,x,ctx):
  t=r['ztype']; zt=title(x['zh']['title'])
  if t=='枚举': return enumType(r['zh'],r['zdesc'],zt)
  if t=='泛型':
    nm=r['zh']
    if '字典' in nm: ctx['dict']=1; return 'Dict<K, V>'
    if ctx['dict']:
      if '键' in nm and '列表' in nm: return 'K[]'
      if '值' in nm and '列表' in nm: return 'V[]'
      if '键' in nm: return 'K'
      if '值' in nm or nm in('结果',): return 'V'
    if '列表' in nm: ctx['T']=1; return 'T[]'
    ctx['T']=1; return 'T'
  if t=='字典': ctx['dict']=1; return 'Dict<K, V>'
  if t=='': return 'unknown'
  return TYPE.get(t,'unknown /* %s */'%t)
STATS=collections.Counter(); COVER=[]; NAMES=set(); TODO=[]
def uniq(n):
  b=n;i=2
  while n in NAMES: n=f'{b}{i}';i+=1
  NAMES.add(n); return n
def pname(r,used,i):
  n=camel(r['en']) if r['en'] else ZHNAME.get(r['zh'],'')
  if not n:
    n='abcdef'[i] if not r['zh'] else 'param'+str(i)
    if r['zh']: TODO.append(('参数缺少英文名',r['zh']))
  elif not r['en'] and r['zh']: TODO.append(('参数缺少英文名（已按中文意译命名）',r['zh'],n))
  if n in RESERVED: n=n+'_'
  b=n;j=2
  while n in used: n=f'{b}{j}';j+=1
  used.add(n); return n
def doc(lines,indent=''):
  out=[indent+'/**']
  for l in lines:
    for s in str(l).split('\n'): out.append(indent+' * '+esc(s) if s else indent+' *')
  out.append(indent+' */'); return '\n'.join(out)
def nm_pre(x): return camel(fix(title(x['en']['title'])))
def gen_node(x):
  p=x['page']; zt=title(x['zh']['title']); et=fix(title(x['en']['title']))
  key=(p,zt)
  if key in NATIVE:
    COVER.append(dict(page=p,zh=zt,en=et,kind='native',target=NATIVE[key])); return None
  R=rows(x); ctx={'dict':int(any('字典' in r['zh'] and r['ztype'] in('泛型','字典') for r in R)),'T':0}
  for r in R: r['ts']=tsType(r,x,ctx)
  ins=[r for r in R if r['kind']=='in']; outs=[r for r in R if r['kind']=='out']
  # 泛型字典 K,V 声明
  tps=[]
  if ctx['dict'] or any(r['ts'] in('K','V','K[]','V[]') for r in R): tps+=['K extends DictKey = DictKey','V extends NodeValue = NodeValue']
  if ctx['T'] or any('T' == r['ts'].rstrip('[]') for r in R):
    tps.append('T extends Num = Num' if (p=='operation' and 'Math' in x['catEn']) else 'T extends NodeValue = NodeValue')
  tp=('<'+', '.join(tps)+'>') if tps else ''
  zhText=clean_text(x['zh']['text']); enText=clean_text(x['en']['text'])
  head=[f'【{zt}】 {et}',f'分类：{PAGE[p][1]} / {x["catZh"]}（{fix(x["catEn"])}）','']+zhText
  if enText: head+=['',"@en "+enText[0]]
  used=set(); parts=[]
  for i,r in enumerate(ins):
    r['name']=pname(r,used,i)
  ou=set()
  for i,r in enumerate(outs): r['name']=pname(r,ou,i)
  def pdoc(r): return f'{r["zdesc"] or r["zh"]}（{r["zh"]}：{r["ztype"] or "未标注"}）'
  if any(r['ts']=='str' for r in R): head.append('注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。')
  for r in ins: head.append(f'@param {r["name"]} {pdoc(r)}')
  if nm_pre(x) in SEM:
    head=[h for h in head if not h.startswith('@param targetPlayer')]+SEM[nm_pre(x)]
  if p=='event':
    nm=uniq('on'+pascal(re.sub(r'^When (the )?','',et,flags=re.I)))
    ev=pascal(re.sub(r'^When (the )?','',et,flags=re.I))+'Event'
    ev=uniq(ev)
    lines=[]
    if nm=='onMonitorSignal': tps=['K extends SignalName = SignalName']; tp='<'+tps[0]+'>'
    lines.append(doc([f'【{zt}】事件的出参 / Output parameters of "{et}"']))
    lines.append(f'export interface {ev}{tp} {{')
    for r in outs:
      lines.append(doc([pdoc(r)],'  ')); lines.append(f'  readonly {r["name"]}: {r["ts"]};')
    if nm=='onMonitorSignal':
      lines.append(doc(['信号名'],'  ')); lines.append('  readonly signalName: K;')
      lines.append(doc(['该信号的参数（选择信号名后追加的出参引脚，字段名=参数名）'],'  ')); lines.append('  readonly params: SignalParams<K>;')
    lines.append('}')
    if nm=='onMonitorSignal': ins=[dict(name='signalName',ts='K')]+ins
    args=[f'{r["name"]}: {r["ts"]}' for r in ins]+[f'handler: (ev: {ev}{"<"+",".join(t.split()[0] for t in tps)+">" if tps else ""}) => void']
    head.append('@param handler 事件触发时调用，参数为该事件节点的全部出参')
    lines.append(doc(head)); lines.append(f'export declare function {nm}{tp}({", ".join(args)}): void;')
    COVER.append(dict(page=p,zh=zt,en=et,kind='function',target=nm)); return '\n'.join(lines)
  nm=uniq(ID_OVERRIDE.get((p,zt)) or camel(et))
  if nm in RESERVED: nm=uniq(nm+'Node')
  pre=[]
  if len(outs)==0: ret='void'
  elif len(outs)==1:
    ret=outs[0]['ts']; head.append(f'@returns {pdoc(outs[0])}')
  else:
    rt=uniq(pascal(et)+'Result')
    pre.append(doc([f'【{zt}】的多个出参 / Outputs of "{et}"']))
    pre.append(f'export interface {rt}{tp} {{')
    for r in outs: pre.append(doc([pdoc(r)],'  ')); pre.append(f'  readonly {r["name"]}: {r["ts"]};')
    pre.append('}'); ret=rt+('<'+', '.join(t.split()[0] for t in tps)+'>' if tps else '')
    head.append(f'@returns {rt}（多出参，见接口字段）')
  if nm in SIGOV: tp,ins_s,ret=SIGOV[nm]
  else: ins_s=", ".join(r["name"]+": "+r["ts"] for r in ins)
  sig=f'{nm}{tp}({ins_s}): {ret}'
  if nm=='dataTypeConversion':
    head.append('@param to （伪代码扩展）目标类型标签：编辑器中为输出引脚选择的类型')
    hand=open(os.path.join(ROOT,'tools','hand','dataTypeConversion.ts')).read()
    COVER.append(dict(page=p,zh=zt,en=et,kind='implemented',target=nm,sig='dataTypeConversion(input, to)'))
    d=doc(head); d=d[:d.rindex(' */')]
    return hand.replace('/**\n * 数据类型转换 —— 允许',d+' *\n * 允许')
  impl=OPS.get(nm) if p in('operation','query') else None
  code='\n'.join(pre+[doc(head)])+'\n'
  if impl is not None: code+=f'export function {sig} {{\n'+'\n'.join('  '+l for l in impl.split('\n'))+'\n}'
  else: code+=f'export declare function {sig};'
  COVER.append(dict(page=p,zh=zt,en=et,kind='implemented' if impl is not None else 'function',target=nm,sig=sig))
  return code
files=collections.OrderedDict()
for x in A:
  d,_,_=PAGE[x['page']]
  slug='%02d-%s'%(x['catIdx']+1,camel(re.sub(r'^[IVXLC]+\.\s*','',fix(x['catEn']))).replace('_',''))
  files.setdefault((d,slug,x['catZh'],fix(x['catEn'])),[]).append(x)
idx=[]
for (d,slug,cz,ce),xs in files.items():
  body=[gen_node(x) for x in xs]; body=[b for b in body if b]
  if not body: continue
  path=os.path.join(ROOT,'src',d,slug+'.ts'); os.makedirs(os.path.dirname(path),exist_ok=True)
  hdr=f'// 自动生成：{PAGE[xs[0]["page"]][1]} / {cz}（{ce}）\n// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/{PAGE[xs[0]["page"]][2]}\n'
  imp="import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';\nimport type * as E from '../core/enums';\nimport type { SignalName, SignalParams } from '../core/signals';\n"
  src='\n\n'.join(body)
  # 枚举加前缀
  for n,k,t in ENUMMAP: src=re.sub(r'(?<![\w.])'+t+r'\b(?!Event|Result)', 'E.'+t, src)
  src=src.replace('E.E.','E.')
  open(path,'w').write(hdr+'/* eslint-disable */\n'+imp+'\n'+src+'\n')
  idx.append(f"export * from './{d}/{slug}';")
open(os.path.join(ROOT,'src','index.ts'),'w').write("export * from './core/types';\nexport * from './core/enums';\nexport * from './core/signals';\nexport * from './core/variables';\nexport * from './core/composite';\n"+'\n'.join(idx)+'\n')
json.dump(COVER,open(os.path.join(ROOT,'coverage.json'),'w'),ensure_ascii=False,indent=1)
json.dump(TODO,open(os.path.join(ROOT,'tools','todo_auto.json'),'w'),ensure_ascii=False,indent=1)
c=collections.Counter((x['page'],x['kind']) for x in COVER); print(c, len(COVER))
