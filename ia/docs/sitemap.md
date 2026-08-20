# Information architecture, base layer

Stages 03a and 03b. This file grows one section per step: Entities, then the node map, then navigation, then the tracing matrix. The detail layer replaced the concept sitemap with the node map in place, so there is one list of screens in this project and not two. Flows live in `flows.md`.

**Visible place.** Every section of this file is rendered as a section of `ia/concept-map.html`, which stage 03a step 5 assembles once the flows have refined the map. The Entities section written by step 1 is named here as the first section of that page and it is registered in its `NAV_SECTIONS` when the page is built. Naming the destination is the requirement; building it is step 5's job.

---

## Entities

Written at step 1, on 11 August 2026. Objects before screens: a screen only shows objects, and objects grow out of jobs. Inventing objects a job does not require is how a structure gets built from a competitor's menu instead of from the product.

**Sources read:** `research/docs/jtbd.md`, `research/docs/personas.md`, `research/docs/research.md`, the backlog in `research/docs/cjm-to-be.md`, and `research/docs/baseline.md` as a cross-check on what the product already has rather than as a source of objects.

### The parent rule this section follows, and where it departs from the pack

The pack asks for one parent class, a job from `jtbd.md`, and sends anything else to "Under question". `CLAUDE.md` defines **three** legal parent classes for any capability from stage 03 on: a barrier code from the CJM As-Is map, a job from `jtbd.md`, or a named compliance constraint or design principle quoted by which one. The project rule outranks the pack here and this section follows it, because the CJM stage already proved the case: deposit closes no core job and is justified entirely by documented barriers, and the round 1 surface list is legitimately wider than the job list for that reason, `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core".

So every entity below names a parent and the class it belongs to. An entity with no parent in any of the three classes goes to "Under question", not into the main list. One entity does, and one entity sits in the main list carrying an inherited orphan status that was decided by the founder rather than derived.

### 1. Case

The object a person chooses and pays to open. The unit of the main job.

**Parts:** name and artwork; entry cost in coins, `C1` as `D-28` rewrote it; risk band as a legible label, **computed from the drop table and no longer parentless since `D-24`**; the drop table as a list of entries; published tested RTP for this case and the expected value at this entry cost, `D4`; free-unit availability across its table, `A2`; category or collection membership `[?]`, present on the baseline as 13 categories and not yet required by any job here.

**Parent:** Main Job, `jtbd.md` "Section 1", a chance at a rare skin the person actually wants. Also Related Job 1, `jtbd.md` "Section 2", because the case page is where cost, chance and expected value are read before any money moves. Class: job.

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

**Parent:** Main Job, `jtbd.md` "Section 1". Class: job.

**Related to:** appears in Drop table entries across many Cases; a Skin instance is a unit of one Skin.

### 4. Skin instance

The specific unit a person owns. Separate from the type because the receipt attaches here and not there.

**Parts:** which Skin; the instance value receipt, `F1`, which states what it was worth at the moment it was won; the Open it came from; current state, held, withdrawing or withdrawn; free-unit backing, `D1`; float or pattern specifics `[?]`, not required by any job in the current list.

**Parent:** `B7-1`, the gap between what a win appears to be worth and what it is worth, pattern of 7, which `F1` closes. Also Related Job 5, `jtbd.md` "Section 2". Class: barrier, with a job behind it.

**Related to:** produced by one Open; held in an Account; consumed by a Withdrawal; carries its receipt into both, `F2`.

### 5. Open

One round: the commitment, the reveal, and the outcome, as a single record rather than three moments.

**Parts:** the Case; the entry cost paid; the round hash, visible at the spin trigger, `E4`; the settled roll, which the reveal renders and does not compute again, `E1`; the resulting Skin instance; timestamp; the post-reveal verification link, `F3`.

**Parent:** Main Job, `jtbd.md` "Section 1"; Emotional Job 1, `jtbd.md` "Section 3", genuine suspense rather than manufactured tension, which is why `E2` forbids near-miss theatre; Related Job 3, `jtbd.md` "Section 2". Class: job.

**Related to:** belongs to an Account; consumes Balance or a Free entry; produces one Skin instance; resolves against one Drop table entry; carries one Round proof; emits one Live drop event.

### 6. Round proof

The verifiable record of a roll. It is a separate entity because a person who is not logged in can hold one and check it, which is the entire reason `H1` is a public surface rather than a panel inside the account.

**Parts:** server seed hash published before the roll; client seed; nonce; the settled result; the recomputation the verifier performs.

**Parent:** Related Job 3, `jtbd.md` "Section 2", after the open, and Core Job 1, `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core", before login, where a public provably fair surface is named as one of three things no competitor offers pre-login. Class: job.

**Carried limit, not to be lost.** `D-14` demoted the claim, not the feature. This object is evidence that our own numbers are honest. It is not what persuades a sceptic, and what answers the recorded doubt at launch is `D2` and `D4`. The entity exists in full; the claim attached to it is bounded.

**Related to:** one Open has one Round proof; the public provably fair surface reads Round proofs with no Account attached.

### 7. Account

The person's own record on the platform.

**Parts:** Steam identity, with no password anywhere outside Steam OpenID and no profile changes requested, `B6`; verification state, resolved before funding and never on the withdrawal route, `B1` and `B2`; the age declaration taken at registration and the identity verification taken before funding, `B3` and `D-17`; withdrawals open or restricted, with a written ground when restricted, `B7` and `G4`; the market the account sits in, `B4`; Steam login failure states as readable text, `B5`.

**Parent:** Related Job 5, `jtbd.md` "Section 2", and `B7-1`, plus the compliance constraint in `CLAUDE.md`, "age verification before any case interaction". Class: job, barrier and constraint together.

**Related to:** holds Balance; holds Skin instances as inventory; owns Opens, Deposits and Withdrawals; carries Play limits; is bound by one Market rule.

### 8. Balance

Money on the platform, denominated in coins since `D-28`. An entity rather than a field on the Account, because three rules attach to it and none of them is a display concern.

**Parts:** amount, in coins, with the rate against real money published wherever money is spent, `C1` as `D-28` rewrote it and `0.11` rule 10; pending credit shown as a state with a timer, `C3`; the sum required to withdraw, stated before the deposit and unable to rise afterwards, `C4`; the remaining spend ceiling for this deposit, `C2`.

**Parent:** `B7-1`, pattern of 7, the currency abstraction that hides what things cost, and `B4-1`, the withdrawal threshold that moves after the money is in. Class: barrier.

**Related to:** belongs to an Account; fed by Deposits; spent by Opens; constrained by Play limits.

**Baseline divergence, and it was reversed in the open on 19 August 2026 rather than quietly narrowed.** The baseline runs an internal coin denomination with no visible conversion rate, `research.md` and `baseline.md`. `C1` used to delete that object entirely, and this entry called it the first inherited structure that research overturns. **`D-28` took the founder's answer instead: the coin is inherited and the missing rate is not.** The divergence is now the published peg rather than the unit, and the cost of the change is printed in the decision record rather than absorbed here.

### 9. Deposit

One funding event and its record.

**Parts:** amount; method `[?]`, no pre-login route exists on the baseline to read one from; crediting state with a timer, `C3`; the spend ceiling chosen at this deposit, `C2`; the withdrawal threshold as stated at this moment, `C4`.

