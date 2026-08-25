# Node 4.1. Deposit

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 4, put money in.
**States specified inside this file:** `4.2` ceiling reached this period, `4.3` ceiling raise pending 24 hours, `4.4` crediting with a named timer, `4.5` payment declined.

**Purpose.** Turn money into balance once, in coins with the rate on the screen, while the two numbers that decide what this costs and what it takes to get out again are on the screen before the payment rather than after it.

**Jobs served: none.** **Parent class: barrier**, `B4-3` a deposit that never credits, pattern of 4; `B4-1` the escalating deposit gate; `B7-4` the escalation loop, pattern of 12. Plus one compliance constraint from `CLAUDE.md`, "responsible play tooling (deposit limits, session limits, self exclusion, cool down)", which is what puts the responsible play entry on a money screen at all.

**URL:** `/deposit`. **Indexed:** no. **Canonical:** self. **Schema:** none. **Breadcrumb:** none. All four inherited from node `0.13`, section "The indexation register", and not re-derived here.

**Reached from:** the deposit control and the balance figure in the header, node `0.1`; the state-dependent strip on `1.1`; `3.3` when the balance will not cover an entry cost; and nothing else. **Nothing stands in front of this screen in round 1:** `2.7` did, and `D-26` took it out, section 1. **Never reached from the rail:** money is not a destination, `D-19`.

**Leads to:** `4.2` to `4.5` as its own states, `6.1` for the other three limits, `3.3` or `1.1` on credit, `5.3` which stays open in every state on this page, and `0.10` when a named window passes. **`2.7` was on this list and `D-26` took it off.**

**Baseline row, `4.1`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| Two numbered steps. Step 1: a partner promo code already applied, a country selector that filters the grid, then **17 fiat methods and 8 crypto**. Step 2 for card: amount, email, a terms checkbox, six presets, and a panel reading `Rate 1.00 = $1.00` with a standing **+5.00% bonus capped at 100 per 24 hours**. Crypto gives an address per network with a live rate and a minimum, and no amount field. `baseline-account.md` section 5b. | The two step shape, the published rate at the moment of funding, and the amount presets. | **No crediting time is published anywhere in that flow**, which is the whole of row `C3`, and the deposit history's most common status is REJECTED. **Ours publishes the window before the money moves.** The standing bonus and its header badge are refused, `0.1`. And one route, gift cards, leaves the product entirely to six third party resellers with no crediting story at all. |

---

## 0. The cluster that closes no job, and the two rules that bind it hardest

**This cluster closes no job and says so.** `ia/docs/sitemap.md`, cluster 4, and `ia/docs/flows.md` flow 2 both carry the sentence, and `jtbd.md`, section "Matrix Conclusion: 3 Jobs for MVP Core", is where it comes from: "Deposit closes none of the three core jobs, and registration reaches Core Job 3 only through B1 and B2. Both surfaces are justified by documented barriers and by the compliance constraints in `CLAUDE.md`, not by core jobs."

**Zero of the eight blocks below name a job as parent.** That is the finding rather than an omission, and it is worth one more line because there is a job standing nearby that looks like it would fit. `cjm-to-be.md` phase T4 names Related Job 2, complete the first open without friction, as the goal of the step. **Read in full, that job ends where this screen begins:** "so that I know what opening here actually feels like **before I deposit real money**", `jtbd.md` Related Job 2. A job whose own outcome clause stops at the deposit cannot parent a block on the deposit screen. So the parents stay barriers, and the screen exists because three documented pains recur without it.

**Two rules from `CLAUDE.md` bind this node harder than they bind any other page in the map.**

**Design principle 3, clarity at every risk moment:** "Where money is about to be spent, odds, cost and expected value are visible and legible. **Cost never hides inside excitement.**" On `3.3` that principle fights an animation. Here it fights nothing at all, which is why failing it here would be inexcusable: there is no reveal to compete with, only a form, and the whole cost of the transaction is knowable at the moment it is typed.

**The limits rule:** "A limit never acquires completion mechanics, streaks, status or a session score: at that point it stops being a boundary and becomes a reason to keep going." The spend ceiling `C2` is set on this screen, is reached on this screen, and is raised on this screen. **Three of the five nodes in this cluster are the limit doing something**, so this is the node where that rule is most likely to be broken by a well-meaning addition, and every state below carries its own forbidden list rather than a reference to this paragraph.

---

## 1. The identity branch is `LATER`, and what that deletes from this screen

**`D-26` took `2.7`, `2.8` and `2.9` out of round 1 on 18 August 2026, and this section had not been amended.** It read "Reached through `2.7`" and routed the deposit through a check the product does not have, on the strength of a sequence the same decision reversed. `sitemap.md` row `2.7` carries the deferral, `CLAUDE.md` carries it in the compliance paragraph, and `identity.md` carries it with four costs printed at the top of the file. **Three files held the new rule and this one went on stating the old one.** Found on the stage 04 drawing pass, and it is the fifth node in a row where a decision reached a header and not a body.

**What round 1 does, in one line.** An account reaches this screen and the form renders. There is no verification step, no verification state, no branch and no greyed-out form waiting for one. All four numbered states below are reachable and none of them is an identity state.

**The part that is not a deletion, and it is the reason this section stays instead of shrinking to a sentence.** Before `D-26` the sequence was two rules: the check resolves **before funding**, row `B1`, and the exit carries no branch at all, row `B2`. Together they let block 1 promise that the way out is never checked, and this section used to call that "the surface where `B2` becomes readable". **`D-26` moved the surviving layer from before funding to before withdrawal**, `identity.md` purpose line and its cost 4. So the promise cannot be made on this screen any more: the only identity layer the map still holds is the one that would stand on the way out.

