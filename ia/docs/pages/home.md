# Node 1.0. Home, with node 1.1 Home with an account

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 1, decide whether this place is real.

**Purpose.** Let a visitor who arrived pre-suspected decide that this place is real, and put the entry to the main job on the same screen, so that the decision and the first open are one surface rather than two.

**Jobs served.**

| Job or barrier | Class | What it puts on this page |
|---|---|---|
| **Main Job**, `jtbd.md` Section 1, phases T1 and T2 of the To-Be path | job | The featured case grid, which is tap 1 of the three tap route |
| **Related Job 1**, arrive with enough confidence to try, `jtbd.md` Section 2 | job | The whole of blocks B3 to B9 |
| **Related Job 2**, complete the first open without friction, `jtbd.md` Section 2 | job | The starter credit offer, `I1` |
| **Social Job 2**, be part of a platform that feels alive, `jtbd.md` Section 3 | job | The live drop ticker, `A3` |
| **`B1-1`**, the category arrives pre-suspected | barrier | The order of the blocks, and the refusal of a sign-in wall |
| **`B1-2`**, the buy-instead advice, pattern of 14 | barrier | `A1`, two prices on one item, block B7 |
| **`B2-1`**, the pre-login information wall | barrier | Every figure on this page renders without an account |
| **`B8-2`**, waiting with no attribution, pattern of 6 | barrier | `A4`, the published median and p90, block B9 |
| **Design principle 1**, `CLAUDE.md`, "trust is the product", as limited by `D-14` | design principle | Block B8, the route into `1.2`, carrying the limit with it |
| **Design principle 3**, `CLAUDE.md`, "odds, cost and expected value are visible and legible" | design principle | `D4` in its pre-login form, block B7 |

**URL:** `/`. **Indexed:** yes, canonical self. **Breadcrumb:** none, it is the root. All three inherited from `0.13`, section 3, and not decided again here.

**Sitemap transitions:** `3.3` by a case tile, `3.1` as all cases, `1.2`, `2.4`. Every one of the four is carried by a block below or by the shell, and none is promised without a destination.

**Two obligations this node was handed, and both are honoured.** `sitemap.md`, "Free entry gets an obligation rather than a surface", makes `S-A1` carry the starter credit offer as a pre-login element: block B10. `sitemap.md`, "Detailed node map", row 1.0, makes it carry the featured case grid directly on the page rather than behind a mode hub: block B5.

---

## 0. Two loads on one screen, and the cost was accepted in writing

`sitemap.md`, "Depth to the main job, counted", already names what this node is:

> "Featured cases sit on Home, so Home carries two loads at once: the trust evaluation, A1 to A5, and the entry to the main job. That is a crowded screen, and design principle 3 says cost never hides inside excitement. A home that is simultaneously a trust page and a shop is exactly where that risk lives. The compromise is accepted here and handed forward as a named constraint for the wireframe stage, not as a solved problem."

**This node is where that constraint gets a shape.** The answer is not to make the page smaller. It is to fix the order in which the two loads arrive, so that the evaluation runs before the shop asks for anything, and the shop is visible while the evaluation is still going on.

**Three competitor answers were available and all three are refused**, from `blocks.md` section 2:

- **Clash.gg**: a mode hub of nine, and **no case grid on the page at all**. Their home answers "which game" for a person who has not yet decided the place is real. `D-20` deferred our mode row because one live card of four is the dead item defect, and a hub of nine when we would ship one is worse than no hub.
- **Key-Drop**: the shelf **is** the home page, eighteen category rows, 15,119px tall. That is a catalogue pretending to be a decision.
- **Hellcase**: a sign-in modal on arrival with the age declaration as a checkbox inside it. Two barriers at once, `B1-1` and `B3`, and it makes the pre-login evaluation impossible.

**Ours is none of the three: a curated grid on Home, the full shelf on `3.1`, and no wall of any kind.**

---

## 1. The block order, reasoned from 360px

**Mobile is the base and the order below is the mobile order.** The desktop order is the same order in more columns, section 7. No block is added, removed or reordered at any width.

| # | Block | What it carries | Parent | Class | Source |
|---|---|---|---|---|---|
| **B1** | **Live drop ticker** | Component `0.8`. Tile strip, source mode label, weapon and skin, rarity tint, **a pause control**, and a destination on every tile: `7.1` | Social Job 2, `jtbd.md` Section 3, by row `A3`. The pause is design principle 2, `CLAUDE.md`, "motion without an emotional or informational job gets cut" | job, plus a design principle for the pause | Bank T1, Key-Drop, **TAKE** |
| **B2** | **The promotion banner** | One promotion at a time: an image, one line, one control, and **a countdown where the promotion has a real published end**. Never a carousel and never a stack | **None in the three legal classes.** In by founder decision of 18 August 2026, `D-25`, which also reverses the refusal of the countdown recorded in `blocks.md` section 2 | **none, printed** | Bank section 2, the Key-Drop and Hellcase event banner, recorded **DIFFERENT** and turned **TAKE** by `D-25` |
| **B3** | **The hero** | The single H1, the proposition in one line, the institutional trust unit `A5`, and one route into the main job | `B1-1`, plus Related Job 1. `A5` also stands on DANGER 1's locked resolution in `jtbd.md` Section 6.2 | barrier and job | Bank T1, Refero District and YouTube |
| **B4** | **The row of four ways to play** | One card per way to play. **One is live and carries a control; three are not launched and say so in words**, with no control, no link, no badge and no date. Component-free: it is four cards, not a hub | **None in the three legal classes.** In by founder decision of 19 August 2026, `D-27`, which partly reverses `D-20` | **none, printed** | `baseline.md` section 4, the row of four game mode cards, recorded **DIFFERENT** by `D-20` and turned **TAKE** by `D-27` |
| **B5** | **Featured case grid** | Component `0.7` tiles as `D-24` rewrote them: artwork, case name, entry cost, risk band, plus the stock marker `A2` and the daily marker where each applies, plus the favourite control. Plus one explicit route into the full shelf, `3.1` | Main Job, `jtbd.md` Section 1, and `D-20`. `A2` stands on `B8-1` | job and barrier | Bank T1, Key-Drop **DIFFERENT**, Refero District **TAKE** |
| **B6** | **Daily cases, with the tier ladder** | The five tier ladder, the wager remaining figure in coins, the countdown to the reset, and the open control with the number of daily cases available | `I2`, which has **no parent in any of the three legal classes**, `D-15`, **and the ladder on top of it has none either**. In by founder decision `D-25` | **none, printed** | `baseline.md` section 4, the baseline's own answer to the risk recorded in `I2` |
| **B7** | **One case, priced in full** | The worked example. Component `0.6` on the featured case's top item, its live market price with a timestamp and an outbound market link `A1`, its published chance and current value `D2`, the published tested RTP and the expected value at this entry cost `D4`, and the cheaper-on-average statement in our own voice | `B1-2` pattern of 14, `B2-1`, `B7-2`, plus design principle 3 quoted in the row above | barrier and design principle | Bank T1 `A1`; the number set is bank T3, "TAKE the absence as the opportunity" |
| **B8** | **Check any round, with no account** | What the proof covers and what it does not, in one short clause, and the route into `1.2` | Design principle 1 as limited by `D-14`, plus Core Job 1 at `jtbd.md` Section 5 conclusion, which names a public provably fair surface as one of three things no competitor offers pre-login | design principle and job | **Not in the bank.** Named in section 2.5 rather than added silently |
| **B9** | **The exit, priced before the entrance** | `A4` rolling median and p90 from our own logs, `G6` commission-free withdrawal to Steam with the Steam Market fee as its comparison, the payment method marks pre-login, and `C4`'s withdrawal threshold stated here | `B8-2` pattern of 6, `B4-3`, `B4-1`, Related Job 1, Related Job 5 | barrier and job | Bank T1, Clash.gg payment strip **TAKE** |
| **B10** | **The starter credit offer** | `I1`, bounded, with the withdrawal threshold `C4` in the same breath, and the route into `2.4` | Related Job 2, `jtbd.md` Section 2. Bound to `C4`, `D1` and `A1` by `cjm-to-be.md`, answer 1 | job | `sitemap.md` obligation on this node |
| **B11** | **The SEO text block** | One H2 with a real heading tree under it, placed by `0.13` | `0.13`, the structural SEO layer, which `CLAUDE.md` puts inside IA | named requirement, per `0.13`'s own parent rule | Bank T1, all four competitors **TAKE** |

