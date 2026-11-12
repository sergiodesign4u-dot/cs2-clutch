/* design/v4/signin-home.js, v4's sign in dialog, Operators round 2 of signin-lab.html on the Battles blue panel, founder of 3 Nov 2026:
 * "давай вот такой вариант", then "переносим на главную". wireframes/ is frozen, so this works the way the footer was ported: _nav.js still
 * opens its dialog host on every data-auth-open (scrim, Escape, the focus trap, the inert page behind), and this script fills the host's
 * .wf-dlg with the dialog the founder chose. The words are the dialog's own, word for word from _nav.js authCard. D-26 and D-58 hold: two
 * separate declarations, live buttons, a press with one missing is refused with words that name which one and the keyboard goes to it.
 * A press that goes through keeps data-auth-go, so _nav.js signs the session in, D-160. The legal links point into wireframes/ instead of
 * resolving under design/v4/, which is where the old dialog's links failed. window.V4Signin.render draws the same dialog in the lab, so the
 * two cannot drift. Styles: signin-home.css. */
(function () {
  var PANEL = 'var(--gradient-button-stripes), var(--gradient-mode-battles)';
  var TICK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var ic = function (n) { return 'data-icon="' + n + '" style="--ic: var(--icon-' + n + ')" aria-hidden="true"'; };
  var tile = function (n) { return '<span class="sd-note-i" style="--ic: var(--icon-' + n + ')" aria-hidden="true"></span>'; };
  var SAY = {
    both: '<b>Tick both to continue.</b> Neither declaration has been made yet.',
    terms: '<b>The agreement to the terms is still missing.</b>',
    age: '<b>The age declaration is still missing.</b>',
    done: '<span class="sd-sr">Both declarations made.</span>'
  };

  /* o.id: a prefix for the ids; o.base: the wireframes folder; o.go: where a press that goes through lands; o.terms: the terms page;
     o.asked: drawn as refused with nothing ticked */
  function render(o) {
    o = o || {};
    var W = o.base || '../../wireframes/', id = o.id || 'v4si', go = o.go || 'index.html?account', miss = o.asked ? ' is-missing' : '';
    var btn = function (cls, n, label) { return '<a class="v4-btn ' + cls + '" href="' + go + '" data-auth-go><span class="sd-pv-i" ' + ic(n) + '></span>' + label + '</a>'; };
    return '<button class="sd-close sd-x" type="button" aria-label="Close" data-auth-dismiss="1"></button>' +
      '<div class="sd-art" aria-hidden="true" style="background: ' + PANEL + '"><p class="sd-art-h">CS2 case opening with published odds</p><img class="sd-agents" src="art/footer-agents.webp" alt=""></div>' +
      '<ul class="sd-proofs"><li class="sd-pf"><span class="sd-pf-i" ' + ic('box') + '></span><span class="sd-pf-t"><b>Open a case, see every chance.</b></span></li>' +
        '<li class="sd-pf"><span class="sd-pf-i" ' + ic('shield') + '></span><span class="sd-pf-t"><b>Every round</b><span class="sd-pf-s">Checkable without an account</span></span></li>' +
        '<li class="sd-pf"><span class="sd-pf-i" ' + ic('steam') + '></span><span class="sd-pf-t"><b>Withdrawals go to Steam, commission free.</b></span></li></ul>' +
      '<div class="sd-body">' +
        '<h3 class="sd-h" id="' + id + '-h">Sign in</h3>' +
        '<div class="sd-consent">' +
          '<div class="sd-cbx' + miss + '"><button class="sd-box" type="button" role="checkbox" aria-checked="false" aria-labelledby="' + id + '-t1">' + TICK + '</button><span class="sd-cbx-t" id="' + id + '-t1">I agree to the <a href="' + W + (o.terms || 'legal.html') + '">Terms of use</a> and the <a href="' + W + 'legal-unpublished.html?doc=privacy">Privacy policy</a>.</span></div>' +
          '<div class="sd-cbx sd-cbx--age' + miss + '"><button class="sd-box" type="button" role="checkbox" aria-checked="false" aria-labelledby="' + id + '-t2">' + TICK + '</button><span class="sd-cbx-t" id="' + id + '-t2">I declare that I am 18 or over.</span></div>' +
        '</div>' +
        '<p class="sd-why" aria-live="polite">' + (o.asked ? SAY.both : '') + '</p>' +
        btn('v4-btn--l sd-steam', 'steam', 'Sign in with Steam') +
        '<p class="sd-or"><span>or continue with</span></p>' +
        '<div class="sd-provs">' + btn('v4-btn--m v4-btn--ghost', 'google', 'Google') + btn('v4-btn--m v4-btn--ghost', 'discord', 'Discord') + btn('v4-btn--m v4-btn--ghost', 'x', 'X') + '</div>' +
        '<div class="sd-note">' +
          '<p class="is-guard">' + tile('shield') + '<span>We never ask for your password or change your Steam profile.</span></p>' +
          '<p class="is-steam">' + tile('steam') + '<span>To send items to Steam, <b>link your Steam account</b>, any time.</span></p>' +
        '</div>' +
      '</div>';
  }

  /* the declarations behave as _nav.js wireAuth does, D-58; opening a linked document is not agreeing to it */
  function wire(d) {
    var rows = [].slice.call(d.querySelectorAll('.sd-cbx')), why = d.querySelector('.sd-why');
    var n = function () { return rows.filter(function (r) { return r.classList.contains('is-set'); }).length; };
    function settle() {
      d.setAttribute('data-n', n());
      if (n() === 2) { d.classList.remove('is-asked'); why.innerHTML = SAY.done; }
      else if (d.classList.contains('is-asked')) { var m = rows.map(function (r) { return !r.classList.contains('is-set'); }); why.innerHTML = m[0] && m[1] ? SAY.both : (m[0] ? SAY.terms : SAY.age); }
      else why.innerHTML = '';
    }
    rows.forEach(function (r) {
      var b = r.querySelector('.sd-box');
      r.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        e.preventDefault();
        var on = !r.classList.contains('is-set');
        r.classList.toggle('is-set', on);
        if (on) r.classList.remove('is-missing');
        b.setAttribute('aria-checked', on ? 'true' : 'false');
        settle();
      });
    });
    // a press with a declaration missing is refused here, before it reaches the document, so _nav.js does not sign the session in
    d.addEventListener('click', function (e) {
      var go = e.target.closest('[data-auth-go]');
      if (!go || n() === 2) return;
      e.preventDefault();
      d.classList.add('is-asked');
      rows.forEach(function (r) { if (!r.classList.contains('is-set')) { r.classList.remove('is-missing'); void r.offsetWidth; r.classList.add('is-missing'); } });
      settle();
      var first = d.querySelector('.sd-cbx.is-missing .sd-box');
      if (first) first.focus({ preventScroll: true });
    });
  }

  window.V4Signin = { render: render, wire: wire };

  /* ---- Home: fill the dialog _nav.js opens; its failure states (Steam refused, Steam down) are left as they are drawn ---- */
  function take(host) {
    var dlg = host.querySelector('.wf-dlg');
    if (!dlg || dlg.classList.contains('sd') || dlg.querySelector('.wf-fail')) return;
    var asked = !!dlg.querySelector('.wf-consent.is-asked');
    dlg.className = 'wf-dlg sd sd--e' + (asked ? ' is-asked' : '');
    dlg.setAttribute('aria-labelledby', 'v4si-h');
    dlg.setAttribute('data-n', '0');
    dlg.innerHTML = render({ id: 'v4si', base: window.WF_BASE || '../../wireframes/', go: 'index.html?account', terms: 'legal-guest.html', asked: asked });
    wire(dlg);
    var x = dlg.querySelector('.sd-close');
    if (x) x.focus();
  }
  function start() {
    var shell = window.WF_SHELL;
    if (!shell || (shell.active !== 'index.html' && !shell.v4) || !window.MutationObserver) return;
    new MutationObserver(function (list) {
      list.forEach(function (m) { [].forEach.call(m.addedNodes, function (h) { if (h.nodeType === 1 && h.classList.contains('wf-auth-host')) take(h); }); });
    }).observe(document.body, { childList: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
