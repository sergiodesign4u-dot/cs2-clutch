/* design/kit/stage.js, THE CASE STAGE'S BEHAVIOUR, stage 07 step 5, D-236: the count, the open and the outcome of the Case stage and the Commit
   block, played in place on one page as v4's case screen plays them (design/v4/case-page.js row M, case-open.js, case-win.js), reading and
   writing the kit's classes and states only. Section 0 of case.md: the phases are states of one page, nothing is unmounted, one region
   changes what it holds. Loaded after kit.js and motion.js by a page that holds a Case stage; it does nothing on a page without one.

   What it keeps, built in rather than styled on (case.md section 7):
   - the roll is settled before anything moves (7.1, E1): roll() picks by the published chances, the runs only render what was picked;
   - no near miss (7.1, E2): the cards that pass the line while a run slows, and the ones still in view beside the one it stops on, are never
     worth more than the result; it stops inside the result's card, never on its edge;
   - one case runs on the band, two to five each on its own column, locking one after another, 4.6s and 0.6s more a column (7.2, 7.2b);
   - for whoever asked for less motion the same result lands in the same order, stilled (7.3); there is no fast mode;
   - in the last stretch the pointers and the line take the colour of what is landing (E3), so the tension is about a settled result.

   The case's contents are read from the page, the drop table (.data-table--drops): each row is an item's one declaration, its tier, chance,
   value, wear and art. The price is the commit block's data-price, the balance the header's figure. A press on Open spends, the act says
   Rolling, the runs land, the prizes take the stage; Sell, Sell all and Open again answer there, Open again spending nothing. A page drawn
   at its outcome (data-phase="won", case-interrupted.html) is wired as an outcome from its markup. Switches: ?count=1 to 5 chooses the count;
   ?land= decides what the first open lands on, k the knife (the demo of the top tier, not in this case), 0 to 8 an item by its place.
   Figures are samples, D-124. */
