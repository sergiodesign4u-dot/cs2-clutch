# Information architecture, base layer

Stage 03a. This file grows one section per step: Entities, then the concept sitemap, then navigation, then the tracing matrix. Flows live in `flows.md`.

**Visible place.** Every section of this file is rendered as a section of `ia/concept-map.html`, which stage 03a step 5 assembles once the flows have refined the map. The Entities section written by step 1 is named here as the first section of that page and it is registered in its `NAV_SECTIONS` when the page is built. Naming the destination is the requirement; building it is step 5's job.

---

## Entities

Written at step 1, on 11 August 2026. Objects before screens: a screen only shows objects, and objects grow out of jobs. Inventing objects a job does not require is how a structure gets built from a competitor's menu instead of from the product.

**Sources read:** `research/docs/jtbd.md`, `research/docs/personas.md`, `research/docs/research.md`, the backlog in `research/docs/cjm-to-be.md`, and `research/docs/baseline.md` as a cross-check on what the product already has rather than as a source of objects.

### The parent rule this section follows, and where it departs from the pack

The pack asks for one parent class, a job from `jtbd.md`, and sends anything else to "Under question". `CLAUDE.md` defines **three** legal parent classes for any capability from stage 03 on: a barrier code from the CJM As-Is map, a job from `jtbd.md`, or a named compliance constraint or design principle quoted by which one. The project rule outranks the pack here and this section follows it, because the CJM stage already proved the case: deposit closes no core job and is justified entirely by documented barriers, and the round 1 surface list is legitimately wider than the job list for that reason, `jtbd.md:201`.

So every entity below names a parent and the class it belongs to. An entity with no parent in any of the three classes goes to "Under question", not into the main list. One entity does, and one entity sits in the main list carrying an inherited orphan status that was decided by the founder rather than derived.

### 1. Case

The object a person chooses and pays to open. The unit of the main job.

**Parts:** name and artwork; entry cost in one real currency, `C1`; risk band as a legible label; the drop table as a list of entries; published tested RTP for this case and the expected value at this entry cost, `D4`; free-unit availability across its table, `A2`; category or collection membership `[?]`, present on the baseline as 13 categories and not yet required by any job here.

**Parent:** Main Job, `jtbd.md:17`, a chance at a rare skin the person actually wants. Also Related Job 1, `jtbd.md:33`, because the case page is where cost, chance and expected value are read before any money moves. Class: job.

**Related to:** contains Drop table entries; an Open consumes one Case; a Free entry may unlock one.

### 2. Drop table entry

One line of a case: this skin, at this chance, at this value, with this many free units. It is the object four separate backlog rows attach to, which is why it is an entity and not a field.

**Parts:** the Skin it points at; published chance as a percentage, `D2`; current value, `D2`; live market price with timestamp and an outbound market link on the top item, `A1`; live free-unit count, `A2`; observed rate beside the published percentage, `D3`, conditional on `D-B`; the roll interval this entry occupies.

The roll interval is not in our backlog and is in the baseline: it prints a ticket range such as "1 - 10" on every item, `baseline.md` section 4. It is carried here as a part because the round proof has to resolve against something, and it is the object that makes `E4` and `F3` checkable rather than decorative.

**Parent:** `B7-2`, the belief that the numbers shown are not the numbers used, pattern of 11, plus `B8-1` for the stock question. Class: barrier.

**Related to:** belongs to one Case; points at one Skin; the settled roll of an Open lands on exactly one entry.

### 3. Skin

The item type, as the market knows it. Not a unit anyone owns.

**Parts:** weapon, finish, wear grade; live market price with timestamp, `A1`; outbound market link, `A1`; rarity tier, whose value ladder is `[?]` and owned by stage 06 per `baseline.md`.

**Parent:** Main Job, `jtbd.md:17`. Class: job.

**Related to:** appears in Drop table entries across many Cases; a Skin instance is a unit of one Skin.

### 4. Skin instance

The specific unit a person owns. Separate from the type because the receipt attaches here and not there.

**Parts:** which Skin; the instance value receipt, `F1`, which states what it was worth at the moment it was won; the Open it came from; current state, held, withdrawing or withdrawn; free-unit backing, `D1`; float or pattern specifics `[?]`, not required by any job in the current list.

**Parent:** `B7-1`, the gap between what a win appears to be worth and what it is worth, pattern of 7, which `F1` closes. Also Related Job 5, `jtbd.md:69`. Class: barrier, with a job behind it.

**Related to:** produced by one Open; held in an Account; consumed by a Withdrawal; carries its receipt into both, `F2`.

### 5. Open

One round: the commitment, the reveal, and the outcome, as a single record rather than three moments.

**Parts:** the Case; the entry cost paid; the round hash, visible at the spin trigger, `E4`; the settled roll, which the reveal renders and does not compute again, `E1`; the resulting Skin instance; timestamp; the post-reveal verification link, `F3`.

**Parent:** Main Job, `jtbd.md:17`; Emotional Job 1, `jtbd.md:84`, genuine suspense rather than manufactured tension, which is why `E2` forbids near-miss theatre; Related Job 3, `jtbd.md:51`. Class: job.

**Related to:** belongs to an Account; consumes Balance or a Free entry; produces one Skin instance; resolves against one Drop table entry; carries one Round proof; emits one Live drop event.

### 6. Round proof

The verifiable record of a roll. It is a separate entity because a person who is not logged in can hold one and check it, which is the entire reason `H1` is a public surface rather than a panel inside the account.

**Parts:** server seed hash published before the roll; client seed; nonce; the settled result; the recomputation the verifier performs.

