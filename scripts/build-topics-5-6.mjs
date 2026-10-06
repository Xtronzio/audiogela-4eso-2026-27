import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {topics} from './topics-5-6.mjs';

const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const write=(name,text)=>fs.writeFileSync(path.join(root,name),text);
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const names={
cast:[['Conceptos básicos','Reconocer términos, datos y protagonistas.'],['Comprensión','Identificar conceptos en situaciones concretas.'],['Relaciones y procesos','Conectar causas, fases y consecuencias.'],['Análisis histórico','Interpretar fuentes, datos y afirmaciones.'],['Competencial avanzado','Aplicar, evaluar y construir explicaciones.']],
eus:[['Oinarrizko kontzeptuak','Terminoak, datuak eta protagonistak ezagutzea.'],['Ulermena','Kontzeptuak egoera zehatzetan identifikatzea.'],['Loturak eta prozesuak','Kausak, faseak eta ondorioak lotzea.'],['Analisi historikoa','Iturriak, datuak eta baieztapenak interpretatzea.'],['Gaitasun-maila aurreratua','Azalpenak aplikatu, ebaluatu eta eraikitzea.']]
};

// Equivalent, more precise labels balance short/medium/long correct answers.
// No option is padded with meaningless text and the correct meaning is unchanged.
const labelRefinements = new Map([
 ['La máquina de vapor~Lurrun-makina','La máquina de vapor ya existente~Lehendik zegoen lurrun-makina'],
 ['Matthew Boulton~Matthew Boulton','Matthew Boulton, socio de Watt~Matthew Boulton, Watten bazkidea'],
 ['El textil~Ehungintza','El textil y su rama algodonera~Ehungintza eta kotoizko adarra'],
 ['John Kay~John Kayri','John Kay, innovador del tejido~John Kayri, ehuntzearen berritzaileari'],
 ['Hilaba varios hilos~Hainbat hari iruten zituen','Hilaba varios hilos a la vez~Hainbat hari aldi berean iruten zituen'],
 ['Hierro y acero~Burdina eta altzairua','Obtención y transformación de hierro y acero~Burdina eta altzairua lortzea eta eraldatzea'],
 ['Coque~Kokea','Coque derivado del carbón mineral~Ikatz mineraletik lortutako kokea'],
 ['Hierro y carbono~Burdina eta karbonoa','Aleación de hierro y carbono~Burdinaren eta karbonoaren aleazioa'],
 ['Los gremios~Gremioek','Los gremios de artesanos~Artisauen gremioek'],
 ['En un taller~Tailer batean','En su taller artesanal~Bere artisau-tailerrean'],
 ['Un comerciante~Merkatari batek','Un comerciante que coordinaba la venta~Salmenta koordinatzen zuen merkatari batek'],
 ['En su casa rural~Bere landa-etxean','En casas dispersas del medio rural~Landa-eremuko etxe sakabanatuetan'],
 ['Una remuneración~Ordainsari bat','Una remuneración por su trabajo~Lanaren truke ordainsari bat'],
 ['Uso de máquinas en la producción~Makinen erabilera ekoizpenean','Uso de máquinas en operaciones productivas~Makinen erabilera ekoizpen-eragiketetan'],
 ['Reparto de tareas especializadas~Zeregin espezializatuen banaketa','Reparto especializado de fases productivas~Ekoizpen-faseen banaketa espezializatua'],
 ['Producción repetida de unidades~Unitateen ekoizpen errepikatua','Repetir muchas unidades del mismo producto~Produktu beraren unitate asko errepikatzea'],
 ['Una antigua fábrica inglesa~Ingalaterrako fabrika zaharra','Una antigua fábrica textil en Inglaterra~Ingalaterrako ehun-fabrika zaharra'],
 ['Carreteras y canales~Errepideak eta ubideak','Carreteras y canales de comunicación~Komunikaziorako errepideak eta ubideak'],
 ['George Stephenson~George Stephenson','George Stephenson, ingeniero ferroviario~George Stephenson, trenbide-ingeniaria'],
 ['Transportar carbón~Ikatza garraiatzeko','Transportar carbón en actividades mineras~Meatzaritza-jardueretan ikatza garraiatzeko'],
 ['El pistón~Pistoia','El pistón dentro del cilindro~Zilindro barruko pistoia'],
 ['Gases de combustión~Errekuntza-gasak','Gases resultantes de la combustión~Errekuntzaren ondoriozko gasak'],
 ['Fitch y Fulton~Fitch eta Fulton','John Fitch y Robert Fulton~John Fitch eta Robert Fulton'],
 ['Concentrarse en ciertas producciones~Ekoizpen jakin batzuetan kontzentratzea','Concentrarse en producciones adecuadas a sus recursos~Baliabideetara egokitutako ekoizpenetan espezializatzea'],
 ['Mejoras iguales para todos los habitantes~Biztanle guztientzat hobekuntza berdinak','Mejoras iguales para todos~Guztientzat hobekuntza berdina'],
 ['Ampliaron intercambios bajo relaciones desiguales~Trukeak zabaldu zituzten harreman desberdinen pean','Intercambios coloniales desiguales~Kolonia-truke desberdinak'],
 ['El vapor mueve pistones y mecanismos~Lurrunak pistoiak eta mekanismoak mugitzen ditu','El vapor mueve los pistones~Lurrunak pistoiak mugitzen ditu'],
 ['Mayores costes del transporte a vapor~Lurrunezko garraioaren kostu handiagoak','Mayores costes del transporte~Garraio-kostu handiagoak'],
 ['Dependencia de mercados y suministros~Merkatuen eta horniduren mendekotasuna','Dependencia exterior~Kanpo-mendekotasuna'],
 ['Más habitantes requieren abastecimiento y movilidad~Biztanle gehiagok hornidura eta mugikortasuna behar dituzte','Más necesidades de abastecimiento~Hornidura-behar handiagoak'],
 ['Dividir la reducción de 6 entre 12~6ko murrizketa 12rekin zatituz','6/12 × 100 = 50 %~6/12 × 100 = % 50']
]);

