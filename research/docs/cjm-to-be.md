# CJM To-Be

**Focus: The Opener (primary persona) x Main Job "Arrive, open, get the thrill"**

The same person and the same job as `cjm-as-is.md`, but inside our product, which does not exist yet.

Rule of this half is the opposite of the As-Is half. The future has to be designed, so "do not invent" does not apply. What applies instead is tracing: every step and every capability on this map points at a named As-Is barrier from `cjm-as-is.md` or a named job from `jtbd.md`. A step with no parent is an orphan and gets cut, not kept because it looks good.

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
- **Closes.** `B8-4`, verification ambushes at the exit, by moving the check to the only place where it costs the user nothing they have already earned. `B3-1` and `B3-2` by making the entry sequence legible.
- **Capability.** **Verification resolved before funding, and no verification branch on the withdrawal route at all**, enforced in code and reviewable. The account state is shown on the deposit screen itself, so the promise describes a state the user can already see rather than a future behaviour we control.
- **Target emotion.** Settled. As-Is was `[?]`, frictionless for some and blocking for others with no way to weigh them.

**Diverge to converge on `B8-4`.** Three candidates, and the convergence splits deliberately. **The sequencing rule is chosen and locked**: the injury in the evidence is not the weight of the check, it is that the check is a trap sprung after money is committed, including a user banned as a minor at cashout after already passing KYC. Sequence is the injury. **The method is not chosen here and is carried as an open decision**, because all three candidate methods carry legal exposure that this project has not researched with citations: facial age estimation is fast and is recognised as effective in strict regimes but is contested biometric data under GDPR and state statutes such as Illinois BIPA; full document KYC before deposit removes the failure entirely but pays the largest conversion cost, creates a document trove and may itself be read as the operator self-classifying as a gambling business in a category where that classification is unsettled; payment-instrument age attestation is nearly invisible but its coverage varies sharply by country and it can never be the only method. Picking a biometric vendor from an unresearched comparison would be exactly the median-instead-of-a-source failure this project's rules exist to prevent. See open decisions below.

### T4. Getting something to open with

- **Step in the product.** Funds the account in real currency, and in the same step sets a spend ceiling for a named period.
- **Goal.** Reach an openable balance without committing money they would miss. Job: Related Job 2, complete the first open without friction, `jtbd.md:42`.
- **Closes.** `B4-1` the escalating deposit gate, `B4-3` money leaves and does not arrive, and `B7-4` the escalation loop.
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

**No divergence was run for this phase.** With no barrier evidence and no emotional evidence, candidate generation would have produced three inventions dressed as options. The honest move is to name it as the stage's open hole, which `cjm-as-is.md` records as U-13.

### T7. The outcome

- **Step in the product.** Sees what they got, what it is actually worth, and how this case has behaved for everyone.
- **Goal.** Understand the result and know what to do next. Job: Emotional Job 2, a moment sharp enough to become a story, `jtbd.md:93`.
- **Closes.** `B7-1` the undervalued win, `B7-2` the published probability that did not behave, and `B7-3` the consolation frame read as a trick.
- **Capabilities.** **Instance value receipt.** We hold the exact asset before awarding it, so its float, paint seed and phase are known: the item is priced as that instance, never as the skin name. The reveal shows name, float, phase, current sell price for the comparable float band and phase on two named venues, the inspect link, and a link that opens the venue listing filtered to that float band so the user checks it themselves. The receipt stays attached to the item in inventory and on the withdrawal record. **Observed rate counter.** Beside every published tier percentage stands the outcome count from the same settlement ledger that pays users: published, observed, and N. Never reset. If weights are ever changed the counter forks, the old configuration keeps its history and stays visible, the new one starts at zero and says so.
- **Target emotion.** A result that is understood, whether it is good or bad. As-Is was -5, and the whole of that -5 was the discovery that the number was not real.

**Diverge to converge on `B7-1`.** Three candidates. **Chosen: instance value receipt.** The pain is not that a number was optimistic, it is that the number described a different object than the one received, a name instead of an instance. The two rivals both leave that substitution intact. **Dropped as the primary: sell price everywhere**, which fixes the unit but not the number, although its load-bearing rule travels with the pick as a hard dependency: the receipt must be denominated in real currency, because a receipt in coins fails its own test. **Dropped: a published real payout per case**, expressing return per dollar at real prices, because it fires before the reveal at the one moment this persona reads nothing, and it pays the highest margin exposure of the three for a gain the Opener will not register. **Rejected before scoring: a binding buyback at the displayed value**, because it adds a payout rail round 1 does not have; round 1 has exactly one exit, withdrawal to Steam.

**Diverge to converge on `B7-2`.** Three candidates. **Chosen: observed rate counter.** It is the only one that speaks in the same unit as the complaint. The user is already counting, already comparing their count to a published claim, and already concluding fraud. This does not ask them to stop counting or to learn anything; it puts a much larger count from our own payment ledger next to the claim, in the place where the claim is made. It survives a persona who reads neither odds nor terms, because one line is read at a glance, and it is the only candidate that gets stronger every day it runs. **Dropped: a finite visible pool** with draws without replacement and remaining contents shown live, which is the strongest answer in principle and removes the need for trust entirely, but it re-prices the core product inside round 1, cannot be piloted, cannot be withdrawn once seen, and creates advantage play as a depleting pool's expected value rises. **Dropped: personal streak math**, telling the user how their own dry run compares to the published distribution, because correct mathematics delivered next to a spend button to a losing user is loss-chasing encouragement and the single easiest artefact to hold up in a hearing.

