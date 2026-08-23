# Node 5.1. Account and inventory

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned. **Base layer code:** `S-E1`.

**URL:** `/my-items`, from `0.13`. **Indexed:** no. **Schema:** none. **Breadcrumb:** none. All four inherited from the indexation register, section 3, and not re-derived here.

**Purpose.** Show what the person actually holds, with every item carrying the receipt that makes the win checkable a week later, the money in the two figures the header already uses, and the one route out of the product.

**Jobs served.** Related Job 5, withdraw and get what I earned, `jtbd.md`. **Parent class:** barrier `B7-1`, the win that turned out to be worth less than it looked, pattern of 7, by way of rows `B7` and `F2`; and barrier `B8-4`, verification ambushes at the exit, pattern of 5, by way of row `B1`, which resolved the check before funding so that nothing on this page has to ask for it. **`D-26` parked `B1` with `2.7` and this page is unaffected either way:** it asks for nothing now because there is nothing to ask for, and it asks for nothing later because the layer that returns stands before withdrawal rather than on an inventory page. Every block below names its own parent.

**Renders:** `0.1` navigation, `0.2` footer, `0.5` toasts, `0.6` skin card, `0.11` figures. **Reads:** `0.11` for the money figures and the receipt, `0.12` through the limits statement in section 3.

**Transitions:** `5.2` inventory empty, `5.3` withdrawal. From the map, unchanged.

**Phase.** T8, the floor of the entire As-Is emotional map at `-5`. This cluster is where the product either keeps its promise or does not, and this page is its front door.

**Baseline row, `5.1`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| Four tabs as peers on one page, `INVENTORY`, `HISTORY`, `PROFILE`, `SETTINGS`. The inventory grid has two sorts, no filters and no search, and a sticky bar carrying a count, a sum and **four exits**: send to Steam, sell to site, cash out, exchange. History is **five separate histories**, three of which are empty and all three say only `History is empty...`. `baseline-account.md` sections 2 to 4. | The count and the sum of the selection, which are the same pair the header carries, and the per-item action set. | **Our map gives this node one exit and the canon has four**, and the gap narrowed twice since this row was written. **`D-38` put selling a skin back for coins in round 1**, so the second exit exists as a capability and has no placement on this page; `D-60` recorded that **the exchange for a real skin does not exist at all**, and in-platform skin-for-skin exchange stays LATER by scope. **What is still true is the shape of the finding:** the live product answers what a person does with a skin they do not want, and this node answers only what they do with one they do want. **Open item, section 8, not a divergence.** And `History is empty...` with no route is the empty state `3.2` refuses. **The four tabs are four nodes on our map since `D-36`**, `5.1`, `5.9`, `5.10` and `5.11`, so the tab strip is not inherited either. |

---

## 0.5 Amended 23 August 2026 by `D-84` and `D-85`, and the baseline row loses two of its own sentences

**The founder put the live account screen beside ours and asked for the live one.** Two things this node had argued against are now inherited, and both refusals are kept above rather than deleted, because each was right about something the reversal does not touch.

