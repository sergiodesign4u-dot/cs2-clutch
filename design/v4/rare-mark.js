/* design/v4/rare-mark.js, a rare skin's mark by its chance, D-209, founder of 10 Nov 2026: "A для 5 %, B для 2.5 % и для 1 % C". Styles and
   the reasons: rare-mark.css. V4Rare.tier(chance) answers 'a', 'b', 'c' or null; V4Rare.mark(host, chance, ringIn) puts the one mark on a
   card (case-open.js, the band and the reels) or a live drop (rare.js), the ring inside ringIn where the host keeps its hexagon apart.
   Each mark starts at its own point in its loop, so two rare cards side by side never flicker in step. */
(function () {
  function tier(ch) { ch = parseFloat(ch); return !(ch > 0) ? null : ch <= 1 ? 'c' : ch <= 2.5 ? 'b' : ch <= 5 ? 'a' : null; }
  function mark(host, ch, ringIn, as) {
    var t = as || tier(ch);
    Array.prototype.forEach.call((ringIn && ringIn !== host ? [host, ringIn] : [host]), function (h) {
      Array.prototype.slice.call(h.children).forEach(function (n) { if (n.classList.contains('rm')) n.remove(); }); });
    host.classList.remove('rm-on', 'rm-a', 'rm-b', 'rm-c');
    if (!t) return null;
    host.classList.add('rm-on', 'rm-' + t);
    var s = document.createElement('span'), lag = (-Math.random() * 1.4).toFixed(2) + 's';
    s.setAttribute('aria-hidden', 'true'); s.style.animationDelay = lag;
    if (t === 'a') { s.className = 'rm rm-ring'; var i = document.createElement('i'); i.style.animationDelay = lag; s.appendChild(i); (ringIn || host).appendChild(s); }
    else if (t === 'b') { s.className = 'rm rm-loop rm-bolt'; host.appendChild(s); }
    else { s.className = 'rm rm-loop rm-fire'; host.insertBefore(s, host.firstChild); }
    return t;
  }
  window.V4Rare = { tier: tier, mark: mark };
})();
