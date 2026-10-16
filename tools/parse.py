import json,re
from bs4 import BeautifulSoup
def txt(e): return re.sub(r'\s+',' ',e.get_text(' ')).strip()
out={}
for page in ['event','exec','flow','query','operation']:
  for lang in ['zh-cn','en-us']:
    s=BeautifulSoup(open(f'{page}.{lang}.html'),'html.parser')
    cats=[];cur=None;node=None
    for el in s.find_all(['h1','h2','h3','h4','p','table','li'],recursive=True):
      if el.find_parent('table') : continue
      if el.name=='li' : continue
      if el.name=='p' and el.find_parent('li') is None and el.find_parent(['p']) : continue
      if el.name=='h1': cur={'cat':txt(el),'nodes':[]};cats.append(cur);node=None
      elif el.name=='h2':
        if cur is None: cur={'cat':'','nodes':[]};cats.append(cur)
        node={'title':txt(el),'text':[],'tables':[],'sub':[]};cur['nodes'].append(node)
      elif node is None: continue
      elif el.name in('h3','h4'): node['text'].append('### '+txt(el))
      elif el.name=='table':
        node['tables'].append([[txt(td) for td in tr.find_all(['td','th'])] for tr in el.find_all('tr')])
        node['text'].append('[TABLE %d]'%(len(node['tables'])-1))
      else:
        t=txt(el)
        if t: node['text'].append(t)
    out[f'{page}.{lang}']=cats
json.dump(out,open('nodes.raw.json','w'),ensure_ascii=False,indent=1)
for k,v in out.items(): print(k,len(v),sum(len(c['nodes']) for c in v),[ (c['cat'],len(c['nodes'])) for c in v])
