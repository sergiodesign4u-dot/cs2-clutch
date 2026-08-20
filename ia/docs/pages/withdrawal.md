# Node 5.3. Withdrawal, with the public clock

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned. **Base layer code:** `S-E2`.

**URL:** `/withdraw`, from `0.13`. **Indexed:** no. **Schema:** none. **Breadcrumb:** none. Inherited from the indexation register, section 3.

**Purpose.** Move a held item into the person's Steam inventory, and make the wait legible while it happens: every state named, every timer owned by us, by Steam or by the person, and every published figure checkable against their own clock.

**Jobs served.** Related Job 5, withdraw and get what I earned, and Core Job 3, withdraw cleanly, `jtbd.md`. **Parent class:** barrier `B8-2`, waiting with numbers, pattern of 6, by way of rows `G1`, `G2` and `G3`; barrier `B8-3`, winning treated as suspicious behaviour, pattern of 3, by way of rows `G4` and `G5`; barrier `B8-4`, verification ambushes at the exit, pattern of 5, by way of row `B2`, which is an absence rather than a block; and Related Job 5 by way of row `G6`, which carries no barrier and says so.

**Renders:** `0.1` navigation, `0.2` footer, `0.5` toasts, `0.6` skin card. **Reads:** `0.11` for every published figure and for the Steam health probe, `0.12` for the legal ground behind a blocked market, `0.10` for the appeal route.

**Entered from:** `5.1` only, level 2. **Transitions:** `5.4` to `5.8`.

**Phase.** T8, the floor of the entire As-Is emotional map at `-5`.

---

## 0. The barrier, with its own figures

`B8-2` is the densest numeric barrier on the As-Is map. Ledger U-09, in `cjm-as-is.md`, P8: **30 hours, 7 days, 2 to 3 days, 9 days from last deposit, 16 hours, almost 3 weeks.** Against it, the positive pole is worth as much and is recorded in the same section: "Recently I won and withdrew a butterfly gamma doppler p2 within 5 minutes of winning", five stars. **The category can do this. Most of it does not.**

**The injury is not the duration, it is the unattributed silence.** `G1`'s success signal is the share of withdrawals that generate a support ticket asking for status, which is a measurement of how many people had to ask a human what their own transaction was doing. So the page's job is not to be fast. It is to make a slow withdrawal legible while it is slow, and to publish the number that says how slow we usually are before anyone needs it.

Three published figures do that work and all three already have an owner in `0.11`: **the rolling median and p90**, rows `A4` and `G3`; **the ceiling on each of our own states**, row `G2`; **the per-state timer with attribution**, row `G1`. None of their values is decided here. This node specifies where they render and what they may never do.

---

## 0b. The mechanic this node did not know the baseline had, found 18 August 2026

**The account capture broke an assumption that runs under this whole node**, `research/docs/baseline-account.md` section 5, screenshot `acct_withdraw_step2_total.png`.

**On the live product, withdrawal is a purchase and not a delivery.** The screen prints it in a four column table of its own:

| SKIN NAME | YOUR SKIN PRICE | MARKET SKIN PRICE | YOUR BALANCE IMPACT |
|---|---|---|---|
| M4A4 Desert-Strike, Field-Tested | `4.48` | `27.52` | **`-23.04`** |

> "Based on the market price, `23.04` will be taken from your balance"

**The arithmetic closes exactly:** `27.52 − 4.48 = 23.04`. The item a person won is valued at `4.48` by the site, a real copy on the market costs `27.52`, and **the difference is charged to their balance at the moment they ask for the real thing.** In the observed row that difference is **six times** the value of the win.

**What this node currently assumes, and why the assumption is now visibly untested.** Every block, state and figure below is written as though **the thing you won is the thing you receive**, and the only cost between them is time. `cjm-to-be.md` has no row for a settlement difference. `sitemap.md` has no state for it. `0.11` has no figure for it. **The gap is not an omission in this node: it is a mechanic the whole map does not model.**