| What changed | Why |
|---|---|
| **The account band is inherited**: artwork, avatar, name, id, the two money figures and the deposit entry, on all thirteen pages of the cluster | The baseline row above said the four tabs are four nodes on our map since `D-36` "so the tab strip is not inherited either". **Four nodes on a map is not an argument against a carrier between them, it is what makes one legal**: every destination the strip promises exists on the map. The account menu is how a person enters cluster 5 from anywhere; the strip is how they move between the four once inside |
| **It is rendered by `_nav.js`, not written into thirteen files** | A strip that exists on one of four peers is a dead end on the other three, and thirteen copies of one band is thirteen places for it to drift. It is a carrier, so it is built like the other carriers |
| **The two money figures are on this screen twice, and the cost is printed rather than absorbed** | `0.1` and `CLAUDE.md` give the money to the header and the header is sticky, so on cluster 5 the same pair renders as chrome above and as the page's own subject in the band. The baseline does exactly this and the founder asked for it in as many words. **What may not happen is the two disagreeing, so both read one source** |
| **A visible breadcrumb, and this contradicts the indexation register** | Section 0 above inherits "Breadcrumb: none" from `0.13`. The baseline runs `HOME / MY ACCOUNT / INVENTORY` and the founder asked for it. It ships **as wayfinding with no `BreadcrumbList` schema**, which keeps the schema half of `0.13`'s row true and leaves the visible half false. **`0.13` owes a corrected row and this node cannot write it** |
| **The summary column is gone** | It carried the money the band now carries, wrapped one button in three paragraphs, and squeezed the grid it stood beside. The limits survive as one line above the set, which is what `G5` asks for: a limit met before the route runs rather than discovered inside it. The rest lives on `5.3`, which owns it |
| **The card is rebuilt on the baseline's shape**: artwork, weapon, skin, wear in parentheses, one price, then `Starting at` and `Offers` | Section 2 gave every card two timestamped figures and a holding line. In a grid of them that is a table with pictures, not an inventory. **The live card is read at a glance and ours had to be read** |
| **The receipt moves into the actions panel**, and section 2's rule that the two figures are never merged is untouched | `F2` and barrier `B7-1` are the whole reason this node exists, so the receipt is not cut. `B7-1` is retrospective by nature, a number that stopped being true, **so the receipt is read at the moment a person decides what to do with the item** rather than on every tile of a grid nobody is reading yet |
| **Three actions per item, revealed by selection and by hover over the whole card** | The baseline's own instruction is "click on the item to select", and selecting a card is what reveals its actions. **Hover is the desktop shortcut, never the mechanism**: it does not exist on a touch screen, so the panel also opens on `:has(:checked)` and on focus |
| **A permanent selection bar, counting and summing what is ticked** | It first shipped hidden until something was selected, on the argument that a bar saying nothing is furniture. **That argument missed what the bar is for: it is where a person learns the exits exist.** Hidden, the four exits are invisible to anyone who has not already guessed items are selectable. With nothing ticked the actions are unavailable and the bar says so, which is a state of a working control rather than the dead control `D-58` forbids |
| **Sorting is back, four keys, and section 4 is reversed narrowly** | Section 4 refused sorting because an inventory is bounded by what one person opened. **Sorting is not filtering**: a sort reorders the same set, so it cannot manufacture the second empty state with no parent that section 4 was actually protecting against. A filter would, and there is still none |
| **`Exchange` is drawn disabled with its reason printed, and that is a cost** | `D-58` took every dead control off this product and a switch that cannot move is the case it names first. The founder wants the control standing so it can be activated the day exchange ships. **The reason renders beside it**, because a disabled control with no explanation is exactly the theatre the rule was written against |
| **`CASH-OUT` is not drawn at all, and neither is the promoted third party slot** | Paying out to real money has no row in `cjm-to-be.md` and no node on the map. Drawing it would invent a capability at wireframe stage, which is the one thing this stage may not do. **The gap section 8 records stays open and is now one exit narrower** |
| **One column at 360 where the baseline runs two** | `D-52`: a button label never wraps. Their five actions are unlabelled circles, so two columns cost them nothing. Ours are words and `Send to Steam` needs 152px. **The divergence is the label, not the column count, and the count follows it** |

---

## 0. The sentence this page is built around

`F2` is one line in the backlog and it is the whole page: **the receipt stays on the item in inventory and on the withdrawal record**, with the success signal "the same receipt is retrievable a week later".

Barrier `B7-1` is not a complaint about losing. It is a complaint about a number that stopped being true and left nothing behind to check: "a knife that Hellcase displayed as being worth about $1,600. After withdrawing it, I found out that on CSFloat and even on Steam it is worth only around $550-600", `cjm-as-is.md`, P7. **The injury is retrospective**, which is why the fix has to be a stored object rather than a display. A page that shows today's price and nothing else cannot be wrong a week later, because there is nothing left to compare it against.

**So this page holds two dated figures per item and never merges them**, section 2. That is the single decision the node exists to make.

---

## 1. Blocks, mobile first

Order is reasoned from 360px and from the barriers, not from the order of the sources. Composition comes from `blocks.md`, type **T2 Listing with an empty state**, plus the rows this node's own parents require.

| # | Block | What it holds | Parent | From |
|---|---|---|---|---|
| **1** | **Account state, one line** | Verified, withdrawals open. A statement of a fact resolved earlier, never a task raised here | Row `B7`, on `B7-1`. Row `B1`, on `B8-4` | Backlog group 2 |
| **2** | **The money, two figures** | Balance and value of items held, both in coins, `D-28`, **never summed and never a score** | `D-19` in `CLAUDE.md` by way of `0.1`. Row `C1` as `D-28` rewrote it, still on `B7-1` | Node `0.1`, Refero Kraken Pro row in T1 |
| **3** | **Withdraw, with the named limits stated beside it** | The one CTA, and the three limits in plain words before the person enters the route | Row `G5`, on `B8-3` and `B8-2` | `flows.md` flow 3, node order |
| **4** | **Items held: `0.6` cards, each carrying its `F2` receipt** | The list, and the substance of the page | Row `F2`, on `B7-1`. Row `B7` | Backlog group 6 |
| **5** | **The holding statement on each item** | Whether this item has a deadline, stated from the moment it exists. Value `[?]`, section 3 | Row `G5` | `blocks.md` T4, Hellcase FAQ row |
| **6** | **A legible bottom to the list** | Count of items held, and pagination if the count needs it. Conditional, threshold `[?]` | Related Job 5, `jtbd.md` | `blocks.md` T2, the skin.club LEAVE row |
| **7** | **Sort by value or by date acquired** | Conditional and named out loud, section 4 | Related Job 5, `jtbd.md` | Named here, not taken from the bank |

