# CJM To-Be

**Focus: The Opener (primary persona) x Main Job "Arrive, open, get the thrill"**

The same person and the same job as `cjm-as-is.md`, but inside our product, which does not exist yet.

Rule of this half is the opposite of the As-Is half. The future has to be designed, so "do not invent" does not apply. What applies instead is tracing: every step and every capability on this map points at a named As-Is barrier from `cjm-as-is.md`, a named job from `jtbd.md`, or one of the enumerated compliance constraints and design principles in `CLAUDE.md`. The third class was added by the step 9 critique and is defined at the head of the backlog. A step with no parent in one of the three is an orphan and gets cut, not kept because it looks good.

Focus, persona and job formula are carried from `cjm-as-is.md`. The open divergences recorded there, three wordings of the main job and three competing MVP core lists, are resolved by step 11, not here.

**How the capabilities below were chosen.** Six barriers had more than one plausible answer. For each of those, three candidate mechanisms were generated independently and blind to one another, each required to state its cost, its regulatory exposure and one specific way it could backfire. The chosen candidate and the reason each rival was dropped are recorded under the phase. Where the answer was obvious, no divergence was run and none is invented for appearance.

---

## The architectural finding, before the map

Three of the six divergences were run blind and two of them landed on the same operational precondition without knowing about each other: **the product must hold the specific item before it awards it.**

Stock-backed drop tables need the unit to already be ours. Instance-level pricing needs the float and phase to be known before the reveal, which is only possible if the object is already in our inventory. This is not two features. It is one change of architecture with several visible consequences, and it answers a sentence that reframes the whole trust thesis of this product:

**Provable fairness proves the roll, not the payout. A verifiable roll for an item that cannot be delivered is technically true and functionally a lie.**

The As-Is floor is at P8, withdrawal, not at P6, the reveal. Everything below is built on that.

---

## To-Be path

Same eight phases as the As-Is map, so the two curves overlay. Every row names the parent it pays for.

### T1. The pull from outside

- **Step in the product.** Arrives from someone else's win on a clip, and lands on a page that survives the suspicion the category has earned. Nothing is asked of them yet.
- **Goal.** Decide whether this one is different. Job: main job trigger, `jtbd.md:17`.
- **Closes.** `B1-1`, the category arrives pre-suspected and the recommendation itself reads as a warning.
- **Capability.** The pre-login proof surface, defined at T2. T1 itself adds no capability; it is the phase we inherit rather than create.
- **Target emotion.** Curiosity that survives a second look. As-Is at this phase was already positive, +4, so this is the one phase we are not trying to move. The work is to not lose what arrives.

### T2. First contact, before any account

- **Step in the product.** Reads, without an account, what the case contains, what each item is worth right now, what the published chance is, and how many units of each item we actually hold.
- **Goal.** Decide the place is real. Job: Related Job 1, arrive with enough confidence to try, `jtbd.md:33`.
- **Closes.** `B2-1` the pre-login information wall. Partly `B1-2`, the buy-instead advice, by making our real offer legible before signup.
- **Capabilities.** **Two prices, one item.** Every notable item carries its live market price with a timestamp beside the exact chance of pulling it at this entry cost, and the top item carries an outbound link to buy it on the market instead. The site states in its own voice, not in a disclaimer, that buying outright is cheaper on average. **Live free-unit count** per item, from the stock-backed table at T5.
- **Target emotion.** Disarmed. As-Is was -3, suspicion as the default posture with a named tell.

**Diverge to converge on `B1-2`, the strongest pattern in the corpus.** Three candidates. **Chosen: two prices, one item.** It is the only one that engages the argument instead of working around it, and the buy-instead advice is correct on expected value, which the product must concede rather than contest. Printing the cheaper option next to our own removes the exact thing users were warned about. **Dropped: a declared loss ceiling as the answer here**, because it is a constraint, not an offer, and it never answers "why open at all"; it ships anyway at T4 for its own reason. **Dropped: a free demo reveal on identical odds and seeds**, because it argues our case by demonstrating that the sceptic is right about the odds, and it spends the reveal, the one thing we sell, before anyone has decided anything.

**Cost accepted.** Some share of visitors will click the market link and buy instead. That is the price of the claim being believable.

### T3. Getting in

- **Step in the product.** Age and identity are resolved here, once, before any case interaction and before any money moves. The account then carries a visible state: verified, withdrawals open.
- **Goal.** Reach the point of being able to open, and know what the exit looks like before entering. Job: Related Job 1.
- **Closes.** `B8-4`, verification ambushes at the exit, by moving the check to the only place where it costs the user nothing they have already earned. `B3-1` and `B3-2` are entry-phase barriers of a different kind, an unreadable Steam login failure and an onboarding demand that reads as an attack, and neither is closed by anything on this step. Backlog rows B5 and B6 close them.
- **Capability.** **Verification resolved before funding, and no verification branch on the withdrawal route at all**, enforced in code and reviewable. The account state is shown on the deposit screen itself, so the promise describes a state the user can already see rather than a future behaviour we control.
- **Target emotion.** Settled. As-Is was `[?]`, frictionless for some and blocking for others with no way to weigh them.

**Diverge to converge on `B8-4`.** Three candidates, and the convergence splits deliberately. **The sequencing rule is chosen and locked**: the injury in the evidence is not the weight of the check, it is that the check is a trap sprung after money is committed, including a user banned as a minor at cashout after already passing KYC. Sequence is the injury. **The method is not chosen here and is carried as an open decision**, because all three candidate methods carry legal exposure that this project has not researched with citations: facial age estimation is fast and is recognised as effective in strict regimes but is contested biometric data under GDPR and state statutes such as Illinois BIPA; full document KYC before deposit removes the failure entirely but pays the largest conversion cost, creates a document trove and may itself be read as the operator self-classifying as a gambling business in a category where that classification is unsettled; payment-instrument age attestation is nearly invisible but its coverage varies sharply by country and it can never be the only method, and `aarrr.md:105` has already discarded soft age gating on a cited statute, the UK Online Safety Act of July 2025, which requires robust identity-based verification and therefore rules this method out standing alone. Picking a biometric vendor from an unresearched comparison would be exactly the median-instead-of-a-source failure this project's rules exist to prevent. See open decisions below.

### T4. Getting something to open with

- **Step in the product.** Funds the account in real currency, and in the same step sets a spend ceiling for a named period.
- **Goal.** Reach an openable balance without committing money they would miss. Job: Related Job 2, complete the first open without friction, `jtbd.md:42`.
- **Closes.** `B4-1` the escalating deposit gate, through backlog row C4, and `B7-4` the escalation loop, through the ceiling below. `B4-3`, money leaves and does not arrive, is a crediting failure that no capability on this step answers; backlog row C3 answers it and is named here so the claim is not made twice.
- **Capabilities.** **One real currency throughout**, no internal coin denomination anywhere, so no payout can wear a label that is not a price. **Limit chosen at deposit**: the amount just typed is pre-filled as a ceiling with a period selector, the deposit cannot be submitted until the user accepts or changes it, lowering it applies immediately and raising it applies 24 hours later. When the ceiling is reached, deposits stop while opening from existing balance and withdrawal stay fully open.
- **Target emotion.** In control of a decision already made. As-Is was -4.