**Parent:** Related Job 3, `jtbd.md:51`, after the open, and Core Job 1, `jtbd.md:180`, before login, where a public provably fair surface is named as one of three things no competitor offers pre-login. Class: job.

**Carried limit, not to be lost.** `D-14` demoted the claim, not the feature. This object is evidence that our own numbers are honest. It is not what persuades a sceptic, and what answers the recorded doubt at launch is `D2` and `D4`. The entity exists in full; the claim attached to it is bounded.

**Related to:** one Open has one Round proof; the public provably fair surface reads Round proofs with no Account attached.

### 7. Account

The person's own record on the platform.

**Parts:** Steam identity, with no password anywhere outside Steam OpenID and no profile changes requested, `B6`; verification state, resolved before funding and never on the withdrawal route, `B1` and `B2`; the age declaration taken at registration and the identity verification taken before funding, `B3` and `D-17`; withdrawals open or restricted, with a written ground when restricted, `B7` and `G4`; the market the account sits in, `B4`; Steam login failure states as readable text, `B5`.

**Parent:** Related Job 5, `jtbd.md:69`, and `B7-1`, plus the compliance constraint in `CLAUDE.md`, "age verification before any case interaction". Class: job, barrier and constraint together.

**Related to:** holds Balance; holds Skin instances as inventory; owns Opens, Deposits and Withdrawals; carries Play limits; is bound by one Market rule.

### 8. Balance

Money on the platform, in one real currency. An entity rather than a field on the Account, because three rules attach to it and none of them is a display concern.

**Parts:** amount, in one real currency with no internal coin denomination anywhere, `C1`; pending credit shown as a state with a timer, `C3`; the sum required to withdraw, stated before the deposit and unable to rise afterwards, `C4`; the remaining spend ceiling for this deposit, `C2`.

**Parent:** `B7-1`, pattern of 7, the currency abstraction that hides what things cost, and `B4-1`, the withdrawal threshold that moves after the money is in. Class: barrier.

**Related to:** belongs to an Account; fed by Deposits; spent by Opens; constrained by Play limits.

**Baseline divergence, named now rather than at the wireframe.** The baseline runs an internal coin denomination with no visible conversion rate, `research.md` and `baseline.md`. `C1` deletes that object entirely. This is the first inherited structure that research overturns, and per `CLAUDE.md` it gets named in the IA node rather than absorbed.

### 9. Deposit

One funding event and its record.

**Parts:** amount; method `[?]`, no pre-login route exists on the baseline to read one from; crediting state with a timer, `C3`; the spend ceiling chosen at this deposit, `C2`; the withdrawal threshold as stated at this moment, `C4`.

**Parent:** `B4-3`, a deposit that never credits, pattern of 4; `B7-4`, pattern of 12; `B4-1`. Class: **barrier only, no job.** `jtbd.md:201` records this explicitly: deposit closes none of the three core jobs and is justified by documented barriers and by compliance, which is the legitimate reason the round 1 surface list is wider than the job list.

**Related to:** belongs to an Account; credits Balance; sets Play limits at the moment of the money decision.

### 10. Withdrawal

The exit, and the object the whole value loop exists to deliver.

**Parts:** the Skin instances being withdrawn, each carrying the receipt from `F2`; named states with a per-state timer and attribution to us, Steam or the user, `G1`; our published ceiling per state, `G2`; named limits stated in plain words before entry, blocked countries, Steam trade holds, Steam-side bans, `G5`; a written notice with a stated ground and an appeal with a published response deadline when restricted, `G4`; commission, which is zero to Steam, `G6`.

**Parent:** Related Job 5, `jtbd.md:69`, and `B8-2`, pattern of 6, plus `B8-3`, pattern of 3. Class: job and barrier.

**Related to:** belongs to an Account; consumes Skin instances; delivers into the Steam inventory, which is outside our system; contributes to the Published performance record.

### 11. Published performance record

Our own withdrawal numbers, published. An entity because the backlog says so in as many words: `A4` and `G3` are "the same feature, two surfaces". An object shown in two places is an object, not a component.

**Parts:** rolling median and p90 withdrawal time from our own logs, `A4` and `G3`; per-state ceilings, `G2`; a live degraded flag driven by a Steam API health probe, `G2`; published tested RTP per case, `D4`, which is the same class of object pointed at a different subject.

**Parent:** `B8-2`, pattern of 6, and Related Job 1, `jtbd.md:33`. Class: barrier and job.

**Related to:** derived from Withdrawals; read on the home surface before login and on the withdrawal surface after; read with no Account attached.

### 12. Play limits

The person's own brakes. They get a surface of their own because the founder restored the responsible play page to round 1 on 11 August 2026.

**Parts:** spend ceiling chosen at deposit, `C2`; session limit, self exclusion and cool down, `C5`; each with a state and an effective period `[?]`.

**Parent:** `B7-4`, pattern of 12, plus the compliance constraint in `CLAUDE.md`, "responsible play tooling (deposit limits, session limits, self exclusion, cool down)". Class: barrier and constraint.

**Related to:** belongs to an Account; set at Deposit; constrains Balance and Open; surfaced on the responsible play page.

**Zero inherited.** `baseline.md` section 6 records that the baseline has no responsible play route, no footer link, and zero matches for self exclusion, deposit limit, cool down or gambling anywhere in its FAQ. This object is built from the constraint, or it is not built honestly.

### 13. Free entry

An entitlement to open without paying: the bounded starter credit and the daily free case.

**Parts:** type, starter credit `I1` or daily free case `I2`; the bound constraints on the starter credit, which `cjm-to-be.md` answer 1 marks as not optional; what it unlocks; availability and reset `[?]`.