**Blocks 1 to 4 are the first screen at 360px.** The state, the money, the way out and the first item. The order is the barrier order: `B8-4` says the exit must not ambush, so the account state is answered before anything else is offered; `B7-1` says the money must be checkable, so the figures come before the list they describe.

**Two blocks the shell already carries and this page does not repeat.** The responsible play entry lives inside the money control, `0.1`, and the support route lives in `0.2` and `0.10`. Duplicating either here would put two entries into one destination, which is the defect `0.1` was written to prevent.

**One block deliberately refused.** No re-entry offer, no daily free case, no "open another". The empty state is where that temptation is strongest and section 5 refuses it there too, with the reason.

---

## 2. The item card here, and the two figures it must never merge

`0.6` is one component with one field set, and the context decides which fields render. That is the same rule `0.14` uses for its four variants, applied to the card. **No context may add a field the others do not have, rename one, or reorder them.**

| Field | In this context | Source |
|---|---|---|
| Weapon name, skin name | Rendered | `0.6` |
| Wear grade | Rendered. A separate axis from rarity | `0.6`, and `blocks.md` section 10 |
| StatTrak flag | Rendered where it applies. The third axis | `blocks.md` section 10 |
| Rarity treatment | Rendered. **Seven tiers, the seventh conditional on the case**, walked live | `blocks.md` section 10 |
| Image | Rendered | `0.6` |
| **Receipt as captured** | **Rendered, with its own as-of.** The instance value at the moment of the open | Row `F1`, carried by `F2` |
| **Current value** | **Rendered, with its own as-of.** Per read, refresh class from `0.11` | Row `D2`, `0.11` group A |
| Drop chance | Not rendered. It is a property of the case, not of a held instance | `0.6` |
| Ticket range | Not rendered here, same reason | `0.6` |

### 2.1 Two dates, two numbers, and no third number made out of them

**The captured receipt is never overwritten.** Overwrite it and the person cannot check what we told them, which is the whole of `F2`.

**The current value is never presented as what we said at the time.** Show only the captured figure and we are printing a stale price as current, which is the whole of `B7-1`.

So both render, each with the moment it was true, per rule 2 of `0.11`: an as-of on anything that moves.

**And no delta.** No arrow, no percentage, no up-or-down colour, no badge. Two dated figures side by side let a reader do the subtraction; a rendered delta turns a held skin into a position and the page into a portfolio. In-platform exchange is `LATER` by scope, `0.11` rule 7 forbids a figure that becomes a score, and a gain indicator on an inventory is a reason to keep going, which is the same defect the limits rule names for boundaries.

### 2.2 What the receipt actually is, unchanged from its owner

Row `F1`, as `0.11` group B records it: **the current sell price for the comparable float band and phase on two named venues**, priced as that instance and never as the skin name, with the link opening the venue listing filtered to that float band so the person checks it rather than taking our word. **Which two venues is `[?]`** and belongs to the founder before stage 04. This node renders the receipt and does not redefine it.

---

## 3. The thirty day question

`blocks.md`, type T4, opened Hellcase's public FAQ live on 12 August 2026 and found a real product rule living in a document: **"Your drop is waiting for up to 30 days. Full cost of the item will be returned to your balance if you don't withdraw it within 30 days."**

A deadline that converts an item into balance is not a policy detail. It is the difference between holding a skin and holding a countdown, and the person meets it by having already missed it.

**Whether we carry any such deadline is `[?]` and it is a product decision, not a design one.** What is decided here is the slot and its behaviour, because `G5` requires a limit to be met before it runs rather than discovered afterwards.

| Part of the slot | Rule | Value |
|---|---|---|
| Does a deadline exist at all | Product decision | `[?]` |
| Its length | Never invented | `[?]` |
| What the item converts to | Hellcase converts to balance at full cost. Ours is not chosen | `[?]` |
| **When the statement renders** | **From the moment the item exists**, not when it is nearly expired. A statement that appears at day 27 is a warning, and `G5` asks for a limit, not a warning | Decided |
| **Where it renders** | **On the item**, inside the `0.6` card, and repeated on the withdrawal record. Not in a policy page, not in an FAQ | Decided |
| **If the answer is no deadline** | **The slot still renders**, saying the item is held with no time limit | Decided |

