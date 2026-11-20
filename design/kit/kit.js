/* design/kit/kit.js, THE KIT'S BEHAVIOUR, stage 07 step 5, D-234: one script for the shell and every screen in colour, reading the kit's
   classes and states only, as kit.css is one sheet for their look. It was the shell's own inline script (D-232); a screen copy loads this
   file instead of carrying a copy of it.

   Signed in with ?account, as v4: the header takes the template #shell-account, and any element marked data-when="guest" or
   data-when="account" shows in its state only. The rail: its toggle closes it to marks and opens it, over the page with the page dimmed
   where the product column is 1440px or less, beside the page where it is wider; under 900px the header's burger opens it as the drawer.
   A press on the dimmed page, Escape or a choice in the drawer closes it. The popovers open and close on their trigger, their close, their
   scrim, a press outside and Escape. The ticker pauses and resumes, starts paused for reduced motion, and while it runs a drop arrives at
   the front, paced as v4's with a rare drop after four to six (D-235). The sound tile says on or off. A layer (.dialog__layer) opens on any data-layer naming it
   and closes on its close, a press on the scrim and Escape, giving the keyboard back where it came from. The sign in declarations behave
   as signin-home.js did, D-58: a press with one missing is refused, the row is marked, the line names it, the keyboard goes to it. A
   favourite toggles signed in and asks a guest to sign in. */
