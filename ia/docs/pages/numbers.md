# Node 0.11. Published numbers register

**Type:** register. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Hold every number this product publishes about itself in one place, with its computation, its refresh, its behaviour when the data is missing, and the surfaces that read it, so that a figure is defined once instead of five times.

**Jobs served.** None directly: a register is read, never visited. **Parent class:** barrier `B8-2`, the withdrawal that goes silent, pattern of 6, and barrier `B7-2`, the belief that the numbers shown are not the numbers used, pattern of 11, by way of rows `A4`, `G3`, `D2`, `D3` and `D4`; Related Job 1, arrive with confidence; and design principle 1 in `CLAUDE.md`, quoted by its `D-14` limit, "the product is built so that its own numbers are checkable". All three legal parent classes, and each row below names its own.

**Read by:** `1.0` Home, `1.2` Provably fair, `3.3` Case screen, `5.3` Withdrawal, `0.2` Footer. Rendered by `0.6` and `0.7` where a number sits on a card.

**Not drawn at stage 04.** A register has no screen. The nodes that read it do, and each of them carries its figures into its own wireframe. What stage 04 inherits from here is the state set and the anatomy in sections 6 and 7, not a layout.

---

## 0. Why this is a node, and what a register is

Registered by the global sweep at step 3 on 12 August 2026. The sweep counted consumers before writing verdicts, and this one came back with five surfaces reading one family of numbers.

**The backlog itself argues for it.** Rows `A4` and `G3` are described in `cjm-to-be.md` as "the same feature, two surfaces". Node `0.2` made it a third within one step of that sentence being written, and did so while asserting a reconciliation route that does not exist. That is the failure mode a register prevents: **a number defined at each surface is a number that will eventually disagree with itself**, and the disagreement lands on the one claim this product cannot afford to get wrong.

**A register is a node read by several nodes and drawn by none.** It is not a page, because nobody navigates to it. It is not a component, because nothing renders it. The type was introduced by the sweep with that definition so that stage 04 does not enter it into the coverage check as a screen with no wireframe.

---

## 1. The condition that stands above every row

**`D-C`, from `cjm-to-be.md`, open decisions.** Every capability in this register is a commitment device that only works for an operator whose published weights are already true. The observed-against-published check has to run internally on the live platform's data **first**, and if it does not hold, that is a business decision preceding the design one. `cjm-to-be.md` also records the other half: once that check ships to the public **it is never taken down**.

**Which makes this register the place where the cost of principle 1 becomes concrete.** Publishing a number is not a display decision. It is a permanent commitment, and the design work below assumes the answer to `D-C` is yes. If it is not, the rows conditional on it do not get redesigned, they get withdrawn, and section 6 carries a withdrawn state for exactly that reason.

**`D-C` is scheduled before stage 04.** Nothing in this register is drawn until it returns.

---

## 2. Group A: numbers we compute about ourselves

We are the source. For each of these the method has to be publishable, not only the result.

