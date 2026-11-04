/* design/v4/case-page.js, the case screen in v4, node 3.3, D-209. wireframes/_nav.js has rendered the grey page's shell and body; this
   file redraws the top of the page, the stage and the commit block, and plays the three phases in place: choosing, the open, the outcome.
   Section 0 of case.md: the phases are states of one page, nothing is unmounted, one region changes what it holds. Section 7.4: the drop
   table stays in the document through the open, and the trigger does not re-arm while a reveal runs.
   The look of each block is a variant picked on its lab page; ?stage= ?reel= ?win= on the address preview another row on the real page.
   Figures are the grey screen's samples, D-124. */
(function () {
  var Q = new URLSearchParams(location.search);
  var V = { stage: Q.get('stage') || 'a', reel: Q.get('reel') || 'a', win: Q.get('win') || 'a', commit: Q.get('commit') || 'a' };
  var guest = Q.has('guest');
  var PRICE = 12.40, RTP = '94.2 %', EV = '11.68';
  // ?embed: the page drawn inside a lab, without the project's sidebar
  if (Q.has('embed')) { var st = document.createElement('style'); st.textContent = '#sidebar,.nav-grip,.nav-toggle,.nav-scrim{display:none!important}:root{--nav-w:0px!important}'; document.head.appendChild(st); }
  var top = document.querySelector('.wf-top');
  if (!top || !window.V4Open) return;
  var O = window.V4Open;
  O.sound = (function () { try { return localStorage.getItem('v4-sound') === 'on'; } catch (e) { return false; } })();

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function coins(v) { return v.toFixed(2) + '&nbsp;coins'; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // the header's balance, read and written in place; wireframes/_nav.js draws it as "74.20 coins"
  // the shell may render after this file runs, so the figure is looked up when it is written
  function balEl() { return document.querySelector('.wf-shell .wf-fig-line .wf-fig-v'); }
  var balance = balEl() ? parseFloat(balEl().textContent) : 74.20;
  function setBalance(v) { balance = Math.round(v * 100) / 100; var b = balEl(); if (b) b.textContent = balance.toFixed(2) + ' coins'; }

  /* ---- the markup: the grey page's own nodes, moved, not retyped ---- */
  var risk = top.querySelector('.wf-risk'), say = top.querySelector('.wf-case-say'), fav = top.querySelector('.wf-fav-case');
  var crumb = document.querySelector('.wf-crumb'), how = document.querySelector('.wf-case-how');
  var stage = el('section', 'v4c-stage');
  stage.setAttribute('data-v', V.stage); stage.setAttribute('aria-labelledby', 'h1');
  var head = el('div', 'v4c-head');
  var nav = el('div', 'v4c-nav'); if (crumb) nav.appendChild(crumb); if (how) nav.appendChild(how);
  head.appendChild(nav);
  var title = el('div', 'v4c-title'); if (say) title.appendChild(say); head.appendChild(title);
  var flanks = el('div', 'v4c-flanks'); if (risk) flanks.appendChild(risk); if (fav) flanks.appendChild(fav); head.appendChild(flanks);
  stage.appendChild(head);

  var frame = el('div', 'v4c-frame'); frame.setAttribute('data-count', '1');
  var scene = el('div', 'v4c-scene', '<span class="v4c-rays"></span><span class="v4c-floor"></span><span class="v4c-dust"></span>');
  var rest = el('div', 'v4c-rest'), reel = el('div', 'v4c-reel'), win = el('div', 'v4c-win');
  reel.setAttribute('data-v', V.reel); win.setAttribute('data-v', V.win);
  reel.setAttribute('aria-hidden', 'true');
  var live = el('p', 'v4c-sr'); live.setAttribute('aria-live', 'polite');
  // row C of stage-lab: the case's nine items circling it, what is inside before anything is opened; hidden on the other rows
  var halo = el('div', 'v4c-halo'); halo.setAttribute('aria-hidden', 'true');
  O.items.forEach(function (x, i) { var h = el('span', 'v4c-halo-i ' + x.r, '<img src="' + x.art + '" alt="">'); h.style.setProperty('--n', i); halo.appendChild(h); });
  halo.style.setProperty('--count', O.items.length);
  frame.appendChild(scene); frame.appendChild(halo); frame.appendChild(rest); frame.appendChild(reel); frame.appendChild(win); frame.appendChild(live);
  stage.appendChild(frame);

  // the contents, drifting under the case: what the case holds, not its odds; the same nine whatever the count, D-47
  var show = el('div', 'v4c-show'); show.setAttribute('aria-hidden', 'true');
  var run = el('div', 'v4c-show-run');
  O.items.concat(O.items).forEach(function (x) {
    run.appendChild(el('span', 'v4c-show-i ' + x.r, '<img src="' + x.art + '" alt=""><b>' + x.w + '</b><span>' + x.s + '</span>'));
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
  if (guest) { act.href = '../../wireframes/signin.html'; act.innerHTML = '<span>Sign in to open</span>'; } else act.type = 'button';
  var cost = el('div', 'v4c-cost'), line = el('p', 'v4c-line'), hashRow = el('div', 'v4c-hash');
  if (!guest) commit.appendChild(counter);
  var actRow = el('div', 'v4c-act'); actRow.appendChild(cost); actRow.appendChild(act); commit.appendChild(actRow);
  commit.appendChild(line); commit.appendChild(hashRow);

  var after = el('section', 'v4c-after'); after.setAttribute('aria-label', 'What you got'); after.hidden = true;

  var host = el('div', 'v4c-top'); host.setAttribute('data-v', V.stage);
  host.appendChild(stage); host.appendChild(commit); host.appendChild(after);
  top.parentNode.replaceChild(host, top);

  /* ---- phase 1, choosing ---- */
  function hash() { return Math.random().toString(16).slice(2, 8) + '…' + Math.random().toString(16).slice(2, 8); }
  function drawRest() {
    rest.innerHTML = '';
    // row D, the machine at rest: one open stands as the reel itself, the case in the marker's slot and the contents either side of it,
    // the idle reel key-drop shows, pushed: on the tap the case lights and the strip runs out of that slot. Two and more keep the boxes
    if (V.stage === 'd' && count === 1) {
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
  function drawCommit() {
    var total = PRICE * count, short = !guest && total > balance;
    cost.innerHTML = '<b>' + coins(total) + '</b><span>' + (count > 1 ? 'Price, ' + count + ' opens' : 'Price, one open') + '</span>' +
      // ?commit=b: what it returns on average, beside what it costs, design principle 3; datdrop prints these in a table below the fold
      (V.commit === 'b' ? '<span class="v4c-ret">Returns <b>' + coins(parseFloat(EV) * count) + '</b> on average · 37 % of opens beat the price</span>' : '');
    if (!guest) act.innerHTML = '<span>' + (short ? 'Add funds to open' : (count > 1 ? 'Open ' + count : 'Open case')) + '</span>';
    act.classList.toggle('is-short', short);
    line.innerHTML = (guest ? 'Signing in takes one step with Steam. ' : short ? 'Not enough on your balance for ' + count + '. '
      : 'After this open, ' + coins(balance - total) + ' · ') + '1 coin = $1.00 · <a href="#h2-pays">RTP ' + RTP + ', expected value ' + EV + ' coins</a>';
    // the hash is on screen before the act, 0.14 V1 at the trigger, in its pre-roll state
    var hs = []; for (var i = 0; i < count; i++) hs.push(hash());
    hashRow.innerHTML = guest ? '' : '<span class="v4c-hash-l">Server seed hash' + (count > 1 ? 'es' : '') + '</span>' + hs.map(function (h) { return '<code>' + h + '</code>'; }).join('');
  }
  function setCount(n) {
    count = n; frame.setAttribute('data-count', n);
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
    if (total > balance) { location.href = '../../wireframes/deposit.html'; return; }
    busy = true; host.classList.add('is-opening');
    setBalance(balance - total);
    var results = O.roll(O.items, count);
    act.disabled = true; counter.classList.add('is-locked');
    cost.innerHTML = '<b>' + coins(total) + '</b><span>Spent</span>';
    act.innerHTML = '<span>Opening…</span>';
    line.innerHTML = (count > 1 ? 'All ' + count + ' results were' : 'The result was') + ' fixed before the animation started.';
    live.textContent = 'Opening ' + (count > 1 ? count + ' cases' : 'the case') + '.';
    frame.setAttribute('data-phase', 'open');
    // a tap at the foot of a narrow screen would leave the reel above the fold: the stage comes to the middle first
    var fr = frame.getBoundingClientRect();
    if (fr.top < 0 || fr.bottom > window.innerHeight) frame.scrollIntoView({ block: 'center', behavior: O.still ? 'auto' : 'smooth' });
    // the case gives way to the reel: a beat for the box to light and lift, then the reel runs; inside the 4 to 6 seconds of 7.2
    setTimeout(function () {
      O.open(reel, { count: count, results: results, bend: V.reel === 'b', duration: 4600 }).then(function () {
        setTimeout(function () { outcome(results); }, count > 1 ? 650 : 850);
      });
    }, O.still ? 0 : 450);
  });

  /* ---- phase 3, the outcome ---- */
  function outcome(rs) {
    busy = false; host.classList.remove('is-opening'); host.classList.add('is-done');
    frame.setAttribute('data-phase', 'won');
    window.V4Win.render(win, rs, { sell: true, price: PRICE });
    live.textContent = rs.map(function (x) { return x.w + ' ' + x.s + ', ' + x.v.toFixed(2) + ' coins'; }).join('; ') + '.';

    var sum = rs.reduce(function (a, x) { return a + x.v; }, 0), n = rs.length;
    var acts = '<div class="v4c-acts">' +
      (balance >= PRICE * n ? '<button type="button" class="v4c-again v4-btn v4-btn--l">Open ' + (n > 1 ? n + ' again' : 'again') + ' for ' + coins(PRICE * n) + '</button>'
        : '<a class="v4c-again v4-btn v4-btn--l" href="../../wireframes/deposit.html">Add funds to open ' + (n > 1 ? n + ' ' : '') + 'again</a>') +
      '<button type="button" class="v4c-sell v4-btn v4-btn--l">' + (n > 1 ? 'Sell all ' + n + ' for ' : 'Sell for ') + coins(sum) + '</button>' +
      '<a class="v4c-steam v4-btn v4-btn--l v4-btn--ghost" href="../../wireframes/withdraw.html">' + (n > 1 ? 'Send ' + n + ' to Steam' : 'Send to Steam') + '</a></div>';
    var inst = n === 1 ? '<p class="v4c-inst">Float <b>' + rs[0].float + '</b> · Pattern <b>' + rs[0].pattern + '</b> · <a href="steam://rungame/730">Inspect in game</a></p>' : '';
    after.innerHTML = inst + acts +
      '<p class="v4c-saved">' + (n > 1 ? 'All ' + n + ' saved' : 'Saved') + ' to <a href="../../wireframes/account.html">My items</a>. <strong>Selling cannot be undone.</strong></p>' +
      '<p class="v4c-links"><a href="../../wireframes/fair-prefilled.html">' + (n > 1 ? 'Check each of the ' + n + ' rounds' : 'Check this round') + '</a>' +
      '<a href="../../wireframes/result.html">Share this round</a><a href="https://steamcommunity.com/market/" rel="external nofollow">See it on the Steam Market</a></p>';
    after.hidden = false; commit.hidden = true;
    var again = after.querySelector('button.v4c-again');
    if (again) again.addEventListener('click', function () { reset(); act.click(); });
    var sell = after.querySelector('.v4c-sell'), ones = win.querySelectorAll('.v4c-sell1'), sold = [];
    sell.addEventListener('click', function () {
      var back = 0; rs.forEach(function (x, i) { if (!sold[i]) { back += x.v; sold[i] = true; } });
      setBalance(balance + back); sell.disabled = true; sell.innerHTML = 'Sold for ' + coins(sum);
      after.querySelector('.v4c-steam').classList.add('is-gone');
      Array.prototype.forEach.call(ones, function (b) { b.disabled = true; b.textContent = 'Sold'; });
    });
    Array.prototype.forEach.call(ones, function (b, i) {
      b.addEventListener('click', function () { if (sold[i]) return; sold[i] = true; setBalance(balance + rs[i].v); b.disabled = true; b.textContent = 'Sold'; });
    });
  }
  function reset() {
    commit.hidden = false; after.hidden = true; win.classList.remove('is-on'); win.innerHTML = '';
    frame.removeAttribute('data-phase'); reel.innerHTML = ''; reel.className = 'v4c-reel'; act.disabled = false; counter.classList.remove('is-locked');
    host.classList.remove('is-done'); drawCommit();
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && host.classList.contains('is-done')) reset(); });

  setCount(1);
  window.V4Case = { reset: reset, set: setCount, variant: V };
})();
