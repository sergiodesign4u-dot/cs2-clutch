# Component inventory, stage 07 step 2

Read on 18 November 2026 from all 133 product pages in `wireframes/` (the hub `overview.html` is not a product page), each opened in a browser at 360 and 1440 by Playwright, with `ia/docs/sitemap.md` and the registry in `wireframes/_nav.js` for the node of every page. The lists below are what the grey screens carry and nothing else: no component is added from taste, from `DESIGN.md` or from the two screens in colour.

**Who reads it.** Stage 07 step 3 (the batches of `/impeccable extract`, lowest level first), stage 08 steps 1, 2 and 5 (families, the split of `kit.css` into files, the `@import` order, the groups of the stand), stages 10 and 11 (rounds), stage 12 (rounds of the rollout). The level column is produced here once and only read after.

**Where it is seen.** Section "Inventory" of `design/kit/kit.html`, written at step 3 with this same table, the one-off list and both cross-check lists. Until step 3 it is shown on the review page of this step.

## How it was counted

1. **A screen is an IA node.** 133 pages map to 42 nodes through `WF_NAV.screens` in `wireframes/_nav.js`, a state taking its own node where the registry gives one. "On two or more screens" means two or more nodes, not two pages: the 16 pages of History are one screen.
2. **What sits behind a layer is not counted for that layer.** On a page that draws a dialog or the cookie layer over another screen (`gate-*`, `signin-dialog`, `deposit-dialog`, `cashout-dialog`, `responsible-confirm`, `cookie-*`), only what is inside the layer counts for its node. The rail, header, bottom bar and footer count on every page, since every page draws them.
3. **Merge rule.** Two entries with the same zones in the same order are one component with variants; a zone present in one and absent in the other makes two components. Each merge is named in the variants column with the zones it was judged on.
4. **Level rule.** Level is 1 plus the highest level of the kit components a component contains, capped at 3. Two readings were needed and both are stated rather than assumed. A glyph or a pinned figure that never stands outside its control (the icon in a button, the count on Filters, the bonus on Add funds) is a zone of that control, not a nested Icon or Badge: without this every button with an icon would leave level 1, and the pack lists the button as an atom. A link inside running text (a note, a paragraph, prose) is text, not a nested Text link. The rail, header, bottom bar and footer are level 3 by the shell rule.
5. **Inside level 3** the organisms that hold no other organism come first, then those that do, so a part always loads before its whole.
6. **The level is computed, not chosen.** The script recomputes every level from the "Contains" column and fails on a mismatch. Four rows moved on that check while this file was drawn: Status notice rose to 3 (it holds a Copyable value); Daily ladder, Withdraw item and Deposit dock fell to 2 (they hold only atoms).

**Totals.** 67 components: 24 atoms, 22 molecules, 21 organisms. 28 one-offs stay out of the kit, 32 since `D-234` added Home's four closing blocks, 36 since `D-236` added the case screen's four. Form controls enter the kit from a single screen, the pack's one exception: File picker and Switch stand on one node each.

## The table

### Level 1, atoms

| Component | Level | Variants | Screens (IA nodes) | States drawn in grey | Photo | Contains | Read from |
|---|---|---|---|---|---|---|---|
| Avatar | 1 | one form | 39: 0.3, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, and 29 more | one state; on 117 pages | yes, the Steam picture | nothing from the kit | `wf-avatar`, `wf-feed-av`, `wf-ah-av`, `wf-plr-av`, `wf-who-av` |
| Badge | 1 | count on a control (Filters 2), bonus on a control (+5%), ribbon on a tile (NO FEE, INSTANT), status (Not launched, UNREAD, SETTLED), price against Steam (-11%) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 132 pages | no | nothing from the kit | `wf-badge`, `wf-dep-b`, `wf-pay-rib`, `wf-rail-soon`, `wf-off-badge`, `wf-msg-new`, and 1 more |
| Button | 1 | see the control census | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | rest; a refusal said beside it rather than a disabled look (D-58); on 133 pages | no | nothing from the kit | `wf-btn`, `wf-icon-btn`, `wf-actb`, `wf-sell`, `wf-ck-b`, `wf-event-go`, and 8 more |
| Checkbox (form control) | 1 | see the control census | 9: 0.4, 2.4, 2.5, 2.6, 3.1, 4.1, 4.3, 4.5, 5.1 | off, on, refused (the missing declaration marked where it is, D-58); on 19 pages | no | nothing from the kit | `wf-cbx-box`, `input[checkbox]`, `wf-inv-pick` |
| Disclosure | 1 | a question that opens its answer (summary), a group head that opens a list (support topics, legal sections, a footer column at 360) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | closed, open; on 133 pages | no | nothing from the kit | `summary`, `wf-faq-b`, `wf-acc-b`, `wf-foot-h` |
| Favourite toggle | 1 | corner mark on a case tile with its count, labelled control on the case head | 7: 1.0, 1.1, 3.1, 3.3, 3.5, 3.6, 3.7 | off, on, with its count; on 21 pages | no | nothing from the kit | `wf-fav`, `wf-fav-case` |
| Figure | 1 | plain, a link (whole figure clickable), missing (Not available) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | value, missing (Not available, D-124); on 133 pages | no | nothing from the kit | `wf-fig` |
| File picker (form control) | 1 | see the control census | 1: 0.10 | one state; on 1 pages | no | nothing from the kit | `input[file]` |
| Icon | 1 | destination mark (rail, bottom bar), figure mark, unit mark (the coin), act mark | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | no, a glyph | nothing from the kit | `wf-icon`, `wf-rail-ico`, `wf-fig-ico`, `wf-cfg-ico`, `wf-bar-i`, `wf-actb-i`, and 3 more |
| Key-value line | 1 | a total line (sum), a fact line, a record line, a rule line (Extend: Immediately, on Responsible play) | 18: 0.3, 0.4, 0.9, 0.10, 1.2, 1.3, 1.4, 4.1, 4.3, 4.4, and 8 more | one state; on 39 pages | no | nothing from the kit | `wf-tl`, `wf-closes-k`, `wf-docid`, `wf-ck-rec-k`, `wf-attr`, `wf-roll-k`, and 2 more |
| Logo | 1 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | no, the logo asset | nothing from the kit | `wf-logo-mark` |
| Media slot | 1 | skin image, case art, mode art, banner art, provider mark, brand art | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | yes | nothing from the kit | `wf-ah-art`, `wf-art-c`, `wf-banner-art`, `wf-bonus-art`, `wf-case-art`, `wf-dlg-art`, and 18 more |
| Note line | 1 | a qualifying fact under a block, a refusal beside a control (D-58), an as-of stamp, the cost said in words | 30: 0.9, 0.10, 1.1, 1.2, 1.3, 1.4, 3.1, 3.3, 3.5, 3.6, and 20 more | one state; on 76 pages | no | nothing from the kit | `wf-note`, `wf-refuse`, `wf-stamp`, `wf-cost-say` |
| Prose | 1 | one form | 8: 1.0, 1.1, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7 | one state; on 22 pages | no | nothing from the kit | `wf-prose` |
| Radio (form control) | 1 | see the control census | 4: 4.1, 4.3, 4.5, 5.3 | one state; on 5 pages | no | nothing from the kit | `input[radio]` |
| Range (form control) | 1 | see the control census | 2: 3.1, 5.3 | one state; on 3 pages | no | nothing from the kit | `input[range]` |
| Segmented control | 1 | the count switch 1 to 5, the sort keys | 2: 3.3, 5.1 | one chosen; on 5 pages | no | nothing from the kit | `wf-count-b`, `wf-sortk` |
| Select (form control) | 1 | see the control census | 10: 0.10, 3.1, 4.1, 4.3, 4.5, 5.1, 5.3, 5.11, 6.1, 6.3 | chosen value; on 24 pages | no | nothing from the kit | `select` |
| Status steps | 1 | one form | 6: 4.4, 5.3, 5.5, 5.6, 5.7, 5.8 | one state; on 6 pages | no | nothing from the kit | `wf-clock-list` |
| Switch (form control) | 1 | see the control census | 1: 5.11 | one state; on 4 pages | no | nothing from the kit | `input[switch]` |
| Tabs | 1 | account sections, history ledgers, message kinds, crypto networks | 6: 5.1, 5.2, 5.9, 5.10, 5.11, 7.3 | current, with a count; on 29 pages | no | nothing from the kit | `wf-atabs`, `wf-htabs`, `wf-msg-tabs`, `wf-co-nets` |
| Text area (form control) | 1 | see the control census | 5: 0.10, 1.2, 1.3, 1.4, 5.11 | one state; on 14 pages | no | nothing from the kit | `textarea` |
| Text field (form control) | 1 | see the control census | 11: 0.10, 1.2, 1.3, 1.4, 3.1, 4.1, 4.3, 4.5, 5.1, 6.1, 6.3 | empty, filled, read-only; on 25 pages | no | nothing from the kit | `input[text]`, `input[email]`, `input[search]` |
| Text link | 1 | see the control census | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | no | nothing from the kit | `wf-linklike`, `wf-acct-out`, `wf-hnote`, `wf-d-mkt`, `wf-inspect`, `wf-ah-id` |

