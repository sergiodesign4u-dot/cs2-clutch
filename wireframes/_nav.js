/* wireframes/_nav.js
 * THE SINGLE SOURCE OF SCREENS for stage 04. Nothing else holds this list.
 *
 * Own namespace on purpose. The globals NAV_* and the nav-* classes belong to the
 * root /_nav.js, which renders the project roadmap. overview.html loads BOTH files,
 * so a name collision here would silently break the roadmap. Everything below is
 * WF_NAV and wf-*.
 *
 * The registry is filled BEFORE the screens are drawn, which makes it a coverage
 * tracker rather than a table of contents: every screen on the map is here from day
 * one with status 'spec', and each finished one flips to 'built'. So "how much is
 * left" is visible in the browser at every step instead of being counted at the end,
 * and no screen goes missing in the step 8 fanout: an empty row is noticeable, a
 * missing file is not.
 *
 * Derived from ia/docs/sitemap.md, ia/docs/flows.md and wireframes/docs/screens.md
 * on 18 August 2026. Nothing here is invented: the matrix computed a FLOOR of 63
 * pages, and this registry is the live list, which is longer and only ever gets
 * longer. Every count printed anywhere in the prototype is computed from the list
 * below and never typed: allPages() and builtPages() are the only two sources.
 * Flipping a status is the only manual edit this file takes.
 */

window.WF_NAV = {

  clusters: [
    { key: '0', label: 'Global shell' },
    { key: '1', label: 'Decide whether this place is real' },
    { key: '2', label: 'Get through the door' },
    { key: '3', label: 'Choose what to open, and open it' },
    { key: '4', label: 'Put money in' },
    { key: '5', label: 'Take out what I earned' },
    { key: '6', label: 'Keep myself in check' },
    { key: '7', label: 'Tell someone' }
  ],

  // Flows, from ia/docs/flows.md. `screens` lists node codes in the order the flow walks them.
  flows: [
    { id: 'f1',  label: 'Flow 1. Main job: arrive, open, get the thrill', screens: ['1.0','3.3','2.4','3.5','3.6'] },
    { id: 'f1a', label: 'Flow 1a. Browsing the catalogue',                screens: ['1.0','3.1','3.3'] },
    { id: 'f2',  label: 'Flow 2. Funding the account and setting the ceiling', screens: ['4.1','3.3'] },
    { id: 'f2a', label: 'Flow 2a. Setting a limit and stopping',          screens: ['6.1','4.1'] },
    { id: 'f3',  label: 'Flow 3. Withdraw and get what I earned',         screens: ['5.1','5.3'] },
    { id: 'f4',  label: 'Flow 4. Verify the outcome after I open',        screens: ['3.6','1.2','7.1'] }
  ],

  // One entry per screen. `states` are pages too: the base file is the success state,
  // every other state is its own page, per wireframes/docs/conventions.md section 3.
  screens: [
    { node: '0.3',  cluster: '0', name: 'System pages',        file: 'system.html',     ia: 'system.html',        status: 'spec',
      base: '404, external arrival',
      states: [
        { label: '404, internal referrer',  file: 'system-404-internal.html', status: 'spec' },
        { label: '404, retired case slug',  file: 'system-404-retired.html',  status: 'spec' },
        { label: '500',                     file: 'system-500.html',          status: 'spec' },
        { label: '503, planned',            file: 'system-503-planned.html',  status: 'spec' },
        { label: '503, unplanned',          file: 'system-503-unplanned.html', status: 'spec' }
      ] },

    { node: '0.4',  cluster: '0', name: 'Cookie consent',      file: 'cookie.html',     ia: 'cookie.html',        status: 'spec',
      base: 'Pending, no answer yet',
      note: 'Whether this ships as six pages or two with four variants is step 5, conventions section 6',
      states: [
        { label: 'Accepted all',   file: 'cookie-accepted.html',  status: 'spec' },
        { label: 'Rejected all',   file: 'cookie-rejected.html',  status: 'spec' },
        { label: 'Partial',        file: 'cookie-partial.html',   status: 'spec' },
        { label: 'Changed later',  file: 'cookie-changed.html',   status: 'spec' },
        { label: 'Consent expired',file: 'cookie-expired.html',   status: 'spec' }
      ] },

    { node: '0.9',  cluster: '0', name: 'Legal and policy',    file: 'legal.html',      ia: 'legal.html',         status: 'spec',
      base: 'Current',
      states: [
        { label: 'Changed since you last agreed', file: 'legal-changed.html',    status: 'spec' },
        { label: 'Guest, never agreed',           file: 'legal-guest.html',      status: 'spec' },
        { label: 'Reading a superseded version',  file: 'legal-superseded.html', status: 'spec' },
        { label: 'Not yet published',             file: 'legal-unpublished.html',status: 'spec' }
      ] },

    { node: '0.10', cluster: '0', name: 'Support and contact', file: 'support.html',    ia: 'support.html',       status: 'spec',
      base: 'Entry',
      states: [
        { label: 'Appeal submitted',            file: 'support-submitted.html', status: 'spec' },
        { label: 'Waiting, with attribution',   file: 'support-waiting.html',   status: 'spec' },
        { label: 'Appeal answered',             file: 'support-answered.html',  status: 'spec' },
        { label: 'Appeal upheld',               file: 'support-upheld.html',    status: 'spec' },
        { label: 'Appeal refused',              file: 'support-refused.html',   status: 'spec' },
        { label: 'Deadline missed',             file: 'support-deadline.html',  status: 'spec' },
        { label: 'No dispute to appeal',        file: 'support-nodispute.html', status: 'spec' },
        { label: 'Ticket id not found',         file: 'support-notfound.html',  status: 'spec' }
      ] },

    { node: '1.0',  cluster: '1', name: 'Home',                file: 'index.html',      ia: 'home.html',          status: 'built',
      base: 'Guest', etalon: true,
      states: [
        { node: '1.1', label: 'Account exists', file: 'index-account.html', status: 'built' }
      ] },

    { node: '1.2',  cluster: '1', name: 'Provably fair',       file: 'fair.html',       ia: 'provably-fair.html', status: 'spec',
      base: 'Default, with the verifier idle',
      states: [
        { node: '1.3', label: 'Verifier, malformed round',   file: 'fair-malformed.html',    status: 'spec' },
        { node: '1.4', label: 'Verifier, our own proof failed', file: 'fair-proof-failed.html', status: 'spec' }
      ] },

    { node: '2.1',  cluster: '2', name: 'Geo gate',            file: 'gate.html',       ia: 'gate.html',          status: 'spec',
      base: 'Checking the market',
      states: [
        { node: '2.2', label: 'Geo blocked', file: 'gate-blocked.html', status: 'spec', dead: true }
      ] },

    { node: '2.4',  cluster: '2', name: 'Sign in with Steam',  file: 'signin.html',     ia: 'signin.html',        status: 'spec',
      base: 'Consent not given',
      states: [
        { label: 'One of two given',        file: 'signin-consent-partial.html', status: 'spec' },
        { label: 'Consent given',           file: 'signin-consent-given.html',   status: 'spec' },
        { node: '2.5', label: 'Steam refused',       file: 'signin-steam-refused.html',   status: 'spec' },
        { node: '2.6', label: 'Steam unavailable',   file: 'signin-steam-unavailable.html', status: 'spec' }
      ] },

    { node: '3.1',  cluster: '3', name: 'Case catalogue',      file: 'catalogue.html',  ia: 'catalogue.html',     status: 'spec',
      base: 'Guest, unfiltered',
      states: [
        { node: '3.2', label: 'Nothing matches', file: 'catalogue-empty.html', status: 'spec' }
      ] },

    { node: '3.3',  cluster: '3', name: 'Case screen',         file: 'case.html',       ia: 'case.html',          status: 'built',
      base: 'Phase 1, choosing',
      states: [
        // THE ORDER IS THE ORDER OF THE FLOW, and it was not until D-46: the two phase 1
        // states at a chosen count were appended after 3.4 because they were added last.
        // Phase 1 first, all of it, then 3.4, then the open, then the outcome, then the
        // interruption, then the two figure conditions that are not phases at all.
        // The signed-in state is a page rather than a note because D-32 made it differ in
        // three places at once: the lane renders, the trigger names a different act, and
        // the balance relationship is stated.
        // A STATE WITH NO NODE FIELD IS A VARIATION OF 3.3 and renders as one, D-46. The
        // code used to be typed into the label text, so one renderer printed 3.3 for all
        // eleven pages and another printed 3.4 through 3.7 for the same eleven.
        { node: '3.3', label: 'Signed in, funded',       file: 'case-account.html',     status: 'built' },
        // PHASE 1 WITH THE COUNT ALREADY CHOSEN, D-46. The matrix used to read "count
        // switch at more than one: phase 1 unchanged", which made the stage the reveal's
        // lane standing still only at a count of one. Two is the shape and five is the
        // load, the same pair D-35 drew for the reveal and the outcome.
        { label: 'Two chosen, stage at rest',   file: 'case-account-2.html',   status: 'built' },
        { label: 'Five chosen, stage at rest',  file: 'case-account-5.html',   status: 'built' },
        { node: '3.4', label: 'Item at zero free units', file: 'case-item-out.html',    status: 'built' },
        { node: '3.5', label: 'Phase 2, the open',       file: 'case-open.html',        status: 'built' },
        // Multi-open, D-35. The count switch shipped in D-31 and neither phase had a
        // state above one roll, so the two phases it changes are drawn at both ends of
        // the range: two is the shape and five is the load.
        { node: '3.5', label: 'The open, 2 rolls',       file: 'case-open-2.html',      status: 'built' },
        { node: '3.5', label: 'The open, 5 rolls',       file: 'case-open-5.html',      status: 'built' },
        { node: '3.6', label: 'Phase 3, the outcome',    file: 'case-outcome.html',     status: 'built' },
        { node: '3.6', label: 'The outcome, 2 items',    file: 'case-outcome-2.html',   status: 'built' },
        { node: '3.6', label: 'The outcome, 5 items',    file: 'case-outcome-5.html',   status: 'built' },
        { node: '3.7', label: 'Interrupted reveal',      file: 'case-interrupted.html', status: 'built' },
        { label: 'D-B negative, no counter',    file: 'case-nocounter.html',   status: 'built' },
        { label: 'Values degraded',             file: 'case-degraded.html',    status: 'built' }
      ] },

    { node: '4.1',  cluster: '4', name: 'Deposit',             file: 'deposit.html',    ia: 'deposit.html',       status: 'spec',
      base: 'First deposit, no saved method',
      states: [
        { node: '4.2', label: 'Ceiling reached this period', file: 'deposit-ceiling-reached.html', status: 'spec' },
        { node: '4.3', label: 'Ceiling raise pending',       file: 'deposit-ceiling-pending.html', status: 'spec' },
        { node: '4.4', label: 'Crediting, named timer',      file: 'deposit-crediting.html',       status: 'spec' },
        { node: '4.5', label: 'Payment declined',            file: 'deposit-declined.html',        status: 'spec' }
      ] },

    { node: '5.1',  cluster: '5', name: 'Account and inventory', file: 'account.html',  ia: 'account.html',       status: 'spec',
      base: 'Items held',
      states: [
        { node: '5.2', label: 'Inventory empty', file: 'account-empty.html', status: 'spec' }
      ] },

    { node: '5.3',  cluster: '5', name: 'Withdrawal',          file: 'withdraw.html',   ia: 'withdrawal.html',    status: 'spec',
      base: 'Requested, with the public clock',
      states: [
        { node: '5.4', label: 'Not eligible, limit stated', file: 'withdraw-not-eligible.html',      status: 'spec' },
        { node: '5.5', label: 'Steam degraded',             file: 'withdraw-steam-degraded.html',    status: 'spec' },
        { node: '5.6', label: 'Account restricted, appeal', file: 'withdraw-restricted.html',        status: 'spec' },
        { node: '5.7', label: 'Restriction upheld',         file: 'withdraw-restriction-upheld.html',status: 'spec', dead: true },
        { node: '5.8', label: 'Trade offer expired',        file: 'withdraw-offer-expired.html',     status: 'spec' }
      ] },

    // THREE NODES THE MAP GAINED ON 20 AUGUST 2026, D-36. The account menu carried four
    // rows because the map held four destinations; the founder answered the gap on the
    // map's side. 5.9 arrived with a parent, F3, and with D-C as its dependency. 5.10 and
    // 5.11 arrived with no parent in the three legal classes and carry that printed.
    { node: '5.9',  cluster: '5', name: 'Roll history',         file: 'history.html',    status: 'spec',
      base: 'Every roll, each with its hash' },

    { node: '5.10', cluster: '5', name: 'Profile',              file: 'profile.html',    status: 'spec',
      base: 'Avatar, name, the Steam link' },

    { node: '5.11', cluster: '5', name: 'Settings',             file: 'settings.html',   status: 'spec',
      base: 'What it holds in round 1 is [?]' },

    { node: '6.1',  cluster: '6', name: 'Responsible play',    file: 'responsible.html', ia: 'responsible.html',  status: 'spec',
      base: 'No boundary in force',
      states: [
        { node: '6.2', label: 'Self exclusion confirmation', file: 'responsible-confirm.html',  status: 'spec' },
        { node: '6.3', label: 'Boundary in force',           file: 'responsible-in-force.html', status: 'spec' }
      ] },

    { node: '7.1',  cluster: '7', name: 'Public result',       file: 'result.html',     ia: 'public-result.html', status: 'spec',
      base: 'Result visible',
      states: [
        { node: '7.2', label: 'Result gone or private', file: 'result-gone.html', status: 'spec' }
      ] }
  ]
};

