/* ia/_nav.js
 * The single registry of detail-layer NODES. Nothing else.
 *
 * Own namespace on purpose: the roadmap sidebar is rendered by the root /_nav.js
 * from window.NAV_* globals and nav-* classes. Both scripts run on structure.html,
 * so a shared name would silently break the roadmap. Everything here is IA_NAV / ia-*.
 *
 * Only the hub, ia/structure.html, loads this file. It draws every node as a chip
 * into <div id="ia-structure">, split into Global elements and Pages. Node pages
 * themselves are NOT to load it: they only register one record here and render the
 * roadmap sidebar from ../_nav.js.
 *
 * Divergence from the pack, named rather than absorbed: the pack starts this array
 * empty and appends a record when a node is built. This registry instead carries the
 * full planned set from step 1 with done:false, exactly as the root /_nav.js carries
 * unfinished stages. A hub that only lists what exists cannot show what is missing,
 * and "specced but not drawn" is the defect the step 8 audit is built to find.
 * Building a node means flipping done to true, not adding a line.
 *
 * Record: { node, label, file, group: 'global' | 'pages', type, done }
 * States are NOT records here. A state is a numbered node in ia/docs/sitemap.md and
 * is specified inside its parent's md under its own anchor. `states` counts them so
 * the hub can show what a chip actually contains.
 */

window.IA_NAV = [
  // Cluster 0. Global shell. What every intent cluster inherits.
  { node: '0.1', label: 'Navigation',              file: 'navigation.html', group: 'global', type: 'global element', states: 0, done: true  },
  { node: '0.2', label: 'Footer',                  file: 'footer.html',     group: 'global', type: 'global element', states: 0, done: true  },
  { node: '0.3', label: 'System pages',            file: 'system.html',     group: 'global', type: 'page',           states: 0, done: false },
  { node: '0.4', label: 'Cookie consent',          file: 'cookie.html',     group: 'global', type: 'dialog',         states: 0, done: false },
  { node: '0.5', label: 'Toasts',                  file: 'toasts.html',     group: 'global', type: 'component',      states: 0, done: false },
  { node: '0.6', label: 'Canonical skin card',     file: 'skin-card.html',  group: 'global', type: 'component',      states: 0, done: false },
  { node: '0.7', label: 'Canonical case tile',     file: 'case-tile.html',  group: 'global', type: 'component',      states: 0, done: false },
  { node: '0.8', label: 'Live drop ticker',        file: 'ticker.html',     group: 'global', type: 'component',      states: 0, done: false },
  // Registered by node 0.2 on 11 August 2026. A carrier may not promise a destination the map does not hold.
  // 0.9 holds four documents on one template. They are INCLUDES of one node, not four state nodes in the
  // map, so `states` is 0: the hub's derived state total has to equal the 27 in ia/docs/sitemap.md.
  { node: '0.9', label: 'Legal and policy pages',   file: 'legal.html',      group: 'global', type: 'page',           states: 0, done: false },
  { node: '0.10', label: 'Support and contact',     file: 'support.html',    group: 'global', type: 'page',           states: 0, done: false },
  // Registered by the global sweep on 12 August 2026. Not new surfaces: three are structures the nine
  // surfaces already read, the fourth is the component that renders the product's evidence.
  // Type 'register' is a node read by several nodes and drawn by none. Stage 04 does not wireframe it.
  { node: '0.11', label: 'Published numbers',        file: 'numbers.html',    group: 'global', type: 'register',       states: 0, done: true  },
  { node: '0.12', label: 'Markets and jurisdictions', file: 'markets.html',   group: 'global', type: 'register',       states: 0, done: true  },
  { node: '0.13', label: 'SEO and indexation',       file: 'seo.html',        group: 'global', type: 'register',       states: 0, done: true  },
  { node: '0.14', label: 'Canonical round proof',    file: 'round-proof.html', group: 'global', type: 'component',     states: 0, done: false },

  // Cluster 1. Decide whether this place is real.
  { node: '1.0', label: 'Home',                    file: 'home.html',       group: 'pages',  type: 'page',           states: 1, done: false },
  { node: '1.2', label: 'Provably fair',           file: 'provably-fair.html', group: 'pages', type: 'page',        states: 2, done: false },

  // Cluster 2. Get through the door.
  { node: '2.1', label: 'Age and geo gate',        file: 'gate.html',       group: 'pages',  type: 'dialog',         states: 2, done: false },
  { node: '2.4', label: 'Sign in with Steam',      file: 'signin.html',     group: 'pages',  type: 'page',           states: 2, done: false },
  { node: '2.7', label: 'Identity verification',   file: 'identity.html',   group: 'pages',  type: 'page',           states: 2, done: false },

  // Cluster 3. Choose what to open, and open it.
  { node: '3.1', label: 'Case catalogue',          file: 'catalogue.html',  group: 'pages',  type: 'page',           states: 1, done: false },
  { node: '3.3', label: 'Case screen',             file: 'case.html',       group: 'pages',  type: 'page',           states: 4, done: false },

  // Cluster 4. Put money in.
  { node: '4.1', label: 'Deposit',                 file: 'deposit.html',    group: 'pages',  type: 'page',           states: 4, done: false },

  // Cluster 5. Take out what I earned.
  { node: '5.1', label: 'Account and inventory',   file: 'account.html',    group: 'pages',  type: 'page',           states: 1, done: false },
  { node: '5.3', label: 'Withdrawal',              file: 'withdrawal.html', group: 'pages',  type: 'page',           states: 5, done: false },

  // Cluster 6. Keep myself in check.
  { node: '6.1', label: 'Responsible play',        file: 'responsible.html', group: 'pages', type: 'page',           states: 2, done: false },

  // Cluster 7. Tell someone.
  { node: '7.1', label: 'Public result',           file: 'public-result.html', group: 'pages', type: 'page',         states: 1, done: false },
];

