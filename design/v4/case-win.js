/* design/v4/case-win.js, what came out of a case in v4, node 3.6, D-209. One renderer for case.html and win-lab.html: the item at full
   stage with its own published chance above it (D-34), its name, wear, tier and value. Each row of the lab is a data-v on the host; the
   markup carries the parts every row needs (a back for the card that turns, the chance written large for the takeover), and css shows the
   ones its row uses. The top two tiers burn with the live drops' own effects, rare-fx.js. Figures are samples, D-124. */
(function () {
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function coins(v) { return v.toFixed(2) + '&nbsp;coins'; }
  var RANK = { r1: 7, r2: 6, r3: 5, r4: 4, r5: 3, r6: 2, r7: 1 };
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* host: the outcome layer; rs: the settled results; opts.sell: per-item sell buttons when more than one; opts.price: one open's cost */
  function render(host, rs, opts) {
    opts = opts || {};
    var best = rs.slice().sort(function (a, b) { return RANK[b.r] - RANK[a.r] || b.v - a.v; })[0];
    host.classList.remove('is-on');
    host.setAttribute('data-tier', best.r); host.setAttribute('data-count', rs.length); host.setAttribute('data-rank', RANK[best.r]);
    var h = '<div class="v4c-win-fx"><span class="v4c-flood"></span><span class="v4c-burst"></span><span class="v4c-ring"></span><span class="v4c-big">' + best.ch.toFixed(best.ch < .1 ? 3 : 2) + '%</span></div><div class="v4c-won-row">';
    rs.forEach(function (x, i) {
      h += '<div class="v4c-won ' + x.r + '" style="--i:' + i + '">' +
        '<span class="v4c-won-odds"><b>' + x.ch.toFixed(3) + ' %</b> chance on this case</span>' +
        '<span class="v4c-won-card"><span class="v4c-won-back" aria-hidden="true"></span><span class="v4c-won-face">' +
        '<span class="v4c-won-art"><span class="v4c-won-hex"></span><img src="' + x.art + '" alt=""></span>' +
        '<span class="v4c-won-name"><span class="v4c-won-w">' + esc(x.w) + '</span><b>' + esc(x.s) + '</b><span class="v4c-won-ax">' + esc(x.wear.split(' · ')[0]) + ' · ' + x.tier + '</span></span>' +
        '<span class="v4c-won-v">' + coins(x.v) + '</span>' +
        // its value against what one open cost, the multiplier hellcase prints on its top drops, here on every result, up or down
        (opts.price ? '<span class="v4c-won-x' + (x.v >= opts.price ? ' is-up' : '') + '">×' + (x.v / opts.price).toFixed(2) + ' of the price</span>' : '') +
        '</span></span>' +
        (rs.length > 1 && opts.sell ? '<button type="button" class="v4c-sell1 v4-btn v4-btn--s v4-btn--ghost">Sell<span class="v4c-sell1-v"> for ' + coins(x.v) + '</span></button>' : '') +
        '</div>';
    });
    host.innerHTML = h + '</div>';
    // the top two tiers: sparks for the first, the golden orbit for the second, behind the item, on rows B and C
    if (window.RDFX && RANK[best.r] >= 6 && !still && host.getAttribute('data-v') !== 'a') {
      var hold = document.createElement('div');
      hold.className = 'v4c-rare v4-rare is-live ' + (best.r === 'r1' ? 'v4-rare-plasma' : 'v4-rare-orbit');
      var cv = document.createElement('canvas'); cv.className = 'v4c-rare-cv'; hold.appendChild(cv);
      host.insertBefore(hold, host.firstChild.nextSibling);
      setTimeout(function () { try { if (best.r === 'r1') window.RDFX.sparks(cv); else window.RDFX.orbit(cv, 60); } catch (e) {} }, 60);
    }
    requestAnimationFrame(function () { requestAnimationFrame(function () { host.classList.add('is-on'); }); });
    return best;
  }
  window.V4Win = { render: render };
})();
