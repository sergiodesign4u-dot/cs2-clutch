/* design/v4/rare-drops.js, the exploration page of the rare drop, D-209: the tiers played once in a strip built as v4's live drops,
   and the earlier explorations looping in their own rows. The effects themselves are rare-fx.js. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, FX = window.RDFX;
  // the earlier rows: always on, looping in their own rows
  Array.prototype.forEach.call(document.querySelectorAll('.rd-fire-gl'), function (cv) { FX.fire(cv, false); });
  Array.prototype.forEach.call(document.querySelectorAll('.rd-volt-gl'), FX.voltOld);
  Array.prototype.forEach.call(document.querySelectorAll('.rd-arc-gl'), function (cv) { FX.volt(cv, 18); });

  /* THE STRIP. Founder: "появление делать один раз ... 3D появление и потом бамс с волной, а дальше оно идёт по ленте и просто горит".
     The strip opens full of ordinary drops; the rare one swings in at the left as every new drop does, lands with the hit, goes live, and
     three ordinary drops arrive after it and carry it down the strip, still alive. It plays once when first seen; Replay plays it again. */
  var POOL = [
    ['ak-47-redline', 'AK-47', 'Redline', 'r3'], ['awp-asiimov', 'AWP', 'Asiimov', 'r3'], ['glock-18-water-elemental', 'Glock-18', 'Water Elemental', 'r4'],
    ['usp-s-kill-confirmed', 'USP-S', 'Kill Confirmed', 'r3'], ['m4a1-s-hyper-beast', 'M4A1-S', 'Hyper Beast', 'r3'], ['desert-eagle-blaze', 'Desert Eagle', 'Blaze', 'r4'],
    ['mp9-rose-iron', 'MP9', 'Rose Iron', 'r5'], ['p250-asiimov', 'P250', 'Asiimov', 'r4'], ['awp-neo-noir', 'AWP', 'Neo-Noir', 'r3'], ['ak-47-vulcan', 'AK-47', 'Vulcan', 'r3'],
    ['five-seven-monkey-business', 'Five-SeveN', 'Monkey Business', 'r4'], ['sg-553-cyrex', 'SG 553', 'Cyrex', 'r5'], ['nova-koi', 'Nova', 'Koi', 'r5'], ['p250-sand-dune', 'P250', 'Sand Dune', 'r6']
  ];
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function deco(n) { n.setAttribute('aria-hidden', 'true'); return n; }
  function card(skin, w, s, r) {
    var d = el('div', 'rd-d ' + r), img = el('img'); img.src = '../concept/assets/skins/' + skin + '.png'; img.alt = '';
    d.appendChild(deco(el('span', 'rd-d-hex'))); d.appendChild(img); d.appendChild(el('b', null, w)); d.appendChild(el('span', 'rd-d-s', s));
    return d;
  }
  function rareCard(fx, chance, crown) {
    var d = card('karambit-tiger-tooth', '★ Karambit', 'Tiger Tooth', 'r1'); d.classList.add('is-rare');
    var bg = deco(el('span', 'rd-bg'));
    if (fx === 'orbit') bg.appendChild(el('span', 'rd-rays-in'));
    bg.appendChild(el('span', 'rd-chance-bg', chance));
    if (crown) bg.appendChild(el('span', 'rd-crown'));
    d.insertBefore(bg, d.firstChild);
    d.insertBefore(deco(el('span', 'rd-flash')), d.firstChild); d.insertBefore(deco(el('span', 'rd-wave')), d.firstChild);
    if (fx === 'plasma') { d.appendChild(deco(el('span', 'rd-eq'))); d.appendChild(deco(el('canvas', 'rd-spark-gl'))); }
    else d.appendChild(deco(el('canvas', 'rd-fx-gl')));
    if (fx === 'plasma') d.insertBefore(deco(el('canvas', 'rd-fire-out')), d.firstChild); // behind the plate, rising over the card
    return d;
  }
  function mount(d, fx) {
    if (fx === 'plasma') { FX.fire(d.querySelector('.rd-fire-out'), false); FX.sparks(d.querySelector('.rd-spark-gl')); }
    else FX[fx](d.querySelector('.rd-fx-gl'), 8);
  }
  Array.prototype.forEach.call(document.querySelectorAll('.rd-tier'), function (sec) {
    var sim = sec.querySelector('.rd-sim'), fx = sec.getAttribute('data-fx'), chance = sec.getAttribute('data-chance'), crown = sec.hasAttribute('data-crown');
    var strip = el('div', 'rd-sim-strip'), run = el('div', 'rd-sim-run'), replay = el('button', 'rd-replay', 'Replay'), timers = [], k = 0;
    replay.type = 'button';
    sim.appendChild(el('div', 'rd-sim-hdr')); strip.appendChild(run); sim.appendChild(strip); sim.appendChild(el('div', 'rd-sim-ban')); sim.appendChild(replay);
    function next() { var p = POOL[k++ % POOL.length]; return card(p[0], p[1], p[2], p[3]); }
    function arrive(d) { d.classList.add('is-new'); run.insertBefore(d, run.firstChild); while (run.children.length > 13) run.removeChild(run.lastChild); }
    function at(ms, f) { timers.push(setTimeout(f, ms)); }
    function play() {
      timers.forEach(clearTimeout); timers = []; run.innerHTML = ''; k = Math.floor(Math.random() * POOL.length);
      for (var i = 0; i < 12; i++) run.appendChild(next());
      var rare = rareCard(fx, chance, crown);
      if (still) { run.insertBefore(rare, run.children[2]); rare.classList.add('is-live'); mount(rare, fx); return; }
      at(500, function () { arrive(rare); mount(rare, fx); });
      at(1400, function () { rare.classList.remove('is-new'); rare.classList.add('is-hit', 'is-live');
        [1, 2].forEach(function (i) { var n = run.children[i]; if (n) { n.classList.add('is-shoved'); setTimeout(function () { n.classList.remove('is-shoved'); }, 650); } }); });
      [3800, 6200, 8600].forEach(function (ms) { at(ms, function () { arrive(next()); }); });
    }
    replay.addEventListener('click', play);
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); play(); } }, { threshold: .5 }); io.observe(sim); }
    else play();
  });

})();
