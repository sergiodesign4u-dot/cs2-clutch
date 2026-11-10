/* design/v4/rare.js, the rare drops in v4's live drops, D-209. Founder of 1 Nov 2026: "4-5 обычных, а потом одна редкая, потом снова
   4-5 обычных и снова редкая ... темп сделать не прям такой одинаковый, а то быстренько раз раз, потом пауза и такой оп, снова выпал
   что-то. Все три редких дропа для демонстрации показываем, просто между ними 4-6 обычные".
   It answers wireframes/_nav.js's two hooks: WF_FEED_PACE says what arrives next and how long until the one after, WF_FEED_ARRIVED
   dresses a rare tile once it is placed. Ordinary drops come in runs of one to three close together, 450 to 800ms apart, then a pause
   of 1.6 to 3.8s; four to six of them, a held breath of 2.6 to 3.5s, then a rare one, which keeps the strip to itself for 4.2 to 5.4s.
   The rare ones take turns, lightning, golden orbit, plasma. Their rows and chances are samples, D-124.
   Since 10 Nov 2026 every drop's running mark is its chance's, rare-mark.js; see WF_FEED_ARRIVED. */
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
    var r = plan && plan.rare; if (!r) return;
    li.classList.add('v4-rare', 'v4-rare-' + r.fx, r.r);
    var bg = el('span', 'v4-rare-bg');
    // no turning rays behind it since 10 Nov 2026, founder: "переборщил с анимациями, там и огонь и свечение такое из центра крутится":
    // the mark by its chance is the one thing that moves on a rare drop
    bg.appendChild(el('span', 'v4-rare-chance', r.chance));
    if (r.crown) bg.appendChild(el('span', 'v4-rare-crown'));
    li.insertBefore(bg, li.firstChild);
    if (r.fx === 'plasma') li.appendChild(el('span', 'v4-rare-eq'));
    /* ITS MARK BY ITS CHANCE, founder of 10 Nov 2026: "я бы сделал так же и для live feed такие же анимации" as rare-lab.html's, A at 5 %
       or less, B at 2.5 % or less, C at 1 % or less (rare-mark.js). They take the place of the lightning and the plasma drawn live on
       canvases round the card, which painted every frame on every page that shows the strip; the arrival, the hit, the wave, the chance
       and the crown stay as they were */
    if (window.V4Rare) window.V4Rare.mark(li, r.chance, li.querySelector('.wf-feed-hit'));
    li.appendChild(el('span', 'v4-rare-flash')); li.appendChild(el('span', 'v4-rare-wave'));
    // the hit lands as the arrival settles, on its own animationend so the swing is never cut short
    var hit = false;
    function land() { if (hit) return; hit = true;
      // one rare card is live at a time: the one before calms to its lit frame; its mark keeps running, as every marked drop's does
      Array.prototype.forEach.call(document.querySelectorAll('.v4-rare.is-live'), function (o) { o.classList.remove('is-live'); o.classList.add('is-calm'); });
      li.classList.add('is-hit', 'is-live');
      [li.nextElementSibling, li.nextElementSibling && li.nextElementSibling.nextElementSibling].forEach(function (n) {
        if (!n) return; n.classList.add('v4-shoved'); setTimeout(function () { n.classList.remove('v4-shoved'); }, 650); });
    }
    li.addEventListener('animationend', function (e) { if (e.target === li && e.animationName === 'wf-feed-arrive') land(); });
    setTimeout(land, 1400); // in case the arrival did not animate
  };

  /* EVERY DROP IN THE STRIP CARRIES ITS MARK, not only the rare three: a drop's chance in the case it came from. The strip's rows are
     wireframes/_nav.js FEED, keyed by their round; the three from Ironbound read Ironbound's table (case-open.js), the others are samples
     in the same spirit, D-124, as the rare rows above are. A drop at more than 5 % has no mark */
  var CH = { ak: 0.64, fglock: 14, fdeagle: 2.2, fawp: 1.8, fusp: 4.2, fm4: 3.6, fmp9: 21, fp250: 19, fawpnn: 1.4, fvulcan: 2.9, ffive: 6.8, fsg: 13 };
  function keyOf(li) { var a = li.querySelector('.wf-feed-hit'), m = a && /[?&]round=([a-z0-9]+)/.exec(a.getAttribute('href') || ''); return m ? m[1] : 'ak'; }
  function dress(li) {
    if (li.nodeType !== 1 || !li.classList.contains('wf-feed-i') || li.classList.contains('v4-rare') || li.hasAttribute('data-rm') || !window.V4Rare) return;
    li.setAttribute('data-rm', ''); window.V4Rare.mark(li, CH[keyOf(li)], li.querySelector('.wf-feed-hit'));
  }
  function watch() {
    var run = document.querySelector('.wf-feed-run'); if (!run) return false;
    Array.prototype.forEach.call(run.children, dress);
    new MutationObserver(function (ms) { ms.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, dress); }); }).observe(run, { childList: true });
    return true;
  }
  (function tryWatch(n) { if (!watch() && n < 20) setTimeout(function () { tryWatch(n + 1); }, 250); })(0);
})();
