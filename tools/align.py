import json,re
exec(open('match.py').read().split('res=[]')[0].replace('from scipy.optimize import linear_sum_assignment',''))
M=json.load(open('mapping.json'));res=[]
for p in ['event','exec','flow','query','operation']:
  zc=[c for c in d[p+'.zh-cn'] if c['nodes']]; ec=[c for c in d[p+'.en-us'] if c['nodes']]
  if p=='exec':
    i=[k for k,c in enumerate(ec) if 'Cursor Collision' in c['cat']][0]; c=ec.pop(i); ec.insert(49,c)
  for ci,(z,e) in enumerate(zip(zc,ec)):
    m=M.get(f'{p}{ci}',list(range(len(z['nodes']))))
    assert sorted(m)==list(range(len(e['nodes']))),(p,ci)
    for i,j in enumerate(m):
      a,b=z['nodes'][i],e['nodes'][j]
      res.append(dict(page=p,catIdx=ci,catZh=z['cat'],catEn=e['cat'],zh=a,en=b))
      if sig(a,0)!=sig(b,1): print('SIGDIFF',p,a['title'],'|',b['title'],sig(a,0),sig(b,1))
json.dump(res,open('aligned.json','w'),ensure_ascii=False,indent=1);print(len(res))