**Parent:** `I1` stands on Related Job 2, `jtbd.md:42`, and `aarrr.md:119`. Class: job. **`I2` has no parent in any of the three legal classes** and is in the main list by founder decision of 11 August 2026 rather than by derivation. It is printed here with that status rather than given a borrowed parent, which is the treatment `D-15` chose and this step does not quietly reverse.

**Related to:** belongs to an Account; unlocks an Open on a Case without consuming Balance.

**Inherited answer waiting for a decision.** The baseline runs a daily reward gated behind a wager requirement and presented as a five tier ladder, `baseline.md` section 4. Row `I2` carries the recorded risk that a daily free open teaches the impression that opening is free, which is the impression the rest of the map spends its budget contradicting. The baseline's form answers that risk. Whether we adopt it is the founder's call and it is open, not assumed here.

### 14. Live drop event

One public win, moving across the platform in real time.

**Parts:** the winning account as it chooses to appear; the Skin; the Case or mode it came from; timestamp; whether the account is a bot, labelled as one where present, `A3` carried from `aarrr.md:157`.

**Parent:** Social Job 2, `jtbd.md:120`, be part of a platform that feels alive. Class: **job only, no barrier**, which `A3` states in its own row.

**Related to:** emitted by an Open; points at a public destination, which is the next entity and the one that is not yet defined.

### 15. Shared result

What leaves the platform when a person shares a win, and what a stranger lands on when they follow it.

**Parts:** `[?]` on all of them. Whether the shared object is a public profile, a public record of one Open, an image, or a link into the case is not specified anywhere in this repository.

**Parent:** Emotional Job 2, `jtbd.md:93`, a win worth talking about, closed by `F4`, one-tap share of a result. Class: job.

**Why this entity is in the main list while its parts are empty.** `F4` is the one exception to the priority test in the whole backlog: the path does not break without it, the referral loop does. A capability that emits an object into the world with no definition of what that object is, is a gap, and a gap named at the entity step is cheap. The baseline resolves it one way, every ticker tile links to a public profile at `/en/profile/<id>`, `baseline.md` section 2, and that is an observation rather than a decision. This is the one entity where step 2 has to either define the object or move `F4` to a round where it can be defined.

### 16. Market rule

Whether a market is open, blocked or staged, and on what legal ground.

**Parts:** the market; the verdict; a cited legal ground per blocked market, `B4`; the staged regional rollout the same ground implies. The starting list is inherited and carries `[?]` until re-verified against current law: Belgium, Netherlands, Germany, UK, Washington, Nevada, `lean-ux-canvas.md:55`.

**Parent:** the compliance constraint in `CLAUDE.md`, "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", sourced at `research.md` section 7. Class: constraint.

**Related to:** binds an Account; met by a visitor before anything else.

**Asymmetric object, and this is deliberate.** The full record is operator-side: one row per market with its citation, which is exactly what `B4`'s success signal requires. What reaches the person is only the verdict and the ground in readable words. It is listed as an entity rather than as a rule because the ground has to be a stored, citable thing rather than a sentence someone writes once.

---

### LATER entities, with their parents

Carried so that step 2 can draw the whole product rather than only round 1. Not detailed here: an entity gets its parts written in the round that builds it.

| Entity | Parent | Class |
|---|---|---|
| Battle, with its lobby and opponents | Social Job 1, `jtbd.md:111` | Job |
| Upgrade attempt | Related Job 4, `jtbd.md:60` | Job |
| Rakeback and loyalty standing | Emotional Job 3, `jtbd.md:102` | Job |
| Exchange offer | Hypothesis Job A, `jtbd.md:133` | Job, marked `[?]` at its source |
| Leaderboard standing | Hypothesis Job C, `jtbd.md:145` | Job, marked `[?]` at its source |

---

### Under question

Objects with no parent in any of the three legal classes. They are not in the main list and they do not enter the concept sitemap without acquiring one.

| Object | Where it comes from | What is missing |
|---|---|---|
| Referral and affiliate standing | The baseline runs `/en/affiliate-program`, and `aarrr.md:272` treats it as a business line | **No user job stands behind it**, stated in `cjm-to-be.md`. It is locked into LATER by scope, so no step may cut it, and it has to acquire a parent before its own round opens |
| Giveaway entry | The baseline runs `/en/giveaways` | No parent named anywhere |
| Gunfight | The baseline runs `/en/gunfights` | No parent named anywhere |
| Race and prize pot | The baseline runs `/en/race` and gives the pot the most valuable slot in its header | No parent named anywhere. Its position on the baseline is the most prominent of any parentless object |
| Rewards hub, top wins, gift cards | The baseline runs `/en/rewards`, `/en/top-wins`, `/en/gift-cards` | No parent named anywhere |
| Case category or collection | The baseline groups 239 cases into 13 categories | No job requires grouping. It becomes required only if the catalogue stays large, which `D-D` decides. Carried as a part of Case marked `[?]` rather than promoted |

**Six of these seven are the objects behind eight of the nine destinations in the baseline's left icon rail.** That is the same finding `baseline.md` reports from the other direction: the inherited navigation is built mostly out of objects that our jobs do not require in round 1.

---

### What this inventory does not decide

Screens, navigation and depth. Step 1 produces objects only. The check that every object has at least one screen where it is visible or acted on runs at step 2 as the second slice, and an object with no screen is either a surplus entity to remove from here or a missing screen to add there.

---

## Concept sitemap

Written at step 2, on 11 August 2026. Screens grouped by what the person is trying to do, not by sections of a site. No states, no page contents: states arrive with the flows at step 4, contents are the detail layer. Depth is deliberately absent, levels are assigned at step 3 so that taps have something to be counted on.