(function () {
  var d = document, account = /[?&]account\b/.test(location.search);
  d.querySelectorAll('[data-when]').forEach(function (n) { n.hidden = n.getAttribute('data-when') !== (account ? 'account' : 'guest'); });

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

  function closePops(keep) { d.querySelectorAll('.popover__trigger[aria-expanded="true"]').forEach(function (t) { if (t !== keep) t.setAttribute('aria-expanded', 'false'); }); }
  function sound(b, on) { var w = on ? 'Sound on' : 'Sound off', s = b.querySelector('.rail__sr'), i = b.querySelector('.icon'), c = b.closest('[data-lbl]');
    b.setAttribute('aria-pressed', String(on)); if (s) s.textContent = w; if (c) c.setAttribute('data-lbl', w); if (i) { i.classList.toggle('icon--sound', on); i.classList.toggle('icon--mute', !on); } }
  function copy(b) { var t = b.querySelector('.popover__copy-t'), v = (b.parentNode.querySelector('.popover__id-v') || {}).textContent || '';
    function said(w, ok) { t.textContent = w; b.classList.toggle('is-done', ok); b.classList.toggle('is-fail', !ok); clearTimeout(b._t); b._t = setTimeout(function () { t.textContent = 'Copy'; b.classList.remove('is-done', 'is-fail'); }, 2400); }
    try { navigator.clipboard.writeText(v.replace(/^ID\s+/, '')).then(function () { said('Copied', true); }, function () { said('Not copied, select it by hand', false); }); } catch (e) { said('Not copied, select it by hand', false); } }

  /* the ticker, D-235 as v4 has it (wireframes/_nav.js arrive, rare.js pace, idle.js slide): a new drop arrives at the front and the row
     slides one place to make room, the oldest leaving past the far edge, 24 kept. The arrivals replay the sample rows oldest first, D-124, in
     runs of one to three close together (450 to 800ms), then a pause (1.6 to 3.8s); after four to six of them a held breath (2.6 to 3.5s)
     and one of the three rare drops in turn (template.ticker__rare), which keeps the strip to itself for 4.2 to 5.4s, founder of 1 Nov 2026:
     "4-5 обычных, а потом одна редкая ... темп сделать не прям такой одинаковый". Nothing arrives while the strip is held, pointed at or
     holds focus. motion.js marks each arrival by its chance and lands a rare one */
  var ticker = shell && shell.querySelector('.ticker'), pause = ticker && ticker.querySelector('.ticker__pause'), run = ticker && ticker.querySelector('.ticker__run');
  function hold(on) { ticker.classList.toggle('is-held', on); pause.setAttribute('aria-pressed', String(on)); pause.textContent = on ? 'Resume' : 'Pause'; }
  if (ticker && run) {
    hold(reduce);
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
        slide(li); wait = p.wait;
      }
      setTimeout(arrive, wait);
    }
    setTimeout(arrive, 3000);
  }

  /* layers */
  var back = null;
  function openLayer(id, from) { var l = d.getElementById(id); if (!l) return; back = from || d.activeElement; l.hidden = false; d.documentElement.classList.add('has-layer');
    var f = l.querySelector('.dialog__close, button, a[href], input'); if (f) f.focus(); }
  function closeLayer(l) { l.hidden = true; d.documentElement.classList.remove('has-layer'); if (back && back.focus) back.focus(); back = null; }

  /* the sign in declarations, D-58 */
  d.querySelectorAll('[data-signin]').forEach(function (s) {
    var rows = [].slice.call(s.querySelectorAll('.field--declare')), why = s.querySelector('.signin__why');
    var SAY = { both: '<b>Tick both to continue.</b> Neither declaration has been made yet.', terms: '<b>The agreement to the terms is still missing.</b>', age: '<b>The age declaration is still missing.</b>' };
    function miss() { return rows.map(function (r) { return !r.querySelector('input').checked; }); }
    function say(m) { why.innerHTML = '<p class="note note--refuse">' + (m[0] && m[1] ? SAY.both : m[0] ? SAY.terms : SAY.age) + '</p>'; }
    rows.forEach(function (r) { r.querySelector('input').addEventListener('change', function () { if (this.checked) r.classList.remove('is-missing'); var m = miss(); if (!m[0] && !m[1]) why.innerHTML = ''; else if (why.innerHTML) say(m); }); });
    s.addEventListener('click', function (e) {
      var go = e.target.closest('[data-go]'); if (!go) return; var m = miss(); if (!m[0] && !m[1]) return; e.preventDefault();
      rows.forEach(function (r, i) { if (m[i]) { r.classList.remove('is-missing'); void r.offsetWidth; r.classList.add('is-missing'); } });
      say(m); rows[m[0] ? 0 : 1].querySelector('input').focus({ preventScroll: true });
    });
  });

  d.addEventListener('click', function (e) {
    var x = e.target.closest('[data-layer]'); if (x && d.getElementById(x.getAttribute('data-layer'))) { e.preventDefault(); openLayer(x.getAttribute('data-layer'), x); return; }
    x = e.target.closest('.dialog__layer'); if (x && (e.target === x || e.target.closest('.dialog__close'))) { closeLayer(x); return; }
    x = e.target.closest('.fav'); if (x) { if (!account) { openLayer('signin-layer', x); return; }
      var on = x.getAttribute('aria-pressed') !== 'true', c = x.querySelector('.case-tile__count, .fav__count'); x.setAttribute('aria-pressed', String(on));
      if (c) { var n = parseInt(c.textContent.replace(/\D/g, ''), 10) || 0; c.textContent = String(n + (on ? 1 : -1)); } return; }
    if (!rail) return;
    x = e.target.closest('.rail__toggle, .header__menu'); if (x) { setRail(!isOpen()); return; }
    if (e.target.closest('.rail__scrim')) { shut(); return; }
    x = e.target.closest('.popover__trigger'); if (x) { closePops(x); x.setAttribute('aria-expanded', String(x.getAttribute('aria-expanded') !== 'true')); return; }
    x = e.target.closest('.popover__scrim, .popover__x'); if (x) { var t = x.closest('.popover').querySelector('.popover__trigger'); t.setAttribute('aria-expanded', 'false'); t.focus(); return; }
    x = e.target.closest('.popover__copy'); if (x) { copy(x); return; }
    x = e.target.closest('.ticker__pause'); if (x) { hold(!ticker.classList.contains('is-held')); return; }
    x = e.target.closest('.rail__amb .button'); if (x) { sound(x, x.getAttribute('aria-pressed') !== 'true'); return; }
    if (!e.target.closest('.popover__panel')) closePops();
    if (e.target.closest('.rail a[href]') && rail.classList.contains('is-open')) setRail(false);
  });
  d.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var l = d.querySelector('.dialog__layer:not([hidden])'); if (l) { closeLayer(l); return; }
    var open = d.querySelector('.popover__trigger[aria-expanded="true"]');
    if (open) { closePops(); open.focus(); return; }
    if (rail && (rail.classList.contains('is-open') || rail.classList.contains('is-overlay'))) shut();
  });
})();
