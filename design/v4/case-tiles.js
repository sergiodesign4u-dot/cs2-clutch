/* design/v4/case-tiles.js, v4's case tiles, founder of 2 Nov 2026. Decoration only: the tile's own card that case-tiles.css raises
 * under the pointer, and the favourite's small burst. The link and its accessible name stay as they are, so the price in coins is still
 * read out; the favourite's toggling and its sign in for a guest stay with wireframes/_nav.js. */
(function () {
  var COLOURS = ['#FB3F8A', '#FFFFFF', '#FFC44D', '#65A3FF', '#FF8DBD'];
  var SHAPES = ['heart', 'heart', 'star', 'star', 'stroke'];
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rand(a, b) { return a + Math.random() * (b - a); }

  function start() {
    document.querySelectorAll('.wf-tile-link').forEach(function (link) {
      if (link.querySelector('.v4-fx')) return;
      var fx = document.createElement('span');
      fx.className = 'v4-fx';
      fx.setAttribute('aria-hidden', 'true');
      link.insertBefore(fx, link.firstChild);
    });
  }

  /* the favourite, "сердечки полосочки звездочки разних размеров и рандомно ... аккуратной и симпотичной": the heart pops, and nine small
     pieces of three kinds and three sizes leave it in random directions, travel 14 to 30px and fade within 0.7s. Only when it turns on,
     and not for whoever asked for less motion */
  function burst(btn) {
    var icon = btn.querySelector('.wf-fav-i');
    if (icon && icon.animate) icon.animate([{ scale: 1 }, { scale: 1.4 }, { scale: .92 }, { scale: 1 }], { duration: 420, easing: 'ease-out' });
    if (still || !icon) return;
    var box = document.createElement('span');
    box.className = 'v4-burst';
    box.setAttribute('aria-hidden', 'true');
    icon.parentNode.insertBefore(box, icon.nextSibling);
    var r = icon.getBoundingClientRect(), b = btn.getBoundingClientRect();
    box.style.left = (r.left - b.left + r.width / 2) + 'px';
    box.style.top = (r.top - b.top + r.height / 2) + 'px';
    for (var k = 0; k < 9; k++) {
      var i = document.createElement('i');
      var shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      var size = shape === 'stroke' ? 0 : [5, 7, 9][Math.floor(Math.random() * 3)];
      var angle = (k / 9) * Math.PI * 2 + rand(-.3, .3), dist = rand(14, 30);
      i.setAttribute('data-s', shape);
      i.style.setProperty('--bc', COLOURS[Math.floor(Math.random() * COLOURS.length)]);
      if (shape === 'stroke') { i.style.width = '2px'; i.style.height = Math.round(rand(6, 10)) + 'px'; }
      else { i.style.width = size + 'px'; i.style.height = size + 'px'; }
      var w = parseFloat(i.style.width), h = parseFloat(i.style.height);
      var turn = shape === 'stroke' ? (angle * 180 / Math.PI + 90) : rand(-40, 40);
      var x = Math.cos(angle) * dist, y = Math.sin(angle) * dist;
      box.appendChild(i);
      i.animate([
        { transform: 'translate(' + (-w / 2) + 'px,' + (-h / 2) + 'px) rotate(' + turn + 'deg) scale(.4)', opacity: 1, easing: 'cubic-bezier(.2, .7, .3, 1)' },
        { transform: 'translate(' + (x * .75 - w / 2) + 'px,' + (y * .75 - h / 2) + 'px) rotate(' + turn + 'deg) scale(1)', opacity: 1, offset: .5, easing: 'ease-in' },
        { transform: 'translate(' + (x - w / 2) + 'px,' + (y - h / 2) + 'px) rotate(' + turn + 'deg) scale(.6)', opacity: 0 }
      ], { duration: rand(560, 760), easing: 'linear', fill: 'forwards' }); /* the ease per leg: out and quick, then a slower fade */
    }
    setTimeout(function () { box.remove(); }, 800);
  }

  /* the risk, founder of 2 Nov 2026: four bolts as four marks, so each can strike on its own under the pointer, and a tooltip naming the
     band in the words the tile already carries for a screen reader. Both are decoration and hidden from one: the words stay the source */
  function bolts() {
    document.querySelectorAll('.wf-tile-risk').forEach(function (r) {
      if (r.querySelector('.v4-bolts')) return;
      var n = { low: 1, medium: 2, high: 3, extreme: 4 }[r.getAttribute('data-risk')] || 0;
      var row = document.createElement('span');
      row.className = 'v4-bolts';
      row.setAttribute('aria-hidden', 'true');
      for (var k = 0; k < 4; k++) {
        var i = document.createElement('i');
        if (k < n) i.className = 'is-on';
        i.style.setProperty('--k', k);
        row.appendChild(i);
      }
      var tip = document.createElement('span');
      tip.className = 'v4-risk-tip';
      tip.setAttribute('aria-hidden', 'true');
      tip.textContent = r.textContent.trim();
      r.appendChild(row);
      r.appendChild(tip);
    });
  }

  /* the tooltip opens on the bolts' right; where that would run past the page's main column, as on the last tile of a row, it opens on
     their left. Decided each time the pointer arrives, so a resized window is read fresh */
  document.addEventListener('pointerover', function (e) {
    var r = e.target.closest && e.target.closest('.wf-tile-risk');
    if (!r) return;
    var tip = r.querySelector('.v4-risk-tip');
    if (!tip) return;
    var box = (r.closest('.wf-main') || document.documentElement).getBoundingClientRect();
    var edge = Math.min(box.right, document.documentElement.clientWidth) - 8;
    var rb = r.getBoundingClientRect();
    tip.classList.toggle('is-left', rb.right + 10 + tip.offsetWidth > edge);
  });

  /* runs after _nav.js has flipped aria-pressed, so it bursts only on the way on */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.wf-tile .wf-fav');
    if (!btn) return;
    setTimeout(function () { if (btn.getAttribute('aria-pressed') === 'true') burst(btn); }, 0);
  });

  function all() { start(); bolts(); }
  if (document.readyState === 'complete') all();
  else window.addEventListener('load', all);
})();