**The language boundary was checked before the first node, as the pack requires.** `CLAUDE.md:15` and `docs/decisions.md` D-02: one language, English, with the consequence already written into the rule, one IA node is one page. No node multiplies by language, no URL branch, no hreflang block, and microcopy stays strings rather than keys. Nothing here waits on a language decision.

**Persona marks.** `P` is The Opener, primary. `S` is a secondary persona, named where it matters. `CLAUDE.md` says the primary persona wins a conflict and the interface is not built around secondary scenarios even though they must work, so a screen marked `S` alone is a screen no round 1 decision may be optimised for.

**Scope marks** come from the backlog in `cjm-to-be.md` and are inherited, not derived a second time.

### A. Decide whether this place is real

The visitor has arrived pre-suspected, `B1-1`, and is deciding whether to give this place any money at all.

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **A1. Home** | Related Job 1, `jtbd.md:33`, and Social Job 2, `jtbd.md:120`. Carries A1 to A5 of the backlog | P, and S The Researcher | MVP |
| **A2. Provably fair, public, with a working verifier** | Related Job 3, `jtbd.md:51`, after the open, and Core Job 1, `jtbd.md:180`, before login. Row H1 | S The Researcher, P only after an open | MVP, locked surface |

A2 is reachable both from here and from the outcome phase of C2. One screen, two intents, and that is the reason it is a public surface rather than a panel inside the account.

### B. Get through the door

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **B1. Age and geo gate** | Compliance constraint, `CLAUDE.md`, "age verification before any case interaction" and "geo blocking informed by cited legal research". Rows B3 and B4 | P | MVP, locked surface |
| **B2. Sign in with Steam** | Related Job 2, `jtbd.md:42`, plus `B3-1` and `B3-2`. Rows B5 and B6 | P | MVP |
| **B3. Identity verification** | `B8-4`, pattern of 5, plus rows B1 and B2, verification resolved before funding and never on the withdrawal route | P | MVP, method open per `D-A`, shape locked by `D-17` |

**B1 and B3 are two different screens and that separation is load bearing.** B1 is the 18+ declaration at the door, cheap, met by everyone. B3 is identity verification and it stands between the person and funding, not between the person and their first open. Decision `D-17` set that shape. The UX pattern reconciliation below arrives at the same shape from a completely different direction, which is the strongest thing that happened in this step.

### C. Choose what to open, and open it

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **C1. Case catalogue** | Main Job, `jtbd.md:17` | P | MVP |
| **C2. Case screen** | Main Job, `jtbd.md:17`, Related Job 1, `jtbd.md:33`, Emotional Job 1, `jtbd.md:84`, Related Job 3, `jtbd.md:51`. Carries backlog groups 4, 5 and 6 | P | MVP |

**C2 is one screen with three phases, not three screens.** `cjm-to-be.md:180` states it: groups 4, 5 and 6 are three phases of the single case opening screen. The phases are named here because step 4 needs them as flow steps, and they are not nodes:

- **Phase 1, choosing.** Published chance and current value per item, D2. The observed rate counter beside the published percentage, D3, conditional on `D-B`. Published tested RTP and expected value at this entry cost, D4. Stock-backed table, D1.
- **Phase 2, the open.** The round hash at the spin trigger, E4. The reveal renders the settled roll and computes nothing again, E1. No near-miss theatre, E2. Rarity-differentiated linear reveal, E3.
- **Phase 3, the outcome.** Instance value receipt, F1. The receipt persists onto the item, F2. Post-reveal verification link, F3. One-tap share, F4.

**C1 and C2 are two nodes and not one**, which the baseline walk established independently: a catalogue and a case detail page carry different jobs, `baseline.md` section 1.

### D. Put money in

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **D1. Deposit** | `B4-3` pattern of 4, `B7-4` pattern of 12, `B4-1`. **Barrier only, no job**, per `jtbd.md:201`. Rows C1 to C4 | P | MVP, locked surface |

The spend ceiling is chosen here, C2, because this is where the money decision is made. Its management lives on F1.

### E. Take out what I earned

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **E1. Account and inventory** | Row B7, `B7-1`, and Related Job 5, `jtbd.md:69` | P, and S The Accumulator | MVP, locked surface |
| **E2. Withdrawal, with the public clock** | Related Job 5, `jtbd.md:69`, `B8-2` pattern of 6, `B8-3` pattern of 3. Rows G1 to G6 | S The Accumulator and The Researcher score 3, P scores 2 | MVP, locked surface |

E2 is the one round 1 screen where the primary persona is not the highest scorer, and `jtbd.md:181` already carries the reason it stays in the core anyway: it is the only job whose failure ends the relationship rather than degrading it.

### F. Keep myself in check

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **F1. Responsible play** | `B7-4` pattern of 12, plus the compliance constraint, "responsible play tooling". Rows C2 and C5 | P and all | MVP, locked surface, restored by founder decision 11 August 2026 |

### G. Tell someone

| Screen | Parent | Persona | Scope |
|---|---|---|---|
| **G1. Public result** | Emotional Job 2, `jtbd.md:93`, closed by row F4. **And Related Job 3, `jtbd.md:51`, in its own words**, found by the step 5 matrix and recorded here rather than in the tracing section alone | P | **MVP, and it raises a scope question, see below** |

### LATER, so that the map shows the product and not only round 1