### Level 2, molecules

| Component | Level | Variants | Screens (IA nodes) | States drawn in grey | Photo | Contains | Read from |
|---|---|---|---|---|---|---|---|
| Amount field | 2 | one form | 3: 4.1, 4.3, 4.5 | one state; on 3 pages | no | Text field, Button | `wf-amt` |
| Breadcrumb | 2 | one form | 19: 0.9, 0.10, 1.2, 1.3, 1.4, 3.1, 3.2, 3.3, 3.5, 3.6, and 9 more | one state; on 74 pages | no | Text link | `wf-crumb` |
| Case tile | 2 | one form | 3: 1.0, 1.1, 3.1 | rest, skeleton (catalogue-loading), favourite on; on 8 pages | yes, case art | Media slot, Favourite toggle, Figure | `wf-tile` |
| Category bar | 2 | one form | 2: 3.1, 3.2 | one state; on 7 pages | no | Button, Badge | `wf-catbar` |
| Chosen method | 2 | one form | 3: 4.1, 4.3, 4.5 | one state; on 7 pages | no | Button | `wf-chosen` |
| Copyable value | 2 | a seed or hash, a ticket or reference id, a wallet address with its QR | 8: 0.3, 0.10, 1.2, 1.3, 1.4, 3.5, 4.1, 7.1 | one state; on 22 pages | no | Button, Key-value line | `wf-fpair`, `wf-tid`, `wf-ref`, `wf-hash`, `wf-crypto` |
| Daily ladder | 2 | one form | 3: 1.0, 1.1, 3.1 | tiers locked and reached, the open control live or refused; on 7 pages | tier art | Figure, Media slot, Button, Note line | `wf-panel` |
| Deposit dock | 2 | one form | 3: 4.1, 4.3, 4.5 | one state; on 6 pages | no | Figure, Key-value line, Button, Note line | `wf-dock` |
| Drop card | 2 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | yes, skin | Media slot, Text link, Figure | `wf-d-weapon` |
| Empty state | 2 | nothing yet, not available (taken down or never existed) | 7: 3.2, 5.2, 5.3, 5.9, 5.10, 7.2, 7.3 | nothing yet, not available; on 12 pages | no | Button, Text link | `wf-empty`, `wf-gone` |
| Event banner | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | yes, banner art | Media slot, Button | `wf-banner` |
| Feed tile | 2 | one form | 34: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, and 24 more | one state; on 104 pages | yes, skin | Media slot, Avatar, Text link | `wf-feed-hit` |
| Field | 2 | stacked (label over control), row (label and help left, control right), a declaration (checkbox with its links, D-26) | 13: 0.10, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, 4.1, 4.3, 4.5, and 3 more | empty, filled, read-only, refused with its reason, malformed (fair-malformed); on 29 pages | no | Text field, Select, Text area, Checkbox, Switch, Button, Note line | `wf-cfg`, `wf-set`, `wf-vf`, `wf-f-l`, `wf-cbx` |
| Filter chip | 2 | one form | 2: 3.1, 3.2 | one state; on 2 pages | no | Button | `wf-chip` |
| Hero | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | no | Text link | `wf-hero` |
| Item card | 2 | my items (select in the band, acts on the face), ledger (status in the band, from and won, Check this round), public shelf | 3: 5.1, 5.9, 7.3 | selected, sending to Steam, sold, gone; on 6 pages | yes, skin | Media slot, Checkbox, Button, Figure | `wf-inv-card`, `wf-itemcard`, `wf-plr-card` |
| Mode card | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | yes, mode art | Media slot, Button, Badge | `wf-mode` |
| Outcome card | 2 | one form | 2: 3.6, 3.7 | one state; on 4 pages | yes, skin | Media slot, Button | `wf-won-art` |
| Popover menu | 2 | account (avatar trigger, destinations, Sign out), language (nine options, one live, D-42) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | closed, open; on 133 pages | no | Button, Avatar, Text link | `wf-acct-wrap`, `wf-lang-wrap` |
| Recent drop card | 2 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | yes, skin | Media slot, Figure | `wf-r-art` |
| Section head | 2 | one form | 24: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 3.1, 3.2, 3.3, and 14 more | one state; on 59 pages | no | Text link | `wf-sec-head` |
| Withdraw item | 2 | one form | 5: 5.3, 5.4, 5.5, 5.6, 5.8 | on the clock, offer expired, restricted, not eligible, Steam degraded; on 5 pages | skins | Media slot, Figure, Key-value line | `wf-held` |