**The shell is not a block of this node.** The header, the rail and the mobile bar are `0.1`. The footer is `0.2`. The cookie dialog is `0.4` and section 4 records what it costs this page.

### 0a. What this screen reuses, and what it owns

**Every screen in this product is a shell plus its own blocks, and the split is fixed here so a later stage does not redraw a global by accident.** Stage 04 renders the reused parts from one place: nothing on this page draws a header, a rail, a bar or a footer of its own.

| Reused, owned elsewhere | Node | What renders it |
|---|---|---|
| **The rail**, logo slot, destinations, and its foot of ambient controls and social links | `0.1` | The global shell renderer, identical on every screen |
| **The header**, the money figures and the account control, and no destination at all | `0.1` | The same renderer, in two account states |
| **The mobile bar**, a shortcut subset of the rail | `0.1` | The same renderer, below 900px only |
| **The footer**, four bands, and the compliance line inside its fourth column | `0.2` | The global footer renderer, identical on every screen |
| **The cookie dialog** | `0.4` | Its own layer, on first visit |
| **The case tile** in B5 | `0.7` | A component, also rendered by `3.1` |
| **The skin card** in B7 | `0.6` | A component, also rendered by `3.3`, `5.1` and `7.1` |
| **The live drop ticker** in B1 | `0.8` | A component, rendered here and on `3.3` and nowhere else |
| **Every published figure** | `0.11` | A register, not a component: it fixes states, units and the peg rule |

**What this node owns and nothing else renders:** the promotion banner B2, the hero B3, the row of ways to play B4, the daily ladder B6, the worked example B7, the proof route B8, the exit figures B9, the starter credit B10 and the SEO text B11.

**The practical consequence, and it is the reason this table exists.** A change to the rail, the header, the bar or the footer is a change to `0.1` or `0.2` and it lands on **every** screen at once. A change to a block below is this page's alone. **If a fix touches a global, it is written in that global's node, never on the screen where it was noticed.**

### 1.1 Why this order, and not another

**The argument runs in the order a suspicious person asks the questions.** Alive, then who, then what, then what it really costs, then is the roll honest, then can I get out, then what does it cost me to find out.

**A third block was inserted on 19 August 2026 by `D-27`, and it is not part of the argument either.** B4 sits directly under the hero because that is where the baseline puts it and because it answers "what can I do here" immediately after "who are you". **It is the second thing on this page that is not evidence**, and its cost is in `D-27`: three of its four cards name something a person cannot do yet. They are drawn as not launched rather than as offers, which is the difference between marking a gap and advertising one.

**Two blocks were inserted into that order on 18 August 2026 by `D-25` and neither of them is part of the argument.** The banner B2 sits between the ticker and the hero because that is where the baseline puts it and because it is the one position where a promotion does not interrupt a sentence that has started. **It is the first thing on the page that is not evidence**, and the order pays for it in exactly one way: the H1 is no longer the first thing after the shell, section 1.2. The daily block B6 sits directly under the featured grid, after the shelf and before the worked example, because it is a case offer and it belongs with the case offers rather than in the middle of the honesty argument. **Putting it any lower would have put a free entry after the starter credit, which is two free things in a row and the `B4-2` failure twice.**

**The two trust blocks are ordered by the size of the pattern behind them, which is checkable rather than a matter of taste.** `B1-2`, the buy-instead advice, is a pattern of 14 and the largest in the corpus, so `A1` sits at B7, high. `B8-2`, the withdrawal that goes silent, is a pattern of 6, so the exit block sits at B9. `cjm-to-be.md` records both counts, and the correction that `B1-2` at 14 rather than `B7-2` at 11 is the densest.

**The starter credit is last of the argument blocks, and that placement is the one most likely to be argued with.** It is the activation lever, so the instinct is to put it in the hero. **`B4-2` is a pattern of 2 in which an implausibly generous starter gift is read as proof of a scam**, and `cjm-to-be.md` answer 1 records the residual risk that the credit "teaches a first-session user that opening is free, which is the one impression the rest of this map spends its whole budget contradicting". A free gift leading a page whose job is answering `B1-1` is the documented failure mode, not the activation win. It ships, pre-login, on the page, after the product has been priced honestly.

**B8 is deliberately short and deliberately not first.** Design principle 1 says trust is the product, and `D-14` says what answers the doubt people actually record is published chance, current value and tested RTP at the moment of spending. Those are B7. The verifier route is the bounded claim, so it follows the unbounded one rather than leading the page.

### 1.2 What is above the fold, and what `D-25` cost there

**`D-25` put a banner above the H1 and the founder took that decision knowing the price.** It is stated here in full rather than discovered at the wireframe.

**Desktop, from 900px: the header `0.1`, B1, B2 and B3 all sit on the first screen**, which is the composition the baseline runs and the reason the decision is cheap at that width. **At 360px they do not all fit**, and this is the whole of the cost.

| Width | Above the fold | The H1 |
|---|---|---|
| **Desktop, 1440px** | Header, ticker B1, banner B2, hero B3 with the H1 and `A5`, and the first row of the grid B5 cresting | **On the first screen.** Nothing is given up |
| **360px** | Header, ticker B1, banner B2, and the hero B3 **starting** | **The target is that the H1 crests the fold.** It is a budget, not a promise, and the budget is below |

**The height budget at 360px, which is what makes the target reachable.** The ticker may occupy **one visual row and no more**, `baseline.md` section 3 runs 120px at 1440px. **The banner is bound by the same instrument: at 360px it takes what is left after the ticker such that the H1 still begins on the first screen.** The pixel values are stage 04's. The ceiling is this node's, and stage 04 accepting a banner that pushes the H1 out of the first screen at 360px is a failed acceptance, not a layout preference.

| Element | Why it is above the fold |
|---|---|
| **The ticker, B1** | It is the only block that answers "do drops actually happen here" without asking anyone to read. `jtbd.md` Section 5 scores Social Job 2 at **3 for The Opener** with the note "ambient context sets mood on arrival", and arrival is exactly this moment. It is also the baseline's own placement, `baseline.md` section 3 |
| **The banner, B2** | **By founder decision `D-25` and by nothing else.** It has no parent in the three legal classes and it is above the H1 because the baseline puts it there. That is the honest sentence and it is the one written in the row |
| **The H1, in B3** | `blocks.md` T2 records Hellcase putting its H1 below the fold, under 1,400px of product. **We now have a block above ours too**, so the rule that survives is narrower and harder: `0.13`'s single H1 still has to begin on the first screen, and the banner is what is measured against it |
| **The institutional trust unit `A5`, in B3** | DANGER 1 in `jtbd.md` Section 6.2 is closed, and its locked design implication is a **hybrid hero**, the badge in the same hero unit rather than a separate section further down |

**And `D-27` moved it again.** The entry row now sits between the hero and the featured grid, so the grid's first row is further down at every width. `D-27` records that as an accepted cost rather than a discovery.

