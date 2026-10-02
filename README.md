# AUDIO GELA · 4.º ESO · Curso 2026/27

Aula de audio y práctica para Historia · GIZA de 4.º ESO.

## Temas 1–4 disponibles en castellano y euskera

- T01: Las revoluciones que impulsaron la industrialización (validado por Aimar)
- T02: Sectores de la Primera Revolución Industrial
- T03: Primeras fábricas y sistema fabril
- T04: Transportes y comercio
- 8 episodios: temporada 1 CAST y temporada 2 EUS
- Autoevaluación: 5 niveles, 20 preguntas por nivel, tandas rotativas de 10 + 10
- Ficha imprimible: 25 actividades y solucionario separado
- Podcast RSS independiente para 4.º ESO

Se preservan los audios, preguntas, fichas y GUID del tema 1 validado.
Los temas 5–8 quedan pendientes del material completo del temario.

## Fuentes y contenido reproducible

Los temas 2–4 son una adaptación explicada de las fotografías aportadas:
`IMG_2499.jpeg`, `IMG_2500.jpeg`, `IMG_2505.jpeg`, `IMG_2501.jpeg` y `IMG_2502.jpeg`.
Los ejemplos hipotéticos se identifican como tales; no se presentan como cifras históricas.
Los guiones añaden resumen y examen oral, y se pueden leer desde la web.

Se contrastaron las explicaciones técnicas complementarias con:

- [Science Museum: Watt y el condensador separado](https://blog.sciencemuseum.org.uk/james-watt-and-the-separate-condenser/)
- [Science Museum: convertidor de Bessemer](https://collection.sciencemuseumgroup.org.uk/objects/co19568/original-pilot-bessemer-converter-1865)
- [Ironbridge: Darby y el coque](https://www.ironbridge.org.uk/about-us/key-figures-in-the-history-of-the-ironbridge-gorge/)

`scripts/topics-2-4.mjs` contiene los guiones. Los bancos bilingües
`scripts/questions-t02.txt` a `questions-t04.txt` contienen 100 preguntas por tema
y por idioma. Las opciones se refinan en el generador para evitar pistas por longitud.
El selector equilibra categorías de longitud y rota dos tandas de 10 sin repetir preguntas.
Cada ficha combina 5 preguntas de cada nivel con justificación y solucionario separado.

```sh
python scripts/generate-audio.py  # edge-tts, ffmpeg; no sobrescribe archivos existentes
node scripts/build-topics.mjs
node scripts/validate.mjs
```

Voces de los scripts del tema 1: CAST `es-ES-ElviraNeural`, EUS
`en-US-EmmaMultilingualNeural`. La publicación usa el mismo RSS existente,
con el tamaño real y la duración medida de cada MP3.