### Level 3, organisms

Order: first the organisms that hold no other organism, then Payment panel (holds Status notice), Case head (holds Case stage) and Sign-in block (holds Status notice), then Dialog (holds Sign-in block and Payment panel). A part always stands above its whole. Corrected at batch 3, `D-232`: the grey draws a Status notice inside the payment panel for declined and ceiling pending, so Payment panel moved below Status notice; its level stays 3. Two cells corrected by the same walk: the Rail holds no Badge (v4 draws a heading and a chip line), and the Ticker's pause is its own part, an 18px round mark outside the button family.

| Component | Level | Variants | Screens (IA nodes) | States drawn in grey | Photo | Contains | Read from |
|---|---|---|---|---|---|---|---|
| Account head | 3 | one form | 6: 5.1, 5.2, 5.9, 5.10, 5.11, 7.3 | with a Steam account, with none linked (missing figure); on 28 pages | Steam avatar | Breadcrumb, Avatar, Figure, Button, Tabs | `wf-ah` |
| Bottom bar | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 132 pages | no | Icon | `wf-bar` |
| Case grid | 3 | one form | 3: 1.0, 1.1, 3.1 | one state; on 8 pages | case art | Section head, Case tile | `wf-grid--shelf` |
| Case stage | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | at rest, the open with one, two and five rolls, the outcome; on 13 pages | case art, skins | Media slot, Outcome card, Button | `wf-stage-frame` |
| Commit block | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | guest, funded, two and five chosen, open, outcome, interrupted, degraded, no counter; on 13 pages | no | Figure, Segmented control, Button, Copyable value, Text link | `wf-commit` |
| Data table | 3 | a ledger (history, settlement), the drop table (case contents by tier, D-125) | 8: 3.3, 3.5, 3.6, 3.7, 5.3, 5.5, 5.8, 5.9 | rows, empty, a row marked mismatched; on 24 pages | skins in the drop table | Drop card, Figure, Text link, Badge | `wf-table` |
| Footer | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | brand art slot | Figure, Disclosure, Logo, Text link, Popover menu | `wf-footer` |
| Header | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | guest (Sign in), signed in (money pair, Add funds, account); on 132 pages | no | Button, Figure, Popover menu | `wf-header` |
| Item grid | 3 | one form | 3: 5.1, 5.9, 7.3 | one state; on 6 pages | skins | Item card, Segmented control | `wf-itemgrid`, `wf-grid--inv` |
| Limits panel | 3 | one form | 2: 6.1, 6.3 | one state; on 4 pages | no | Field, Key-value line, Button, Note line | `wf-rp` |
| Mode row | 3 | one form | 2: 1.0, 1.1 | one state; on 2 pages | mode art | Mode card | `wf-modes` |
| Proof block | 3 | one form | 4: 1.2, 1.3, 1.4, 7.1 | settled, matched, mismatched, no proof, failed; on 11 pages | no | Copyable value, Key-value line, Badge, Button | `wf-proof-fields` |
| Rail | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | open, closed, LATER rows marked Not launched (D-197); on 132 pages | no | Logo, Icon, Button, Popover menu | `wf-rail` |
| Recent drops | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | skins | Recent drop card | `wf-recent` |
| Status notice | 3 | in progress (crediting), stopped (declined, restricted), failed with a reference (Steam refused) | 14: 0.10, 2.5, 2.6, 4.2, 4.3, 4.4, 4.5, 5.4, 5.5, 5.6, and 4 more | in progress, stopped, failed with a reference; on 22 pages | no | Key-value line, Figure, Button, Copyable value | `wf-notice`, `wf-fail` |
| Ticker | 3 | one form | 34: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, and 24 more | running, paused (Resume); on 104 pages | skins | Feed tile | `wf-feed` |
| Verify form | 3 | one form | 3: 1.2, 1.3, 1.4 | empty, prefilled, malformed, matched, failed, unavailable; on 6 pages | no | Field, Copyable value, Button | `wf-verify` |
| Payment panel | 3 | one form | 3: 4.1, 4.3, 4.5 | card, crypto, crypto with no wallet, gift cards, skins, declined, ceiling pending; on 9 pages | provider marks | Chosen method, Amount field, Field, Copyable value, Deposit dock, Status notice | `wf-pay-lay` |
| Case head | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | case art | Favourite toggle, Note line, Case stage | `wf-case` |
| Sign-in block | 3 | one form | 3: 2.4, 2.5, 2.6 | consent not given, one of two given, given, Steam refused, Steam unavailable; on 7 pages | no | Field, Button, Status notice | `wf-auth-blk` |
| Dialog | 3 | geo gate (2.1, 2.2), sign in (2.4), deposit (4.1), cash out (5.1), confirm a limit (6.2) | 6: 2.1, 2.2, 2.4, 4.1, 5.1, 6.2 | one page per state of its layer: gate blocked, staged, not launched, unavailable; sign in; deposit; cash out; confirm; on 9 pages | art slot on two | Button, Sign-in block, Payment panel, Field, Copyable value | `wf-dlg` |

## One-off, kept out of the kit

On one IA node only. Their markup stays on the screen they belong to until a second screen needs them; the parts they are built from are already in the table.

**Added at stage 07 step 5, `D-234`.** Home's four closing blocks are the grey's figures, prose and questions (Figure, Prose, Disclosure, Section head above), but v4 drew each as one composed block of Home alone, so in colour they are one-offs too. A one-off keeps its markup on its screen and its look in `kit.css` part 4.4, since no screen carries a style of its own; the kit page shows them in its section One-off blocks.

| Block | Node | Read from | Note |
|---|---|---|---|
| Before you spend | 1.0 | `wf-figs` (v4 `x6`) | the money strip and the Every round plate beside two checked rounds; `.spend`, kit.css 4.4, D-234 |
| What opening a case here involves | 1.0 | `wf-prose` (v4 `sx`) | the paragraph beside Nightfall on its plate; `.involves`, kit.css 4.4, D-234 |
| Questions and answers | 1.0 | `wf-faq` on Home (v4 `fq`) | its questions are kit Disclosures; `.faq`, kit.css 4.4, D-234 |
| About Clutch | 1.0 | `wf-prose` (v4 `ab`) | a lead and four parts under heads; `.about`, kit.css 4.4, D-234 |
| Before you open | 3.3 | `wf-case-info` (v4 `v4i`, row D) | two plates, what a skin's price means and what must be true before opening; `.before`, kit.css 4.4, D-236 |
| What this case pays | 3.3 | `wf-figs` (v4 `x6` with `v4p`, row B) | Home's money strip with four panels; `.spend--pays`, a form of Before you spend, kit.css 4.4, D-236 |
| Published against observed | 3.3 | `wf-table` (v4 `v4o`, row D) | a row a tier, the published bar and the observed tick with its change; `.observed`, kit.css 4.4, D-236 |
| How this case works | 3.3 | `wf-prose` (v4 `v4t`, `v4u`, row I) | the prose on its plate beside the ticket ruler; `.how`, `.ruler`, kit.css 4.4, D-236 |

