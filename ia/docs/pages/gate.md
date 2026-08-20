# Node 2.1. Geo gate

**Type:** dialog. **Group:** `pages`. **Scope:** MVP. **Cluster:** 2, get through the door. **Alias:** `S-B1`.

**Rescoped on 18 August 2026 by `D-26`. The 18+ declaration left this node.** It now lives in the consent gate of `2.4`, as two separate checkboxes with the provider control inert until both are set. **What this node keeps is the market question**, which `D-23` requires a surface for, and the reasoning below is unchanged for that half. The paragraphs that argued the two questions belong together are kept and marked, because the argument was sound and the founder overrode it knowingly, and a deleted argument cannot be reread when the decision is revisited.

**Purpose.** Resolve one question once, at the first case interaction: is this market open. Nothing else is asked here, and the word only in "the 18+ declaration only" is about scope rather than about the number.

**Jobs served.** None of its own. **Parent class:** the compliance constraint in `CLAUDE.md`, quoted, **"a market allowlist closed by default, so a market with no row is `not launched`"**, `D-23`, by way of row `B3`, whose own parent cell also names barrier `B8-4`; and the compliance constraints "geo blocking informed by cited legal research" and "staged regional rollout resting on cited law", by way of row `B4`. Constraint class throughout, and that is the third of the three legal classes rather than an absence of a parent.

**URL.** None. It is a dialog and it renders at the URL the person is already on, which is `0.13` section 2's rule: a state has no URL of its own unless a person can arrive at it from outside, and nobody arrives at a gate from outside.

**States:** `2.2` geo blocked, specified below under its own anchor. **`2.3` under age was dissolved by `D-26` and its section is kept below, marked, rather than deleted.**

**Transitions:** `2.2`, back into `3.3`.

**Reads `0.12` rather than holding its own constants:** the verdict, the ground, the minimum age and the age method all come from the market row. Three of those four are values this node would otherwise have hard-coded, and `markets.md` section 2 records what that costs.

**Cluster 2 is three screens nobody chooses to visit.** This is the one that arrives uninvited, in the middle of somebody else's intention.

---

## 0. The one thing this node is not

**Identity verification.** `D-17` split age and identity into two layers: an 18+ self-declaration here, and identity verification before funding at `2.7`. The declaration is cheap on purpose and it meets every visitor at the door, where conversion is most fragile. The expensive check meets the person at the money moment, where they are already committed and where the law actually attaches.

**And the split has a second consequence that is measured rather than argued.** `sitemap.md` section "Depth to the main job, counted" puts the main job at three taps and the gate is one of them. **The compliance layer eats a third of the budget for the main job.** If identity verification sat at this tap the main job would be unreachable inside budget for a first-time visitor, which is why `D-19` records the two-layer split and the tap count as one decision rather than two.

**The honest limit, stated here rather than left for an audit to find.** A self-declaration is not verification. `aarrr.md` Activation already discarded soft and optional age gating standing alone, citing the UK Online Safety Act of July 2025, and `research.md` section 7 records that checkbox age confirmation stopped being lawful for gambling sites in the UK from 25 July 2025. The UK is blocked at launch, so nothing is broken today. **What breaks is the day a market opens whose age method field forbids a declaration**, and that is exactly why age method is a field in `0.12` rather than a constant in this node. `markets.md` section 2 states the same finding from the register's side.

---

## 1. When it fires, and why never on arrival

**At the first case interaction. Never on arrival.** Row `B3` says "before any case interaction", not before any interaction, and the difference is the whole pre-login argument: rows `A1` to `A5` exist so a visitor who arrives pre-suspected, barrier `B1-1`, can read the product before it starts asking for things. A gate on arrival blocks that evaluation and costs the same tap.

**The category does the opposite, and it was opened live.** `blocks.md` section 6 records Hellcase serving a **sign-in modal on arrival**, before any content, carrying Steam, Google and Telegram, a terms agreement, and **"I'm at the age of legal capacity (usually, 18 years) or older" as a checkbox inside it**. That is two barriers in one component: the trust evaluation cannot happen at all, and the age declaration is demoted to a line in a signup form. The bank's verdict is LEAVE, against `B3` and `D-17`.

**What counts as a first case interaction**, because the phrase decides where this dialog is wired:

