/* design/kit/catalogue.js, stage 07 step 5, D-246: the case catalogue played, what wireframes/_nav.js mountFilterDrawer does for nodes 3.1
   and 3.2 (D-133, D-143, D-155) on the kit's classes. A page carries no behaviour of its own; this is the kit's seventh script.
   - The bar is a jump list: the section in view is the current chip, and it is kept in sight in the run. The bar never filters.
   - Search and Filters open the drawer, kit.js's layer, Search on Case name. The drawer is a draft: its act says how many cases it would
     show, and only that act applies it. Closing it any other way leaves the shelf as it was.
   - The filter is one state: the drawer, the address (?risk, q, min, max, liked, funds, type, sort), the chips, the count and the badge.
     A narrowed shelf drops the Daily panel and its chip and every emptied section and its chip (D-82). Every chip takes itself off.
   - A figure that is not available is never read as a zero: such a case matches no filter on that figure and sorts last.
   - Nothing left is 3.2: what met nowhere, named, and the ways to widen. A way to widen is a filter taken off, never a deposit (4.4). */
(function () {
  var d = document, bar = d.querySelector('.catbar'), layer = d.getElementById('filter-layer');
  if (!bar || !layer) return;
  function all(s, r) { return [].slice.call((r || d).querySelectorAll(s)); }
  function $(s, r) { return (r || d).querySelector(s); }
  var account = /[?&]account\b/.test(location.search) || d.body.hasAttribute('data-account');
  var run = $('.catbar__run', bar), label = $('.catbar__l', bar), opts = all('.seg__opt', run), openBtn = $('[data-filter-open]', bar), badge = $('.button__pin', openBtn);
  var state = $('.shelf-state'), chipsBox = $('[data-chips]', state), line = $('[data-count]', state), empty = $('[data-empty]');
  var body = $('.filter-drawer__body', layer), applyBtn = $('[data-apply]', layer), range = $('.range', layer), TOP = parseFloat(range.max);
  var reading = state.getAttribute('data-reading') || '';

  var cases = all('.case-grid__cell[data-name]').map(function (c, i) {
    var p = c.getAttribute('data-price');
    return { cell: c, order: i, name: c.getAttribute('data-name'), cost: p ? parseFloat(p) : null, risk: c.getAttribute('data-band'), type: c.closest('.shelf-sec').getAttribute('data-type') };
  });
  /* the balance is the header's own figure, the one declaration */
  var tpl = d.getElementById('shell-account'), fig = tpl && tpl.content.querySelector('.header__fig .fig__v');
  var BAL = fig ? parseFloat(fig.textContent.replace(/[^\d.]/g, '')) : 0;
  var TYPES = ['All', 'Featured', 'Community', 'Classic'], SORTS = ['', 'low', 'high'];

  if (account) all('.fav[data-liked]').forEach(function (b) { b.setAttribute('aria-pressed', 'true'); }); /* signed in by ?account, the account's favourites are marked as on catalogue-account */

  function none() { return { risk: [], q: '', min: 0, max: TOP, liked: false, funds: false, type: 'All', sort: '' }; }
  function copyOf(f) { return JSON.parse(JSON.stringify(f)); }
  function fromQuery(s) {
    var u = new URLSearchParams(s), f = none();
    function num(k, was) { var n = parseFloat(u.get(k)); return isNaN(n) ? was : Math.max(0, Math.min(TOP, n)); }
    f.risk = (u.get('risk') || '').split(',').filter(function (r) { return /^(Low|Medium|High)$/.test(r); });
    f.q = (u.get('q') || '').trim(); f.min = num('min', 0); f.max = num('max', TOP);
    f.liked = account && u.get('liked') === '1'; f.funds = account && u.get('funds') === '1';
    if (TYPES.indexOf(u.get('type')) > 0) f.type = u.get('type');
    if (SORTS.indexOf(u.get('sort')) > 0) f.sort = u.get('sort');
    return f;
  }
  var asked = false;
  new URLSearchParams(location.search).forEach(function (v, k) { if (/^(risk|q|min|max|liked|funds|type|sort)$/.test(k)) asked = true; });
  /* a state page is a pinned address: what it pins holds until the address or a press says otherwise */
  var F = fromQuery(asked ? location.search : d.body.getAttribute('data-filter') || '');

  function priced(f) { return f.max < TOP || f.min > 0; }
  function match(c, f) {
    if (f.risk.length && f.risk.indexOf(c.risk) < 0) return false;
    if (f.q && c.name.toLowerCase().indexOf(f.q.toLowerCase()) < 0) return false;
    if (priced(f) && (c.cost === null || c.cost < f.min || c.cost > f.max)) return false;
    if (f.liked) { var h = $('.fav', c.cell); if (!h || h.getAttribute('aria-pressed') !== 'true') return false; }
    if (f.funds && (c.cost === null || c.cost > BAL)) return false;
    if (f.type !== 'All' && c.type !== f.type) return false;
    return true;
  }
  function found(f) { return cases.filter(function (c) { return match(c, f); }); }
  function money(n) { return n.toFixed(2); }
  function inForce(f) {
    var out = [];
    if (priced(f)) out.push([(f.min > 0 ? money(f.min) + ' to ' : 'Under ') + money(f.max) + ' coins', function (g) { g.min = 0; g.max = TOP; }]);
    if (f.q) out.push(['Name has “' + f.q + '”', function (g) { g.q = ''; }]);
    if (f.risk.length) out.push([f.risk.join(' or ') + ' risk', function (g) { g.risk = []; }]);
    if (f.liked) out.push(['Favorites only', function (g) { g.liked = false; }]);
    if (f.funds) out.push(['Within my balance', function (g) { g.funds = false; }]);
    if (f.type !== 'All') out.push([f.type + ' only', function (g) { g.type = 'All'; }]);
    return out;
  }
  function make(tag, cls, text) { var e = d.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  /* a press on what is in force takes it off, and the keyboard goes to Filters, for the pressed control has gone */
  function press(b, fn) {
    b.type = 'button';
    b.addEventListener('click', function () { var g = copyOf(F); F = fn(g) || g; apply(); address(); openBtn.focus({ preventScroll: true }); });
    return b;
  }

  function drawChips(list) {
    chipsBox.textContent = '';
    list.forEach(function (it) {
      var ch = make('span', 'chip'), x = make('button', 'button button--close');
      ch.appendChild(make('span', 'chip__t', it[0]));
      x.setAttribute('aria-label', 'Remove filter: ' + it[0]);
      ch.appendChild(press(x, function (g) { it[1](g); }));
      chipsBox.appendChild(ch);
    });
    if (list.length) chipsBox.appendChild(press(make('button', 'button button--ghost button--s', 'Clear all'), function (g) { var n = none(); n.sort = g.sort; return n; }));
  }

  /* 3.2: one band and a ceiling get the node's own answer with its figures; anything else names every facet that met nowhere */
  function drawEmpty(list) {
    var h = $('.empty__h', empty), p = $('.empty__p', empty), ul = $('.empty__widen', empty);
    ul.textContent = '';
    function way(text, strong, act, fn) {
      var li = make('li'), s = make('span', '', text);
      if (strong) { s.appendChild(make('strong', '', strong)); s.appendChild(d.createTextNode('.')); }
      li.appendChild(s); li.appendChild(press(make('button', 'button button--ghost button--s', act), fn)); ul.appendChild(li);
    }
    if (list.length === 2 && F.risk.length === 1 && priced(F) && !F.min) {
      var r = F.risk[0].toLowerCase(), g2 = copyOf(F);
      h.textContent = 'Nothing matches these two filters.';
      p.textContent = 'No case on the shelf is both under ' + money(F.max) + ' coins and ' + r + ' risk.';
      var least = cases.filter(function (c) { return c.risk === F.risk[0] && c.cost !== null; }).map(function (c) { return c.cost; }).sort(function (a, b) { return a - b; })[0];
      if (least !== undefined) way('The cheapest ' + r + '-risk case is ', money(least) + ' coins', 'Show cases up to ' + money(least) + ' coins', function (g) { g.max = least; });
      g2.risk = [];
      var k = found(g2).length;
      if (k) way((k === 1 ? 'One case matches' : k + ' cases match') + ' without the risk filter.', '', 'Drop the risk filter', function (g) { g.risk = []; });
    } else {
      h.textContent = 'Nothing matches ' + list.map(function (c) { return c[0]; }).join(' and ') + '.';
      p.textContent = 'Remove one above, or clear all.';
    }
    ul.hidden = !ul.children.length;
  }

  function apply() {
    var list = inForce(F), on = list.length > 0, n = 0;
    cases.forEach(function (c) { var ok = match(c, F); c.cell.hidden = !ok; if (ok) n++; });
    all('.case-grid--shelf > .case-grid__list').forEach(function (ul) {
      cases.filter(function (c) { return c.cell.parentNode === ul; }).sort(function (a, b) {
        if (!F.sort || a.cost === b.cost) return a.order - b.order;
        if (a.cost === null) return 1;
        if (b.cost === null) return -1;
        return (a.cost - b.cost) * (F.sort === 'low' ? 1 : -1);
      }).forEach(function (c) { ul.appendChild(c.cell); });
    });
    all('.shelf-sec').forEach(function (sec) {
      var gone = sec.hasAttribute('data-daily') ? on : !sec.querySelector('.case-grid__cell:not([hidden])');
      sec.hidden = gone;
      var o = $('a[href="#' + sec.id + '"]', run); if (o) o.hidden = gone;
    });
    run.hidden = label.hidden = !n;
    empty.hidden = !(on && !n);
    if (!empty.hidden) drawEmpty(list);
    drawChips(list); chipsBox.hidden = !on;
    line.textContent = on ? n + (n === 1 ? ' case matches' : ' cases match') + ', out of ' + cases.length : reading;
    state.hidden = !on && !reading;
    badge.hidden = !on; badge.textContent = on ? String(list.length) : '';
    openBtn.setAttribute('aria-label', on ? 'Filters, ' + list.length + ' in force' : 'Filters');
    spy();
  }

  /* the address says the state it shows: a pinned page hands over to the shelf once a press changes it */
  function address() {
    var u = new URLSearchParams();
    if (F.risk.length) u.set('risk', F.risk.join(','));
    if (F.q) u.set('q', F.q);
    if (F.min > 0) u.set('min', money(F.min));
    if (F.max < TOP) u.set('max', money(F.max));
    if (F.liked) u.set('liked', '1');
    if (F.funds) u.set('funds', '1');
    if (F.type !== 'All') u.set('type', F.type);
    if (F.sort) u.set('sort', F.sort);
    var path = d.body.hasAttribute('data-filter') ? 'catalogue.html' : location.pathname.split('/').pop() || 'catalogue.html';
    var q = [/[?&]account\b/.test(location.search) ? 'account' : '', u.toString()].filter(Boolean).join('&');
    try { history.replaceState(null, '', path + (q ? '?' + q : '')); } catch (e) { /* opened from a file: the shelf still filters */ }
  }

  /* ---- the drawer ---- */
  var name = $('#f-name', layer), lo = $('#f-min', layer), hi = $('#f-max', layer);
  function listOf(k) { return $('[data-pick="' + k + '"]', layer); }
  function chosen(k) { return Math.max(0, all('.popover__opt', listOf(k)).findIndex(function (o) { return o.getAttribute('aria-selected') === 'true'; })); }
  function choose(k, i) {
    var box = listOf(k), os = all('.popover__opt', box);
    os.forEach(function (o, j) { o.setAttribute('aria-selected', String(j === i)); });
    $('.popover__val', box).textContent = os[i].textContent.trim();
  }
  function ticked(sel) { var i = $(sel, layer); return !!(i && i.checked); }
  function numOf(input, was) { var n = parseFloat(String(input.value).replace(',', '.')); return isNaN(n) ? was : Math.max(0, Math.min(TOP, n)); }
  function draft() {
    return { risk: all('[data-risk-pick]:checked', layer).map(function (i) { return i.value; }), q: name.value.trim(), min: numOf(lo, 0), max: numOf(hi, TOP),
      liked: account && ticked('[data-f-liked]'), funds: account && ticked('[data-f-funds]'), type: TYPES[chosen('type')], sort: SORTS[chosen('sort')] };
  }
  function tint() { range.style.setProperty('--fill', (range.value / TOP * 100) + '%'); }
  function count() { var n = found(draft()).length; applyBtn.textContent = 'Show ' + n + (n === 1 ? ' case' : ' cases'); }
  function write(f) {
    all('[data-risk-pick]', layer).forEach(function (i) { i.checked = f.risk.indexOf(i.value) >= 0; });
    name.value = f.q; lo.value = money(f.min); hi.value = money(f.max); range.value = f.max; tint();
    var l = $('[data-f-liked]', layer), b = $('[data-f-funds]', layer);
    if (l) l.checked = f.liked;
    if (b) b.checked = f.funds;
    choose('type', TYPES.indexOf(f.type)); choose('sort', SORTS.indexOf(f.sort));
    count();
  }

  all('[data-filter-open], [data-filter-search]', bar).forEach(function (b) {
    b.addEventListener('click', function () {
      write(F);
      /* kit.js opens the layer after this press and puts the keyboard on Close first; Search then takes it to Case name */
      setTimeout(function () { body.scrollTop = 0; if (b.hasAttribute('data-filter-search')) name.focus(); }, 0);
    });
  });
  new MutationObserver(function () { openBtn.setAttribute('aria-expanded', String(!layer.hidden)); }).observe(layer, { attributes: true, attributeFilter: ['hidden'] });
  range.addEventListener('input', function () { hi.value = money(parseFloat(range.value)); tint(); });
  body.addEventListener('input', count);
  body.addEventListener('pick', count);
  body.addEventListener('change', function (e) {
    if (e.target === lo || e.target === hi) { e.target.value = money(numOf(e.target, e.target === lo ? 0 : TOP)); range.value = numOf(hi, TOP); tint(); }
    count();
  });
  all('[data-step]', layer).forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.getAttribute('data-step').split(':'), i = a[0] === 'min' ? lo : hi;
      i.value = money(Math.max(0, Math.min(TOP, numOf(i, a[0] === 'min' ? 0 : TOP) + Number(a[1]))));
      if (i === hi) { range.value = i.value; tint(); }
      count();
    });
  });
  $('[data-reset]', layer).addEventListener('click', function () { write(none()); });
  function submit() {
    F = draft();
    $('.dialog__close', layer).click();
    apply(); address();
    var first = state.hidden ? $('.shelf-sec:not([hidden])') : state;
    if (first && first.getBoundingClientRect().top < bar.getBoundingClientRect().bottom) first.scrollIntoView({ block: 'start' }); /* what matched is never left above the window */
  }
  applyBtn.addEventListener('click', submit);
  name.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
  /* the keyboard stays in the drawer while it is open */
  layer.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var f = all('a[href], button, input', layer).filter(function (x) { return !x.disabled && x.getClientRects().length; });
    if (e.shiftKey && d.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && d.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });

  /* ---- the jump list ---- */
  var due = false, held = null, timer = 0;
  function more() { run.classList.toggle('is-more', run.scrollLeft + run.clientWidth < run.scrollWidth - 1); }
  function mark(o) {
    opts.forEach(function (x) { if (x === o) x.setAttribute('aria-current', 'true'); else x.removeAttribute('aria-current'); });
    if (o.offsetLeft < run.scrollLeft) run.scrollLeft = o.offsetLeft;
    else if (o.offsetLeft + o.offsetWidth > run.scrollLeft + run.clientWidth) run.scrollLeft = o === opts[opts.length - 1] ? run.scrollWidth : o.offsetLeft + o.offsetWidth - run.clientWidth + 32;
    more();
  }
  function spy() {
    due = false;
    var live = opts.filter(function (o) { return !o.hidden; });
    if (!live.length) return;
    var at = bar.getBoundingClientRect().bottom + 64, cur = live[0];
    live.forEach(function (o) { var s = $(o.getAttribute('href')); if (s && s.getBoundingClientRect().top <= at) cur = o; });
    mark(held && !held.hidden ? held : cur);
  }
  function soon() { if (!due) { due = true; requestAnimationFrame(spy); } }
  opts.forEach(function (o) {
    o.addEventListener('click', function () { held = o; mark(o); clearTimeout(timer); timer = setTimeout(function () { held = null; }, 900); });
  });
  addEventListener('scroll', soon, { passive: true });
  addEventListener('resize', soon);
  run.addEventListener('scroll', more, { passive: true });

  write(F);
  apply();
  /* the drawn state, catalogue-filter: the layer is open in the markup */
  if (!layer.hidden) { d.documentElement.classList.add('has-layer'); openBtn.setAttribute('aria-expanded', 'true'); $('.dialog__close', layer).focus({ preventScroll: true }); }
})();
