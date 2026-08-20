# Node 2.7. Identity verification

**Type:** page. **Group:** `pages`. **Scope:** `LATER`. **Cluster:** 2, get through the door. **Alias:** `S-B3`.

> **Out of round 1 by `D-26`, 18 August 2026, and kept on the map rather than deleted.** The founder's ground is a walked fact: `research/docs/baseline-account.md` section 7 records the entire settings surface of the live product and there is no identity step anywhere in it. **The specification below is not withdrawn. It is parked**, and four costs travel with it in the open:
>
> 1. **The free-entry withdrawal hole stays open.** `D-A` recorded it: a person who only ever took free entries reaches a real withdrawal with no identity check. This node was the answer. Without it the hole is permanent rather than pending.
> 2. **The licence direction loses its enforcement point.** `D-23` chose the Isle of Man, and a tier one regulator requires identity **before withdrawal**. Memo `M2` would be asking a regulator about mechanics the design has removed.
> 3. **`D-17` locked two layers** and took the founder's own answer as "an addition, not as a replacement". Layer 1, the 18+ declaration, now sits enforced on `2.4`. **Layer 2 is this node and it is parked.**
> 4. **The sequence changed with the scope.** It was "before funding". It is now **before withdrawal**, which is where a regulator would put it anyway and which is what makes the parking survivable: round 1 has no withdrawal without it only because round 1 has no identity at all.
>
> **What reclaims it:** `D-23`'s licence route, or the first market row that requires it. Nothing else.

**Purpose.** Resolve identity once, **before withdrawal** since `D-26`, and never as a trap on the route out. The node is specified as a superset of both candidate methods so that one branch is deleted when `D-A` lands, rather than the whole node being redrawn.

**Jobs served.** None directly. `jtbd.md` records that registration reaches Core Job 3, withdraw cleanly, **only through rows `B1` and `B2`**, and those two rows are this node. **Parent class:** barrier `B8-4`, verification ambushes at the exit, pattern of 5 across 4 platforms, by way of row `B1`, verification resolved before funding, and row `B2`, no verification branch on the withdrawal route at all. Barrier class for both.

**URL.** `/verify-identity`. **Indexed:** no. Canonical self, no schema, no breadcrumb. `0.13` section 3.

**States:** `2.8` pending review and `2.9` failed with appeal and exit, both specified below under their own anchors.

**Transitions:** `2.8`, `2.9`, `4.1`.

**Reads `0.12`:** the identity document is evidence of where a person is, and `markets.md` section 5 rates it the strongest evidence the product ever sees. Section 4 below is what that costs.

**Cluster 2 is three screens nobody chooses to visit.** This is the one people describe in reviews.

---

## 0. The sequence is locked. The method is not

**The injury in the evidence is not the weight of the check.** `cjm-to-be.md` states it at T3: the injury is that **the check is a trap sprung after money is committed**. Barrier `B8-4`, in the platform's own users' words:

> *"lets you deposit without kyc requierements, after the deposit you need to send them your id?"*
>
> *"I withdrawled 1 item then i got hit with a verifacation process that cost $800 and they got my steam acount ban"*
>
> *"as im about to withdraw i get banned for ''being underage'' keep in mind i passed the kyc"*

**The last one is the sharpest in the whole corpus**: a person banned as a minor at cashout **after already passing KYC**. The check ran, passed, and then ran again at the exit with the opposite result and the money on the wrong side of it.

**So two rows ship together and neither works without the other:**

| Row | What it is | How it is proven |
|---|---|---|
| **`B1`** | Verification resolved before funding, with the account state shown on the deposit screen | Zero cases where a check first meets the user on the withdrawal route |
| **`B2`** | **No verification branch on the withdrawal route at all** | **By code review, not by a metric.** The withdrawal route contains no verification call |

**`B2` is a rule this node holds about a screen that is not this node.** `5.3` contains no call to `2.7`, in any state, including `2.9`. That is the sentence stage 04 has to be able to check, and it is why the row is marked a code rule rather than a feature.

---

## 1. The superset, and the test that makes it one

**`D-17` chose the shape and left the method to counsel.** The fast path is facial age estimation with document KYC as the escalation when estimation is inconclusive. The rival is document KYC for everyone. **The superset holds both**, so that the answer deletes a branch instead of a node.

