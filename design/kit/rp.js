/* design/kit/rp.js, stage 07 step 5, D-248: Responsible play played, what wireframes/_nav.js does for node 6.1 (mountRp, the exclusion
   dialog, sessBoundary) on the kit's Limits panel. A page carries no behaviour of its own; this is the kit's eighth script.
   - Every act answers under its own row (D-137) and nothing is dimmed (D-58): a guest's press says a limit needs an account and that the
     page reads without one; a saved limit says when it applies; a refusal says what stands.
   - A change that tightens applies now and one that loosens waits 24 hours (node 6.1 section 3): a raised deposit limit is said as waiting;
     a running cool down only extends; a self exclusion is never lifted, shortened or doubled, and under it a limit is only tightened (D-143).
   - Dates count from the prototype's now, 21 Aug 2026, 09:31, as the grey counts them (round 15). Nothing counts down (node 6.1 section 5).
   - What this session set is what the page says (D-152): a limit saved here travels, by sessionStorage, to the page a cool down or an
     exclusion lands on; a state page opened by its own address keeps its sample.
   - Self exclude opens 6.2 for the period chosen: focus held inside, Escape, the close and Cancel give it back to the press, and its act
     lands on the excluded state with no interstitial and no congratulation (node 6.1 section 4). */
(function () {
  var d = document, page = d.querySelector('[data-rp]');
  if (!page) return;
  var account = /[?&]account\b/.test(location.search) || d.body.hasAttribute('data-account');
  var NOW = Date.UTC(2026, 7, 21, 9, 31), MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var COOL = { '24 hours': 1, '7 days': 7, '30 days': 30 };
  var EX_END = { '6 months': '21 Feb 2027, 09:31', '1 year': '21 Aug 2027, 09:31', '5 years': '21 Aug 2031, 09:31' };
  var GUEST = 'Nothing was set: a limit belongs to an account and there is no account signed in. Everything on this page reads without one.';
  function fmt(t) { var x = new Date(t); return x.getUTCDate() + ' ' + MON[x.getUTCMonth()] + ' ' + x.getUTCFullYear() + ', 09:31'; }
  function iso(t) { return new Date(t).toISOString().slice(0, 16); }
  function q(k) { var m = new RegExp('[?&]' + k + '=([^&]+)').exec(location.search); return m ? decodeURIComponent(m[1]) : null; }
  var K = 'cs2-limits';
  function get() { try { return JSON.parse(sessionStorage.getItem(K) || '{}') || {}; } catch (e) { return {}; } }
  function put(L) { try { sessionStorage.setItem(K, JSON.stringify(L)); } catch (e) {} }
  function val(row) { var v = row.querySelector('.popover__val'); return v ? v.textContent.trim() : ''; }
  function answer(row, text, refuse) {
    var p = row.querySelector('.limits__answer');
    if (!p) { p = d.createElement('p'); p.setAttribute('aria-live', 'polite'); row.appendChild(p); }
    p.className = 'limits__answer note' + (refuse ? ' note--refuse' : ' note--hi'); /* a saved limit is the Note line's .note--hi (rename map row 25, D-269) */ p.textContent = text;
  }
  var state = page.getAttribute('data-rp'), say = d.querySelector('[data-rp-say]' + (account ? '[data-when="account"], [data-rp-say]:not([data-when])' : ''));
  var coolEnds = d.querySelector('[data-rp-cool-ends]'), exEnds = d.querySelector('[data-rp-ex-ends]');
  var depRow = d.querySelector('[data-rp-row="dep"]'), depIn = depRow && depRow.querySelector('input');

  /* the deposit limit in force, one figure: the list in What is in force now, the field */
  function showDep(dep) {
    var li = d.querySelector('[data-rp-force="dep"]'), list = d.querySelector('.limits__list');
    if (dep) {
      page.setAttribute('data-rp-limit', dep.amt);
      if (depIn) depIn.value = dep.amt;
      if (depRow) [].forEach.call(depRow.querySelectorAll('.popover__opt'), function (o) { var on = o.textContent.trim() === dep.per; o.setAttribute('aria-selected', String(on)); if (on) depRow.querySelector('.popover__val').textContent = dep.per; });
      if (list && !li) { li = d.createElement('li'); li.className = 'limits__item'; li.setAttribute('data-rp-force', 'dep'); li.innerHTML = '<span class="limits__n">Deposit limit</span><span class="limits__e"></span>'; list.appendChild(li); }
      if (li) li.querySelector('.limits__e').textContent = '$' + dep.amt + ' ' + dep.per;
    } else {
      page.removeAttribute('data-rp-limit'); if (depIn) depIn.value = ''; if (li) li.remove();
    }
  }
  /* a state reached by an act reads this session's limits (D-152); opened by its address it keeps its sample */
  if (state === 'cool' && q('c') && COOL[q('c')]) {
    var L1 = get(), end1 = L1.cool ? Date.parse(L1.cool + ':00Z') : NOW + COOL[q('c')] * 864e5;
    page.setAttribute('data-rp-cool-end', iso(end1)); if (coolEnds) coolEnds.textContent = 'Ends ' + fmt(end1);
    showDep(L1.dep);
  }
  if (state === 'excl' && q('x') && EX_END[q('x')]) {
    var L2 = get(); if (exEnds) exEnds.textContent = 'Ends ' + EX_END[q('x')];
    showDep(L2.dep);
  }
  /* the status line where nothing is drawn as set: what this session set, said once, with the way to what is in force */
  function rpSay() {
    if (state !== 'none' || !account || !say) return;
    var L = get(), bits = [];
    if (L.dep) bits.push('a deposit limit of $' + L.dep.amt + ' ' + L.dep.per + (L.depNext ? ', $' + L.depNext.amt + ' ' + L.depNext.per + ' from 22 Aug 2026, 09:31' : ''));
    if (L.session) bits.push('a session length of ' + L.session);
    if (L.excl) bits.push('a self exclusion until ' + L.excl.until);
    else if (L.cool && Date.parse(L.cool + ':00Z') > NOW) bits.push('a cool down until ' + fmt(Date.parse(L.cool + ':00Z')));
    if (!bits.length) return;
    var route = L.excl ? 'responsible-excluded.html?x=' + encodeURIComponent(L.excl.per) : (L.cool && Date.parse(L.cool + ':00Z') > NOW) ? 'responsible-in-force.html?c=' + encodeURIComponent(L.coolPer || '24 hours') : '';
    say.textContent = 'In force: ' + bits.join('; ') + '.';
    if (route) { say.appendChild(d.createTextNode(' ')); var a = d.createElement('a'); a.className = 'link'; a.href = route; a.textContent = 'What is in force'; say.appendChild(a); }
  }
  if (state === 'none' && !page.hasAttribute('data-rp-pinned')) rpSay();

  /* 6.2, the confirmation: the period chosen on the row restated with its end; two acts of equal weight; focus held inside */
  var layer = d.getElementById('exclude-layer'), opener = null;
  function setExcl(per) {
    var e = EX_END[per] ? per : '5 years';
    layer.querySelector('[data-ex-per]').textContent = e;
    layer.querySelector('[data-ex-end]').textContent = EX_END[e];
    layer.querySelector('[data-ex-go]').setAttribute('href', 'responsible-excluded.html?x=' + encodeURIComponent(e));
  }
  function focusables() { return [].slice.call(layer.querySelectorAll('a[href], button')).filter(function (x) { return x.getClientRects().length; }); }
  function openExcl(per, from) {
    setExcl(per); opener = from; layer.hidden = false; d.documentElement.classList.add('has-layer');
    var f = focusables()[0]; if (f) f.focus();
  }
  function closeExcl() {
    layer.hidden = true; d.documentElement.classList.remove('has-layer');
    var back = opener || d.querySelector('[data-rp-act="exclude"]'); opener = null; if (back) back.focus();
  }
  if (layer) {
    if (!layer.hidden) { d.documentElement.classList.add('has-layer'); var f0 = focusables()[0]; if (f0) f0.focus({ preventScroll: true }); }
    layer.addEventListener('click', function (e) {
      if (e.target === layer || e.target.closest('.dialog__close, [data-ex-cancel]')) { e.preventDefault(); e.stopPropagation(); closeExcl(); return; }
      if (e.target.closest('[data-ex-go]')) { var L = get(), per = layer.querySelector('[data-ex-per]').textContent; L.excl = { per: per, until: EX_END[per] }; put(L); }
    }, true);
    d.addEventListener('keydown', function (e) {
      if (layer.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeExcl(); return; }
      if (e.key !== 'Tab') return;
      /* the dialog walks its own controls, round and round: a browser that tabs past links and buttons (Safari's default) cannot leave it */
      var f = focusables(); if (!f.length) return;
      e.preventDefault(); var i = f.indexOf(d.activeElement);
      f[(i < 0 ? 0 : i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
    }, true);
  }

  page.addEventListener('click', function (e) {
    var b = e.target.closest('[data-rp-act]'); if (!b) return;
    var act = b.getAttribute('data-rp-act'), row = b.closest('.field--row');
    e.preventDefault();
    if (!account) { answer(row, GUEST, true); return; }
    var L = get();
    if (act === 'dep') {
      var raw = depIn.value.replace(/,/g, '.').trim(), v = parseFloat(raw);
      /* the reason is the reason, round 15: 0 and -5 were told to enter an amount */
      if (!raw) { answer(row, 'Nothing was set: enter an amount first.', true); return; }
      if (!(v > 0)) { answer(row, 'Nothing was set: a limit has to be more than 0.', true); return; }
      var cur = parseFloat(page.getAttribute('data-rp-limit') || '0'), per = val(row);
      if (state === 'excl' && cur && v > cur) { answer(row, 'Nothing changed: a self exclusion is running, so a limit can only be tightened.', true); return; }
      if (cur && v > cur) { L.depNext = { amt: v.toFixed(2), per: per }; put(L); rpSay(); answer(row, 'Saved. A looser limit applies in 24 hours.'); return; }
      L.dep = { amt: v.toFixed(2), per: per }; delete L.depNext; put(L); showDep(L.dep); rpSay();
      answer(row, 'Saved. It applies now.'); return;
    }
    if (act === 'session') { L.session = val(row); put(L); rpSay(); answer(row, 'Saved. A shorter session applies now; a longer one in 24 hours.'); return; }
    if (act === 'cool') {
      if (state === 'excl') { answer(row, 'Nothing changed: the self exclusion already closes everything a cool down would, until it ends.', true); return; }
      /* a cool down adds nothing to an exclusion, round 17 */
      if (L.excl) { answer(row, 'Nothing changed: a self exclusion runs until ' + L.excl.until + ', and a cool down inside it would add nothing.', true); return; }
      var cp = val(row), end = NOW + (COOL[cp] || 1) * 864e5, curEnd = page.getAttribute('data-rp-cool-end');
      if (!curEnd) { L.cool = iso(end); L.coolPer = cp; put(L); location.href = 'responsible-in-force.html?c=' + encodeURIComponent(cp); return; }
      /* a running cool down extends and never shortens, round 15 */
      var ct = Date.parse(curEnd + ':00Z');
      if (end <= ct) { answer(row, 'Nothing changed: the cool down already runs until ' + fmt(ct) + ', and it cannot be shortened.', true); return; }
      page.setAttribute('data-rp-cool-end', iso(end)); L.cool = iso(end); L.coolPer = cp; put(L);
      if (coolEnds) coolEnds.textContent = 'Ends ' + fmt(end);
      answer(row, 'Extended. It now ends ' + fmt(end) + '.'); return;
    }
    if (act === 'exclude') {
      if (state === 'excl') { answer(row, 'Nothing changed here: a self exclusion that is running cannot be lifted or shortened. Support can lengthen it.', true); return; }
      if (layer) openExcl(val(row), b);
    }
  });
})();