| Fires | Does not fire |
|---|---|
| The open control on `3.3` | Opening a case page to read its drop table, its chances and its published RTP |
| Claiming the daily free case | Browsing `3.1`, filtering it, searching it |
| Accepting the starter credit offer `I1` | Reading `1.2` and using the verifier |
| Any control that commits the person to a roll | Reading `7.1`, `0.9`, `0.10`, `6.1` |

**Reading is never gated.** This is not a courtesy, it is architecture: `0.13` section 4.3 records that because the gate fires here rather than on arrival, every public surface stays readable by anyone from anywhere, crawler included, **without serving a crawler anything different from a person**. The competitor pattern of a login wall in front of the provably fair page is also an indexation wall. Ours does not exist, so cloaking is not needed and is not used.

**It never contends with the cookie banner.** `sitemap.md` records this under the global sweep: `0.4` fires on arrival, `2.1` fires at first case interaction, so the two interrupts never want the same moment. Recorded there and repeated here so nobody derives it a third time.

---

## 2. The order of the two checks, and why the market runs first

**Market first, then age. **The second half left with `D-26` and the argument is kept**.** Two reasons and both are structural rather than aesthetic.

1. **The minimum age is a property of the market row.** `0.12` section 1 makes minimum age and age method fields precisely because they are not universal: Belgium is 21 from 1 September 2024. We cannot ask the correct question before we know which row applies.
2. **Asking a person to declare their age and then refusing them the market spends their statement for nothing**, and collects a declaration we have no basis to hold. A refusal that arrives after a person has answered reads as a bait, which is the shape of barrier `B8-4` at a smaller scale.

**Precedence is not decided here.** `markets.md` section 5 fixes it once for the whole product: the strongest evidence available wins and later evidence overrides earlier. This node sees the weakest evidence, the IP address, and it says so rather than presenting a guess as a fact. The payment instrument at `4.1` and the identity document at `2.7` are stronger and they arrive later.

---

## 3. What this node reads, and what it must never hold

| Field read from `0.12` | What the gate does with it | If it is missing |
|---|---|---|
| **Verdict** | Decides which of the four person-facing paths runs, section 5 | Under `D-23` an allowlist denies. No row is `not launched` |
| **Minimum age** | Sets the number in the declaration | The market cannot be open, because `markets.md` section 3.7 keeps a row without it at `under review` |
| **Age method** | Decides whether a declaration is lawful here at all | Same as above |
| **Ground** | Becomes the readable sentence in `2.2` | A blocked row with no ground violates `B4`'s own success signal |

**This node holds no market list, no legal citation and no age constant.** A constant here is a second register that will disagree with the first one. `markets.md` section 12 closes with the same sentence from the other direction: what the gate asks is node `2.1`, which reads three fields from the register rather than holding its own.

---

## 4. Blocks, mobile first

A dialog gets a short list on purpose. Ordered as they stack at 360px.

| # | Block | Traces to |
|---|---|---|
| 1 | **What this is and why now**, one line. It names the case interaction that triggered it, so the interrupt is legible as a consequence of what the person just did | `B3`. Design principle 3 in `CLAUDE.md`, clarity at every risk moment |
| 2 | **The declaration**, one explicit control carrying the market's minimum age. Never pre-ticked, never implied by a Continue | `B3`, and `0.4`'s prior-consent rule read across: an interrupt that answers itself has not asked |
| 3 | **The decline control, at equal weight** | `0.4` in `sitemap.md`, "reject as easy as accept", which is a rule this product already applied to its other interrupt |
| 4 | **What happens with the answer**, one line: the declaration and its date are recorded, and no date of birth is collected here | `D-17`, layer 1 is a declaration. Collecting a birth date here would be layer 2 wearing layer 1's costume |
| 5 | **The 18+ statement and the route to `6.1`**, plus the age section of `0.9` | The compliance constraint, responsible play tooling. `0.2` already carries the same two in the trust strip and this is the moment they are relevant |

**No block for:** sign in, a case image, a balance, a bonus, a countdown, or anything that makes the interrupt feel like an offer. **Merging sign in into this dialog is the Hellcase pattern**, section 1, and it is the single most concrete LEAVE in the whole block bank.

**Dismissal is not a declaration.** Escape closes the dialog and returns the person to what they were reading. Nothing is recorded, and the gate fires again at the next case interaction.

---

## 5. States

Four verdicts reach this node, and two of the six in `markets.md` section 11 do not.

