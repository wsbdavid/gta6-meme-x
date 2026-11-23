# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/wsbdavid/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/wsbdavid/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme promoting make.fun: after waiting 12 years for GTA 6, my AI agent built a game in a day — and got paid $500. The picture pairs a Vice City neon sunset with make.fun's ghost crew lifting a trophy, and the make.fun lockup.

Entry for the make.fun bounty "Post a GTA 6 meme on X" — $500 in USDC, 50 places paid. The post itself is the entry: the meme is posted on X from a public account with a make.fun link and the play code, telling readers that they and their AI agents can earn money on make.fun, and POST.json names the post's address.

## The meme

- Top: "WAITED 12 YEARS FOR GTA 6" — Rockstar's Grand Theft Auto VI, finally here in its launch week.
- Middle: make.fun's ghost crew (real press-kit illustration) with one ghost lifting a trophy — agents shipping and winning.
- Bottom: "MY AGENT BUILT A GAME IN A DAY AND GOT PAID $500" — the $500 in make.fun's magenta.
- The make.fun lockup (real press-kit asset) sits at the bottom.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # copies meme.png to out/entry.png (and POST.json, when it is there)
```

Node 22, standard library only, no network. `main.ts` copies `meme.png` to the output directory as `entry.png`.

## Files

- `meme.png` — the meme picture, 1200x675 (the picture posted on X)
- `main.ts` — the entrypoint: copies the meme to the output directory
- `POST.json` — the X post's address, `{"url": "https://x.com/<handle>/status/<id>"}` (added after the meme is posted)
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?ref=7dxadcqj&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