**Parent:** `B4-3`, a deposit that never credits, pattern of 4; `B7-4`, pattern of 12; `B4-1`. Class: **barrier only, no job.** `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core" records this explicitly: deposit closes none of the three core jobs and is justified by documented barriers and by compliance, which is the legitimate reason the round 1 surface list is wider than the job list.

**Related to:** belongs to an Account; credits Balance; sets Play limits at the moment of the money decision.

### 10. Withdrawal

The exit, and the object the whole value loop exists to deliver.

**Parts:** the Skin instances being withdrawn, each carrying the receipt from `F2`; named states with a per-state timer and attribution to us, Steam or the user, `G1`; our published ceiling per state, `G2`; named limits stated in plain words before entry, blocked countries, Steam trade holds, Steam-side bans, `G5`; a written notice with a stated ground and an appeal with a published response deadline when restricted, `G4`; commission, which is zero to Steam, `G6`.

**Parent:** Related Job 5, `jtbd.md` "Section 2", and `B8-2`, pattern of 6, plus `B8-3`, pattern of 3. Class: job and barrier.

**Related to:** belongs to an Account; consumes Skin instances; delivers into the Steam inventory, which is outside our system; contributes to the Published performance record.

### 11. Published performance record

Our own withdrawal numbers, published. An entity because the backlog says so in as many words: `A4` and `G3` are "the same feature, two surfaces". An object shown in two places is an object, not a component.

**Parts:** rolling median and p90 withdrawal time from our own logs, `A4` and `G3`; per-state ceilings, `G2`; a live degraded flag driven by a Steam API health probe, `G2`; published tested RTP per case, `D4`, which is the same class of object pointed at a different subject.

**Parent:** `B8-2`, pattern of 6, and Related Job 1, `jtbd.md` "Section 2". Class: barrier and job.

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

**Parent:** `I1` stands on Related Job 2, `jtbd.md` "Section 2", and `aarrr.md` "MVP product decision". Class: job. **`I2` has no parent in any of the three legal classes** and is in the main list by founder decision of 11 August 2026 rather than by derivation. It is printed here with that status rather than given a borrowed parent, which is the treatment `D-15` chose and this step does not quietly reverse.

**Related to:** belongs to an Account; unlocks an Open on a Case without consuming Balance.

**Inherited answer waiting for a decision.** The baseline runs a daily reward gated behind a wager requirement and presented as a five tier ladder, `baseline.md` section 4. Row `I2` carries the recorded risk that a daily free open teaches the impression that opening is free, which is the impression the rest of the map spends its budget contradicting. The baseline's form answers that risk. Whether we adopt it is the founder's call and it is open, not assumed here.

### 14. Live drop event

One public win, moving across the platform in real time.

**Parts:** the winning account as it chooses to appear; the Skin; the Case or mode it came from; timestamp; whether the account is a bot, labelled as one where present, `A3` carried from `aarrr.md` "Key hypotheses".

**Parent:** Social Job 2, `jtbd.md` "Section 3", be part of a platform that feels alive. Class: **job only, no barrier**, which `A3` states in its own row.

**Related to:** emitted by an Open; points at a public destination, which is the next entity and the one that is not yet defined.

### 15. Shared result

What leaves the platform when a person shares a win, and what a stranger lands on when they follow it.

**Parts:** `[?]` on all of them. Whether the shared object is a public profile, a public record of one Open, an image, or a link into the case is not specified anywhere in this repository.

**Parent:** Emotional Job 2, `jtbd.md` "Section 3", a win worth talking about, closed by `F4`, one-tap share of a result. Class: job.

**Why this entity is in the main list while its parts are empty.** `F4` is the one exception to the priority test in the whole backlog: the path does not break without it, the referral loop does. A capability that emits an object into the world with no definition of what that object is, is a gap, and a gap named at the entity step is cheap. The baseline resolves it one way, every ticker tile links to a public profile at `/en/profile/<id>`, `baseline.md` section 2, and that is an observation rather than a decision. This is the one entity where step 2 has to either define the object or move `F4` to a round where it can be defined.

### 16. Market rule

Whether a market is open, blocked or staged, and on what legal ground.

**Parts:** the market; the verdict; a cited legal ground per blocked market, `B4`; the staged regional rollout the same ground implies. The starting list is inherited and carries `[?]` until re-verified against current law: Belgium, Netherlands, Germany, UK, Washington, Nevada, `lean-ux-canvas.md` section "Business Problem".

**Parent:** the compliance constraint in `CLAUDE.md`, "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", sourced at `research.md` section 7. Class: constraint.

**Related to:** binds an Account; met by a visitor before anything else.

**Asymmetric object, and this is deliberate.** The full record is operator-side: one row per market with its citation, which is exactly what `B4`'s success signal requires. What reaches the person is only the verdict and the ground in readable words. It is listed as an entity rather than as a rule because the ground has to be a stored, citable thing rather than a sentence someone writes once.

---

### LATER entities, with their parents

Carried so that step 2 can draw the whole product rather than only round 1. Not detailed here: an entity gets its parts written in the round that builds it.

| Entity | Parent | Class |
|---|---|---|
| Battle, with its lobby and opponents | Social Job 1, `jtbd.md` "Section 3" | Job |
| Upgrade attempt | Related Job 4, `jtbd.md` "Section 2" | Job |
| Rakeback and loyalty standing | Emotional Job 3, `jtbd.md` "Section 3" | Job |
| Exchange offer | Hypothesis Job A, `jtbd.md` "Section 4" | Job, marked `[?]` at its source |
| Leaderboard standing | Hypothesis Job C, `jtbd.md` "Section 4" | Job, marked `[?]` at its source |

---

### Under question

Objects with no parent in any of the three legal classes. They are not in the main list and they do not enter the concept sitemap without acquiring one.

| Object | Where it comes from | What is missing |
|---|---|---|
| Referral and affiliate standing | The baseline runs `/en/affiliate-program`, and `aarrr.md` "MVP product decision" treats it as a business line | **No user job stands behind it**, stated in `cjm-to-be.md`. It is locked into LATER by scope, so no step may cut it, and it has to acquire a parent before its own round opens |
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

## Detailed node map

Written at step 1 of the detail layer, on 11 August 2026. **This section replaces the concept sitemap.** The base layer said which screens exist and by what intent they group, and stopped there. This is that same map expanded into nodes: every screen, dialog and state carries a number `X.Y`, a type, a group, an `INCLUDES` line and its transitions. One list, not two beside each other.

**What did not change.** The seven intent clusters, the twelve MVP screens, the LATER screens and every parent are carried over unchanged rather than re-derived. The `S-` codes are kept as an alias on every node, so `flows.md`, `concept-map.html` and the tracing matrix all keep resolving without being rewritten.

**Cluster 0 is not an intent cluster, and that is a named divergence from the pack.** The pack's example puts Home into a cluster 0 together with the navigation. `CLAUDE.md` locks the seven clusters to intent rather than to site section, and Home's intent is deciding whether this place is real, so Home stays in cluster 1. Cluster 0 holds only what every intent cluster inherits: the shell and the canonical components.

**Which states became nodes, and which did not.** A state is its own node when it has its own copy, its own route out, and a specification that differs from its parent's default. A loading state that renders its parent's own skeleton is specified inside the parent instead, and five are handled that way: the Steam redirect, the reveal itself, the catalogue load, the payment in progress and the verifier recomputation. Every empty, error, pending, interrupted and in-force state in `flows.md` is a node here. Nothing was dropped: the five live in their parent's States section.

**File granularity, so that the step 8 audit has a rule to read against.** One md and one html per file-level node, which means per page, per dialog and per global element. A state is a numbered node in this map and is specified inside its parent's md under its own number and anchor. The chip in the hub belongs to the file-level node. A state therefore never gets lost and never gets an orphan file, and `specced-but-not-drawn` is measured against that rule rather than against the raw node count.

**Scope marks are inherited, not re-derived.** They come from the concept sitemap, which took them from the backlog in `cjm-to-be.md`. A state inherits the mark of its parent screen. Six nodes acquired a mark here for the first time because they had no parent to inherit from, and each is called out where it sits: `0.6` the canonical skin card and `0.7` the canonical case tile, both MVP because every MVP listing in the map uses them, and the four the global sweep added, `0.11` to `0.14`, all MVP because **every node that reads them is MVP**. That is the whole of the derivation and it is said out loud rather than assumed, as the pack requires for a node with no parent to inherit from.

**Groups.** `global` puts a node in the Global elements section of the hub, `pages` puts it in Pages. Cluster 0 is `global` throughout, clusters 1 to 8 are `pages`.

---

### Cluster 0. Global shell

What every intent cluster inherits. Group `global`, all MVP, because a shell that is LATER is a shell that does not exist.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **0.1** | Navigation, rail, header and mobile bar | global element | MVP | Three carriers on mobile, two on desktop, and no carrier holds another's kind. The rail owns the logo, every destination and its own toggle, **one in both states since `D-40`**, and is a modal drawer on mobile. The header owns the account control and the money as **two figures**, balance and value of items held, plus the responsible play entry inside the money control, and no destination at all. **A mobile bottom bar carries a shortcut subset of the rail**, **Home and Cases in both states since `D-40`**, and never money and never an action. No mode hub row on Home, `D-20`. Rail restored by `D-21`, bar restored by `D-22` | 1.0, 1.2, 2.4, 3.1, 4.1, 5.1, 6.1 |
| **0.2** | Footer | global element | MVP | Trust strip that never collapses, carrying the 18+ statement, the responsible play link and the market statement, none of which the baseline has at all. Four link columns, the interlinking block with its structure fixed and contents `[?]`, and the Article 5 identification block. **Links no private transactional node.** One account state, because everything in it is public | 1.2, 3.1, 6.1, 2.2, 0.4, 0.9, 0.10 |
| **0.3** | System pages | page | MVP | 404 as a full page with search and quick links and HTTP 404, 500 as a backend-independent template, maintenance as 503 with `Retry-After`. Never a soft 404, never a dead end | 1.0, 3.1 |
| **0.4** | Cookie consent | dialog | MVP | Prior consent rather than default-on, reject as easy as accept, analytics and marketing off until opted in, link to the policy. Grounded in law at step 7, not written from memory | 0.2 policy |
| **0.5** | Toasts and notifications | component | MVP | `aria-live` region, transient confirmations and failures, no SEO weight, never the only place a state is announced | none |
| **0.6** | Canonical skin item card | component | MVP | Weapon name, skin name, wear grade, image, current value, drop chance, ticket range, rarity treatment. **Rarity is `[?]` until the ladder is walked**, which this stage owes before step 5 | used by **1.0**, 3.1, 3.3, 5.1, 5.3, 7.1. **1.0 added by the step 8 audit:** `numbers.md` places this card on Home twice, for current value `D2` and the free unit count `A2`, and this row did not hold it |
| **0.7** | Canonical case tile | component | MVP | Case artwork as the largest element, case name, entry cost, risk band, plus a stock marker and a daily marker where each applies, plus the favourite control. **Rewritten by `D-24`, 18 August 2026:** the item count left the tile and the risk band and the favourite arrived | used by 1.0, 3.1 |
| **0.8** | Live drop ticker | component | MVP | Continuous tile strip, source mode label, weapon and skin, rarity tint, and a destination on every tile | **renders on 1.0 only since `D-31`, 19 August 2026**, and every tile lands on 7.1. It left 3.3 by founder decision, and the cost is that this component now has one consumer |
| **0.9** | Legal and policy pages | page | MVP | Four documents on one template: Terms of use, Privacy policy, Cookie policy, Refund and payments policy. Each has its own URL and its own indexation. The template is the node: last updated date, a plain-language summary above the document, the document, the version history | 0.10, and 0.4 links the cookie policy |
| **0.10** | Support and contact | page | MVP | The contact route Article 5(c) requires, "contacted rapidly and communicated with in a direct and effective manner", plus the appeal route row `G4` requires with its **published response deadline**. Not a policy page: it has a function and a service level | 0.9, 5.3 |
| **0.11** | Published numbers register | register | MVP | Every number this product publishes about itself, described once, each with its computation, its refresh interval, what it shows when the data is missing, and the surfaces that read it: rolling median and p90 withdrawal time `A4` and `G3`, per-state ceilings and the Steam health probe `G2`, published tested RTP and expected value at this entry cost `D4`, published chance and current value per item `D2`, the observed rate counter `D3` conditional on `D-B`, live free-unit count `A2` | Read by 1.0, 1.2, 3.3, 5.3 and 0.2. **Entered from nowhere:** a register is read, not visited |
| **0.12** | Market and jurisdiction register | register | MVP | One row per market: the verdict, the cited legal ground, the position in the staged rollout. Asymmetric by design, the full record is operator-side and what reaches a person is the verdict and the ground in readable words. **Every verdict is `[?]` until re-verified against current law, and the decision belongs to counsel under `D-A`.** The node specifies the register, never the law | Read by 2.1, 2.2, **2.7**, **4.1**, 5.3, 0.2 and 0.9. The sweep registered five and node `0.12` found two more: the identity document and the payment instrument are evidence of where a person is |
| **0.13** | SEO and indexation register | register | MVP | URL and slug conventions, one row per node for indexation and canonical, the schema map by page type, the single H1 rule, breadcrumbs where depth allows any, and the internal linking planes. **One language, so no hreflang anywhere**, per the locked decision in `CLAUDE.md` | Read by every indexed node. The A to E block on each of them inherits from here rather than deriving a second time |
| **0.14** | Canonical round proof block | component | MVP | One rendering of a round proof and its variants: the hash chip at the spin trigger `E4`, the verification link after the reveal `F3`, the full proof carried into a stranger's browser on `7.1`, and the same fields inside the verifier. Server seed hash, client seed, nonce, settled result, recompute route | used by 1.2, 3.3 at phases 2 and 3, and 7.1 |

**Two nodes were registered by node 0.2 on 11 August 2026**, and they are the first case of this map growing out of a page rather than the other way round. The footer promised six destinations; four already existed and two did not. The rule the pack and `CLAUDE.md` agree on is that a carrier may not promise a destination the map does not hold, and the fix is a node, never a link that resolves to nothing.

**One baseline footer link was cut on an argument rather than on scope.** The FAQ is load bearing on the baseline: `baseline.md` section 6 records that it is the whole of the age control and the whole of the geo statement. In our product both jobs move to real surfaces, `2.1` and `6.1`. A page whose one load-bearing job has been taken over by two dedicated surfaces is not inherited for the residue, and the residue goes to `0.10`.

**The ticker gained a destination it did not have.** The baseline links every tile to `/en/profile/<id>`, `baseline.md` section 3, and no job in this repository requires a profile object at all. `D-20` approved the public result page, so tiles land on `7.1`, which carries its own round proof. The social-proof surface now points at something checkable instead of at a stranger's trophy shelf.

**And it is deliberately not global.** `A3` renders on Home and on the case screen and nowhere else, `ux-patterns.md` "Primary Choice: Pattern A (Slot Machine / Linear Reveal) with Pattern E (Community Discovery / Social Reveal) as the ambient layer": a feed on every screen is wallpaper rather than context. It is a canonical component with a restricted placement, which is why it sits in cluster 0 while appearing on two nodes.

---

### The global sweep

Run at step 3 on 12 August 2026, after node `0.2` closed. The pack asks one question here and it is not "what else could be global". It is what **appears on many pages**, or is a **shared structure or dataset that several pages consume**. Two tests, and whatever passes neither is specified inside the single node that uses it.

**How it was run, so the result can be checked rather than believed.** Every candidate was taken through the map cluster by cluster and through the entity inventory in this file, and **the list of consuming nodes was written down before the verdict rather than after**. A candidate with one consumer is not global however large it is. A candidate with five is global even when it renders nothing at all.

**Four nodes came out of it, and not one of them is a new surface.** Round 1 is still the nine surfaces `D-20` locked. Three of the four render nothing: they are the shared structures the nine already read, described once instead of nine times.

#### One new node type, named rather than smuggled in

`register`: a node that holds a structure or a dataset read by several nodes, described once and never drawn. It is not a page, because nobody navigates to it, and not a component, because nothing renders it. Calling it either would misfile it in the hub and, worse, would put it into stage 04's coverage check as a screen with no wireframe. **Registers are not drawn at stage 04.** The nodes that read them are.

#### Kept

| No | Name | Consumers | Why it is global |
|---|---|---|---|
| **0.11** Published numbers register | `register` | 1.0, 1.2, 3.3, 5.3, 0.2 | Five surfaces read one family of numbers, and every one of them is a claim under design principle 1. `cjm-to-be.md` already says two of the rows are "the same feature, two surfaces", rows `A4` and `G3`. The footer made it a third within one step of that sentence being written. A number defined at each surface is a number that will disagree with itself |
| **0.12** Market and jurisdiction register | `register` | 2.1, 2.2, 2.7, 4.1, 5.3, 0.2, 0.9. **Five at the sweep, and the node itself found two more** | Five surfaces read one legal fact, and it is the kind the pack names explicitly, a real structure of the world that gets grounded rather than invented. Entity 16 above already argues it: the ground has to be a stored, citable thing rather than a sentence someone writes once |
| **0.13** SEO and indexation register | `register` | every indexed node | `CLAUDE.md` puts the structural SEO layer inside IA and lists what it holds. Without one place holding it, twenty two A to E blocks derive indexation, canonical and schema independently, and stage 04 validates a layout against twenty two private opinions |
| **0.14** Canonical round proof block | `component` | 1.2, 3.3 phases 2 and 3, 7.1 | One object rendered at four sites with one field set. It is the same class as `0.6` and `0.7`, and it is the highest-stakes repeated component the product owns: design principle 1 makes the evidence the thing that must look identical everywhere |

#### Not kept, with the reason and the consumer count that decided it

| Candidate | Consumers | Verdict |
|---|---|---|
| Case taxonomy, the categories the baseline runs | 3.1 only | **Not global.** Carried as a `[?]` part of the Case entity, with its scale riding on `D-D`. The baseline's thirteen categories are an observation, `baseline.md` section 4, not an inherited structure |
| Facet and filter system | 3.1 only | **Not global.** Specified inside 3.1. Revisit at step 6 if 5.1 acquires filters of its own: two listings sharing a facet set makes it canonical, one listing does not |
| Global dialog set | 0.4 and 2.1 are already file-level nodes, 6.2 lives inside 6.1 | **Nothing left over.** The set the pack imagines, sign in plus confirm plus pick a place, is three dialogs here and each already has a home. Sign in is a page rather than a dialog because Steam OpenID leaves the site |
| Interrupt order, the cookie banner against the age gate | checked across the whole map | **No node and no conflict.** `0.4` fires on arrival, `2.1` fires at first case interaction by `B3`, so they never contend for the same moment. Recorded because a reader would otherwise have to derive it again |
| Canonical value receipt, `F1` and `F2` | 3.6, 5.1, 5.3, 7.1 | **Four consumers and still not a node.** It is a part of `0.6`, and all four of those already render `0.6`. Written once inside that node and referenced, per the one canonical component rule |
| Global search | 3.1, plus quick links on 0.3 | **Not global.** The baseline itself keeps its search icon inside the catalogue's category bar, `baseline.md` section 4, and our header holds no actions at all by `D-21` |
| Money and currency formatting | many | **Not an IA node.** `C1` is already a rule at entity level and the rendering belongs to stage 08 |
| Empty, loading and error state canon | many | **Not a node.** It belongs in the step 5 page template, where every node inherits it by construction instead of by reference |
| Out-of-product notification channel | 5.3, 5.8 | **No node, because it has no parent.** A withdrawal that runs for hours with a per-state timer implies a signal that reaches the person outside the page, and there is no notification, email or push row anywhere in `cjm-to-be.md`. Named here in the treatment the multi-open orphan got, so nobody later reports it as a discovery |
| Trust strip | 1.0 and 0.2 | **Two different objects sharing one word.** Home carries the trust proposition `A1` to `A5`, the footer carries the compliance strip, 18+, responsible play and the market statement. Named so that a later step does not merge them on the strength of the label |

#### What the sweep found, and it found it in our own week-old prose

**Node `0.2` claimed a capability that does not exist.** The statistics strip verdict says cases opened "becomes checkable by reconciling with the published round ledger on `1.2`". There is no published round ledger. `cjm-to-be.md` uses the word ledger four times and every one of them is the internal settlement ledger; `1.2` holds a verifier and a round input, and nothing in its `INCLUDES` publishes rounds in bulk.

**The rule that catches it was already written.** `CLAUDE.md`: a block with no parent in the three legal classes is cut or carried with its orphan status printed. What was missing was running that rule against a sentence written one step earlier, which is the same failure mode as the base layer's count drift: the instrument existed, nobody pointed it at the new prose.

**Corrected rather than deleted.** The route that does exist is the observed rate counter, row `D3`, whose N comes from the same settlement ledger that pays users. It reconciles **per case rather than as one auditable total**, and it is conditional on `D-B`, the question of whether six years of roll history can migrate and be published at all. If `D-B` fails, cases opened loses its route and the slot goes to a number that has one. A public round ledger as a browsable object would be a new backlog row and it is not one today. Both are in the open items of `0.11`.

---

### Cluster 1. Decide whether this place is real

The visitor arrived pre-suspected, `B1-1`, and is deciding whether to give this place any money at all.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **1.0** | Home | page | MVP | `S-A1`. Trust proposition A1 to A5, **the featured case grid directly on the page** rather than behind a mode hub, ticker 0.8, case tiles 0.7, the starter credit offer as a pre-login obligation, the published performance record pre-login | 3.3 by a case tile, 3.1 as all cases, 1.2, 2.4 |
| **1.1** | Home, account exists | state | MVP | The same page with a state-dependent strip: balance, the next step, daily free entry status. A different first screen, not a different page | 3.3, 4.1, 5.1 |
| **1.2** | Provably fair, public, with the verifier | page | MVP | `S-A2`. What is proven and what is not with the `D-14` limit stated on the page itself, the verifier form, the round input. Opens and explains before it asks anyone to paste a seed | 1.3, 1.4, closes RJ3 |
| **1.3** | Verifier, malformed round | state | MVP | Names which part is missing, returns to the input rather than rejecting silently | 1.2 |
| **1.4** | Verifier, our own proof failed | state | MVP | A report route and an incident with a published response deadline. The person gets a route rather than a wall | **Dead end for the job, by design.** Nothing can close it while the proof is wrong |

---

### Cluster 2. Get through the door

Three screens nobody chooses to visit. Naming the cluster by intent is what keeps that visible instead of burying it under Account.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **2.1** | Geo gate | dialog | MVP | `S-B1`. **The market check and the cited legal ground. The 18+ declaration left this node on 18 August 2026, `D-26`, and now lives in the sign-in consent gate on `2.4`.** Fires at first case interaction, never on arrival, so the pre-login trust evaluation runs first | 2.2, back into 3.3 |
| **2.2** | Geo blocked | state | MVP | Legal ground cited. The blocked-market list is `[?]` until re-verified against current law | **Dead end, by design.** A person the product must not serve |
| ~~**2.3**~~ | ~~Under age~~ | ~~state~~ | **dissolved** | **Removed by `D-26`, and the reason is not a preference.** The age control is now a checkbox a person either ticks or does not. **A declaration you decline to make is not a refusal that can be recorded**, so there is no under-age event and no screen to draw. What replaces it is `2.4`'s own state, consent not given, where the provider controls stay inert and nothing is stored | Gone. `2.4` holds the behaviour |
| **2.4** | Sign in with Steam | page | MVP | `S-B2`. Steam OpenID, a statement of what the product will and will not read, and **the consent gate `D-26` added: two separate checkboxes, terms and the 18+ declaration, with the provider control inert until both are set**. noindex | 2.5, 2.6, then the starter credit into 3.5 |
| **2.5** | Steam refused | state | MVP | A readable failure rather than a code, `B5` | 2.4 |
| **2.6** | Steam unavailable | state | MVP | Reading the product stays open, so a person who cannot sign in is not ejected | 3.3 |
| **2.7** | Identity verification | page | **LATER** | `S-B3`. **Out of round 1 by `D-26`, 18 August 2026, and kept on the map rather than deleted so the hole stays visible.** It sits **before withdrawal** rather than before funding, `B2`, and the free-entry hole `D-A` recorded stays open in writing: a person who only ever took free entries reaches a real withdrawal with no identity check. **The licence direction `D-23` is what reclaims it**, because a tier one regulator requires identity before withdrawal. Method still `[?]`. noindex | 2.8, 2.9, 5.3 |
| **2.8** | Identity pending review | state | **LATER** | Hours rather than seconds. The asynchronous state only the document KYC branch has. LATER with its parent, `D-26` | 2.7 |
| **2.9** | Identity failed, appeal and exit | state | **LATER** | An appeal with a stated ground and a published deadline mirroring `G4`, and the withdrawal route that was open the whole time. LATER with its parent, `D-26`. **`G4` itself is unaffected: it lives on `5.3`** | 5.3 stays open regardless |

---

### Cluster 3. Choose what to open, and open it

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **3.1** | Case catalogue | page | MVP | `S-C1`. Category bar, search and filters, **the daily free case as an addressable case rather than a banner**, case tiles 0.7, live free-unit counts. **Off the main path** by `D-20`: reached as all cases, not as a compulsory hop | 3.2, 3.3 |
| **3.2** | Catalogue, nothing matches | state | MVP | Zero-stock items stay visible and marked rather than filtered out, `D1`, so the shelf is legibly empty rather than silently short | 3.1 |
| **3.3** | Case screen, phase 1 choosing | page | MVP | `S-C2`. Published chance and current value per item `D2`, the observed rate counter `D3` **conditional on `D-B`**, published tested RTP and EV at this entry cost `D4`, stock-backed table `D1`, item cards 0.6, ticker 0.8 | 2.1, 3.4, 3.5 |
| **3.4** | Item at zero free units | state | MVP | Shown before the open and never after, `D1` | 3.3 |
| **3.5** | Case screen, phase 2, the open | state | MVP | The round hash at the spin trigger `E4`, the reveal renders the settled roll and computes nothing again `E1`, no near-miss theatre `E2`, rarity-differentiated linear reveal `E3` | 3.6, 3.7 |
| **3.6** | Case screen, phase 3, the outcome | state | MVP | Instance value receipt `F1`, the receipt persists onto the item `F2`, post-reveal verification link `F3`, one-tap share `F4`. **The activation node**, `aarrr.md` "Primary metric (OMTM)" | 1.2, 5.1, 7.1 |
| **3.7** | Interrupted reveal | state | MVP | The roll settled before the animation, so the result waits here and is also in 5.1. Without this node `B6-1` arrives through a missing state rather than through a bug | 3.6 |

**Three phases, one page, and the phases are states rather than routes.** `cjm-to-be.md` "Backlog and MVP core" states it and the base layer carried it. 3.5 and 3.6 are numbered nodes because they each need their own specification, and they live in the same md as 3.3.

---

### Cluster 4. Put money in

**This cluster closes no job and says so.** Its parents are barriers `B4-3`, `B4-1` and `B7-4`, and `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core" records that deposit closes none of the three core jobs.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **4.1** | Deposit | page | MVP | `S-D1`. Coins with the published rate on the screen, `C1` as `D-28` rewrote it, the spend ceiling for a named period `C2`, the withdrawal threshold stated here and never rising `C4`, the responsible play entry. noindex | 2.7, 4.2, 4.3, 4.4, 4.5 |
| **4.2** | Ceiling reached this period | state | MVP | Deposits stop. Opening from balance and withdrawal stay fully open. **No completion mechanics, no streak, no status, no session score** | **Dead end for this flow, by design.** The ceiling doing its job |
| **4.3** | Ceiling raise pending 24 hours | state | MVP | The old ceiling holds until then. Lowering applies immediately, which is the asymmetry that makes it a brake | 4.1 |
| **4.4** | Crediting, with a named timer | state | MVP | `C3`. A named state rather than a spinner | 4.1 |
| **4.5** | Payment declined | state | MVP | The ceiling and the threshold are preserved through the failure | 4.1 |

