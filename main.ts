// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: the meme picture (meme.png) is posted on X
// from a public account, and POST.json names the post's address. This program
// copies the meme picture to the output directory as entry.png, and POST.json
// too when it is there, so the house can read the post's address from the
// output as well as from the repository.

import { copyFileSync, mkdirSync, accessSync, constants, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = dirname(fileURLToPath(import.meta.url));

function outputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env) return env;
  try {
    accessSync('/output', constants.W_OK);
    return '/output';
  } catch {
    return 'output';
  }
}

const out = outputDir();
mkdirSync(out, { recursive: true });
copyFileSync(join(REPO, 'meme.png'), join(out, 'entry.png'));
if (existsSync(join(REPO, 'POST.json'))) {
  copyFileSync(join(REPO, 'POST.json'), join(out, 'POST.json'));
}
console.log(`entry.png written to ${join(out, 'entry.png')}`);