| Element | Estimation with escalation | Document for everyone | In the superset |
|---|---|---|---|
| Step indicator | Yes, variable length | Yes, fixed length | Yes |
| Live capture step | Yes, step 1 | No | Yes, branch 1 only |
| Document upload step | On escalation only | Step 1 | Yes |
| One-time code card | `[?]`, branch dependent | `[?]`, branch dependent | Drawn, marked `[?]` |
| Review card, submit disabled until complete | Yes | Yes | Yes |
| **`2.8` pending review** | **Escalation path only** | **Main path** | Yes, its position differs |
| **`2.9` failed, appeal and exit** | Yes | Yes | Yes |
| Retention statement | Biometric, and it is the contested one | Document trove | Yes, contents differ |
| The always visible exit | Yes | Yes | Yes |

**The test of a real superset: deleting a branch deletes rows and never adds one.** Nothing above exists only because both branches are drawn. Run the test on either column and every remaining row still has a reason.

**The method's legal exposure, from `cjm-to-be.md` T3 rather than from anyone's judgement.** Facial age estimation is fast and recognised as effective in strict regimes, and it is contested biometric data under GDPR and under state statutes such as Illinois BIPA. Full document KYC before deposit removes the failure entirely, pays the largest conversion cost, **creates a document trove**, and may itself be read as the operator self-classifying as a gambling business in a category where that classification is unsettled. Payment-instrument attestation is nearly invisible, its coverage varies sharply by country, and `aarrr.md` Activation rules it out standing alone on a cited statute, the UK Online Safety Act of July 2025.

**Nothing above is chosen here.** `D-A` is counsel's, and picking a biometric vendor from an unresearched comparison is the median-instead-of-a-source failure this project's rules exist to prevent.

---

## 2. Where it fires, and where it may never fire

| | |
|---|---|
| **Fires** | Before funding, entered from `4.1`. `flows.md` flow 2: deposit, ceiling check, then the verification decision, then the amount |
| **Fires** | On a market re-evaluation when the document is read, section 4 |
| **Never fires** | On `5.3`, in any state, for any account, including one that failed at `2.9`. Row `B2` |
| **Never fires** | At `2.1`. `D-17` put the declaration there and the identity check here, and `sitemap.md` counts the tap that decision bought |

**The hole this node inherits and does not close.** `flows.md` flow 3 and `sitemap.md` both record it: **a person who only ever uses free entry**, the starter credit `I1` or the daily free case `I2`, **can reach withdrawal and take out a real skin without ever meeting an identity check**, because `B1` gates funding and `B2` forbids the check at the exit, and somebody who never funds never meets the gate.

**The shape that closes it without reopening `B8-4` is already proposed and deliberately not drawn:** raise the check **when the account first holds a withdrawable item**, at the outcome, so the person learns it with the item in hand and nothing lost, rather than at the exit with everything staked. It stays undrawn because it is a compliance decision riding on `D-A`, which counsel owns, and **drawing an unconfirmed legal route into the information architecture would be the median this project's rules exist to prevent.**

Carried here unchanged. Not solved, not softened, not quietly added as a block.

---

## 3. Blocks, mobile first

Composition from `blocks.md` section 5, T4. **That type has no competitor screens at all**, because all five hard competitors put deposit, withdrawal and identity behind login and this project never logs in. The substitutes are named there: public documentation of the same mechanics, the As-Is barriers, and Refero for the craft.