| Number | Parent | Read on | Its route to something checkable | Refresh |
|---|---|---|---|---|
| **Cases opened, running total** | Founder decision of 11 August 2026, the inherited strip, plus `B1-1` | 0.2 | The per-case observed rate counters, row `D3`, whose N comes from the settlement ledger that pays users. **Per case, not one auditable total**, and conditional on `D-B` | Per round |
| **Observed rate per tier: published, observed, N** | `D3`, on `B7-2` pattern of 11 and `B6-2` pattern of 9 | 3.3 | It is itself the route: the published percentage stands beside it in the same unit the complaint is made in. **Never reset.** A weights change forks the counter, the old configuration keeps its history and stays visible, the new one starts at zero and says so | Per round |
| **Published chance per item** | `D2`, on `B7-2` | 3.3, rendered by 0.6 | The observed counter beside it, and the ticket range the roll resolves against | Static until the configuration changes |
| **Current value per item** | `D2`, with the market price and timestamp from `A1` | 1.0, 3.1, 3.3, rendered by 0.6 | The outbound market link on the item | Per read |
| **Published tested RTP for this case** | `D4`, on design principle 3 and `B1-2` | 3.3, and before login on 1.0 | **The test itself, which has to be named and dated: who tested, when, over how many opens.** Open, see section 10 | Static until the configuration changes |
| **Expected value at this entry cost** | `D4`, design principle 3 in `CLAUDE.md`, "odds, cost and expected value are visible and legible" | 3.3 | **The strongest row in the register: it is recomputable with arithmetic from the chances and values printed on the same screen.** A reader who distrusts the figure can derive it without leaving the page | Static until the configuration changes |
| ~~**Live free-unit count per item**~~ | `A2`, on `B8-1` | **Nowhere.** Was 1.0, 3.1, 3.3 | **Withdrawn 21 August 2026, `D-60`, and it is the first row in this register to use section 7's withdrawn state.** Every item is current and available, so the product computes no such figure and no surface reads one. **The row stays rather than being deleted**, because section 7 requires this file to keep a withdrawn figure with its reason, and a figure that leaves a register silently is a figure somebody restores by habit | Was real time |
| **Rolling median and p90 withdrawal time** | `A4` and `G3`, on `B8-2` pattern of 6 and Related Job 1 | 1.0 before login, 5.3, and 0.2 if slot 2 is approved | The person's own clock on their own withdrawal, row `G1`, which either lands inside the published figure or does not | Rolling window, length `[?]` |
| **Published ceiling per withdrawal state** | `G2`, on `B8-2` | 5.3 | The same clock. The row's own success signal is that our states stay inside the published ceiling at p90 | Static until republished |
| **Per-state timer with attribution to us, Steam or you** | `G1`, on `B8-2` | 5.3 | It is the check for the two rows above | Real time |
| **Published appeal response deadline** | `G4`, on `B8-3` pattern of 3 | 5.3, 2.9, 0.10 | The person's own appeal, which either gets an answer inside the deadline or does not | Static until republished |
| **Published deposit crediting window** | `C3`, on `B4-3`. **Added by the step 8 audit:** `C3` promises a named timer and this register held no deposit row at all, so `4.1` had a promise with no owner | 4.1, and the crediting state 4.4 | The person's own deposit, which either credits inside the published window or does not. **Value `[?]`**, and a competitor states the same figure only in an FAQ, which is the placement this row exists to refuse | Rolling window, length `[?]` |
| **Commission, zero to Steam** | `G6`, Related Job 5, job only, no barrier | 1.0, 5.3 | The withdrawal itself. A commission of zero is the one figure a person verifies by finishing the transaction | Static |
| **Risk band per case, three named values** | Design principle 3 in `CLAUDE.md`, quoted: odds, cost and expected value are visible and legible. Placed on the tile by `D-24`. **No backlog row yet** | 1.0 and 3.1 as a band rendered by 0.7, 3.3 as the figure it is derived from | **The method reads the same drop table whose chances and values are printed on 3.3**, so a reader recomputes the band without leaving the page, the way the expected value row already works. **The thresholds between the three values are `[?]` and the band cannot render until they are set** | Static until the configuration changes |
| **Favourite count per case** | **None in the three legal classes.** In by founder decision `D-24`, which is also what amends rule 7 to admit it | 1.0 and 3.1, rendered by 0.7 | The person's own press, which moves the count by one in front of them. It has no other route and it claims nothing beyond itself | Real time |
| **Steam API health, the degraded flag** | `G2` | 5.3 as a banner | A published state rather than a figure, driven by a measurement, and it is in this register because it obeys the same missing-data rules as the numbers it protects | Real time probe |

---

## 3. Group B: numbers we quote from outside

The source is somebody else's. For these, the rule is not "publish the method", it is **name the source and the date, or do not print the number**.