**Added at stage 07 step 5, `D-236`.** The case screen's four blocks under its stage are one-offs of node 3.3 for the reason Home's are: the grey drew them from figures, a table and prose, v4 drew each as one composed block of the case screen alone. What this case pays is Home's money strip with a fourth panel, so `.spend` is now drawn on two nodes, 1.0 and 3.3; by the rule above that makes it a component, and it stays in part 4.4 as a one-off with a form until stage 08 splits the kit, where it is named as the first one-off a second screen needed. What is in this case is the kit's Data table under a Section head and adds nothing. The Case stage and the Commit block gain their play, `design/kit/stage.js`, and no new component: the open, the outcome, the flash and the wave, the ring and the rare marks on a run's card are forms of the Case stage, Outcome card, Button (its busy light) and Drop card already in the table.

**Motion carried at stage 07 step 5, `D-235`.** No component is added: the motion v4 Home was approved with enters as forms of components already in the table. Icon gains its story form, the rail's marks, the footer's counters and its round plate drawn in parts to play under the pointer; Feed tile gains the rare marks by chance, A, B and C, and the rare drop in three tiers; Ticker paces its arrivals as v4 does; Disclosure slides, Favourite toggle bursts, Event banner counts down. Their look is in `kit.css` beside each component, their behaviour in `design/kit/motion.js`, and the kit page shows them in its section Motion.
| System page block | 0.3 | `wf-sys` | code, heading, two ways out, reference |
| Toast | 0.3 | `wf-copied` | Copied; node 0.5 owns toasts and no other page draws one |
| Cookie consent | 0.4 | `wf-ck` | its own layer with category rows; its toggles are kit Checkboxes |
| Legal document | 0.9 | `wf-doc` | table of contents, clauses, version history |
| Support form | 0.10 | `wf-form` | its fields are kit Fields |
| Support topics | 0.10 | `wf-faq` | its questions are kit Disclosures |
| Ticket card | 0.10 | `wf-tick` |   |
| Filter drawer | 3.1 | `wf-drawer` | mobile filters with steppers, risk pips, a range; the range and selects are in the kit |
| Number stepper | 3.1 | `wf-stepper` | inside the filter drawer only |
| Risk pips | 3.1 | `wf-pips` | inside the filter drawer only |
| Skeleton | 3.1 | `wf-skel-line` | catalogue-loading only |
| Showcase | 3.3 | `wf-show` | phase 1 of the case screen |
| Reveal lanes | 3.5 | `wf-lanes` | the open, one lane per roll |
| Round detail popover | 3.6 | `wf-detail-wrap` | Round details on the batch outcome |
| Gift cards | 4.1 | `wf-gift` |   |
| Provider tile | 4.1 | `wf-pay-t` | the provider grid on the deposit page; the other deposit states show the Chosen method instead |
| Skin deposit | 4.1 | `wf-skindep` | deposit with skins |
| Cash out form | 5.1 | `wf-co-lay` | inside the cash out dialog |
| Selection bar | 5.1 | `wf-invbar` | counts what is ticked, four acts |
| Offer list | 5.3 | `wf-offs` | Steam offers to pick from, with filters |
| Selected skin | 5.3 | `wf-selskin` |   |
| History filters | 5.9 | `wf-hfilters` |   |
| History round row | 5.9 | `wf-roll` | the rounds ledger |
| Messages | 5.10 | `wf-msg` | its tabs are kit Tabs |
| Case row link | 7.1 | `wf-caserow` |   |
| Owner block | 7.1 | `wf-owner` |   |
| Winner line | 7.1 | `wf-who` |   |
| Profile strip | 7.3 | `wf-strip` |   |

## Control census

A control is `a`, `button`, `label`, `summary`, an input, a select or a textarea, an element with a role of button, tab, checkbox, radio or switch, or an element that brings a `cursor: pointer` its parent does not have. Counted per page on both widths, content behind a layer excluded: **10584 control occurrences on 133 pages**. A shell control is counted on every page that draws it, so occurrences measure weight on screen and the distinct jobs column measures variety.

Emphasis is not read here: the grey has no fill, no outline and no inverse. What the grey does show is **rank**: primary is `.wf-btn--primary`, the one main act of its zone; tertiary is an icon-only control or a utility (close, menu, pause, sound, Copy); secondary is every other button. Rank becomes emphasis at stage 08. **Size** is set by the container: S is `.wf-btn--small` or 32px and less, L is 52px and more, M is the 44px tap floor between them. Width is layout and is not on the axis.

### Families

| Family | Kit component | Occurrences | Distinct jobs | Screens |
|---|---|---|---|---|
| Navigation item | Rail, Bottom bar, Footer, Popover menu: the destinations a carrier holds | 2806 | 38 | 42 |
| Card link | Case tile, Feed tile, Recent drop card, Figure in its link form | 2193 | 80 | 42 |
| Button | Button | 1697 | 129 | 42 |
| Menu option | Popover menu, language | 1197 | 9 | 42 |
| Text link | Text link | 1128 | 64 | 37 |
| Disclosure | Disclosure | 821 | 30 | 42 |
| Tab | Tabs | 194 | 20 | 7 |
| Breadcrumb link | Breadcrumb | 116 | 4 | 19 |
| Favourite toggle | Favourite toggle | 83 | 3 | 7 |
| Field label | Field | 83 | 27 | 11 |
| Radio | Radio | 66 | 8 | 4 |
| Checkbox | Checkbox | 65 | 20 | 9 |
| Select | Select | 43 | 13 | 10 |
| Text field | Text field | 40 | 7 | 11 |
| Segmented control | Segmented control | 19 | 3 | 2 |
| Text area | Text area | 19 | 6 | 5 |
| Switch | Switch | 8 | 2 | 1 |
| Range | Range | 5 | 1 | 2 |
| File picker | File picker | 1 | 1 | 1 |

### Variants, by family

Rank, content and size as they stand in the grey. A combination that is not in the product is not listed.