| Verdict | What the gate does | Where it is specified |
|---|---|---|
| **Open** | Runs the declaration. The normal case | Section 4 |
| **Staged** | Runs the declaration, plus the named limit in words and what changes it | Section 4, with the limit block appended |
| **Blocked** | `2.2`, narrower message | Section 7 |
| **Not launched** | `2.2`, default message | Section 7 |
| **Under review** | Behaves as its previous verdict and the person sees nothing new | `markets.md` section 11. Nothing renders |
| **Closing** | Not met here. A person in a closing market has money inside, and section 7 of `markets.md` routes the notice through the surfaces that hold it, `4.1`, `5.3` and the account. A person with no account in a closing market meets `blocked` | `markets.md` section 7 |

**The parent's own states**, none of which are numbered nodes in the map:

| State | Behaviour |
|---|---|
| **Default** | The declaration, unanswered, no control preselected |
| **Checking the market** | See section 6. It is a sixth internal loading state and it is declared rather than smuggled in |
| **Detection unavailable** | The geolocation lookup failed or returned nothing. **Under an allowlist a missing row denies**, `D-23`, so this renders the `not launched` message. Naming it matters: the tempting default is to fail open, and failing open is precisely the property `D-23` chose the allowlist to eliminate |
| **Declined** | The person chose the decline control, or pressed Escape. Returns them to what they were reading, records nothing, and is not a dead end |

**Declined and `2.3` are not the same event**, and the distinction is the whole reason `2.3` is a node. Declining to answer is a refusal to state anything. Declaring under age is a statement, and a statement we act on.

---

## 6. The state this node adds to the map, named rather than smuggled in

`sitemap.md` lists **five** loading states specified inside their parents: the Steam redirect, the reveal, the catalogue load, the payment in progress and the verifier recomputation. **This node needs a sixth and it was not on that list:** the market lookup between the case interaction and the dialog rendering.

It is declared here rather than added quietly, because the map's own rule is that a count grows on the record. It is **not** a numbered node: it has no copy of its own and no route out that differs from its parent, which is the map's stated test.

**Its one hard rule: it must not flash.** A gate that renders a spinner for a lookup that resolves in milliseconds has invented an interruption inside an interruption. The threshold below which it never renders is `[?]` and belongs to stage 04 with production timings, not to a guess here.

---

## 7. State 2.2. Geo blocked

**Type:** state. **Scope:** MVP. **Parent:** `2.1`. **Transitions:** none onward. **Dead end, by design.**

**Two messages, and `not launched` is the default.** `D-23` chose an allowlist, and its consequence lands on a state rather than on a paragraph: under a blocklist the person most likely to meet a refusal meets `blocked`; under an allowlist they meet `not launched`. `markets.md` sections 4 and 11 separate the two verdicts, and **merging them would state a legal verdict we do not hold**, in a product whose first design principle is that its claims are checkable.

### 7.1 The default: `not launched`

> **We do not serve this market yet.**
>
> Opening cases is not available where you are. We open a market only after a lawyer has reviewed it and signed the row, and nobody has reviewed this one yet. **That is a statement about us, not a legal verdict about your country.**
>
> You can still read every page here, including how each drop is proven. If you already have an account, your balance and your items stay yours, and withdrawal stays open.
>
> [Support] [How drops are proven]

### 7.2 The narrower case: `blocked`

> **We cannot serve this market.**
>
> The law where you are does not allow what this site does. `<the ground, in one readable sentence, from the row's Ground field>`
>
> The instrument and its source are on file. **If you are not in that market, support will look at it and answer inside `<published deadline>`.**
>
> You can still read every page here. If you already have an account, your balance and your items stay yours, and withdrawal stays open.
>
> [Support] [How drops are proven]

**The ground sentence is per market and comes from the register.** Where the row's ground is `[?]`, the row is not `blocked`, because `B4`'s success signal is that every blocked market carries a citation. A blocked row with no ground is a defect in the register, not a copy problem here.

### 7.3 The four rules this state obeys

From `markets.md` section 9, and they are the register's rules rather than this node's inventions:

1. **A reason, always.** "Not available in your country" with no ground reads as arbitrary because it is indistinguishable from arbitrary.
2. **Readable words, not a citation dump.** The instrument lives in the register. The person gets one sentence they can act on.
3. **What is still open, stated in the same breath.** Reading the site, the legal pages, support, and, where an account exists, the withdrawal. **A blocked market is a restriction on service, not an ejection from the building.**
4. **Never a soft 404 and never an error.** `0.3` holds the error surfaces and this is not one of them.

