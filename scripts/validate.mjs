import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {topics} from './topics-2-4.mjs';
import {parseBank} from './build-topics.mjs';

const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const expectedDurations={'2-cast':519.072,'2-eus':567.648,'3-cast':497.832,'3-eus':541.560,'4-cast':520.176,'4-eus':585.720};
let total=0;
for(const topic of topics)for(const lang of ['cast','eus']){
 const id=String(topic.id).padStart(2,'0'),html=read(`test-historia-u1-t${id}-${lang}.html`);
 const levels=parseBank(read(`scripts/questions-t${id}.txt`),lang);
 const stored=new Map();
 const context=vm.createContext({
  shuffle:a=>[...a].sort(()=>Math.random()-.5),
  localStorage:{getItem:key=>stored.get(key)??null,setItem:(key,val)=>stored.set(key,String(val)),removeItem:key=>stored.delete(key)}
 });
 new vm.Script(html.slice(html.indexOf('function lengthType'),html.indexOf('function start'))).runInContext(context);
 const emitted=vm.createContext({});
 new vm.Script(read(`preguntas-historia-u1-t${id}-${lang}.js`)+`;globalThis.actual=NIVELES_T${id}${lang==='eus'?'_EUS':''};`).runInContext(emitted);
 assert.equal(JSON.stringify(emitted.actual),JSON.stringify(levels));
 for(const level of levels){
  assert.equal(level.preguntas.length,20);
  for(const q of level.preguntas){assert.equal(q.length,4);assert.equal(q[1].length,4);assert.ok(q[3].length>25);assert.ok(q[2]>=0&&q[2]<4);}
  assert.deepEqual([0,1,2,3].map(i=>level.preguntas.filter(q=>q[2]===i).length),[5,5,5,5]);
  for(let round=0;round<20;round++){
   context.level=level;
   const first=vm.runInContext('selectQuestions(level)',context),second=vm.runInContext('selectQuestions(level)',context);
   assert.equal(first.length,10);assert.equal(second.length,10);
   assert.equal(new Set([...first,...second].map(q=>q[0])).size,20);
   const max=level.preguntas.filter(q=>q[1][q[2]].length===Math.max(...q[1].map(s=>s.length))).length;
   assert.ok(max<16,`Length bias ${id}/${lang}/L${level.nivel}: ${max}`);
  }
 }
 const info=JSON.parse(execFileSync('ffprobe',['-v','error','-show_entries','format=duration,size:stream=codec_name','-of','json',path.join(root,topic[lang].file)],{encoding:'utf8'}));
 assert.ok(Math.abs(Number(info.format.duration)-expectedDurations[`${topic.id}-${lang}`])<1,'Audio length changed/truncated');
 assert.equal(info.streams[0].codec_name,'mp3');
 execFileSync('ffmpeg',['-v','error','-i',path.join(root,topic[lang].file),'-f','null','-'],{stdio:['ignore','ignore','pipe']});
 total+=100;
 console.log(`PASS T${id} ${lang}: 100 preguntas, 10+10 sin repetir, MP3 íntegro`);
}

// Parse HTML and RSS using the standard library, including all local resource links.
execFileSync('python',['-c',String.raw`
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET
from urllib.parse import urlsplit
import subprocess

root=Path('.')
class Check(HTMLParser):
 def __init__(self):
  super().__init__(); self.stack=[]; self.ids=set(); self.refs=[]; self.counts={}; self.sections=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:
   assert a['id'] not in self.ids, a['id']; self.ids.add(a['id'])
  if tag=='li' and self.stack and self.stack[-1][0]=='ol':
   section='solutions' if any(x[1].get('id')=='solutions' for x in self.stack) else 'worksheet'
   self.counts[section]=self.counts.get(section,0)+1
  if tag in ('a','audio','script','img','link'):
   ref=a.get('href') or a.get('src')
   if ref:self.refs.append(ref)
  if tag not in ('meta','link','img','input','br','hr','source','wbr','area','base','embed','param','track','col'):
   self.stack.append((tag,a))
 def handle_endtag(self,tag):
  assert self.stack and self.stack[-1][0]==tag, (tag,self.stack[-3:])
  self.stack.pop()

for f in root.glob('*.html'):
 p=Check(); p.feed(f.read_text()); assert not p.stack, f
 for ref in p.refs:
  url=urlsplit(ref)
  if not url.scheme and url.path and not url.path.startswith('/'):
   assert (root/url.path).is_file(),(f,ref)
  if not url.scheme and url.path=='index.html' and url.fragment:
   assert ('id="'+url.fragment+'"') in (root/'index.html').read_text(),(f,ref)
 if f.name.startswith('ficha-') and '-t01-' not in f.name:
  assert p.counts=={'worksheet':25,'solutions':25}, (f,p.counts)

ns={'itunes':'http://www.itunes.com/dtds/podcast-1.0.dtd'}
channel=ET.parse('feed.xml').getroot().find('channel');items=channel.findall('item')
assert len(items)==8
assert len({i.findtext('guid') for i in items})==8
assert {(i.findtext('itunes:season',namespaces=ns),i.findtext('itunes:episode',namespaces=ns)) for i in items}=={(str(s),str(e)) for s in (1,2) for e in range(1,5)}
old=ET.fromstring(subprocess.check_output(['git','show','HEAD:feed.xml'])).find('channel')
for original in old.findall('item'):
 guid=original.findtext('guid'); current=next(i for i in items if i.findtext('guid')==guid)
 assert ET.tostring(original).strip()==ET.tostring(current).strip(),'Changed validated T01 feed item'
for item in items:
 enclosure=item.find('enclosure');f=root/urlsplit(enclosure.attrib['url']).path.rsplit('/',1)[-1]
 assert f.stat().st_size==int(enclosure.attrib['length'])
 assert enclosure.attrib['type']=='audio/mpeg'
print('PASS HTML: enlaces, estructura, 25 actividades/soluciones; RSS: 8 episodios y T01 preservado')
`],{cwd:root,stdio:'inherit'});

const original=execFileSync('git',['show','HEAD:index.html'],{cwd:root,encoding:'utf8'});
const current=read('index.html');
for(const lang of ['castellano','euskara']){
 const id=`id="historia-${lang}-u1-t01"`;
 const block=s=>{const start=s.indexOf(id);return s.slice(start,s.indexOf('</details>',start)+10)};
 assert.equal(block(original),block(current),'Validated T01 changed');
}
for(const file of execFileSync('git',['ls-files'],{cwd:root,encoding:'utf8'}).trim().split('\n')){
 if(!/t01|^01-.*mp3$/.test(file))continue;
 assert.ok(fs.readFileSync(path.join(root,file)).equals(execFileSync('git',['show',`HEAD:${file}`],{cwd:root,maxBuffer:10_000_000})),`T01 changed: ${file}`);
}
console.log(`PASS ${total} preguntas bilingües nuevas; tema 1 validado sin modificaciones`);