**And it is `B7-1` stopping being a perception problem.** The barrier reads: the gap between what a win appears to be worth and what it is worth. **On this screen the gap is a number the product prints itself**, at the last possible moment, after the person has already decided they want the item.

### 0b.1 Two ways out, and this node may not pick between them

| Option | What it means | What it costs |
|---|---|---|
| **A. Inherit the mechanic and move it forward** | The won item stays a credit note valued at the site price, and the settlement difference is disclosed **at the moment of the win and on the case page**, not at the checkout. `A1`'s two prices stop being a trust feature and become the spine of the product | **The reveal has to carry a second number**, and the outcome screen has to say what the win is worth against what a real copy costs. Emotional Job 2 and design principle 2 both take the hit, and stage 04 draws it |
| **B. Refuse it** | What you win is what you receive, and the drop table's values are real market values | **It rewrites the treasury model**, because the published chances and the RTP would then have to hold against real market prices rather than site prices. **This is a business decision and not a design one**, and no row in this repository can take it |

**The recommendation on the record, and it is a recommendation rather than a decision.** **A**, because B rewrites the economics of the product and A is what makes our trust positioning actually differentiated: we would be the platform that names the gap **before** a person spends rather than at the till. Design principle 1 and `D-14` both point the same way, and `A1` already exists to carry it.

**Owner: the founder, before stage 04 draws this node.** Until it is answered, **every figure below is specified against option B by default**, because that is what the node was written against, and the difference between the two is a block and a state rather than a redraw.

---

## 1. Blocks, mobile first

Composition from `blocks.md`, type **T4 Transactional form with named states**, which carries a declared gap: **no competitor screens of this type exist that we may open**, because all five put deposit, withdrawal and identity behind login and this project never logs in. The substitute source is public documentation of the same mechanics plus Refero for the craft, and it found real product rules living in an FAQ.

| # | Block | What it holds | Parent | From |
|---|---|---|---|---|
| **1** | **The record** | The item as a `0.6` card with its `F2` receipt, both dated figures intact | Row `F2`, on `B7-1` | Backlog group 6 |
| **2** | **Destination** | The Steam account it goes to, named | Related Job 5, `jtbd.md` | The job's own wording |
| **3** | **The total, with commission on its own line** | Zero to Steam, section 3 | Row `G6`, Related Job 5, **job only, no barrier** | Backlog group 7 |
| **4** | **The named limits, before the request** | Three limits in plain words, section 4 | Row `G5`, on `B8-3` and `B8-2` | Backlog group 7 |
| **5** | **The clock** | Named states, elapsed per state, owner label on each, section 2 | Row `G1`, on `B8-2` | Backlog group 7 |
| **6** | **Our published numbers** | Median and p90, and the ceiling for the state that is live | Rows `A4`, `G3` and `G2`, on `B8-2` | `0.11` groups A |
| **7** | **The history of this record** | Every state it has been in, its elapsed and its owner, kept and not replaced | Row `G1`, on `B8-2` | Required by `5.8` |
| **8** | **Support and appeal** | The route to `0.10`, which carries the published response deadline | Row `G4`, on `B8-3` | Backlog group 7 |

**Two arrivals, one page, and the first screen belongs to whichever is live.** Before the request the first screen is the record, the limits, the commission line and the one control. After the request the clock takes the first screen and the record moves under it. This is a priority rule and not a second node: the same page, the same blocks, ordered by what the person came back for. `1.0` and `1.1` already settle that a state-dependent first screen is a state, not a different page.

**The persistent summary card is taken from the bank**, Refero Fresha row in T4: the total stays on screen while the choice is made rather than appearing after it. Here the total is the item and the zero commission, and it stays visible through every state below.

---

## 2. The clock

### 2.1 Five stages, derived from the flow rather than from a queue model

The stage list is the node order of flow 3 in `flows.md`, read left to right: request, our checks, the offer sent, Steam completing, delivered. Nothing is added to it.

