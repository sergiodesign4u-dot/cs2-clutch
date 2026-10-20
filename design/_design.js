/* design/_design.js
 * The coloured copies of stage 06 render through wireframes/_nav.js, the one owner of
 * structure, text and states, D-191: a copy owns the visual layer and nothing else, so
 * it does not carry a second renderer. This file does the two things a copy needs that
 * the grey renderer cannot know about, and writes no markup of its own:
 *
 * 1. LINKS. A link to a screen that has a coloured copy in design/ opens the copy; every
 *    other link stays on the grey screen in wireframes/, the pack's rule for step 6.
 * 2. ART AND MARKS. The grey renderer draws placeholders. This file names each one with
 *    a data attribute read from the text the renderer already wrote (a skin name, a case
 *    name, a caption, a provider's label), and design/_theme.css paints it. No value lives here.
 */
(function () {
  // Screens with a coloured copy in design/. Grows with step 7.
  var COPIES = ['index.html', 'index-account.html'];

  var CASES = { Ironbound: 'case-blue', Warsteel: 'case-gold', Coldfront: 'case-pink', Nightfall: 'case-violet' };
  var SKINS = ['ak-47-elite-build', 'ak-47-gold-arabesque', 'ak-47-redline', 'awp-asiimov', 'awp-neo-noir',
    'desert-eagle-blaze', 'five-seven-case-hardened', 'glock-18-vogue', 'glock-18-water-elemental',
    'karambit-tiger-tooth', 'm4a1-s-hyper-beast', 'm4a4-the-emperor', 'mp9-goo', 'mp9-rose-iron', 'nova-koi',
    'p250-asiimov', 'p250-sand-dune', 'usp-s-kill-confirmed', 'usp-s-ticket-to-hell'];
  // The tier a drop names, onto the rarity step of DESIGN-artifacts.md section 3. The same
  // mapping the stand draws; which in-game tier each step names is still [?] there.
  var TIERS = { Covert: 'r2', Classified: 'r3', Restricted: 'r4', 'Mil-Spec': 'r5', 'Industrial Grade': 'r6', 'Consumer Grade': 'r7' };
  // A placeholder icon, by the words beside it.
  var ICONS = {
    'Cases opened': 'box', 'Upgrades': 'arrow-up', 'Total users': 'users', 'Online now': 'pulse',
    'Cases': 'box', 'Case battles': 'battle', 'Gunfights': 'target', 'Upgrade': 'arrow-up'
  };

  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function txt(root, sel) { var n = root && root.querySelector(sel); return n ? n.textContent.trim() : ''; }

  function relink(a) {
    var h = a.getAttribute('href');
    if (!h || h.indexOf('../wireframes/') !== 0) return;
    var rest = h.slice('../wireframes/'.length), file = rest.split(/[?#]/)[0];
    if (COPIES.indexOf(file) >= 0) a.setAttribute('href', rest);
  }

  function paint(root) {
    root.querySelectorAll('a[href]').forEach(relink);
    root.querySelectorAll('.wf-feed-i:not([data-tier])').forEach(function (li) {
      var hit = li.querySelector('.wf-feed-hit'), label = hit ? hit.getAttribute('aria-label') || '' : '';
      var tier = (label.split(', won by')[0].split(', ').pop() || '').trim();
      li.setAttribute('data-tier', '');
      if (TIERS[tier]) li.classList.add(TIERS[tier]);
      var s = slug(txt(hit, '.wf-feed-w') + ' ' + txt(hit, '.wf-feed-s')), art = hit && hit.querySelector('.wf-feed-art');
      if (art && SKINS.indexOf(s) >= 0) art.setAttribute('data-art', s);
      var back = li.querySelector('.wf-feed-tocase .wf-feed-art'), c = CASES[txt(li, '.wf-feed-tocase .wf-feed-w')];
      if (back && c) back.setAttribute('data-art', c);
    });
    root.querySelectorAll('.wf-tile').forEach(function (t) {
      var c = CASES[txt(t, '.wf-tile-name')], art = t.querySelector('.wf-tile-art');
      if (art && c) art.setAttribute('data-art', c);
    });
    root.querySelectorAll('.wf-banner-art').forEach(function (b) {
      var m = (txt(b.parentNode, '.wf-banner-line') || '').split(' ')[0];
      if (CASES[m]) b.setAttribute('data-art', CASES[m]);
    });
    root.querySelectorAll('.wf-mode').forEach(function (m) {
      var i = ICONS[txt(m, 'h3')], art = m.querySelector('.wf-mode-art');
      if (art && i) art.setAttribute('data-icon', i);
    });
    root.querySelectorAll('.wf-fig-ico').forEach(function (f) {
      var i = ICONS[txt(f, '.wf-fig-c')], ic = f.querySelector('.wf-icon');
      if (ic && i) ic.setAttribute('data-icon', i);
    });
    root.querySelectorAll('.wf-prov-i:not([data-icon])').forEach(function (i) {
      var t = (i.parentNode.textContent || '').toLowerCase(), k = ['steam', 'google', 'discord'].filter(function (n) { return t.indexOf(n) >= 0; })[0] || (t.trim() === 'x' ? 'x' : '');
      if (k) i.setAttribute('data-icon', k);
    });
    root.querySelectorAll('.wf-ladder li').forEach(function (li, n) { li.setAttribute('data-step', String(n + 1)); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    paint(document);
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(function () { paint(document); }, 30); })
      .observe(document.body, { childList: true, subtree: true });
  });
  // AFTER the renderer's own capture listener has turned a guest link into its account
  // twin, so the twin is what gets sent to its copy.
  document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('a[href]'); if (a) relink(a); });
})();
