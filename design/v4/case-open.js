/* design/v4/case-open.js, the open of a case in v4, node 3.5, D-209. One engine for case.html and its labs.
   Founder of 4 Nov 2026: "открітие кейсов ... я думаю єто будет самий большой след импакт для продукта ... кейс опенинг страница должні
   еще более вау смотреться на странице кейса".
   The rules it keeps are case.md section 7, and they are built in, not styled on:
   - the roll is settled before anything moves (7.1, E1): V4Open.roll() picks, and the reel only renders what was picked;
   - no near-miss (7.1, E2): the cards that pass the marker while the reel slows, and the cards still in view after the one it stops on,
     are never worth more than the result; it stops inside the result's card, never on its edge;
   - one roll runs horizontally, two to five run vertically side by side and lock one after another (7.2, 7.2b), 5s for one, +0.6s a lane;
   - a reader who asked for less motion sees the same result in the same order, stilled (7.3); there is no fast mode.
   What it adds is an honest buildup: in the last stretch the frame takes the colour of what is actually landing (E3, rarity scales the
   screen emphasis), so the tension is about a settled result rather than a fake one. Chances, values and the strip are samples, D-124. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ART = (window.V4_ART_BASE || '../concept/assets/skins/');
  // Ironbound's table, wireframes/_nav.js CASE_ITEMS; the Karambit is the demo of the top tier, not in Ironbound
  var TIERS = { 'Extraordinary': 'r1', 'Covert': 'r2', 'Classified': 'r3', 'Restricted': 'r4', 'Mil-Spec': 'r5', 'Industrial': 'r6', 'Consumer': 'r7' };
  var RANK = { r1: 7, r2: 6, r3: 5, r4: 4, r5: 3, r6: 2, r7: 1 };
  function it(w, s, wear, tier, ch, v, slug) { return { w: w, s: s, wear: wear, tier: tier, r: TIERS[tier], ch: ch, v: v, art: ART + slug + '.png' }; }
  var IRONBOUND = [
    it('AK-47', 'Redline', 'Field-Tested · StatTrak', 'Covert', 3.18, 47.30, 'ak-47-redline'),
    it('AWP', 'Asiimov', 'Well-Worn', 'Covert', 1.02, 38.90, 'awp-asiimov'),
    it('M4A1-S', 'Hyper Beast', 'Factory New', 'Classified', 4.60, 24.60, 'm4a1-s-hyper-beast'),
    it('Desert Eagle', 'Blaze', 'Factory New', 'Classified', 2.20, 21.80, 'desert-eagle-blaze'),
    it('USP-S', 'Kill Confirmed', 'Minimal Wear', 'Restricted', 12.00, 14.20, 'usp-s-kill-confirmed'),
    it('Glock-18', 'Water Elemental', 'Minimal Wear', 'Restricted', 14.00, 12.90, 'glock-18-water-elemental'),
    it('MP9', 'Rose Iron', 'Field-Tested', 'Mil-Spec', 22.00, 7.40, 'mp9-rose-iron'),
    it('P250', 'Asiimov', 'Battle-Scarred', 'Mil-Spec', 21.00, 6.90, 'p250-asiimov'),
    it('Nova', 'Koi', 'Factory New', 'Mil-Spec', 20.00, 7.90, 'nova-koi')
  ];
  var KNIFE = it('★ Karambit', 'Tiger Tooth', 'Factory New', 'Extraordinary', 0.008, 1940.00, 'karambit-tiger-tooth');
  function value(x) { return RANK[x.r] * 1e6 + x.v; }

  // the settled roll: a weighted pick by published chance, with a float and a pattern as samples; decided before any motion
  function roll(items, n) {
    var total = items.reduce(function (a, x) { return a + x.ch; }, 0), out = [];
    for (var k = 0; k < (n || 1); k++) {
      var t = Math.random() * total, pick = items[items.length - 1];
      for (var i = 0; i < items.length; i++) { t -= items[i].ch; if (t <= 0) { pick = items[i]; break; } }
      out.push(dress(pick));
    }
    return out;
  }
  function dress(x) { return Object.assign({}, x, { float: (Math.random() * .38 + .01).toFixed(4), pattern: 1 + Math.floor(Math.random() * 999),
    hash: Math.random().toString(16).slice(2, 8) + '…' + Math.random().toString(16).slice(2, 8) }); }

  // the strip: a run of cards whose weights favour variety in the fast part, and nothing better than the result once it slows
  var LEN = 54, AT = 46, SLOW = 9;
  function same(a, b) { return !!a && !!b && a.w === b.w && a.s === b.s; }
  function strip(items, result) {
    var cards = [], floor = items.filter(function (x) { return value(x) <= value(result); });
    for (var i = 0; i < LEN; i++) {
      if (i === AT) { cards.push(result); continue; }
      var pool = (i >= AT - SLOW && i <= AT + 5) ? floor : items; // and nothing better still in view beside it once it stops
      var p = pool[Math.floor(Math.random() * pool.length)];
      // no two alike side by side, and none alike either side of the result, so the result reads as one card and not a run
      for (var g = 0; g < pool.length && pool.length > 1 && (same(p, cards[i - 1]) || (i === AT - 1 && same(p, result))); g++) p = pool[(pool.indexOf(p) + 1) % pool.length];
      cards.push(p);
    }
    return cards;
  }

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  /* the ring round the skin, card-lab.html rows R to V, founder of 6 Nov 2026: "вместо внешней линии и пунктирной ... такое приятное 3д,
     внутри оставь градиент подложку, не меняй угол шестиугольника, поработать над толщиной, цветом, тенями". One hexagon drawn as layers a
     look turns on or off: two soft strokes inside it for the light falling inward, a dark stroke under it for depth, the ring, its upper
     and lower halves for a bevel, a fine line along its middle for a gloss. Hidden unless a look shows it, case-open.css */
  var HP = 'M128 59L98 110.96L38 110.96L8 59L38 7.04L98 7.04Z';
  // rows W1 to W3: the ring's own gradient, top to foot, one per card so each takes its own tier's colour (a stop reads --r where it stands)
  var hexN = 0;
  function hex() {
    // three directions of the same gradient, top to foot (W1 to W3), the left side to the right (W4, W6), the top left corner down (W5)
    var id = 'v4oHx' + (++hexN), stops = '<stop offset="0" class="hs1"/><stop offset=".5" class="hs2"/><stop offset="1" class="hs3"/></linearGradient>';
    return HEX.replace('focusable="false">', 'focusable="false"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1">' + stops +
        '<linearGradient id="' + id + 'h" x1="0" y1="0" x2="1" y2="0">' + stops + '<linearGradient id="' + id + 'd" x1="0" y1="0" x2="1" y2="1">' + stops + '</defs>')
      .replace('class="hx-grad"', 'class="hx-grad" style="stroke:url(#' + id + ')"')
      .replace('class="hx-grad-h"', 'class="hx-grad-h" style="stroke:url(#' + id + 'h)"')
      .replace('class="hx-grad-d"', 'class="hx-grad-d" style="stroke:url(#' + id + 'd)"');
  }
  var HEX = '<svg class="v4o-hex" viewBox="0 0 136 118" aria-hidden="true" focusable="false">' +
    '<path class="hx-g2" d="M119 59L93.5 103.17L42.5 103.17L17 59L42.5 14.83L93.5 14.83Z"/><path class="hx-g1" d="M123 59L95.5 106.63L40.5 106.63L13 59L40.5 11.37L95.5 11.37Z"/>' +
    '<path class="hx-under" d="' + HP + '"/><path class="hx-ring" d="' + HP + '"/>' +
    '<path class="hx-top" d="M8 59L38 7.04L98 7.04L128 59"/><path class="hx-bot" d="M128 59L98 110.96L38 110.96L8 59"/><path class="hx-hi" d="' + HP + '"/>' +
    '<path class="hx-in" d="M125 59L96.5 108.36L39.5 108.36L11 59L39.5 9.64L96.5 9.64Z"/><path class="hx-grad" d="' + HP + '"/><path class="hx-grad-h" d="' + HP + '"/><path class="hx-grad-d" d="' + HP + '"/></svg>';
  function card(x) {
    var c = el('div', 'v4o-card ' + x.r);
    c.setAttribute('data-w', x.w); // the gun's name for a card that sets it as type behind the skin, stage-lab row M
    c.setAttribute('data-p', x.v.toFixed(2)); // and its value, for card-lab.html's card F, which prints it on the card
    // the value in coins rides on every card, hidden unless the card's look shows it: founder of 6 Nov 2026, "акцент сильный на стоимость скина"
    var baked = lean() && BAKED[x.art];
    c.innerHTML = '<span class="v4o-plate"></span><img class="v4o-img' + (baked ? ' is-baked' : '') + '" src="' + (baked || x.art) + '" alt="" draggable="false"><span class="v4o-name"><b>' + x.w + '</b><span>' + x.s + '</span></span>' +
      '<span class="v4o-price"><img src="art/brand/coin-6-small.svg" alt="">' + x.v.toFixed(2) + '</span><span class="v4o-glow" aria-hidden="true"></span>' + hex();
    // a rare skin's mark by its chance in this case, rare-mark.js, on a page that asks for it (case-page.js sets V.marks)
    if (V.marks && window.V4Rare) window.V4Rare.mark(c, x.ch);
    return c;
  }

  // sound: a soft tick per card that passes the marker, and a chord on landing that grows with the tier; off until asked for
  var ac = null;
  var V = { sound: false };
  function tone(f, d, g, type) {
    if (!V.sound) return; try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    var o = ac.createOscillator(), a = ac.createGain(), t = ac.currentTime; o.type = type || 'triangle'; o.frequency.value = f;
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(a); a.connect(ac.destination); o.start(t); o.stop(t + d + .02);
  }
  function tick(speed) { tone(900 + 500 * (1 - speed), .045, .04, 'square'); }
  function chord(r) { var base = { r1: 523, r2: 440, r3: 392, r4: 349, r5: 294, r6: 262, r7: 262 }[r], n = RANK[r] >= 5 ? 3 : 2;
    [1, 1.26, 1.5].slice(0, n).forEach(function (m, i) { setTimeout(function () { tone(base * m, RANK[r] >= 6 ? 1.4 : .6, .08, 'sine'); }, i * 70); }); }

  // the easing of the reel: a fast run that spends most of its time settling, case.md 7.2 "spent on the settling, not on the running"
  function ease(t) { return 1 - Math.pow(1 - t, 4.2); }

  /* one lane. host: an empty element; opts: { items, result, axis 'x' | 'y', duration ms, delay ms, onFrame(t) }.
     Resolves on landing. While running it sets on host --v4o-charge 0..1 (the buildup), --v4o-speed 1..0, data-phase run | slow | land,
     and on each card it passes, .is-at. A skin may read --v4o-k on each card, its distance from the marker in cards, to bend the strip. */
  function lane(host, opts) {
    var items = opts.items || IRONBOUND, res = opts.result, axis = opts.axis || 'x', dur = opts.duration || 5000;
    host.classList.add('v4o-lane', 'v4o-' + axis); host.setAttribute('data-tier', res.r); host.removeAttribute('data-phase');
    host.innerHTML = '';
    var track = el('div', 'v4o-track'), cards = strip(items, res);
    cards.forEach(function (x) { track.appendChild(card(x)); });
    host.appendChild(track); host.appendChild(el('span', 'v4o-mark')); host.appendChild(el('span', 'v4o-fade'));
    var nodes = track.children, size = axis === 'x' ? nodes[1].offsetLeft - nodes[0].offsetLeft : nodes[1].offsetTop - nodes[0].offsetTop;
    var view = axis === 'x' ? host.clientWidth : host.clientHeight, cardSz = axis === 'x' ? nodes[0].offsetWidth : nodes[0].offsetHeight;
    var jitter = (Math.random() - .5) * cardSz * .44; // inside the card, never on its edge
    var end = AT * size + cardSz / 2 - view / 2 + jitter, start = Math.max(0, (AT - 40) * size + cardSz / 2 - view / 2);
    var bend = opts.bend;
    function place(p) {
      track.style.transform = axis === 'x' ? 'translate3d(' + (-p) + 'px,0,0)' : 'translate3d(0,' + (-p) + 'px,0)';
      if (bend) { var mid = (p + view / 2) / size - .5, a = Math.max(0, Math.floor(mid) - 6), b = Math.min(nodes.length, Math.ceil(mid) + 7);
        for (var k = a; k < b; k++) nodes[k].style.setProperty('--v4o-k', (k - mid).toFixed(3)); }
    }
    function mark(i) { for (var k = Math.max(0, i - 2); k < Math.min(nodes.length, i + 3); k++) nodes[k].classList.toggle('is-at', k === i); }
    place(start);
    return new Promise(function (done) {
      function land() {
        place(end); mark(AT); host.style.setProperty('--v4o-charge', 1); host.style.setProperty('--v4o-speed', 0); host.setAttribute('data-phase', 'land');
        nodes[AT].classList.add('is-won'); chord(res.r); done(res);
      }
      if (still) { setTimeout(land, 250 + (opts.delay || 0) / 4); return; }
      var t0 = null, last = -1;
      setTimeout(function () {
        host.setAttribute('data-phase', 'run');
        requestAnimationFrame(function frame(now) {
          if (!host.isConnected) return;
          if (t0 === null) t0 = now;
          var t = Math.min(1, (now - t0) / dur), e = ease(t), p = start + (end - start) * e;
          place(p);
          var i = Math.floor((p + view / 2) / size);
          if (i !== last) { last = i; mark(i); tick(1 - t); }
          var c = Math.max(0, (t - .7) / .3); host.style.setProperty('--v4o-charge', c.toFixed(3));
          if (t > .55 && host.getAttribute('data-phase') === 'run') host.setAttribute('data-phase', 'slow');
          host.style.setProperty('--v4o-speed', Math.min(1, (1 - t) * 1.4).toFixed(2));
          if (opts.onFrame) opts.onFrame(t);
          if (t < 1) requestAnimationFrame(frame); else land();
        });
      }, opts.delay || 0);
    });
  }

  /* row M of stage-lab, founder of 5 Nov 2026: "саму ленту со скинами я бы не менял, а там бы крутил". The open runs on the cards already
     drifting on the stage, not on a reel of its own. box: the window, its middle is the marker; run: the row or the column of cards moving
     under a css animation. The run stops where it stands, the cards past the window's far edge go, the settled strip is laid on after the
     ones in view, and the run carries on from there to the result: the same strip, so the same rules as lane() (settled first, no near miss,
     inside the card and never on its edge). opts: { items, result, axis, duration, delay, paint: more elements to carry the buildup }.
     On box and paint it sets --v4o-charge 0..1 and data-spin run | slow | land; on the card it lands on, .is-won */
  var LEAD = 30;
  // a start from rest: the run gathers speed over its first eighth instead of jumping to full speed, then settles as the reel does
  function ramp(t) { var s = Math.min(1, t / .12); return ease(t) * s * s * (3 - 2 * s); }
  function drive(box, run, opts) {
    var res = opts.result, axis = opts.axis || 'x', dur = opts.duration || 4600, paint = [box].concat(opts.paint || []);
    var tf = getComputedStyle(run).transform, m = tf && tf !== 'none' ? new DOMMatrixReadOnly(tf) : { m41: 0, m42: 0 };
    var p0 = Math.max(0, -(axis === 'x' ? m.m41 : m.m42));
    function place(p) { run.style.transform = axis === 'x' ? 'translate3d(' + (-p) + 'px,0,0)' : 'translate3d(0,' + (-p) + 'px,0)'; }
    run.style.animation = 'none'; place(p0);
    var nodes = run.children, size = axis === 'x' ? nodes[1].offsetLeft - nodes[0].offsetLeft : nodes[1].offsetTop - nodes[0].offsetTop;
    var view = axis === 'x' ? box.clientWidth : box.clientHeight, cardSz = axis === 'x' ? nodes[0].offsetWidth : nodes[0].offsetHeight;
    var lead = Math.min(nodes.length, Math.ceil((p0 + view) / size) + 1);
    while (nodes.length > lead) run.removeChild(run.lastChild);
    strip(opts.items || IRONBOUND, res).slice(AT - LEAD).forEach(function (x) { run.appendChild(card(x)); });
    var at = lead + LEAD, jitter = (Math.random() - .5) * cardSz * .44, end = at * size + cardSz / 2 - view / 2 + jitter;
    box.setAttribute('data-tier', res.r);
    function set(v) { paint.forEach(function (n) { n.style.setProperty('--v4o-charge', v); }); }
    function phase(v) { paint.forEach(function (n) { n.setAttribute('data-spin', v); }); }
    function mark(i) { for (var k = Math.max(0, i - 2); k < Math.min(nodes.length, i + 3); k++) nodes[k].classList.toggle('is-at', k === i); }
    return new Promise(function (done) {
      function land() { place(end); mark(at); set(1); phase('land'); nodes[at].classList.add('is-won'); chord(res.r); done(res); }
      if (still) { setTimeout(land, 250 + (opts.delay || 0) / 4); return; }
      var t0 = null, last = -1;
      setTimeout(function () {
        phase('run');
        requestAnimationFrame(function frame(now) {
          if (!box.isConnected) return;
          if (t0 === null) t0 = now;
          var t = Math.min(1, (now - t0) / dur), p = p0 + (end - p0) * ramp(t);
          place(p);
          var i = Math.floor((p + view / 2) / size);
          if (i !== last) { last = i; mark(i); tick(1 - t); }
          set(Math.max(0, (t - .7) / .3).toFixed(3));
          if (t > .55 && box.getAttribute('data-spin') === 'run') phase('slow');
          if (t < 1) requestAnimationFrame(frame); else land();
        });
      }, opts.delay || 0);
    });
  }

  /* the open: one lane horizontally, two to five vertically side by side, locking one after another; resolves with the results */
  function open(host, opts) {
    var n = opts.count || 1, results = opts.results || roll(opts.items || IRONBOUND, n);
    host.innerHTML = ''; host.classList.add('v4o-open'); host.setAttribute('data-count', n);
    var lanes = [];
    for (var i = 0; i < n; i++) {
      var l = el('div'); host.appendChild(l);
      lanes.push(lane(l, { items: opts.items, result: results[i], axis: n > 1 ? 'y' : 'x', duration: (opts.duration || 5000) + i * 600, bend: opts.bend, onFrame: i === 0 ? opts.onFrame : null }));
    }
    // two to five lanes share one pointer line across all of them, case.md 7.2b: "one pointer line across all of the reels instead of five markers"
    if (n > 1) { var ma = el('span', 'v4o-mark-all'), f = host.firstChild, z = host.children[n - 1];
      ma.style.left = (f.offsetLeft - 8) + 'px'; ma.style.right = (host.clientWidth - z.offsetLeft - z.offsetWidth - 8) + 'px'; host.appendChild(ma); }
    return Promise.all(lanes);
  }

  /* THE CARD'S TWO LIGHTS, DRAWN ONCE, performance pass of 10 Nov 2026, founder: "когда выбираешь 3-4 кейса начинает подлагивать, как и
     при нажатии на open ... хочется оптимизировать, сделать сайт быстрее и отзывчивее, но при этом не потерять общее впечатление". Measured
     on case.html at 1440 with four cases, frames a second while the reels run: 25 as it was, 40 without the ring's light, 60 without the
     ring's light and the skin's shadow. Both are blurs, and a blur is worked out again for every card the band, the columns and the reels
     paint, which in an open is a new card every few frames in each lane. So on W7's cards both are drawn once when the page is idle, at
     the sizes the stage uses, and from then on a card is plain pictures:
     - the skin with its shadow under it, 0 8px 6px at 70 % black as case-stage.css had it, for a skin drawn 73px tall, in the skin's own
       picture (512 by 384), so the card's image stays where it was and only its source changes;
     - the ring's light per tier, the two drop shadows of case-stage.css W5 (2px at 55 %, 10px at 28 %, to the top left), in a picture the
       size of .v4o-glow, which shows it in place of the masked fallback that stands until it is ready.
     Pages whose cards are not W7 keep the filters (lean() is false there) */
  var BAKED = {}, leanOn = null;
  // only on a page whose every stage draws W7: a lab showing several looks side by side (card-lab.html) keeps the filters on all of them,
  // since a baked skin under another look's filter would cast its shadow twice
  function lean() { if (leanOn === null) { var t = document.querySelectorAll('.v4c-top');
    leanOn = t.length > 0 && Array.prototype.every.call(t, function (x) { return x.getAttribute('data-v') === 'm' && x.getAttribute('data-card') === 'w7'; });
    if (!leanOn) setTimeout(function () { leanOn = null; }, 500); } return leanOn; }
  function bakeSkin(src, done) {
    var im = new Image(); im.onload = function () {
      var w = im.naturalWidth, h = im.naturalHeight, k = 73 / h; if (!w || !h) return done();
      var cv = document.createElement('canvas'); cv.width = w; cv.height = h; var x = cv.getContext('2d');
      x.shadowColor = 'rgba(0, 0, 0, .7)'; x.shadowOffsetY = 8 / k; x.shadowBlur = 6 / k; x.drawImage(im, 0, 0);
      x.shadowColor = 'transparent'; x.drawImage(im, 0, 0);
      cv.toBlob(function (b) { if (b) BAKED[src] = URL.createObjectURL(b); done(); });
    };
    im.onerror = function () { done(); }; im.src = src;
  }
  var HPTS = [[128, 59], [98, 110.96], [38, 110.96], [8, 59], [38, 7.04], [98, 7.04]];
  function bakeGlow(r, color) {
    // the glow's box is the hexagon's 136 by 118 with 20 units on every side (case-stage.css .v4o-glow), at 2 pixels per CSS pixel of an
    // 85px ring: 0.72 CSS pixels a unit, so 1.44 canvas pixels a unit; shadows are set in canvas pixels, 2 to a CSS pixel
    var S = 1.44, cv = document.createElement('canvas'); cv.width = Math.round(176 * S); cv.height = Math.round(158 * S);
    var x = cv.getContext('2d'), FAR = 4000, c = color.trim();
    function ring() { x.beginPath(); HPTS.forEach(function (p, i) { var px = (p[0] + 20) * S + FAR, py = (p[1] + 20) * S; if (i) x.lineTo(px, py); else x.moveTo(px, py); }); x.closePath(); }
    x.lineWidth = 3.6 * S; x.lineJoin = 'round'; x.strokeStyle = '#000';
    [[-3, 20, .28], [-1.5, 4, .55]].forEach(function (L) {
      x.save(); x.shadowColor = c; x.shadowBlur = L[1]; x.shadowOffsetX = -FAR + L[0] * 2; x.shadowOffsetY = L[0] * 2; x.globalAlpha = L[2]; ring(); x.stroke(); x.restore();
    });
    cv.toBlob(function (b) {
      if (!b) return; var u = URL.createObjectURL(b), st = document.getElementById('v4o-baked') || document.head.appendChild(Object.assign(document.createElement('style'), { id: 'v4o-baked' }));
      st.textContent += '.v4c-top[data-v="m"][data-card="w7"] .v4o-card.' + r + ' .v4o-glow { -webkit-mask: none; mask: none; background: url(' + u + ') center / 100% 100% no-repeat; }\n';
    });
  }
  var tries = 0;
  function bake() {
    leanOn = null;
    if (!lean()) { if (++tries < 6) setTimeout(bake, 700); return; }
    var probe = document.querySelector('.v4c-top[data-card="w7"]'), arts = IRONBOUND.concat([KNIFE]).map(function (x) { return x.art; }), left = arts.length;
    Object.keys(RANK).forEach(function (r) { var t = el('span', 'v4o-card ' + r); t.style.display = 'none'; probe.appendChild(t); var c = getComputedStyle(t).getPropertyValue('--r'); t.remove(); if (c) bakeGlow(r, c); });
    arts.forEach(function (a) { bakeSkin(a, function () {
      if (--left) return;
      // the cards already on the stage take the baked skins too
      Array.prototype.forEach.call(document.querySelectorAll('.v4c-top[data-v="m"][data-card="w7"] .v4o-card .v4o-img:not(.is-baked)'), function (im) {
        var a = im.getAttribute('src'); if (BAKED[a]) { im.src = BAKED[a]; im.classList.add('is-baked'); } });
    }); });
  }
  (function () { var go = function () { if (window.requestIdleCallback) requestIdleCallback(bake, { timeout: 1500 }); else setTimeout(bake, 200); };
    if (document.readyState === 'complete') go(); else window.addEventListener('load', go); })();

  V.items = IRONBOUND; V.knife = KNIFE; V.roll = roll; V.dress = dress; V.lane = lane; V.open = open; V.drive = drive; V.card = card; V.hex = hex; V.rank = RANK; V.still = still;
  window.V4Open = V;
})();
