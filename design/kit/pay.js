/* design/kit/pay.js, ADD FUNDS IN PLAY, stage 07 step 5, D-237: the behaviour of the Payment panel and of Deposit's records, reading the
   kit's classes only, as kit.js and stage.js do. It carries what wireframes/_nav.js does for node 4 (payLayer, mountDeposit, mountPromo,
   mountPayCountry, mountSkinDep, mountCryptoNet, mountCrediting, mountDepositDialog), so every drawn control answers (CLAUDE.md, D-58).

   On a route's page the address carries the method, ?m= (round 14 of the grey): the chosen method's name, and on the crypto route the
   coin's network, address, rate and minimum, all samples (D-124). The card route's amount takes digits and one point, a comma read as the
   point; a preset sets it and is pressed while the amount is its figure; the dock's receive, bonus, total and Pay follow one arithmetic, the
   bonus at the panel's declared rate and cap (data-bonus, data-cap; the offer strip states the same). Pay goes to crediting with what was
   paid, or refuses with its reason above the act: terms not accepted (the declaration takes the error edge and the focus), under the
   $5.00 minimum, over the limit in force (data-ceiling), no email it can reach. Apply code and the country answer in a line under them.
   The skins route sums what is ticked; Redeem refuses an empty or short code; the network select moves the address; Copy copies;
   Cancel the raise cancels it. Crediting reads the address for what was paid and by which route, and says whom the wait is on.
   In the deposit layer (#deposit-layer, opened by kit.js) a method's tile shows its route in place and Back goes to the list, as the
   grey's dialog does (D-100); at an address the tile and Back are links. D-238, the founder's corrections of 20 Nov 2026: a route's head is
   Back, the method's mark and its name (the layer's Add funds steps aside while a route shows); the dock shows the figure plus the bonus;
   the country and the network are the kit's Select menu, heard by its "pick" (kit.js). */