**`B2` survives and its reading narrows, and the narrowing is in the repository rather than invented here.** `flows.md` flow 3 already proposes the shape that closes the free-entry hole without reopening `B8-4`: raise the check **when the account first holds a withdrawable item**, at the outcome, "so the person learns it with the item in hand and nothing lost rather than at the exit with everything staked". **A check resolved before a withdrawal is attempted is not a branch inside the exit.** That is the only reading on which `B2` and `2.7`'s new placement can both be true, and it is proposed rather than drawn, because it rides on `D-A` and counsel owns it.

| Arriving state | What `4.1` does in round 1 | Status |
|---|---|---|
| Account exists | Renders the form. **This is the only arriving state round 1 has** | Drawn |
| Identity unresolved | Nothing. There is no identity to resolve | **Parked with `2.7`**, `D-26` |
| Identity failed, appeal open | Nothing. **Kept in the state table below rather than deleted**, so the hole stays where a reader meets it | **Parked with `2.9`**, `D-26` |

**And what block 1 says instead.** The account state, and funding open. **It does not promise anything about the exit**, in either direction. Stating "the exit carries no check" would be true today and would become false the day layer 2 lands, which is `B4-1`'s shape applied to a condition instead of to a number: something the exit demands that was not named before the money went in. **Stating that a check may arrive later is the other half of the same problem** and it is a product-copy call with a compliance edge, so it is an open item in section 12 with the founder as owner rather than a block drawn on a guess.

---

## 2. Block order, reasoned from 360px

Composition taken from `ia/docs/blocks.md` section 5, T4 Transactional form with named states, `TAKE` rows only, plus what the barriers of this node require. **Nothing was added silently:** every row names its parent and the two blocks that are not in the bank as blocks are marked as such.

| # | Block | What it holds | Parent | First screen at 360px |
|---|---|---|---|---|
| 1 | **H1 and account state** | The page's job in words, plus funding open. **The exit promise left this block with `D-26`**, section 1 | `B8-4` directly. `B1` and `B2` were the parents and both are parked with `2.7`, so the block answers the barrier without the two rows that used to stand between | Yes |
| 2 | **Amount, and the rate beside it** | One input. **Since `D-28` this block is where the conversion lives rather than where it is forbidden:** the person types in real money, the coins it buys render beside it, and the rate is published with its as-of | `C1` as `D-28` rewrote it, still on `B7-1` pattern of 7, plus `0.11` rule 10 | Yes |
| 3 | **Spend ceiling for a named period** | Pre-filled with the amount just typed, period selector, and the asymmetry stated in the interface: lowering applies immediately, raising waits 24 hours | `C2`, on `B7-4` pattern of 12 | Yes |
| 4 | **The other three limits live on `6.1`** | One plain line, one link, to session limit, cool down and self exclusion | `C5`, and the compliance constraint quoted above | Partly |
| 5 | **Withdrawal threshold** | The sum required to withdraw, stated here, frozen from this moment, and never able to rise | `C4`, on `B4-1` | No, and section 5 explains why that is not a demotion |
| 6 | **Payment methods** | Cards, one per method, **with every exclusion printed on the card it excludes**, and an empty state for the first deposit | `B4-3`, plus the bank's Navan and Hellcase FAQ rows | No |
| 7 | **What happens after you pay** | The crediting window as a published number, stated **before** the payment, and what to do if it passes | `C3`, on `B4-3` pattern of 4, plus design principle 3 | No |
| 8 | **Persistent summary and the one control** | Amount, ceiling in force after this deposit, withdrawal threshold, total charged. Docked, so it is on screen while blocks 5 to 7 are read | Design principle 3, and the Fresha row in the bank, which traces to `C2` | **Persistent**, see below |
| 9 | Footer, node `0.2` | Trust strip, 18+, responsible play, market statement | `0.2` | No |

**Block 8 is not in the scroll order.** It docks to the bottom edge at 360px from the moment an amount exists, and it is the right column on desktop. In the document it sits after block 7, so that a person reading linearly, with a screen reader or with styles off, meets the summary after everything it summarises rather than before.

**Why this order and not the category's.** The category's order is method, then amount, then pay. Ours puts the amount first because the ceiling is pre-filled from it, `cjm-to-be.md` T4: "the amount just typed is pre-filled as a ceiling with a period selector". **A method chosen before an amount makes the ceiling arrive as an interruption at the end**, which is exactly the shape that turns a brake into an obstacle. The two brakes therefore sit between the amount and the method, in the gap where a person is deciding rather than committing.

**One block the bank has and this page does not.** The step indicator from the Wealthsimple row. This is one screen with one control, so a step indicator would be drawing a process that does not exist. It stays with `2.7`, where the branch that needs it lives, and that node already names the overlap: the code card, the step indicator and the review card are shared T4 candidates for the stage 07 inventory rather than IA nodes, since a candidate with one consumer is not global.

---

## 2b. Amended 25 August 2026 by `D-94`. A block for the bonus, and the promise the badge makes

**Founder decision.** The header's deposit control carries a standing `5%` badge, `navigation.md` rule 4, reversed there. **This node owns the other half of it.**

**Block 2b sits between the amount and the ceiling**, and the position is the argument. The founder's own wording is that we lead a person from the control to the deposit screen: **a percentage advertised on a persistent control and not restated where the money goes in is a condition that arrives after the decision instead of before it**, which is the shape `B4-1` describes.