**What is deliberately not above the fold, each with its reason.** The featured grid's first row, which used to crest at 360px and now does not: that is the second thing `D-25` cost, and the page still reads as product because the grid is the next thing after the hero. The daily block, the starter credit for `B4-2`, the exit figures because a median withdrawal time answers a question nobody has asked at second zero, and the SEO text by construction.

**And the first arrival is worse than this.** `0.4` fires on arrival and `2.1` fires at first case interaction, so they never contend, `sitemap.md`, the global sweep. But `0.4` does land on top of this first screen on the very first visit, at the width where it costs most. **The consequence that was fixed before `D-25` is now weaker and is restated rather than left standing:** the H1 sits at the top of the hero, so a dialog covering the lower half of the fold cannot take the page's own name with it. **With a banner above the hero, a first-visit dialog plus a banner can cover the H1 between them.** Stage 04 walks that exact combination, at 360px, on the first visit, and it is an acceptance step rather than a note.

---

## 2. The blocks in full

### 2.1 B1. Live drop ticker

**Component `0.8`, rendered here and on `3.3` and nowhere else.** `ux-patterns.md` requires Pattern E to be a layer on the screens where the core happens, and a feed on every screen is wallpaper rather than context. `sitemap.md` records that this restricted placement is why the component sits in cluster 0 while appearing on two nodes.

**What it carries:** the tile strip, the source mode label, the weapon and skin, the rarity tint, **a pause control**, and a destination on every tile.

**Three rules, and none of them is styling.**

1. **No invented names, and any bot present is labelled as one.** Row `A3`, carried from `aarrr.md`. `research.md` records bot visibility as the worst-in-category failure with the baseline's own ticker showing a fictional character name, and `baseline.md` section 3 could not prove it gone from one sample.
2. **Every tile lands on `7.1`, the public result, and never on a profile.** The baseline sends every tile to `/en/profile/<id>`, `baseline.md` section 3, and no job in this repository requires a profile object at all. `D-20` approved `7.1`, so the social proof surface points at something checkable instead of at a stranger's trophy shelf.
3. **The pause control is also the reduced-motion answer.** `blocks.md` section 11 records that `0.8` gained it from Key-Drop's ticker, and that one control serves two parents: design principle 2, and a person who cannot read moving text.

**States:** running, paused by the person, paused by `prefers-reduced-motion`, and **empty**. The empty state is taken from Clash.gg's own live feed, `blocks.md` T1, and it is the only thing taken from that block: a feed with nothing in it says so rather than rendering an empty strip that reads as broken.

### 2.2 B2. The promotion banner

**In by founder decision `D-25`, and it reverses a refusal rather than filling a gap.** `blocks.md` section 2 recorded the Key-Drop and Hellcase event banner as **DIFFERENT** with a reason: "no parent in round 1, and a countdown is urgency attached to spending". The founder read that and chose the baseline's behaviour, so the block ships **with its cost printed rather than argued away**: a timer beside a route to spending is pressure, and this node does not pretend otherwise.

**What it carries:** one promotion, an image, one line, one control, and a countdown where the promotion has an end.

**Six rules, and every one of them is what keeps the reversal bounded.**

1. **One promotion at a time. Never a carousel, never a stack.** A block that changes under a reader has said several things and been read as none, and a rotating slot is how a page grows promotions without anyone deciding to.
2. **The countdown counts to a real, published end.** A timer that resets on its own, restarts per visit or runs per visitor is a fabricated deadline. `CLAUDE.md` says never invent a number, and **a time is a number.** If the end is not known, the countdown does not render and the promotion still can.
3. **It carries no odds, no price and no chance.** If a promotion involves money, the money is stated on the surface it leads to, under design principle 3. **The banner is a route, not an offer sheet.**
4. **It is not the H1 and it never carries H1 markup.** `0.13` allows exactly one H1 on this page and it belongs to the hero, section 8 block B. The banner's line is body text, whatever its size.
5. **It never occupies the block on its own.** Round 1 has no event. **The empty state of this block is that it does not render at all**, and it never renders a placeholder, a spinner or a coming-soon. Same rule `A5` obeys for the auditor it does not have.
6. **It obeys the height budget, the same instrument the ticker obeys.** At 360px the banner plus the ticker may not push the H1 further than section 1.2 allows. The pixel value is stage 04's; the ceiling is this node's.

**What it may not become.** A second banner further down the page. A promotion inside the featured grid, which is the Triple Fun tile the baseline drops into its own case shelf, `baseline.md` section 4, **an advertisement shaped exactly like a case tile in a grid of case tiles**. That one is refused by name: the grid holds cases, and a paid slot dressed as the product is the clearest possible version of the thing design principle 1 exists to prevent.

**States:** present with a countdown, present without one, and absent. There is no fourth.

### 2.3 B3. The hero

**One unit, three contents: the H1, the proposition, and the institutional trust unit `A5`. Plus exactly one route into the main job.**

**`A5` renders under two hard rules from `0.11`, and one half of it cannot render at all today.**

| Half of `A5` | Rule | Status |
|---|---|---|
| **Trustpilot score** | **Live or not at all.** A hardcoded score is a fabricated review claim, which is a different category of wrong from a stale number. `0.11` group B | Whether we have a score, and what it is, is `[?]` |
| **Named third-party RNG auditor** | **It cannot render today.** `research.md` cites a 2026 audit finding that no operator in the category names one. We do not have one either, and a placeholder badge is the invented certification `0.2` refused | Absent. Not a slot with a spinner, not a "coming soon", absent |

**And `A5` carries no schema.** `0.13` refusal 1: marking a third party's reviews as our own `aggregateRating` is the fake-reviews line of Google's structured data policy plus the misrepresentation-of-affiliation line. **Live, absent, and never marked up.**

**The open question this block cannot close, and it is not this node's to close.** `cjm-to-be.md`, "A side effect worth naming before stage 03", records that the hero has **three candidate occupants**: the reveal animation, the institutional trust unit `A5`, and two prices `A1`, with the live drop feed present in every arm and therefore invisible to the instrument that was supposed to decide it. **The smallest test at `lean-ux-canvas.md` is written for two variants and measures one difference, and it needs restating before it is run.** What this node fixes is that the hero is **one unit** carrying the H1 and `A5`. Which of the three occupies the visual lead inside it is section 9's open item, and it is a stage 06 and 07 question with a test attached, not an IA question.

**No sign-in prompt in the hero.** Clash.gg's non-blocking in-hero sign-in block is a **TAKE** in `blocks.md`, and it sits in section 6, type T5, against node `2.4`. The property that matters, non-blocking, is already honoured here by the header's Sign in control, `0.1`. Home's one main CTA is opening a case, section 5, and a second competing call in the hero would spend the first screen on the wrong job.

### 2.3a B4. The row of four ways to play

**In by founder decision `D-27` of 19 August 2026, and like `D-25`'s banner it has no parent in the three legal classes.** It ships with its cost printed rather than argued away, and the cost is in the decision record: three of its four cards name something a person cannot do yet.

**What it carries:** four cards. One card per way to play, each with a name, one line of what it is, and **a control only where the thing exists**.

**Four rules, and all four are what keep `D-20`'s reasoning intact inside a block that partly reverses it.**

1. **An unlaunched card carries no control, no link, no badge and no date.** It says "Not launched yet" in words. `D-19` calls advertising a destination that does not exist the rail defect, and the difference here is that the card states the absence rather than implying availability.
2. **It never becomes a waiting list.** No notify control, no email field, no "coming soon" counter. That would turn a marked gap into an acquisition surface for a product that does not exist.
3. **A card gains its link on the day its node exists**, not on the day the mode is announced. `case battles`, `gunfights` and `upgrades` are `LATER` in `CLAUDE.md` scope with no node, no route and no page.
4. **It is not a hub and it does not grow one.** Four cards, and a fifth arrives only with a fifth way to play. `home.md` section 0 refuses Clash.gg's hub of nine, and that refusal is unchanged: what `D-27` reversed is the deferral of the carrier, not the argument against a hub.