**Diverge to converge on `B7-4`, the escalation loop.** Three candidates. **Chosen: limit chosen at deposit.** It is the only one that binds a user who does not read terms without requiring them to go looking and without accusing them of anything: one tap on a number they chose themselves, at the one moment they are calm. The evidence supports this precisely, because these users do not lose track of their totals, they recite them to the dollar; what was missing was anything binding between the tilt and the next deposit, and the one person who escaped used an external hard lock. **Dropped: a permanently visible net position**, because it addresses an information gap the evidence does not show, taxes every user for a problem concentrated in a few, and a running negative number becomes a target to play back to zero, which is the engine of the loop rather than a brake on it. **Dropped: a chase interrupt** that locks the open control after a detected tilt pattern, because it intervenes when the user is least receptive, a false positive tells someone having a big night that an algorithm has classified them as an addict, and a rule users can learn is a rule users will route around.

**Cost accepted, stated plainly.** This caps the second and third deposit of a losing session, which is where the largest deposits in this category live, so the cost lands almost entirely on the top revenue decile. A user blocked for 24 hours can deposit on a site with no delay, so what is at risk is not one deposit but the account. That is the correct price for a product whose first principle is that trust is the product: proving the roll and then allowing unbounded deposits at 3am is proving the easy half.

**Design constraint attached to this capability, and it is a hard one.** The ceiling may be framed as a buy-in that gives a session a shape and an ending. It must never acquire completion mechanics, streaks or a session score, because at that point it stops being a boundary and becomes a reason to keep going, which is the dark pattern this product forbids.

### T5. Picking a case

- **Step in the product.** Chooses a case knowing what is in it, what each item is worth, what the chance is, and how many units are actually there.
- **Goal.** Find something worth opening inside a small budget. Job: main job, `jtbd.md:17`.
- **Closes.** `B8-1`, the item you won is not the item you can take, by moving the constraint to before the open. Partly `B1-2`.
- **Capability.** **Stock-backed drop tables.** Every row in a case points at a specific unit in our own inventory. The roll can only select items with at least one free unit, and on reveal that unit is locked to the account in the same transaction that writes the roll. The case page shows a live free-unit count, and an item at zero is visibly out of the table before the open, never after it.
- **Target emotion.** Informed appetite. As-Is was `[?]`; nobody in the corpus narrates choosing a case, so this target is projected rather than measured against a recorded emotion.

**Diverge to converge on `B8-1`, `B8-2` and `B8-3`.** Three candidates. **Chosen: stock-backed drop tables.** Out-of-stock can still happen, but only before the win, where it is a published number instead of a claim made after we already owe someone a knife. It also reaches the good case in the evidence, the butterfly withdrawn in five minutes, because once the unit is ours and locked the remaining path is a single trade offer. **Dropped as the primary answer: a public withdrawal clock**, because it explains the failure honestly and cannot prevent it, and an honest clock on an undeliverable item is still an undeliverable item; it is cheap and it covers Steam-side waits that stock-backing cannot, so it is carried at T8 as a support capability rather than discarded. **Dropped: a pre-cleared payout limit**, because it fixes who gets paid rather than what gets paid and puts its friction at deposit, which T3 and T4 already occupy. **Rejected before scoring: buying the item on the Steam Market at withdrawal time**, because a market-bought item carries a seven day trade lock for the buyer, which trades one pain for a guaranteed week of another.

**Cost accepted.** Capital, and it is recurring. Every headline item must be bought and held before it can be advertised, and the aspirational items that drive cheap-case opens are the most expensive to stock and the slowest to turn. The named risk is that to keep shelves full we quietly stock only cheap liquid items, and a case that promised a knife starts promising three grades of pistol skin, which kills the job the Opener came for. **The catalogue gets smaller and honest rather than larger and unbacked.**

### T6. The open

- **Step in the product.** Triggers the reveal and watches. Nothing else happens in this phase.
- **Goal.** The rush. Jobs: main job `jtbd.md:17`, plus Emotional Job 1, genuine suspense rather than manufactured tension, `jtbd.md:84`.
- **Closes.** `B6-1`, the animation and the credited item disagree, and `B6-2`, the belief that the reveal turns against you once you win.
- **Capability.** The reveal is bound to the settled roll, so what the animation shows is what the ledger wrote, and the two cannot diverge. No near-miss theatre: a near-miss pre-calculated as a loss is fabricated tension, already ruled out at `jtbd.md:87`.
- **Target emotion. Projected, not measured, and this is stated rather than hidden.** As-Is at this phase is `[?]`: after targeted re-research in the source class that should hold it, no first-person account of joy at one's own reveal on a third-party site was found anywhere. There is no recorded emotion here to contrast against, so the target cannot be derived and is instead a design intention. Stage 06 produces it and tests it. Any timing, cut, sound or hold is a decision of this project, not a match to a benchmark.

**No divergence was run for this phase.** With no barrier evidence and no emotional evidence, candidate generation would have produced three inventions dressed as options. What was refused here is the generation of a *target emotion* and of new mechanisms for it, not the reveal itself: backlog rows E3 and E4 belong to this phase and neither is invented, E3 carrying the execution gap named at `jtbd.md:185` and the linear pattern chosen at `aarrr.md:292`, E4 carrying Related Job 3. The honest move is to name it as the stage's open hole, which `cjm-as-is.md` records as U-13.

### T7. The outcome

- **Step in the product.** Sees what they got, what it is actually worth, and how this case has behaved for everyone.
- **Goal.** Understand the result and know what to do next. Job: Emotional Job 2, a moment sharp enough to become a story, `jtbd.md:93`.
- **Closes.** `B7-1` the undervalued win, `B7-2` the published probability that did not behave, and `B7-3` the consolation frame read as a trick.
- **Capabilities.** **Instance value receipt.** We hold the exact asset before awarding it, so its float, paint seed and phase are known: the item is priced as that instance, never as the skin name. The reveal shows name, float, phase, current sell price for the comparable float band and phase on two named venues, the inspect link, and a link that opens the venue listing filtered to that float band so the user checks it themselves. The receipt stays attached to the item in inventory and on the withdrawal record. **Observed rate counter.** Beside every published tier percentage stands the outcome count from the same settlement ledger that pays users: published, observed, and N. Never reset. If weights are ever changed the counter forks, the old configuration keeps its history and stays visible, the new one starts at zero and says so.
- **Target emotion.** A result that is understood, whether it is good or bad. As-Is was -5, and the whole of that -5 was the discovery that the number was not real.