| What the block states | Why it is here and not in a footnote |
|---|---|
| **+5.00% in coins on top of what you put in** | The badge can hold this and nothing else |
| **Up to 100 coins per 24 hours** | **The cap is the half the circle cannot carry.** A rate whose limit is discoverable only at the end of the form is the rising threshold with the sign reversed |
| **Every deposit, not the first only** | `cjm-to-be.md` cut a **first-deposit** bonus. This is a standing one, `baseline-account.md` section 5b.2, and calling it the wrong thing on the screen would be the third rendering of a fact |
| **No wagering requirement** | `C4`. The coins it adds behave like every other coin, and **what it takes to withdraw does not move because of it** |

**One declaration, two surfaces.** The number lives once, in `WF_BONUS`, and both the badge and this block read it. **This project has already shipped two renderings of one fact across seventy-two pages**, and a promotional percentage that disagreed with itself between the control and the screen would be that defect on the surface where money moves.

**The bonus is a line in the summary and never a badge on it**, which is the rule `5.3` already runs on a commission of zero: a badge asserts, a line in a sum gets checked. It sits below the fee and above the ceiling, because it is part of what the transaction does rather than part of what it costs.

**And the coins figure cannot be drawn.** Five per cent of the amount is a coin figure and **1 coin in real money is not published**, so the block states the rate in full and marks the one number it cannot compute. **This is now the most expensive place that hole sits:** a person is being offered something they cannot size.

**What this node still refuses.** No animation on the badge, no pulse, no count, no streak, and no rendering anywhere of a bonus total accumulated. `CLAUDE.md`'s limits rule is one level over and the instinct is the same: **an offer never becomes a score.**

---

## 2c. Amended 25 August 2026 by `D-95`. The peg is published, and this screen stops being the one an absence empties

**Founder decision: one coin is $1.00.** `baseline-account.md` section 5b.2 walked the live product publishing exactly that at exactly this step on 18 August 2026.

**This node carried the sharpest version of that hole**, and its own section 3.1 said so: every other surface prints a coin figure and marks the rate missing beside it, while here **the conversion is the block**. Both halves of the pair were unknown, so block 2 rendered "Cannot be shown" and the screen could not tell a person what they were getting for their money. **`D-94` then put a second one beside it**, because five per cent of an unpriced amount is also unpriceable.

| Block 2 and 2b | Before | After |
|---|---|---|
| The amount's unit | `real money, currency not set` | **US dollars** |
| The presets | four empty slots | **`$5` `$10` `$20` `$50` `$100` `$200`**, the baseline's own six |
| What it buys | Cannot be shown | **40.00 coins**, at 1 coin = $1.00 |
| What the bonus adds | Cannot be shown | **2.00 coins**, with the cap named as not binding here |
| The summary | two figures marked `unit not set` | **`$40.00` in, `2.00 coins` added, `$40.00` charged** |

**The rate carries no as-of and that is deliberate.** `0.11` rule 2 wants a time on every figure because a figure with no time is read as current forever. **A peg is not a market read**: it is a fixed rate we set, so what it owes is a promise rather than a timestamp, and the screen makes it, if it ever changes we say so before you spend against it. **An as-of on a peg would say it moves.**

**What is still `[?]` on this block:** the fee. A fee is not the peg and adopting one did not produce the other, so the summary still carries `Fee: not published`, and the rule stands that if the total ever differs from the typed amount both are shown.

---

## 3. The four capabilities, and what makes each one a brake rather than a setting

### 3.1 `C1`. The coin, and the rate that has to be on this screen

**Parent:** `B7-1`, pattern of 7 across 3 platforms, the win that turned out to be worth less than it looked. **Rewritten on 19 August 2026 by `D-28`**, which reversed `C1` and printed in its own record that this row was the whole structural answer to that pattern. `cjm-to-be.md` now marks `C1` "MVP, architecture" with the acceptance rule "no coin figure renders anywhere without the peg beside it at the moment of spending".

**What it now deletes, and it is a much smaller thing than before.** The baseline runs an internal coin denomination **with no visible conversion rate**, `baseline.md` section 4, where case prices are quoted from 0.53 to 161.36 coins. **`D-28` takes the denomination and refuses the second half.** Every competitor in the bank runs the same abstraction: Clash.gg in Gems, Hellcase in a bare number with no unit at all, Key-Drop in local currency, `blocks.md` section 5, **and not one of them publishes a rate at the moment of spending.**

**So the divergence moved rather than disappeared.** It used to be the unit. It is now the rate: a coin with a published, timestamped rate against real money, on this screen where the conversion actually happens and on `3.3` where it is spent. A second currency still hides the price when nobody can convert it, and a hidden price is still what lets a payout wear a label that is not a price. **`D-28` accepted the unit and kept the argument.**

**What it means on this screen, concretely, and this paragraph said the opposite until 22 August 2026.** It read: "one input, one unit, one number. No conversion preview, no 'you will receive'... a deposit screen that prints two numbers with two units is the defect." **That is the pre-`D-28` rule**, and block 2 of section 2, the summary in section 5 and the responsive note in section 9 had all carried the post-`D-28` one since 19 August. The file argued with itself across four sections and the drawing pass is what made it visible.

**What holds.** One editable input, in real money. The coins it buys render beside it and are never a second field. The rate is published with its as-of. **What survives from the old wording is the half that was never about the unit:** no bonus units, no rounding to a package, and no third figure made out of the two. The defect was never two units. It was two numbers a person cannot get from one another, and the peg is what makes them one number read twice.