**States:** the live card, and the unlaunched card. There is no third, and there is no loading state: this block renders from the map rather than from a feed.

---

### 2.4 B5. Featured case grid

**The block `D-20` exists for.** `sitemap.md`, "Depth to the main job, counted": "Home carries the featured case grid directly, which is what keeps the main job at three taps", and a mode hub "would also have inserted a fourth tap into a route this file locks at three".

**Composition:** one grid of `0.7` tiles, no category rows, plus **one explicit route into the full shelf**, `3.1`, labelled as all cases.

**Four fields per tile, from `0.7` after `D-24`:** artwork as the largest element, case name, entry cost in coins, risk band. The stock marker `A2` and the daily marker appear only when there is something to say, and the favourite control renders in both account states. `blocks.md` T2 records that Hellcase and Key-Drop ship name, price and image and nothing else, "which makes a person open the case to learn what is in it, which is the extra step `D1` exists to remove".

**Refero's category tile row is taken as a route rather than as a row.** `blocks.md` T1, District: hero banner, then a category tile row, then card grids. **Our category taxonomy is `[?]` and rides on `D-D`**, and `0.13` makes category URLs conditional on the same decision. A row of category entries on Home would commit a taxonomy that may not exist. The craft point survives in the reduced form: **one grid and one named route, never eighteen stacked shelves.**

**Zero-stock is visible, never filtered.** `D1`, and `3.2`'s own rule: the shelf is legibly empty rather than silently short. A featured tile whose entries are all at zero stays in the grid and says so through the stock marker.

**Two things about the grid this node does not fix**, and they are in section 9: how many tiles it holds, which rides on `D-D`, and how the featured set is chosen, which is a claim and therefore needs an owner.

### 2.5 B6. Daily cases, with the tier ladder

**In by founder decision `D-25`, and this is the largest reversal on the page.** `baseline.md` section 4 records the baseline gating its daily reward behind a **wager requirement** presented as a five tier ladder, Silver, Nova, Guardian, Legend, Elite, with a wager remaining figure and a countdown. `baseline.md` also records why it was flagged: **it is an inherited answer to the open risk in row `I2`**, that a daily free open teaches a first-session user that opening is free. Node `0.7` rule 5.3 refused the ladder outright. The founder has now chosen it.

**What is reversed, precisely, and what is not.**

| Rule | Status after `D-25` |
|---|---|
| **`CLAUDE.md`: a limit never acquires completion mechanics, streaks, status or a session score** | **Untouched and absolute.** It binds deposit limits, session limits, self exclusion and cool down, and nothing here reaches them |
| **`0.7` rule 5.3, which generalised that rule from limits to entitlements** | **Narrowed back to what `CLAUDE.md` actually binds.** The daily case is an entitlement, not a limit. The generalisation was this repository's own extension and it is withdrawn by name rather than quietly stepped over |
| **`0.11` rule 7, a number is never a score** | **Holds, and `D-28` made it harder rather than easier.** The wager figure is money in coins, not points and not a level score, and it says how much has been wagered of how much in the same unit everything else on the page is in. **A coin ladder is exactly where a currency turns into a score if nobody is watching**, so the unit stays money and `0.11` rule 10 keeps a peg within reach of the spend |

**The cost, stated in full because it is the whole of the objection.** The ladder answers the `I2` risk by making the daily case **not free but earned**, and the thing it is earned with is spending. That trades one risk for another: it removes the impression that opening is free and replaces it with a progress mechanic whose fuel is wagering. **Neither the ladder nor `I2` itself has a parent in the three legal classes.** Both are carried with empty parent cells, printed, which is the only treatment `CLAUDE.md` allows for work that no barrier, job or constraint asked for.

**Four rules that bound it, and they are not styling.**

1. **The ladder never appears on a responsible play surface, and never beside a limit.** Node `6.1` and its states carry no ladder, no wager figure and no tier, at any width and in any account state. **The place a person goes to stop is the one place progress may not follow them.**
2. **It never invites a person past their own limit.** A person with a deposit limit, a session limit or a cool down in force sees the ladder as it is and is never told what they would need to wager to advance. **The next tier is a fact about the ladder, never a suggestion aimed at a person who has set a boundary.**
3. **A tier gives a case, and nothing else.** No badge, no title, no rank against other people, no public tier on a profile. The moment the tier becomes an identity the ladder has stopped describing an entitlement.
4. **The reset is a real published moment.** Entity 13 marks availability and reset `[?]`, and **the countdown does not render until that is answered.** Same rule the banner obeys, and for the same reason.

**States:** cases available with a count, none available with the reset time, wager in progress with the figure, and **signed out**, where the ladder renders as a description of what exists rather than as progress, because a guest has no progress to show.

### 2.6 B7. One case, priced in full

**This is the densest block on the page and the one no competitor has.** `blocks.md` T3 records the gap precisely: Hellcase publishes the full drop table with chance per item to three decimals pre-login, which is the strongest thing in the category, and **neither Hellcase nor skin.club shows chance and current value on the same item**. skin.club hides odds behind a `[ CHECK ODDS RANGE ]` control. Neither prints RTP, expected value or an observed rate anywhere.

**What the block renders**, all of it pre-login, all of it crawlable text per `0.11` rule 8:

| Element | Row | Rule it carries |
|---|---|---|
| The featured case's entry cost | `C1` as `D-28` rewrote it | Coins, and the peg on the grid once rather than on every tile. `0.11` rule 10, and `0.7` section 5.1 |
| Its top item, as component `0.6` | `D2` | Weapon, skin, wear, image, current value, published chance, ticket range, rarity. Rarity, wear and StatTrak are three axes, `blocks.md` section 11 |
| Live market price with a visible timestamp | `A1` | The as-of is visible, not implied, `0.11` rule 2 |
| An outbound market link on that item | `A1` | Genuinely outbound. `cjm-to-be.md` records that outbound clicks are tracked as an accepted cost and never as a failure metric |
| The cheaper-on-average statement, in our own voice | `A1` | Not a disclaimer. The recorded line is in section 9 |
| Published tested RTP for this case | `D4` | Static until the configuration changes. Who tested, when and over how many opens is `[?]`, `0.11` section 10 |
| Expected value at this entry cost | `D4` | **Recomputable with arithmetic from the chance and the value printed in the same block.** `0.11` calls this the strongest row in the register |
| The route into that case, `3.3` | Main Job | One tap, the same tap the grid tiles carry |

**Why one worked example rather than the figures on every tile.** `0.7` is canonical and carries four fields. Adding chance, market price, RTP and expected value to every tile forks the canonical component for one page and turns the grid into a drop table, which is `3.3`'s job. **One case, fully priced, does the argument once and leaves the grid readable.** The rejected alternative is recorded here rather than left for someone to re-propose.

**The statement this block has a place for is already written and belongs to stage 05.** `cjm-to-be.md`, "What carries into voice and into concept": *"If you can afford the skin, buy it; opening is for the one you were never going to buy, and what you are paying for is the chance and the reveal, not a cheaper route to the same item."* It concedes the expected-value argument in its first clause, which is the only way a sceptic keeps reading. The block reserves the place; stage 05 owns the string.

### 2.7 B8. Check any round, with no account

**This block is not in the block bank, and that is said out loud rather than smuggled in.** `blocks.md` T1 has no row for it because **no competitor's landing page carries one**: Key-Drop's provably fair route redirects to the login page, `blocks.md` T5 and T7, and skin.club's is an H3 inside a marketing About section. The bank's own move for this case is the T3 row, "TAKE the absence as the opportunity", and this is the same move on a different type.

