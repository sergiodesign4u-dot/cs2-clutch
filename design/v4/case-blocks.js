/* design/v4/case-blocks.js, the case screen's blocks in v4, D-209, founder of 4 Nov 2026: the case page's parts are its blocks, as Home's
   are, each with its variants on its own lab page ("страница с блоком Best drops и варианты как это может выглядеть"), and what Home
   already settled is reused rather than drawn again. It writes no new markup of its own kind: the variants put Home's own pieces on the
   case page's own figures. Best drops B and Published against observed C take Home's round card (proof-home.css .x6-card), What this case
   pays B takes Home's money strip (.x6-strip), every heading takes Home's Menu tile (case-blocks.css).
   The address picks a block's variant: ?info= ?drops= ?pays= ?observed= (?table= is case-body.js's, ?stage= case-page.js's).
   ?embed&focus=<block> draws one block alone for its lab and tells the lab its height. Figures are the grey screen's samples, D-124. */
(function () {
  var Q = new URLSearchParams(location.search);
  // D of each, founder of 9 Nov 2026: "делаем вот это симпатично" (the two lines) and "скины в best drops делаем тоже классными и как на сайте";
  // pays B, founder of 10 Nov 2026: "What this case pays давай теперь делать, в целом думаю норм будет"; observed D the same day: "мне
  // нравится как у нас было в направлении"; how F, the reworked B: "вот этот интересный получился, но его бы я доработал", picked the same day: "о, прикольно, берем"
  var V = { info: Q.get('info') || 'd', drops: Q.get('drops') || 'd', pays: Q.get('pays') || 'b', observed: Q.get('observed') || 'd', how: Q.get('how') || 'i' }; // How I since 10 Nov 2026, founder: "самый адекватный вариант"
  var W = window.WF_BASE || '../../wireframes/', SKINS = '../concept/assets/skins/';
  var ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // the tier's plate, Home's round card colours (proof-home.js ROUNDS), the other tiers from the same rarity steps
  var PLATE = { r1: ['#B57A06', '#B4400F'], r2: ['#D1273E', '#7A0F22'], r3: ['#A62BC4', '#4A1260'], r4: ['#6B42B9', '#2E1A63'], r5: ['#3955E8', '#1B2A8F'] };
  var TIER = { r1: 'Extraordinary', r2: 'Covert', r3: 'Classified', r4: 'Restricted', r5: 'Mil-Spec' };
  var TIERCLS = { Covert: 'r2', Classified: 'r3', Restricted: 'r4', 'Mil-Spec': 'r5', Extraordinary: 'r1' };
  // the checked rounds whose ticket the grey screens print, ROUNDS.ak and ROUNDS.glock in wireframes/_nav.js
  var TICKET = { 'AK-47 Redline': ['417', 0.417], 'Glock-18 Water Elemental': ['12&#160;684', 12.684] }; // D-217

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
    // D: each line a plate of its own, its mark on Home's tile, the lead as the plate's title and the link as the plate's way out
    if (V.info === 'd') Array.prototype.forEach.call(s.querySelectorAll(':scope > p'), function (p) {
      var st = p.querySelector('strong'), a = p.querySelector('a'), head = st ? st.textContent.replace(/\.\s*$/, '') : '';
      if (st) st.remove(); if (a) a.remove();
      var say = p.textContent.trim();
      p.innerHTML = '<span class="v4i-ic" aria-hidden="true"></span><span class="v4i-body"><strong class="v4i-h">' + head + '</strong><span class="v4i-say">' + say + '</span></span>';
      if (a) { a.className = 'v4i-go'; a.innerHTML = go(a.textContent.trim()); p.querySelector('.v4i-body').appendChild(a); }
    });
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
      return { w: w, s: s, n: w + ' ' + s, v: num(txt(a, '.wf-r-v')), t: txt(a, '.wf-r-t').replace(',', ''), tc: txt(a, '.wf-r-t'), href: a.getAttribute('href'), img: im ? im.getAttribute('src') : '',
        r: (a.parentNode.className.match(/\br[1-7]\b/) || ['r5'])[0] };
    });
    if (!D.length) return;
    var box = document.createElement('div');
    box.className = 'v4d v4d--' + V.drops;
    // D: the stage's own card, W7 of card-lab.html (case-open.js card, case-stage.css): the value first with the coin, the skin in its tier's
    // lit ring, the gun and the skin under it, the moment it dropped, the tier's short bar at the foot
    // founder of 9 Nov 2026: "только в одну строку", "огромные скины не надо делать" and "по ховеру типа кому упало и когда": one row that
    // scrolls sideways when it runs out of width, the skin held to one height, and who won it and when over the card on hover or focus
    // (the name is 7.1's, WF_WON_BY in wireframes/_nav.js, the picture account-home.js V4Ava, round, founder of 10 Nov 2026; "won by" stays
    // for a screen reader, G42)
    if (V.drops === 'd') box.innerHTML = '<ol class="v4d-w7">' + D.map(function (d) {
      var k = (d.href.match(/[?&]round=([^&#]+)/) || [0, 'ak'])[1], who = window.WF_WON_BY ? window.WF_WON_BY(k) : '';
      return '<li class="' + d.r + '"><a href="' + d.href + '"><span class="v4d-p"><img src="art/brand/coin-6-small.svg" alt="">' + d.v.toFixed(2) + '<span class="v4d-c">&#160;coins</span></span>' +
        '<span class="v4d-art"><span class="v4d-plate"></span>' + (window.V4Open && window.V4Open.hex ? window.V4Open.hex() : '') + '<img class="v4d-img" src="' + d.img + '" alt="" loading="lazy"></span>' +
        '<span class="v4d-w">' + d.w + '</span><b class="v4d-s">' + d.s + '</b>' +
        (who ? '<span class="v4d-who">' + (window.V4Ava ? '<img class="v4d-av v4-ava" src="' + window.V4Ava(who) + '" alt="">' : '') + '<span class="v4d-c">won by&#160;</span><b class="v4d-wn">' + who + '</b><span class="v4d-t">' + d.tc + '</span></span>'
          : '<span class="v4d-t">' + d.tc + '</span>') + '</a></li>';
    }).join('') + '</ol>';
    else if (V.drops === 'b') box.innerHTML = '<div class="x6 v4d-grid">' + D.map(function (d) { return card(d, IT[d.n]); }).join('') + '</div>';
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

  /* ---- What is in this case, F, founder of 9 Nov 2026: "должно быть красиво в стиле нашем и аккуратным", the name, the picture, the
     chance and the range of the 100 000 it falls in. Every item on the stage's own card, the one Best drops D draws: the value first with the
     coin (the word stays for a screen reader), the skin in its tier's lit ring, the gun, the skin, the wear, then the chance and the tickets
     at the foot over a line of the 100 000 with the item's stretch of it lit. The table stays a table; case-body.css draws it ---- */
  function table() {
    var t = document.querySelector('.wf-drops[data-v="f"]');
    if (!t || t.hasAttribute('data-f')) return;
    t.setAttribute('data-f', '');
    Array.prototype.forEach.call(t.querySelectorAll('tr.v4b-row'), function (tr) {
      var art = tr.querySelector('.wf-art-c'), v = tr.querySelector('td[data-l="Value"]'), rl = tr.querySelector('.v4b-rule');
      // the item's stretch of the 100 000, case-body.js's ruler, handed to the card so its foot line can draw it
      if (rl) { tr.style.setProperty('--a', rl.style.getPropertyValue('--a')); tr.style.setProperty('--b', rl.style.getPropertyValue('--b')); }
      if (art) art.insertAdjacentHTML('afterbegin', '<span class="v4d-plate" aria-hidden="true"></span>' + (window.V4Open && window.V4Open.hex ? window.V4Open.hex() : ''));
      if (v && !v.querySelector('.wf-fig-missing')) {
        var n = num(v.firstChild ? v.firstChild.textContent : '');
        if (!isNaN(n)) v.firstChild.replaceWith(document.createRange().createContextualFragment('<img class="v4f-coin" src="art/brand/coin-6-small.svg" alt="">' + n.toFixed(2) + '<span class="v4d-c">&#160;coins</span>'));
      }
    });
  }

  /* ---- What this case pays: A four figures; B Home's money strip; C the price against what comes back ---- */
  function pays(IT) {
    var h = document.getElementById('h2-pays'), host = h && h.closest('section'), figs = host && host.querySelector('.wf-figs');
    if (!figs || figs.hasAttribute('data-v')) return;
    figs.setAttribute('data-v', V.pays); host.setAttribute('data-pays', V.pays);
    if (V.pays === 'a') return;
    var F = Array.prototype.map.call(figs.querySelectorAll('.wf-fig'), function (f) { return { v: txt(f, '.wf-fig-v'), c: f.querySelector('.wf-fig-c').innerHTML, link: f.querySelector('.wf-fig-c a') }; });
    var rtp = F[0], ev = F[1], back = F[2], copy = F[3], P = price(), EVn = num(ev.v), BK = num(back.v);
    var box = document.createElement('div');
    if (V.pays === 'b') {
      // founder of 10 Nov 2026: "данные кейса должны быть как и картинка": the case in the strip, its name and the skin rising out of it are
      // this page's own, read from its H1 and its item table (the most valuable item), never Home's Ironbound typed in again
      var K = ((document.getElementById('h1') || {}).firstChild || {}).textContent || 'Ironbound'; K = K.trim();
      var art = 'art/cases-v2/' + K.toLowerCase() + '-c.webp', top = Object.keys(IT).sort(function (a, b) { return IT[b].v - IT[a].v; })[0] || 'AK-47 Redline';
      var bg = ' style="background-image: url(' + art + ')"';
      var caseArt = '<span class="x6-case" aria-hidden="true"><span class="b"' + bg + '></span><img class="sk" src="' + SKINS + top.toLowerCase().replace(/★\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.png" alt="" width="512" height="384"><span class="f"' + bg + '></span></span>';
      var p = function (cls, k, v, say, link) {
        return '<div class="x6-p' + cls + '">' + (cls.indexOf('rtp') >= 0 ? caseArt : '') + '<span class="x6-k">' + k + '</span><span class="x6-v">' + v + '</span><span class="x6-say">' + say + '</span>' + (link || '') + '</div>';
      };
      box.className = 'x6-frame v4p-b';
      box.innerHTML = '<div class="x6"><div class="x6-strip v4p-strip"><div class="x6-stub" aria-hidden="true"><span class="v4p-ic"></span><span class="v4p-h">What this case pays</span></div>' +
        p(' x6-rtp', 'Tested RTP, ' + K, rtp.v.replace(/\s%/, '<small> %</small>'), 'In coins at our values.') +
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
  function observed(IT) {
    var h = document.getElementById('h2-observed'), sec = h && h.closest('section'), tb = sec && sec.querySelector('.wf-table');
    if (!tb || tb.hasAttribute('data-v')) return;
    tb.setAttribute('data-v', V.observed); sec.setAttribute('data-obs', V.observed);
    if (V.observed === 'a') return;
    /* D, founder of 10 Nov 2026: "мне нравится как у нас было в направлении ... можно улучшить визуальнее и в стиле сайта". The ladder of
       direction 2 (design/concept/directions.html, The stage): every tier's published chance as a bar in its colour on the whole 100 %, the
       observed rate a lit tick on it, the observed figure and the rounds beside it. The table stays the table: its own rows are dressed, the
       column names repeated on each cell (data-l) so a phone, which hides the head, still names them; no new words */
    if (V.observed === 'd') {
      var L = Array.prototype.map.call(tb.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
      Array.prototype.forEach.call(tb.querySelectorAll('tbody tr'), function (tr) {
        var c = tr.children, pv = num(c[1].textContent), ov = num(c[2].textContent);
        Array.prototype.forEach.call(c, function (td, i) { if (L[i]) td.setAttribute('data-l', L[i]); });
        c[0].insertAdjacentHTML('afterbegin', '<span class="v4o-hx" aria-hidden="true"></span>');
        c[1].innerHTML = '<span class="v4o-pv">' + c[1].innerHTML + '</span><span class="v4o-bar" aria-hidden="true" style="--p:' + pv + '; --o:' + ov + '"><i></i><b></b></span>';
        // the change under it, founder of 10 Nov 2026: "в Observed покажем так же снизу процент изменения, плюс либо минус, цветным": observed
        // less published, in the same per cent of all rounds, signed, coloured and with an arrow so the colour is never the only sign
        // the colour says who it favours, founder of 10 Nov 2026: "давай на пользу игрока". A tier whose items are worth the price on average
        // (the table's own values against one open's price) favours the player when it comes out more; a tier worth less, when it comes
        // out less. The arrow keeps the direction
        var d = Math.round((ov - pv) * 100) / 100, rc = TIERCLS[c[0].textContent.trim()], vs = Object.keys(IT).filter(function (n) { return IT[n].r === rc; }).map(function (n) { return IT[n].v; });
        var worth = vs.length ? vs.reduce(function (a, b) { return a + b; }, 0) / vs.length >= price() : true, good = worth ? d > 0 : d < 0;
        var cls = d === 0 ? 'is-eq' : good ? 'is-up' : 'is-dn';
        c[2].innerHTML = '<span class="v4o-ov"><span class="v4o-tk" aria-hidden="true"></span>' + c[2].innerHTML + '</span>' +
          '<span class="v4o-dl ' + cls + '"><span aria-hidden="true">' + (d > 0 ? '▲' : d < 0 ? '▼' : '') + '</span>' + (d > 0 ? '+' : d < 0 ? '−' : '') + Math.abs(d).toFixed(2) + '&#160;%' +
          (d === 0 ? '' : '<span class="wf-vh">, ' + (good ? 'in your favour' : 'against you') + '</span>') + '</span>';
      });
      // what the colour means, founder of 10 Nov 2026: "червоний ▲ нічим не пояснений, давай поясним" (microcopy 3.3-66). Under the table,
      // before the note: the two colours named, then the rule with this case's own price in it, so a red rise reads as the rule, not a fault
      var wrapD = tb.closest('.wf-tablewrap') || tb;
      if (!sec.querySelector('.v4o-key')) wrapD.insertAdjacentHTML('afterend', '<p class="v4o-key"><span class="v4o-sw is-up">In your favour</span><span class="v4o-sw is-dn">Against you</span>' +
        '<span class="v4o-why">More items from a tier whose average value is at least the price, ' + price().toFixed(2) + '&#160;coins, is in your favour; more from a cheaper tier is not. The arrow shows which way the rate moved.</span></p>');
      return;
    }
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

  /* ---- How this case works, founder of 10 Nov 2026: "давай доделаем последнюю секцию, какие есть варианты" and "покажи мне варианты".
     The words are the IA node's SEO text (block C), never changed here: every row changes only how they are laid out and what stands beside
     them. A as it is; B the text with the tickets drawn: this case's 100 000 split into its items in their tiers' colours, a checked round's
     ticket marked on it and the item it landed on; C two plates as Before you open D, the section's own H2 and the H3 as their titles;
     D as it is with this case and its best item in place of the stock art; E the plates of C with the tickets of B under the first one ---- */
  function sl(n) { return n.toLowerCase().replace(/★\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function caseName() { var h = document.getElementById('h1'); return ((h && h.firstChild && h.firstChild.textContent) || 'Ironbound').trim(); }
  function ruler(IT, small) {
    var N = Object.keys(IT).sort(function (a, b) { return IT[a].a - IT[b].a; });
    var hit = N.filter(function (n) { return TICKET[n]; })[0], it = hit && IT[hit], tk = hit && TICKET[hit];
    var seg = N.map(function (n) { var x = IT[n]; return '<i class="' + x.r + '" style="--a:' + x.a + '; --w:' + (x.b - x.a) + '"></i>'; }).join('');
    return '<div class="v4h-tix' + (small ? ' is-small' : '') + '" aria-hidden="true"><div class="v4h-ends"><span>1</span><span>100&#160;000</span></div>' +
      '<div class="v4h-line">' + seg + (tk ? '<b class="v4h-pin" style="--t:' + tk[1] + '"><span>' + tk[0] + '</span></b>' : '') + '</div>' +
      (it ? '<div class="v4h-got ' + it.r + '" style="--t:' + tk[1] + '"><span class="v4h-ring"><span class="v4d-plate"></span>' + (window.V4Open && window.V4Open.hex ? window.V4Open.hex() : '') +
        '<img src="' + SKINS + sl(hit) + '.png" alt=""></span><span class="v4h-gn"><b>' + hit + '</b><span>' + it.range + '</span></span></div>' : '') + '</div>';
  }
  /* F, founder of 10 Nov 2026 on B: "интересный получился, но я бы доработал, сделай интереснее, и что-то с цифрами 1 и 100к". The two ends
     are the line's own bookends now, not loose labels over it; a checked round's ticket is pinned on the whole 100 000, and its item's stretch
     opens out under it into a line of its own, 1 to 3 180 with the ticket on it, so the range a round resolves against is seen at its own
     scale; under a perforation, as on a ticket, the item it landed on. In view it plays once: the pin runs the line and stops on its
     ticket, the stretch opens, the number counts up to it, the item comes up. Reduced motion shows it at rest */
  function ruler2(IT) {
    var N = Object.keys(IT).sort(function (a, b) { return IT[a].a - IT[b].a; });
    var hit = N.filter(function (n) { return TICKET[n]; })[0];
    if (!hit) return ruler(IT);
    var it = IT[hit], tk = TICKET[hit], rg = it.range.split(' to '), lo = num(rg[0]), hi = num(rg[1]), t = num(tk[0].replace(/&#160;/g, ''));  // the entity's own digits would read as part of the number
    var z = ((t - lo) / (hi - lo) * 100).toFixed(2);
    var seg = N.map(function (n) { var x = IT[n]; return '<i class="' + x.r + (n === hit ? ' is-hit' : '') + '" style="--a:' + x.a + '; --w:' + (x.b - x.a) + '"></i>'; }).join('');
    var end = function (v) { return '<span class="v4t-end">' + v + '</span>'; };
    return '<div class="v4t ' + it.r + '" aria-hidden="true" style="--t:' + tk[1] + '; --ha:' + it.a + '; --hb:' + it.b + '; --z:' + z + '">' +
      '<div class="v4t-row">' + end('1') + '<div class="v4t-line">' + seg + '<b class="v4t-pin"></b></div>' + end('100&#160;000') + '</div>' +
      '<div class="v4t-row v4t-fun-row"><span></span><svg class="v4t-fun" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="' + it.a + ',0 ' + it.b + ',0 100,100 0,100"/></svg><span></span></div>' +
      '<div class="v4t-row">' + end(rg[0]) + '<div class="v4t-zoom"><b class="v4t-zpin"><span class="v4t-n" data-to="' + t + '">' + tk[0] + '</span></b></div>' + end(rg[1]) + '</div>' +
      '<div class="v4t-cut"></div>' +
      '<div class="v4t-got"><span class="v4h-ring"><span class="v4d-plate"></span>' + (window.V4Open && window.V4Open.hex ? window.V4Open.hex() : '') + '<img src="' + SKINS + sl(hit) + '.png" alt=""></span>' +
      '<span class="v4h-gn"><b>' + hit + '</b><span>' + it.range + '</span></span><span class="v4t-tk">' + tk[0] + '</span></div></div>';
  }
  /* G, H and I, founder of 10 Nov 2026 on F: "вроде хорошо, но не очень, этот красный треугольник смотрится странно, в целом есть над чем
     ещё поработать", and "да, давай" to three rows to compare. All three tidy F the same way: the 1 and the 100 000 are quiet figures under
     the line's ends rather than plates beside it, the ticket's number is said once, on its pin, and the stub keeps the item and its range.
     G: F with the filled triangle gone; two fine dashed lines run from the ends of the item's stretch to the ends of its own line.
     H: no second line; a round lens over the stretch holds it enlarged, 1 to 3 180 with the ticket on it, on a stem from the stretch.
     I: no second line; the 100 000 as a ruler, ticks every 5 000 and its quarters named under it, the ticket a flag dropped on it over
     the item's lit stretch; the stub names the item and its range */
  function ruler3(IT, k) {
    var N = Object.keys(IT).sort(function (a, b) { return IT[a].a - IT[b].a; });
    var hit = N.filter(function (n) { return TICKET[n]; })[0];
    if (!hit) return ruler(IT);
    var it = IT[hit], tk = TICKET[hit], rg = it.range.split(' to '), lo = num(rg[0]), hi = num(rg[1]), t = num(tk[0].replace(/&#160;/g, ''));
    var z = ((t - lo) / (hi - lo) * 100).toFixed(2), m = ((it.a + it.b) / 2).toFixed(2);
    var seg = N.map(function (n) { var x = IT[n]; return '<i class="' + x.r + (n === hit ? ' is-hit' : '') + '" style="--a:' + x.a + '; --w:' + (x.b - x.a) + '"></i>'; }).join('');
    var nTag = '<span class="v4t-n" data-to="' + t + '">' + tk[0] + '</span>';
    var ends = function (a, b) { return '<div class="v4u-ends"><span>' + a + '</span><span>' + b + '</span></div>'; };
    var top = '<div class="v4u-top"><div class="v4t-line">' + seg + '<b class="v4t-pin">' + (k === 'i' ? nTag : '') + '</b></div>' +
      (k === 'i' ? '<div class="v4u-scale">' + Array.apply(null, Array(21)).map(function (_, i) { return '<i' + (i % 5 ? '' : ' class="is-q"') + ' style="--k:' + (i * 5) + '"></i>'; }).join('') + '</div>' +
        '<div class="v4u-qs">' + ['1', '25&#160;000', '50&#160;000', '75&#160;000', '100&#160;000'].map(function (q, i) { return '<span style="--k:' + (i * 25) + '">' + q + '</span>'; }).join('') + '</div>'
        : ends('1', '100&#160;000')) + '</div>';
    var mid = '';
    if (k === 'g') mid = '<svg class="v4u-con" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="' + it.a + '" y1="0" x2="0" y2="100"/><line x1="' + it.b + '" y1="0" x2="100" y2="100"/></svg>' +
      '<div class="v4u-zrow"><div class="v4t-zoom"><b class="v4t-zpin">' + nTag + '</b></div>' + ends(rg[0], rg[1]) + '</div>';
    if (k === 'h') mid = '<div class="v4u-lensrow"><svg class="v4u-stem"><line/></svg><div class="v4u-lens"><span class="v4u-lname">' + hit + '</span>' +
      '<div class="v4t-zoom"><b class="v4t-zpin">' + nTag + '</b></div>' + ends(rg[0], rg[1]) + '</div></div>';
    return '<div class="v4t v4u is-' + k + ' ' + it.r + '" aria-hidden="true" style="--t:' + tk[1] + '; --ha:' + it.a + '; --hb:' + it.b + '; --z:' + z + '; --m:' + m + '">' + top + mid +
      '<div class="v4t-cut"></div>' +
      '<div class="v4t-got"><span class="v4h-ring"><span class="v4d-plate"></span>' + (window.V4Open && window.V4Open.hex ? window.V4Open.hex() : '') + '<img src="' + SKINS + sl(hit) + '.png" alt=""></span>' +
      '<span class="v4h-gn"><b>' + hit + '</b><span>' + it.range + '</span></span></div></div>';
  }
  // H's stem: from the middle of the item's stretch on the line to the top of the lens, wherever the lens had to sit to stay in the card
  function stem(box) {
    var v = box.querySelector('.v4u.is-h'); if (!v) return;
    var row = v.querySelector('.v4u-lensrow'), lens = v.querySelector('.v4u-lens'), ln = v.querySelector('.v4u-stem line'), line = v.querySelector('.v4t-line');
    function set() { var R = row.getBoundingClientRect(), L = lens.getBoundingClientRect(), T = line.getBoundingClientRect(), m = parseFloat(v.style.getPropertyValue('--m'));
      ln.setAttribute('x1', T.left - R.left + T.width * m / 100); ln.setAttribute('y1', T.bottom - R.top + 2); ln.setAttribute('x2', L.left - R.left + L.width / 2); ln.setAttribute('y2', L.top - R.top + 2); }
    set(); if (window.ResizeObserver) new ResizeObserver(set).observe(row);
  }
  function play(box) {
    var v = box.querySelector('.v4t'); if (!v) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { v.classList.add('is-on', 'is-still'); return; }
    var n = v.querySelector('.v4t-n'), to = +n.getAttribute('data-to'), fin = n.innerHTML;
    var go = function () {
      v.classList.add('is-on');
      setTimeout(function () {
        var t0 = performance.now(), D = 900;
        (function step(now) { var k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
          n.textContent = String(Math.max(1, Math.round(to * e))).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          if (k < 1) requestAnimationFrame(step); else n.innerHTML = fin; })(t0);
      }, 1300);
    };
    if (!window.IntersectionObserver) return go();
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); go(); } }, { threshold: .45 });
    io.observe(v);
  }
  function how(IT) {
    var h = document.getElementById('h2-how'), sec = h && h.closest('section');
    if (!sec || sec.hasAttribute('data-how')) return;
    sec.setAttribute('data-how', V.how);
    if (V.how === 'a') return;
    var cols = sec.querySelector('.wf-prose-cols'), K = caseName();
    if (/^[bfghi]$/.test(V.how)) { var sc = document.createElement('div'); sc.className = 'v4h-side';
      sc.innerHTML = V.how === 'f' ? ruler2(IT) : V.how === 'b' ? ruler(IT) : ruler3(IT, V.how); sec.appendChild(sc); if (V.how !== 'b') { play(sc); stem(sc); } }
    if (V.how === 'd') {
      var top = Object.keys(IT).sort(function (a, b) { return IT[b].v - IT[a].v; })[0];
      var art = document.createElement('div'); art.className = 'v4h-art'; art.setAttribute('aria-hidden', 'true');
      art.innerHTML = '<img class="v4h-case" src="art/cases-v2/' + K.toLowerCase() + '-c.webp" alt=""><img class="v4h-sk" src="' + SKINS + sl(top) + '.png" alt="">';
      sec.appendChild(art);
    }
    if (V.how === 'c' || V.how === 'e') {
      var ps = cols.querySelectorAll('p'), h3 = cols.querySelector('h3'), head = sec.querySelector('.wf-sec-head');
      var plate = function (cls, title, p, extra) {
        var d = document.createElement('div'); d.className = 'v4h-plate ' + cls;
        d.innerHTML = '<span class="v4h-ic" aria-hidden="true"></span><div class="v4h-body"></div>';
        var b = d.querySelector('.v4h-body'); b.appendChild(title); b.appendChild(p); if (extra) b.insertAdjacentHTML('beforeend', extra);
        return d;
      };
      var p1 = plate('is-case', h, ps[0], V.how === 'e' ? ruler(IT, true) : ''), p2 = plate('is-check', h3, ps[1]);
      cols.innerHTML = ''; cols.appendChild(p1); cols.appendChild(p2);
      if (head) head.remove();
    }
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

  /* ---- text links in one format, founder of 10 Nov 2026: "надо би к одну формату привести толщина и цвет" (theme.css ONE TEXT LINK). The
     grey body writes these plain; each takes .v4-go and the arrow the plates' links carry. A link holding markup of its own (How it works
     reads its words through data-str) keeps it and takes the arrow after it ---- */
  function links() {
    Array.prototype.forEach.call(document.querySelectorAll('.wf-main .wf-sec-sub a[href], .wf-main .wf-note a[href], .wf-case-how a[href]'), function (a) {
      if (a.classList.contains('v4-go') || (a.className && a.className.trim())) return;
      a.classList.add('v4-go');
      if (a.children.length) a.insertAdjacentHTML('beforeend', ARROW); else a.innerHTML = go(a.textContent.trim());
    });
  }

  /* ---- a rare skin's mark on its item card, shown on hover (rare-mark.css): A, B or C by its chance, as on the band; C gets the card's ground
     as a layer of its own so its flame burns outside the card, founder of 10 Nov 2026 ---- */
  function rare() {
    if (!window.V4Rare) return;
    Array.prototype.forEach.call(document.querySelectorAll('.wf-drops[data-v="f"] tr.v4b-row'), function (tr) {
      if (tr.hasAttribute('data-rm')) return;
      var t = window.V4Rare.mark(tr, num(txt(tr, 'td[data-l="Chance"]')), tr.querySelector('.wf-art-c'));
      tr.setAttribute('data-rm', t || '');
      if (t === 'c') tr.insertAdjacentHTML('afterbegin', '<span class="rm-ground" aria-hidden="true"></span>');
    });
  }

  var tries = 0;
  function run() {
    var main = document.querySelector('.wf-main');
    if (!main || !document.querySelector('.wf-drops[data-v4] .v4b-row')) return false;
    var IT = items();
    info(); drops(IT); table(); pays(IT); observed(IT); how(IT); links(); rare();
    relink(document.querySelector('.wf-screen-body') || document);
    if (Q.has('focus')) { focus(); post(); if (window.ResizeObserver) new ResizeObserver(post).observe(main); }
    return true;
  }
  function start() { if (!run() && tries++ < 80) setTimeout(start, 60); }
  if (document.readyState === 'complete') start(); else window.addEventListener('load', function () { setTimeout(start, 0); });
  window.V4Blocks = { variant: V };
})();