| Intent | Screens | Parent | Mark |
|---|---|---|---|
| Play against a real person | Battle list, battle lobby | Social Job 1, `jtbd.md:111` | LATER |
| Turn what I got into what I wanted | Upgrade | Related Job 4, `jtbd.md:60` | LATER |
| Turn what I got into credit | Exchange | Hypothesis Job A, `jtbd.md:133` | LATER, parent is a hypothesis marked `[?]` at its source |
| Be rewarded for staying | Rakeback and loyalty | Emotional Job 3, `jtbd.md:102` | LATER |
| Be seen for staying | Leaderboard | Hypothesis Job C, `jtbd.md:145` | LATER, parent is a hypothesis marked `[?]` |
| No intent found | Gunfights, giveaways, race and prize pot, rewards hub, gift cards, referral and affiliate | None in any of the three classes | LATER **`[ORPHAN]`**. Locked into LATER by scope, so this step cannot cut them. Each has to acquire a parent before its own round opens |

Seven orphan screens. Six of them are the destinations behind eight of the nine items in the baseline's left icon rail. The concept map and the baseline walk reached that from opposite ends.

### Reconciliation with the chosen UX pattern

The chosen pattern is **Pattern A, linear reveal, as the core, with Pattern E, community and social, as an ambient layer**, `ux-patterns.md:258`. Explicitly not a compromise: "they do not compete, they occupy different layers of the same screen".

**Where the map implements it.** C2 phase 2 is Pattern A exactly, including the thing reason 3 of that section asks for: the pre-round hash surfaced as a UI element at the spin trigger, row E4. Pattern E has **no screen of its own anywhere in this map**, which is the correct implementation rather than an omission: the live drop feed is a layer on A1 and on C2, never a destination. A screen for the live feed would have broken the pattern by turning a layer into a place.

**Where something works against it, named directly.** Pattern A's first reason is that the linear reveal needs zero explanation, so a new user can begin the first session with no learning curve, "this reduces friction at the moment that matters most". A full identity check standing between arrival and the first open is friction at exactly that moment, and row B3 says "age gate before any case interaction". Read as one heavy gate, the compliance requirement and the chosen pattern contradict each other.

**The map resolves it rather than choosing a side, and it did not invent the resolution.** B1 carries the declaration and meets every arrival. B3 carries identity verification and stands before funding, not before the first open, so a first open on a Free entry passes only through B1. That is decision `D-17`, taken on 11 August 2026 from a compliance argument with no reference to Pattern A. Two instruments, a legal sequence and a UX pattern, converge on the same two-screen split. The pattern stays ours, unchanged, and `ux-patterns.md` needs no paragraph appended.

**Two reductions in Pattern E, stated rather than absorbed.** Pattern E as described covers a live feed plus community signals, and round 1 ships exactly one of those, the live drop feed, row A3. Community case creation and leaderboards are deferred at `jtbd.md:210` and in the LATER table above. Pattern E is therefore thinner in round 1 than its own description, and this is a scope consequence rather than a change of pattern.

**One absence worth recording.** `ux-patterns.md:289` assigns Pattern B, the card flip, to bulk open flows as a supporting pattern. The baseline runs a five-slot multi-open, `baseline.md` section 4. Our backlog has no multi-open row, so the capability is absent from round 1 and has no parent in any of the three classes. It is `[ORPHAN]` and out of scope, named here so that nobody later reports it as a discovery.

### Second slice: every entity against a screen

The first slice, by intent, catches holes in the person's path. This one catches holes in the subject matter. An object with no screen is either a surplus entity or a missing screen.

| Entity | Where it is seen or acted on |
|---|---|
| Case | C1, C2 |
| Drop table entry | C2 phase 1 |
| Skin | C1, C2 |
| Skin instance | C2 phase 3, E1, E2 |
| Open | C2 phases 2 and 3 |
| Round proof | A2, C2 phase 3, G1 |
| Account | E1, B3 |
| Balance | E1, D1, C2 phase 1 |
| Deposit | D1 |
| Withdrawal | E2 |
| Published performance record | A1 pre-login, E2 after |
| Play limits | F1, set at D1 |
| Free entry | C1 as an available case, A1 as an offer. **No place of its own, `[?]`** |
| Live drop event | A1 and C2, as a layer |
| Shared result | **G1, which this slice is what produced** |
| Market rule | B1 |

**Sixteen of sixteen have a screen, and the slice earned its place by producing one.** Shared result entered step 1 with every part empty and no destination. Nothing was removed: no entity turned out to be surplus.

**One object is carried with a mark.** Free entry, the starter credit and the daily free case, appears on two screens and owns neither. `cjm-to-be.md:180` already calls I1 and I2 components rather than screens, so this is consistent rather than contradictory, but an object with no home is how a capability quietly disappears between two stages. Owner: step 3, which decides what is global and what is contextual.

### The scope question this step raises, and does not answer

G1, the public result, is **a ninth public surface**, and `CLAUDE.md` locks round 1 to eight. The rule that `CLAUDE.md` wins every disagreement about scope means this step names the question rather than deciding it.

**Why the screen exists.** Row F4, one-tap share of a result, is the single exception to the priority test in the entire backlog: the path does not break without it, the referral loop does, `cjm-to-be.md`. A share emits an object into the world, and step 1 found that nothing in this repository says what that object is.

**Three ways to resolve it, and what each costs.**

1. **A public result page, one open with its skin, its case and its round proof.** Serves Emotional Job 2 as written, "a moment visually and emotionally sharp enough to share", and it carries its own proof, which is design principle 1 arriving in a stranger's browser. It also gives the Live drop event a destination that is not a user profile, and no job in this repository requires a profile object at all. Cost: a ninth surface in a round locked at eight.
2. **The share link opens A2, the provably fair page, with this round pre-loaded.** No new surface, reuses a locked one, carries the proof. Cost: the landing is a verifier form, which is the least emotionally sharp object the product owns, and F4 exists for the referral loop rather than for verification.
3. **Move F4 out of round 1.** Scope stays at eight surfaces, honestly. Cost: the referral loop ships without its mechanism, and F4's own row says that is what breaks.