### 3.2 `C2`. The spend ceiling, and the asymmetry that makes it a brake

**Parent:** `B7-4`, the escalation loop, pattern of 12 who gave a concrete figure unprompted. Figures in the As-Is ledger run from 350 dollars to 50,000 dollars on a single site.

**The mechanism, from `cjm-to-be.md` T4 verbatim:** "the amount just typed is pre-filled as a ceiling with a period selector, the deposit cannot be submitted until the user accepts or changes it, lowering it applies immediately and raising it applies 24 hours later. When the ceiling is reached, deposits stop while opening from existing balance and withdrawal stay fully open."

**Four properties, and each one is load bearing.**

1. **Pre-filled from the amount just typed.** Not from a default we chose, and not from a list of suggested tiers. `cjm-to-be.md` is precise about why this binds where a terms page does not: "one tap on a number they chose themselves, at the one moment they are calm."
2. **Blocking, and it is the only blocking element on the page.** The control does not submit until the ceiling is accepted or changed. This is the Wealthsimple pattern in the bank, submit disabled until the condition is met, used once and for the one thing that earns it.
3. **The asymmetry is stated in the interface, not in terms.** Lowering applies immediately. Raising waits 24 hours. **No competitor has this**, `blocks.md` section 5, and a ceiling that can be raised on impulse in the moment it binds is a setting rather than a brake.
4. **It is never a score.** No progress bar toward it, no share of it consumed, no periods survived. See the forbidden list under `4.2`.

**Per period, not per deposit, and this node was asked the question by name.** Node `6.1` carries it as an open item with the owner stated: "whether the spend ceiling is per deposit, per period, or both... Node `4.1`, which owns the moment the ceiling is set". **Answered here from the map rather than by preference: one ceiling is in force at a time and it belongs to the named period.** A ceiling that reset per deposit could never be reached, and `4.2`, ceiling reached this period, is a numbered node in `sitemap.md`, so that reading is already excluded by the map.

**What that makes the second deposit inside one period.** The pre-fill still offers the amount just typed, because that is `C2`'s mechanism, and **the pre-filled value is then a change to the ceiling in force and takes the direction rule with it.** Below the current ceiling it applies immediately. Above it, it is a raise and waits 24 hours while the old ceiling holds, which is state `4.3`. **Without this line the second deposit of a session would quietly raise the ceiling by being typed**, which is the exact behaviour `C2` exists to prevent.

**The cost, carried openly rather than discovered later.** `cjm-to-be.md`: this caps the second and third deposit of a losing session, "so the cost lands almost entirely on the top revenue decile", and a user blocked for 24 hours can deposit somewhere with no delay, so what is at risk is the account and not one deposit. That is on the record at the CJM stage and this node does not soften it.

### 3.3 `C4`. The withdrawal threshold, stated here and never rising

**Parent:** `B4-1`, one full narrative, quoted in `cjm-as-is.md` at length because it is the whole phase in one voice: a threshold that went from 5 dollars to 12 to 15 while the person kept depositing to reach it. `cjm-to-be.md` marks `C4` "MVP, rule" with the acceptance rule "no withdrawal ever demands a sum that was not named before the money went in".

**The exit is priced where the entry is paid.** `blocks.md` section 5 records this as the block the category most consistently omits, and `blocks.md` section 2 already put the same rule on Home: the payment method strip is inherited from Clash.gg "and ours names the withdrawal threshold in the same breath".

**Three properties.**

- **Stated before the payment, on this screen, in the summary.** Not on `5.3`, not in a policy, not on first attempt to withdraw.
- **Frozen at this moment.** The figure stated at this deposit is the figure that applies to what this deposit funds. A later change may lower it and may never raise it, for money already in.
- **A bonus with a wagering requirement cannot ship beside it, and that half is untouched.** `cjm-to-be.md` answer 3: "a wagering requirement is `B4-1` in better clothes and it contradicts C4 directly". **Amended 25 August 2026 by `D-94`, and only the second sentence moved.** A standing bonus **does** ship, at +5.00% capped at 100 coins per 24 hours, and it ships **with zero wagering**, so `C4` holds unchanged: the coins it adds behave like every other coin and the withdrawal threshold does not move because of it. `navigation.md` rule 4 carries the reversal on the header control, which now runs the badge with the cap in its accessible name.

### 3.4 `C3`. The crediting window, in the interface rather than in an FAQ

**Parent:** `B4-3`, money leaves and does not arrive, pattern of 4 across 3 platforms. From the As-Is evidence: "I've deposited $25 throw Crypto, nothing. I've waited a few hours, nothing... The ticket is closed, still $0 added to balance."

**The substitute source found the rule living in a document.** `blocks.md` section 5, from Hellcase's public FAQ opened live on 12 August 2026: "Your payment might be delayed for 5-10 minutes. If funds didn't get transferred within an hour, contact support." **The timing exists and it is real product behaviour. It is just not in the product.** The bank's verdict is `DIFFERENT`: ours is a named state with the timer in the interface, which is the whole of `C3`.

**On this screen, before the payment**, block 7 states the window and what happens if it passes. **After the payment**, state `4.4` is that window running. A person who has to open a help page to learn how long their money is missing has already met `B4-3`.

**Our own number is `[?]`, and the register that should hold it has no row for it.** See section 8.

---

## 4. Method cards, exclusions, and the empty first deposit