**The last row is the one that matters.** Hellcase's rule became a discovery because nothing on the item said anything at all, and silence about a deadline reads identically to there being none. A positive statement costs one line and removes the whole class of failure, whichever way the decision goes.

**A card state may be needed if the answer is yes.** An item inside its final stretch is a display variant of `0.6`, not a state of this page, and adding it is `0.6`'s to authorise. Recorded here as a requirement this node places on that component.

---

## 4. The facet question the sweep left open, answered

The global sweep in `sitemap.md` left one instruction for this step: "Facet and filter system, 3.1 only. Not global. **Revisit at step 6 if 5.1 acquires filters of its own:** two listings sharing a facet set makes it canonical, one listing does not."

**Answered: 5.1 does not take the `3.1` facet set, so the facet system stays local to the catalogue.**

- **An inventory is bounded by what one person opened.** The catalogue's filters exist because a shelf of hundreds cannot be read; a holding of a handful can.
- **A filter on an inventory manufactures a second empty state with no parent.** `3.2` has removable chips as its route out, `blocks.md` T2. An empty filtered inventory would need the same machinery to solve a problem the page does not have, and `5.2` is an empty with a completely different meaning: nothing held, route to the catalogue.

**What is proposed instead, named out loud rather than added quietly:** a sort by value or by date acquired, parent Related Job 5, because a person opening this page to withdraw is looking for one item and value is how they name it. **It is conditional and its trigger is `[?]`:** it ships when a typical holding does not fit one screen, and typical holding size is not a number anyone has. Until that number exists the list is ordered most recent first, which is the order the person acquired them in and the only order this node can justify.

---

## 5. States

One numbered state, and it is the common one.

### 5.2 Inventory empty {#5.2}

**Type:** state. **Scope:** MVP. **URL:** none. It renders at `/my-items`, because a person cannot arrive at it from outside, per the rule in `0.13` section 2. **Transition:** `3.1`.

**Two different people arrive here** and the map names both: where every new account starts, and where a low-value first open leaves someone. The second one has already spent.

| Element | Behaviour | Parent |
|---|---|---|
| **The money still renders** | Balance can be non-zero while items are zero. "You hold nothing" is false in that case, and the empty is of items only | Row `C1`, on `B7-1`. `0.11` rule 3, missing is a state and never a zero |
| **What would be here, said plainly** | Items you open appear here with their value receipt. The page says what it is for rather than apologising | Row `B7` |
| **One route, into `3.1`** | The catalogue, not a blank page and not the home page | `flows.md` flow 3, and the map's own transition |
| **The withdrawal entry is absent, not disabled** | There is nothing to withdraw. A disabled control on an empty page is a promise of a wall | Design principle 3 in `CLAUDE.md`, clarity at every risk moment |
| **No offer, no free case, no nudge** | Below | The limits rule in `CLAUDE.md`, and `B7-3` |

**The refusal is the design here.** The obvious move on an empty inventory is a re-entry offer, and the daily free case `I2` and the starter credit `I1` are both sitting in the backlog waiting to be placed. They are not placed here.

- **The person who arrives after a low-value first open is at the emotional floor of the whole map.** `B7-3` records the one voice in the corpus that criticises the consolation frame itself: "it just gives incentive to people in spending more and fools them into thinking that the end result isn't that bad". An empty inventory answered with an offer to open again is that pattern with a different label.
- **Free entry has no surface of its own by decision**, and `sitemap.md` records where it does live: on `1.0` as an offer and in `3.1` as an available case. Adding a third home here would be this node inventing placement for a capability that already has one.
- **`I2` is the only row on the whole backlog with no parent in the three legal classes.** It is the last capability that should be given a new site by a page specification.

The route to the catalogue is the offer. A person who wants to open finds the free case where the map already put it.

---

## 6. Components, CTA, emotional support, responsive

**Components.** `0.1` navigation, in its account state. **Rewritten 21 August 2026 by `D-71`, because `D-40` had reached the map and not this node:** the rail carries **one** destination, Cases, in both states, **My items is the first row of the account menu**, and the mobile bar is **two items in both states**, Home plus Cases. This section said four, four and four for three days after that changed. The header carries the two money figures and the account control and no destination, which is the half that never moved. `0.2` footer, unchanged, and by its own rule it carries no link back into this cluster. `0.5` toasts for transient confirmations, never the only place a state is announced. `0.6` skin card, in the inventory context defined in section 2. `0.11` figure anatomy for the money and the receipt.