**Recommendation: option 1.** F4 is in MVP for the loop, and a verifier form converts nobody. But it is a scope change to a locked list, so it goes to the founder the same way the responsible play page did rather than being absorbed into a table.

Until it is answered, G1 stays drawn and marked, because a screen deleted by silence is exactly what the CJM stage found last time.

---

## Navigation

Written at step 3, on 11 August 2026. The concept sitemap says which screens exist and by what intent they group. This section says how a person moves between them, assigns levels so that depth can be counted at all, and counts the taps from arrival to the main job.

### The first decision: round 1 ships no icon rail

The baseline runs a fixed 70px left icon rail with nine destinations. `baseline.md` established that **exactly one of the nine is in our round 1**. This is the divergence that walk demanded an answer for, and the answer is that the rail does not ship.

**Reasoning.** The rail is a mode switcher. Round 1 has one mode. A rail carrying one live item and eight dead ones is not navigation, it is a promise the product cannot keep, and it advertises absence on every screen. `CLAUDE.md` permits exactly this: where the inherited structure loses to research, research wins and the divergence is named out loud.

**What it is not.** Not a rejection of the rail as a pattern. It returns when a second mode does, and battles are already scheduled as Phase 1.5 at `jtbd.md:212`. The rail is deferred with its trigger named, not deleted.

**What it buys.** The removal is the flattening this step needed. Global navigation becomes a header of four items instead of a rail of nine, and the horizontal space the rail occupied returns to the reveal, which is the surface the product competes on.

### Global navigation, four items, and the job behind each

| Item | Enters | Job behind it |
|---|---|---|
| **Cases** | C1, the catalogue | Main Job, `jtbd.md:17`. The one mode round 1 ships |
| **Provably fair** | A2 | Related Job 1, `jtbd.md:33`, before login, and Related Job 3, `jtbd.md:51`, after the open |
| **My items** | E1, account and inventory | Related Job 5, `jtbd.md:69`. Inventory, receipts, and the way into withdrawal |
| **Balance** | D1, deposit, and the spend ceiling | `B4-3`, `B7-4`, `B4-1`. **Barrier class, no job**, consistent with `jtbd.md:201` |

**Provably fair in the global navigation is a deliberate structural claim and no competitor makes it.** `jtbd.md:180` names a public provably fair surface as one of three things no competitor offers pre-login, and `baseline.md` verified on 11 August 2026 that our own baseline still redirects that route to login. Design principle 1 says trust is the product. A principle that does not reach the navigation is a slogan, and this is the cheapest place it becomes structure.

**It carries the limit `D-14` attached to it.** Its position is not a claim that a verifier converts a sceptic. What answers the recorded doubt is D2 and D4 on the case screen. This item is where the product proves its own numbers are checkable, which is a different job.

**The navigation has two states, and pre-login it is two items.** My items and Balance describe nothing that exists before an account, so pre-login the header carries Cases and Provably fair and nothing else. That is the shortest global navigation in the category, and it matches what the pre-login job actually is: evaluate, then open.

### Levels

Assigned deliberately, and this is the minimum depth marking rather than the full tree, which the detail layer builds.

**Level 1**, reachable directly from global navigation: A1 Home, C1 Catalogue, A2 Provably fair, E1 Account and inventory, D1 Deposit.

**Level 2**, opened from level 1: C2 Case screen, from a Home tile or from the catalogue. E2 Withdrawal, from inventory. F1 Responsible play, from the footer and from the Balance control.

**Level 3:** empty in round 1. Nothing in this scope needs a third level, and that is a result rather than an omission.

**Not levels at all.** Three screens are interrupts that fire inside a flow rather than destinations anyone navigates to: B1 the age and geo gate, B2 sign in, B3 identity verification. One screen is a landing entered from outside the product entirely: G1 the public result. Giving any of these a level would inflate the depth count with things nobody chooses.

### Depth to the main job, counted

Primary persona The Opener, main job `jtbd.md:17`, arrive and open with a reveal that feels real.

**The main job route, 3 taps.**

1. Home, arrival, tap 0. A featured case tile is on it.
2. Tap 1, the case tile, lands on C2 the case screen.
3. Tap 2, the age gate fires, `B3`, before any case interaction. The 18+ declaration is confirmed.
4. Tap 3, Open. The main job is reached.

**Three taps, and one of them is the gate.** The compliance layer eats a third of the budget for the main job, which is a real cost and it is stated here rather than discovered at the wireframe. It is also why the gate carries only the declaration: decision `D-17` puts identity verification before funding instead of here, and if that check sat at this tap the main job would be unreachable inside the budget for a first-time visitor.

**The gate fires at first case interaction, not on arrival, and that placement is load bearing.** `B3` says "before any case interaction", not before any interaction. A gate on arrival would block the pre-login trust evaluation that Related Job 1 and the entire hero strategy depend on, and A1 to A5 exist precisely so a suspicious visitor can read the product before committing anything. The tap count is the same either way. What differs is whether the product gets to answer `B1-1`, the category arrives pre-suspected, before it starts asking for things.

**The browsing route, 4 taps, and it is not the main-job route.** Home, then Cases, then a case tile, then the gate, then Open. Four taps and over budget. The Opener arrives from a streamer clip wanting to open, not to browse 239 cases, so the catalogue is the browsing route for a person who already trusts the place. Naming the difference is the honest version; pretending both are three taps is not.

**What was paid for three taps, stated as the pack requires rather than defended.** Featured cases sit on Home, so Home carries two loads at once: the trust evaluation, A1 to A5, and the entry to the main job. That is a crowded screen, and design principle 3 says cost never hides inside excitement. A home that is simultaneously a trust page and a shop is exactly where that risk lives. The compromise is accepted here and handed forward as a named constraint for the wireframe stage, not as a solved problem.