**Rejected as an answer to `B7-2`, and this is the most important rejection on the map: making provable fairness automatic.** Auto-publishing the seed pair, recomputing in the browser and showing a verified badge is the obvious candidate and it fails on mechanism, not on effort. **A commit-reveal scheme proves the outcome was not altered after the click. It says nothing about whether the weight table is the one we published, and the weight table is what users actually dispute.** Automating a proof of the wrong proposition produces exactly the reaction already in the evidence: "they market the sentence Provably Fair which is totally fake". The verification tool stays, because it is a round 1 surface and its absence would be conspicuous, but it is not funded as the answer to this barrier.

### T8. Payoff or exit

- **Step in the product.** Withdraws to Steam, and can see the state of that withdrawal and who it is waiting on at every moment.
- **Goal.** Turn the result into something real. Job: Related Job 5, withdraw and get what I earned, `jtbd.md:67`.
- **Closes.** `B8-2` waiting with no attribution, `B8-3` winning treated as suspicious behaviour. `B8-1` is already closed upstream at T5.
- **Capabilities.** **Public withdrawal clock.** A withdrawal moves through named states with a per-state timer, each labelled with who it is waiting on: us, Steam, or you. Our own states carry a published ceiling and a live degraded banner driven by a Steam API health probe. Rolling median and p90 withdrawal times are published from our own logs. **A restriction produces a written notice with a stated ground, a balance frozen rather than zeroed, and an appeal with a published response deadline.**
- **Target emotion.** Waiting without suspicion. As-Is was -5 and this was the floor of the entire map.

**Cost accepted.** A published ceiling is a promise, so support must be staffed to meet it. Publishing our own p90 means one bad Steam week puts our own number on a competitor's page, and because we computed it ourselves we cannot dispute it. A public clock also tells an attacker how long the review window is.

**Named limits, because an unconditional promise would be a lie.** Blocked countries, Steam trade holds and Steam-side bans are outside our control and are stated in plain words rather than discovered at the first delayed payout.

---

## Orphans, cut

Every capability proposed during divergence that closes no As-Is barrier and serves no job in `jtbd.md` is listed here rather than parked in a LATER column. `LATER` is a priority for a feature that has a parent, not a shelter for one that does not.

| Proposed | Why it is an orphan | Verdict |
|---|---|---|
| Free demo reveal on identical odds and seeds | Closes no recorded barrier. Its stated purpose is proving we are not hiding the odds, which `B7-2` already closes with evidence rather than with a simulation | Cut |
| Permanently visible net position | Addresses an information gap the evidence does not show. Users in the corpus recite their totals to the dollar | Cut |
| Personal streak math | Same, plus it creates a compliance liability the barrier does not require | Cut |
| Binding buyback at displayed value | Needs a payout rail that round 1 does not have | Cut, revisit only if a second exit is ever in scope |
| Chase interrupt on detected tilt | Has a parent, `B7-4`, but loses to the chosen capability on the same barrier | Not an orphan. Dropped in convergence |

---

## Open decisions this map cannot close

These are named rather than answered, because answering them from inside a model would produce a median where a source is required.

**D-A. The age and identity method.** The sequencing rule is locked: verification resolved before funding, no verification branch on the withdrawal route. The method is open between facial age estimation, full document KYC before deposit, and payment-instrument attestation. Each carries legal exposure this project has not researched with citations, and one of them touches biometric data law directly. Needs cited legal research and counsel, per the compliance rule already in `CLAUDE.md`. Owner: stage 03a input gate at the latest.

**D-B. The observed rate counter is worth nothing at N = 0.** It assumes six years of roll history from the live platform migrates into the new ledger and can be published. If that history cannot come across, or cannot be published for a legal reason, the capability is disqualified by its own evidence rule until volume accrues, and the finite visible pool becomes the fallback by default rather than by preference. Confirm the ledger migration before this reaches information architecture.

**D-C. The internal check that must run before any of this is drawn.** Every capability above is a commitment device that only works for an operator whose published weights are already true. The observed-against-published check ships to the public and is never taken down. It has to be run internally on the live platform's data first, and if it does not hold, that is a business decision that precedes the design one.

**D-D. Inventory capital for stock-backed tables.** The catalogue becomes smaller and backed rather than larger and unbacked. How much smaller is a treasury question, not a design one, and it sets the ceiling on what the case grid at T5 can contain.

---

## What carries into voice and into concept

Two lines produced during this step belong to later stages and are recorded here so they are not lost.

**For stage 05, voice.** The honest answer to "why open instead of just buying the skin", written to be accepted rather than dismissed by a sceptical CS2 player: *"If you can afford the skin, buy it; opening is for the one you were never going to buy, and what you are paying for is the chance and the reveal, not a cheaper route to the same item."* It concedes the expected-value argument in its first clause, which is the only way a sceptic keeps reading, and it makes no financial claim at all, which is why it cannot be refuted with a spreadsheet.

**For stage 06, concept.** The only user observation about the visual treatment of a reveal anywhere in this research, recorded in `cjm-evidence.md` under U-13c: a gold rare-item display on a blue background, which the user says "puts me off", stated in the same breath as the intended payoff, "ill scream like a monkey if i ever get one". One mention, marked as one mention, and the only pixel-level signal the corpus contains.