(function () {
  var d = document;
  function q(k) { var m = new RegExp('[?&]' + k + '=([^&#]*)').exec(location.search); return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null; }
  function money(n) { return (Math.round(n * 100) / 100).toFixed(2); }

  /* every coin its own network, address, rate and minimum, the grey's samples (wireframes/_nav.js COINS, D-124) */
  var COINS = {
    Bitcoin:  { tick: 'BTC',  rate: '64 185.74', min: '0.0001', nets: [['Bitcoin', 'bc1q9h7x4k2m8d0v3s6n5r7t2w4y8z0p3a5c7e9x4k2'], ['Bitcoin, Lightning', 'lnurl1dp68gurn8ghj7um9wfmxjcm99e3k7mf0v9cxj0m385ekvcenxc6r2c35xvukxefcv5mkvv34x5ekzd3ev56nyd3hxqurzepexejxxepnxscrvwfnv9nxzcn9xq6xyefhvgcxxcmyxymnserxfq5fns']] },
    Ethereum: { tick: 'ETH',  rate: '2 450.00', min: '0.002', nets: [['Ethereum, ERC-20', '0x3b9e27a4c1d05f8e6b2a9c47d1e30f5a8b6c2d94']] },
    Litecoin: { tick: 'LTC',  rate: '84.20', min: '0.01', nets: [['Litecoin', 'ltc1qz8r4x6m2k9d7v5s3n1p0t8w6y4a2c9e7h5j3k1']] },
    Tether:   { tick: 'USDT', rate: '1.00', min: '5', nets: [['Tron, TRC-20', 'TXa9q4VzK7mR2pL8dN3sW6yB1cF5hJ0gT'], ['Ethereum, ERC-20', '0x9f41c07b2e8d53a6f1c49e0b7d2a85c3e6f0b1d7']] },
    Tron:     { tick: 'TRX',  rate: '0.24', min: '20', nets: [['Tron', 'TQ7nC3xLp9rV5kM1wZ8dH2sF6yB4gJ0aE']] },
    Xrp:      { tick: 'XRP',  rate: '0.58', min: '10', nets: [['XRP Ledger', 'rN7nW3kL9pQ2xV5mD8sF1hJ4yB6cT0gZe']] },
    Solana:   { tick: 'SOL',  rate: '146.30', min: '0.05', nets: [['Solana', '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU']] },
    Other:    { tick: 'DOGE', rate: '0.12', min: '25', nets: [['Dogecoin', 'DH5yaieqoZN36fDVciNyRueRGvGLR3mr7L'], ['BNB Smart Chain', '0x6d2e81b0c4a97f35e1d08c6b2f94a7e3c5d10b8f']] }
  };

  /* a line that answers, D-58: one per place, made on the first answer, said in words and read out (role status); a refusal stands
     before its act, an answer after its control */
  var n = 0;
  function say(at, text, refuse, before) {
    var id = at.getAttribute('data-say-for') || (at.setAttribute('data-say-for', 'say' + (++n)), at.getAttribute('data-say-for'));
    var p = at.parentNode.querySelector(':scope > [data-said="' + id + '"]');
    if (!p) { p = d.createElement('p'); p.setAttribute('role', 'status'); p.setAttribute('data-said', id); at.parentNode.insertBefore(p, before ? at : at.nextSibling); }
    p.className = 'note' + (refuse ? ' note--refuse' : ' note--soft');
    p.textContent = text; p.hidden = !text;
    return p;
  }
  function unsay(at) { var id = at.getAttribute('data-say-for'), p = id && at.parentNode.querySelector(':scope > [data-said="' + id + '"]'); if (p) p.hidden = true; }
  function figV(fig, text) { var v = fig && fig.querySelector('.fig__v'); if (!v) return; var t = v.lastChild; if (t && t.nodeType === 3) t.textContent = text; else v.appendChild(d.createTextNode(text)); }
  function method(pane) { var c = pane.querySelector('.chosen__v'); return c ? c.textContent : ''; }
  /* the figure of a money line whose text sits after its coin mark, a Bonus word after it (.dock__bonus-v) */
  function numAt(el, text) { if (!el) return; for (var k = el.firstChild; k; k = k.nextSibling) if (k.nodeType === 3 && k.textContent.trim()) { k.textContent = text; return; } el.insertBefore(d.createTextNode(text), el.querySelector('small')); }
  function slug(n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  /* the chosen method's head: its name, and its mark where one is given */
  function choose(pane, name, src) {
    var c = pane.querySelector('.chosen__v'); if (c) c.textContent = name;
    var i = pane.querySelector('.chosen__mark img'); if (i && src) i.setAttribute('src', src);
  }
  /* a Select menu set without a press: the stored country on arrival, a coin's networks */
  function setSel(pop, index) {
    var all = pop.querySelectorAll('.popover__opt'), o = all[index] || all[0]; if (!o) return;
    [].forEach.call(all, function (n) { n.setAttribute('aria-selected', String(n === o)); });
    var v = pop.querySelector('.popover__val'); if (v) v.textContent = o.textContent.trim();
    var f = pop.querySelector('.popover__trigger .popover__flag'), of = o.querySelector('.popover__flag'); if (f && of) f.className = of.className;
  }
  function selIndex(pop) { var all = [].slice.call(pop.querySelectorAll('.popover__opt')); return Math.max(0, all.indexOf(pop.querySelector('.popover__opt[aria-selected="true"]'))); }

  function kindOf(pane) {
    if (pane.hasAttribute('data-pay-route')) return pane.getAttribute('data-pay-route');
    if (pane.querySelector('.amount')) return 'card';
    if (pane.querySelector('.disclosure')) return 'gift';
    if (pane.querySelector('.pay-panel__list .check')) return 'skins';
    return 'crypto';
  }

  /* the card route, mountDeposit */
  function card(pane, panel) {
    var amt = pane.querySelector('.amount input'), presets = [].slice.call(pane.querySelectorAll('.amount__presets .seg__opt'));
    var go = pane.querySelector('.dock__act .button'), act = pane.querySelector('.dock__act'), terms = pane.querySelector('.field--declare'), mail = pane.querySelector('input[type="email"]');
    var box = terms && terms.querySelector('input');
    var rate = parseFloat(panel.getAttribute('data-bonus') || '5') / 100, cap = parseFloat(panel.getAttribute('data-cap') || '100');
    var label = /^Pay\b/.test(go.textContent.trim()) ? null : go.textContent; // Try again keeps its words, the declined page
    function clean(v) { v = String(v).replace(/,/g, '.').replace(/[^0-9.]/g, ''); var i = v.indexOf('.'); return i > -1 ? v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, '') : v; }
    function paint() {
      var a = parseFloat(amt.value) || 0, b = Math.min(a * rate, cap);
      figV(pane.querySelector('.dock__sum .fig'), money(a));
      numAt(pane.querySelector('.dock__bonus-v'), money(b));
      var tv = pane.querySelector('.dock__total .kv--total .kv__v'); if (tv) tv.textContent = '$' + money(a);
      if (!label) go.textContent = 'Pay $' + money(a);
      presets.forEach(function (o) { o.setAttribute('aria-pressed', String(amt.value !== '' && parseFloat(o.textContent.replace(/[^0-9.]/g, '')) === a)); });
    }
    amt.addEventListener('input', function () { var c = clean(amt.value); if (c !== amt.value) amt.value = c; unsay(act); paint(); });
    presets.forEach(function (o) { o.addEventListener('click', function () { amt.value = money(parseFloat(o.textContent.replace(/[^0-9.]/g, ''))); unsay(act); paint(); amt.focus(); }); });
    if (box) box.addEventListener('change', function () { if (box.checked) { terms.classList.remove('is-missing'); unsay(act); } });
    go.addEventListener('click', function (e) {
      var v = parseFloat(amt.value) || 0, ceil = go.hasAttribute('data-ceiling') ? parseFloat(go.getAttribute('data-ceiling')) : null;
      var why = v < 5 ? 'Nothing went through: the smallest deposit is $5.00.'
              : ceil !== null && ceil <= 0 ? 'Nothing went through: your deposit limit is reached for this period.'
              : ceil !== null && v > ceil ? 'Nothing went through: your deposit limit leaves $' + money(ceil) + ' this period.'
              : mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim()) ? 'Nothing went through: the receipt needs an email address it can reach.' : '';
      var needTerms = box && !box.checked;
      if (!why && !needTerms) { go.setAttribute('href', 'deposit-crediting.html?a=' + money(v) + '&m=' + encodeURIComponent(method(pane))); return; }
      e.preventDefault();
      if (!needTerms) { say(act, why, true, true); amt.focus(); return; }
      say(act, 'Nothing went through: the Terms of use and the Refund and payments policy have not been accepted yet.', true, true);
      terms.classList.remove('is-missing'); void terms.offsetWidth; terms.classList.add('is-missing'); box.focus();
    });
    paint();
  }

  /* the crypto route, mountCryptoNet: the coin's network, its address and Copy, the rate and the minimum; Done goes to crediting */
  function coin(pane, name) {
    var C = COINS[name], sel = pane.querySelector('.pay-panel__form .popover--select'); if (!C || !sel) return;
    sel.querySelector('.popover__list').innerHTML = C.nets.map(function (x, i) { return '<li role="none"><button class="popover__opt" type="button" role="option" aria-selected="' + (i === 0) + '">' + x[0] + '</button></li>'; }).join('');
    setSel(sel, 0);
    net(pane, name);
    var r = pane.querySelector('.dock__rate'); if (r) r.textContent = '1 ' + C.tick + ' = ' + C.rate + ' coins';
    [].forEach.call(pane.querySelectorAll('.pay-panel__facts li'), function (li) {
      var t = li.textContent;
      if (/^Rate /.test(t)) li.innerHTML = 'Rate <strong>1 ' + C.tick + ' = ' + C.rate + ' coins</strong>, read 09:31';
      if (/^Minimum /.test(t)) li.innerHTML = 'Minimum <strong>' + C.min + ' ' + C.tick + '</strong>. Less than that is lost';
    });
    var done = pane.querySelector('.dock__act .button'); if (done) done.setAttribute('href', 'deposit-crediting.html?m=' + encodeURIComponent(name));
  }
  function net(pane, name) {
    var C = COINS[name] || COINS.Bitcoin, sel = pane.querySelector('.pay-panel__form .popover--select'), x = C.nets[sel ? selIndex(sel) : 0] || C.nets[0];
    var note = sel && sel.parentNode.querySelector(':scope > .note'); if (note) note.textContent = 'Send on ' + x[0] + ' only. Coins sent on another network are lost.';
    var v = pane.querySelector('.copy-value__v'); if (v) v.textContent = x[1];
    var s = pane.querySelector('.copy-value__said'); if (s) s.textContent = '';
  }
  function crypto(pane) {
    var sel = pane.querySelector('.pay-panel__form .popover--select');
    if (sel) sel.addEventListener('pick', function () { net(pane, method(pane)); });
  }

  /* the gift card route: Redeem refuses an empty or short code, round 14 */
  function gift(pane) {
    var go = pane.querySelector('.field__acts .button'), inp = pane.querySelector('.pay-panel__side input'), acts = go && go.parentNode; if (!go || !inp) return;
    go.addEventListener('click', function (e) {
      var v = inp.value.trim();
      if (v.length >= 8) { go.setAttribute('href', 'deposit-crediting.html?m=' + encodeURIComponent('Gift Cards')); return; }
      e.preventDefault();
      say(acts, v ? 'That is not a whole card code. Paste it as printed on the card.' : 'Nothing went through: paste the code from the card first.', true, true);
      inp.focus();
    });
    inp.addEventListener('input', function () { unsay(acts); });
  }

  /* the skins route, mountSkinDep: the sum follows what is ticked, the bonus on it too; none ticked, the act refuses */
  function skins(pane, panel) {
    var picks = [].slice.call(pane.querySelectorAll('.pay-panel__list .check input')), go = pane.querySelector('.dock__act .button'), act = pane.querySelector('.dock__act');
    var rate = parseFloat(panel.getAttribute('data-bonus') || '5') / 100, cap = parseFloat(panel.getAttribute('data-cap') || '100');
    function val(i) { return parseFloat(i.parentNode.querySelector('.fig__v').textContent.replace(/[^0-9.]/g, '')) || 0; }
    function paint() {
      var on = picks.filter(function (i) { return i.checked; }), sum = on.reduce(function (a, i) { return a + val(i); }, 0), b = Math.min(sum * rate, cap);
      var k = on.length + (on.length === 1 ? ' skin' : ' skins');
      figV(pane.querySelector('.dock__sum .fig'), money(sum));
      numAt(pane.querySelector('.dock__bonus-v'), money(b));
      var c = pane.querySelector('.dock__rate'); if (c) c.textContent = k;
      go.textContent = on.length ? 'Add ' + k : 'Pick a skin';
      go.setAttribute('href', 'deposit-crediting.html?a=' + money(sum + b) + '&m=' + encodeURIComponent('CS2 skins'));
      if (on.length) unsay(act);
    }
    picks.forEach(function (i) { i.addEventListener('change', paint); });
    go.addEventListener('click', function (e) { if (picks.some(function (i) { return i.checked; })) return; e.preventDefault(); say(act, 'Nothing went through: no skin is ticked.', true, true); });
    paint();
  }

  /* the head: Apply code answers (D-58, D-102), the country is saved where Settings reads it (D-98, D-174); a pending raise cancels */
  function head(panel) {
    var ap = panel.querySelector('.pay-panel__code .button'), inp = panel.querySelector('.pay-panel__code input');
    if (ap) ap.addEventListener('click', function () {
      say(ap.parentNode, inp && inp.value.trim() ? 'Nothing applied: no promo or partner code has been issued yet, so there is none to recognise.'
                                                 : 'Nothing to apply: the field is empty. A code is optional and the bonus does not need one.');
    });
    var cty = panel.querySelector('.pay-panel__head .popover--select');
    if (cty) {
      try { var was = sessionStorage.getItem('wf-country'), all = [].map.call(cty.querySelectorAll('.popover__opt'), function (o) { return o.textContent.trim(); });
        if (was && all.indexOf(was) > -1) setSel(cty, all.indexOf(was)); } catch (e) {}
      cty.addEventListener('pick', function (e) { try { sessionStorage.setItem('wf-country', e.detail.value); } catch (x) {} say(cty, 'Saved. Settings shows the same country.'); });
    }
    var cr = panel.querySelector('.notice__acts .button');
    if (cr && /Cancel the raise/.test(cr.textContent)) cr.addEventListener('click', function () {
      cr.closest('.notice__body').innerHTML = '<h3 class="notice__h">Raise cancelled</h3><p class="notice__p"><strong>$40.00</strong> stays in force for the period.</p>';
    });
  }

  /* Copy: the value to the clipboard, the line under it says so, or says it could not */
  d.addEventListener('click', function (e) {
    var b = e.target.closest('.copy-value__row button'); if (!b) return;
    var box = b.closest('.copy-value'), v = box.querySelector('.copy-value__v'), s = box.querySelector('.copy-value__said');
    function said(t) { if (s) s.textContent = t; }
    try { navigator.clipboard.writeText(v.textContent).then(function () { said('Copied'); }, function () { said('Not copied. Select the address and copy it.'); }); }
    catch (x) { said('Not copied. Select the address and copy it.'); }
  });

  function wire(panel) {
    head(panel);
    panel.querySelectorAll('.pay-panel__route').forEach(function (pane) {
      var k = kindOf(pane);
      if (k === 'card') card(pane, panel); else if (k === 'gift') gift(pane); else if (k === 'skins') skins(pane, panel); else crypto(pane);
    });
  }

  /* a route's page: the method from the address; a coin's figures only on the route with an address */
  var m = q('m');
  d.querySelectorAll('.shell__main .pay-panel').forEach(function (panel) {
    wire(panel);
    var pane = panel.querySelector('.pay-panel__route');
    if (!pane || !m) return;
    var k = kindOf(pane), isCoin = Object.prototype.hasOwnProperty.call(COINS, m);
    if ((k === 'crypto') !== isCoin) return;
    choose(pane, m, k === 'skins' ? null : 'kit/marks/' + slug(m) + '.svg');
    if (k === 'crypto' && pane.querySelector('.copy-value__v')) coin(pane, m);
  });

  /* the layer: a tile shows its route in place, Change goes back to the list; opening it starts at the list */
  var layer = d.getElementById('deposit-layer');
  if (layer) {
    var panel = layer.querySelector('.pay-panel'), pick = panel.querySelector('.pay-panel__pick'), h = layer.querySelector('.dialog__h');
    wire(panel);
    var show = function (kind, name, src) {
      pick.hidden = !!kind; if (h) h.hidden = !!kind; /* a route's head names the method; Add funds stays the dialog's name for a screen reader */
      [].forEach.call(panel.querySelectorAll(':scope > .pay-panel__offer, :scope > .pay-panel__head'), function (n) { n.hidden = !!kind; });
      panel.querySelectorAll('.pay-panel__route').forEach(function (p) {
        var on = p.getAttribute('data-pay-route') === kind; p.hidden = !on;
        if (!on) return;
        choose(p, name, kind === 'skins' ? null : src);
        if (kind === 'crypto') coin(p, name);
      });
      var f = kind ? panel.querySelector('.pay-panel__route:not([hidden]) .chosen__back') : pick.querySelector('.methods__t');
      if (f) f.focus({ preventScroll: true });
      layer.querySelector('.dialog').scrollTop = 0;
    };
    layer.addEventListener('click', function (e) {
      var t = e.target.closest('.methods__t[data-pay-kind]');
      if (t) { e.preventDefault(); var im = t.querySelector('.methods__mark img'); show(t.getAttribute('data-pay-kind'), t.getAttribute('data-pay-method'), im && im.getAttribute('src')); return; }
      if (e.target.closest('.chosen__back')) { e.preventDefault(); show(null); }
    });
    d.addEventListener('click', function (e) {
      if (!e.target.closest('[data-layer="deposit-layer"]')) return;
      show(null);
    }, true);
  }

  /* crediting, mountCrediting: what was paid and by which route, and whom the wait is on (round 16 of the grey) */
  var amtCell = d.querySelector('[data-cred-amt]');
  if (amtCell) {
    var a = q('a'), cm = q('m') || '', isCoin = Object.prototype.hasOwnProperty.call(COINS, cm);
    var who = d.querySelector('.notice .steps__who'), when = d.querySelector('.notice .steps__t'), lead = d.querySelector('.notice .notice__p'), mCell = d.querySelector('[data-cred-m]');
    var missing = function (t) { amtCell.innerHTML = '<span class="fig fig--missing"><span class="fig__v">' + t + '</span></span>'; };
    if (a && !isNaN(parseFloat(a))) amtCell.textContent = cm === 'CS2 skins' ? money(parseFloat(a)) + ' coins' : '$' + money(parseFloat(a));
    if (cm && mCell) mCell.textContent = cm;
    if (cm === 'CS2 skins') { if (who) who.textContent = 'waiting on Steam to complete the trade'; if (when) when.textContent = '1 min · Steam sets this'; if (lead) lead.textContent = 'Your skins have left your Steam inventory. The balance is not there yet, and this state stays until it is.'; }
    else if (isCoin) { if (lead) lead.textContent = 'Your transfer is on its way. The balance is not there yet, and this state stays until it is.'; missing('What arrives, read when it lands'); if (who) who.textContent = 'waiting on the ' + cm + ' network'; if (when) when.textContent = '1 min · the network sets this'; }
    else if (cm === 'Gift Cards') { missing('What the card carries, read on redeeming'); if (who) who.textContent = 'waiting on the reseller to confirm the code'; }
    var nt = d.querySelector('.record > .note');
    if (nt && (cm === 'CS2 skins' || isCoin)) nt.innerHTML = nt.innerHTML.replace('Not there after 2 minutes?', 'Not there when the ' + (isCoin ? 'network' : 'trade') + ' has finished?');
  }
})();