**Parent, named as the rule requires:** design principle 1 in `CLAUDE.md`, "trust is the product", as limited by `D-14`; plus Core Job 1, where `jtbd.md` names a public provably fair surface as one of three things no competitor offers pre-login. Two legal classes, and the sitemap already gives `1.0` a transition into `1.2`, so the route exists in the map before it exists in this block.

**What it says, in one short clause, and what it must never say.**

- **Says:** every round is committed before the click, the algorithm is published, and anyone can recompute a round here without an account.
- **Never says:** that this proves the published chances are the chances used. `0.14` section 0: a badge asserts the proposition the scheme does not prove. **No verified badge, in any variant, anywhere.**

**Home renders no variant of `0.14`.** The canonical round proof block has exactly four variants and none of them is a landing page. B8 is a route and a bounded claim, not a fifth variant, and this sentence exists so that a later stage does not add one.

### 2.8 B9. The exit, priced before the entrance

**Four things in one block, because they answer one question: what happens when I want to leave.**

| Element | Row | Note |
|---|---|---|
| **Rolling median and p90 withdrawal time**, from our own logs | `A4`, the same feature as `G3` on two surfaces | The window length is part of the claim and is `[?]`, `0.11` |
| **Commission-free withdrawal to Steam**, with the Steam Market fee as its comparison | `G6`, job only, no barrier, and it says so in its own row | The fee is a number about a third party and carries its source and date, `0.11` rule 9 |
| **Payment method marks, pre-login** | Bank T1, Clash.gg **TAKE**, on `B4-3` | Which providers we run is a contract, so the marks are structure with `[?]` contents, same as `0.2` |
| **The withdrawal threshold, stated here** | `C4` | "Stated before the deposit and can never rise". Value `[?]` |

**The block's whole argument is the pairing.** `blocks.md` T1: "Same block, earlier honesty: ours names the withdrawal threshold in the same breath, `C4`, so the way out is priced where the way in is." `jtbd.md` Section 5 records that the baseline scores 1 here, no withdrawal information visible pre-login at all.

**One figure appears twice on this page and that is by design rather than by accident.** `0.11` reads `A4` on `1.0` before login, on `5.3`, and on `0.2` if the footer's statistics slot 2 is approved. If it is, the median and p90 render in B9 and again in the footer of the same page. **They are one figure with one definition, one source and one as-of, and they may never disagree.** That is exactly what a register is for, and it is written here so that a later stage does not resolve the repetition by deleting the wrong one.

### 2.9 B10. The starter credit offer

**Row `I1`, and it ships bound to three other rows that are not optional**, `cjm-to-be.md` answer 1: `C4`, which forbids a withdrawal threshold that rises; `D1`, which requires every item a case can award to be held before anyone opens anything; and `A1`, which prints the market price beside the chance so the offer reads as an offer rather than as magic.

**So the block states, in the same breath: what the credit is, that it is bounded, and what the withdrawal threshold is.** The threshold is already in B9, and B10 restates it rather than referring to it, because `C4`'s acceptance rule is that no withdrawal ever demands a sum that was not named before the money went in.

**The route out is `2.4`**, sign in with Steam, which is the sitemap's fourth transition for this node and the only place Home routes into the door.

**What the block may not become.** No countdown. No "today only". No bonus percentage badge, which `0.1` already refuses on the deposit control on the ground that `cjm-to-be.md` cuts **any** first-deposit bonus in round 1, including the zero-wagering variant, until case mathematics are modelled. And no framing that reads as unbounded generosity, per `B4-2`.

**The credit amount is `[?]`.** `jtbd.md` Related Job 2 records the competitor range, 0.50 to 1.00 US dollars from competitor data, which is a fact about them and not a decision about us.

### 2.10 B11. The SEO text block

**Four of four competitors carry a long SEO text block at the bottom of their home page**, `blocks.md` T1, "which settles that the block exists". Ours is placed by `0.13`, with one H1 already spent at the top of the page and a real heading tree here, rather than a keyword paragraph under the fold.

**Its contents are block C of section 8, finished rather than deferred.** Two sentences in it carry a dependency and both are named there.

---

## 3. Components used, with variants

| Component | Variant on this node | Owner |
|---|---|---|
| **`0.1` Navigation** | Rail with three destinations as a guest and four with an account; header with Sign in as a guest and the two money figures with an account; mobile bar with three items as a guest and four with an account. Home is bar item 1 and is active on arrival | `0.1` |
| **`0.2` Footer** | One account state, unchanged. It carries the compliance line, 18+, responsible play and the market statement, so **Home does not repeat any of them** | `0.2` |
| **`0.4` Cookie consent** | Fires on arrival, so this node is where it is met. Section 1.2 records the two consequences | `0.4` |
| **`0.7` Canonical case tile** | Featured variant. Four fields, the stock marker only when the shelf is short, the daily marker only if the daily free case is in the featured set, the favourite control always | `0.7` |
| **The promotion banner** | **No component exists for it.** It is one block on one node and nothing else in the map renders a promotion. If a second surface ever wants one, it becomes a cluster 0 component then, not now | This node |
| **The daily tier ladder** | **No component exists for it either**, and this is deliberate: a ladder that becomes a component is a ladder that spreads. `6.1` may not render it, section 2.5 rule 1 | This node |
| **`0.6` Canonical skin item card** | **One instance**, the worked example's top item in B7. See the contradiction below | `0.6` |
| **`0.8` Live drop ticker** | Horizontal strip with a pause control. Four states, section 2.1 | `0.8` |
| **`0.11` figure block anatomy** | Value, unit and caption, as-of, route, comparison. Applied to `A1`, `A4`, `A5`, `D2`, `D4`, `G6` | `0.11` |
| **`0.5` Toasts** | **Not used on this node**, and the absence is deliberate: nothing on Home is a transient confirmation. Named so that a later stage does not add one for the ticker or the consent dialog | `0.5` |
| **`0.14` Canonical round proof** | **Not rendered here.** Four variants exist and none is a landing page, section 2.5 | `0.14` |

### A contradiction between two files, printed rather than smoothed

**`sitemap.md` lists `0.6` as "used by 3.1, 3.3, 5.1, 5.3, 7.1" and does not list `1.0`. `numbers.md` placed it on Home twice**, in group A: "Current value per item, `D2`, read on **1.0**, 3.1, 3.3, rendered by 0.6", and "Live free-unit count per item, `A2`, read on **1.0**, 3.1, 3.3, rendered by 0.6 and 0.7". **The second of the two was withdrawn on 21 August 2026 by `D-60` and the contradiction survives on the first**, which is the one that matters here: the worked example needs a current value, not a count.

**Resolved in favour of `numbers.md`, because block B7 cannot exist without it.** A worked example that prints a chance and a current value is a skin card by definition, and forking a second card for one page is exactly what the one canonical component rule forbids. **`0.6` renders on `1.0` in one instance.**

**What this node cannot do is fix the other file.** `sitemap.md`'s "used by" cell for `0.6` is missing `1.0`. Owner: node `0.6` when it is written, or the step 8 audit, whichever reaches it first. Recorded here so that it is a finding rather than a discovery.

---

## 4. States

### 4.1 The two account states

| Zone | Guest, `1.0` | Account exists, `1.1` |
|---|---|---|
| **Ticker B1** | Unchanged | Unchanged |
| **State strip** | Does not exist | **Inserted directly under the ticker.** Balance, the next step, daily free entry status |
| **Banner B2** | Present, absent, or present without a countdown | Unchanged. **The banner does not know the account state**, and a promotion that changes by whether a person is signed in is a second banner wearing one name |
| **Hero B3** | First screen: H1, proposition, `A5`, one route | H1 stays and stays single. The `A5` unit **moves below the grid**, because the person has already answered the question it exists for |
| **Grid B5** | Unchanged | Unchanged |
| **Daily B6** | **The ladder renders as a description of what exists**, with no progress and no wager figure, because a guest has none. The control routes to `2.4` | The ladder with the person's own tier, the wager remaining figure in coins, the reset countdown, and the count of cases available |
| **B7 to B11** | Unchanged | Unchanged |
| **Shell** | Sign in in the header, **one rail item, two bar items** | Two money figures and the deposit control in the header, **two rail items, three bar items**. Each money figure carries its own route, balance to `4.1` and value of items held to `5.1` |