| # | Block | Traces to |
|---|---|---|
| 1 | **Step indicator.** How many steps, which one you are on | Refero Wealthsimple, `blocks.md` T4, taken explicitly so `2.7` can be drawn as a superset. The superset has a variable step count and a person is owed the number |
| 2 | **What is being asked and why, in one line**, with the reason being funding rather than us | `B8-4`. The barrier is a check whose reason arrived after the money. Naming the reason before the ask is the whole correction |
| 3 | **The account state strip:** what is resolved, what is not, what each one unlocks | Row `B1`, which requires the account state on the deposit screen. Here it is the same object before it is true |
| 4 | **The method block**, branch dependent, section 1 | `D-A`. Contents `[?]` |
| 5 | **The code card**, six digit code with submit, cancel, **resend** and **log out**, plus a support line | Refero New Balance, `blocks.md` T4, named there as "the craft floor for `2.7`". Whether a code exists at all is `[?]` and branch dependent; its four controls are not |
| 6 | **The review card, and submit disabled until complete** | Refero Wealthsimple, `blocks.md` T4 |
| 7 | **What we keep, and for how long** | The compliance constraint in `CLAUDE.md` read with `cjm-to-be.md` T3's document trove. **The retention period is `[?]`.** No competitor publishes this and it is the block the category does not have |
| 8 | **The exit that was open the whole time:** withdrawal is not behind this check | **Row `B2`, made visible instead of merely true.** A rule proven by code review is invisible to the person it was written for |
| 9 | **Support, with the published response deadline** | Row `G4`, routed through `0.10` |

**No block for:** a balance figure, a case image, a ticker, a bonus, a "you are almost there" celebration, or a progress bar that congratulates. **The step indicator counts steps. It never scores.** `0.11` rule 7: a number is never a score, no streaks, no progress, no celebration.

**Block 8 is the one most likely to be cut for tidiness and it is the one that answers the barrier.** `B2` is a code rule with no interface. A person standing in front of a check they may fail cannot read our code. Block 8 is where that rule becomes something they can see.

---

## 4. When the document says a different market

**The identity document is the strongest evidence the product ever sees**, `markets.md` section 5, and the register's precedence rule is that **later evidence overrides earlier**. So the case is designed rather than met: a person passes the IP gate at `2.1`, arrives here, and the document says a market the register does not open.

**That is not a failed check and it must not render as one.** `markets.md` section 7 holds the procedure and every step of it is already owned elsewhere:

1. Deposits stop. Opening stops.
2. **Withdrawal stays open**, `6.3`'s rule that withdrawal stays open under every boundary.
3. **The balance is frozen, never zeroed**, row `G4`.
4. Written notice with the ground, in words, `G4`.
5. An appeal with a published response deadline, routed through `0.10`.
6. The row moves to `closing`, then to `blocked` once the exit window ends. **The window length is `[?]`.**

**The outcome is `closing`, not `2.9`.** The person's identity was verified. It is the market that is refused, and telling them their identity failed would be false. Two different refusals with two different grounds, and merging them is the same defect as merging `blocked` with `not launched` at `2.2`.

---

## 5. States

| State | Node? | Behaviour |
|---|---|---|
| **Default, not started** | no | Section 3 |
| **In progress, per step** | no | Submit stays disabled until the step is complete, block 6 |
| **Submitting** | no | A parent-internal loading state, seconds not hours. It is not `2.8` |
| **Session expired or left mid-flow** | no | Returns the person **to the step they were on, never to step one**. See below |
| **Passed** | no | Routes to `4.1` with the account state visible there, row `B1` |
| **`2.8` pending review** | yes | Section 6 |
| **`2.9` failed, appeal and exit** | yes | Section 7 |
| **Market refused on the document** | no | Section 4. Renders `closing`, owned by `markets.md` section 7 |

### The states this node adds to the map, named rather than smuggled in

**Two**, and neither is a numbered node.

**Session expired or left mid-flow.** Its parent is design principle 5 in `CLAUDE.md`, quoted: "Speed is trust. Fast load, fast reveal, fast withdrawal status." Re-doing a completed step is time taken from a person for our convenience, on the screen where they are least willing to spend it. **Printed with its parent rather than assumed**, so that if the parent reads thin the state is cut rather than defended on taste.

**Market refused on the document.** It has a parent and it is not a new one: row `B4` and `markets.md` section 5's precedence rule. It is added here because the register named `2.7` as a consumer and no node had yet said what the consumer does with the answer.

---

## 6. State 2.8. Pending review

**Type:** state. **Scope:** MVP. **Parent:** `2.7`. **Transitions:** `2.7`.

**Hours rather than seconds, and it is the state only one branch has.** `D-17`: the asynchronous pending review is what document KYC has and estimation does not, and it "changes the shape of the flow rather than its screen count". Under branch 1 it sits on the escalation path only. Under branch 2 it sits on the main path and most people meet it.

