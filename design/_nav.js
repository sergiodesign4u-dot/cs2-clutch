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
    { node: '1.0', name: 'Home', page: 'design/index.html',
      about: 'The first screen and every block under it in colour, assembled from the kit since D-234: the shell, the kit\'s components and Home\'s four one-off blocks, compared beside Home v4, the founder\'s picks of D-209 checked in stage 06 step 8; v4\'s motion carried with it by D-235. Accepted at its gate, 20 Nov 2026.',
      labsOf: ['design/v4/index.html'],
      states: [
        { node: '1.0', label: 'Guest',     file: 'index.html',         grey: 'index.html' },
        { node: '1.1', label: 'Signed in', file: 'index.html?account', grey: 'index-account.html' }
      ] },
    { node: '1.2', name: 'Provably fair', page: 'design/fair.html',
      about: 'The public page that says what a proof proves and what it does not, then lets anyone recompute a round, in colour since D-245, assembled from the kit: the Verify form in its six states, the case screen ruler in How a round is fixed, and four one-off blocks of 1.2 on the provably fair blue of the Proof block, played by design/kit/fair.js. No verified mark in any state. Accepted at its gate, 22 Nov 2026.',
      labsOf: [],
      states: [
        { node: '1.2', label: 'The verifier idle',            file: 'fair.html',             grey: 'fair.html' },
        { node: '1.2', label: 'Prefilled, nothing computed',  file: 'fair-prefilled.html',   grey: 'fair-prefilled.html' },
        { node: '1.2', label: 'Checked and matched',          file: 'fair-matched.html',     grey: 'fair-matched.html' },
        { node: '1.2', label: 'Proof not available yet',      file: 'fair-unavailable.html', grey: 'fair-unavailable.html' },
        { node: '1.3', label: 'Malformed round',              file: 'fair-malformed.html',   grey: 'fair-malformed.html' },
        { node: '1.4', label: 'Our own proof failed',         file: 'fair-proof-failed.html', grey: 'fair-proof-failed.html' }
      ] },
    { node: '3.1', name: 'Case catalogue', page: 'design/catalogue.html',
      about: 'The whole shelf in colour since D-246, assembled from the kit: the sticky category bar with Search and Filters, the Daily ladder, thirteen cases in three sections, Emberforge joining Featured by D-247, eight of the covers new, and the filter drawer, played by design/kit/catalogue.js. Accepted by the founder on 23 November 2026.',
      labsOf: [],
      states: [
        { node: '3.1', label: 'Guest, unfiltered',  file: 'catalogue.html',          grey: 'catalogue.html' },
        { node: '3.1', label: 'Account',            file: 'catalogue-account.html',  grey: 'catalogue-account.html' },
        { node: '3.1', label: 'Filter drawer open', file: 'catalogue-filter.html',   grey: 'catalogue-filter.html' },
        { node: '3.1', label: 'Filtered',           file: 'catalogue-filtered.html', grey: 'catalogue-filtered.html' },
        { node: '3.1', label: 'Loading',            file: 'catalogue-loading.html',  grey: 'catalogue-loading.html' },
        { node: '3.1', label: 'Degraded',           file: 'catalogue-degraded.html', grey: 'catalogue-degraded.html' },
        { node: '3.2', label: 'Nothing matches',    file: 'catalogue-empty.html',    grey: 'catalogue-empty.html' }
      ] },
    { node: '6.1', name: 'Responsible play', page: 'design/responsible.html',
      about: 'The four limits a person sets over their own spending and time, in colour since D-248, assembled from the kit: the Limits panel with its periods as Select menus and every press answered under its row, the confirmation of a self exclusion, the head on the account menu\'s Responsible play blue, played by design/kit/rp.js. No ticker, no bonus, no countdown. The head\'s words at the band\'s left and the panel in the middle of the column by D-249 and D-250. Accepted at its gate, 24 Nov 2026.',
      labsOf: [],
      states: [
        { node: '6.1', label: 'Guest',                       file: 'responsible.html',            grey: 'responsible-guest.html' },
        { node: '6.1', label: 'Signed in, nothing set',      file: 'responsible.html?account',    grey: 'responsible.html' },
        { node: '6.2', label: 'Self exclusion confirmation', file: 'responsible-confirm.html',    grey: 'responsible-confirm.html' },
        { node: '6.3', label: 'A limit in force',            file: 'responsible-in-force.html',   grey: 'responsible-in-force.html' },
        { node: '6.3', label: 'Self excluded',               file: 'responsible-excluded.html',   grey: 'responsible-excluded.html' }
      ] },
    { node: '2.4', name: 'Sign in', page: 'design/signin.html',
      about: 'Sign in with Steam in colour since D-251, assembled from the kit: the dialog over the case screen, the layer every page with the shell carries, and the address /signin as the same card on the page with its H1 and the way back to reading, the Dialog in its sign in form and the Sign-in block in each state. Two declarations, no press disabled: a press with one missing is refused and names it (D-26, D-58). Steam refused and Steam unavailable say which side failed. Played by kit.js. Accepted at its gate, 24 Nov 2026.',
      labsOf: ['design/v4/signin-lab.html'],
      states: [
        { node: '2.4', label: 'The dialog, over the case screen', file: 'signin-dialog.html',           grey: 'signin-dialog.html' },
        { node: '2.4', label: 'Cold arrival at /signin',          file: 'signin.html',                  grey: 'signin.html' },
        { node: '2.4', label: 'One of two given',                 file: 'signin-consent-partial.html',  grey: 'signin-consent-partial.html' },
        { node: '2.4', label: 'Press refused, nothing declared',  file: 'signin-blocked.html',          grey: 'signin-blocked.html' },
        { node: '2.4', label: 'Consent given',                    file: 'signin-consent-given.html',    grey: 'signin-consent-given.html' },
        { node: '2.5', label: 'Steam refused',                    file: 'signin-steam-refused.html',    grey: 'signin-steam-refused.html' },
        { node: '2.6', label: 'Steam unavailable',                file: 'signin-steam-unavailable.html', grey: 'signin-steam-unavailable.html' }
      ] },
    { node: '3.3', name: 'Case screen', page: 'design/case.html',
      about: 'The case, the open and the outcome on one page, assembled from the kit since D-236: the shell, the Case stage and the Commit block played by design/kit/stage.js, the kit\'s drop table and best drops, and the case\'s four one-off blocks, compared beside the case screen v4, the founder\'s picks of D-213 and D-214, its motion carried whole. Press Open signed in; ?land= decides what lands. The three states D-215 owed are pages of their own. Passed its gate on 20 Nov 2026.',
      labsOf: ['design/v4/case.html', 'design/v4/open-lab.html', 'design/v4/win-lab.html'],
      states: [
        { node: '3.3', label: 'Guest',                           file: 'case.html',                    grey: 'case.html' },
        { node: '3.3', label: 'Signed in, funded',               file: 'case.html?account',            grey: 'case-account.html' },
        { node: '3.3', label: 'Two at once',                     file: 'case.html?account&count=2',    grey: 'case-account-2.html' },
        { node: '3.5', label: 'Five at once, press Open',        file: 'case.html?account&count=5',    grey: 'case-account-5.html' },
        { node: '3.6', label: 'A gain, press Open: the knife',   file: 'case.html?account&land=k',     grey: 'case-outcome.html' },
        { node: '3.6', label: 'A loss, press Open: the P250',    file: 'case.html?account&land=8',     grey: null },
        { node: '3.3', label: 'Values degraded',                 file: 'case-degraded.html',           grey: 'case-degraded.html' },
        { node: '3.3', label: 'No observed counter',             file: 'case-nocounter.html',          grey: 'case-nocounter.html' },
        { node: '3.6', label: 'Reveal interrupted',              file: 'case-interrupted.html',        grey: 'case-interrupted.html' }
      ] },
    { node: '4.1', name: 'Deposit', page: 'design/deposit-dialog.html',
      about: 'Add funds in colour since D-237, accepted at its gate on 20 Nov 2026 after D-238, assembled from the kit: the Payment panel, the Status notice and the Dialog, the ways to pay and two blocks of its own as one-offs, played by design/kit/pay.js. Every Add funds now leads here: on Home and the case screen it opens this layer over the page, as the grey does; at its own addresses each route is a page, the method in ?m=. Drawn only in grey before, so built from its nearest relatives in colour. Corrected at its gate by D-238: the bonus as a strip, the Select menu for the country and the network, each way to pay its own mark, step 2 headed by Back and the chosen name, provider tiles, the dock with the rate on a chip and the terms over Pay.',
      labsOf: [],
      states: [
        { node: '4.1', label: 'The dialog, over the case screen', file: 'deposit-dialog.html',          grey: 'deposit-dialog.html' },
        { node: '4.1', label: 'Cold arrival at /deposit',         file: 'deposit.html',                 grey: 'deposit.html' },
        { node: '4.1', label: 'Card and wallets',                 file: 'deposit-card.html',            grey: 'deposit-card.html' },
        { node: '4.1', label: 'Crypto',                           file: 'deposit-crypto.html',          grey: 'deposit-crypto.html' },
        { node: '4.1', label: 'Crypto, no address yet',           file: 'deposit-crypto-nowallet.html', grey: 'deposit-crypto-nowallet.html' },
        { node: '4.1', label: 'Gift cards',                       file: 'deposit-giftcards.html',       grey: 'deposit-giftcards.html' },
        { node: '4.1', label: 'CS2 skins',                        file: 'deposit-skins.html',           grey: 'deposit-skins.html' },
        { node: '4.2', label: 'Deposit limit reached',            file: 'deposit-ceiling-reached.html', grey: 'deposit-ceiling-reached.html' },
        { node: '4.3', label: 'Limit raise pending',              file: 'deposit-ceiling-pending.html', grey: 'deposit-ceiling-pending.html' },
        { node: '4.4', label: 'Crediting, named timer',           file: 'deposit-crediting.html',       grey: 'deposit-crediting.html' },
        { node: '4.5', label: 'Payment declined',                 file: 'deposit-declined.html',        grey: 'deposit-declined.html' }
      ] },
    { node: '5.1', name: 'My items', page: 'design/account.html',
      about: 'The inventory in colour since D-239, its head and the inventory head made live after the gate by D-240, its best item on the band and every card in its grade by D-241, its head a stage for the best item by D-242 (B1, picked by the founder in the lab), assembled from the kit: the Account head, the Item grid and its cards, the Empty state and the cash out Dialog, the Selection bar a one-off of 5.1, played by design/kit/items.js. Tick items and the bar counts and sums them; sell, send to Steam or cash out; the sort keys reorder the grid. Drawn only in grey before, so built from its nearest relatives in colour. Accepted at its gate, 21 Nov 2026.',
      labsOf: ['design/v4/myitems-lab.html'],
      states: [
        { node: '5.1', label: 'Items held',              file: 'account.html',          grey: 'account.html' },
        { node: '5.1', label: 'Values degraded',         file: 'account-degraded.html', grey: 'account-degraded.html' },
        { node: '5.1', label: 'Cash out, the layer',     file: 'cashout-dialog.html',   grey: 'cashout-dialog.html' },
        { node: '5.2', label: 'Inventory empty',         file: 'account-empty.html',    grey: 'account-empty.html' }
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
    // The kit the screens are assembled from, stage 07 step 3: its own row, so it is one click from any screen in colour.
    out.push({ head: 'Kit' });
    out.push({ node: 'kit', label: 'Kit of components', file: 'kit/kit.html' });
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