**The shell row was superseded on 19 August 2026 by `D-29`** and the counts above are the ones that hold. It read "three rail items, three bar items" against "four rail items, four bar items", written when the rail still carried Provably fair and Responsible play. `D-29` moved both into the footer and left the rail with Cases, plus My items once an account exists. The old counts are recorded here rather than deleted because they are what the fold argument in section 1.2 was measured against.

**Nothing is removed in either direction.** This is the YouTube signed-out row from `blocks.md` T1 taken literally: "one page, a state-dependent strip, not a different page", and never a login wall.

### 4.2 Node 1.1, Home with an account

**`1.1` is a numbered node in `sitemap.md` and it is specified here, under its own anchor, because it is a state of this page rather than a page of its own.** Its `INCLUDES`: "The same page with a state-dependent strip: balance, the next step, daily free entry status. A different first screen, not a different page." Its transitions: `3.3`, `4.1`, `5.1`.

**The strip carries three things and no fourth.**

| Slot | What it shows | Route |
|---|---|---|
| **Balance** | The spendable figure, in coins, `C1` as `D-28` rewrote it. **The same value the header shows and never a second computation of it** | `4.1` |
| **The next step** | Exactly one, resolved by the ladder below | varies |
| **Daily free entry status** | Available, or used with the time it resets | `3.3` of the daily case |

**The next-step ladder, in order, and the order is the primary persona's.**

1. **A boundary is in force, `6.3`.** The strip states the boundary and when it ends, and **offers no open route at all**. Deposits and opening are closed; withdrawal stays open, `flows.md` flow 2a.
2. **A daily free entry is available.** The cheapest next open for the person whose job is opening. Routes straight to that case's own case screen.
3. **Balance is sufficient for a featured case.** The next step is to open, which is the same call the guest state carries.
4. **Balance is not sufficient and no free entry is available.** The deposit route appears **as a route and never as a prompt**: no urgency, no countdown, no percentage badge, no "you are running low". `0.1` already refuses the badge on the deposit control itself.
5. **Nothing above applies.** The strip shows the balance and the daily status and offers no next step. An honest empty is better than a manufactured one.

**The third transition, `5.1`, is carried by the shell rather than by the strip.** The header's value-of-items figure and the rail's My items both route there, `0.1`. The strip does not repeat it, because for the primary persona the next step is opening rather than counting inventory, and `CLAUDE.md` says the primary persona wins when two decisions conflict. Related Job 5 scores 2 for The Opener and 3 for The Accumulator, `jtbd.md` Section 5, which is exactly the conflict this rule was written for.

**Four things the strip may never become**, and every one of them has a source:

- **No streak, no consecutive-day counter on the daily free entry.** `0.11` rule 7, and the limits rule in `CLAUDE.md`, which binds this stage by name. `I2` is the one MVP row with **no parent in any of the three legal classes**, carried by founder decision with its risk printed, and the risk is precisely that a daily free open teaches that opening is free. A streak would turn that into a reason to come back rather than a status line.
- **No ticking countdown to the reset.** The status states the moment it resets, not the seconds remaining. `blocks.md` T1 refuses a countdown attached to spending, and a ticking clock on a free entry is the same mechanism with a friendlier subject.
- **No session score, no progress bar, no total-won figure.** `0.11` rule 7 again: a number is never a score, and the two money figures in the header are never summed.
- **No restriction notice.** `G4` places the written ground on the withdrawal record, `5.6` and `5.3`. **And there is no out-of-product notification channel anywhere in the backlog**, which the global sweep named as a gap with no parent. Home does not invent one.

**Indexation of `1.1` is not a question.** A crawler is never signed in, so the indexed render of `/` is always the guest render. `1.1` needs no meta of its own and section 8 describes `1.0`.

### 4.3 Figure states, inherited whole

**Every figure on this page inherits all seven states from `0.11` section 7:** live, stale, degraded, below the sample floor, missing, forked, withdrawn. Three of them are load bearing here.

| State | Where it lands on Home | Rule |
|---|---|---|
| **Missing** | Any figure whose source fails | An explicit "not available", **never a zero and never a dash**. A dash that reads as zero and a zero that means "we do not know" are the same lie in two typefaces |
| **Degraded** | The market price `A1`, the Trustpilot score `A5` | The last known value **and** the fact that the source is failing, or nothing at all where a wrong number is worse than no number |
| **Withdrawn** | `A5`'s auditor half today. `A4` if `D-C` comes back negative | The figure is gone, and where it was load bearing the surface says a number used to be here and why it is not |

**`0.11`'s condition stands above all of them.** `D-C`, the internal observed-against-published check, runs on live platform data before any of this is drawn, and it is scheduled before stage 04. If it fails, the rows conditional on it are not redesigned, they are withdrawn, and this page loses B7's `D4` figures and part of B9.

### 4.4 Loading, and the one rule that is not cosmetic

| Refresh class on this page | Rows | Loading behaviour |
|---|---|---|
| **Real time** | The favourite count on every tile. **Free-unit counts `A2` were this row until 21 August 2026 and are withdrawn**, `D-60` | The tile renders with the count pending, never with a zero |
| **Per read** | Market price `A1`, Trustpilot `A5` | Fetched when the page is read, and carries the moment it was fetched |
| **Rolling window** | Median and p90 `A4` | Window length printed with the figure |
| **Static until the configuration changes** | Chance `D2`, tested RTP and expected value `D4`, commission `G6` | No loading state at all |

**The rule:** every block reserves its own height before its figures arrive. A figure that arrives late and pushes the grid down is a layout shift on the product's most measured page, and design principle 5 says speed is trust.

### 4.5 What does not happen on this page, and why each absence is deliberate

| Not here | Where it is instead | Why |
|---|---|---|
| **The age gate `2.1`** | `3.3`, at first case interaction | `B3` says "before any case interaction", not before any interaction. A gate on arrival would block the pre-login trust evaluation that Related Job 1 and this entire node depend on. `sitemap.md` counts the taps: tap 1 is the tile, tap 2 is the gate on the case screen, tap 3 is Open |
| **The geo block `2.2`** | `2.1`, and it renders at the URL the person is already on | `markets.md` section 10: the block is a state inside the flow and never a server-level ban on reading the site, so **Home renders identically in every market**. It is also what stops a crawler being served a blocked state |
| **The 18+ statement and the market statement** | `0.2`, the footer's compliance line, on every page | It never becomes an accordion at any width, `0.2`. Repeating it as a Home block would create a second source for one statement |
| **A sign-in wall of any kind** | Nowhere. It does not exist in this product | Hellcase's arrival modal is a **LEAVE** in `blocks.md` T5, and skin.club's "Authorization is required to open cases" is a **LEAVE** in T3 |
| **Any error state** | `0.3`, as full pages with correct HTTP status | Home has no error of its own. A failing figure is a figure state, section 4.3, not a page error |

---

## 5. Main CTA

**One clear next step: open a case, expressed as a tile in the featured grid.**

Not sign in, not deposit, not claim the credit. The route is the main job's tap 1, `sitemap.md` counts it, and the reason it beats the alternatives is `B1-1`: a person who has not yet decided the place is real does not want an account, they want to see the product. The account arrives when the credit is claimed, B10, or when the balance is needed, and both are further down the page on purpose.