**Diverge to converge on `B7-1`.** Three candidates. **Chosen: instance value receipt.** The pain is not that a number was optimistic, it is that the number described a different object than the one received, a name instead of an instance. The two rivals both leave that substitution intact. **Dropped as the primary: sell price everywhere**, which fixes the unit but not the number, although its load-bearing rule travels with the pick as a hard dependency: the receipt must be denominated in real currency, because a receipt in coins fails its own test. **Dropped: a published real payout per case**, expressing return per dollar at real prices, because it fires before the reveal at the one moment this persona reads nothing, and it pays the highest margin exposure of the three for a gain the Opener will not register. **Restored by the step 9 critique as backlog row D4, on different grounds**: not as an answer to `B7-1`, where this reasoning still holds, but as a disclosure that design principle 3 at `CLAUDE.md:54` and the acquisition decision at `aarrr.md:67` each require independently of whether the Opener reads it. **Rejected before scoring: a binding buyback at the displayed value**, because it adds a payout rail round 1 does not have; round 1 has exactly one exit, withdrawal to Steam.

**Diverge to converge on `B7-2`.** Three candidates. **Chosen: observed rate counter.** It is the only one that speaks in the same unit as the complaint. The user is already counting, already comparing their count to a published claim, and already concluding fraud. This does not ask them to stop counting or to learn anything; it puts a much larger count from our own payment ledger next to the claim, in the place where the claim is made. It survives a persona who reads neither odds nor terms, because one line is read at a glance, and it is the only candidate that gets stronger every day it runs. **Dropped: a finite visible pool** with draws without replacement and remaining contents shown live, which is the strongest answer in principle and removes the need for trust entirely, but it re-prices the core product inside round 1, cannot be piloted, cannot be withdrawn once seen, and creates advantage play as a depleting pool's expected value rises. **Dropped: personal streak math**, telling the user how their own dry run compares to the published distribution, because correct mathematics delivered next to a spend button to a losing user is loss-chasing encouragement and the single easiest artefact to hold up in a hearing.

**Rejected as an answer to `B7-2`, and this is the most important rejection on the map: making provable fairness automatic.** Auto-publishing the seed pair, recomputing in the browser and showing a verified badge is the obvious candidate and it fails on mechanism, not on effort. **A commit-reveal scheme proves the outcome was not altered after the click. It says nothing about whether the weight table is the one we published, and the weight table is what users actually dispute.** Automating a proof of the wrong proposition produces exactly the reaction already in the evidence: "they market the sentence Provably Fair which is totally fake". The verification tool stays, because it is a round 1 surface and its absence would be conspicuous, but it is not funded as the answer to this barrier.

**Confirmed by the founder, 11 August 2026, and recorded here so it stops being an inference.** Provable fairness is built and shipped, positioned as a secondary proof. Its parent in the step 8 backlog is Related Job 3, `jtbd.md:51`, verify the outcome after I open, which scores 3 for The Researcher and 1 for The Opener. It is in MVP because it is a declared job and a locked round 1 surface, not because it converts a sceptic on the weight table. Carries into `docs/decisions.md` at step 11.

**Reconciled with design principle 1, because the step 9 critique read this as a demotion.** `CLAUDE.md:52` states that provable fairness is the brand, not a footnote, and nothing here contradicts it: the product ships three provable-fairness surfaces, a public page with a working verifier, a hash visible at the spin trigger and a post-reveal link, which is more of it and earlier than any platform in the benchmark set. What is demoted is not the feature, it is one claim about the feature, that it answers `B7-2`. Principle 1 says provable fairness is the brand; it does not say provable fairness proves the weight table, and this map says it does not. If that distinction needs to live in `CLAUDE.md` itself, step 11 owns the wording.

### T8. Payoff or exit

- **Step in the product.** Withdraws to Steam, and can see the state of that withdrawal and who it is waiting on at every moment.
- **Goal.** Turn the result into something real. Job: Related Job 5, withdraw and get what I earned, stated at `jtbd.md:69`.
- **Closes.** `B8-2` waiting with no attribution, `B8-3` winning treated as suspicious behaviour. `B8-1` is already closed upstream at T5.
- **Capabilities.** **Public withdrawal clock.** A withdrawal moves through named states with a per-state timer, each labelled with who it is waiting on: us, Steam, or you. Our own states carry a published ceiling and a live degraded banner driven by a Steam API health probe. Rolling median and p90 withdrawal times are published from our own logs. **A restriction produces a written notice with a stated ground, a balance frozen rather than zeroed, and an appeal with a published response deadline.**
- **Target emotion.** Waiting without suspicion. As-Is was -5 and this was the floor of the entire map.

**Cost accepted.** A published ceiling is a promise, so support must be staffed to meet it. Publishing our own p90 means one bad Steam week puts our own number on a competitor's page, and because we computed it ourselves we cannot dispute it. A public clock also tells an attacker how long the review window is.

**Named limits, because an unconditional promise would be a lie.** Blocked countries, Steam trade holds and Steam-side bans are outside our control and are stated in plain words rather than discovered at the first delayed payout.

---

## Emotional curve, To-Be

Assigned at step 10, when the curve had to be drawn and a qualitative target emotion could not be plotted. Written here rather than only on the page, because markdown is the source and html is the visualisation.

**The whole of this curve is a projected target, not a measurement, and it never becomes evidence by being drawn.** The As-Is curve in `cjm-as-is.md` rests on counted quotes with a ledger behind every number. This one rests on the target emotion named under each phase above. The two are plotted together for contrast and they are not the same kind of object.

| Phase | As-Is | To-Be target | Basis, and what it is worth |
|---|---|---|---|
| T1 pull from outside | +4 | +4 | Not moved on purpose. The only As-Is phase with an evidenced positive emotion, and the work is to not lose it |
| T2 first contact | -3 | +2 | Disarmed. A1, A2 and A4 answer the suspicion with the thing the suspicion is about |
| T3 getting in | `[?]` | +2 | Settled. **No As-Is baseline**, so no movement can be claimed, only a target stated |
| T4 getting something to open with | -4 | +2 | In control of a decision already made |
| T5 picking a case | `[?]` | +3 | Informed appetite. **No As-Is baseline** |
| T6 the open | `[?]` | +5 | **Doubly unanchored: no As-Is value and no derivation.** The one phase whose target is a design intention rather than an inference. Stage 06 produces it and tests it, and if the test fails this number is the first to go |
| T7 the outcome | -5 | +1 | A result that is understood, good or bad. Deliberately not a peak, because understanding a bad outcome is not joy and drawing it as joy would be the same dishonesty the map is built against |
| T8 payoff or exit | -5 | +2 | Waiting without suspicion |

**Movement can only be claimed where the As-Is has a value**, which is five phases of eight. The largest claimed movement is at T8, +7, and T8 is also where the As-Is evidence is densest, a pattern of 12 across all seven platforms. That alignment is the point: the biggest promise sits on the biggest pile of evidence. The largest *unclaimed* movement is at T6, where the product's core moment has neither a starting value nor a derived target, and no amount of drawing fixes that.

---

## Orphans, cut