| Number | Source | Read on | The rule it carries |
|---|---|---|---|
| **Live market price with timestamp, plus an outbound market link on the top item** | A named market venue | 1.0, 3.3 | Row `A1`. The timestamp is visible, not implied. The link is genuinely outbound, and `cjm-to-be.md` records that outbound clicks are tracked as an accepted cost and never as a failure metric, which is what stops the link from being quietly weakened later |
| **Instance value receipt: current sell price for the comparable float band and phase on two named venues** | Two venues, `[?]` which | 3.6, then carried by `F2` onto 5.1 and 5.3, rendered by 0.6 | Row `F1`. Priced as **that instance**, never as the skin name, and the link opens the venue listing filtered to that float band so the person checks it themselves rather than taking our word |
| **Trustpilot score** | Trustpilot, live | 1.0 hero | Row `A5`. **Live or not at all.** A hardcoded score is a fabricated review claim, which is a different category of wrong from a stale number |
| **Named third-party RNG auditor** | An auditor we have not engaged | 1.0 hero | Row `A5`, and **it cannot render today.** `lean-ux-canvas.md` records that nobody in the category has a named auditor, which is the opportunity and also the fact: we do not have one either. A placeholder badge is the invented certification node `0.2` refused |
| **Steam Market's 15 percent fee** | `jtbd.md`, Related Job 5, research basis, sourced there to `strategy.md` and `competitors.md` | 1.0, 5.3, wherever `G6` argues its value | A number about a third party that can change. Dated and sourced where printed |
| **Category tested RTP figures** | `aarrr.md`, "What competitors reveal": Hellcase 82.1 percent tested, DatDrop 80.6 percent tested across 118 cases, Key-Drop 89 percent **stated**, Clash.gg 90 to 92.8 percent platform-disclosed | Only where a comparison is printed | **Never mix a tested figure with a stated one in the same comparison.** Two of those four are third-party tests and two are platform claims, and a row that prints them side by side as though they were the same measurement is doing the thing this product exists to stop |

---

## 4. Group C: proposed, and not capabilities yet

Kept visible so that nobody later ships one by assuming it was approved.

| Candidate | Status |
|---|---|
| **Aggregate tested RTP across all cases** | Proposed by node `0.2` as the fallback for statistics slot 4. Adjacent to `D4` rather than inside it, so **it needs its own backlog row before it can ship** |
| **Online users** | Carried with a condition by `0.2`: it ships only if it counts humans in real time. If it cannot, it does not ship |
| **Total users, Upgrades** | **Cut by `0.2`**, one as unverifiable from outside and one as a counter for a LATER mode. Recorded here so they are not restored by habit at stage 04 |

---

## 5. Ten rules every published number obeys