(function () {
  var WF = window.WF_NAV;
  if (!WF) return;

  var BASE = typeof window.WF_BASE === 'string' ? window.WF_BASE : '';
  var IA_BASE = typeof window.WF_IA_BASE === 'string' ? window.WF_IA_BASE : '../ia/';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Every page of a screen, base plus states, as one flat list.
  function pagesOf(sc) {
    var out = [{ label: sc.base, file: sc.file, status: sc.status, isBase: true }];
    (sc.states || []).forEach(function (st) { out.push(st); });
    return out;
  }

  function allPages() {
    var n = 0;
    WF.screens.forEach(function (sc) { n += pagesOf(sc).length; });
    return n;
  }

  function builtPages() {
    var n = 0;
    WF.screens.forEach(function (sc) {
      pagesOf(sc).forEach(function (p) { if (p.status === 'built') n++; });
    });
    return n;
  }

  function screenByNode(code) {
    for (var i = 0; i < WF.screens.length; i++) if (WF.screens[i].node === code) return WF.screens[i];
    return null;
  }

  // A flow step can be a screen OR one of its state pages: flows.md walks node codes
  // like 3.5 and 3.6, which are states of 3.3 rather than screens of their own.
  // Resolving only screens would drop them silently, which is the defect this
  // registry exists to prevent.
  // IT MATCHES A FIELD RATHER THAN SEARCHING INSIDE A STRING, D-46. Until then the
  // code lived typed into the label text, so a state could only be found by a flow if
  // somebody had remembered to prefix its label, and two renderers disagreed about
  // which code every state on 3.3 carried.
  function stepByNode(code) {
    var sc = screenByNode(code);
    if (sc) return { screen: sc, page: null };
    for (var i = 0; i < WF.screens.length; i++) {
      var host = WF.screens[i];
      var sts = host.states || [];
      for (var j = 0; j < sts.length; j++) {
        if (sts[j].node === code) return { screen: host, page: sts[j] };
      }
    }
    return null;
  }

  function currentFile() {
    var p = location.pathname;
    return p.substring(p.lastIndexOf('/') + 1) || 'index.html';
  }

  /* ---------- A. overview.html: flow entries ---------- */
  function renderFlows(host) {
    if (!host) return;
    WF.flows.forEach(function (f) {
      var box = el('div', 'wf-flow');
      box.appendChild(el('div', 'wf-flow-h', f.label));
      var line = el('div', 'wf-flow-line');
      var unresolved = [];
      f.screens.forEach(function (code, i) {
        var step = stepByNode(code);
        if (!step) { unresolved.push(code); return; }
        if (i) line.appendChild(el('span', 'wf-flow-arrow', '→'));
        var target = step.page || { file: step.screen.file, status: step.screen.status };
        var a = el('a', 'wf-flow-screen' + (target.status === 'built' ? ' is-built' : ''));
        a.href = BASE + target.file;
        a.appendChild(el('span', 'wf-flow-node', code));
        a.appendChild(el('span', null, step.page ? step.page.label.replace(/^\d\.\d\s*/, '') : step.screen.name));
        if (step.page) {
          a.appendChild(el('span', 'wf-flow-of', 'state of ' + step.screen.node + ' ' + step.screen.name));
        } else {
          var chips = el('span', 'wf-chips');
          pagesOf(step.screen).forEach(function (p) {
            chips.appendChild(el('span', 'wf-chip' + (p.status === 'built' ? ' is-built' : ''), p.isBase ? 'base' : p.label));
          });
          a.appendChild(chips);
        }
        line.appendChild(a);
      });
      // A code the registry cannot resolve is printed, never dropped.
      if (unresolved.length) {
        box.appendChild(el('div', 'wf-flow-warn', 'Unresolved in the registry: ' + unresolved.join(', ')));
      }
      box.appendChild(line);
      host.appendChild(box);
    });
  }

  /* ---------- A. overview.html: coverage map ---------- */
  function renderCoverage(host) {
    if (!host) return;
    var legend = el('div', 'wf-legend');
    legend.appendChild(el('span', 'wf-key wf-key-built', 'solid = built'));
    legend.appendChild(el('span', 'wf-key wf-key-spec', 'dashed = specification only'));
    var built = 0, spec = 0;
    WF.screens.forEach(function (sc) { sc.status === 'built' ? built++ : spec++; });
    legend.appendChild(el('span', 'wf-count', built + ' built · ' + spec + ' in specification · ' + builtPages() + ' of ' + allPages() + ' pages'));
    host.appendChild(legend);

    WF.clusters.forEach(function (cl) {
      var rows = WF.screens.filter(function (sc) { return sc.cluster === cl.key; });
      if (!rows.length) return;
      var group = el('div', 'wf-cov-group');
      group.appendChild(el('div', 'wf-cov-head', cl.key + '. ' + cl.label));
      var grid = el('div', 'wf-cov-grid');
      rows.forEach(function (sc) {
        var card = el(sc.status === 'built' ? 'a' : 'div', 'wf-cov' + (sc.status === 'built' ? ' is-built' : ' is-spec'));
        if (sc.status === 'built') card.href = BASE + sc.file;
        card.appendChild(el('span', 'wf-cov-node', sc.node));
        card.appendChild(el('span', 'wf-cov-name', sc.name));
        // A SCREEN IS BUILT BEFORE ALL OF ITS PAGES ARE, so the card counts both. It
        // printed "5 pages" for a screen with one page drawn and four still spec, which
        // is a coverage map claiming coverage it does not have: the one number on this
        // card that a reader takes at face value.
        var pages = pagesOf(sc);
        var n = pages.length;
        var done = pages.filter(function (p) { return p.status === 'built'; }).length;
        card.appendChild(el('span', 'wf-cov-meta',
          sc.status !== 'built' ? n + ' pages · IA' :
          done === n ? n + ' pages' : done + ' of ' + n + ' pages'));
        grid.appendChild(card);
      });
      group.appendChild(grid);
      host.appendChild(group);
    });
  }

  /* ---------- B. the wireframe-only side panel, for screen pages ---------- */
  function renderPanel(host) {
    if (!host) return;
    var cur = currentFile();
    var root = el('div', 'wfp');

    var head = el('div', 'wfp-head');
    var back = el('a', 'wfp-back', 'All screens →');
    back.href = BASE + 'overview.html';
    head.appendChild(back);
    head.appendChild(el('div', 'wfp-badge', 'Wireframes'));
    head.appendChild(el('div', 'wfp-sub', 'grey clickable prototype'));
    head.appendChild(el('div', 'wfp-count', builtPages() + ' of ' + allPages() + ' pages built'));
    root.appendChild(head);

    var done = [];
    WF.screens.forEach(function (sc) {
      pagesOf(sc).forEach(function (p) {
        if (p.status === 'built') done.push({ sc: sc, p: p });
      });
    });
    if (done.length) {
      root.appendChild(el('div', 'wfp-cluster', 'Built so far'));
      done.forEach(function (d) {
        var a = el('a', 'wfp-done' + (d.p.file === cur ? ' is-current' : ''));
        a.href = BASE + d.p.file;
        a.appendChild(el('span', 'wfp-node', d.p.node || d.sc.node));
        a.appendChild(el('span', 'wfp-name', d.p.label));
        root.appendChild(a);
      });
    }

    var currentScreen = null;
    WF.clusters.forEach(function (cl) {
      var rows = WF.screens.filter(function (sc) { return sc.cluster === cl.key; });
      if (!rows.length) return;
      root.appendChild(el('div', 'wfp-cluster', cl.key + '. ' + cl.label));
      rows.forEach(function (sc) {
        var pages = pagesOf(sc);
        var isCur = pages.some(function (p) { return p.file === cur; });
        if (isCur) currentScreen = sc;

        var row = el(sc.status === 'built' ? 'a' : 'span', 'wfp-screen' + (isCur ? ' is-current' : '') + (sc.status === 'built' ? '' : ' is-spec'));
        if (sc.status === 'built') row.href = BASE + sc.file;
        row.appendChild(el('span', 'wfp-node', sc.node));
        row.appendChild(el('span', 'wfp-name', sc.name));
        if (sc.status !== 'built') row.appendChild(el('span', 'wfp-tag', 'spec'));
        root.appendChild(row);

        // Accordion: states open only under the screen you are standing on.
        if (!isCur) return;
        pages.forEach(function (p) {
          var st = el(p.status === 'built' ? 'a' : 'span', 'wfp-state' + (p.file === cur ? ' is-current' : '') + (p.status === 'built' ? '' : ' is-spec'));
          if (p.status === 'built') st.href = BASE + p.file;
          if (p.file === cur) st.setAttribute('data-active', 'true');
          // THE CODE IS A FIELD AND IT IS SHOWN, D-46. Every state row carries its own
          // node code where it has one and the host's where it does not, so a variation
          // is legibly a variation of this node rather than a number of its own.
          st.appendChild(el('span', 'wfp-snode', p.node || sc.node));
          st.appendChild(el('span', 'wfp-sname', p.label));
          if (p.dead) st.appendChild(el('span', 'wfp-dead', 'dead end'));
          root.appendChild(st);
        });
      });
    });

    // The route to the node's own IA page, WHERE THERE IS ONE. 5.9, 5.10 and 5.11 are
    // nodes on the map without node pages of their own, D-36 having created them at
    // stage 04 rather than at 03b, so the link is absent rather than pointing nowhere.
    if (currentScreen && currentScreen.ia) {
      var foot = el('div', 'wfp-foot');
      var ia = el('a', 'wfp-ia', '← IA specification, node ' + currentScreen.node);
      ia.href = IA_BASE + currentScreen.ia;
      foot.appendChild(ia);
      root.appendChild(foot);
    }

    host.appendChild(root);

    // Off-canvas below 900px. The class goes on .wfp, which is what the stylesheet
    // moves: putting it on the host aside was the bug this comment replaces. The
    // panel owns its own toggle, because a per-page script would be cloned 63 times
    // and each clone would be a chance to get it wrong.
    var toggle = document.querySelector('.wfp-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = root.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      root.addEventListener('click', function (e) {
        if (e.target.closest('a') && window.innerWidth < 900) {
          root.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  /* ---------- C. The globals, 0.1 and 0.2, rendered once and reused ----------
     Step 5. Nobody redraws the header per screen. A screen declares its state with
     window.WF_SHELL = { account: false, active: 'index.html' } and gets the carriers.

     The model is the map's: two carriers on desktop, three on mobile, and no carrier
     holds another's kind. The rail owns the destinations. The header owns money and
     the account and holds NO destination at all. The bar is a shortcut subset of the
     rail and the rail is always the superset. */

  function shellCfg() {
    var c = window.WF_SHELL || {};
    return { account: !!c.account, active: c.active || currentFile() };
  }

  // Three destinations before an account, four after. Home is not one of them: the
  // logo is the home route, CLAUDE.md, the navigation model.
  // D-29, 19 August 2026. ONE destination before an account and two after. The rail is
  // the ways-to-play carrier, as the baseline runs it, and round 1 ships one way to
  // play. Provably fair and Responsible play did not disappear: they are in the footer,
  // in the Play column and the Play responsibly column, which is where the baseline
  // keeps its own Provably Fair link. The cost is printed in the decision record.
  // D-40, 20 August 2026. MY ITEMS LEAVES THE RAIL, so the rail carries ONE destination
  // in both states. It did not lose a destination, it stopped holding one twice: since
  // D-36 the account menu carries My items as its first row, and CLAUDE.md's own rule is
  // that no carrier holds another's kind. My items is an account thing and the header
  // owns the account.
  function railItems() {
    return [{ label: 'Cases', file: 'catalogue.html' }];
  }

  // The bar is a subset of the rail plus Home, and it never holds money.
  function barItems() {
    return [
      { label: 'Home',  file: 'index.html' },
      { label: 'Cases', file: 'catalogue.html' }
      // The superset rule holds: every bar item exists in the rail. D-29 took Provably
      // fair out of the rail and it left the bar in the same step; D-40 does the same to
      // My items. THE BAR IS NOW TWO ITEMS IN BOTH STATES, below Material's floor of
      // three for a signed-in person as well as for a guest. D-29 printed that cost when
      // it applied to one state; it now applies to both, and the decision record says so
      // rather than the shell quietly carrying it.
    ];
  }

  // THE LANGUAGE CONTROL. NINE OPTIONS SINCE D-42, ONE OF THEM LIVE.
  // D-41 shipped one option and refused the other eight by the rule that fills every
  // other carrier in this project: a carrier is inherited and filled with live items,
  // and only a dead item is deferred. THE FOUNDER REVERSED THAT FOR THIS CONTROL ALONE,
  // so the prototype shows the shape the live product has. The eight are inert, the
  // panel says so in its own words, and D-42 records what that costs. It is not a
  // precedent: no other carrier here gets dead items on this argument.
  // THE NINE ARE SOURCED, NOT INVENTED: baseline.md section "Header", walked live on
  // 11 August 2026, "a language switcher offering nine languages, en de zh fr pl tr pt
  // es ru". The names are written in English because the interface is English, and the
  // endonyms are final copy, which belongs to production.
  // WHAT THE STUBS NEVER DO IS TOUCH THE PAGE'S lang ATTRIBUTE. English text announced
  // to a screen reader as German is an accessibility defect rather than a placeholder,
  // and it is the one change that would make the stub look real.
  var LANGS = [['en', 'English'], ['de', 'German'], ['zh', 'Chinese'], ['fr', 'French'],
               ['pl', 'Polish'], ['tr', 'Turkish'], ['pt', 'Portuguese'],
               ['es', 'Spanish'], ['ru', 'Russian']];
  var langCur = 'en';
  var langSubs = [];
  // The rail's control and the footer's control are one control in two places, the
  // superset rule applied to a control. Picking in either moves both, because a rail
  // reading EN above a footer reading DE is two controls with one name.
  function setLang(code) { langCur = code; langSubs.forEach(function (f) { f(code); }); }

  function langControl() {
    var wrap = el('div', 'wf-lang-wrap');
    var btn = el('button', 'wf-rail-lang');
    btn.type = 'button';
    var abbr = el('span', 'wf-lang-ab', 'EN');
    var full = el('span', 'wf-lang-full', 'English');
    btn.appendChild(abbr);
    btn.appendChild(full);
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    var pop = el('div', 'wf-lang-pop');
    var list = el('div', 'wf-lang-list');
    list.setAttribute('role', 'group');
    list.setAttribute('aria-label', 'Language');
    var opts = LANGS.map(function (L) {
      var o = el('button', 'wf-lang-opt', L[1]);
      o.type = 'button';
      o.appendChild(el('span', 'wf-lang-code', L[0].toUpperCase()));
      o.addEventListener('click', function () { setLang(L[0]); setOpen(false); btn.focus(); });
      list.appendChild(o);
      return o;
    });
    pop.appendChild(list);
    pop.appendChild(el('span', 'wf-fig-missing',
      'English is the only one that does anything. The other eight switch this control and leave the interface in English: round 1 ships one language, the page stays lang="en", and the product carries no hreflang until real translations arrive.'));

    function paint(code) {
      abbr.textContent = code.toUpperCase();
      var name = 'English';
      LANGS.forEach(function (L, i) {
        var on = L[0] === code;
        if (on) name = L[1];
        opts[i].classList.toggle('is-on', on);
        if (on) { opts[i].setAttribute('aria-current', 'true'); }
        else { opts[i].removeAttribute('aria-current'); }
      });
      full.textContent = name;
      btn.setAttribute('aria-label', 'Language, ' + name);
      btn.setAttribute('data-lbl', 'Language: ' + name);
    }
    langSubs.push(paint);
    paint(langCur);

    function setOpen(on) {
      wrap.classList.toggle('is-open', on);
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    }
    btn.addEventListener('click', function () { setOpen(!wrap.classList.contains('is-open')); });
    wrap.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
    wrap.appendChild(btn);
    wrap.appendChild(pop);
    return wrap;
  }

  // The reserved social row. Which channels are ours in round 1 is [?], owner founder,
  // so the count is a reserved set rather than a guess at which networks.
  function socialSet() {
    var box = el('div', 'wf-foot-soc');
    var nav = el('nav', 'wf-rail-soc-row');
    nav.setAttribute('aria-label', 'Social');
    for (var i = 0; i < 6; i++) {
      var a = el('a', 'wf-rail-ico');
      a.href = '#';
      a.setAttribute('rel', 'external nofollow');
      a.setAttribute('aria-label', 'Social channel, set not decided');
      nav.appendChild(a);
    }
    box.appendChild(nav);
    box.appendChild(el('span', 'wf-fig-missing', 'Which channels are ours in round 1 is not decided'));
    return box;
  }

  // THE ACCOUNT CONTROL OPENS A MENU RATHER THAN NAVIGATING, 0.1 section 5, added by
  // founder decision on 19 August 2026 from the baseline capture. The control keeps its
  // route target as the menu's first row, so nothing reachable becomes unreachable.
  // SEVEN ROWS SINCE D-36, AND STILL ONLY THE ONES THE MAP HOLDS. Until 20 August 2026
  // there were four: the reference menu carried PROFILE, SETTINGS and HISTORY, no node
  // held any of them, and a row for a page nobody specified is the dead item defect
  // inside a menu. The founder closed that gap on the map's side rather than on the
  // menu's, so 5.9 Roll history, 5.10 Profile and 5.11 Settings are nodes now and these
  // rows are live items. Two of the three carry no parent and say so on the map.
  // Sign out is a control rather than a destination.
  // HOVER IS NOT THE ONLY WAY IN. The reference opens on hover, which excludes touch
  // entirely and the keyboard almost entirely. Hover, click, Enter and Space open it;
  // Escape, a click outside and focus leaving close it.
  function accountControl() {
    var wrap = el('div', 'wf-acct-wrap');
    var btn = el('button', 'wf-btn wf-acct');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-controls', 'wf-acct-menu');
    btn.appendChild(el('span', 'wf-avatar'));
    btn.appendChild(el('span', 'wf-acct-name wf-hide-narrow', 'Spectacle'));

    var menu = el('div', 'wf-acct-menu');
    menu.id = 'wf-acct-menu';
    var nav = el('nav', null);
    nav.setAttribute('aria-label', 'Account');
    [['My items', 'account.html'], ['Roll history', 'history.html'],
     ['Withdrawals', 'withdraw.html'], ['Profile', 'profile.html'],
     ['Settings', 'settings.html'], ['Responsible play', 'responsible.html']].forEach(function (r) {
      var a = el('a', null, r[0]);
      a.href = BASE + r[1];
      nav.appendChild(a);
    });
    menu.appendChild(nav);
    var out = el('button', 'wf-linklike wf-acct-out', 'Sign out');
    out.type = 'button';
    menu.appendChild(out);

    wrap.appendChild(btn);
    wrap.appendChild(menu);

    function set(open) {
      wrap.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    // HOVER IS CSS AND THE STATE IS JS, and separating them is not tidiness. Bound as
    // two JS handlers, hover opened the menu and the click that followed it toggled the
    // same flag straight back to closed, so the control appeared dead to a mouse. Hover
    // is a pointer affordance with no state behind it, `:hover` shows the panel and
    // nothing is recorded; click, Enter and Space set `is-open`, which is also the only
    // thing `aria-expanded` reports, because hover is not a state a screen reader has.
    btn.addEventListener('click', function () {
      set(btn.getAttribute('aria-expanded') !== 'true');
    });
    wrap.addEventListener('focusout', function (e) {
      if (!wrap.contains(e.relatedTarget)) set(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('is-open')) { set(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) set(false);
    });
    return wrap;
  }

  function renderShell(host) {
    if (!host) return;
    var cfg = shellCfg();

    var nav = el('nav', 'wf-rail');
    nav.id = 'wf-rail';
    nav.setAttribute('aria-label', 'Destinations');
    // The logo is an asset, and stage 06 draws it. What this stage owes it is the SPACE
    // it will occupy, at the top of the rail, which is where the baseline keeps it.
    // Drawn as a wordmark on one line it read as a heading rather than as a brand slot.
    var logo = el('a', 'wf-rail-logo' + (cfg.active === 'index.html' ? ' is-current' : ''));
    logo.href = BASE + 'index.html';
    logo.setAttribute('aria-label', 'CS2 Clutch, home');
    if (cfg.active === 'index.html') logo.setAttribute('aria-current', 'page');
    logo.appendChild(el('span', 'wf-logo-mark', 'Logo'));
    nav.appendChild(logo);
    railItems().forEach(function (it) {
      if (it.divider) { nav.appendChild(el('span', 'wf-rail-div')); return; }
      var a = el('a', 'wf-rail-item' + (it.file === cfg.active ? ' is-current' : ''));
      // A SLOT, not an icon. The grey contract defers icons to stages 06 to 08, and a
      // destination whose icon has no reserved space gets one bolted on later, which
      // moves every label in the carrier on the day it arrives.
      a.appendChild(el('span', 'wf-rail-ico'));
      a.appendChild(el('span', 'wf-rail-lbl', it.label));
      // THE TOOLTIP IS THE LABEL, not a second string. 0.1 section 7 gives the collapsed
      // rail "icons with the active indicator, labels gone, tooltips on hover and on
      // focus", and a tooltip that says something the expanded rail does not say would
      // be a second name for one destination, which the superset rule forbids.
      a.setAttribute('data-lbl', it.label);
      a.href = BASE + it.file;
      if (it.file === cfg.active) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
    // The foot of the rail, as the baseline runs it: the ambient controls and the
    // social links, below the destinations and separated from them. This is also where
    // the sound control finally has a home: it was in the header with no parent and no
    // room at 360px, and 0.1 records that the header is for money and the account.
    var foot = el('div', 'wf-rail-foot');

    // THE ORDER IS THE ANSWER TO A QUESTION, NOT A LAYOUT PREFERENCE. Sound and
    // language are controls of the session in progress. The social links are an exit
    // from the product. A control used inside does not sit below a link that leads
    // out, and on mobile the drawer scrolls, so the lowest row is the hardest to
    // reach and belongs to what is needed least. The baseline runs the same order.
    var amb = el('div', 'wf-rail-amb');
    var snd = el('button', 'wf-btn wf-rail-snd', 'Sound on');
    snd.setAttribute('data-lbl', 'Sound on');
    snd.type = 'button';
    snd.setAttribute('aria-pressed', 'true');
    amb.appendChild(snd);
    // ONE LANGUAGE, LOCKED IN CLAUDE.md. Not a switcher: it states the language and
    // carries no menu, because a picker with one option is a dead control. It shares
    // the row with the sound control but NOT its affordance: no border, no press
    // state, so the half that acts and the half that reports do not look alike.
    // A REAL CONTROL SINCE D-41, and the reason is the baseline rather than a
    // preference: the live product has a switcher, the carrier is inherited, and a
    // carrier is filled with live items rather than deferred. WHAT IT DOES NOT DO IS
    // IMPLY A TRANSLATION. Round 1 ships one language, D-02 is untouched, and the
    // absence is printed inside the control instead of drawn as eight dead rows.
    var lang = langControl();
    lang.setAttribute('aria-label', 'Language: English. One language, so no switcher');
    amb.appendChild(lang);
    foot.appendChild(amb);

    var soc = el('div', 'wf-rail-soc');
    soc.setAttribute('aria-label', 'Social');
    soc.appendChild(el('span', 'wf-rail-soc-h', 'Social'));
    var socRow = el('div', 'wf-rail-soc-row');
    for (var si = 0; si < 6; si++) socRow.appendChild(el('span', 'wf-rail-ico'));
    soc.appendChild(socRow);
    foot.appendChild(soc);
    nav.appendChild(foot);

    // A MENU ICON AND NOT A CHEVRON, founder capture of 20 August 2026, and Material
    // says the same thing: "the expanded navigation rail should always open from a menu
    // icon". A chevron names a direction; this control names what is behind it, and it
    // is the same glyph the mobile header uses for the same job, so one control reads as
    // one control at every width.
    var toggle = el('button', 'wf-rail-toggle', '\u2261');
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'wf-rail');
    nav.appendChild(toggle);

    // THE COLLAPSED RAIL IS A STATE 0.1 ALREADY SPECIFIES AND NOTHING HAD DRAWN:
    // "icons with the active indicator, labels gone, tooltips on hover and on focus",
    // and Material's "collapsed and expanded transform into each other from the menu
    // button". IT IS NEVER HIDDEN ON DESKTOP, which is what separates this from the
    // mobile drawer: below 900 the same rail is modal and the header's menu opens it.
    var COLLAPSE_KEY = 'wf-rail-collapsed';
    function applyRail(on) {
      document.documentElement.classList.toggle('is-rail-collapsed', on);
      toggle.setAttribute('aria-expanded', on ? 'false' : 'true');
      toggle.setAttribute('aria-label', on ? 'Expand the rail' : 'Collapse the rail');
    }
    var stored = false;
    try { stored = sessionStorage.getItem(COLLAPSE_KEY) === '1'; } catch (e) {}
    applyRail(stored);
    toggle.addEventListener('click', function () {
      var on = !document.documentElement.classList.contains('is-rail-collapsed');
      applyRail(on);
      // The choice survives a click through the prototype. That is scaffolding
      // convenience and not a product claim: nothing in 0.1 says the state persists.
      try { sessionStorage.setItem(COLLAPSE_KEY, on ? '1' : '0'); } catch (e) {}
    });

    var head = el('header', 'wf-header');
    var menu = el('button', 'wf-menu', '\u2261');
    menu.type = 'button';
    menu.setAttribute('aria-controls', 'wf-rail');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Destinations');
    head.appendChild(menu);

    var right = el('div', 'wf-row');
    if (cfg.account) {
      // ORDER, AND IT IS THE NODE'S: "the account control, the two figures, the deposit
      // control". Rendered the other way round, money first and the account last, which
      // is also the reverse of the baseline capture the founder specified this zone from.
      right.appendChild(accountControl());

      // THE TWO FIGURES ARE ONE STACKED BLOCK, NOT A ROW. 0.1 section 5 has said upper
      // and lower since it was written, and the state matrix says "two lines" on desktop
      // and "one line each" on mobile. They shipped side by side with a vertical hairline
      // between them. The hairline existed to stop a reader adding them by eye, rule 2,
      // never summed and never a total; stacked, that job is carried by weight and by
      // caption instead, because TWO FIGURES OF EQUAL WEIGHT IN A COLUMN IS A RECEIPT.
      // EACH FIGURE CARRIES ITS OWN ROUTE, and the routes are not the same one: balance
      // to 4.1 and value of items held to 5.1. 0.11 rule 1, a route or it does not ship.
      // Coins, D-28, which reversed C1 and printed a pattern of 7 as its cost. The peg
      // is deliberately NOT here: the header is a persistent carrier rather than a spend
      // moment, and a conversion rate on screen at all times is wallpaper.
      var money = el('div', 'wf-money');
      [['74.20 coins', 'Balance', 'deposit.html', 'wf-money-1'],
       ['18.60 coins', 'Value of items held', 'account.html', 'wf-money-2']].forEach(function (f) {
        var d = el('a', 'wf-fig wf-fig-a ' + f[3]);
        d.href = BASE + f[2];
        d.setAttribute('aria-label', f[1] + ', ' + f[0]);
        d.appendChild(el('span', 'wf-fig-v', f[0]));
        d.appendChild(el('span', 'wf-fig-c', f[1]));
        money.appendChild(d);
      });
      right.appendChild(money);

      // A SINGLE COMPACT ADD CONTROL BESIDE THE FIGURES, which is the node's own wording
      // and the baseline's own shape. NO BADGE: the capture welds a green 5 per cent onto
      // it, and rule 4 blocks any first-deposit bonus in round 1 behind a model that does
      // not exist yet. The shape is taken, the promotion welded onto it is not.
      var dep = el('a', 'wf-btn wf-dep', '+');
      dep.href = BASE + 'deposit.html';
      dep.setAttribute('aria-label', 'Deposit');
      right.appendChild(dep);
    } else {
      var si = el('a', 'wf-btn', 'Sign in');
      si.href = BASE + 'signin.html';
      right.appendChild(si);
    }
    // NO SOUND CONTROL HERE. It moved to the foot of the rail on 19 August 2026, D-29,
    // which is where the baseline keeps it and where it stops competing for a header
    // that 0.1 fixes at one row on mobile.
    head.appendChild(right);

    host.appendChild(nav);
    host.appendChild(head);

    // The modal drawer contract, 0.1 section 6, all three dismissals: selecting an item,
    // tapping the scrim, and the keyboard's way out. The scrim is created on open and
    // removed on close rather than kept in the document, so nothing invisible sits over
    // the screen at desktop width where the drawer does not exist.
    var scrim = null;
    function closeDrawer() {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      if (scrim) { scrim.remove(); scrim = null; }
      menu.focus();
    }
    function openDrawer() {
      nav.classList.add('is-open');
      menu.setAttribute('aria-expanded', 'true');
      scrim = el('div', 'wf-scrim');
      scrim.addEventListener('click', closeDrawer);
      document.body.appendChild(scrim);
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    }
    menu.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeDrawer(); else openDrawer();
    });
    // Selecting a destination dismisses it. The link still navigates; this is for the
    // case where the destination is the page you are already on.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('is-open')) closeDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) closeDrawer();
    });
  }

  /* THE FOOTER SPENDS NO HEADINGS. Its column labels are text, and each column's name
     is carried by its own <nav aria-label>, which is what a screen reader announces
     anyway. Node 1.0 section 8B makes the H2 list the block order and the check
     mechanical, so four H2s injected by a global would break that check on every page
     in the product rather than on the one where it was noticed.

     0.2 THE FOOTER, FOUR BANDS. Node 0.2 section 3 specifies bands, not a link row.
     It was drawn as four figures plus five links plus one line, which is band 1, a
     fifth of band 2, and none of bands 3 and 4. The founder put the live footer in
     front of this stage on 18 August 2026 and the gap is structural rather than
     visual: the fourth column is the compliance divergence and it was missing whole. */
  // 0.2 THE FOOTER. THREE FULL BLEED BANDS, EACH WITH ITS CONTENT AT THE SAME MAX
  // WIDTH AS THE PAGE ABOVE IT. The band paints edge to edge and .wf-fin holds the
  // content, which is the only way a band can carry its own surface and still line up
  // with the columns above. Until 20 August 2026 the whole app was capped at 1440 and
  // pinned to the LEFT, so a wide monitor got a dead strip on the right instead of a
  // centred page: the cap was there and the centring was not.
  //   Band 1 the statistics strip, band 2 the columns and the interlinking row,
  //   band 3 the trust row and the fine print.
  function renderFooter(host) {
    if (!host) return;
    var accBtns = [];

    function band(cls) {
      var b = el('div', 'wf-fband' + (cls ? ' ' + cls : ''));
      var inner = el('div', 'wf-fin');
      b.appendChild(inner);
      host.appendChild(b);
      return inner;
    }

    // ---------------------------------------------------------------- BAND 1, stats.
    // Every figure that claims to be checkable carries its route, node 0.2 section 3.
    // Slot 2 is the founder's open recommendation and slot 4 ships only if it can count
    // humans in real time, section 2.
    // A ROUTE IS RENDERED, A PROCESS NOTE IS NOT. Each of these four once carried a
    // second italic line about why the slot is filled the way it is. Those belong in
    // footer.md, and in the lowest band of every page they put our backlog in front of
    // a visitor. The route survives where a figure claims to be checkable against
    // something else, which is slot 1 alone.
    var b1 = band('wf-fband--stats');
    var stats = el('div', 'wf-foot-stats');
    [
      ['363 777 660', 'Cases opened', 'Checkable per case, against the observed rate on each case screen', 'catalogue.html'],
      ['1 h 40 m', 'Middle withdrawal time, from our own logs', null, 'withdrawal.html'],
      [null, 'Online now, if it can count humans in real time', null, null],
      [null, 'Aggregate tested return to player', null, null]
    ].forEach(function (f) {
      var d = el(f[3] ? 'a' : 'div', 'wf-fig wf-fig-ico' + (f[3] ? ' wf-fig-a' : ''));
      if (f[3]) { d.href = BASE + f[3]; }
      // A RESERVED ZONE FOR THE ICON rather than a glyph: stage 04 draws no icons, so
      // a slot already the right size means the icon arrives as an asset in a place
      // rather than as a new element in a finished row.
      var ic = el('span', 'wf-icon');
      ic.setAttribute('aria-hidden', 'true');
      d.appendChild(ic);
      // NOT WRAPPED IN A TEXT BOX: .wf-fig-ico is a grid whose icon spans three rows,
      // so the three spans are its direct children by contract. A wrapper here would
      // have collapsed the row span and it is a shared rule, used by 3.3 as well.
      d.appendChild(el('span', 'wf-fig-v' + (f[0] ? '' : ' wf-fig-missing'), f[0] || 'Not available'));
      d.appendChild(el('span', 'wf-fig-c', f[1]));
      if (f[2]) { d.appendChild(el('span', 'wf-fig-c wf-fig-route', f[2])); }
      stats.appendChild(d);
    });
    b1.appendChild(stats);

    // THE LINK COLUMNS ARE ACCORDIONS BELOW 900 AND FLAT ABOVE IT, one DOM for both.
    // footer.md requires each header to be a button carrying aria-expanded and
    // aria-controls rather than a styled div, and the links to be present in the DOM
    // at every width. The compliance lines stay outside every accordion, which is the
    // one rule in that node that holds at every width.
    var accId = 0;
    function accordion(hostEl, label, body) {
      accId += 1;
      var id = 'wf-acc-' + accId;
      var b = el('button', 'wf-foot-h');
      b.type = 'button';
      b.setAttribute('aria-expanded', 'true');
      b.setAttribute('aria-controls', id);
      b.appendChild(document.createTextNode(label));
      body.id = id;
      b.addEventListener('click', function () {
        b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      });
      hostEl.appendChild(b);
      hostEl.appendChild(body);
      accBtns.push(b);
      return body;
    }

    // ----------------------------------------------------------------- BAND 2, main.
    var b2 = band('wf-fband--main');
    var cols = el('div', 'wf-foot-cols');

    // COLUMN 1, the brand block, and it leads with the LOGO SLOT rather than with a
    // wordmark. The logo is an asset stage 06 draws; what this stage owes it is the
    // space it will occupy, at the size the live product gives it, so it arrives as an
    // image in a place rather than as a new element in a finished column.
    var c1 = el('div', 'wf-foot-col wf-foot-col--brand');
    var brand = el('a', 'wf-foot-logo');
    brand.href = BASE + 'index.html';
    brand.setAttribute('aria-label', 'CS2 Clutch, home');
    brand.appendChild(el('span', 'wf-logo-mark', 'Logo'));
    c1.appendChild(brand);
    // The about line. One sentence, and it is the promise this product is built on
    // rather than a description of the category.
    c1.appendChild(el('p', 'wf-foot-about', 'Every case shows the chance, the current value and the tested return before you open it. Every round can be checked after it.'));
    var ident = el('p', 'wf-foot-ident');
    ident.appendChild(el('span', 'wf-fig-missing', 'Operating company, registration number and registered address not available'));
    c1.appendChild(ident);
    // Need help sits with the brand block because an appeal route is a way to reach us.
    // An outlined pill rather than a text link: G4 requires an appeal with a published
    // deadline and Article 5(c) requires rapid contact, and neither is served by a link
    // that looks like a policy.
    var help = el('div', 'wf-foot-help');
    help.appendChild(el('p', 'wf-foot-h', 'Need help?'));
    var sup = el('a', 'wf-btn', 'Support');
    sup.href = BASE + 'support.html';
    help.appendChild(sup);
    c1.appendChild(help);
    cols.appendChild(c1);

    // FIVE LINK GROUPS IN FOUR TRACKS SINCE D-45, and the fourth track holds two.
    //
    // PLAY HOLDS ONE GAME BECAUSE THE PRODUCT HAS ONE. The LATER modes enter this
    // group as they ship, exactly as they enter the rail. A short list is the truth
    // about the round, and padding it with a route the map does not hold would be the
    // dead item defect one carrier down.
    //
    // CASES IS THE CURATED FEW, and its rows are the four cases this prototype actually
    // holds, the same four Home draws. WHICH CASES BELONG HERE IS A MERCHANDISING
    // DECISION, not a design one: it is printed as open rather than answered by picking
    // four names that look plausible.
    //
    // HELP CARRIES PROVABLY FAIR AND THE CONTACT ROUTE. Provably fair moved here from
    // Play at the founder's request: a person looking for the proof is checking us, not
    // choosing a mode.
    // THERE IS NO FAQ ROW AND THAT IS NOT AN OVERSIGHT. sitemap.md cut the baseline's
    // FAQ on an argument rather than on scope: its two load bearing jobs, the age
    // control and the geo statement, moved to 2.1 and 6.1, and the residue went to 0.10.
    // A row for it would be a carrier promising a destination the map does not hold.
    // The absence is printed in the group so the founder can reverse it deliberately.
    //
    // PLAY RESPONSIBLY SITS UNDER HELP RATHER THAN BESIDE IT, founder, D-45, and this
    // is stacking rather than merging. IT KEEPS ITS OWN HEADING, its own accent bar and
    // its own list; what it shares is a grid track, which is a layout fact rather than
    // a taxonomy one. The distinction is the whole answer to the question asked before
    // it: MERGED, self exclusion becomes a row under a support heading, which reframes
    // a compliance instrument as customer service. STACKED, it is still the titled
    // section the baseline does not have at all, baseline.md section 6.
    // The literal wording of CLAUDE.md's rule, "holds each in its own column", is bent
    // by this and that is said out loud in D-45 rather than reasoned away: what the
    // rule protects, a titled section that is nobody's subheading, is intact.
    [
      [['Play', [['Cases', 'catalogue.html']],
        'One game in round 1. The other modes enter this column as they ship.']],
      [['Cases', [['All cases', 'catalogue.html'], ['Ironbound', 'case.html'],
                  ['Warsteel', 'case.html'], ['Coldfront', 'case.html'],
                  ['Nightfall', 'case.html']],
        'Which cases belong here is a merchandising decision and it is not made.']],
      [['Company', [['Terms of use', 'legal.html'], ['Privacy policy', 'legal.html'],
                    ['Cookie policy', 'legal.html'], ['Refund and payments policy', 'legal.html']]]],
      [['Help', [['Provably fair', 'fair.html'], ['Contact support', 'support.html']],
        'No FAQ page: its jobs live on the geo gate, on Responsible play and in Support.'],
       ['Play responsibly', [['Responsible play', 'responsible.html'],
                             ['Where we operate', 'markets.html']]]]
    ].forEach(function (track) {
      var c = el('div', 'wf-foot-col' + (track.length > 1 ? ' wf-foot-col--stack' : ''));
      track.forEach(function (col) {
        var nav = el('nav', 'wf-foot-list');
        nav.setAttribute('aria-label', col[0]);
        col[1].forEach(function (r) { var a = el('a', null, r[0]); a.href = BASE + r[1]; nav.appendChild(a); });
        if (col[2]) { nav.appendChild(el('span', 'wf-fig-missing wf-foot-hole', col[2])); }
        accordion(c, col[0], nav);
      });
      cols.appendChild(c);
    });

    // Cookie settings is a CONTROL, not a link, and the only control in that column:
    // GDPR Article 7(3), withdrawing consent must be as easy as giving it, and a
    // banner shown once is not a route back.
    var ck = el('button', 'wf-linklike', 'Cookie settings');
    ck.type = 'button';
    cols.children[3].querySelector('.wf-foot-list').appendChild(ck);

    // THE BRAND ART SLOT, founder request of 20 August 2026. It carries no information
    // and it says so: it is a reserved place for stage 06, the same kind of object as
    // the logo slot above it. BECAUSE IT CARRIES NOTHING IT IS THE FIRST THING TO GO,
    // and it goes when the column can no longer hold seven rather than competing with
    // five columns of real routes.
    var art = el('div', 'wf-foot-art');
    art.setAttribute('aria-hidden', 'true');
    art.appendChild(el('span', 'wf-foot-art-l', 'Brand art, stage 06'));
    cols.appendChild(art);
    b2.appendChild(cols);

    // The interlinking row. The baseline has none, this one is ours, and its CONTENTS
    // are [?] on purpose: the categories are 3.1's to decide and real query volumes
    // belong to production. Writing a plausible list now is model memory.
    var seo = el('div', 'wf-foot-seo');
    var seoBody = el('div', 'wf-foot-list');
    seoBody.appendChild(el('span', 'wf-fig-missing',
      'Not available: the catalogue category structure is decided on 3.1 and the query volumes belong to production'));
    accordion(seo, 'Links to priority indexed pages', seoBody);
    b2.appendChild(seo);

    // ----------------------------------------------------------------- BAND 3, base.
    // THE COMPLIANCE LINES ARE HERE AND NOT IN A COLUMN, which is what node 0.2 has
    // said since it was written: "the compliance line moved out of its own band and
    // into the bottom row, and that is a promotion rather than a demotion. It now sits
    // beside the legal identity and the copyright, which is where a compliance
    // statement belongs and where a regulated operator puts it." The render had them
    // stacked inside column 4 instead, where they made that column three times the
    // height of every other one. NEVER AN ACCORDION: a statement a person has to open
    // is not a statement, and that is the one rule in this node that holds at every
    // width.
    var b3 = band('wf-fband--base');
    var trust = el('div', 'wf-foot-trust');

    // THE SOCIAL SET. This node owns it and the rail's drawer renders it from here
    // rather than keeping a second list. Which channels are ours in round 1 is [?],
    // owner founder, so the row draws the reserved set and prints the hole.
    var soc = el('div', 'wf-foot-soc');
    var socNav = el('nav', 'wf-rail-soc-row');
    socNav.setAttribute('aria-label', 'Social');
    for (var si = 0; si < 6; si++) {
      var sa = el('a', 'wf-rail-ico');
      sa.href = '#';
      sa.setAttribute('rel', 'external nofollow');
      sa.setAttribute('aria-label', 'Social channel, set not decided');
      socNav.appendChild(sa);
    }
    soc.appendChild(socNav);
    soc.appendChild(el('span', 'wf-fig-missing', 'Which channels are ours in round 1 is not decided'));
    trust.appendChild(soc);

    // THE AGE MARK IS A MARK AND NOT A GATE. The gate is two checkboxes at sign in,
    // D-26, and this states the rule rather than enforcing it. Drawing it as anything
    // pressable here would be a second age gate that lets a person past.
    var age = el('div', 'wf-foot-age');
    var mark = el('span', 'wf-age-mark', '18+');
    mark.setAttribute('aria-hidden', 'true');
    age.appendChild(mark);
    var ageTxt = el('div', 'wf-foot-age-t');
    ageTxt.appendChild(el('p', 'wf-compliance',
      'Over 18 only. Opening a case is a paid chance and never an investment. Set a deposit or session limit before you start, and a limit you set never carries a streak, a status or a score.'));
    ageTxt.appendChild(el('p', 'wf-compliance',
      'The market allowlist is closed by default: a market with no row is not launched rather than open. The list and the law it rests on are on Where we operate.'));
    age.appendChild(ageTxt);
    trust.appendChild(age);

    // THE LANGUAGE SITS ABOVE THE PAYMENT MARKS, founder, D-45, and it is its third
    // address in two days: band 4 by D-42, the brand column by D-43, here now. What
    // settles it is that this cell is already the page's meta corner - what we accept
    // as payment, and now what language you are reading. The brand column says who we
    // are; a preference of the session is not part of that answer.
    var pay = el('div', 'wf-foot-pay');
    pay.appendChild(langControl());
    var marks = el('ul', 'wf-marks');
    marks.setAttribute('aria-label', 'Payment methods');
    ['Card', 'Wallet', 'Crypto'].forEach(function (m) { marks.appendChild(el('li', null, m)); });
    marks.appendChild(el('li', 'wf-fig-missing', 'Provider list not available'));
    pay.appendChild(marks);
    trust.appendChild(pay);
    b3.appendChild(trust);

    var fine = el('div', 'wf-foot-fine');
    fine.appendChild(el('span', 'wf-fig-c', 'CS2 Clutch, working name. Copyright range not set'));
    fine.appendChild(el('span', 'wf-fig-c', 'Prices are in coins. What one coin is worth in real money is published wherever money is spent, D-28.'));
    b3.appendChild(fine);

    // Collapsed is a MOBILE default, not a state the desktop inherits. Above 900 the
    // lists are open and the button reads as the column label; below it they start
    // closed. The sync runs on load and on resize so narrowing the browser, which is
    // how this project checks mobile, produces the mobile state rather than a desktop
    // state at a phone width.
    function syncAcc() {
      var wide = window.matchMedia('(min-width: 900px)').matches;
      accBtns.forEach(function (b) { b.setAttribute('aria-expanded', wide ? 'true' : 'false'); });
    }
    syncAcc();
    var wasWide = window.matchMedia('(min-width: 900px)').matches;
    window.addEventListener('resize', function () {
      var wide = window.matchMedia('(min-width: 900px)').matches;
      if (wide !== wasWide) { wasWide = wide; syncAcc(); }
    });
  }

  function renderBar(host) {
    if (!host) return;
    var cfg = shellCfg();
    host.setAttribute('aria-label', 'Shortcuts');
    barItems().forEach(function (it) {
      var a = el('a', it.file === cfg.active ? 'is-current' : null, it.label);
      a.href = BASE + it.file;
      if (it.file === cfg.active) a.setAttribute('aria-current', 'page');
      host.appendChild(a);
    });
  }

  // THE COMMIT BAR, and it exists because sticky cannot do what the node asks for.
  // 3.3 section 14: "The commit block BECOMES STICKY ONCE IT SCROLLS OUT OF VIEW, and
  // it sits directly above the mobile bar." `position: sticky` with `bottom` pins an
  // element while its normal position is still BELOW the threshold, so it holds a block
  // you are scrolling down towards and releases it the moment you pass it. It never
  // drags one down from above, which is precisely the case here. The behaviour is a
  // second, condensed carrier that appears when the real block leaves the screen.
  // WHAT MAY CONDENSE AND WHAT MAY NOT. The entry cost and the trigger are on it at
  // every moment, because "it never drops the entry cost to save the height" is the
  // node quoting design principle 3. The sentence explaining what the trigger will ask
  // for has already been read by the time this appears, so it is the part that goes.
  // Generic on purpose: 4.1 and 5.3 put a cost and a trigger in the same relationship.
  function mountCommitBar() {
    var src = document.querySelector('.wf-commit');
    if (!src || !window.IntersectionObserver) return;
    // THE CONDENSED BAR IS THE COMMIT BLOCK'S, and only the commit block's. Section 14
    // specifies it for the surface where money is about to be spent: the entry cost and
    // the trigger together at every scroll position. On phase 3 and on the interrupted
    // state the same selectors match a receipt and a "Keep it" route, and the bar would
    // mount over a control that is already on screen and never was a commit.
    // Phase 2 needs no opt-out: it has no primary trigger at all, because THE TRIGGER
    // DOES NOT RE-ARM during a reveal, and this returns on its own.
    if (src.hasAttribute('data-nobar')) return;
    var cost = src.querySelector('.wf-fig-v');
    var trigger = src.querySelector('.wf-btn--primary');
    if (!trigger) return;

    var bar = el('div', 'wf-commit-bar');
    bar.setAttribute('aria-hidden', 'true');
    // D-31 cut the standalone cost figure out of the commit block: the total now lives
    // on the trigger label and nowhere else. The bar follows rather than reinstating a
    // figure the block no longer has, because two places to read one number is how the
    // two drift apart. Where a figure does exist it is still carried.
    if (cost) { bar.appendChild(el('span', 'wf-commit-bar-v', cost.textContent)); }
    var t = el('span', 'wf-btn wf-btn--primary', trigger.textContent);
    bar.appendChild(t);
    document.querySelector('.wf-screen-body').appendChild(bar);

    // aria-hidden because it is a duplicate of a control that is still in the document
    // and still reachable. A screen reader meeting the same trigger twice is being told
    // there are two ways to spend, and there is one.
    // WHAT IS OBSERVED IS THE TRIGGER, NOT THE BLOCK, and that is what makes section
    // 14's requirement true rather than nearly true. It asks for the entry cost and the
    // trigger together on the first screen; at 360 the head, the stage and the cost fit
    // above the fold and the trigger lands about thirty pixels under it. Watching the
    // block, the bar stayed hidden because the block was partly in view, so the one
    // control the screen exists for was the thing below the line. The rule is now
    // literal: the trigger is on screen at every scroll position, as itself or as this
    // bar. The bottom margin is the mobile bar's own height, because a control behind a
    // fixed carrier is not visible however much of it intersects the viewport.
    // Measured on scroll rather than observed. An IntersectionObserver with a threshold
    // of 1 and a negative bottom margin expresses the same rule, and it reported the
    // trigger as visible while it sat 30px under the fixed bar: the callback fires on
    // threshold crossings, and a control that loads already outside the margin never
    // crosses anything. The rule here is a comparison, so it is written as one.
    var BAR_H = 56;
    var pending = false;
    function sync() {
      pending = false;
      var r = trigger.getBoundingClientRect();
      var visible = r.top >= 0 && r.bottom <= window.innerHeight - BAR_H;
      bar.classList.toggle('is-on', !visible);
    }
    function queue() { if (!pending) { pending = true; requestAnimationFrame(sync); } }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    sync();
  }

  window.WF_RENDER = { flows: renderFlows, coverage: renderCoverage, panel: renderPanel,
                       shell: renderShell, footer: renderFooter, bar: renderBar,
                       counts: function () { return { pages: allPages(), built: builtPages(), screens: WF.screens.length }; } };

  document.addEventListener('DOMContentLoaded', function () {
    // The hero counters are derived, never typed: a hardcoded 0 beside a registry
    // that says 2 is the drift this file exists to prevent.
    var b = document.getElementById('wf-built');
    if (b) b.textContent = String(builtPages());
    var t = document.getElementById('wf-total');
    if (t) t.textContent = String(allPages());
    renderFlows(document.getElementById('wf-flows'));
    renderCoverage(document.getElementById('wf-coverage'));
    renderPanel(document.getElementById('wf-panel'));
    renderShell(document.getElementById('wf-shell'));
    renderFooter(document.getElementById('wf-footer'));
    renderBar(document.getElementById('wf-bar'));
    mountCommitBar();
  });
})();