Every capability proposed during divergence that closes no As-Is barrier and serves no job in `jtbd.md` is listed here rather than parked in a LATER column. `LATER` is a priority for a feature that has a parent, not a shelter for one that does not. One exception exists and it is named rather than assumed: an item already locked into `LATER` by the round 1 scope decision in `CLAUDE.md` cannot be cut by this stage even when it has no parent, so it is carried with the parent cell reading `None` and a standing requirement to acquire one before its own round opens. Three items sit there, and both instruments of the step 9 critique flagged all three.

| Proposed | Why it is an orphan | Verdict |
|---|---|---|
| Free demo reveal on identical odds and seeds | Closes no recorded barrier. Its stated purpose is proving we are not hiding the odds, which `B7-2` already closes with evidence rather than with a simulation | Cut |
| Permanently visible net position | Addresses an information gap the evidence does not show. Users in the corpus recite their totals to the dollar | Cut |
| Personal streak math | Same, plus it creates a compliance liability the barrier does not require | Cut |
| Binding buyback at displayed value | Needs a payout rail that round 1 does not have | Cut, revisit only if a second exit is ever in scope |
| Chase interrupt on detected tilt | Has a parent, `B7-4`, but loses to the chosen capability on the same barrier | Not an orphan. Dropped in convergence |

Four of the five rows above are orphans. The fifth is a convergence loser kept in the same table so that a rejected candidate with a real parent is not later mistaken for one without.

---

## Backlog and MVP core

Produced by step 8. This is one list. It refines the MVP core already sketched at stages 01 and 02 rather than forking a second one, and where it disagrees with an older list the disagreement is printed rather than quietly resolved.

**Every row names a parent, and there are exactly three legal parent classes**: a barrier code from `cjm-as-is.md`, a job from `jtbd.md`, or a named compliance constraint or design principle from `CLAUDE.md`. The third class was added by the step 9 critique, which found B4 and C5 already standing on it while the rule admitted only the first two. It is enumerated rather than open: only the five compliance constraints at `CLAUDE.md:58` and the five design principles at `CLAUDE.md:52` to `:56` qualify, and a row using it must quote which one. A capability with no parent in one of the three classes is not in this table, it is in the cut list below.

**Priority test, applied literally, and restated by the step 9 critique.** `MVP` means the To-Be path breaks without the row, where breaking means **a documented As-Is barrier recurs**, not merely that the mechanics still complete. The mechanical reading was tried first and it marked as LATER a set of rows that would each reproduce a recorded pain, so the barrier reading is the one that holds and it is written here rather than applied silently.

Seven rows do not clear even that test on their own and every one of them says so in its own cell rather than hiding behind the label: F4, which the referral loop needs and the path does not; D3, which does not do its job until N grows; A3 and G6, which stand on a job with no barrier behind them; and E4, F3 and H1, which are MVP by locked round 1 scope and by founder decision rather than by any persona score. The earlier text claimed one exception and had seven, and the critique was right to call that a double standard, since the daily bonus had been cut on a criterion three of these rows also fail.

**Grouping.** Rows are grouped by the round 1 screen they live on, because that grouping is itself the artefact that was missing. `cjm-as-is.md` recorded that no file in this repository maps the three MVP core jobs onto any scope item. This section is that map.

Thirty seven MVP rows, thirty six distinct capabilities: A4 and G3 are one feature on two surfaces. Seven of the rows are rules or architecture rather than something anyone draws.

Eight groups cover the seven round 1 items, and the mapping is not one to one, which the step 9 critique caught being stated as if it were. Group 2 covers two round 1 items at once, registration and account together with the age gate and geo block layer. Groups 4, 5 and 6 are three phases of the single case opening screen. Group 8 holds the provably fair page and one item that is not a screen at all, I1 the starter credit, which is a component of the first open and is named as such rather than counted as a surface.

### 1. Home, before login

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| A1. Two prices, one item: live market price with timestamp beside the exact chance at this entry cost, an outbound market link on the top item, and the cheaper-on-average statement in our own voice | `B1-2` pattern of 14, and `B2-1` the pre-login information wall | MVP | Acquisition OMTM, `aarrr.md:63`. Outbound market clicks are tracked as an accepted cost, never as a failure metric |
| A2. Live free-unit count per item | `B8-1` | MVP | The number on the page matches the free-unit count in the ledger at read time. The guarantee that the out-of-stock state cannot occur after a win belongs to D1, not to a display, and the step 9 critique was right that this cell had borrowed it |
| A3. Live drop feed with no invented names, and any bot present in it labelled as one, carried from `aarrr.md:157` | Social Job 2, `jtbd.md:120` | MVP, **job only, no barrier** | `[?]` No isolated signal exists. Measurable only inside the hero A/B, where it sits in every arm and therefore cannot be isolated by that instrument either |
| A4. Rolling median and p90 withdrawal time from our own logs, visible before login | `B8-2` pattern of 6, Related Job 1 | MVP | Our own p90 sits at or below the category median. Same feature as G3, two surfaces |
| A5. Institutional trust unit in the hero: named auditor plus Trustpilot score | `B1-1` the category arrives pre-suspected, Related Job 1 `jtbd.md:33`, Decision 1 at `jtbd.md:236` | MVP | This row is the subject of the smallest test, `lean-ux-canvas.md:79` to `:84`, where the badge variant is described at `:81`. Measure click-through into the deposit flow, not page engagement. The test needs restating before it is run, see the reconciliation |

### 2. Registration, account, age, geography

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| B1. Verification resolved before funding, with account state shown on the deposit screen | `B8-4`, pattern of 5 | MVP | Zero cases where a check first meets the user on the withdrawal route |
| B2. No verification branch on the withdrawal route at all | `B8-4` | MVP, code rule | Proven by code review, not by a metric: the withdrawal route contains no verification call |
| B3. Age gate before any case interaction. Method open, see `D-A` | Compliance constraint, `CLAUDE.md:58`, "age verification before any case interaction", plus `B8-4` | MVP | Compliance, not conversion. The conversion cost of the gate is measured separately, target `[?]` |
| B4. Geo block with a cited legal ground per blocked market, and the staged regional rollout that same ground implies | Compliance constraint, `CLAUDE.md:58`, "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", sourced at `research.md` section 7 | MVP | Every blocked market carries a row with a citation, and no market opens without one. Inherited starting list, carried `[?]` until re-verified against current law: Belgium, Netherlands, Germany, UK, Washington, Nevada, `lean-ux-canvas.md:55` |
| B5. Readable Steam login failure states | `B3-1`, **one signal** | MVP | One voice, and it is marked as one voice. A component state rather than a feature |
| B6. Onboarding asks for nothing unusual: no password anywhere outside Steam OpenID, no profile changes | `B3-2`, **one signal** | MVP, rule | Caught at review |
| B7. Account and inventory: what the user holds, each item carrying its F1 receipt, plus the account state, verified and withdrawals open | `B7-1`, Related Job 5 `jtbd.md:69` | MVP | F2 has nowhere to persist without this row, and `CLAUDE.md:38` lists account as a round 1 item |

