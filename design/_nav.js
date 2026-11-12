/* design/_nav.js
 * THE ONE LIST OF SCREENS IN COLOUR, stage 07. Nothing else holds it.
 *
 * The same job wireframes/_nav.js does for the grey prototype, at the size the colour
 * product has today: a registry of the screens drawn in colour and their states, read by
 * three places that must never disagree. The root /_nav.js reads it for the inner panel
 * every coloured screen shows, a list of screens and states with the way back to the hub,
 * as ia/structure.html's node pages do (SIBLINGS['design/overview.html']); the hub,
 * design/overview.html, reads it for its cards and its coverage map; and the counts on the
 * hub are computed from it and from WF_NAV, never typed. Founder of 12 Nov 2026: Visual in
 * the side menu should work as the wireframes do, inner pages, a way back to the list, the
 * finished pages to look at.
 *
 * A state is a page or an address that forces it: ?account, ?guest, ?count= and ?land=
 * are the switches the pages already read (case-page.js, the WF_SHELL lines). `grey` is the
 * grey page the state is the coloured copy of, so the coverage map counts pages, not hopes.
 * Labs are not listed here: they stay in the roadmap under Concept v4, and the hub reads
 * them from window.NAV, the one place they are registered.
 *
 * Own namespace on purpose, DESIGN_NAV and dz-*: the root file owns NAV_* and nav-*.
 */

window.DESIGN_NAV = {
  screens: [
    { node: '1.0', name: 'Home', page: 'design/v4/index.html',
      about: 'The first screen and every block under it in colour, assembled from the founder\'s picks, D-209, and checked in stage 06 step 8, D-215 to D-221.',
      labsOf: ['design/v4/index.html'],
      states: [
        { node: '1.0', label: 'Guest',     file: 'v4/index.html',         grey: 'index.html' },
        { node: '1.1', label: 'Signed in', file: 'v4/index.html?account', grey: 'index-account.html' }
      ] },
    { node: '3.3', name: 'Case screen', page: 'design/v4/case.html',
      about: 'The case, the open and the outcome on one page, D-213 and D-214. The open and the outcome are what pressing Open does; ?land= decides what lands.',
      labsOf: ['design/v4/case.html', 'design/v4/open-lab.html', 'design/v4/win-lab.html'],
      states: [
        { node: '3.3', label: 'Signed in, funded',               file: 'v4/case.html',          grey: 'case-account.html' },
        { node: '3.3', label: 'Guest',                           file: 'v4/case.html?guest',    grey: 'case.html' },
        { node: '3.5', label: 'Five at once, press Open',        file: 'v4/case.html?count=5',  grey: 'case-open-5.html' },
        { node: '3.6', label: 'A gain, press Open: the knife',   file: 'v4/case.html?land=k',   grey: 'case-outcome.html' },
        { node: '3.6', label: 'A loss, press Open: the P250',    file: 'v4/case.html?land=8',   grey: null }
      ] }
  ]
};

