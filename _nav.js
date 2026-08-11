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

   The only manual edit here is done:true when a page is finished.
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
          { label: 'Concept map', page: 'ia/concept-map.html',  done: false }
      ]},
      { subhead: 'Detail layer', items: [
          { label: 'Sitemap',   page: 'ia/sitemap.html',   done: false },
          { label: 'Structure', page: 'ia/structure.html', done: false }
      ]}
  ]},

  { label: 'Wireframes',         pageLabel: 'Overview',  page: 'wireframes/overview.html', done: false },
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

  function firstDone(lv) {
    for (var i = 0; i < lv.length; i++) { if (lv[i].done) return lv[i]; }
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

    var item = el('div', cls);
    var head;

    // Collapsed: every stage that is not the one we are standing on.
    if (!m.owns) {
      var target = firstDone(m.leaves);
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
      }
    }
    root.appendChild(item);

    function leafRow(leaf) {
      var frag = document.createDocumentFragment();
      var current = leaf.page === active;
      var row;
      if (leaf.done || current) {
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
})();