1. **A route, or it does not ship.** Every figure points at something a stranger can open, compute or wait for. `D-14`: a number without one is decoration that looks like evidence.
2. **An as-of moment on anything that moves.** Row `A1` requires the timestamp by name, and the rule generalises: a figure with no time attached is read as current forever.
3. **Missing is a state, never a zero.** A dash that reads as zero and a zero that means "we do not know" are the same lie in two typefaces. `CLAUDE.md`: unknown is `[?]`, and that discipline is why this register exists.
4. **Below the sample floor, print N rather than a percentage.** `D-B` says the observed rate counter is worth nothing at N = 0. A percentage over a handful of rolls is not a smaller truth, it is a different claim.
5. **A configuration change forks the counter.** From row `D3` verbatim: the old configuration keeps its history and stays visible, the new one starts at zero and says so. A counter that silently absorbs a weights change is worse than no counter.
6. **A failed source is marked degraded, never frozen at its last good value.** The Steam health probe in `G2` is the pattern, and it applies to every real-time figure here.
7. **A number is never a score.** No summing across kinds, which is why the header's two money figures are never added, node `0.1`. No streaks, no progress, no celebration, which is the rule `C5` and `T4` attach to limits and which binds this register too: the moment a figure acquires completion mechanics it stops describing and starts encouraging. **One named exception, and it is named rather than quietly allowed: the favourite count on node `0.7`, founder decision `D-24` of 18 August 2026.** It is a count of accounts that marked a case, not a rank, not a rating and not a measure of anything the platform is claiming. The decision that admits it also fixes what it may never become: a rank, a default sort, a most-popular strip, a badge on a top tile, or a figure beside an open control. **It is one count in one place and it is not a precedent for a second.**
8. **Text, never an image.** A figure baked into a picture is invisible to search, to a screen reader and to a person who copies it into a complaint.
9. **A number about someone else carries its source and its date, or it is `[?]`.** The same rule this project applies to its own research, applied to product copy, because a comparative claim in the interface is a claim about a third party.
10. **A money figure carries its unit, and a coin figure carries its peg wherever money is spent.** `D-28` of 19 August 2026 reversed `C1` and made the coin the product's denomination, which removed the structural answer to `B7-1`, the currency abstraction that hides what things cost. **What is left of that answer is this rule, and the decision ships on it rather than beside it.** Wherever a person is about to spend, commit or withdraw, the coin figure renders with what one coin is worth in real money, from a published rate carrying its own as-of under rule 2. **Three consequences, and each one is a place this rule is checked.** A coin figure with no peg within reach of the spend is the abstraction `B7-1` names, not a shorter label. **Time and ratios do not become coins:** `A4` and `G3` stay minutes, `D4` stays a percentage, and converting either into coins would be summing across kinds under rule 7. **A figure quoted from outside stays in its own unit:** `A1`'s Steam market price is real money, and until the peg is published it is marked as not comparable rather than set silently beside a coin value.

---

## 6. Refresh classes

Five, and every row in sections 2 and 3 belongs to exactly one. The class is what decides both the staleness rule and the cost.

| Class | Rows | What staleness means here |
|---|---|---|
| **Real time** | The withdrawal clock `G1`, the Steam health probe `G2`, the favourite count per case. **The free-unit count `A2` left this class on 21 August 2026, `D-60`**, and the favourite count was missing from it since `D-24` put it in group A as a real-time row | Any lag is a wrong answer. Degraded rather than stale |
| **Per round** | Observed rate counter `D3`, cases opened | Moves with the product. Never rewritten backwards |
| **Rolling window** | Median and p90 `A4` and `G3` | The window length is part of the claim and has to be printed with it. Length `[?]` |
| **Per read** | Market price `A1`, instance value `F1`, Trustpilot score `A5` | Fetched when the page is read, and carries the moment it was fetched |
| **Static until the configuration changes** | Published chance `D2`, tested RTP and EV `D4`, ceilings `G2`, deadlines `G4`, commission `G6` | Changing one is a republication, with rule 5 applying wherever a counter is attached |

---

## 7. State matrix

Rows are the states any published figure can be in. Columns are what the figure shows, what its route does, and who is told. **Every consumer inherits all seven**, which is the practical reason this node exists.

| State | The figure shows | The route | Who is told |
|---|---|---|---|
| **Live** | Value, unit, as-of where the class requires one | Works | Nobody. This is the normal case |
| **Stale** | The value with its real as-of, marked as older than its refresh promise | Works | The reader, in the same block. Never the value alone |
| **Degraded** | The last known value **and** the fact that the source is failing, or nothing at all where a wrong number is worse than no number | Works, and says what it is checking | The reader on the surface, and the banner on 5.3 for the Steam case |
| **Below the sample floor** | N and the published figure. **No observed percentage** | Works | The reader, in the counter's own words |
| **Missing** | An explicit "not available", never a zero, never a dash | Points at what would produce it | The reader |
| **Forked** | The new configuration from zero, and the previous configuration with its full history beside it | Both work | The reader, because the fork is the disclosure |
| **Withdrawn** | Nothing. The figure is gone, and where it was load bearing the surface says a number used to be here and why it is not | Gone | The reader, and this file, which keeps the row with its reason |

