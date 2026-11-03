/* design/v4/account-home.js, v4's signed-in header cluster and account menu, round 3 of account-lab.html, founder of 3 Nov 2026: "ну давай
 * посмотрим как будет виглядеть на главной (ни в коем случае не увиличивай по вісоте хедер)". wireframes/ is frozen, so this works the way
 * the footer and the sign in dialog were ported: wireframes/_nav.js still renders the header on Home with an account, and this script
 * replaces the three things in its row (the two figures, the + and the account control) with the lab's plate, Add funds and the avatar
 * pill, and the lab's menu behind the pill. Nothing in the header grows: every control is 40px or less, inside the 64px header.
 * What _nav.js owns stays its own:
 *  - the figures are read through moneyNow(), and the old figures stay in the page hidden, so when moneyAdd() repaints them this repaints
 *    the plate; money is two figures, never summed (root CLAUDE.md), the items figure with D-204's pistol;
 *  - Add funds is the old +'s address, accessible name and data-dep-open, so it opens today's deposit layer; the 5% is D-94's badge, read
 *    from the old control, so a page that turns the badge off turns it off here too, and its cap stays in the accessible name;
 *  - Sign out keeps the class wf-acct-out, which is what _nav.js listens for to end the signed-in session, D-160;
 *  - the name and the ID come from WF_WHO, the one declaration, and the rows are the seven of D-36 in their order, My items first.
 * The avatar is the fifth of the site's set, design/v4/art/avatars, the founder's call: "аватарки берем все". Styles: account-home.css. */
