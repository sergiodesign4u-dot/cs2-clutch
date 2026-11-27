/* design/kit/kit.js, THE KIT'S BEHAVIOUR, stage 07 step 5, D-234: one script for the shell and every screen in colour, reading the kit's
   classes and states only, as kit.css is one sheet for their look. It was the shell's own inline script (D-232); a screen copy loads this
   file instead of carrying a copy of it.

   Signed in with ?account, as v4, or always on a page whose body says data-account: the header takes the template #shell-account, and any element marked data-when="guest" or
   data-when="account" shows in its state only. The rail: its toggle closes it to marks and opens it, over the page with the page dimmed
   where the product column is 1440px or less, beside the page where it is wider; under 900px the header's burger opens it as the drawer.
   A press on the dimmed page, Escape or a choice in the drawer closes it. The popovers open and close on their trigger, their close, their
   scrim, a press outside and Escape; a Select menu's option is the choice it shows, and its list walks by the arrows (D-238). The ticker pauses and resumes, starts paused for reduced motion, and while it runs a drop arrives at
   the front, paced as v4's with a rare drop after four to six (D-235). The sound tile says on or off. A layer (.dialog__layer) opens on any data-layer naming it
   and closes on its close, a press on the scrim and Escape, giving the keyboard back where it came from; while it is open Tab walks its own
   controls only, and a layer drawn open on arrival takes the keyboard (D-251). Copy answers on a Copyable value marked data-copy. The sign in declarations behave
   as signin-home.js did, D-58: a press with one missing is refused, the row is marked, the line names it, the keyboard goes to it. A
   favourite toggles signed in and asks a guest to sign in. The Daily ladder's open control opens its tier (D-246). */
