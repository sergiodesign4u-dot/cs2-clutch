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

**Totals.** 67 components: 24 atoms, 22 molecules, 21 organisms; 21 molecules and 22 organisms since `D-238`, the Deposit dock rising a level when the terms declaration, a Field, moved into it. 28 one-offs stay out of the kit, 32 since `D-234` added Home's four closing blocks, 36 since `D-236` added the case screen's four, 38 since `D-237` added the two of Deposit the walk of the grey had missed. 46 since the screens of step 5 added eight more: Provably fair's four (`D-245`), the catalogue's head and Filters in force (`D-246`), Responsible play's head (`D-248`) and Steam state (`D-240`); the count was not carried at those gates and was put right at step 6 (the reader's finding R1, `design/kit/docs/critique.md`). **Two of them already stand on a second screen and are owed to the components at stage 08:** Before you spend, with its form What this case pays (1.0 and 3.3), and How this case works (3.3, read by 1.2 since `D-245`). Form controls enter the kit from a single screen, the pack's one exception: File picker and Switch stand on one node each. **Stage 08 step 2 consolidated the family to 71: 23 atoms, 23 molecules, 25 organisms** (`D-260`): the Select merged into the Popover menu, the Account menu split from it, the two one-offs above and two more (What a round proof is made of, This deposit) made components by `D-259`, and the Field risen to level 3. The tables below stay as stage 07 wrote them; the family stage 08 builds, its rename map and what goes are in the last section, "Stage 08 step 2: the family consolidated".

## The table

### Level 1, atoms

