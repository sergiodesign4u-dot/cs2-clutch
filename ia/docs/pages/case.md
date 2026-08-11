# Node 3.3. Case screen

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 3, choose what to open and open it. **Alias:** `S-C2`. **Page type:** T3, object detail with a live event.

**URL:** `/cases/<case-slug>`. Inherited from `0.13`, section 2, not re-decided here.

**Breadcrumb:** Home > Cases > case name. With categories on, Home > Cases > category > case name.

**Purpose.** Let a person read what a case actually costs, actually contains and actually pays, then open it, watch it resolve, and understand the result well enough to check it or to tell someone about it.

**Jobs served.** The **Main Job** in full, quoted from `jtbd.md` because this is the node where it completes: "When I am embedded in the CS2 ecosystem and want excitement beyond the game itself, I want a chance at a rare skin I actually want, with a reveal that feels real and unpredictable, so that I get the rush of a genuine drop and potentially end up with something worth having." Also **Emotional Job 1**, genuine suspense rather than manufactured tension; **Emotional Job 2**, a win worth talking about; **Related Job 3**, verify the outcome after I open; **Related Job 1** and **Social Job 2** in the pre-login reading of the page. **Parent class:** job and barrier together, by rows `D1` to `D4`, `E1` to `E4` and `F1` to `F4`.

**States held in this file:** `3.4` item at zero free units, `3.5` phase 2 the open, `3.6` phase 3 the outcome, `3.7` interrupted reveal. Each under its own anchor, none as a separate file.

**Transitions:** `2.1`, `3.4`, `3.5`, then `3.6` and `3.7`, then `1.2`, `5.1`, `7.1`. Entered from `1.0`, from `3.1`, from search, and from any shared link.

---

## 0. Three phases, one page, and the phases are states rather than routes

`cjm-to-be.md` states it and both IA layers carried it: choosing, opening and the outcome are one address. **The person never navigates during the main job.** The URL does not change between reading the drop table and holding the item.

| Phase | Node | What is on the stage | What the person is deciding |
|---|---|---|---|
| **1, choosing** | `3.3`, this section set | Cost, chances, values, tested RTP, expected value, the whole drop table | Whether this case, at this cost, is worth it |
| **2, the open** | `3.5` | The reveal, the hash chip, nothing else | Nothing. `cjm-to-be.md` T6: "Triggers the reveal and watches. Nothing else happens in this phase" |
| **3, the outcome** | `3.6` | The item, its receipt, the route to the proof, the route out | What this is worth, and what to do next |

**One consequence that belongs in the SEO block and is written here because it is structural.** Phase 1 is the document. Phases 2 and 3 exist only after an interaction, so **a crawler and a first-time reader see exactly the same thing, and that thing is the full drop table with every number on it.** `0.13` section 4.3 makes this the product's position against the category: a login wall in front of the numbers is also an indexation wall, and ours does not exist.

---

## 1. Phase 1. Content blocks, in mobile order, each with its parent

Composition from `blocks.md` section 4, T3 object detail with a live event. Order reasoned at 360px.

| # | Block | What it holds | Parent | Source |
|---|---|---|---|---|
| 1 | **Breadcrumb and H1** | Home > Cases > case name. **The H1 is the case name**, `0.13` section 5, because that is what the person came for and what the query matches | `0.13` | Bank T2 **LEAVE** on Hellcase's buried H1 |
| 2 | **The case** | Artwork, item count, and the one line that says what kind of case this is | Main Job, `jtbd.md`. The Case entity in `sitemap.md` | Bank T3, Refero MWM hero card |
| 3 | **The commit block** | Entry cost in one real currency `C1`, the **Open** trigger, and the balance relationship stated rather than implied. **Persistent: the cost is on screen while the choice is made, never only after it** | Design principle 3 in `CLAUDE.md`, "where money is about to be spent, odds, cost and expected value are visible and legible", plus `C2` | Bank T3 **TAKE**, Refero Fresha's persistent summary with a full width continue, and Refero Wealthsimple's submit disabled until the condition is met |
| 4 | **The case numbers** | **Published tested RTP for this case** and **expected value at this entry cost**, each with its unit, its as-of and its route | `D4`, on design principle 3 and `B1-2` | Bank T3 **TAKE the absence as the opportunity**: neither Hellcase nor skin.club prints RTP, EV or an observed rate anywhere on a case page |
| 5 | **The tier ladder** | One row per rarity tier: **published percentage, observed percentage, N**. **Conditional on `D-B`** | `D3`, on `B7-2` pattern of 11 and `B6-2` pattern of 9 | Bank T3 **DIFFERENT** against Hellcase's "last 7 days top drop" |
| 6 | **The drop table** | Item cards `0.6`, grouped by tier, in ticket order. **Published chance and current value on the same card**, plus wear, StatTrak, ticket range, live free-unit count, and the outbound market link on the top item | `D2` and `D1`, with `A1` and `A2`. `B7-2` and `B8-1` | Bank T3 **TAKE** Hellcase's full pre-login drop table, **DIFFERENT** on the pairing, section 2 |
| 7 | **The freshness stamp** | When the values on this table were last read | `0.11` rule 2, an as-of on anything that moves | Bank T3 **DIFFERENT**: skin.club's "UPDATED 11 MINUTES AGO". **We take the stamp and refuse the door** |
| 8 | **Ticker `0.8`** | The live drop strip with its pause control, every tile landing on `7.1` | `A3`, Social Job 2. Renders on `1.0` and `3.3` only | Bank T1 **TAKE** the pause from Key-Drop |
| 9 | **SEO text** | The H2 and H3 block `0.13` places | `0.13` | Bank T1 **TAKE**, four of four competitors |
| 10 | **Footer `0.2`** | Global, unchanged | Node `0.2` | Global shell |

