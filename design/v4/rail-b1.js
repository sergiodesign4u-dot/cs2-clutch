/* design/v4/rail-b1.js, Home's rail as B1, founder of 2 Nov 2026. One thing only: "Not launched yet" printed once as the heading of the eight
 * rows that are not live, before the first of them. Each row keeps its own words for a screen reader, so the heading is hidden from one. */
(function () {
  function start() {
    var rail = document.querySelector('.wf-rail');
    if (!rail || rail.querySelector('.v4-rail-sec')) return;
    var first = rail.querySelector('.wf-rail-item.is-later');
    if (!first) return;
    var sec = document.createElement('div');
    sec.className = 'v4-rail-sec';
    sec.setAttribute('aria-hidden', 'true');
    sec.innerHTML = '<span>Not launched yet</span>';
    first.parentNode.insertBefore(sec, first);
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
