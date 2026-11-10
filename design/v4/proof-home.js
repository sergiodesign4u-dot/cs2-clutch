/* design/v4/proof-home.js, the Before you spend block as A6 refined on v4's Home, founder of 2 Nov 2026: approved from proof-lab.html.
 * wireframes/ is frozen, so this works the way the daily ladder and the rail were ported: wireframes/_nav.js renders Home's own row of four
 * figures under the "Before you spend" heading (#h2-proof), and this script swaps that row for A6 refined once it is there, and again if
 * _nav.js renders it anew. The same renderer draws A6 refined in proof-lab.html, window.V4Proof.render, so the lab and Home cannot drift.
 * Every figure is a sample, D-124, marked in ia/docs/pages/home.md: the tested RTP (its tester is [?]), the expected value, the median and
 * the nine in ten to Steam, the two rounds, their tickets and the hash. Money shows coin 6 and no word "coins"; the word stays for a
 * screen reader. Links keep the targets the row of four had, now with the wireframes base so they open; a guest's withdrawal links open
 * sign in first, D-54, as _nav.js marks them on every guest page. */
(function () {
  var ICON = {
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5 3.5 4.6v6.2c0 5.2 3.6 9.8 8.5 11.7 4.9-1.9 8.5-6.5 8.5-11.7V4.6z"/><path class="x6-tick" d="m8.2 11.9 2.7 2.7 5-5.2" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrow: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ok: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8"/><path d="m4.6 8.3 2.3 2.3 4.6-4.9" fill="none" stroke="#060A1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  var SKINS = '../concept/assets/skins/';
  /* the two checked rounds on Ironbound, the samples wireframes/_nav.js prints on their result pages (ROUNDS.glock and ROUNDS.ak) */
  var ROUNDS = [
    { q: '?round=glock', r1: '#6B42B9', r2: '#2E1A63', skin: 'glock-18-water-elemental', rar: 'Restricted', w: 'Glock-18', s: 'Water Elemental', at: '18 Aug 14:58',
      t: '12&#160;684', a: 10.49, b: 15.09, tk: 12.684, range: '10 491 to 15 090' },
    { q: '', r1: '#D1273E', r2: '#7A0F22', skin: 'ak-47-redline', rar: 'Covert', w: 'AK-47', s: 'Redline', at: '18 Aug 14:44',
      t: '417', a: 0, b: 0.64, tk: 0.417, range: '1 to 640' }
  ];

  /* the last word of a link and its arrow never part */
  function go(text) { var i = text.lastIndexOf(' '); return text.slice(0, i + 1) + '<span class="nw">' + text.slice(i + 1) + ICON.arrow + '</span>'; }
  function panel(cls, href, auth, k, v, say, link, extra) {
    return '<a class="x6-p' + cls + '" href="' + href + '"' + (auth ? ' data-auth-open="default"' : '') + '>' + (extra || '') +
      '<span class="x6-k">' + k + '</span><span class="x6-v">' + v + '</span><span class="x6-say">' + say + '</span><span class="x6-go">' + go(link) + '</span></a>';
  }
  function card(r, base) {
    var plain = r.t.replace('&#160;', ' ');
    return '<a class="x6-card" href="' + base + 'result.html' + r.q + '" style="--r1:' + r.r1 + '; --r2:' + r.r2 + '">' +
      '<img class="x6-skin" src="' + SKINS + r.skin + '.png" alt="" width="512" height="384">' +
      '<span class="x6-r">' + r.rar + '</span><span class="x6-w">' + r.w + '</span><b class="x6-s">' + r.s + '</b>' +
      '<span class="x6-from">won from Ironbound, ' + r.at + '</span>' +
      '<span class="x6-t">ticket <b>' + r.t + '</b> of 100&#160;000</span>' +
      '<span class="x6-ruler" style="--a:' + r.a + '; --b:' + r.b + '; --t:' + r.tk + '" role="img" aria-label="Ticket ' + plain + ', in the range ' + r.range + '"><i></i><b></b></span>' +
      '<span class="x6-cgo">' + go('Check this round') + '</span></a>';
  }

  /* opts.base: where the wireframes live, relative to the page; opts.guest: a guest's withdrawal links open sign in first */
  function render(opts) {
    opts = opts || {};
    var base = opts.base || '../../wireframes/', g = !!opts.guest;
    var caseArt = '<span class="x6-case" aria-hidden="true"><span class="b"></span><img class="sk" src="' + SKINS + 'ak-47-redline.png" alt="" width="512" height="384"><span class="f"></span></span>';
    var ev = 'Expected value <span class="x6-money"><img class="x6-coin" src="art/brand/coin-6-small.svg" alt="" width="16" height="16">11.68<span class="x6-vh"> coins</span></span> at this price.';
    return '<div class="x6-frame"><div class="x6"><div class="x6-strip">' +
      '<div class="x6-stub">' + ICON.shield + '<h2>Before you spend</h2></div>' +
      panel(' x6-rtp', base + 'case.html#h2-pays', false, 'Tested RTP, Ironbound', '94.2<small> %</small>', ev, 'What this case pays', caseArt) +
      panel('', base + 'withdraw.html', g, 'Median time to Steam', '1<small> h </small>40<small> m</small>', 'Nine in ten arrive within 6&#160;h&#160;15&#160;m.', 'How a withdrawal settles') +
      panel(' x6-fee', base + 'withdraw.html#h3-total', g, 'Our commission on withdrawals', '0<small> %</small>', 'Withdrawals go to Steam, commission free.', 'What this settles at') +
      '</div><div class="x6-row"><div class="x6-plate">' +
      '<a class="x6-fig" href="' + base + 'fair.html"><span class="x6-k">Checkable without an account</span><span class="x6-word">Every round</span></a>' +
      '<span class="x6-hash"><code>4f2a91c7…7e15b208</code><span class="x6-ok">' + ICON.ok + 'Recomputed: matches</span></span>' +
      '<a class="v4-btn v4-btn--s x6-btn" href="' + base + 'fair.html">Check a round</a></div>' +
      ROUNDS.map(function (r) { return card(r, base); }).join('') + '</div></div></div>';
  }

  window.V4Proof = { render: render };

  /* ---- the lab: proof-lab.html marks the place with data-v4-proof ---- */
  function lab() {
    var host = document.querySelector('[data-v4-proof]');
    if (host && !host.querySelector('.x6-frame')) host.innerHTML = render({ base: '../../wireframes/' });
  }
  /* ---- Home: swap _nav.js's row of four for A6 refined, Home only, where the shell says index.html and the heading stands ---- */
  function mount() {
    var shell = window.WF_SHELL, head = document.getElementById('h2-proof');
    if (!shell || shell.active !== 'index.html' || !head) return;
    var sec = head.closest('section');
    if (!sec || sec.querySelector('.x6-frame')) return;
    var figs = sec.querySelector('.wf-figs');
    var wrap = document.createElement('div');
    wrap.innerHTML = render({ base: window.WF_BASE || '../../wireframes/', guest: !shell.account });
    if (figs) sec.replaceChild(wrap.firstChild, figs);
    else sec.appendChild(wrap.firstChild);
  }
  function start() {
    lab();
    mount();
    var main = document.querySelector('.wf-main');
    if (main && window.MutationObserver) new MutationObserver(mount).observe(main, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