| Stage | Owner label | What it means | Ceiling |
|---|---|---|---|
| **Requested** | **waiting on us** | It is in our queue and nothing has been asked of anyone else yet | `[?]`, row `G2` |
| **Our checks** | **waiting on us** | The restriction check, node `Review` in flow 3. Exits to `5.6` if it bites | `[?]`, row `G2` |
| **Offer sent, waiting for you in Steam** | **waiting on you** | The trade offer exists and the person accepts it inside Steam. Expiry is `5.8` | Set by Steam, `[?]` |
| **Steam completing the trade** | **waiting on Steam** | Out of our hands. `G2` and `5.5` govern this stage | `[?]`, suspended while degraded |
| **Delivered** | **closed** | The item is in the Steam inventory. Related Job 5 closed | The person's own elapsed, printed against our published p90 |

**Two stages share the owner "us" and they are still two stages.** A single block reading "waiting on us" for forty hours is the unattributed silence again, one label thinner. Two names and two timers cost nothing and are the difference between a queue and a black box.

**Where `5.5` and `5.6` interrupt is fixed by the flow, not chosen here.** The health check sits before the restriction check, and the restriction check sits before the offer is sent. So a degraded Steam never hides a restriction, and a restriction is never discovered after an offer has been made.

### 2.2 What the timer shows, and the four things it never shows

**Shows, and all three are real:** the elapsed time in the current state, the published ceiling for that state, and who is being waited on.

- **Never an estimated time remaining.** We cannot compute one, and an ETA that slips is `B8-2` with a number attached to it, which is worse than no number. Three real figures beat four when the fourth is invented.
- **Never a progress bar.** A bar implies a rate, and nothing here measures a rate.
- **Never a spinner.** `flows.md` says it in the flow itself: loading has no node here on purpose, because every wait in this flow is a named state with a timer.
- **Never a score, a streak or a celebration.** `0.11` rule 7, and the limits rule in `CLAUDE.md`. A withdrawal is not an achievement and a fast one is not a level.

Three more rules arrive whole from `0.11` and are not re-derived: **degraded rather than frozen at the last good value**, rule 6, which is `5.5`; **missing is a state and never a zero**, rule 3, which is `5.6`; **text and never an image**, rule 8, so that a state and its elapsed can be pasted into a complaint.

### 2.3 One definitional hole in the published p90, and it is not written down anywhere

`0.11` carries the rolling window length as `[?]`. **The second half of the same claim is not carried anywhere: whether the median and p90 measure the whole elapsed time end to end, or only the stretches attributed to us.**

The attribution machinery in `G1` makes both computable, and the two diverge most exactly in the cases people complain about, where a long stretch sat on the person or on Steam. **Printing one figure while the words imply the other is precisely what `0.11` rule 1 and rule 9 exist to stop**, and design principle 1 under its `D-14` limit says the product is built so that its own numbers are checkable. A p90 whose definition is ambiguous is not checkable by the person holding the clock.

**Owner: `0.11` and the founder, before stage 04.** This node names the hole and does not fill it.

**And one rule that follows whichever way it goes: outage days are not excluded from the window.** A rolling figure that drops its bad days is not a measurement. `5.5` is a state of the product, not an exemption from its own numbers.

---

## 3. Commission free

Row `G6`, commission-free withdrawal to Steam. It is **MVP, job only, no barrier**, and the backlog prints that rather than dressing it in a borrowed parent. Its job is Related Job 5, and its value is the exchange against Steam Market's fee.

- **It renders as a line in the total, never as a badge.** `0.11` gives this row its route verbatim: the withdrawal itself, because a commission of zero is the one figure a person verifies by finishing the transaction. A badge asserts; a line in a sum gets checked.
- **It is stated before the request, not after.** `C4` already fixed that the sum required to withdraw is stated before the deposit and can never rise. **This line must agree with what `4.1` said**, and a disagreement between the two is `B4-1` arriving late.
- **Steam Market's fee is a number about a third party.** Where it is printed as the comparison it carries its source and its date, `0.11` rule 9 and group B, and it can change.

---

## 4. The named limits, stated before entry

Row `G5`, in its own words: **named limits stated in plain words: blocked countries, Steam trade holds, Steam-side bans.** Its success signal is that the user meets the limit before the first withdrawal rather than inside it.

