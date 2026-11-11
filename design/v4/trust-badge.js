/* design/v4/trust-badge.js, the Trustpilot line of v4's Home as a badge, founder of 1 Nov 2026: "поработаем над креативной красивой
 * бейджиком trustpilot". The figures are read from the page's own line, never typed a second time, and the link stays the same
 * link: its text remains the accessible name. Without this script the plain line stands. */
(function () {
  /* a signed-in person does not get the Trustpilot line: the wireframe drops it for an account (wireframes/_nav.js, account ? '' : A5) and
   * Home's v4 copy renders the guest body for both, founder, 4 Nov 2026: "при логине убираем". The class is set before the header and the
   * hero render, so the line never shows and then goes */
  var sh = window.WF_SHELL;
  if (sh && sh.account) document.documentElement.classList.add('v4-signed');

  function star() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2-5.6-3.2-5.6 3.2 1.3-6.2L3 9.7l6.3-.7z"/></svg>';
  }

  function start() {
    var link = document.querySelector('.wf-hero-line a');
    if (!link) return;
    var line = link.textContent.trim();
    var found = line.match(/^(\S+)\s+([\d.]+),\s*(.+)$/);
    if (!found) return;
    var score = parseFloat(found[2]);
    var tiles = '';
    for (var i = 0; i < 5; i++) {
      var fill = Math.max(0, Math.min(1, score - i));
      tiles += '<i style="--fill:' + Math.round(fill * 100) + '%;--n:' + i + '">' + star() + '</i>';
    }
    link.setAttribute('aria-label', line);
    /* no link, critique run 4 row 37: it went to trustpilot.com's front page, not to a page of reviews of this product, which does not exist
       yet; the badge reads as a picture with its line as its name until a review page does */
    link.removeAttribute('href'); link.removeAttribute('rel'); link.setAttribute('role', 'img');
    link.classList.add('v4-trust');
    link.innerHTML = '<span class="v4-trust-tiles" aria-hidden="true">' + tiles + '</span>' +
      '<b class="v4-trust-score" aria-hidden="true">' + found[2] + '</b>' +
      '<span class="v4-trust-meta" aria-hidden="true"><strong>' + found[1] + '</strong><span>' + found[3] + '</span></span>';
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