**Button**, rank x content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| secondary | label | M | 606 | 57 | 42 | `wf-lang`, `wf-header`, `wf-foot`, `wf-ah` | EN, + 5%, Add funds, Support |
| tertiary | icon only | S | 268 | 3 | 42 | `wf-rail`, `wf-stepper` | ≡, -, + |
| secondary | label | S | 234 | 31 | 12 | `wf-presets`, `wf-roll`, `wf-plr`, `wf-inv` | Share this round, Sell for coins, Send to Steam, Exchange |
| tertiary | icon only | M | 230 | 6 | 42 | `wf-header`, `wf-acct`, `wf-dlg` | ≡, Account, nightjar_cs, ✕, + |
| tertiary | label | M | 133 | 2 | 42 | `wf-rail`, `wf-crypto` | Sound on, Copy |
| tertiary | label | S | 122 | 3 | 35 | `wf-feed`, `wf-chip`, `wf-fpair`, `wf-tid` | Resume, Copy, x |
| primary | label | M | 59 | 31 | 27 | `wf-commit`, `wf-sys`, `wf-dock`, `wf-verify` | See the cases, Open for 62.00 coins, Open for 12.40 coins, Open for 24.80 coins |
| secondary | leading icon + label | M | 21 | 6 | 2 | `wf-prov`, `wf-invbar` | Cash out, Exchange, Sell for coins, Google |
| primary | label | L | 8 | 4 | 2 | `wf-outcome` | Open again for 12.40 coi, Sell for 12.90 coins, Open again for 24.80 coi, Sell all 2 for 23.20 coi |
| secondary | label | L | 5 | 3 | 2 | `wf-outcome`, `wf-detail` | Send to Steam, −6.70 coi, Send 2 to Steam, −5.25 c, Round details, 2 rounds, Send 4 to Steam, −4.10 c |
| primary | leading icon + label | L | 5 | 1 | 1 | `wf-auth` | Sign in with Steam |
| primary | leading icon + label | S | 2 | 1 | 1 | `wf-invbar` | Steam |
| secondary | leading icon + label | S | 2 | 1 | 1 | `wf-invbar` | Sell |
| primary | leading icon + label | M | 2 | 1 | 1 | `wf-invbar` | Send to Steam |

**Navigation item**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | S | 2215 | 33 | 42 | `wf-foot`, `wf-acct`, `wf-toc` | My items, History, Withdrawals, Profile |
| - | label | M | 259 | 5 | 42 | `wf-rail`, `wf-foot`, `wf-toc`, `wf-acct` | LOGO, Cases, Cookie policy, Opening a case, and what |
| - | label | L | 135 | 3 | 42 | `wf-foot`, `wf-quick` | LOGO, HomeThe featured cases, , All casesThe full shelf |
| - | leading icon + label | L | 132 | 1 | 42 | `wf-rail` | Cases |
| - | leading icon + label | M | 65 | 2 | 27 | `wf-bar` | Home, Cases |

**Card link**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | L | 1892 | 74 | 34 | `wf-feed`, `wf-recent`, `wf-tile`, `wf-pay` | AK-47 Redline, Ironbound, AWP Asiimov, Warsteel |
| - | label | M | 168 | 4 | 31 | `wf-money`, `wf-figs` | 74.20 coins Balance, 0.00 coins Value of item, 140.95 coins Value of it, 74.90 coins Value of ite |
| - | leading icon + label | L | 133 | 2 | 42 | `wf-foot` | 367 013 504 Cases opened, Not available Cases open |

**Text link**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | S | 1014 | 41 | 37 | `wf-feed`, `wf-faq`, `wf-ah`, `wf-cbx` | Steam nightjar_cs, nightjar_cs, kestrel, vandal88 |
| - | label | M | 102 | 24 | 16 | `wf-roll`, `wf-note`, `wf-sec`, `wf-case` | How it works, Check your settings, What usually drops, Check this round |
| - | label | L | 12 | 1 | 4 | `wf-d` | Steam 50.43 coins, 18 Au |

**Disclosure**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 695 | 16 | 42 | `wf-foot`, `-`, `wf-sec`, `wf-gift` | PLAY, CASES, COMPANY, PLATFORM |
| - | label | L | 63 | 7 | 1 | `wf-faq` | Getting in, Opening a case, Putting money in, Getting your items out |
| - | label | S | 63 | 7 | 1 | `wf-faq` | My Steam sign in does no, How do I know a round wa, My deposit has not arriv, What if an item cannot b |

**Tab**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 191 | 17 | 7 | `wf-atabs`, `wf-htabs`, `wf-catbar`, `wf-msg` | History, Profile, Settings, Daily |
| - | label | L | 3 | 3 | 1 | `wf-co` | Ethereum ETH, Litecoin LTC, Tether USDT |

**Breadcrumb link**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 115 | 3 | 19 | `wf-crumb` | Home, My account, Cases |
| - | label | S | 1 | 1 | 1 | `wf-crumb` | Support |

**Menu option**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | S | 1197 | 9 | 42 | `wf-lang` | English EN, German DE, Chinese ZH, French FR |

**Favourite toggle**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | leading icon + label | M | 71 | 2 | 7 | `wf-tile`, `wf-case` | Favorite, 829, 1 204, 311 |
| - | icon only | M | 12 | 1 | 1 | `wf-tile` | Favorite, marked by 829 , Favorite, marked by 1 20, Favorite, marked by 311 , Favorite, marked by 96 p |

**Segmented control**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 19 | 3 | 2 | `wf-count`, `wf-sortset` | Newest first, Highest value, 1, 2 |

**Checkbox**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 33 | 12 | 9 | `wf-inv`, `wf-consent`, `wf-ck`, `wf-riskset` | Select AWP Asiimov, on, Select Glock-18 Water El, Select AK-47 Redline |
| - | label | S | 18 | 4 | 5 | `wf-ck`, `wf-consent`, `wf-riskrow` | on, Analytics, Marketing, ✓ I declare that I am 18 |
| - | icon only | S | 10 | 1 | 6 | `wf-cbx` | ✓ |
| - | label | L | 4 | 4 | 1 | `wf-skindep` | AK-47 Slate Field-Tested, M4A4 Temukau Well-Worn 4, Glock-18 Vogue Minimal W, USP-S Cortex Field-Teste |

**Radio**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | L | 39 | 4 | 1 | `wf-offs` | -11% vs Steam 5 stickers, -7% vs Steam no stickers, -6% vs Steam no stickers, -4% vs Steam no stickers |
| - | label | S | 18 | 1 | 1 | `wf-off` | 0, 1, 2, 3 |
| - | label | M | 9 | 3 | 3 | `wf-payprov` | Provider A, on, Provider B |

**Select**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 43 | 13 | 10 | `wf-set`, `wf-pay`, `wf-cfg`, `wf-f` | Main wallet · 0x7a1f…f74, All Featured Community C, Date, newest first Price, Ukraine Poland |