**In `1.1` the CTA is the strip's next step**, resolved by the ladder in section 4.2, and the grid stays exactly where it is.

---

## 6. Emotional support

**One row in the base layer's table lives on this node, and only that one is listed here.**

| Job | Mechanism | Where exactly on this page |
|---|---|---|
| **Social Job 2**, be part of a platform that feels alive, `jtbd.md` Section 3 | Live drop feed with no invented names, any bot labelled as one, every tile linking to a public result rather than to a user profile, so the social proof is checkable rather than decorative | **Block B1**, directly under the header, as an ambient layer and never as a destination |

**Emotional Job 1 and Emotional Job 2 are not on this page** and no mechanism is invented here to look complete. Their mechanisms live on `3.3` phase 2 and on `3.3` phase 3 into `7.1`, per the same table.

**Microcopy is a placeholder with a reserved place, not a text.** Stage 05 writes the strings. What this node fixes is which information has to be in each place, and the one recorded line for B7 is quoted in section 2.4 as stage 05's property rather than as final copy.

---

## 7. Adaptive behaviour

**Base: 360px.** One column throughout. The order is exactly section 1's. The featured grid is **two columns** at this width, which `D-24` made possible by taking the tile down to four fields. The state strip in `1.1` is one row that wraps to two rather than scrolling sideways. Nothing on this page scrolls horizontally, including the grid: a horizontally scrolling shelf hides half the product behind a gesture, which is the defect `3.2` and `D1` exist to prevent at a different level.

**The ticker is the one exception and it is a moving strip rather than a scroll container**, with a pause control and a reduced-motion state. It never becomes the page's own horizontal overflow.

**Desktop, from 900px.** The rail is beside the content, the mobile bar does not exist, and the ticker spans the content column at the baseline's own height.

| Block | Desktop change |
|---|---|
| **B2 banner** | Full bleed across the content column, at the baseline's own proportion. **It does not grow a second slot beside itself at any width**, section 2.2 rule 1 |
| **B3 hero** | Splits into two: the H1 and the proposition on one side, the `A5` unit on the other. Whichever of the three candidates leads is section 9's open item |
| **B4 ways to play** | Four columns, one card each. **Two columns at 360px and never a horizontal scroll**, the same rule the grid obeys. The three unlaunched cards keep their full size: shrinking them would make the gap read as smaller than it is |
| **B5 grid** | Four columns. Still one grid, still no category rows |
| **B6 daily** | The ladder becomes one horizontal run of five tiers with the wager figure at one end and the control at the other. **At 360px it is a vertical run and never a horizontal scroll**, same rule as the grid |
| **B7 worked example** | Two columns: the `0.6` card on one side, the four figures and the statement on the other |
| **B8 proof route** | Unchanged, one narrow unit. It is short by design |
| **B9 exit** | The figures become one row of cells rather than a stack |
| **B10 offer** | Full width band |
| **B11 SEO text** | **Constrained to a readable measure, never the full width.** It is the one block on the page that is read as prose |

**No block is added, removed or reordered at any width.** Same discipline `0.1` applies to destinations: only the carrier changes, never the contents.

**One layout considered and not taken.** Refero's Stocktwits screen, a fixed left rail plus a centre live column plus a right information column, is a **TAKE** in `blocks.md` T1 for the rail-plus-live-centre shape, and this node takes exactly that half. **The right information column is not taken:** at 1440px minus the rail, a third column costs the featured grid its fourth tile per row, and Home's information blocks are arguments that need full measure rather than a sidebar.

---

## 8. SEO block, A to E

**Everything structural is inherited from `0.13` and nothing is decided a second time here.** URL `/`, indexed, canonical self, `Organization` plus `WebSite`, no breadcrumb, no hreflang anywhere.

### A. Meta tags, with finished copy

| Tag | Value |
|---|---|
| **title**, 51 characters | `Open CS2 cases with published odds and payout times` |
| **description**, 150 characters | `Every case shows the chance and current value of each item, plus tested RTP and expected value at that cost. Withdrawals go to Steam, commission free.` |
| **canonical** | `https://<host>/`. The host is `[?]`: apex against `www` and the domain itself are open in `0.13` section 11 |
| **robots** | `index, follow` |
| **hreflang** | **None.** One language, English, locked in `CLAUDE.md`, and `0.13` section 1 makes the absence a rule rather than an omission |
| **og:type** | `website` |
| **og:title**, **og:description** | As above |
| **og:image** | `[?]`. The asset is stage 06 and 07. The requirement fixed here: it is an image of the product, it carries no figure baked into it per `0.11` rule 8, and it is not the Trustpilot score |
| **twitter:card** | `summary_large_image` |

**No brand suffix in the title.** "CS2 Clutch" is a working placeholder name, `CLAUDE.md`, and a placeholder in a title tag is the kind of string that ships. If a real name arrives, a " | Name" suffix of up to nine characters fits inside 60 without touching the rest.

### B. Headings: exactly one H1, then the H2 list in block order

**H1:** `Open CS2 cases with the chance, the value and the payout time on the page before you spend`

**The structural requirement, which outlives that string:** the H1 names the action and the condition attached to it. Never the product name alone, never a slogan, never "CSGO & CS2 CASE OPENING SITE", which is what the baseline runs, `baseline.md` section 4. Stage 05 owns the final wording and syncs it back here.

| Order | H2 | Block |
|---|---|---|
| 1 | *(no H2)* | **B1 ticker.** A labelled region rather than a section: `<section aria-label>`, no heading |
| 2 | *(no H2)* | **B2 banner.** A labelled region. Its line is body text at any size, rule 4 of section 2.2, and it never takes H1 or H2 markup |
| 3 | *(no H2)* | **B3 hero.** Its heading is the page's H1 |
| 4 | `Ways to play` | B4. **Its four card names are H3s**, so the row has a heading tree rather than four bold lines |
| 5 | `Cases you can open right now` | B5 |
| 6 | `Your daily case` | B6 |
| 7 | `What this case actually costs` | B7 |
| 8 | `Check any round without an account` | B8 |
| 9 | `Getting your skin out` | B9 |
| 10 | `Your first open, without a deposit` | B10 |
| 11 | `What opening a case here involves` | B11, with H3s inside it, listed in block C |

**Three blocks carry no H2 and the reason is written here so the stage 04 check stays mechanical.** `0.13` section 5 makes the H2 list the block order and the check "read the block order, read the H2 list, they match or the node is wrong". The rule with its two exceptions: **every content block carries an H2 in order; the hero does not, because its heading is the H1; the ticker and the banner do not, because both are labelled regions rather than sections.** The banner's exemption is the one that has to be enforced rather than assumed: a promotion is the block most likely to arrive from a marketing hand with a heading already on it.

### C. SEO text, finished

Rendered in block B11, under the H2 `What opening a case here involves`.

> A case is a fixed set of CS2 skins with a published chance on each one. You pay the entry cost in coins, one roll decides the item, and the item moves to your Steam inventory when you withdraw it. What one coin is worth in real money is published wherever money is spent, so a price can be converted back by the person reading it rather than only by us.
>
> **### The numbers we publish before you spend**
>
> Every case prints the chance and the current value of each item it holds, the tested return to player for that case, and the expected value at that entry cost. The number of units we actually hold of each item is printed on the item, because a chance at something we cannot deliver is not a chance.
>
> **### What happens when you want to leave**
>
> Withdrawal goes to your Steam inventory and we take no commission on it. How long it takes is published on this page from our own logs, as a middle time and a slow-case time, and every withdrawal in progress shows which side it is waiting on: us, Steam, or you.
>
> **### What the fairness proof covers, and what it does not**
>
> Every round is committed before you click and can be recomputed afterwards with a published algorithm, by us or by any tool you trust. That proves the outcome was fixed before the click and was not altered after it. It does not prove that the published chances are the chances used, and that is a different question with a different answer: the observed rate stands beside the published one on every case.