**Why the numbers sit above the table rather than under it.** Blocks 4 and 5 are two figures and three figures respectively. Block 6 is the whole inventory of the case and at 360px it is the longest thing on the page. **Putting the summary under the list means the cost of the case is read after its contents**, which is design principle 3 failing on layout rather than on content.

**Why the ticker is at position 8 and not at the top.** The baseline puts its ticker directly under the header, `baseline.md` section 3, and on `1.0` that placement is `1.0`'s to keep. Here the top of the page is the commit block. `ux-patterns.md`, carried in `sitemap.md`, makes Pattern E a layer on the screens where the core happens, not the event itself, and a strip of other people's wins directly beside this product's own spend trigger is the ambient layer competing with the thing it is ambient to.

---

## 2. The two numbers no competitor prints together

**Row `D2`, and the bank proved the gap on live pages on 12 August 2026.**

| Product | Chance | Value | Together |
|---|---|---|---|
| **Hellcase** | Yes, per item, pre-login, to three decimals, 0.207% to 13.386% | Only in a "last 7 days top drop" strip | **No** |
| **skin.club** | Behind a **[ CHECK ODDS RANGE ]** control | In a "last top skins" strip | **No** |
| **The baseline** | Yes, per item, pre-login, down to 0.01 and in one case 0.025, with the ticket range beside it | The price, in coins | Yes, in coins |
| **Here** | Yes, per item | Yes, per item, in one real currency | **Yes** |

**The one thing the baseline already does, and what it changes.** `baseline.md` section 4 records the finding in its own words: `D2` is **not a new capability, it is an inherited one.** The baseline publishes chance, price and ticket range per item, pre-login, on every card. What it publishes the price in is coins, and `C1` deletes that denomination entirely, so the pairing survives the migration only if the value is denominated in real currency. **The real distance between the baseline and this map is rows `D3` and `D4` and a provably fair page a logged-out person can open**, not `D2`.

**Why the pairing is the point rather than either number.** From the bank, verbatim: a chance without a value is a lottery ticket with no prize printed on it, and a value without a chance is a shop window.

**The freshness stamp, and the door it comes attached to.** skin.club stamps its odds panel "UPDATED 11 MINUTES AGO" and puts the panel behind a control. `0.11` rule 2 requires the stamp on anything that moves and the value figures are a per-read class, so **the stamp is taken and the door is refused.** Their freshness discipline is real, and their default is to hide the number the person came for.

**What the stamp is attached to, precisely.** One stamp on the drop table, covering the value column, which is the per-read figure. The published chance is static until the configuration changes and carries no stamp, `0.11` section 6. **Two figures on one card with different refresh classes must not share one as-of**, because a stamp that covers both quietly claims the chance was re-read too.

---

## 3. The drop table is a comparison table, and it has an order for a reason

**Built as a table, not as a decorated carousel.** Bank T3 **TAKE**, Refero Ableton: a wide comparison table with expandable detail, sortable and readable.

**Grouped by rarity tier.** `blocks.md` section 10 walked the ladder live on two Hellcase case pages: **seven tiers, and the seventh appears only on a case that contains knives or gloves.** Grouping is not decoration here: row `D3` puts the observed rate counter "beside every published tier percentage", so the tier is the unit the counter attaches to, and a table with no tier grouping has nowhere to put block 5.

**Ordered by ticket range inside each tier, and that is the default.** The ticket range is the interval the roll resolves against, `baseline.md` section 4 and the Drop table entry in `sitemap.md`. **An order a person can reconstruct is an order they can check**, which is the same argument `0.14` makes about the hash. Sorting by chance or by value is a control the person may apply, and every row keeps its ticket range, so the checkable order is never lost.

**Card fields, from `0.6`.** Weapon name, skin name, wear grade, image, current value, drop chance, ticket range, rarity treatment. **Rarity, wear and StatTrak are three axes and not one**, `blocks.md` section 11, which records that `0.6` gained a third field from the bank pass. Free-unit count `A2` renders on the card as well, because `3.4` is a card level state.

**The outbound market link sits on the top item only**, row `A1`, and it is genuinely outbound. `cjm-to-be.md` records that outbound clicks are tracked as an accepted cost and never as a failure metric, which is what stops the link from being quietly weakened later. `flows.md` flow 1 paints that route red because it leaves the product, and T2 accepted the cost in writing.

---

## 4. The observed rate counter, and the condition travels with it

**Row `D3`, conditional on `D-B`, and on `D-C` in common with every published figure on this map.** Both conditions are printed here rather than in a footnote, because this is the block that does not ship if either comes back negative.

| Column | What it is |
|---|---|
| **Published** | The tier percentage, the same number the drop table's cards sum to inside that tier |
| **Observed** | The outcome count from the same settlement ledger that pays users, as a percentage |
| **N** | How many rolls that observation is over. **Printed always, and printed alone below the sample floor**, `0.11` rule 4 |