---

### Cluster 5. Take out what I earned

Phase T8, the floor of the entire As-Is map at -5.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **5.1** | Account and inventory | page | MVP | `S-E1`. Item cards 0.6, each carrying its instance value receipt `F2`, the balance, the entry into withdrawal. noindex, no schema | 5.2, 5.3 |
| **5.2** | Inventory empty | state | MVP | Where every new account starts and where a low-value first open leaves someone. Routed back into the catalogue rather than into a blank page | 3.1 |
| **5.3** | Withdrawal, with the public clock | page | MVP | `S-E2`. Named states with a per-state timer labelled waiting on us, Steam or you `G1`, our own published p90, commission free `G6`, the named limits stated before entry `G5`. noindex | 5.4 to 5.8 |
| **5.4** | Not eligible, limit stated before entry | state | MVP | The limit is met before the withdrawal rather than inside it, which is the whole of `G5` | 5.1 |
| **5.5** | Steam degraded | state | MVP | A live banner driven by the health probe `G2`, not a generic error | 5.3 |
| **5.6** | Account restricted, notice and appeal | state | MVP | A written ground, the balance frozen and never zeroed, an appeal with a published response deadline `G4` | 5.7 or 5.3 |
| **5.7** | Restriction upheld | state | MVP | The ground stays on the record. The dead end remains; the silence does not | **Dead end, by design** |
| **5.8** | Trade offer expired | state | MVP | Resend from the same record rather than restart | 5.3 |
| **5.9** | Roll history | page | MVP | **Added 20 August 2026 by `D-36`.** Every roll this account has made, each with its hash, its seed and nonce once revealed, what it cost and what it returned, and one route per row into `1.2`. **It rides on `D-C`**, which asks whether roll history is retained per roll in a publishable form: if the answer is no, the page renders the rolls without the seed material and says so. noindex | 1.2, 7.1, 5.1 |
| **5.10** | Profile | page | MVP | **Added 20 August 2026 by `D-36`, and it carries an empty parent cell.** Avatar, display name and the Steam link the account was made from. **No capability in `cjm-to-be.md` asks for it and no job in `jtbd.md` needs it**, so it ships as an orphan with that printed, the treatment `D6` the favourite got. noindex | 5.1, 5.11 |
| **5.11** | Settings | page | MVP | **Added 20 August 2026 by `D-36`, and most of what it would hold is already somewhere else or has no parent.** Sound is at the foot of the rail and has no parent of its own, language is one language by the locked decision, and no notification row exists anywhere in the backlog. **What it holds in round 1 is `[?]` and the node owes that answer before it is drawn** | 5.10, 6.1 |