(function () {
  var d = document, Q = new URLSearchParams(location.search);
  var stage = d.querySelector('.shell__main .case-head .case-stage'); if (!stage) return;
  var head = stage.closest('.case-head'), still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var account = /[?&]account\b/.test(location.search) || d.body.hasAttribute('data-account');
  var commit = [].filter.call(d.querySelectorAll('.shell__main > .commit'), function (c) { return !c.hidden; })[0]; if (!commit) return;
  var PRICE = parseFloat(commit.getAttribute('data-price')) || 0;
  var band = stage.querySelector('.case-stage__band');
  var cols = [].slice.call(stage.querySelectorAll('.case-stage__col')), rest = stage.querySelector('.case-stage__rest');
  var row = stage.querySelector('.case-stage__row'), live = stage.querySelector('.case-stage__sr'), line1 = head.querySelector('.case-head__line');
  var RANK = { r1: 7, r2: 6, r3: 5, r4: 4, r5: 3, r6: 2, r7: 1 }, M = window.KitMotion;
  var WEAR = { 'Factory New': 'FN', 'Minimal Wear': 'MW', 'Field-Tested': 'FT', 'Well-Worn': 'WW', 'Battle-Scarred': 'BS' };
  var COUNT = ['', 'one open', 'two opens', 'three opens', 'four opens', 'five opens'];

  function el(tag, cls, html) { var n = d.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function coins(v) { return v.toFixed(2) + '&#160;coins'; }
  function num(s) { return parseFloat(String(s || '').replace(/[^\d.]/g, '')); }
  function tierOf(n, base) { var m = n.className.match(new RegExp(base + '--(r\\d)')); return m ? m[1] : 'r5'; }
  function when() { var t = new Date(), mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][t.getMonth()];
    return t.getDate() + '&#160;' + mo + '&#160;' + t.getFullYear() + '&#160;' + String(t.getHours()).padStart(2, '0') + ':' + String(t.getMinutes()).padStart(2, '0'); }
  function hash() { return Math.random().toString(16).slice(2, 8) + '…' + Math.random().toString(16).slice(2, 8); }

  /* ---- the nine, read from the drop table ---- */
  var ITEMS = [].map.call(d.querySelectorAll('.data-table--drops .drop-card'), function (r) {
    var ax = (r.querySelector('.drop-card__ax') || {}).textContent || '', parts = ax.split(' · '), img = r.querySelector('img');
    return { w: r.querySelector('.drop-card__w').textContent, s: r.querySelector('.drop-card__s').textContent, r: tierOf(r, 'drop-card'),
      ch: num(r.querySelector('.drop-card__ch .kv__v').textContent), v: num(r.querySelector('.drop-card__v').textContent),
      wear: parts.slice(0, -1).join(' · '), tier: parts[parts.length - 1], art: img ? img.getAttribute('src') : '' };
  });
  if (!ITEMS.length) return;
  var SKINS = ITEMS[0].art.replace(/[^/]*$/, '');
  var KNIFE = { w: '★ Karambit', s: 'Tiger Tooth', r: 'r1', ch: 0.008, v: 1940, wear: 'Factory New', tier: 'Extraordinary', art: SKINS + 'karambit-tiger-tooth.png' };
  function value(x) { return RANK[x.r] * 1e6 + x.v; }
  function dress(x) { return Object.assign({}, x, { float: (Math.random() * .38 + .01).toFixed(4), pattern: 1 + Math.floor(Math.random() * 999) }); }
  function roll(n) {
    var total = ITEMS.reduce(function (a, x) { return a + x.ch; }, 0), out = [];
    for (var k = 0; k < n; k++) {
      var t = Math.random() * total, pick = ITEMS[ITEMS.length - 1];
      for (var i = 0; i < ITEMS.length; i++) { t -= ITEMS[i].ch; if (t <= 0) { pick = ITEMS[i]; break; } }
      out.push(dress(pick));
    }
    return out;
  }
  // the strip: variety in the fast part, nothing better than the result once it slows and nothing better beside it once it stops
  var LEN = 54, AT = 46, SLOW = 9, LEAD = 30;
  function same(a, b) { return !!a && !!b && a.w === b.w && a.s === b.s; }
  function strip(res) {
    var cards = [], floor = ITEMS.filter(function (x) { return value(x) <= value(res); });
    if (!floor.length) floor = [res];
    for (var i = 0; i < LEN; i++) {
      if (i === AT) { cards.push(res); continue; }
      var pool = (i >= AT - SLOW && i <= AT + 5) ? floor : ITEMS, p = pool[Math.floor(Math.random() * pool.length)];
      for (var g = 0; g < pool.length && pool.length > 1 && (same(p, cards[i - 1]) || (i === AT - 1 && same(p, res))); g++) p = pool[(pool.indexOf(p) + 1) % pool.length];
      cards.push(p);
    }
    return cards;
  }

  /* ---- the skins' shadows drawn once, the performance pass of 10 Nov 2026 (case-open.js bakeSkin): a skin's drop shadow under a filter is
     worked out again for every card the runs paint, so it is drawn into the picture once when the page is idle, at the size the stage
     draws a skin, and a card is plain pictures from then on (.is-baked takes the filter off) ---- */
  var BAKED = {};
  function bake() {
    var arts = ITEMS.concat([KNIFE]).map(function (x) { return x.art; }), n = arts.length;
    function next() { if (--n) return;
      stage.querySelectorAll('.case-stage__card > img:not(.is-baked)').forEach(function (im) { var a = im.getAttribute('src'); if (BAKED[a]) { im.src = BAKED[a]; im.classList.add('is-baked'); } }); }
    arts.forEach(function (src) {
      var im = new Image(); im.onload = function () {
        var w = im.naturalWidth, h = im.naturalHeight, k = 73 / h; if (!w || !h) return next();
        var cv = d.createElement('canvas'); cv.width = w; cv.height = h; var x = cv.getContext('2d');
        x.shadowColor = 'rgba(0, 0, 0, .7)'; x.shadowOffsetY = 8 / k; x.shadowBlur = 6 / k; x.drawImage(im, 0, 0); x.shadowColor = 'transparent'; x.drawImage(im, 0, 0);
        cv.toBlob(function (b) { if (b) BAKED[src] = URL.createObjectURL(b); next(); });
      };
      im.onerror = next; im.src = src;
    });
  }

  /* ---- a run's card, the Case stage's own (.case-stage__card), as the page's band draws it; its chance for the rare mark, D-214 ---- */
  var ringN = 0;
  function ring(cls) { var id = 'stg-ring-' + (++ringN);
    return '<svg class="' + cls + '" viewBox="0 0 136 118" aria-hidden="true" focusable="false"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0"></stop><stop offset=".5"></stop><stop offset="1"></stop></linearGradient></defs><path d="M128 59L98 110.96L38 110.96L8 59L38 7.04L98 7.04Z" stroke="url(#' + id + ')"></path></svg>'; }
  function card(x) {
    var c = el('div', 'case-stage__card case-stage__card--' + x.r), b = BAKED[x.art];
    c.setAttribute('data-chance', String(x.ch));
    c.innerHTML = '<span class="case-stage__card-plate"></span><img src="' + (b || x.art) + '" alt=""' + (b ? ' class="is-baked"' : '') + '>' +
      '<span class="case-stage__card-name"><b class="case-stage__card-w">' + esc(x.w) + '</b><span class="case-stage__card-s">' + esc(x.s) + '</span></span>' +
      (isNaN(x.v) ? '' : '<span class="case-stage__card-v"><span class="icon icon--coin"></span>' + x.v.toFixed(2) + '</span>') + '<span class="case-stage__card-glow"></span>' + ring('case-stage__card-ring'); // a value that could not be read is not drawn, D-124
    if (M && M.mark) M.mark(c);
    return c;
  }

  /* ---- sound: a tick per card passing the line and a chord on landing that grows with the tier, only while the rail's Sound is on ---- */
  var ac = null;
  function soundOn() { return !!d.querySelector('.rail__amb .button[aria-pressed="true"]'); }
  function tone(f, du, g, type) {
    if (!soundOn()) return; try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    var o = ac.createOscillator(), a = ac.createGain(), t = ac.currentTime; o.type = type || 'triangle'; o.frequency.value = f;
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(.0001, t + du); o.connect(a); a.connect(ac.destination); o.start(t); o.stop(t + du + .02);
  }
  function tick(speed) { tone(900 + 500 * (1 - speed), .045, .04, 'square'); }
  function chord(r) { var base = { r1: 523, r2: 440, r3: 392, r4: 349, r5: 294, r6: 262, r7: 262 }[r], n = RANK[r] >= 5 ? 3 : 2;
    [1, 1.26, 1.5].slice(0, n).forEach(function (m, i) { setTimeout(function () { tone(base * m, RANK[r] >= 6 ? 1.4 : .6, .08, 'sine'); }, i * 70); }); }

  /* ---- a run: the band or a column already drifting stops where it stands, the cards past its far edge go, the settled strip is laid on
     and the run carries on to the result. On the box and on the stage it sets --stage-charge 0 to 1 and data-spin run, slow, land ---- */
  function ease(t) { return 1 - Math.pow(1 - t, 4.2); }
  function ramp(t) { var s = Math.min(1, t / .12); return ease(t) * s * s * (3 - 2 * s); }
  function drive(box, run, o) {
    var res = o.result, axis = o.axis, dur = o.duration, paint = [box].concat(o.paint || []);
    var tf = getComputedStyle(run).transform, mx = tf && tf !== 'none' ? new DOMMatrixReadOnly(tf) : { m41: 0, m42: 0 };
    var p0 = Math.max(0, -(axis === 'x' ? mx.m41 : mx.m42));
    function place(p) { run.style.transform = axis === 'x' ? 'translate3d(' + (-p) + 'px,0,0)' : 'translate3d(0,' + (-p) + 'px,0)'; }
    run.style.animation = 'none'; place(p0);
    var nodes = run.children, size = axis === 'x' ? nodes[1].offsetLeft - nodes[0].offsetLeft : nodes[1].offsetTop - nodes[0].offsetTop;
    var view = axis === 'x' ? box.clientWidth : box.clientHeight, cardSz = axis === 'x' ? nodes[0].offsetWidth : nodes[0].offsetHeight;
    var lead = Math.min(nodes.length, Math.ceil((p0 + view) / size) + 1);
    while (nodes.length > lead) run.removeChild(run.lastChild);
    strip(res).slice(AT - LEAD).forEach(function (x) { run.appendChild(card(x)); });
    var at = lead + LEAD, jitter = (Math.random() - .5) * cardSz * .44, end = at * size + cardSz / 2 - view / 2 + jitter;
    function set(v) { paint.forEach(function (n) { n.style.setProperty('--stage-charge', v); }); }
    function phase(v) { paint.forEach(function (n) { n.setAttribute('data-spin', v); }); }
    function mark(i) { for (var k = Math.max(0, i - 2); k < Math.min(nodes.length, i + 3); k++) nodes[k].classList.toggle('is-at', k === i); }
    return new Promise(function (done) {
      function land() { place(end); mark(at); set(1); phase('land'); nodes[at].classList.add('is-won'); chord(res.r); done(res); }
      if (still) { setTimeout(land, 250 + (o.delay || 0) / 4); return; }
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
      }, o.delay || 0);
    });
  }

  /* ---- the runs at rest: the nine twice over on the band and on every column, each column starting from a different one ---- */
  function fillIdle() {
    [band].concat(cols).forEach(function (box, k) {
      var r = box.firstElementChild, from = box === band ? 0 : (k * 2) % ITEMS.length, list = ITEMS.slice(from).concat(ITEMS.slice(0, from));
      r.removeAttribute('style'); r.innerHTML = '';
      list.concat(list).forEach(function (x) { r.appendChild(card(x)); });
      box.removeAttribute('data-spin'); box.style.removeProperty('--stage-charge');
    });
    stage.removeAttribute('data-spin'); stage.style.removeProperty('--stage-charge'); stage.className = 'case-stage case-stage--played';
  }

  /* ---- the count deals the cases: the ones already there glide to their new cells, each new one is dealt from behind the last one standing,
     the ones no longer wanted slide back under the last one left and go (founder of 5 Nov 2026) ---- */
  var count = 1, busy = false, snap = null;
  function boxes() { return [].filter.call(rest.children, function (b) { return !b.classList.contains('is-leaving'); }); }
  function newCase() { var c = el('span', 'media media--case case-stage__case'); c.style.setProperty('--case-art', 'var(--art-case-ironbound)'); return c; }
  function deal() {
    var prev = snap ? snap.boxes : boxes(), first = snap ? snap.rects : []; snap = null;
    var keep = prev.slice(0, count), drop = prev.slice(count);
    drop.forEach(function (b, i) {
      var r = first[count + i]; if (!r) { b.remove(); return; }
      var op = (b.offsetParent || rest).getBoundingClientRect();
      b.classList.add('is-leaving'); b.style.position = 'absolute'; b.style.width = r.width + 'px'; b.style.margin = '0';
      b.style.left = (r.left - op.left) + 'px'; b.style.top = (r.top - op.top) + 'px';
    });
    for (var i = keep.length; i < count; i++) keep.push(rest.appendChild(newCase()));
    keep.forEach(function (b, i) { b.style.zIndex = String(10 - i); });
    if (still || !first.length || !keep[0].animate) { drop.forEach(function (b) { b.remove(); }); return; }
    var ez = 'cubic-bezier(.22, 1, .36, 1)', src = first[Math.min(prev.length, count) - 1] || first[0];
    function c(r) { return [r.left + r.width / 2, r.top + r.height / 2]; }
    keep.forEach(function (b, i) {
      var to = b.getBoundingClientRect(), from = i < first.length ? first[i] : src, isNew = i >= first.length, a = c(from), z = c(to), sc = from.width / to.width;
      b.animate([{ transform: 'translate(' + (a[0] - z[0]) + 'px,' + (a[1] - z[1]) + 'px) scale(' + (isNew ? sc * .7 : sc) + ')', opacity: isNew ? 0 : 1, filter: isNew ? 'brightness(.4)' : 'none' },
        { transform: 'none', opacity: 1, filter: 'none' }], { duration: isNew ? 560 : 480, delay: isNew ? (i - first.length) * 80 : 0, easing: ez, fill: 'backwards' });
    });
    var home = keep[keep.length - 1].getBoundingClientRect();
    drop.forEach(function (b, i) {
      var r = b.getBoundingClientRect(), a = c(r), z = c(home);
      b.animate([{ transform: 'none', opacity: 1 }, { transform: 'translate(' + (z[0] - a[0]) + 'px,' + (z[1] - a[1]) + 'px) scale(.6)', opacity: 0 }],
        { duration: 380, delay: (drop.length - 1 - i) * 50, easing: 'cubic-bezier(.5, 0, .75, 0)', fill: 'forwards' }).onfinish = function () { b.remove(); };
    });
  }

  /* ---- the header's balance, read and written in place ---- */
  function balEl() { return d.querySelector('.header__fig .fig--money .fig__v'); }
  var balance = balEl() ? num(balEl().textContent) : 0;
  function setBalance(v) {
    balance = Math.round(v * 100) / 100; var b = balEl(); if (!b) return;
    b.lastChild.textContent = balance.toFixed(2); var a = b.closest('.header__fig'); if (a) a.setAttribute('aria-label', 'Balance, ' + balance.toFixed(2) + ' coins');
  }

  /* ---- the commit block signed in: the count, the act with the total riding in it, the risk, the money line, the hashes ---- */
  var risk = commit.querySelector('.commit__risk'), riskHTML = risk ? risk.outerHTML : '';
  var rtpM = (commit.querySelector('.commit__line a') || { textContent: '' }).textContent.match(/RTP ([\d.]+ %)/), RTP = rtpM ? rtpM[1] : '';
  var EV = Math.round(ITEMS.reduce(function (a, x) { return a + x.ch / 100 * x.v; }, 0) * 100) / 100;
  function seg() { var h = '<div class="seg commit__count" role="group" aria-label="Cases to open"><span class="commit__sr">Cases to open</span>';
    for (var n = 1; n <= 5; n++) h += '<button class="seg__opt" type="button" aria-pressed="' + (n === count) + '">' + n + '</button>';
    return h + '</div>'; }
  function priced(words, total, label, extra) {
    return '<button class="button button--primary button--l button--priced commit__go" type="button" aria-label="' + label + '"' + (extra || '') + '><span>' + words + '</span><span class="button__price"><span class="icon icon--coin" aria-hidden="true"></span>' + total.toFixed(2) + '</span></button>'; }
  function moneyLine() { var ev = count > 1 ? coins(EV * count) + ' for ' + count + ' opens' : coins(EV);
    return '1 coin = $1.00 · <a class="link" href="#h2-pays">RTP ' + RTP + ', expected value ' + ev + '</a>'; }
  function hashes() { var h = []; for (var i = 0; i < count; i++) h.push('<code class="copy-value__v">' + hash() + '</code>');
    return '<div class="copy-value copy-value--inline commit__hash"><span class="copy-value__k">Server seed hash' + (count > 1 ? 'es' : '') + '</span>' + h.join('') + '</div>'; }
  function drawCommit() {
    if (!account) return;
    var total = PRICE * count, short = total > balance, w = 'Open ' + count + ' case' + (count > 1 ? 's' : '');
    commit.setAttribute('data-state', short ? 'short' : 'funded'); commit.setAttribute('aria-label', 'Open this case');
    commit.innerHTML = '<div class="commit__plate">' + seg() + '<div class="commit__act">' +
      priced(w, total, w + ' for ' + total.toFixed(2) + ' coins' + (short ? ', ' + (total - balance).toFixed(2) + ' coins short' : ''), short ? ' aria-describedby="commit-short"' : '') + '</div>' + riskHTML + '</div>' +
      (short ? '<p class="commit__line"><span class="note note--refuse" id="commit-short">You have ' + coins(balance) + ', ' + coins(total - balance) + ' short. <a class="link" href="deposit.html" data-layer="deposit-layer">Add funds</a></span></p>' : '') +
      '<p class="commit__line">' + (short ? '' : 'After this open, ' + coins(balance - total) + ' · ') + moneyLine() + '</p>' + hashes();
  }
  function setCount(n) {
    if (busy) return;
    snap = { boxes: boxes(), rects: boxes().map(function (b) { return b.getBoundingClientRect(); }) };
    count = n; stage.setAttribute('data-count', n);
    if (line1) line1.textContent = 'Nine items, ' + COUNT[n] + '.';
    deal(); drawCommit();
  }

  /* ---- the open: each case draws back, lunges to the stage's middle and hits, a flash and a wave, the stage jolts once, the case bursts
     toward the reader and its run takes off; two to five lock one after another (founder of 5 Nov 2026, "такой типа бамс") ---- */
  var HIT = 390;
  function open() {
    var total = PRICE * count;
    if (busy) return;
    if (total > balance) { var a = commit.querySelector('#commit-short a'); if (a) a.focus(); return; } // refuses; the reason and Add funds stand beside it
    busy = true; setBalance(balance - total);
    var results = roll(count), land = Q.get('land');
    if (land === 'k') results[0] = dress(KNIFE); else if (land && ITEMS[+land]) results[0] = dress(ITEMS[+land]);
    var go = commit.querySelector('.commit__go'), wd = go.offsetWidth;
    commit.setAttribute('data-state', 'open');
    commit.querySelectorAll('.seg__opt').forEach(function (b) { b.disabled = true; });
    go.style.width = wd + 'px'; go.setAttribute('aria-busy', 'true'); go.setAttribute('aria-label', 'Rolling'); go.removeAttribute('aria-describedby');
    go.innerHTML = '<span>Rolling<span class="button__dots" aria-hidden="true"><i></i><i></i><i></i></span></span>';
    commit.querySelectorAll('.commit__line').forEach(function (p, i) { if (i) p.remove(); });
    commit.querySelector('.commit__line').innerHTML = count > 1 ? 'Opening ' + count + ' cases. All ' + count + ' results were fixed before the animation started.' : 'Opening. The result was fixed before the animation started.';
    live.textContent = 'Opening ' + (count > 1 ? count + ' cases' : 'the case') + '.';
    stage.setAttribute('data-phase', 'open');
    var fr = stage.getBoundingClientRect();
    if (fr.top < 0 || fr.bottom > innerHeight) stage.scrollIntoView({ block: 'center', behavior: still ? 'auto' : 'smooth' });
    var lanes = count === 1 ? [{ box: band, axis: 'x' }] : cols.slice(0, count).map(function (c) { return { box: c, axis: 'y' }; });
    var best = results.slice().sort(function (a, b) { return RANK[b.r] - RANK[a.r] || b.v - a.v; })[0];
    stage.classList.add('case-stage--' + best.r);
    fr = stage.getBoundingClientRect();
    var mid = [fr.left + fr.width / 2, fr.top + fr.height / 2];
    boxes().forEach(function (b, i) {
      if (still) { b.style.opacity = '0'; return; }
      var r = b.getBoundingClientRect(), c = [r.left + r.width / 2, r.top + r.height / 2];
      var at = 'translate(' + (count === 1 ? mid[0] - c[0] : 0) + 'px,' + (mid[1] - c[1]) + 'px) ';
      b.animate([
        { transform: 'none', filter: 'none', opacity: 1 },
        { transform: 'translate(0, 8px) scale(.93)', filter: 'brightness(.85)', opacity: 1, offset: .24 },  // draws back
        { transform: at + 'scale(1.12)', filter: 'brightness(1.4)', opacity: 1, offset: .5 },              // lunges to the middle
        { transform: at + 'scale(1.22, .86)', filter: 'brightness(2.6)', opacity: 1, offset: .57 },        // the hit
        { transform: at + 'scale(1.75)', filter: 'brightness(3)', opacity: 0 }                              // bursts toward the reader
      ], { duration: 690, delay: i * 70, easing: 'cubic-bezier(.33, 0, .2, 1)', fill: 'forwards' });
      [['case-stage__bam', 380], ['case-stage__wave', 640]].forEach(function (k) {
        var n = el('span', k[0]); n.setAttribute('aria-hidden', 'true'); n.style.left = (c[0] - fr.left) + 'px'; n.style.top = (mid[1] - fr.top) + 'px'; stage.appendChild(n);
        var an = k[0] === 'case-stage__bam'
          ? n.animate([{ opacity: 0, transform: 'translate(-50%,-50%) scale(.3)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)', offset: .25 }, { opacity: 0, transform: 'translate(-50%,-50%) scale(1.5)' }], { duration: k[1], delay: HIT - 40 + i * 70, easing: 'ease-out', fill: 'both' })
          : n.animate([{ opacity: .9, transform: 'translate(-50%,-50%) scale(.25, .25)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(' + (count === 1 ? '5, 1.5' : '1.6, 2.6') + ')' }], { duration: k[1], delay: HIT + i * 70, easing: 'cubic-bezier(.2, .7, .3, 1)', fill: 'both' });
        an.onfinish = function () { n.remove(); };
      });
    });
    if (!still) stage.animate([{ transform: 'none' }, { transform: 'translate(-5px, 3px)' }, { transform: 'translate(4px, -2px)' }, { transform: 'translate(-2px, 1px)' }, { transform: 'none' }], { duration: 260, delay: HIT, easing: 'linear' });
    var runs = lanes.map(function (l, i) {
      return drive(l.box, l.box.firstElementChild, { result: results[i], axis: l.axis, duration: 4600 + i * 600, delay: still ? 0 : HIT + i * 70, paint: i === lanes.length - 1 ? [stage] : [] });
    });
    Promise.all(runs).then(function () {
      setTimeout(function () {
        var from = lanes.map(function (l) { var w = l.box.querySelector('.is-won'); return w ? w.getBoundingClientRect() : null; });
        outcome(results);
        // the prize leaves the run from where its card stopped
        row.querySelectorAll('.outcome__card').forEach(function (c, i) {
          var f = from[i]; if (!f || still) return;
          var to = c.getBoundingClientRect(), s = f.height / to.height;
          c.animate([{ transform: 'translate(' + (f.left + f.width / 2 - to.left - to.width / 2) + 'px,' + (f.top + f.height / 2 - to.top - to.height / 2) + 'px) scale(' + s + ')' }, { transform: 'none' }],
            { duration: 760, delay: i * 90, easing: 'cubic-bezier(.34, 1.3, .5, 1)', fill: 'backwards' });
        });
      }, count > 1 ? 650 : 800);
    });
  }

  /* ---- the outcome: the prizes take the stage, the commit becomes what came out (D-219, D-221: the net on a gain only, the facts in both) ---- */
  function prize(x, n, i) {
    var wear = WEAR[x.wear.split(' · ')[0]] || '', up = x.v >= PRICE;
    return '<div class="outcome outcome--' + x.r + (n > 1 ? ' outcome--batch' : '') + '" data-v="' + x.v.toFixed(2) + '" style="--i: ' + i + '"><div class="outcome__card">' +
      '<span class="outcome__odds"><b>' + x.ch.toFixed(3) + '&#160;%</b> <span>chance<span class="outcome__sr"> on this case</span></span></span>' +
      '<span class="media media--skin outcome__art"><span class="outcome__plate" aria-hidden="true"></span>' + ring('outcome__ring') + '<img src="' + x.art + '" alt=""></span>' +
      '<span class="outcome__name"><span class="outcome__w">' + esc(x.w) + (wear ? '<span class="outcome__wear"><span class="outcome__sr">, wear </span>' + wear + '</span>' : '') + '</span><b class="outcome__s">' + esc(x.s) + '</b></span>' +
      '<span class="fig outcome__v"><span class="fig__v"><span class="icon icon--coin"></span>' + x.v.toFixed(2) + '<span class="outcome__sr">&#160;coins</span></span></span>' +
      '<span class="outcome__x' + (up ? ' is-up' : '') + '">×' + (x.v / PRICE).toFixed(2) + '<span class="outcome__sr"> of the price</span></span></div>' +
      (n > 1 ? '<button class="button button--ghost button--s outcome__sell" type="button">Sell<span class="outcome__sr"> for ' + coins(x.v) + '</span></button>' : '') + '</div>';
  }
  function round(x) { var k = { 'AK-47': 'ak', 'Glock-18': 'glock', 'M4A1-S': 'm4', 'USP-S': 'usp', 'Nova': 'nova', 'MP9': 'mp9', 'P250': 'p250' }[x.w]; return k ? '?round=' + k : ''; }
  function outcome(rs) {
    var n = rs.length, best = rs.slice().sort(function (a, b) { return RANK[b.r] - RANK[a.r] || b.v - a.v; })[0];
    stage.setAttribute('data-phase', 'won'); stage.className = 'case-stage case-stage--played is-landed case-stage--' + best.r;
    row.innerHTML = rs.map(function (x, i) { return prize(x, n, i); }).join('');
    requestAnimationFrame(function () { requestAnimationFrame(function () { row.querySelectorAll('.outcome').forEach(function (o) { o.classList.add('is-on'); }); }); });
    live.textContent = rs.map(function (x) { return x.w + ' ' + x.s + ', ' + x.v.toFixed(2) + ' coins'; }).join('; ') + '.';
    rs.forEach(function (x) { x.copy = Math.round(x.v * (0.9 + Math.random() * 0.25) * 100) / 100; });
    var spent = PRICE * n, got = rs.reduce(function (a, x) { return a + x.v; }, 0), net = Math.round((got - spent) * 100) / 100;
    var facts = n === 1
      ? '<p class="commit__inst">As of ' + when() + ' · Float <b>' + rs[0].float + '</b> · Pattern <b>' + rs[0].pattern + '</b> · <a class="link" href="steam://rungame/730">Inspect in game</a></p>' +
        '<p class="commit__inst">Value <b>' + rs[0].v.toFixed(2) + '</b> coins · a copy on sale <b>' + rs[0].copy.toFixed(2) + '</b> coins, read ' + when() + '</p>'
      : '<details class="commit__rounds"><summary>Round details, ' + n + ' rounds</summary><p>Every round, in the order of the row above, which is the order of the reels.</p><ol>' +
        rs.map(function (x) { return '<li>' + esc(x.w + ' ' + x.s) + ' · Float <b>' + x.float + '</b> · Pattern <b>' + x.pattern + '</b> · <a class="link" href="../wireframes/fair-prefilled.html' + round(x) + '">Check this round</a> · <a class="link" href="steam://rungame/730">Inspect in game</a></li>'; }).join('') + '</ol></details>';
    commit.setAttribute('data-state', 'outcome'); commit.setAttribute('aria-label', 'What you got');
    commit.innerHTML = '<div class="fig fig--money fig--l commit__net">' + (net > 0 ? '<span class="fig__v">+<span class="icon icon--coin" aria-hidden="true"></span>' + net.toFixed(2) + '<span class="commit__sr"> coins</span></span>' : '') +
      '<span class="fig__c">Spent ' + coins(spent) + ' · items worth ' + coins(got) + '</span></div>' + facts +
      '<div class="commit__acts"><button class="button button--primary button--l button--priced commit__wide" type="button" data-sell></button><button class="button button--ghost button--l commit__wide" type="button" data-again>Open again</button></div>' +
      '<p class="commit__saved">' + (n > 1 ? 'All ' + n + ' saved' : 'Saved') + ' to <a class="link" href="../wireframes/account.html">My items</a>, where ' + (n > 1 ? 'they' : 'it') + ' can be sent to Steam. <strong>Selling cannot be undone.</strong></p>' +
      '<p class="commit__links"><a class="link link--arrow" href="../wireframes/' + (n > 1 ? 'fair.html#check' : 'fair-prefilled.html' + round(rs[0])) + '">' + (n > 1 ? 'Check each of the ' + n + ' rounds' : 'Check this round') + '</a>' +
      '<a class="link link--arrow" href="../wireframes/result.html' + round(best) + '">' + (n > 1 ? 'Share a round' : 'Share this round') + '</a>' +
      '<a class="link link--arrow" href="https://steamcommunity.com/market/" rel="external nofollow">See it on the Steam Market</a></p>';
    busy = false; wire();
  }
  /* Sell, Sell all and Open again, read from the outcome's markup, so a page drawn at its outcome answers the same way */
  function wire() {
    var prizes = [].slice.call(row.querySelectorAll('.outcome')), sold = prizes.map(function () { return false; });
    var vals = prizes.map(function (o) { return num(o.getAttribute('data-v') || (o.querySelector('.outcome__v') || {}).textContent); });
    var sell = commit.querySelector('[data-sell]') || commit.querySelector('.commit__acts .button--primary');
    var again = commit.querySelector('[data-again]') || commit.querySelector('.commit__acts .button--ghost');
    function left() { return vals.filter(function (v, i) { return !sold[i]; }); }
    function sum(l) { return l.reduce(function (a, v) { return a + v; }, 0); }
    function drawSell() {
      var l = left(); if (!sell) return;
      if (!l.length) { sell.disabled = true; sell.innerHTML = 'All sold'; sell.removeAttribute('aria-label'); return; }
      var w = l.length > 1 ? 'Sell all' : 'Sell';
      sell.innerHTML = '<span>' + w + '</span><span class="button__price"><span class="icon icon--coin" aria-hidden="true"></span>' + sum(l).toFixed(2) + '</span>';
      sell.setAttribute('aria-label', (l.length > 1 ? 'Sell all ' + l.length + ' for ' : 'Sell for ') + sum(l).toFixed(2) + ' coins');
    }
    function sellOne(i) { sold[i] = true; setBalance(balance + vals[i]); var b = prizes[i].querySelector('.outcome__sell'); if (b) { b.disabled = true; b.innerHTML = 'Sold, +' + coins(vals[i]); } }
    // one press sells (founder of 6 Nov 2026); the line under the acts says it cannot be undone
    if (sell) sell.addEventListener('click', function () { var back = sum(left()); if (!back) return; vals.forEach(function (v, i) { if (!sold[i]) sellOne(i); });
      sell.disabled = true; sell.innerHTML = 'Sold, +' + coins(back); sell.removeAttribute('aria-label'); });
    prizes.forEach(function (o, i) { var b = o.querySelector('.outcome__sell'); if (b) b.addEventListener('click', function () { if (sold[i]) return; sellOne(i); drawSell(); }); });
    // Open again spends nothing: the case comes back to rest at the same count, and Open, where the price is printed, takes the spend
    if (again) again.addEventListener('click', function () { reset(); var g = commit.querySelector('.commit__go'); if (g) g.focus({ preventScroll: true }); });
    drawSell();
  }
  function reset() {
    stage.removeAttribute('data-phase'); row.innerHTML = ''; live.textContent = '';
    fillIdle();
    if (!boxes().length) rest.appendChild(newCase());
    count = boxes().length; stage.setAttribute('data-count', count);
    boxes().forEach(function (b) { b.getAnimations().forEach(function (a) { a.cancel(); }); b.style.opacity = '';
      if (!still) b.animate([{ transform: 'scale(.8)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.2, 1.3, .4, 1)' }); });
    if (line1) line1.textContent = 'Nine items, ' + COUNT[count] + '.';
    drawCommit();
  }

  /* ---- start ---- */
  commit.addEventListener('click', function (e) {
    var b = e.target.closest('.seg__opt'); if (b && !b.disabled) { setCount(+b.textContent); return; }
    if (account && e.target.closest('button.commit__go') && commit.getAttribute('data-state') !== 'open') { e.preventDefault(); open(); }
  });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && stage.getAttribute('data-phase') === 'won' && !d.querySelector('.dialog__layer:not([hidden])')) reset(); });
  (function () { var go = function () { if (window.requestIdleCallback) requestIdleCallback(bake, { timeout: 1500 }); else setTimeout(bake, 200); };
    if (d.readyState === 'complete') go(); else addEventListener('load', go); })();
  if (stage.getAttribute('data-phase') === 'won') {
    var tier = tierOf(row.querySelector('.outcome') || stage, 'outcome');
    fillIdle(); stage.setAttribute('data-phase', 'won'); stage.classList.add('case-stage--' + tier); wire(); return;
  }
  fillIdle();
  var start = /^[1-5]$/.test(Q.get('count') || '') ? +Q.get('count') : 1;
  if (start !== 1) setCount(start); else drawCommit();
})();