**Never reset, and a configuration change forks it.** From `D3` verbatim: the old configuration keeps its history and stays visible, the new one starts at zero and says so. `0.11` rule 5 generalises it: a counter that silently absorbs a weights change is worse than no counter.

**What this block is for, and the honest limit on it.** It is the only capability on the map that speaks in the same unit as the complaint. `cjm-to-be.md` answer 2: at launch this row is infrastructure and **it does not close `B7-2` until N is large enough to say so.** Until `D-B` returns, `B7-2` is answered by `D2` and `D4` and by nothing else, and that is recorded as a materially weaker answer rather than assumed away.

**It is not a personal figure and never becomes one.** `cjm-to-be.md` dropped personal streak math in the same divergence that chose this row: correct mathematics delivered next to a spend button to a losing user is loss-chasing encouragement and the single easiest artefact to hold up in a hearing. **Nothing on this page compares a person's own results to the published distribution**, in any phase, including the outcome.

**And it is where the round proof stops.** `0.14` section 0 sends the weight-table question here by name. The proof block on this page proves the roll was fixed before the click. **This block is the other question**, and the two are never merged into one claim.

---

## 5. Tested RTP and expected value, and one of them is recomputable on the page

**Row `D4`, on design principle 3 quoted by name: "odds, cost and expected value are visible and legible. Cost never hides inside excitement."**

| Figure | What it needs beside it | State when it is missing |
|---|---|---|
| **Published tested RTP for this case** | **Who tested, when, over how many opens.** `0.11` section 10 carries this as open: `D4` says "published tested RTP" and does not say tested by whom | Missing, explicitly, `0.11` rule 3. Never a zero, never a dash |
| **Expected value at this entry cost** | Nothing external. **It is recomputable with arithmetic from the chances and the values printed on the same screen** | Missing only if the values are missing |

**`0.11` calls the EV row the strongest in the register**, and the reason is that a reader who distrusts the figure can derive it without leaving the page. That property is a layout requirement, not a nicety: the EV figure and the drop table have to be on the same page, which they are, and the values in the table have to be the values the EV was computed from, which is a production rule this node states and stage 04 carries.

**A named comparison is allowed and bounded.** `0.11` rule 9 and its `aarrr.md` split: Hellcase 82.1 percent and DatDrop 80.6 percent across 118 cases are **tested** figures; Key-Drop 89 percent and Clash.gg 90 to 92.8 percent are **stated** ones. **A comparison never mixes the two**, and if only stated figures are available for a competitor, no comparison is printed at all.

**Both figures render before login**, `jtbd.md` MVP Core Job 1 and `D4`'s own row, which names published RTP as one of three things no competitor surfaces pre-login.

---

## 6. Node `3.4`. Item at zero free units {#3.4}

**Type:** state. **Scope:** MVP. **Parent node:** `3.3`. **No URL.** **Route out:** back to `3.3`, which is the page it is already on.

**The rule, from `sitemap.md` and `cjm-to-be.md` T5 in the same words: shown before the open and never after.** The card stays in the table, marked, with its free-unit count at zero. The roll cannot select it. `D1` exists so that out-of-stock happens before the win, where it is a published number, instead of after it, where it is a claim made when we already owe someone a knife.

**What the card shows in this state.** Every field it had, plus zero free units, plus the fact that this item cannot be rolled right now. **Not greyed into illegibility**, because the person is deciding whether the case is still worth opening and the item's value and chance are inputs to that decision.

### 6.1 The contradiction this state exposes, and it is not resolvable inside this node

**Three backlog rows are not simultaneously satisfiable as written, and nothing in this repository has said so.**

- `D1` says the roll can only select items with at least one free unit.
- `D2` says a published chance is printed per item.
- `D3` says a weights change forks the observed rate counter, the old configuration keeping its history and the new one starting from zero.

**So what is the published chance of the other items while this one is at zero.** Two readings both parse and they are not the same product.

| Reading | What it means | What it costs |
|---|---|---|
| **A. The chance in force is recomputed over the selectable entries** | The table's percentages move whenever stock moves, and the person always reads the chance actually used | **Every stock change is a weights change**, so `D3`'s fork rule fires, and at any real volume the observed counter forks itself into uselessness. `D1` and `D3` cancel |
| **B. The published chance is the configuration's chance and the zero item is simply unreachable** | The table is stable and the counter accumulates | **The printed number is not the number used**, which is barrier `B7-2` printed in our own drop table. This is the thing the product exists not to do |
| **C. The case is closed to opening while any entry is at zero** | Both numbers stay true and the counter keeps its N | Availability. A large case is unopenable most of the time, and it makes `D-D` a harder treasury question than it already is |

**Recommendation: C for a small backed catalogue, A with a stated recomputation for a large one, and B never.** The choice is not a design decision. It is a settlement and treasury decision that changes the meaning of two published numbers, so it goes in section 17 with an owner and a date, and stage 04 draws the card the same way under all three.

**This is what a state node is for.** Without `3.4` this question arrives at implementation as a bug report about a percentage that moved.

---

## 7. Node `3.5`. Phase 2, the open {#3.5}

**Type:** state. **Scope:** MVP. **Parent node:** `3.3`. **No URL.** **Routes out:** `3.6`, and `3.7` if the animation does not finish on this device.

**One sentence from `cjm-to-be.md` T6 governs the whole phase: the person triggers the reveal and watches, and nothing else happens.**

