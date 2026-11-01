/* design/v4/rare.js, the rare drops in v4's live drops, D-209. Founder of 1 Nov 2026: "4-5 обычных, а потом одна редкая, потом снова
   4-5 обычных и снова редкая ... темп сделать не прям такой одинаковый, а то быстренько раз раз, потом пауза и такой оп, снова выпал
   что-то. Все три редких дропа для демонстрации показываем, просто между ними 4-6 обычные".
   It answers wireframes/_nav.js's two hooks: WF_FEED_PACE says what arrives next and how long until the one after, WF_FEED_ARRIVED
   dresses a rare tile once it is placed. Ordinary drops come in runs of one to three close together, 450 to 800ms apart, then a pause
   of 1.6 to 3.8s; four to six of them, a held breath of 2.6 to 3.5s, then a rare one, which keeps the strip to itself for 4.2 to 5.4s.
   The rare ones take turns, lightning, golden orbit, plasma. Their rows and chances are samples, D-124. */
(function () {
  var RARE = [
    { fx: 'volt', chance: '2.40%', r: 'r2', row: ['M4A4', 'The Emperor', 'Nightfall', false, false, '', ['Factory New', 'Covert'], '86.20'] },
    { fx: 'orbit', chance: '0.42%', r: 'r2', row: ['AK-47', 'Gold Arabesque', 'Warsteel', false, false, '', ['Factory New', 'Covert'], '412.00'] },
    { fx: 'plasma', chance: '0.008%', r: 'r1', crown: true, row: ['★ Karambit', 'Tiger Tooth', 'Coldfront', false, false, '', ['Factory New', 'Covert'], '1 940.00'] }
  ];
  function between(a, b) { return a + Math.random() * (b - a); }
  var left = 4 + Math.floor(Math.random() * 3), run = 0, turn = 0;

  window.WF_FEED_PACE = function () {
    if (left === 0) { var r = RARE[turn++ % RARE.length]; left = 4 + Math.floor(Math.random() * 3); run = 0; return { row: r.row, rare: r, wait: between(4200, 5400) }; }
    left--;
    if (run <= 0) run = 1 + Math.floor(Math.random() * 3);
    run--;
    return { row: null, wait: left === 0 ? between(2600, 3500) : (run > 0 ? between(450, 800) : between(1600, 3800)) };
  };

  // rare.css lifts a live rare card over the sticky header only while the page is at its top
  function scrolled() { document.documentElement.classList.toggle('v4-scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', scrolled, { passive: true }); scrolled();

  function el(tag, cls, text) { var n = document.createElement(tag); n.className = cls; if (text != null) n.textContent = text; n.setAttribute('aria-hidden', 'true'); return n; }
  window.WF_FEED_ARRIVED = function (li, plan) {
    var r = plan && plan.rare; if (!r || !window.RDFX) return;
    li.classList.add('v4-rare', 'v4-rare-' + r.fx, r.r);
    var bg = el('span', 'v4-rare-bg');
    if (r.fx === 'orbit') bg.appendChild(el('span', 'v4-rare-rays'));
    bg.appendChild(el('span', 'v4-rare-chance', r.chance));
    if (r.crown) bg.appendChild(el('span', 'v4-rare-crown'));
    li.insertBefore(bg, li.firstChild);
    var fx = r.fx === 'plasma' ? null : el('canvas', 'v4-rare-fx'), fire, sparks;
    if (r.fx === 'plasma') { fire = el('canvas', 'v4-rare-fire'); li.insertBefore(fire, li.firstChild); li.appendChild(el('span', 'v4-rare-eq')); sparks = el('canvas', 'v4-rare-sparks'); li.appendChild(sparks); }
    else li.appendChild(fx);
    li.appendChild(el('span', 'v4-rare-flash')); li.appendChild(el('span', 'v4-rare-wave'));
    if (fire) { window.RDFX.fire(fire, false); window.RDFX.sparks(sparks); } else window.RDFX[r.fx](fx, 8);
    // the hit lands as the arrival settles, on its own animationend so the swing is never cut short
    var hit = false;
    function land() { if (hit) return; hit = true;
      // one rare card burns at a time: the one before calms to its lit frame, and its canvases go, which stops their loops
      Array.prototype.forEach.call(document.querySelectorAll('.v4-rare.is-live'), function (o) {
        o.classList.remove('is-live'); o.classList.add('is-calm');
        Array.prototype.forEach.call(o.querySelectorAll('canvas'), function (c) { c.remove(); }); });
      li.classList.add('is-hit', 'is-live');
      [li.nextElementSibling, li.nextElementSibling && li.nextElementSibling.nextElementSibling].forEach(function (n) {
        if (!n) return; n.classList.add('v4-shoved'); setTimeout(function () { n.classList.remove('v4-shoved'); }, 650); });
    }
    li.addEventListener('animationend', function (e) { if (e.target === li && e.animationName === 'wf-feed-arrive') land(); });
    setTimeout(land, 1400); // in case the arrival did not animate
  };
})();