**One structural condition inherited from an open decision.** Whether C1 stays a separate node at all depends on `D-D`. The baseline runs 239 distinct cases, which needs a catalogue with categories, search and filters. Our own map says the catalogue becomes smaller and backed. If `D-D` returns a small enough number, Home absorbs the catalogue, C1 disappears as a node and both routes become three taps. That is a real fork and it is deferred, not guessed. Owner: 03b, the same owner `D-D` already has.

### Global, contextual, deep

**Global, visible everywhere:** the four navigation items in their two states, the Balance figure once an account exists, and a footer carrying responsible play and the legal pages.

**Responsible play sits in the footer of every screen and again at the deposit**, which is a deliberate placement rather than an inherited one: `baseline.md` records zero responsible play routes, zero footer links and zero matches for self exclusion, deposit limit or cool down anywhere on the baseline. `C2` sets the spend ceiling where the money decision is made and `C5` lives on the page itself.

**The ambient social layer is not global.** The live drop feed, `A3`, renders on A1 and on C2 and nowhere else. `ux-patterns.md:262` requires Pattern E to be a layer on the screens where the core happens, and a feed on every screen would make it wallpaper rather than context.

**Contextual, appearing inside a flow:** the age and geo gate at first case interaction; sign in at the first point that needs an account; identity verification before funding; the post-reveal verification link and the one-tap share in the outcome phase; the spend ceiling at deposit.

**Deep, rare and deliberately not surfaced:** self exclusion and cool down inside F1; the withdrawal restriction appeal, `G4`, inside E2; the verifier form itself inside A2, since the page has to open and explain before it asks anyone to paste a seed.

### What this section does not decide

The full tree with page contents, which is the detail layer. And the position of Free entry, carried from step 2 as an object that appears on two screens and owns neither: the starter credit reads as a Balance state and the daily free case reads as an available case in the catalogue, so both are contextual and neither is global. That is recorded as the answer this step owed, and it is a weak one: an entitlement that only ever appears as someone else's state is how a capability quietly disappears. Flagged for step 6, the defect audit, rather than closed here.

---

## Tracing

Written at step 5, on 11 August 2026. Rows are the functional jobs from `jtbd.md`, main and related. Columns are the screens from the concept sitemap. A tick means the screen genuinely takes part in closing that job. Emotional and social jobs are not in this matrix and have their own table below, because they are not closed by a screen.

### Matrix: functional jobs against MVP screens

| Job | A1 Home | A2 Prov. fair | B1 Gate | B2 Sign in | B3 Identity | C1 Catalogue | C2 Case | D1 Deposit | E1 Account | E2 Withdraw | F1 Resp. play | G1 Public result |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **Main Job**, `jtbd.md:17` | ✓ T1, T2 | | ✓ T3 | ✓ T3 | | ✓ T5 | ✓ T5, T6, T7 | | | | | |
| **RJ1** arrive with confidence, `:33` | ✓ | ✓ | | | | | ✓ | | | | | |
| **RJ2** first open without friction, `:42` | | | ✓ | ✓ | ✓ | | ✓ | ✓ | | | | |
| **RJ3** verify the outcome, `:51` | | ✓ | | | | | ✓ | | | | | ✓ |
| **RJ4** convert result into more value, `:60` | | | | | | | | | | | | |
| **RJ5** withdraw cleanly, `:69` | | | | | ✓ | | | ✓ | ✓ | ✓ | | |
| **SCOPE** | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP |

**Budget: 12 MVP screens, 12 LATER screens, 24 in the map.** Half the product as mapped is round 1. The MVP subset is the input for 03b, which writes the nodes, for stage 04, which draws them, and for stage 07, which colours them, and all three start from it rather than from the whole map.

**Four cells carry a CJM phase rather than a separate job**, which is the rule the pack states: a screen that is a step of the main path closes a phase of the main job and is not an orphan for lacking a related job of its own. A1 carries T1 the pull and T2 first contact. B1 and B2 carry T3 getting in. C1 carries T5 picking a case. C2 carries T5, T6 and T7 at once, which is why `cjm-to-be.md:180` calls it one screen with three phases.

### LATER screens, traced in one block

| Screen | Job | Note |
|---|---|---|
| Battle list, Battle lobby | Social Job 1, `jtbd.md:111` | Social job, so it appears in the second table rather than this matrix |
| Upgrade | RJ4, `jtbd.md:60` | The only pair of screens that closes RJ4 |
| Exchange | Hypothesis Job A, `jtbd.md:133` | Parent is marked `[?]` at its own source |
| Rakeback and loyalty | Emotional Job 3, `jtbd.md:102` | Emotional job, second table |
| Leaderboard | Hypothesis Job C, `jtbd.md:145` | Parent is marked `[?]` |
| Gunfights, Giveaways, Race and prize pot, Rewards hub, Gift cards, Referral and affiliate | **None** | Six declared orphans, already carried in the concept sitemap. Locked into LATER by scope, so no step may cut them |

### Orphan jobs, first, because they cost more

A job with no screen is a hole in the product: the person has nowhere to do their work. A screen with no job is ballast. The expensive one goes first.

| Orphan job | Decision |
|---|---|
| **RJ4, convert my result into something more valuable**, `jtbd.md:60` | **Backlog, deliberately.** Its two screens exist in the map and are marked LATER: Upgrade, whose parent is RJ4 directly, and Exchange, whose parent is a hypothesis. The row stays empty and marked rather than being given a tick somewhere plausible. `jtbd.md:165` scores RJ4 at 2 for The Opener and 3 for The Accumulator, a secondary persona, and `CLAUDE.md` says the interface is not built around secondary scenarios even though they must work. This is that rule producing an empty row on purpose. |