| # | Block | What it does | Parent |
|---|---|---|---|
| 1 | **The reveal** | Renders the settled roll. **Computes nothing** | `E1`, on `B6-1`, one signal, fatal class |
| 2 | **The hash chip** | `0.14` variant **V1** at the spin trigger, in its pre-roll state. **Never interrupts, never modals, never asks** | `E4`, Related Job 3 |
| 3 | **The cost, spent** | The entry cost stays legible as a thing that has been paid, not removed the moment it is taken | Design principle 3 |
| 4 | **Rarity differentiation** | Speed, particles, audio and screen emphasis scale with outcome rarity, over the seven tier ladder | `E3`, Main Job and Emotional Job 2 |
| 5 | **The reduced-motion path** | The same phase, honouring the system preference | Design principle 2 and accessibility, section 7.3 |

### 7.1 The three rules that make the buildup honest

**The reveal renders and never computes, `E1`.** The roll is settled before the animation begins. `0.14` rule 4.2 carries the implementation half: recomputation is verification of a settled fact, and the two must not share a code path. **Divergence between the animation and the credit is impossible by construction**, which is `E1`'s own success signal.

**No near-miss theatre, `E2`.** From `sitemap.md`'s emotional table: the deceleration lands on the actual result **without visually passing better items first**. `jtbd.md` names near-miss as a confirmed dark pattern, and `research.md` section 6 names the same thing from the pattern side, "honest buildup, not manufactured near-miss".

**The hash reframes the wait, and that is the design claim `E4` actually makes.** `research.md` section 6: the animation is honest theatre over a pre-committed result. The chip is what makes the buildup legible as **watching a settled outcome rather than waiting for one to be decided**, which is precisely how `sitemap.md`'s emotional table describes the mechanism for Emotional Job 1.

### 7.2 Timing, and the two figures the research gives

`research.md` section 6 carries both, and this node prints both rather than picking one silently.

- **"4-6 seconds for single-case (full ritual)"**, in the duration calibration line.
- **"The 3-6 seconds of genuine tension during the spin are the emotional core of the product"**, in the Pattern B rejection.

**Taken here: 4 to 6 seconds for a single open**, the figure from the line that is about calibration. The discrepancy is small and it is recorded rather than smoothed, because stage 04 will time an animation against one of these numbers.

**Bulk opens are not in round 1**, so the 0.5 to 1 second per card figure in the same paragraph has nothing to attach to here. See section 16.

### 7.3 Reduced motion is an accessibility setting, and it is not a speed-up control

**Hellcase ships a "fast mode" toggle that shortens the reveal, and the baseline ships a speed control beside its five multi-open slots.** Both are refused, and the mechanism is kept.

| | Fast mode | Reduced motion here |
|---|---|---|
| **Where it lives** | Beside the spend trigger | In the system preference the browser reports, `prefers-reduced-motion` |
| **What it optimises** | Time to the next spend | Whether motion makes the product unusable for this person |
| **What it says about cost** | That the ritual is overhead | Nothing about cost at all |

**Same mechanism, opposite reason**, which is the bank's own phrasing. The reduced-motion path shows the same settled outcome, in the same order, with the animation stilled or shortened, and **it never changes the cost, the odds or the result**.

**Audio, and the open item it answers.** `E3` makes audio one of the four channels that scale with rarity, `research.md` section 6. Node `0.1` carries a sound control in the header and the drawer with a stated open item: it has no parent in any of the three legal classes and "it ships with a stated parent or it does not ship". **The parent it was missing is on this page:** the reveal has audio because `E3` requires it, and a person needs to be able to stop it. **That is an argument this node can supply and cannot ratify**, so it goes to `0.1`'s owner as a candidate parent, `E3` plus design principle 2, and not as a decision taken here.

### 7.4 What does not change during the reveal

**The drop table stays in the document.** It is not unmounted for the animation. Phase 2 takes the stage, and the page under it is the same page, which is what "states of one page" means structurally and what keeps phase 1 as the crawlable document, section 0.

**The trigger does not re-arm.** There is no second Open control on screen during a reveal, and no queued open. That is the same rule that refuses the multi-open selector in section 16, applied to time instead of to quantity.

---

## 8. Node `3.6`. Phase 3, the outcome {#3.6}

**Type:** state. **Scope:** MVP. **Parent node:** `3.3`. **No URL.** **Routes out:** `1.2`, `5.1`, `7.1`, and back into phase 1.

**This is the activation node.** `flows.md` flow 1 names it as a node in the diagram rather than as an implication, and `aarrr.md` defines activation as arriving and completing at least one case open. **The promised value first lands here**, when the reveal resolves and the receipt appears.

| # | Block | What it holds | Parent |
|---|---|---|---|
| 1 | **The item** | Rendered by `0.6` at full stage: weapon, skin, wear, StatTrak, rarity | Main Job |
| 2 | **The instance value receipt** | Name, float, phase, **current sell price for the comparable float band and phase on two named venues** `[?]`, the inspect link, and a link that opens the venue listing **filtered to that float band** | `F1`, on `B7-1` pattern of 7, also closing `B7-3` |
| 3 | **The verification link** | `0.14` variant **V2**. One tap to check this round, **opening in place** | `F3`, Related Job 3 |
| 4 | **The share** | One tap, producing an object that carries its own proof, landing on `7.1` | `F4`, Emotional Job 2 |
| 5 | **Two routes onward** | Keep it, into `5.1`. Or open again, which **re-enters phase 1 with the cost visible again** | Related Job 5 for the first. Design principle 3 for the shape of the second |