**No competitor screen of this type exists that we may open.** `blocks.md` section 0 declares the gap before the tables: deposit, withdrawal and identity verification are behind login on all five hard competitors, and this project never logs in. The substitute is public documentation plus the As-Is barriers plus Refero for the craft. **This section inherits that gap rather than covering it**, which is why the method list itself is `[?]` instead of a plausible list of five.

**The craft, from the bank.** Payment methods as cards with an empty state, Refero Navan `803e703a`: "the empty first deposit is the common case and is designed rather than met."

**The rule this node adds, and it comes from an FAQ.** Hellcase publishes "Steam Balance is not appropriate on this site" **only in its FAQ**, `blocks.md` section 5. The bank's verdict is to take the disclosure and place it earlier. Written as a rule:

> **An exclusion renders on the card of the method it excludes, in the same block, before the method is chosen. A document may repeat an exclusion. A document may never be the only place it exists.**

`blocks.md` section 8 states the general form of this on the `0.9` and `0.10` pass: "a rule a person meets in the product is stated in the product. The FAQ repeats it, it does not own it."

**Empty state, first deposit.** No saved methods is the normal case for the account this screen is designed for, since `flows.md` flow 2 opens on "the starter credit is spent and they want to keep opening". The empty state is the default composition of block 6, and the populated state is the variant. **Stated in that order deliberately:** a screen designed for the returning depositor and patched for the first one puts its worst layout in front of the person with the least reason to trust it.

**What is `[?]` and stays `[?]`:** the method list, any fee, any minimum, any maximum per method, and whether a method carries its own crediting window different from the published one. `baseline.md` section 2 records deposit as `[?]` with no pre-login route found, and no source in this repository names a method. **None of these is invented here**, and block 6 is specified as a shape with an unknown list, which is a drawable instruction: one card per method, exclusions on the card, empty state first.

---

## 5. The persistent summary, and the single control

**Craft parent:** Refero Fresha `3d6c5b9f` in the bank, "persistent summary card carrying the total, beside the choice, with a full width continue", verdict `TAKE`, traced to `C2` and design principle 3: "cost stays on screen while the choice is made rather than appearing after it."

**Four figures, and they are the answer to why block 5 is not on the first screen.** The withdrawal threshold sits fifth in the scroll order and **is on the first screen anyway**, because the summary docks and carries it. The block below is the full statement with its rule; the summary is the figure, present continuously from the moment an amount exists.

| Line in the summary | Where the number comes from | Rule it carries |
|---|---|---|
| Amount | Block 2 | Real money in, coins out, and the rate with its as-of, `C1` as `D-28` rewrote it |
| Total charged | Amount plus any fee. **Fee is `[?]`** | If the two ever differ, both are shown. A total that silently differs from the typed amount is the defect |
| Ceiling in force after this deposit | Block 3, and `4.3` if a raise is pending | The value in force **now**, never the pending one, `4.3` |
| Withdrawal threshold | Block 5 | Frozen at this moment, `C4` |

**One control, and one next step.** The primary control submits the deposit, and it is inert until the ceiling is accepted or changed. **Nothing else on this page is a primary control.** The responsible play entry is a link, the method cards are a choice inside block 6, and the amount presets, if any ship, are inputs into block 2 rather than actions.

**Two things the summary must never do.** It never sums the deposit with the value of items held, which is `navigation.md` rule 2 applied one level down: they are different kinds, and a combined figure reads as net worth. And it never renders a projected balance as an achievement, a tier or a threshold crossed.

---

## 6. Components

| Component | Where | Variant |
|---|---|---|
| Navigation `0.1` | Shell | Account exists. The deposit control in the header is the current destination and reads as such |
| Footer `0.2` | Below the form | Full, one account state |
| Toasts `0.5` | `aria-live` region | Never the only place a state is announced, which binds `4.4` and `4.5` |
| Money figure, from `0.11` section 8 | Summary, ceiling, threshold | Value, unit and caption, as-of where the class requires it, route where one exists |
| Live feed `0.8` | Shell, since `D-59` | Full, **except on `4.2`**, and that exception is this node's and is printed as a finding to `0.8` in section 12. `D-59` put the feed on every page and the argument was that a strip identical everywhere becomes furniture. **`4.2`'s own forbidden list already says "no offer of any kind"**, and a run of other people's wins beside a reached ceiling is an offer with a scroll on it |
| Confirmation dialog | Not here | The Parallel destructive-confirmation row in the bank belongs to `6.2`. **A deposit is not confirmed twice**, and asking twice would be a friction tax dressed as care |

---

## 7. States

**Page-level states first**, then the four numbered nodes. A state is a numbered node when it has its own copy, its own route out and a specification that differs from the page's default, `sitemap.md`, "Which states became nodes, and which did not".

| State | What the page does | Node |
|---|---|---|
| Guest, no account | Never rendered. Routes to `2.4` | `2.4` |
| Identity unresolved | **Does not exist in round 1**, `D-26`. Kept on this table rather than deleted, so the hole is met where a reader is already looking | `2.7`, parked |
| Identity failed, appeal open | **Does not exist in round 1**, `D-26`. Same treatment | `2.9`, parked |
| First deposit, no saved method | The default composition of block 6, not a fallback | inside `4.1` |
| Payment in progress | The page's own skeleton on the control only. **Specified inside this node rather than as a node**, per the five listed in `sitemap.md` | inside `4.1` |
| Ceiling reached this period | Deposits stop | **`4.2`** |
| Ceiling raise pending | The old ceiling holds | **`4.3`** |
| Crediting | Named state with a timer | **`4.4`** |
| Payment declined | Ceiling and threshold preserved | **`4.5`** |
| Boundary in force, `6.3` | Deposits close, opening closes, **withdrawal stays open**. The money control opens to the limits rather than to add funds | `6.3` |
| Market closing on the payment instrument | Deposits stop, exit stays open, written ground, appeal route | `0.12` section 7 |