### 3. Deposit

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| C1. One real currency throughout, no internal coin denomination anywhere | `B7-1`, pattern of 7 | MVP, architecture | No number renders anywhere without a currency mark. `B4-3` was named here in the first draft and both instruments removed it: that barrier is a deposit that never credits, and C3 answers it |
| C2. Spend ceiling chosen at deposit | `B7-4`, pattern of 12 | MVP | Share of deposits where the pre-filled ceiling is accepted unchanged, and share of sessions stopped by the ceiling. Targets `[?]` |
| C3. Deposit crediting shown as a state with a timer | `B4-3`, pattern of 4 | MVP | Tickets of the class "money left and never arrived" reach zero |
| C4. The amount required to withdraw is stated before the deposit and can never rise | `B4-1` | MVP, rule | No withdrawal ever demands a sum that was not named before the money went in |
| C5. Session limit, self exclusion, cool down | `B7-4`, compliance constraint `CLAUDE.md:58`, "responsible play tooling" | MVP | Their surface is the responsible play page named at `lean-ux-canvas.md:54`, which the round 1 screen list dropped with no verdict recorded anywhere. Restoring that page is a scope question for step 11 |

### 4. Choosing a case

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| D1. Stock-backed drop tables | `B8-1`, pattern of 2 | MVP, architecture, **scale conditional on `D-D`** | The roll cannot select an item with zero free units. Structural. How large a backed catalogue can be is a treasury question, and the step 9 critique was right that D3 carried its open decision in the priority cell while D1 did not |
| D2. Published chance and current value per item on the case page | `B7-2`, Related Job 1 | MVP | Measured inside the case-page A/B |
| D3. Observed rate counter beside every published tier percentage | `B7-2` pattern of 11, and `B6-2` the belief that the reveal turns against you once you win, pattern of 9 | MVP, **conditional on `D-B`, and on `D-C` in common with every row on this map** | See answer 2 below. At launch this row is infrastructure and it does not close `B7-2` until N is large enough to say so |
| D4. Published tested RTP for the case, and the expected value at this entry cost, on the case page and before login | Design principle 3, `CLAUDE.md:54`, "odds, cost and expected value are visible and legible", plus `B1-2` | MVP | `aarrr.md:67` requires RTP published from day one and `aarrr.md:205` makes matching or beating the tested figures in the category, Hellcase 82.1 percent and DatDrop 80.6 percent, both a trust position and a regulatory hedge. `jtbd.md:180` names published RTP as one of three things no competitor surfaces pre-login |

### 5. The open

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| E1. The reveal renders the settled roll, with no separate client-side outcome | `B6-1`, one signal, fatal class | MVP, architecture | Divergence between animation and credit is impossible by construction |
| E2. No near-miss theatre | Emotional Job 1, `jtbd.md:84` | MVP, rule | Rule |
| E3. Rarity-differentiated reveal on the linear pattern, Pattern A, chosen at `aarrr.md:292` and in `ux-patterns.md` | Main Job `jtbd.md:17`, Emotional Job 2, execution gap at `jtbd.md:185` | MVP | Activation OMTM, first open completion rate, `[?]` 40 to 60 percent per `aarrr.md:115` |
| E4. Round hash visible at the spin trigger | Related Job 3, `jtbd.md:51` | MVP by locked round 1 scope and founder decision, not by persona score | **Secondary proof.** Presence, not conversion |

### 6. The outcome

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| F1. Instance value receipt | `B7-1` pattern of 7, also closes `B7-3` | MVP | Complaints of the class "it turned out to be worth less" reach zero, and the displayed price matches the market inside the float band |
| F2. The receipt stays on the item in inventory and on the withdrawal record | `B7-1` | MVP | The same receipt is retrievable a week later |
| F3. Post-reveal verification link | Related Job 3, `jtbd.md:51` | MVP by locked round 1 scope and founder decision, not by persona score | Secondary proof |
| F4. One-tap share of a result | Emotional Job 2, `jtbd.md:93` | MVP, **the one exception to the priority test** | Referral OMTM, `aarrr.md:268`. The path does not break without it, the loop does |

### 7. Withdrawal

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| G1. Public withdrawal clock: named states, per-state timer, attribution to us, Steam or the user | `B8-2`, pattern of 6 | MVP | Share of withdrawals that generate a support ticket asking for status |
| G2. Published ceiling on our own states, plus a live degraded banner driven by a Steam API health probe | `B8-2` | MVP | Our own states stay inside the published ceiling at p90 |
| G3. Rolling median and p90 published from our own logs | `B8-2`, Related Job 1 | MVP | Same feature as A4, two surfaces |
| G4. A restriction produces written notice with a stated ground, a frozen rather than zeroed balance, and an appeal with a published response deadline | `B8-3`, pattern of 3 | MVP | Every restriction carries a ground in text, and response time stays inside the published deadline |
| G5. Named limits stated in plain words: blocked countries, Steam trade holds, Steam-side bans | `B8-3`, `B8-2` | MVP | The user meets the limit before the first withdrawal rather than inside it |
| G6. Commission-free withdrawal to Steam | Related Job 5, `jtbd.md:69` | MVP, **job only, no barrier** | This is the value exchange against Steam Market's 15 percent, `jtbd.md:72` |

### 8. Provably fair and the starter offer

| Feature | Parent | Priority | Success signal |
|---|---|---|---|
| H1. Public provably fair page, no login, working verifier | Related Job 3 `jtbd.md:51` after the open, and Core Job 1 `jtbd.md:180` before login, where a public provably fair surface is one of the three things no competitor offers | MVP by locked round 1 scope and founder decision, not by persona score | Opens with no login and the verifier recomputes real seeds. **Secondary proof: neither parent is `B7-2`** |
| I1. Bounded no-deposit starter credit | Related Job 2 `jtbd.md:42`, `aarrr.md:119` | MVP, **with two constraints that are not optional, see answer 1** | Activation OMTM, `aarrr.md:115` |

### LATER, and every parent named

| Feature | Parent | Note |
|---|---|---|
| Case battles | Social Job 1, `jtbd.md:111` | Sound parent |
| Upgrades | Related Job 4, `jtbd.md:60` | Sound parent |
| Rakeback | Emotional Job 3, `jtbd.md:102` | Sound parent |
| In-platform exchange | Hypothesis Job A, `jtbd.md:133` | Parent is a hypothesis marked `[?]` |
| Leaderboards | Hypothesis Job C, `jtbd.md:145` | Parent is a hypothesis marked `[?]` |
| Daily free case | Founder Decision 3 at `jtbd.md:198`, plus the retention decision at `aarrr.md:172` | **Placed here provisionally and it needs the founder.** `jtbd.md:198` puts it inside the MVP free-to-play offer by an explicit founder decision, which is a stronger claim than a superseded canvas cell, and the round 1 screen list neither contains it nor rules it out |
| Referral programme | None in `jtbd.md`. A business line only, `aarrr.md:272` | **No user job stands behind it.** It is locked into LATER by scope, so this step cannot cut it. It has to acquire a parent before its own round opens |
| Giveaways | None | Same |
| Gunfights | None | Same |