(function () {
  var host = document.getElementById('ia-structure');
  if (!host || !window.IA_NAV) return;

  var activeNode = (location.hash || '').replace('#', '');

  var GROUPS = [
    { key: 'global', title: 'Global elements', hint: 'Inherited by every intent cluster. Described once, referenced everywhere.' },
    { key: 'pages',  title: 'Pages',           hint: 'One chip per file-level node. States live inside their parent and are counted on the chip.' }
  ];

  GROUPS.forEach(function (g) {
    var rows = window.IA_NAV.filter(function (n) { return n.group === g.key; });
    if (!rows.length) return;

    var built = rows.filter(function (n) { return n.done; }).length;

    var wrap = document.createElement('div');
    wrap.className = 'ia-group';

    var head = document.createElement('div');
    head.className = 'ia-group-head';
    head.innerHTML =
      '<h3 class="ia-group-title">' + g.title + '</h3>' +
      '<span class="ia-group-count">' + built + ' of ' + rows.length + ' built</span>';
    wrap.appendChild(head);

    var hint = document.createElement('p');
    hint.className = 'ia-group-hint';
    hint.textContent = g.hint;
    wrap.appendChild(hint);

    var grid = document.createElement('div');
    grid.className = 'ia-chips';

    rows.forEach(function (n) {
      var el = document.createElement(n.done ? 'a' : 'div');
      el.className = 'ia-chip' + (n.done ? '' : ' is-planned') + (n.node === activeNode ? ' is-active' : '');
      if (n.done) el.href = n.file;
      if (n.node === activeNode) el.setAttribute('data-active', 'true');

      var states = n.states ? '<span class="ia-chip-states">+' + n.states + ' state' + (n.states > 1 ? 's' : '') + '</span>' : '';

      el.innerHTML =
        '<span class="ia-chip-num">' + n.node + '</span>' +
        '<span class="ia-chip-label">' + n.label + '</span>' +
        '<span class="ia-chip-meta"><span class="ia-chip-type">' + n.type + '</span>' + states + '</span>';

      grid.appendChild(el);
    });

    wrap.appendChild(grid);
    host.appendChild(wrap);
  });

  // Totals line, so the hub answers "how far in are we" without anyone counting chips.
  var all = window.IA_NAV;
  var doneCount = all.filter(function (n) { return n.done; }).length;
  var stateCount = all.reduce(function (a, n) { return a + (n.states || 0); }, 0);

  // The hero stat is derived from the registry too, so it can never drift from the chips.
  var heroBuilt = document.getElementById('ia-built');
  if (heroBuilt) heroBuilt.textContent = String(doneCount);

  var tot = document.createElement('p');
  tot.className = 'ia-total';
  tot.innerHTML =
    '<strong>' + doneCount + ' of ' + all.length + '</strong> file-level nodes built, carrying <strong>' +
    stateCount + '</strong> specified states between them. ' +
    'Planned nodes are shown dim and unclickable rather than hidden: a hub that lists only what exists cannot show what is missing.';
  host.appendChild(tot);
})();
