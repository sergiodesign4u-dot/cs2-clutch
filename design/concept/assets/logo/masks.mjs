import { chromium } from '/opt/homebrew/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const [,, src, outdir, mode, SX, SY, SW, SH, S] = process.argv;
const b = await chromium.launch(); const p = await b.newPage();
const data = 'data:image/png;base64,' + fs.readFileSync(src).toString('base64');
const res = await p.evaluate(async ({ data, mode, sx, sy, sw, sh, s }) => {
  const im = new Image(); im.src = data; await im.decode();
  const c = document.createElement('canvas'); c.width = sw * s; c.height = sh * s;
  const x = c.getContext('2d'); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high';
  x.drawImage(im, sx, sy, sw, sh, 0, 0, sw * s, sh * s);
  const d = x.getImageData(0, 0, c.width, c.height).data, W = c.width, H = c.height;
  const rules = mode === 'word' ? {
    letters: (r, g, b, px, py) => r > 215 && r >= b - 10 && (g > 95 || (px < 125 && py > 150 && py < 180)) && Math.hypot(px - 99.7, py - 117.8) > 10,
    blue: (r, g, b) => b > 200 && b > r + 50 && g > 110,
    pink: (r, g, b, px, py) => r > 225 && g < 95 && b > 90 && !(px < 125 && py > 150 && py < 180) && Math.hypot(px - 99.7, py - 117.8) > 14,
  } : {
    pink: (r, g, b) => r > 200 && g < 120 && b > 100 && r > b,
    blue: (r, g, b) => b > 200 && b > r + 60,
    gold: (r, g, b) => r > 200 && g > 150 && b < 170 && r > b + 60,
  };
  const m = {}; for (const k in rules) m[k] = new Uint8Array(W * H);
  let sxs = 0, sys = 0, sn = 0; const st = {};
  for (let i = 0, j = 0; i < d.length; i += 4, j++) {
    const r = d[i], g = d[i + 1], bb = d[i + 2], px = (j % W) / s, py = Math.floor(j / W) / s;
    const junk = mode === 'word' && ((px > 390 && py > 185) || py > 200);
    for (const k in rules) { const on = !junk && rules[k](r, g, bb, px, py); m[k][j] = on ? 0 : 255; if (on) { const q = st[k] || (st[k] = { n: 0, x: 0, y: 0, x0: 1e9, y0: 1e9, x1: 0, y1: 0 }); const X = j % W, Y = Math.floor(j / W); q.n++; q.x += X; q.y += Y; q.x0 = Math.min(q.x0, X); q.y0 = Math.min(q.y0, Y); q.x1 = Math.max(q.x1, X); q.y1 = Math.max(q.y1, Y); } }
    if (mode === 'word' && px > 65 && px < 115 && py > 100 && py < 155 && r > 225 && g < 95) { sxs += px; sys += py; sn++; }
  }
  // smooth each mask before tracing: blur by one source pixel and threshold again, so potrace follows the letter, not the pixel steps
  for (const k in m) {
    const src = document.createElement('canvas'); src.width = W; src.height = H; const sc = src.getContext('2d');
    const id = sc.createImageData(W, H); for (let j = 0; j < W * H; j++) { const v = m[k][j]; id.data[j * 4] = id.data[j * 4 + 1] = id.data[j * 4 + 2] = v; id.data[j * 4 + 3] = 255; }
    sc.putImageData(id, 0, 0);
    const dst = document.createElement('canvas'); dst.width = W; dst.height = H; const dc = dst.getContext('2d');
    dc.fillStyle = '#fff'; dc.fillRect(0, 0, W, H); dc.filter = `blur(${s}px)`; dc.drawImage(src, 0, 0);
    const bd = dc.getImageData(0, 0, W, H).data; for (let j = 0; j < W * H; j++) m[k][j] = bd[j * 4] < 128 ? 0 : 255;
  }
  return { W, H, m: Object.fromEntries(Object.entries(m).map(([k, v]) => [k, Array.from(v)])), spark: sn ? [sxs / sn, sys / sn, sn / s / s] : null, st };
}, { data, mode, sx: +SX, sy: +SY, sw: +SW, sh: +SH, s: +S });
for (const k in res.m) fs.writeFileSync(`${outdir}/${k}.pgm`, Buffer.concat([Buffer.from(`P5\n${res.W} ${res.H}\n255\n`), Buffer.from(res.m[k])]));
fs.writeFileSync(`${outdir}/stats.json`, JSON.stringify({ W: res.W, H: res.H, scale: +S, spark: res.spark, st: res.st })); console.log(JSON.stringify(res.st)); await b.close();
