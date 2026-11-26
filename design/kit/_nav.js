/* design/kit/_nav.js: THE ONE REGISTRY OF THE STAND'S PAGES, stage 08 step 4. Nothing else lists them.
 *
 * It draws two things that must never disagree: the stand's own panel on every page of design/kit/ (no roadmap here; the way out is the
 * first row, "Design process") and the cards of the hub, design/kit/overview.html. Groups follow the component ladder, never purpose:
 * System, Foundations, then Atoms, Molecules and Organisms, which step 5 adds in that order, bottom up as the @import runs, and Check at
 * step 9. A page carries this file in its <head>, so the theme it was left in is set before the first paint.
 *
 * The theme switch writes data-theme on <html>: dark is the product's own (:root of tokens.css), light the pair of D-258. The choice is
 * kept in this browser only.
 *
 * Own namespace on purpose, KIT_NAV, KIT_SECTIONS and kp-* / kc-*: the root file owns NAV, NAV_BASE, NAV_SECTIONS and nav-*.
 */
(function () {
  var KEY = 'kit-theme', root = document.documentElement;
  function readTheme() { try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; } catch (e) { return 'dark'; } }
  function setTheme(t) {
    if (t === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var bs = document.querySelectorAll('.kp-theme button');
    for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', String(bs[i].getAttribute('data-t') === t));
  }
  if (readTheme() === 'light') root.setAttribute('data-theme', 'light');

  window.KIT_NAV = {
    groups: [
      { label: 'System', pages: [
        { file: 'overview.html', label: 'Overview', about: 'The hub: every page of the stand as a card.' } ] },
      { label: 'Foundations', pages: [
        { file: 'architecture.html', label: 'Architecture', mini: 'arch',
          about: 'The rules first: the ladder of tokens and the ladder of components, how roles are named, what a component reads, the two folders, the five things a component needs.' },
        { file: 'color.html', label: 'Colour', mini: 'color',
          about: 'Every role in the dark and the light theme side by side, the contrast of every role in both, and the whole primitive palette with its origins.' },
        { file: 'typography.html', label: 'Typography', mini: 'type',
          about: 'One family in four weights, the seventeen sizes the product sets, tracking, line height and the measure, each in the product\'s own words.' },
        { file: 'geometry.html', label: 'Geometry and motion', mini: 'geom',
          about: 'Space shown as space and corners as corners, the sizes of controls and of the shell, the breakpoints, and motion as it stands.' },
        { file: 'icons.html', label: 'Icons and art', mini: 'icons',
          about: 'The glyph set at working sizes in the roles\' colours, the payment and provider marks, and the 55 pictures of art.css.' },
        { file: 'depth.html', label: 'Depth and surface', mini: 'depth',
          about: 'Every shadow, gradient, blur, filter and clip shape on a tile, with the roles that read them (D-259).' } ] },
      // Components by level, bottom up as index.css imports them; inside a level, subgroups by purpose only order this panel (step 5 estimate)
      { label: 'Atoms', level: 1, pages: [
        { file: 'button.html', label: 'Button', sub: 'Acts', css: 'components/button.css', states: 'hover, active, focus-visible, disabled; busy',
          screens: 'all eight coloured screens', round: 0,
          about: 'The act of a zone and its second act, a glyph tile, a dialog\'s close. The reference of step 5: the four states and the component tokens were decided on it.',
          miniHtml: '<span class="button button--primary button--m">Open</span><span class="button button--ghost button--m">Sign in</span>' } ] }
    ]
  };

  function here() { var p = location.pathname.split('/').pop(); return p || 'overview.html'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function panel() {
    var cur = here(), h = [];
    h.push('<a class="kp-out" href="../../index.html">&larr; Design process</a>');
    h.push('<div class="kp-head"><span class="kp-badge">Design system</span><span class="kp-sub">tokens and components</span><a class="kp-all" href="overview.html">Whole system &rarr;</a></div>');
    h.push('<div class="kp-theme" role="group" aria-label="Theme"><button type="button" data-t="dark">Dark</button><button type="button" data-t="light">Light</button></div>');
    h.push('<nav class="kp-tree" aria-label="The stand">');
    window.KIT_NAV.groups.forEach(function (g, gi) {
      var open = g.pages.some(function (p) { return p.file === cur; }), lastSub = null;
      h.push('<div class="kp-group' + (open ? ' is-open' : '') + '"><button type="button" class="kp-gh" aria-expanded="' + open + '" aria-controls="kp-g' + gi + '">' + esc(g.label) + ' <span class="kp-n">' + g.pages.length + '</span></button><div class="kp-pages" id="kp-g' + gi + '">');
      g.pages.forEach(function (p) {
        var is = p.file === cur;
        if (p.sub && p.sub !== lastSub) { h.push('<span class="kp-sub-h">' + esc(p.sub) + '</span>'); } lastSub = p.sub;
        h.push('<a class="kp-page' + (is ? ' is-current' : '') + '" href="' + p.file + '"' + (is ? ' aria-current="page"' : '') + '>' + esc(p.label) + '</a>');
        if (is && window.KIT_SECTIONS && window.KIT_SECTIONS.length) {
          h.push('<div class="kp-secs">' + window.KIT_SECTIONS.map(function (s) { return '<a class="kp-sec" href="#' + s.id + '">' + esc(s.label) + '</a>'; }).join('') + '</div>');
        }
      });
      h.push('</div></div>');
    });
    h.push('</nav><div class="kp-foot"><a href="../overview.html">&larr; Product (all screens)</a><a href="../concept/concept.html">Product language (Concept) &#8599;</a></div>');
    var aside = document.createElement('aside'); aside.className = 'kp'; aside.id = 'kit-panel'; aside.setAttribute('aria-label', 'Design system'); aside.innerHTML = h.join('');
    var scrim = document.createElement('div'); scrim.className = 'kp-scrim';
    var tog = document.createElement('button'); tog.type = 'button'; tog.className = 'kp-toggle'; tog.setAttribute('aria-controls', 'kit-panel'); tog.setAttribute('aria-expanded', 'false');
    tog.innerHTML = '<span aria-hidden="true">&#9776;</span> Design system';
    document.body.insertBefore(scrim, document.body.firstChild); document.body.insertBefore(aside, scrim); document.body.insertBefore(tog, aside);
    function shut() { aside.classList.remove('is-open'); scrim.classList.remove('is-open'); tog.setAttribute('aria-expanded', 'false'); }
    tog.addEventListener('click', function () { aside.classList.add('is-open'); scrim.classList.add('is-open'); tog.setAttribute('aria-expanded', 'true'); });
    scrim.addEventListener('click', shut);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
    aside.addEventListener('click', function (e) {
      var b = e.target.closest('.kp-gh');
      if (b) { var g = b.parentNode, o = !g.classList.contains('is-open'); g.classList.toggle('is-open', o); b.setAttribute('aria-expanded', String(o)); return; }
      var t = e.target.closest('.kp-theme button'); if (t) { setTheme(t.getAttribute('data-t')); return; }
      if (e.target.closest('a')) shut();
    });
    setTheme(readTheme());
  }

  var MINI = {
    arch: '<i style="width:34px;height:22px;border-radius:5px;background:var(--bg-act)"></i><i style="width:34px;height:34px;border-radius:5px;background:var(--bg-card-deep);box-shadow:var(--line-edge-lit)"></i><i style="width:34px;height:48px;border-radius:5px;background:var(--bg-layer);box-shadow:var(--line-edge-lit)"></i>',
    color: ['--bg-page', '--bg-card', '--bg-tile', '--bg-act', '--bg-lit', '--text-money', '--bg-match', '--bg-rarity-3', '--bg-rarity-5', '--text-body'].map(function (v) { return '<i style="width:22px;height:60px;border-radius:5px;background:var(' + v + ');box-shadow:var(--line-edge)"></i>'; }).join(''),
    type: '<span style="font-weight:900;font-size:40px;line-height:1;color:var(--text-hi)">Aa</span><span style="display:grid;gap:4px;font-size:12px;line-height:1.2"><b style="color:var(--text-hi);text-transform:uppercase;font-size:13px;font-weight:900">Before you spend</b><span style="color:var(--text-body)">Tested RTP, in coins</span><span style="color:var(--text-money);font-weight:900">1 250</span></span>',
    geom: [4, 8, 12, 16, 24, 32].map(function (n) { return '<i style="width:' + n + 'px;height:' + n + 'px;background:var(--bg-lit);border-radius:2px"></i>'; }).join('') + '<i style="width:40px;height:40px;border:3px solid var(--text-hi);border-radius:12px 0 0 0;border-right:0;border-bottom:0;margin-left:10px"></i>',
    icons: ['box', 'battle', 'shield', 'steam', 'gift', 'crown', 'bolt', 'skull'].map(function (n) { return '<i class="kt-ic" style="--i:var(--icon-' + n + ');font-size:24px;color:var(--text-hi)"></i>'; }).join(''),
    depth: '<i style="width:44px;height:44px;border-radius:10px;background:var(--bg-card);box-shadow:var(--depth-card)"></i><i style="width:44px;height:44px;border-radius:10px;background:var(--bg-mode-cases);box-shadow:var(--line-lit-top)"></i><i style="width:44px;height:44px;border-radius:10px;background:var(--bg-fair);box-shadow:var(--depth-fair)"></i>'
  };
  function cards() {
    var box = document.getElementById('kit-cards'); if (!box) return;
    var h = [];
    window.KIT_NAV.groups.forEach(function (g) {
      g.pages.forEach(function (p) {
        if (p.file === 'overview.html') return;
        h.push('<a class="kc" href="' + p.file + '"><div class="kc-mini" aria-hidden="true">' + (p.miniHtml || MINI[p.mini] || '') + '</div><span class="kt-eyebrow">' + esc(g.label) + '</span><b>' + esc(p.label) + '</b><p>' + esc(p.about) + '</p></a>');
      });
    });
    box.innerHTML = h.join('');
    var inv = document.getElementById('kit-inventory'); if (!inv) return;
    var rows = [];
    window.KIT_NAV.groups.forEach(function (g) { if (!g.level) return; g.pages.forEach(function (p) {
      rows.push('<tr><td><a href="' + p.file + '">' + esc(p.label) + '</a></td><td class="n">' + g.level + '</td><td>' + esc(p.sub || '') + '</td><td><code>design/system/' + esc(p.css) + '</code></td><td>' + esc(p.states) + '</td><td>' + esc(p.screens) + '</td></tr>'); }); });
    inv.innerHTML = rows.join('');
  }
  function start() { panel(); cards(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