| Component | Level | Variants | Screens (IA nodes) | States drawn in grey | Photo | Contains | Read from |
|---|---|---|---|---|---|---|---|
| Avatar | 1 | one form | 39: 0.3, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, and 29 more | one state; on 117 pages | yes, the Steam picture | nothing from the kit | `wf-avatar`, `wf-feed-av`, `wf-ah-av`, `wf-plr-av`, `wf-who-av` |
| Badge | 1 | count on a control (Filters 2), bonus on a control (+5%), ribbon on a tile (NO FEE, INSTANT), status (Not launched, UNREAD, SETTLED), price against Steam (-11%) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 132 pages | no | nothing from the kit | `wf-badge`, `wf-dep-b`, `wf-pay-rib`, `wf-rail-soon`, `wf-off-badge`, `wf-msg-new`, and 1 more |
| Button | 1 | see the control census | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | rest; a refusal said beside it rather than a disabled look (D-58); disabled only for Exchange on My items, a founder decision with its reason beside it (D-239); on 133 pages | no | nothing from the kit | `wf-btn`, `wf-icon-btn`, `wf-actb`, `wf-sell`, `wf-ck-b`, `wf-event-go`, and 8 more |
| Checkbox (form control) | 1 | see the control census | 9: 0.4, 2.4, 2.5, 2.6, 3.1, 4.1, 4.3, 4.5, 5.1 | off, on, refused (the missing declaration marked where it is, D-58); on 19 pages | no | nothing from the kit | `wf-cbx-box`, `input[checkbox]`, `wf-inv-pick` |
| Disclosure | 1 | a question that opens its answer (summary), a group head that opens a list (support topics, legal sections, a footer column at 360) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | closed, open; on 133 pages | no | nothing from the kit | `summary`, `wf-faq-b`, `wf-acc-b`, `wf-foot-h` |
| Favourite toggle | 1 | corner mark on a case tile with its count, labelled control on the case head | 7: 1.0, 1.1, 3.1, 3.3, 3.5, 3.6, 3.7 | off, on, with its count; on 21 pages | no | nothing from the kit | `wf-fav`, `wf-fav-case` |
| Figure | 1 | plain, a link (whole figure clickable), missing (Not available) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | value, missing (Not available, D-124); on 133 pages | no | nothing from the kit | `wf-fig` |
| File picker (form control) | 1 | see the control census | 1: 0.10 | one state; on 1 pages | no | nothing from the kit | `input[file]` |
| Icon | 1 | destination mark (rail, bottom bar), figure mark, unit mark (the coin), act mark (the share on an item card, D-244; Search and Filters on the category bar, D-246) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | no, a glyph | nothing from the kit | `wf-icon`, `wf-rail-ico`, `wf-fig-ico`, `wf-cfg-ico`, `wf-bar-i`, `wf-actb-i`, and 3 more |
| Key-value line | 1 | a total line (sum), a fact line, a record line, a rule line (Extend: Immediately, on Responsible play) | 18: 0.3, 0.4, 0.9, 0.10, 1.2, 1.3, 1.4, 4.1, 4.3, 4.4, and 8 more | value, missing (None on sale, D-239); on 39 pages | no | nothing from the kit | `wf-tl`, `wf-closes-k`, `wf-docid`, `wf-ck-rec-k`, `wf-attr`, `wf-roll-k`, and 2 more |
| Logo | 1 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | no, the logo asset | nothing from the kit | `wf-logo-mark` |
| Media slot | 1 | skin image, case art, mode art, banner art, provider mark, brand art | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | yes | nothing from the kit | `wf-ah-art`, `wf-art-c`, `wf-banner-art`, `wf-bonus-art`, `wf-case-art`, `wf-dlg-art`, and 18 more |
| Note line | 1 | a qualifying fact under a block, a refusal beside a control (D-58), an as-of stamp, the cost said in words | 30: 0.9, 0.10, 1.1, 1.2, 1.3, 1.4, 3.1, 3.3, 3.5, 3.6, and 20 more | one state; on 76 pages | no | nothing from the kit | `wf-note`, `wf-refuse`, `wf-stamp`, `wf-cost-say` |
| Prose | 1 | one form | 8: 1.0, 1.1, 3.1, 3.2, 3.3, 3.5, 3.6, 3.7 | one state; on 22 pages | no | nothing from the kit | `wf-prose` |
| Radio (form control) | 1 | see the control census | 4: 4.1, 4.3, 4.5, 5.3 | one state; on 5 pages | no | nothing from the kit | `input[radio]` |
| Range (form control) | 1 | see the control census | 2: 3.1, 5.3 | one state; on 3 pages | no | nothing from the kit | `input[range]` |
| Segmented control | 1 | the count switch 1 to 5, the sort keys; small (the sort, D-243) | 2: 3.3, 5.1 | one chosen; on 5 pages | no | nothing from the kit | `wf-count-b`, `wf-sortk` |
| Select (form control) | 1 | see the control census; in colour the kit draws a short list as Popover menu --select, D-238 | 10: 0.10, 3.1, 4.1, 4.3, 4.5, 5.1, 5.3, 5.11, 6.1, 6.3 | chosen value; on 24 pages | no | nothing from the kit | `select` |
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
| Case tile | 2 | one form | 3: 1.0, 1.1, 3.1 | rest, skeleton (catalogue-loading), favourite on, risk or price not available, favourite count not available or being read (D-246); on 8 pages | yes, case art | Media slot, Favourite toggle, Figure | `wf-tile` |
| Category bar | 2 | one form, one sticky row at every width (D-246) | 2: 3.1, 3.2 | one state; on 7 pages | no | Button, Icon, Badge | `wf-catbar` |
| Chosen method | 2 | one form: the route's head, Back, the method's mark, its family over its name, D-238 | 3: 4.1, 4.3, 4.5 | one state; on 7 pages | the method's mark, D-238 | Button | `wf-chosen` |
| Copyable value | 2 | a seed or hash, a ticket or reference id, a wallet address with its QR | 8: 0.3, 0.10, 1.2, 1.3, 1.4, 3.5, 4.1, 7.1 | one state; on 22 pages | no | Button, Key-value line | `wf-fpair`, `wf-tid`, `wf-ref`, `wf-hash`, `wf-crypto` |
| Daily ladder | 2 | one form | 3: 1.0, 1.1, 3.1 | tiers locked and reached, the open control live or refused; on 7 pages | tier art | Figure, Media slot, Button, Note line | `wf-panel` |
| Drop card | 2 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | yes, skin | Media slot, Text link, Figure | `wf-d-weapon` |
| Empty state | 2 | nothing yet, not available (taken down or never existed) | 7: 3.2, 5.2, 5.3, 5.9, 5.10, 7.2, 7.3 | nothing yet, not available; on 12 pages | no | Button, Text link | `wf-empty`, `wf-gone` |
| Event banner | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | yes, banner art | Media slot, Button | `wf-banner` |
| Feed tile | 2 | one form | 34: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, and 24 more | one state; on 104 pages | yes, skin | Media slot, Avatar, Text link | `wf-feed-hit` |
| Field | 2 | stacked (label over control), row (label and help left, control right), a declaration (checkbox with its links, D-26) | 13: 0.10, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, 4.1, 4.3, 4.5, and 3 more | empty, filled, read-only, refused with its reason, malformed (fair-malformed); on 29 pages | no | Text field, Select, Text area, Checkbox, Switch, Button, Note line | `wf-cfg`, `wf-set`, `wf-vf`, `wf-f-l`, `wf-cbx` |
| Filter chip | 2 | one form | 2: 3.1, 3.2 | one state; on 2 pages | no | Button | `wf-chip` |
| Hero | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | no | Text link | `wf-hero` |
| Item card | 2 | my items (select in the band, acts on the face), ledger (status in the band, from and won, Check this round), public shelf | 3: 5.1, 5.9, 7.3 | selected, sending to Steam, sold, gone, its value missing (D-239); washed in its grade from the foot, the grade's line on its top edge, the skin larger and turned (D-241); Share this round the share glyph alone, D-244; on 6 pages | yes, skin | Media slot, Checkbox, Button, Figure, Icon | `wf-inv-card`, `wf-itemcard`, `wf-plr-card` |
| Mode card | 2 | one form | 2: 1.0, 1.1 | one state; on 2 pages | yes, mode art | Media slot, Button, Badge | `wf-mode` |
| Outcome card | 2 | one form | 2: 3.6, 3.7 | one state; on 4 pages | yes, skin | Media slot, Button | `wf-won-art` |
| Popover menu | 2 | account (avatar trigger, destinations, Sign out), language (nine options, one live, D-42), select (a field's choice from a short list, the country and the network, D-238) | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | closed, open; on 133 pages | no | Button, Avatar, Text link | `wf-acct-wrap`, `wf-lang-wrap` |
| Recent drop card | 2 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | yes, skin | Media slot, Figure | `wf-r-art` |
| Section head | 2 | one form | 24: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 3.1, 3.2, 3.3, and 14 more | one state; on 59 pages | no | Text link | `wf-sec-head` |
| Withdraw item | 2 | one form | 5: 5.3, 5.4, 5.5, 5.6, 5.8 | on the clock, offer expired, restricted, not eligible, Steam degraded; on 5 pages | skins | Media slot, Figure, Key-value line | `wf-held` |

### Level 3, organisms

Order: first the organisms that hold no other organism, then Payment panel (holds Status notice), Case head (holds Case stage) and Sign-in block (holds Status notice), then Dialog (holds Sign-in block and Payment panel). A part always stands above its whole. Corrected at batch 3, `D-232`: the grey draws a Status notice inside the payment panel for declined and ceiling pending, so Payment panel moved below Status notice; its level stays 3. Two cells corrected by the same walk: the Rail holds no Badge (v4 draws a heading and a chip line), and the Ticker's pause is its own part, an 18px round mark outside the button family.

| Component | Level | Variants | Screens (IA nodes) | States drawn in grey | Photo | Contains | Read from |
|---|---|---|---|---|---|---|---|
| Account head | 3 | one form | 6: 5.1, 5.2, 5.9, 5.10, 5.11, 7.3 | with a Steam account, with none linked (missing figure); on 28 pages | Steam avatar; the footer's operators over the band from 1200px, D-240; on My items the most valuable item held in their place, D-241; on My items its stage form, the founder's B1, the band in the item's grade and the skin breaking out over it at every width, D-242 | Breadcrumb, Avatar, Figure, Button, Badge, Tabs | `wf-ah` |
| Bottom bar | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 132 pages | no | Icon | `wf-bar` |
| Case grid | 3 | Home's five to a row; the shelf form, four to a row, two on a phone (D-246) | 3: 1.0, 1.1, 3.1 | one state; on 8 pages | case art | Section head, Case tile | `wf-grid--shelf` |
| Case stage | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | at rest, the open with one, two and five rolls, the outcome; on 13 pages | case art, skins | Media slot, Outcome card, Button | `wf-stage-frame` |
| Commit block | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | guest, funded, two and five chosen, open, outcome, interrupted, degraded, no counter; on 13 pages | no | Figure, Segmented control, Button, Copyable value, Text link | `wf-commit` |
| Data table | 3 | a ledger (history, settlement), the drop table (case contents by tier, D-125) | 8: 3.3, 3.5, 3.6, 3.7, 5.3, 5.5, 5.8, 5.9 | rows, empty, a row marked mismatched; on 24 pages | skins in the drop table | Drop card, Figure, Text link, Badge | `wf-table` |
| Deposit dock | 3 | one form: the figure plus the bonus, the rate on a chip, the terms declaration over the act, D-238 | 3: 4.1, 4.3, 4.5 | one state; on 6 pages | no | Figure, Key-value line, Field, Button, Note line | `wf-dock` |
| Footer | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | one state; on 133 pages | brand art slot | Figure, Disclosure, Logo, Text link, Popover menu | `wf-footer` |
| Header | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | guest (Sign in), signed in (money pair, Add funds, account); on 132 pages | no | Button, Figure, Popover menu | `wf-header` |
| Item grid | 3 | one form | 3: 5.1, 5.9, 7.3 | one state; on 6 pages | skins | Item card, Segmented control | `wf-itemgrid`, `wf-grid--inv` |
| Limits panel | 3 | one form; a period is the Select menu and a press is answered under its row (D-248) | 2: 6.1, 6.3 | nothing set, a limit in force, self excluded, a guest (every press refused with its reason); on 4 pages | no | Field, Key-value line, Button, Note line, Popover menu | `wf-rp` |
| Mode row | 3 | one form | 2: 1.0, 1.1 | one state; on 2 pages | mode art | Mode card | `wf-modes` |
| Proof block | 3 | one form | 4: 1.2, 1.3, 1.4, 7.1 | settled, matched, mismatched, no proof, failed; on 11 pages | no | Copyable value, Key-value line, Badge, Button | `wf-proof-fields` |
| Rail | 3 | one form | 42: 0.3, 0.4, 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.1, and 32 more | open, closed, LATER rows marked Not launched (D-197); on 132 pages | no | Logo, Icon, Button, Popover menu | `wf-rail` |
| Recent drops | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | skins | Recent drop card | `wf-recent` |
| Status notice | 3 | in progress (crediting), stopped (declined, restricted), failed with a reference (Steam refused) | 14: 0.10, 2.5, 2.6, 4.2, 4.3, 4.4, 4.5, 5.4, 5.5, 5.6, and 4 more | in progress, stopped, failed with a reference; on 22 pages | no | Key-value line, Figure, Button, Copyable value | `wf-notice`, `wf-fail` |
| Ticker | 3 | one form | 34: 0.9, 0.10, 1.0, 1.1, 1.2, 1.3, 1.4, 2.4, 2.5, 2.6, and 24 more | running, paused (Resume); on 104 pages | skins | Feed tile | `wf-feed` |
| Verify form | 3 | one form | 3: 1.2, 1.3, 1.4 | empty, prefilled, malformed, matched, failed, unavailable; on 6 pages | no | Field, Copyable value, Button | `wf-verify` |
| Payment panel | 3 | one form: step 1 the bonus strip, the code and the country; step 2 the route's head, provider tiles, the form beside the dock, D-238 | 3: 4.1, 4.3, 4.5 | card, crypto, crypto with no wallet, gift cards, skins, declined, ceiling pending; on 9 pages | provider marks | Chosen method, Amount field, Field, Copyable value, Deposit dock, Status notice | `wf-pay-lay` |
| Case head | 3 | one form | 4: 3.3, 3.5, 3.6, 3.7 | one state; on 13 pages | case art | Favourite toggle, Note line, Case stage | `wf-case` |
| Sign-in block | 3 | one form | 3: 2.4, 2.5, 2.6 | consent not given, one of two given, given, Steam refused, Steam unavailable; on 7 pages | no | Field, Button, Status notice | `wf-auth-blk` |
| Dialog | 3 | geo gate (2.1, 2.2), sign in (2.4), deposit (4.1), cash out (5.1), confirm a limit (6.2) | 6: 2.1, 2.2, 2.4, 4.1, 5.1, 6.2 | one page per state of its layer: gate blocked, staged, not launched, unavailable; sign in; deposit; cash out; confirm; on 9 pages | art slot on two | Button, Sign-in block, Payment panel, Field, Copyable value | `wf-dlg` |

## One-off, kept out of the kit

On one screen only: one IA node, with the state nodes drawn on its own pages (3.2 of 3.1, 6.3 of 6.1). Their markup stays on the screen they belong to until a second screen needs them; the parts they are built from are already in the table.

**Added at stage 07 step 5, `D-234`.** Home's four closing blocks are the grey's figures, prose and questions (Figure, Prose, Disclosure, Section head above), but v4 drew each as one composed block of Home alone, so in colour they are one-offs too. A one-off keeps its markup on its screen and its look in `kit.css` part 4.4, since no screen carries a style of its own; the kit page shows them in its section One-off blocks.

| Block | Node | Read from | Note |
|---|---|---|---|
| Before you spend | 1.0 | `wf-figs` (v4 `x6`) | the money strip and the Every round plate beside two checked rounds; `.spend`, kit.css 4.4, D-234; **a component since stage 08 step 2, `D-260`** |
| What opening a case here involves | 1.0 | `wf-prose` (v4 `sx`) | the paragraph beside Nightfall on its plate; `.involves`, kit.css 4.4, D-234 |
| Questions and answers | 1.0 | `wf-faq` on Home (v4 `fq`) | its questions are kit Disclosures; `.faq`, kit.css 4.4, D-234 |
| About Clutch | 1.0 | `wf-prose` (v4 `ab`) | a lead and four parts under heads; `.about`, kit.css 4.4, D-234 |
| Before you open | 3.3 | `wf-case-info` (v4 `v4i`, row D) | two plates, what a skin's price means and what must be true before opening; `.before`, kit.css 4.4, D-236 |
| What this case pays | 3.3 | `wf-figs` (v4 `x6` with `v4p`, row B) | Home's money strip with four panels; `.spend--pays`, a form of Before you spend, kit.css 4.4, D-236; **a component since stage 08 step 2, `D-260`** |
| Published against observed | 3.3 | `wf-table` (v4 `v4o`, row D) | a row a tier, the published bar and the observed tick with its change; `.observed`, kit.css 4.4, D-236 |
| Provably fair's head | 1.2 | `wf-sec` with `wf-scope-two` | the crumb, the H1, the public line and two ways on beside what a proof proves and does not, on the Proof block's blue; `.fair-head`, `.fair-scope`, kit.css 4.4, D-245 |
| What a round proof is made of | 1.2 | `wf-proof-fields` read only | the field set in the hash well on the same blue, beside the Verify form; `.fair-made`, kit.css 4.4, D-245; **a component since stage 08 step 2, `D-260`** |
| If your check does not match ours | 1.2 | `wf-sec` | read before it happens, on a card; `.fair-miss`, kit.css 4.4, D-245 |
| The algorithm, published in full | 1.2 | `wf-algo` | the computation and its history beside the worked example, its version on a status Badge; `.fair-algo`, kit.css 4.4, D-245 |
| How this case works | 3.3, 1.2 | `wf-prose` (v4 `v4t`, `v4u`, row I) | the prose on its plate beside the ticket ruler; `.how`, `.ruler`, kit.css 4.4, D-236; read by 1.2 as How a round is fixed since D-245, so by this table's rule it is owed to the components; **a component since stage 08 step 2, `D-260`** |
| System page block | 0.3 | `wf-sys` | code, heading, two ways out, reference |
| Toast | 0.3 | `wf-copied` | Copied; node 0.5 owns toasts and no other page draws one |
| Cookie consent | 0.4 | `wf-ck` | its own layer with category rows; its toggles are kit Checkboxes |
| Legal document | 0.9 | `wf-doc` | table of contents, clauses, version history |
| Support form | 0.10 | `wf-form` | its fields are kit Fields |
| Support topics | 0.10 | `wf-faq` | its questions are kit Disclosures |
| Ticket card | 0.10 | `wf-tick` |   |
| Filter drawer | 3.1 | `wf-drawer` | the Dialog at the right edge, the whole window on a phone, with steppers, risk marks, a range; `.filter-drawer`, kit.css 4.4, D-246; the range and selects are in the kit |
| Number stepper | 3.1 | `wf-stepper` | inside the filter drawer only; `.stepper`, kit.css 4.4, D-246 |
| Risk pips | 3.1 | `wf-pips` | inside the filter drawer only; the tile's four bolts, `.risk-marks`, kit.css 4.4, D-246 |
| Skeleton | 3.1 | `wf-skel-line` | catalogue-loading only; drawn as the Case tile's busy favourite count, D-246 |
| The catalogue's head | 3.1, 3.2 | `wf-crumb` with the H1 | the crumb and the one H1 on the Cases card's band, its object at the end; `.shelf-head`, kit.css 4.4, D-246 |
| Filters in force | 3.1, 3.2 | `wf-chips` with `wf-count-line` | the Filter chips, Clear all and the count, two states of one screen; `.shelf-state`, kit.css 4.4, D-246 |
| Responsible play's head | 6.1, 6.3 | `wf-crumb` with the H1 and `wf-rp-say` | the crumb, the one H1 with the shield and the status line on the account menu's Responsible play blue, words only; `.rp-head`, kit.css 4.4, D-248 |
| Showcase | 3.3 | `wf-show` | phase 1 of the case screen |
| Reveal lanes | 3.5 | `wf-lanes` | the open, one lane per roll |
| Round detail popover | 3.6 | `wf-detail-wrap` | Round details on the batch outcome |
| Gift cards | 4.1 | `wf-gift` | the sellers as kit Disclosures in the Payment panel's list, `.pay-panel__list`, D-237 |
| Provider tile | 4.1 | `wf-pay-t` | the provider grid on the deposit page; the other deposit states show the Chosen method instead; the ways to pay, `.methods`, kit.css 4.4, D-237; each method's mark over its name, `design/kit/marks/`, D-238 |
| Skin deposit | 4.1 | `wf-skindep` | deposit with skins; the skins as kit Checkbox rows in the Payment panel's list, `.pay-panel__list`, D-237 |
| What still works | 4.2 | `wf-open-list` | the ways a stop leaves open, each a Text link with its line; `.works`, kit.css 4.4, D-237 |
| This deposit | 4.4 | `wf-total` | the record of a payment on its way, Key-value lines on the dock's plate; `.record`, kit.css 4.4, D-237; **a component since stage 08 step 2, `D-260`** |
| Cash out form | 5.1 | `wf-co-lay` | inside the cash out dialog; what goes out on the dock's plate, `.cashout`, kit.css 4.4, D-239 |
| Selection bar | 5.1 | `wf-invbar` | counts what is ticked, four acts; sticky on the account head's plate, `.selbar`, kit.css 4.4, D-239; no edge while something is ticked, its sum lit, D-240 |
| Steam state | 5.1 | none, the grey's sub line `Steam connected · Settings` | the Steam account's state at the inventory head's end, Steam's dark blue, a live green dot, the way to Settings; `.steam-state`, kit.css 4.4, D-240; on one 44px line, Settings at a chip's size, D-243 |
| Offer list | 5.3 | `wf-offs` | Steam offers to pick from, with filters |
| Selected skin | 5.3 | `wf-selskin` |   |
| History filters | 5.9 | `wf-hfilters` |   |
| History round row | 5.9 | `wf-roll` | the rounds ledger |
| Messages | 5.10 | `wf-msg` | its tabs are kit Tabs |
| Case row link | 7.1 | `wf-caserow` |   |
| Owner block | 7.1 | `wf-owner` |   |
| Winner line | 7.1 | `wf-who` |   |
| Profile strip | 7.3 | `wf-strip` |   |

**Added at stage 07 step 5, `D-236`.** The case screen's four blocks under its stage are one-offs of node 3.3 for the reason Home's are: the grey drew them from figures, a table and prose, v4 drew each as one composed block of the case screen alone. What this case pays is Home's money strip with a fourth panel, so `.spend` is now drawn on two nodes, 1.0 and 3.3; by the rule above that makes it a component, and it stays in part 4.4 as a one-off with a form until stage 08 splits the kit, where it is named as the first one-off a second screen needed. What is in this case is the kit's Data table under a Section head and adds nothing. The Case stage and the Commit block gain their play, `design/kit/stage.js`, and no new component: the open, the outcome, the flash and the wave, the ring and the rare marks on a run's card are forms of the Case stage, Outcome card, Button (its busy light) and Drop card already in the table.

**Added at stage 07 step 5, `D-237`.** Deposit is the Payment panel, the Status notice, the Dialog and the Section head already in the table, and three blocks of its own. The ways to pay is the Provider tile row below, drawn as `.methods`; What still works (4.2) and This deposit (4.4) were missed by the walk of the grey, since `wf-open-list` and `wf-total` stand on one page each, and enter here. Gift cards and Skin deposit need no look of their own: their rows are kit Disclosures and Checkboxes in the Payment panel's list, an element the panel gains (`.pay-panel__list`, `.pay-panel__denoms`, with `.pay-panel__route` and `.pay-panel__pick` for the deposit layer). The screen's H1 is the Section head's large form. No component is added; the panel's behaviour is `design/kit/pay.js`.

**Changed at Deposit's gate, `D-238`.** The founder's seven corrections enter the kit before the screen: Popover menu gains its third variant, `--select`, the Select menu that replaces the browser's list for the country and the network; Chosen method becomes the route's head (Back, the method's mark, the name) and the bonus strip, the code and the country stay at step 1; the Payment panel's offer becomes a strip of a banner's height and its provider option a lit tile; the Deposit dock shows the figure plus the bonus with the rate on a chip and takes the terms declaration over its act, a Field, so its level rises from 2 to 3 by the rule above (the Payment panel stays at 3, the cap). The ways to pay carry each method's mark over its name. No component is added and none removed.

**Added at stage 07 step 5, `D-239`.** My items is the Account head, the Section head, the Item grid, the Item card, the Empty state and the Dialog already in the table, and two blocks of its own, the Selection bar and the Cash out form, one-offs of 5.1 built in `kit.css` part 4.4. No component is added and none removed, and no level moves. The kit gains forms of what it has: Button its disabled look, drawn only for Exchange, a founder decision with its reason on the card; Key-value line its missing value; Item card its value missing (the degraded state) and its receipt after a sale or a cash out in the session, the sold band it already drew for the ledger; Account head the screen's H1 for a screen reader; Item grid a row of cards ending on one line. The cash out Dialog takes the Select menu for its saved addresses and the Cash out form for its sum. The kit still grows on the fourth screen, by forms rather than by components.

**Changed at My items' gate, `D-240`.** No component is added and none removed, and no level moves. The Account head is redrawn in its own rules as a band with its money on one dark plate and its tabs on the plate under it, Add funds carrying the header's 5% pin (Badge, a level 1 atom, so the head stays at 3); the Section head shows a Badge beside its title; a third one-off of 5.1, the Steam state, takes the grey's sub line's chip and link; the Selection bar loses its pink edge.

**Changed after the founder's pick B1, `D-242`.** No component is added and none removed, and no level moves. The Account head gains its stage form, a modifier, on My items: the elements it already had for `D-241` rearranged, the hexagon gone, a foil on the skin; it stays at 3.

**Changed at My items' second gate, `D-241`.** No component is added and none removed, and no level moves. The Account head gains the most valuable item held, from 1200px on My items: a Media slot and a Figure it already contains, so it stays at 3. The Item card takes its grade on its face; its parts are unchanged.

**Added at stage 07 step 5, `D-251`.** Sign in is the Dialog in its sign in form and the Sign-in block already in the table, and nothing else. The address, /signin, draws the same Dialog on the page, as the showcase draws it inline: no close and no scrim, the H1 where the layer has its heading, and the Sign-in block's page form under it (Or keep looking around without an account), so one content stands in two carriers in one order (node 2.4, `D-56`). No component is added and none removed, and no level moves. The Dialog's contract gains what the grey's layer always had: while a layer is open Tab walks its own controls only, and a layer drawn open on arrival takes the keyboard (kit.js). The Sign-in block says Both declarations made. when both are ticked, microcopy 2.4-19, and the Copyable value in a refused sign in copies its reference.

**Motion carried at stage 07 step 5, `D-235`.** No component is added: the motion v4 Home was approved with enters as forms of components already in the table. Icon gains its story form, the rail's marks, the footer's counters and its round plate drawn in parts to play under the pointer; Feed tile gains the rare marks by chance, A, B and C, and the rare drop in three tiers; Ticker paces its arrivals as v4 does; Disclosure slides, Favourite toggle bursts, Event banner counts down. Their look is in `kit.css` beside each component, their behaviour in `design/kit/motion.js`, and the kit page shows them in its section Motion.

## Control census

A control is `a`, `button`, `label`, `summary`, an input, a select or a textarea, an element with a role of button, tab, checkbox, radio or switch, or an element that brings a `cursor: pointer` its parent does not have. Counted per page on both widths, content behind a layer excluded: **10584 control occurrences on 133 pages**. A shell control is counted on every page that draws it, so occurrences measure weight on screen and the distinct jobs column measures variety.

Emphasis is not read here: the grey has no fill, no outline and no inverse. What the grey does show is **rank**: primary is `.wf-btn--primary`, the one main act of its zone; tertiary is an icon-only control or a utility (close, menu, pause, sound, Copy); secondary is every other button. Rank becomes emphasis at stage 08. **How the kit draws rank in colour, stated at stage 07 step 6** (the reader's findings R5 to R7): primary is `.button--primary`; secondary is `.button--ghost`; a tertiary that is icon only is `.button--icon`, the 42px tile, or `.button--close`, the 40px cross; a tertiary with a label is drawn as the ghost where it is a button (Copy) and as its carrier's own row where a carrier holds it (Sound on in the rail). Size in colour is the kit's ladder, L 52, M 40, S 32 at every width (`D-209`, `D-228`); the sizes in this census, M at the 44px floor among them, are the grey's measures and not the kit's. The 44px press is kept two ways: an S button carries a 44px press area through `::after`, and a row that is a toolbar for the thumb declares it, `.button--tap` at every width and `.button--s-tap` on a phone. No button is disabled to express a precondition (`D-58`); the one drawn `:disabled` is Exchange in the selection bar, a founder decision of `D-85` with its reason on the card. **Size** is set by the container: S is `.wf-btn--small` or 32px and less, L is 52px and more, M is the 44px tap floor between them. Width is layout and is not on the axis.

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

**No product control is without a family.** The script left 133 controls unassigned, and every one is `.wfp-toggle`, the toggle of the wireframe panel drawn on each of the 133 pages: a tool of the grey prototype, not part of the product, excluded by name. Stage 08 reads this list at steps 1 and 2; it is empty, not skipped. **Read at stage 08:** a control with a family can still have no form in colour; step 1 measured ten such grey variants and step 2 closed each, in the last section's "Controls without a form, closed".

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

Nothing is changed by this file; the choice is recorded in `docs/decisions.md` when it is made. **Made: A, every icon filled, `D-227`.** `kit.css` ICON draws one style.

## What this file does not decide

- **Forms.** How each control looks in colour, and where the screens in colour drifted, is stage 08 step 1, read from the computed style of those screens. The difference between that list and this one is the brief of the rollout.
- **Patterns.** A composition of organisms repeated on three or more screens is stage 09. The case screen's blocks (head, stage, commit block, drop table, recent drops) are components here because each stands on four nodes, 3.3, 3.5, 3.6 and 3.7.
- **The structural diff of `D-222` point 6** runs against this file once step 3 has the kit classes; it is not run here.

## Stage 08 step 2: the family consolidated

Written on 26 November 2026 after the founder accepted the three levels one gate at a time: the atoms with Q1 and Q2 as recommended (the dark tile's edge is white at .07 everywhere, a refusing control is ringed in `--color-error`), the molecules with Q3 as recommended (the account menu is its own component), the organisms with no question. The record is `D-260` in `docs/decisions.md`. **Nothing in the product changed at this step:** the classes below are what step 5 writes and step 6 moves the screens onto. The tables above stay as stage 07 wrote them; this section is the family stage 08 builds.

**How it was decided.** One component is one anatomy, the same zones in the same order; a zone one has and another lacks makes two. Everything else that differs is a variant on an axis: emphasis, content or size, the container choosing the size; width is layout and on no axis. A fourth axis is named where it occurs, **data**: the case's colour, a skin's tier, a mode, set by what is shown rather than by the designer. Measured locally on all 51 coloured states at 1440 and 360 (every component root), every rule of `kit.css` part 4 that names another component's class, and a fit test of the family's own values wherever a block shrinks a button; the grey pages counted from `wireframes/` as stage 07 did.

**Totals.** 67 components became **71: 23 atoms, 23 molecules, 25 organisms.** One left: the native Select, merged into the Popover menu as its select form. Five entered: four one-offs that stand on a second screen (Money strip, Payment record, How this case works, Proof fields, by `D-259`) and the Account menu, split from the Popover menu by its head. **One level moved on the recount:** the Field rises from 2 to 3, because the control it holds for a choice is now the Popover menu, a molecule, where it was the Select, an atom; the review pages of the molecules and the organisms counted it at 2 and said 24 and 24. It holds no organism, so it loads first among the organisms, and the five organisms that hold it come after it. The script that writes this table recomputes every level from the Contains column and fails on a mismatch.

**Since `D-265`, 26 November 2026, at the molecules' gate: 72, 27 atoms, 22 molecules, 23 organisms.** The Contains column of eighteen rows was read again from the coloured markup the molecules were built on (Q5), and the Rare mark entered as an atom (Q6). Three rows hold no component, so they are atoms: the Breadcrumb, the Hero, the Popover menu. The recount that follows from the column moved two more: the Field holds only atoms once the Popover menu is one, and the Account head holds only atoms once the Breadcrumb is one, so both are molecules; built in round 3 before the organisms. The cells below carry the change with `D-265`.

### The table

"Coloured" counts the states of 51 that draw the component's root visible at either width; "grey pages" is the product, from the tables above. Within level 3 the order is the load order: an organism that holds another comes after it.

#### Level 1, atoms (23)

| Component | Class | Level | Axes and values | Coloured | Grey pages | Contains | Since step 2 |
|---|---|---|---|---|---|---|---|
| Avatar | `.avatar` | 1 | Size by container: S 16 (ticker), M 32 (header trigger), L 52 (best drop card), XL 64 (account head, account menu). Data: player, bot. | 44: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 117 | nothing from the kit | kept; L 52 new from the best drop card's own rule, the old L renamed XL |
| Badge | `.badge` | 1 | Tone: bonus, status, count, good, bad. Size: S 16, L 24. | 30: Case, Catalogue, Deposit, Home, My items, Provably fair | 132 | nothing from the kit | kept |
| Button | `.button` | 1 | Emphasis: primary, ghost, tile (glyph on a dark tile), close. Content: label, glyph + label, label + price (`--priced`), a proper name (`--name`), glyph over label (`--stack`, new), a label that folds to its glyph under 600 (`--fold`). Size: S 32, M 40, L 52; press floor 44 (`--tap`, `--s-tap`). | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept; `--stack` new, `--arrow` deleted, `--fill` moved to its container |
| Checkbox | `.check` | 1 | Content: with its label, alone (a card's tick, the cookie layer). | 5: Catalogue, Deposit, My items | 19 | nothing from the kit | kept |
| Disclosure | `.disclosure` | 1 | One form: the question row that opens its answer. | 9: Deposit, Home, Provably fair | 133 | nothing from the kit | kept |
| Favourite toggle | `.fav` | 1 | Emphasis: bare with its count (a tile's corner), on a tile (the case head). | 19: Case, Catalogue, Deposit, Home, Sign in | 21 | nothing from the kit | kept |
| Figure | `.fig` | 1 | Tone: plain, money, soft, up, down, missing. Size: seven by container, named at step 4 (`D-262`, Q4) by the type step each reads: `--xs` 13, none 14, `--m` 18, `--title` 20, `--l` 22 (the Figure's own value, off the scale), `--head` 26, `--win` 30. As a link: the whole figure (also the grey's large text link on withdraw). | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept; `--end` moved to its container |
| File picker | none yet | 1 | No form in colour: to the backlog with its anatomy, a read-only Text field and a ghost S Choose a file. | none | 1 | nothing from the kit | kept, backlog |
| Icon | `.icon` | 1 | One form: a glyph by name at its text's size and colour; a story form played under the pointer. | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept |
| Key-value line | `.kv` | 1 | Emphasis: fact (`--fact`, bold white, new), record (plain grey). Content: line, total, rule, money total. Size: S, M (the payment record). | 24: Case, Deposit, My items, Provably fair, Responsible play, Sign in | 39 | nothing from the kit | kept; `--fact` and M new |
| Logo | `.logo` | 1 | Size: S (rail), L (footer). | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept |
| Media slot | `.media` | 1 | Content: skin, case. A skin floats; its frame belongs to the card around it. | 39: Case, Catalogue, Deposit, Home, My items, Provably fair, Sign in | 133 | nothing from the kit | kept |
| Note line | `.note` | 1 | Tone: muted, soft, refusal, hi (`--hi`, new: a saved limit). Content: a fact, an as-of stamp, a label. Size: S 12, M 14, L 16 (`--l`, new). | 37: Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in | 76 | nothing from the kit | kept; `--hi` and `--l` new |
| Prose | `.prose` | 1 | Size: lead 17, text 16. | 12: Catalogue, Responsible play | 22 | nothing from the kit | kept |
| Radio | `.radio` | 1 | Content: in a choice tile (a provider, a Steam offer). | 3: Deposit | 5 | nothing from the kit | kept |
| Range | `.range` | 1 | One form, with the 44px press. | 1: Catalogue | 3 | nothing from the kit | kept |
| Segmented control | `.seg` | 1 | Size: M 44, S 32 (the sort, a sticker count). The chosen look is its own, also where the category bar wears it. | 12: Case, Deposit, My items | 5 | nothing from the kit | kept; the category bar's chosen rule moves in |
| Status steps | `.steps` | 1 | One form. | 1: Deposit | 6 | nothing from the kit | kept |
| Switch | `.switch` | 1 | One form, the kit's own. | none | 4 | nothing from the kit | kept |
| Tabs | `.tabs` | 1 | Content: current, with a count. Ground: plain, on a plate (`--plate`, new: the account head). | 4: My items | 29 | nothing from the kit | kept; `--plate` new |
| Text area | `.textarea` | 1 | One form. Its refusal ring reads `--color-error`. | 6: Provably fair | 14 | nothing from the kit | kept |
| Text field | `.input` | 1 | Size: M 40, L 52 (an amount). Emphasis: boxed, bare (inside a stepper). Its refusal ring reads `--color-error`. | 19: Catalogue, Deposit, My items, Provably fair, Responsible play | 25 | nothing from the kit | kept |
| Text link | `.link` | 1 | Tone: pink, quiet, hi (white). Content: in running text (the text's size), standing alone with an arrow. Size of the standing link: S 12, M 13, L 16. Press floor `--tap`, 40px. | 42: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept; `--s`, `--l`, `--tap` new, `--hi` a tone only |
| Rare mark | `.rare-mark` | 1 | One form, its turn and steps set by the script on a rare drop. | set by a script, not counted at load | not counted | nothing from the kit | new, D-265 (Q6): laid by the Feed tile, the Drop card and the Case stage; built first in round 3 |

#### Level 2, molecules (23)

| Component | Class | Level | Axes and values | Coloured | Grey pages | Contains | Since step 2 |
|---|---|---|---|---|---|---|---|
| Amount field | `.amount` | 2 | One form. | 3: Deposit | 3 | Text field, Segmented control | kept; D-265: Contains read from the coloured markup |
| Breadcrumb | `.crumb` | 1 | Emphasis by its ground: plain, lit (on a coloured band), fit (in the case head). Content: the way back only (`--back`, a phone; verify at step 6). | 33: Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in | 74 | nothing from the kit | kept; D-265: Contains read from the coloured markup; level 1 by the recount |
| Case tile | `.case-tile` | 2 | Data: the case's colour (pink, blue, violet, gold, ember). | 8: Catalogue, Home | 8 | Media slot, Favourite toggle, Icon | kept; D-265: Contains read from the coloured markup |
| Category bar | `.catbar` | 2 | One form, sticky. Its run is a Segmented control; its two glyph acts are the Button's tile at the 44px floor. | 7: Catalogue | 7 | Button, Icon, Badge, Segmented control | kept |
| Chosen method | `.chosen` | 2 | One form. | 7: Deposit | 7 | Button | kept; D-265: Contains read from the coloured markup |
| Copyable value | `.copy-value` | 2 | Content: a block, inline, a long address with its QR. | 10: Case, Deposit, Provably fair, Sign in | 22 | Button | kept; D-265: Contains read from the coloured markup |
| Daily ladder | `.daily` | 2 | Content: as a guest sees it, as an account sees it. Data: the tier. | 7: Catalogue, Home | 7 | Media slot, Button, Icon | kept; its live act back to the Button M; D-265: Contains read from the coloured markup |
| Drop card | `.drop-card` | 2 | Data: tier 1 to 7. Content: a card, a row (`--row`, verify at step 6), the fit form on narrow widths. | 11: Case, Deposit, Sign in | 13 | Media slot, Text link, Figure, Key-value line, Rare mark | kept; its facts are `kv--fact`, its market link `link--quiet`; D-265: Contains read from the coloured markup |
| Empty state | `.empty` | 2 | Content: nothing yet, gone (`--gone`, verify at step 6). | 2: Catalogue, My items | 12 | Button, Text link, Icon, Note line | kept; D-265: Contains read from the coloured markup |
| Event banner | `.banner` | 2 | One form. | 2: Home | 2 | Media slot, Button | kept |
| Feed tile | `.feed-tile` | 2 | Data: the skin's tier; a rare drop's mark, set by the script. | 39: Case, Catalogue, Deposit, Home, My items, Provably fair, Sign in | 104 | Media slot, Avatar, Icon, Rare mark | kept; D-265: Contains read from the coloured markup |
| Filter chip | `.chip` | 2 | One form. | 2: Catalogue | 2 | Button | kept |
| Hero | `.hero` | 1 | One form. | 2: Home | 2 | nothing from the kit | kept; D-265: Contains read from the coloured markup; level 1 by the recount |
| Item card | `.item-card` | 2 | Data: tier. Content: my items, ledger, public shelf. Chosen and sold are states. | 3: My items | 6 | Media slot, Checkbox, Button, Figure, Icon, Key-value line, Note line | kept; its acts back to the Button S; D-265: Contains read from the coloured markup |
| Mode card | `.mode-card` | 2 | Data: the mode. Content: side, stacked (`--stack`, verify at step 6). | 2: Home | 2 | Button | kept; D-265: Contains read from the coloured markup |
| Outcome card | `.outcome` | 2 | Data: tier. Content: one round, a batch. | 1: Case | 4 | Media slot, Button, Figure, Icon | kept; D-265: Contains read from the coloured markup |
| Popover menu | `.popover` | 1 | Content: language list, select list (`--select`, the former Select). | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | nothing from the kit | kept; the Select merged in, the account form split out; D-265: Contains read from the coloured markup; level 1 by the recount |
| Account menu | `.account-menu` | 2 | One form: the head (avatar XL, name, two figures), the rows, Sign out. | 27: Case, Catalogue, Deposit, Home, My items, Responsible play | 85 | Avatar, Button, Icon | new, split from the Popover menu by its head; D-265: Contains read from the coloured markup |
| Recent drop card | `.recent-drop` | 2 | Data: tier. Its avatar is the Avatar L; the tier ring is the card's. | 11: Case, Deposit, Sign in | 13 | Media slot, Figure, Avatar | kept |
| Section head | `.sec-head` | 2 | Size: M, L. Data: the mode's colour. | 38: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 59 | Text link, Badge, Icon | kept; D-265: Contains read from the coloured markup |
| Withdraw item | `.withdraw-item` | 2 | One form. | none | 5 | Media slot, Figure, Key-value line, Icon | kept; stands on no coloured screen yet, waits for the rollout; D-265: Contains read from the coloured markup |
| Money strip | `.money-strip` | 2 | Content: Before you spend (Home: the strip and the Every round plate), What this case pays (the case: the strip and four panels). | 13: Case, Deposit, Home, Sign in | 37 (`wf-figs`, generic) | Button, Icon, Note line | new, from the one-off `.spend` on two screens; D-265: Contains read from the coloured markup |
| Payment record | `.payment-record` | 2 | One form: the payment's lines, the line that decides last, its acts. | 1: Deposit | 5 | Key-value line, Note line, Button, Text link | new, from the one-off `.record`, also support's upheld state; D-265: Contains read from the coloured markup |

#### Level 3, organisms (25)

| Component | Class | Level | Axes and values | Coloured | Grey pages | Contains | Since step 2 |
|---|---|---|---|---|---|---|---|
| Field | `.field` | 2 | Content: a label over a control, a row, a declaration. Size: M, roomy. | 28: Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in | 29 | Text field, Popover menu, Text area, Checkbox, Switch, Button, Note line | kept; rises from 2 to 3: its select is now the Popover menu, a molecule; D-265: level 2 by the recount |
| Account head | `.account-head` | 2 | Content: plain (the other account pages), stage (My items, D-242). | 4: My items | 28 | Breadcrumb, Avatar, Figure, Button, Badge, Tabs, Media slot | kept; D-265: level 2 by the recount |
| Bottom bar | `.bottom-bar` | 3 | One form. | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 132 | Icon | kept |
| Case grid | `.case-grid` | 3 | Content: Home's row of five, the catalogue's shelf. | 8: Catalogue, Home | 8 | Section head, Case tile | kept |
| Case stage | `.case-stage` | 3 | One form. Data: the tier, set by the drop. | 11: Case, Deposit, Sign in | 13 | Media slot, Outcome card, Button, Rare mark | kept; D-265: Contains read from the coloured markup |
| Commit block | `.commit` | 3 | One form. | 11: Case, Deposit, Sign in | 13 | Figure, Segmented control, Button, Copyable value, Text link | kept; its priced start moves into `button--priced` |
| Data table | `.data-table` | 3 | Content: the drop table, a ledger (waits for history, 5.9). | 11: Case, Deposit, Sign in | 24 | Drop card, Note line, Text link, Empty state | kept; D-266 (Q6): read from the coloured markup, no Badge; the Figure is the Drop card's |
| Footer | `.footer` | 3 | One form. | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 133 | Figure, Logo, Button, Icon, Popover menu (its links are its own) | kept; D-266 (Q6): read from the coloured markup, level 3 as shell |
| Header | `.header` | 3 | Content: guest, signed in. | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 132 | Button, Figure, Badge, Account menu | kept; holds the Account menu |
| Item grid | `.item-grid` | 3 | One form. | 4: My items | 6 | Item card, Segmented control | kept |
| Mode row | `.mode-row` | 3 | One form. | 2: Home | 2 | Mode card | kept |
| Rail | `.rail` | 3 | One form; open, closed. | 51: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | 132 | Logo, Icon, Button, Popover menu | kept |
| Recent drops | `.recent-drops` | 3 | One form. | 11: Case, Deposit, Sign in | 13 | Recent drop card | kept |
| Status notice | `.notice` | 3 | Tone: in progress, stopped, failed with a reference. | 6: Deposit, Sign in | 22 | Key-value line, Figure, Button, Copyable value, Status steps | kept |
| Ticker | `.ticker` | 3 | One form; running, paused. | 39: Case, Catalogue, Deposit, Home, My items, Provably fair, Sign in | 104 | Feed tile | kept |
| How this case works | `.case-how` | 3 | One form: the prose on its plate beside the ticket ruler. | 17: Case, Deposit, Provably fair, Sign in | 37 (`wf-prose`, generic) | Section head, Icon, Note line (its prose is its own type) | D-266 (Q6): read from the coloured markup, no Prose; new, from the one-off `.how` with `.ruler` on two screens |
| Proof fields | `.proof-fields` | 3 | Content: what each field means (Provably fair), the round's own values with Copy (the public result). | 6: Provably fair | 11 | Key-value line, Copyable value | new, from the one-off `.fair-made`; the Proof block's field set |
| Deposit dock | `.dock` | 3 | One form. | 5: Deposit | 6 | Figure, Key-value line, Field, Button, Note line | kept |
| Limits panel | `.limits` | 3 | One form. | 5: Responsible play | 4 | Field, Key-value line, Button, Note line, Popover menu | kept |
| Verify form | `.verify` | 3 | One form. | 6: Provably fair | 6 | Field, Copyable value, Button | kept |
| Proof block | `.proof` | 3 | One form, on the public result (7.1). | none | 11 | Proof fields, Copyable value, Key-value line, Badge, Button | kept; holds the Proof fields |
| Case head | `.case-head` | 3 | One form. | 11: Case, Deposit, Sign in | 13 | Favourite toggle, Note line, Case stage | kept |
| Sign-in block | `.signin` | 3 | Content: page, dialog. | 7: Sign in | 7 | Field, Button, Status notice | kept |
| Payment panel | `.pay-panel` | 3 | One form, two steps. | 9: Deposit | 9 | Chosen method, Amount field, Field, Copyable value, Deposit dock, Status notice | kept |
| Dialog | `.dialog` | 3 | Content: sign in, a plain question, deposit, cash out, the filter drawer at the right edge. | 11: Catalogue, Deposit, My items, Responsible play, Sign in | 9 | Button, Sign-in block, Payment panel, Field, Copyable value | kept |

### The rename map

Step 6 executes it: each row says which class the screens wear today, what they wear after, which coloured states carry the old form and which grey pages stage 12 will meet it on. The kinds: a **merge** or **split** changes the count of components; **one-off to component** keeps the look and changes the name; a **local rule to variant** moves a rule written in one block on another component's class into that component as a named variant, so the block no longer restyles it; **back to the family** removes a local rule and lets the family's value stand; **value, merged drift** changes a value and is named in `tokens-audit.md`, "Merged drift (step 3)".

| # | Today | After | Kind | Coloured, where the old form stands | Grey pages, for stage 12 |
|---|---|---|---|---|---|
| 1 | `.select`, `.select--l` | `.popover--select` | merge | none of the 51 states | `select` element, 24 pages |
| 2 | `.popover--account` (its head, rows and Sign out) | `.account-menu` | split | 27 of 51 states: Case, Catalogue, Deposit, Home, My items, Responsible play | `wf-acct-wrap`, 85 pages |
| 3 | `.spend`, `.spend--pays` and their elements | `.money-strip`, `.money-strip--pays` | one-off to component | 13 of 51 states: Case, Deposit, Home, Sign in | `wf-figs`, 37 pages, generic |
| 4 | `.record` and its elements | `.payment-record` | one-off to component | 1 of 51 states: Deposit | `wf-total`, 5 pages |
| 5 | `.how`, `.ruler` and their elements | `.case-how`, `.case-how__ruler` | one-off to component | 17 of 51 states: Case, Deposit, Provably fair, Sign in | `wf-prose`, 37 pages, generic |
| 6 | `.fair-made` and its elements | `.proof-fields`; the Proof block's set `.proof-fields--values` | one-off to component | 6 of 51 states: Provably fair | `wf-proof-fields`, 11 pages |
| 7 | `.selbar__a` at 360 (glyph over label, 11px) | `.button--stack` | local rule to variant | 3 of 51 states: My items | `wf-actb`, 2 pages |
| 8 | `:is(.commit__go, .commit__wide).button--priced` start at 360 | the rule moves into `.button--priced` | local rule to variant | 9 of 51 states: Case, Deposit, Sign in | `wf-commit`, 20 pages |
| 9 | `.daily__tier.is-live > .button` (sides 10px; 12px words at 360) | `.button--m` as the family draws it; its label "Open case", the case named in its accessible name (`D-265`, Q3: microcopy 1.0-17) | back to the family | 9 of 51 states: Catalogue, Home | `wf-panel`, 15 pages |
| 10 | `.item-card > .button`, `.item-card__acts > .button` (sides 4px) | `.button--s` as the family draws it (sides 14px) | back to the family | 3 of 51 states: My items | `wf-inv-card`, 2 pages |
| 11 | `.catbar__acts > .button` (its own sides and glyph size) | **withdrawn at `D-265` (Q2):** the acts stay the ghost Button M with `.button--tap`; the bar folds the word under 1200px and sizes the glyph, its own placing of what it holds (the icon tile would have dropped the words from 1200px) | none | 7 of 51 states: Catalogue | `wf-catbar`, 7 pages |
| 12 | `.catbar__run > .seg__opt[aria-current="true"]` | the chosen look of `.seg__opt` itself | rule moves into the atom | 7 of 51 states: Catalogue | `wf-catbar`, 7 pages |
| 13 | `.button--fill` (width 100%) | width set by `.rail__amb-i`, the rail's sound cell | moved to its container | 51 of 51 states: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | `wf-rail-snd`, 132 pages |
| 14 | `.fig--end` (align to the end) | alignment set by `.commit__act` | moved to its container | 10 of 51 states: Case, Deposit, Sign in | `wf-commit`, 20 pages |
| 15 | `.recent-drop__who .avatar` (52px, `--recent-drop-avatar`) | `.avatar--l` | local rule to variant | 11 of 51 states: Case, Deposit, Sign in | `wf-r-art`, 20 pages |
| 16 | `.avatar--l` (64px) on the account head | `.avatar--xl` | rename | 4 of 51 states: My items | `wf-ah`, 29 pages |
| 17 | `.popover__head .avatar` (64px, `--popover-avatar`) | `.avatar--xl` inside `.account-menu` | local rule to variant | 27 of 51 states: Case, Catalogue, Deposit, Home, My items, Responsible play | `wf-acct-wrap`, 85 pages |
| 18 | `.link--hi` (white at a chip's size) on the Steam state | `.link--hi` (tone only) with `.link--s` | one variant split in two axes | 4 of 51 states: My items | none, the grey's sub line (`D-240`) |
| 19 | `.account-head__id .link` (quiet turned white) | `.link--hi` | local rule to variant | 4 of 51 states: My items | `wf-ah-id`, 29 pages |
| 20 | `.sec-head__sub .link--arrow`, `.works__i > .link` (16px) | `.link--l` | local rule to variant | 15 of 51 states: Case, Deposit, My items, Sign in | `wf-sec-head`, 74 pages; `wf-open-list`, 1 page |
| 21 | `.involves__acts .link`, `.faq__list .link`, `.fair-algo__go > .link` (press grown to 40px) | `.link--tap` | local rule to variant | 8 of 51 states: Home, Provably fair | `wf-faq`, 9 pages; `wf-algo`, 6 pages |
| 22 | `.drop-card__mkt.link` (restyled pink link) | `.link--quiet` in its text | local rule to variant | 10 of 51 states: Case, Deposit, Sign in | `wf-d-weapon`, 20 pages |
| 23 | `.drop-card .kv`, `.drop-card .kv__k`, `.drop-card__t .kv__v` | `.kv--fact` | local rule to variant | 11 of 51 states: Case, Deposit, Sign in | `wf-d-weapon`, 20 pages |
| 24 | `.record__lines > .kv` (larger lines) | `.kv` at M inside `.payment-record` | local rule to variant | 1 of 51 states: Deposit | `wf-total`, 5 pages |
| 25 | `.limits__answer:not(.note--refuse)` (a saved limit in white) | `.note--hi` | local rule to variant | 5 of 51 states: Responsible play; the panel stands there, its answer is written by `rp.js` after a press | `wf-rp`, 5 pages |
| 26 | `.spend__note`, `.observed > .note` (16px) | `.note--l` | local rule to variant | 11 of 51 states: Case, Deposit, Sign in | `wf-figs`, 37 pages, generic; `wf-table`, 31 pages |
| 27 | `.account-head` rules on its `.tabs` (the plate, the pink glow under the current tab) | `.tabs--plate` | local rule to variant | 4 of 51 states: My items | `wf-atabs`, 29 pages |
| 28 | the Figure's value sized by seven containers (`.dock__sum`, `.drop-card__v`, `.recent-drop__v`, `.outcome__v`, `.withdraw-item__b`, `.account-head__figs`, the fig's own L) | Figure size variants by container: `.fig--xs`, `.fig`, `.fig--m`, `.fig--title`, `.fig--l`, `.fig--head`, `.fig--win` (`D-262`) | local rules to variants, names at step 4 | 51 of 51 states: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | `wf-fig`, 133 pages |
| 29 | `.input[aria-invalid="true"]`, `.textarea[aria-invalid="true"]` read `--color-down` | read `--color-error` | value, merged drift | 6 of 51 states: Provably fair; the Verify form stands there, the ring is set by `fair.js` on a malformed entry | `wf-vf`, 6 pages |
| 30 | `--shadow-tile-edge` at white .05 | the tile edge at white .07, one role with `--shadow-edge` | value, merged drift | 51 of 51 states: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in | every grey page, the edge has no grey form |

**The screens' own blocks keep their classes and move house**, by `D-259`: seventeen blocks of `kit.css` part 4.4 go to `design/system/screens/`, loaded after the organisms and not listed on the stand as components.

| File | Blocks (classes) |
|---|---|
| `design/system/screens/home.css` | What opening a case here involves `.involves`, Questions and answers `.faq`, About Clutch `.about` |
| `design/system/screens/case.css` | Before you open `.before`, Published against observed `.observed` |
| `design/system/screens/fair.css` | the page's head `.fair-head` with `.fair-scope`, If your check does not match ours `.fair-miss`, The algorithm published in full `.fair-algo` |
| `design/system/screens/deposit.css` | The ways to pay `.methods`, What still works `.works` |
| `design/system/screens/account.css` | the Selection bar `.selbar`, the Cash out form `.cashout`, the Steam state `.steam-state` |
| `design/system/screens/catalogue.css` | the catalogue's head `.shelf-head`, Filters in force `.shelf-state`, the filter drawer `.filter-drawer` with its stepper `.stepper` and risk marks `.risk-marks` |
| `design/system/screens/responsible.css` | Responsible play's head `.rp-head` |

### What goes

| Class | What happens | Evidence |
|---|---|---|
| `.button--arrow` | deleted | declared in BUTTON; worn by none of the 51 states; the grey has no button with an arrow after its label (the control census above, Variants by family) |
| `.select`, `.select--l` | deleted, with `.select` in the refusal ring rule | worn by none of the 51 states; every grey `select` maps to the Popover menu's select form since `D-238` |
| `.button--fill` | moved to `.rail__amb-i` | worn by 51 of 51 states: Case, Catalogue, Deposit, Home, My items, Provably fair, Responsible play, Sign in, always inside the rail's sound cell; width is layout, not an axis |
| `.fig--end` | moved to `.commit__act` | worn by 10 of 51 states: Case, Deposit, Sign in, always inside the commit block's act; alignment is layout |

**To verify at step 6**, declared and worn by no coloured state at load, but possibly set by a script or needed by a grey page drawn at the rollout; each is kept, wired or deleted there, by the third list of the reconcile: `.badge--bad`; `.fig--up`, `.fig--down`; the glyphs `calendar`, `close`, `crown`, `like`, `mute`, `rail`, `skull`; `.media--banner`, `.media--square`, `.media--wide`; `.crumb--back`; `.empty--gone`; `.mode-card--stack`; `.drop-card--row`.

### Controls without a form, closed

Step 1 found eleven grey variants with no form in colour, ten after the row on the ghost L was withdrawn at step 2 (`census.md`); the review pages of this step closed them with the Breadcrumb S, the large field label and the legal table of contents the walk named beside them. Six are closed by a form the kit already has; four go to `design/kit/docs/backlog.md` at step 6, drawn with their screen at the rollout.

| Grey variant | Where | Closed by |
|---|---|---|
| Checkbox alone | the cookie layer, 0.4 | the Checkbox's form without a label, as the item card's tick |
| Radio in a large row | a Steam offer, 5.3 | a radio in a choice tile, with the Payment panel's provider tile values |
| Radio, small | a sticker count 0 to 3, 5.3 | the Segmented control S |
| Text link L standing for a figure | withdraw, 5.3 | the Figure's link form |
| Switch | settings, 5.11 | the kit's own form, on the showcase; settings arrives with the rollout |
| Breadcrumb, small | support, 0.10 | the Breadcrumb as it is |
| File picker | support, 0.10 | backlog, anatomy named: a read-only Text field with the file's name and a ghost S Choose a file |
| Text area with an attached file | support, 0.10 | backlog: a Text area followed by the File picker, nothing new |
| Field label, large | support's questions, 0.10 | backlog: the Field at its roomy size |
| A legal page's table of contents | 0.9 | backlog: the Footer's link form in one column, the current section in white |

## Stage 08 step 5: the components built

One row per component as each is built, in the order of its round: its level, its file in `design/system/`, its page in `design/kit/`, its states, where it stands. Its visible place is the hub, `design/kit/overview.html`, section "Inventory", which reads the stand's registry (`design/kit/_nav.js`).

| Component | Level | Round | CSS file | Page | States | Stands on |
|---|---|---|---|---|---|---|
| Button | 1 | 0, the reference | `design/system/components/button.css` | `design/kit/button.html` | hover, active, focus-visible, disabled (primary only, D-239); busy | all eight coloured screens |
| Text link | 1 | 1, the atoms | `design/system/components/text-link.css` | `design/kit/text-link.html` | hover, focus-visible | all eight coloured screens |
| Disclosure | 1 | 1, the atoms | `design/system/components/disclosure.css` | `design/kit/disclosure.html` | focus-visible, open ([open]) | Home, Deposit, Provably fair (and the footer's questions) |
| Favourite toggle | 1 | 1, the atoms | `design/system/components/favourite-toggle.css` | `design/kit/favourite-toggle.html` | hover, focus-visible, pressed (aria-pressed) | Home, the case screen, the catalogue, Deposit, Sign in |
| Tabs | 1 | 1, the atoms | `design/system/components/tabs.css` | `design/kit/tabs.html` | hover, active, focus-visible | My items |
| Segmented control | 1 | 1, the atoms | `design/system/components/segmented-control.css` | `design/kit/segmented-control.html` | hover, active, focus-visible | Case, Deposit, My items, Catalogue (the category bar, an option as a link) |
| Text field | 1 | 1, the atoms | `design/system/components/text-field.css` | `design/kit/text-field.html` | focus-visible, refusal (aria-invalid); no hover, as kit.css | Catalogue, Deposit, My items, Provably fair, Responsible play |
| Text area | 1 | 1, the atoms | `design/system/components/text-area.css` | `design/kit/text-area.html` | focus-visible, refusal (aria-invalid); no hover, as kit.css | Provably fair |
| Checkbox | 1 | 1, the atoms | `design/system/components/checkbox.css` | `design/kit/checkbox.html` | hover, focus-visible; ticked (:checked) | Catalogue, Deposit, My items (the Field's declaration also stands on the case screen and Sign in, inside dialogs) |
| Radio | 1 | 1, the atoms | `design/system/components/radio.css` | `design/kit/radio.html` | hover, focus-visible; chosen (:checked) | Deposit |
| Switch | 1 | 1, the atoms | `design/system/components/switch.css` | `design/kit/switch.html` | focus-visible; on (:checked); no hover | none yet: settings (5.11) arrive with the rollout |
| Range | 1 | 1, the atoms | `design/system/components/range.css` | `design/kit/range.html` | focus-visible | Catalogue |
| Figure | 1 | 1, the atoms | `design/system/components/figure.css` | `design/kit/figure.html` | focus-visible (the link form only); the figure itself is not interactive | all eight coloured screens |
| Key-value line | 1 | 1, the atoms | `design/system/components/key-value-line.css` | `design/kit/key-value-line.html` | none, not interactive | Case, Deposit, My items, Provably fair, Responsible play, Sign in |
| Note line | 1 | 1, the atoms | `design/system/components/note-line.css` | `design/kit/note-line.html` | none, not interactive | Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in |
| Prose | 1 | 1, the atoms | `design/system/components/prose.css` | `design/kit/prose.html` | none, not interactive | Catalogue, Responsible play |
| Badge | 1 | 1, the atoms | `design/system/components/badge.css` | `design/kit/badge.html` | none, not interactive | Home, Case, Catalogue, Deposit, My items, Provably fair (6 of 8 coloured screens) |
| Status steps | 1 | 1, the atoms | `design/system/components/status-steps.css` | `design/kit/status-steps.html` | none, not interactive | Deposit |
| Icon | 1 | 1, the atoms | `design/system/components/icon.css` | `design/kit/icon.html` | story form on the host's hover and focus-visible; the plain glyph is not interactive | all eight coloured screens |
| Logo | 1 | 1, the atoms | `design/system/components/logo.css` | `design/kit/logo.html` | none, not interactive | all eight coloured screens |
| Avatar | 1 | 1, the atoms | `design/system/components/avatar.css` | `design/kit/avatar.html` | none, not interactive | all eight coloured screens |
| Media slot | 1 | 1, the atoms | `design/system/components/media-slot.css` | `design/kit/media-slot.html` | none, not interactive | Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in (7 of 8 coloured screens) |
| Case tile | 2 | 2, the molecules | `design/system/components/case-tile.css` | `design/kit/case-tile.html` | hover, focus-visible (the face link), the bolts' hover, favourite on (aria-pressed), skeleton (aria-busy) | Home, Catalogue (8 pages) |
| Drop card | 2 | 2, the molecules | `design/system/components/drop-card.css` | `design/kit/drop-card.html` | hover | Case, Deposit, Sign in (11 coloured states) |
| Recent drop card | 2 | 2, the molecules | `design/system/components/recent-drop-card.css` | `design/kit/recent-drop-card.html` | hover, focus-visible | Case, Deposit, Sign in (11 coloured states) |
| Feed tile | 2 | 2, the molecules | `design/system/components/feed-tile.css` | `design/kit/feed-tile.html` | hover, focus-visible (face), focus-visible (back face link), rare drop live (class set by the script) | all seven coloured screens that carry the ticker: Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in |
| Item card | 2 | 2, the molecules | `design/system/components/item-card.css` | `design/kit/item-card.html` | hover, focus-visible (focus inside), ticked (:checked) | My items |
| Mode card | 2 | 2, the molecules | `design/system/components/mode-card.css` | `design/kit/mode-card.html` | hover | Home |
| Outcome card | 2 | 2, the molecules | `design/system/components/outcome-card.css` | `design/kit/outcome-card.html` | none, not interactive (its batch Sell is the Button) | The case screen at its outcome |
| Withdraw item | 2 | 2, the molecules | `design/system/components/withdraw-item.css` | `design/kit/withdraw-item.html` | none, not interactive | none yet (waits for the rollout of the withdrawal screens) |
| Amount field | 2 | 2, the molecules | `design/system/components/amount-field.css` | `design/kit/amount-field.html` | none, not interactive (its states are the Text field's and the Segmented control's) | Deposit (the card route) |
| Copyable value | 2 | 2, the molecules | `design/system/components/copyable-value.css` | `design/kit/copyable-value.html` | none, not interactive (Copy has the Button's states); the copied answer is shown as the script writes it | Deposit (the crypto address), Case (the seed hash), Provably fair, Sign in (the reference) |
| Filter chip | 2 | 2, the molecules | `design/system/components/filter-chip.css` | `design/kit/filter-chip.html` | none, not interactive (the cross has the Button's states) | Catalogue (Filters in force) |
| Chosen method | 2 | 2, the molecules | `design/system/components/chosen-method.css` | `design/kit/chosen-method.html` | none, not interactive (the Back tile has the Button's states) | Deposit (the route pages and the Add funds dialog) |
| Popover menu | 1 | 2, the molecules (an atom since D-265) | `design/system/components/popover-menu.css` | `design/kit/popover-menu.html` | focus-visible (trigger, option), hover (option); open (aria-expanded), chosen (aria-current, aria-selected), set by kit.js | all eight coloured screens (the rail's language); Deposit (country, network), Responsible play (periods) |
| Account menu | 2 | 2, the molecules | `design/system/components/account-menu.css` | `design/kit/account-menu.html` | focus-visible (pill, Copy, tile, Sign out), hover (Copy, tile, My items, Responsible play, Sign out); open (aria-expanded), Copied (.is-done), Not copied (.is-fail), set by kit.js | Case, Catalogue, Deposit, Home, My items, Responsible play (27 of 51 states, signed in) |
| Breadcrumb | 1 | 2, the molecules (an atom since D-265) | `design/system/components/breadcrumb.css` | `design/kit/breadcrumb.html` | hover, focus-visible | the case screen, the catalogue, My items, Provably fair, Responsible play (inventory also lists Deposit and Sign in, which carry the case screen's crumb behind their layers) |
| Category bar | 2 | 2, the molecules | `design/system/components/category-bar.css` | `design/kit/category-bar.html` | none of its own; the option's focus ring offset is the bar's (one snapshot) | the catalogue |
| Section head | 2 | 2, the molecules | `design/system/components/section-head.css` | `design/kit/section-head.html` | none, not interactive (its onward link is the Text link's) | all eight coloured screens: Home, the case screen, the catalogue, Deposit, My items, Provably fair, Responsible play, Sign in |
| Daily ladder | 2 | 2, the molecules | `design/system/components/daily-ladder.css` | `design/kit/daily-ladder.html` | hover on a tier and on the live tier (the open control is the Button's) | Home, the catalogue (7 states) |
| Event banner | 2 | 2, the molecules | `design/system/components/event-banner.css` | `design/kit/event-banner.html` | hover (the scene flares, the soldier leans); the act's own states are the Button's | Home, design/index.html |
| Hero | 1 | 2, the molecules (an atom since D-265) | `design/system/components/hero.css` | `design/kit/hero.html` | none, not interactive (the badge is a picture; its hover is motion) | Home |
| Empty state | 2 | 2, the molecules | `design/system/components/empty-state.css` | `design/kit/empty-state.html` | none, not interactive | the catalogue (nothing matches), My items (nothing yet); --gone on no coloured screen |
| Money strip | 2 | 2, the molecules | `design/system/components/money-strip.css` | `design/kit/money-strip.html` | hover, focus-visible (links only) | Home, the case screen, Deposit, Sign in |
| Payment record | 2 | 2, the molecules | `design/system/components/payment-record.css` | `design/kit/payment-record.html` | none, not interactive | Deposit |
| Rare mark | 1 | 3a (an atom by D-265, Q6) | `design/system/components/rare-mark.css` | `design/kit/rare-mark.html` | none, not interactive (laid on by motion.js by the host's data-chance: .is-mark-a, -b, -c) | the ticker on Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in; on Case also the Drop cards and the Case stage's run cards |
| Field | 2 | 3a (a molecule by D-265, Q5) | `design/system/components/field.css` | `design/kit/field.html` | hover and focus-visible (the sentence's links); ticked (:checked) and named as missing (.is-missing, set by kit.js and pay.js); the controls' own states are the atoms' | Deposit, Provably fair, Responsible play, Sign in, My items (Cash out), the catalogue's filters (41 of 45 coloured pages, the Add funds dialog's fields among them) |
| Account head | 2 | 3a (a molecule by D-265, Q5) | `design/system/components/account-head.css` | `design/kit/account-head.html` | hover, focus-visible (the no-Steam chip, a link to Settings); the stage's tier, its hidden skin, a pistol drawn short (.is-short) and the words are set by items.js | My items (account, account-empty, account-degraded) |
| Header | 3 | 3a, the organisms | `design/system/components/header.css` | `design/kit/header.html` | focus-visible (a figure; the burger under 900px, with hover); open (the burger's aria-expanded, the account's sheet lifting the layer), set by kit.js | all eight coloured screens, guest and signed in |
| Rail | 3 | 3a, the organisms | `design/system/components/rail.css` | `design/kit/rail.html` | hover, focus-visible (row, toggle, logo; the closed rail's chips); current (aria-current); open, closed (.is-closed), over the page (.is-overlay), the drawer (.is-open), set by kit.js | all eight coloured screens |
| Bottom bar | 3 | 3a, the organisms | `design/system/components/bottom-bar.css` | `design/kit/bottom-bar.html` | hover, focus-visible, current (aria-current="page", set by the screen's markup); not drawn from 900px | all eight coloured screens, under 900px: Home, Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in |
| Footer | 3 | 3a, the organisms | `design/system/components/footer.css` | `design/kit/footer.html` | hover (counter, link, plate, payment card), focus-visible (counter, link, plate, payment card, Cookie settings); the counters' and the round plate's marks play the Icon's story under the pointer (motion.js dresses them) | all eight coloured screens: Home, Case, Catalogue, Deposit, My items, Provably fair, Responsible play, Sign in |
| Case grid | 3 | 3a, the organisms | `design/system/components/case-grid.css` | `design/kit/case-grid.html` | none, not interactive (tiles, tips and Favourite toggles keep their own); a filtered-out cell or section wears hidden, set by catalogue.js | Home (Featured cases), the catalogue (every section, 7 states) |
| Item grid | 3 | 3a, the organisms | `design/system/components/item-grid.css` | `design/kit/item-grid.html` | none, not interactive (the sort keys are the Segmented control's; items.js sets aria-pressed, data-dir, their words and the list's order) | My items (account, account-empty, account-degraded) |
| Mode row | 3 | 3a, the organisms | `design/system/components/mode-row.css` | `design/kit/mode-row.html` | none, not interactive (the live card's act is the Button's, the lift and the art the Mode card's) | Home |
| Recent drops | 3 | 3a, the organisms | `design/system/components/recent-drops.css` | `design/kit/recent-drops.html` | none drawn on a screen (the cards are links with the Recent drop card's states); the strip's :focus-visible ring is carried | the case screen (4 states), Deposit and Sign in (the case's block under their dialogs) |
| Ticker | 3 | 3a, the organisms | `design/system/components/ticker.css` | `design/kit/ticker.html` | running (dot), hover and focus-within (the pause in the dot's place), pause hover and focus-visible; paused (.is-held, the pause's words Resume) and a drop arriving (.is-new), set by kit.js | seven coloured screens: Home, Case, Catalogue, Deposit, My items, Provably fair, Sign in |
| Case stage | 3 | 3a, the organisms | `design/system/components/case-stage.css` | `design/kit/case-stage.html` | none of its own for the pointer or the keyboard (a batch prize's Sell is the Button's); its phases are set by stage.js: data-phase open and won, data-spin run, slow, land, --stage-charge, .case-stage--played, .is-landed, .is-at, .is-won, .is-leaving | Case (case.html, case-degraded, case-interrupted, case-nocounter), inside the Case head; Deposit and Sign in as layers over it |
| Commit block | 3 | 3a, the organisms | `design/system/components/commit-block.css` | `design/kit/commit-block.html` | focus-visible (Round details); guest, funded, short, open, outcome, interrupted set by stage.js as data-state | the case screen, Deposit, Sign in (the case in their dialogs) |
| Data table | 3 | 3a, the organisms | `design/system/components/data-table.css` | `design/kit/data-table.html` | none, not interactive (a ledger row's data-state="mismatch" is data) | the case screen, Deposit, Sign in (the case in their dialogs); the ledger waits for history (5.9) |
| How this case works | 3 | 3a, the organisms | `design/system/components/case-how.css` | `design/kit/case-how.html` | none, not interactive; .is-on and .is-still set by motion.js | the case screen, Provably fair, Deposit, Sign in (the case in their dialogs) |
| Proof fields | 3 | 3a, the organisms | `design/system/components/proof-fields.css` | `design/kit/proof-fields.html` | none, not interactive | Provably fair; --values waits for the public result (7.1) |
| Deposit dock | 3 | 3a, the organisms | `design/system/components/deposit-dock.css` | `design/kit/deposit-dock.html` | none, not interactive; the refusal above the act and the terms row's .is-missing are written by pay.js | Deposit (card, crypto, skins, declined, a raise pending) and the Add funds dialog, carried in the markup of 33 of 45 coloured pages |
| Limits panel | 3 | 3a, the organisms | `design/system/components/limits-panel.css` | `design/kit/limits-panel.html` | none, not interactive; the answer to a press (.note--hi saved, .note--refuse refused) and the said status line (.is-said) are written by rp.js | Responsible play: none set, in force, excluded, the confirmation (4 of 45 coloured pages; the guest view is the first by query) |
| Verify form | 3 | 3a, the organisms | `design/system/components/verify-form.css` | `design/kit/verify-form.html` | none, not interactive; fair.js writes the refusals under the fields (aria-invalid), the result area and the form's own line | Provably fair: empty, prefilled, malformed, matched, failed, unavailable (6 of 45 coloured pages) |
| Status notice | 3 | 3a, the organisms | `design/system/components/status-notice.css` | `design/kit/status-notice.html` | none, not interactive; the tone (--progress, --stopped, --failed) is in the markup it arrives with | Deposit (crediting, declined, a limit reached, a raise pending), Sign in (Steam refused, Steam unavailable): 6 of 45 coloured pages |
| Proof block | 3 | 3b, the organisms that hold one | `design/system/components/proof-block.css` | `design/kit/proof-block.html` | focus-visible (the scope line's link); the round's state (settled, matched, mismatched, no proof, failed) is content, the badge's words and the well's lines the product writes | no coloured screen yet; the public result (7.1) waits for the rollout |
| Case head | 3 | 3b, the organisms that hold one | `design/system/components/case-head.css` | `design/kit/case-head.html` | none, not interactive (the favourite, the crumb and How it works keep their own; the stage's phases are set by stage.js on the stage) | the case screen (case, degraded, interrupted, no counter), under Deposit and Sign in as layers |
| Sign-in block | 3 | 3b, the organisms that hold one | `design/system/components/signin-block.css` | `design/kit/signin-block.html` | asked, one of two, both made: set by kit.js (.is-missing and aria-invalid on the row, the Note line in .signin__why); no hover, focus or press of its own | Sign in: the page and its five states, and the sign in dialog every guest screen holds hidden: 7 coloured pages |
| Payment panel | 3 | 3b, the organisms that hold one | `design/system/components/payment-panel.css` | `design/kit/payment-panel.html` | the provider tile: hover, focus-visible, chosen (:checked, the person's press); the step is pay.js's [hidden] on the panes | Deposit: the ways to pay, card, crypto, crypto with no wallet, gift cards, skins, declined, a raise pending, and the Add funds dialog every signed-in screen holds hidden: 9 coloured pages |
| Dialog | 3 | 3b, the organisms that hold one | `design/system/components/dialog.css` | `design/kit/dialog.html` | open and closed: [hidden] on .dialog__layer, set by kit.js (shown open in a stand frame); no hover, focus or press of its own (the close and the acts are the Button's) | Sign in (the page form and the dialog), Deposit (Add funds), My items (Cash out), Responsible play (a confirm), the catalogue (the filters); the sign in and Add funds layers wait hidden on every screen |