**Three nodes the map did not have until the account menu asked for them.** `D-36`: the founder specified that the menu carries Profile, Settings and History, which the baseline's own menu carries and this map held none of. **The rule works in both directions.** A carrier may not promise a destination the map does not hold, and until 20 August 2026 that was an argument for cutting three rows from the menu. The founder answered it the other way, so the map gains the three nodes rather than the menu losing the three rows. **What does not change is that each one still has to name a parent or print an empty cell**, and two of them print it.

**No verification appears anywhere in this cluster**, which is capability `B2` and the direct answer to `B8-4`, verification ambushes at the exit, pattern of 5.

---

### Cluster 6. Keep myself in check

**No job, and there never will be one:** nobody arrives wanting to limit themselves. Parents are `B7-4` and the compliance constraint in `CLAUDE.md`.

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **6.1** | Responsible play | page | MVP | `S-F1`. Spend ceiling `C2`, session limit `C5`, cool down `C5`, self exclusion `C5`. **No counters, no streaks, no status, no session score, no celebration of staying inside a limit** | 6.2, 6.3 |
| **6.2** | Self exclusion confirmation | dialog | MVP | An explicit confirmation with the period stated. The one choice on this screen a person cannot undo on impulse | 6.3, or back to 6.1 |
| **6.3** | Boundary in force | state | MVP | The boundary holds without being a thing to engage with. **Withdrawal stays open under every boundary, self exclusion included** | 5.3 stays reachable |