**What it carries:**

| Requirement | Why |
|---|---|
| **Nothing is required of you now** | The first question a person in this state asks is whether they are the blocker |
| **A named waiting owner: us** | Row `G1` attributes every withdrawal state to us, to Steam or to the user. The same attribution applied here, because an unattributed wait is what `B8-2` is |
| **What happens if it runs past the published deadline**, and the route to `0.10` | Row `G4` |
| **The exit stays open**, block 8 | Row `B2`. It is true in this state too and this is the state where a person doubts it |
| **What is closed while it runs**, plainly: funding | Design principle 3, clarity at every risk moment. A person who does not know funding is closed will try to fund and meet a second refusal |

**Never a bare spinner, and never a frozen figure.** `0.11` rule 6: a failed source is marked degraded, never frozen at its last good value. Design principle 5 is the other half: lag reads as dishonesty on this platform specifically.

**The person may leave and come back.** The state is not lost, and it is not attached to a tab.

**The deadline is `[?]`, and it is a candidate row for `0.11` rather than a number invented here.** If a review deadline is published, it is a number this product publishes about itself, which is `0.11`'s definition, and `0.11` section 4 keeps proposed rows visible "so that nobody later ships one by assuming it was approved". This is registered as one.

---

## 7. State 2.9. Identity failed, appeal and exit

**Type:** state. **Scope:** MVP. **Parent:** `2.7`. **Transitions:** `5.3` stays open regardless, or funding closed with the ground on record.

**Two exits, and both were already owed.** `flows.md` records the correction that produced this state, and the correction came from a contradiction rather than from taste: **the failed check was drawn as an absolute dead end while row `B2` guarantees the withdrawal route carries no verification branch at all.** The diagram was contradicting a shipped capability. A person whose check fails can still take out what they already hold.

### 7.1 The three parts of `G4`, applied

| Part | Here |
|---|---|
| **Written notice with a stated ground** | In words, not a code, not a category label. The same rule `2.2` obeys for the geo ground |
| **The balance is frozen, not zeroed** | And the items are not taken. `B8-3`'s evidence is exactly this: *"They took my deposited skins and locked my account"*, *"my balance of over 160 coins was completely wiped out... they refused to provide any specific explanation"* |
| **An appeal with a published response deadline** | Routed through `0.10`. The deadline number is `[?]` and is `0.10`'s |

### 7.2 The withdrawal route is a block, not a footnote

**It is visible in the same viewport as the refusal at 360px.** That is the acceptance test for this state, and it is written as a test because the natural design instinct puts an exit link at the bottom of a refusal page.

**The sentence a person needs is short and it is the whole answer to `B8-4`:** what you already hold is still yours and still leaves. This check was about putting money in.

### 7.3 What it must never do

- **Ban, wipe or go silent.** Barrier `B8-3`, pattern of 3, and its injury is the silence rather than the restriction.
- **Refuse without a ground.** A ground the person cannot read is the same as no ground.
- **Present a verdict as final when an appeal exists**, or present an appeal as a formality when it is not.
- **Route to `5.3` through another check.** Row `B2`. The exit link goes to the exit.

### 7.4 Retry is open and is not decided here

Whether a second attempt at the check is allowed at all depends on the method and on what counsel permits, so it is `[?]`. **What is fixed: the appeal is the default route, and if a retry exists it is bounded rather than a loop.** And the shape is not `2.3`'s: an under-age declaration is a statement the person made, while a failed check is a claim about our evidence, and a claim about our evidence is exactly the kind of thing an appeal is for.

---

## 8. Components

**Used:** `0.1` in its account shape, four rail destinations and the money control in the header; `0.2` the footer; `0.5` toasts, which are never the only place a state here is announced, per `0.5`'s own rule.

**Not used:** `0.6`, `0.7`, `0.8`, `0.14`. No case object appears on this page in any state.

**The code card, the step indicator and the review card are candidates for the stage 07 inventory rather than IA nodes.** `4.1` and `5.3` are the same type, T4, and the global sweep's rule stands: a candidate with one consumer is not global. Named here so the overlap is visible when those two nodes are written.

**Nothing from the emotional and social table lives on this node**, checked against `sitemap.md` rather than assumed.