### 8.1 The receipt is priced as an instance, and that is the whole of `F1`

**From `cjm-to-be.md` T7, and the distinction is the entire capability.** The pain is not that a number was optimistic. It is that the number described **a different object than the one received, a name instead of an instance**. We hold the exact asset before awarding it, so its float, paint seed and phase are known, and it is priced as that unit.

**Two hard dependencies travel with it.**

- **Denominated in real currency.** The dropped rival, sell price everywhere, left its load-bearing rule attached to the pick: a receipt in coins fails its own test. `C1` already deletes the coin denomination product-wide.
- **The venue link is filtered to the float band**, so the person checks it themselves rather than taking our word. **Which two venues is `[?]`**, `0.11` section 10, owner founder, before stage 04.

**And it persists, which is row `F2`.** The receipt stays attached to the item in inventory `5.1` and on the withdrawal record `5.3`. Success signal from the backlog: the same receipt is retrievable a week later. **This node does not own those surfaces**, it owns the obligation that what it renders here is the same object they render later.

### 8.2 The proof link opens in place, and the reason is in `0.14`

`0.14` variant V2 must not take the person out of the flow: **the outcome screen is where the win is, and the win is not interrupted for paperwork.** This node adds nothing to that specification and contradicts nothing in it. Where the block sits on this screen is this node's decision, and it sits under the receipt, because the receipt is the claim and the proof is the check on it.

### 8.3 What is deliberately absent from the outcome, and each absence has a source

| Absent | Why |
|---|---|
| **A sell control** | **Round 1 has exactly one exit, withdrawal to Steam.** `cjm-to-be.md` T7 rejected a binding buyback at the displayed value before scoring, because it adds a payout rail round 1 does not have. Hellcase's `SELL → S` has no counterpart here because the capability does not exist |
| **A one-key repeat** | `REPEAT → R` on Hellcase's controls. **One key to liquidate and one key to spend again**, printed as a convenience. `blocks.md` section 12 calls it the single most telling block in the whole bank |
| **A personal streak or session tally** | Dropped in the `B7-2` divergence, section 4. Also `0.11` rule 7: a number is never a score, no streaks, no progress, no celebration |
| **A "you were due" line, in any wording** | The same rejection. It is loss-chasing encouragement whichever way the last result went |
| **Similar cases** | Bank T3 **DIFFERENT** on Refero MWM: a shared result that recommends another case is an advertisement wearing a receipt. The rule was written for `7.1` and it applies with more force here, where the person has just spent |
| **A win celebration that scales with our margin** | Nothing in `E3` scales with anything except outcome rarity, which is the person's result and not our revenue |

**Open again is a full control and not a repeat.** It re-enters phase 1, where the entry cost, the tested RTP and the expected value are all on screen again. **The brake for the session is `C2`, the spend ceiling chosen at deposit**, and it is not this node's to duplicate. What this node owes is that opening again costs the same number of deliberate acts as opening the first time.

---

## 9. Node `3.7`. Interrupted reveal {#3.7}

**Type:** state. **Scope:** MVP. **Parent node:** `3.3`. **No URL.** **Route out:** `3.6`. The same result is also in `5.1`.

**Why it exists, in `flows.md`'s own words, and it was the sharpest thing that critique found.** `E1` settles the roll before the animation begins, so at the moment a connection drops **the result already exists in the ledger**. Without a return path the person sees an animation that never resolved beside a balance that says they won, which is `B6-1`, the animation and the credited item disagreeing, **arriving through the back door of a missing state rather than through the front door of a bug**.

| What it shows | Why |
|---|---|
| That this round did not finish on this device, and that **the result was decided before the animation started** | It is the same sentence `E1` and `E4` already make. The interruption changes nothing about the outcome and the state says so plainly |
| **The outcome itself**, which is `3.6` in full: item, receipt, proof link, share | The person has already paid and already won. Making them re-watch to collect would be theatre attached to a settled fact |
| That the same result is in My items, `5.1` | A second route to the same object, for the case where this device is not the one they come back on |

**The reveal is not re-run by default.** The person may already have seen the header figures change, and replaying a suspense animation over a result they can already read is the near-miss problem in a different costume.

**It is a state and not an error.** Nothing failed on our side, and the copy does not apologise for a system fault that did not occur. `0.5` announces it; the state itself is on the page.

**How the interruption is detected is `[?]`** and belongs to production. This node specifies what the person meets, not the mechanism that routes them here.

---

## 10. The age gate fires on this node

**`2.1` fires at first case interaction**, `B3` quoted from `CLAUDE.md`, "age verification before any case interaction", plus `D-17`. Two files fix the ordering and they agree: `flows.md` flow 1 puts the gate between the case screen and reading the numbers, and `sitemap.md`'s tap count puts it at tap 2, between landing on this page and the Open at tap 3.

**One of three taps to the main job is this gate**, and `sitemap.md` records the cost out loud: the compliance layer eats a third of the budget for the main job. **It is also why the gate carries only the 18+ declaration.** `D-17` puts identity verification before funding instead, and if that check sat at this tap the main job would be unreachable inside budget for a first-time visitor.

