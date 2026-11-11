/* design/v4/faq-home.js, two sections after "What opening a case here involves" on v4's Home, founder of 2 Nov 2026: "после What opening a
 * case here involves добавим секцию FAQ с коллапс пунктами 6-8 ... один пункт открыт, остальные закрыты, открываешь следующий, предыдущие
 * закрываются", then "после FAQ нужна секция СЕО о нас Clutch c H2 и H3". Neither block is in the frozen wireframe or in node 1.0's H2 list,
 * so both are founder additions, recorded in docs/decisions.md.
 *
 * The FAQ follows node 0.10's four rules (ia/docs/pages/support.md section 4): it holds no number of its own, every answer routes to the
 * surface that owns the rule, every question is a <button> with aria-expanded and aria-controls, and every answer is in the DOM at every
 * width. Five questions and answers are the support page's own (wireframes/_nav.js FAQ), word for word; two are new and marked so in
 * the decision record. No FAQPage markup: 0.13 assigns Home Organization and WebSite only. The About text claims nothing the product does
 * not already show on a page it links to, and prints no figure. Styles: faq-home.css. */
(function () {
  var ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  /* question, answer, the surface that owns the rule, its link's words */
  var FAQ = [
    ['Where can I see the chance of each item?', 'On the case itself, before you open it: every item with its chance and its value, and the case\'s tested return.', 'case.html#h2-pays', 'What this case pays'],
    ['How do I know a round was fair?', 'Every round has a proof you can recompute without an account.', 'fair.html', 'Provably fair'],
    ['What happens to an item from a case?','It goes to My items. From there you keep it, sell it for coins or send it to your Steam inventory.', 'account.html', 'My items'],
    ['What if an item cannot be sent to Steam?', 'It stays in My items. You can send it later, or sell it for coins.', 'account.html', 'My items'],
    ['Can a limit stop me taking my items out?', 'No. No limit ever stops you sending items to Steam.', 'responsible.html', 'Responsible play'],
    ['Do you ever ask for my Steam password?', 'Never. You sign in on Steam\'s own page.', 'legal-unpublished.html?doc=privacy', 'Privacy policy'],
    ['My Steam sign in does not come back here', 'Close the Steam tab and press Sign in again. Nothing you chose is lost.', 'signin.html', 'Sign in']
  ];
  /* the About text: H3, its paragraph, its mark from the set */
  var ABOUT = [
    ['CS2 cases with published odds', 'Each case is a fixed set of CS2 skins. Its page lists every item with its chance and its current value, so you see what a case pays before you open it, not after.', 'box'],
    ['Provably fair rounds', 'Every round leaves a proof. You can recompute it yourself, without an account, on the Provably fair page, and a round that does not match is something you can show us.', 'shield'],
    ['Skins you can send to Steam', 'An item from a case waits in My items until you choose: keep it, sell it for coins or send it to your Steam inventory. You sign in on Steam\'s own page, and we never ask for your password.', 'send'],
    ['Play with limits', 'Clutch is for people 18 or over. Deposit limits, session limits, a cool down and self exclusion are on the Responsible play page, and no limit ever stops you sending items to Steam.', 'settings']
  ];

  function head(id, text, tone, icon) {
    return '<div class="hz-head" style="--hz-g: var(--v4-mode-' + tone + '); --hz-ic: var(--icon-' + icon + ')"><span class="hz-tile" aria-hidden="true"></span><h2 id="' + id + '">' + text + '</h2></div>';
  }
  function go(base, href, text) {
    var i = text.lastIndexOf(' ');
    var a = i < 0 ? '' : text.slice(0, i + 1), b = i < 0 ? text : text.slice(i + 1);
    return '<a class="fq-go" href="' + (/^case\.html/.test(href) ? '' : base) + href + '">' /* the case screen has a coloured copy beside this page, the rest are grey; contract row 26 */ + a + '<span class="nw">' + b + ARROW + '</span></a>';
  }

  /* o.base: the wireframes folder the links open in; o.open: the item open at first, 0 by default */
  function renderFaq(o) {
    o = o || {};
    var base = o.base || '../../wireframes/', open = o.open == null ? 0 : o.open;
    return head('h2-faq', 'Questions and answers', 'battles', 'question') +
      '<div class="fq"><div class="fq-lead"><p>Answers to the questions people ask most. Every rule here also lives on the screen where you meet it, and that screen is the one that governs.</p>' +
      '<a class="v4-btn v4-btn--m v4-btn--ghost fq-more" href="' + base + 'support.html">Support</a></div>' +
      '<div class="fq-list">' + FAQ.map(function (f, i) {
        var on = i === open;
        return '<div class="fq-i' + (on ? ' is-open' : '') + '"><h3 class="fq-h"><button class="fq-q" type="button" id="fq-q' + i + '" aria-expanded="' + on + '" aria-controls="fq-a' + i + '">' +
          '<span>' + f[0] + '</span><span class="fq-x" aria-hidden="true"></span></button></h3>' +
          '<div class="fq-a" id="fq-a' + i + '" role="region" aria-labelledby="fq-q' + i + '"><div class="fq-in"><p>' + f[1] + '</p>' + go(base, f[2], f[3]) + '</div></div></div>';
      }).join('') + '</div></div>';
  }
  function renderAbout() {
    return head('h2-clutch', 'About Clutch', 'showdowns', 'users') +
      '<div class="ab"><p class="ab-lead">Clutch is a CS2 case opening site built so that its own numbers can be checked. Every case shows the chance of each skin, its value and its tested return before you spend, and every round leaves a proof you can recompute.</p>' +
      '<div class="ab-grid">' + ABOUT.map(function (a) {
        return '<div class="ab-i"><h3><span class="ab-ic" style="--hz-ic: var(--icon-' + a[2] + ')" aria-hidden="true"></span>' + a[0] + '</h3><p>' + a[1] + '</p></div>';
      }).join('') + '</div></div>';
  }

  /* one open at a time: opening an item closes the one before it; pressing the open one closes it */
  function wire(root) {
    if (root.dataset.fqWired) return;
    root.dataset.fqWired = '1';
    root.addEventListener('click', function (e) {
      var q = e.target.closest('.fq-q');
      if (!q || !root.contains(q)) return;
      var item = q.closest('.fq-i'), opening = q.getAttribute('aria-expanded') !== 'true';
      [].forEach.call(root.querySelectorAll('.fq-i.is-open'), function (it) {
        it.classList.remove('is-open'); it.querySelector('.fq-q').setAttribute('aria-expanded', 'false');
      });
      if (opening) { item.classList.add('is-open'); q.setAttribute('aria-expanded', 'true'); }
    });
  }

  window.V4Faq = { renderFaq: renderFaq, renderAbout: renderAbout, wire: wire };

  /* ---- Home: the two sections go in after the What opening section, once, and again if _nav.js renders Home anew ---- */
  function mount() {
    var shell = window.WF_SHELL, seo = document.querySelector('.wf-main .v4-seo');
    if (!shell || shell.active !== 'index.html' || !seo || document.getElementById('h2-faq')) return;
    var base = window.WF_BASE || '../../wireframes/';
    var faq = document.createElement('section');
    faq.className = 'wf-sec v4-faq'; faq.setAttribute('aria-labelledby', 'h2-faq'); faq.innerHTML = renderFaq({ base: base });
    var about = document.createElement('section');
    about.className = 'wf-sec v4-about'; about.setAttribute('aria-labelledby', 'h2-clutch'); about.innerHTML = renderAbout();
    seo.after(faq, about);
    wire(faq);
  }
  function start() {
    mount();
    var main = document.querySelector('.wf-main');
    if (main && window.MutationObserver) new MutationObserver(mount).observe(main, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