(function () {
  var d = document, account = /[?&]account\b/.test(location.search) || d.body.hasAttribute('data-account'); /* a page drawn signed in only, case-interrupted.html, D-236 */
  d.querySelectorAll('[data-when]').forEach(function (n) { n.hidden = n.getAttribute('data-when') !== (account ? 'account' : 'guest'); });
  /* signed in travels between the screens in colour, as the grey prototype's session carries it (D-152): with ?account, a link to another
     screen of design/ keeps it, D-236. Links out of design/ and links that already ask for a state are left as they are */
  if (/[?&]account\b/.test(location.search)) d.querySelectorAll('a[href]').forEach(function (a) {
    var h = a.getAttribute('href'); if (/^[\w-]+\.html(#.*)?$/.test(h)) a.setAttribute('href', h.replace(/\.html/, '.html?account')); });

  var shell = d.querySelector('.shell');
  var rail = shell && shell.querySelector('.rail'), toggle = rail && rail.querySelector('.rail__toggle'), menu = shell && shell.querySelector('.header__menu');
  var wide = matchMedia('(min-width: 900px)'), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (shell && account) { var tp = d.getElementById('shell-account'), end = shell.querySelector('.header__end'); if (tp && end) end.innerHTML = tp.innerHTML; }

  function compact() { return wide.matches && shell.clientWidth <= 1440; }
  function isOpen() { return wide.matches ? !rail.classList.contains('is-closed') : rail.classList.contains('is-open'); }
  function setRail(open) {
    if (wide.matches) {
      var over = compact();
      rail.classList.toggle('is-closed', !open); rail.classList.toggle('is-overlay', open && over); shell.classList.toggle('is-wide', open && !over);
    } else {
      rail.classList.remove('is-closed', 'is-overlay'); rail.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open));
      if (open) { var f = rail.querySelector('a[href], button'); if (f) f.focus(); }
    }
    toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Collapse the menu' : 'Expand the menu');
  }
  function shut() { setRail(false); (wide.matches ? toggle : menu).focus(); }
  function settle() { rail.classList.remove('is-open', 'is-overlay'); menu.setAttribute('aria-expanded', 'false'); setRail(wide.matches && !compact()); }
  if (rail) { settle(); wide.addEventListener('change', settle); }

  /* the account menu answers under its old name and its own (.account-menu, rename map row 2, D-269): the screens wear .popover--account until
     their markup moves at step 8, the showcase's shell already wears .account-menu */
  function closePops(keep) { d.querySelectorAll('.popover__trigger[aria-expanded="true"], .account-menu__trigger[aria-expanded="true"]').forEach(function (t) { if (t !== keep) t.setAttribute('aria-expanded', 'false'); }); }
  /* the Select menu (.popover--select, D-238): an option is the choice, shown on the trigger with its flag; the list closes, the keyboard goes
     back to the trigger and the page hears "pick" with the value and its place in the list */
  function opts(p) { return [].slice.call(p.querySelectorAll('.popover__opt')); }
  function chosenOpt(p) { return p.querySelector('.popover__opt[aria-selected="true"]') || opts(p)[0]; }
  function pick(o) {
    var p = o.closest('.popover'), t = p.querySelector('.popover__trigger'), v = p.querySelector('.popover__val'), f = t.querySelector('.popover__flag'), of = o.querySelector('.popover__flag');
    opts(p).forEach(function (n) { n.setAttribute('aria-selected', String(n === o)); });
    if (v) v.textContent = o.textContent.trim(); if (f && of) f.className = of.className;
    t.setAttribute('aria-expanded', 'false'); t.focus();
    p.dispatchEvent(new CustomEvent('pick', { bubbles: true, detail: { value: o.textContent.trim(), index: opts(p).indexOf(o) } }));
  }
  function sound(b, on) { var w = on ? 'Sound on' : 'Sound off', s = b.querySelector('.rail__sr'), i = b.querySelector('.icon'), c = b.closest('[data-lbl]');
    b.setAttribute('aria-pressed', String(on)); if (s) s.textContent = w; if (c) c.setAttribute('data-lbl', w); if (i) { i.classList.toggle('icon--sound', on); i.classList.toggle('icon--mute', !on); } }
  function copy(b) { var t = b.querySelector('.popover__copy-t, .account-menu__copy-t'), v = (b.parentNode.querySelector('.popover__id-v, .account-menu__id-v') || {}).textContent || '';
    function said(w, ok) { t.textContent = w; b.classList.toggle('is-done', ok); b.classList.toggle('is-fail', !ok); clearTimeout(b._t); b._t = setTimeout(function () { t.textContent = 'Copy'; b.classList.remove('is-done', 'is-fail'); }, 2400); }
    try { navigator.clipboard.writeText(v.replace(/^ID\s+/, '')).then(function () { said('Copied', true); }, function () { said('Not copied, select it by hand', false); }); } catch (e) { said('Not copied, select it by hand', false); } }

  /* the ticker, D-235 as v4 has it (wireframes/_nav.js arrive, rare.js pace, idle.js slide): a new drop arrives at the front and the row
     slides one place to make room, the oldest leaving past the far edge, 24 kept. The arrivals replay the sample rows oldest first, D-124, in
     runs of one to three close together (450 to 800ms), then a pause (1.6 to 3.8s); after four to six of them a held breath (2.6 to 3.5s)
     and one of the three rare drops in turn (template.ticker__rare), which keeps the strip to itself for 4.2 to 5.4s, founder of 1 Nov 2026:
     "4-5 обычных, а потом одна редкая ... темп сделать не прям такой одинаковый". Nothing arrives while the strip is held, pointed at or
     holds focus. motion.js marks each arrival by its chance and lands a rare one */
  var ticker = shell && shell.querySelector('.ticker'), pause = ticker && ticker.querySelector('.ticker__pause'), run = ticker && ticker.querySelector('.ticker__run');
  // the control says what a press does, Pause or Resume, so it carries no pressed state as well (stage 07 step 7, D-254, audit N13)
  function hold(on) { ticker.classList.toggle('is-held', on); pause.removeAttribute('aria-pressed'); pause.textContent = on ? 'Resume' : 'Pause'; }
  /* a tile past the strip's clip cannot be seen, so it is not a tab stop: focus never lands where no ring can show (stage 07 step 7, D-254,
     audit N1, WCAG 2.4.11). Recounted after each arrival and on a resize */
  function reach() {
    if (!ticker || !run) return; var clip = (run.parentElement || run).getBoundingClientRect();
    [].forEach.call(run.querySelectorAll('a'), function (a) { var r = a.getBoundingClientRect(); if (r.right > clip.right + 1 || r.left < clip.left - 1) a.setAttribute('tabindex', '-1'); else a.removeAttribute('tabindex'); });
  }
  if (ticker && run) {
    hold(reduce); reach(); addEventListener('resize', reach);
    var KEEP = 24, SAMPLE = [].slice.call(run.children).map(function (n) { return n.cloneNode(true); }), next = SAMPLE.length - 1;
    var tpl = ticker.querySelector('template.ticker__rare'), RARE = tpl ? [].slice.call(tpl.content.children) : [];
    var left = 4 + Math.floor(Math.random() * 3), burst = 0, turn = 0;
    function between(a, b) { return a + Math.random() * (b - a); }
    function pace() {
      if (RARE.length && left === 0) { left = 4 + Math.floor(Math.random() * 3); burst = 0; return { li: RARE[turn++ % RARE.length].cloneNode(true), rare: true, wait: between(4200, 5400) }; }
      var li = SAMPLE[next].cloneNode(true); next = (next + SAMPLE.length - 1) % SAMPLE.length;
      if (!RARE.length) return { li: li, wait: 3000 };
      left--; if (burst <= 0) burst = 1 + Math.floor(Math.random() * 3); burst--;
      return { li: li, wait: left === 0 ? between(2600, 3500) : (burst > 0 ? between(450, 800) : between(1600, 3800)) };
    }
    function slide(li) { /* each card slides on its own translate, added, so two arrivals close together add up; cards past the far edge stay still */
      if (reduce || !li.animate) return;
      var w = li.offsetWidth + (parseFloat(getComputedStyle(run).columnGap) || 0), edge = (run.parentElement || run).getBoundingClientRect().right;
      var kf = [{ translate: (-w) + 'px 0' }, { translate: '0 0' }], o = { duration: 405, easing: 'cubic-bezier(.22, .8, .3, 1)', composite: 'add' };
      [].forEach.call(run.children, function (c) { if (c.getBoundingClientRect().left - w > edge) return; try { c.animate(kf, o); } catch (e) { c.animate(kf, { duration: o.duration, easing: o.easing }); } });
    }
    function arrive() {
      var wait = 3000;
      if (SAMPLE.length && !(d.hidden || ticker.classList.contains('is-held') || ticker.matches(':hover') || ticker.contains(d.activeElement))) {
        var p = pace(), li = p.li, tile = li.querySelector('.feed-tile'), M = window.KitMotion;
        li.classList.add('is-new');
        li.addEventListener('animationend', function f(e) { if (e.target === li) { li.classList.remove('is-new'); li.removeEventListener('animationend', f); } });
        run.insertBefore(li, run.firstChild);
        while (run.children.length > KEEP) run.removeChild(run.lastChild);
        if (M) { M.mark(tile); if (p.rare) M.land(tile); }
        slide(li); wait = p.wait; setTimeout(reach, 450);
      }
      setTimeout(arrive, wait);
    }
    setTimeout(arrive, 3000);
  }

  /* the Daily ladder's one open control, as v4's daily-home.js answered it (D-220): the tier reads Opened today and the line says where the
     reveal runs; it was left dead when Home was assembled, found and fixed at D-246 */
  function openTier(b) {
    var li = b.closest('.daily__tier'), panel = li.closest('.daily'), name = li.querySelector('.daily__name').textContent, done = panel.querySelector('.daily__chip--opened'), say = panel.querySelector('.daily__say');
    if (done) b.replaceWith(done.cloneNode(true)); else b.remove();
    li.classList.remove('is-live');
    if (say) { say.textContent = name + ' case opened. The reveal runs on the case screen.'; say.tabIndex = -1; say.focus({ preventScroll: true }); }
  }

  /* layers */
  var back = null;
  function openLayer(id, from) { var l = d.getElementById(id); if (!l) return; back = from || d.activeElement; l.hidden = false; d.documentElement.classList.add('has-layer');
    var f = l.querySelector('.dialog__close, button, a[href], input'); if (f) f.focus(); }
  function closeLayer(l) { l.hidden = true; d.documentElement.classList.remove('has-layer'); if (back && back.focus) back.focus(); back = null; }

  /* a layer drawn open on arrival (deposit-dialog, signin-dialog) is open as a press opens it: the page under it held, the keyboard on its close */
  var pinned = d.querySelector('.dialog__layer:not([hidden])');
  if (pinned) { d.documentElement.classList.add('has-layer'); var pf = pinned.querySelector('.dialog__close, button, a[href], input'); if (pf) pf.focus({ preventScroll: true }); }
  /* the keyboard stays in an open layer, the modal contract of 0.1 section 6 as wireframes/_nav.js holds it (D-251): Tab walks the layer's
     own controls round and round, links and buttons too, which Safari's default Tab passes over; a script that holds its own layer first wins */
  d.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || e.defaultPrevented) return;
    var l = d.querySelector('.dialog__layer:not([hidden])'); if (!l) return;
    var f = [].slice.call(l.querySelectorAll('a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"])')).filter(function (x) { return !x.disabled && x.getClientRects().length; });
    if (!f.length) return;
    e.preventDefault(); var i = f.indexOf(d.activeElement);
    f[(i < 0 ? 0 : i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
  });

  /* Copy on a Copyable value that names no script of its own (data-copy): a sign in refused, its reference for support (D-251); the line
     under it says Copied, or what to do, microcopy R155 and R34 */
  d.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy] .copy-value__row button'); if (!b) return;
    var box = b.closest('.copy-value'), s = box.querySelector('.copy-value__said'), v = box.querySelector('.copy-value__v').textContent;
    function said(t) { if (s) s.textContent = t; }
    try { navigator.clipboard.writeText(v).then(function () { said('Copied'); }, function () { said('Not copied, select it by hand'); }); }
    catch (x) { said('Not copied, select it by hand'); }
  });

  /* the sign in declarations, D-58 */
  var whyN = 0;
  d.querySelectorAll('[data-signin]').forEach(function (s) {
    var rows = [].slice.call(s.querySelectorAll('.field--declare')), why = s.querySelector('.signin__why');
    var DONE = 'Both declarations made.', SAY = { both: '<b>Tick both to continue.</b> Neither declaration has been made yet.', terms: '<b>The agreement to the terms is still missing.</b>', age: '<b>The age declaration is still missing.</b>' };
    function miss() { return rows.map(function (r) { return !r.querySelector('input').checked; }); }
    function say(m) { why.innerHTML = '<p class="note note--refuse">' + (m[0] && m[1] ? SAY.both : m[0] ? SAY.terms : SAY.age) + '</p>'; }
    /* a declaration named as missing is marked invalid and points at the line that names it (stage 07 step 7, D-254, audit N8, WCAG 3.3.1) */
    function tie() { if (!why.id) why.id = 'signin-why-' + (++whyN); rows.forEach(function (r) { var i = r.querySelector('input');
      if (r.classList.contains('is-missing')) { i.setAttribute('aria-invalid', 'true'); i.setAttribute('aria-describedby', why.id); } else { i.removeAttribute('aria-invalid'); i.removeAttribute('aria-describedby'); } }); }
    tie();
    /* both made: the line says so, the grey's wireAuth and microcopy 2.4-19 (D-251); it was left empty since D-232 */
    rows.forEach(function (r) { r.querySelector('input').addEventListener('change', function () { if (this.checked) r.classList.remove('is-missing'); var m = miss(); if (!m[0] && !m[1]) why.innerHTML = '<p class="note">' + DONE + '</p>'; else if (why.innerHTML.indexOf(DONE) > -1) why.innerHTML = ''; else if (why.innerHTML) say(m); tie(); }); });
    s.addEventListener('click', function (e) {
      var go = e.target.closest('[data-go]'); if (!go) return; var m = miss(); if (!m[0] && !m[1]) return; e.preventDefault();
      rows.forEach(function (r, i) { if (m[i]) { r.classList.remove('is-missing'); void r.offsetWidth; r.classList.add('is-missing'); } });
      say(m); tie(); rows[m[0] ? 0 : 1].querySelector('input').focus({ preventScroll: true });
    });
  });

  /* THE RISK TIP TURNS (design/v4/case-tiles.js, never carried until stage 08 step 6, D-269 Q3): a case tile's band in words opens on the bolts'
     right; where that would run past the screen's column, as on the last tile of a row, it opens on their left (.case-tile__tip.is-left).
     Read each time the pointer arrives, so a resized window is read fresh */
  d.addEventListener('pointerover', function (e) {
    var r = e.target.closest && e.target.closest('.case-tile__risk'), tip = r && r.querySelector('.case-tile__tip'); if (!tip) return;
    var box = (r.closest('.shell__main') || d.documentElement).getBoundingClientRect(), edge = Math.min(box.right, d.documentElement.clientWidth) - 8;
    tip.classList.toggle('is-left', r.getBoundingClientRect().right + 10 + tip.offsetWidth > edge);
  });

  d.addEventListener('click', function (e) {
    var x = e.target.closest('[data-layer]'), lid = x && (!account && x.hasAttribute('data-account-only') ? 'signin-layer' : x.getAttribute('data-layer')); /* a layer for an account asks a guest to sign in first, D-237 */
    if (x && d.getElementById(lid)) { e.preventDefault(); openLayer(lid, x); return; }
    x = e.target.closest('.dialog__layer'); if (x && (e.target === x || e.target.closest('.dialog__close'))) { closeLayer(x); return; }
    x = e.target.closest('.daily__tier.is-live > .button'); if (x) { openTier(x); return; }
    x = e.target.closest('.fav'); if (x) { if (!account) { openLayer('signin-layer', x); return; }
      var on = x.getAttribute('aria-pressed') !== 'true', c = x.querySelector('.case-tile__count, .fav__count'); x.setAttribute('aria-pressed', String(on));
      if (c) { var n = parseInt(c.textContent.replace(/\D/g, ''), 10) || 0; c.textContent = String(n + (on ? 1 : -1)); } return; }
    if (!rail) return;
    x = e.target.closest('.rail__toggle, .header__menu'); if (x) { setRail(!isOpen()); return; }
    if (e.target.closest('.rail__scrim')) { shut(); return; }
    x = e.target.closest('.popover--select .popover__opt'); if (x) { pick(x); return; }
    x = e.target.closest('.popover__trigger, .account-menu__trigger'); if (x) { closePops(x); var op = x.getAttribute('aria-expanded') !== 'true'; x.setAttribute('aria-expanded', String(op));
      if (op && x.parentNode.classList.contains('popover--select') && e.detail === 0) chosenOpt(x.parentNode).focus(); return; }
    x = e.target.closest('.popover__scrim, .popover__x, .account-menu__scrim, .account-menu__x'); if (x) { var t = x.closest('.popover, .account-menu').querySelector('.popover__trigger, .account-menu__trigger'); t.setAttribute('aria-expanded', 'false'); t.focus(); return; }
    x = e.target.closest('.popover__copy, .account-menu__copy'); if (x) { copy(x); return; }
    x = e.target.closest('.ticker__pause'); if (x) { hold(!ticker.classList.contains('is-held')); return; }
    x = e.target.closest('.rail__amb .button'); if (x) { sound(x, x.getAttribute('aria-pressed') !== 'true'); return; }
    if (!e.target.closest('.popover__panel, .account-menu__panel')) closePops();
    if (e.target.closest('.rail a[href]') && rail.classList.contains('is-open')) setRail(false);
  });
  d.addEventListener('keydown', function (e) {
    var sel = e.target.closest && e.target.closest('.popover--select');
    if (sel && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { /* the Select menu's list by the keyboard: down opens it at the choice, the arrows walk it */
      e.preventDefault(); var t = sel.querySelector('.popover__trigger'), all = opts(sel);
      if (t.getAttribute('aria-expanded') !== 'true') { closePops(t); t.setAttribute('aria-expanded', 'true'); chosenOpt(sel).focus(); return; }
      var i = all.indexOf(e.target); all[Math.max(0, Math.min(all.length - 1, i < 0 ? 0 : i + (e.key === 'ArrowDown' ? 1 : -1)))].focus(); return;
    }
    if (e.key !== 'Escape') return;
    var l = d.querySelector('.dialog__layer:not([hidden])'), open = d.querySelector('.popover__trigger[aria-expanded="true"], .account-menu__trigger[aria-expanded="true"]');
    if (open && (!l || l.contains(open))) { closePops(); open.focus(); return; } /* a list open inside a layer closes before the layer */
    if (l) { closeLayer(l); return; }
    if (rail && (rail.classList.contains('is-open') || rail.classList.contains('is-overlay'))) shut();
  });
})();
