"""Generate T05/T06 only, using Spanish and Spanish multilingual voices."""
import asyncio
import json
import os
import ssl
import subprocess
import tempfile
from pathlib import Path
import edge_tts

ROOT = Path(__file__).resolve().parents[1]
topics = json.loads(subprocess.check_output([
    'node', '--input-type=module', '-e',
    "import {topics} from './scripts/topics-5-6.mjs'; process.stdout.write(JSON.stringify(topics));"
], cwd=ROOT))
if os.environ.get('CODEX_PROXY_CERT'):
    edge_tts.communicate._SSL_CTX = ssl.create_default_context(cafile=os.environ['CODEX_PROXY_CERT'])
proxy = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy')
semaphore = asyncio.Semaphore(2)

async def generate(topic, lang):
    part = topic[lang]
    output = ROOT / part['file']
    if output.exists() and output.stat().st_size > 1000:
        print('Preserved', output.name, flush=True)
        return
    voice = 'es-ES-ElviraNeural' if lang == 'cast' else 'es-ES-XimenaNeural'
    async with semaphore:
        with tempfile.TemporaryDirectory(prefix='giza-audio-') as tmp:
            raw = Path(tmp) / 'raw.mp3'
            await edge_tts.Communicate(part['narration'], voice=voice, rate='-3%', proxy=proxy,
                                      connect_timeout=30, receive_timeout=120).save(str(raw))
            subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(raw),
                '-ac','1','-b:a','48k','-metadata',f'title={part["title"]}',
                '-metadata','artist=AUDIO GELA','-metadata',f'album=GIZA · 4.º ESO · {lang.upper()}',
                str(output)], check=True)
        duration = subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration',
            '-of','default=noprint_wrappers=1:nokey=1',str(output)]).decode().strip()
        print(output.name, duration, output.stat().st_size, voice, flush=True)

async def main():
    await asyncio.gather(*(generate(t, lang) for t in topics for lang in ('cast','eus')))

if __name__ == '__main__':
    asyncio.run(main())