---

## 9. Adaptive behaviour

**One column at 360px, one column on desktop.** A verification form in two columns is a form that hides a required field beside a completed one.

**Order at 360px:** step indicator, why, then the current step. **The account state strip and the exit block sit at the end in the default state and move up in `2.8` and `2.9`**, because in those two states they are the answer rather than the context.

**The exit block is in the first viewport of `2.9` at 360px.** Section 7.2, and it is the one adaptive rule in this node that is an acceptance test rather than a layout note.

**A document upload at 360px is a camera capture in practice.** The design accommodates a person holding one device rather than a desktop with a file picker, and that is a stage 04 constraint stated here rather than discovered there.

---

## 10. SEO block, A to E

**A `noindex` page still gets this block**, in reduced form, because B is what stage 04 checks the block order against.

**A. Meta.**

| Field | Value |
|---|---|
| `title` | Verify your identity. CS2 Clutch (31 characters, under 60) |
| `description` | Identity is checked once, before you add money. It is never checked on the way out. (81 characters, under 155) |
| `canonical` | Self, `/verify-identity` |
| `robots` | `noindex`. `0.13` section 3 |
| `hreflang` | **None.** One language, `0.13` section 1 |
| OG and Twitter | **Absent.** Nothing here is shareable and nothing links here from outside |

**B. Headings.** One H1, and the H2 list is the block order.

- **H1:** Verify your identity
- **H2:** Why this is asked now
- **H2:** Your account state
- **H2:** `[?]` The method step, branch dependent under `D-A`
- **H2:** Check and submit
- **H2:** What we keep, and for how long
- **H2:** Withdrawing what you already hold

**C. SEO body text.** **None, correctly.** What the node owes instead is the information requirement: block 2's reason, block 7's retention statement, and block 8's exit sentence. Stage 05 writes the words and syncs them back here.

**D. Structured data.** **None.** `0.13` gives `2.7` no schema, and its section 7 rule is that markup describes what a page truly is.

**E. Checklist.**

- Exactly one H1. The `[?]` H2 resolves to one heading or to none when `D-A` lands, never to two.
- The exit route and the support route are crawlable `<a href>`, `0.13` section 8, which is also what makes them reachable by keyboard.
- **`noindex` is a meta tag and `/verify-identity` is not disallowed in `robots.txt`**, `0.13` section 4.5.
- The ground in `2.9` is text, never an image, so a person can paste it into a complaint and a screen reader can read it.
- Every control has an accessible name, and the step indicator announces the current step rather than only drawing it.
- No document, code or identity value is ever rendered into a URL.

---

## 11. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The method** | `D-A`. Facial age estimation with document escalation, or document KYC for everyone. Each carries a different legal exposure and `cjm-to-be.md` T3 lists all three | **Counsel**, and it is the decision this whole node is shaped around |
| **The retention period, and what is stored at all** | Block 7. It is the block the category does not have and its contents are `[?]`. Under the biometric branch it is the contested question rather than a detail | Counsel, then production |
| **The free-entry hole** | Section 2. A person who never funds never meets this check and can still withdraw. The closing shape is proposed and deliberately undrawn | Counsel, under `D-A`. Already named in `flows.md` and `sitemap.md` |
| **Whether a one-time code exists** | Block 5. Branch dependent, `[?]`. The card's four controls are the craft floor if it does | `D-A`, then production |
| **The published review deadline** | `2.8`. Registered as a candidate row for `0.11` rather than guessed | `0.10` for the service level, `0.11` if it is published |
| **Whether a failed check may be retried** | Section 7.4. It depends on the method and on what counsel permits | Counsel |
| **The exit window when a market closes** | Section 4, step 6. Nothing in this repository sets it | Founder with counsel. `markets.md` section 12 already carries it |
| **Minimum age and age method per open market** | This node inherits them from `0.12` and the first open market is the first row that needs them | Counsel, as each market opens |

**And what belongs elsewhere.** The wording of every string: stage 05. How the page looks: stages 06 and 07. The deposit screen that shows the resolved account state: `4.1`. The withdrawal route this node is forbidden to touch: `5.3`. The register whose verdict can override a passed check: `0.12`.