export function parseBank(text,lang){
 const column=lang==='cast'?0:1;
 const pair=text=>{const parts=text.split('~');if(parts.length!==2||parts.some(s=>!s.trim()))throw Error('Invalid bilingual pair: '+text);return parts[column].trim();};
 const groups=Array.from({length:5},()=>[]);let section;
 for(const line of text.split('\n')){
  if(!line.trim()||line.startsWith('# '))continue;
  if(line.startsWith('## ')){section=line.slice(3);continue;}
  const fields=line.split('|').map(s=>s.trim());
  if(fields.length!==6)throw Error('Invalid question fields: '+line);
  const questions=fields[0].split('^').map(pair);
  const choices=fields.slice(1,5);
  choices[0]=labelRefinements.get(choices[0])||choices[0];
  const options=choices.map(pair),explanation=pair(fields[5]);
  if(new Set(options).size!==4)throw Error('Duplicate options: '+line);
  const positions=section==='1+2'?[0,1]:[Number(section)-1];
  if(positions.length!==questions.length)throw Error('Invalid stems: '+line);
  positions.forEach((level,i)=>{
   const rotate=groups[level].length%4;
   const rotated=options.slice(rotate).concat(options.slice(0,rotate));
   groups[level].push([questions[i],rotated,(4-rotate)%4,explanation]);
  });
 }
 if(groups.some(g=>g.length!==20))throw Error('Expected 20 questions/level, got '+groups.map(g=>g.length));
 if(new Set(groups.flat().map(q=>q[0])).size!==100)throw Error('Duplicate question stems');
 return groups.map((preguntas,i)=>({nivel:i+1,nombre:names[lang][i][0],descripcion:names[lang][i][1],preguntas}));
}

function duration(filename){
 const seconds=Math.round(Number(execFileSync('ffprobe',['-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',path.join(root,filename)],{encoding:'utf8'})));
 return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
}

function quiz(topic,lang,levels){
 const id=String(topic.id).padStart(2,'0'),part=topic[lang];
 const oldTitle=lang==='cast'?'Las revoluciones que impulsaron la industrialización':'Industrializazioa bultzatu zuten iraultzak';
 const constant=`NIVELES_T${id}${lang==='eus'?'_EUS':''}`;
 write(`preguntas-historia-u1-t${id}-${lang}.js`,`const ${constant} = ${JSON.stringify(levels,null,2)};\n`);
 let html=read(`test-historia-u1-t01-${lang}.html`).replaceAll('t01',`t${id}`).replaceAll('T01',`T${id}`).replaceAll(oldTitle,escape(part.title)).replaceAll('HISTORIA ·','HISTORIA · GIZA ·');
 html=lang==='cast'?html.replace('UNIDAD 1 · TEMA 1',`UNIDAD 1 · TEMA ${topic.id}`):html.replace('1. UNITATEA · 1. GAIA',`1. UNITATEA · ${topic.id}. GAIA`);
 // Apply the validated EUS length-balanced 10+10 selector to both languages.
 if(lang==='cast'){
  const eus=read('test-historia-u1-t01-eus.html');
  const selection=eus.slice(eus.indexOf('function lengthType'),eus.indexOf('function start')).replaceAll('t01',`t${id}`).replaceAll(':eus:',':cast:');
  html=html.replace(/function selectQuestions[\s\S]*?(?=function start)/,selection);
 }
 write(`test-historia-u1-t${id}-${lang}.html`,html);
}