**The withdrawn state is not decoration.** `D-B` can disqualify the observed rate counter, `D-C` can disqualify the whole class, and `A5` cannot render until an auditor exists. A register whose only states are working ones would have to be redrawn on the first no.

---

## 8. Anatomy of a figure block

One shape, five parts, and stage 04 renders it rather than inventing per surface.

| Part | Behaviour | Rule |
|---|---|---|
| **Value** | The number itself, as text | Rule 8. The largest element in the block, and never the only one |
| **Unit and caption** | What it counts, in words a person uses | No unit, no claim. "82.1" is not a figure, "82.1 percent tested RTP for this case" is |
| **As-of** | The moment it was true | Required by class for real time, per round, rolling window and per read. Omitted only for static rows |
| **Route** | The link, the recomputation, or the named wait that checks it | Rule 1. It is part of the block, never a footnote elsewhere on the page |
| **Comparison** | Optional. Our figure against a category figure or a published ceiling | Only where both sides carry a source and are the same kind of measurement, rule 9 and the `aarrr.md` tested-against-stated split |

---

## 9. SEO and accessibility

**The register has no public URL.** It is documentation, not a surface. What it constrains is how figures appear on the indexed pages that read it, and node `0.13` owns indexation, canonical and schema for those pages.

- **Every figure is crawlable text**, rule 8, which is also the "text not in images" line in the A to E checklist. The pre-login figures on `1.0` and `3.3` are the product's entire pre-login argument, and an image would remove them from search and from a screen reader in the same stroke.
- **The accessible name carries the unit and the as-of**, not the bare digits. A screen reader that announces "82.1" has announced nothing.
- **Real-time counters do not shout.** A live region that fires on every round is a denial of service to a screen reader. Real-time figures update silently by default, with the current value always available on demand; where an update genuinely changes what a person can do, the announcement is polite and rate limited. This is a design rule with a stated reason, not a quoted success criterion.
- **A degraded or missing figure is announced as such**, in text, in the block. Colour alone never carries that state.
- **Numbers do not carry schema of their own.** Where a page type takes structured data, `0.13` assigns it.

---

## 10. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **`D-C`, the internal observed-against-published check** | It runs on live platform data before any of this is drawn, and the publication is permanent once made. Scheduled before stage 04 | Founder, on the live platform |
| **`D-B`, whether roll history migrates and can be published** | Decides the observed rate counter, and with it the route for cases opened | Founder, question of fact to the live platform |
| **The rolling window for median and p90** | Seven days, thirty, ninety. The length is part of the claim | Founder with the data, before stage 04 |
| **The sample floor for the observed counter** | The N below which the counter shows N and no percentage | Founder with the data |
| **Who tests our RTP** | `D4` says "published tested RTP". Tested by whom, over how many opens, and republished when | Founder. Same answer as the auditor below |
| **The named auditor** | Row `A5` prints a name we do not have. Nobody in the category has one, which is the opportunity and also the fact | Founder |
| **The two venues for the instance value receipt** | Row `F1` says two named venues. Which two is not decided anywhere | Founder, before stage 04 |
| **Statistics slots 2 and 4** | Carried from `0.2`. Slot 2 recommended: median and p90. Slot 4: online users only if honest, otherwise an aggregate RTP that needs its own backlog row | Founder, before stage 04 |
| **A browsable public round ledger** | It would give cases opened a single auditable total instead of a per-case reconciliation. **Not a backlog row today** | Founder. One row if yes |

**And what belongs elsewhere.** Where each figure sits on a screen: the node that reads it. How a figure is styled, sized or coloured: stages 06 and 07. The words around it: stage 05, which owns microcopy and syncs it back. Whether a figure is true: `D-C`, and that one is not a design question at all.