**Three limits, and the list is closed by the row.** A fourth cannot appear in the interface without a backlog row first.

| Limit | Whose | What it is, in plain words | Does it lift |
|---|---|---|---|
| **Blocked country** | Ours | The verdict and its ground in readable words, from `0.12`. Under an allowlist the common refusal is **not launched** rather than blocked, `D-23` | With the staged rollout. **Every verdict is `[?]` until re-verified against current law** |
| **Steam trade hold** | Steam's | Steam holds a trade for a period it sets, on conditions it sets | Yes, after a duration that is Steam's. `[?]`, and it needs a source and a date before it is printed |
| **Steam-side ban** | Steam's | The Steam account cannot receive a trade. **Not ours and we cannot lift it** | Not by us. The route is Steam's |

**Where they render.** Authored once, rendered twice, in the same words: **on `5.1` beside the withdrawal entry, which is what "before entry" means** in flow 3's node order, and here on the record. Same discipline `0.14` applies to its field set: no site may show a limit the other does not, name one differently, or order them differently.

**The third row is why this block sits before the request and not inside it.** The sharpest quotes under `B8-4` are people whose Steam accounts were banned through a platform's process. A limit that is Steam's is named as Steam's before anyone commits, rather than surfacing as our refusal after they have.

---

## 5. What stays open here, and it is the cluster's answer to `B8-4`

**No verification appears anywhere in this cluster.** That absence is capability `B2`, and it is the direct answer to `B8-4`, verification ambushes at the exit, pattern of 5. The backlog states how it is proven: **by code review, not by a metric. The withdrawal route contains no verification call.**

The design consequence is concrete: **there is no slot for a check on this page, in any state.** Not in `5.4`, not in `5.6`, not behind a "resolve this" control. A state that would require one is not drawn.

Three ways a person can be constrained, and **none of them closes this page**:

1. **Every boundary in `6.1`, self exclusion included.** `sitemap.md` node `6.3` states it and gives the transition: withdrawal stays reachable. **A boundary stops spending, never retrieval.** A self exclusion that traps the balance is a penalty for asking for protection, and it teaches the next person not to ask. Parent: the responsible play compliance constraint in `CLAUDE.md`, plus the limits rule that forbids a boundary from becoming anything other than a boundary.
2. **A failed identity check, `2.9`.** The node's own transition reads "5.3 stays open regardless, or funding closed with the ground on record", and `flows.md` records why it was corrected: the failed check had been drawn as an absolute dead end while `B2` guarantees the withdrawal route carries no verification branch at all. **A person whose check fails can still take out what they already hold.** Funding closes. Retrieval does not.
3. **A restriction on the account, `5.6`.** This is the only one that stops a withdrawal, and it is the account being restricted rather than the person being limited. It arrives with a written ground, a frozen rather than zeroed balance and an appeal with a published deadline, which is the whole of `G4`.

---

## 6. States

Five, all numbered in the map, all specified here under their own anchors.

### 5.4 Not eligible, limit stated before entry {#5.4}

**Type:** state. **Scope:** MVP. **URL:** none. **Transition:** `5.1`.

**A state a person should mostly never reach, and that is the point.** `G5` puts the limits on `5.1` beside the entry, so this state exists for the narrow cases: eligibility changed between the statement and the request, or the limit belongs to this particular item rather than to the account.

| Element | Behaviour | Parent |
|---|---|---|
| **Which limit, in the same words** | The identical sentence used on `5.1`. A limit that is reworded at the moment it bites reads as a new rule | Row `G5` |
| **Whose it is, and whether it lifts** | Ours, or Steam's. A date if we have one, `[?]` if the answer belongs to Steam. **Never a countdown to a moment we invented** | Row `G5`, `0.11` rule 9 |
| **The item is untouched** | Still held, still in `5.1`, still carrying both dated figures | Row `F2` |
| **No verification branch** | An ineligibility is never resolved by asking for documents here | Row `B2`, on `B8-4` |
| **No substitute offer** | Below | Barrier `B8-1` |
| **Route back to `5.1`** | The map's own transition | `sitemap.md` |

