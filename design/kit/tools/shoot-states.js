#!/usr/bin/env node
/* design/kit/tools/shoot-states.js: re-shoots the state snapshots a component page cites, stage 08 step 5.
 *
 *   node design/kit/tools/shoot-states.js <base> <component>      e.g.  node design/kit/tools/shoot-states.js http://localhost:8765/ button
 *   add --check to compare with the committed files instead of writing them (step 9: a snapshot that drifted is a failure)
 *
 * A page declares its snapshots in window.KIT_SHOTS: [{ id, sel, states: ['hover', 'active', 'focus', 'disabled', 'busy'], off, busy }],
 * where sel is the live instance at rest, off a disabled twin and busy an aria-busy twin, all on the page itself, on the system's own css.
 * Each state is made the way a person makes it (the pointer over it, the pointer held down, Tab, the attribute the product sets), in the
 * dark and the light theme, at 1440, and saved as design/kit/screens/states/<component>-<id>-<state>-<theme>.png. Needs Playwright. */
const path = require('path'), fs = require('fs');
let pw; try { pw = require('playwright'); } catch (e) { pw = require('/opt/homebrew/lib/node_modules/playwright'); }
const [BASE, COMP] = process.argv.slice(2), CHECK = process.argv.includes('--check');
if (!BASE || !COMP) { console.error('usage: shoot-states.js <base> <component> [--check]'); process.exit(2); }
const OUT = path.join(__dirname, '..', 'screens', 'states');
(async () => {
  const b = await pw.chromium.launch(); let drift = 0, n = 0;
  for (const theme of ['dark', 'light']) {
    const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    await ctx.addInitScript(t => { try { localStorage.setItem('kit-theme', t); } catch (e) {} }, theme);
    const p = await ctx.newPage();
    await p.goto(BASE + 'design/kit/' + COMP + '.html', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
    const shots = await p.evaluate(() => window.KIT_SHOTS || []);
    for (const s of shots) for (const st of s.states) {
      const sel = st === 'disabled' ? s.off : st === 'busy' ? s.busy : s.sel;
      const el = await p.$(sel); if (!el) { console.error('missing', sel); continue; }
      await el.scrollIntoViewIfNeeded(); await p.mouse.move(0, 0); await p.evaluate(() => document.activeElement && document.activeElement.blur());
      const box = await el.boundingBox(), pad = 14;
      if (st === 'hover') await el.hover();
      if (st === 'active') { await el.hover(); await p.mouse.down(); }
      if (st === 'focus') { await p.keyboard.press('Shift'); await el.focus(); }
      await p.waitForTimeout(250);
      const file = path.join(OUT, `${COMP}-${s.id}-${st}-${theme}.png`);
      const buf = await p.screenshot({ clip: { x: box.x - pad, y: box.y - pad, width: box.width + 2 * pad, height: box.height + 2 * pad } });
      if (st === 'active') await p.mouse.up();
      n++;
      if (CHECK) { const same = fs.existsSync(file) && fs.readFileSync(file).equals(buf); if (!same) { drift++; console.log('drift', path.basename(file)); } }
      else fs.writeFileSync(file, buf);
    }
    await ctx.close();
  }
  await b.close();
  console.log(CHECK ? `${n} snapshots checked, ${drift} drifted` : `${n} snapshots written to design/kit/screens/states/`);
  process.exit(drift ? 1 : 0);
})();