(function () {
  var W = '../../wireframes/';
  var ROWS = [['History', 'history.html', 'history'], ['Withdrawals', 'history-withdrawals.html', 'send'], ['Profile', 'profile.html', 'user'], ['Settings', 'settings.html', 'settings']];
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ic = function (n) { return '<span class="am-ic" style="--ic: var(--icon-' + n + ')" aria-hidden="true"></span>'; };
  var num = function (v) { return (+v).toFixed(2); };

  /* o.base: the wireframes folder; o.ava: the avatar picture; o.dep: the old +, whose address, name, data-dep-open and badge are kept */
  function render(o) {
    var B = o.base || W, who = window.WF_WHO || {}, m = window.moneyNow ? window.moneyNow() : { balance: 0, held: 0 }, dep = o.dep;
    var badge = dep && dep.querySelector('.wf-dep-b');
    var depA = dep ? ' href="' + esc(dep.getAttribute('href')) + '"' + (dep.hasAttribute('data-dep-open') ? ' data-dep-open="' + esc(dep.getAttribute('data-dep-open')) + '"' : '') + ' aria-label="' + esc(dep.getAttribute('aria-label') || 'Add funds') + '"' : '';
    return '<div class="ac2-plate">' +
        '<div class="ac2-money">' +
          '<a class="ac-fig is-bal" href="' + B + 'deposit.html" aria-label="Balance, ' + num(m.balance) + ' coins"><img class="ac-coin" src="art/brand/coin-6-small.svg" alt=""><span class="ac-v" data-v4-money="balance">' + num(m.balance) + '</span></a>' +
          '<a class="ac-fig is-held" href="' + B + 'account.html" aria-label="Value of items held, ' + num(m.held) + ' coins"><span class="ac-pistol" aria-hidden="true"></span><span class="ac-v" data-v4-money="held">' + num(m.held) + '</span></a>' +
        '</div>' +
        (dep ? '<a class="ac2-dep"' + depA + '><span class="ac-plus" aria-hidden="true"></span><span class="ac2-dep-t">Add funds</span>' + (badge ? '<span class="ac2-badge" aria-hidden="true">' + esc(badge.textContent) + '</span>' : '') + '</a>' : '') +
      '</div>' +
      '<div class="ac2-acct">' +
        '<button class="ac2-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="v4-acct-menu" aria-label="Account, ' + esc(who.name) + '"><img class="ac2-ava" src="' + o.ava + '" alt=""><span class="ac2-name">' + esc(who.name) + '</span><span class="ac-chev" aria-hidden="true"></span></button>' +
        '<div class="am3" id="v4-acct-menu" hidden>' +
          '<div class="am3-head"><img class="am3-ava" src="' + o.ava + '" alt="">' +
            '<div class="am3-who"><b>' + esc(who.name) + '</b>' +
              '<div class="am3-id"><span class="am3-id-v">ID ' + esc(who.id) + '</span><button class="am3-copy" type="button" data-copy="' + esc(who.id) + '"><span class="am3-copy-i" aria-hidden="true"></span><span class="am3-copy-t" aria-live="polite">Copy</span></button></div>' +
            '</div></div>' +
          '<nav class="am3-grid" aria-label="Account">' +
            '<a class="am3-t is-items v4-ri-host" href="' + B + 'account.html"><span class="am-ic am-ic--story" aria-hidden="true">' + (window.V4RailIcons ? window.V4RailIcons.svg('box') : '') + '</span><span class="am-t">My items</span><img class="am3-case" src="art/cases-v2/coldfront-c.webp" alt="" loading="lazy"></a>' +
            ROWS.map(function (r) { return '<a class="am3-t" href="' + B + r[1] + '">' + ic(r[2]) + '<span class="am-t">' + r[0] + '</span></a>'; }).join('') +
            '<a class="am3-t is-rp" href="' + B + 'responsible.html">' + ic('shield') + '<span class="am-t">Responsible play</span></a>' +
          '</nav>' +
          '<a class="am3-out wf-acct-out" href="' + B + 'index.html">' + ic('out') + '<span class="am-t">Sign out</span></a>' +
        '</div>' +
      '</div>';
  }

  function wire(ac) {
    var btn = ac.querySelector('.ac2-btn'), menu = ac.querySelector('.am3');
    var scrim = document.createElement('div');
    scrim.className = 'v4-ac-scrim';
    scrim.hidden = true;
    scrim.setAttribute('aria-hidden', 'true');
    ac.insertBefore(scrim, ac.firstChild); // inside the header, so on a phone it dims the page under the sheet and not the sheet
    function set(on, back) {
      ac.classList.toggle('is-open', on);
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
      menu.hidden = !on;
      scrim.hidden = !on;
      if (!on && back) btn.focus();
    }
    btn.addEventListener('click', function (e) {
      var on = !ac.classList.contains('is-open');
      set(on);
      if (on && e.detail === 0) menu.querySelector('.am3-copy').focus(); // from the keyboard the focus goes into the menu
    });
    scrim.addEventListener('click', function () { set(false, true); });
    document.addEventListener('click', function (e) { if (ac.classList.contains('is-open') && !ac.contains(e.target) && e.target !== scrim) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ac.classList.contains('is-open')) set(false, true); });
    ac.addEventListener('focusout', function (e) { if (e.relatedTarget && !ac.contains(e.relatedTarget)) set(false); });
    var cp = menu.querySelector('[data-copy]');
    cp.addEventListener('click', function () {
      var t = cp.querySelector('.am3-copy-t');
      var said = function (w, ok) { t.textContent = w; cp.classList.toggle('is-done', ok); cp.classList.toggle('is-fail', !ok); clearTimeout(cp._t); cp._t = setTimeout(function () { t.textContent = 'Copy'; cp.classList.remove('is-done', 'is-fail'); }, 2400); };
      try { navigator.clipboard.writeText(cp.getAttribute('data-copy')).then(function () { said('Copied', true); }, function () { said('Not copied, select it by hand', false); }); }
      catch (err) { said('Not copied, select it by hand', false); }
    });
  }

  /* the plate follows the figures _nav.js keeps: moneyAdd() repaints the hidden originals, and the plate reads moneyNow() again */
  function follow(ac, old) {
    if (!window.MutationObserver || !old) return;
    new MutationObserver(function () {
      var m = window.moneyNow();
      [['balance', 'is-bal', 'Balance'], ['held', 'is-held', 'Value of items held']].forEach(function (k) {
        var v = ac.querySelector('[data-v4-money="' + k[0] + '"]');
        if (v) v.textContent = num(m[k[0]]);
        var a = ac.querySelector('.ac-fig.' + k[1]);
        if (a) a.setAttribute('aria-label', k[2] + ', ' + num(m[k[0]]) + ' coins');
      });
    }).observe(old, { subtree: true, childList: true, characterData: true });
  }

  function mount() {
    var shell = window.WF_SHELL;
    if (!shell || shell.active !== 'index.html' || !shell.account) return;
    var row = document.querySelector('.wf-header .wf-row');
    if (!row || row.querySelector('.v4-ac')) return;
    var money = row.querySelector('.wf-money'), dep = row.querySelector('.wf-dep'), acct = row.querySelector('.wf-acct-wrap');
    // a page whose figures have no source keeps _nav.js's own Not available, 0.3: missing is a state, never a zero
    if (!money || !acct || money.querySelector('.wf-fig-missing')) return;
    var ac = document.createElement('div');
    ac.className = 'v4-ac ac2 ac3';
    ac.innerHTML = render({ base: window.WF_BASE || W, ava: 'art/avatars/a5.webp', dep: dep });
    money.hidden = true;
    money.classList.add('v4-ac-old');
    if (dep) dep.remove();
    acct.remove();
    row.appendChild(ac);
    row.classList.add('has-v4-ac');
    wire(ac);
    follow(ac, money);
  }

  window.V4Account = { render: render };

  function start() {
    mount();
    var head = document.querySelector('.wf-header');
    if (head && window.MutationObserver) new MutationObserver(mount).observe(head, { childList: true });
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
