/* design/v4/idle.js, performance pass of 4 Nov 2026. The founder: "если откріть в нескольких браузерах одноверменно на разних єкранах то
 * начинает подлагивать". The blocks below carry looping decoration (a light crossing a button, a burst behind a mode card, a live dot). While
 * no part of one is on screen it gets .v4-idle, and theme.css pauses its animations until it scrolls back; what is on screen never changes.
 * The blocks are found again after a short wait because wireframes/_nav.js and the v4 scripts render them after load. It also builds the header's
 * falling weapons as a layer the compositor slides, so they are painted once rather than every step, and opens a new drop's place in the live strip
 * by sliding its cards on `translate` rather than growing the card's width. Styles: theme.css. */
(function () {
  var SEL = '.wf-event, .wf-hero, .wf-grid .wf-mode, .v4-daily, .wf-sec, #wf-footer';
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { e.target.classList.toggle('v4-idle', !e.isIntersecting); });
  }, { rootMargin: '120px 0px' }) : null;
  var seen = new WeakSet();
  function scan() {
    Array.prototype.forEach.call(document.querySelectorAll(SEL), function (n) { if (io && !seen.has(n)) { seen.add(n); io.observe(n); } });
  }
  /* the header's falling weapons as a composited layer, theme.css THE FALLING WEAPONS ON THE COMPOSITOR */
  function fall() {
    var h = document.querySelector('.wf-header');
    if (!h || h.querySelector('.v4-fall')) return;
    var f = document.createElement('div'); f.className = 'v4-fall'; f.setAttribute('aria-hidden', 'true');
    f.innerHTML = '<i class="f"></i><i class="n"></i>';
    h.insertBefore(f, h.firstChild); h.classList.add('has-fall');
  }
  var scan0 = scan; scan = function () { scan0(); fall(); };
  /* a new drop: the row opens its place by sliding in from one card to the left, theme.css wf-feed-arrive. It wraps the hook rare.js
     set, which still dresses a rare card; additive, so two arrivals close together add up instead of cutting each other */
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, dress = window.WF_FEED_ARRIVED;
  window.WF_FEED_ARRIVED = function (li, plan) {
    if (dress) dress(li, plan);
    var run = li.parentElement;
    if (still || !run || !run.animate) return;
    /* each card slides on its own `translate`, not the row on `transform`: a transformed row is a stacking context, and for the 0.4s of every
       arrival it held the plasma card's z-index 31 inside itself, so the sticky header covered the flame and the card's top; founder of
       4 Nov 2026, "при движении скинов наш главний топ скин теперь плазма уходит под хедер". `translate` is applied outside each card's own
       transform, as the row's was, so the new card's swing and a shoved card's nudge are unchanged; cards past the strip's right edge stay still */
    var w = li.offsetWidth + (parseFloat(getComputedStyle(run).columnGap) || 0), edge = (run.parentElement || run).getBoundingClientRect().right;
    var kf = [{ translate: (-w) + 'px 0' }, { translate: '0 0' }], o = { duration: 405, easing: 'cubic-bezier(.22, .8, .3, 1)', composite: 'add' };
    Array.prototype.forEach.call(run.children, function (c) {
      if (c.getBoundingClientRect().left - w > edge) return;
      try { c.animate(kf, o); } catch (e) { c.animate(kf, { duration: o.duration, easing: o.easing }); }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  window.addEventListener('load', function () { scan(); setTimeout(scan, 800); setTimeout(scan, 2500); });
})();