function worksheet(topic,lang,levels){
 const id=String(topic.id).padStart(2,'0'),part=topic[lang],eu=lang==='eus';
 let html=read(`ficha-historia-u1-t01-${lang}.html`).replaceAll('t01',`t${id}`).replaceAll('T01',`T${id}`).replaceAll('HISTORIA ·','HISTORIA · GIZA ·');
 const oldTitle=eu?'Industrializazioa bultzatu zuten iraultzak':'Las revoluciones que impulsaron la industrialización';
 html=html.replaceAll(oldTitle,escape(part.title));
 const indexes=[0,3,7,11,17];
 const selected=levels.flatMap(level=>indexes.map(index=>({level:level.nivel,q:level.preguntas[index]})));
 const activities=selected.map(({level,q})=>`<li><small>${eu?'Maila':'Nivel'} ${level}</small> · ${escape(q[0])}<ul>${q[1].map((option,i)=>`<li style="margin-bottom:3px">${'ABCD'[i]}. ${escape(option)}</li>`).join('')}</ul><div class="write large"></div></li>`).join('\n');
 const solutions=selected.map(({q})=>`<li><strong>${'ABCD'[q[2]]}. ${escape(q[1][q[2]])}.</strong> ${escape(q[3])}</li>`).join('\n');
 // Replace the two lists, preserving print controls and separate solution pages.
 const start=html.indexOf('<ol>'),end=html.indexOf('</ol>',start);
 html=html.slice(0,start)+'<ol>\n'+activities+'\n'+html.slice(end);
 const solStart=html.indexOf('<ol>',html.indexOf('id="solutions"')),solEnd=html.indexOf('</ol>',solStart);
 html=html.slice(0,solStart)+'<ol>\n'+solutions+'\n'+html.slice(solEnd);
 html=html.replace(/<p class="instructions">[\s\S]*?<\/p>/,`<p class="instructions">${eu?'Aukeratu erantzun zuzena eta justifikatu esaldi osoekin. 25 jarduerek bost mailak uztartzen dituzte. Erantzunak aparte daude.':'Elige la respuesta correcta y justifícala con frases completas. Las 25 actividades combinan los cinco niveles. Las soluciones están separadas.'}</p>`);
 write(`ficha-historia-u1-t${id}-${lang}.html`,html);
}

function episode(topic,lang){
 const part=topic[lang],id=String(topic.id).padStart(2,'0'),eu=lang==='eus';
 return `<details class="episode" id="historia-${eu?'euskara':'castellano'}-u1-t${id}"><summary class="row"><span class="number">T${id}</span><span class="copy"><strong>${escape(part.title)}</strong><span>${escape(part.summary)}</span></span><span class="duration">${duration(part.file)}</span><span class="chevron"></span></summary>
<div class="episode-body"><p>${escape(part.summary)}</p><audio controls preload="metadata" src="${part.file}"></audio><div class="resources"><a class="resource primary" href="test-historia-u1-t${id}-${lang}.html">${eu?'Autoebaluazio interaktiboa':'Autoevaluación interactiva'}</a><a class="resource" href="ficha-historia-u1-t${id}-${lang}.html">${eu?'Autoebaluazio inprimagarria':'Autoevaluación imprimible'}</a><a class="resource" href="guion-historia-u1-t${id}-${lang}.html">${eu?'Audioaren testua':'Texto del audio'}</a><span class="note">${eu?'Bost maila · 20 galdera maila bakoitzean · 10+10 txandaketa · 25 jarduerako fitxa konbinatua.':'Cinco niveles · 20 preguntas por nivel · rotación 10+10 · ficha combinada de 25 actividades.'}</span></div></div></details>`;
}

