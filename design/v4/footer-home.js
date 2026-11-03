/* design/v4/footer-home.js, v4's footer as I of footer-lab.html, founder of 3 Nov 2026: "мне нравится вариант текущий I ... ставим на
 * главную" (variant I is the one on Home, liked over H). wireframes/ is frozen, so this works the way the other blocks were ported:
 * wireframes/_nav.js renders the footer into #wf-footer, and this script replaces what is inside it on Home, once and again if _nav.js
 * renders it anew. It keeps two working parts of the old footer instead of drawing new ones: the language control (D-41, D-42: nine
 * options, one live) is moved in whole, and Cookie settings keeps data-ck-open, which _nav.js listens for. The words are the footer's own.
 * Every figure is a sample, D-124. The payment marks are drawn samples too, because which methods ship is [?]; each opens deposit, which
 * for a guest means sign in first (data-auth-open), and signed in the deposit layer (data-dep-open). The same renderer draws variant I in
 * footer-lab.html, window.V4Footer.render, so the lab and Home cannot drift. Styles: footer-home.css. */
(function () {
  var ICON = function (n) { return '<span class="fl-ic" style="--ic: var(--icon-' + n + ')" aria-hidden="true"></span>'; };
  var STATS = [['367 013 504', 'Cases opened', 'box', 'catalogue.html'], ['3 349 339', 'Upgrades', 'arrow-up'], ['1 864 228', 'Total users', 'users'], ['882', 'Online now', 'online', null, 'live']];
  /* a counter's mark is the rail's drawing with its story (rail-icons.js), founder of 3 Nov 2026: "у нас есть анимации этих иконок, сделай
     такие же"; where rail-icons.js is not loaded, the set's flat mask */
  var MASK = { online: 'pulse' };
  function STORY(n) { var s = window.V4RailIcons && window.V4RailIcons.svg(n); return s ? '<span class="fl-ri" aria-hidden="true">' + s + '</span>' : ICON(MASK[n] || n); }
  var COLS = [
    ['Play', [['Cases', 'catalogue.html']]],
    ['Cases', [['All cases', 'catalogue.html'], ['Daily cases', 'catalogue.html#cat-daily'], ['Featured cases', 'catalogue.html#cat-featured'], ['Community cases', 'catalogue.html#cat-community'], ['Classic cases', 'catalogue.html#cat-classic']]],
    ['Company', [['Terms of use', 'legal.html'], ['Privacy policy', 'legal-unpublished.html?doc=privacy'], ['Cookie policy', 'legal-unpublished.html?doc=cookie'], ['Refund and payments policy', 'legal-refund.html'], ['Cookie settings', null]]],
    ['Platform', [['Provably fair', 'fair.html'], ['Support', 'support.html'], ['Responsible play', 'responsible.html']]]
  ];
  var SOC = [['discord', 'Discord'], ['telegram', 'Telegram'], ['x', 'X'], ['youtube', 'YouTube'], ['tiktok', 'TikTok'], ['instagram', 'Instagram'], ['facebook', 'Facebook']];
  var PAY = [
    ['Visa', '<svg viewBox="0 0 60 20" aria-hidden="true"><text x="30" y="16" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-style="italic" font-size="18" fill="currentColor">VISA</text></svg>'],
    ['Mastercard', '<svg viewBox="0 0 60 30" aria-hidden="true"><circle cx="24" cy="15" r="11" fill="currentColor" opacity=".75"/><circle cx="36" cy="15" r="11" fill="currentColor" opacity=".45"/></svg>'],
    ['Google Pay', '<svg viewBox="0 0 60 20" aria-hidden="true"><text x="30" y="15" text-anchor="middle" font-family="Arial" font-weight="700" font-size="15" fill="currentColor">G Pay</text></svg>'],
    ['Bitcoin', '<svg viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="12" fill="currentColor" opacity=".8"/><text x="15" y="20.5" text-anchor="middle" font-family="Arial" font-weight="900" font-size="15" fill="#0B0A22">₿</text></svg>'],
    ['Ethereum', '<svg viewBox="0 0 30 30" aria-hidden="true"><path d="M15 3l7 12-7 4-7-4z" fill="currentColor" opacity=".85"/><path d="M15 21l7-4.5L15 27l-7-10.5z" fill="currentColor" opacity=".6"/></svg>'],
    ['Tether', '<svg viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="12" fill="currentColor" opacity=".8"/><path d="M9 9h12v3h-4.5v10h-3V12H9z" fill="#0B0A22"/></svg>']
  ];
  var LEGAL = '<p>For people 18 or over. Opening a case is a paid chance, never an investment. Set a deposit or session limit before you start.</p><p>Available only in the countries we have cleared. Anywhere else, this site says so before anything can be paid.</p>';
  var LANG = '<button class="fl-lang" type="button"><span class="fl-flag" aria-hidden="true"></span>English<span class="fl-caret" aria-hidden="true"></span></button>';

  /* o.base: the wireframes folder; o.home: the address of Home; o.guest: a guest's payment marks open sign in; o.langSlot: leave an empty
     place for the language control that Home moves in */
  function render(o) {
    o = o || {};
    var W = o.base || '../../wireframes/';
    var link = function (l) { return l[1] ? '<a href="' + W + l[1] + '">' + l[0] + '</a>' : '<button type="button" class="fl-linklike" data-ck-open>' + l[0] + '</button>'; };
    var col = function (i) { return '<h3>' + COLS[i][0] + '</h3>' + COLS[i][1].map(link).join(''); };
    var stats = '<div class="ff-band"><div class="ff-stats">' + STATS.map(function (s) {
      var tag = s[3] ? 'a' : 'div';
      return '<' + tag + ' class="ff-stat v4-ri-host' + (s[4] ? ' is-live' : '') + '"' + (s[3] ? ' href="' + W + s[3] + '"' : '') + ' tabindex="0"><span class="fl-tile">' + STORY(s[2]) + '</span><span><b>' + s[0] + '</b><span>' + s[1] + '</span></span></' + tag + '>';
    }).join('') + '</div></div>';
    var brand = '<div class="fl-brand"><a class="fl-logo" href="' + (o.home || 'index.html') + '" aria-label="CS2 Clutch, home"></a>' +
      '<p class="fl-ident">Operating company · Registration no. · Registered address</p>' +
      '<div class="fl-help"><span>Need help?</span><a class="v4-btn v4-btn--m" href="' + W + 'support.html">Support</a></div>' +
      '<div class="fl-soc">' + SOC.map(function (s) { return '<a class="fl-sq" href="#" aria-label="' + s[1] + '">' + ICON(s[0]) + '</a>'; }).join('') + '</div></div>';
    var cols = '<div class="fe-cols"><nav class="fl-col" aria-label="Play and platform">' + col(0) + '<span class="fe-gap"></span>' + col(3) + '</nav><nav class="fl-col" aria-label="Cases">' + col(1) + '</nav><nav class="fl-col" aria-label="Company">' + col(2) + '</nav></div>';
    var plates = '<div class="ff-plates"><a class="fl-plate is-18" href="' + W + 'responsible.html"><span class="ff-18" aria-hidden="true">18+</span><span class="fl-ptx"><b>Play responsibly</b><span>For people 18 or over</span></span><span class="fl-go" aria-hidden="true"></span></a>' +
      '<a class="fl-plate is-pf v4-ri-host" href="' + W + 'fair.html"><span class="fl-pt">' + STORY('target') + '</span><span class="fl-ptx"><b>Every round</b><span>Checkable without an account</span></span><span class="fl-go" aria-hidden="true"></span></a></div>';
    var pay = '<ul class="fe-pay" aria-label="Payment methods">' + PAY.map(function (p) {
      return '<li><a class="fh-pay" href="' + W + 'deposit.html" ' + (o.guest ? 'data-auth-open="default"' : 'data-dep-open="step1"') + ' aria-label="Add funds, ' + p[0] + '" title="' + p[0] + '">' + p[1] + '</a></li>';
    }).join('') + '</ul>';
    var fine = '<div class="fl-fine"><span>© 2026 CS2 Clutch. All rights reserved</span><span>Prices are in coins. 1 coin = $1.00</span></div>';
    return '<div class="ft ft-f ft-g ft-h ft-i">' + stats + '<div class="fe-mid">' + brand + cols + '<span class="fe-agents" aria-hidden="true"></span></div>' +
      '<div class="ff-strip"><div class="fi-strip">' + plates + pay + '</div></div>' +
      '<div class="ff-foot"><div class="ff-foot-in"><div class="fh-row"><div class="ff-legal">' + LEGAL + '</div>' + (o.langSlot ? '<span class="fh-lang"></span>' : LANG) + '</div>' + fine + '</div></div></div>';
  }

  window.V4Footer = { render: render };

  /* ---- Home: replace what _nav.js drew inside #wf-footer, keep its language control ---- */
  function mount() {
    var shell = window.WF_SHELL, foot = document.getElementById('wf-footer');
    if (!shell || shell.active !== 'index.html' || !foot || foot.classList.contains('v4-foot') || !foot.children.length) return;
    var lang = foot.querySelector('.wf-lang-wrap');
    foot.classList.add('v4-foot');
    foot.innerHTML = render({ base: window.WF_BASE || '../../wireframes/', home: 'index.html' + (shell.account ? '?account' : ''), guest: !shell.account, langSlot: true });
    var slot = foot.querySelector('.fh-lang');
    if (lang && slot) slot.appendChild(lang);
  }
  function start() {
    mount();
    var foot = document.getElementById('wf-footer');
    if (foot && window.MutationObserver) new MutationObserver(mount).observe(foot, { childList: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
