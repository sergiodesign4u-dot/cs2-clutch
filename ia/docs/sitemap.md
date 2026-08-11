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
