# Microcopy inventory

**Stage 05, step 1, written 5 October 2026.** Every string the grey product shows, inventoried once per unique string rather than once per occurrence, with where it lives so step 7 knows which file to open. **Nothing here is rewritten yet.** The columns "was" and "now" arrive at step 6 for the etalon and at step 7 for the rest; until then the string column is the "was". **Step 6, 17 October 2026:** sections 1 to 3 carry a Now column. It is filled for every row the etalon, `1.0` Home in both account states, shows: the new string, or `kept` where the string passed `voice.md` as it stands. An empty cell is a row step 7 has not reached yet. **Step 7, first move, 19 October 2026:** every row of section 1, Global, carries its Now, rewritten by the parent in the file the row names before any fanout, with the rule each change follows; `kept` means the string passes `voice.md` as it stands. **Step 7, second move, 19 October 2026:** every row the parent owns, a row living in `_nav.js` or in a `WF_STR` value, carries its Now; the rows living only in a page are the fanout's. **Step 7, third move, 19 October 2026:** the rows living only in a page were rewritten by seventeen agents, one per screen, and every row of section 2 now carries its Now. The same move found strings the step 1 scan did not list, all rewritten by the parent: the System messages of `5.10` (`WF_MSGS`, read only after a tab press), the refusals in `data-rp-refuse` on `6.1`, the `Sold back` labels of `_nav.js`, and the settlement, count and sign literals `_nav.js` writes over a page at load. Four Lives in cells are wrong and are read as corrected: `3.1-37`, `3.1-44`, `3.1-45` and `3.1-47` live in `_nav.js filterDrawerHTML`, `6.1-41` in `_nav.js excludeHTML`, and `5.9-84` and `5.9-110` in `_nav.js` from `WF_HIST`.

**Its visible place** is the Inventory section of `voice/voice.html`, next to the Microcopy rules, built at step 5 with the rest of the Voice page and read from this file at load, so both parts, Global and By screen, show whatever this file holds.

**Placeholders in the String column:** `{n}` a figure, `{d}` a data name (case, item, wear, rarity, payment method, account name), `{date}`, `{time}`, `{hash}`, `{id}` a reference. They stand where the product prints a sample, so the row shows the frame Voice owns and not the figure it never rewrites.

## How it was built, and what it covers