### 7.4 The response, and it is an HTTP fact rather than a preference

**200 with content. Never 404, never 403, never a redirect to an error page.** `markets.md` section 10 and `0.13` section 4.4 both hold this, and the reason is doubled: it is an answer rather than a missing page, and because the block is a state at the URL the person is already on, **there is nothing for a crawler to index and no market from which a crawler can be served the blocked page instead of the real one.**

`0.3` records the inverse failure live: Key-Drop returns HTTP 404 with the home page rendered in the body, so the person never learns the URL was wrong and the crawler drops the page. Both readers misled by one response. A geo block dressed as a 403 is the same defect pointed at a different audience.

### 7.5 A dead end for the right person is a success. For the wrong person it is a defect

`markets.md` section 6 states it and this node is where it becomes an interface. A geo verdict is a probabilistic guess presented as a fact and it will be wrong in both directions.

**Wrongly blocked** gets the route to `0.10`, which carries row `G4`'s pattern: a stated ground, and an appeal with a **published response deadline**. The deadline is `[?]` and it is owned by `0.10`, not invented here. A person genuinely inside an open market gets an answer inside it, not a form that goes nowhere.

**Wrongly allowed** is the expensive one and it is not this node's: later evidence at `4.1` or `2.7` moves the account to `closing`, and `markets.md` section 7 holds the procedure, including that **withdrawal stays open and the balance is frozen rather than zeroed.**

### 7.6 What this state must never say

- **"Blocked"** when the row is `not launched`. That is a legal verdict we do not hold.
- **A statute number as the whole message.** It is the ground's source, not the ground.
- **"Temporarily unavailable"** when nothing about it is temporary.
- **An error code**, a stack trace, or the word error.
- **A list of the markets that are open.** The footer's market statement is the public face of the register, `0.2`, and it is crawlable everywhere. This dialog answers one person's question, it does not publish the register.

---

## 8. State 2.3. Under age. **Dissolved by `D-26`, 18 August 2026, and kept for the argument**

**Why it is gone.** The age control is now two checkboxes on `2.4` that a person either ticks or does not. **A declaration you decline to make is not a refusal that can be recorded**, so there is no under-age event, nothing to store and no screen to draw. What replaces it is `2.4`'s own state, consent not given, where the provider controls stay inert and nothing is written.

**Why the section stays.** The distinction it drew, between declining to answer and declaring under 18, is the reason this node existed at all, and it is the first thing anyone will re-derive if the decision is revisited. **A deleted argument cannot be reread.**

### 8.1 The original specification, no longer built

**Type:** state. **Scope:** MVP. **Parent:** `2.1`. **Transitions:** none onward. **Dead end, by design, and no retry loop.**

**What it shows.** That the declaration closes case interaction on this device, what remains open, and the route to a person. Nothing else.

> **You told us you are under `<minimum age>`.**
>
> Opening cases is closed here from now on. We are not going to ask you again.
>
> Support is still there if you got here by mistake. So is our page on playing safely.
>
> [Support] [Playing safely]

**No route onward, and the loop is what the design is against.** A gate that can be re-answered by reloading is a gate that teaches the answer, and the second attempt is the one that gets it right. So the decline persists rather than resetting with the dialog. **How long it persists and what it is keyed to are `[?]`**, because both are production and privacy questions this repository has not researched. What is fixed here is that it is not one dialog dismissal.

**Never, and each has a reason rather than a preference:**

- **No "are you sure".** A confirmation on a refusal is a second attempt with better manners.
- **No countdown to eligibility, no "come back on your birthday", no saved date.** `CLAUDE.md`: a limit never acquires completion mechanics, streaks, status or a session score, and that rule binds this stage as much as 04, 07 and 11. A boundary with a timer on it is a scheduled invitation.
- **No date of birth field, here or in this state.** `D-17` made layer 1 a declaration. A birth date is layer 2 data collected at layer 1 prices.
- **No blame and no lecture.** `B8-3`'s evidence is what a person remembers about being refused, and its injury is not the refusal, it is "they refused to provide any specific explanation".

**What stays open, and why it is not everything.** Reading a public page is not a case interaction, so `1.2`, `0.9`, `6.1` and `0.10` remain reachable. Every case control does not. `6.1` and `0.10` are named in the copy because the one thing a person in this state might actually need is a route to a human.

