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
    var t = document.querySelector('.wf-drops');
    if (t && !t.hasAttribute('data-v4')) {
      t.setAttribute('data-v4', ''); t.setAttribute('data-v', q.get('table') || 'a');
      Array.prototype.forEach.call(t.querySelectorAll('tbody'), function (tb) {
        var tier = (tb.getAttribute('aria-label') || '').split(',')[0];
        tb.classList.add(TIER[tier] || 'r5');
        Array.prototype.forEach.call(tb.querySelectorAll('tr:not(.wf-tier-h)'), function (tr) {
          var w = tr.querySelector('.wf-d-weapon'), s = tr.querySelector('.wf-d-skin'), art = tr.querySelector('.wf-art-c');
          if (!w || !s) return;
          tr.classList.add('v4b-row', TIER[tier] || 'r5');
          if (art) art.appendChild(img(w.textContent, s.textContent));
        });
      });
    }
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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dress); else dress();
  window.addEventListener('load', dress);
})();