- **Read:** all 133 product pages in `wireframes/` (every file but `overview.html`, the hub), rendered in a browser at 1440 and at 360 with a fresh session each, so the strings `_nav.js` writes at load are read as a person sees them, plus the page source and every string literal in `wireframes/_nav.js`. Hidden text is included: closed accordions, the 360 labels, the layers in the DOM.
- **One row per unique string.** Strings that differ only by a figure, a date, a time, a hash, a reference or a data name (case, item, wear, rarity, payment method, a sample account name) are one row, written as a frame with placeholders: `Open for 12.40 coins` and `Open for 37.20 coins` are one row, `Open for {n} coins`.
- **Where it lives** names the source a rewrite must open: `WF_STR.<key>` (one declaration, `wireframes/docs/voice-input.md` a.3), `page` (the html of the pages listed), `page script` (a declaration inside that page's own script), or `_nav.js <function>` (a renderer, a.2). `_nav.js, assembled` means the line is put together at run time from pieces and no single literal holds it; the function is found from the row's pieces at step 7. Where two sources are named, the string is built from both.
- **Global** means it lives in the shell (rail, header, ticker, mobile bar, footer), or it appears on three screens or more, or it is a `WF_STR` value read on two screens or more. Everything else is in "By screen", under the screen where it first appears, and a string already in "Global" is never repeated there.
- **Not copy, and not inventoried:** figures and data names, `wireframes/docs/voice-input.md` a.5 (20 036 occurrences skipped as data); slot labels (`Logo`, `Social`, `Image`, `QR code`), b; the prototype panel, b; html and script comments, b. **Placeholder fields are inventoried and marked `PH`**, because their labels are copy and a reader must see that the value is a stand-in.
- **User content.** No free text written by a person is drawn anywhere in the product: the support form and the appeal leave their message fields empty, and nothing a person typed is shown back as prose. What a person brings is data and is not rewritten: Steam account names (`nightjar_cs` and the ticker's winners), the email and the references typed into fields, wallet addresses. Marked here once rather than per row, because no row of this file holds any.
- **SEO lines** (`<title>`, meta description, H1) are inventoried with the type `SEO / IA ownership`. They belong to the node in `ia/docs/pages/`; Voice aligns them and step 7 syncs them back, so they are never kept here in a second wording.

## Counts

| What | Count |
|---|---|
| Product pages read, each at 1440 and 360 | 133 |
| Unique strings rendered | 1257 at step 1; 1263 since `D-169` to `D-174` added six screen strings, counted at step 8 |
| of them Global | 164 |
| of them By screen | 1093 at step 1; 1099 since `D-169` to `D-174` |
| of them SEO / IA ownership | 86 |
| Strings written only on a press, in `_nav.js` (section 3) | 154 |
| Data occurrences skipped as not copy | 20 036 |
| Strings that were only a unit word around data (`{n} coins`, `{d} bot`), counted as data | 22 |

**Not covered, said plainly.** Section 3 is read from the source, not from a screen: those lines appear only after a press, and the scan lists each literal piece with its function rather than the finished sentence. Strings the scan could split badly are possible there; step 7 reads each function whole before rewriting it. `voice-input.md` a.3 counts 1 245 `data-str` marks: they are the no-script fallbacks of `WF_STR` values and are covered by the `WF_STR` rows, not listed again.

## Marks

The Marks column flags where screens say the same thing in different words, or where a string is not finished copy. **Nothing is decided here**: section 4 lists every wording found per concept, and step 3 picks the word.

| Mark | Meaning |
|---|---|
| `C1` | Taking an item out to Steam |
| `C2` | Our value for an item |
| `C3` | "Market" in three senses |
| `C4` | Adding money |
| `C5` | Limit and boundary |
| `C6` | Support and help |
| `C7` | Responsible play |
| `C8` | Legal document names |
| `C9` | Roll, round, open |
| `C10` | Item, skin, win, drop |
| `C11` | The coins unit and the sign of a figure |
| `S1` | Selling an item back |
| `S2` | Risk |
| `S3` | Favourite |
| `S4` | Cost of one open |
| `S5` | The fairness destination and its link phrases |
| `S6` | Upheld in opposite senses |
| `N1` | Daily case, free case, daily entry, free entry |
| `N2` | Wager: the ladder against "No wagering" |
| `N3` | Account and profile |
| `N4` | Appeal, review, dispute |
| `N5` | Offer and trade offer |
| `N6` | Cash out |
| `PH` | A placeholder field: the value is a stand-in for a fact a contract or a licence decides, `voice-input.md` b |
| `P` | The same string exists with and without a closing full stop |
| `K` | The same string exists with different capitals |

**No exclamation mark, no emoji and no stock phrase** ("Oops", "Congratulations", "Welcome", "successfully", "magic") was found on any of the 133 pages or in `_nav.js`. Checked by search, not by eye. The only glyphs are `✓` in the consent boxes and `✕` on a dialog's close control, both hidden from assistive technology: marks for the eye, not copy.

## 1. Global

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| G1 | rail | Cases | link | `WF_STR.cases`, page | 133 pages, 19 screens |  | kept |
| G2 | rail | Chinese ZH | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G3 | rail | CS{n} Clutch, home | accessible name | `_nav.js renderFooter/renderShell` | 133 pages, 19 screens |  | kept |
| G4 | rail | EN English | button | page, `_nav.js LANGS/barItems`, `_nav.js LANGS/langControl/setLang` | 133 pages, 19 screens |  | kept |
| G5 | rail | English EN | button | page, `_nav.js LANGS/barItems`, `_nav.js LANGS/langControl/setLang` | 133 pages, 19 screens |  | kept |
| G6 | rail | French FR | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G7 | rail | German DE | button | `_nav.js LANGS`, `_nav.js LANGS/barItems` | 133 pages, 19 screens |  | kept |
| G8 | rail | Language | accessible name | page, `_nav.js langControl/mountSwitches` | 133 pages, 19 screens |  | kept |
| G9 | rail | Language, English | accessible name | `_nav.js langControl/mountSwitches` | 133 pages, 19 screens |  | kept |
| G10 | rail | Only English is available for now. | text | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G11 | rail | Polish PL | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G12 | rail | Portuguese PT | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G13 | rail | Russian RU | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G14 | rail | Spanish ES | button | `_nav.js LANGS` | 133 pages, 19 screens |  | kept |
| G15 | rail | Turkish TR | button | `_nav.js LANGS`, `_nav.js LANGS/histTable/mountClockStruck` | 133 pages, 19 screens |  | kept |
| G16 | rail | Collapse the rail | accessible name | `_nav.js renderShell` | 132 pages, 19 screens |  | Collapse the menu; Expand the menu when collapsed. "Rail" is our word, not the reader's |
| G17 | rail | Destinations | accessible name | `_nav.js renderShell` | 132 pages, 19 screens |  | Menu, on the rail and on the header's menu button. "Destinations" is IA vocabulary |
| G18 | rail | Social | accessible name | `_nav.js renderShell` | 132 pages, 19 screens |  | kept |
| G19 | rail | Sound on | button | `_nav.js renderShell` | 132 pages, 19 screens |  | kept |
| G20 | header | Responsible play | link | `WF_STR.responsiblePlay`, page | 133 pages, 19 screens | C7 | kept |
| G21 | header | My items | link | `WF_STR.myItems`, page | 86 pages, 15 screens |  | kept |
| G22 | header | Account | accessible name | page, `_nav.js accountControl/renderAcctHero` | 85 pages, 15 screens |  | kept |
| G23 | header | History | link | `WF_STR.history`, page | 85 pages, 15 screens |  | kept |
| G24 | header | Profile | link | page, `_nav.js ACCT_TABS/accountControl` | 85 pages, 15 screens | N3 | kept |
| G25 | header | Settings | link | `WF_STR.settings`, page | 85 pages, 15 screens |  | kept |
| G26 | header | Sign out | link | page, `_nav.js accountControl/langControl` | 85 pages, 15 screens |  | kept |
| G27 | header | Withdrawals | link | page, `_nav.js HIST_TABS/accountControl` | 85 pages, 15 screens | C1 | kept |
| G28 | header | Account, {d} | accessible name | _nav.js, assembled | 84 pages, 15 screens |  | kept |
| G29 | header | {n} coins Balance | link | page, `_nav.js renderAcctHero/renderShell`, page script | 82 pages, 15 screens |  | kept |
| G30 | header | {n} coins Value of items held | link | page, `_nav.js renderAcctHero/renderShell`, page script | 82 pages, 15 screens | C2 | kept |
| G31 | header | Balance, {n} coins | accessible name | _nav.js, assembled | 82 pages, 15 screens |  | kept |
| G32 | header | Value of items held, {n} coins | accessible name | `_nav.js renderAcctHero/renderShell` | 82 pages, 15 screens | C2 | kept |
| G33 | header | Add funds. We add {n} in coins on top, up to {n} coins per {n} hours | accessible name | `_nav.js renderShell` | 73 pages, 13 screens | C4 | kept |
| G34 | header | Sign in | button (link) | `WF_STR.signIn`, page | 55 pages, 12 screens |  | kept |
| G35 | header | Not available | text | page, `_nav.js caseBody/renderFooter` | system-500-noshell, system-500, system-503-planned, system-503-unplanned; case-degraded; account-degraded |  | kept |
| G36 | header | Adding funds is closed for now. Your limits | accessible name | `_nav.js renderShell` | deposit-ceiling-reached; history-deposits-blocked; responsible-excluded, responsible-in-force | C4 C5 | kept |
| G37 | header | Balance, not available | accessible name | `_nav.js gateHTML/proofPanel` | system-500, system-503-planned, system-503-unplanned |  | kept |
| G38 | header | Value of items held, not available | accessible name | `_nav.js renderAcctHero/renderShell` | system-500, system-503-planned, system-503-unplanned | C2 | kept |
| G39 | header | Account, Name unavailable | accessible name | _nav.js, assembled | profile-steam-down |  | kept |
| G40 | header | Name unavailable | text | page script | profile-steam-down |  | kept |
| G41 | ticker | Case opening | accessible name | `_nav.js feedTile` | 120 pages, 17 screens |  | kept |
| G42 | ticker | {d}, {d} {d}, Restricted, won by {d} | accessible name | `_nav.js TIER_CH/TIER_ORDER` | 120 pages, 17 screens |  | kept |
| G43 | ticker | {d}, {d} {d}, {d}, won by {d} | accessible name | _nav.js, assembled | 120 pages, 17 screens |  | kept |
| G44 | ticker | {d}, {d} {d}, Restricted, won by {d}, a bot | accessible name | `_nav.js TIER_CH/TIER_ORDER` | 120 pages, 17 screens |  | kept |
| G45 | ticker | Live drops | text | `_nav.js renderFeed` | 120 pages, 17 screens | C10 | kept |
| G46 | ticker | Pause | button | `_nav.js renderFeed` | 120 pages, 17 screens |  | kept |
| G47 | ticker | {d}, {d} {d}, {d}, won by Name unavailable | accessible name | _nav.js, assembled | profile-steam-down |  | kept |
| G48 | bar | Shortcuts | accessible name | `_nav.js renderBar` | 132 pages, 19 screens |  | kept |
| G49 | footer | All cases | link | `WF_STR.allCases`, page | 133 pages, 19 screens |  | kept |
| G50 | footer | Card | text | `_nav.js PAY_CATS/authCard`, page script | 133 pages, 19 screens |  | kept |
| G51 | footer | Classic cases | link | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G52 | footer | Community cases | link | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G53 | footer | Company | button | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G54 | footer | Contact support | link | `_nav.js authCard/renderFooter` | 133 pages, 19 screens | C6 | Support, glossary C6 |
| G55 | footer | Cookie policy | link | `WF_STR.cookiePolicy` | 133 pages, 19 screens | C8 | kept |
| G56 | footer | Cookie settings | button | page, `_nav.js mountCookie/renderFooter` | 133 pages, 19 screens |  | kept |
| G57 | footer | Crypto | text | `_nav.js PAY_CATS/depBody`, page script | 133 pages, 19 screens |  | kept |
| G58 | footer | Daily cases | link | `_nav.js homeBody/renderFooter` | 133 pages, 19 screens | N1 | kept |
| G59 | footer | Featured cases | link | `_nav.js homeBody/renderFooter` | 133 pages, 19 screens |  | kept |
| G60 | footer | Help | button | page, `_nav.js renderFooter` | 133 pages, 19 screens | C6 | Platform, the baseline's own heading for the column holding Provably fair, `baseline.md` "The footer"; glossary C6 keeps "Help" off headings |
| G61 | footer | Need help? | text | `_nav.js renderFooter` | 133 pages, 19 screens | C6 | kept |
| G62 | footer | Online now | text | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G63 | footer | Open only in the markets we have cleared. Anywhere else, this site says so before anything can be paid. | text | `_nav.js renderFooter` | 133 pages, 19 screens | C3 | Available only in the countries we have cleared. Anywhere else, this site says so before anything can be paid. (C3 c "country"; C9 "available" for availability) |
| G64 | footer | Operating company · Registration no. · Registered address | text | `_nav.js renderFooter` | 133 pages, 19 screens | PH | kept |
| G65 | footer | Over {n} only. Opening a case is a paid chance, never an investment. Set a deposit or session limit before you start. | text | `_nav.js renderFooter` | 133 pages, 19 screens | C4 C5 | For people 18 or over. Opening a case is a paid chance, never an investment. Set a deposit or session limit before you start. ("Over 18" left out an 18-year-old; the consent says "18 or over") |
| G66 | footer | Payment methods | accessible name | `_nav.js payCountry/renderFooter` | 133 pages, 19 screens |  | kept |
| G67 | footer | Play | button | `_nav.js FAQ/accountControl` | 133 pages, 19 screens |  | kept |
| G68 | footer | Play responsibly | button | `_nav.js renderFooter/shellCfg` | 133 pages, 19 screens | C7 | kept |
| G69 | footer | Popular cases | button | `_nav.js renderFooter` | 133 pages, 19 screens |  | removed, `D-170`: its sections are the Cases column |
| G70 | footer | Prices are in coins. {n} coin = {n} | text | `_nav.js renderFooter` | 133 pages, 19 screens | C11 | kept |
| G71 | footer | Privacy policy | link | `WF_STR.privacyPolicy` | 133 pages, 19 screens | C8 K | kept |
| G72 | footer | Provably fair | link | `WF_STR.provablyFair` | 133 pages, 19 screens | S5 | kept |
| G73 | footer | Refund and payments policy | link | `WF_STR.refundPolicy` | 133 pages, 19 screens | C8 K | kept |
| G74 | footer | Support | button (link) | `WF_STR.support` | 133 pages, 19 screens | C6 | kept |
| G75 | footer | Terms of use | link | `WF_STR.termsOfUse`, page | 133 pages, 19 screens | C8 K | kept |
| G76 | footer | Total users | text | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G77 | footer | Upgrades | text | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G78 | footer | Wallet | text | `_nav.js HIST_COLS/renderFooter` | 133 pages, 19 screens |  | kept |
| G79 | footer | © {n} CS{n} Clutch. All rights reserved | text | `_nav.js renderFooter` | 133 pages, 19 screens |  | kept |
| G80 | footer | {n} Cases opened | link | `_nav.js renderFooter` | 129 pages, 19 screens |  | kept |
| G81 | footer | Last read {date} {time} | text | `_nav.js renderFooter` | system-500-noshell, system-500, system-503-planned, system-503-unplanned |  | kept |
| G82 | footer | Not available Cases opened Last read {date} {time} | link | `_nav.js caseBody/renderFooter`, `_nav.js renderFooter` | system-500-noshell, system-500, system-503-planned, system-503-unplanned |  | kept |
| G83 | layer: dialog | Close | accessible name | page, `_nav.js FAQ/authDialogHTML` | signin-dialog; deposit-dialog; cashout-dialog; responsible-confirm |  | kept |
| G84 | main | Home | link | `WF_STR.home`, page | 132 pages, 19 screens | K | kept |
| G85 | main | Breadcrumb | accessible name | page, `_nav.js renderAcctHero` | 83 pages, 14 screens |  | kept |
| G86 | main | Rolls | column head | `WF_STR.rolls`, page | 35 pages, 5 screens | C9 | Rounds, glossary C9 |
| G87 | main | Balance | text | page, `_nav.js renderAcctHero/renderShell` | 33 pages, 7 screens |  | kept |
| G88 | main | Value of items held | text | page, `_nav.js renderAcctHero/renderShell` | 33 pages, 7 screens | C2 | kept |
| G89 | main | My account | link | page, `_nav.js renderAcctHero` | 32 pages, 6 screens |  | kept |
| G90 | main | Medium | text | page | 21 pages, 5 screens |  | kept |
| G91 | main | Before you open | accessible name | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G92 | main | Best drops | heading | `_nav.js caseBody/outcomeLeft` | 20 pages, 4 screens | C10 | kept |
| G93 | main | Buying an item outright is cheaper on average than opening for it. | note | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G94 | main | Chance | column head | `_nav.js caseBody/rollRow` | 20 pages, 4 screens |  | kept |
| G95 | main | Chance to get back at least the {n} entry cost | text | `_nav.js caseBody` | 20 pages, 4 screens | S4 | Chance to get back at least its price, {n} coins (S4; the figure gets its unit, C11) |
| G96 | main | Check your settings | link | `_nav.js caseBody/mountHomeLinks` | 20 pages, 4 screens |  | kept |
| G97 | main | Every item in {d} with its chance, value and ticket range | text | `_nav.js caseBody/keepScroll` | 20 pages, 4 screens |  | kept |
| G98 | main | Expected value per open: every chance above times its value | text | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G99 | main | Favourite | button | `WF_STR.favourite` | 20 pages, 4 screens | S3 | Favorite, US spelling |
| G100 | main | Favourite this case | accessible name | page | 20 pages, 4 screens | S3 | Favorite this case |
| G101 | main | How a round is checked | heading | `_nav.js caseBody` | 20 pages, 4 screens | C9 S5 | kept |
| G102 | main | How it works | link | `WF_STR.howItWorks` | 20 pages, 4 screens |  | kept |
| G103 | main | How rounds are checked | link | `_nav.js caseBody` | 20 pages, 4 screens | C9 S5 | Provably fair, glossary S5: a link names its destination |
| G104 | main | How this case works | heading | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G105 | main | Item | column head | `_nav.js ACCT_TABS/FAQ` | 20 pages, 4 screens |  | kept |
| G106 | main | Item image | column head | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G107 | main | Risk band | text | `WF_STR.riskBand` | 20 pages, 4 screens | S2 | Risk, glossary S2 |
| G108 | main | Tested RTP, in coins at our values | text | `_nav.js caseBody` | 20 pages, 4 screens | C2 | kept |
| G109 | main | The entry cost buys one roll, and the roll lands on one item. Every item's chance is printed as a percentage and as a ticket range: the range is what the roll resolves against, which is what makes a result checkable. | text | `_nav.js caseBody` | 20 pages, 4 screens | C9 S4 | The price buys one round, and the round lands on one item. Every item's chance is printed as a percentage and as a ticket range: the range is what the round resolves against, which is what makes a result checkable. (S4, C9) |
| G110 | main | The round is fixed before the animation starts and its hash is on screen when you open. After the reveal, one link checks the round against that hash. | text | `_nav.js caseBody` | 20 pages, 4 screens | C9 | kept |
| G111 | main | Tickets | column head | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G112 | main | Value | column head | `_nav.js caseBody/depGift` | 20 pages, 4 screens |  | kept |
| G113 | main | What is in this case | heading | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G114 | main | What this case pays | heading | `_nav.js caseBody` | 20 pages, 4 screens |  | kept |
| G115 | main | By value. What usually drops | text | `_nav.js caseBody` | 19 pages, 4 screens | C10 | kept |
| G116 | main | Counted since this case launched, never reset. How rounds are checked | note | `_nav.js caseBody` | 19 pages, 4 screens | C9 S5 | Counted since this case launched, never reset. Provably fair (S5) |
| G117 | main | Last updated {date} {time} | text | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G118 | main | Observed | column head | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G119 | main | Published | column head | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G120 | main | Published against observed | heading | `_nav.js caseBody` | 19 pages, 4 screens | K | kept |
| G121 | main | Published and observed rate per rarity tier | text | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G122 | main | Restricted | column head | page, `_nav.js TIER_CH/TIER_ORDER` | 19 pages, 4 screens |  | kept |
| G123 | main | Tier | column head | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G124 | main | What usually drops | link | `_nav.js caseBody` | 19 pages, 4 screens | C10 | kept |
| G125 | main | What we publish for each tier, and what actually came out. | text | `_nav.js caseBody` | 19 pages, 4 screens |  | kept |
| G126 | main | Daily reset | text | page, `_nav.js dailyLadder` | 18 pages, 4 screens |  | kept |
| G127 | main | Favourite, {n} people | accessible name | page, `_nav.js homeBody/mountFilterDrawer` | 16 pages, 3 screens | S3 | Favorite, marked by {n} people |
| G128 | main | {d} Low risk {n} coins | link | page, `_nav.js FAQ/HIST_COLS` | 16 pages, 3 screens | S2 | {d} Low-risk case {n} coins, glossary S2, the baseline's tile form |
| G129 | main | {d}, {n} coins, Low risk | accessible name | _nav.js, assembled | 16 pages, 3 screens | S2 | {d}, {n} coins, Low-risk case |
| G130 | main | Elite | text | `_nav.js LADDER` | 15 pages, 3 screens |  | kept |
| G131 | main | Guardian | text | `_nav.js LADDER` | 15 pages, 3 screens |  | kept |
| G132 | main | {d} Medium risk {n} coins | link | page, `_nav.js FAQ/HIST_COLS` | 15 pages, 3 screens | S2 | {d} Medium-risk case {n} coins |
| G133 | main | {d}, {n} coins, Medium risk | accessible name | _nav.js, assembled | 15 pages, 3 screens | S2 | {d}, {n} coins, Medium-risk case |
| G134 | main | Legend | text | `_nav.js LADDER` | 15 pages, 3 screens |  | kept |
| G135 | main | {d} High risk {n} coins | link | page, `_nav.js FAQ/HIST_COLS` | 15 pages, 3 screens | S2 | {d} High-risk case {n} coins |
| G136 | main | {d}, {n} coins, High risk | accessible name | _nav.js, assembled | 15 pages, 3 screens | S2 | {d}, {n} coins, High-risk case |
| G137 | main | Silver | text | `_nav.js LADDER` | 15 pages, 3 screens |  | kept |
| G138 | main | Copy | button | `WF_STR.copy`, page | 14 pages, 5 screens |  | kept |
| G139 | main | Nine items, one roll. | text | `WF_STR.nineItems` | 14 pages, 4 screens | C9 | Nine items, one open. (C9 retires "roll"; principle 4's example is corrected with it) |
| G140 | main | Before opening. Your Steam inventory has to be public and your trade URL set, or a win cannot be sent to you. Check your settings | note | `_nav.js caseBody` | 13 pages, 4 screens | C10 | Before opening. Your Steam inventory has to be public and your trade URL set, or an item cannot be sent to you. Check your settings (C10) |
| G141 | main | How a withdrawal settles | link | `_nav.js caseBody` | 13 pages, 4 screens | C1 | kept |
| G142 | main | How it settles | link | `_nav.js caseBody` | 13 pages, 4 screens |  | kept |
| G143 | main | Open this case | accessible name | page | 13 pages, 4 screens |  | kept |
| G144 | main | Our values against a real copy, case average How it settles | text | `_nav.js caseBody` | 13 pages, 4 screens |  | kept |
| G145 | main | Sign in to see your tier | button (link) | `_nav.js dailyLadder` | 13 pages, 3 screens |  | kept |
| G146 | main | Skin prices. Values in this case are fixed when the case is priced. Sending a win to Steam buys a real copy at that day's price, and the difference settles against your balance in either direction. How a withdrawal settles | text | `_nav.js caseBody` | 13 pages, 4 screens | C1 C10 | Skin prices. Values in this case are fixed when the case is priced. Sending an item to Steam buys a real copy at that day's price, and the difference settles against your balance in either direction. How a withdrawal settles (C10) |
| G147 | main | Check this round | link | `WF_STR.checkRound` | 12 pages, 4 screens | C9 | kept |
| G148 | main | RTP {n} %, expected value {n} coins | link | `WF_STR.rtpEv` | 12 pages, 4 screens |  | kept |
| G149 | main | Version history | heading | `WF_STR.versionHistory` | legal-changed, legal-guest, legal-refund, legal-superseded, legal; all 6 of `1.2` |  | kept |
| G150 | main | What this place is | button (link) | `WF_STR.whatThisPlaceIs` | all 6 of `7.1`; all 5 of `7.3` |  | kept |
| G151 | main | Client seed | text | `WF_STR.clientSeed` | all 6 of `1.2`; result-checked, result-mismatched, result-owner, result |  | kept |
| G152 | main | How the proof works | button (link) | `WF_STR.howProofWorks` | result-checked, result-mismatched, result-noproof, result-owner, result; all 5 of `7.3` | S5 | Provably fair, glossary S5 |
| G153 | main | Nonce | text | `WF_STR.nonce` | all 6 of `1.2`; result-checked, result-mismatched, result-owner, result |  | kept |
| G154 | main | Settled result | text | `WF_STR.settledResult` | all 6 of `1.2`; result-checked, result-mismatched, result-owner, result |  | kept |
| G155 | main | Worth now, read {date} {time} | text | `WF_STR.worthNow`, page | withdraw-clock, withdraw-not-eligible, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded; result-checked, result-mismatched, result-noproof, result-owner, result | C2 | Value now, read {date} {time}, glossary C2 |
| G156 | main | Entry cost, one roll | text | `WF_STR.entryCost` | all 5 of `2.1`; signin-dialog; case-degraded, case-nocounter, case | C9 S4 | Price, one open (S4, C9) |
| G157 | main | {n} coin = {n} · RTP {n} %, expected value {n} coins | text | `WF_STR.peg` | all 5 of `2.1`; signin-dialog; case-nocounter, case | C11 | kept |
| G158 | main | Save | button | `WF_STR.save` | settings-no-trade, settings-refused, settings; all 5 of `6.1` |  | kept; on `5.11` the trade URL button reads Save trade URL, voice.md "One main action", `D-180` |
| G159 | main | Server seed hash | text | `WF_STR.serverSeedHash` | all 6 of `1.2`; case-open |  | kept |
| G160 | main | Amount | placeholder | page, `_nav.js HIST_COLS/histPanel` | deposit-crediting; history-cashout; responsible-confirm, responsible-excluded, responsible-guest, responsible |  | kept |
| G161 | main | Wagered towards the next tier, in coins | text | page, `_nav.js dailyLadder` | index-account; catalogue-account; all 3 of `5.10` | N2 | Wagered toward the next tier (the figure above it now carries its unit, "{n} of {n} coins") |
| G162 | main | Network | field label | `_nav.js HIST_COLS/coLayer` | deposit-crypto-nowallet, deposit-crypto; cashout-dialog; history-cashout |  | kept |
| G163 | main | Try again | button (link) | page, `_nav.js authCard/gateHTML`, page script | system-503-planned, system-503-unplanned; signin-steam-refused; deposit-declined |  | kept |
| G164 | main | Your account is restricted while we look at a pattern of deposits made from three payment instruments that do not belong to the same person. | text | page | support-appeal; withdraw-restricted, withdraw-restriction-upheld; history-withdrawals-restricted | C4 | Withdrawals are paused while we check three deposits made with payment methods in different names. Your balance and items stay yours. (Forbidden: an accusation in a stop, `B8-3`) |
| G165 | rail | Not launched yet | text | `WF_STR.notLaunched` | 133 pages, 19 screens |  | added by `D-197` as Coming soon; one word for the state since `D-199`, the founder's pick, the same string as the mode cards' (0.4-19), now read from one declaration |
| G166 | rail | Giveaways | text | `_nav.js railItems` | 133 pages, 19 screens |  | added by `D-197`, the baseline's label |
| G167 | rail | Rewards hub | text | `_nav.js railItems` | 133 pages, 19 screens |  | added by `D-197`, the baseline's label |
| G168 | rail | Top wins | text | `_nav.js railItems` | 133 pages, 19 screens |  | added by `D-197`, the baseline's label |
| G169 | rail | Affiliate program | text | `_nav.js railItems` | 133 pages, 19 screens |  | added by `D-197`, the baseline's label; Case battles, Gunfights, Upgrade and Exchange, already inventoried, are now read in the rail too, recounted at step 8 |

## 2. By screen

Grouped by node in the registry order. Pages lists every page of the screen family that carries the string; "all N" means every page of that node.

### `0.3` System pages

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 0.3-1 | main | {n} · Not found | text | page | system-404-internal, system-404-retired, system |  | kept |
| 0.3-2 | main | This address has nothing at it | SEO H1, SEO / IA ownership | page | system-404-internal, system |  | kept |
| 0.3-3 | main | A link on one of our own pages sent you here, and that is our mistake rather than yours. | text | page | system-404-internal |  | kept |
| 0.3-4 | main | Highwater has been retired | SEO H1, SEO / IA ownership | page | system-404-retired |  | kept |
| 0.3-5 | main | This case is gone rather than mistyped. | text | page | system-404-retired |  | The address is right: this case was taken off the shelf. The rest are in All cases. (Principle 5 and Microcopy 'Error, a page or a service': the line said what happened but not what still works; it now names the rest of the shelf and the route to it (the page's own All cases button)) |
| 0.3-6 | main | {n} · Internal server error | text | page | system-500-noshell, system-500 |  | kept |
| 0.3-7 | main | Something on our side failed | SEO H1, SEO / IA ownership | page | system-500-noshell, system-500 |  | kept |
| 0.3-8 | main | We already know, and it is ours to fix. | text | page | system-500-noshell, system-500 |  | kept |
| 0.3-9 | main | Who this is waiting on | text | page | system-500-noshell, system-500, system-503-planned, system-503-unplanned |  | kept |
| 0.3-10 | main | Quote this if you get in touch | text | page | system-500-noshell, system-500 |  | Quote this to Support (Glossary C6, Support for the destination and every link to it; 'get in touch' named no destination. Microcopy 'A link' names its destination) |
| 0.3-11 | main | E{n}F{n}C{n}A{n} | text | page | system-500-noshell, system-500 |  | kept |
| 0.3-12 | main | Where to go from here | text | page | system-500-noshell |  | kept |
| 0.3-13 | main | Home The featured cases, and what this place is | link | `WF_STR.home`, page | system-500-noshell |  | kept |
| 0.3-14 | main | All cases The full shelf | link | `WF_STR.allCases`, page | system-500-noshell |  | kept |
| 0.3-15 | main | {n} · Service unavailable | text | page | system-503-planned, system-503-unplanned |  | kept |
| 0.3-16 | main | This is planned maintenance | SEO H1, SEO / IA ownership | page | system-503-planned |  | kept |
| 0.3-17 | main | We took the service down on purpose. It comes back at {time}, which is about forty minutes from now. | text | page | system-503-planned |  | We took the service down on purpose. It comes back at {time}, about {n} minutes from now. (Principle 2, the number: the figure as a numeral, '40' not 'forty'; Microcopy 'Figures, dates and times', the absolute time with its zone stays first and the relative one only follows it; padding 'which is' removed, principle 1) |
| 0.3-18 | main | Nothing here reloads on its own. | text | page | system-503-planned, system-503-unplanned |  | kept |
| 0.3-19 | main | Something is overloaded, and it is us | SEO H1, SEO / IA ownership | page | system-503-unplanned |  | kept |
| 0.3-20 | main | We are working on it. There is no end time yet, and we are not going to put up a number we cannot keep. | text | page | system-503-unplanned |  | We are working on it. There is no end time yet, and we will not post one we cannot keep. Support is at the foot of this page. (principle 5; the page claims only what it can see, `D-180`) |
| 0.3-21 | main | Either the link was wrong, or what used to be here has gone. Nothing on our side is broken. | text | page | system |  | kept |

### `0.4` Cookie consent

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 0.4-1 | head | Cookie settings, everything accepted. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-accepted |  | kept |
| 0.4-2 | head | Every case shows the chance and current value of each item, plus tested RTP and expected value at that cost. Withdrawals go to Steam, commission free. | SEO description, SEO / IA ownership | page | all 8 of `0.4`; all 2 of `1.0` | C1 | kept |
| 0.4-3 | head | Cookie settings, the answer just changed. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-changed |  | kept |
| 0.4-4 | head | Home, the cookie answer has expired. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-expired |  | kept |
| 0.4-5 | head | Choosing what may be stored, nothing chosen yet. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-manage |  | Cookie settings, nothing chosen yet. CS{n} Clutch (Glossary, one concept one word: the same layer is titled "Cookie settings" on the accepted, changed, partial and rejected pages and the footer control that opens it is Cookie settings (G56); Screen heading rule, a state's title says the state) |
| 0.4-6 | head | Home, the cookie answer could not be saved. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-nostore |  | kept |
| 0.4-7 | head | Cookie settings, one purpose on and one off. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-partial |  | kept |
| 0.4-8 | head | Cookie settings, everything refused. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie-rejected |  | Cookie settings, everything rejected. CS{n} Clutch (Glossary, one concept one word: the act is "Reject all" (0.4-45), so the state reads rejected, as "accepted" matches "Accept all"; "refused" is the appeal's word, S6) |
| 0.4-9 | head | Home, with the cookie answer still pending. CS{n} Clutch | SEO title, SEO / IA ownership | page | cookie |  | Home, no cookie answer yet. CS{n} Clutch (Microcopy, a status: never "pending" with no owner; the plain fact, in the wording of the layer's own "Nothing recorded yet" (0.4-54) and the manage title) |
| 0.4-10 | main | Daily cases: climb five tiers, each one opens a free case | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | N1 | Coldfront week (`D-169`, `D-172`: the event's name on its art; a sample, `D-124`) |
| 0.4-11 | main | See daily cases | button (link) | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | N1 | See {d} (`D-169`: the event case) |
| 0.4-12 | main | CS{n} case opening with published odds | SEO H1, SEO / IA ownership | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-13 | main | Trustpilot {n} reviews | link | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-14 | main | Ways to play | heading | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-15 | main | Open a case, see every chance. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-16 | main | Open a case | button (link) | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-17 | main | Case battles | heading | `_nav.js dailyLadder/homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-18 | main | Open against someone, highest total wins. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C10 | kept |
| 0.4-19 | main | Not launched yet | text | `WF_STR.notLaunched`, `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept; since `D-199` also the rail's mark on its eight LATER rows, G165 |
| 0.4-20 | main | Gunfights | heading | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-21 | main | One round, one opponent. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C9 | kept |
| 0.4-22 | main | Upgrade | heading | `_nav.js homeBody/renderFooter` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-23 | main | Trade a skin up for a better one. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C10 | Trade a skin for one worth more. |
| 0.4-24 | main | Wager to climb. The tier decides which free case you get. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | N1 N2 P | Wager to climb. Your tier decides which daily case you get. (now read from `WF_STR.dailySub`, the one declaration 3.1 already used) |
| 0.4-25 | main | Before you spend | heading | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-26 | main | {n} % Tested RTP, {d} | link | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-27 | main | {n} h {n} m Median withdrawal to Steam | link | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C1 | {n} h {n} m Median time to Steam |
| 0.4-28 | main | {n} % Our commission on withdrawals | link | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C1 | kept |
| 0.4-29 | main | Every round Checkable without an account | link | `_nav.js FAQ/homeBody`, `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C9 | kept |
| 0.4-30 | main | What opening a case here involves | heading | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | kept |
| 0.4-31 | main | A case is a fixed set of CS{n} skins with a published chance on each one. You pay the entry cost in coins, one roll decides the item, and you can keep it, sell it back or send it to your Steam inventory. Every case shows its chances, its item values and its tested return before you open it, and every round can be checked afterwards. | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` | C9 C10 S1 S4 | A case is a fixed set of CS{n} skins with a published chance on each one. You pay its price in coins, one round decides the item, and you can keep it, sell it or send it to your Steam inventory. Every case shows its chances, its item values and its tested return before you open it, and every round can be checked afterwards. (SEO, synced to `ia/docs/pages/home.md` block C) |
| 0.4-32 | layer: cookie | Choose what we may store | text | `_nav.js mountCookie` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-33 | layer: cookie | ON Strictly necessary Signing you in, keeping you signed in, security, and remembering the answer you give here. Always on. | text | `_nav.js CK_PURPOSES`, `_nav.js mountCookie/mountShellSettings/setSound` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-34 | layer: cookie | Analytics | field label | `_nav.js CK_PURPOSES/mountCookie` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-35 | layer: cookie | Analytics Counting how many people use each part of the site, so we can tell what is working. Nothing here identifies you to anyone outside this company. | text | `_nav.js CK_PURPOSES` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-36 | layer: cookie | Marketing | field label | `_nav.js CK_PURPOSES/MSG_TABS` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-37 | layer: cookie | Marketing Measuring whether an advert brought you here. | text | `_nav.js CK_PURPOSES` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-38 | layer: cookie | Your answer, as we have it | text | `_nav.js mountCookie` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-39 | layer: cookie | Analytics on, marketing on | text | _nav.js, assembled | cookie-accepted |  | kept |
| 0.4-40 | layer: cookie | Saved | text | `_nav.js coLayer/mountCookie` | cookie-accepted, cookie-changed, cookie-partial, cookie-rejected |  | kept |
| 0.4-41 | layer: cookie | {date} at {time} | text | `_nav.js CK_STATES` | cookie-accepted, cookie-changed, cookie-partial, cookie-rejected |  | kept |
| 0.4-42 | layer: cookie | Against | text | `_nav.js mountCookie` | cookie-accepted, cookie-changed, cookie-partial, cookie-rejected |  | Under (the version the answer was given under) |
| 0.4-43 | layer: cookie | Cookie policy v{n} | text | `_nav.js mountCookie` | cookie-accepted, cookie-changed, cookie-partial, cookie-rejected | C8 | kept |
| 0.4-44 | layer: cookie | Accept all | button | `_nav.js mountCookie` | all 8 of `0.4` |  | kept |
| 0.4-45 | layer: cookie | Reject all | button | `_nav.js mountCookie` | all 8 of `0.4` |  | kept |
| 0.4-46 | layer: cookie | Save my choices | button | `_nav.js mountCookie` | cookie-accepted, cookie-changed, cookie-manage, cookie-partial, cookie-rejected |  | kept |
| 0.4-47 | main | Promotion | accessible name | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | Event (`D-169`) |
| 0.4-48 | layer: cookie | Your new answer applies from the moment you save it. It does not undo what was collected while the old answer stood. | text | `_nav.js mountCookie` | cookie-changed |  | kept |
| 0.4-49 | layer: cookie | Analytics off, marketing off | text | _nav.js, assembled | cookie-changed, cookie-rejected |  | kept |
| 0.4-50 | layer: cookie | Before we store anything on your device | text | `_nav.js mountCookie` | cookie-expired, cookie-nostore, cookie |  | kept |
| 0.4-51 | layer: cookie | You answered this before and that answer has run out, so we are asking again. Nothing beyond the strictly necessary set has been stored since it ran out. | text | `_nav.js mountCookie` | cookie-expired |  | kept |
| 0.4-52 | layer: cookie | We ask again after {n} months. | text | `_nav.js mountCookie` | cookie-expired |  | kept |
| 0.4-53 | layer: cookie | Manage purposes | button | `_nav.js mountCookie` | cookie-expired, cookie-nostore, cookie |  | kept |
| 0.4-54 | layer: cookie | Nothing recorded yet. Until you answer, only the strictly necessary set is stored. | text | `_nav.js mountCookie` | cookie-manage |  | kept |
| 0.4-55 | layer: cookie | We could not save your last answer because this browser does not let the site store it, so we are asking again. Only the strictly necessary set runs meanwhile. | text | `_nav.js mountCookie` | cookie-nostore |  | kept |
| 0.4-56 | layer: cookie | Analytics on, marketing off | text | _nav.js, assembled | cookie-partial |  | kept |
| 0.4-57 | layer: cookie | A few things are stored on your device to keep this site working. Beyond those we store nothing until you say so, and you can change your answer at any time from the foot of any page. | text | `_nav.js mountCookie` | cookie |  | kept |

### `0.9` Legal and policy

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 0.9-1 | head | Terms changed since you agreed | SEO title, SEO / IA ownership | page | legal-changed |  | Terms of use, changed since you agreed (Glossary C8: the document carries its name; H1/title rule, the state said after the subject) |
| 0.9-2 | head | Terms of use, guest | SEO title, SEO / IA ownership | page | legal-guest | C8 | kept |
| 0.9-3 | head | A superseded version | SEO title, SEO / IA ownership | page | legal-superseded |  | Terms of use, an earlier version (Glossary C8; principle 1, the plain word over 'superseded'; the title names the document as the H1 does) |
| 0.9-4 | main | Legal | text | `WF_STR.legal` | all 6 of `0.9` |  | kept |
| 0.9-5 | main | Version | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-6 | main | Effective from | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-7 | main | Published on | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-8 | main | This changed after you agreed | heading | page | legal-changed |  | kept |
| 0.9-9 | main | You agreed to v{n} on {date}. v{n} took effect on {date}. | text | page | legal-changed |  | kept |
| 0.9-10 | main | What changed: the appeal route gained a published deadline for an answer. | text | page | legal-changed | N4 | kept |
| 0.9-11 | main | Nothing here is blocked. You can read either version now, and we ask you to agree at the next thing you do that depends on it. | text | page | legal-changed |  | Nothing is blocked. You can read either version now, and we ask you to agree when you next do something that depends on it. (Principle 1 and 5: what still works, said plainly; 'at the next thing you do' was clumsy) |
| 0.9-12 | main | Read v{n}, the one you agreed to | button (link) | page | legal-changed |  | kept |
| 0.9-13 | main | Taking what you already hold out to Steam stays open, agreed or not. | note | page | legal-changed |  | Sending what you hold to Steam stays open, agreed or not. (Glossary C1: Send to Steam for the act; shorter) |
| 0.9-14 | main | In short | heading | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-15 | main | These are the rules between you and us: what you can do here, what we do, and what happens when something goes wrong. | text | page | legal-changed, legal-guest, legal-superseded, legal |  | IA owns it: block C of `ia/docs/pages/legal.md` holds the Terms lead, now "between you and us" with its second sentence on the page too (step 8) |
| 0.9-16 | main | You must be {n} or over, and cases are a paid chance, never an investment. | text | page | legal-changed, legal-guest, legal-superseded, legal |  | You must be {n} or over. Opening a case is a paid chance, never an investment. (Aligned to G65 Now, the footer: the open is the paid chance, not the case) |
| 0.9-17 | main | What you win can be kept, sold back, or sent to your Steam account. | text | page | legal-changed, legal-guest, legal-superseded, legal | C10 S1 | An item you get from a case can be kept, sold, or sent to your Steam account. (Glossary C10 (an item, not 'what you win') and S1 ('sold', not 'sold back')) |
| 0.9-18 | main | You can appeal any decision we take about your account. | text | page | legal-changed, legal-guest, legal-superseded, legal | N4 | kept |
| 0.9-19 | main | Where this summary and the document below disagree, the document is the one that governs. | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-20 | main | Contents | button | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-21 | main | Who we are and what this covers | link | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-22 | main | Your account | link | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-23 | main | Opening a case, and what a chance is | link | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-24 | main | Money in, money out | link | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-25 | main | Limits you set on yourself | link | page | legal-changed, legal-guest, legal-superseded, legal | C5 | kept |
| 0.9-26 | main | When we restrict an account | link | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-27 | main | Disputes, and how to raise one | link | page | legal-changed, legal-guest, legal-superseded, legal | N4 | Appeals, and how to make one (Glossary N4: appeal is the person asking us to change a decision; 'dispute' is retired; matches 0.9-18 and 0.9-42); `[?]` counsel confirms the clause heading, `D-180` |
| 0.9-28 | main | Changes to this document | link | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-29 | main | {n}. Who we are and what this covers | heading | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-30 | main | Clause text, written by counsel. | note | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal | PH | kept |
| 0.9-31 | main | {n}. Your account | heading | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-32 | main | Clause text. | note | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal | PH | kept |
| 0.9-33 | main | {n}. Opening a case, and what a chance is | heading | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-34 | main | {n}. Money in, money out | heading | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-35 | main | {n}. Limits you set on yourself | heading | page | legal-changed, legal-guest, legal-superseded, legal | C5 | kept |
| 0.9-36 | main | {n}. When we restrict an account | heading | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-37 | main | {n}. Disputes, and how to raise one | heading | page | legal-changed, legal-guest, legal-superseded, legal | N4 | {n}. Appeals, and how to make one (Glossary N4, as 0.9-27); `[?]` counsel confirms the clause heading, `D-180` |
| 0.9-38 | main | {n}. Changes to this document | heading | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-39 | main | v{n} current | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-40 | main | current | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-41 | main | Effective {date} · published {date} · supersedes v{n} | text | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-42 | main | The appeal route gained a published deadline for an answer. | text | page | legal-changed, legal-guest, legal-superseded, legal | N4 | kept |
| 0.9-43 | main | Required a new agreement: Yes | text | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-44 | main | Yes | text | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-45 | main | You are reading it | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-46 | main | The deposit limit was added, with the {n} hour rule on raising it. | text | page | legal-changed, legal-guest, legal-superseded, legal | C4 C5 | kept |
| 0.9-47 | main | Read this version | button (link) | page | legal-changed, legal-guest, legal-superseded, legal |  | kept |
| 0.9-48 | main | Withdrawal wording aligned to what the product does. | text | page | legal-changed, legal-guest, legal-superseded, legal | C1 | kept |
| 0.9-49 | main | Required a new agreement: No | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-50 | main | No | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-51 | main | Effective {date} · published {date} | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-52 | main | First version. | text | page | legal-changed, legal-guest, legal-refund, legal-superseded, legal |  | kept |
| 0.9-53 | main | Who we are | heading | `WF_STR.legalWho` | all 6 of `0.9` |  | kept |
| 0.9-54 | main | Operating company | text | `WF_STR.operatingCompany` | all 6 of `0.9` |  | kept |
| 0.9-55 | main | Operating company name | text | `WF_STR.operatingCompanySample` | all 6 of `0.9` | PH | kept |
| 0.9-56 | main | Registered address | text | `WF_STR.registeredAddress` | all 6 of `0.9` |  | kept |
| 0.9-57 | main | Street, city, country | text | `WF_STR.registeredAddressSample` | all 6 of `0.9` | PH | kept |
| 0.9-58 | main | Email | text | `WF_STR.email` | all 6 of `0.9` |  | kept |
| 0.9-59 | main | legal@cs{n}clutch.example | text | `WF_STR.emailSample` | all 6 of `0.9` | PH | kept |
| 0.9-60 | main | Trade register and number | text | `WF_STR.tradeRegister` | all 6 of `0.9` |  | kept |
| 0.9-61 | main | Register, no. {n} | text | `WF_STR.tradeRegisterSample` | all 6 of `0.9` | PH | kept |
| 0.9-62 | main | Supervisory authority | text | `WF_STR.supervisoryAuthority` | all 6 of `0.9` |  | kept |
| 0.9-63 | main | Licensing authority name | text | `WF_STR.supervisoryAuthoritySample` | all 6 of `0.9` | PH | kept |
| 0.9-64 | main | VAT number | text | `WF_STR.vatNumber` | all 6 of `0.9` |  | kept |
| 0.9-65 | main | VAT no. {hash} | text | `WF_STR.vatNumberSample` | all 6 of `0.9` | PH | kept |
| 0.9-66 | main | Questions about this document | heading | `WF_STR.legalQuestions` | all 6 of `0.9` |  | kept |
| 0.9-67 | main | Ask us | button (link) | `WF_STR.askUs` | all 6 of `0.9` |  | kept |
| 0.9-68 | main | How money moves in and out, what happens when a payment fails or is disputed, and what you can get back. | text | page | legal-refund | N4 | IA owns it: block C of `ia/docs/pages/legal.md` holds the aligned line, "...fails or is charged back..." plus its second sentence (N4 (c), step 8) |
| 0.9-69 | main | One coin is {n}, and every price here is in coins. | text | page | legal-refund | C11 | kept |
| 0.9-70 | main | The smallest deposit is {n}. A deposit is usually credited within {n} minutes. | text | page | legal-refund | C2 C4 C11 | kept |
| 0.9-71 | main | A deposit limit you set holds every payment we take, and raising it takes {n} hours. A transfer from your own crypto wallet cannot be stopped by it. | text | page | legal-refund | C4 C5 | A deposit limit you set applies to every payment we take, and raising it takes {n} hours. It cannot stop a transfer from your own crypto wallet. (Principle 1: plain verb ('applies to' for 'holds') and active voice; glossary C5 'Deposit limit' kept; no fact changed) |
| 0.9-72 | main | Items you hold are not covered here: keeping, selling and sending them are in the terms of use. | text | page | legal-refund | C8 S1 | Items you hold are not covered here: keeping, selling and sending them to Steam are in the Terms of use. (Glossary C8 (document name capitalised as everywhere) and C1 (sending to Steam named)) |
| 0.9-73 | main | terms of use | link | page | legal-refund | C8 K | Terms of use (Glossary C8, marks K: the document name in sentence case with its capital) |
| 0.9-74 | main | What this policy covers | link | page | legal-refund |  | kept |
| 0.9-75 | main | Paying in | link | page | legal-refund |  | Adding funds (Glossary C4: Add funds is the only word for putting money onto the balance) |
| 0.9-76 | main | When a payment fails | link | page | legal-refund |  | kept |
| 0.9-77 | main | A charge you did not make, or dispute | link | page | legal-refund | N4 | Unknown charges and chargebacks (N4 (c); shortened at step 8: the heading took two lines at 360) |
| 0.9-78 | main | What you can get back | link | page | legal-refund |  | kept |
| 0.9-79 | main | Taking money out | link | page | legal-refund |  | Cash out (Glossary N6 and C11: money paid out of the product is a cash out); `[?]` counsel confirms the clause heading, `D-180` |
| 0.9-80 | main | {n}. What this policy covers | heading | page | legal-refund |  | kept |
| 0.9-81 | main | {n}. Paying in | heading | page | legal-refund |  | {n}. Adding funds (Glossary C4, as 0.9-75) |
| 0.9-82 | main | {n}. When a payment fails | heading | page | legal-refund |  | kept |
| 0.9-83 | main | {n}. A charge you did not make, or dispute | heading | page | legal-refund | N4 | {n}. Unknown charges and chargebacks (as 0.9-77) |
| 0.9-84 | main | {n}. What you can get back | heading | page | legal-refund |  | kept |
| 0.9-85 | main | {n}. Taking money out | heading | page | legal-refund |  | {n}. Cash out (Glossary N6, as 0.9-79); `[?]` counsel confirms the clause heading, `D-180` |
| 0.9-86 | main | This is not the current version | heading | page | legal-superseded |  | kept |
| 0.9-87 | main | v{n} governed from {date} until {date}. It is kept because a decision taken while it was in force is answered under it. | text | page | legal-superseded |  | kept |
| 0.9-88 | main | Read the current version, v{n} | button (link) | page | legal-superseded |  | kept |
| 0.9-89 | main | This document is not published yet | heading | page | legal-unpublished |  | kept |
| 0.9-90 | main | There is no version of it, so there is nothing here to read and nothing you have agreed to. | text | page | legal-unpublished |  | kept |
| 0.9-91 | main | Ask us about it | button (link) | page | legal-unpublished |  | Ask us (one wording with `WF_STR.askUs` on every legal page, step 8) |

### `0.10` Support and contact

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 0.10-1 | head | Support and appeals - CS{n} Clutch | SEO title, SEO / IA ownership | page | all 10 of `0.10` | C6 N4 | kept |
| 0.10-2 | head | Contact us or appeal a decision, with a published deadline for an answer. Every restriction carries a written ground and a route to dispute it. | SEO description, SEO / IA ownership | page | all 10 of `0.10` | N4 | IA owns it: block C of `ia/docs/pages/support.md` holds the aligned line |
| 0.10-3 | main | Ticket | text | page | support-answered, support-deadline, support-submitted, support-waiting |  | kept |
| 0.10-4 | main | Answered {date} {time} | text | page | support-answered |  | kept |
| 0.10-5 | main | Our deadline for an answer | text | page | support-answered, support-deadline, support-submitted, support-waiting |  | kept |
| 0.10-6 | main | Answered, and the answer has a ground in it | text | page | support-answered |  | Answered, with the reason (Status in a timeline: the state in one line; principle 1, reason not ground) |
| 0.10-7 | main | Our answer | heading | page | support-answered |  | kept |
| 0.10-8 | main | The review is finished. The three payment instruments are in your name, as the statements you sent show. The restriction is lifted and nothing was taken from your balance. | text | page | support-answered | S6 N4 | The restriction is lifted. The statements you sent show all three payment methods are in your name. Nothing was taken from your balance. (Principle 1, the answer first; glossary S6 The restriction is lifted; payment methods as in G164) |
| 0.10-9 | main | This answer stays here for {n} months. | note | page | support-answered |  | kept |
| 0.10-10 | main | Where that leaves you | button (link) | page | support-answered |  | Your account now (A link names its destination: the page shows the balance, what is frozen and the way back to Steam) |
| 0.10-11 | main | Questions and answers | heading | `WF_STR.questionsAnswers` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-12 | main | Getting in | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-13 | main | Sign in, the geo gate, and a Steam login that will not complete | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | Sign in, the geo gate, and a Steam sign in that will not complete (glossary: "login" is retired, step 8) |
| 0.10-14 | main | My Steam login does not come back here | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | My Steam sign in does not come back here (as 0.10-13) |
| 0.10-15 | main | Close the Steam tab and press Sign in again. Nothing you chose is lost. Sign in | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-16 | main | Opening a case | button | `_nav.js FAQ/excludeHTML` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-17 | main | The case screen, the published chance, and checking a round afterwards | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C9 | kept |
| 0.10-18 | main | How do I know a round was fair? | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C9 | kept |
| 0.10-19 | main | Every round has a proof you can recompute without an account. Provably fair | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C9 S5 | kept |
| 0.10-20 | main | Putting money in | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-21 | main | Adding funds, the crediting window, and a payment that did not go through | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C4 | kept |
| 0.10-22 | main | My deposit has not arrived | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C4 | kept |
| 0.10-23 | main | Most arrive within {n} minutes. The deposit keeps its state and support can see it. Your deposits | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C4 C6 | kept |
| 0.10-24 | main | Your deposits | link | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C4 | kept |
| 0.10-25 | main | Getting your items out | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-26 | main | Withdrawing to Steam, the clock, and a trade that did not arrive | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C1 | Sending to Steam, the clock, and a trade offer that did not arrive (C1, N5) |
| 0.10-27 | main | What if a win cannot be sent to Steam? | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C1 C10 | What if an item cannot be sent to Steam? (C10) |
| 0.10-28 | main | It stays in My items. You can send it later, or sell it back for coins at its value. My items | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C2 S1 | It stays in My items. You can send it later, or sell it for coins. My items (S1; C2 retires "at its value" phrased as a price, step 8) |
| 0.10-29 | main | Limits and self exclusion | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C5 | kept |
| 0.10-30 | main | The four boundaries, what each one closes, and what none of them closes | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C5 | Your four limits, what each one closes, and what none of them closes (C5) |
| 0.10-31 | main | Can a limit stop me taking my items out? | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C5 | kept |
| 0.10-32 | main | No. No limit ever closes a withdrawal to Steam. Responsible play | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C1 C5 C7 | No. No limit ever stops you sending items to Steam. Responsible play (C1) |
| 0.10-33 | main | Your account and your data | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-34 | main | The documents, and what is held about you | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-35 | main | Do you ever ask for my Steam password? | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-36 | main | Never. You sign in on Steam's own page. Privacy policy | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | C8 | kept |
| 0.10-37 | main | When something goes wrong | button | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-38 | main | A restriction, a refused check, and a proof of ours that did not match | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support |  | kept |
| 0.10-39 | main | How do I appeal a decision? | disclosure | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | N4 | kept |
| 0.10-40 | main | Choose "Appeal a decision we took" in the form below. We answer within {n} hours. Appeal | text | `_nav.js FAQ` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | N4 | kept |
| 0.10-41 | main | Appeal | link | page, `_nav.js FAQ/mountSupportSubject` | support-answered, support-deadline, support-nodispute, support-notfound, support-refused, support-submitted, support-upheld, support-waiting, support | N4 | kept |
| 0.10-42 | main | Appeal a decision | text | page | support-appeal | N4 | kept |
| 0.10-43 | main | The decision and its ground are filled in for you. | text | page | support-appeal |  | The decision and its reason are filled in for you. (Principle 1, plain words: reason, not the IA's ground) |
| 0.10-44 | main | The decision you are appealing | text | page | support-appeal | N4 | kept |
| 0.10-45 | main | Account restricted, {date}, {time} | text | page | support-appeal |  | kept |
| 0.10-46 | main | The ground we gave, quoted back | text | page | support-appeal |  | Our reason, as we gave it (Field label as a noun; reason, not ground) |
| 0.10-47 | main | The round or transaction under dispute | text | page | support-appeal | C9 N4 | The round or transaction it is about (Glossary N4: dispute is not used) |
| 0.10-48 | main | The version of the document it was taken under | text | page | support-appeal |  | Version of the terms it was decided under (Field label as a noun, the document named (C8) instead of 'the document') |
| 0.10-49 | main | Terms of use, version in force on {date} | text | page | support-appeal | C8 | kept |
| 0.10-50 | main | version in force on {date} | link | page | support-appeal |  | kept |
| 0.10-51 | main | What you say | field label | page | support-appeal |  | Your appeal (Field label is a noun: what to enter (N4 appeal)) |
| 0.10-52 | main | Evidence, optional | field label | page | support-appeal |  | kept |
| 0.10-53 | main | Where to send the answer | field label | page | support-appeal, support-nodispute, support-notfound, support |  | Email for the answer (Field label is a noun naming what to enter, an email address) |
| 0.10-54 | main | Send the appeal | button (link) | page | support-appeal | N4 | kept |
| 0.10-55 | main | No account needed, and we never ask for an identity document here. | note | page | support-appeal, support-nodispute, support-notfound, support |  | kept |
| 0.10-56 | main | We answer within {n} hours, counted from when you send. | note | page | support-appeal |  | kept |
| 0.10-57 | main | Open since {date} {time} | text | page | support-deadline, support-waiting |  | kept |
| 0.10-58 | main | Waiting on us, and past the deadline | text | page | support-deadline |  | kept |
| 0.10-59 | main | Your balance is frozen, not reduced, while this runs. | note | page | support-deadline, support-submitted, support-waiting |  | Your balance is frozen, not reduced, while the appeal is open. (T8: say that nothing is lost and for how long; 'while this runs' named no subject) |
| 0.10-60 | main | We are late | heading | page | support-deadline |  | kept |
| 0.10-61 | main | This ticket has passed the deadline we publish for an answer. The clock keeps running and it is not reset. | text | page | support-deadline |  | kept |
| 0.10-62 | main | Missed by {n} d {n} h. | note | page | support-deadline |  | kept |
| 0.10-63 | main | The answer still comes with its ground. | note | page | support-deadline |  | The answer still comes with its reason. (Principle 1, reason not ground) |
| 0.10-64 | main | There is no decision here to appeal | heading | page | support-nodispute | N4 | kept |
| 0.10-65 | main | Nothing on this account is restricted and no check of ours has failed. If you are disputing something, tell us what it is and we will find it. | text | page | support-nodispute | N4 | Nothing on this account is restricted and no check of ours has failed. If you think we got something wrong, tell us what it is and we will find it. (Glossary N4: dispute is not used) |
| 0.10-66 | main | Write to us | heading | page | support-nodispute, support-notfound, support |  | kept |
| 0.10-67 | main | What it is about Choose one A deposit A withdrawal A case or a round My account Appeal a decision we took Something else | field label | page | support-nodispute, support-notfound, support | C1 C4 C9 N4 | kept |
| 0.10-68 | main | Choose one | option | page | support-nodispute, support-notfound, support |  | kept |
| 0.10-69 | main | A deposit | option | page | support-nodispute, support-notfound, support | C4 | kept |
| 0.10-70 | main | A withdrawal | option | page | support-nodispute, support-notfound, support | C1 | kept |
| 0.10-71 | main | A case or a round | option | page | support-nodispute, support-notfound, support | C9 | kept |
| 0.10-72 | main | Appeal a decision we took | option | page | support-nodispute, support-notfound, support | N4 | kept |
| 0.10-73 | main | Something else | option | page | support-nodispute, support-notfound, support |  | kept |
| 0.10-74 | main | Your message | field label | page | support-nodispute, support-notfound, support |  | kept |
| 0.10-75 | main | Send | button (link) | page | support-nodispute, support-notfound, support |  | Send the message (Button: a verb and the result it produces; one family with Send the appeal and Send the reply) |
| 0.10-76 | main | By email | heading | page | support-nodispute, support-notfound, support |  | kept |
| 0.10-77 | main | support@cs{n}clutch.example | link | page | support-nodispute, support-notfound, support | C6 PH | kept |
| 0.10-78 | main | We cannot find that ticket | heading | page | support-notfound |  | kept |
| 0.10-79 | main | The id {id}{n}{n}{n} does not match anything we hold. It may be mistyped, or it may belong to a different address. | text | page | support-notfound |  | The id {id} does not match any ticket we hold. It may be mistyped, or it may belong to another email address. (Principle 5: what happened, said exactly ('any ticket', 'email address')) |
| 0.10-80 | main | Send us the id below and we will look. | note | page | support-notfound |  | Send it to us with the form below and we will look. (Principle 5, what to do next; the old line put the id 'below' when it is above and the form is below) |
| 0.10-81 | main | The appeal was refused | heading | page | support-refused | N4 | kept |
| 0.10-82 | main | Answered {date}, {time}. The original decision stands and its ground stays on the record here. | text | page | support-refused |  | Answered {date}, {time}. The restriction stays, and its reason is kept on the record here. (Glossary S6: The restriction stays; reason not ground) |
| 0.10-83 | main | The review found that the deposits came from payment instruments belonging to people other than you, which the terms in force on that date do not permit. The restriction stands. | text | page | support-refused | C4 S6 N4 | The review found the deposits were made with payment methods in other people's names. The terms in force on that date do not allow that. The restriction stays. (Glossary S6 The restriction stays; C4; flat finding, no accusation (Forbidden, B8-3), payment methods as in G164) |
| 0.10-84 | main | Your balance is frozen and has not been reduced. | note | page | support-refused |  | kept |
| 0.10-85 | main | The terms this was decided under | button (link) | page | support-refused |  | kept |
| 0.10-86 | main | Time to an answer | text | page | support-refused, support-upheld |  | kept |
| 0.10-87 | main | Every ticket gets an answer within {n} hours of being sent, with the reason in it. | text | page | support-refused, support-upheld |  | kept |
| 0.10-88 | main | {n} min | text | page | support-submitted |  | kept |
| 0.10-89 | main | Appeal submitted, {date} {time} | text | page | support-submitted | N4 | Appeal sent, {date} {time} (the record says what "Send the appeal" said, `D-180`) |
| 0.10-90 | main | Waiting on us | text | page | support-submitted |  | kept |
| 0.10-91 | main | What happens now | heading | page | support-submitted |  | kept |
| 0.10-92 | main | We answer with what we decided and on what ground. | text | page | support-submitted |  | We answer with what we decided and why. (Principle 1, plain words) |
| 0.10-93 | main | The restriction is lifted | heading | page | support-upheld | S6 | kept |
| 0.10-94 | main | Your appeal was upheld on {date}, {time}, and the ground for the original decision stays on the record with the answer. | text | page | support-upheld | S6 N4 | Your appeal was accepted on {date}, {time}. The reason for the original decision stays on the record with the answer. (Glossary S6: accepted, never upheld) |
| 0.10-95 | main | Frozen | text | page | support-upheld |  | kept |
| 0.10-96 | main | Nothing | text | page | support-upheld |  | kept |
| 0.10-97 | main | It was frozen, not reduced, which is why there is nothing to restore. | note | page | support-upheld |  | kept |
| 0.10-98 | main | Back to the withdrawal | button (link) | page | support-upheld | C1 | Send to Steam (Glossary C1: the act is Send to Steam; a link names the act it starts (withdraw.html, whose act is Send to Steam)) |
| 0.10-99 | main | Waiting on you | text | page | support-waiting |  | kept |
| 0.10-100 | main | What we asked you for | heading | page | support-waiting |  | kept |
| 0.10-101 | main | Which of the three payment instruments are yours, with a statement or a screenshot showing your name on each. If one is not yours, say which. | text | page | support-waiting |  | Which of the three payment methods are yours, with a statement or a screenshot showing your name on each. If one is not yours, say which. (Payment methods, the wording G164 set for the same restriction) |
| 0.10-102 | main | Your reply | field label | page | support-waiting |  | kept |
| 0.10-103 | main | Reply | button (link) | page | support-waiting |  | Send the reply (Button: a verb and the result; one family with Send the appeal and Send the message) |
| 0.10-104 | main | Ask a question or appeal a decision. We answer within {n} hours. | text | page | support | N4 | kept |
| 0.10-105 | main | Your tickets | heading | page | support |  | kept |
| 0.10-106 | main | None yet. A message you send here gets a ticket, and its answer and its deadline stay on it. | text | page | support |  | No tickets yet. Write to us above and the ticket is listed here, with its answer and its deadline. (Empty state: why it is empty, then what to do next, in the form of 'No rounds yet. Open a case and it is listed here.') |

### `1.0` Home

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 1.0-1 | head | Open CS{n} cases with published odds and payout times | SEO title, SEO / IA ownership | page | all 2 of `1.0` |  | kept |
| 1.0-2 | main | No daily case yet | text | `_nav.js homeBody` | index-account | N1 | removed, `D-169` |
| 1.0-3 | main | Next tier at {n} coins wagered. Resets {time} | text | `_nav.js homeBody` | index-account | N2 | removed, `D-169` |
| 1.0-4 | main | See your tier | button (link) | `_nav.js homeBody` | index-account |  | removed, `D-169` |
| 1.0-5 | main | Your state | accessible name | `_nav.js homeBody` | index-account |  | removed, `D-169` |
| 1.0-6 | main | Reviews | accessible name | `_nav.js homeBody` | index-account |  | kept |
| 1.0-7 | main | {n} d {n} h {n} m left · ends {date}, {time} UTC | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | replaced by `D-172`: the four cells and the stated end, rows 1.0-8 to 1.0-10 |
| 1.0-8 | main | Days · Hours · Minutes · Seconds | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | new at `D-172`, the baseline's four units |
| 1.0-9 | main | Ends {date}, {time} UTC | text | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | new at `D-172`; `voice.md` "Forbidden": a stated end, never a bare clock |
| 1.0-10 | main | Time left in {d} | accessible name | `_nav.js homeBody` | all 8 of `0.4`; all 2 of `1.0` |  | new at `D-172` |

### `1.2` Provably fair

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 1.2-1 | head | Provably fair: check any round yourself \| CS{n} Clutch | SEO title, SEO / IA ownership | page | all 6 of `1.2` | C9 S5 | kept |
| 1.2-2 | head | See what a commit-reveal proof does and does not show, then paste a round and recompute it yourself. Public page, no account, algorithm published in full. | SEO description, SEO / IA ownership | page | all 6 of `1.2` | C9 | kept |
| 1.2-3 | main | Provably fair: check any round yourself | SEO H1, SEO / IA ownership | `WF_STR.fairH1` | all 6 of `1.2` | C9 S5 | kept |
| 1.2-4 | main | This page is public. You do not need an account to read it, and you do not need one to check a round. | text | `WF_STR.fairPublic` | all 6 of `1.2` | C9 | kept |
| 1.2-5 | main | What this proves | text | `WF_STR.fairProves` | all 6 of `1.2` |  | kept |
| 1.2-6 | main | The result of this round was fixed before you clicked, and it was not changed afterwards. | text | `WF_STR.fairProvesBody` | all 6 of `1.2` | C9 | kept |
| 1.2-7 | main | What this does not prove | text | `WF_STR.fairNotProves` | all 6 of `1.2` |  | kept |
| 1.2-8 | main | That the chances we publish are the chances the roll used. | text | `WF_STR.fairNotProvesBody` | all 6 of `1.2` | C9 | That the chances we publish are the chances the round used. |
| 1.2-9 | main | Where that is answered | text | `WF_STR.fairAnswered` | all 6 of `1.2` |  | kept |
| 1.2-10 | main | The observed rate beside every published percentage on the case screen | text | `WF_STR.fairObserved` | all 6 of `1.2` |  | kept |
| 1.2-11 | main | The published chance and current value on every item | text | `WF_STR.fairPublished` | all 6 of `1.2` |  | kept |
| 1.2-12 | main | The tested return and the expected value at that entry cost | text | `WF_STR.fairTested` | all 6 of `1.2` | S4 | The tested return and the expected value at that price (S4) |
| 1.2-13 | main | Check a round | button (link) | `WF_STR.checkARound` | all 6 of `1.2` | C9 | kept |
| 1.2-14 | main | Read the algorithm | button (link) | `WF_STR.readAlgorithm` | all 6 of `1.2` |  | kept |
| 1.2-15 | main | How a round is fixed before you click | heading | `WF_STR.fairFixedH` | all 6 of `1.2` | C9 | kept |
| 1.2-16 | main | We publish the hash of a server seed before the round is offered. The hash is a commitment: the seed behind it cannot be swapped later without the hash changing. | text | `WF_STR.fairStep1` | all 6 of `1.2` | C9 | kept |
| 1.2-17 | main | Your round is settled once, from that server seed, a client seed and a nonce. | text | `WF_STR.fairStep2` | all 6 of `1.2` | C9 | kept |
| 1.2-18 | main | The reveal plays back a result that already exists rather than deciding one while you watch. | text | `WF_STR.fairStep3` | all 6 of `1.2` |  | kept |
| 1.2-19 | main | The server seed is revealed when the seed rotates, and from then on anyone can recompute the round. | text | `WF_STR.fairStep4` | all 6 of `1.2` | C9 | kept |
| 1.2-20 | main | Two reasons a round may have no proof to check yet: it predates the published ledger, or its seed has not rotated. Neither means anything went wrong. | note | `WF_STR.fairNoProof` | all 6 of `1.2` | C9 | kept |
| 1.2-21 | main | What a round proof is made of | heading | `WF_STR.fairMadeOf` | all 6 of `1.2` | C9 | kept |
| 1.2-22 | main | Published before the round runs | text | `WF_STR.fairHashWhen` | all 6 of `1.2` | C9 | kept |
| 1.2-23 | main | Server seed | text | `WF_STR.serverSeed` | all 6 of `1.2` |  | kept |
| 1.2-24 | main | Revealed on rotation | text | `WF_STR.fairSeedWhen` | all 6 of `1.2` |  | kept |
| 1.2-25 | main | Shown with every round | text | `WF_STR.fairClientWhen` | all 6 of `1.2` | C9 | kept |
| 1.2-26 | main | A whole number that advances | text | `WF_STR.fairNonceWhat` | all 6 of `1.2` |  | kept |
| 1.2-27 | main | The number the roll produced | text | `WF_STR.fairResultWhat` | all 6 of `1.2` | C9 | The number the round produced |
| 1.2-28 | main | Ticket range | text | `WF_STR.ticketRange` | all 6 of `1.2` |  | kept |
| 1.2-29 | main | The interval the result falls in, and the item holding it | text | `WF_STR.fairRangeWhat` | all 6 of `1.2` |  | kept |
| 1.2-30 | main | The drop table in force at that round, versioned | text | `WF_STR.fairTableRow` | all 6 of `1.2` | C9 C10 | kept |
| 1.2-31 | main | Its version, printed with the round | text | `WF_STR.fairTableWhat` | all 6 of `1.2` | C9 | kept |
| 1.2-32 | main | Server seed hash, published before the round | field label | `WF_STR.fairHashLabel` | all 6 of `1.2` | C9 | kept |
| 1.2-33 | main | This is {n} characters. A server seed hash is {n}. | text | page | fair-malformed |  | kept |
| 1.2-34 | main | Server seed, revealed on rotation | field label | `WF_STR.fairSeedLabel` | all 6 of `1.2` |  | kept |
| 1.2-35 | main | A nonce is a whole number. This one has a decimal point in it. | text | page | fair-malformed |  | kept |
| 1.2-36 | main | Recompute this round | button | `WF_STR.recompute` | all 6 of `1.2` | C9 | Recompute it yourself (step 4) |
| 1.2-37 | main | If your check does not match ours | heading | `WF_STR.fairMismatchH` | all 6 of `1.2` |  | kept |
| 1.2-38 | main | Report it from the result, with the round attached. You get a reference and an answer within {n} hours. | text | `WF_STR.fairMismatchBody` | all 6 of `1.2` | C9 | kept |
| 1.2-39 | main | The algorithm, published in full | heading | `WF_STR.fairAlgoH` | all 6 of `1.2` |  | kept |
| 1.2-40 | main | Version {n}, published {date} | text | `WF_STR.fairAlgoStamp` | all 6 of `1.2` |  | kept |
| 1.2-41 | main | The computation | heading | `WF_STR.fairComputation` | all 6 of `1.2` |  | kept |
| 1.2-42 | main | HMAC-SHA{n} of the server seed, keyed with client seed:nonce. The first eight hex characters, read as a number, modulo {n}, plus one, is the ticket. The item whose ticket range holds it is the result. | text | `WF_STR.fairAlgo` | all 6 of `1.2` |  | kept |
| 1.2-43 | main | A worked example | heading | `WF_STR.fairExampleH` | all 6 of `1.2` |  | kept |
| 1.2-44 | main | Server seed {hash}, client seed nightjar, nonce {n}. HMAC starts {hash}, which is {n}; modulo {n} plus one is ticket {n}, in the range {n} to {n}, {d} {d}. Check this round Its public page | text | `WF_STR.fairExample` | all 6 of `1.2` | C9 | kept |
| 1.2-45 | main | Its public page | link | `WF_STR.itsPublicPage` | all 6 of `1.2` |  | kept |
| 1.2-46 | main | Version {n}, {date}. First published. | text | `WF_STR.fairVersionRow` | all 6 of `1.2` |  | kept |
| 1.2-47 | main | Questions | heading | `WF_STR.questions` | all 6 of `1.2` |  | kept |
| 1.2-48 | main | Can I use my own tool instead of yours? | disclosure | `WF_STR.fairQ1` | all 6 of `1.2` |  | kept |
| 1.2-49 | main | That is the point. The algorithm is published so that a stranger can write their own and get our answer. | text | `WF_STR.fairA1` | all 6 of `1.2` |  | kept |
| 1.2-50 | main | Why can I not check a round from last year? | disclosure | `WF_STR.fairQ2` | all 6 of `1.2` | C9 | kept |
| 1.2-51 | main | Rounds from before the published ledger have no commitment behind them, so they cannot be checked here. | text | `WF_STR.fairA2` | all 6 of `1.2` | C9 | kept |
| 1.2-52 | main | Your recomputation and ours agree. | text | page | fair-matched |  | kept |
| 1.2-53 | main | Settled result, ours | text | page | fair-matched, fair-proof-failed |  | kept |
| 1.2-54 | main | Recomputed here | text | page | fair-matched, fair-proof-failed |  | kept |
| 1.2-55 | main | Ticket range it lands in | text | page | fair-matched |  | Ticket range it landed in (Glossary "One concept, one word": the same label as 7.1-14, kept, on the result page; the round is already settled, so past tense) |
| 1.2-56 | main | These do not agree, and that is ours to explain rather than yours to prove. We do not yet know why. | text | page | fair-proof-failed |  | kept |
| 1.2-57 | main | Report this round | button (link) | page, `_nav.js proofPanel` | fair-proof-failed; result-mismatched | C9 | kept |
| 1.2-58 | main | Reference {id}{n}{n}{n}. The round and every field on this page go with it, and we answer within {n} hours. | text | page | fair-proof-failed | C9 | kept |
| 1.2-59 | main | No proof yet: this round's server seed has not rotated. | text | page | fair-unavailable | C9 | kept |
| 1.2-60 | main | The round is complete and correct. It becomes checkable when the seed rotates. | text | page | fair-unavailable | C9 | The round is settled and the item is real. It becomes checkable when the seed rotates. (Principle 2: no claim the page cannot yet prove ("correct" stood beside "No proof yet"); principle 5, what still holds; wording from 7.1-30, kept) |

### `2.1` Geo gate

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 2.1-1 | layer: dialog | We cannot serve this market. | heading | `_nav.js gateHTML` | gate-blocked | C3 | We cannot serve this country. (C3 c) |
| 2.1-2 | layer: dialog | The law where you are does not allow what this site does. | text | `_nav.js gateHTML` | gate-blocked |  | kept |
| 2.1-3 | layer: dialog | Washington State Gambling Commission ordered Valve to stop allowing skin transfers for gambling, October {n}. | text | `_nav.js gateHTML` | gate-blocked | C10 | kept |
| 2.1-4 | layer: dialog | Not in this country? Tell support below, we answer within {n} hours. | text | `_nav.js gateHTML` | gate-blocked | C6 | kept |
| 2.1-5 | layer: dialog | You can still browse. | text | `_nav.js openLine` | gate-blocked, gate-notlaunched, gate-unavailable |  | kept |
| 2.1-6 | layer: dialog | How drops are proven | button (link) | `_nav.js refusalActs` | gate-blocked, gate-notlaunched, gate-unavailable | C10 S5 | Provably fair (S5) |
| 2.1-7 | layer: dialog | We do not serve this market yet. | heading | `_nav.js gateHTML` | gate-notlaunched | C3 | We do not serve this country yet. |
| 2.1-8 | layer: dialog | Opening cases is not available where you are. | text | `_nav.js gateHTML` | gate-notlaunched |  | kept |
| 2.1-9 | layer: dialog | This market is open with one limit. | heading | `_nav.js gateHTML` | gate-staged | C3 C5 | Available here, with one cap. (C3 c, C5 b, C9) |
| 2.1-10 | layer: dialog | The limit | text | `_nav.js depProvider/gateHTML` | gate-staged | C5 | The cap (C5 b: a ceiling we set) |
| 2.1-11 | layer: dialog | Deposits are capped at {n} a week here for now. Withdrawal to Steam is open. | text | `_nav.js gateHTML` | gate-staged | C1 C4 C5 C11 | Deposits are capped at {n} a week here for now. Sending to Steam is available. (C1, C9) |
| 2.1-12 | layer: dialog | Continue | button | `_nav.js gateHTML` | gate-staged |  | Continue to sign in (a button names its result; it opens sign in) |
| 2.1-13 | layer: dialog | Not now | button | `_nav.js gateHTML` | gate-staged |  | kept |
| 2.1-14 | layer: dialog | We could not check your market. | heading | `_nav.js gateHTML` | gate-unavailable | C3 | We could not check your country. |
| 2.1-15 | layer: dialog | Opening cases is not available until we can. Try again shortly. | text | `_nav.js gateHTML` | gate-unavailable |  | kept |
| 2.1-16 | layer: dialog | Checking whether we serve your market | text | `_nav.js gateHTML` | gate | C3 | Checking whether we serve your country |
| 2.1-17 | layer: dialog | Checking the market | accessible name | `_nav.js gateHTML` | gate | C3 | Checking your country |

### `2.4` Sign in with Steam

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 2.4-1 | head | Sign in with Steam. CS{n} Clutch | SEO title, SEO / IA ownership | page | signin-blocked, signin-consent-given, signin-consent-partial, signin |  | kept |
| 2.4-2 | head | Sign in with Steam OpenID. We never ask for your password and we never change anything on your Steam account. | SEO description, SEO / IA ownership | page | signin-blocked, signin-consent-given, signin-consent-partial, signin-steam-refused, signin-steam-unavailable, signin |  | kept |
| 2.4-3 | head | Sign in dialog over the case screen. CS{n} Clutch | SEO title, SEO / IA ownership | page | signin-dialog |  | kept |
| 2.4-4 | head | Steam refused the sign in. CS{n} Clutch | SEO title, SEO / IA ownership | page | signin-steam-refused |  | IA owns it: block C of `ia/docs/pages/signin.md` holds the aligned line |
| 2.4-5 | head | Steam is not answering. CS{n} Clutch | SEO title, SEO / IA ownership | page | signin-steam-unavailable |  | kept |
| 2.4-6 | main | I agree to the Terms and Conditions and the Privacy Policy. | text | page, `_nav.js ?/HIST_COLS`, `_nav.js authCard` | all 7 of `2.4` | C8 | I agree to the Terms of use and the Privacy policy. (C8, the consent rule) |
| 2.4-7 | main | Terms and Conditions | link | `_nav.js authCard` | all 7 of `2.4` | C8 | Terms of use |
| 2.4-8 | main | Privacy Policy | link | `_nav.js authCard` | all 7 of `2.4` | C8 K | Privacy policy |
| 2.4-9 | main | I declare that I am {n} or over. | text | `_nav.js authCard` | all 7 of `2.4` |  | kept |
| 2.4-10 | main | Tick both to continue. Neither declaration has been made yet. | text | `_nav.js authCard/wireAuth` | signin-blocked |  | kept |
| 2.4-11 | main | Sign in with Steam | button (link) | page, `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin |  | kept |
| 2.4-12 | main | or continue with | text | `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin |  | kept |
| 2.4-13 | main | To withdraw skins, link Steam, any time. | text | `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin | C1 C10 | To send items to Steam, link your Steam account, any time. (C1) |
| 2.4-14 | main | We never ask for your password or change your Steam profile. | text | `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin | N3 | kept |
| 2.4-15 | main | Or keep looking around without an account | heading | `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-steam-refused, signin-steam-unavailable, signin |  | kept |
| 2.4-16 | main | Back to the case | link | `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-steam-refused, signin-steam-unavailable, signin |  | See the cases (`voice-input.md` f row 22: no case behind this arrival) |
| 2.4-17 | main | Back to the case or home. Everything here is readable without an account. | text | page, `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-steam-refused, signin-steam-unavailable, signin |  | See the cases or go home. Everything here is readable without an account. |
| 2.4-18 | main | home | link | `_nav.js authCard/barItems` | signin-blocked, signin-consent-given, signin-consent-partial, signin-steam-refused, signin-steam-unavailable, signin | K | kept |
| 2.4-19 | main | Both declarations made. | text | `_nav.js authCard/wireAuth` | signin-consent-given |  | kept |
| 2.4-20 | main | The age declaration is still missing. | text | `_nav.js authCard/wireAuth` | signin-consent-partial |  | kept |
| 2.4-21 | main | Steam returned an identity we could not verify | text | `_nav.js authCard` | signin-steam-refused |  | kept |
| 2.4-22 | main | We got an answer from Steam and could not confirm it was you. This is on our side. Nothing about your account here changed. | text | `_nav.js authCard` | signin-steam-refused |  | kept |
| 2.4-23 | main | Reference SR{n} for support | text | `_nav.js authCard` | signin-steam-refused | C6 | kept |
| 2.4-24 | main | Steam is not answering right now | text | `_nav.js authCard` | signin-steam-unavailable |  | kept |
| 2.4-25 | main | This is on Steam's side. Try again shortly. Everything public still works without an account. | text | `_nav.js authCard` | signin-steam-unavailable |  | kept |

### `3.1` Case catalogue

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 3.1-1 | head | Every case here shows what is inside before you open it: the entry cost, the risk band, and every item with its published chance and its current value. | SEO description, SEO / IA ownership | page | all 7 of `3.1` | S2 S4 | IA owns it: block C of `ia/docs/pages/catalogue.md` holds the aligned line |
| 3.1-2 | main | All CS{n} cases, with published chances and values | SEO H1, SEO / IA ownership | `WF_STR.catalogueH1` | all 7 of `3.1` |  | kept |
| 3.1-3 | main | Categories | text | `WF_STR.categories`, page | all 7 of `3.1` |  | kept |
| 3.1-4 | main | Daily | link | `WF_STR.daily` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue |  | kept |
| 3.1-5 | main | Featured | link | `WF_STR.featured` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-filtered, catalogue-loading, catalogue |  | kept |
| 3.1-6 | main | Community | link | `WF_STR.community` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue |  | kept |
| 3.1-7 | main | Classic | link | `WF_STR.classic` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue |  | kept |
| 3.1-8 | main | Search | button | `WF_STR.search` | all 7 of `3.1` |  | kept |
| 3.1-9 | main | Filters | button | `WF_STR.filters`, page | all 7 of `3.1` |  | kept |
| 3.1-10 | main | Wager to climb. The tier decides which free case you get | text | `WF_STR.dailySub` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue | N1 N2 P | Wager to climb. Your tier decides which daily case you get. |
| 3.1-11 | main | Available now: {n} cases | button | `_nav.js dailyLadder` | index-account; catalogue-account |  | Open daily case |
| 3.1-12 | main | Our pick of the shelf | text | `WF_STR.featuredSub` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-filtered, catalogue-loading, catalogue |  | kept |
| 3.1-13 | main | Cases our players put together | text | `WF_STR.communitySub` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue |  | kept |
| 3.1-14 | main | The collections that were here first | text | `WF_STR.classicSub` | catalogue-account, catalogue-degraded, catalogue-filter, catalogue-loading, catalogue |  | kept |
| 3.1-15 | main | What the numbers on a case mean | heading | `WF_STR.numbersH2` | all 7 of `3.1` |  | kept |
| 3.1-16 | main | Every tile shows the entry cost of one open and the risk band of the case, High, Medium or Low, read from its drop table. Open a case to see every item with its chance, its current value and the ticket range the roll resolves against. The daily case is earned by wagering, and the tier you reach decides which case it opens. | text | `WF_STR.numbersBody` | all 7 of `3.1` | C9 C10 S2 S4 N1 N2 | Every tile shows the price of one open and the risk of the case, high, medium or low, read from its drop table. Open a case to see every item with its chance, its current value and the ticket range the round resolves against. The daily case is earned by wagering, and the tier you reach decides which case it opens. (S2, S4, C9) |
| 3.1-17 | main | Search cases by name | accessible name | page | all 7 of `3.1` |  | kept |
| 3.1-18 | main | {d} Risk not available Cost not available | link | page | catalogue-degraded | S2 | {d} Risk not available Price not available (Glossary S4: price, not cost; Risk not available kept (S2 label word)) |
| 3.1-19 | main | Favourite count not available | note | page | catalogue-degraded | S3 | Favorite count not available (Glossary S3, US spelling) |
| 3.1-20 | main | {d}, Cost not available coins, Risk not available | accessible name | _nav.js, assembled | catalogue-degraded | S2 | kept |
| 3.1-21 | main | Filters {n} | button | `WF_STR.filters` | catalogue-empty, catalogue-filtered |  | kept |
| 3.1-22 | main | under {n} coins x | text | page | catalogue-empty, catalogue-filtered |  | Under {n} coins x (Sentence case everywhere (glossary, how the product addresses people)) |
| 3.1-23 | main | High risk only x | text | page | catalogue-empty | S2 | High risk x (Glossary S2; aligned to the live chip mountFilterDrawer writes (F.risk + ' risk'), one wording for one chip) |
| 3.1-24 | main | Clear all | button (link) | page | catalogue-empty, catalogue-filtered |  | kept |
| 3.1-25 | main | {n} cases match, out of {n} | text | page | catalogue-empty |  | kept |
| 3.1-26 | main | Nothing matches these two filters. | empty state | page | catalogue-empty |  | kept |
| 3.1-27 | main | Under {n} coins, and High risk only. No case on the shelf is both. | empty state | page | catalogue-empty | S2 | No case on the shelf is both under {n} coins and high risk. (Empty state: why it is empty in one line; glossary S2 (risk, sentence case inside a sentence)) |
| 3.1-28 | main | The cheapest High risk case is {n} coins. Raise the ceiling to {n} | text | page | catalogue-empty | C5 S2 | The cheapest high-risk case is {n} coins. Show cases up to {n} coins (Glossary S2 tile form (high-risk case); C5: ceiling is not used; button names its result and a figure keeps its unit) |
| 3.1-29 | main | Raise the ceiling to {n} | button (link) | page | catalogue-empty | C5 | Show cases up to {n} coins (Button: a verb and the result it produces; C5 retires ceiling; a figure is never split from its unit) |
| 3.1-30 | main | One case matches if the risk level is dropped. Drop the risk level | text | page | catalogue-empty | C10 S2 | One case matches without the risk filter. Drop the risk filter (Glossary S2: Risk, not risk level) |
| 3.1-31 | main | Drop the risk level | button (link) | page | catalogue-empty | C10 S2 | Drop the risk filter (Glossary S2: Risk, not risk level; button names what it removes) |
| 3.1-32 | main | The shelf holds {n} cases in {n} sections. See all of them | text | page | catalogue-empty |  | kept |
| 3.1-33 | main | See all of them | link | page | catalogue-empty |  | kept |
| 3.1-34 | main | Filters in force | accessible name | page | catalogue-empty, catalogue-filtered |  | kept |
| 3.1-35 | main | Remove filter: under {n} coins | accessible name | page | catalogue-empty, catalogue-filtered |  | Remove filter: Under {n} coins (Accessible name: the visible label's own words (follows 3.1-22); same form the live chip builds, 'Remove filter: ' + label) |
| 3.1-36 | main | Remove filter: High risk only | accessible name | page | catalogue-empty | S2 | Remove filter: High risk (Accessible name: the visible label's own words (follows 3.1-23); glossary S2) |
| 3.1-37 | layer: filter drawer | Filter | heading | page | catalogue-filter |  | kept |
| 3.1-38 | layer: filter drawer | Reset all | button | `_nav.js filterDrawerHTML` | catalogue-filter |  | Clear all (one word with the shelf, 3.1-24, `D-180`) |
| 3.1-39 | layer: filter drawer | Case name | field label | `_nav.js filterDrawerHTML/mountFilterDrawer` | catalogue-filter |  | kept |
| 3.1-40 | layer: filter drawer | Price amount, in coins | text | `_nav.js filterDrawerHTML` | catalogue-filter | S4 | Price, in coins (S4) |
| 3.1-41 | layer: filter drawer | Minimum entry cost | field label | `_nav.js filterDrawerHTML` | catalogue-filter | S4 | Minimum price |
| 3.1-42 | layer: filter drawer | Maximum entry cost | field label | `_nav.js filterDrawerHTML` | catalogue-filter | S4 | Maximum price |
| 3.1-43 | layer: filter drawer | Risk level | text | `_nav.js filterDrawerHTML` | catalogue-filter | S2 | Risk (S2) |
| 3.1-44 | layer: filter drawer | Low | field label | page | catalogue-filter |  | kept |
| 3.1-45 | layer: filter drawer | High | field label | page | catalogue-filter |  | kept |
| 3.1-46 | layer: filter drawer | Case type | field label | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-47 | layer: filter drawer | All | option | page | catalogue-filter |  | kept |
| 3.1-48 | layer: filter drawer | Date, newest first | option | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-49 | layer: filter drawer | Entry cost, low to high | option | `_nav.js filterDrawerHTML` | catalogue-filter | S4 | Price, low to high |
| 3.1-50 | layer: filter drawer | Entry cost, high to low | option | `_nav.js filterDrawerHTML` | catalogue-filter | S4 | Price, high to low |
| 3.1-51 | layer: filter drawer | Show {n} cases | button | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-52 | layer: filter drawer | Close the filters | accessible name | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-53 | layer: filter drawer | Decrease the minimum | accessible name | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-54 | layer: filter drawer | Increase the minimum | accessible name | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-55 | layer: filter drawer | Decrease the maximum | accessible name | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-56 | layer: filter drawer | Increase the maximum | accessible name | `_nav.js filterDrawerHTML` | catalogue-filter |  | kept |
| 3.1-57 | main | name contains "cold" x | text | page | catalogue-filtered |  | Name has “cold” x (Sentence case; aligned to the live chip mountFilterDrawer writes (R62 'Name has “', kept by the parent), one wording for one chip) |
| 3.1-58 | main | {n} case matches, out of {n} | text | page | catalogue-filtered |  | kept |
| 3.1-59 | main | Remove filter: name contains cold | accessible name | page | catalogue-filtered |  | Remove filter: Name has “cold” (Accessible name: the visible label's own words (follows 3.1-57), as the live chip builds it) |
| 3.1-60 | main | Loading the shelf | text | page | catalogue-loading |  | Reading the favorite counts (Loading: says exactly what is being read; node 3.1 (D-133): the loading state waits only on the favorite count, the static figures stay, so 'the shelf' was not what loads) |
| 3.1-61 | main | Loading | accessible name | page | catalogue-loading |  | Reading the favorite count (Loading: never 'Loading' with nothing after it; says what is being read) |

### `3.3` Case screen

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 3.3-1 | head | {d}: drop chances, values and tested RTP | SEO title, SEO / IA ownership | page | 18 pages, 2 screens | C10 | kept |
| 3.3-2 | head | Every item in {d} with its chance, its current value and its ticket range, plus the tested RTP and the expected value at this entry cost. | SEO description, SEO / IA ownership | page | 20 pages, 4 screens | S4 | IA owns it: block C of `ia/docs/pages/case.md` holds the aligned line |
| 3.3-3 | main | Nine items, two rolls. | text | page | case-account-2, case-open-2, case-outcome-2 | C9 | Nine items, two opens. (Glossary C9: roll retired; the parent's Now on 3.3-42 and G139 'Nine items, one open.') |
| 3.3-4 | main | How many | text | page | case-account-2, case-account-5, case-account; deposit-dialog |  | Cases to open (Field label is a noun; glossary C9 (c), the baseline's 'Cases to open') |
| 3.3-5 | main | Open for {n} coins | button (link) | page | case-account-2, case-account-5, case-account; deposit-dialog | S4 | kept |
| 3.3-6 | main | After this open, {n} coins · {n} coin = {n} · RTP {n} %, expected value {n} coins | text | `WF_STR.peg`, page | case-account-2, case-account-5, case-account | C11 | kept |
| 3.3-7 | main | How many to open | accessible name | page | case-account-2, case-account-5, case-account; deposit-dialog | S4 | Cases to open (Accessible name = the visible label's own words; glossary C9 (c)) |
| 3.3-8 | main | Nine items, five rolls. | text | page | case-account-5, case-open-5, case-outcome-5 | C9 | Nine items, five opens. (Glossary C9; matches 3.3-3 and G139) |
| 3.3-9 | main | {n} coin = {n} · RTP {n} %, expected value below | text | `WF_STR.peg` | case-degraded | C11 | kept |
| 3.3-10 | main | RTP {n} %, expected value below | link | page | case-degraded |  | kept |
| 3.3-11 | main | Values could not be read. Last read {date} {time}, and nothing here shows a value from then. | text | `_nav.js caseBody` | case-degraded |  | kept |
| 3.3-12 | main | {n} % chance on this case | text | page | case-interrupted, case-outcome |  | kept |
| 3.3-13 | main | This round did not finish on this device. The result was decided before the animation started, so it is already yours and it is below. | note | page | case-interrupted | C9 | The reveal did not finish on this device. The result was fixed before the animation started, so it is already yours and it is below. (Principle 5 (say what happened: the animation stopped, not the round, which was settled); T6 wording 'fixed before the animation started') |
| 3.3-14 | main | As of {date} {time} · Float {n} · Pattern {n} · Inspect in game | text | page | case-interrupted, case-outcome |  | kept |
| 3.3-15 | main | Inspect in game | link | `_nav.js mountInspect` | case-interrupted, case-outcome-2, case-outcome-5, case-outcome |  | kept |
| 3.3-16 | main | Credited {n} · a copy from us {n}, read {date} {time} | text | page | case-interrupted, case-outcome | C2 | Value {n} coins · a copy on sale {n} coins, read {date} {time} (Glossary C2 (value, not 'Credited' for a win), C3 b (copies on sale), C11 (a coin figure carries its unit)) |
| 3.3-17 | main | Open again for {n} coins | button (link) | page | case-interrupted, case-outcome-2, case-outcome |  | kept |
| 3.3-18 | main | Sell for {n} coins | button | page | case-interrupted, case-outcome-2, case-outcome-5, case-outcome | S1 | kept |
| 3.3-19 | main | Send to Steam, {n} coins | button (link) | page | case-interrupted, case-outcome | C1 C11 | kept |
| 3.3-20 | main | Saved to My items. Selling can't be undone. | text | page | case-interrupted, case-outcome | S1 | Saved to My items. Selling cannot be undone. (Dangerous act, said plainly; 'cannot' as everywhere else in the product (the only contraction found)) |
| 3.3-21 | main | Share it | link | page | case-interrupted, case-outcome |  | Share this round (Microcopy 'A line that shares a result': names the round, never 'Share it') |
| 3.3-22 | main | See it on the Steam Market | link | page | case-interrupted, case-outcome-2, case-outcome-5, case-outcome | C3 | kept |
| 3.3-23 | main | Before sending to Steam. Your Steam inventory has to be public and your trade URL set, or a win cannot be sent to you. Check your settings | note | `_nav.js caseBody` | case-interrupted, case-open-2, case-open-5, case-open, case-outcome-2, case-outcome-5, case-outcome | C1 C10 | Before sending to Steam. Your Steam inventory has to be public and your trade URL set, or an item cannot be sent to you. Check your settings (C10) |
| 3.3-24 | main | This round | accessible name | page | case-interrupted, case-open-2, case-open-5, case-open | C9 | This round (one open, kept); These rounds on the two and five open pages (Accessible name follows what the block holds: several rounds and hashes on a multi open; glossary C9) |
| 3.3-25 | main | The observed rate for this case is not published. Every chance and value is above, and every round can be checked after it opens. How rounds are checked | note | `_nav.js caseBody` | case-nocounter | C9 S5 | The observed rate for this case is not published. Every chance and value is above, and every round can be checked after it opens. Provably fair (S5) |
| 3.3-26 | main | Published against observed, withdrawn | accessible name | `_nav.js caseBody` | case-nocounter |  | kept |
| 3.3-27 | main | Opening {n} rolls. All {n} results were settled before this animation started. | text | page | case-open-2, case-open-5 | C9 | Opening {n} cases. All {n} results were fixed before the animation started. (Glossary C9 c ('Opening 2 cases'); T6 line 'The result was fixed before the animation started') |
| 3.3-28 | main | Spent | text | page | case-open-2, case-open-5, case-open |  | kept |
| 3.3-29 | main | {n} server seed hashes | text | page | case-open-2, case-open-5 |  | kept |
| 3.3-30 | main | Each of the {n} rolls was fixed before you clicked, and each has its own hash. After the reveal, every roll is checked on its own. | text | page | case-open-2, case-open-5 | C9 | Each of the {n} rounds was fixed before you opened, and each has its own hash. After the reveal, each round is checked on its own. (Glossary C9 (round); 'opened' instead of 'clicked', mobile first) |
| 3.3-31 | main | Opening. The result was fixed before the animation started. | text | page | case-open |  | kept |
| 3.3-32 | main | {n} % chance {d} {d} {d} · Restricted Sell for {n} coins | text | page | case-outcome-2, case-outcome-5 | S1 | kept |
| 3.3-33 | main | {n} % chance {d} {d} {d} · {d} Sell for {n} coins | text | page | case-outcome-2, case-outcome-5 | S1 | kept |
| 3.3-34 | main | Sending to Steam: {d} {n}, {d} {n} on your balance. | text | page | case-outcome-2 | C1 C11 | Sending to Steam: {d} {n} coins, {d} {n} coins on your balance. (Principle 3 and C11: every signed figure keeps its unit) |
| 3.3-35 | main | Sell all {n} for {n} coins | button | page | case-outcome-2, case-outcome-5 | S1 | kept |
| 3.3-36 | main | Send {n} to Steam, {n} coins | button (link) | page | case-outcome-2, case-outcome-5 | C1 C11 | kept |
| 3.3-37 | main | Roll details, {n} rolls | button | page | case-outcome-2, case-outcome-5 | C9 | Round details, {n} rounds (Glossary C9: 'Roll details' is listed as not used) |
| 3.3-38 | main | Every roll, in the order of the row above, which is the order of the reels it came out of. | text | page | case-outcome-2, case-outcome-5 | C9 | Every round, in the order of the row above, which is the order of the reels. (Glossary C9; note under a block keeps one fact, shorter) |
| 3.3-39 | main | {d} {d} · float {n} · pattern {n} · check this roll · Inspect in game | text | page | case-outcome-2, case-outcome-5 | C9 | {d} {d} · Float {n} · Pattern {n} · Check this round · Inspect in game (Glossary C9 and S5 (Check this round); Float and Pattern capitalised as on the single receipt 3.3-14, one label one form (mark K)) |
| 3.3-40 | main | check this roll | link | page | case-outcome-2, case-outcome-5 | C9 | Check this round (Glossary C9 and S5, the WF_STR.checkRound wording) |
| 3.3-41 | main | All {n} saved to My items. Selling can't be undone. | text | page | case-outcome-2, case-outcome-5 | S1 | All {n} saved to My items. Selling cannot be undone. (As 3.3-20) |
| 3.3-42 | main | Check each of the {n} rolls | link | `_nav.js mountOpenNow` | case-outcome-2, case-outcome-5 | C9 | Check each of the {n} rounds (C9); the line under the title counts opens, "Nine items, two opens." |
| 3.3-43 | main | Share a result | link | page | case-outcome-2, case-outcome-5 |  | Share a round (Microcopy 'A line that shares a result': names the round) |
| 3.3-44 | main | What you got | accessible name | page | case-outcome-2, case-outcome-5, case-outcome |  | kept |
| 3.3-45 | main | Sending to Steam: {d} {n}, {d} {n}, {d} {n}, {d} {n} on your balance. | text | page | case-outcome-5 | C1 C11 | Sending to Steam: {d} {n} coins, {d} {n} coins, {d} {n} coins, {d} {n} coins on your balance. (As 3.3-34) |
| 3.3-46 | main | {d} {d} has no copy on sale, so it cannot be sent yet. | text | page | case-outcome-5 |  | kept |
| 3.3-47 | main | Add funds to open {n} again for {n} coins | button (link) | page | case-outcome-5 | C4 S4 | kept |

### `4.1` Deposit

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 4.1-1 | head | Add funds, how much | SEO title, SEO / IA ownership | page | deposit-card | C4 | Add funds, cards and wallets (Screen heading/title: names the route as its sibling titles do (crypto, gift cards, CS2 skins); the grid's group is 'Cards, wallets and more') |
| 4.1-2 | head | Limit raise pending | SEO title, SEO / IA ownership | page | deposit-ceiling-pending | C5 | kept |
| 4.1-3 | head | Deposit limit reached | SEO title, SEO / IA ownership | page | deposit-ceiling-reached | C4 C5 | kept |
| 4.1-4 | head | Add funds, no address yet | SEO title, SEO / IA ownership | page | deposit-crypto-nowallet | C4 | kept |
| 4.1-5 | head | Add funds, crypto | SEO title, SEO / IA ownership | page | deposit-crypto | C4 | kept |
| 4.1-6 | head | Payment declined | SEO title, SEO / IA ownership | page | deposit-declined |  | kept |
| 4.1-7 | head | Deposit dialog over the case screen. CS{n} Clutch | SEO title, SEO / IA ownership | page | deposit-dialog | C4 | Add funds dialog over the case screen. CS{n} Clutch (Glossary C4: Add funds is the act, deposit is one payment; parallel to the sign in dialog's title) |
| 4.1-8 | head | Add funds, gift cards | SEO title, SEO / IA ownership | page | deposit-giftcards | C4 | kept |
| 4.1-9 | head | Add funds, CS{n} skins | SEO title, SEO / IA ownership | page | deposit-skins | C4 C10 | kept |
| 4.1-10 | main | {n} bonus on every top-up, up to {n} coins per {n} hours. No wagering. | text | `_nav.js payOffer` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit | C4 C11 N2 | {n} bonus on every deposit, up to {n} coins per {n} hours. The bonus has no conditions. (C4, N2) |
| 4.1-11 | main | Have a promo code? | disclosure | `_nav.js payHead` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | removed, `D-174`: the field is open and 4.1-12 labels it |
| 4.1-12 | main | Promo or partner code | field label | `_nav.js payHead` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | kept, now a visible label (`D-174`) |
| 4.1-13 | main | Apply | button | `_nav.js payHead` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | Apply code |
| 4.1-14 | main | Cards, wallets and more {d} | text | `_nav.js PAY_CATS`, page script | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-15 | main | Change | button (link) | `_nav.js depCard/mountWithdrawMany` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | kept |
| 4.1-16 | main | Select provider. Your card details go to the provider, not to us | heading | `_nav.js depProvider` | deposit-card, deposit-ceiling-pending, deposit-declined |  | Choose a provider. Your card details go to the provider, not to us |
| 4.1-17 | main | Provider A | field label | `_nav.js depProvider` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-18 | main | Provider B | field label | `_nav.js depProvider` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-19 | main | Enter the amount | field label | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined |  | Amount, in US dollars (field label, a noun) |
| 4.1-20 | main | US dollars | text | `_nav.js depCard/mountWithdrawPeg` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-21 | main | Billing email | field label | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-22 | main | I have read and accept the terms and the refund and payments policy. | text | `_nav.js ?/HIST_COLS`, `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined | C8 P | I have read and accept the Terms of use and the Refund and payments policy. (C8) |
| 4.1-23 | main | terms | link | `_nav.js authCard/depCard` | deposit-card, deposit-ceiling-pending, deposit-declined |  | Terms of use |
| 4.1-24 | main | refund and payments policy | link | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined | C8 K | Refund and payments policy |
| 4.1-25 | main | The {n} minimum to withdraw is met by your deposits. It never rises. | text | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined | C1 C4 C11 | The {n} minimum for sending to Steam is met by your deposits. It never rises. (C1) |
| 4.1-26 | main | Usually credited within {n} minutes. Support if not. | text | `_nav.js FAQ/depCard`, `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined | C2 C6 | kept |
| 4.1-27 | main | No deposit limit set. Set one | text | `_nav.js depCard` | deposit-card | C4 C5 | kept |
| 4.1-28 | main | Set one | link | `_nav.js depCard` | deposit-card |  | kept |
| 4.1-29 | main | You will receive | text | `_nav.js depCard/depSkins` | deposit-card, deposit-ceiling-pending, deposit-declined, deposit-skins |  | kept |
| 4.1-30 | main | at {n} coin = {n} | text | _nav.js, assembled | deposit-card, deposit-ceiling-pending, deposit-declined | C11 | kept |
| 4.1-31 | main | Bonus, {n}, up to {n} coins per {n} hours | text | _nav.js, assembled | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-32 | main | Total charged | text | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-33 | main | No provider fee on this route | text | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-34 | main | Pay | button (link) | `_nav.js depCard` | deposit-card, deposit-ceiling-pending |  | Pay {n}, the total charged, following the amount (T4) |
| 4.1-35 | main | Payment methods for Ukraine · Change | note | `_nav.js payCountry` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | removed, `D-174`: replaced by 4.1-100 and the select |
| 4.1-36 | main | I have read and accept the terms and the refund and payments policy | accessible name | `_nav.js depCard` | deposit-card, deposit-ceiling-pending, deposit-declined | C8 P | I have read and accept the Terms of use and the Refund and payments policy |
| 4.1-37 | main | The higher limit is not in force yet | heading | `_nav.js STEP2_BANNER` | deposit-ceiling-pending | C5 | kept |
| 4.1-38 | main | In force now: {n} for the period. | text | `_nav.js STEP2_BANNER`, `_nav.js STEP2_BANNER/mountCryptoNet` | deposit-ceiling-pending | C11 | kept |
| 4.1-39 | main | Pending: {n}, from the moment below. | text | `_nav.js STEP2_BANNER` | deposit-ceiling-pending | C11 | kept |
| 4.1-40 | main | When the higher limit takes effect | text | `_nav.js STEP2_BANNER` | deposit-ceiling-pending | C5 | kept |
| 4.1-41 | main | Cancel the raise | button | `_nav.js STEP2_BANNER` | deposit-ceiling-pending |  | kept |
| 4.1-42 | main | Cancelling applies now. | note | `_nav.js STEP2_BANNER` | deposit-ceiling-pending |  | kept |
| 4.1-43 | main | Deposit limit {n} in force. Change it | text | `WF_STR.depositLimit` | deposit-ceiling-pending, deposit-declined | C4 C5 C11 | kept |
| 4.1-44 | main | Change it | link | `_nav.js depCard` | deposit-ceiling-pending, deposit-declined |  | kept |
| 4.1-45 | main | Your deposit limit for this period is reached | heading | page | deposit-ceiling-reached | C4 C5 | kept |
| 4.1-46 | main | You set a deposit limit of {n} per week on {date}. This week's deposits, {n} coins on {date}, already pass it, so deposits stop until the week resets. | text | page | deposit-ceiling-reached | C4 C5 C11 | You set a deposit limit of {n} a week on {date}. Your deposits this week, {n} on {date}, already pass it, so adding funds is closed until the week resets. (C11: a deposit amount is in dollars (50.00 coins became $50.00 at the printed peg 1 coin = $1.00); C4: adding funds is the act, the wording G36 and _nav.js already use; 'a week' as in the T4 example); kept by the founder, `D-180` |
| 4.1-47 | main | When the period resets | text | page | deposit-ceiling-reached |  | kept |
| 4.1-48 | main | What is still open | heading | page | deposit-ceiling-reached |  | What still works (Glossary C9: 'open' for availability is not used; principle 5, a stop says what still works) |
| 4.1-49 | main | Deposits stopped. Nothing else did. | text | page | deposit-ceiling-reached | C4 | kept |
| 4.1-50 | main | Open a case from the balance you already hold | link | page | deposit-ceiling-reached |  | Open a case with your balance (A link names the act it starts; shorter (29 against 45 characters)) |
| 4.1-51 | main | Open a case from the balance you already hold {n} coins, and the limit has nothing to do with spending it. | text | page | deposit-ceiling-reached | C5 | Open a case with your balance {n} coins. The limit only stops adding funds. (Principle 1, the fact without padding; C4 adding funds) |
| 4.1-52 | main | Send to Steam Open in every state on this screen. | text | page | deposit-ceiling-reached | C1 | Send to Steam The limit never stops it. (Glossary C9: 'open' for availability is not used; 'every state on this screen' was prototype vocabulary, not the reader's) |
| 4.1-53 | main | Lower the limit further | link | page | deposit-ceiling-reached | C5 | kept |
| 4.1-54 | main | Lower the limit further A lowering takes effect immediately. | text | page | deposit-ceiling-reached | C5 | Lower the limit further A lowering applies now. (Phase T4 addition: lowering a limit says it applies now; matches 4.1-42 'Cancelling applies now.') |
| 4.1-55 | main | Raising the limit from here will not lift this period's stop. A raise takes effect {n} hours later, and the limit you have now holds until then. | note | page | deposit-ceiling-reached | C5 | Raising the limit does not lift this stop. A raise applies {n} hours after you ask for it, and the limit you have now holds until then. (Phase T4 addition: raising a limit says when it applies; 'from here' dropped, the raise is made on 6.1) |
| 4.1-56 | main | Crediting | heading | page | deposit-crediting |  | kept |
| 4.1-57 | main | Your payment has left. The balance is not there yet, and this state stays until it is. | text | page | deposit-crediting |  | The payment has left your account and is not on your balance yet. It stays listed here until it is, and nothing is lost. (Principle 3, which way the money moved; phase T4 sounding line 'Nothing is lost') |
| 4.1-58 | main | Crediting waiting on the payment provider {n} min usually within {n} minutes | text | page | deposit-crediting |  | kept |
| 4.1-59 | main | The deposit, while it is pending | heading | page | deposit-crediting | C4 | This deposit (Section heading names what the block holds; the state is already said by the H2 above; glossary C4, deposit is one payment) |
| 4.1-60 | main | Method | column head | page, `_nav.js HIST_COLS` | deposit-crediting; history-deposits-blocked, history-deposits |  | kept |
| 4.1-61 | main | Started | text | page | deposit-crediting |  | kept |
| 4.1-62 | main | Minimum to withdraw | text | page | deposit-crediting | C1 | Minimum to send to Steam (Glossary C1: 'withdraw' is not used as a verb; matches the parent's 4.1-25 'minimum for sending to Steam') |
| 4.1-63 | main | {n}, met | text | page | deposit-crediting | C11 | kept |
| 4.1-64 | main | Not there after {n} minutes? Support answers within {n} hours. | note | page | deposit-crediting | C6 | kept |
| 4.1-65 | main | Crypto {d} | text | `_nav.js PAY_CATS/depBody`, page script | deposit-crypto-nowallet, deposit-crypto |  | kept |
| 4.1-66 | main | Send on {d} only. Coins sent on another network are lost. | note | `_nav.js depCrypto/mountCryptoNet` | deposit-crypto-nowallet, deposit-crypto |  | kept |
| 4.1-67 | main | You do not have an address on this network yet | text | `_nav.js depCrypto` | deposit-crypto-nowallet |  | kept |
| 4.1-68 | main | Create my address | button (link) | `_nav.js depCrypto` | deposit-crypto-nowallet |  | kept |
| 4.1-69 | main | Rate {n} {d} = {n} coins, read {time} | text | `_nav.js depCrypto` | deposit-crypto-nowallet, deposit-crypto |  | kept |
| 4.1-70 | main | Bonus {n} when the coins arrive | text | `_nav.js depCard/depCrypto`, `_nav.js depCrypto` | deposit-crypto-nowallet, deposit-crypto | C11 | kept |
| 4.1-71 | main | Minimum {n} {d}. Less than that is lost | text | `_nav.js depCrypto`, `_nav.js depCrypto/filterDrawerHTML` | deposit-crypto-nowallet, deposit-crypto |  | kept |
| 4.1-72 | main | A deposit limit cannot stop a transfer from your own wallet. Your limits | text | `_nav.js depCrypto` | deposit-crypto-nowallet, deposit-crypto | C4 C5 | kept |
| 4.1-73 | main | Your limits | link | page, `_nav.js depCrypto/renderShell` | deposit-crypto-nowallet, deposit-crypto; history-deposits-blocked | C5 | kept |
| 4.1-74 | main | Your deposit address | text | `_nav.js depCrypto` | deposit-crypto | C4 | kept |
| 4.1-75 | main | Done, I have sent it | button (link) | `_nav.js depCrypto` | deposit-crypto |  | kept |
| 4.1-76 | main | The payment did not go through | heading | `_nav.js STEP2_BANNER` | deposit-declined |  | kept |
| 4.1-77 | main | It was refused on the payment side before anything left your account. | text | `_nav.js STEP2_BANNER` | deposit-declined |  | kept |
| 4.1-78 | main | No reason was given. Your deposit limit and your withdrawal figure are unchanged. | text | `_nav.js STEP2_BANNER` | deposit-declined | C1 C4 C5 | kept |
| 4.1-79 | main | {n} × {n} coins. Balance {n} coins. After this open, {n} coins. {n} coin = {n} · RTP {n} %, expected value {n} coins | text | `WF_STR.peg`, page | deposit-dialog | C11 | kept |
| 4.1-80 | layer: dialog | Cards, wallets and more | heading | `_nav.js PAY_CATS` | deposit-dialog, deposit |  | kept |
| 4.1-81 | layer: dialog | {d} Best choice | link | `_nav.js payTile` | deposit-dialog, deposit |  | {d} No fee (principle 2: a fact, not a superlative; the card total equals the amount, `D-180`) |
| 4.1-82 | layer: dialog | CS{n} Skins Instant | link | `_nav.js WF_SHELL`, `_nav.js payTile` | deposit-dialog, deposit | C10 | kept |
| 4.1-83 | layer: dialog | Gift Cards | link | `_nav.js histPanel/mountCrediting` | deposit-dialog, deposit |  | kept |
| 4.1-84 | layer: dialog | Other | link | _nav.js, assembled | deposit-dialog, deposit |  | kept |
| 4.1-85 | main | Cards, wallets and more Gift Cards | text | `_nav.js PAY_CATS`, page script | deposit-giftcards |  | kept |
| 4.1-86 | main | Bought from a reseller: they take the payment and handle refunds. | note | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-87 | main | Gift cards on Difmark | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-88 | main | Gift cards on Pulse | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-89 | main | Gift cards on Kinguin | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-90 | main | Gift cards on OFF GAMERS | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-91 | main | Gift cards on Karte Direkt | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-92 | main | Gift cards on Eneba | disclosure | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-93 | main | Card code | field label | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-94 | main | Redeem | button (link) | `_nav.js depGift/mountSkinDep` | deposit-giftcards |  | kept |
| 4.1-95 | main | The code from the card you bought | placeholder | `_nav.js depGift` | deposit-giftcards |  | kept |
| 4.1-96 | main | Cards, wallets and more CS{n} Skins | text | `_nav.js PAY_CATS`, page script | deposit-skins | C10 | kept |
| 4.1-97 | main | From your Steam inventory | heading | `_nav.js depSkins` | deposit-skins |  | kept |
| 4.1-98 | main | Steam account {d} | note | `_nav.js depSkins/renderAcctHero` | deposit-skins |  | kept |
| 4.1-99 | main | {d} Slate {d} {n} coins | field label | _nav.js, assembled | deposit-skins |  | kept |
| 4.1-100 | main | Payment methods for | field label | `_nav.js payCountry` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | new, `D-174` |
| 4.1-101 | main | Saved. Settings shows the same country. | text | `_nav.js mountPayCountry` | deposit-card, deposit-ceiling-pending, deposit-crypto-nowallet, deposit-crypto, deposit-declined, deposit-dialog, deposit-giftcards, deposit-skins, deposit |  | new, `D-174` |
| 4.1-100 | main | M{n}A{n} Temukau {d} {n} coins | field label | _nav.js, assembled | deposit-skins |  | kept |
| 4.1-101 | main | {d} Vogue {d} {n} coins | field label | _nav.js, assembled | deposit-skins |  | kept |
| 4.1-102 | main | Credited at our value for each skin once Steam completes the trade. | note | `_nav.js depSkins` | deposit-skins | C2 C10 | kept |
| 4.1-103 | main | {n} skins, {n} plus {n} bonus | text | _nav.js, assembled | deposit-skins | C10 | kept |
| 4.1-104 | main | Deposit {n} skins | button (link) | `_nav.js depSkins` | deposit-skins | C4 C10 | Add {n} skins (C4) |

### `5.1` Account and inventory

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 5.1-1 | head | Cash out layer over My items. CS{n} Clutch | SEO title, SEO / IA ownership | page | cashout-dialog | N6 | Cash out from My items. CS{n} Clutch (N6; Screen heading/title: what this place is in glossary words, "layer" is IA vocabulary) |
| 5.1-2 | main | Add funds | button (link) | `WF_STR.addFunds` | 45 pages, 8 screens | C4 | kept |
| 5.1-3 | main | Inventory | heading | page | all 4 of `5.1` |  | kept |
| 5.1-4 | main | Steam connected · Settings | text | page | account-degraded, account-empty, account |  | kept |
| 5.1-5 | main | Click an item to select it | note | page | account-degraded, account |  | Select an item for its options (mobile first: no desktop verb, `D-180`) |
| 5.1-6 | main | All skins | heading | page | account-degraded, account | C10 | All items (C10 (a): a thing a person owns is an item; skin is for the Steam or market context) |
| 5.1-7 | main | Sort by | text | page, `_nav.js filterDrawerHTML` | catalogue-filter; account-degraded, account |  | kept |
| 5.1-8 | main | Newest first | button | page | account-degraded, account |  | kept |
| 5.1-9 | main | Highest value | button | page | account-degraded, account |  | kept |
| 5.1-10 | main | Some current values cannot be read right now. The items themselves are unaffected and nothing you hold has been lost. | text | page | account-degraded |  | Some values cannot be read right now, and that is on us. Your items are all here and nothing is lost. (Principle 5 and the T8 addition: what happened, whose side the fault is on, and that nothing is lost) |
| 5.1-11 | main | Select {d} {d} | field label | page | account-degraded, account |  | kept |
| 5.1-12 | main | Share | button (link) | page | account-degraded, account |  | Share this round (A line that shares a result names the round, Emotional Job 2) |
| 5.1-13 | main | Sell for coins | button | page | account-degraded, account | S1 | kept |
| 5.1-14 | main | Send to Steam | button (link) | `WF_STR.sendToSteam`, page | 15 pages, 5 screens | C1 | kept |
| 5.1-15 | main | Exchange | button | page | account-degraded, account |  | kept |
| 5.1-16 | main | Exchange is not here yet | text | page | account-degraded, account |  | kept |
| 5.1-17 | main | No market figure: the source is failing | text | page | account-degraded | C3 | Copies on sale cannot be read right now (C3 (b) copies on sale, not "market figure"; matches 5.1-10's wording for the same fault) |
| 5.1-18 | main | Out to Steam {n} back | text | page | account-degraded, account |  | Out to Steam +{n} coins (C11: a figure that changes the balance carries its sign and its unit) |
| 5.1-19 | main | Nobody is offering one | text | page, `_nav.js mountWithdrawMany/wdRow` | account-degraded, account; withdraw-many |  | None on sale (C3 (b); shortened at step 8, second run: beside "On sale {n}" the old line took three lines on a 206px card at 1440) |
| 5.1-20 | main | Offers {n} | text | page | account-degraded, account | N5 | On sale {n} (C3 (b) and N5: "offer" alone is retired, the count is of copies on sale (parent's 5.3-32 Copies on sale)) |
| 5.1-21 | main | Out to Steam no copy on sale to buy | text | page | account-degraded, account |  | kept |
| 5.1-22 | main | Starting at {n} | text | page | account-degraded, account |  | Starting at {n} coins (C11: a card figure carries its unit, step 8) |
| 5.1-23 | main | Out to Steam {n} more | text | page | account-degraded, account |  | Out to Steam −{n} coins (C11: a figure that changes the balance carries its sign and its unit) |
| 5.1-24 | main | On its way to Steam, since {date} | text | `_nav.js mountInFlight` | account-degraded, account |  | kept |
| 5.1-25 | main | Its clock | button (link) | `_nav.js mountInFlight` | account-degraded, account |  | kept |
| 5.1-26 | main | Prices as of {date} {time} · Withdrawals need a public Steam inventory with trades unlocked · {n} coin = {n} | note | `WF_STR.peg`, page | account-degraded, account | C1 C11 | kept |
| 5.1-27 | main | {n} items, {n} not readable | text | `_nav.js mountInvBar` | account-degraded |  | kept |
| 5.1-28 | main | Select all | button | page | account-degraded, account |  | kept |
| 5.1-29 | main | Deselect all | button | page | account-degraded, account |  | kept |
| 5.1-30 | main | Steam Send to Steam | button (link) | `WF_STR.sendToSteam`, page | account-degraded, account | C1 | kept |
| 5.1-31 | main | Sell Sell for coins | button (link) | page | account-degraded, account | S1 | kept |
| 5.1-32 | main | Cash out Cash out | button | page | account-degraded, account | N6 | kept |
| 5.1-33 | main | Exchange Exchange | button | page | account-degraded, account |  | kept |
| 5.1-34 | main | Cash out | link | page, `_nav.js HIST_TABS/coLayer` | 19 pages, 2 screens | N6 | kept |
| 5.1-35 | main | Items held | heading | page | account-empty |  | kept |
| 5.1-36 | main | You are not holding anything yet. | empty state | page | account-empty |  | No items yet. (Empty state: why it is empty. "You are not holding anything" is false when the balance is not zero, node 5.1 section 5.2) |
| 5.1-37 | main | Items you open appear here. | empty state | page | account-empty |  | Open a case and the item is listed here, with its value and the price of a copy on sale. (Empty state leads to an action in the plain form (T7 addition); says what a card carries, node 5.1 section 5.2; C3 (b)) |
| 5.1-38 | main | See the cases | button (link) | page | account-empty |  | kept |
| 5.1-39 | main | Withdrawals need a public Steam inventory with trades unlocked. {n} coin = {n} | note | `WF_STR.peg`, page | account-empty | C1 C11 | kept |
| 5.1-40 | main | {n} items | text | `_nav.js mountInvBar` | account, cashout-dialog; history-items-empty, history-items |  | kept |
| 5.1-41 | main | Steam connected. Where this is set | text | page | cashout-dialog |  | Steam connected · Settings (A link names its destination; one wording for the same line as 5.1-4) |
| 5.1-42 | main | Where this is set | link | page | cashout-dialog |  | Settings (A link names its destination (G25)) |
| 5.1-43 | main | Two items are ticked on the grid. The grid itself | note | page | cashout-dialog |  | Two items are selected. See all items ("Ticked on the grid" and "the grid itself" are build vocabulary; the link names the act it starts; "selected" as in 5.1-5) |
| 5.1-44 | main | The grid itself | link | page | cashout-dialog |  | See all items (A link names its destination or the act it starts) |
| 5.1-45 | layer: dialog | The items you ticked are sold back, and the money goes to a wallet you own. | text | `_nav.js mountCashout` | cashout-dialog | S1 | The items you ticked are sold to us, and the money goes to a wallet you own. (S1) |
| 5.1-46 | layer: dialog | Sent on the {d} network. | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-47 | layer: dialog | {d} address | field label | _nav.js, assembled | cashout-dialog |  | kept |
| 5.1-48 | layer: dialog | Main wallet · {n}x{hash} | option | _nav.js, assembled | cashout-dialog |  | kept |
| 5.1-49 | layer: dialog | Another address | option | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-50 | layer: dialog | What goes out | heading | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-51 | layer: dialog | Items selected | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-52 | layer: dialog | Their value | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-53 | layer: dialog | Blockchain fee | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-54 | layer: dialog | Smallest cash out | text | `_nav.js coLayer` | cashout-dialog | N6 | kept |
| 5.1-55 | layer: dialog | You receive | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-56 | layer: dialog | {n} coins, {n} at {n} coin = {n} | text | _nav.js, assembled | cashout-dialog | C11 | kept |
| 5.1-57 | layer: dialog | In {d} | text | _nav.js, assembled | cashout-dialog |  | kept |
| 5.1-58 | layer: dialog | {n} {d}, at {n} coins each | text | `_nav.js coLayer` | cashout-dialog |  | kept |
| 5.1-59 | layer: dialog | Request cash out | button | `_nav.js coLayer` | cashout-dialog | N6 | kept |
| 5.1-60 | layer: dialog | A request is reviewed before anything is sent. Every state it passes through is on the Cash out tab of your history. | note | `_nav.js coLayer` | cashout-dialog | N6 | kept |
| 5.1-61 | layer: dialog | Saved {d} addresses | accessible name | `_nav.js coLayer/mountPay` | cashout-dialog |  | kept |
| 5.1-62 | layer: dialog | Paste the address | placeholder | `_nav.js coLayer` | cashout-dialog |  | kept |

### `5.3` Withdrawal

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 5.3-1 | head | Send to Steam, several items | SEO title, SEO / IA ownership | page | withdraw-many | C1 | kept |
| 5.3-2 | main | Withdrawal in progress | SEO H1, SEO / IA ownership | page | withdraw-clock, withdraw-steam-degraded | C1 | kept |
| 5.3-3 | main | Where it is now | heading | page | withdraw-clock, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded |  | kept |
| 5.3-4 | main | Requested waiting on us {time} within {time} | text | page | withdraw-clock, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded |  | kept |
| 5.3-5 | main | Our checks waiting on us {time} within {time} | text | page | withdraw-clock, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded |  | kept |
| 5.3-6 | main | Offer sent, waiting for you in Steam waiting on you {time} Steam holds it {time} | text | page | withdraw-clock, withdraw-steam-degraded | N5 | Trade offer sent, waiting for you in Steam waiting on you {time} Steam holds it {time} (glossary N5: trade offer, never offer alone) |
| 5.3-7 | main | Steam completing the trade waiting on Steam - Steam sets this | text | page | withdraw-clock, withdraw-offer-expired, withdraw-restricted |  | kept |
| 5.3-8 | main | Delivered closed - - | text | `WF_STR.closed`, page | withdraw-clock, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded |  | kept |
| 5.3-9 | main | Going to Steam account {d} | text | `WF_STR.goingToSteam`, page | withdraw-clock, withdraw-many, withdraw-not-eligible, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded, withdraw |  | kept |
| 5.3-10 | main | What this settled at | heading | page | withdraw-clock, withdraw-steam-degraded |  | kept |
| 5.3-11 | main | Struck when you asked, on the copy you picked. It does not move again while this is in flight. | text | page | withdraw-clock |  | Settled when you asked, on the copy you picked. It does not change before delivery. (principle 1, plain words: 'struck' and 'in flight' are our jargon; 'settled' matches the H2 'What this settled at') |
| 5.3-12 | main | What this item was worth here, what the copy cost on the market, and what settled against your balance | text | page | withdraw-clock, withdraw-steam-degraded | C3 | Your skin price, the market price of the copy bought, and what settled against your balance (glossary C2 (the settlement table's own name for our value on this screen) and C3 a (market price)) |
| 5.3-13 | main | Skin name | column head | page | withdraw-clock, withdraw-offer-expired, withdraw-steam-degraded | C10 | Skin (one concept, one word: the same settlement column is 'Skin' on withdraw and withdraw-many (5.3-46) and in the basket renderer's data-l; th and the cell's data-l both changed) |
| 5.3-14 | main | Your skin price | column head | `WF_STR.yourSkinPrice` | withdraw-clock, withdraw-many, withdraw-offer-expired, withdraw-steam-degraded, withdraw | C2 C10 | kept |
| 5.3-15 | main | Market skin price | column head | `WF_STR.marketSkinPrice` | withdraw-clock, withdraw-many, withdraw-offer-expired, withdraw-steam-degraded, withdraw | C3 C10 | kept |
| 5.3-16 | main | Your balance impact | column head | `WF_STR.balanceImpact` | withdraw-clock, withdraw-many, withdraw-offer-expired, withdraw-steam-degraded, withdraw |  | kept |
| 5.3-17 | main | Our commission | text | page | withdraw-clock, withdraw-many, withdraw-steam-degraded, withdraw |  | Our commission, its figure reading {n} coins (C11, step 8) |
| 5.3-18 | main | Total difference | text | page | withdraw-clock, withdraw-many, withdraw-steam-degraded, withdraw |  | kept |
| 5.3-19 | main | Based on the market price, {n} coins were added to your balance when you asked. Nothing further moves while this is in flight. | text | page | withdraw-clock | C3 | Based on the market price, {n} coins were added to your balance when you asked. Nothing more moves before delivery. (principle 3, money register kept whole; 'while this is in flight' is jargon, principle 1) |
| 5.3-20 | main | Prices in coins at {n} coin = {n}. The Steam market price is read in US dollars and converted at it. | text | `_nav.js mountWithdrawPeg` | withdraw-clock, withdraw-many, withdraw-offer-expired, withdraw-steam-degraded, withdraw | C3 C11 | kept |
| 5.3-21 | main | The copy bought for you carries float {n}, {d}. Market price read {date} {time}. | note | page | withdraw-clock, withdraw-steam-degraded | C3 | kept |
| 5.3-22 | main | Median time to Steam | text | `WF_STR.medianToSteam` | withdraw-clock, withdraw-many, withdraw-not-eligible, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded, withdraw |  | kept |
| 5.3-23 | main | Nine in ten arrive within this | text | `WF_STR.p90ToSteam` | withdraw-clock, withdraw-many, withdraw-not-eligible, withdraw-offer-expired, withdraw-restricted, withdraw-steam-degraded, withdraw |  | kept |
| 5.3-24 | main | {n} Items to withdraw | heading | page | withdraw-many, withdraw | C1 | {n} Items to send (glossary C1: 'Items to withdraw' is named as not used; the act is Send to Steam, which the H1 already says) |
| 5.3-25 | main | Change what is selected | link | page | withdraw-many, withdraw |  | kept |
| 5.3-26 | main | Which copy of each | heading | page | withdraw-many |  | kept |
| 5.3-27 | main | Pick any copy. Your balance goes up or down with the price you pick. | text | page | withdraw-many, withdraw |  | kept |
| 5.3-28 | main | Selected skin | text | `_nav.js wdRow` | withdraw-many, withdraw | C10 | kept |
| 5.3-29 | main | {n} Our price for it | text | `_nav.js wdRow` | withdraw-many, withdraw | C2 | {n} Your skin price (C2, the settlement table's name) |
| 5.3-30 | main | {n} The Steam listing | text | `_nav.js wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-31 | main | Remove {d} {d} | button | `_nav.js mountFilterDrawer/mountWithdrawMany`, page script | withdraw-many, withdraw |  | kept |
| 5.3-32 | main | Market offers | text | `_nav.js wdRow` | withdraw-many, withdraw | C3 N5 | Copies on sale (C3 b) |
| 5.3-33 | main | {n} on the market, cheapest first | text | `_nav.js mountWithdrawMany`, page script | withdraw-many, withdraw | C3 | {n} on sale, cheapest first |
| 5.3-34 | main | Float from {n} | field label | `_nav.js wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-35 | main | Stickers Any With stickers Without | field label | `_nav.js wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-36 | main | Any | option | `_nav.js mountWithdrawMany/wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-37 | main | With stickers | option | `_nav.js mountWithdrawMany/wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-38 | main | Without | option | `_nav.js wdRow` | withdraw-many, withdraw |  | kept |
| 5.3-39 | main | There is no copy of this to buy | empty state | `_nav.js wdRow` | withdraw-many |  | kept |
| 5.3-40 | main | Sending a skin out means buying a real copy of it, and right now there is none on sale at any price. It cannot go to Steam today. | empty state | `_nav.js wdRow` | withdraw-many | C10 | kept |
| 5.3-41 | main | What still works is selling it back to us for its value, which is our price for it and not a market price, so no copy has to exist for it to happen. | empty state | `_nav.js wdRow` | withdraw-many | C2 C3 S1 | What still works is selling it to us for its value, your skin price rather than a market price, so no copy has to exist for it to happen. (S1, C2) |
| 5.3-42 | main | Sell it back for {n} coins | button | `_nav.js wdRow` | withdraw-many | S1 | Sell for {n} coins (S1) |
| 5.3-43 | main | Keep it and go back | button (link) | `_nav.js wdRow` | withdraw-many |  | kept |
| 5.3-44 | main | {n} Total price | heading | page | withdraw-many, withdraw |  | {n} What this settles at (Section heading H2: names what the block holds; the block is a settlement that can add to the balance (+2.50 on the AK), so 'Total price' named a cost that is not one. Present tense before the request, past tense 'What this settled at' after it, as node 5.3 section 8 B wants the tense to carry quote against record) |
| 5.3-45 | main | Each item, what it is worth here, what the copy you chose costs, and what settles against your balance | text | page | withdraw-many |  | Each item with your skin price, the market price of the copy you chose, and what settles against your balance (glossary C2 (Your skin price on this screen) and C3 a; 'worth' retired by C2) |
| 5.3-46 | main | Skin | column head | page | withdraw-many, withdraw | C10 | kept |
| 5.3-47 | main | Not going out | cell | `_nav.js mountWithdrawMany` | withdraw-many |  | kept |
| 5.3-48 | main | Based on the market price, {n} coins will be taken from your balance, leaving {n}. | text | `_nav.js mountClockStruck/mountWithdrawMany`, `_nav.js mountWithdrawMany` | withdraw-many | C3 | kept |
| 5.3-49 | main | Three things can stop a withdrawal: a market we do not serve, a trade hold Steam sets, or a ban on the Steam account. | note | page | withdraw-many, withdraw | C1 C3 | Three things can stop a withdrawal: a country we do not serve, a trade hold Steam sets, or a ban on the Steam account. (glossary C3 c: country, never 'a market we do not serve') |
| 5.3-50 | main | Send {n} items to Steam | button | _nav.js, assembled | withdraw-many | C1 | kept |
| 5.3-51 | main | {d} {d} cannot go to Steam and it is not stuck. There is no copy on sale to buy, so there is nothing to send and nothing to settle against. Selling back to us pays our own price and needs no copy to exist. The row above carries that control. | note | page, `_nav.js mountWithdrawMany`, `_nav.js mountWithdrawMany/wdRow` | withdraw-many | S1 | {d} {d} cannot go to Steam and it is not stuck. There is no copy on sale to buy, so there is nothing to send and nothing to settle against. Selling it to us pays your skin price and needs no copy to exist. The row above carries that control. (S1) |
| 5.3-52 | main | Prices as of {date} {time} | note | page | withdraw-many, withdraw |  | Prices read {date} {time} (one wording for the as-of moment on this screen: 'read', as in 'Value now, read' and 'Market price read') |
| 5.3-53 | main | What each limit means | disclosure | page | withdraw-many, withdraw | C5 | What can stop it (glossary C5: a stop set by Steam or a country is not a limit; C5 names this disclosure 'What can stop it') |
| 5.3-54 | main | Ours A market we do not serve. The verdict and the ground in readable words. It lifts with the staged rollout. | text | page | withdraw-many, withdraw | C3 | Ours A country we do not serve. We name the country and the reason. It lifts if we clear that country. (glossary C3 c; principle 1: 'The verdict and the ground in readable words' was spec language read to the person; 'staged rollout' is ours, footer G63 says countries we have cleared; 'if', not 'when', because no date exists) |
| 5.3-55 | main | Steam's A trade hold. Steam holds a trade for a period it sets, on conditions it sets. | text | page | withdraw-many, withdraw |  | kept |
| 5.3-56 | main | Steam's A ban on the Steam account. The account cannot receive a trade. This one is not ours and we cannot lift it, and the route to fix it is Steam's. | text | page | withdraw-many, withdraw |  | Steam's A ban on the Steam account. The account cannot receive a trade. This one is not ours and we cannot lift it. Only Steam can. (principle 1: the short answer, nothing padded; 'the route to fix it is Steam's' said the same thing in more words) |
| 5.3-57 | main | This one cannot go yet | SEO H1, SEO / IA ownership | page | withdraw-not-eligible |  | kept |
| 5.3-58 | main | Steam's | text | page | withdraw-not-eligible |  | kept |
| 5.3-59 | main | A trade hold. Steam holds a trade for a period it sets, on conditions it sets. | text | page | withdraw-not-eligible |  | kept |
| 5.3-60 | main | The item is still in My items. | text | page | withdraw-not-eligible |  | kept |
| 5.3-61 | main | Nothing was settled against your balance. | text | page | withdraw-not-eligible |  | No copy was bought and nothing was settled against your balance. (T8: a stop says nothing is lost; node 5.3 state 5.4 asks for both facts, nothing bought and nothing settled; same wording as 5.3-87) |
| 5.3-62 | main | The price is read again when it goes out. | note | page | withdraw-not-eligible |  | The price is read again when the item goes to Steam. (principle 1: 'it goes out' had no clear subject; C1) |
| 5.3-63 | main | Back to my items | button (link) | page | withdraw-not-eligible |  | Back to My items (A link names where it goes back to; the destination's name is My items, D-128) |
| 5.3-64 | main | The trade offer expired | SEO H1, SEO / IA ownership | page | withdraw-offer-expired | N5 | kept |
| 5.3-65 | main | The offer we sent has expired, and Steam is what expires it. | text | page | withdraw-offer-expired | N5 | The trade offer we sent expired. The item is still yours and nothing is lost. (N5; T8 phase addition: every stop on the way out says nothing is lost (who closed it moves to the note under it, 5.3-66)) |
| 5.3-66 | main | Steam closes an offer after a period it sets. | note | page | withdraw-offer-expired | N5 | Steam closes a trade offer after a period it sets. (glossary N5) |
| 5.3-67 | main | Sending it again settles again, at today's price. The market moved while this offer sat, so pressing this adds {n} coins to your balance instead of the {n} already added. The difference of {n} coins comes off when you press. | text | page | withdraw-offer-expired | C3 N5 | Sending it again settles again, at today's price. The market price moved while the trade offer waited, so pressing this adds {n} coins to your balance instead of the {n} already added. The difference, {n} coins, will be taken from your balance when you press. (C3 a market price, N5 trade offer; principle 3: the baseline's money sentence names the direction, 'will be taken from your balance') |
| 5.3-68 | main | What sending the offer again would settle at, read today | text | page | withdraw-offer-expired | N5 | What sending to Steam again would settle at, read today (C1, matches the button 5.3-70) |
| 5.3-69 | main | Read {date} {time}. It moves daily, so what you are shown when you press is what you are charged, and it is read again at that moment. | note | page | withdraw-offer-expired |  | Read {date} {time}. The market price moves daily, so it is read again when you press, and what is shown then is what settles. (principle 3: 'charged' named one direction for a figure that moves both ways; C3 a) |
| 5.3-70 | main | Send the offer again | button | page | withdraw-offer-expired | N5 | Send to Steam again (glossary C1 (Send to Steam is the act) and N5; shorter than before (19 against 20)); kept by the founder, `D-180` |
| 5.3-71 | main | Offer sent, waiting for you in Steam waiting on you {time} expired. Steam sets this period | text | page | withdraw-offer-expired | N5 | Trade offer sent, waiting for you in Steam waiting on you {time} expired. Steam sets this period (glossary N5) |
| 5.3-72 | main | Everything this record has done | heading | page | withdraw-offer-expired |  | kept |
| 5.3-73 | main | Requested waiting on us {time} {date} {time} | text | page | withdraw-offer-expired |  | kept |
| 5.3-74 | main | Our checks waiting on us {time} {date} {time} | text | page | withdraw-offer-expired |  | kept |
| 5.3-75 | main | Offer sent, expired waiting on you {time} {date} {time} | text | page | withdraw-offer-expired | N5 | Trade offer sent, expired waiting on you {time} {date} {time} (glossary N5) |
| 5.3-76 | main | What this settled at, and why that figure is now old | heading | page | withdraw-offer-expired |  | kept |
| 5.3-77 | main | The copy was bought on {date} at the market price of {date}. That is the record. It is not what a copy costs today. | text | page | withdraw-offer-expired | C3 | kept |
| 5.3-78 | main | What this item was worth here, what the copy cost on the market on {date}, and what settled against your balance | text | page | withdraw-offer-expired | C3 | Your skin price, the market price of the copy on {date}, and what settled against your balance (glossary C2 and C3 a) |
| 5.3-79 | main | Total difference, as struck on {date} | text | page | withdraw-offer-expired |  | Total difference, settled {date} (principle 1: 'as struck on' is jargon; 'settled' is the heading's word) |
| 5.3-80 | main | Based on the market price of that day, {n} coins were added to your balance when you asked. Nothing has moved since. | text | page | withdraw-offer-expired | C3 | kept |
| 5.3-81 | main | Struck at {n} coins, read {date} {time}. Read again {date} {time} the same copy is {n} coins, {n} more. | note | page | withdraw-offer-expired |  | Market price {n} coins, read {date} {time}. Read again {date} {time}, the same copy is {n} coins, {n} more. (principle 1 and C3 a: says which price the figure is instead of 'Struck at') |
| 5.3-82 | main | The copy bought for you carries float {n}, {d}. | note | page | withdraw-offer-expired |  | kept |
| 5.3-83 | main | Nothing above is erased and nothing is relabelled. The expired stretch stays on you, because that is what happened. | note | page | withdraw-offer-expired |  | Nothing above is erased or relabeled. The time the trade offer waited stays marked as waiting on you, because it was. (US spelling (relabeled); principle 1: 'the expired stretch stays on you' read as blame, the line now says what the record shows) |
| 5.3-84 | main | This account is restricted | SEO H1, SEO / IA ownership | page | withdraw-restricted |  | Withdrawals are paused (Forbidden 'an accusation in a stop' (B8-3) and H1 rule 'a state's H1 says the state': only withdrawals stop, balance and items stay the person's; aligned with G164's Now) |
| 5.3-85 | main | Balance, frozen | text | page | withdraw-restricted |  | kept |
| 5.3-86 | main | Value of items held, still yours | text | page | withdraw-restricted | C2 | kept |
| 5.3-87 | main | No copy was bought for this withdrawal and nothing was settled against either figure above. The purchase only runs once our checks pass, and they have not. | text | page | withdraw-restricted | C1 | kept |
| 5.3-88 | main | Offer sent, waiting for you in Steam waiting on you - Steam holds it {time} | text | page | withdraw-restricted | N5 | Trade offer sent, waiting for you in Steam waiting on you - Steam holds it {time} (glossary N5) |
| 5.3-89 | main | The restriction stands | SEO H1, SEO / IA ownership | page | withdraw-restriction-upheld | S6 | The restriction stays (glossary S6: our decision reads 'The restriction stays') |
| 5.3-90 | main | The appeal that ran | heading | page | withdraw-restriction-upheld | N4 | kept |
| 5.3-91 | main | Appeal opened by you {date} {time} | text | page | withdraw-restriction-upheld | N4 | kept |
| 5.3-92 | main | Answered by us {date} {time} | text | page | withdraw-restriction-upheld |  | kept |
| 5.3-93 | main | Upheld closed - no further step | text | `WF_STR.closed`, page | withdraw-restriction-upheld | S6 | Restriction stays closed - no further step (S6) |
| 5.3-94 | main | Nothing was taken for this withdrawal. Your balance and your items stay frozen, not zeroed, until the review ends. | note | page | withdraw-restriction-upheld | C1 N4 | No copy was bought and nothing was settled for this withdrawal. Your balance and your items stay frozen, not zeroed. (node 5.3 state 5.7 wording (no copy bought, nothing settled), same as 5.3-61 and 5.3-87; 'until the review ends' dropped, see notes) |
| 5.3-95 | main | Steam is degraded right now, as of {date} {time}. | text | page | withdraw-steam-degraded |  | Steam is not working normally right now, as of {date} {time}. (principle 1: no engineer's word in a stop, step 8) |
| 5.3-96 | main | Your withdrawal is still in the queue and nothing is lost. It is waiting on Steam rather than on us or on you. | text | page | withdraw-steam-degraded | C1 | kept |
| 5.3-97 | main | The published ceiling for that stage does not apply while this lasts, and it starts applying again when Steam recovers. | text | page | withdraw-steam-degraded | C5 | The time cap we publish for this stage does not apply while this lasts, and it applies again when Steam recovers. (glossary C5 b: a ceiling we set is a cap; 'that stage' pointed nowhere, the stage is the current one) |
| 5.3-98 | main | Steam has not said how long the outage will last. | note | page | withdraw-steam-degraded |  | kept |
| 5.3-99 | main | Steam completing the trade waiting on Steam {time} ceiling suspended while Steam is degraded | text | page | withdraw-steam-degraded | C5 | Steam completing the trade waiting on Steam {time} no cap while Steam is degraded (glossary C5 b; shorter) |
| 5.3-100 | main | Struck when you asked, on the copy you picked. The outage does not {id} it. | text | page | withdraw-steam-degraded |  | Settled when you asked, on the copy you picked. The outage does not reopen it. (principle 1, same wording as 5.3-11; US spelling 'reopen') |
| 5.3-101 | main | Based on the market price, {n} coins were added to your balance when you asked. It is not read again while Steam is degraded, or when it recovers. The wait is Steam's; the price is not. | text | page | withdraw-steam-degraded | C3 | Based on the market price, {n} coins were added to your balance when you asked. The price is not read again while Steam is degraded, or when it recovers. The wait is Steam's; the price is not. (principle 3: 'It' had two possible subjects; the line names the price) |
| 5.3-102 | main | Outage days stay in the window our published figures are computed over. A rolling figure that drops its bad days is not a measurement. | note | page | withdraw-steam-degraded | C10 | Outage days are counted in our published times. (A note under a block: one fact, never a second argument; the rolling-figure sentence was the design argument) |
| 5.3-103 | main | Which copy | heading | page | withdraw |  | kept |
| 5.3-104 | main | What this item is worth here, what the copy you chose costs, and what settles against your balance | text | page | withdraw |  | Your skin price, the market price of the copy you chose, and what settles against your balance (glossary C2 and C3 a) |
| 5.3-105 | main | Based on the market price, {n} coins goes onto your balance, making it {n}. | text | `_nav.js mountClockStruck/mountWithdrawMany`, `_nav.js mountWithdrawMany` | withdraw | C3 | kept |
| 5.3-106 | main | Send {n} item to Steam | button | `_nav.js histPanel` | withdraw | C1 | kept |

### `5.9` History

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 5.9-1 | head | History, cash out, none yet | SEO title, SEO / IA ownership | page | history-cashout-empty | N6 | kept |
| 5.9-2 | head | History, cash out | SEO title, SEO / IA ownership | page | history-cashout | N6 | kept |
| 5.9-3 | head | History, deposits, a boundary in force | SEO title, SEO / IA ownership | page | history-deposits-blocked | C4 C5 | History, deposits, a limit in force (glossary C5: limit, not boundary) |
| 5.9-4 | head | History, no deposits yet | SEO title, SEO / IA ownership | page | history-deposits-empty | C4 | kept |
| 5.9-5 | head | History, deposits | SEO title, SEO / IA ownership | page | history-deposits | C4 | kept |
| 5.9-6 | head | History, empty | SEO title, SEO / IA ownership | page | history-empty |  | History, no rounds yet (glossary C9 round; Forbidden: a dead end ("History is empty"); aligned with the state's own heading) |
| 5.9-7 | head | History, items, none yet | SEO title, SEO / IA ownership | page | history-items-empty |  | kept |
| 5.9-8 | head | History, items | SEO title, SEO / IA ownership | page | history-items |  | kept |
| 5.9-9 | head | History, a proof that does not match | SEO title, SEO / IA ownership | page | history-mismatch |  | kept |
| 5.9-10 | head | History, nothing to check | SEO title, SEO / IA ownership | page | history-no-seed |  | kept |
| 5.9-11 | head | History, an open that did not finish | SEO title, SEO / IA ownership | page | history-unfinished |  | kept |
| 5.9-12 | head | History, nothing sent to Steam | SEO title, SEO / IA ownership | page | history-withdrawals-empty | C1 | kept |
| 5.9-13 | head | History, past our own ceiling | SEO title, SEO / IA ownership | page | history-withdrawals-overdue | C5 | History, a withdrawal past our published time (glossary C5: "ceiling" not used, and a published time is not a cap; principle 2) |
| 5.9-14 | head | History, withdrawals, account restricted | SEO title, SEO / IA ownership | page | history-withdrawals-restricted | C1 | History, withdrawals, paused (Forbidden: an accusation in a stop; aligned with G164's Now "Withdrawals are paused") |
| 5.9-15 | head | History, withdrawals | SEO title, SEO / IA ownership | page | history-withdrawals | C1 | kept |
| 5.9-16 | main | Items | link | `_nav.js ACCT_TABS/FAQ` | 16 pages, 1 screens |  | kept |
| 5.9-17 | main | Deposits | link | `_nav.js HIST_COLS/HIST_TABS` | 16 pages, 1 screens | C4 | kept |
| 5.9-18 | main | {n} cash outs | text | `_nav.js histPanel` | history-cashout-empty, history-cashout | N6 | kept |
| 5.9-19 | main | No cash out yet | heading | `_nav.js histPanel` | history-cashout-empty | N6 | kept |
| 5.9-20 | main | When you cash items out to a wallet, the row lands here and stays, with the network, the wallet, the amount and where the request got to. | empty state | `_nav.js histPanel` | history-cashout-empty |  | kept |
| 5.9-21 | main | When | column head | `_nav.js FAQ/HIST_COLS` | history-cashout, history-deposits-blocked, history-deposits, history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | kept |
| 5.9-22 | main | What you sold | column head | `_nav.js HIST_COLS` | history-cashout | S1 | kept |
| 5.9-23 | main | State | column head | `_nav.js HIST_COLS/gateHTML` | history-cashout, history-deposits-blocked, history-deposits, history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | kept |
| 5.9-24 | main | Requested With us since {date} {time}. Nothing has been sent and nothing has been decided. | cell | page script | history-cashout |  | kept |
| 5.9-25 | main | ltc{n}q…{n}f{n}a | cell | _nav.js, assembled | history-cashout |  | kept |
| 5.9-26 | main | Blocked The {d} fee rose above the item’s value before it went out. Nothing was sent, and the Glock is back in My items. | cell | page script | history-cashout |  | kept |
| 5.9-27 | main | Sent On the chain since {date} {time}. | cell | page script | history-cashout |  | kept |
| 5.9-28 | main | You cannot add funds right now | heading | page | history-deposits-blocked | C4 | kept |
| 5.9-29 | main | A cool down you set is running, and it ends {date}, {time}. Adding funds and opening cases are closed until then. | text | page | history-deposits-blocked | C4 | kept |
| 5.9-30 | main | It cannot be shortened, and extending it takes effect immediately. A deposit limit is set as well, and it is not what closed this. | note | page | history-deposits-blocked | C4 C5 | kept |
| 5.9-31 | main | No payment is attempted until then. | note | page | history-deposits-blocked |  | kept |
| 5.9-32 | main | Taking what you hold out to Steam is open, and it stays open under every boundary here. | note | page | history-deposits-blocked; responsible-in-force | C5 | Taking what you hold out to Steam stays available under every one of your limits. (glossary C5 limit for boundary; C9 "available" for availability, not "open"; keeps 6.1's kept phrase "Taking what you hold out to Steam") |
| 5.9-33 | main | {n} payments | text | `_nav.js HIST_COLS/depCard` | history-deposits-blocked, history-deposits-empty, history-deposits |  | kept |
| 5.9-34 | main | Credited | column head | `_nav.js HIST_COLS/depSkins` | history-deposits-blocked, history-deposits | C2 | kept |
| 5.9-35 | main | Our reference | column head | `_nav.js HIST_COLS` | history-deposits-blocked, history-deposits, history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | kept |
| 5.9-36 | main | Payment reference | column head | `_nav.js HIST_COLS` | history-deposits-blocked, history-deposits |  | kept |
| 5.9-37 | main | Refused by your cool down A cool down runs until {date}, {time}. No payment was attempted. | cell | page script | history-deposits-blocked |  | kept |
| 5.9-38 | main | not issued | cell | page script | history-deposits-blocked, history-deposits |  | Not issued (sentence case everywhere (glossary, how the product addresses people)) |
| 5.9-39 | main | Complete | cell | page script | history-deposits-blocked, history-deposits |  | kept |
| 5.9-40 | main | CS{n} skins | cell | page script | history-deposits-blocked, history-deposits | C10 | kept |
| 5.9-41 | main | trade {hash} | cell | page script | history-deposits-blocked, history-deposits |  | kept |
| 5.9-42 | main | Crypto, {d} | cell | page script | history-deposits-blocked, history-deposits |  | kept |
| 5.9-43 | main | Crediting Waiting on the network to confirm it. Nothing is lost. | cell | page script | history-deposits-blocked, history-deposits |  | kept |
| 5.9-44 | main | {n}x{n}a{n}f{n}c{n}d{n}e{n}b{n}f{n}a{n}c{n}e{n}b{n}d{n}f | cell | page script | history-deposits-blocked, history-deposits |  | kept |
| 5.9-45 | main | Refused by your deposit limit Your limit then was {n} a week, with {n} used. It was lifted on {date} and set again on {date}, with the cool down. | cell | page script | history-deposits-blocked | C4 C5 C11 | Refused by your deposit limit Your limit then was ${n} a week, with ${n} used. It was lifted on {date} and set again on {date}, with the cool down. (glossary C11: a figure is never without its unit; dollars for a deposit limit ("with 30.00 used" became "with $30.00 used")) |
| 5.9-46 | main | Amounts in coins, {n} coin = {n} | note | `_nav.js histPanel` | history-deposits-blocked, history-deposits | C11 | kept |
| 5.9-47 | main | No payments yet | heading | `_nav.js histPanel` | history-deposits-empty |  | kept |
| 5.9-48 | main | When you add funds, every attempt lands here, the ones that went through and the ones that did not. | empty state | `_nav.js histPanel` | history-deposits-empty | C4 | kept |
| 5.9-49 | main | Declined Your bank refused it. Nothing was charged. | cell | page script | history-deposits |  | kept |
| 5.9-50 | main | Refused by your deposit limit Your limit then was {n} a week, with {n} used. It was lifted on {date}. | cell | page script | history-deposits | C4 C5 C11 | Refused by your deposit limit Your limit then was ${n} a week, with ${n} used. It was lifted on {date}. (glossary C11: unit on the used figure, dollars for a deposit limit) |
| 5.9-51 | main | {n} rolls | text | page | history-empty, history-mismatch, history-no-seed, history-unfinished, history | C9 | {n} rounds (glossary C9: round, not roll) |
| 5.9-52 | main | No rolls yet | heading | page | history-empty | C9 | No rounds yet (glossary C9; Forbidden "A dead end" example "No rounds yet") |
| 5.9-53 | main | When you open a case, the roll lands here with its proof, and it stays here whatever happens to the item afterwards. | empty state | page | history-empty | C9 | Open a case and its round is listed here, with its proof. It stays whatever happens to the item afterwards. (Empty state rule plus T7 addition: leads to opening in the plain form, "Open a case and it is listed here"; C9) |
| 5.9-54 | main | Nothing won yet | heading | `_nav.js itemsPanel` | history-items-empty |  | kept |
| 5.9-55 | main | Every skin this account opens lands here and stays, with what it was worth at that moment and where it went afterwards. | empty state | `_nav.js itemsPanel` | history-items-empty | C10 | Every skin this account opens lands here and stays, with its value at that moment and where it went afterwards. (C2) |
| 5.9-56 | main | The case shelf | button (link) | `_nav.js itemsPanel` | history-items-empty |  | See the cases |
| 5.9-57 | main | Sending to Steam, {date} | text | `_nav.js ITEM_STATE/mountMultiCount` | history-items, history-mismatch, history-no-seed, history-unfinished, history; player-hidden, player-owner, player | C1 | kept |
| 5.9-58 | main | Worth when won | text | `_nav.js itemCard/itemsPanel` | history-items; player-hidden, player-owner, player | C2 | Value when won (C2; "it was" cut because the card label wrapped to two lines at 360, measured) |
| 5.9-59 | main | From {d} | text | `_nav.js depSkins/itemCard` | history-items; player-hidden, player-owner, player |  | kept |
| 5.9-60 | main | Won {date} | text | `_nav.js itemCard` | history-items; player-hidden, player-owner, player |  | kept |
| 5.9-61 | main | Sold back, {date} | text | `_nav.js HIST_COLS/ITEM_STATE` | history-items, history-mismatch, history-no-seed, history-unfinished, history; player-hidden, player-owner, player | S1 | Sold, {date} (S1) |
| 5.9-62 | main | No proof to check | button (link) | `_nav.js itemCard` | history-items; player-hidden, player-owner, player |  | kept |
| 5.9-63 | main | Still held | text | page, `_nav.js ITEM_STATE/mountRolls` | history-items, history-mismatch, history-no-seed, history-unfinished, history; player-hidden, player-owner, player |  | kept |
| 5.9-64 | main | One roll here does not check out | heading | page | history-mismatch | C9 | One round here does not check out (glossary C9) |
| 5.9-65 | main | We recomputed the round below and our result does not match what we published for it. That is our failure and not yours. | text | page | history-mismatch | C9 | kept |
| 5.9-66 | main | It was reported the moment we found it, with the round attached, and nothing about the other rolls on this page changes. | note | page | history-mismatch | C9 | It was reported the moment we found it, with the round attached, and nothing about the other rounds on this page changes. (glossary C9) |
| 5.9-67 | main | Any date | button | page | history-mismatch, history-no-seed, history-unfinished, history |  | kept |
| 5.9-68 | main | {n} coins to open | text | `_nav.js rollRow` | history-mismatch, history-no-seed, history-unfinished, history | S4 | Price {n} coins (S4) |
| 5.9-69 | main | Worth | text | `_nav.js HIST_COLS/itemCard` | history-mismatch, history-no-seed, history-unfinished, history |  | Value (C2) |
| 5.9-70 | main | chance of this skin | text | `_nav.js rollRow` | history-mismatch, history-no-seed, history-unfinished, history | C10 | kept |
| 5.9-71 | main | Our own recomputation of this round does not match what we published. Reported automatically, with the round attached. | text | `_nav.js ROLL_PROOF` | history-mismatch | C9 | kept |
| 5.9-72 | main | The ticket | button (link) | `_nav.js mountSupportSubject/rollRow` | history-mismatch |  | kept |
| 5.9-73 | main | No seed or nonce was kept for this roll, so there is nothing here to check. The roll is real and its record is complete. The proof is not. | text | `_nav.js ROLL_PROOF` | history-mismatch, history-no-seed, history-unfinished, history | C9 | No seed or nonce was kept for this round, so there is nothing here to check. The round is real and its record is complete. The proof is not. (C9) |
| 5.9-74 | main | Check it | button (link) | `_nav.js mountCashout/mountVerifier` | history-mismatch, history-unfinished, history |  | kept |
| 5.9-75 | main | Public page | button (link) | `_nav.js rollRow` | history-mismatch, history-unfinished, history |  | kept |
| 5.9-76 | main | Every figure is as it was on the day of the roll. | note | page | history-mismatch, history-no-seed, history-unfinished, history | C9 | Every figure is as it was on the day of the round. (glossary C9) |
| 5.9-77 | main | Mode: Cases | accessible name | `_nav.js rollRow` | history-mismatch, history-no-seed, history-unfinished, history |  | kept |
| 5.9-78 | main | These rolls cannot be checked | heading | page | history-no-seed | C9 | No proof for these rounds (C9; shortened at step 8: "These rounds cannot be checked" took two lines at 360) |
| 5.9-79 | main | The seed and nonce behind each roll were not kept in a form anyone can recompute, so there is nothing here to verify against. | text | page | history-no-seed | C9 | The seed and nonce behind each round were not kept in a form anyone can recompute, so there is nothing here to check. The rounds and their records are complete. (glossary C9 and S5 (check, not verify); principle 5: a stop says what still works, matching 5.9-73's Now "The round is real and its record is complete") |
| 5.9-80 | main | One open here stopped part way | heading | page | history-unfinished |  | kept |
| 5.9-81 | main | The round was settled before the animation started, so an animation that stopped part way changed nothing about what you got. What you got and the round are on the row below. | text | page | history-unfinished | C9 | kept |
| 5.9-82 | main | Check the round | button (link) | page | history-unfinished | C9 | Check this round (glossary S5: "Check this round" for a link to one round) |
| 5.9-83 | main | The open stopped part way. The round had already settled. | text | page script | history-unfinished | C9 | kept |
| 5.9-84 | main | {n} withdrawals | text | page script | history-withdrawals-empty, history-withdrawals-overdue, history-withdrawals | C1 | kept |
| 5.9-85 | main | Nothing sent to Steam yet | heading | `_nav.js histPanel` | history-withdrawals-empty | C1 | kept |
| 5.9-86 | main | When you send an item to Steam, the row lands here and stays, with who it is waiting on and how long it has been. | empty state | `_nav.js histPanel` | history-withdrawals-empty | C1 | kept |
| 5.9-87 | main | One of these has passed the time we published | heading | page | history-withdrawals-overdue |  | One withdrawal is past our published time (H2 names what the block holds; principle 1, answer first ("One of these" made the reader find which)) |
| 5.9-88 | main | One withdrawal below is past the time we publish for it. That is on us. | text | page | history-withdrawals-overdue | C1 | It is still with Steam, and late. That is on us. (principle 3 and T8: says who the wait is on; the heading now carries the fact this line used to repeat) |
| 5.9-89 | main | It has passed our published {n} h {n} m. | note | page | history-withdrawals-overdue |  | Nine in ten arrive within {n} h {n} m. This one has not. (principle 2: the published figure in the product's own wording (voice.md example "Nine in ten arrive within 6 h 15 m")) |
| 5.9-90 | main | Nothing about the item is lost. The row below carries the reference support needs, and support already has it. | note | page | history-withdrawals-overdue | C6 | kept |
| 5.9-91 | main | What | column head | `_nav.js FAQ/HIST_COLS` | history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | kept |
| 5.9-92 | main | Worth then | column head | `_nav.js HIST_COLS` | history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | Value then (C2) |
| 5.9-93 | main | Waiting on | column head | `_nav.js HIST_COLS/mountSupportSubject` | history-withdrawals-overdue, history-withdrawals-restricted, history-withdrawals |  | kept |
| 5.9-94 | main | Cancelled by you | cell | page script | history-withdrawals-overdue, history-withdrawals |  | Canceled by you (US spelling, glossary ("canceled")) |
| 5.9-95 | main | Nobody | cell | page script | history-withdrawals-overdue, history-withdrawals |  | kept |
| 5.9-96 | main | With Steam Sent {n} h {n} m ago. Nine in ten arrive within {n} h {n} m. | cell | page script | history-withdrawals-overdue, history-withdrawals |  | kept |
| 5.9-97 | main | Steam | text | page, page script | history-withdrawals-overdue, history-withdrawals; all 4 of `5.11` |  | kept |
| 5.9-98 | main | Past the time we publish Sent {n} h {n} m ago, which is past the time we publish for this. We have missed it, we know, and support has this row already. | cell | page script | history-withdrawals-overdue | C6 | Past the time we publish Sent {n} h {n} m ago, past the time we publish. That is on us, and support already has this row. Nothing is lost. (T8 addition: every stop on the way out says who the wait is on and that nothing is lost; principle 1, padding cut ("We have missed it, we know")) |
| 5.9-99 | main | Steam, and us | cell | page script | history-withdrawals-overdue |  | kept |
| 5.9-100 | main | Offer expired Steam’s trade offer ran out. The skin is back in My items. Open the record | cell | page script | history-withdrawals-overdue, history-withdrawals | C10 N5 | Trade offer expired Steam closed it before it was accepted. The item is back in My items. Open the record (glossary N5: "trade offer", never "offer" alone; C10: item for what the person owns ("The skin is back in My items"); "Open the record" is 5.9-101, parent-owned and untouched) |
| 5.9-101 | main | Open the record | link | `_nav.js histTable` | history-withdrawals-overdue, history-withdrawals |  | kept |
| 5.9-102 | main | You | cell | page script | history-withdrawals-overdue, history-withdrawals |  | kept |
| 5.9-103 | main | Withdrawals are stopped on this account | heading | page | history-withdrawals-restricted | C1 | Withdrawals are paused (Forbidden: an accusation in a stop; aligned with G164's Now; a state's heading says the state) |
| 5.9-104 | main | Recorded {date} {time}. This text is yours to copy. | text | page | withdraw-restricted, withdraw-restriction-upheld; history-withdrawals-restricted |  | kept |
| 5.9-105 | main | Nothing here is taken. The balance is frozen rather than emptied and the items you hold are still yours, and everything you have already sent to Steam is below and unchanged. | note | page | history-withdrawals-restricted | C1 | Nothing is taken. Everything you have already sent to Steam is below, unchanged. (principle 1, nothing padded: G164's Now directly above already says "Your balance and items stay yours" and 5.9-107 says frozen, not zeroed, so the third telling is cut) |
| 5.9-106 | main | We answer an appeal within {n} hours. | note | page | withdraw-restricted; history-withdrawals-restricted | N4 | kept |
| 5.9-107 | main | Your balance and your items stay frozen, not zeroed, until the review ends. | note | page | history-withdrawals-restricted | N4 | kept |
| 5.9-108 | main | Appeal this | button (link) | page | withdraw-restricted; history-withdrawals-restricted | N4 | kept |
| 5.9-109 | main | The restriction | button (link) | page | support-refused, support-submitted; history-withdrawals-restricted |  | kept |
| 5.9-110 | main | {n} withdrawal | text | page script | history-withdrawals-restricted | C1 | kept |
| 5.9-111 | main | Held while the account is restricted Nothing has been sent to Steam and nothing is lost. It is never taken quietly. | cell | page script | history-withdrawals-restricted | C1 | Held while withdrawals are paused Nothing has been sent to Steam and nothing is lost. It is never taken quietly. (Forbidden: an accusation in a stop; aligned with G164 and 5.9-103 ("paused"); the why kept) |
| 5.9-112 | main | Us | text | page | system-500-noshell, system-500, system-503-planned, system-503-unplanned; history-withdrawals-restricted |  | kept |
| 5.9-113 | main | The proof source could not be read just now. This is not the same as never having been kept: the roll still has its material and we cannot reach it this minute. | text | `_nav.js ROLL_PROOF` | history | C9 | The proof source could not be read just now. This is not the same as never having been kept: the round still has its material and we cannot reach it this minute. (C9) |

### `5.10` Profile

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 5.10-1 | head | Profile: nothing to read | SEO title, SEO / IA ownership | page | profile-quiet | N3 | Profile: no messages (Screen heading: a state's title says the state; 'nothing to read' named no subject) |
| 5.10-2 | head | Profile: Steam unreadable | SEO title, SEO / IA ownership | page | profile-steam-down | N3 | kept |
| 5.10-3 | main | Your daily case | heading | page | all 3 of `5.10` | N1 | kept |
| 5.10-4 | main | Free entries you can open right now | text | page | all 3 of `5.10` |  | Daily cases you can open now (Glossary N1: daily case, never free entry; Forbidden, free as the hook) |
| 5.10-5 | main | See the daily case | button (link) | page | all 3 of `5.10` | N1 | kept |
| 5.10-6 | main | Your messages | heading | page | all 3 of `5.10` |  | kept |
| 5.10-7 | main | Promo | button | `_nav.js MSG_TABS/homeBody` | profile-quiet |  | kept |
| 5.10-8 | main | System | button | `_nav.js MSG_TABS/fillDeclared` | profile-quiet |  | kept |
| 5.10-9 | main | Marketing messages | heading | `_nav.js MSG_TABS` | all 3 of `5.10` |  | kept |
| 5.10-10 | main | No marketing messages | empty state | `_nav.js MSG_TABS` | profile-quiet |  | kept |
| 5.10-11 | main | Nothing has been sent to you. You can switch this channel off in Settings. | empty state | `_nav.js MSG_TABS` | profile-quiet |  | kept |
| 5.10-12 | main | Your public page | heading | page | all 3 of `5.10` |  | Your public profile (Glossary N3: public profile for what others see; matches the Settings switch 'Public profile') |
| 5.10-13 | main | Your name, your picture and every skin you have won, each with its round. | note | page | all 3 of `5.10` | C9 C10 | Your name, your picture and every item you have won, each with its round. (Glossary C10 (a): item for a thing a person owns or got; skin is the Steam/market sense) |
| 5.10-14 | main | See it as a stranger does | button (link) | page | all 3 of `5.10` |  | kept |
| 5.10-15 | main | Switch it off, or hide your name from live drops, in Settings. | note | page | all 3 of `5.10` | C10 | kept |
| 5.10-16 | main | Steam Name unavailable | link | _nav.js, assembled | profile-steam-down |  | kept |
| 5.10-17 | main | Promo {n} | button | `_nav.js MSG_TABS/homeBody` | profile-steam-down, profile |  | kept |
| 5.10-18 | main | System {n} | button | `_nav.js MSG_TABS/fillDeclared` | profile-steam-down, profile |  | kept |
| 5.10-19 | main | Mark all as read | button | `_nav.js mountMsgs` | profile-steam-down, profile |  | kept |
| 5.10-20 | main | Delete all | button | `_nav.js mountMsgs/mountSupportSubject` | profile-steam-down, profile |  | Delete all messages (step 4: a destructive act names its object) |
| 5.10-21 | main | Two cases joined the shelf | text | page script | profile-steam-down, profile |  | kept |
| 5.10-22 | main | {d} and {d} are open from today, both with their chances and tested return published on the case page. | text | page script | profile-steam-down, profile |  | {d} and {d} are available from today, both with their chances and tested return published on the case page. (Glossary C9: 'open' is the act; availability says available) |
| 5.10-23 | main | Two cases joined the shelf {d} and {d} are open from today, both with their chances and tested return published on the case page. Unread {date} {time} See the shelf | text | `_nav.js msgRow`, page script | profile-steam-down, profile |  | kept |
| 5.10-24 | main | See the shelf | link | page script | profile-steam-down, profile |  | kept |
| 5.10-25 | main | Your daily entry is waiting | text | page script | profile-steam-down, profile | N1 | Your daily case is waiting (Glossary N1: daily case, never daily entry) |
| 5.10-26 | main | You have not used a free entry since {date}. It costs nothing and it does not stack. | text | page script | profile-steam-down, profile | N1 | You have not opened a daily case since {date}. It costs nothing and it does not stack. (Glossary N1: daily case, never free entry; 'costs nothing' kept as the fact) |
| 5.10-27 | main | Your daily entry is waiting You have not used a free entry since {date}. It costs nothing and it does not stack. Unread {date} {time} Open the daily case | text | `_nav.js msgRow`, page script | profile-steam-down, profile | N1 | kept |
| 5.10-28 | main | Open the daily case | link | page script | profile-steam-down, profile | N1 | kept |
| 5.10-29 | main | Steam cannot be read right now | heading | page | profile-steam-down |  | kept |
| 5.10-30 | main | Your name and picture are unavailable. Your items, rolls, messages and withdrawals are open. | text | page | profile-steam-down | C1 C9 | Your name and picture are unavailable. Your items, rounds, messages and withdrawals still work. (Glossary C9: rounds, not rolls, and 'open' not used for availability; principle 5, a stop says what still works) |
| 5.10-31 | main | While Steam cannot be read, it shows no name and no picture either. Your wins still list in full. | note | page | profile-steam-down | C10 | While Steam cannot be read, it shows no name and no picture either. Every item you have won is still listed. (Glossary C10: 'wins' never names items; aligned with 5.10-13) |
| 5.10-32 | main | {n} unread | accessible name | _nav.js, assembled | profile-steam-down, profile |  | kept |

### `5.11` Settings

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 5.11-1 | head | Settings. CS{n} Clutch | SEO title, SEO / IA ownership | page | all 4 of `5.11` |  | kept |
| 5.11-2 | main | No Steam account linked | link | `_nav.js renderAcctHero` | settings-no-steam |  | kept |
| 5.11-3 | main | General | text | page | all 4 of `5.11` |  | kept |
| 5.11-4 | main | Username | text | page | all 4 of `5.11` |  | kept |
| 5.11-5 | main | From your Google account. | text | page | settings-no-steam |  | kept |
| 5.11-6 | main | Where you live | field label | page | all 4 of `5.11` |  | Country (Field label is a noun; glossary C3 c, country) |
| 5.11-7 | main | Ukraine | option | page | all 4 of `5.11` |  | kept |
| 5.11-8 | main | Poland | option | page | all 4 of `5.11` |  | kept |
| 5.11-9 | main | Only markets we operate in are listed. A false country can close the account. | text | page | all 4 of `5.11` | C3 | Only countries we operate in are listed. A false one can close the account. (Glossary C3 c: country, never market for where a person lives) |
| 5.11-10 | main | Save where you live | button | page | all 4 of `5.11` |  | Save country (voice.md One main action, 5.11 row: two saves name their objects) |
| 5.11-11 | main | Last changed {date} | text | page | all 4 of `5.11` |  | kept |
| 5.11-12 | main | Steam trade URL | field label | page | all 4 of `5.11` |  | kept |
| 5.11-13 | main | Skins can only be sent to a Steam account. Link one to withdraw. | text | page | settings-no-steam | C1 C10 | Skins can only be sent to a Steam account, and none is linked yet. (Glossary C1: withdraw is not a verb; principle 5, say what happened) |
| 5.11-14 | main | What this costs right now | text | page | settings-no-steam, settings-no-trade |  | What this stops right now (Section heading names what the block holds; glossary S4 keeps 'costs' for a price, and this block holds no money) |
| 5.11-15 | main | You can add money and open cases. You cannot take a skin out, because there is nowhere for it to go. | text | page | settings-no-steam | C10 | You can add funds and open cases, and your items stay in My items. Sending to Steam waits until a Steam account is linked. (Glossary C4 Add funds, C1 Send to Steam; principle 5 and T8: what still works and that nothing is lost) |
| 5.11-16 | main | Go to My items | button (link) | page | settings-no-steam |  | kept |
| 5.11-17 | main | English | text | page | all 4 of `5.11` |  | kept |
| 5.11-18 | main | German | option | `_nav.js LANGS/barItems` | all 4 of `5.11` |  | kept |
| 5.11-19 | main | Chinese | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-20 | main | French | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-21 | main | Polish | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-22 | main | Turkish | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-23 | main | Portuguese | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-24 | main | Spanish | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-25 | main | Russian | option | `_nav.js LANGS` | all 4 of `5.11` |  | kept |
| 5.11-26 | main | Sound | text | page | all 4 of `5.11` |  | kept |
| 5.11-27 | main | On | text | page | all 4 of `5.11` |  | kept |
| 5.11-28 | main | Security | text | page | all 4 of `5.11` |  | kept |
| 5.11-29 | main | Take a break | text | page | all 4 of `5.11` |  | Your limits (the row key); Set limits (the link to responsible.html) (Glossary C5: 'your limits' for all four, 'Set limits' as people say it; D-166 settled the regulated names over 'Take a break'; a link names the act it starts) |
| 5.11-30 | main | Deposit limits, session limits, a cool down and self exclusion. | text | page | all 4 of `5.11` | C4 C5 | Deposit limit, session limit, cool down and self exclusion. (Glossary C5: the four by name) |
| 5.11-31 | main | Public profile | text | page | all 4 of `5.11` | N3 | kept |
| 5.11-32 | main | On. Anyone with the address sees your name and your wins. | text | page | all 4 of `5.11` | C10 | On. Anyone with the address sees your name and your drops. (Glossary C10: 'wins' is not used for items; drop is what came out of an open in the social sense) |
| 5.11-33 | main | Pages for rounds you already shared stay up, and your name stays in the live drops. | text | page | all 4 of `5.11` | C9 C10 | kept |
| 5.11-34 | main | See what is on it right now | link | page | all 4 of `5.11` |  | kept |
| 5.11-35 | main | Make me anonymous | text | page | all 4 of `5.11` |  | kept |
| 5.11-36 | main | Off. Your name shows in live drops and on results you share. | text | page | all 4 of `5.11` | C10 | kept |
| 5.11-37 | main | Linked profiles | text | page | all 4 of `5.11` |  | Linked accounts (Glossary N3: profile is the page about a person; a Steam or Google sign-in is an account, as 'No Steam account linked' already says) |
| 5.11-38 | main | Not connected. This is the one a skin can be sent to. | text | page | settings-no-steam | C10 | Not linked. Skins can only be sent to this one. (One concept, one word: linked, matching the group heading and 'No Steam account linked'; answer first, principle 1) |
| 5.11-39 | main | Discord | button (link) | page, `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin; all 4 of `5.11` |  | kept |
| 5.11-40 | main | Not connected | text | page | all 4 of `5.11` |  | Not linked (One concept, one word: linked) |
| 5.11-41 | main | Google | button (link) | page, `_nav.js authCard` | signin-blocked, signin-consent-given, signin-consent-partial, signin-dialog, signin; all 4 of `5.11` |  | kept |
| 5.11-42 | main | Connected. This is how you sign in. | text | page | all 4 of `5.11` |  | Linked. This is how you sign in. (One concept, one word: linked) |
| 5.11-43 | main | Link Steam to be able to send skins out. | text | page | settings-no-steam | C10 | Link a Steam account to use Send to Steam. (Glossary C1: the act is Send to Steam, not 'send skins out') |
| 5.11-44 | main | Notifications | text | page | all 4 of `5.11` |  | kept |
| 5.11-45 | main | What we send you | text | page | all 4 of `5.11` |  | kept |
| 5.11-46 | main | Offers, free cases and anything else we want to sell you | field label | page | all 4 of `5.11` | S1 N1 N5 | Promotions, bonuses and anything else we want to sell you (Glossary N5: 'offer' alone is only a trade offer; Forbidden, free as the hook, and N1 retires 'free cases') |
| 5.11-47 | main | Read your messages | link | page | all 4 of `5.11` |  | kept |
| 5.11-48 | main | About your own account | text | page | all 4 of `5.11` |  | kept |
| 5.11-49 | main | Messages about your own account | text | page | all 4 of `5.11` |  | kept |
| 5.11-50 | main | Always on | text | page | all 4 of `5.11` |  | kept |
| 5.11-51 | main | Failed withdrawals, unsettled rounds, limits coming into force. | text | page | all 4 of `5.11` | C1 C5 C9 | kept |
| 5.11-52 | main | Confirmations | text | page | all 4 of `5.11` |  | kept |
| 5.11-53 | main | Selling back, sending to Steam and cashing out always ask you first. | text | page | all 4 of `5.11` | C1 S1 N6 | Selling, sending to Steam and cashing out always ask you first. (Glossary S1: Sell, never 'selling back') |
| 5.11-54 | main | From Steam. | text | page | settings-no-trade, settings-refused, settings |  | kept |
| 5.11-55 | main | Steam needs this link to send you skins. | text | page | settings-no-trade, settings-refused, settings | C10 | kept |
| 5.11-56 | main | Where to get this link on Steam | link | page | settings-no-trade, settings-refused, settings |  | kept |
| 5.11-57 | main | Never set | text | page | settings-no-trade |  | kept |
| 5.11-58 | main | Withdrawals cannot be sent until this is filled in. Everything else on the account works. | text | page | settings-no-trade | C1 | Nothing can be sent to Steam until this is set. Your items stay in My items, and everything else works. (Glossary C1: withdrawal is the record, the act is Send to Steam; T8 adds that nothing is lost) |
| 5.11-59 | main | https://steamcommunity.com/profiles/{hash} | text | page | settings-refused |  | kept |
| 5.11-60 | main | Steam will not accept this one: it does not start with the Steam trade offer address, there is no partner number in it, there is no token in it. Get a fresh link from Steam and paste it whole. | text | page | settings-refused | N5 | Not saved: Steam will not accept this link. It does not start with the Steam trade offer address, and it has no partner number and no token. Get a fresh link from Steam and paste it whole. (A refusal beside a control opens with what did not go through, then the reason, then what to do) |
| 5.11-61 | main | https://steamcommunity.com/tradeoffer/new/?partner={hash}&token=xJ{n}n-Qf{n} | text | page | settings |  | kept |

### `6.1` Responsible play

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 6.1-1 | head | Responsible play: limits, cool down and self exclusion | SEO title, SEO / IA ownership | page | all 5 of `6.1` | C5 C7 | kept |
| 6.1-2 | head | Set a deposit limit, a session limit, a cool down or a self exclusion. Withdrawal stays open under every one of them. No account needed to read. | SEO description, SEO / IA ownership | page | all 5 of `6.1` | C1 C4 C5 | IA owns it: block C of `ia/docs/pages/responsible.md` holds the aligned line |
| 6.1-3 | main | What these tools do | heading | `WF_STR.rpWhat` | all 5 of `6.1` |  | kept |
| 6.1-4 | main | Four boundaries you set yourself. | text | `WF_STR.rpFour` | all 5 of `6.1` | C5 | Four limits you set yourself. (C5) |
| 6.1-5 | main | Tightening one takes effect immediately. Loosening one takes {n} hours, and the boundary you have now holds until then. | text | `WF_STR.rpTighten` | all 5 of `6.1` | C5 | Tightening one takes effect immediately. Loosening one takes {n} hours, and the limit you have now holds until then. |
| 6.1-6 | main | What a boundary closes, and what it never closes | heading | `WF_STR.rpClosesH` | all 5 of `6.1` | C5 | What a limit closes, and what it never closes |
| 6.1-7 | main | A boundary can close | text | `WF_STR.rpCanClose` | all 5 of `6.1` | C5 | A limit can close |
| 6.1-8 | main | Adding funds. Opening a case. A session, when its length is reached. | text | `WF_STR.rpCanCloseList` | all 5 of `6.1` | C4 | kept |
| 6.1-9 | main | No boundary ever closes | text | `WF_STR.rpNeverClose` | all 5 of `6.1` | C5 | No limit ever closes |
| 6.1-10 | main | Taking what you hold out to Steam. | text | page | all 5 of `6.1` |  | kept |
| 6.1-11 | main | Taking what you hold out to Steam. Support. Reading the product. | text | `WF_STR.rpNeverCloseList` | all 5 of `6.1` | C6 | kept |
| 6.1-12 | main | Deposit limit | heading | `WF_STR.depositLimit` | all 5 of `6.1` | C4 C5 | kept |
| 6.1-13 | main | Caps what you can put in over a period. | text | `WF_STR.rpDepositWhat` | all 5 of `6.1` | C4 | kept |
| 6.1-14 | main | per day | option | `WF_STR.perDay` | all 5 of `6.1` |  | kept |
| 6.1-15 | main | per week | option | `WF_STR.perWeek` | all 5 of `6.1` |  | kept |
| 6.1-16 | main | per month | option | `WF_STR.perMonth` | all 5 of `6.1` |  | kept |
| 6.1-17 | main | Session limit | heading | `WF_STR.sessionLimit` | all 5 of `6.1` | C5 | kept |
| 6.1-18 | main | Ends a session once it has run this long. | text | `WF_STR.rpSessionWhat` | all 5 of `6.1` |  | kept |
| 6.1-19 | main | {n} minutes | option | `WF_STR.min30` | all 5 of `6.1` |  | kept |
| 6.1-20 | main | {n} hour | option | `WF_STR.hour1` | all 5 of `6.1` |  | kept |
| 6.1-21 | main | {n} hours | option | `WF_STR.hours2` | all 5 of `6.1` |  | kept |
| 6.1-22 | main | Cool down | heading | `WF_STR.coolDown` | all 5 of `6.1` |  | kept |
| 6.1-23 | main | Closes adding funds and opening cases for a period you choose. | text | `WF_STR.rpCoolWhat` | all 5 of `6.1` | C4 | kept |
| 6.1-24 | main | Extend Immediately. | text | `WF_STR.extend`, `WF_STR.immediately` | all 5 of `6.1` |  | kept |
| 6.1-25 | main | Shorten Not possible. It ends by running out. | text | `WF_STR.rpShortenNo`, `WF_STR.shorten` | all 5 of `6.1` |  | kept |
| 6.1-26 | main | {n} days | option | `WF_STR.days7` | all 5 of `6.1` |  | kept |
| 6.1-27 | main | Start a cool down | button | `WF_STR.startCoolDown` | all 5 of `6.1` |  | kept |
| 6.1-28 | main | Self exclusion | heading | `WF_STR.selfExclusion` | all 5 of `6.1` |  | kept |
| 6.1-29 | main | Closes adding funds and opening cases for longer. The one thing here you cannot undo. | text | `WF_STR.rpExclWhat` | all 5 of `6.1` | C4 | Closes adding funds and opening cases for longer. It cannot be ended early, by you or by us. (step 4 f row 29) |
| 6.1-30 | main | End early Not possible, and that is the point of it. | text | `WF_STR.endEarly`, `WF_STR.rpEndEarlyNo` | all 5 of `6.1` |  | End early Not possible, by you or by us. |
| 6.1-31 | main | {n} months | option | `WF_STR.months6` | all 5 of `6.1` |  | kept |
| 6.1-32 | main | {n} year | option | `WF_STR.year1` | all 5 of `6.1` |  | kept |
| 6.1-33 | main | {n} years | option | `WF_STR.years5` | all 5 of `6.1` |  | kept |
| 6.1-34 | main | Self exclude | button | `WF_STR.selfExclude` | all 5 of `6.1` |  | kept |
| 6.1-35 | main | Support that is not a limit | heading | `WF_STR.rpNotLimit` | all 5 of `6.1` | C5 C6 | kept |
| 6.1-36 | main | Help that is not ours | text | `WF_STR.rpNotOurs` | all 5 of `6.1` | C6 | kept |
| 6.1-37 | main | Gambling Therapy | link | page | all 5 of `6.1` |  | kept |
| 6.1-38 | main | Gambling Therapy, free and confidential, in any country. | text | `WF_STR.rpTherapy` | all 5 of `6.1` |  | kept |
| 6.1-39 | layer: dialog | Self exclusion for {n} years | heading | `_nav.js excludeHTML` | responsible-confirm |  | kept |
| 6.1-40 | layer: dialog | It starts now and ends on {date}, {time}. | text | `_nav.js excludeHTML` | responsible-confirm |  | kept |
| 6.1-41 | layer: dialog | Closes | text | page | responsible-confirm |  | kept |
| 6.1-42 | layer: dialog | Opening a case, and adding funds. | text | `_nav.js excludeHTML` | responsible-confirm | C4 | kept |
| 6.1-43 | layer: dialog | Stays open | text | `_nav.js excludeHTML` | responsible-confirm |  | kept |
| 6.1-44 | layer: dialog | It cannot be lifted early. That is what it is for. | note | `_nav.js excludeHTML` | responsible-confirm |  | It cannot be ended early, by you or by us. (step 4, "Dangerous act") |
| 6.1-45 | main | Cancel | button (link) | page, `_nav.js STEP2_BANNER/excludeHTML` | withdraw-many, withdraw; responsible-confirm |  | kept |
| 6.1-46 | layer: dialog | Confirm | button (link) | `_nav.js excludeHTML/hx` | responsible-confirm |  | Start self exclusion (the confirmation repeats the act) |
| 6.1-47 | main | Deposit limit amount | accessible name | page | all 5 of `6.1` | C4 C5 | kept |
| 6.1-48 | main | Deposit limit period | accessible name | page | all 5 of `6.1` | C4 C5 | kept |
| 6.1-49 | main | Session length | accessible name | page | all 5 of `6.1` |  | Session limit length (Microcopy, Accessible name: the visible label's own words (the row's heading is Session limit, glossary C5); now parallel to Deposit limit period, Cool down period, Self exclusion period) |
| 6.1-50 | main | Cool down period | accessible name | page | all 5 of `6.1` |  | kept |
| 6.1-51 | main | Self exclusion period | accessible name | page | all 5 of `6.1` |  | kept |
| 6.1-52 | layer: dialog | Confirm self exclusion | accessible name | `_nav.js excludeHTML` | responsible-confirm |  | kept |
| 6.1-53 | main | A self exclusion is running. You can still tighten another boundary; nothing can be loosened. | text | page | responsible-excluded | C5 | A self exclusion is running. You can still tighten another limit; nothing can be loosened. (Glossary C5: limit, never boundary) |
| 6.1-54 | main | What is in force now | heading | page | responsible-excluded, responsible-in-force |  | kept |
| 6.1-55 | main | Self exclusion Ends {date}, {time} Adding funds and opening cases are closed until then. It cannot be lifted early. | text | `WF_STR.selfExclusion`, page | responsible-excluded | C4 | Self exclusion Ends {date}, {time} Adding funds and opening cases are closed until then. It cannot be ended early, by you or by us. (step 4, "Dangerous act") |
| 6.1-56 | main | Taking what you hold out to Steam is open. So is support, and so is reading the product. | note | page | responsible-excluded | C6 | Sending items to Steam stays available. So does support, and so does reading the product. (C9: availability is "available"; C1, step 8) |
| 6.1-57 | main | Reading this page needs no account. Setting a boundary does: Sign in. | text | page | responsible-guest | C5 | Reading this page needs no account. Setting a limit does: Sign in. (Glossary C5: limit, never boundary) |
| 6.1-58 | main | A cool down is running. Boundaries can still be tightened while it does. | text | page | responsible-in-force | C5 | A cool down is running. Limits can still be tightened while it does. (Glossary C5: limit, never boundary) |
| 6.1-59 | main | Cool down Ends {date}, {time} Adding funds and opening cases are closed until then. It cannot be shortened, and extending it takes effect immediately. | text | `WF_STR.coolDown`, page | responsible-in-force | C4 | kept |
| 6.1-60 | main | Deposit limit {n} per week | text | `WF_STR.depositLimit`, page | responsible-in-force | C4 C5 C11 | kept |
| 6.1-61 | main | Nothing is set yet. | text | page | responsible |  | No limits are set. (Glossary C5 names what is not set; principle 5, one plain line. No 'yet' and no lead to one control: node 6.1 section 2 refuses a primary call to action, and the T4 rule gives a limit no completion or progress words) |

### `7.1` Public result

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 7.1-1 | head | {d} {d}, {d}, from {d} | SEO title, SEO / IA ownership | page | result-checked, result-mismatched, result-noproof, result-owner, result |  | kept |
| 7.1-2 | head | The round proof for this open is on the page and needs no account to check. | SEO description, SEO / IA ownership | page | result-checked, result-mismatched, result-noproof, result-owner, result | C9 | kept |
| 7.1-3 | head | This result is not available | SEO title, SEO / IA ownership | page | result-gone | P | kept |
| 7.1-4 | head | The round can still be checked without this page. | SEO description, SEO / IA ownership | page | result-gone | C9 | kept |
| 7.1-5 | main | {d} \| {d}, won from {d} | SEO H1, SEO / IA ownership | page | result-checked, result-mismatched, result-noproof, result-owner, result |  | kept |
| 7.1-6 | main | Worth when it was won, {date} {time} | text | page | result-checked, result-mismatched, result-noproof, result-owner, result | C2 | Value when it was won, {date} {time} (Glossary C2: our value is "value", the listed form "Value when it was won"; matches R32 renderResult and the neighbouring "Value now") |
| 7.1-7 | main | {d} Opened {date} {time} | link | page | result-checked, result-mismatched, result-noproof, result-owner, result |  | kept |
| 7.1-8 | main | The round, and how to check it | heading | `_nav.js proofPanel` | result-checked, result-mismatched, result-noproof, result-owner, result | C9 | kept |
| 7.1-9 | main | Recomputed: matches | text | `_nav.js proofPanel` | result-checked |  | kept |
| 7.1-10 | main | Server seed hash, published before the roll | text | `_nav.js proofPanel` | result-checked, result-mismatched, result-owner, result | C9 | Server seed hash, published before the round (C9, the one hash label) |
| 7.1-11 | main | {hash} Copy | text | _nav.js, assembled | result-checked, result-mismatched, result-owner, result |  | kept |
| 7.1-12 | main | Server seed, revealed after | text | `_nav.js proofPanel` | result-checked, result-mismatched, result-owner, result |  | Server seed, revealed on rotation (the label 1.2 uses) |
| 7.1-13 | main | {d} Copy | text | _nav.js, assembled | result-checked, result-mismatched, result-owner, result |  | kept |
| 7.1-14 | main | Ticket range it landed in | text | `_nav.js proofPanel` | result-checked, result-mismatched, result-owner, result |  | kept |
| 7.1-15 | main | Proves the round was fixed before the click. Whether the chances hold is on the case screen, published against observed. | text | `_nav.js proofPanel` | result-checked, result-owner, result | C9 | kept |
| 7.1-16 | main | published against observed | link | `_nav.js proofPanel/renderHomeBodies` | result-checked, result-owner, result | K | kept |
| 7.1-17 | main | Recompute this round yourself | button (link) | `_nav.js proofPanel` | result-checked, result-owner, result | C9 | Recompute it yourself (step 4) |
| 7.1-18 | main | Won by | text | `WF_STR.wonBy` | result-checked, result-mismatched, result-noproof, result-owner, result |  | kept |
| 7.1-19 | main | This result is not available. | SEO H1, SEO / IA ownership | page | result-gone | P | kept |
| 7.1-20 | main | It may have been taken down by the person who won it, or the link may never have pointed at anything. | empty state | page | result-gone |  | It was taken down, or the link never pointed at one. We do not say which. (Principle 1, the short answer then the fact, no hedging; principle 5; node 7.2's one message for all three arrivals (the old line named only two and stacked two "may")) |
| 7.1-21 | main | The round can still be checked without this page. The verifier needs the server seed, the client seed and the nonce. Whoever sent you this link has them. | empty state | page | result-gone | C9 | kept |
| 7.1-22 | main | Open the verifier | button (link) | page | result-gone |  | Check a round (Microcopy "A link": names the act it starts, in the destination's own words (fair.html H2 "Check a round", S5); glossary C9 keeps "open" for opening a case) |
| 7.1-23 | main | Recomputed: does not match | text | `_nav.js proofPanel` | result-mismatched |  | kept |
| 7.1-24 | main | Recomputed result | text | `_nav.js proofPanel` | result-mismatched |  | kept |
| 7.1-25 | main | The recomputation does not agree with the settled result. That is our failure, not yours, and it is reportable. The published response deadline applies to it. | text | `_nav.js proofPanel` | result-mismatched |  | kept |
| 7.1-26 | main | Recompute it yourself | button (link) | `_nav.js proofPanel` | result-mismatched |  | kept |
| 7.1-27 | main | Proof not available | text | `_nav.js proofPanel` | result-noproof |  | kept |
| 7.1-28 | main | Why | text | _nav.js, assembled | result-noproof |  | kept |
| 7.1-29 | main | This round predates the published ledger | text | `_nav.js proofPanel` | result-noproof | C9 | kept |
| 7.1-30 | main | The round happened and the item is real. What is missing is the published commitment, because this open is older than the ledger that publishes them. | text | `_nav.js proofPanel` | result-noproof | C9 | kept |
| 7.1-31 | main | Read what the proof covers | button (link) | `_nav.js proofPanel` | result-noproof |  | kept |
| 7.1-32 | main | Yours | text | page | result-owner |  | kept |
| 7.1-33 | main | Copy the link | button | page | result-owner |  | kept |
| 7.1-34 | main | Revoke this page | button (link) | page | result-owner |  | kept |
| 7.1-35 | main | Revoking takes the page down, and every copy of its link then opens the gone page. It cannot unsend a screenshot or a preview already shown in someone's chat. The round stays checkable by anyone holding its seeds. | note | page | result-owner | C9 | Revoking takes the page down for every copy of its link. It cannot unsend a screenshot or a preview already shown in someone's chat. The round stays checkable by anyone holding its seeds. (Principle 1 and microcopy "Dangerous act": say what will happen in the reader's words; "the gone page" was the node's internal name for state 7.2, not a word the reader has. The limit sentence stays whole) |
| 7.1-36 | main | Settled | text | `_nav.js mountClockStruck/proofPanel` | result-owner, result |  | kept |

### `7.3` Public profile

| # | Zone | String | Type | Lives in | Pages | Marks | Now |
|---|---|---|---|---|---|---|---|
| 7.3-1 | head | {d}, nothing won from a case yet | SEO title, SEO / IA ownership | page | player-empty |  | {d}, no cases opened yet (Principle 4, the outcome stays open: every open lands on an item, so 'nothing won' framed an open as win or lose; aligned with the empty state 7.3-11) |
| 7.3-2 | head | This account has not won a skin from a case yet, so there is nothing on the shelf. | SEO description, SEO / IA ownership | page | player-empty | C10 | This account has not opened a case yet, so nothing is listed here. (Principle 4 as in 7.3-1; 'shelf' is node vocabulary, not the reader's; empty state rule, why it is empty) |
| 7.3-3 | head | This page is not available | SEO title, SEO / IA ownership | page | player-gone | P | kept |
| 7.3-4 | head | There is nothing at this address to show. | SEO description, SEO / IA ownership | page | player-gone |  | kept |
| 7.3-5 | head | Your public page, hidden | SEO title, SEO / IA ownership | page | player-hidden |  | Your public profile, hidden (Glossary N3 (b): public profile for what others see) |
| 7.3-6 | head | Your public page, as a stranger reads it | SEO title, SEO / IA ownership | page | player-owner |  | Your public profile, as a stranger sees it (Glossary N3 (b); 'sees' as in 7.3-24 and 5.10's 'See it as a stranger does') |
| 7.3-7 | head | {d}, what this account has won | SEO title, SEO / IA ownership | page | player |  | kept |
| 7.3-8 | head | Every skin this account has won, each one with the round a stranger can recompute. | SEO description, SEO / IA ownership | page | player | C9 C10 | Every item this account has won, each with the round anyone can recompute. (Glossary C10 (a): item for what an account has won, matching the note 7.3-21; 'anyone' as in 7.3-12, since no account is needed to check) |
| 7.3-9 | main | ID p{n}k{n}x{n}m | text | page | player-empty, player-hidden, player-owner, player |  | kept |
| 7.3-10 | main | What this account has won | heading | page | player-empty, player-hidden, player-owner, player |  | kept |
| 7.3-11 | main | This account has not opened a case yet. | empty state | page | player-empty |  | kept |
| 7.3-12 | main | The first skin it wins appears here the moment the case is opened, with the case it came from, what it was worth at that moment, and the round anyone can recompute. | empty state | page | player-empty | C9 C10 | The first item it wins is listed here as soon as the case is opened, with the case it came from, its value when won, and the round anyone can recompute. (Glossary C10 (a) item; C2 value, matching the card label 'Value when won' (5.9-58)) |
| 7.3-13 | main | This page is not available. | SEO H1, SEO / IA ownership | page | player-gone | P | kept |
| 7.3-14 | main | There may never have been an account at this address, or there may have been one that is no longer public. We do not say which. | empty state | page | player-gone |  | kept |
| 7.3-15 | main | Any result link you were sent still works, with its own proof. | empty state | page | player-gone |  | kept |
| 7.3-16 | main | Hidden. Nobody but you can open this | text | page | player-hidden |  | kept |
| 7.3-17 | main | A stranger at this address sees the same page as for an account that never existed. | text | page | player-hidden |  | A stranger at this address sees the page shown for an account that never existed. (Principle 1, plain sentence: 'the same page as for' did not parse on a first read) |
| 7.3-18 | main | Change this in Settings | button (link) | page | player-hidden |  | kept |
| 7.3-19 | main | Two things stay. Your name in live drops, unless you turn on Make me anonymous, and the pages for rounds you shared. A shared round looks like this | text | page | player-hidden | C9 C10 | kept |
| 7.3-20 | main | A shared round looks like this | link | page | player-hidden | C9 | kept |
| 7.3-21 | main | Everything this account has won, including items since sent to Steam or sold. | note | page | player-hidden, player-owner, player | C1 S1 | kept |
| 7.3-22 | main | Whose page this is | accessible name | page | player-hidden, player-owner |  | kept |
| 7.3-23 | main | Your own public page | text | page | player-owner |  | Your public profile (Glossary N3 (b); the same words as 5.10's heading over this page) |
| 7.3-24 | main | This is what a stranger sees at this address. | text | page | player-owner |  | kept |
| 7.3-25 | main | Back to your profile | button (link) | page | player-owner | N3 | kept |
| 7.3-26 | main | This page is on. Public profile in Settings | note | page | player-owner | N3 | kept |
| 7.3-27 | main | Public profile in Settings | link | page | player-owner | N3 | kept |

## 3. Written only on a press

Lines `_nav.js` writes after an act: refusals, confirmations, the answers of a form. They are not on any page at load, so the render cannot see them; they are read from the source, one literal piece per row, with the function that writes it and its line in `_nav.js` on 5 October 2026. A piece ending without a full stop is completed at run time by a figure or a name.

| # | Function | Line | Piece | Now |
|---|---|---|---|---|
| R1 | `confirmFirst` | 700 | Press again to | kept |
| R2 | `mountRp` | 1784 | from 22 Aug 2026, 09:31 | kept |
| R3 | `mountRp` | 1788 | What is in force | kept |
| R4 | `mountRp` | 1803 | Nothing changed: a self exclusion is running, so a limit can only be tightened. | kept |
| R5 | `mountRp` | 1811 | Saved. A looser limit applies in 24 hours. | kept |
| R6 | `mountRp` | 1811 | Saved. It applies now. | kept |
| R7 | `mountRp` | 1815 | Saved. A shorter session applies now; a longer one in 24 hours. | kept |
| R8 | `mountRp` | 1828 | Nothing changed: a self exclusion runs until | kept |
| R9 | `mountRp` | 1828 | , and a cool down inside it would add nothing. | kept |
| R10 | `mountRp` | 1831 | Nothing changed: the cool down already runs until | kept |
| R11 | `mountRp` | 1835 | Extended. It now ends | kept |
| R12 | `mountDeposit` | 1939 | Nothing went through: adding funds is closed until | kept |
| R13 | `mountDeposit` | 1940 | Nothing went through: the smallest deposit is $5.00. | kept |
| R14 | `mountDeposit` | 1941 | Nothing went through: your deposit limit is reached for this period. | kept |
| R15 | `mountDeposit` | 1942 | Nothing went through: your deposit limit leaves $ | kept |
| R16 | `mountDeposit` | 1944 | Nothing went through: the receipt needs an email address it can reach. | kept |
| R17 | `mountDeposit` | 1951 | Nothing went through: the terms and the refund policy have not been accepted yet. | Nothing went through: the Terms of use and the Refund and payments policy have not been accepted yet. |
| R18 | `renderShell` | 2007 | Sound off | kept |
| R19 | `renderShell` | 2051 | Expand the rail | Expand the menu (G16) |
| R20 | `renderShell` | 2171 | the deposit route closes | kept |
| R21 | `authCard` | 2874 | ✓ I agree to the Terms and Conditions and the Privacy Policy . | ✓ I agree to the Terms of use and the Privacy policy. |
| R22 | `authCard` | 2932 | Sign in with Steam | kept |
| R23 | `authCard` | 2986 | Or keep looking around without an account</ | kept |
| R24 | `wireAuth` | 3086 | The agreement to the terms is still missing. | kept |
| R25 | `gateHTML` | 3227 | We could not work out where you are, so opening cases is not available. | kept |
| R26 | `openLine` | 3247 | Your balance and items stay yours, and withdrawal stays open. | Your balance and items stay yours, and sending to Steam stays available. |
| R27 | `proofPanel` | 3424 | Report this round | kept |
| R28 | `proofPanel` | 3430 | Proof unreadable right now | kept |
| R29 | `proofPanel` | 3432 | The round happened and its material is kept. Nothing about the result changes while it cannot be read. | kept |
| R30 | `proofPanel` | 3433 | Try again | kept |
| R31 | `proofPanel` | 3438 | Recompute this round yourself | Recompute it yourself |
| R32 | `renderResult` | 3475 | coins Worth when it was won, | coins Value when it was won, |
| R33 | `mountCount` | 3595 | The balance does not cover this open, short by | kept |
| R34 | `mountOutcomeActs` | 3625 | Not copied, select it by hand | kept |
| R35 | `mountOutcomeActs` | 3636 | Sold, + | kept |
| R36 | `mountOutcomeActs` | 3640 | All sold, + | kept |
| R37 | `mountOutcomeActs` | 3648 | Sell the other | kept |
| R38 | `mountOutcomeActs` | 3649 | All sold | kept |
| R39 | `outcomeLeft` | 3693 | Nothing from this open is in | kept |
| R40 | `mountCaseTemplate` | 3738 | The balance does not cover this open, short by | kept |
| R41 | `mountOpenNow` | 3761 | Not opened: this open costs | kept |
| R42 | `mountOpenNow` | 3761 | coins and the balance is | kept |
| R43 | `mountOpenNow` | 3841 | Cashed out | kept |
| R44 | `mountOpenNow` | 3848 | All sold | kept |
| R45 | `mountOpenNow` | 3849 | Sell the other | kept |
| R46 | `mountInspect` | 3874 | Inspect in game | kept |
| R47 | `mountVerifier` | 3925 | Paste the client seed. | kept |
| R48 | `mountVerifier` | 3926 | Enter the nonce. | kept |
| R49 | `mountVerifier` | 3942 | Nothing to recompute yet: the server seed for this round is revealed when it rotates. | kept |
| R50 | `mountVerifier` | 3943 | Recomputed again: 30 211. It still does not match 2 417, and the report above stands. | kept |
| R51 | `mountVerifier` | 3949 | No published round has this server seed hash. Check it was copied whole, from the round you mean. | kept |
| R52 | `mountVerifier` | 3955 | published for this round. | kept |
| R53 | `mountVerifier` | 3958 | Does not match this round, | kept |
| R54 | `mountVerifier` | 3958 | from its record. Nothing was recomputed from a mix of two rounds. | kept |
| R55 | `caseBody` | 4271 | Nothing opened from this case is on record yet. | kept |
| R56 | `caseBody` | 4283 | Item image Item Chance Value Tickets | kept |
| R57 | `caseBody` | 4343 | Tier Published Observed | kept |
| R58 | `renderLadders` | 4385 | Nothing to open: no daily case has been given yet. | Not opened: no daily case yet. |
| R59 | `filterDrawerHTML` | 4469 | Additional | kept |
| R60 | `filterDrawerHTML` | 4471 | Liked | Favorites |
| R61 | `filterDrawerHTML` | 4472 | Sufficient funds to open | kept |
| R62 | `mountFilterDrawer` | 4584 | Name has \u201c | kept |
| R63 | `mountFilterDrawer` | 4586 | Favourites only | Favorites only |
| R64 | `mountFilterDrawer` | 4587 | Within my balance | kept |
| R65 | `renderAcctHero` | 4799 | Money not available: this account could not be read | kept |
| R66 | `mountInFlight` | 4862 | Select | kept |
| R67 | `mountInFlight` | 4868 | Exchange Exchange is not here yet | kept |
| R68 | `mountInvBar` | 4918 | 55 ITEMS 35.91 | kept |
| R69 | `mountInvBar` | 4956 | Sold, + | kept |
| R70 | `mountInvBar` | 4967 | Not sold: its value cannot be read right now | kept |
| R71 | `mountInvBar` | 4973 | Tick an item first. | kept |
| R72 | `mountInvBar` | 4977 | Press Sell for coins again to sell | kept |
| R73 | `mountInvBar` | 4979 | Not sold: one item has a value that cannot be read right now. Untick it to sell the rest. | kept |
| R74 | `mountInvBar` | 4987 | s. Each card | kept |
| R75 | `mountSupportSubject` | 5031 | Your reply was added at 09:31, 21 Aug 2026. The deadline still counts from when the ticket was sent. | kept |
| R76 | `mountSupportSubject` | 5052 | Round reported, 21 Aug 2026 09:31 | kept |
| R77 | `mountSupportSubject` | 5055 | Our recomputation of this round did not match what we published, and the round is attached: | kept |
| R78 | `mountSupportSubject` | 5057 | The round | kept |
| R79 | `mountSupportSubject` | 5062 | Question submitted | kept |
| R80 | `mountSupportSubject` | 5066 | We answer at the address you gave. | kept |
| R81 | `MSG_TABS` | 5092 | Product messages | kept |
| R82 | `MSG_TABS` | 5092 | No product messages | kept |
| R83 | `MSG_TABS` | 5093 | Nothing has gone wrong with your money, your items or an open. This is the tab that would say so. | kept |
| R84 | `mountMsgs` | 5181 | Kept, and never deleted. | kept |
| R85 | `ITEM_STATE` | 5414 | Sent to Steam | kept |
| R86 | `rollRow` | 5644 | this skin cost 12.40 and is worth 22.15 | kept |
| R87 | `rollRow` | 5674 | Withdrawn to Steam, | Sent to Steam, |
| R88 | `mountRolls` | 5754 | Last 24 hours | kept |
| R89 | `mountRolls` | 5754 | Last 7 days | kept |
| R90 | `wdRow` | 5882 | Sold, + | kept |
| R91 | `wdRow` | 5886 | Sold back for | Sold for |
| R92 | `wdRow` | 5886 | coins. It has left this basket. | kept |
| R93 | `mountClockStruck` | 6057 | were taken from your balance | kept |
| R94 | `mountClockStruck` | 6060 | Each copy bought for you is named by its float in the table above. Market prices read 21 Aug 2026 09:31. | kept |
| R95 | `mountClockStruck` | 6077 | Settled again at today's price: | kept |
| R96 | `mountClockStruck` | 6077 | coins against the | kept |
| R97 | `mountClockStruck` | 6077 | added the first time, so | kept |
| R98 | `mountClockStruck` | 6077 | were taken from | kept |
| R99 | `mountClockStruck` | 6085 | Offer sent again waiting on you 0:00 21 Aug 09:31 | kept |
| R100 | `mountWithdrawMany` | 6098 | was sold back | was sold |
| R101 | `mountWithdrawMany` | 6098 | was cashed out | kept |
| R102 | `mountWithdrawMany` | 6102 | not offered again. | kept |
| R103 | `mountWithdrawMany` | 6153 | Nothing settles | kept |
| R104 | `mountWithdrawMany` | 6153 | Nothing goes out, so nothing settles against your balance. | kept |
| R105 | `mountWithdrawMany` | 6153 | Nothing to send | kept |
| R106 | `payTile` | 6424 | Not open yet | Not available yet |
| R107 | `depProvider` | 6557 | prov" checked> Provider A | kept |
| R108 | `depProvider` | 6558 | Provider B | kept |
| R109 | `depCard` | 6617 | Enter the amount | Amount, in US dollars |
| R110 | `depCard` | 6620 | US dollars | kept |
| R111 | `depCard` | 6634 | Billing email | kept |
| R112 | `depCard` | 6657 | left this period after | kept |
| R113 | `depCard` | 6657 | from 22 Aug 2026, 09:31 | kept |
| R114 | `depCard` | 6703 | Total charged $ | kept |
| R115 | `depCrypto` | 6758 | No code yet | kept |
| R116 | `depCrypto` | 6762 | Create my address | kept |
| R117 | `depGift` | 6796 | Gift cards on | kept |
| R118 | `depGift` | 6804 | Card code | kept |
| R119 | `depSkins` | 6823 | From your Steam inventory | kept |
| R120 | `mountSkinDep` | 6945 | Pick a skin | kept |
| R121 | `mountSkinDep` | 6953 | Nothing went through: no skin is ticked. | kept |
| R122 | `mountCryptoNet` | 6971 | Raise cancelled $40.00 stays in force for the period. | kept |
| R123 | `mountCryptoNet` | 6979 | That is not a whole card code. Paste it as printed on the card. | kept |
| R124 | `mountCryptoNet` | 6979 | Nothing went through: paste the code from the card first. | kept |
| R125 | `mountPromo` | 6995 | Nothing applied: no promo or partner code has been issued yet, so there is none to recognise. | kept |
| R126 | `mountPromo` | 6996 | Nothing to apply: the field is empty. A code is optional and the offer above does not need one. | Nothing to apply: the field is empty. A code is optional and the bonus does not need one. |
| R127 | `mountCrediting` | 7019 | waiting on Steam to complete the trade | kept |
| R128 | `mountCrediting` | 7020 | What arrives, read when it lands | kept |
| R129 | `mountCrediting` | 7020 | the network sets this | kept |
| R130 | `mountCrediting` | 7021 | What the card carries, read on redeeming | kept |
| R131 | `mountCrediting` | 7021 | waiting on the reseller to confirm the code | kept |
| R132 | `mountCrediting` | 7023 | Not there when the | kept |
| R133 | `coLayer` | 7260 | Which network we send | kept |
| R134 | `coLayer` | 7285 | No saved | kept |
| R135 | `coLayer` | 7285 | address on this account yet. | kept |
| R136 | `mountCashout` | 7462 | Nothing is ticked. Cashing out needs at least one item, chosen on the grid behind this. | kept |
| R137 | `mountCashout` | 7463 | Which network we send | kept |
| R138 | `mountCashout` | 7464 | address is needed. Nothing is sent anywhere without one. | kept |
| R139 | `mountCashout` | 7465 | That is not | kept |
| R140 | `mountCashout` | 7466 | The smallest cash out on | kept |
| R141 | `mountCashout` | 7466 | coins. Tick more, or sell back instead. | coins. Tick more, or sell instead. |
| R142 | `mountCashout` | 7474 | Cash out requested | kept |
| R143 | `mountSystem` | 7605 | Asked again just now. Still unavailable, and it is still us. | kept |
| R144 | `mountSystem` | 7606 | attempts from here so far. | kept |
| R145 | `mountSystem` | 7607 | Nothing is reloading on its own. | kept |
| R146 | `mountSystem` | 7627 | Not copied, select it by hand | kept |
| R147 | `mountCookie` | 7703 | Your choice is saved. You can change it from Cookie settings at the foot of any page. | kept |
| R148 | `mountLegalVersion` | 7934 | Read this version | kept |
| R149 | `mountHomeLinks` | 8043 | Nothing went through: adding funds is closed until | kept |
| R150 | `mountHomeLinks` | 8043 | What is in force | kept |
| R151 | `mountHomeLinks` | 8051 | Not opened: opening cases is closed until | kept |
| R152 | `mountHomeLinks` | 8056 | , the median and | kept |
| R153 | `mountSettings` | 8102 | Nothing to save yet. Until this is filled in, a withdrawal cannot be sent. | Nothing to save yet. Until this is filled in, nothing can be sent to Steam. |
| R154 | `mountSettings` | 8119 | Saved just now. Withdrawals will go to this address. | Saved. Withdrawals go to this address. |

## 4. Concepts named more than one way

Every wording each mark caught, counted over the unique strings of sections 1 and 2. **Fixed** means a decision or a node already chose the word and step 3 aligns the stragglers; **Open** goes to the glossary at step 3 or to a microcopy rule at step 4. C1 to C11 and S1 to S6 are `wireframes/docs/voice-input.md` section c, re-verified on this inventory; N1 to N5 are new.

| Mark | Concept | Wordings found, with the number of strings carrying each | Strings | Fixed | Open |
|---|---|---|---|---|---|
| `C1` | Taking an item out to Steam | `withdrawal` 14, `Withdrawals` 6, `withdrawals` 6, `sent to Steam` 6, `Send to Steam` 5, `withdraw` 5, `Withdrawal` 4, `Sending to Steam` 3, `sending to Steam` 2, `Sending a win to Steam` 1, `Send 2 to Steam` 1, `send an item to Steam` 1, `Withdrawing` 1, `Send 4 items to Steam` 1 | 56 | **Fixed:** the act is `Send to Steam`, `D-128`. | The noun for the record and the menu row (`Withdrawals`); the verb in running text, withdraw or send; the home caption against the withdrawal caption. |
| `C2` | Our value for an item | `Value of items held` 5, `Credited` 3, `at our value` 2, `credited` 2, `Worth when` 2, `Worth now` 1, `at its value` 1, `Your skin price` 1, `Our price` 1, `our price` 1 | 18 | None: node `0.11` owns the figure, not its name. | One name for our value; whether `Credited` may mean both a win's value and a deposit. |
| `C3` | "Market" in three senses | `market` 21, `Market` 4, `markets` 2 | 27 | **Fixed:** what the shelf is, `D-92`, "The market is us". Not its name. | A name for our shelf that is not "market"; one word for a jurisdiction; whether "Steam Market" is the only use left. |
| `C4` | Adding money | `deposit` 19, `deposits` 9, `Deposit` 9, `Add funds` 8, `Adding funds` 6, `Deposits` 3, `adding funds` 3, `add funds` 2, `top-up` 1, `put in` 1 | 59 | **Fixed:** the act is `Add funds`, `D-94`, `D-134`. | `deposit` as the noun for one payment; `Deposit 3 skins` as a verb; `put in`; `top-up`, found by this inventory in the bonus line. |
| `C5` | Limit and boundary | `limit` 31, `boundary` 8, `limits` 6, `ceiling` 5, `Limits` 3, `boundaries` 2, `Limit` 1, `capped` 1, `Boundaries` 1 | 57 | **Fixed:** `Deposit limit`, `D-103`. | The umbrella word, boundary or limit; whether a withdrawal obstacle and the staged market cap may reuse "limit". |
| `C6` | Support and help | `support` 8, `Support` 6, `Help` 2, `Need help` 1 | 17 | **Fixed:** `Support` as the destination, `WF_STR.support`. | `Contact support` against `Support` for one link; `Help` and `Need help?` as names for a column whose destination is Support. |
| `C7` | Responsible play | `Responsible` 3, `responsibly` 1 | 4 | **Fixed, as two things:** a column `Play responsibly` holding the destination `Responsible play`, `D-29`, `D-44`. | Only whether one place needs two names. |
| `C8` | Legal document names | `Terms of use` 3, `refund and payments policy` 3, `Privacy policy` 2, `Cookie policy` 2, `terms of use` 2, `Terms and Conditions` 2, `Privacy Policy` 2, `Refund and payments policy` 1 | 16 | **Fixed:** the four names in `WF_STR`. | The sign-in consent line still says `the Terms and Conditions and the Privacy Policy`, with capitals the footer does not use (mark `K`). |
| `C9` | Roll, round, open | `round` 60, `roll` 18, `rolls` 11, `rounds` 6, `Rolls` 1, `Roll` 1, `Rounds` 1 | 92 | **Fixed:** the act is **open**; **round** is the proven unit, node `0.14`. | Whether roll and round are one word; the hash label, `published before the round` against `before the roll`; "open" as availability. |
| `C10` | Item, skin, win, drop | `skin` 16, `drops` 10, `skins` 9, `win` 5, `wins` 4, `Skin` 3, `drop` 3, `Skins` 3, `Drop` 2 | 53 | **Fixed:** `My items` for the destination, `D-128`. | The general noun for the thing a person owns: item, skin, win, drop. |
| `C11` | The coins unit and the sign of a figure | `$1.00` 12, `$40.00` 6, `$5.00` 3, `-6.70` 2, `+1.45` 2, `+5.00` 2, `-5.25` 1, `-6.85` 1, `-1.40` 1, `+2.70` 1, `$85.05` 1, `$120.00` 1, `$100` 1 | 29 | **Fixed:** the rule, node `0.11` section 5 rule 10. | Which unit a limit and a minimum are stated in, dollars or coins; the sign of a settlement figure. |
| `S1` | Selling an item back | `Sell` 7, `Selling` 4, `sold` 4, `sell` 3, `selling` 2, `Sold` 1 | 21 | **Fixed:** the act is **Sell**, `D-38`. | "Sell back" and "selling back" in running text. |
| `S2` | Risk | `risk` 14, `Risk` 4 | 18 | None. | `Risk band`, `Risk level`, `Low risk`, `Drop the risk level`. |
| `S3` | Favourite | `Favourite` 4 | 4 | None. | `Favourite` against the filter's `Liked`, the baseline's word. |
| `S4` | Cost of one open | `entry cost` 9, `to open` 3, `Entry cost` 3, `Open for 2` 1, `Price amount` 1 | 17 | None. | `Entry cost, one roll`, `Minimum entry cost`, `Open for`, `to open`. |
| `S5` | The fairness destination and its link phrases | `Provably fair` 4, `How rounds are checked` 3, `How a round is checked` 1, `How drops are proven` 1, `How the proof works` 1 | 10 | **Fixed:** the destination name `Provably fair`. | The link phrases: `How rounds are checked`, `How drops are proven`, `How the proof works`, `How a round is checked`. |
| `S6` | Upheld in opposite senses | `restriction is lifted` 2, `restriction stands` 2, `upheld` 1, `Upheld` 1 | 6 | None. | One word names both outcomes of one appeal: `Upheld` for our decision standing and for the appeal winning, `D-156`. |
| `N1` | Daily case, free case, daily entry, free entry | `daily case` 7, `free case` 4, `Daily case` 2, `daily entry` 2, `free entry` 2 | 14 | None. **Found by this inventory.** | The daily case is also the `free case`, the `daily entry` and the `free entry`, and the footer link reads `Daily cases`. |
| `N2` | Wager: the ladder against "No wagering" | `Wager` 2, `wagering` 2, `Wagered` 1, `wagered` 1 | 6 | None. **Found by this inventory.** | The ladder says `Wager to climb` and `Wagered towards the next tier`; the deposit bonus says `No wagering`. One word in two senses, and the second is a promise of absence. |
| `N3` | Account and profile | `profile` 5, `Profile` 3 | 8 | None. **Found by this inventory.** | `Profile` is a destination, `5.10`; `account` is used for the same person everywhere else, `My account` included. Whether the two are kept apart on purpose is for the glossary to say. |
| `N4` | Appeal, review, dispute | `appeal` 12, `Appeal` 8, `review` 4, `dispute` 4, `Disputes` 2, `disputed` 1, `appeals` 1, `appealing` 1, `disputing` 1 | 33 | None. **Found by this inventory.** | Three words near one process: `appeal`, the person's act; `review`, ours; `dispute`, which the refund policy uses for a chargeback and support uses for a contested round. |
| `N5` | Offer and trade offer | `Offer` 5, `offer` 5, `trade offer` 3, `Offers` 2, `offers` 1 | 15 | None. **Found by this inventory.** | `offer` in three senses: Steam's trade offer, the copies on our shelf (`Market offers`), and the deposit bonus (`the offer above`). |

**Same string, different capitals (`K`):**

- `Home` / `home`
- `Privacy Policy` / `Privacy policy`
- `Published against observed` / `published against observed`
- `Refund and payments policy` / `refund and payments policy`
- `Terms of use` / `terms of use`

**Same string, with and without a closing full stop (`P`):**

- `Wager to climb. The tier decides which free case you get.`
- `I have read and accept the terms and the refund and payments policy.`
- `This page is not available.`
- `This result is not available.`

**Placeholders still in the product (`PH`).** The legal identification values and the footer's identification line are placeholder fields by `D-124` and node `0.2`; `Clause text, written by counsel.` and `Clause text.` stand where the legal clauses go. Their labels are copy; the values are not rewritten by Voice.

