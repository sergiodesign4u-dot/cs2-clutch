/* design/v4/daily-home.js, the Daily cases ladder as R9 on v4's Home, founder of 2 Nov 2026: "keep the cases as they are", R9 of
 * daily-lab.html carried to Home. wireframes/ is frozen, so this works the way the rail was ported: wireframes/_nav.js renders its own
 * panel, dailyLadder(), into [data-ladder] under Home's "Daily cases" heading, and this script swaps that panel's contents for R9 once it is
 * there. The same renderer draws R9 in daily-lab.html, window.V4Daily.render, so the lab and Home cannot drift apart.
 * The ladder's three rules travel with it, sitemap.md row 0.15 and home.md section 2.5: it is never rendered on a responsible play surface
 * (it mounts on Home only), it never tells a person with a limit in force what to wager (the limit state draws no wager figure, no marker
 * and no threshold; Home has no limit state, so that branch is carried and not reached), and a tier gives a case and nothing else.
 * Every figure is a sample, D-124: the thresholds and the one day period are [?] in research. Money shows coin 6 and no word "coins";
 * the word stays for a screen reader. */
(function () {
  var TIERS = [
    { n: 'Silver', at: 5 }, { n: 'Nova', at: 25 }, { n: 'Guardian', at: 100 }, { n: 'Legend', at: 500 }, { n: 'Elite', at: 2000 }
  ];
  // each tier's hue as daily-home.css declares it on .dc-t1 to .dc-t5 (--hue), read rather than written twice, critique row 15
  var HUES = [1, 2, 3, 4, 5].map(function (i) { var e = document.createElement('i'); e.className = 'dc-t' + i; e.hidden = true; document.body.appendChild(e);
    var h = getComputedStyle(e).getPropertyValue('--hue').trim(); e.remove(); return h || 'var(--color-text-hi)'; });
  var WAGER = 87.5, RESET = '00:00 UTC', OPENED = ['Silver'];
  /* no climb, critique run 4 row 34 and the founder of 11 Nov 2026, "yes, on the whole": a ladder of spending with a track to Elite is the
     completion and status that CLAUDE.md forbids a limit; the tiers stay as a table, each with the wager that opens it, and nothing counts
     down to the next one (the track, its marker and Wager remaining are gone) */
  var SUB = 'Each tier opens its own case, once a day, at the wager shown on it.';
  var SUB_LIMIT = 'Each tier reached opens its own case, once a day.';
  var LIMIT_NOTE = 'Your limits are in force, so no wager targets are shown.';
  /* the skins of each tier, our real pictures, never generated: none, one, two, three, four with the karambit. a and b stand in the tray
     under the front rim, c and d lean on the case in front of it */
  var SKINS = [
    {},
    { c: 'glock-18-water-elemental' },
    { a: 'm4a1-s-hyper-beast', c: 'usp-s-kill-confirmed' },
    { a: 'ak-47-vulcan', b: 'awp-asiimov', d: 'desert-eagle-blaze' },
    { a: 'karambit-tiger-tooth', b: 'm4a4-the-emperor', c: 'ak-47-gold-arabesque', d: 'awp-neo-noir' }
  ];
  var ICON = {
    opened: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6 11-11-1.4-1.4z"/></svg>',
    open: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z"/></svg>',
    clock: '<svg class="dc-clock" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  var COIN = '<i class="dc-coin" aria-hidden="true"></i>';

  // thousands grouped with a space as every other figure is, 2 000.00, glossary C11; it wrote 2,000.00 with the en-US comma, critique row 13
  function money(n) { var p = n.toFixed(2).split('.'); return p[0].replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0') + '.' + p[1]; }
  /* a money figure: coin 6 and the figure on screen, "coins" for a screen reader */
  function coins(n) { return '<b class="dc-m">' + COIN + money(n) + '<span class="dc-sr"> coins</span></b>'; }
  function openable(st) { return TIERS.filter(function (t) { return WAGER >= t.at && st.opened.indexOf(t.n) < 0; }); }

  function chip(k, ico, html) { return '<span class="dc-chip is-' + k + '">' + ico + '<span>' + html + '</span></span>'; }
  function box(cls, mark, fig, label, style) { return '<div class="dc-box ' + cls + '"' + (style ? ' style="' + style + '"' : '') + '>' + mark + '<div><b>' + fig + '</b><span>' + label + '</span></div></div>'; }
  function art(i) {
    var s = SKINS[i], k = function (p) { return s[p] ? '<span class="dc-skin dc-s-' + p + '" style="background-image:url(../concept/assets/skins/' + s[p] + '.png)"></span>' : ''; };
    return '<span class="dc-art" aria-hidden="true"><span class="dc-case"></span>' + k('a') + k('b') + '<span class="dc-case dc-front"></span>' + k('c') + k('d') + '</span>';
  }

  /* st: { s: 'guest' | 'acct' | 'limit', opened: [tier names], say: '' }; opts.title draws the panel's own heading, which Home leaves to its
     section, opts.signin is the guest's sign in link */
  function render(st, opts) {
    opts = opts || {};
    var o = openable(st), h = st.s === 'guest' || !o.length ? -1 : TIERS.indexOf(o[0]);
    var cards = TIERS.map(function (t, i) {
      var line;
      var reached = st.s !== 'guest' && WAGER >= t.at, opened = st.opened.indexOf(t.n) >= 0;
      if (i === h) line = '<button class="v4-btn v4-btn--m" type="button" data-open="' + t.n + '">Open ' + t.n + ' case</button>';
      else if (st.s === 'guest') line = chip('info', '', 'At ' + coins(t.at) + ' wagered');
      else if (reached) line = opened ? chip('opened', ICON.opened, 'Opened today') : chip('open', ICON.open, 'Open now');
      else if (st.s === 'limit') line = chip('locked', ICON.lock, 'Locked');
      else line = chip('locked', ICON.lock, 'At ' + coins(t.at) + ' wagered');
      var k = st.s === 'guest' ? 'info' : reached ? (opened ? 'opened' : 'open') : 'locked';
      return '<li class="dc-card dc-t' + (i + 1) + ' is-' + k + (i === h ? ' is-hero' : '') + '">' + art(i) + '<b class="dc-name">' + t.n + '</b>' + line + '</li>';
    }).join('');
    var track = '';
    var boxes = '';
    if (st.s === 'acct') {
      boxes += box('is-money', COIN, money(WAGER) + '<span class="dc-sr"> coins</span>', 'Wagered since ' + RESET);
    }
    boxes += box('is-time', ICON.clock, RESET, 'Daily reset');
    var btn = st.s === 'guest' ? '<a class="v4-btn v4-btn--l" href="' + (opts.signin || '../../wireframes/signin.html') + '"' + (opts.authOpen ? ' data-auth-open="default"' : '') + '>Sign in to see your tier</a>' : '';
    var title = opts.title ? '<div class="dc-title"><h2 class="dc-t">Daily cases</h2><p class="dc-l">' + (st.s === 'limit' ? SUB_LIMIT : SUB) + '</p>' +
      (st.s === 'limit' ? '<p class="dc-note">' + LIMIT_NOTE + '</p>' : '') + '</div>' : (st.s === 'limit' ? '<div class="dc-title"><p class="dc-note">' + LIMIT_NOTE + '</p></div>' : '');
    var say = st.say || (st.s !== 'guest' && !o.length ? 'Nothing to open now. Opens reset at ' + RESET + '.' : '');
    return '<div class="dc-frame"><div class="dc is-' + st.s + '"><div class="dc-head' + (opts.title ? ' has-title' : '') + '">' + title +
      '<div class="dc-row"><div class="dc-boxes">' + boxes + '</div>' + btn + '</div></div>' +
      '<ol class="dc-cards">' + cards + '</ol>' + track + '<p class="dc-say" aria-live="polite">' + say + '</p></div></div>';
  }

  window.V4Daily = { render: render, OPENED: OPENED };

  /* ---- Home: swap _nav.js's panel for R9. Founder of 2 Nov 2026: Home draws it as the lab does, the title inside the panel with the
     boxes and the button in its row; Home's own section heading is hidden by daily-home.css and still names the section for a screen reader ---- */
  function mount() {
    /* Home only, where the shell says index.html and Home's own "Daily cases" heading stands: never on a responsible play surface, 6.1,
       nor anywhere else the ladder component is drawn */
    var shell = window.WF_SHELL, head = document.getElementById('h2-daily');
    if (!shell || shell.active !== 'index.html' || !head) return;
    var host = head.closest('section') && head.closest('section').querySelector('[data-ladder]');
    if (!host || host.querySelector('.dc-frame')) return;
    var st = { s: window.WF_SHELL && window.WF_SHELL.account ? 'acct' : 'guest', opened: OPENED.slice(), say: '' }; /* Home has no limit state */
    var draw = function () { host.innerHTML = render(st, { title: true, signin: (window.WF_BASE || '../../wireframes/') + 'signin.html', authOpen: true }); };
    draw();
    host.addEventListener('click', function (e) {
      var b = e.target.closest('[data-open]');
      if (!b) return;
      st.opened.push(b.getAttribute('data-open'));
      st.say = b.getAttribute('data-open') + ' case opened. The reveal runs on the case screen.';
      draw();
    });
  }
  function start() {
    mount();
    var main = document.querySelector('.wf-main');
    if (main && window.MutationObserver) new MutationObserver(mount).observe(main, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