**What this node owns and what it does not.** It owns the condition, that the gate fires here for a person who has not declared, and the fact that phase 1 renders behind it as a document. **`2.1` owns the gate itself**, its copy, its decline route and how long a declaration is remembered. **`0.12` owns the market verdict** that the same layer checks, and every verdict in it is `[?]` until re-verified against current law.

**The gate is not an indexation wall.** `0.13` section 4.3: every public surface is readable by anyone from anywhere without serving a crawler anything different from a person. The category's usual pattern is a login wall, and skin.club runs one on this exact screen, section 16.

---

## 11. Components

| Component | Variant used here |
|---|---|
| `0.1` Navigation | Rail and header throughout. On mobile the bottom bar is present in every phase and does not hide, which section 14 pays for |
| `0.2` Footer | Full, below the SEO text |
| `0.6` Canonical skin item card | The drop table card in phase 1 and `3.4`, and the outcome card in `3.6` at full stage. **Rarity, wear and StatTrak are three fields** |
| `0.8` Live drop ticker | With the pause control, every tile landing on `7.1`. Renders on `1.0` and here only |
| `0.14` Canonical round proof | **V1** at the spin trigger in `3.5`, **V2** at the outcome in `3.6`. All seven of its states are inherited, including proof unavailable, which is `D-B` again |
| `0.11` Published numbers register | Read by five blocks. The figure anatomy is value, unit and caption, as-of, route, comparison |
| `2.1` Age and geo gate | Dialog, fires here, owned there |
| `0.5` Toasts | The interrupted state and a degraded value source are announced, and never only in a toast |
| `0.3` System pages | A case slug that does not exist is a real 404, never an empty case screen |

---

## 12. State matrix

Rows are what varies. Every published figure on this page additionally inherits all seven states of `0.11` section 7, which is not repeated per row.

| State | Phase 1 | The trigger | Notes |
|---|---|---|---|
| **Guest, undeclared** | Full page, every figure | Tapping it raises `2.1` | `D-17`, and the numbers are readable behind it |
| **Guest, declared** | Full page | Tapping it routes to `2.4` sign in, then back here | `flows.md` flow 1. Steam refusal and Steam unavailable are `2.4`'s states, and the second returns here so a person who cannot sign in can still read the product |
| **Account, funded** | Full page | Opens. Phase 2 | The main path |
| **Account, nothing to open with** | Full page | Routes to `4.1` deposit, or consumes a free entry if one is available | `I1` and `I2` are entitlements, not surfaces. The trigger states which it will consume before it is tapped |
| **Item at zero free units** | Node `3.4` | Unchanged. The case is still openable | Section 6 |
| **Loading the table** | Skeleton with the free-unit counts as the thing being waited on | Not yet armed | Specified here, not a node, per `sitemap.md` |
| **Values degraded** | The table renders, the value column marked degraded, `0.11` | Armed | **A case with unknown values is still openable, and the EV figure is not printed from stale values** |
| **`D-B` negative** | Block 5 does not render, and the page says a figure used to be here and why | Armed | `0.11` withdrawn state. This is the state that keeps the page honest if the counter never ships |
| **Reveal running** | Node `3.5` | Spent, not re-armed | Section 7 |
| **Outcome** | Node `3.6` | Open again re-enters phase 1 | Section 8 |
| **Interrupted** | Node `3.7` | Not shown until the outcome is acknowledged | Section 9 |

---

## 13. Emotional support

From `sitemap.md`, "Emotional and social jobs: what carries them". Three of its five rows live on this node, and nothing is added here for completeness.

| Job | Mechanism | Where exactly on this page |
|---|---|---|
| **Emotional Job 1**, genuine suspense rather than manufactured tension | `E1` the reveal renders the settled roll, `E2` no near-miss theatre, `E4` the hash at the trigger reframing the buildup | `3.5`, **as behaviour of the reveal itself rather than as a component**. Blocks 1, 2 and 4 of section 7 |
| **Emotional Job 2**, a win worth talking about | `F4` one-tap share producing an object that carries its own proof, plus `F1`, which **makes the number inside the story true so the story survives being checked** | `3.6`, blocks 2 and 4, then `7.1` |
| **Social Job 2**, be part of a platform that feels alive | `A3` live drop feed with no invented names and any bot labelled as one, every tile landing on a public result rather than a stranger's trophy shelf | Phase 1, block 8, **as an ambient layer and never as a destination** |

**Microcopy is a placeholder with a reserved place, not a blank.** Stage 05 writes the words for the reveal, the outcome and the interrupted state. What this node fixes is that each has a place in the block order already, so stage 05 is a rewrite and not a redraw.

---

## 14. Responsive

**Mobile, 360px base.**

- Blocks stack in the order of section 1. The commit block, block 3, is on the first screen with the entry cost and the trigger together.
- **The commit block becomes sticky once it scrolls out of view, and it sits directly above the mobile bar.** Two fixed layers at 360px is a real cost and it is named rather than absorbed: `0.1` fixes that the bar "does not hide and does not condense", so the commit bar is the layer that has to fit above it. **It never drops the entry cost to save the height**, because that is exactly what design principle 3 forbids.
- **The drop table is the longest block on the page.** At 360px each card is one row of the table, full width, with chance and value on the same line so the pairing survives the width. Nothing scrolls sideways: the table wraps into cards rather than becoming a horizontally scrolled grid.
- The tier ladder is three figures per row, published, observed and N, and **N is never dropped for width**, `0.11` rule 4.
- The hash chip truncates in the middle and keeps its copy control, `0.14` section 5. It never grows to a second line during a reveal.
- The reveal uses the full width and does not require landscape.
- The ticker scrolls horizontally by itself, with its pause control reachable, and the page does not.