**Reachability is not prominence.** Responsible play carries **three entries**: the rail destination, a persistent entry inside the balance control two taps from anywhere, and the footer link. **Corrected by the step 8 audit:** this line named two and the rail was missing, although `D-21` puts it in the rail. Making a brake easy to find is not the same as making it a thing to engage with, and the difference is exactly the list in 6.1.

---

### Cluster 7. Tell someone

| No | Name | Type | Scope | INCLUDES | Transitions |
|---|---|---|---|---|---|
| **7.1** | Public result | page | MVP | `S-G1`. One open with its skin, its case and its round proof, carried into a stranger's browser. **The ninth surface, approved by `D-20`.** Also the destination of every ticker tile in 0.8 | 1.2, 1.0 |
| **7.2** | Result gone or private | state | MVP | Routed into 1.2, where the round can still be checked without the page | 1.2 |

---

### Cluster 8. LATER

Thirteen screens, listed once and specified in no round. They are in the map so that it shows the product rather than only round 1, and none of them can be cut here: scope locks them in.

| No | Name | Parent | Note |
|---|---|---|---|
| **8.1** | Battle list | Social Job 1, `jtbd.md` "Section 3" | Its arrival is the trigger that returns both deferred mode switchers, `D-20` |
| **8.2** | Battle lobby | Social Job 1, `jtbd.md` "Section 3" | |
| **8.3** | Upgrade | Related Job 4, `jtbd.md` "Section 2" | The only screen closing RJ4, which is why RJ4 reads as an orphan job in round 1 |
| **8.4** | Exchange | Hypothesis Job A, `jtbd.md` "Section 4" | Parent is a hypothesis marked `[?]` at its own source |
| **8.5** | Rakeback and loyalty | Emotional Job 3, `jtbd.md` "Section 3" | The only mechanism for EJ3, which is why round 1 ships none |
| **8.6** | Leaderboard | Hypothesis Job C, `jtbd.md` "Section 4" | Parent is a hypothesis marked `[?]` |
| **8.7** | Gunfights | **None** | `[ORPHAN]` |
| **8.8** | Giveaways | **None** | `[ORPHAN]` |
| **8.9** | Race and prize pot | **None** | `[ORPHAN]` |
| **8.10** | Rewards hub | **None** | `[ORPHAN]` |
| **8.11** | Top wins | **None** | `[ORPHAN]`. Restored at base-layer step 7 after the count disagreed with the list |
| **8.12** | Gift cards | **None** | `[ORPHAN]` |
| **8.13** | Referral and affiliate | **None** | `[ORPHAN]` |

Seven orphans. Six of them are the destinations behind eight of the nine items in the baseline's left icon rail, which the concept map and the baseline walk reached from opposite ends.

---

### Counts, and the one the base layer got wrong

| Group | Nodes | Of them MVP |
|---|---|---|
| Cluster 0, global shell | 14 | 14 |
| Cluster 1, is this place real | 5 | 5 |
| Cluster 2, get through the door | 8 | 5 |
| Cluster 3, choose and open | 7 | 7 |
| Cluster 4, put money in | 5 | 5 |
| Cluster 5, take out what I earned | 8 | 8 |
| Cluster 6, keep myself in check | 3 | 3 |
| Cluster 7, tell someone | 2 | 2 |
| Cluster 8, LATER | 13 | 0 |
| **Total** | **65** | **49** |

**Amended on 18 August 2026 by `D-26`.** Cluster 2 was 9 nodes and 9 MVP. It is now **8 and 5**: `2.3` dissolved because the age control became a checkbox rather than a screen, and `2.7`, `2.8` and `2.9` went `LATER` with identity verification. **Sixteen LATER nodes now, not thirteen**, and the three new ones are carried on the map rather than deleted so the free-entry withdrawal hole stays visible.

**Forty-nine MVP nodes against twelve MVP screens, and the ratio is still the point.** Each screen carries roughly three states or dialogs that need their own specification, plus fourteen shell nodes nobody counted as screens at all. This is the number step 6 has to plan against, and it is why the pack says a step 6 estimate that ignores states lies by multiples.

**Twenty six of them are file-level nodes**, which is what step 6 actually builds: 14 in cluster 0 and 12 across clusters 1 to 7. The remaining 27 are states and confirmations specified inside them. Those twenty six are the chips in `ia/_nav.js`. **The count has moved twice, and both times from work rather than from a recount.** On 11 August node 0.2 registered `0.9` and `0.10` because it promised them. On 12 August the global sweep registered `0.11` to `0.14`, none of which is a new surface: three are structures the nine surfaces already read and the fourth is the component that renders the product's evidence.

**A dialog is file-level only when it is a destination.** The age and geo gate `2.1` and the cookie banner `0.4` are: they carry their own content, they fire across the whole product, and they have routes out. The self exclusion confirmation `6.2` is not: it guards one action on one screen and belongs inside `6.1`. Without this line the word dialog would have produced two different file counts depending on who read it.

**The base layer's LATER count was wrong and it is corrected here.** Four files carried "12 MVP screens, 12 LATER screens, 24 in the map": `CLAUDE.md`, `README.md`, this file and `concept-map.html`. The LATER screens are **thirteen**, not twelve, and the map holds **twenty-five**. Base-layer step 7 restored Top wins as the seventh orphan and updated the orphan count in the prose without updating the budget line it fed. Both readings sat in the same file. The number is corrected in all four places by this step, and the correction is recorded as a class rather than as a typo: **a count in prose and a count in a budget line are two sources for one fact, and they drifted within one step of each other.**


**Step 6 added eight internal states the map does not number, and the two counts stay separate.** Writing cluster 2 needed the market lookup, detection unavailable and declined on `2.1`, returning from Steam, cancelled at Steam and already signed in on `2.4`, and session expired and market refused on the document on `2.7`. Each was printed with its parent and with this map's own not-a-node test applied, which is why none became a numbered node. **A numbered state is a thing the map routes to and the stage 04 coverage check counts. An internal state is a condition inside one screen that the wireframe still has to draw.** Merging the two would either inflate the map or hide eight screens' worth of work. Found by the step 8 audit, Codex, class "count reconciliation".

