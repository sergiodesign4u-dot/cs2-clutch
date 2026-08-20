/* Root navigation registry and renderer.
   Single source of truth for the project roadmap. Every html page in the project
   renders its sidebar from this file and never inlines a roadmap of its own.

   Page contract:
     <link rel="stylesheet" href="<BASE>_nav.css">
     <aside id="sidebar"></aside>
     <script>window.NAV_BASE='../';</script>          depth to repo root ('' at root)
     <script>window.NAV_SECTIONS=[{id,label},...];</script>   optional, own sections
     <script>window.NAV_ACTIVE='research/research.html';</script>  optional, pages outside the registry
     <script>window.NAV_ACTIVE_LABEL='Node 2.1 Case';</script>     optional, how to name that sub-item
     <script src="<BASE>_nav.js"></script>

   Inner panels. A satellite whose NAV_ACTIVE is a hub with a registered sibling list
   does not render the roadmap at all. It renders an INNER panel: the siblings of that
   hub and nothing else, with the current one marked, its own sections nested under it,
   and two ways back, the hub itself and the roadmap in the brand block. One hub has an
   inner panel today: ia/structure.html, whose siblings are the detail-layer nodes
   registered in ia/_nav.js as window.IA_NAV.

   Why a replacement rather than a branch inside the roadmap: twelve stages plus
   twenty six nodes in one panel is a list nobody scans. Standing inside the detail
   layer, the only list that helps is the detail layer. The registry stays in
   ia/_nav.js and is never copied here: this file reads it if it is present and falls
   back to the roadmap with a single satellite item if it is not.

   Two manual flags, and they are not the same question.
     done: true   the page is FINISHED. It drives the Next badge and the stage count.
     live: true   the page EXISTS and is reachable, while the stage is still in work.
   done was carrying both meanings and the second one lost: a stage in progress had a
   hub, two built screens and no way in from anywhere else in the project. A reader
   who cannot open the thing cannot check it.
   active / Next / SOON / accordion / relative links are computed at render time. */

window.NAV = [
  { label: 'Foundation Research', pageLabel: 'Research', page: 'research/research.html', done: true },

  { label: 'User Research', children: [
      { label: 'Personas',   page: 'research/personas.html',   done: true },
      { label: 'JTBD',       page: 'research/jtbd.html',       done: true },
      { label: 'CJM As-Is',  page: 'research/cjm-as-is.html',  done: true  },
      { label: 'CJM To-Be',  page: 'research/cjm-to-be.html',  done: true  }
  ]},

  { label: 'Information Architecture (IA)', children: [
      { subhead: 'Base layer', items: [
          { label: 'Flows',       page: 'ia/flows.html',        done: true  },
          { label: 'Concept map', page: 'ia/concept-map.html',  done: true  }
      ]},
      { subhead: 'Detail layer', items: [
          { label: 'Sitemap',   page: 'ia/sitemap.html',   done: true  },
          { label: 'Structure', page: 'ia/structure.html', done: true  }
      ]}
  ]},

  // live: the hub and its first screens exist, so the stage is reachable while it is
  // still in work. done stays false, so the Next badge stays here rather than moving on.
  { label: 'Wireframes',         pageLabel: 'Overview',  page: 'wireframes/overview.html', done: false, live: true },
  { label: 'Voice',              pageLabel: 'Voice',     page: 'voice/voice.html',         done: false },

  { label: 'Concept', children: [
      { label: 'Directions', page: 'design/concept/directions.html', done: false },
      { label: 'Concept',    page: 'design/concept/concept.html',    done: false }
  ]},

  { label: 'UI + Visual',        pageLabel: 'Overview',  page: 'design/overview.html',     done: false },
  { label: 'Tokens + Components', pageLabel: 'Overview', page: 'design/kit/overview.html', done: false },
  { label: 'Design System',      pageLabel: 'Why',       page: 'design/kit/why.html',      done: false },
  { label: 'Responsive',         page: null,                       done: false },
  { label: 'Animation',          page: null,                       done: false },
  { label: 'Handoff',            page: null,                       done: false }
];