One orphan job, and it is resolved rather than merely noticed.

### Orphan screens, and the thing the matrix cannot see

| Orphan screen | Decision |
|---|---|
| **F1 Responsible play** | **Keep the screen. The matrix is what is incomplete, not the screen.** F1 has no functional job and never will: nobody arrives wanting to limit themselves. Its parents are barrier `B7-4`, a pattern of 12 people, and the compliance constraint in `CLAUDE.md`, "responsible play tooling (deposit limits, session limits, self exclusion, cool down)". Both are legal parent classes in this project. |

**This is a defect in the instrument, and it is worth naming precisely.** The pack's matrix measures exactly one of the three legal parent classes this project uses. A screen parented on a barrier or on a compliance constraint is invisible to it and shows up as an orphan. F1 is caught by it. **D1 Deposit escapes only by accident**, because the CJM mapped phase T4 onto RJ2, and `jtbd.md:201` says in as many words that deposit closes none of the core jobs. Had the CJM not made that mapping, the matrix would have flagged the deposit screen of a money product as ballast.

The matrix is kept as the pack specifies, because it does catch the thing it was built for. What is added is this paragraph, so that a later reader does not read one empty column as a mistake.

**The contradiction check the pack asks for, answered.** F1 is marked MVP and has no tick. The pack says this means either the mark is inflated or a job was not described. It is neither: the mark is correct and the job does not exist, because the parent is a constraint. Named out loud rather than resolved by putting a tick somewhere.

### What the matrix found that step 2 had missed

**G1 Public result closes Related Job 3, in that job's own words.** Step 2 gave G1 a single parent, Emotional Job 2, and an emotional parent puts a screen outside this matrix entirely, which would have made G1 a genuine orphan and weakened the case for it. Reading RJ3 in full closes that: "so that I trust the platform enough to open again **or to tell someone about my result**", `jtbd.md:53`. Telling someone is in the functional job's own outcome clause.

This is not a tick placed to rescue a screen. It is a line that was in `jtbd.md` since stage 02 and that nobody had traced. The concept sitemap row for G1 was corrected in the same step. The scope question about the ninth surface stands unchanged, and it now stands on two jobs instead of one.

### Emotional and social jobs: what carries them

These are not closed by a screen. Asking where a person goes to feel genuine suspense is a category error, and inventing a "trust page" to fill a cell is worse than an honest empty. Columns are the mechanism, where it lives, and what confirms it. This table is read twice more: the detail layer takes states and trust proofs from it, and stage 05 takes it as the brief for tone.

| Job | Mechanism | Where it lives | Confirmed by |
|---|---|---|---|
| **Emotional Job 1**, genuine suspense rather than manufactured tension, `jtbd.md:84` | The reveal renders the settled roll and computes nothing again, `E1`, so animation and credited item cannot diverge. No near-miss theatre, `E2`: the deceleration lands on the actual result without visually passing better items first. The round hash is visible at the spin trigger, `E4`, which reframes the buildup as watching a settled outcome rather than waiting for one to be decided | C2 phase 2, as behaviour of the reveal itself rather than as a component | `B6-1` the animation and the credited item disagree, `B6-2` the belief that the reveal turns against you once you win, pattern of 9. `jtbd.md:89` names near-miss as a confirmed dark pattern. `ux-patterns.md:303`, "honest buildup, not manufactured near-miss" |
| **Emotional Job 2**, a win worth talking about, `jtbd.md:93` | One-tap share, `F4`, producing an object that carries its own proof, G1. The instance value receipt, `F1`, makes the number inside the story true, so the story survives being checked by the person it is told to | C2 phase 3, then G1 | `jtbd.md:98`, Key-Drop's effects cited in user reviews as the most memorable differentiator. `aarrr.md` Referral. `B7-1` the undervalued win, pattern of 7, which is what makes an unchecked story collapse |
| **Emotional Job 3**, smart play rewarded rather than punished, `jtbd.md:102` | **Nothing yet, and this is an honest empty rather than an oversight.** Rakeback and loyalty are LATER. Round 1 ships no mechanism for this job at all | Nowhere | Open. Direct entry to the backlog. `jtbd.md:169` scores it 1 for the primary persona and 3 for The Accumulator, which is why round 1 can carry the gap |
| **Social Job 1**, beat a real person rather than a bot, `jtbd.md:111` | **Nothing yet, and deliberately.** Battle mode is hidden at launch by founder Decision 2, `jtbd.md:212`, because a bot-filled lobby is solo opening with extra steps | Nowhere | Open by decision, not by omission |
| **Social Job 2**, be part of a platform that feels alive, `jtbd.md:120` | Live drop feed with no invented names, and any bot present in it labelled as one, `A3`. Every tile links to a public result rather than to a user profile, so the social proof is checkable rather than decorative | A1 and C2, as an ambient layer and never as a destination, per Pattern E at `ux-patterns.md:262` | `jtbd.md:125`. `research.md:151`, bot visibility as the worst-in-category failure, with the baseline itself showing "[BOT] Darth Vader" in its own ticker. `baseline.md` section 3 for the tile-to-profile link the baseline uses |

**Two rows read "nothing yet" and both are correct.** Emotional Job 3 and Social Job 1 are the jobs of secondary personas whose surfaces are LATER by decision. A mechanism invented here to fill the cell would be a round 1 commitment nobody made.

### Reconciliation of the concept sitemap against the flows

Step 4 introduced no screen the concept sitemap did not already hold, so the map needed no additions. One row was corrected, G1, and the correction came from this matrix rather than from the flows.