(function () {
  var D = window.DESIGN_NAV;
  var BASE = typeof window.NAV_BASE === 'string' ? window.NAV_BASE : '';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Rows for the root sidebar's inner panel: a head per screen, its states, and the grey original.
  D.rows = function () {
    var out = [];
    D.screens.forEach(function (sc) {
      out.push({ head: sc.node + ' ' + sc.name });
      sc.states.forEach(function (st) { out.push({ node: st.node, label: st.label, file: st.file }); });
      out.push({ node: 'grey', label: 'Grey original', file: '../wireframes/' + (sc.states[0].grey || 'index.html') });
    });
    return out;
  };

  // Which row is the page we stand on: the address with its switch first, the bare page second.
  // A row fits when the page is its page and every switch it names is on the address with
  // its value; the row naming the most switches wins, so ?guest&v=1 is still Guest and an
  // address no state names, ?stage=h from a lab, falls back to the bare page.
  function fit(row) {
    if (!row.file || row.file.indexOf('../') === 0) return -1;
    var parts = row.file.split('?');
    var tail = '/design/' + parts[0];
    if (location.pathname.slice(-tail.length) !== tail) return -1;
    var want = new URLSearchParams(parts[1] || ''), have = new URLSearchParams(location.search), n = 0, ok = true;
    want.forEach(function (v, k) { if (!have.has(k) || have.get(k) !== v) ok = false; n++; });
    return ok ? n : -1;
  }
  D.isCurrent = function (row, rows) {
    var best = null, top = -1;
    rows.forEach(function (r) { var f = fit(r); if (f > top) { top = f; best = r; } });
    return best === row;
  };

  // ---- the hub, design/overview.html ----

  function labsOf(sc) {
    var out = [];
    (window.NAV || []).forEach(function (stage) {
      (stage.children || []).forEach(function (c) {
        (c.items || [c]).forEach(function (leaf) {
          if (sc.labsOf.indexOf(leaf.page) < 0) return;
          if (leaf.page !== sc.page) out.push(leaf);
          (leaf.parts || []).forEach(function (p) { out.push(p); });
        });
      });
    });
    return out;
  }

  function greyPages() {
    var all = [];
    ((window.WF_NAV && window.WF_NAV.screens) || []).forEach(function (sc) {
      if (sc.status === 'built') all.push({ sc: sc, file: sc.file });
      (sc.states || []).forEach(function (st) { if (st.status === 'built') all.push({ sc: sc, file: st.file }); });
    });
    return all;
  }

  function coveredGrey() {
    var set = {};
    D.screens.forEach(function (sc) { sc.states.forEach(function (st) { if (st.grey) set[st.grey] = true; }); });
    return set;
  }

  function renderStats(host) {
    if (!host) return;
    var cov = coveredGrey(), grey = greyPages();
    var greyScreens = ((window.WF_NAV && window.WF_NAV.screens) || []).filter(function (s) { return s.status === 'built'; });
    var withColour = greyScreens.filter(function (s) { return grey.some(function (p) { return p.sc === s && cov[p.file]; }); });
    var states = 0;
    D.screens.forEach(function (sc) { states += sc.states.length; });
    [
      [String(D.screens.length), 'screens in colour'],
      [String(states), 'states in colour, each one address'],
      [withColour.length + ' of ' + greyScreens.length, 'grey screens with a coloured copy'],
      [grey.filter(function (p) { return cov[p.file]; }).length + ' of ' + grey.length, 'grey pages with a coloured copy']
    ].forEach(function (s) {
      var d = el('div', 'hero-stat');
      d.appendChild(el('div', 'hero-stat-value', s[0]));
      d.appendChild(el('div', 'hero-stat-label', s[1]));
      host.appendChild(d);
    });
  }

  function renderScreens(host) {
    if (!host) return;
    D.screens.forEach(function (sc) {
      var card = el('article', 'dz-screen');
      var head = el('div', 'dz-screen-head');
      head.appendChild(el('span', 'dz-node', sc.node));
      var h = el('h3', null);
      var a = el('a', null, sc.name);
      a.href = BASE + sc.page;
      h.appendChild(a);
      head.appendChild(h);
      card.appendChild(head);
      card.appendChild(el('p', 'dz-about', sc.about));

      card.appendChild(el('h4', null, 'States'));
      var states = el('div', 'dz-states');
      sc.states.forEach(function (st) {
        var s = el('a', 'dz-state');
        s.href = BASE + 'design/' + st.file;
        s.appendChild(el('span', 'dz-snode', st.node));
        s.appendChild(el('span', 'dz-slabel', st.label));
        s.appendChild(el('span', 'dz-sgrey', st.grey ? 'copy of grey ' + st.grey : 'no grey page of its own'));
        states.appendChild(s);
      });
      card.appendChild(states);

      var labs = labsOf(sc);
      if (labs.length) {
        card.appendChild(el('h4', null, 'Its blocks, in their labs (' + labs.length + ')'));
        var lw = el('div', 'dz-labs');
        labs.forEach(function (l) {
          var b = el('a', 'dz-lab', l.label);
          b.href = BASE + l.page;
          lw.appendChild(b);
        });
        card.appendChild(lw);
      }
      var g = el('a', 'dz-grey', 'Grey original, ' + sc.node + ' ' + sc.name);
      g.href = BASE + 'wireframes/' + (sc.states[0].grey || 'index.html');
      card.appendChild(g);
      host.appendChild(card);
    });
  }

  function renderCoverage(host) {
    if (!host || !window.WF_NAV) return;
    var cov = coveredGrey();
    window.WF_NAV.clusters.forEach(function (cl) {
      var screens = window.WF_NAV.screens.filter(function (s) { return s.cluster === cl.key && s.status === 'built'; });
      if (!screens.length) return;
      var g = el('div', 'wf-cov-group');
      g.appendChild(el('div', 'wf-cov-head', cl.key + '. ' + cl.label));
      var grid = el('div', 'wf-cov-grid');
      screens.forEach(function (sc) {
        var pages = [sc.file].concat((sc.states || []).filter(function (s) { return s.status === 'built'; }).map(function (s) { return s.file; }));
        var n = pages.filter(function (f) { return cov[f]; }).length;
        var colour = n ? D.screens.filter(function (c) { return c.states.some(function (s) { return pages.indexOf(s.grey) >= 0; }); })[0] : null;
        var tile = el(colour ? 'a' : 'div', 'wf-cov ' + (colour ? 'is-built' : 'is-spec'));
        if (colour) tile.href = BASE + colour.page;
        tile.appendChild(el('span', 'wf-cov-node', sc.node));
        tile.appendChild(el('span', 'wf-cov-name', sc.name));
        tile.appendChild(el('span', 'wf-cov-meta', colour ? n + ' of ' + pages.length + ' pages in colour' : 'grey only, ' + pages.length + (pages.length === 1 ? ' page' : ' pages')));
        grid.appendChild(tile);
      });
      g.appendChild(grid);
      host.appendChild(g);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderStats(document.getElementById('dz-stats'));
    renderScreens(document.getElementById('dz-screens'));
    renderCoverage(document.getElementById('dz-coverage'));
  });
})();