**Text field**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 17 | 4 | 9 | `wf-vf`, `wf-cfg`, `wf-stepper`, `wf-co` | 0x7a1f4c2e9b0d5583a17c4e, 0.00, 55.00, nightjar_cs@example.com |
| - | icon only | M | 15 | 2 | 7 | `wf-promo`, `wf-set`, `wf-fset`, `wf-cfg` | (glyph), Deposit limit amount |
| - | label | L | 8 | 3 | 4 | `wf-f`, `wf-amt` | 40.00, 30.00, wd-88b7e1, nightjar_cs@example.com |

**Text area**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | L | 12 | 5 | 4 | `wf-vf`, `wf-cfg` | 4f2a91c7e0b83d5619ac7f20, a71c0e4b93f6d2857e0c1a4f, https://steamcommunity.c |
| - | icon only | L | 7 | 1 | 3 | `wf-f`, `wf-vf`, `wf-cfg` | (glyph) |

**Field label**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | S | 58 | 17 | 9 | `wf-vf`, `wf-cfg`, `wf-promo`, `wf-pay` | Ethereum address, Case name, Minimum price, Maximum price |
| - | label | L | 13 | 6 | 1 | `wf-card`, `wf-sup` | Your appeal, Evidence, optional, Email for the answer, What it is about Choose  |
| - | label | M | 12 | 4 | 4 | `wf-vf`, `wf-offilt` | SERVER SEED HASH, PUBLIS, Float from 0.00, to 1.00, Stickers Any With sticke |

**Switch**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 8 | 2 | 1 | `wf-cfg` | on, Promotions, bonuses and  |

**Range**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | label | M | 5 | 1 | 2 | `wf-offilt`, `wf-fset` | 55, 0, 1 |

**File picker**, content x size

| Rank | Content | Size | Occurrences | Distinct jobs | Screens | Where (container) | Examples |
|---|---|---|---|---|---|---|---|
| - | icon only | L | 1 | 1 | 1 | `wf-f` | (glyph) |

## Cross-check 1: one job, several forms

The same words of an act carried by different classes, rank or size. 320 distinct jobs were read and **35 are carried in two or more forms; 6 of them are inconsistent.** Every row has a verdict. **Inconsistent** goes to stage 08 to be settled into one form. **By carrier** is a destination named in a carrier (rail, footer, account menu, tabs, breadcrumb) and also as an act on a page, which the IA asks for. **By zone** is the same act whose rank or size follows the zone it stands in, which the grey contract asks for: one primary per zone, size by container.