**Two dependencies inside this text, printed rather than left to be discovered.**

1. **"the tested return to player" assumes a test exists.** `0.11` section 10 carries "who tests our RTP" as an open item: tested by whom, over how many opens, republished when. If it is never answered, the phrase changes and `D4` changes with it.
2. **The last sentence is conditional on `D-B`.** The observed rate counter `D3` assumes six years of roll history migrates and can be published. If `D-B` comes back negative the row is withdrawn, and **this sentence is deleted with it rather than left standing as a claim the product does not make**.

**Interface strings do not live here.** Buttons, field labels and state texts move to `voice/docs/microcopy.md` after stage 05. What this node keeps is the requirement about which information belongs in each place.

### D. Structured data

**`Organization` plus `WebSite`, and nothing else**, from `0.13` section 7. `Organization` matches the identification block `0.2` already carries.

**Three refusals, and all three are `0.13`'s own rules applied to this page rather than new opinions.**

| Refused | Why |
|---|---|
| **`aggregateRating` or `Review` on the Trustpilot score** | `0.13` refusal 1. They are a third party's reviews, held by that third party, and marking them as ours is the fake-reviews line of Google's policy plus the misrepresentation-of-affiliation line. **Live, absent, and never marked up** |
| **`ItemList` on the featured grid** | `0.13` assigns `CollectionPage` plus `ItemList` to the catalogue and the category views. Home is not a listing, it is a curated subset with no result count and no facets, and marking it as one states a page type this page does not have |
| **`Offer` on the tiles or on the worked example** | `0.13` refusal 2 and its schema map: the case is the offer and the offer lives on `3.3`. Entry costs are visible here as information, and the transaction opportunity is on the case screen |

**And no `SearchAction`.** There is no site-wide search: `blocks.md`'s global sweep put search inside `3.1`, and `0.1` gives the header no actions at all. Markup for a search endpoint the product does not have is the same class of wrong as the three above.

### E. Optimisation checklist

1. **Exactly one H1**, and it is the first thing after the shell. Not below the fold, which is what `blocks.md` T2 records Hellcase doing.
2. **The H2 list matches the block order**, with the two stated exceptions in block B.
3. **No breadcrumb**, per `0.13` section 6: a breadcrumb to yourself is decoration.
4. **Canonical self, no hreflang**, and the host resolved once at production.
5. **Every route is a crawlable `<a href>`**: every grid tile into `/cases/<slug>`, every ticker tile into `/r/<id>`, the shelf route into `/cases`, B8 into `/provably-fair`, B10 into `/signin`. `0.13` section 8: a destination reachable only by script does not exist for a crawler and often not for a keyboard either.
6. **Text, never an image, for every figure on this page.** `0.11` rule 8 and `0.13` section 10 item 6, which singles out the pre-login figures. They are the product's entire pre-login argument and an image removes them from search and from a screen reader in one stroke.
7. **LCP is the hero or the first grid row, and never the ticker.** A moving strip as the largest contentful paint makes the metric depend on an animation, and design principle 5 makes speed a product rule rather than a production concern.
8. **CLS: every block reserves its height before its figures arrive**, section 4.4.
9. **The meta description has a source on the page**, `0.13` section 10 item 5: every claim in it is rendered in B7 and B9.
10. **Accessibility of the figures:** the accessible name carries the unit and the as-of, not the bare digits, `0.11` section 9. Real-time counters update silently rather than announcing, and a degraded or missing figure is announced in text rather than by colour alone.

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Which of the three candidates leads the hero** | The reveal animation, the institutional trust unit `A5`, or two prices `A1`. `cjm-to-be.md` records all three plus the fact that the live drop feed sits in every arm and cannot be isolated by that instrument. **The smallest test at `lean-ux-canvas.md` is written for two variants and needs restating before it is run** | Founder, then stages 06 and 07 with the restated test |
| **How many tiles the featured grid holds** | It rides on `D-D`, whose subject changed on 21 August 2026: it was inventory capital for stock-backed tables and since `D-60` there is no shelf to capitalise, so what it sets is simply how large the catalogue is. Two boundaries are fixed here and the number is not: it may not be small enough to read as the dead item defect `D-20` describes, and it may not grow into the shelf that `3.1` owns | Founder, with the treasury answer |
| **How the featured set is chosen** | "Featured" is a claim about why these cases and not others. Hand-curated, by volume, by margin, by stock: nothing anywhere in this repository says | Founder, before stage 04 |
| **Whether the daily free case appears in the featured grid** | It is an addressable case on `3.1` by the sitemap's obligation, and `0.7` carries a daily marker "where it applies". Whether it applies on Home is part of the selection rule above. `0.1` carries the matching open item for the rail and reaches the same conclusion: either it becomes a node or it stays inside `3.1` | Same owner as the row above |
| **Whether we have a Trustpilot score at all** | `A5` requires it live or absent. Whether the redesigned product inherits the baseline's reviews, starts empty, or is a different entity is not decided anywhere | Founder |
| **The named auditor** | `A5`'s other half. Nobody in the category has one, `research.md`, and we do not either. **It cannot render today** | Founder |
| **The rolling window for the median and p90** | Seven days, thirty, ninety. The length is part of the claim and has to be printed with it, `0.11` | Founder with the data, before stage 04 |
| **Who tests our RTP** | `D4` says published tested RTP. Tested by whom, over how many opens, republished when. Block C's second paragraph depends on the answer | Founder, `0.11` section 10 |
| **The starter credit amount and its bounds** | `I1` is bounded and the bounds are not written anywhere. The competitor range in `jtbd.md` is a fact about them | Founder |
| **Whether B10 renders to a signed-in person at all** | Added 19 August 2026 by the step 9 audit. The state matrix in section 4.1 says B7 to B11 are unchanged in both states, and `1.1` was drawn with B10 replaced by a second withdrawal-threshold block, which put the same missing figure on one page twice and dropped `I1` from the account render with nothing recorded. **The render has been put back to the matrix.** Whether an offer whose whole subject is a first open without a deposit should be shown to a person who already has an account, and whether it should disappear once claimed, is a product answer the matrix never gave | Founder |
| **The withdrawal threshold value, `C4`** | The rule is fixed, stated before the deposit and never rising. The number is `[?]` | Founder |
| **The payment marks** | Which providers we run is a contract, the same answer `0.2` gives for its own row | Founder |
| **`sitemap.md`'s `0.6` "used by" list** | It omits `1.0`, while `numbers.md` places `0.6` here twice. Resolved for this node in section 3, unresolved in that file | Node `0.6`, or the step 8 audit |

| **What the banner promotes in round 1** | Nothing exists to put in it. The block ships with an absent state that renders nothing, section 2.2 rule 5, **so the page is complete without an answer and incomplete with a placeholder** | Founder, whenever there is a promotion |
| **The reset moment of the daily case, and the wager figure that unlocks each tier** | Entity 13 marks availability and reset `[?]`, and no tier boundary is written anywhere. **The countdown does not render and the ladder cannot state a target until both are set**, section 2.5 rule 4 | Founder, with the treasury |
| **Whether the ladder survives its own review** | `D-25` reversed `0.7` rule 5.3 to allow it and printed the cost: the ladder removes the impression that opening is free by making spending the route to a free case. **Nobody has yet reviewed that trade against the responsible play surface it deliberately never touches** | Founder, before stage 04 draws it |

**And what belongs elsewhere.** The words in any string on this page: stage 05, which syncs the voice-aligned version back into block C. How the grid, the figures and the hero look: stages 06 and 07. Whether `D-C` returns yes at all, which decides whether half of B7 and part of B9 are drawn: not a design question, `0.11` section 1.