### Reconciliation with the chosen UX pattern

The chosen pattern is **Pattern A, linear reveal, as the core, with Pattern E, community and social, as an ambient layer**, `ux-patterns.md` "Primary Choice: Pattern A (Slot Machine / Linear Reveal) with Pattern E (Community Discovery / Social Reveal) as the ambient layer". Explicitly not a compromise: "they do not compete, they occupy different layers of the same screen".

**Where the map implements it.** S-C2 phase 2 is Pattern A exactly, including the thing reason 3 of that section asks for: the pre-round hash surfaced as a UI element at the spin trigger, row E4. Pattern E has **no screen of its own anywhere in this map**, which is the correct implementation rather than an omission: the live drop feed is a layer on A1 and on C2, never a destination. A screen for the live feed would have broken the pattern by turning a layer into a place.

**Where something works against it, named directly.** Pattern A's first reason is that the linear reveal needs zero explanation, so a new user can begin the first session with no learning curve, "this reduces friction at the moment that matters most". A full identity check standing between arrival and the first open is friction at exactly that moment, and row B3 says "age gate before any case interaction". Read as one heavy gate, the compliance requirement and the chosen pattern contradict each other.

**The map resolves it rather than choosing a side, and it did not invent the resolution.** S-B1 carries the declaration and meets every arrival. S-B3 carries identity verification and stands before funding, not before the first open, so a first open on a Free entry passes only through B1. That is decision `D-17`, taken on 11 August 2026 from a compliance argument with no reference to Pattern A. Two instruments, a legal sequence and a UX pattern, converge on the same two-screen split. The pattern stays ours, unchanged, and `ux-patterns.md` needs no paragraph appended.

**Two reductions in Pattern E, stated rather than absorbed.** Pattern E as described covers a live feed plus community signals, and round 1 ships exactly one of those, the live drop feed, row A3. Community case creation and leaderboards are deferred at `jtbd.md` "Candidate-for-Cut Functions" and in the LATER table above. Pattern E is therefore thinner in round 1 than its own description, and this is a scope consequence rather than a change of pattern.

**One absence worth recording.** `ux-patterns.md` "Pattern That Does NOT Fit: Pattern B (Card Flip / Instant Reveal) as the primary hero experience" assigns Pattern B, the card flip, to bulk open flows as a supporting pattern. The baseline runs a five-slot multi-open, `baseline.md` section 4. Our backlog has no multi-open row, so the capability is absent from round 1 and has no parent in any of the three classes. It is `[ORPHAN]` and out of scope, named here so that nobody later reports it as a discovery.

### Second slice: every entity against a screen

The first slice, by intent, catches holes in the person's path. This one catches holes in the subject matter. An object with no screen is either a surplus entity or a missing screen.

| Entity | Where it is seen or acted on |
|---|---|
| Case | S-C1, S-C2 |
| Drop table entry | S-C2 phase 1 |
| Skin | S-C1, S-C2 |
| Skin instance | S-C2 phase 3, S-E1, S-E2 |
| Open | S-C2 phases 2 and 3 |
| Round proof | S-A2, S-C2 phase 3, S-G1 |
| Account | S-E1, S-B3 |
| Balance | S-E1, S-D1, S-C2 phase 1 |
| Deposit | S-D1 |
| Withdrawal | S-E2 |
| Published performance record | S-A1 pre-login, S-E2 after |
| Play limits | S-F1, set at S-D1 |
| Free entry | S-C1 as an available case, S-A1 as an offer. **No place of its own, and step 6 answered that with an obligation on both nodes rather than a surface** |
| Live drop event | S-A1 and S-C2, as a layer |
| Shared result | **S-G1, which this slice is what produced** |
| Market rule | S-B1 |

**Sixteen of sixteen have a screen, and the slice earned its place by producing one.** Shared result entered step 1 with every part empty and no destination. Nothing was removed: no entity turned out to be surplus.

**One object is carried with a mark.** Free entry, the starter credit and the daily free case, appears on two screens and owns neither. `cjm-to-be.md` "Backlog and MVP core" already calls I1 and I2 components rather than screens, so this is consistent rather than contradictory, but an object with no home is how a capability quietly disappears between two stages. Owner: step 3, which decides what is global and what is contextual.
### The scope question this step raised, answered at the 03b gate

S-G1, the public result, is **a ninth public surface** against a round `CLAUDE.md` locked at eight. The base layer named the question rather than deciding it, because the rule outranks the step, and put three options on the table.

**Answered on 11 August 2026 by the founder: option 1, the public result page exists, and round 1 becomes nine surfaces.** `docs/decisions.md` D-20. `CLAUDE.md` was amended in the same step, so the rule and the map agree rather than merely coexisting.

**Why the screen exists.** Row F4, one-tap share of a result, is the single exception to the priority test in the entire backlog: the path does not break without it, the referral loop does, `cjm-to-be.md`. A share emits an object into the world, and base-layer step 1 found that nothing in this repository said what that object is.

**What the other two options cost, kept visible rather than deleted.** Option 2, landing the share on A2 with the round pre-loaded, buys no new surface and pays with the verifier form, which is the least emotionally sharp object the product owns, and F4 exists for the referral loop rather than for verification. Option 3, moving F4 out of round 1, keeps the scope line honest at eight and ships the referral loop without its mechanism, which F4's own row says is what breaks.

**It gained a second job in the process.** The live drop ticker had no destination that this repository could justify: the baseline sends every tile to a user profile, and no job here requires a profile object. Node 7.1 is now that destination, and it carries its own round proof rather than a stranger's trophy shelf.

---

## Navigation

Written at step 3, on 11 August 2026. The concept sitemap says which screens exist and by what intent they group. This section says how a person moves between them, assigns levels so that depth can be counted at all, and counts the taps from arrival to the main job.

### The first decision, taken at step 3 and reversed at 03b step 2

**What step 3 decided, kept visible because the reasoning is still half right.** The baseline runs a fixed 70px left icon rail with nine destinations, and `baseline.md` established that **exactly one of the nine is in our round 1**. Step 3 answered that the rail does not ship, on this reasoning: a rail carrying one live item and eight dead ones is not navigation, it is a promise the product cannot keep, and it advertises absence on every screen. It was deferred with its trigger named, battles at Phase 1.5, `jtbd.md` "Candidate-for-Cut Functions", not deleted.

**Reversed on 11 August 2026 by founder decision `D-21`, and the reversal does not contradict the reasoning, it removes its subject.** The objection was to a list of nine with eight dead items. It was never an objection to the rail as a component, and that distinction was available at the time and not made. **The rail ships, carrying round 1's own destinations, and every item in it is live.**

**Three carriers on mobile, two on desktop, and no carrier holds another's kind.** The first two are the baseline's own model, `baseline.md` and `:78`. The third is not inherited: `baseline.md` records that the baseline has no bottom tab bar at all, and `D-22` adds one as a shortcut over the rail rather than as a second model. Node 0.1 specifies all three in full.

| Carrier | Owns | Never holds |
|---|---|---|
| **The rail**, full height at the leading edge, collapsible, a modal drawer on mobile | The logo at its top, **every** destination, and its own toggle on the seam. It is the complete list | Money, actions, the account control |
| **The header**, starting at the rail's edge | Money, the account control, ambient controls | **Any destination at all.** No exception, not even the logo |
| **The mobile bar**, below 900px only, added by `D-22` | A subset of the rail's destinations, plus Home | Money, actions, and any item the rail does not hold |

### Global navigation: the rail's destinations and the job behind each

| Item | Enters | Guest | Job behind it |
|---|---|---|---|
| **Cases** | S-C1, the catalogue | yes | Main Job, `jtbd.md` "Section 1". The one mode round 1 ships |
| **Provably fair** | A2 | yes | Related Job 1, `jtbd.md` "Section 2", before login, and Related Job 3, `jtbd.md` "Section 2", after the open |
| **Responsible play** | S-F1 | yes | `B7-4`, pattern of 12, plus the compliance constraint at `CLAUDE.md`. **Barrier and constraint class, no job**, and nobody arrives wanting it |
| **My items** | S-E1, account and inventory | no | Related Job 5, `jtbd.md` "Section 2". Inventory, receipts, and the way into withdrawal |

**Three destinations for a guest and four with an account.** Material's collapsed rail range is 3 to 7, so the guest state clears the floor exactly and five of the eight LATER destinations fit before the component itself is the constraint.

**Balance leaves the destination list and becomes the header's money zone**, in **two figures**: the balance and the value of items held, both in coins by row `C1` as `D-28` rewrote it, never summed, and never rendered as a score. It still enters S-D1 and still carries `B4-3`, `B7-4` and `B4-1`. What changed is that it is not a destination, per Apple's rule that navigation carries navigation and not actions.

**Responsible play gains a rail entry and keeps the one it had.** The entry inside the money control, decided below at step 6, is unchanged. The rail entry is an addition, affordable because the rail has space.