---

<a id="4.2"></a>
### `4.2` Ceiling reached this period

**Type:** state. **Scope:** MVP. **Parent:** `C2`, on `B7-4`, plus the limits rule in `CLAUDE.md`. **Route out: none for this flow, by design.**

**This is the node the whole cluster is for.** `flows.md` flow 2 draws it as one of four deliberate red nodes in the file and explains the colour: "`Stop` is the ceiling doing its job. It is red because this flow's goal is more balance and there is no path to it this period. It is not a failure."

**What is closed, and what is open.** Deposits stop. **Opening from existing balance stays fully open. Withdrawal stays fully open.** Both are stated on the screen rather than left to be discovered, because a person who reads "you have reached your limit" and assumes the account is frozen has been given a worse answer than the truth.

| What it shows | Why |
|---|---|
| The ceiling, its period, and that it is reached | The fact, in the person's own number |
| The moment the period resets, **as a stated date and time, never as a live countdown** | A ticking counter beside a disabled deposit control is an invitation with a timer on it. The reset is information a person needs in order to plan, and it stops being that the moment it moves |
| The route into `3.3`, opening from the balance they already hold | Open, and saying so is not encouragement, it is the true state |
| The route into `5.3`, withdrawal | Open in every state on this page |
| The route into `6.1`, **where the ceiling can be lowered further and takes effect immediately** | `C2`'s asymmetry, and `flows.md` flow 2a: "lowering applies immediately" |
| That raising the ceiling from here **will not lift this period's stop**, because a raise waits 24 hours | Otherwise the person spends the moment discovering the rule instead of being told it |

**Forbidden on this state, enumerated rather than referenced.** `CLAUDE.md`: "A limit never acquires completion mechanics, streaks, status or a session score."

- No progress bar, ring, meter or fill of any kind, whether it shows what is consumed or what is left.
- No streak of periods that ended inside the ceiling. No count of them. No badge.
- No status, tier, level or label attached to the person for having a ceiling or for reaching one.
- No session score, no session summary, no total for the period presented as a result.
- **No congratulation and no encouragement.** "Well done for staying in control" turns a boundary into a thing that can be won at, and the next move after winning is playing again.
- No countdown to the reset, per the table above.
- No offer of any kind: no alternative funding route, no reminder when the period resets, no invitation to raise the ceiling with the raise pre-filled.

**The one thing that is easy to get wrong and is not on the forbidden list.** The screen may state the ceiling and the period, because those are the facts of the boundary the person set. **What it may not do is present them as a quantity of anything.** The difference is between "your ceiling is X for this period and it is reached" and any rendering where X is a capacity with a level in it.

---

<a id="4.3"></a>
### `4.3` Ceiling raise pending 24 hours

**Type:** state. **Scope:** MVP. **Parent:** `C2`, on `B7-4`. **Route out:** `4.1`.

**The old ceiling holds until then**, and that is the entire content of the state. `flows.md` records that this state was in no flow until step 6 and says what its absence would have cost: "without that state a later stage would write the ceiling as instantaneous in both directions, which deletes the whole point of it."

| What it shows | Rule |
|---|---|
| The ceiling **in force now**, which is the old one | The summary in section 5 always carries the value in force, never the pending one |
| The pending value and the moment it takes effect, as a stated moment | Same rule as `4.2`: a moment, not a live counter |
| That lowering still applies immediately, **including cancelling this raise** | **Derived, and stated because nothing else in the repository says it:** cancelling a pending raise is a lowering, so it takes effect immediately, at any time, with no second wait |
| That deposits inside the current ceiling continue normally | A pending raise does not freeze funding. It only fails to enlarge it |

**Forbidden.** No countdown as anticipation. No "your new limit unlocks in", which frames a brake as a reward arriving. No notification when it lands that carries a route back into depositing: **the raise taking effect is not an event worth announcing**, and a reminder that funding just got easier is the escalation loop with a scheduler attached.

---

<a id="4.4"></a>
### `4.4` Crediting, with a named timer

**Type:** state. **Scope:** MVP. **Parent:** `C3`, on `B4-3` pattern of 4. **Route out:** `4.1`, then `3.3` or `1.1` on credit; `0.10` when the published window passes.

**A named state rather than a spinner**, which is the whole of `C3`. The category's version is a spinner plus a document, and the document is where the number lives.

| What it shows | Rule |
|---|---|
| The state, by name, in words | Not a spinner, not a percentage, not an indeterminate bar |
| The published crediting window, **the same figure block 7 stated before the payment** | If the two ever differ, the pre-payment statement was a marketing number. They are one value read twice |
| Elapsed time against that window | `0.11` section 8: value, unit and caption, as-of, route |
| What happens when the window passes, stated **before** it passes | `0.10` carries the appeal route with a published response deadline, `G4` |
| The amount and the method, so the record is legible while it is pending | `B4-3`'s injury is a payment that becomes untraceable, and a support ticket that starts with "which deposit" has already lost |

