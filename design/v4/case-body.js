/* design/v4/case-body.js, the case screen's body in v4, D-209: the grey body rendered by wireframes/_nav.js caseBody(), dressed. It writes
   no new text: each item row and each best drop gets its skin's picture and its tier's class, read from the names already on the row, and
   the drop table takes data-v from the address (?table=) so the lab's rows can be previewed on the page. case-body.css draws them. */
(function () {
  var ART = '../concept/assets/skins/';
  var TIER = { Covert: 'r2', Classified: 'r3', Restricted: 'r4', 'Mil-Spec': 'r5', 'Industrial Grade': 'r6', 'Consumer Grade': 'r7', Extraordinary: 'r1' };
  var KNOWN = { 'AK-47 Redline': 'Covert', 'AWP Asiimov': 'Covert', 'M4A1-S Hyper Beast': 'Classified', 'Desert Eagle Blaze': 'Classified',
    'USP-S Kill Confirmed': 'Restricted', 'Glock-18 Water Elemental': 'Restricted', 'MP9 Rose Iron': 'Mil-Spec', 'P250 Asiimov': 'Mil-Spec', 'Nova Koi': 'Mil-Spec' };
  function slug(w, s) { return (w + ' ' + s).toLowerCase().replace(/★\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function img(w, s) { var i = document.createElement('img'); i.src = ART + slug(w, s) + '.png'; i.alt = ''; i.loading = 'lazy'; i.className = 'v4b-img'; return i; }
  function dress() {
    var q = new URLSearchParams(location.search);
    var t = document.querySelector('.wf-drops'), rows = null;
    if (t && !t.hasAttribute('data-v4')) {
      t.setAttribute('data-v4', ''); t.setAttribute('data-v', q.get('table') || 'a');
      rows = [];
      Array.prototype.forEach.call(t.querySelectorAll('tbody'), function (tb) {
        var tier = (tb.getAttribute('aria-label') || '').split(',')[0];
        tb.classList.add(TIER[tier] || 'r5');
        Array.prototype.forEach.call(tb.querySelectorAll('tr:not(.wf-tier-h)'), function (tr) {
          var w = tr.querySelector('.wf-d-weapon'), s = tr.querySelector('.wf-d-skin'), art = tr.querySelector('.wf-art-c');
          if (!w || !s) return;
          tr.classList.add('v4b-row', TIER[tier] || 'r5');
          if (art) art.appendChild(img(w.textContent, s.textContent));
          var ch = parseFloat((tr.querySelector('td[data-l="Chance"]') || {}).textContent), v = parseFloat((tr.querySelector('td[data-l="Value"]') || {}).textContent);
          tr.style.setProperty('--ch', ch); tr.style.setProperty('--x', Math.min(1, v / PRICE / 4));
          // the chance as a bar under its number, rows D and E; the value against one open's price, rows D and E
          var cbar = document.createElement('span'); cbar.className = 'v4b-bar'; cbar.setAttribute('aria-hidden', 'true');
          var chTd = tr.querySelector('td[data-l="Chance"]'); if (chTd) chTd.appendChild(cbar);
          var vTd = tr.querySelector('td[data-l="Value"]');
          if (vTd) { var xm = document.createElement('span'); xm.className = 'v4b-x' + (v >= PRICE ? ' is-up' : ''); xm.textContent = '×' + (v / PRICE).toFixed(2); vTd.appendChild(xm); }
          // row B: the item's ticket range on the 100 000, Home's ruler without a hit
          var tk = tr.querySelector('td[data-l="Tickets"]'), rg = tk ? tk.textContent.split(' to ').map(function (x) { return parseFloat(x.replace(/\s/g, '')); }) : [];
          if (tk && rg.length === 2) { var ru = document.createElement('span'); ru.className = 'v4b-rule'; ru.setAttribute('aria-hidden', 'true'); ru.style.setProperty('--a', (rg[0] - 1) / 1000); ru.style.setProperty('--b', rg[1] / 1000); ru.appendChild(document.createElement('i')); tk.appendChild(ru); }
          rows.push({ tr: tr, ch: ch, v: v, r: TIER[tier] || 'r5', n: w.textContent + ' ' + s.textContent });
        });
      });
    }
    if (t && rows && rows.length && !t.parentNode.querySelector('.v4b-dist')) dist(t, rows);
    Array.prototype.forEach.call(document.querySelectorAll('.wf-recent li:not(.v4b-dressed)'), function (li) {
      var w = li.querySelector('.wf-r-w'), s = li.querySelector('.wf-r-s'), a = li.querySelector('.wf-r-art');
      if (!w || !s) return;
      li.classList.add('v4b-dressed', TIER[KNOWN[w.textContent + ' ' + s.textContent]] || 'r5');
      if (a) a.appendChild(img(w.textContent, s.textContent));
    });
    // the ladder's tiers, a dot in each tier's colour
    var obs = document.getElementById('h2-observed');
    var sec = obs && obs.closest('section');
    if (sec) Array.prototype.forEach.call(sec.querySelectorAll('tbody tr'), function (tr) {
      var th = tr.querySelector('th'); if (th) tr.classList.add('v4b-tier', TIER[th.textContent.trim()] || 'r5');
    });
  }
  /* row D: one bar of 100 000 tickets above the cards, each item its width in its tier's colour, so the odds read as one picture; the share
     of tickets worth at least the price is marked under it. The research's gap 2: odds are printed per card everywhere, never as one picture */
  function dist(t, rows) {
    var box = document.createElement('div'); box.className = 'v4b-dist'; box.setAttribute('role', 'img');
    var up = rows.filter(function (r) { return r.v >= PRICE; }).reduce(function (a, r) { return a + r.ch; }, 0);
    box.setAttribute('aria-label', 'All 100 000 tickets by item; ' + up.toFixed(1) + ' percent of them are worth at least the price');
    var bar = '<div class="v4b-dist-bar">' + rows.map(function (r) { return '<span class="' + r.r + '" style="flex:' + r.ch + '" title="' + r.n + ', ' + r.ch.toFixed(3) + ' %"></span>'; }).join('') + '</div>';
    box.innerHTML = '<div class="v4b-dist-h"><b>100 000 tickets</b><span>each item as wide as its chance</span></div>' + bar +
      '<div class="v4b-dist-up" style="--up:' + up + '"><span></span><b>' + up.toFixed(1) + ' %</b> of tickets are worth at least the price, ' + PRICE.toFixed(2) + ' coins</div>';
    t.parentNode.insertBefore(box, t);
    // row E sorts by any column: chance, value or the multiplier
    var sorter = document.createElement('div'); sorter.className = 'v4b-sort'; sorter.innerHTML = 'Sort <button type="button" data-k="tier" aria-pressed="true">Tier</button><button type="button" data-k="ch" aria-pressed="false">Chance</button><button type="button" data-k="v" aria-pressed="false">Value</button>';
    t.parentNode.insertBefore(sorter, t);
    sorter.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; var k = b.getAttribute('data-k');
      Array.prototype.forEach.call(sorter.querySelectorAll('button'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      t.classList.toggle('is-flat', k !== 'tier');
      var order = rows.slice(); if (k !== 'tier') order.sort(function (a, c) { return c[k] - a[k]; });
      order.forEach(function (r, i) { r.tr.style.order = k === 'tier' ? '' : i; });
    });
  }
  var PRICE = (window.V4Case || {}).price; // declared once, in case-page.js
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dress); else dress();
  window.addEventListener('load', dress);
})();