**The refusal that matters here is the substitute.** `B8-1` is the out-of-stock substitution barrier, in a user's own words: "they force you to exchange it for much lower-value skins or 'site balance'". **A not-eligible state that offers to convert the item into balance is that barrier arriving at a different door**, and it would be dressed as helpfulness. The state offers nothing. It names the limit and routes back.

### 5.5 Steam degraded {#5.5}

**Type:** state. **Scope:** MVP. **URL:** none. **Transition:** back into the clock on `5.3`, per flow 3.

**A live banner driven by the health probe, not a generic error.** The probe is row `G2` and it lives in `0.11`, refresh class real time, and `0.11` puts it in the register precisely because it obeys the same missing-data rules as the figures it protects.

| Element | Behaviour | Parent |
|---|---|---|
| **What is degraded, and as of when** | The probe's own as-of, visible | Row `G2`, `0.11` rule 2 |
| **A withdrawal already in flight** | Stays in the queue. Nothing is lost, and its stage becomes waiting on Steam | `flows.md` flow 3: degraded returns to the clock |
| **A new request** | Accepted and queued. The flow refuses it nowhere | `flows.md` flow 3 |
| **The Steam ceiling** | **Suspended, and it says it is suspended** | Row `G2` |
| **Recovery time** | `[?]`. It is Steam's outage and we do not have the number | `CLAUDE.md`: never invent a number |
| **Never frozen at the last good value** | Degraded is its own state | `0.11` rule 6 |
| **Colour never carries it alone** | The state is in text, in the block | `0.11` section 9 |

**Suspending the ceiling out loud is the whole design here.** A published ceiling that keeps running through a third-party outage is a promise we cannot keep, and letting it lapse quietly is the unattributed silence with a number on top of it. Saying "this ceiling does not apply while Steam is degraded" keeps the ceiling meaningful the rest of the time.

**And the rolling window keeps the outage.** Section 2.3: a figure that drops its bad days is not a measurement.

### 5.6 Account restricted, notice and appeal {#5.6}

**Type:** state. **Scope:** MVP. **URL:** none. **Transitions:** `5.7`, or back to `5.3` if the appeal is upheld.

`B8-3` in the corpus's own words, `cjm-as-is.md` P8: "as soon as I tried to withdraw my winnings, the site permanently banned me"; "my balance of over 160 coins was completely wiped out... they refused to provide any specific explanation".

**Row `G4` names three things and each one is a block on this state.**

| Element | Behaviour | Parent |
|---|---|---|
| **A written ground** | The reason in readable words. **Never a code alone, never "violation of terms" with nothing under it.** Text and never an image, so it can be copied into a complaint or an appeal | Row `G4`, `0.11` rule 8 |
| **The balance frozen and never zeroed** | Both money figures still render, with their real values, marked frozen. **A zero here is not a display bug, it is the barrier itself** | Row `G4`, `0.11` rule 3 |
| **The items stay held** | Still listed on `5.1`, still carrying their receipts. A frozen account is not an emptied one | Row `F2` |
| **An appeal with a published response deadline** | Routed into `0.10`, which owns the appeal route and its service level. **The deadline value is `[?]`**, from `0.11` | Row `G4` |
| **The clock keeps running, owned by us** | While an appeal is open the state is waiting on us, and **the published appeal deadline is that state's ceiling** | Rows `G1` and `G4` |
| **No verification branch** | Below | Row `B2` |

**Two decisions worth stating.**

**The appeal deadline is reused as the clock's ceiling**, so `G1` and `G4` run on one mechanism instead of two. A person waiting on an appeal sees the same three things they saw waiting on Steam: elapsed, ceiling, owner.

**And a restriction whose ground is about identity is still not a check on this route.** It is stated as a restriction, with its ground, and the appeal is handled through `0.10` rather than as an inline document upload. `B2` is a rule about this route, not a claim that the situation cannot arise, and honouring it here is what keeps `B8-4` closed at the exact moment the category reopens it.

### 5.7 Restriction upheld {#5.7}

