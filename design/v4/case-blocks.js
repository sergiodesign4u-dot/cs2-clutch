/* design/v4/case-blocks.js, the case screen's blocks in v4, D-209, founder of 4 Nov 2026: the case page's parts are its blocks, as Home's
   are, each with its variants on its own lab page ("страница с блоком Best drops и варианты как это может выглядеть"), and what Home
   already settled is reused rather than drawn again. It writes no new markup of its own kind: the variants put Home's own pieces on the
   case page's own figures. Best drops B and Published against observed C take Home's round card (proof-home.css .x6-card), What this case
   pays B takes Home's money strip (.x6-strip), every heading takes Home's Menu tile (case-blocks.css).
   The address picks a block's variant: ?info= ?drops= ?pays= ?observed= (?table= is case-body.js's, ?stage= case-page.js's).
   ?embed&focus=<block> draws one block alone for its lab and tells the lab its height. Figures are the grey screen's samples, D-124. */
(function () {
  var Q = new URLSearchParams(location.search);
  var V = { info: Q.get('info') || 'a', drops: Q.get('drops') || 'a', pays: Q.get('pays') || 'a', observed: Q.get('observed') || 'a' };
  var W = window.WF_BASE || '../../wireframes/', SKINS = '../concept/assets/skins/';
  var ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // the tier's plate, Home's round card colours (proof-home.js ROUNDS), the other tiers from the same rarity steps
  var PLATE = { r1: ['#B57A06', '#B4400F'], r2: ['#D1273E', '#7A0F22'], r3: ['#A62BC4', '#4A1260'], r4: ['#6B42B9', '#2E1A63'], r5: ['#3955E8', '#1B2A8F'] };
  var TIER = { r1: 'Extraordinary', r2: 'Covert', r3: 'Classified', r4: 'Restricted', r5: 'Mil-Spec' };
  var TIERCLS = { Covert: 'r2', Classified: 'r3', Restricted: 'r4', 'Mil-Spec': 'r5', Extraordinary: 'r1' };
  // the checked rounds whose ticket the grey screens print, ROUNDS.ak and ROUNDS.glock in wireframes/_nav.js
  var TICKET = { 'AK-47 Redline': ['2&#160;417', 2.417], 'Glock-18 Water Elemental': ['29&#160;684', 29.684] };

  function go(t) { var i = t.lastIndexOf(' '); return t.slice(0, i + 1) + '<span class="nw">' + t.slice(i + 1) + ARROW + '</span>'; }
  function txt(n, s) { var x = n && n.querySelector(s); return x ? x.textContent.replace(/\s+/g, ' ').trim() : ''; }
  function price() { return (window.V4Case && window.V4Case.price) || 12.40; }
  function num(s) { return parseFloat(String(s).replace('−', '-').replace(/[^\d.\-]/g, '')); }

  /* ---- links: the grey body writes its links relative to wireframes/, and on this copy they pointed at design/v4/ where no such page is ---- */
  function relink(root) {
    Array.prototype.forEach.call(root.querySelectorAll('a[href]'), function (a) {
      var h = a.getAttribute('href');
      if (!h || /^(#|https?:|mailto:|\/|\.\.\/)/.test(h)) return;
      var f = h.split(/[?#]/)[0];
      if (f === 'case.html' || /-lab\.html$/.test(f) || f === 'index.html' || f === 'rare-drops.html') return;
      a.setAttribute('href', W + h);
    });
    // the way back to Home is v4's Home, signed in or not as this page is
    Array.prototype.forEach.call(root.querySelectorAll('a[href$="wireframes/index-account.html"], a[href$="wireframes/index.html"]'), function (a) {
      a.setAttribute('href', 'index.html' + (window.WF_SHELL && window.WF_SHELL.account ? '?account' : ''));
    });
  }

  /* ---- the item table, read once: name to tier, chance, value, ticket range ---- */
  function items() {
    var out = {};
    Array.prototype.forEach.call(document.querySelectorAll('.wf-drops tr.v4b-row'), function (tr) {
      var n = txt(tr, '.wf-d-weapon') + ' ' + txt(tr, '.wf-d-skin'), t = txt(tr, 'td[data-l="Tickets"]').split(' to ');
      out[n] = { r: (tr.className.match(/\br[1-7]\b/) || ['r5'])[0], ch: num(txt(tr, 'td[data-l="Chance"]')), v: num(txt(tr, 'td[data-l="Value"]')),
        a: (num(t[0]) - 1) / 1000, b: num(t[1]) / 1000, range: t.join(' to ') };
    });
    return out;
  }

  /* ---- Before you open: A the quiet panel; B two plates with Home's tile; C the two lines under the act, at the moment of spending ---- */
  function info() {
    var s = document.querySelector('.wf-case-info');
    if (!s || s.hasAttribute('data-v')) return;
    s.setAttribute('data-v', V.info);
    var c = s.querySelector('.wf-cost-say'), w = s.querySelector('.wf-case-warn');
    if (c) c.classList.add('v4i-cost');
    if (w) w.classList.add('v4i-steam');
    if (V.info === 'c') { var cm = document.querySelector('.v4c-commit'); if (cm) cm.appendChild(s); }
  }

  /* ---- Best drops: A the live drops' card; B Home's round card; C the best drop large, the rest ranked beside it ---- */
  function card(d, it, big) {
    var tk = TICKET[d.n], p = PLATE[d.r] || PLATE.r5;
    var rg = it ? '<span class="x6-ruler" style="--a:' + it.a + '; --b:' + it.b + '; --t:' + (tk ? tk[1] : 0) + '" role="img" aria-label="' +
      (tk ? 'Ticket ' + tk[0].replace('&#160;', ' ') + ', in the range ' : 'Its tickets, ') + it.range + '"><i></i>' + (tk ? '<b></b>' : '') + '</span>' : '';
    return '<a class="x6-card v4d-card' + (big ? ' is-big' : '') + '" href="' + d.href + '" style="--r1:' + p[0] + '; --r2:' + p[1] + '">' +
      '<img class="x6-skin" src="' + d.img + '" alt="" width="512" height="384">' +
      '<span class="x6-r">' + (TIER[d.r] || '') + '</span><span class="x6-w">' + d.w + '</span><b class="x6-s">' + d.s + '</b>' +
      '<span class="x6-from">won from Ironbound, ' + d.t + '</span>' +
      '<span class="x6-t"><b class="v4d-val">' + d.v.toFixed(2) + '&#160;coins</b>' + (it ? ' · ' + it.ch.toFixed(3) + '&#160;% · ×' + (d.v / price()).toFixed(2) + ' of the price' : '') + '</span>' +
      (tk ? '<span class="x6-t">ticket <b>' + tk[0] + '</b> of 100&#160;000</span>' : '') + rg +
      '<span class="x6-cgo">' + go('Check this round') + '</span></a>';
  }
  function drops(IT) {
    var ul = document.querySelector('.wf-recent');
    if (!ul || ul.hasAttribute('data-v')) return;
    ul.setAttribute('data-v', V.drops);
    if (V.drops === 'a') return;
    var D = Array.prototype.map.call(ul.querySelectorAll('li > a'), function (a) {
      var w = txt(a, '.wf-r-w'), s = txt(a, '.wf-r-s'), im = a.querySelector('img');
      return { w: w, s: s, n: w + ' ' + s, v: num(txt(a, '.wf-r-v')), t: txt(a, '.wf-r-t').replace(',', ''), href: a.getAttribute('href'), img: im ? im.getAttribute('src') : '',
        r: (a.parentNode.className.match(/\br[1-7]\b/) || ['r5'])[0] };
    });
    if (!D.length) return;
    var box = document.createElement('div');
    box.className = 'v4d v4d--' + V.drops;
    if (V.drops === 'b') box.innerHTML = '<div class="x6 v4d-grid">' + D.map(function (d) { return card(d, IT[d.n]); }).join('') + '</div>';
    else {
      var top = D[0].v;
      box.innerHTML = '<div class="x6 v4d-lead">' + card(D[0], IT[D[0].n], true) + '</div><ol class="v4d-list">' + D.slice(1).map(function (d) {
        var it = IT[d.n];
        return '<li class="' + d.r + '"><a href="' + d.href + '"><img src="' + d.img + '" alt="" loading="lazy"><span class="v4d-n"><span>' + d.w + '</span><b>' + d.s + '</b></span>' +
          '<span class="v4d-v"><b>' + d.v.toFixed(2) + '&#160;coins</b><span class="v4d-bar" style="--w:' + (d.v / top * 100).toFixed(1) + '" aria-hidden="true"></span></span>' +
          '<span class="v4d-m">' + (it ? it.ch.toFixed(3) + '&#160;% · ×' + (d.v / price()).toFixed(2) : '') + '</span><span class="v4d-t">' + d.t + '</span></a></li>';
      }).join('') + '</ol>';
    }
    ul.parentNode.insertBefore(box, ul.nextSibling);
  }

  /* ---- What this case pays: A four figures; B Home's money strip; C the price against what comes back ---- */
  function pays() {
    var h = document.getElementById('h2-pays'), host = h && h.closest('section'), figs = host && host.querySelector('.wf-figs');
    if (!figs || figs.hasAttribute('data-v')) return;
    figs.setAttribute('data-v', V.pays); host.setAttribute('data-pays', V.pays);
    if (V.pays === 'a') return;
    var F = Array.prototype.map.call(figs.querySelectorAll('.wf-fig'), function (f) { return { v: txt(f, '.wf-fig-v'), c: f.querySelector('.wf-fig-c').innerHTML, link: f.querySelector('.wf-fig-c a') }; });
    var rtp = F[0], ev = F[1], back = F[2], copy = F[3], P = price(), EVn = num(ev.v), BK = num(back.v);
    var box = document.createElement('div');
    if (V.pays === 'b') {
      var caseArt = '<span class="x6-case" aria-hidden="true"><span class="b"></span><img class="sk" src="' + SKINS + 'ak-47-redline.png" alt="" width="512" height="384"><span class="f"></span></span>';
      var p = function (cls, k, v, say, link) {
        return '<div class="x6-p' + cls + '">' + (cls.indexOf('rtp') >= 0 ? caseArt : '') + '<span class="x6-k">' + k + '</span><span class="x6-v">' + v + '</span><span class="x6-say">' + say + '</span>' + (link || '') + '</div>';
      };
      box.className = 'x6-frame v4p-b';
      box.innerHTML = '<div class="x6"><div class="x6-strip v4p-strip"><div class="x6-stub" aria-hidden="true"><span class="v4p-ic"></span><span class="v4p-h">What this case pays</span></div>' +
        p(' x6-rtp', 'Tested RTP, Ironbound', rtp.v.replace(/\s%/, '<small> %</small>'), 'In coins at our values.') +
        p('', 'Expected value per open', '<span class="x6-money">' + EVn.toFixed(2) + '</span>', 'Every chance above times its value.') +
        p('', 'Chance to get back its price', BK.toFixed(1) + '<small> %</small>', 'At least ' + P.toFixed(2) + '&#160;coins back.') +
        (copy ? p(' x6-fee', 'Against a real copy', copy.v.replace(/\s%/, '<small> %</small>'), 'Our values, case average.', '<a class="x6-go" href="' + copy.link.getAttribute('href') + '">' + go('How it settles') + '</a>') : '') +
        '</div></div>';
    } else {
      box.className = 'v4p-c';
      box.innerHTML = '<div class="v4p-row"><span class="v4p-k">Price, one open</span><span class="v4p-bar"><i style="--w:100"></i></span><b>' + P.toFixed(2) + '&#160;coins</b></div>' +
        '<div class="v4p-row is-ev"><span class="v4p-k">Expected value per open</span><span class="v4p-bar"><i style="--w:' + (EVn / P * 100).toFixed(1) + '"></i></span><b>' + EVn.toFixed(2) + '&#160;coins</b></div>' +
        '<p class="v4p-say">Tested RTP <b>' + rtp.v + '</b>: on average an open returns ' + EVn.toFixed(2) + ' of its ' + P.toFixed(2) + '&#160;coins.</p>' +
        '<div class="v4p-split" role="img" aria-label="' + BK.toFixed(1) + ' percent of opens get back at least the price"><span class="is-up" style="flex:' + BK + '"><b>' + BK.toFixed(1) + '&#160;%</b> get back at least its price</span><span style="flex:' + (100 - BK) + '"><b>' + (100 - BK).toFixed(1) + '&#160;%</b> less</span></div>' +
        (copy ? '<p class="v4p-say"><b>' + copy.v + '</b>: ' + copy.c + '</p>' : '');
    }
    figs.parentNode.insertBefore(box, figs);
  }

  /* ---- Published against observed: A the table; B each tier as two bars and its gap; C each tier on Home's round card ---- */
  function observed() {
    var h = document.getElementById('h2-observed'), sec = h && h.closest('section'), tb = sec && sec.querySelector('.wf-table');
    if (!tb || tb.hasAttribute('data-v')) return;
    tb.setAttribute('data-v', V.observed); sec.setAttribute('data-obs', V.observed);
    if (V.observed === 'a') return;
    var R = Array.prototype.map.call(tb.querySelectorAll('tbody tr'), function (tr) {
      var c = tr.children; return { n: c[0].textContent.trim(), p: num(c[1].textContent), o: num(c[2].textContent), k: c[3].textContent.trim() };
    });
    var box = document.createElement('div'); box.className = 'v4o-obs v4o-obs--' + V.observed; box.setAttribute('aria-hidden', 'true');
    function gap(r) { var d = r.o - r.p; return (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(2); }
    if (V.observed === 'b') {
      box.innerHTML = R.map(function (r) {
        return '<div class="v4o-r ' + (TIERCLS[r.n] || 'r5') + '"><span class="v4o-n">' + r.n + '</span><span class="v4o-bars"><span class="v4o-pub" style="--w:80"><em>Published ' + r.p.toFixed(3) + '&#160;%</em></span>' +
          '<span class="v4o-ob" style="--w:' + (r.o / r.p * 80).toFixed(2) + '"><em>Observed ' + r.o.toFixed(2) + '&#160;%</em></span></span><span class="v4o-d">' + gap(r) + '</span></div>';
      }).join('') + '<p class="v4o-k">' + (R[0] ? R[0].k : '') + ' rounds counted in every tier</p>';
    } else {
      box.className += ' x6';
      box.innerHTML = R.map(function (r) {
        var p = PLATE[TIERCLS[r.n] || 'r5'];
        return '<div class="x6-card v4o-card" style="--r1:' + p[0] + '; --r2:' + p[1] + '"><span class="x6-r">' + r.n + '</span><span class="x6-w">Observed</span><b class="v4o-big">' + r.o.toFixed(2) + '<small> %</small></b>' +
          '<span class="x6-from">Published ' + r.p.toFixed(3) + '&#160;%, ' + gap(r) + '</span><span class="x6-t">' + r.k + ' rounds</span></div>';
      }).join('');
    }
    var wrap = tb.closest('.wf-tablewrap') || tb;
    wrap.parentNode.insertBefore(box, wrap);
  }

  /* ---- ?embed&focus=<block>: one block alone, for its lab, which sizes its frame by the height this posts ---- */
  var FOCUS = { info: '.wf-case-info', drops: '#h2-recent', table: '#h2-contents', pays: '#h2-pays', observed: '#h2-observed', how: '#h2-how' };
  function focus() {
    var sel = FOCUS[Q.get('focus')], n = sel && document.querySelector(sel), main = document.querySelector('.wf-main');
    if (!n || !main) return;
    while (n.parentNode && n.parentNode !== main) n = n.parentNode;
    Array.prototype.forEach.call(main.children, function (c) { c.classList.toggle('v4-focus-on', c === n); });
    document.documentElement.classList.add('v4-focus');
  }
  function post() {
    if (!Q.has('focus') || window.parent === window) return;
    var m = document.querySelector('.wf-main');
    window.parent.postMessage({ v4lab: location.search, h: Math.ceil((m ? m.getBoundingClientRect().height : 0) + 4) }, '*');
  }

  var tries = 0;
  function run() {
    var main = document.querySelector('.wf-main');
    if (!main || !document.querySelector('.wf-drops[data-v4] .v4b-row')) return false;
    var IT = items();
    info(); drops(IT); pays(); observed();
    relink(document.querySelector('.wf-screen-body') || document);
    if (Q.has('focus')) { focus(); post(); if (window.ResizeObserver) new ResizeObserver(post).observe(main); }
    return true;
  }
  function start() { if (!run() && tries++ < 80) setTimeout(start, 60); }
  if (document.readyState === 'complete') start(); else window.addEventListener('load', function () { setTimeout(start, 0); });
  window.V4Blocks = { variant: V };
})();