A distinction that is easy to lose and matters: **one-tap sharing of a result is not the referral programme.** Sharing is F4, it has a parent, and it is MVP. The referral and affiliate programme is a business mechanism with no job behind it and it is LATER.

### Cut at this step

| Cut | Why |
|---|---|
| First-deposit bonus carrying a wagering requirement | See answer 3. A wagering requirement is `B4-1` in better clothes and it contradicts C4 directly |
| Per-mode provably fair documentation | Round 1 ships one mode. The requirement degenerates, and it returns when a second mode does |
| Any first-deposit bonus in round 1, including the zero-wagering variant | The wagering variant is cut for the reason in answer 3. The zero-wagering variant at `aarrr.md:91` and `lean-ux-canvas.md:64` is not shipped either, because `aarrr.md:224` requires case mathematics to be modelled before any bonus is designed and that model does not exist. It returns when the model does, and until then it has a verdict rather than a silence |
| The finite visible pool, draws without replacement with remaining contents shown live | Rejected in the T7 convergence, and named at answer 2 as the fallback if `D-B` fails. Recorded here so that a capability the document says can return has a row to return to |

Rain-style ambient mechanics, community case creation and a fiat or crypto withdrawal path were already deferred at `jtbd.md:198` to `:200` and are not re-litigated here. The four capabilities cut during step 7 divergence stay in "Orphans, cut" above.

---

## Reconciliation with the existing MVP core

Three lists carried the name of the MVP core and did not agree. `cjm-as-is.md` recorded the divergence and handed it to this step.

**Confirmed by the To-Be map.** The pre-login trust surface on home, case opening, the provably fair page, the age gate and geo block, withdrawal to Steam, responsible play.

**Sharpened.**

| Old wording | What it became |
|---|---|
| "trust signals visible pre-login", `lean-ux-canvas.md:48` | A1 two prices, A2 free-unit count, A4 published p90 |
| "rarity-differentiated animation", `lean-ux-canvas.md:49` | E1 reveal bound to the settled roll, E2 no near-miss, E3 rarity differentiation on the linear pattern. The execution gap named at `jtbd.md:185` becomes three rows, one of them architectural |
| "identity-based age gate", `lean-ux-canvas.md:54` | B1 to B3. The sequence is locked, the method is open as `D-A` |
| "deposit limits", `lean-ux-canvas.md:54` | C2 ceiling chosen at deposit, C5 the rest of the responsible play set |
| "live drops" in the same pre-login clause, `lean-ux-canvas.md:48` | A3, which also carries the bot-labelling constraint from `aarrr.md:157`. The two were never stated as the same row until the step 9 critique asked |
| "Responsible play page", `lean-ux-canvas.md:54` | C2 and C5. The page itself was dropped from the round 1 screen list with no verdict; see below |
| 3 core jobs, `jtbd.md:173` | Mapped onto scope for the first time, table below |

**Disagreements, printed rather than resolved quietly.**

- Case battles at `lean-ux-canvas.md:50`, upgrades at `:51` and in-platform exchange at `:52` are MVP in that cell and LATER in `CLAUDE.md`. The canvas marks itself superseded in part at `:57`. `CLAUDE.md` wins.
- Daily bonus and referral programme are MVP product decisions at `aarrr.md:172` and `:272`, LATER in `CLAUDE.md`. `CLAUDE.md` wins.
- Case battles sat in four states at once across four files. After this step they sit in one: LATER, parent Social Job 1.
- The daily free case is the one disagreement where `CLAUDE.md` does not obviously win, and it is the only one left open. `aarrr.md:172` is an analyst decision and loses to scope as the others do, but `jtbd.md:198` is founder Decision 3 and says "MVP free-to-play offer is starter credit + daily free case". A founder decision is not a superseded canvas cell. The row sits in LATER provisionally and the founder settles it.
- `jtbd.md:175` states the criterion "score 3 for the primary persona" and `jtbd.md:189` records the third core job at 2 for The Opener. The third core job fails the criterion its own block states. That is a defect of the core rather than of this backlog, and it belongs to step 11.

**The gap this step closes.** A table now exists in which a capability is a row and MVP against LATER is a column, and the three core jobs reach the scope:

| MVP core job | Screens and rows that close it |
|---|---|
| Core Job 1, arrive with confidence, `jtbd.md:177` | Home, A1 to A5, plus D4 in its pre-login form. Provably fair, H1, which serves this job before login and Related Job 3 after the open |
| Core Job 2, reveal quality, `jtbd.md:182` | The open, E1 to E4, and nothing else. `jtbd.md:185` limits this gap to animation quality, so D1 to D4 are deliberately not counted here: they serve the main job, `B7-2` and `B8-1`, which is a different claim. Codex caught this being overstated |
| Core Job 3, withdraw cleanly, `jtbd.md:187` | Withdrawal, G1 to G6. Entry sequencing, B1 and B2 |

Deposit closes none of the three core jobs, and registration reaches Core Job 3 only through B1 and B2, which the table above already credits. The first draft said both close none of them two lines after crediting B1 and B2, and the critique caught the contradiction. Both surfaces are justified by barriers, `B3-1`, `B3-2`, `B4-1`, `B4-3`, `B7-1`, `B7-4`, `B8-4`, and by the compliance constraints at `CLAUDE.md:58`, not by core jobs. The screen list is legitimately wider than the job list, and that is the reason.

**The gap this step does not open, it inherits.** `cjm-as-is.md:125` had already recorded that a responsible play page exists in the canvas and in neither scope list, so presenting this as a fresh finding dressed an inherited one as new, and the critique said so. What this step adds is sharper and worse: `lean-ux-canvas.md:54` names an actual page, and the round 1 screen list dropped that page with no verdict recorded anywhere in the repository. C5 now points at it as its home. Whether the page re-enters round 1 is a scope question for step 11, not a design one.

**A side effect worth naming before stage 03.** The hero now has three candidate occupants: the reveal animation, the institutional trust unit A5, and two prices A1, with the live drop feed A3 present in every arm and therefore invisible to that instrument. The smallest test at `lean-ux-canvas.md:79` to `:84` is written for two variants and measures one difference. It needs restating before it is run, and A5's success cell now says so.

---

## The three dangerous questions, answered

**1. The starter credit is the mechanism that produced the worst single narrative in the corpus. Answer: it ships, bound to two rows that are not optional.**

`B4-1` is a user whose withdrawal threshold rose from 5 to 12 to 15 dollars after a free open. `B4-2` is a pattern of 2 in which an implausibly generous starter gift is read as proof of a scam. The first failure mode is closed outright: C4 forbids a withdrawal threshold that rises, which is the whole of `B4-1`. **The second guard is weaker than this document first claimed, and Codex was right to catch it.** The original wording said stock-backing makes a 4 dollar case physically incapable of producing 1,200 dollars of gloves. It does not. D1 constrains what we must own, not what a case may contain, so an implausible starter payout is made expensive rather than impossible: every glove such a case could award is already bought and held before anyone opens anything, and A1 prints its market price beside the chance so the offer reads as an offer rather than as magic. That is an economic disincentive plus a legibility guarantee, not a physical impossibility, and the credit ships bound to C4, D1 and A1 on that weaker basis. **Residual risk, stated rather than smoothed: the credit still teaches a first-session user that opening is free, which is the one impression the rest of this map spends its whole budget contradicting.**