**Provably fair in the global navigation is a deliberate structural claim and no competitor makes it.** `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core" names a public provably fair surface as one of three things no competitor offers pre-login, and `baseline.md` verified on 11 August 2026 that our own baseline still redirects that route to login and demotes it to a footer link, `baseline.md`. Design principle 1 says trust is the product. A principle that does not reach the navigation is a slogan, and this is the cheapest place it becomes structure.

**It carries the limit `D-14` attached to it.** Its position is not a claim that a verifier converts a sceptic. What answers the recorded doubt is D2 and D4 on the case screen. This item is where the product proves its own numbers are checkable, which is a different job.

**The navigation has two states and it holds its shape across the boundary.** One slot is added when an account exists and nothing moves, is removed or is greyed out. Pre-login the product still shows three live destinations, which matches what the pre-login job actually is: evaluate, then open.

### Levels

Assigned deliberately, and this is the minimum depth marking rather than the full tree, which the detail layer builds.

**Level 1**, reachable directly from global navigation: S-A1 Home, S-C1 Catalogue, S-A2 Provably fair, S-E1 Account and inventory, S-D1 Deposit.

**Level 2**, opened from level 1: S-C2 Case screen, from a Home tile or from the catalogue. S-E2 Withdrawal, from inventory. S-F1 Responsible play, from the footer and from the Balance control.

**Level 3:** empty in round 1. Nothing in this scope needs a third level, and that is a result rather than an omission.

**Not levels at all.** Three screens are interrupts that fire inside a flow rather than destinations anyone navigates to: S-B1 the age and geo gate, S-B2 sign in, S-B3 identity verification. One screen is a landing entered from outside the product entirely: S-G1 the public result. Giving any of these a level would inflate the depth count with things nobody chooses.

### Depth to the main job, counted

Primary persona The Opener, main job `jtbd.md` "Section 1", arrive and open with a reveal that feels real.

**The main job route, 3 taps.**

1. Home, arrival, tap 0. A featured case tile is on it.
2. Tap 1, the case tile, lands on C2 the case screen.
3. Tap 2, the age gate fires, `B3`, before any case interaction. The 18+ declaration is confirmed.
4. Tap 3, Open. The main job is reached.

**Three taps, and one of them is the gate.** The compliance layer eats a third of the budget for the main job, which is a real cost and it is stated here rather than discovered at the wireframe. It is also why the gate carries only the declaration: decision `D-17` puts identity verification before funding instead of here, and if that check sat at this tap the main job would be unreachable inside the budget for a first-time visitor.

**The gate fires at first case interaction, not on arrival, and that placement is load bearing.** `B3` says "before any case interaction", not before any interaction. A gate on arrival would block the pre-login trust evaluation that Related Job 1 and the entire hero strategy depend on, and A1 to A5 exist precisely so a suspicious visitor can read the product before committing anything. The tap count is the same either way. What differs is whether the product gets to answer `B1-1`, the category arrives pre-suspected, before it starts asking for things.

**The browsing route, 4 taps, and it is not the main-job route.** Home, then Cases, then a case tile, then the gate, then Open. Four taps and over budget. The Opener arrives from a streamer clip wanting to open, not to browse 239 cases, so the catalogue is the browsing route for a person who already trusts the place. Naming the difference is the honest version; pretending both are three taps is not.

**What was paid for three taps, stated as the pack requires rather than defended.** Featured cases sit on Home, so Home carries two loads at once: the trust evaluation, A1 to A5, and the entry to the main job. That is a crowded screen, and design principle 3 says cost never hides inside excitement. A home that is simultaneously a trust page and a shop is exactly where that risk lives. The compromise is accepted here and handed forward as a named constraint for the wireframe stage, not as a solved problem.

**One structural condition, and 03b closed it on 11 August 2026.** Whether C1 stayed a separate node depended on `D-D`, and the fork was deferred rather than guessed. `D-20` answered it by structure rather than by a number: **node 3.1 stays, and it comes off the main path.** Home carries the featured case grid directly, which is what keeps the main job at three taps, and the catalogue holds what Home cannot, the categories, the search, the filters and the daily free case as an addressable case. The inventory figure is still `[?]` and no longer decides anything here, because Home shows a curated subset at any figure and the catalogue holds all of it.

**The founder's own architecture is what settled it.** Home is meant to route to several game modes, and the baseline already runs that as a row of four mode cards, `baseline.md` section 4. In round 1 exactly one mode is live, so that row would ship with one live card and three dead ones, which is the left icon rail's defect at a different scale. It is deferred with the same trigger. A mode hub would also have inserted a fourth tap into a route this file locks at three.

### Global, contextual, deep

**Global, visible everywhere:** the four navigation items in their two states, the Balance figure once an account exists, and a footer carrying responsible play and the legal pages.

**Responsible play sits in the footer of every screen and again at the deposit**, which is a deliberate placement rather than an inherited one: `baseline.md` records zero responsible play routes, zero footer links and zero matches for self exclusion, deposit limit or cool down anywhere on the baseline. `C2` sets the spend ceiling where the money decision is made and `C5` lives on the page itself.

**The ambient social layer is not global.** The live drop feed, `A3`, renders on S-A1 and on S-C2 and nowhere else. `ux-patterns.md` "Primary Choice: Pattern A (Slot Machine / Linear Reveal) with Pattern E (Community Discovery / Social Reveal) as the ambient layer" requires Pattern E to be a layer on the screens where the core happens, and a feed on every screen would make it wallpaper rather than context.

**Contextual, appearing inside a flow:** the age and geo gate at first case interaction; sign in at the first point that needs an account; identity verification before funding; the post-reveal verification link and the one-tap share in the outcome phase; the spend ceiling at deposit.

**Deep, rare and deliberately not surfaced:** the withdrawal restriction appeal, `G4`, inside S-E2; the verifier form itself inside S-A2, since the page has to open and explain before it asks anyone to paste a seed.

**Responsible play is not deep, and step 6 moved it.** It was classed deep, reachable through the footer and then the page and then inside it, three taps or more. `B7-4` describes a pattern of 12 people inside an escalation loop, and a brake that has to be searched for at the worst moment is not a brake. It now carries **a persistent entry inside the Balance control**, which puts it two taps away and, more importantly, at the place the person already goes when they are about to spend, which is where design principle 3 says clarity belongs. The footer link stays.

**And the constraint that makes this safe is written here rather than assumed.** Promotion is reachability, not prominence. The responsible play route carries **no counters, no streaks, no status and no session score**, which is the same hard rule T4 attaches to the spend ceiling at `cjm-to-be.md` "T4. Getting something to open with": the moment a limit acquires completion mechanics it stops being a boundary and becomes a reason to keep going. Making a brake easy to find is not the same as making it a thing to engage with, and the difference is exactly this list.

### Free entry gets an obligation rather than a surface

Carried from step 2, flagged for step 6, and answered here. The starter credit reads as a Balance state and the daily free case reads as an available case, so the entitlement appears on two screens and owns neither. `cjm-to-be.md` "Backlog and MVP core" already calls `I1` and `I2` components rather than screens, so inventing a surface for them would be scope nobody asked for.

**What is added instead is a debt on two nodes, so the capability cannot vanish between stages.** S-A1 Home is obliged to carry the starter credit offer as a pre-login element, because it is the activation lever and `aarrr.md` "MVP product decision" puts it there. S-C1 Catalogue is obliged to carry the daily free case as an addressable case rather than as a banner. Both obligations are written for 03b to honour when it expands those nodes.

**An object that only appears as another object's state is how a capability quietly disappears**, and the answer is not always a screen. Sometimes it is naming who owes it.

### What this section does not decide

The full tree with page contents, which is the detail layer.

---

## Tracing

Written at step 5, on 11 August 2026. Rows are the functional jobs from `jtbd.md`, main and related. Columns are the screens from the concept sitemap. A tick means the screen genuinely takes part in closing that job. Emotional and social jobs are not in this matrix and have their own table below, because they are not closed by a screen.

### Matrix: functional jobs against MVP screens

| Job | S-A1 Home | S-A2 Prov. fair | S-B1 Gate | S-B2 Sign in | S-B3 Identity | S-C1 Catalogue | S-C2 Case | S-D1 Deposit | S-E1 Account | S-E2 Withdraw | S-F1 Resp. play | S-G1 Result |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **Main Job**, `jtbd.md` "Section 1" | ✓ T1, T2 | | ✓ T3 | ✓ T3 | | ✓ T5 | ✓ T5, T6, T7 | | | | | |
| **RJ1** arrive with confidence, `:33` | ✓ | ✓ | | | | | ✓ | | | | | |
| **RJ2** first open without friction, `:42` | | | ✓ | ✓ | ✓ | | ✓ | ✓ | | | | |
| **RJ3** verify the outcome, `:51` | | ✓ | | | | | ✓ | | | | | ✓ |
| **RJ4** convert result into more value, `:60` | | | | | | | | | | | | |
| **RJ5** withdraw cleanly, `:69` | | | | | ✓ | | | ✓ | ✓ | ✓ | | |
| **SCOPE** | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP | MVP |

**Budget: 12 MVP screens, 13 LATER screens, 25 in the map.** Corrected at the detail layer, see Counts above: the base layer carried 12 LATER in four files while its own orphan list held seven, not six. Just under half the product as mapped is round 1. The MVP subset is the input for 03b, which writes the nodes, for stage 04, which draws them, and for stage 07, which colours them, and all three start from it rather than from the whole map.

**Four cells carry a CJM phase rather than a separate job**, which is the rule the pack states: a screen that is a step of the main path closes a phase of the main job and is not an orphan for lacking a related job of its own. S-A1 carries T1 the pull and T2 first contact. S-B1 and S-B2 carry T3 getting in. S-C1 carries T5 picking a case. S-C2 carries T5, T6 and T7 at once, which is why `cjm-to-be.md` "Backlog and MVP core" calls it one screen with three phases.

### LATER screens, traced in one block

| Screen | Job | Note |
|---|---|---|
| Battle list, Battle lobby | Social Job 1, `jtbd.md` "Section 3" | Social job, so it appears in the second table rather than this matrix |
| Upgrade | RJ4, `jtbd.md` "Section 2" | The only pair of screens that closes RJ4 |
| Exchange | Hypothesis Job A, `jtbd.md` "Section 4" | Parent is marked `[?]` at its own source |
| Rakeback and loyalty | Emotional Job 3, `jtbd.md` "Section 3" | Emotional job, second table |
| Leaderboard | Hypothesis Job C, `jtbd.md` "Section 4" | Parent is marked `[?]` |
| Gunfights, Giveaways, Race and prize pot, Rewards hub, Top wins, Gift cards, Referral and affiliate | **None** | Seven declared orphans, already carried in the concept sitemap. Locked into LATER by scope, so no step may cut them. **Top wins was restored here at step 7:** it was in the step 1 object list and vanished from the step 2 screen list, which is why the count read seven while six were named |

### Orphan jobs, first, because they cost more

A job with no screen is a hole in the product: the person has nowhere to do their work. A screen with no job is ballast. The expensive one goes first.

| Orphan job | Decision |
|---|---|
| **RJ4, convert my result into something more valuable**, `jtbd.md` "Section 2" | **Backlog, deliberately.** Its two screens exist in the map and are marked LATER: Upgrade, whose parent is RJ4 directly, and Exchange, whose parent is a hypothesis. The row stays empty and marked rather than being given a tick somewhere plausible. `jtbd.md` "Section 5" scores RJ4 at 2 for The Opener and 3 for The Accumulator, a secondary persona, and `CLAUDE.md` says the interface is not built around secondary scenarios even though they must work. This is that rule producing an empty row on purpose. |

One orphan job, and it is resolved rather than merely noticed.

### Orphan screens, and the thing the matrix cannot see

| Orphan screen | Decision |
|---|---|
| **S-F1 Responsible play** | **Keep the screen. The matrix is what is incomplete, not the screen.** S-F1 has no functional job and never will: nobody arrives wanting to limit themselves. Its parents are barrier `B7-4`, a pattern of 12 people, and the compliance constraint in `CLAUDE.md`, "responsible play tooling (deposit limits, session limits, self exclusion, cool down)". Both are legal parent classes in this project. |

**This is a defect in the instrument, and it is worth naming precisely.** The pack's matrix measures exactly one of the three legal parent classes this project uses. A screen parented on a barrier or on a compliance constraint is invisible to it and shows up as an orphan. S-F1 is caught by it. **S-D1 Deposit escapes only by accident**, because the CJM mapped phase T4 onto RJ2, and `jtbd.md` "Matrix Conclusion: 3 Jobs for MVP Core" says in as many words that deposit closes none of the core jobs. Had the CJM not made that mapping, the matrix would have flagged the deposit screen of a money product as ballast.

The matrix is kept as the pack specifies, because it does catch the thing it was built for. What is added is this paragraph, so that a later reader does not read one empty column as a mistake.

**The contradiction check the pack asks for, answered.** S-F1 is marked MVP and has no tick. The pack says this means either the mark is inflated or a job was not described. It is neither: the mark is correct and the job does not exist, because the parent is a constraint. Named out loud rather than resolved by putting a tick somewhere.

### What the matrix found that step 2 had missed

**S-G1 Public result closes Related Job 3, in that job's own words.** Step 2 gave S-G1 a single parent, Emotional Job 2, and an emotional parent puts a screen outside this matrix entirely, which would have made S-G1 a genuine orphan and weakened the case for it. Reading RJ3 in full closes that: "so that I trust the platform enough to open again **or to tell someone about my result**", `jtbd.md` "Section 2". Telling someone is in the functional job's own outcome clause.

This is not a tick placed to rescue a screen. It is a line that was in `jtbd.md` since stage 02 and that nobody had traced. The concept sitemap row for S-G1 was corrected in the same step. The scope question about the ninth surface stands unchanged, and it now stands on two jobs instead of one.

### Emotional and social jobs: what carries them

These are not closed by a screen. Asking where a person goes to feel genuine suspense is a category error, and inventing a "trust page" to fill a cell is worse than an honest empty. Columns are the mechanism, where it lives, and what confirms it. This table is read twice more: the detail layer takes states and trust proofs from it, and stage 05 takes it as the brief for tone.

| Job | Mechanism | Where it lives | Confirmed by |
|---|---|---|---|
| **Emotional Job 1**, genuine suspense rather than manufactured tension, `jtbd.md` "Section 3" | The reveal renders the settled roll and computes nothing again, `E1`, so animation and credited item cannot diverge. No near-miss theatre, `E2`: the deceleration lands on the actual result without visually passing better items first. The round hash is visible at the spin trigger, `E4`, which reframes the buildup as watching a settled outcome rather than waiting for one to be decided | S-C2 phase 2, as behaviour of the reveal itself rather than as a component | `B6-1` the animation and the credited item disagree, `B6-2` the belief that the reveal turns against you once you win, pattern of 9. `jtbd.md` "Section 3" names near-miss as a confirmed dark pattern. `ux-patterns.md` "How the Chosen Pattern Maintains Animated Feel While Protecting Clarity and Trust", "honest buildup, not manufactured near-miss" |
| **Emotional Job 2**, a win worth talking about, `jtbd.md` "Section 3" | One-tap share, `F4`, producing an object that carries its own proof, S-G1. The instance value receipt, `F1`, makes the number inside the story true, so the story survives being checked by the person it is told to | S-C2 phase 3, then S-G1 | `jtbd.md` "Section 3", Key-Drop's effects cited in user reviews as the most memorable differentiator. `aarrr.md` Referral. `B7-1` the undervalued win, pattern of 7, which is what makes an unchecked story collapse |
| **Emotional Job 3**, smart play rewarded rather than punished, `jtbd.md` "Section 3" | **Nothing yet, and this is an honest empty rather than an oversight.** Rakeback and loyalty are LATER. Round 1 ships no mechanism for this job at all | Nowhere | Open. Direct entry to the backlog. `jtbd.md` "Section 5" scores it 1 for the primary persona and 3 for The Accumulator, which is why round 1 can carry the gap |
| **Social Job 1**, beat a real person rather than a bot, `jtbd.md` "Section 3" | **Nothing yet, and deliberately.** Battle mode is hidden at launch by founder Decision 2, `jtbd.md` "Candidate-for-Cut Functions", because a bot-filled lobby is solo opening with extra steps | Nowhere | Open by decision, not by omission |
| **Social Job 2**, be part of a platform that feels alive, `jtbd.md` "Section 3" | Live drop feed with no invented names, and any bot present in it labelled as one, `A3`. Every tile links to a public result rather than to a user profile, so the social proof is checkable rather than decorative | S-A1 and S-C2, as an ambient layer and never as a destination, per Pattern E at `ux-patterns.md` "Primary Choice: Pattern A (Slot Machine / Linear Reveal) with Pattern E (Community Discovery / Social Reveal) as the ambient layer" | `jtbd.md` "Section 3". `research.md` "3 Common Patterns", bot visibility as the worst-in-category failure, with the baseline itself showing "[BOT] Darth Vader" in its own ticker. `baseline.md` section 3 for the tile-to-profile link the baseline uses |

**Two rows read "nothing yet" and both are correct.** Emotional Job 3 and Social Job 1 are the jobs of secondary personas whose surfaces are LATER by decision. A mechanism invented here to fill the cell would be a round 1 commitment nobody made.

### Reconciliation of the concept sitemap against the flows

Step 4 introduced no screen the concept sitemap did not already hold, so the map needed no additions. One row was corrected, S-G1, and the correction came from this matrix rather than from the flows.

**Step 6 changed the map in four ways, all recorded above rather than applied silently.** Every screen code gained the `S-` prefix, because the screen namespace and the backlog capability namespace collided on all twelve codes and both readings parsed. S-C1 Catalogue gained a route, flow 1a in `flows.md`, deliberately minimal so that decision `D-D` cannot make the work worthless. Responsible play moved out of the deep classification into the Balance control, with the no-mechanics constraint written beside it. And Free entry gained an obligation on two nodes instead of a surface of its own.

**One thing this stage found and cannot close.** A person who only ever uses free entry can reach the withdrawal route and take out a real skin without ever meeting an identity check, because `B1` gates funding and `B2` forbids the check at the exit. The shape that closes it without reopening `B8-4` is proposed in `flows.md` under flow 3 and deliberately not drawn: it is a compliance decision riding on `D-A`, which counsel already owns.

The full defect log with both instruments, the merge and the verification notes is in `ia/docs/critique.md`.