| Job | Forms | Each form: family / rank / content / size / class, occurrences on screens | Verdict |
|---|---|---|---|
| add funds | 2 | Button / secondary / label / M / `wf-ah-add wf-btn`, 28 on 6<br>Button / secondary / label / M / `wf-btn`, 1 on 1 | **inconsistent**: `wf-ah-add` in the account head and plain `wf-btn` in an empty state; the header's + carries the same job under a third class, `wf-dep` |
| check this round | 4 | Button / secondary / label / S / `wf-btn`, 36 on 2<br>Text link / - / label / M / `a`, 8 on 5<br>Text link / - / label / S / `a`, 7 on 1<br>Button / secondary / label / M / `wf-btn`, 1 on 1 | **inconsistent**: one act on one object, a round: a small button on ledger and shelf cards, a text link under the outcome and on Provably fair |
| sell for #coins | 3 | Button / secondary / label / M / `wf-btn wf-sell`, 7 on 1<br>Button / primary / label / L / `wf-btn`, 2 on 2<br>Button / secondary / label / M / `wf-btn`, 1 on 1 | **inconsistent**: the sell act carries three classes: `wf-sell` on a batch card, plain `wf-btn` primary in the single outcome's act row (D-140), plain `wf-btn` on 5.3. Rank by zone stands; the class does not |
| share this round | 2 | Button / secondary / label / S / `wf-btn`, 12 on 1<br>Text link / - / label / M / `a`, 2 on 2 | **inconsistent**: a small button on an item card and a text link under the outcome |
| sign out | 2 | Navigation item / - / label / S / `wf-acct-out wf-linklike`, 85 on 30<br>Button / secondary / label / M / `wf-btn`, 4 on 1 | **inconsistent**: a link-like row in the account menu and a button in Settings |
| support | 5 | Button / secondary / label / M / `wf-btn`, 133 on 42<br>Navigation item / - / label / S / `a`, 128 on 39<br>Text link / - / label / S / `a`, 4 on 4<br>Button / primary / label / M / `wf-btn`, 3 on 2<br>Breadcrumb link / - / label / S / `a`, 1 on 1 | **inconsistent**: the footer names Support twice in two forms, a link in its list and a button in its help cell; elsewhere it is a route button or an inline link, which is by zone |
| all cases | 3 | Navigation item / - / label / S / `a`, 133 on 42<br>Button / secondary / label / M / `wf-btn`, 8 on 3<br>Button / secondary / label / S / `wf-btn`, 4 on 1 | **by zone**: a footer destination, the route out of a shelf and of a 404 (M), a small route inside the History panel (S) |
| check a round | 2 | Button / secondary / label / M / `wf-btn`, 6 on 3<br>Button / primary / label / M / `wf-btn`, 1 on 1 | **by zone**: secondary on Provably fair, the primary way on from a result that is gone |
| copy | 2 | Button / tertiary / label / S / `wf-btn`, 13 on 4<br>Button / tertiary / label / M / `wf-btn`, 1 on 1 | **by zone**: small inside a key and value pair, the 44px row height beside a wallet address |
| exchange | 2 | Button / secondary / label / S / `wf-btn`, 2 on 1<br>Button / secondary / leading icon + label / M / `wf-actb wf-btn`, 2 on 1 | **by zone**: one control of the selection bar at two widths, as Sell for coins (D-119) |
| recompute it yourself | 2 | Button / primary / label / M / `wf-btn`, 7 on 3<br>Button / secondary / label / M / `wf-btn`, 3 on 2 | **by zone**: primary where recomputing is the next step; secondary where the proof failed or mismatched, and on the owner's view of a result |
| round details, #rounds | 2 | Button / secondary / label / L / `wf-btn wf-detail-b`, 1 on 1<br>Button / secondary / label / M / `wf-btn wf-detail-b`, 1 on 1 | **by zone**: the control takes the height of the row it stands in (D-52) |
| see the cases | 3 | Text link / - / label / S / `a`, 6 on 3<br>Button / primary / label / M / `wf-btn`, 2 on 2<br>Button / secondary / label / M / `wf-btn`, 1 on 1 | **by zone**: inline in the sign-in lede, the primary way out of an empty state, secondary under a ledger |
| sell for coins | 2 | Button / secondary / label / S / `wf-btn`, 2 on 1<br>Button / secondary / leading icon + label / M / `wf-actb wf-btn`, 2 on 1 | **by zone**: one control of the selection bar at two widths: icon over word at a phone, label on a desktop (D-119) |
| send to steam | 5 | Button / secondary / label / S / `wf-btn`, 12 on 1<br>Button / secondary / label / M / `wf-btn`, 4 on 3<br>Button / primary / leading icon + label / M / `wf-actb wf-btn`, 2 on 1<br>Text link / - / label / S / `a`, 1 on 1<br>Button / primary / label / M / `wf-btn`, 1 on 1 | **by zone**: the act on a card (S), in the outcome's row of acts (M), the main act of the selection bar (primary), a route in a list of next steps (link) |
| sign in | 3 | Button / secondary / label / M / `wf-btn`, 47 on 19<br>Text link / - / label / S / `a`, 10 on 2<br>Button / primary / label / M / `wf-btn`, 3 on 1 | **by zone**: the header's control, the one act of the guest case screen (primary), inline in prose |
| try again | 2 | Button / primary / label / M / `wf-btn`, 2 on 2<br>Button / secondary / label / M / `wf-btn`, 2 on 1 | **by zone**: primary where it is the one way on (Steam refused, a declined deposit), secondary beside Home on the 500 |
| what this place is | 2 | Button / secondary / label / M / `wf-btn`, 10 on 3<br>Button / primary / label / M / `wf-btn`, 1 on 1 | **by zone**: secondary on public pages, the primary way on from a profile that is gone |
| your limits | 2 | Text link / - / label / S / `a`, 2 on 1<br>Button / secondary / label / M / `wf-btn`, 1 on 1 | **by zone**: inline in the deposit facts, a button in the History panel |
| cases | 7 | Disclosure / - / label / M / `wf-foot-h`, 133 on 42<br>Navigation item / - / leading icon + label / L / `wf-rail-item`, 132 on 42<br>Navigation item / - / label / M / `a`, 112 on 36<br>Breadcrumb link / - / label / M / `a`, 13 on 4<br>Navigation item / - / label / S / `a`, 8 on 3<br>Navigation item / - / leading icon + label / M / `a`, 7 on 2<br>Button / secondary / label / M / `wf-btn`, 3 on 3 | **by carrier**: the rail, the bottom bar, the footer column head, the breadcrumb, a route out of an empty state |
| cash out | 3 | Tab / - / label / M / `wf-tabb`, 16 on 1<br>Button / secondary / leading icon + label / M / `wf-actb wf-btn`, 2 on 1<br>Navigation item / - / label / S / `a`, 1 on 1 | **by carrier**: a History tab, the act of the selection bar, a footer link |
| cookie policy | 3 | Navigation item / - / label / S / `a`, 125 on 41<br>Navigation item / - / label / M / `a`, 8 on 1<br>Button / secondary / label / M / `wf-btn`, 6 on 1 | **by carrier**: the footer, the cookie layer, the document switcher of Legal |
| history | 2 | Navigation item / - / label / S / `a`, 85 on 30<br>Tab / - / label / M / `wf-atab`, 12 on 5 | **by carrier**: the account menu and the account tabs |
| home | 4 | Breadcrumb link / - / label / M / `a`, 74 on 19<br>Navigation item / - / leading icon + label / M / `a`, 58 on 25<br>Text link / - / label / S / `a`, 6 on 3<br>Button / primary / label / M / `wf-btn`, 6 on 1 | **by carrier**: the rail and bar, the breadcrumb, inline, the primary way out of a 404 |
| logo | 2 | Navigation item / - / label / L / `wf-foot-logo`, 133 on 42<br>Navigation item / - / label / M / `wf-rail-logo`, 132 on 42 | **by carrier**: the rail and the footer, the two carriers that hold the mark |
| my items | 4 | Navigation item / - / label / S / `a`, 85 on 30<br>Tab / - / label / M / `wf-atab`, 25 on 4<br>Button / secondary / label / M / `wf-btn`, 3 on 2<br>Text link / - / label / S / `a`, 1 on 1 | **by carrier**: the account menu, the account tabs, a route out of an empty state, inline |
| nightjar_cs | 2 | Text link / - / label / S / `wf-feed-who`, 103 on 34<br>Text link / - / label / M / `a`, 5 on 1 | **by carrier**: the winner's name on a ticker tile and on the public result |
| privacy policy | 4 | Navigation item / - / label / S / `a`, 118 on 40<br>Text link / - / label / S / `a`, 15 on 4<br>Button / secondary / label / M / `wf-btn`, 5 on 1<br>Button / secondary / label / S / `wf-btn`, 1 on 1 | **by carrier**: the footer, inline in the declarations, the document switcher of Legal |
| profile | 2 | Navigation item / - / label / S / `a`, 85 on 30<br>Tab / - / label / M / `wf-atab`, 23 on 4 | **by carrier**: the account menu and the account tabs |
| provably fair | 3 | Navigation item / - / label / S / `a`, 111 on 38<br>Text link / - / label / S / `a`, 22 on 5<br>Button / secondary / label / M / `wf-btn`, 14 on 5 | **by carrier**: the footer, inline on the case screen, a route button on gate and result pages |
| refund and payments policy | 3 | Navigation item / - / label / S / `a`, 130 on 40<br>Button / secondary / label / M / `wf-btn`, 5 on 1<br>Text link / - / label / S / `a`, 3 on 3 | **by carrier**: the footer, the document switcher of Legal, inline on Deposit |
| responsible play | 2 | Navigation item / - / label / S / `a`, 132 on 42<br>Text link / - / label / S / `a`, 1 on 1 | **by carrier**: the footer and inline on Support |
| settings | 3 | Navigation item / - / label / S / `a`, 82 on 29<br>Tab / - / label / M / `wf-atab`, 24 on 5<br>Navigation item / - / label / M / `a`, 3 on 1 | **by carrier**: the account menu, the account tabs, a link on the profile |
| terms of use | 3 | Navigation item / - / label / S / `a`, 123 on 38<br>Text link / - / label / S / `a`, 10 on 7<br>Button / secondary / label / M / `wf-btn`, 2 on 1 | **by carrier**: the footer, inline, the document switcher of Legal |
| withdrawals | 2 | Navigation item / - / label / S / `a`, 85 on 30<br>Tab / - / label / M / `wf-tabb`, 16 on 1 | **by carrier**: the account menu and a History tab |

## Cross-check 2: control without a family

**No product control is without a family.** The script left 133 controls unassigned, and every one is `.wfp-toggle`, the toggle of the wireframe panel drawn on each of the 133 pages: a tool of the grey prototype, not part of the product, excluded by name. Stage 08 reads this list at steps 1 and 2; it is empty, not skipped.

## Icons

**In the grey,** every icon is a slot the size it will be (`D-50`), and the slots show which jobs the product gives an icon:

| Job | Read from | Slots on one page at 1440 | Screens |
|---|---|---|---|
| Destination in the rail | `wf-rail-ico` | 9 | 42 |
| Social link in the rail | `wf-rail-ico` | 14 | 42 |
| Destination in the bottom bar | `wf-bar-i` | 2 | 42 |
| Statistic in the footer | `wf-fig-ico` | 4 | 42 |
| Unit mark, the coin, beside each header figure | `wf-coin` | 2 | 30 |
| Setting row | `wf-cfg-ico` | 19 | 1 |
| Act in the selection bar | `wf-actb-i` | 4 | 1 |
| Sign-in provider | `wf-prov-i` | 4 | 1 |
| Message kind | `wf-msg-i` | 2 | 1 |

**In colour,** v4 draws icons as CSS masks from `--icon-*` in `design/_theme.css` (`D-191`), so they take the colour of the text. 40 are declared. Read by eye on one rendered sheet, since the `stroke` attribute misleads (several filled marks carry a stroke inside a mask): 30 filled, 5 outlines, 5 line glyphs drawn that way by their own filled set (arrows, the clock, the rail toggle, the crossed swords). Rendered counts are measured on Home and the case screen, guest and signed in, at 1440 and 375.

| Icon | Drawing, read by eye | Source named in its comment | Rendered on the two v4 screens |
|---|---|---|---|
| `--icon-close` | outline | solar:close-circle-linear | not rendered |
| `--icon-diamond` | outline | mdi:diamond-stone, D-193 | not rendered |
| `--icon-pulse` | outline | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 4 times |
| `--icon-target` | outline | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 12 times |
| `--icon-users` | outline | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 4 times |
| `--icon-battle` | line glyph, as its set draws it | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 4 times |
| `--icon-history` | line glyph, as its set draws it | solar:history-bold, D-193 | 10 times |
| `--icon-rail` | line glyph, as its set draws it | mdi:menu-open, D-193 | 4 times |
| `--icon-send` | line glyph, as its set draws it | solar:arrow-right-up-bold, D-193 | 14 times |
| `--icon-swap` | line glyph, as its set draws it | solar:transfer-horizontal-bold, D-193 | not rendered |
| `--icon-arrow-up` | filled | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 4 times |
| `--icon-bolt` | filled | the risk bolts, founder of 2 Nov 2026: " | 120 times |
| `--icon-box` | filled | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 120 times |
| `--icon-calendar` | filled | solar:calendar-bold, D-193 | 4 times |
| `--icon-crown` | filled | the rare drop's crown, the golden orbit tier | not rendered |
| `--icon-cup` | filled | solar:cup-star-bold, D-193 | 4 times |
| `--icon-discord` | filled | simple-icons:discord, the provider's own mark on its own sign in button | 16 times |
| `--icon-dollar` | filled | solar:dollar-minimalistic-bold, D-193 | 12 times |
| `--icon-facebook` | filled | simple-icons:facebook, the provider's own mark on its own sign in button | 16 times |
| `--icon-gift` | filled | solar:gift-bold, D-193 | not rendered |
| `--icon-google` | filled | simple-icons:google, the provider's own mark on its own sign in button | not rendered |
| `--icon-heart` | filled | the favourite's heart and its burst | 24 times |
| `--icon-home` | filled | solar:home-2-bold, D-193 | 8 times |
| `--icon-instagram` | filled | simple-icons:instagram, the provider's own mark on its own sign in button | 16 times |
| `--icon-like` | filled | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 8 times |
| `--icon-mute` | filled | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 8 times |
| `--icon-out` | filled | solar:logout-2-bold, D-193 | 6 times |
| `--icon-pistol` | filled | mdi:pistol, the mark of the items held beside their value, as the baseline's header, founder screenshot of 30  | 12 times |
| `--icon-question` | filled | the FAQ heading's mark | 4 times |
| `--icon-settings` | filled | solar:settings-bold, D-193 | 10 times |
| `--icon-shield` | filled | solar:shield-check-bold, D-193 | 30 times |
| `--icon-skull` | filled | mdi:skull, D-193 | not rendered |
| `--icon-sound` | filled | drawn for D-193 after the baseline's icon of the same job, founder screenshots of 20 Oct 2026 | 8 times |
| `--icon-star` | filled | solar:star-bold, D-193 | 8 times |
| `--icon-steam` | filled | simple-icons:steam, the provider's own mark on its own sign in button | 4 times |
| `--icon-telegram` | filled | simple-icons:telegram, the provider's own mark on its own sign in button | 16 times |
| `--icon-tiktok` | filled | simple-icons:tiktok, the provider's own mark on its own sign in button | 16 times |
| `--icon-user` | filled | solar:user-circle-bold, D-193 | 6 times |
| `--icon-x` | filled | simple-icons:x, the provider's own mark on its own sign in button | 16 times |
| `--icon-youtube` | filled | simple-icons:youtube, the provider's own mark on its own sign in button | 16 times |

**The question this census answers, `D-222` point 4.** `D-193` decided "icons filled, as the baseline draws them" and moved Solar Linear to Solar Bold; `_theme.css` says Solar Bold; `DESIGN-artifacts.md` section 7 still names Solar Linear in its zone table. The census finds five outlines among filled icons: `--icon-close` (solar close-circle-linear, never swapped, rendered on neither seeded screen), three marks drawn for this project after the baseline's own (`--icon-target`, `--icon-users`, `--icon-pulse`, in the rail) and `--icon-diamond` (mdi diamond-stone, facets in outline).

Two ways to make it one style, for the founder:

- **A, filled everywhere (recommended).** It is what `D-193` already says. Close takes its Solar Bold twin, diamond its filled mdi twin, the three drawn marks are redrawn as filled shapes and keep their motion; section 7 is corrected to Bold. The five line glyphs stay, since their own filled sets draw them as lines. Cost: three redraws and two swaps, at step 3 or 4.
- **B, keep the drawn marks as they are.** Close and diamond are swapped; target, users and pulse stay outlines, named as an exception with its reason. Cost: the rail keeps two styles side by side, which `D-222` asked this census to end.

Nothing is changed by this file; the choice is recorded in `docs/decisions.md` when it is made.

## What this file does not decide

- **Forms.** How each control looks in colour, and where the screens in colour drifted, is stage 08 step 1, read from the computed style of those screens. The difference between that list and this one is the brief of the rollout.
- **Patterns.** A composition of organisms repeated on three or more screens is stage 09. The case screen's blocks (head, stage, commit block, drop table, recent drops) are components here because each stands on four nodes, 3.3, 3.5, 3.6 and 3.7.
- **The structural diff of `D-222` point 6** runs against this file once step 3 has the kit classes; it is not run here.