**2. The observed rate counter depends on a migration that is not ours to promise. Answer: demote the claim, keep the row.**

D3 stays in MVP as infrastructure, because a counter that starts at launch is worth building on day one and worthless to retrofit. What is withdrawn is the claim that it closes `B7-2` at launch. At small N the counter is honest and weak, and since it prints its own N it says so itself. Until `D-B` is resolved, `B7-2`, a pattern of 11 people across 6 sources rather than 11 sources, is answered at launch by D2 and D4 and by nothing else. That is a materially weaker answer and it is recorded as one rather than assumed away. If `D-B` comes back negative, the candidate rejected at step 7, the finite visible pool, returns to the table by default rather than by preference.

**3. A first-deposit bonus with a wagering requirement is `B4-1` wearing better clothes. Answer: cut.**

`aarrr.md:196` describes the wagering requirement as margin protection, which is accurate from the operator's side. From the user's side it is money described as theirs that cannot be taken until they spend more, which is the exact shape of `B4-1` and the exact thing C4 forbids. The two cannot both ship. Either the bonus carries zero wagering or there is no bonus in round 1. The revenue consequence is real and it belongs to whoever owns case mathematics, per `aarrr.md:224`.

---

## Open decisions this map cannot close

These are named rather than answered, because answering them from inside a model would produce a median where a source is required.

**D-A. The age and identity method.** The sequencing rule is locked: verification resolved before funding, no verification branch on the withdrawal route. The method is open between facial age estimation, full document KYC before deposit, and payment-instrument attestation. Each carries legal exposure this project has not researched with citations, and one of them touches biometric data law directly. Needs cited legal research and counsel, per the compliance rule already in `CLAUDE.md`. Owner: stage 03a input gate at the latest.

**D-B. The observed rate counter is worth nothing at N = 0.** It assumes six years of roll history from the live platform migrates into the new ledger and can be published. If that history cannot come across, or cannot be published for a legal reason, the capability is disqualified by its own evidence rule until volume accrues, and the finite visible pool becomes the fallback by default rather than by preference. Confirm the ledger migration before this reaches information architecture.

**D-C. The internal check that must run before any of this is drawn.** Every capability above is a commitment device that only works for an operator whose published weights are already true. The observed-against-published check ships to the public and is never taken down. It has to be run internally on the live platform's data first, and if it does not hold, that is a business decision that precedes the design one.

**D-D. Inventory capital for stock-backed tables.** The catalogue becomes smaller and backed rather than larger and unbacked. How much smaller is a treasury question, not a design one, and it sets the ceiling on what the case grid at T5 can contain.

---

## Critique

Step 9, on two instruments, as the rule in `CLAUDE.md` requires. Codex ran read only through the `codex` plugin against this local working folder and returned findings rather than edits. Three Claude passes ran in parallel and blind to it, each on a different lens: parent and citation verification, fork against refinement with an item-by-item tick-off of the three old core lists, and the path-break test with internal coherence. Fifty one raw findings, thirty seven after dedup on complete sets. Every confirmed row was re-read in place before it was edited.

**Divergences between the instruments, shown first, because a merged table hides them.**

| What | Claude | Codex |
|---|---|---|
| T4 declares it closes `B4-3` and no capability there does | found | not found |
| `B1-1`, `B2-1` and `B6-2` declared closed on the T path with no backlog row naming them | found | not found |
| B4 is the only MVP row whose parent is neither a barrier nor a job | found | not found |
| The daily bonus was moved without a parent being named | not found | found |
| Core Job 2 mapped onto D1 to D3 although `jtbd.md:185` limits that gap to animation quality | not found | found |
| The claim that D1 makes a cheap case incapable of producing an expensive item | not found | **found, and the claim was false** |
| `jtbd.md:67` is a heading and the job statement is at `:69` | judged the citation sound | judged it unusable |

The last row is a difference of strictness rather than a contradiction of fact: the heading does name the job. It is recorded as a divergence rather than voted on, and the citation was tightened anyway.

**Merged findings.**