**The rule that answers the barrier directly.** **A deposit that has left a person's account never stops having a state.** It does not resolve into silence, it does not disappear on reload, it does not become a cleared form, and it is never replaced by a generic error. If the window passes, the state stays named and gains the support route. This is the interface half of `C3`'s success signal, "tickets of the class money left and never arrived reach zero".

**Where else this state renders.** `navigation.md`, transient states: "Balance crediting, `C3`. The figure carries a named timer beside it rather than a spinner, and does not silently change. **Deposit node `4.4` owns the timer, the navigation renders the state.**" So a person who leaves this page keeps the state in the header.

**Two things carried rather than decided.**

- **The number is `[?]`.** Section 8 records that node `0.11` holds no row for it, which is a finding rather than a gap in this node.
- **Attribution is a recommendation, not a row.** `C3` says "a state with a timer" and nothing about who the wait belongs to. `G1` has that shape for withdrawal, named states with a per-state timer labelled waiting on us, on Steam, or on you, and it is the obvious donor. **Carried as a recommendation with its status printed** rather than imported quietly, owner in section 12.

---

<a id="4.5"></a>
### `4.5` Payment declined

**Type:** state. **Scope:** MVP. **Parent:** `C4` and `C2`, both by preservation. **Route out:** `4.1`, back to the amount.

**The ceiling and the threshold are preserved through the failure**, `flows.md` flow 2. That is not a convenience: a decline that resets the withdrawal threshold would let it come back higher, which is `B4-1` arriving through a failure path instead of through a policy.

| What it shows | Rule |
|---|---|
| That the payment did not go through, in words | Readable failure states are already the product's habit, `B5` on `B3-1` for Steam. The same standard applies here |
| What we know and what we do not | **If it is unknown whether money left, this is not this state.** An unknown outcome is `4.4` with the window running, because `B4-3` is precisely the case of money that left with nothing to show for it |
| The amount, exactly as typed | Never cleared, never rounded, never replaced |
| The ceiling and the threshold, unchanged | `C2` and `C4` |
| The route to `0.10` where the decline came from us | Support with a published deadline, `G4` |

**Forbidden.** No invented reason: a decline reason we did not receive is not printed as though we had. **No suggested smaller amount**, and no pre-filled alternative amount of any kind: the number on this screen is the person's own, which is the property `C2` rests its whole argument on, and a product that proposes a different one at the moment of failure has taken that back. No retry counter, no escalating prompt, and no alternative method promoted as more likely to work unless that is a fact we hold.

---

## 8. Three registers this node reads, and one finding

**`0.13`, SEO and indexation.** `/deposit`, not indexed, canonical self, no schema, no breadcrumb. Inherited whole, section 11 below carries it into the A to E block.

**`0.12`, markets and jurisdiction.** `markets.md` lists `4.1` among its seven consumers and explains why: "`2.7` and `4.1` are consumers because the document and the payment instrument are evidence of where a person is". The register's evidence table rates the payment instrument country as **strong**, and its precedence rule is that "the strongest evidence available wins, and later evidence overrides earlier evidence".

**What that puts on this screen.** The case `markets.md` calls the expensive one: a person passes the IP gate at `2.1`, arrives here, and the card says a blocked market. The procedure is the register's, not this node's, and `4.1` renders steps 1, 2 and 4 of it: deposits stop and opening stops, **withdrawal stays open**, and a written notice with the ground in words plus the appeal route through `0.10`. **This node invents nothing for that case and defers the exit window length**, which `markets.md` records as `[?]`.

**`0.11`, published numbers, and here is the finding.**

**The crediting window is a published number, and `0.11` held no row for it until the step 8 audit added one.** The register's group A listed withdrawal median and p90, per-state ceilings, the health probe, chances, values, RTP, EV, appeal deadlines and commission, and a free-unit count that has since been withdrawn by `D-60`. **There was no deposit row anywhere in it**, and `4.1` was not among the five consumers the register named.

**The rules it would have to obey are already written**, which is what makes this an omission rather than a design question. `0.11` rule 1: "a route, or it does not ship". `0.11` rule 2: an as-of on anything that moves. `0.11` section 7 gives it a state set, and a published crediting window that our own payment provider misses is precisely the **stale** and **degraded** case that section handles.

**Not fixed here, on the project's own rule.** `0.11` is another node's file and `CLAUDE.md` requires a contradiction to come back as a finding rather than as a quiet edit by a reader. **Recorded as a finding for the step 8 audit**, with the shape of the row it needs: number, published crediting window; parent, `C3` on `B4-3`; read on, `4.1` and the header via `0.1`; route, the person's own deposit; refresh, static until republished.

**Closed on 21 August 2026, and the paragraphs above stay as written because they are the argument that produced the row.** `numbers.md` group A now carries **Published deposit crediting window**, parent `C3` on `B4-3`, read on `4.1` and `4.4`, route the person's own deposit "which either credits inside the published window or does not", refresh a rolling window whose length is `[?]`. **The row exists and the value does not**, and that is the correct state rather than half a job: the register owns the promise and the founder owns the number.

---

## 9. Responsive

**Mobile 360px, the base.** One column. Blocks 1 to 7 stack in the order of section 2. The summary docks to the bottom edge from the moment an amount exists and is the last element in the document. **No horizontal scroll at any point**: the method cards stack rather than scrolling sideways, and the only element permitted its own horizontal overflow is a table, inside its own container.