**Type:** state. **Scope:** MVP. **URL:** none. **Transition:** none. **A dead end, by design, and the map says so.**

**The dead end remains; the silence does not.** That sentence is in `sitemap.md` and in `flows.md`, and it is the entire specification.

| Element | Behaviour | Parent |
|---|---|---|
| **The ground stays on the record** | The same words as the notice in `5.6`. The record does not vanish and the page does not become a bare "account closed" | Row `G4`, on `B8-3` |
| **It stays retrievable** | Text, copyable, available after the decision rather than only at the moment of it | `0.11` rule 8 |
| **The appeal that already ran is visible** | With its dates. The person can see that it happened and when it was answered | Row `G4` |
| **`0.10` stays reachable** | Support is not part of the job and is not closed with it | Node `0.10` |
| **What happens to the frozen balance and the held items** | **`[?]`, and it is the largest open item in this cluster.** What is decided: never silently zeroed, and the disposition is stated in the notice rather than discovered | Row `G4` for the half that is decided. The rest: founder and counsel |
| **No re-application countdown, no status feed** | It is a record, not a channel. A dead end that updates becomes a thing to check | The limits rule in `CLAUDE.md` |

**This is not the dead end `0.3` forbids.** `0.3` forbids a system page with no route out. This is a deliberate red node in `flows.md`, approved there with its reason: the restriction stands, and what `G4` changes is what kind of red it is.

### 5.8 Trade offer expired {#5.8}

**Type:** state. **Scope:** MVP. **URL:** none. **Transition:** `5.3`, back into the offer stage.

**Resend from the same record rather than restart.** The map's own words, and the reason is the clock.

| Element | Behaviour | Parent |
|---|---|---|
| **The same record** | Same item, same receipt, same commission line, same history | Row `F2`, row `G1` |
| **The expired attempt stays in the history** | Not erased. **The elapsed is the evidence of how long this has taken**, and `G1` is measured on exactly that | Row `G1`, on `B8-2` |
| **Attribution is not reassigned** | The expired stretch stays labelled **waiting on you**. It is not quietly moved onto Steam or onto us | Row `G1` |
| **Why it expired** | Steam expires a trade offer after a period Steam sets. **`[?]`, and it carries a source and a date before it is printed** | `0.11` rule 9 |
| **Resend is one control** | It re-enters the offer stage. The limits are evaluated again because they can change, and if one now bites the person meets `5.4` with the record intact rather than a generic failure | Row `G5` |
| **A restart is refused** | A new record would reset the elapsed and lose the history, which is the one thing this page has that the category does not | Row `G1` |

**This state is the concrete case behind the hole in section 2.3.** A withdrawal that sat four days on the person and forty minutes on us is one number end to end and a different number by attribution, and nothing yet says which one our published p90 is.

**And it is the state that most needs a signal outside the page.** The global sweep already recorded that there is **no notification, email or push row anywhere in `cjm-to-be.md`**, and therefore no node. It is carried here in the same treatment, so that nobody later reports it as a discovery.

---

## 7. Components, CTA, emotional support, responsive

**Components.** `0.1` navigation in its account state. `0.2` footer, which by its own rule links no private transactional node and therefore never links back here. `0.5` toasts for transient confirmations such as an offer sent or resent, never the only place a state is announced. `0.6` skin card, rendering the same two dated figures it renders on `5.1`. `0.11` figure anatomy for the clock, the ceilings and the p90.

**Main CTA, and the deliberate absence of one.** Before the request: **Withdraw to Steam**, one control. **After the request there is no primary action at all**, because the next act belongs to us, to Steam or to the person inside Steam. A page whose main control during a wait is another action is a page that sells during a wait, and this is the phase at `-5`. The two exceptions are the states that need one: resend on `5.8`, appeal on `5.6`.

**Emotional support.** **None, and it is checked rather than assumed.** No row of the emotional and social table in `sitemap.md` places a mechanism on `S-E2`. Nothing is added for completeness.

