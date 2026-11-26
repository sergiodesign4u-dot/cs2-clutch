/* design/kit/_nav.js: THE ONE REGISTRY OF THE STAND'S PAGES, stage 08 step 4. Nothing else lists them.
 *
 * It draws two things that must never disagree: the stand's own panel on every page of design/kit/ (no roadmap here; the way out is the
 * first row, "Design process") and the cards of the hub, design/kit/overview.html. Groups follow the component ladder, never purpose:
 * System, Foundations, then Atoms, Molecules and Organisms, which step 5 adds in that order, bottom up as the @import runs, and Check at
 * step 9. A page carries this file in its <head>, so the theme it was left in is set before the first paint.
 *
 * The theme switch writes data-theme on <html>: dark is the product's own (:root of tokens.css), light the pair of D-258. The choice is
 * kept in this browser only.
 *
 * Own namespace on purpose, KIT_NAV, KIT_SECTIONS and kp-* / kc-*: the root file owns NAV, NAV_BASE, NAV_SECTIONS and nav-*.
 */
(function () {
  var KEY = 'kit-theme', root = document.documentElement;
  function readTheme() { try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; } catch (e) { return 'dark'; } }
  function setTheme(t) {
    if (t === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var bs = document.querySelectorAll('.kp-theme button');
    for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', String(bs[i].getAttribute('data-t') === t));
  }
  if (readTheme() === 'light') root.setAttribute('data-theme', 'light');

  window.KIT_NAV = {
    groups: [
      { label: 'System', pages: [
        { file: 'overview.html', label: 'Overview', about: 'The hub: every page of the stand as a card.' } ] },
      { label: 'Foundations', pages: [
        { file: 'architecture.html', label: 'Architecture', mini: 'arch',
          about: 'The rules first: the ladder of tokens and the ladder of components, how roles are named, what a component reads, the two folders, the five things a component needs.' },
        { file: 'color.html', label: 'Colour', mini: 'color',
          about: 'Every role in the dark and the light theme side by side, the contrast of every role in both, and the whole primitive palette with its origins.' },
        { file: 'typography.html', label: 'Typography', mini: 'type',
          about: 'One family in four weights, the seventeen sizes the product sets, tracking, line height and the measure, each in the product\'s own words.' },
        { file: 'geometry.html', label: 'Geometry and motion', mini: 'geom',
          about: 'Space shown as space and corners as corners, the sizes of controls and of the shell, the breakpoints, and motion as it stands.' },
        { file: 'icons.html', label: 'Icons and art', mini: 'icons',
          about: 'The glyph set at working sizes in the roles\' colours, the payment and provider marks, and the 55 pictures of art.css.' },
        { file: 'depth.html', label: 'Depth and surface', mini: 'depth',
          about: 'Every shadow, gradient, blur, filter and clip shape on a tile, with the roles that read them (D-259).' } ] },
      // Components by level, bottom up as index.css imports them; inside a level, subgroups by purpose only order this panel (step 5 estimate)
      { label: 'Atoms', level: 1, pages: [
        { file: 'button.html', label: 'Button', sub: 'Acts', css: 'components/button.css', states: 'hover, active, focus-visible, disabled; busy',
          screens: 'all eight coloured screens', round: 0,
          about: 'The act of a zone and its second act, a glyph tile, a dialog\'s close. The reference of step 5: the four states and the component tokens were decided on it.',
          miniHtml: '<span class="button button--primary button--m">Open</span><span class="button button--ghost button--m">Sign in</span>' },
        // round 1, the other atoms, in the panel's order of subgroups
        { file: 'text-link.html', label: 'Text link', sub: 'Acts', css: 'components/text-link.css', states: 'hover, focus-visible', screens: 'all eight coloured screens', round: 1,
          about: 'The link that leads onward: pink in a sentence or with an arrow when it stands alone, quiet for a source, white on a plate; three sizes and a grown press.',
          miniHtml: '<a class="link link--arrow" href="#">What this case pays</a>' },
        { file: 'disclosure.html', label: 'Disclosure', sub: 'Acts', css: 'components/disclosure.css', states: 'focus-visible, open ([open])', screens: 'Home, Deposit, Provably fair (and the footer\'s questions)', round: 1,
          about: 'A question that opens its answer: the details row with its plus turning to a minus and the pink edge when open.',
          miniHtml: '<details class="disclosure"><summary>How do I know a round was fair?</summary></details>' },
        { file: 'favourite-toggle.html', label: 'Favourite toggle', sub: 'Acts', css: 'components/favourite-toggle.css', states: 'hover, focus-visible, pressed (aria-pressed)', screens: 'Home, the case screen, the catalogue, Deposit, Sign in', round: 1,
          about: 'The heart with its count, a veiled pill or a square of the heart alone; pressed it turns pink and draws a pink edge.',
          miniHtml: '<button class="fav" type="button" aria-pressed="true">830<i class="icon icon--heart" aria-hidden="true"></i></button>' },
        { file: 'tabs.html', label: 'Tabs', sub: 'Acts', css: 'components/tabs.css', states: 'hover, active, focus-visible', screens: 'My items', round: 1,
          about: 'Peers in a row, one of them current: the account\'s pages and a cash out\'s networks, plain on the page or on the account head\'s plate.',
          miniHtml: '<div class="tabs"><span class="tabs__t" aria-current="page">My items</span><a class="tabs__t" href="#">History</a><a class="tabs__t" href="#">Profile</a></div>' },
        { file: 'segmented-control.html', label: 'Segmented control', sub: 'Acts', css: 'components/segmented-control.css', states: 'hover, active, focus-visible', screens: 'Case, Deposit, My items, Catalogue (the category bar, an option as a link)', round: 1,
          about: 'Exclusive options in a row, one chosen and filled: the count of cases to open, a preset amount, the sort, the category bar\'s run. Sizes M 44 and S 32.',
          miniHtml: '<div class="seg"><span class="seg__opt" aria-pressed="true">1</span><span class="seg__opt" aria-pressed="false">2</span><span class="seg__opt" aria-pressed="false">3</span></div>' },
        { file: 'text-field.html', label: 'Text field', sub: 'Inputs', css: 'components/text-field.css', states: 'focus-visible, refusal (aria-invalid); no hover, as kit.css', screens: 'Catalogue, Deposit, My items, Provably fair, Responsible play', round: 1,
          about: 'One line of typed text on the tile\'s dark fill: M 40 or L 52, boxed or bare, with an optional unit; its edge turns pink under focus and red when it refuses.',
          miniHtml: '<input class="input" type="text" value="nightjar" aria-label="Client seed">' },
        { file: 'text-area.html', label: 'Text area', sub: 'Inputs', css: 'components/text-area.css', states: 'focus-visible, refusal (aria-invalid); no hover, as kit.css', screens: 'Provably fair', round: 1,
          about: 'Several lines of typed text, the Text field\'s twin on the same tile: three rows tall, free to grow downward; its edge turns pink under focus and red when it refuses.',
          miniHtml: '<textarea class="textarea" rows="2" aria-label="Server seed hash">4f2a91c7e0b83d56</textarea>' },
        { file: 'checkbox.html', label: 'Checkbox', sub: 'Inputs', css: 'components/checkbox.css', states: 'hover, focus-visible; ticked (:checked)', screens: 'Catalogue, Deposit, My items (the Field\'s declaration also stands on the case screen and Sign in, inside dialogs)', round: 1,
          about: 'A box that holds a yes, with its label or alone: the Field\'s declaration, a card\'s tick, a filter\'s row.',
          miniHtml: '<label class="check"><input type="checkbox" checked><span>Terms</span></label><label class="check"><input type="checkbox" aria-label="Select"></label>' },
        { file: 'radio.html', label: 'Radio', sub: 'Inputs', css: 'components/radio.css', states: 'hover, focus-visible; chosen (:checked)', screens: 'Deposit', round: 1,
          about: 'A round mark that holds one choice among a few, inside the tile that is its label: a provider, a Steam offer.',
          miniHtml: '<span class="radio"><input type="radio" name="m" aria-label="A"></span><span class="radio"><input type="radio" name="m" checked aria-label="B"></span>' },
        { file: 'switch.html', label: 'Switch', sub: 'Inputs', css: 'components/switch.css', states: 'focus-visible; on (:checked); no hover', screens: 'none yet: settings (5.11) arrive with the rollout', round: 1,
          about: 'A track and a thumb for an on or an off that takes effect at once; the kit\'s own form, on no coloured screen yet.',
          miniHtml: '<label class="switch"><input type="checkbox" checked aria-label="On"></label><label class="switch"><input type="checkbox" aria-label="Off"></label>' },
        { file: 'range.html', label: 'Range', sub: 'Inputs', css: 'components/range.css', states: 'focus-visible', screens: 'Catalogue', round: 1,
          about: 'A slider between two ends: a pill track in the tile\'s fill, the act pink up to a round thumb with a white rim, at the 20px of its thumb or the 44px floor of a finger.',
          miniHtml: '<input class="range" type="range" min="0" max="100" value="40" style="--fill:40%" aria-label="Maximum price">' },
        { file: 'figure.html', label: 'Figure', sub: 'Figures and words', css: 'components/figure.css', states: 'focus-visible (the link form only); the figure itself is not interactive', screens: 'all eight coloured screens', round: 1,
          about: 'A value with its unit and its caption: a price, a balance, a stake, a gain, a counter, in seven sizes by container.',
          miniHtml: '<span class="fig fig--money fig--l"><span class="fig__v">12.40 coins</span><span class="fig__c">Price, one open</span></span>' },
        { file: 'key-value-line.html', label: 'Key-value line', sub: 'Figures and words', css: 'components/key-value-line.css', states: 'none, not interactive', screens: 'Case, Deposit, My items, Provably fair, Responsible play, Sign in', round: 1,
          about: 'A key in small caps and its value: the facts of a drop, a total, the lines of a payment, a limit\'s rule.',
          miniHtml: '<div class="kv kv--total"><span class="kv__k">Total charged</span><span class="kv__v">50.00 coins</span></div>' },
        { file: 'note-line.html', label: 'Note line', sub: 'Figures and words', css: 'components/note-line.css', states: 'none, not interactive', screens: 'Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in', round: 1,
          about: 'One small line that qualifies a block; the refusal beside a control says what is missing, the stamp says as of when.',
          miniHtml: '<p class="note note--refuse">A nonce is a whole number.</p>' },
        { file: 'prose.html', label: 'Prose', sub: 'Figures and words', css: 'components/prose.css', states: 'none, not interactive', screens: 'Catalogue, Responsible play', round: 1,
          about: 'The page\'s own text, the SEO layer among it, set to a measure of 68ch: lead 17 or text 16.',
          miniHtml: '<div class="prose prose--text"><p>Four limits you set yourself.</p></div>' },
        { file: 'badge.html', label: 'Badge', sub: 'Figures and words', css: 'components/badge.css', states: 'none, not interactive', screens: 'Home, Case, Catalogue, Deposit, My items, Provably fair (6 of 8 coloured screens)', round: 1,
          about: 'Short text in a pill: a bonus pinned to an act, a ribbon on a tile, a status, a count beside a title; one shape, the tone changes the colour only.',
          miniHtml: '<span class="badge">5%</span><span class="badge badge--status">USDT</span><span class="badge badge--count">3</span><span class="badge badge--good">No fee</span>' },
        { file: 'status-steps.html', label: 'Status steps', sub: 'Figures and words', css: 'components/status-steps.css', states: 'none, not interactive', screens: 'Deposit', round: 1,
          about: 'Ordered steps of something that takes time, each with whom it waits on and the time gone: done is green, now is lit, later is quiet.',
          miniHtml: '<ol class="steps"><li class="steps__i is-done"><span class="steps__n">Sent</span></li><li class="steps__i is-now"><span class="steps__n">Crediting</span></li></ol>' },
        { file: 'icon.html', label: 'Icon', sub: 'Marks and pictures', css: 'components/icon.css', states: 'story form on the host\'s hover and focus-visible; the plain glyph is not interactive', screens: 'all eight coloured screens', round: 1,
          about: 'A glyph by name in the colour and at the size of the words around it, and its story form, a mark that plays a small story under its host\'s pointer or focus.',
          miniHtml: '<i class="icon icon--shield" aria-hidden="true"></i> <i class="icon icon--steam" aria-hidden="true"></i> <i class="icon icon--gift" aria-hidden="true"></i> <i class="icon icon--coin" aria-hidden="true"></i>' },
        { file: 'logo.html', label: 'Logo', sub: 'Marks and pictures', css: 'components/logo.css', states: 'none, not interactive', screens: 'all eight coloured screens', round: 1,
          about: 'The product\'s mark, the logo art on a link\'s line, small in the rail and large in the footer.',
          miniHtml: '<span class="logo logo--s"><span class="logo__mark"></span></span>' },
        { file: 'avatar.html', label: 'Avatar', sub: 'Marks and pictures', css: 'components/avatar.css', states: 'none, not interactive', screens: 'all eight coloured screens', round: 1,
          about: 'A player\'s Steam picture in a circle with a hairline ring, a bot\'s empty disc, in four sizes by the container: 16, 32, 52, 64.',
          miniHtml: '<img class="avatar avatar--xl" src="../visuals/avatars/a1.webp" alt=""><img class="avatar" src="../visuals/avatars/a2.webp" alt=""><span class="avatar avatar--bot"></span>' },
        { file: 'media-slot.html', label: 'Media slot', sub: 'Marks and pictures', css: 'components/media-slot.css', states: 'none, not interactive', screens: 'Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in (7 of 8 coloured screens)', round: 1,
          about: 'One framed area for a picture with its aspect: a skin floats on no plate, a case fills its picture and lets the skin lie in its tray.',
          miniHtml: '<span class="media media--case" style="--case-art:var(--art-case-ironbound);width:120px"><img src="../concept/assets/skins/ak-47-redline.png" alt=""></span>' } ] },
      { label: 'Molecules', level: 2, pages: [
        // round 2, the molecules, in the panel's order of subgroups
        { file: 'case-tile.html', label: 'Case tile', sub: 'Cards', css: 'components/case-tile.css', states: 'hover, focus-visible (the face link), the bolts\' hover, favourite on (aria-pressed), skeleton (aria-busy)', screens: 'Home, Catalogue (8 pages)', round: 2,
          about: 'A case as Home draws it: the case with its skin, its name, its risk as four bolts and its price in gold; pointed at, it takes its own card in the case\'s colour.',
          miniHtml: '<article class="case-tile case-tile--blue" style="width:150px"><a class="case-tile__link" href="#"><span class="case-tile__fx" aria-hidden="true"></span><span class="media media--case case-tile__art" aria-hidden="true" style="--case-art:var(--art-case-ironbound)"><img src="../concept/assets/skins/ak-47-redline.png" alt=""></span><span class="case-tile__name">Ironbound</span><span class="case-tile__risk" data-risk="medium">Medium-risk case<span class="case-tile__bolts" aria-hidden="true"><span class="icon icon--bolt is-on"></span><span class="icon icon--bolt is-on"></span><span class="icon icon--bolt"></span><span class="icon icon--bolt"></span></span></span><span class="case-tile__price"><span class="case-tile__cost"><span class="icon icon--coin" aria-hidden="true"></span>12.40</span></span></a></article>' },
        { file: 'drop-card.html', label: 'Drop card', sub: 'Cards', css: 'components/drop-card.css', states: 'hover', screens: 'Case, Deposit, Sign in (11 coloured states)', round: 2,
          about: 'One item of What is in this case: its value, the skin in its tier\'s ring, the gun and skin, then its chance and tickets over the line of the 100 000.',
          miniHtml: '<article class="drop-card drop-card--r2" style="--a:0;--b:0.64;width:170px"><span class="fig fig--money fig--title drop-card__v"><span class="fig__v"><span class="icon icon--coin"></span>47.30</span></span><span class="media media--skin drop-card__art"><img src="../concept/assets/skins/ak-47-redline.png" alt=""></span><h4 class="drop-card__name"><span class="drop-card__w">AK-47</span><span class="drop-card__s">Redline</span></h4><p class="kv kv--fact drop-card__ch"><span class="kv__k">Chance</span><span class="kv__v">0.640 %</span></p></article>' },
        { file: 'recent-drop-card.html', label: 'Recent drop card', sub: 'Cards', css: 'components/recent-drop-card.css', states: 'hover, focus-visible', screens: 'Case, Deposit, Sign in (11 coloured states)', round: 2,
          about: 'One best drop of a case, linked to its round; pointed at, the skin falls back and who won it stands over it.',
          miniHtml: '<a class="recent-drop recent-drop--r2" href="#" style="width:130px;height:200px"><span class="fig fig--money fig--title recent-drop__v"><span class="fig__v"><span class="icon icon--coin"></span>47.30</span></span><span class="media media--skin recent-drop__art"><img src="../concept/assets/skins/ak-47-redline.png" alt=""></span><span class="recent-drop__w">AK-47</span><b class="recent-drop__s">Redline</b></a>' },
        { file: 'feed-tile.html', label: 'Feed tile', sub: 'Cards', css: 'components/feed-tile.css', states: 'hover, focus-visible (face), focus-visible (back face link), rare drop live (class set by the script)', screens: 'all seven coloured screens that carry the ticker: Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in', round: 2,
          about: 'One drop in the live ticker: the skin over its rarity\'s ring, its names, and a back face with the case and the winner that wipes in under the pointer.',
          miniHtml: '<div class="feed-tile feed-tile--covert"><a class="feed-tile__hit" href="#" aria-label="drop"><span class="media media--skin feed-tile__art" aria-hidden="true"><img src="../concept/assets/skins/ak-47-redline.png" alt=""></span><span class="feed-tile__w">AK-47</span><span class="feed-tile__s">Redline</span></a><span class="icon icon--box feed-tile__mode" aria-label="Case opening"></span></div>' },
        { file: 'item-card.html', label: 'Item card', sub: 'Cards', css: 'components/item-card.css', states: 'hover, focus-visible (focus inside), ticked (:checked)', screens: 'My items', round: 2,
          about: 'One skin a person holds or held: its picture in its tier hexagon, its words and value, and the tick, acts and facts or the status band of its place.',
          miniHtml: '<article class="item-card" style="--item-tier: var(--bg-rarity-3); width:150px"><span class="item-card__art"><span class="media media--skin"></span></span><p class="item-card__w">AWP</p><p class="item-card__s">Asiimov</p><p class="item-card__wear">(Field-Tested)</p><span class="fig fig--money fig--title"><span class="fig__v"><i class="icon icon--coin" aria-hidden="true"></i>66.05</span></span></article>' },
        { file: 'mode-card.html', label: 'Mode card', sub: 'Cards', css: 'components/mode-card.css', states: 'hover', screens: 'Home', round: 2,
          about: 'One way to play on Home: colour, art breaking the top edge, name, a line, and a live act or the not-launched plate.',
          miniHtml: '<article class="mode-card mode-card--cases mode-card--stack" style="width:150px"><span class="mode-card__art" aria-hidden="true"></span><h3 class="mode-card__name">Cases</h3><p class="mode-card__line">Open a case, see every chance.</p><p class="mode-card__later">Not launched yet</p></article>' },
        { file: 'outcome-card.html', label: 'Outcome card', sub: 'Cards', css: 'components/outcome-card.css', states: 'none, not interactive (its batch Sell is the Button)', screens: 'The case screen at its outcome', round: 2,
          about: 'What came out of a round: chance, the skin in its tier ring, names, value and the multiple of the price on a tab; one round or a batch.',
          miniHtml: '<div class="outcome outcome--r5 outcome--batch" style="width:140px"><div class="outcome__card" style="height:170px"><span class="outcome__name"><span class="outcome__w">P250</span><b class="outcome__s">Asiimov</b></span><span class="fig fig--win outcome__v"><span class="fig__v"><i class="icon icon--coin" aria-hidden="true"></i>9.60</span></span><span class="outcome__x">&times;0.77</span></div></div>' },
        { file: 'withdraw-item.html', label: 'Withdraw item', sub: 'Cards', css: 'components/withdraw-item.css', states: 'none, not interactive', screens: 'none yet (waits for the rollout of the withdrawal screens)', round: 2,
          about: 'The item on its way out to Steam: picture, names, value now with when it was read, and the account it goes to.',
          miniHtml: '<article class="withdraw-item" style="--item-tier: var(--bg-rarity-2); max-width:300px"><span class="withdraw-item__art"><span class="media media--skin"></span></span><div class="withdraw-item__b"><span class="withdraw-item__w">AK-47</span><span class="withdraw-item__s">Redline</span><span class="withdraw-item__wear">Field-Tested</span></div></article>' },
        { file: 'amount-field.html', label: 'Amount field', sub: 'Inputs and menus', css: 'components/amount-field.css', states: 'none, not interactive (its states are the Text field\'s and the Segmented control\'s)', screens: 'Deposit (the card route)', round: 2,
          about: 'A label, the amount with its unit and the presets that set it: the card route\'s amount in Add funds.',
          miniHtml: '<div class="amount"><span class="amount__l">Amount, in US dollars</span><span class="input-unit"><input class="input" type="text" value="40.00" aria-label="Amount"><span>US dollars</span></span><div class="seg amount__presets"><span class="seg__opt">$20</span><span class="seg__opt" aria-pressed="true">$40</span></div></div>' },
        { file: 'copyable-value.html', label: 'Copyable value', sub: 'Inputs and menus', css: 'components/copyable-value.css', states: 'none, not interactive (Copy has the Button\'s states); the copied answer is shown as the script writes it', screens: 'Deposit (the crypto address), Case (the seed hash), Provably fair, Sign in (the reference)', round: 2,
          about: 'A key over a value read one character at a time, and Copy; a green line says when it is copied.',
          miniHtml: '<div class="copy-value"><span class="copy-value__k">Reference</span><code class="copy-value__v">ID 7F3K9Q2M</code><div class="copy-value__row"><span class="button button--ghost button--s">Copy</span><span class="copy-value__said">Copied</span></div></div>' },
        { file: 'filter-chip.html', label: 'Filter chip', sub: 'Inputs and menus', css: 'components/filter-chip.css', states: 'none, not interactive (the cross has the Button\'s states)', screens: 'Catalogue (Filters in force)', round: 2,
          about: 'A filter in force, said in words, and the cross that takes it off.',
          miniHtml: '<span class="chip"><span class="chip__t">High risk</span><button class="button button--close chip__x" type="button" aria-label="Remove"></button></span>' },
        { file: 'chosen-method.html', label: 'Chosen method', sub: 'Inputs and menus', css: 'components/chosen-method.css', states: 'none, not interactive (the Back tile has the Button\'s states)', screens: 'Deposit (the route pages and the Add funds dialog)', round: 2,
          about: 'The head of a route at step 2: Back, the method\'s mark and its name under its family.',
          miniHtml: '<div class="chosen"><span class="button button--icon chosen__back"></span><span class="chosen__mark"></span><div class="chosen__t"><span class="chosen__k">Crypto</span><h3 class="chosen__v">Bitcoin</h3></div></div>' },
        { file: 'popover-menu.html', label: 'Popover menu', sub: 'Inputs and menus', css: 'components/popover-menu.css', states: 'focus-visible (trigger, option), hover (option); open (aria-expanded), chosen (aria-current, aria-selected), set by kit.js', screens: 'all eight coloured screens (the rail\'s language); Deposit (country, network), Responsible play (periods)', round: 2,
          about: 'A control that opens a short list over the page: the rail\'s language, nine options with one live, and the Select menu that stands in for the browser\'s list (country, network, a limit\'s period).',
          miniHtml: '<div class="popover popover--select" style="width:180px"><span class="popover__trigger" aria-expanded="false"><span class="popover__flag popover__flag--ua"></span><span class="popover__val">Ukraine</span></span></div>' },
        { file: 'account-menu.html', label: 'Account menu', sub: 'Inputs and menus', css: 'components/account-menu.css', states: 'focus-visible (pill, Copy, tile, Sign out), hover (Copy, tile, My items, Responsible play, Sign out); open (aria-expanded), Copied (.is-done), Not copied (.is-fail), set by kit.js', screens: 'Case, Catalogue, Deposit, Home, My items, Responsible play (27 of 51 states, signed in)', round: 2,
          about: 'The avatar pill in the header and the menu it opens: who is signed in with the ID and Copy, My items first, four destinations, Responsible play and Sign out; a sheet from the bottom under 900px.',
          miniHtml: '<div class="account-menu"><span class="account-menu__trigger"><img class="avatar" src="../visuals/avatars/a5.webp" alt=""><span class="account-menu__name">nightjar_cs</span><span class="account-menu__chev"></span></span></div>' },
        { file: 'breadcrumb.html', label: 'Breadcrumb', sub: 'Heads and ways', css: 'components/breadcrumb.css', states: 'hover, focus-visible', screens: 'the case screen, the catalogue, My items, Provably fair, Responsible play (inventory also lists Deposit and Sign in, which carry the case screen\'s crumb behind their layers)', round: 2,
          about: 'Where this page sits: the steps above it as soft links, the page itself in white; cut to its parent with a back mark on a phone.',
          miniHtml: '<nav class="crumb" aria-label="Breadcrumb"><ol><li><a href="#">Home</a></li><li><a href="#">Cases</a></li><li><span aria-current="page">Ironbound</span></li></ol></nav>' },
        { file: 'category-bar.html', label: 'Category bar', sub: 'Heads and ways', css: 'components/category-bar.css', states: 'none of its own; the option\'s focus ring offset is the bar\'s (one snapshot)', screens: 'the catalogue', round: 2,
          about: 'The shelf\'s sections as a run of options with Search and Filters at its end: one sticky row at every width.',
          miniHtml: '<nav class="catbar" aria-label="Categories"><div class="catbar__run"><a class="seg__opt" href="#" aria-current="true">Daily</a><a class="seg__opt" href="#">Featured</a></div><div class="catbar__acts"><button class="button button--icon button--tap" type="button" aria-label="Search"><i class="icon icon--search" aria-hidden="true"></i></button></div></nav>' },
        { file: 'section-head.html', label: 'Section head', sub: 'Heads and ways', css: 'components/section-head.css', states: 'none, not interactive (its onward link is the Text link\'s)', screens: 'all eight coloured screens: Home, the case screen, the catalogue, Deposit, My items, Provably fair, Responsible play, Sign in', round: 2,
          about: 'A section\'s title on a striped tile in a mode\'s colour, a fading line and a sub line with its onward link; size M and L.',
          miniHtml: '<div class="sec-head sec-head--upgrade"><div class="sec-head__title"><span class="sec-head__tile" aria-hidden="true"><span class="icon icon--cup"></span></span>Best drops</div></div>' },
        { file: 'daily-ladder.html', label: 'Daily ladder', sub: 'Blocks', css: 'components/daily-ladder.css', states: 'hover on a tier and on the live tier (the open control is the Button\'s)', screens: 'Home, the catalogue (7 states)', round: 2,
          about: 'The five tiers of Daily cases under a head with the reset and a guest\'s one act: a table of tiers, never a climb (D-220).',
          miniHtml: '<span class="daily__chip daily__chip--opened"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6 11-11-1.4-1.4z"/></svg><span>Opened today</span></span><span class="button button--primary button--m">Open Nova case</span>' },
        { file: 'event-banner.html', label: 'Event banner', sub: 'Blocks', css: 'components/event-banner.css', states: 'hover (the scene flares, the soldier leans); the act\'s own states are the Button\'s', screens: 'Home, design/index.html', round: 2,
          about: 'An event\'s scene edge to edge: its logotype, the countdown and one act over four moving layers.',
          miniHtml: '<span class="button button--ghost button--m">See Coldfront</span>' },
        { file: 'hero.html', label: 'Hero', sub: 'Blocks', css: 'components/hero.css', states: 'none, not interactive (the badge is a picture; its hover is motion)', screens: 'Home', round: 2,
          about: 'Home\'s H1 in capitals and, for a guest, the Trustpilot line as a glass badge with five score tiles.',
          miniHtml: '<span class="hero__title" style="display:block;max-width:220px;font-size:18px">CS2 case opening with published odds</span>' },
        { file: 'empty-state.html', label: 'Empty state', sub: 'Blocks', css: 'components/empty-state.css', states: 'none, not interactive', screens: 'the catalogue (nothing matches), My items (nothing yet); --gone on no coloured screen', round: 2,
          about: 'A heading that says what is not here, the sentence that says what would put it here, and the way on: nothing yet, nothing matches (with ways to widen), and gone.',
          miniHtml: '<div class="empty"><span class="empty__art" aria-hidden="true"><i class="icon icon--box"></i></span><div class="empty__body"><p class="empty__h">No items yet.</p><p class="empty__p">Open a case and the item is listed here.</p></div></div>' },
        { file: 'money-strip.html', label: 'Money strip', sub: 'Blocks', css: 'components/money-strip.css', states: 'hover, focus-visible (links only)', screens: 'Home, the case screen, Deposit, Sign in', round: 2,
          about: 'The numbers a player weighs before spending on one coloured plate: tested RTP, expected value, time to Steam, commission, and two checked rounds; the case screen\'s form shows the same strip with four panels.',
          miniHtml: '<div class="money-strip money-strip--pays"><div class="money-strip__in"><div class="money-strip__strip"><div class="money-strip__stub"><i class="icon icon--dollar money-strip__mark" aria-hidden="true"></i><h3 class="money-strip__title">What this case pays</h3></div><div class="money-strip__p"><span class="money-strip__k">Tested RTP</span><span class="money-strip__v">94.2<small> %</small></span></div></div></div></div>' },
        { file: 'payment-record.html', label: 'Payment record', sub: 'Blocks', css: 'components/payment-record.css', states: 'none, not interactive', screens: 'Deposit', round: 2,
          about: 'The record of a payment on its way: its lines, the line that decides a withdrawal last, the line that says when to ask, and the ways on.',
          miniHtml: '<div class="payment-record"><div class="payment-record__lines"><div class="kv kv--m"><span class="kv__k">Amount</span><span class="kv__v">$40.00</span></div><div class="kv kv--m kv--total"><span class="kv__k">Minimum to send to Steam</span><span class="kv__v">$5.00, met</span></div></div></div>' } ] }
    ]
  };

  function here() { var p = location.pathname.split('/').pop(); return p || 'overview.html'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function panel() {
    var cur = here(), h = [];
    h.push('<a class="kp-out" href="../../index.html">&larr; Design process</a>');
    h.push('<div class="kp-head"><span class="kp-badge">Design system</span><span class="kp-sub">tokens and components</span><a class="kp-all" href="overview.html">Whole system &rarr;</a></div>');
    h.push('<div class="kp-theme" role="group" aria-label="Theme"><button type="button" data-t="dark">Dark</button><button type="button" data-t="light">Light</button></div>');
    h.push('<nav class="kp-tree" aria-label="The stand">');
    window.KIT_NAV.groups.forEach(function (g, gi) {
      var open = g.pages.some(function (p) { return p.file === cur; }), lastSub = null;
      h.push('<div class="kp-group' + (open ? ' is-open' : '') + '"><button type="button" class="kp-gh" aria-expanded="' + open + '" aria-controls="kp-g' + gi + '">' + esc(g.label) + ' <span class="kp-n">' + g.pages.length + '</span></button><div class="kp-pages" id="kp-g' + gi + '">');
      g.pages.forEach(function (p) {
        var is = p.file === cur;
        if (p.sub && p.sub !== lastSub) { h.push('<span class="kp-sub-h">' + esc(p.sub) + '</span>'); } lastSub = p.sub;
        h.push('<a class="kp-page' + (is ? ' is-current' : '') + '" href="' + p.file + '"' + (is ? ' aria-current="page"' : '') + '>' + esc(p.label) + '</a>');
        if (is && window.KIT_SECTIONS && window.KIT_SECTIONS.length) {
          h.push('<div class="kp-secs">' + window.KIT_SECTIONS.map(function (s) { return '<a class="kp-sec" href="#' + s.id + '">' + esc(s.label) + '</a>'; }).join('') + '</div>');
        }
      });
      h.push('</div></div>');
    });
    h.push('</nav><div class="kp-foot"><a href="../overview.html">&larr; Product (all screens)</a><a href="../concept/concept.html">Product language (Concept) &#8599;</a></div>');
    var aside = document.createElement('aside'); aside.className = 'kp'; aside.id = 'kit-panel'; aside.setAttribute('aria-label', 'Design system'); aside.innerHTML = h.join('');
    var scrim = document.createElement('div'); scrim.className = 'kp-scrim';
    var tog = document.createElement('button'); tog.type = 'button'; tog.className = 'kp-toggle'; tog.setAttribute('aria-controls', 'kit-panel'); tog.setAttribute('aria-expanded', 'false');
    tog.innerHTML = '<span aria-hidden="true">&#9776;</span> Design system';
    document.body.insertBefore(scrim, document.body.firstChild); document.body.insertBefore(aside, scrim); document.body.insertBefore(tog, aside);
    function shut() { aside.classList.remove('is-open'); scrim.classList.remove('is-open'); tog.setAttribute('aria-expanded', 'false'); }
    tog.addEventListener('click', function () { aside.classList.add('is-open'); scrim.classList.add('is-open'); tog.setAttribute('aria-expanded', 'true'); });
    scrim.addEventListener('click', shut);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
    aside.addEventListener('click', function (e) {
      var b = e.target.closest('.kp-gh');
      if (b) { var g = b.parentNode, o = !g.classList.contains('is-open'); g.classList.toggle('is-open', o); b.setAttribute('aria-expanded', String(o)); return; }
      var t = e.target.closest('.kp-theme button'); if (t) { setTheme(t.getAttribute('data-t')); return; }
      if (e.target.closest('a')) shut();
    });
    setTheme(readTheme());
  }

  var MINI = {
    arch: '<i style="width:34px;height:22px;border-radius:5px;background:var(--bg-act)"></i><i style="width:34px;height:34px;border-radius:5px;background:var(--bg-card-deep);box-shadow:var(--line-edge-lit)"></i><i style="width:34px;height:48px;border-radius:5px;background:var(--bg-layer);box-shadow:var(--line-edge-lit)"></i>',
    color: ['--bg-page', '--bg-card', '--bg-tile', '--bg-act', '--bg-lit', '--text-money', '--bg-match', '--bg-rarity-3', '--bg-rarity-5', '--text-body'].map(function (v) { return '<i style="width:22px;height:60px;border-radius:5px;background:var(' + v + ');box-shadow:var(--line-edge)"></i>'; }).join(''),
    type: '<span style="font-weight:900;font-size:40px;line-height:1;color:var(--text-hi)">Aa</span><span style="display:grid;gap:4px;font-size:12px;line-height:1.2"><b style="color:var(--text-hi);text-transform:uppercase;font-size:13px;font-weight:900">Before you spend</b><span style="color:var(--text-body)">Tested RTP, in coins</span><span style="color:var(--text-money);font-weight:900">1 250</span></span>',
    geom: [4, 8, 12, 16, 24, 32].map(function (n) { return '<i style="width:' + n + 'px;height:' + n + 'px;background:var(--bg-lit);border-radius:2px"></i>'; }).join('') + '<i style="width:40px;height:40px;border:3px solid var(--text-hi);border-radius:12px 0 0 0;border-right:0;border-bottom:0;margin-left:10px"></i>',
    icons: ['box', 'battle', 'shield', 'steam', 'gift', 'crown', 'bolt', 'skull'].map(function (n) { return '<i class="kt-ic" style="--i:var(--icon-' + n + ');font-size:24px;color:var(--text-hi)"></i>'; }).join(''),
    depth: '<i style="width:44px;height:44px;border-radius:10px;background:var(--bg-card);box-shadow:var(--depth-card)"></i><i style="width:44px;height:44px;border-radius:10px;background:var(--bg-mode-cases);box-shadow:var(--line-lit-top)"></i><i style="width:44px;height:44px;border-radius:10px;background:var(--bg-fair);box-shadow:var(--depth-fair)"></i>'
  };
  // a card is a link, so a link in its sample is drawn as a span: a link inside a link breaks the card in two
  function cards() {
    var box = document.getElementById('kit-cards'); if (!box) return;
    var h = [];
    window.KIT_NAV.groups.forEach(function (g) {
      g.pages.forEach(function (p) {
        if (p.file === 'overview.html') return;
        h.push('<a class="kc" href="' + p.file + '"><div class="kc-mini" aria-hidden="true" inert>' + (p.miniHtml || MINI[p.mini] || '').replace(/<a\b([^>]*)>/g, function (t, at) { var c = at.match(/class="[^"]*"/); return '<span' + (c ? ' ' + c[0] : '') + '>'; }).replace(/<\/a>/g, '</span>') + '</div><span class="kt-eyebrow">' + esc(g.label) + '</span><b>' + esc(p.label) + '</b><p>' + esc(p.about) + '</p></a>');
      });
    });
    box.innerHTML = h.join('');
    var inv = document.getElementById('kit-inventory'); if (!inv) return;
    var rows = [];
    window.KIT_NAV.groups.forEach(function (g) { if (!g.level) return; g.pages.forEach(function (p) {
      rows.push('<tr><td><a href="' + p.file + '">' + esc(p.label) + '</a></td><td class="n">' + g.level + '</td><td>' + esc(p.sub || '') + '</td><td><code>design/system/' + esc(p.css) + '</code></td><td>' + esc(p.states) + '</td><td>' + esc(p.screens) + '</td></tr>'); }); });
    inv.innerHTML = rows.join('');
  }
  function start() { panel(); cards(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