(function () {
  var host = document.getElementById('sidebar');
  if (!host) return;

  var BASE = typeof window.NAV_BASE === 'string' ? window.NAV_BASE : '';
  var REG = window.NAV;

  function leavesOf(stage) {
    if (stage.children) {
      var out = [];
      stage.children.forEach(function (c) {
        if (c.items) { c.items.forEach(function (i) { out.push(i); }); }
        else { out.push(c); }
      });
      return out;
    }
    return stage.page ? [stage] : [];
  }

  function currentPath() {
    if (window.NAV_ACTIVE) return window.NAV_ACTIVE;
    var depth = (BASE.match(/\.\.\//g) || []).length + 1;
    var p = location.pathname;
    if (p.charAt(p.length - 1) === '/') { p += 'index.html'; }
    var parts = p.split('/').filter(Boolean);
    return parts.slice(Math.max(0, parts.length - depth)).join('/');
  }

  var active = currentPath();
  var isSatellite = !!window.NAV_ACTIVE;

  // Next is computed by STAGE, not by page: the first stage that is not fully done.
  var nextIdx = -1;
  var meta = REG.map(function (s, i) {
    var lv = leavesOf(s);
    var doneCount = lv.filter(function (l) { return l.done; }).length;
    var complete = lv.length > 0 && doneCount === lv.length;
    var owns = lv.some(function (l) { return l.page === active; });
    if (!complete && nextIdx === -1) { nextIdx = i; }
    return { leaves: lv, doneCount: doneCount, complete: complete, owns: owns };
  });

  // Reachable is not the same as finished. A stage in work whose hub exists is linked,
  // and it still counts as incomplete for the Next badge.
  function reachable(leaf) { return !!(leaf.done || leaf.live); }

  function firstReachable(lv) {
    for (var i = 0; i < lv.length; i++) { if (reachable(lv[i])) return lv[i]; }
    return null;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function link(cls, leaf, label) {
    var a = el('a', cls, label || leaf.label);
    a.href = BASE + leaf.page;
    return a;
  }

  function badge(kind, text) {
    return el('span', 'nav-badge nav-badge-' + kind, text);
  }

  function sectionsBlock() {
    var secs = window.NAV_SECTIONS;
    if (!secs || !secs.length) return null;
    var wrap = el('div', 'nav-sections');
    secs.forEach(function (s) {
      var a = el('a', 'nav-section', s.label);
      a.href = '#' + s.id;
      a.setAttribute('data-section', s.id);
      wrap.appendChild(a);
    });
    return wrap;
  }

  // The current file on disk, which is what tells a satellite which sibling it is.
  // NAV_ACTIVE points at the hub, so it cannot answer this and must not be used for it.
  function currentFile() {
    var p = location.pathname;
    return p.substring(p.lastIndexOf('/') + 1) || 'index.html';
  }

  // Sibling lists, keyed by the hub the satellite declares. One entry today.
  var SIBLINGS = {
    // The wireframes hub. onHub means the list also renders on the hub page itself,
    // where the roadmap sidebar otherwise offers no way into a screen at all.
    // Only BUILT pages are listed: sixty three dim rows in a sidebar is the wall the
    // accordion rule exists to prevent, and the coverage map in the content already
    // answers "what is still owed".
    'wireframes/overview.html': {
      dir: 'wireframes/',
      back: 'All screens, the hub',
      title: 'Built screens',
      onHub: true,
      registry: function () { return window.WF_NAV && window.WF_NAV.screens; },
      rows: function () {
        var out = [];
        (window.WF_NAV.screens || []).forEach(function (sc) {
          var pages = [{ label: sc.base, file: sc.file, status: sc.status, isBase: true }]
            .concat(sc.states || []);
          pages.forEach(function (p) {
            if (p.status !== 'built') return;
            out.push({ node: sc.node, label: sc.name + (p.isBase ? '' : ', ' + p.label.replace(/^\d\.\d\s*/, '')), file: p.file, done: true });
          });
        });
        return out;
      }
    },
    'ia/structure.html': {
      dir: 'ia/',
      back: 'Structure, the chip index',
      title: 'Detail layer nodes',
      registry: function () { return window.IA_NAV; },
      groups: [
        { key: 'global', title: 'Global elements' },
        { key: 'pages',  title: 'Pages' }
      ]
    }
  };

  function siblingBlock(hub) {
    var cfg = SIBLINGS[hub];
    if (!cfg) return null;
    var reg = cfg.registry();
    if (!reg || !reg.length) return null;

    var cur = currentFile();
    var wrap = el('div', 'nav-siblings');
    var matched = false;

    // Flat form: the config supplies its own rows, already normalised.
    if (cfg.rows) {
      var flat = cfg.rows();
      if (!flat.length) return null;
      flat.forEach(function (n) {
        var isCur = n.file === cur;
        if (isCur) matched = true;
        var row = el('a', 'nav-sibling' + (isCur ? ' is-current' : ''));
        row.href = BASE + cfg.dir + n.file;
        if (isCur) row.setAttribute('aria-current', 'page');
        row.appendChild(el('span', 'nav-sibling-n', n.node));
        row.appendChild(el('span', 'nav-sibling-l', n.label));
        wrap.appendChild(row);
      });
      return wrap;
    }
    cfg.groups.forEach(function (g) {
      var rows = reg.filter(function (n) { return n.group === g.key; });
      if (!rows.length) return;
      wrap.appendChild(el('div', 'nav-siblings-head', g.title));
      rows.forEach(function (n) {
        var isCur = n.file === cur;
        if (isCur) matched = true;
        var row;
        if (n.done) {
          row = el('a', 'nav-sibling' + (isCur ? ' is-current' : ''));
          row.href = BASE + cfg.dir + n.file;
          if (isCur) row.setAttribute('aria-current', 'page');
        } else {
          row = el('span', 'nav-sibling is-soon');
        }
        row.appendChild(el('span', 'nav-sibling-n', n.node));
        row.appendChild(el('span', 'nav-sibling-l', n.label));
        wrap.appendChild(row);
        if (isCur) {
          var sb = sectionsBlock();
          if (sb) wrap.appendChild(sb);
        }
      });
    });

    // A satellite of the hub that is not one of its siblings, a critique page for one,
    // still gets the list. It names itself above it rather than disappearing from it.
    if (!matched) {
      var own = el('div', 'nav-siblings-own');
      own.appendChild(satelliteItem());
      var sbOwn = sectionsBlock();
      if (sbOwn) own.appendChild(sbOwn);
      wrap.insertBefore(own, wrap.firstChild);
    }
    return wrap;
  }

  function satelliteItem() {
    var a = el('a', 'nav-subitem nav-link is-current', window.NAV_ACTIVE_LABEL || document.title);
    a.href = '#';
    a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo(0, 0); });
    return a;
  }

  var root = el('div', 'nav-roadmap');

  var brand = el('div', 'nav-brand');
  brand.appendChild(el('strong', null, 'CS2 Clutch'));
  brand.appendChild(el('span', null, 'Product design pipeline'));
  // Root level pages: they belong to no stage and are reachable from every page.
  [
    { label: 'Project roadmap', page: 'index.html' },
    { label: 'Decision records', page: 'docs/decisions.html' }
  ].forEach(function (r) {
    var a = el('a', 'nav-home' + (r.page === active && !isSatellite ? ' is-current' : ''), r.label);
    a.href = BASE + r.page;
    brand.appendChild(a);
  });
  root.appendChild(brand);

  // INNER PANEL. Standing inside a hub's world, the roadmap is not what helps.
  // The panel replaces it with that hub's own list and two ways back out: the hub
  // itself, and the roadmap link that is already in the brand block above.
  var innerCfg = isSatellite ? SIBLINGS[active] : null;
  var innerList = innerCfg ? siblingBlock(active) : null;
  if (innerList) {
    root.className = 'nav-roadmap nav-inner';

    var back = el('a', 'nav-inner-back', innerCfg.back);
    back.href = BASE + active;
    root.appendChild(back);

    if (innerCfg.title) root.appendChild(el('div', 'nav-inner-title', innerCfg.title));
    root.appendChild(innerList);
    host.appendChild(root);
    mountChrome();
    return;
  }

  // A page outside the roadmap still shows its own sections, at root level.
  if (!meta.some(function (m) { return m.owns; })) {
    var sbRoot = sectionsBlock();
    if (sbRoot) root.appendChild(sbRoot);
  }

  REG.forEach(function (stage, i) {
    var m = meta[i];
    var cls = 'nav-item';
    if (m.owns) cls += ' is-active';
    if (m.complete) cls += ' is-done';
    else if (m.doneCount > 0) cls += ' is-partial';
    else if (i !== nextIdx) cls += ' is-soon';
    // A stage you can actually open reads as open. A link that is styled like a
    // disabled item is a link nobody clicks, which is the same defect as no link.
    if (i === nextIdx && m.leaves.some(reachable)) cls += ' is-live';

    var item = el('div', cls);
    var head;

    // Collapsed: every stage that is not the one we are standing on.
    if (!m.owns) {
      var target = firstReachable(m.leaves);
      if (target) {
        head = link('nav-top nav-link', target, stage.label);
      } else {
        head = el('span', 'nav-top', stage.label);
      }
      item.appendChild(head);
      if (i === nextIdx) item.appendChild(badge('next', 'Next'));
      else if (!m.complete) item.appendChild(badge('soon', 'SOON'));
      root.appendChild(item);
      return;
    }

    // Expanded: the active stage only.
    var isGroup = !!stage.children;
    if (isGroup) {
      head = el('span', 'nav-top', stage.label);
      item.appendChild(head);
      if (i === nextIdx) item.appendChild(badge('next', 'Next'));

      var sub = el('div', 'nav-sub');
      stage.children.forEach(function (c) {
        if (c.items) {
          sub.appendChild(el('div', 'nav-subhead', c.subhead));
          c.items.forEach(function (leaf) { sub.appendChild(leafRow(leaf)); });
        } else {
          sub.appendChild(leafRow(c));
        }
      });
      item.appendChild(sub);
    } else {
      head = link('nav-top nav-link' + (isSatellite ? '' : ' is-current'), stage, stage.label);
      item.appendChild(head);
      if (i === nextIdx) item.appendChild(badge('next', 'Next'));
      if (isSatellite) {
        var sub2 = el('div', 'nav-sub');
        sub2.appendChild(satelliteItem());
        var sb = sectionsBlock();
        if (sb) sub2.appendChild(sb);
        item.appendChild(sub2);
      } else {
        var sb2 = sectionsBlock();
        if (sb2) item.appendChild(sb2);
        // A hub that declares onHub shows its own list here, because the roadmap
        // sidebar otherwise offers no route into anything the hub is a hub for.
        var hub = SIBLINGS[active];
        if (hub && hub.onHub) {
          var hubList = siblingBlock(active);
          if (hubList) {
            var wrapHub = el('div', 'nav-sub');
            if (hub.title) wrapHub.appendChild(el('div', 'nav-subhead', hub.title));
            wrapHub.appendChild(hubList);
            item.appendChild(wrapHub);
          }
        }
      }
    }
    root.appendChild(item);

    function leafRow(leaf) {
      var frag = document.createDocumentFragment();
      var current = leaf.page === active;
      var row;
      if (reachable(leaf) || current) {
        row = link('nav-subitem nav-link' + (current && !isSatellite ? ' is-current' : ''), leaf);
      } else {
        row = el('span', 'nav-subitem is-soon', leaf.label);
        row.appendChild(badge('soon', 'SOON'));
      }
      frag.appendChild(row);
      if (current) {
        if (isSatellite) frag.appendChild(satelliteItem());
        var sb3 = sectionsBlock();
        if (sb3) frag.appendChild(sb3);
      }
      return frag;
    }
  });

  host.appendChild(root);
  mountChrome();

  // The off-canvas toggle and the section observer are the same on every panel, so
  // they live in one function that both the inner panel and the roadmap call once.
  function mountChrome() {
  // Mobile: the panel is off-canvas below 900px and needs a way in.
  var toggle = el('button', 'nav-toggle', '☰');
  toggle.setAttribute('aria-label', 'Toggle navigation');
  var scrim = el('div', 'nav-scrim');
  document.body.appendChild(toggle);
  document.body.appendChild(scrim);
  function setOpen(v) {
    host.classList.toggle('is-open', v);
    scrim.classList.toggle('is-open', v);
  }
  toggle.addEventListener('click', function () { setOpen(!host.classList.contains('is-open')); });
  scrim.addEventListener('click', function () { setOpen(false); });
  host.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.innerWidth < 900) setOpen(false);
  });

  // Section highlighting inside the current page.
  var marks = host.querySelectorAll('.nav-section[data-section]');
  if (marks.length && 'IntersectionObserver' in window) {
    var byId = {};
    marks.forEach(function (a) { byId[a.getAttribute('data-section')] = a; });
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
      var first = null;
      Object.keys(byId).forEach(function (id) { if (!first && seen[id]) first = id; });
      marks.forEach(function (a) {
        a.classList.toggle('is-current', a.getAttribute('data-section') === first);
      });
    }, { rootMargin: '-10% 0px -70% 0px' });
    Object.keys(byId).forEach(function (id) {
      var t = document.getElementById(id);
      if (t) io.observe(t);
    });
  }
  }
})();