**The amount field.** The unit is text beside the input, never a glyph baked into an image, `0.11` rule 8, and never a placeholder that disappears on focus. A person who focuses the field must still be able to see what unit they are typing. **And since `D-28` there are two units on this screen rather than one**, so the field states which one it takes and the converted figure is never editable: two editable money fields on one form is where a person types into the wrong one.

**Desktop.** Two columns. Blocks 1 to 7 on the left, the summary and the control as a sticky right column, which is the Fresha shape at its native width. **The block order does not change**, because the order is derived from the sequence of the decision rather than from the space available.

**Between the two.** The ceiling control is the one element whose form changes: a stacked value and period at 360px, one row on desktop. Nothing else re-orders.

---

## 10. Emotional support: none, and that is the honest answer

`sitemap.md`, "Emotional and social jobs: what carries them", places no mechanism on this node. Emotional Job 1 lives in the reveal, Emotional Job 2 in the outcome and `7.1`, Social Job 2 in the ticker, and Emotional Job 3 and Social Job 1 read "nothing yet" for round 1 as a whole.

**So this node adds nothing to that table**, and the absence is the correct entry rather than a cell to fill. `sitemap.md` states the standard in the same section: "inventing a trust page to fill a cell is worse than an honest empty."

**One microcopy placeholder is reserved, and it is not emotional support.** The account state strip in block 1 states that the exit carries no check, `B2`. That is a factual promise about a code rule, its place in the layout is fixed by this node, and its words belong to stage 05.

---

## 11. SEO block A to E

**Reduced by indexation, not by neglect.** `0.13` puts `/deposit` in the private transactional zone: not indexed, no schema. What survives is everything that serves the second reader, which is a screen reader rather than a crawler.

**A. Meta.** `robots: noindex, follow`. Canonical: self. Title and description exist for the browser tab and for history, not for a result page, so they follow the pattern in `0.13` section 2 and carry no keyword work. **No OG or Twitter card:** nothing here is shareable, and an unfurl preview for a private money screen is a card that should never be generated. One language, so no `hreflang`, per the locked decision in `CLAUDE.md`.

**B. Headings.** Exactly one H1, and it is the page's job in words. The H2 list is the block order from section 2, which is what makes the stage 04 check mechanical: account state, amount, spend ceiling, other limits, withdrawal threshold, payment method, what happens after you pay. The summary in block 8 is not an H2: it is a persistent element rather than a section of the document.

**C. SEO text.** None, and the reason is `noindex`. **What the node holds instead is the requirement of which information must be present**, which is sections 3 to 5 and the state tables in section 7. Interface strings do not live here: after stage 05 they live in `voice/docs/microcopy.md`, and this node keeps the requirement rather than the words.

**D. Structured data.** None. Private transactional zone, `0.13` section 3.

**E. Checklist.** One H1. **`noindex` as a meta tag and not a `robots.txt` disallow**, `0.13` section 4.5: a page a crawler may not read is a page whose `noindex` it cannot read. Every figure is crawlable text and never an image, `0.11` rule 8, which here is an accessibility requirement rather than a search one. The accessible name of every figure carries its unit, `0.11` section 9. LCP is the form, not an illustration. No horizontal scroll at 360px. Colour alone never carries the crediting, declined or ceiling-reached state.

---

## 12. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Payment methods, fees, minimums and maximums** | No source in this repository names one. No competitor screen of this type may be opened, `blocks.md` section 0, and `baseline.md` section 2 records deposit as `[?]` with no pre-login route. **Block 6 is specified as a shape with an unknown list** | Founder, then production |
| **The published crediting window** | The number `C3` promises. **The register row exists since the step 8 audit and the value does not**, section 8 | Founder |
| **Attribution on the crediting timer** | Whether the state names who the wait belongs to, as `G1` does for withdrawal. Recommended, and it is not in any row | Founder, one line on row `C3` |
| **The default pre-filled period for the ceiling, and the list of periods offered** | `C2` says "a named period" and a period selector. Which periods is nowhere. Key-Drop's safety portal runs daily, weekly and monthly, `blocks.md` section 7, and that is a competitor observation rather than our decision | Founder, with `6.1` |
| **The withdrawal threshold value** | `C4` fixes the rule, that it is stated before the deposit and can never rise. The number is `[?]` | Founder |
| **Whether a deposit can be reversed while crediting** | Refunds are a document on `0.9`, Refund and payments policy, and no capability row covers a reversal. **Named rather than assumed either way** | Founder, then `0.9` |
| **The exit window when a market closes on the payment instrument** | `markets.md` section 7 step 6: "the window length is `[?]`" | Counsel, under `D-A` |
| **The identity method** | `[?]` pending `D-A`. **Round 1 does not touch it at all since `D-26`**, and it is kept on this list because the node is kept on the map | Counsel, then node `2.7` |
| **Whether this screen says anything about a future identity check** | `D-26` deleted the exit promise from block 1, section 1. The silence is the safe default and it is not free: a person who deposits today under no check, and meets one at the exit in a later round, met a condition that was not named before the money went in. **Naming it costs a sentence on a conversion surface and the sentence describes a node that does not exist** | Founder |
| **The live feed on `4.2`** | This node suppresses it there and `0.8` says every page. **A finding to `0.8` rather than an edit to it**, section 6 | Node `0.8` |

**And what belongs elsewhere.** The words: stage 05, then `voice/docs/microcopy.md`. How it looks: stages 06 and 07. Where the header's deposit control sits: `0.1`, already decided. The other three limits: `6.1`. The verification branch: `2.7`, and it is not on this screen by rule. The market verdicts and their grounds: `0.12`, which this node reads and never edits.