**And a contrast that is load bearing for stage 04:** `2.5` Steam refused allows a retry and this state does not. A failed sign in is a fact about an identity provider. An under-age declaration is a statement the person made about themselves, and re-asking it is not a retry, it is coaching.

---

## 9. Components, and the one that is not a node

**Used:** nothing from the canonical set. This dialog renders no skin card `0.6`, no case tile `0.7`, no ticker `0.8` and no round proof `0.14`.

**The dialog shell itself is not an IA node**, and that was settled at the global sweep: the set the pack imagines, sign in plus confirm plus pick a place, is three dialogs in this product and each already has a home, `0.4`, `2.1` and `6.2` inside `6.1`. Whether `0.4` and `2.1` share one shell component is a stage 07 inventory question, not a map question. Named here so it is not rediscovered as a gap.

**Nothing from the emotional and social table lives on this node.** Checked against `sitemap.md` section "Emotional and social jobs: what carries them" rather than assumed: all four mechanisms sit on `S-A1`, `S-C2` and `S-G1`.

---

## 10. Adaptive behaviour

**360px is the base.** The dialog is a sheet rather than a centred card at this width, and the two controls stack. **They never differ in visual weight**, which is `0.4`'s reject-as-easy-as-accept rule applied to the second interrupt, and stacking is what stops the decline control from landing under a thumb that is already moving.

**The whole of blocks 1 to 3 fits above the fold at 360px without scrolling**, because a declaration a person has to scroll to find has been designed as an obstacle rather than a question. If it does not fit, block 5 moves below the fold, never block 3.

**Desktop** is the same order in a centred dialog, focus trapped, Escape closing it, and the page behind it dimmed rather than removed: what the person was reading is the context for why they are being asked.

`2.2` is not a dialog at 360px. They replace the dialog's content in place, because there is nothing to return to behind them.

---

## 11. SEO and accessibility

**No A to E block, and the reason is structural rather than an omission.** This node has no URL, so it has no row in `0.13` section 3, no canonical, no schema and nothing to index. What it owes SEO is three properties, and all three are already fixed elsewhere:

- **It does not fire on arrival**, so no public surface is gated for a person or a crawler, `0.13` section 4.3.
- **`2.2` returns 200 at the URL the person is already on**, so the block cannot be indexed and cannot be served in place of a real page, `0.13` section 4.4.
- **One language**, so no hreflang anywhere, `0.13` section 1.

**Accessibility, and two of these are compliance rather than craft:**

- **The ground is text**, never an image and never colour alone, `markets.md` section 10. A screen reader reads the reason and not only the refusal.
- **The declaration is a real control with an accessible name that states the age**, not a styled div and not a label the control does not carry.
- **Focus moves into the dialog on open and is trapped**, and returns to the control that triggered it on dismissal.
- **Escape closes it**, and closing records nothing.
- **The route out of `2.2` is a crawlable `<a href>`**, `0.13` section 8. A destination reachable only by script does not exist for a keyboard either.

---

## 12. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Every market verdict** | Each one is `[?]` until re-verified against current law. This node renders a verdict, it never takes one | Counsel, under `D-A`. `0.12` |
| **The published response deadline** | The number in `2.2`'s appeal sentence and in `2.9`'s. It is `G4`'s requirement and nothing in this repository sets the figure | `0.10`, then `0.11` if it becomes a published number |
| **How long the `2.3` decline persists, and what it is keyed to** | Session, device or account, and for how long. Both are production and privacy questions with no researched answer here | Production, with counsel on the privacy half |
| **The geolocation provider and its accuracy** | Detection quality decides how often the wrongly-blocked route in section 7.5 runs | Production. `[?]`, and `markets.md` section 12 already carries it |
| **The flash threshold for the market lookup** | Section 6. It needs a real timing, not a guess | Stage 04, with production timings |
| **Minimum age and age method per open market** | No market is open yet, so the first open row is the first one that needs them | Counsel, as each market opens |
| **The conversion cost of the gate** | Row `B3` says compliance rather than conversion, and the cost is measured separately with **target `[?]`**. It has had no target since the backlog was written | Founder. Carried in `CLAUDE.md` as one of the marks that travel with the backlog |

**And what belongs elsewhere.** The wording of every message: stage 05, which takes the drafts in sections 7 and 8 as a requirement of what information must be present rather than as final copy. How the dialog looks: stages 06 and 07. Where the market statement sits in the footer: `0.2`, already specified. The register itself: `0.12`.
