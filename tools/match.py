import json,re
import numpy as np
from scipy.optimize import linear_sum_assignment
d=json.load(open('nodes.raw.json'))
TM={'Entity':'实体','Emtity':'实体','Integer':'整数','Floating Point Numbers':'浮点数','Float':'浮点数','Boolean':'布尔值','Generic':'泛型','3D Vector':'三维向量','GUID':'GUID','Config ID':'配置ID','Configuration ID':'配置ID','Enumeration':'枚举','String':'字符串','Integer List':'整数列表','Entity List':'实体列表','Dictionary':'字典','Faction':'阵营','':'','String List':'字符串列表','Prefab ID':'元件ID','Config ID List':'配置ID列表','Custom Variable Snapshot':'自定义变量快照','Local Variable':'局部变量','Floating Point Number List':'浮点数列表'}
KM={'Input Parameter':'入参','Output Parameter':'出参'}
def sig(n,en):
  rows=n['tables'][0][1:]
  return [((KM.get(r[0],r[0]) if en else r[0]),(TM.get(r[2],r[2]) if en else r[2])) for r in rows]
def nums(n): return set(re.findall(r'\d+(?:\.\d+)?',' '.join(n['text'][1:])+' '.join(' '.join(r[3:]) for r in n['tables'][0][1:])))
def cost(a,b):
  sa,sb=sig(a,0),sig(b,1)
  c=0 if sa==sb else 5+abs(len(sa)-len(sb))+sum(x!=y for x,y in zip(sa,sb))
  na,nb=nums(a),nums(b); c+= len(na^nb)*0.3
  la=sum(len(t) for t in a['text']); lb=sum(len(t) for t in b['text'])
  c+= abs(np.log((lb+1)/(2.2*la+1)))
  return c
res=[]
for p in ['event','exec','flow','query','operation']:
  zc=[c for c in d[p+'.zh-cn'] if c['nodes']]; ec=[c for c in d[p+'.en-us'] if c['nodes']]
  assert len(zc)==len(ec)
  for z,e in zip(zc,ec):
    M=np.array([[cost(a,b) for b in e['nodes']] for a in z['nodes']])
    r,cidx=linear_sum_assignment(M)
    for i,j in zip(r,cidx):
      res.append(dict(page=p,catZh=z['cat'],catEn=e['cat'],zh=z['nodes'][i],en=e['nodes'][j],cost=round(float(M[i,j]),2),exact=sig(z['nodes'][i],0)==sig(e['nodes'][j],1)))
json.dump(res,open('matched.json','w'),ensure_ascii=False,indent=1)
for x in res: print(x['page'],'%5.2f'%x['cost'],'' if x['exact'] else 'SIG!',x['zh']['title'],'|',x['en']['title'])