**Desktop, from 900px.** The rail sits beside the content. The commit block may sit beside the case artwork rather than under it, and the drop table becomes a real multi column table, which is the Ableton form the bank took. **The block order does not change**, only the number of columns.

---

## 15. SEO block

Inherited from `0.13`. Nothing below re-decides a row of that register.

### A. Meta

| Field | Value |
|---|---|
| **Title**, pattern, 37 characters plus the case name | `<Case name>: drop chances, values and tested RTP` |
| **Description**, pattern, 134 characters plus the case name | `Every item in <Case name> with its chance, its current value and its ticket range, plus the tested RTP and the expected value at this entry cost.` |
| **Canonical** | Self, `/cases/<case-slug>` |
| **hreflang** | None. One language, `0.13` section 1 |
| **Robots** | `index, follow` |
| **OG and Twitter** | The case, its item count and its entry cost. **Not a win.** A share card built from someone's outcome belongs to `7.1`, which owns that object |

**Name budget.** The title pattern leaves 23 characters for the case name inside 60, and the description leaves 21 inside 155. **Longer names truncate the pattern from the right rather than the name**, since the name is what the query matches. The exact truncation rule is production's, and the pattern is sized here so the decision is not discovered there.

**A slug rename is a 301 and the old slug is never reused**, `0.13` section 2. That rule matters more on this node than anywhere else, because a case URL is in every share and every clip description that `F4` produced.

### B. Headings, exactly one H1 and the H2 list in block order

- **H1:** the case name, and nothing else, `0.13` section 5
- **H2:** What is in this case _(the drop table)_
- **H2:** What this case pays _(tested RTP and expected value)_
- **H2:** Published against observed _(the tier ladder, and it does not render if `D-B` is negative)_
- **H2:** Live drops _(the ticker)_
- **H2:** How this case works _(SEO text)_
- **H3:** How a chance and a ticket range fit together
- **H3:** What happens when an item runs out

**One H1 per page across all three phases.** The phases do not each get one, because they are states of one document.

### C. SEO text, finished copy

> **How this case works.** The entry cost buys one roll. The roll lands on one item, and every item's share of the possible outcomes is printed on its card as a percentage and as a ticket range. The two say the same thing twice: the percentage is easy to read, and the ticket range is the interval the roll actually resolves against, which is what makes a result checkable afterwards.
>
> **How a chance and a ticket range fit together.** A roll produces a number. That number falls inside exactly one ticket range, and the item holding that range is the item you get. The round is fixed before the animation starts, and the hash of it is on screen at the moment you open. After the reveal, one link checks that round against the number that was published before it ran.
>
> **What happens when an item runs out.** Every item in this case points at a unit we hold. When the last unit of an item is won, the item stays on this page showing zero free units and cannot be rolled. It is not removed, because a table that quietly loses rows is a table you cannot check against what you read a minute ago.

**This block stays the property of this node.** Stage 05 aligns it to voice and syncs the final version back here. Interface strings, the trigger label, the reveal copy, the outcome copy and the interrupted state's sentence, do not move into this block: after stage 05 they live in `voice/docs/microcopy.md`, and this node holds the requirement that the information exists in that place.

### D. Structured data

`Product` plus `Offer`, from `0.13` section 7. **The case is the thing bought and the entry cost is its price.**

**Refusal, inherited and restated because this is the node it constrains.** `0.13` refusal 2: the drop table items are **not** offers. We do not sell that skin at that price, and marking each item as a `Product` with an `Offer` would state that we do. The items are content of the case, and **the only `Offer` on this page is the entry cost.**

`BreadcrumbList` on the visible breadcrumb, `0.13` section 6. No `aggregateRating` and no `Review` anywhere, `0.13` refusal 1.

### E. Optimisation checklist

1. Exactly one H1, and it is the case name.
2. H2s exist in block order, matching block B.
3. Breadcrumb drawn and marked up.
4. **Every figure is crawlable text, none is an image**, `0.11` rule 8. The chances, the values, the RTP, the EV and the free-unit counts especially: **the pre-login figures on this page are the product's entire pre-login argument**, and an image would remove them from search and from a screen reader in the same stroke.
5. LCP is the case artwork plus the commit block. The drop table images are lazy below the fold.
6. **The accessible name of every figure carries the unit and the as-of**, not the bare digits, `0.11` section 9. A screen reader that announces "82.1" has announced nothing.
7. **The reveal does not shout.** `0.11` section 9: real-time figures update silently by default, and an announcement is polite and rate limited only where an update changes what a person can do. The outcome is such a moment. The ticker is not.
8. The hash's accessible name is the field, not the value, `0.14` section 5.
9. Canonical present, no hreflang anywhere.

---

## 16. What was refused, with the reason on the row

