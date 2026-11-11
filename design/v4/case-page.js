/* design/v4/case-page.js, the case screen in v4, node 3.3, D-209. wireframes/_nav.js has rendered the grey page's shell and body; this
   file redraws the top of the page, the stage and the commit block, and plays the three phases in place: choosing, the open, the outcome.
   Section 0 of case.md: the phases are states of one page, nothing is unmounted, one region changes what it holds. Section 7.4: the drop
   table stays in the document through the open, and the trigger does not re-arm while a reveal runs.
   The look of each block is a variant picked on its lab page; ?stage= ?reel= ?win= on the address preview another row on the real page.
   Row M is the page's own since the founder of 6 Nov 2026: "давай поставим кейсы наши обновленные кейс блок на страницу".
   Figures are the grey screen's samples, D-124. */
(function () {
  var Q = new URLSearchParams(location.search);
  var V = { stage: Q.get('stage') || 'm', reel: Q.get('reel') || 'a', win: Q.get('win') || 'a', commit: Q.get('commit') || 'a', light: Q.get('light') || 'a' };
  // rows H to L are flat: no atmosphere and no light, the frame, the markers and the contents behind the case carry the stage
  if (/^[h-m]$/.test(V.stage) && !Q.get('light')) V.light = 'd';
  var guest = Q.has('guest');
  // the entry cost, declared once here and read by case-body.js through window.V4Case.price
  var PRICE = 12.40, RTP = '94.2 %', EV = '11.68';
  window.V4Case = { price: PRICE };
  // ?embed: the page drawn inside a lab, without the project's sidebar
  if (Q.has('embed')) { var st = document.createElement('style'); st.textContent = '#sidebar,.nav-grip,.nav-toggle,.nav-scrim{display:none!important}:root{--nav-w:0px!important}'; document.head.appendChild(st); }
  var top = document.querySelector('.wf-top');
  if (!top || !window.V4Open) return;
  var O = window.V4Open;
  // the band, the columns and the reels mark a rare skin by its chance, founder of 10 Nov 2026 (rare-mark.js)
  O.marks = true;
  O.sound = (function () { try { return localStorage.getItem('v4-sound') === 'on'; } catch (e) { return false; } })();

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function now() { var d = new Date(); return d.getDate() + ' ' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()] + ' ' + d.getFullYear() + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
  function coins(v) { return v.toFixed(2) + '&nbsp;coins'; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  // a standalone link's words and its arrow, the last word kept with the arrow: theme.css ONE TEXT LINK, founder of 10 Nov 2026
  // the prototype's round records, wireframes/_nav.js ROUNDS: a won item links its own round where one is held, else no round is named
  var RKEY = { 'AK-47': 'ak', 'Glock-18': 'glock', 'M4A1-S': 'm4', 'USP-S': 'usp', 'Nova': 'nova', 'MP9': 'mp9', 'P250': 'p250' };
  function rq(x) { return x && RKEY[x.w] ? '?round=' + RKEY[x.w] : ''; }
  function best(rs) { return rs.slice().sort(function (a, b) { return b.v - a.v; })[0]; }
  function golink(t) { var i = t.lastIndexOf(' '); return esc(t.slice(0, i + 1)) + '<span class="nw">' + esc(t.slice(i + 1)) + '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'; }

  // the header's balance, read and written in place; wireframes/_nav.js draws it as "74.20 coins"
  // the shell may render after this file runs, so the figure is looked up when it is written
  function balEl() { return document.querySelector('.wf-shell .wf-fig-line .wf-fig-v'); }
  var balance = balEl() ? parseFloat(balEl().textContent) : 74.20;
  // and on Home's account plate in the header (account-home.js), which shows the same figure without the word
  function setBalance(v) { balance = Math.round(v * 100) / 100; var b = balEl(); if (b) b.textContent = balance.toFixed(2) + ' coins';
    // the plate repaints from _nav.js's moneyNow() whenever the hidden figure changes, so the figure it reads is set first
    if (window.WF_SHELL && window.moneyNow) window.WF_SHELL.money = { balance: balance.toFixed(2) + ' coins', held: window.moneyNow().held.toFixed(2) + ' coins' };
    var p = document.querySelector('.v4-ac [data-v4-money="balance"]'); if (p) p.textContent = balance.toFixed(2); }

  /* ---- the markup: the grey page's own nodes, moved, not retyped ---- */
  var risk = top.querySelector('.wf-risk'), say = top.querySelector('.wf-case-say'), fav = top.querySelector('.wf-fav-case');
  var crumb = document.querySelector('.wf-crumb'), how = document.querySelector('.wf-case-how');
  var stage = el('section', 'v4c-stage');
  stage.setAttribute('data-v', V.stage); stage.setAttribute('data-light', V.light); stage.setAttribute('aria-labelledby', 'h1');
  var head = el('div', 'v4c-head');
  var nav = el('div', 'v4c-nav'); if (crumb) nav.appendChild(crumb); if (how) nav.appendChild(how);
  head.appendChild(nav);
  var title = el('div', 'v4c-title'); if (say) title.appendChild(say); head.appendChild(title);
  /* founder, 5 Nov 2026, on the stage's head: the risk chip "скучно, у нас есть решение готовое", the four bolts of the case tiles, and the
     favourite "меняем на сердечко", the tiles' heart. The band's word stays in the element for a screen reader and becomes the bolts'
     tooltip (case-tiles.js); the favourite keeps its button, its label and _nav.js's toggling */
  if (risk) {
    var riskWord = risk.querySelector('span:not(.wf-risk-l)');
    risk.classList.add('wf-tile-risk', 'v4c-risk');
    risk.setAttribute('data-risk', riskWord ? riskWord.textContent.trim().toLowerCase() : '');
  }
  if (fav) fav.classList.add('v4c-fav');
  var flanks = el('div', 'v4c-flanks'); if (risk) flanks.appendChild(risk); if (fav) flanks.appendChild(fav); head.appendChild(flanks);
  stage.appendChild(head);

  var frame = el('div', 'v4c-frame'); frame.setAttribute('data-count', '1');
  // ?light= rows E to G of stage-lab: one light instead of the atmosphere; the beam, the pad and the floor line are hidden on row A
  var scene = el('div', 'v4c-scene', '<span class="v4c-rays"></span><span class="v4c-beam"></span><span class="v4c-pad"></span><span class="v4c-floor"></span><span class="v4c-line"></span><span class="v4c-dust"></span>' +
    // row H of stage-lab: the chamfered frame the case stands in, the reel's two markers waiting at its middle, the case's hexagon and its price
    '<span class="v4c-hexframe"></span><span class="v4c-mark is-t"></span><span class="v4c-mark is-b"></span><span class="v4c-hexpad"></span>' +
    '<span class="v4c-tag"><img src="art/brand/coin-6-small.svg" alt="">' + PRICE.toFixed(2) + '</span>');
  var rest = el('div', 'v4c-rest'), reel = el('div', 'v4c-reel'), win = el('div', 'v4c-win');
  reel.setAttribute('data-v', V.reel); win.setAttribute('data-v', V.win);
  reel.setAttribute('aria-hidden', 'true');
  var live = el('p', 'v4c-sr'); live.setAttribute('aria-live', 'polite');
  // row C of stage-lab: the case's nine items circling it, what is inside before anything is opened; hidden on the other rows
  var halo = el('div', 'v4c-halo'); halo.setAttribute('aria-hidden', 'true');
  O.items.forEach(function (x, i) { var h = el('span', 'v4c-halo-i ' + x.r, '<img src="' + x.art + '" alt="">'); h.style.setProperty('--n', i); halo.appendChild(h); });
  halo.style.setProperty('--count', O.items.length);
  /* rows J to L, founder of 5 Nov 2026: the skin strip under the stage goes, "делал бы на фоне сзади кейса": the nine stand behind the case,
     dim, each on the hexagon of its tier, laid out by the row (an arc in J, a honeycomb in K, a receding shelf either side in L) */
  var back = el('div', 'v4c-back'); back.setAttribute('aria-hidden', 'true');
  O.items.forEach(function (x, i) { var b = el('span', 'v4c-back-i ' + x.r, '<img src="' + x.art + '" alt="">'); b.style.setProperty('--n', i); back.appendChild(b); });
  back.style.setProperty('--count', O.items.length);
  /* row M, founder of 5 Nov 2026: "на фоне просто секция со скинами, уходит в никуда", no frame with sharp ends; "большой кейс поверх,
     скины по кругу крутятся". A band across the whole stage, a line along its top and its foot, the nine running through it in a loop and
     fading into nothing at both ends; the case stands large over its middle. On the tap the band gives way to the reel */
  var band = null, bandRun = null, cols = [], fillIdle = null;
  if (V.stage === 'm') {
    band = el('div', 'v4c-band'); bandRun = el('div', 'v4c-band-run'); band.setAttribute('aria-hidden', 'true');
    band.appendChild(bandRun); frame.appendChild(band);
    /* founder, 5 Nov 2026: "когда много кейсов я бы сразу переворачивал с горизонтальной ленты на вертикальные". Two to five cases turn
       the band into as many columns, one behind each case, drifting upward; the open runs each column under its own case */
    var colWrap = el('div', 'v4c-cols'); colWrap.setAttribute('aria-hidden', 'true');
    for (var cj = 0; cj < 5; cj++) { var col = el('div', 'v4c-col'); col.style.setProperty('--k', cj); col.appendChild(el('div', 'v4c-col-run')); colWrap.appendChild(col); cols.push(col); }
    frame.appendChild(colWrap);
    // the runs at rest: the nine twice over, each column starting from a different one, so no two columns read as one
    fillIdle = function () {
      [band].concat(cols).forEach(function (box, k) {
        var r = box.firstChild, from = box === band ? 0 : (k * 2) % O.items.length, list = O.items.slice(from).concat(O.items.slice(0, from));
        r.removeAttribute('style'); r.innerHTML = '';
        list.concat(list).forEach(function (x) { r.appendChild(O.card(x)); });
        box.removeAttribute('data-spin'); box.removeAttribute('data-tier'); box.style.removeProperty('--v4o-charge');
      });
      frame.removeAttribute('data-spin'); frame.removeAttribute('data-tier'); frame.style.removeProperty('--v4o-charge');
    };
    fillIdle();
    /* the pointers, founder of 5 Nov 2026: "тут я бы добавил стрелочки ... но сделал бы их визуально лучше, более объемными". Two cut gems,
       four faces each lit from above, over and under the band for one case, turning to either side of the stage for two to five, where
       the columns run upright; pink at rest, the colour of what is landing as the run slows, as lane()'s marker */
    /* then, the same day, "сильно 3д ... без центрального треугольника, ближе к цвету кнопок праймери", and on 6 Nov 2026 "что-то среднее
       между плоским и кристаллом, по цвету как праймери, но без лево-право, в центре дырку треугольную, и можно попробовать сверху тоже
       дырочку по центру". The default is one triangle in the primary button's pink, lighter at its base and deeper at its tip, cut through
       by a triangular hole, a fine light along its base and round the hole's rim; ?ptr=c adds a round hole over it; ?ptr=a keeps the gem */
    var HOLE = 'M10.9 6.4 L25.1 6.4 L18 18.2 Z', DOT = Q.get('ptr') === 'c' ? ' M16.6 3.7 a1.4 1.4 0 1 0 2.8 0 a1.4 1.4 0 1 0 -2.8 0 Z' : '';
    /* then, the same day: "стрелка хорошая получилась" (?ptr=c, the round hole over the triangular one), "давай теперь сверху разделить и
       скруглим углы": the default now is that triangle parted at the top through the round hole into the triangular one, two arms meeting
       at the tip, every corner rounded (each cut back along both its edges and joined by a curve through it, as row J's outline is);
       ?ptr=b is the triangle with one hole, ?ptr=c the one with two */
    function rounded(P) {
      var d = '', n = P.length;
      P.forEach(function (p, i) {
        var a = P[(i + n - 1) % n], b = P[(i + 1) % n];
        var la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]), k = Math.min(p[2], la / 2, lb / 2);
        var A = [p[0] + (a[0] - p[0]) * k / la, p[1] + (a[1] - p[1]) * k / la], B = [p[0] + (b[0] - p[0]) * k / lb, p[1] + (b[1] - p[1]) * k / lb];
        d += (i ? 'L' : 'M') + A[0].toFixed(2) + ' ' + A[1].toFixed(2) + 'Q' + p[0] + ' ' + p[1] + ' ' + B[0].toFixed(2) + ' ' + B[1].toFixed(2);
      });
      return d + 'Z';
    }
    var SPLIT = rounded([[16.7, 1, .8], [1, 1, 2.4], [18, 29, 2], [35, 1, 2.4], [19.3, 1, .8], [19.3, 6.4, .6], [25.1, 6.4, 1.3], [18, 18.2, 1.3], [10.9, 6.4, 1.3], [16.7, 6.4, .6]]);
    var split = !/^[abc]$/.test(Q.get('ptr') || '');
    var GEM = Q.get('ptr') === 'a'
      ? '<svg viewBox="0 0 36 30" aria-hidden="true" focusable="false"><polygon class="f-t" points="1,1 35,1 26,6.5 10,6.5"/>' +
        '<polygon class="f-l" points="1,1 10,6.5 18,20 18,29"/><polygon class="f-r" points="35,1 26,6.5 18,20 18,29"/>' +
        '<polygon class="f-c" points="10,6.5 26,6.5 18,20"/><path class="f-h" d="M11 7.2 H25"/></svg>'
      : '<svg viewBox="0 0 36 30" aria-hidden="true" focusable="false"><defs><linearGradient id="v4cPtrG" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" class="h-s1"/><stop offset=".55" class="h-s2"/><stop offset="1" class="h-s3"/></linearGradient></defs>' +
        (split ? '<path class="h-f" d="' + SPLIT + '"/><path class="h-e is-all" d="' + SPLIT + '"/><path class="h-t" d="M3.4 1.8 H15.6 M20.4 1.8 H32.6"/></svg>'
          : '<path class="h-f" fill-rule="evenodd" d="M1 1 L35 1 L18 29 Z ' + HOLE + DOT + '"/>' +
            '<path class="h-e" d="' + HOLE + DOT + '"/><path class="h-t" d="M3 1.7 H33"/></svg>');
    var ptr = el('div', 'v4c-ptr' + (Q.get('ptr') === 'a' ? ' is-gem' : '')); ptr.setAttribute('aria-hidden', 'true');
    ptr.innerHTML = '<span class="v4c-ptr-line"></span><span class="v4c-ptr-a is-a">' + GEM + '</span><span class="v4c-ptr-a is-b">' + GEM + '</span>';
    frame.appendChild(ptr);
    // the cells, founder of 5 Nov 2026: more than one case parts the stage into as many cells, divided by thin lines. Ours, not the
    // reference's drop from above: the lines draw out from the band's middle and slide to their new places as the count changes
    var cells = el('div', 'v4c-cells'); cells.setAttribute('aria-hidden', 'true');
    for (var ci = 1; ci < 5; ci++) { var ln = el('i'); ln.style.setProperty('--k', ci); cells.appendChild(ln); }
    frame.appendChild(cells);
  }
  frame.appendChild(scene); frame.appendChild(back); frame.appendChild(halo); frame.appendChild(rest); frame.appendChild(reel); frame.appendChild(win); frame.appendChild(live);
  stage.appendChild(frame);
  /* row J, the founder's sketch of 5 Nov 2026: "с правой стороны ... три карточки веером выглядывают (обрезанные), топ 3 дропа с кейса, и
     переливаются". The three of highest value from the same list, their value in coins, cut by the stage's right edge */
  var fan = el('div', 'v4c-fan'); fan.setAttribute('aria-hidden', 'true');
  O.items.slice().sort(function (a, b) { return b.v - a.v; }).slice(0, 3).forEach(function (x, i) {
    // founder, 5 Nov 2026, "сильно высоко": the cards sit lower, so the value moves to the card's top, as on the live drop's card, and
    // stays in sight above the cut
    var c = el('span', 'v4c-fan-c ' + x.r, '<span class="v4c-fan-v"><img src="art/brand/coin-6-small.svg" alt="">' + x.v.toFixed(2) + '</span>' +
      '<span class="v4c-fan-a"><img src="' + x.art + '" alt=""></span><span class="v4c-fan-w">' + x.w + '</span><b class="v4c-fan-s">' + x.s + '</b>');
    c.style.setProperty('--n', i); fan.appendChild(c);
  });
  stage.appendChild(fan);
  /* row J, founder of 5 Nov 2026: "углы закруглить". A clip-path polygon cannot round its corners, so the outline is drawn as one path with
     every corner rounded, the cut corners and the notch's four included, and redrawn as the stage changes size. The cut, the notch and their
     depths stay the css's (--cc, --nw, --nd, --cr), so a phone's stage without a notch is the same path with four corners fewer */
  var drawOutline = null;
  if (V.stage === 'j') {
    var NS = 'http://www.w3.org/2000/svg', ol = document.createElementNS(NS, 'svg');
    ol.setAttribute('class', 'v4c-outline'); ol.setAttribute('aria-hidden', 'true'); ol.setAttribute('preserveAspectRatio', 'none');
    ol.innerHTML = '<defs><linearGradient id="v4cOlS" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8B7CFF" stop-opacity=".6"/><stop offset=".3" stop-color="#8B7CFF" stop-opacity=".18"/>' +
      '<stop offset=".7" stop-color="#8B7CFF" stop-opacity=".18"/><stop offset="1" stop-color="#8B7CFF" stop-opacity=".6"/></linearGradient>' +
      '<linearGradient id="v4cOlF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#131240"/><stop offset="1" stop-color="#0C0B2A"/></linearGradient></defs>' +
      '<path fill="url(#v4cOlF)" stroke="url(#v4cOlS)" stroke-width="1.5"/>';
    stage.insertBefore(ol, stage.firstChild);
    var olPath = ol.querySelector('path');
    drawOutline = function () {
      var W = stage.clientWidth, H = stage.clientHeight; if (!W || !H) return;
      var cs = getComputedStyle(stage), px = function (n) { return parseFloat(cs.getPropertyValue(n)) || 0; };
      var c = px('--cc'), nw = px('--nw'), nd = px('--nd'), r = px('--cr'), e = .75, m = W / 2, s = nd ? 30 : 0;
      var P = [[c, e], [W - c, e], [W - e, c], [W - e, H - c], [W - c, H - e]];
      if (nd) P.push([m + nw + s, H - e], [m + nw, H - nd], [m - nw, H - nd], [m - nw - s, H - e]);
      P.push([c, H - e], [e, H - c], [e, c]);
      // each corner cut back by r along both of its edges and joined by a curve through the corner, never past half an edge
      var d = '', n = P.length;
      P.forEach(function (p, i) {
        var a = P[(i + n - 1) % n], b = P[(i + 1) % n];
        var la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]), k = Math.min(r, la / 2, lb / 2);
        var A = [p[0] + (a[0] - p[0]) * k / la, p[1] + (a[1] - p[1]) * k / la], B = [p[0] + (b[0] - p[0]) * k / lb, p[1] + (b[1] - p[1]) * k / lb];
        d += (i ? 'L' : 'M') + A[0].toFixed(1) + ' ' + A[1].toFixed(1) + 'Q' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ' ' + B[0].toFixed(1) + ' ' + B[1].toFixed(1);
      });
      ol.setAttribute('viewBox', '0 0 ' + W + ' ' + H); olPath.setAttribute('d', d + 'Z');
    };
    if (window.ResizeObserver) new ResizeObserver(drawOutline).observe(stage); else window.addEventListener('resize', drawOutline);
  }

  // the contents, drifting under the case: what the case holds, not its odds; the same nine whatever the count, D-47
  var show = el('div', 'v4c-show'); show.setAttribute('aria-hidden', 'true');
  var run = el('div', 'v4c-show-run');
  O.items.concat(O.items).forEach(function (x) {
    // founder, 5 Nov 2026: "мне не нравится список скинов, карточка выглядит ИИ". The card is the live drop's: the hexagon in the tier's
    // colour behind the skin, the value in coins over it, the gun and the skin under it, a short bar of the tier at its foot; the value is
    // the drop table's own figure, read from the same list
    run.appendChild(el('span', 'v4c-show-i ' + x.r, '<span class="v4c-show-v"><img src="art/brand/coin-6-small.svg" alt="">' + x.v.toFixed(2) + '</span>' +
      '<span class="v4c-show-a"><img src="' + x.art + '" alt=""></span><span class="v4c-show-w">' + x.w + '</span><b class="v4c-show-s">' + x.s + '</b>'));
  });
  show.appendChild(run); stage.appendChild(show);

  // the commit block: the count, the act and the line under it
  var commit = el('section', 'v4c-commit'); commit.setAttribute('aria-label', 'Open this case');
  var count = 1, busy = false;
  var counter = el('div', 'v4c-count'); counter.setAttribute('role', 'group'); counter.setAttribute('aria-label', 'Cases to open');
  counter.appendChild(el('span', 'v4c-count-l', 'Cases to open'));
  [1, 2, 3, 4, 5].forEach(function (n) {
    var b = el('button', 'v4c-count-b', String(n)); b.type = 'button'; b.setAttribute('aria-pressed', n === 1 ? 'true' : 'false');
    b.addEventListener('click', function () { if (!busy) setCount(n); });
    counter.appendChild(b);
  });
  var act = el(guest ? 'a' : 'button', 'v4c-go v4-btn v4-btn--l');
  // a guest's Sign in opens Home's sign in dialog in place (signin-home.js), as Home's own Sign in does; the grey page is the fallback
  if (guest) { act.href = '../../wireframes/signin.html'; act.setAttribute('data-auth-open', 'default'); act.innerHTML = '<span>Sign in</span>'; } else act.type = 'button';
  var cost = el('div', 'v4c-cost'), line = el('p', 'v4c-line'), hashRow = el('div', 'v4c-hash');
  // row J: the count stands inside the stage at its lower left, plain figures, and the act sits in the notch cut in the stage's foot
  if (!guest) { if (V.stage === 'j') { var foot = el('div', 'v4c-foot'); foot.appendChild(counter); stage.appendChild(foot); } else commit.appendChild(counter); }
  var actRow = el('div', 'v4c-act'); actRow.appendChild(cost); actRow.appendChild(act); commit.appendChild(actRow);
  commit.appendChild(line); commit.appendChild(hashRow);
  /* row M, founder of 5 Nov 2026: the count without its words, the seed hash "внизу", under the plate, and the risk "вместо сид, и сделал бы
     крупнее": the count, the act and the risk's bolts stand on one plate, the money line and the hash under it */
  if (V.stage === 'm') {
    var plate = el('div', 'v4c-plate');
    if (!guest) plate.appendChild(counter);
    plate.appendChild(actRow);
    if (risk) plate.appendChild(risk);
    commit.insertBefore(plate, commit.firstChild);
  }

  var after = el('section', 'v4c-after'); after.setAttribute('aria-label', 'What you got'); after.hidden = true;

  var host = el('div', 'v4c-top'); host.setAttribute('data-v', V.stage);
  // ?card= on row M: the skin card's look, three to choose from, founder of 5 Nov 2026: "скучно, надо лучше и интереснее"
  // founder, 6 Nov 2026, on card-lab.html after rows A to W6: "давай вот эту карточку" (W6) with W5's ring lit from the top left corner,
  // W7: the value large on top, a ring of the tier lit from the corner round a clear gap and a gradient fill, on a dark card lit from its side
  host.setAttribute('data-card', /^[a-z][1-9]?$/.test(Q.get('card') || '') ? Q.get('card') : 'w7');
  // the prize card is Z7 of win-lab.html, founder of 9 Nov 2026: "вот этот вариант хороший"; the other looks stay reachable by address
  var PZ = Q.get('prize') || 'z7';
  if (/^[xyz][1-9]$/.test(PZ)) host.setAttribute('data-prize', PZ);
  host.appendChild(stage); host.appendChild(commit); host.appendChild(after);
  top.parentNode.replaceChild(host, top);

  /* ?solo: the stage-lab draws only this block, founder of 5 Nov 2026: "чисто под первый блок с кейсом, без блоков всей страницы".
     Every element beside the block's line to the body is hidden, the sign in dialog's host excepted, and the page tells the lab its height */
  if (Q.has('solo')) {
    document.documentElement.classList.add('v4c-solo');
    // the body's blocks are drawn after this file runs (case-body.js, case-blocks.js, the footer), so the hiding runs again as they arrive
    var hideRest = function () {
      for (var up = host; up && up !== document.body; up = up.parentElement) {
        Array.prototype.forEach.call(up.parentElement.children, function (sib) {
          if (sib !== up && sib.style.display !== 'none' && !sib.matches('script, style, .wf-auth-host, dialog, .v4-ac-scrim')) sib.style.display = 'none';
        });
      }
    };
    hideRest();
    if (window.MutationObserver) new MutationObserver(hideRest).observe(document.body, { childList: true, subtree: true });
    var tell = function () { try { parent.postMessage({ v4cSolo: location.search, h: Math.ceil(host.getBoundingClientRect().bottom + window.scrollY + 16) }, '*'); } catch (e) {} };
    if (window.ResizeObserver) new ResizeObserver(tell).observe(document.body);
    window.addEventListener('load', tell);
  }

  /* ---- phase 1, choosing ---- */
  function hash() { return Math.random().toString(16).slice(2, 8) + '…' + Math.random().toString(16).slice(2, 8); }
  function drawRest() {
    if (V.stage === 'm') { dealRest(); return; }
    rest.innerHTML = '';
    // row D, the machine at rest: one open stands as the reel itself, the case in the marker's slot and the contents either side of it,
    // the idle reel key-drop shows, pushed: on the tap the case lights and the strip runs out of that slot. Two and more keep the boxes
    if ((V.stage === 'd' || V.stage === 'i') && count === 1) { // row I: the founder's union of H's frame and D's reel at rest
      var idle = el('div', 'v4c-idle'), tr = el('div', 'v4c-idle-run');
      var seq = [6, 4, 2, 0, 8, -1, 7, 1, 3, 5, 6];
      seq.forEach(function (k) {
        if (k < 0) { tr.appendChild(el('span', 'v4c-idle-slot', '<img src="art/cases-v2/ironbound-c.webp" alt="">')); return; }
        var x = O.items[k]; tr.appendChild(el('span', 'v4o-card ' + x.r, '<span class="v4o-plate"></span><img class="v4o-img" src="' + x.art + '" alt=""><span class="v4o-name"><b>' + x.w + '</b><span>' + x.s + '</span></span>'));
      });
      idle.appendChild(tr); idle.appendChild(el('span', 'v4c-idle-mark'));
      rest.appendChild(idle); return;
    }
    for (var i = 0; i < count; i++) rest.appendChild(el('span', 'v4c-box', '<img src="art/cases-v2/ironbound-c.webp" alt="">'));
  }
  /* row M: the count deals the cases. The ones already there glide to their new cells; each new one is dealt out from behind the last case
     that stood, scaling up as it travels to its cell; the ones no longer wanted slide back under the last case left and go. Founder of
     5 Nov 2026: "мне нравится как появляются кейсы и меняется направление сразу, но не надо делать точно так же, придумать что-то наше" */
  var dealSnap = null;
  function snapRest() {
    var boxes = Array.prototype.filter.call(rest.children, function (b) { return b.classList.contains('v4c-box') && !b.classList.contains('is-leaving'); });
    dealSnap = { boxes: boxes, rects: boxes.map(function (b) { return b.getBoundingClientRect(); }) };
  }
  function dealRest() {
    // where each case stood is read by setCount before the new count reaches the css, which reflows the cells at once
    var prev = dealSnap ? dealSnap.boxes : [], first = dealSnap ? dealSnap.rects : []; dealSnap = null;
    var keep = prev.slice(0, count), drop = prev.slice(count);
    // the leaving ones step out of the grid where they stood, so the others take their cells at once
    drop.forEach(function (b, i) {
      var r = first[count + i]; b.classList.add('is-leaving'); b.style.position = 'absolute'; b.style.width = r.width + 'px';
      // placed against whatever box it now hangs from, so it stays exactly where it stood
      var op = (b.offsetParent || rest).getBoundingClientRect();
      b.style.left = (r.left - op.left) + 'px'; b.style.top = (r.top - op.top) + 'px'; b.style.margin = '0';
    });
    for (var i = keep.length; i < count; i++) keep.push(rest.appendChild(el('span', 'v4c-box', '<img src="art/cases-v2/ironbound-c.webp" alt="">')));
    keep.forEach(function (b, i) { b.style.zIndex = String(10 - i); });
    var anim = !O.still && first.length && keep[0].animate;
    if (!anim) { drop.forEach(function (b) { b.remove(); }); return; }
    var ease = 'cubic-bezier(.22, 1, .36, 1)', src = first[Math.min(prev.length, count) - 1] || first[0];
    function c(r) { return [r.left + r.width / 2, r.top + r.height / 2]; }
    keep.forEach(function (b, i) {
      var to = b.getBoundingClientRect(), from = i < first.length ? first[i] : src, isNew = i >= first.length;
      var a = c(from), z = c(to), sc = from.width / to.width;
      b.animate([{ transform: 'translate(' + (a[0] - z[0]) + 'px,' + (a[1] - z[1]) + 'px) scale(' + (isNew ? sc * .7 : sc) + ')', opacity: isNew ? 0 : 1, filter: isNew ? 'brightness(.4)' : 'none' },
        { transform: 'none', opacity: 1, filter: 'none' }], { duration: isNew ? 560 : 480, delay: isNew ? (i - first.length) * 80 : 0, easing: ease, fill: 'backwards' });
    });
    var home = keep[keep.length - 1].getBoundingClientRect();
    drop.forEach(function (b, i) {
      var r = b.getBoundingClientRect(), a = c(r), z = c(home);
      b.animate([{ transform: 'none', opacity: 1 }, { transform: 'translate(' + (z[0] - a[0]) + 'px,' + (z[1] - a[1]) + 'px) scale(.6)', opacity: 0 }],
        { duration: 380, delay: (drop.length - 1 - i) * 50, easing: 'cubic-bezier(.5, 0, .75, 0)', fill: 'forwards' }).onfinish = function () { b.remove(); };
    });
  }
  function drawCommit() {
    var total = PRICE * count, short = !guest && total > balance;
    // the words are microcopy.md 3.3's: a guest sees the price beside Sign in, an account sees it on the button, 3.3-5
    cost.innerHTML = (guest ? '<b>' + coins(PRICE) + '</b><span>Price, one open</span>' : '') +
      // ?commit=b: what it returns on average, beside what it costs, design principle 3; datdrop prints these in a table below the fold
      (V.commit === 'b' ? '<span class="v4c-ret">Returns <b>' + coins(parseFloat(EV) * count) + '</b> on average · 37 % of opens beat the price</span>' : '');
    /* founder, 5 Nov 2026, instead of a line under the act: the price rides in the button, "Open 1 case" and the coins in a chip at its end;
       the accessible name still says what it costs */
    if (!guest) {
      /* short of the price, critique run 4 row 29 and the founder of 11 Nov 2026, "мы это покажем на открытии кейса самого": the act keeps
         its words and its price and refuses, the line beside it says by how much and where to add funds; it no longer turns into Add funds */
      act.innerHTML = '<span>Open ' + count + ' case' + (count > 1 ? 's' : '') + '</span><span class="v4c-go-price"><img src="art/brand/coin-6-small.svg" alt="">' + total.toFixed(2) + '</span>';
      act.setAttribute('aria-label', 'Open ' + count + ' case' + (count > 1 ? 's' : '') + ' for ' + total.toFixed(2) + ' coins' + (short ? ', ' + (total - balance).toFixed(2) + ' coins short' : ''));
      if (short) act.setAttribute('aria-disabled', 'true'); else act.removeAttribute('aria-disabled');
    }
    act.classList.toggle('is-short', short);
    // the expected value for the count chosen, run 4 row 30: 11.68 per open beside a total of 62.00 read as the return on the total
    var ev = count > 1 ? coins(parseFloat(EV) * count) + ' for ' + count + ' opens' : EV + ' coins';
    line.innerHTML = (guest ? '' : short ? 'You have ' + coins(balance) + ', ' + coins(total - balance) + ' short. <a href="../../wireframes/deposit.html">Add funds</a> · ' : 'After this open, ' + coins(balance - total) + ' · ') +
      '1 coin = $1.00 · <a href="#h2-pays">RTP ' + RTP + ', expected value ' + ev + '</a>';
    // the hash is on screen before the act, 0.14 V1 at the trigger, in its pre-roll state
    var hs = []; for (var i = 0; i < count; i++) hs.push(hash());
    hashRow.innerHTML = guest ? '' : '<span class="v4c-hash-l">Server seed hash' + (count > 1 ? 'es' : '') + '</span>' + hs.map(function (h) { return '<code>' + h + '</code>'; }).join('');
  }
  function setCount(n) {
    if (V.stage === 'm') snapRest();
    count = n; frame.setAttribute('data-count', n); frame.style.setProperty('--count', n);
    Array.prototype.forEach.call(counter.querySelectorAll('.v4c-count-b'), function (b, i) { b.setAttribute('aria-pressed', String(i + 1 === n)); });
    var w = ['', 'one open', 'two opens', 'three opens', 'four opens', 'five opens'][n];
    var cl = title.querySelector('.wf-case-line span'); if (cl) cl.textContent = 'Nine items, ' + w + '.';
    drawRest(); drawCommit();
  }

  /* ---- phase 2, the open ---- */
  act.addEventListener('click', function (e) {
    if (guest) return;
    e.preventDefault();
    if (busy) return;
    var total = PRICE * count;
    if (total > balance) { line.querySelector('a').focus(); return; } // refuses; the reason and Add funds stand beside it
    busy = true; host.classList.add('is-opening');
    setBalance(balance - total);
    var results = O.roll(O.items, count);
    // ?land= on open-lab.html: the first result is the one asked for, an item of the table by its place, or k for the top tier's demo
    var land = Q.get('land');
    if (land === 'k') results[0] = O.dress(O.knife); else if (land && O.items[+land]) results[0] = O.dress(O.items[+land]);
    act.disabled = true; counter.classList.add('is-locked');
    // founder of 11 Nov 2026: "центрированно текст и может что то типа минус такая то сумма а маленький текст ваш баланс такой то"
    cost.innerHTML = '<b>−' + coins(total) + '</b><span>Your balance ' + coins(balance) + '</span>';
    act.hidden = true;
    line.innerHTML = count > 1 ? 'Opening ' + count + ' cases. All ' + count + ' results were fixed before the animation started.' : 'Opening. The result was fixed before the animation started.';
    live.textContent = 'Opening ' + (count > 1 ? count + ' cases' : 'the case') + '.';
    frame.setAttribute('data-phase', 'open');
    // a tap at the foot of a narrow screen would leave the reel above the fold: the stage comes to the middle first
    var fr = frame.getBoundingClientRect();
    if (fr.top < 0 || fr.bottom > window.innerHeight) frame.scrollIntoView({ block: 'center', behavior: O.still ? 'auto' : 'smooth' });
    if (V.stage === 'm') { openM(results); return; }
    // the case gives way to the reel: a beat for the box to light and lift, then the reel runs; inside the 4 to 6 seconds of 7.2
    setTimeout(function () {
      O.open(reel, { count: count, results: results, bend: V.reel === 'b', duration: 4600 }).then(function () {
        setTimeout(function () { outcome(results); }, count > 1 ? 650 : 850);
      });
    }, O.still ? 0 : 450);
  });

  /* row M, the open, founder of 5 Nov 2026: "один кейс я бы смещал к центру с анимацией такой типа бамс и пошёл крутиться". Each case
     draws back, lunges to the stage's middle and hits: a flash, a wave along the band, the stage jolts once, the case bursts toward the
     reader and is gone, and at that instant the run behind it, the band or its own column, takes off and runs to the settled result. The
     pointers close in on the band as it starts. Two to five lock one after another, 0.6s apart, case.md 7.2 */
  var HIT = 390; // ms from the tap to the hit, the run starts on it
  function openM(results) {
    var boxes = Array.prototype.filter.call(rest.children, function (b) { return b.classList.contains('v4c-box') && !b.classList.contains('is-leaving'); });
    var lanes = count === 1 ? [{ box: band, axis: 'x' }] : cols.slice(0, count).map(function (c) { return { box: c, axis: 'y' }; });
    var best = results.slice().sort(function (a, b) { return O.rank[b.r] - O.rank[a.r] || b.v - a.v; })[0];
    frame.setAttribute('data-tier', best.r);
    var fr = frame.getBoundingClientRect(), mid = [fr.left + fr.width / 2, fr.top + fr.height / 2];
    boxes.forEach(function (b, i) {
      if (O.still) { b.style.opacity = '0'; return; }
      var r = b.getBoundingClientRect(), c = [r.left + r.width / 2, r.top + r.height / 2];
      var dx = count === 1 ? mid[0] - c[0] : 0, dy = mid[1] - c[1], at = 'translate(' + dx + 'px,' + dy + 'px) ';
      b.animate([
        { transform: 'none', filter: 'none', opacity: 1 },
        { transform: 'translate(0, 8px) scale(.93)', filter: 'brightness(.85)', opacity: 1, offset: .24 },  // draws back
        { transform: at + 'scale(1.12)', filter: 'brightness(1.4)', opacity: 1, offset: .5 },              // lunges to the middle
        { transform: at + 'scale(1.22, .86)', filter: 'brightness(2.6)', opacity: 1, offset: .57 },        // the hit
        { transform: at + 'scale(1.75)', filter: 'brightness(3)', opacity: 0 }                  // bursts toward the reader; no blur since
        // the performance pass of 10 Nov 2026: a 12px blur over two to five cases this size cost about 7 of 57 frames a second in an open of four, measured
      ], { duration: 690, delay: i * 70, easing: 'cubic-bezier(.33, 0, .2, 1)', fill: 'forwards' });
      // the flash and the wave, at the case's middle, on the hit
      var fx = frame.getBoundingClientRect();
      [['v4c-bam', 380], ['v4c-wave', 640]].forEach(function (k) {
        var n = el('span', k[0]); n.style.left = (c[0] - fx.left) + 'px'; n.style.top = (mid[1] - fx.top) + 'px'; frame.appendChild(n);
        var a = k[0] === 'v4c-bam'
          ? n.animate([{ opacity: 0, transform: 'translate(-50%,-50%) scale(.3)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)', offset: .25 }, { opacity: 0, transform: 'translate(-50%,-50%) scale(1.5)' }], { duration: k[1], delay: HIT - 40 + i * 70, easing: 'ease-out', fill: 'both' })
          : n.animate([{ opacity: .9, transform: 'translate(-50%,-50%) scale(.25, .25)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(' + (count === 1 ? '5, 1.5' : '1.6, 2.6') + ')' }], { duration: k[1], delay: HIT + i * 70, easing: 'cubic-bezier(.2, .7, .3, 1)', fill: 'both' });
        a.onfinish = function () { n.remove(); };
      });
    });
    // the stage jolts once on the first hit
    if (!O.still) frame.animate([{ transform: 'none' }, { transform: 'translate(-5px, 3px)' }, { transform: 'translate(4px, -2px)' }, { transform: 'translate(-2px, 1px)' }, { transform: 'none' }],
      { duration: 260, delay: HIT, easing: 'linear' });
    var runs = lanes.map(function (l, i) {
      return O.drive(l.box, l.box.firstChild, { result: results[i], axis: l.axis, duration: 4600 + i * 600, delay: O.still ? 0 : HIT + i * 70,
        paint: i === lanes.length - 1 ? [frame] : [] });
    });
    Promise.all(runs).then(function () {
      setTimeout(function () {
        // where each won card stands in its run, read before the outcome takes the stage, so the prize leaves the run from that spot
        var from = lanes.map(function (l) { var w = l.box.querySelector('.is-won'); return w ? w.getBoundingClientRect() : null; });
        outcome(results);
        // the prize carries the stage's ring too, founder of 6 Nov 2026 on W7: "да, не мешало бы" (case-win.js dress)
        window.V4Win.dress(win, results);
        Array.prototype.forEach.call(win.querySelectorAll('.v4c-won-card'), function (c, i) {
          var f = from[i]; if (!f || O.still) return;
          var to = c.getBoundingClientRect(), s = f.height / to.height;
          c.animate([{ transform: 'translate(' + (f.left + f.width / 2 - to.left - to.width / 2) + 'px,' + (f.top + f.height / 2 - to.top - to.height / 2) + 'px) scale(' + s + ')' },
            { transform: 'none' }], { duration: 760, delay: i * 90, easing: 'cubic-bezier(.34, 1.3, .5, 1)', fill: 'backwards' });
        });
      }, count > 1 ? 650 : 800);
    });
  }

  /* ---- phase 3, the outcome ---- */
  function outcome(rs) {
    busy = false; host.classList.remove('is-opening'); host.classList.add('is-done');
    frame.setAttribute('data-phase', 'won');
    window.V4Win.render(win, rs, { sell: true, price: PRICE });
    live.textContent = rs.map(function (x) { return x.w + ' ' + x.s + ', ' + x.v.toFixed(2) + ' coins'; }).join('; ') + '.';

    var n = rs.length, sold = [];
    // a copy on sale is a sample, D-124, drawn between 10 % under and 15 % over our value so both directions of the settlement show,
    // case.md section 8.1b: "the direction goes both ways and this surface must print both"
    rs.forEach(function (x) { if (x.copy == null) x.copy = Math.round(x.v * (0.9 + Math.random() * 0.25) * 100) / 100; });
    function signed(v) { return (v >= 0 ? '+' : '−') + coins(Math.abs(v)); }
    function left() { return rs.filter(function (x, i) { return !sold[i]; }); }
    function worth(list) { return list.reduce(function (a, x) { return a + x.v; }, 0); }
    /* two acts, founder of 11 Nov 2026: "не писал би длинные кнопки, в любом случае Open again, которое ведет на новое открытие кейсов (без
       открытия, без того что тебе надо пополнить кошелек, мы это покажем на открытии кейса самого) и убрать кнопку send to steam и оставить
       две кнопки Sell ALL как праймери и Open again как второстепенная". Sell all carries its sum in a chip as Open carries its price; Open
       again spends nothing and never asks for a deposit (critique run 4 row 27); sending to Steam is in My items, named in the line below */
    var acts = '<div class="v4c-acts"><button type="button" class="v4c-sell v4-btn v4-btn--l"></button>' +
      '<button type="button" class="v4c-again v4-btn v4-btn--l v4-btn--ghost">Open again</button></div>';
    // the net of this open first, run 4 row 27: what it cost against what came out of it, at our values
    var spent = PRICE * n, got = worth(rs), net = Math.round((got - spent) * 100) / 100;
    var netLine = '<div class="v4c-net"><b>' + signed(net) + '</b><span>Spent ' + coins(spent) + ' · items worth ' + coins(got) + '</span></div>';
    var inst = n === 1 ? '<p class="v4c-inst">As of ' + now() + ' · Float <b>' + rs[0].float + '</b> · Pattern <b>' + rs[0].pattern + '</b> · <a href="steam://rungame/730">Inspect in game</a></p>' +
      '<p class="v4c-inst">Value <b>' + rs[0].v.toFixed(2) + '</b> coins · a copy on sale <b>' + rs[0].copy.toFixed(2) + '</b> coins, read ' + now() + '</p>'
      // a batch: what sending each one settles, 3.3-45, and every round's own receipt and proof route, case.md 8 block 7, 3.3-37 to 3.3-40
      : '<details class="v4c-rounds"><summary>Round details, ' + n + ' rounds</summary><p>Every round, in the order of the row above, which is the order of the reels.</p><ol>' +
        rs.map(function (x) { return '<li>' + esc(x.w + ' ' + x.s) + ' · Float <b>' + x.float + '</b> · Pattern <b>' + x.pattern + '</b> · <a href="../../wireframes/fair-prefilled.html' + rq(x) + '">Check this round</a> · <a href="steam://rungame/730">Inspect in game</a></li>'; }).join('') +
        '</ol></details>';
    after.innerHTML = netLine + inst + acts +
      '<p class="v4c-saved">' + (n > 1 ? 'All ' + n + ' saved' : 'Saved') + ' to <a href="../../wireframes/account.html">My items</a>, where ' + (n > 1 ? 'they' : 'it') + ' can be sent to Steam. <strong>Selling cannot be undone.</strong></p>' +
      // the round goes with the link where the prototype holds its record, run 4 row 28 (_nav.js ROUNDS); several rounds go to the checker
      '<p class="v4c-links"><a class="v4-go" href="../../wireframes/' + (n > 1 ? 'fair.html#check' : 'fair-prefilled.html' + rq(rs[0])) + '">' + golink(n > 1 ? 'Check each of the ' + n + ' rounds' : 'Check this round') + '</a>' +
      '<a class="v4-go" href="../../wireframes/result.html' + rq(best(rs)) + '">' + golink(n > 1 ? 'Share a round' : 'Share this round') + '</a><a class="v4-go" href="https://steamcommunity.com/market/" rel="external nofollow">' + golink('See it on the Steam Market') + '</a></p>';
    after.hidden = false; commit.hidden = true;
    var again = after.querySelector('button.v4c-again');
    // founder of 6 Nov 2026: "не должен запускать снова рулетку, он должен показать страницу кейса". The press spends nothing, so it
    // carries no price: it puts the case back at rest with the same count, and the Open button, where the price is printed, takes the spend
    if (again) again.addEventListener('click', function () { reset(); act.focus({ preventScroll: true }); });
    var sell = after.querySelector('.v4c-sell'), ones = win.querySelectorAll('.v4c-sell1');
    // the batch controls follow what is left, case.md section 12, "on a batch the batch control follows what is left"
    function drawBatch() {
      var l = left();
      if (!l.length) { sell.disabled = true; sell.innerHTML = 'All sold'; sell.removeAttribute('aria-label'); return; }
      sell.innerHTML = '<span>' + (l.length > 1 ? 'Sell all' : 'Sell') + '</span><span class="v4c-go-price"><img src="art/brand/coin-6-small.svg" alt="">' + worth(l).toFixed(2) + '</span>';
      sell.setAttribute('aria-label', (l.length > 1 ? 'Sell all ' + l.length + ' for ' : 'Sell for ') + worth(l).toFixed(2) + ' coins');
    }
    function sellOne(i, b) {
      sold[i] = true; setBalance(balance + rs[i].v);
      if (b) { b.disabled = true; b.innerHTML = 'Sold<span class="v4c-sell1-v">, +' + coins(rs[i].v) + '</span>'; }
    }
    // one press sells, founder of 6 Nov 2026: "сел не надо два раза нажимать что би продать, везде у конкурентов ты продаешь быстро".
    // This retires D-143's "every sale asks first"; the label already names the figure, and the line under the acts says it cannot be undone
    sell.addEventListener('click', function () {
      var l = left(); if (!l.length) return;
      var back = worth(l); rs.forEach(function (x, i) { if (!sold[i]) sellOne(i, ones[i]); });
      sell.disabled = true; sell.innerHTML = 'Sold, +' + coins(back); sell.removeAttribute('aria-label');
    });
    Array.prototype.forEach.call(ones, function (b, i) {
      b.addEventListener('click', function () { if (sold[i]) return; sellOne(i, b); drawBatch(); });
    });
    drawBatch();
  }
  function reset() {
    commit.hidden = false; after.hidden = true; win.classList.remove('is-on'); win.innerHTML = '';
    frame.removeAttribute('data-phase'); reel.innerHTML = ''; reel.className = 'v4c-reel'; act.disabled = false; act.hidden = false; counter.classList.remove('is-locked');
    host.classList.remove('is-done'); drawCommit();
    // row M: the runs go back to drifting and the cases come back where they stood
    if (V.stage === 'm') {
      fillIdle();
      Array.prototype.forEach.call(rest.querySelectorAll('.v4c-box'), function (b) {
        b.getAnimations().forEach(function (a) { a.cancel(); }); b.style.opacity = '';
        if (!O.still) b.animate([{ transform: 'scale(.8)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.2, 1.3, .4, 1)' });
      });
    }
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && host.classList.contains('is-done')) reset(); });

  setCount(/^[1-5]$/.test(Q.get('count') || '') ? +Q.get('count') : 1); // ?count= on open-lab.html
  window.V4Case = { reset: reset, set: setCount, variant: V, price: PRICE };
})();
