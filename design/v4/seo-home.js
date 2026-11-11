/* design/v4/seo-home.js, Home's SEO block "What opening a case here involves" as R1 on v4's Home, founder of 2 Nov 2026: "давай r1 поставим
 * на главную", on the Nightfall case. wireframes/ is frozen, so this works the way the daily ladder and Before you spend were ported:
 * wireframes/_nav.js renders Home's own section under #h2-about (B11, one H2 and one paragraph), and this script swaps its body for R1 once
 * it is there, and again if _nav.js renders it anew. The H2 and the paragraph are the wireframe's words, unchanged; the three quotes on the
 * plate repeat the paragraph and are hidden from a screen reader. The same renderer draws all four rows of seo-lab.html, window.V4Seo.render,
 * so the lab and Home cannot drift. Styles: seo-home.css. */
(function () {
  var ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var H2 = 'What opening a case here involves';
  var P = 'A case is a fixed set of CS2 skins with a published chance on each one. You pay its price in coins, one round decides the item, and you can keep it, sell it or send it to your Steam inventory. Every case shows its chances, its item values and its tested return before you open it, and every round can be checked afterwards.';

  /* o.base: the wireframes folder the links open in; o.id: the H2's id (#h2-about on Home); o.skin: the real skin in the case's tray */
  function render(o) {
    o = o || {};
    var base = o.base || '../../wireframes/', skin = o.skin || 'm4a1-s-hyper-beast';
    return '<div class="sx-h"><span class="sx-ic sx-ic--box" aria-hidden="true"></span><h2' + (o.id ? ' id="' + o.id + '"' : '') + '>' + H2 + '</h2></div>' +
      '<div class="sx-text"><p class="sx-p">' + P + '</p>' +
      '<ul class="sx-facts" aria-hidden="true"><li><span class="sx-tile"><span class="sx-ic sx-ic--pct"></span></span>A published chance on each one</li><li><span class="sx-tile"><span class="sx-ic sx-ic--target"></span></span>One round decides the item</li><li><span class="sx-tile is-ok"><span class="sx-ic sx-ic--shield"></span></span>Checked afterwards</li></ul>' +
      '<div class="sx-acts"><a class="v4-btn v4-btn--m sx-fair" href="' + base + 'fair.html"><span class="sx-ic sx-ic--shield" aria-hidden="true"></span>Provably fair</a>' +
      '<a class="sl-go" href="case.html#h2-pays">What this case <span class="nw">pays' + ARROW + '</span></a></div></div>' +
      '<div class="sx-stage" aria-hidden="true"><span class="sl-case sx-art"><span class="b"></span><img class="sk" src="../concept/assets/skins/' + skin + '.png" alt="" width="512" height="384"><span class="f"></span></span>' +
      '<span class="sx-pins"><span class="sl-pill sx-pin sx-pin1"><span class="sx-ic sx-ic--pct"></span>A published chance on each one</span>' +
      '<span class="sl-pill sx-pin sx-pin2"><span class="sx-ic sx-ic--target"></span>One round decides the item</span>' +
      '<span class="sl-pill sx-pin sx-pin3 is-ok"><span class="sx-ic sx-ic--shield"></span>Checked afterwards</span></span></div>';
  }

  window.V4Seo = { render: render };

  /* ---- Home: swap _nav.js's B11 body for R1, Home only, where the shell says index.html and the heading stands ---- */
  function mount() {
    var shell = window.WF_SHELL, head = document.getElementById('h2-about');
    if (!shell || shell.active !== 'index.html' || !head) return;
    var sec = head.closest('section');
    if (!sec || sec.classList.contains('v4-seo')) return;
    sec.className = 'wf-sec v4-seo';
    sec.innerHTML = '<div class="v4-seo-frame"><div class="sx sxa">' + render({ base: window.WF_BASE || '../../wireframes/', id: 'h2-about' }) + '</div></div>';
  }
  function start() {
    mount();
    var main = document.querySelector('.wf-main');
    if (main && window.MutationObserver) new MutationObserver(mount).observe(main, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
