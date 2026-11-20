/* design/kit/items.js, stage 07 step 5, D-239: My items played, what wireframes/_nav.js does for node 5.1 (mountInvBar, mountInvSort,
   mountCashout, coLayer), on the kit's classes. A page carries no behaviour of its own; this is the kit's fifth script.
   - The Selection bar counts and sums what is ticked, or everything held when nothing is (D-128), and says how many values cannot be read.
     Select all ticks every item still held; Deselect all shows while something is ticked.
   - The sort keys reorder the grid: pressing the pressed key flips its order and its words, pressing the other moves the sort (D-89).
   - A card's Sell for coins asks to be pressed again, then sells: the card becomes its receipt, the balance gains its value and the value
     held loses it (one declaration, every figure marked data-money). A value that cannot be read is never sold for zero.
   - The bar's acts answer "Tick an item first." with nothing ticked (D-58). Sell asks again, then sells what is ticked; Send to Steam
     carries the selection in its address; Cash out opens its layer, played below.
   - Cash out: the network as Tabs, the saved address as a Select menu or the line that says there is none, the address, and the sum read
     from what is ticked, never typed. Request names the one ground that stops it, or requests: the ticked items leave the grid and the
     value held. Samples of the fee and the rate as the grey's (D-124). */
(function () {
  var d = document, bar = d.querySelector('[data-selbar]'), list = d.querySelector('[data-items]');
  if (!list) return;
  var NETS = [
    { name: 'Ethereum', tick: 'ETH', chain: 'Ethereum', fee: 2.40, rate: 2450, dp: 6, min: 10, re: /^0x[0-9a-fA-F]{40}$/, saved: '0x7a1f4c2e9b0d5583a17c4e2f9b6d0c8a3e51f742' },
    { name: 'Litecoin', tick: 'LTC', chain: 'Litecoin', fee: 0.05, rate: 84.20, dp: 6, min: 2, re: /^(ltc1[0-9a-z]{25,60}|[LM][1-9A-HJ-NP-Za-km-z]{26,33})$/, saved: '' },
    { name: 'Tether', tick: 'USDT', chain: 'Tron (TRC-20)', fee: 1.00, rate: 1, dp: 2, min: 5, re: /^T[1-9A-HJ-NP-Za-km-z]{33}$/, saved: '' }
  ];
  function f2(n) { return n.toFixed(2); }
  function sp(s) { return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function an(n) { return /^[AEIOU]/.test(n) ? 'an ' : 'a '; }
  function picks() { return [].slice.call(list.querySelectorAll('.item-card__top input[type="checkbox"]')).filter(function (i) { return !i.disabled; }); }
  function on() { return picks().filter(function (i) { return i.checked; }); }
  function cardOf(i) { return i.closest('.item-card'); }
  function blind(c) { return c && c.hasAttribute('data-blind'); }
  function val(i) { return parseFloat(i.getAttribute('data-v') || '0'); }
  function keyOf(c) { var li = c.closest('li'); return li ? li.getAttribute('data-key') : ''; }

  /* the money, one declaration: every figure marked data-money reads the same two numbers */
  var M = {};
  d.querySelectorAll('[data-money]').forEach(function (e) { M[e.getAttribute('data-money')] = parseFloat(e.textContent.replace(/[^\d.]/g, '')); });
  function money(dBal, dHeld) {
    M.balance += dBal; M.held += dHeld;
    d.querySelectorAll('[data-money]').forEach(function (e) {
      var v = f2(M[e.getAttribute('data-money')]), t = e.lastChild;
      if (t && t.nodeType === 3) t.textContent = v; else e.appendChild(d.createTextNode(v));
      var a = e.closest('a[aria-label]'); if (a) a.setAttribute('aria-label', a.getAttribute('aria-label').replace(/, [\d.]+ coins$/, ', ' + v + ' coins'));
    });
  }

  /* the Selection bar */
  var nOut = bar && bar.querySelector('[data-selbar-n]'), vOut = bar && bar.querySelector('[data-selbar-v]'), say = bar && bar.querySelector('[data-selbar-say]'),
      none = bar && bar.querySelector('[data-sel-none]');
  function tell(m) { if (!say) return; say.textContent = m; say.hidden = !m; }
  function paint() {
    if (!bar) return;
    var ticked = on(), src = ticked.length ? ticked : picks(), sum = src.reduce(function (a, i) { return a + val(i); }, 0),
        b = src.filter(function (i) { return blind(cardOf(i)); }).length;
    nOut.textContent = src.length + (src.length === 1 ? ' item' : ' items') + (b ? ', ' + b + ' not readable' : '');
    vOut.textContent = f2(sum);
    bar.classList.toggle('is-picking', ticked.length > 0);
    if (none) none.hidden = !ticked.length;
  }
  list.addEventListener('change', function (e) { if (e.target.matches('.item-card__top input')) { tell(''); paint(); } });

  /* a sold card is its receipt: no tick, no acts, its band says what happened */
  function receipt(c, words) {
    var top = c.querySelector('.item-card__top'), acts = c.querySelector('.item-card__acts'), out = c.querySelector('.item-card__out');
    var i = top && top.querySelector('input'); if (i) { i.checked = false; i.disabled = true; }
    if (top) top.remove(); if (acts) acts.remove(); if (out) out.remove();
    var band = d.createElement('span'); band.className = 'item-card__band'; band.textContent = words;
    c.insertBefore(band, c.firstChild); c.classList.add('is-sold');
  }
  function sell(c) { var v = parseFloat(c.closest('li').getAttribute('data-v') || '0'); receipt(c, 'Sold, +' + f2(v) + ' coins'); money(v, -v); return v; }
  function armed(b) {
    if (b.getAttribute('data-armed') === '1') { b.removeAttribute('data-armed'); b.textContent = b.getAttribute('data-was'); return true; }
    var was = b.textContent; b.setAttribute('data-armed', '1'); b.setAttribute('data-was', was);
    b.textContent = 'Press again to ' + was.charAt(0).toLowerCase() + was.slice(1);
    setTimeout(function () { if (b.getAttribute('data-armed') === '1') { b.removeAttribute('data-armed'); b.textContent = was; } }, 5000);
    return false;
  }

  /* the sort keys */
  var keys = [].slice.call(d.querySelectorAll('.item-grid__sort [data-sort]'));
  function sort() {
    var k = keys.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0] || keys[0]; if (!k) return;
    var by = k.getAttribute('data-sort'), desc = k.getAttribute('data-dir') === 'desc';
    [].slice.call(list.children).sort(function (a, b) {
      var x = by === 'value' ? parseFloat(a.getAttribute('data-v') || '0') : (a.getAttribute('data-won') || ''),
          y = by === 'value' ? parseFloat(b.getAttribute('data-v') || '0') : (b.getAttribute('data-won') || '');
      return x < y ? (desc ? 1 : -1) : x > y ? (desc ? -1 : 1) : 0;
    }).forEach(function (li) { list.appendChild(li); });
    keys.forEach(function (b) { b.textContent = b.getAttribute(b.getAttribute('data-dir') === 'desc' ? 'data-hi' : 'data-lo'); });
  }
  keys.forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.getAttribute('aria-pressed') === 'true') b.setAttribute('data-dir', b.getAttribute('data-dir') === 'desc' ? 'asc' : 'desc');
      else keys.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      sort();
    });
  });

  /* the cash out layer */
  var co = d.getElementById('cashout-layer'), st = { net: 0 };
  function q(s) { return co.querySelector(s); }
  function coPaint() {
    if (!co) return;
    var n = NETS[st.net], t = on(), v = t.reduce(function (a, i) { return a + val(i); }, 0), rec = Math.max(0, v - n.fee);
    co.querySelectorAll('[data-co-net]').forEach(function (b) { b.setAttribute('aria-selected', String(+b.getAttribute('data-co-net') === st.net)); });
    q('[data-co-chain]').textContent = n.chain;
    q('[data-co-lab]').textContent = n.name + ' address';
    q('[data-co-saved]').hidden = !n.saved; q('[data-co-none]').hidden = !!n.saved;
    q('[data-co-none]').textContent = 'No saved ' + n.name + ' address on this account yet.';
    var inp = q('[data-co-in]'); inp.value = n.saved;
    var set = function (k, s) { q('[data-co="' + k + '"]').textContent = s; };
    set('n', t.length + (t.length === 1 ? ' item' : ' items')); set('v', f2(v) + ' coins'); set('fee', '−' + f2(n.fee) + ' coins'); set('min', f2(n.min) + ' coins');
    set('rec', f2(rec) + ' coins, $' + f2(rec) + ' at 1 coin = $1.00'); set('tick', 'In ' + n.tick);
    set('coin', (rec / n.rate).toFixed(n.dp) + ' ' + n.tick + ', at ' + sp(f2(n.rate)) + ' coins each');
    var s = q('[data-co-say]'); s.hidden = true; s.textContent = ''; s.className = 'note note--refuse';
    q('[data-co-go]').disabled = false;
  }
  if (co) {
    co.addEventListener('click', function (e) {
      var nt = e.target.closest('[data-co-net]'); if (nt) { st.net = +nt.getAttribute('data-co-net'); coPaint(); return; }
      if (e.target.closest('[data-co-close]')) { co.querySelector('.dialog__close').click(); return; }
      if (!e.target.closest('[data-co-go]')) return;
      var n = NETS[st.net], t = on(), v = t.reduce(function (a, i) { return a + val(i); }, 0), addr = q('[data-co-in]').value.trim(), s = q('[data-co-say]'), m;
      if (!t.length) m = 'Nothing is ticked. Cashing out needs at least one item, chosen on the grid behind this.';
      else if (!addr) m = an(n.name).charAt(0).toUpperCase() + an(n.name).slice(1) + n.name + ' address is needed. Nothing is sent anywhere without one.';
      else if (!n.re.test(addr)) m = 'That is not ' + an(n.name) + n.name + ' address. Check it and paste it whole: coins sent to a wrong address are lost.';
      else if (v < n.min) m = 'The smallest cash out on ' + n.name + ' is ' + f2(n.min) + ' coins. Tick more, or sell instead.';
      if (m) { s.className = 'note note--refuse'; s.textContent = m; s.hidden = false; return; }
      s.className = 'note note--soft'; s.hidden = false;
      s.textContent = 'Requested. ' + ((v - n.fee) / n.rate).toFixed(n.dp) + ' ' + n.tick + ' goes to ' + addr.slice(0, 6) + '…' + addr.slice(-4) + '. It is in History under Cash out.';
      t.forEach(function (i) { receipt(cardOf(i), 'Cash out requested'); });
      money(0, -v); paint(); q('[data-co-go]').disabled = true;
    });
    q('[data-co-saved]').addEventListener('pick', function (e) {
      var inp = q('[data-co-in]'); inp.value = e.detail.index === 0 ? NETS[st.net].saved : ''; if (e.detail.index !== 0) inp.focus();
    });
  }

  /* the bar's acts and a card's Sell, before kit.js opens a layer: nothing ticked, nothing opens */
  d.addEventListener('click', function (e) {
    var one = e.target.closest('[data-item-sell]');
    if (one) {
      var c = one.closest('.item-card');
      if (blind(c)) { one.textContent = 'Not sold: its value cannot be read right now'; return; }
      if (armed(one)) { sell(c); paint(); }
      return;
    }
    if (!bar) return;
    if (e.target.closest('[data-sel-all]')) { picks().forEach(function (i) { i.checked = true; }); tell(''); paint(); return; }
    if (e.target.closest('[data-sel-none]')) { picks().forEach(function (i) { i.checked = false; }); tell(''); paint(); return; }
    var a = e.target.closest('[data-sel-act]'); if (!a) return;
    var t = on(), kind = a.getAttribute('data-sel-act'); say.classList.add('note--refuse');
    if (!t.length) { e.preventDefault(); e.stopPropagation(); tell('Tick an item first.'); return; }
    if (kind === 'sell') {
      if (!say.hasAttribute('data-armed')) { say.setAttribute('data-armed', '1'); tell('Press Sell for coins again to sell ' + t.length + (t.length === 1 ? ' item.' : ' items.'));
        setTimeout(function () { say.removeAttribute('data-armed'); }, 5000); return; }
      say.removeAttribute('data-armed');
      if (t.some(function (i) { return blind(cardOf(i)); })) { tell('Not sold: one item has a value that cannot be read right now. Untick it to sell the rest.'); return; }
      var got = 0; t.forEach(function (i) { got += sell(cardOf(i)); });
      paint(); tell('Sold ' + t.length + (t.length === 1 ? ' item' : ' items') + ', +' + f2(got) + ' coins.'); say.classList.remove('note--refuse'); return;
    }
    say.classList.add('note--refuse'); tell('');
    if (kind === 'steam') { var ks = t.map(function (i) { return keyOf(cardOf(i)); }); a.setAttribute('href', '../wireframes/' + (ks.length > 1 ? 'withdraw-many.html?items=' + ks.join(',') : 'withdraw.html?item=' + ks[0])); return; }
    if (kind === 'cash') { st.net = 0; coPaint(); }
  }, true);

  sort(); paint();
  if (co && !co.hidden) coPaint(); /* the pinned page, cashout-dialog.html: the layer open on arrival */
})();