| # | Class | Where | What | Found by | Status |
|---|---|---|---|---|---|
| M-01 | Locked rule | `:52` of `CLAUDE.md` against four rows here | "Provable fairness is the brand, not a footnote" against the secondary-proof framing, with the reconciliation still listing PF under "Confirmed" | Claude | Resolved by reframing. The feature is not demoted, one claim about it is. Wording in `CLAUDE.md` is step 11's if it is wanted |
| M-02 | Locked rule | design principle 3, `CLAUDE.md:54` | Expected value left the product. Step 7 dropped the only EV capability and nothing replaced it, while DANGER 3 at `jtbd.md:244` is open on exactly this | Claude | Fixed. Row D4 added and the T7 rejection annotated with the different grounds |
| M-03 | Locked rule | `CLAUDE.md:58` | Staged regional rollout is a named first class compliance constraint and was absent from the file entirely | Claude | Fixed inside B4 |
| M-04 | Lost without a verdict | whole file, zero occurrences of RTP | Publishing tested RTP pre-login is an MVP decision at `aarrr.md:67`, a takeaway at `:300`, and one of three things `jtbd.md:180` says no competitor does. Not MVP, not LATER, not cut | Claude | Fixed by D4 |
| M-05 | Lost without a verdict | `lean-ux-canvas.md:55` | The six blocked markets vanished while B4's success signal demands a citation for each one | Claude | Fixed. The list is carried in B4 with `[?]` until re-verified |
| M-06 | Lost without a verdict | `aarrr.md:292` | The linear reveal, Pattern A, was chosen in two older files and recorded nowhere in the new list | Claude | Fixed inside E3 |
| M-07 | Lost without a verdict | `aarrr.md:91`, `lean-ux-canvas.md:64` | Only the wagering variant of the first-deposit bonus was cut; the zero-wagering variant had no owner | Claude | Fixed. The cut table now covers both and states what would bring it back |
| M-08 | Label mismatch | `jtbd.md:198` | The daily free case is inside the MVP free-to-play offer by founder Decision 3, which outranks a superseded canvas cell, and it was adjudicated only against `aarrr.md:172` | Claude, Codex | **Open. Placed in LATER provisionally and named as the one disagreement the founder settles** |
| M-09 | Lost without a verdict | `CLAUDE.md:38` | Account is a round 1 item, had a group heading and no row, and F2 assumes an inventory exists | Claude | Fixed. Row B7 added |
| M-10 | Lost without a verdict | answer 2 | The finite visible pool is named as the `D-B` fallback and existed in no table to return to | Claude | Fixed. Recorded in the cut table |
| M-11 | Wrong parent | C1 | `B4-3` is a crediting failure, C1 is a denomination rule, and C3 already carries `B4-3` | Claude, Codex | Fixed |
| M-12 | Wrong parent | T3 | `B3-1` and `B3-2` are an unreadable login error and an onboarding demand, not sequence legibility | Claude, Codex | Fixed. B5 and B6 named instead |
| M-13 | Wrong parent | T4 | Declares `B4-3` closed while no capability there addresses it | Claude | Fixed |
| M-14 | Missing parent | A1, A5, D3 | `B1-1`, `B2-1` and `B6-2` were declared closed on the T path and named by no backlog row. `B6-2` is a pattern of 9 | Claude | Fixed. Parents added to the three rows that answer them |
| M-15 | Rule defect | `:145` | B4 and C5 stood on a compliance constraint while the stated rule admitted only barriers and jobs | Claude | Fixed. Three enumerated parent classes, with the third restricted to named lines of `CLAUDE.md` |
| M-16 | Rule defect | `:129` | Three LATER rows carry parent `None`, against the rule that LATER is not a shelter | Claude, Codex | Fixed. The locked-scope exception is written into the rule instead of being practised silently |
| M-17 | Missing parent | the daily bonus | Moved to LATER with no barrier and no job named | Codex | Fixed, and see M-08 |
| M-18 | Priority test | A3, C3, F2, G2, G4, G5, G6 | Rows that improve the path without breaking it, none flagged as an exception | Claude | **Partly withdrawn on verification.** Under the corrected test, C3, F2, G2, G4 and G5 each prevent a documented barrier from recurring, `B4-3`, `B7-1`, `B8-2`, `B8-3`, `B8-3`, and stay MVP. A3 and G6 survive the finding and are labelled `job only, no barrier` |
| M-19 | Priority test | E4, F3, H1 | The daily bonus was cut for having no job scoring 3 for the primary persona, while three MVP rows stand on Related Job 3, which scores 1 for The Opener | Claude | Fixed. All three now state that they are MVP by locked scope and founder decision, not by score |
| M-20 | Priority test | D3 | A second row that fails the test, while the text claimed exactly one | Claude | Fixed. Seven are now named |
| M-21 | Priority test | D1 | D3 carried its open decision in the priority cell and D1 did not, although `D-D` sets D1's ceiling | Claude | Fixed |
| M-22 | Arithmetic | `:151` | Seven screens in prose against eight groups in the table, and group 8 holds an item that is not a screen | Claude, Codex | Fixed. The mapping is written out and is not one to one |
| M-23 | Contradiction | `:284` against `:286` | B1 and B2 credited with Core Job 3 and declared to close no core job, two lines apart | Claude | Fixed |
| M-24 | Contradiction | H1 | Mapped to Core Job 1 while its own row named Related Job 3, opposite ends of the journey | Claude, Codex | Fixed. Both parents named, each with its moment |
| M-25 | Divergence from core | `:283` | Core Job 2 is reveal quality and `jtbd.md:185` limits that gap to animation quality; stock-backing is not reveal quality | Codex | Fixed. D rows removed from that mapping |
| M-26 | Contradiction | A2 | A display cannot make a state impossible; that guarantee is D1's | Claude | Fixed |
| M-27 | Contradiction | `:288` | The responsible play gap was presented as newly opened, while `cjm-as-is.md:125` recorded it and `lean-ux-canvas.md:54` names an actual page that was dropped without a verdict | Claude | Fixed, and the finding got worse in the correction |
| M-28 | Contradiction | T6 against E3, E4 | T6 refuses to generate capabilities for lack of evidence while the backlog ships two rows for that phase | Claude | **Partly withdrawn on verification.** The refusal was of a target emotion and of new mechanisms, not of the reveal, and neither E3 nor E4 is invented. The layer gap was real and is fixed: T6 now names both rows and their origins |
| M-29 | Contradiction | `:137` | The table headed "Orphans, cut" holds a row that states it is not an orphan | Claude | Fixed by a note. Step 7 artefact, kept rather than rewritten |
| M-30 | Contradiction | A5 | Declared to be the smallest test while the same document says that test cannot be run as written | Claude | Fixed. A5 is the subject of the test, and the restatement requirement is in both places |
| M-31 | Citation | `:266` | `jtbd.md:182` is a heading; the execution gap is at `:185` | Claude | Fixed |
| M-32 | Citation | `:273` | `lean-ux-canvas.md:46` is a cell heading; the three items are at `:50`, `:51`, `:52` | Claude | Fixed |
| M-33 | Citation | `:302` | "11 sources" is 11 people across 6 sources, and "densest pattern in the corpus" is false: `B1-2` is 14 and `B7-4` is 12 | Claude | Fixed |
| M-34 | Citation | `:161` | `lean-ux-canvas.md:79` reads "Hero A/B."; the badge variant is at `:81` | Codex | Fixed |
| M-35 | Citation | `:116` | `jtbd.md:67` is a heading; the job statement is at `:69` | Codex | Fixed, see the divergence table |
| M-36 | False claim | answer 1 | Stock-backing does not make a cheap case incapable of awarding an expensive item; it only requires we own the unit | Codex | Fixed. The guarantee is restated as economic and legibility-based, which is weaker than what was claimed |
| M-37 | Missing source | `D-A` | `aarrr.md:105` already discarded soft age gating on the UK Online Safety Act and required identity-based verification, which narrows the open method | Claude | Fixed |

**What the critique changed.**

Two rows were added, D4 and B7, because two things the old core owned had left the repository with no verdict at all: published RTP and the account with its inventory. Two rules were rewritten rather than patched, the parent rule and the priority test, because in both cases the document was already practising something wider than it declared, which is the failure the two-instrument pass exists to catch. One claim was withdrawn outright: stock-backed tables make an implausible starter payout expensive, not impossible, and the argument that rested on it now rests on something weaker and true. One finding is not closed and is not mine to close: the daily free case sits in LATER against a founder decision that says otherwise.

The instruments split the way the rule predicts. Codex found what is falsifiable inside the files and found the one false mechanism claim in the whole document. The Claude passes found what needs a judgement across files: an inflated MVP, a double standard, and five items that had quietly left the repository.

---

## What carries into voice and into concept

Two lines produced during this step belong to later stages and are recorded here so they are not lost.

**For stage 05, voice.** The honest answer to "why open instead of just buying the skin", written to be accepted rather than dismissed by a sceptical CS2 player: *"If you can afford the skin, buy it; opening is for the one you were never going to buy, and what you are paying for is the chance and the reveal, not a cheaper route to the same item."* It concedes the expected-value argument in its first clause, which is the only way a sceptic keeps reading, and it makes no financial claim at all, which is why it cannot be refuted with a spreadsheet.

**For stage 06, concept.** The only user observation about the visual treatment of a reveal anywhere in this research, recorded in `cjm-evidence.md` under U-13c: a gold rare-item display on a blue background, which the user says "puts me off", stated in the same breath as the intended payoff, "ill scream like a monkey if i ever get one". One mention, marked as one mention, and the only pixel-level signal the corpus contains.