function transcript(topic,lang){
 const id=String(topic.id).padStart(2,'0'),eu=lang==='eus',part=topic[lang];
 const template=read(`ficha-historia-u1-t01-${lang}.html`);
 const head=template.slice(0,template.indexOf('</head>')).replaceAll('Autoevaluación imprimible','Texto del audio').replaceAll('Autoebaluazio inprimagarria','Audioaren testua').replaceAll('T01',`T${id}`);
 const paragraphs=part.narration.split(/\n\s*\n/).map(p=>`<p style="line-height:1.7">${escape(p.trim())}</p>`).join('\n');
 write(`guion-historia-u1-t${id}-${lang}.html`,head+`</head><body><nav class="toolbar"><a class="back" href="index.html#historia-${eu?'euskara':'castellano'}-u1-t${id}">← AUDIO GELA</a><button onclick="window.print()">${eu?'Testua inprimatu':'Imprimir texto'}</button></nav><main class="page"><header><div class="brand">AUDIO GELA · HISTORIA · GIZA · 4.º ESO · ${lang.toUpperCase()}</div><h1>${escape(part.title)}</h1></header>${paragraphs}</main></body></html>\n`);
}

function catalogue(){
 let html=read('index.html');
 html=html.replace(/\n?<!-- TOPICS-5-6-(CAST|EUS)-START -->[\s\S]*?<!-- TOPICS-5-6-\1-END -->\n?/g,'');
 for(const lang of ['cast','eus']){
  const tag=lang.toUpperCase(),marker=`<!-- TOPICS-${tag}-END -->`;
  if(!html.includes(marker))throw Error('Existing topics 2–4 missing');
  const insert=`\n<!-- TOPICS-5-6-${tag}-START -->\n${topics.map(t=>episode(t,lang)).join('\n')}\n<!-- TOPICS-5-6-${tag}-END -->\n`;
  html=html.replace(marker,marker+insert);
 }
 html=html.replaceAll('4 temas disponibles','6 temas disponibles').replaceAll('4 episodios disponibles','6 episodios disponibles').replaceAll('4 atal erabilgarri','6 atal erabilgarri').replaceAll('Temas 1–4','Temas 1–6').replaceAll('1.–4. gaiak','1.–6. gaiak');
 write('index.html',html);
}

function feed(){
 let xml=read('feed.xml');
 xml=xml.replace(/\s*<!-- TOPICS-5-6-FEED-START -->[\s\S]*?<!-- TOPICS-5-6-FEED-END -->/,'');
 const base='https://xtronzio.github.io/audiogela-4eso-2026-27/';
 const date=new Date().toUTCString();
 const items=topics.flatMap(topic=>['cast','eus'].map(lang=>{
  const part=topic[lang],id=String(topic.id).padStart(2,'0'),len=fs.statSync(path.join(root,part.file)).size;
  return `<item><title>HISTORIA · GIZA · ${lang.toUpperCase()} · U1 · T${id} — ${escape(part.title)}</title><link>${base}index.html#historia-${lang==='eus'?'euskara':'castellano'}-u1-t${id}</link><description>${escape(part.summary)}</description><content:encoded><![CDATA[<p>${escape(part.summary)}</p><p><a href="${base}test-historia-u1-t${id}-${lang}.html">${lang==='eus'?'Autoebaluazioa':'Autoevaluación'}</a></p>]]></content:encoded><guid isPermaLink="false">audiogela-4eso-2026-27-historia-${lang}-u1-t${id}</guid><pubDate>${date}</pubDate><enclosure url="${base}${part.file}" length="${len}" type="audio/mpeg"/><itunes:duration>${duration(part.file)}</itunes:duration><itunes:season>${lang==='cast'?1:2}</itunes:season><itunes:episode>${topic.id}</itunes:episode><itunes:episodeType>full</itunes:episodeType><itunes:explicit>false</itunes:explicit></item>`;
 }));
 xml=xml.replace(/( · GIZA){2,}/g,' · GIZA');
 xml=xml.replace(/<lastBuildDate>.*?<\/lastBuildDate>\s*/,'');
 xml=xml.replace('<channel>',`<channel>\n<lastBuildDate>${date}</lastBuildDate>\n<!-- TOPICS-5-6-FEED-START -->\n${items.join('\n')}\n<!-- TOPICS-5-6-FEED-END -->`);
 write('feed.xml',xml);
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 for(const topic of topics)for(const lang of ['cast','eus']){
  const levels=parseBank(read(`scripts/questions-t${String(topic.id).padStart(2,'0')}.txt`),lang);
  quiz(topic,lang,levels);worksheet(topic,lang,levels);transcript(topic,lang);
  console.log(`T${topic.id} ${lang}: ${levels.map(l=>l.preguntas.length).join('+')} preguntas; ${duration(topic[lang].file)}`);
 }
 catalogue();feed();
}