| Refused | Where it is on a live page | Why |
|---|---|---|
| **Multi-open selector, 1 / 2 / 3 / 4 / 5 / 10** | Hellcase, opened 12 August 2026. The baseline runs five hexagon slots, `baseline.md` section 4 | **No parent.** Design principle 3: a spend multiplier next to the trigger, before any ceiling is visible. **If multi-open ever ships it ships behind `C2`** |
| **Keyboard shortcuts on the controls: `SELL → S`, `REPEAT → R`** | Hellcase, printed on the controls beside `GET → ENTER` and `QUICK STOP → SPACE` | **One key to liquidate what you won and one key to spend again.** Speed here is not service. `blocks.md` section 12: the single most telling block in the whole bank |
| **"Fast mode"** | Hellcase. The baseline ships a speed control beside its multi-open slots | A control that makes spending faster, sold as a preference. **The mechanism is kept as reduced motion honouring the system preference**, section 7.3 |
| **A sign-in wall over the open control** | skin.club, "Authorization is required to open cases". The baseline, "You must log in to be able to Open cases and get your winnings chance" | `B1-1` and `B3`. **A person deciding whether this place is real cannot see the mechanic.** We show the whole screen and gate at the first case interaction, `D-17` |
| **"Last 7 days top drop" with a multiplier, x38.8** | Hellcase. The baseline runs a "Best drops" row of recent wins with coin values | **Survivorship by construction:** the top drops of the week are not what happens. The same curiosity is answered by `D3`, which can disappoint and is therefore worth reading |
| **"Skin.Club guarantees 100% case fairness transparency"** | skin.club | An unfalsifiable sentence. `D-14` bounds the claim and `0.14` carries a scope line saying what the proof does **not** cover, which is the opposite move |
| **A risk meter of three skull icons, two filled** | The baseline, beside "Medium-risk" | The Case entity carries "risk band as a legible label" and **no computation for it exists anywhere in this repository**, so it has no route, `0.11` rule 1. `D4` is the checkable version of the same claim and it ships instead. Also `0.11` rule 8: a figure in an icon is not text |
| **The "Skin prices" explainer and the exchange route** | The baseline, stating that prices in a case are fixed and that a skin can be exchanged on the exchange page | It exists to explain a coin denomination and an exchange surface. `C1` deletes the first and in-platform exchange is LATER, so the block explains two things we do not have |
| **A like count on the case** | The baseline, a thumb icon with a count | No parent. `0.11` rule 7: a number is never a score |
| **Bulk-open reveal timing, 0.5 to 1 second per card** | `research.md` section 6 carries it as Pattern B for bulk flows | Nothing in round 1 opens in bulk, because multi-open is refused above. The figure has nothing to attach to and is recorded rather than used |

---

## 17. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **What the published chance is while an item is at zero** | Section 6.1. **Three readings, and `D1`, `D2` and `D3` are not simultaneously satisfiable as written.** It changes the meaning of two published numbers. Recommendation: C for a small backed catalogue, A with a stated recomputation for a large one, B never | Founder plus whoever owns settlement, before stage 04. It rides with `D-D` |
| **`D-C`, the internal observed-against-published check** | Scheduled before stage 04, and **nothing in this register is drawn until it returns**, `0.11` section 1. Every published figure on this page is conditional on it | Founder, on the live platform |
| **`D-B`, whether roll history migrates and can be published** | Decides whether block 5 renders at all, and how common `0.14`'s proof-unavailable state is on day one | Founder, question of fact to the live platform |
| **The sample floor for the observed counter** | The N below which the counter shows N and no percentage, `0.11` rule 4 | Founder with the data |
| **Who tests our RTP, and over how many opens** | `D4` says "published tested RTP" and does not say by whom. Without it the figure is a claim rather than a test | Founder |
| **The two venues for the instance value receipt** | `F1` says two named venues. Which two is not decided anywhere | Founder, before stage 04 |
| **Whether the person controls the client seed** | `0.14` section 6 recommends user-settable and records that **no backlog row covers it today** | Founder, one backlog row |
| **The exact provably fair scheme** | `0.14` section 6. The category standard is HMAC-SHA256 over server seed, client seed and nonce; ours is not chosen | Production, before stage 04 treats the field list as final |
| **Whether the rarity ladder is the game's palette** | `blocks.md` section 10 walked seven tiers and left this `[?]`. If the values are the CS2 client's own, **we may not restyle them freely because the player already reads them without a legend** | Whoever specifies `0.6`, one page to check |
| **Float, paint seed and phase as fields** | The Skin instance entity marks them `[?]` and "not required by any job in the current list", while `F1` requires float and phase on the receipt. **The receipt therefore needs them and the entity does not know it**, which is a contradiction this node reports rather than edits | `sitemap.md` at its next pass |
| **The sound control's parent** | `0.1` carries it with no parent and a standing condition. **The candidate parent is here**, `E3` plus design principle 2, section 7.3 | Founder, before stage 04, and the decision belongs to `0.1` |
| **The exact reveal timing inside 4 to 6 seconds** | `research.md` gives two ranges, section 7.2. The chosen curve, the deceleration and the hold are stage 06's, tested there | Stage 06 |

**And what belongs elsewhere.** How the reveal looks and sounds: stages 06 and 07, and `cjm-to-be.md` T6 states plainly that the target emotion for this phase is projected rather than measured, because no first-person account of joy at one's own reveal was found anywhere in the corpus. The words: stage 05. The gate: `2.1`. The market verdict behind it: `0.12`. The shared object: `7.1`. Where the receipt lives afterwards: `5.1` and `5.3`.