**Depth.** Level 1, reachable directly from the rail, per `sitemap.md`. `5.3` is level 2 and is entered only from here.

**Main CTA.** Withdraw to Steam. One control, one destination, and the named limits sit beside it rather than behind it.

**Emotional support.** **None, and that is checked rather than assumed.** No row of the emotional and social table in `sitemap.md` places its mechanism on `S-E1`. Emotional Job 2 is carried by `F1` at `S-C2` phase 3 and by `S-G1`. Nothing is added here for completeness.

**Responsive.** Mobile base 360px. One column: state, money, withdraw with limits, then the item list one card per row, each card stacking image, names, the two dated figures, the holding statement. Desktop keeps the same order and puts the cards on a grid, with the money and the withdrawal entry held in a summary column beside the list rather than above it. The two dated figures never sit on one line at 360px: they are two labelled rows, because collapsing them is how a delta gets invented by a layout.

---

## 7. SEO, inherited and reduced

**`5.1` is `noindex` with no schema and that was decided in `0.13`.** This section inherits it and records only what still binds.

**A. Meta.** `title`: My items. `robots`: `noindex`. `canonical`: self. `description`: none, it has no reader. **`hreflang`: none anywhere**, one language, locked in `CLAUDE.md`. **No OG image and no Twitter card.** `0.13` section 4.1 makes the unfurl the product for `7.1` because a result is meant to travel; the inverse holds exactly as hard here, and a pasted `/my-items` link must never unfurl a person's holdings into a chat.

**B. Headings.** One H1, My items. H2 in block order: the money, withdraw, items held. **The single H1 rule is structural, not an SEO rule**, so it binds on an unindexed page too.

**C. SEO body text.** None. There is no query behind a private page and a keyword paragraph on an inventory would be a block with no reader and no parent.

**D. Structured data.** None. `0.13` assigns schema by page type and assigns this one nothing.

**E. The checklist, and the part of it that survives.** A to D collapse on an unindexed page and E does not: crawlable `<a>` for real routes, text never in images per `0.11` rule 8 so the receipt can be copied into a complaint, LCP and Core Web Vitals under design principle 5, speed is trust, and one H1. **An unindexed page is not an unbuilt page**, and this row exists so that stage 04 does not read "noindex" as permission to skip the structure.

---

## 8. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The holding deadline** | Whether any deadline exists, how long, and what the item converts to. The slot is specified in section 3 and the value is `[?]` in three places | Founder, product decision |
| **The two venues on the receipt** | Row `F1` says two named venues and no file names them. Carried from `0.11` rather than re-opened | Founder, before stage 04 |
| **The sort threshold** | Section 4 makes sort conditional on a typical holding not fitting one screen, and typical holding size is `[?]` | Founder, question of fact to the live platform |
| **Where selling a skin back for coins lives on this page** | `D-38` put it in round 1 and `3.6` carries it on the outcome. **A person who did not sell at the outcome and wants to sell now has no control on this page**, and this node's own baseline row calls that the gap. Adding one is a founder decision, not a page edit: it is a second exit beside the one CTA | Founder |
| **A route from a held item back to its round** | The proof of the open lives on `7.1` and `1.2`. The map gives `5.1` two transitions, `5.2` and `5.3`, and `0.14` fixes four rendering sites of which this is not one. **The route is plausible and it is not drawn**, because adding it changes two files this node may not edit | `sitemap.md` and `0.14`, one row each if approved |
| **Whether balance can leave the platform at all** | `G6` is commission-free withdrawal of an item to Steam. Nothing in the backlog or the map withdraws a balance. It matters here and it matters more on `5.6`, where `G4` freezes a balance rather than zeroing it: **a balance that can never leave is a weaker promise than "frozen, not zeroed" reads as** | Founder |
| **The identity hole on the free-entry path** | `flows.md` flow 3 records it in full: `B1` gates funding, `B2` forbids the check at the exit, and a person who never funds never meets the gate. The proposed shape raises the check when the account first holds a withdrawable item, at the outcome. **Proposed and not drawn**, riding on `D-A` | Counsel, under `D-A` |
| **Card states for a deadline** | If a deadline exists, an item inside its final stretch is a display variant of `0.6` and that component authorises it | Node `0.6` |

**And what belongs elsewhere.** The words on every control: stage 05, which owns microcopy and syncs it back. How the card looks, how rarity is coloured: stages 06 and 07, and the rarity ladder itself is already walked in `blocks.md` section 10. What the receipt is: row `F1` and `0.11`. Where the withdrawal states are named: `5.3`.
