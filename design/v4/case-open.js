/* design/v4/case-open.js, the open of a case in v4, node 3.5, D-209. One engine for case.html and its labs.
   Founder of 4 Nov 2026: "открітие кейсов ... я думаю єто будет самий большой след импакт для продукта ... кейс опенинг страница должні
   еще более вау смотреться на странице кейса".
   The rules it keeps are case.md section 7, and they are built in, not styled on:
   - the roll is settled before anything moves (7.1, E1): V4Open.roll() picks, and the reel only renders what was picked;
   - no near-miss (7.1, E2): the cards that pass the marker while the reel slows, and the card just after the one it stops on, are never
     worth more than the result; it stops inside the result's card, never on its edge;
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
      var pool = (i >= AT - SLOW && i <= AT + 1) ? floor : items;
      var p = pool[Math.floor(Math.random() * pool.length)];
      // no two alike side by side, and none alike either side of the result, so the result reads as one card and not a run
      for (var g = 0; g < pool.length && pool.length > 1 && (same(p, cards[i - 1]) || (i === AT - 1 && same(p, result))); g++) p = pool[(pool.indexOf(p) + 1) % pool.length];
      cards.push(p);
    }
    return cards;
  }

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function card(x) {
    var c = el('div', 'v4o-card ' + x.r);
    c.innerHTML = '<span class="v4o-plate"></span><img class="v4o-img" src="' + x.art + '" alt="" draggable="false"><span class="v4o-name"><b>' + x.w + '</b><span>' + x.s + '</span></span>';
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

  /* the open: one lane horizontally, two to five vertically side by side, locking one after another; resolves with the results */
  function open(host, opts) {
    var n = opts.count || 1, results = opts.results || roll(opts.items || IRONBOUND, n);
    host.innerHTML = ''; host.classList.add('v4o-open'); host.setAttribute('data-count', n);
    var lanes = [];
    for (var i = 0; i < n; i++) {
      var l = el('div'); host.appendChild(l);
      lanes.push(lane(l, { items: opts.items, result: results[i], axis: n > 1 ? 'y' : 'x', duration: (opts.duration || 5000) + i * 600, bend: opts.bend, onFrame: i === 0 ? opts.onFrame : null }));
    }
    return Promise.all(lanes);
  }

  V.items = IRONBOUND; V.knife = KNIFE; V.roll = roll; V.dress = dress; V.lane = lane; V.open = open; V.rank = RANK; V.still = still;
  window.V4Open = V;
})();