**Responsive.** Mobile base 360px, one column. **The clock stacks vertically**, one stage per row, each carrying three labelled lines: owner, elapsed, ceiling. **Not a horizontal timeline**, which at 360px either scrolls sideways or drops the labels, and dropping the owner label deletes the whole of `G1`. Desktop keeps the vertical stack, because the stage list reads as a history rather than as a progress track, and places the record and the total in a column beside it.

---

## 8. SEO, inherited and reduced

**`5.3` is `noindex` with no schema and that was decided in `0.13`.** Inherited, not re-derived.

**A. Meta.** `title`: Withdraw. `robots`: `noindex`. `canonical`: self. `description`: none. **`hreflang`: none anywhere**, one language, locked. **No OG image and no Twitter card:** a pasted `/withdraw` link must not unfurl a transaction into a chat, which is the inverse of the reason `0.13` section 4.1 makes the unfurl a hard requirement on `7.1`.

**B. Headings.** One H1, Withdraw. H2 in block order: the record, the limits, the clock, our published times. The single H1 rule is structural and binds on an unindexed page.

**C. SEO body text.** None, and there is no query behind it.

**D. Structured data.** None.

**E. The checklist, and what survives.** Crawlable `<a>` for real routes, **text never in images** so a state and its elapsed can be pasted into a support ticket, LCP and Core Web Vitals under design principle 5, speed is trust, and one H1. On this page principle 5 is not a preference: **lag on the surface that reports a wait reads as the wait**.

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Whether withdrawal is a delivery or a purchase** | **The largest open item on this node and it arrived on 18 August 2026.** The live product charges the difference between the market price of a real copy and the site value of the win, section 0b. **Nothing in this map models it.** Two options, A inherit and disclose early, B refuse and rewrite the treasury. **A is recommended and neither is decided** | Founder, before stage 04 draws this node |
| **What p90 measures** | End to end, or only the stretches attributed to us. Section 2.3. **Not written anywhere today**, and the two answers diverge exactly where people complain | `0.11` and the founder, before stage 04 |
| **The rolling window length** | Seven days, thirty, ninety. Carried from `0.11`, where it is already `[?]`, because the window is part of the claim | Founder with the data |
| **Every per-state ceiling** | Row `G2` publishes a ceiling per state and no file holds a value. Five stages, five `[?]` | Founder with the data, before stage 04 |
| **The published appeal response deadline** | Row `G4` requires one and `0.11` carries it as `[?]`. It is also this page's ceiling for the appeal state | Founder |
| **Steam's trade offer expiry period** | A third-party fact. `[?]` until a page is opened and dated, per `0.11` rule 9 | Production, one sourced check |
| **Steam's trade hold duration** | Same class, same rule | Production, one sourced check |
| **The blocked market list** | `[?]` until re-verified against current law. `0.12` owns the register and counsel owns the verdicts under `D-A` | Counsel, under `D-A` |
| **What happens to a frozen balance and held items on an upheld restriction** | `5.7`. The largest hole in this cluster. Decided: never silently zeroed, and stated in the notice. Undecided: everything else | Founder and counsel |
| **Whether a balance can leave the platform at all** | `G6` withdraws an item to Steam. Nothing withdraws a balance. It decides how strong "frozen, not zeroed" actually is. Carried from `5.1` | Founder |
| **An out-of-product signal** | A withdrawal that runs for hours implies a message that reaches the person off the page, and **no notification, email or push row exists anywhere in `cjm-to-be.md`**. No parent, so no node. Recorded, not invented | Founder. One backlog row if yes |
| **The identity hole on the free-entry path** | `B1` gates funding, `B2` forbids the check at the exit, and a person who only ever used free entry meets neither. The proposed shape raises it at the outcome, with the item in hand. **Proposed and not drawn** | Counsel, under `D-A` |

**And what belongs elsewhere.** The words on every state and every control: stage 05. How a state, a ceiling or an owner label looks: stages 06 and 07. The values of every published figure: `0.11`, and `D-C` above all of them, which decides whether this class of number is published at all. The legal ground behind a blocked market: `0.12`. The appeal's own surface: `0.10`.
