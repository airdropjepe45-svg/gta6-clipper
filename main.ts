// gta6-clipper-01 entry: "GTA 6 IS REAL" — a vertical Short cut from Rockstar's
// GTA VI Launch Trailer (15 Oct 2026), rendered with ffmpeg in the build session.
// The clip itself is the entry: the trailer's freshest action run (pink nightclub,
// red sports car, police chase, dirt-bike jump, rooftop explosion, biplane with
// pink smoke over the beach), then make.fun's pitch over the trailer's end cards.
//
// This program (Node 22, standard library only, no network, deterministic) does
// one thing: it copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the house reads the video's address and checks it against YouTube.
// Nothing this program writes about the video is scored.
//
// VIDEO.json still holds the placeholder address here: replace it with the real
// public Short's address (https://www.youtube.com/shorts/<id>) before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let video;
try {
  video = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof video !== 'object' || video === null || typeof video.url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

writeFileSync(target, JSON.stringify(video));
