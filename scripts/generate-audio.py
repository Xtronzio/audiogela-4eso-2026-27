"""Generate ONLY new topics, preserving the validated T01 files.

Uses the providers/voices present in the original T01 generation scripts.
TLS verification uses the workspace's configured proxy certificate.
"""
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
    "import {topics} from './scripts/topics-2-4.mjs'; process.stdout.write(JSON.stringify(topics));"
], cwd=ROOT))
if os.environ.get('CODEX_PROXY_CERT'):
    edge_tts.communicate._SSL_CTX = ssl.create_default_context(cafile=os.environ['CODEX_PROXY_CERT'])
semaphore = asyncio.Semaphore(2)

async def generate(topic, lang):
    part = topic[lang]
    output = ROOT / part['file']
    if output.exists():
        print('Preserved', output.name, flush=True)
        return
    voice = 'es-ES-ElviraNeural' if lang == 'cast' else 'en-US-EmmaMultilingualNeural'
    async with semaphore:
        with tempfile.TemporaryDirectory(prefix='giza-audio-') as tmp:
            raw = Path(tmp) / 'raw.mp3'
            await edge_tts.Communicate(part['narration'], voice=voice, rate='-3%').save(str(raw))
            subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(raw),
                '-ac','1','-b:a','48k','-metadata',f'title={part["title"]}',
                '-metadata','artist=AUDIO GELA','-metadata',f'album=GIZA · 4.º ESO · {lang.upper()}',
                str(output)], check=True)
        duration = subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration',
            '-of','default=noprint_wrappers=1:nokey=1',str(output)]).decode().strip()
        print(output.name, duration, output.stat().st_size, flush=True)

async def main():
    await asyncio.gather(*(generate(t, lang) for t in topics for lang in ('cast','eus')))

if __name__ == '__main__':
    asyncio.run(main())
