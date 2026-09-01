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

## 2d. Redrawn 25 August 2026 by `D-96`. Two steps, thirty five routes, and one of them breaks `C2`

**The founder supplied the full method grid on 25 August 2026 and this node was rebuilt on it.** Section 4 below said "no source in this repository names a method". **That had been false since 20 August**, when `baseline-account.md` entered the repository with section 5b.1 addressing this node by name: "our node `4.1` was drawn against a method list that is `[?]`. It now has a real one."

### What the node shipped against, and how long

| Date | What happened |
|---|---|
| 12 Aug 2026 | This node written. The method list was genuinely `[?]` |
| 20 Aug 2026 | `baseline-account.md` lands with the deposit walk |
| 22 Aug 2026 | `deposit.html` drawn, **two days later**, with two empty slot cards and "which methods this product takes is not decided" |
| 25 Aug 2026 | Founder points at the screen. Rebuilt |

**Why the wrong statement read as sourced.** It cited two things that were true: no competitor screen of this type may be opened, `blocks.md` section 0, and `baseline.md` section 2 records deposit as `[?]` with no pre-login route. **Neither of those covers our own signed-in baseline**, which is the single exception `CLAUDE.md` carves out. **The input gate runs before step 1 of a stage**, so a source arriving mid-stage passes no gate at all.

### The count was wrong too, and the way it was wrong is the finding

`baseline-account.md` recorded **17 fiat and 25 routes**. The true numbers are **27 and 35**. It was not a miscount: the two capture files are `acct_deposit_step1_methods.png`, which shows rows one and two and stops, and `acct_deposit_step1_crypto.png`, which starts at Google Pay. **Ten plus seven is seventeen and the two shots do not meet.** Rows three and four fell in the gap. Corrected in `baseline-account.md` section 5b.1a.

### Two steps, and the order reverses this node's own

| Step | What it holds |
|---|---|
| **1. How you pay** | Promo code, **empty**; the country you are paying from; **27 fiat and 8 crypto** in the baseline's own order and grouping |
| **2. How much** | Three pages, because what step 2 asks for depends on the route |

**Section 2 put the amount first with a stated reason:** the ceiling is pre-filled from the amount, so a method chosen first makes the ceiling arrive as an interruption at the end. **That argument does not survive the real list, and the reason is a fact rather than a preference.**

**Crypto has no amount field at all.** `baseline-account.md` 5b.3: the person sends what they send and the rate at the top converts it. **On eight of the thirty five routes there is nothing to type**, so asking for an amount before the route is known produces a screen that has to be taken back.

**What the old argument protected is kept by placement.** The ceiling sits directly under the amount on step 2, before the pay control. **The worry was never the global order; it was the ceiling appearing last.**

**And the step indicator arrives with the second screen.** Section 2 refused one on the ground that a step indicator draws a process that does not exist. There are two screens now, so it exists.

### `C2` does not work on the crypto route, and that is the largest thing this build found

**The spend ceiling's whole mechanism is that the amount just typed is pre-filled as a ceiling and the deposit cannot be submitted until the person accepts or changes it.**

**Nothing is typed on the crypto route and nothing is submitted.** A person sends coins from their own wallet to an address and the money arrives. **The brake has nothing to hold and no moment to hold it in.**

**The page states that rather than drawing a ceiling that cannot bind.** A pre-filled ceiling there would be a picture of a control, `D-58`, and worse than that: **a picture of a protection.**

**What could replace it is a decision and not a drawing.** A ceiling enforced on arrival refuses money already sent, which means holding it or returning it, and **neither has a row, a policy or a node.** Owner: the founder.

### Three step 2 pages, and the one that leaves the product

| Page | What it is |
|---|---|
| `deposit-card.html` | The old single screen with its method block removed, plus a provider sub-choice, a billing email and the terms checkbox the baseline asks for again at funding |
| `deposit-crypto.html` | Network, address, code, live rate with its as-of, minimum, **no amount field**, and the `C2` statement |
| `deposit-crypto-nowallet.html` | The baseline's own precondition state: the same screen with the payload removed and one control to create the address, rather than an error |
| `deposit-giftcards.html` | **Six third party resellers.** The handover stated before any control, because a person is about to leave, pay a company that is not us, and come back with a code |

### One tile has no parent and ships saying so

**CS:GO Skins.** Depositing skins is a real capability of the live product, marked `INSTANT` on its tile, and there is **no row in `cjm-to-be.md`, no node on the map and no flow drawn.**

`CLAUDE.md`: a screen, a block or a component with no parent is cut, or carried with its orphan status printed in its own row. **It is carried, and the tile is not a link**, because a tile that opened nothing would be the dead item defect with a logo on it. **Whether skin funding is in round 1 at all is a founder decision that no file has taken.**

### The promo field is empty, and the baseline's is not

The live product arrives with a partner code **already in the field, ticked, and applied**, 5b.1. **That is attribution happening to a person rather than by them**, which is the shape `0.4` refuses for consent one node over. **Founder decision, 25 August 2026: ours starts empty and does nothing until someone types.**

---

## 2e. Compressed 25 August 2026 by `D-97`. Density comes out of what explains, never out of what stops

**Founder, on the screens `D-96` had just built:** too complex, especially step 2, and step 1 takes too much of the first screen.

| | Before | After |
|---|---|---|
| Step 1, where the tile grid starts | **777px** | **557px** |
| Step 1, page height | 1691px | **1170px** |
| Step 2, sections | **8** | **4** |
| Step 1, first tile row | 210px, stretched by one orphan | **113px** |

**Step 1.** Promo and country share one row from 600px. The three paragraphs under the country become one line: what went is the explanation of what the control **is not**, and the country's job plus both named holes stayed at one line each. **The two group headings became labels**, keeping their `h2` for the document outline and losing the section-head size, which is what the baseline does with the same two words.

**And the orphan's sentence moved off its tile.** `CS:GO Skins` carried the whole explanation and **stretched the first row from 74px to 210px**, so one orphan reshaped the grid for the other thirty four. The mark stays on the tile, the reason sits one line under the grid, and **the rule that an orphan is printed rather than hidden is unchanged.**

**Step 2.** The provider row moves to the top, where the baseline puts it and where it belongs on its own argument: **the provider decides what the form asks for**, so a form filled before it is a form that can change under the person.

**The dock became the receipt.** `You will receive 42.00 coins`, with the split and the rate under it. **The same arithmetic had been on one screen three times** and that is the defect this project has shipped twice already. The two figure blocks in the left column went and their rules stayed: the peg as a line beside the field, the bonus keeping what a number cannot carry.

**The withdrawal threshold and the crediting window each became a line rather than a section.** Both were a heading over one unpublished number, and every clause of both survives.

**What did not move: the ceiling.** It keeps its own section and its own heading, because it is the only blocking control on the screen and **compressing a brake into a line is how a brake becomes a setting.**

### The finding, and it is not a layout one

**`deposit-ceiling-pending.html` and `deposit-declined.html` were still shipping "which methods this product takes is not decided"** the day after `D-96` removed it from the base page. **They are copies of the base rather than states rendered from it.**

**A correction to a page is not a correction to its states unless the states are rendered from it.** Nine pages on this node and four of them are hand copies.

---

## 2f. Amended 25 August 2026 by `D-98`. The country is read here and set on `5.11`

**The founder pointed at a selector labelled Paying from with one option, Isle of Man, and asked what it was.** Three faults in one control.

**One. That is our regulator, not a market.** The Isle of Man is the licence direction, `D-23` part 2: the jurisdiction this product would be **regulated from**. **No allowlist row has opened it and nobody pays from it.** Naming it in a list of a person's own countries renders our own regulator as a customer's location.

**Two. The control competed with the node that owns the answer**, and its own comment said so: *"`5.11` owns the one answer and this control reads it"*, with a `select` underneath. **`baseline-account.md` 5b.6 is the evidence**: two self-declared countries in one live account on one day, Ukraine on the deposit step and United States in settings, because the live product carries a field in both places and reconciles neither. **`0.12`'s allowlist puts a ban on the other end of a false declaration**, so a product with two answers bans people over its own contradiction.

**Three. One option is a picture of a choice, `D-58`**, and it is the smallest fault and the one that made the other two visible.

**What renders instead:** a line, `Ukraine, the country on your account`, with a route to `5.11`.

**And the register's state is printed rather than implied.** `D-23`: the allowlist is closed by default and there is no market we can open this month, so the note under the grid says **no market is open yet**. **A selector of open markets is a control with nothing true to put in it.**

---

## 2g. Carried 25 August 2026 by `D-99`. The dialog is the carrier, and it was asked for a day before it was built

**The founder asked for it in the message that supplied the method list:** better to make all of this a dialog, the way the competitors do. `D-96` built the list, the two steps and the promo field, and **dropped the carrier without recording a refusal.** A dropped request with no row is indistinguishable from a request nobody made.

**And the sentence had already been written as though the work were done.** The renderer above the method grid and the address page under it both carried *"one renderer, two carriers, the dialog and the address render the same grid"* while **exactly one carrier existed.** That is the fourth comment in this stage stating a rule its own code does not keep, and the first three were all found by a person looking rather than by an instrument.

### The carrier rule is `D-54`'s, taken whole

**The address survives.** `/deposit` renders the same content as a full page and is what a typed URL, a deep link, a session with no script and a person pressing back all land on. **The dialog renders it over the surface a person is already on.** Neither is a reduced version of the other, and that is structural rather than promised: both carriers call the same three renderers, so a change to either arrives in both.

**The reason is stronger here than it was at sign in.** A person adds funds in the middle of something. The case they chose, the count they set and the price they were reading are what the money is for, and on a page all of it is behind them **at the moment they decide how much to spend**.

### It carries both steps, and that is the whole of it

**A dialog that picks a method and then throws the person to a page for the amount is a doorway**, and a doorway is exactly the second surface with less in it that `D-54` rejected. **The money is spent on step 2**, so step 2 is the screen the context is worth most on. A tile inside the layer advances the layer; the same tile at the address is a link to the same step at its own address.

### What it does not carry, named rather than omitted

**The outcome surfaces.** `4.4` crediting, `4.5` declined and `4.2` ceiling reached stay at their addresses and the layer navigates to them. They are **records with a state that persists** and a person returns to them from history, and `D-54` already fixed that a layer must never vanish on a failure: a dialog that closed itself on a decline would return a person to a screen that cannot explain what happened.

**The H1 and the footer**, for `D-54`'s own reasons: the host page owns the outline and already has a footer.

**And the dock is in flow inside the layer where it is fixed on the page.** Below 900px the page docks the summary to the bottom of the viewport; a fixed element inside a dialog has no viewport of its own and leaves the frame it belongs to. In the layer the summary is simply the last block, which is where the document order already put it.

### What the rebuild fixed that nobody had asked about

**Six pages became hosts and the bodies moved into one renderer.** Before this, `4.3` and `4.5` were hand copies of the card page **taken before `D-97` and never caught up**: neither carried the provider block, the receipt at the top of the dock or the billing block, and `D-97` had found one more of the same class the day before. **A state that is a copy of a page is a state no correction reaches.**

**The three money figures became one arithmetic.** Amount, bonus and what you receive were typed by hand on five pages. They are computed now, from the amount and from the one bonus declaration, **and the sum is only legal because of `D-95`**: one coin is one dollar, fixed, so dollars in and coins out can be added at all. The cap is real rather than decorative.

**The ids are prefixed in the layer.** Opened over `/deposit` or over a step 2 address there would otherwise be two of every id in one document, which is a label pointing at the wrong field.

### One hole this opened, and it belongs to the node rather than to the carrier

**What the summary says before an amount exists is a state neither carrier has ever had.** Opened with nothing typed, the layer rendered a receipt of `0.00 coins` and a ceiling in force of `$0.00`, which is not an empty state: it is the worked example with its number missing. **The page has had the same gap since 22 August** and nobody looked, because the page always arrived with the example already filled. Both carriers now show the same worked amount, and **the pre-amount state is `[?]` and named here rather than invented inside a dialog.**

---

## 2h. Restructured 26 August 2026 by `D-100` and `D-101`. One layer, two panes, and the first screen carries the press

**The founder put six captures of a competitor's funding dialog beside the built one** and asked for the routes grouped into categories, the group chosen on the left with its content on the right, and the promo code lifted to the top beside the country. An hour later, on the result: **the amount, the email and the terms have to be in the first view**, the presets do nothing, and the money field takes letters.

### The step indicator leaves by the argument that brought it

`D-96` refused one while this node was a single screen with a single control, then added one when it became two: *"there are two screens now, so it exists."* **There are not two screens now.** The rail is on the surface the whole time and the chosen method stays visible while the amount is set, so a numbered process drawn over one pane is a picture of a process.

**And the change closes `D-96`'s own worry rather than reopening it.** That worry was a screen that has to be taken back, because crypto has no amount field. With a persistent rail nothing is taken back: the right pane renders what the route asks for.

### The categories are the routes, and the finer split is `[?]`

| Category | Rows | Source |
|---|---|---|
| Cards, wallets and bank transfer | 25 | `route: card` |
| Crypto | 8 | `route: crypto` |
| Gift cards | 1 | `route: gift` |
| CS2 skins | 1 | No route. The orphan, carried with its status printed |

**Our own step 2 already split on route**, because the route is what the second pane asks for, and `baseline-account.md` 5b.1 shows the live list in exactly two groups. **A finer split into cards, wallets, bank transfers and vouchers is a taxonomy of payment brands and no file here holds one.** Founder's, and the payment side has the answer.

### What is on the first screen, and the one thing that could not move

**On it:** who takes the payment, how much, the ceiling, the email, the terms, and the receipt beside them.

**Below the press:** the withdrawal threshold, the crediting window, the bonus rule and the route to the other limits. **All four are read rather than answered**, so they sit after the block they qualify. Nothing was cut, and the exit price is also a line in the receipt where it stays in view.

**The ceiling did not move.** `C2` pre-fills it with the amount just typed and it blocks the press, so a brake met after scrolling past the control it brakes is a brake that arrives second. **What changed is its size**, and putting it beside the amount tells `C2`'s own story in the layout: the ceiling carries the amount just typed, so the two are one gesture.

### Three controls were pictures of controls, on the one screen where a control has to be believed

**The six presets changed nothing.** **The money field took letters**, so its value could not be arithmetic and every figure computed from it read `NaN` beside a Pay control. **The receipt was a string printed once at render** and said 42.00 coins whatever the amount became.

**All three are live, and the arithmetic is one function.** The cap binds at 100 coins rather than being described, and **the ceiling follows the amount until it is settled**, which is `C2`'s first property working rather than being written down.

**And the terms box was the browser's rather than the product's**, a bare input inside a row built for a 20px box, so it rendered as a large white square with its label stranded across the screen. It is `2.4`'s control now: one component, two screens, and Pay names which of the two conditions is missing.

### The instrument this finally earned

**Three class collisions in one stage**, `.wf-steps`, `.wf-offer`, then `.wf-prov-row` and `.wf-cat`. **Amended 1 September 2026 by `D-105`: `.wf-prov-row` was not caught.** The repair was applied to the wrong side, `2.4`'s markup was renamed to this node's new name, both owners ended on `.wf-payprov`, and this node's rules won for four commits. **A collision closed by renaming the wrong owner leaves nothing for the instrument below to find.** **Two owners of one name, no error, and every one renders as another component.** A scan for a bare class rule written twice at top level found a fourth nobody had reported: `.wf-pf`, owned by both `1.2`'s key and value pair and `5.10`'s page layout, **so every pair on the six provably fair pages carried 24px between the label and the figure and went two columns wide above 1000px.** Renamed. **First defect of this class in the stage found by an instrument rather than by a person looking.**

---

## 2i. Rebuilt 27 August 2026 by `D-102`. The pane is read top to bottom, and the brake is called what it is

**The founder opened the built layer and said it was heavy, complex and overfull**, put the reference beside it, and gave the order in his own words: the bonus as a banner, the promo field with the email beside it, the amount with what it buys beside it, and any extra information below. **Then the finding this section exists for:** *"I do not understand what this ceiling is or why it is here."*

### A protection nobody can name is not one

`C2` is not decoration. It is the only blocking control on this screen, it carries `B7-4` and the responsible play constraint in `CLAUDE.md`, and it has a record of its own. **The founder read it on the drawn screen and could not tell what it did.** Two things put it there and both were ours.

**The label was the word the documents use.** "A ceiling on what you put in" names a shape, not a job. It is now **"Your deposit limit"**, and the line under it says the job in one sentence: the most you can put in over a period, set by you and not by us, starting at the amount just typed.

**And `D-101` had disguised it.** That record put the limit beside the amount and argued the placement told `C2`'s own story: the limit carries the figure just typed, so the two are one gesture. **What it actually produced was two money fields side by side holding the same number**, one of them labelled with a word that does not say what it does. The argument was right about the relationship and wrong about the drawing. The limit is under the amount again.

**`C2` itself is untouched.** Pre-filled from the amount just typed, blocking, the only blocking control here, lowering immediate and raising delayed, and never a score. **Nothing about the brake was weakened to make it readable.** The period it runs for is still `[?]`.

### What moved, and every move has one reason

| Block | Was | Is | Why |
|---|---|---|---|
| Bonus offer | One of three cells across a row | Full width banner, alone | It is neither a question nor a figure. Beside two form fields it read as a third field with a picture in it |
| Promo code | Top row, beside the offer and the country | Top row, beside the email | Two things of one kind: one short answer each, given once, belonging to no route |
| Email | Last block of the card body | Top row, beside the promo | **A receipt address is not a property of paying by card.** Every route that takes money sends one. It was in that body only because that body was written first, and asked here it is asked once for all thirty five routes |
| Country | Top row | Foot of the pane | It is stated and never answered, `D-98`. The top of the pane is now only what a person answers |
| Provider | Heading, subhead and two tiles | One line above the money | Still first, which is `D-97`'s order: the provider decides what the form asks for. In a 290px column two unknowns stacked and a one line statement ran to four |
| Deposit limit | Beside the amount | Under the amount, full column width | See above. Its control was also wrapping onto a second line, which reads as a brake that is broken |

### `Apply` was the fourth picture of a control

The founder found three on this screen on 26 August. **`Apply` was the fourth and nobody reported it:** it sat beside the promo field and did nothing. **It cannot validate a code, because no promo or partner code exists in this product yet.** So it says that instead of pretending: empty field and it says the field is empty and the offer above needs no code; a code typed and it says none has been issued yet, so there is none to recognise.

### The cost, measured and printed rather than absorbed

**Mobile pays for this order.** At 360 the amount now starts at **943px** down the page, against 564px before. The header the founder asked for, banner plus two stacked fields plus the method bar plus the provider line, is 615px at that width, and 360 has no room to put two fields side by side.

**Nothing is hidden by it:** the receipt is fixed to the bottom of the viewport the whole way down, so what the money buys is on every screen even when the amount field is not. **But this contradicts the note he made a day earlier**, that the amount belongs in the first view, and it contradicts the mobile first stance in `CLAUDE.md`.

**The reflow that would fix it is his call**, because it makes the mobile order differ from the desktop one: below 700 the promo and email pair moves under the money row. The reference itself puts its promo code last. **Not taken here**, because an order he stated in his own words is not something to quietly rearrange.

### A fifth collision, and this one was made in the same build

`.wf-ceil-bar` was written at top level twice inside this build, the second rule overriding the first three lines later. **The scan that `D-101` earned caught it before it shipped**, which is the first time in this stage that a collision was found in the build that created it rather than in the one after. Merged into one rule.

---

## 2j. Rebuilt 27 August 2026 by `D-103`. The limit leaves this node, and the pane stops being a wall

**The founder, on the `D-102` build:** still overloaded, put the deposit limit somewhere in the settings but not here, and **make the dialog something you do not want to close because of the pile of information on it**. Country into the top row, email under the amount, the provider block back the way it was.

### `C2` keeps what it does and loses where it is set

`cjm-to-be.md` T4 is unambiguous: the amount just typed is pre-filled as a ceiling and **the deposit cannot be submitted until the user accepts or changes it**. That clause is overridden. The limit is set on `6.1`, where the session limit, the cool down and the self exclusion already live, and where a control for it has existed since that page was drawn.

**This node keeps the figure and loses the form.** The limit in force is a line in the receipt with a route, so the number is in front of a person at the moment of spending, which is design principle 3. **What it does not do is ask.** And the unset state is said rather than filled: an account with no limit reads `None set` beside `set one`, because printing a number there would be inventing the protection.

**The cost is real and it is the argument T4 already made.** Two alternatives were dropped there for being worse moments than the deposit, and the reason the deposit won was that a person is calm and the number is one they typed themselves. **A boundary you have to go and find is a boundary most people never set.** `D-103` carries that in full and `cjm-to-be.md` keeps the paragraph rather than being rewritten to agree with the decision.

**One thing it closes.** `D-96` found that `C2` could not bind on crypto, because there is nothing to accept before a send. **With no acceptance step anywhere, that asymmetry is gone.** What is still open is enforcement on arrival, which was always the harder half, and it still has no row, policy or node.

### What is on the pane now, in the founder's order

| | |
|---|---|
| Banner | The offer, full width, alone |
| Row | Promo code, and the country beside it. Both are about the account |
| Bar | The chosen method, with Change |
| Block | Who takes the payment, back to a heading and two slots |
| Row | How much you are paying, and the receipt beside it |
| Under it | Where the receipt goes, then the terms. Both are about this payment |
| Below | Four lines that are read and never answered |

**The email and the country swapped surfaces and the swap has a reason beyond placement.** The promo and the country are properties of the account. The amount and the receipt address are properties of this payment. **Each pair now sits together**, which is what makes the pane readable in two passes rather than one long one.

### What was cut, and nothing that was cut is missing

**The rate paragraph.** `C1` requires the peg beside the coin figure at the moment of spending, `D-28`, and the receipt carries it on the line under the figure. A second rendering of one fact on one screen is what `D-97` already removed three of.

**Four paragraphs became four lines.** The bonus rule, the exit price, the crediting window and the route to the boundaries. Every one still names its own unknown, and the exit price is also a line in the receipt where it stays in view.

**The provider block came back.** `D-102` compressed it to a caption sized line to buy vertical room. The room was worth less than the block: this is the sentence that says a stranger will hold the card details, on the screen where that matters most.

### One name for one boundary, across seven pages

The deposit screen said **deposit limit** and `6.1` said **spend ceiling**. **Two names for one thing across two surfaces is how a person stops believing they are the same thing.** Renamed on the five responsible play pages, on `4.2` and `4.3` and their registry labels, and in the crypto route's own statement of the gap.

**And the five responsible play pages are five hand copies of one block.** The rename had to be applied five times. That is the same shape `D-99` found in the deposit cluster and fixed by making the pages hosts of one renderer. **Named here as a debt rather than fixed in this step**, because it is `6.1`'s node and this one had no business rewriting it.

### The cost that did not go away

**At 360 the amount starts at 984px**, against 943 after `D-102` and 564 before it. The provider block coming back is most of the difference. **The pane is shorter overall**, its end moved from 1916px to 1733px, but the header the founder asked for still puts the money field below the first screen on a phone. The receipt stays fixed to the bottom of the viewport throughout, so what the money buys is on every screen even when the field is not. **Still open, still his:** whether the promo and country row moves under the money below 700.

---

## 2k. Simplified 29 August 2026 by `D-104`. The receipt holds what moves the number, and the bonus is raised

**The founder, on the `D-103` build, with three lines struck through on the image:** simplify this part, and make the bonus stand out somehow. The three struck lines were `Fee`, `Deposit limit in force` and `To withdraw, you will need`.

### A sum whose rows are mostly unknown stops being read as a sum

The receipt had six lines and **three of them carried no figure at all**: `Not published`, `None set`, `Not published`. The cost of that is not the three lines, it is the two real ones standing beside them. An eye that starts skipping a column of `[?]` skips `Amount` and `Total charged` with it, and design principle 3 asks for exactly those two to be legible at the moment money moves.

**Three rows out, three facts kept, and each one was kept differently.**

| Row taken out | Where the fact is now | What it cost |
|---|---|---|
| `To withdraw, you will need`, `Not published` | Already below the press, word for word, with the never-rises clause the row had no room for | Nothing. The row was a duplicate of a fuller statement two blocks down |
| `Deposit limit in force`, `None set` | The boundaries note below the press, **which now states the figure when one is in force**, "A deposit limit of $40.00 is in force", and says "No deposit limit is set" when there is none | The figure left the money column for a line below the button |
| `Fee`, `Not published` | **Attached to the total as its qualifier**, one caption under it | This is the one that could not simply leave |

**The fee is the finding of this step.** `Total charged $200.00` is a claim, and an unpublished fee is precisely the thing that can falsify it. Deleting the row and saying nothing would have turned a visible unknown into a total that reads final, which is `B4-1` one level down: a figure that moves after the person committed to it. **So the fee stops being a row and becomes a sentence about the total.** `C4`'s three properties are untouched: the threshold is still stated on this screen before the payment, still frozen at this moment, still below the press where it always was.

### The bonus is raised, and raised is not promoted

`D-94` set the rule and the rule is intact: **the bonus is a line in the sum and never a badge on it, because a badge asserts and a line in a sum gets checked.** What changed is weight, not kind.

**What it gained:** a band of its own inside the sum, a sign in front of the figure, and room for the cap and the period to sit under the figure rather than in front of it. **What it did not gain:** a place outside the arithmetic, or a claim. It is still between `Amount` and `Total charged`, still recomputed on every keystroke, still capped at 100 coins per 24 hours in the same breath as the percentage. **An emphasised percentage whose limit lives somewhere else is the pattern the category is distrusted for**, and emphasis is the exact moment that pattern becomes available to take.

**Emphasis here is weight and space and nothing else.** Colour arrives at stage 06 and 07, and this band is the slot that will take it. A grey wireframe reaching for colour early would be answering 07's question inside 04.

### One more thing was cut, and it had been said three times

The caption under the headline read "200.00 for the money, 10.00 the bonus, at 1 coin = $1.00". **With the split now two lines below it in the sum, those two figures were on the pane three times.** The caption keeps the peg and drops the split. `D-95` requires the peg printed where money is spent and it is still printed: it is what makes dollars in and coins out addable at all.

### Section 5 was stale, and it is amended rather than left

`D-103` moved the limit off this node and never reached section 5, whose table still listed a ceiling line and whose text still said the control is inert until the ceiling is accepted. **Both are amended in place with the override named and the overridden sentence quoted**, the same treatment `D-94` got in section 3.3. A spec section that contradicts the screen is worse than a missing one, because it reads as current.

### The cost, and it is not the one that was expected

**The receipt has three fewer rows and it is 13px taller.** Measured at 360 with 200.00 typed: the dock goes from 341px to 354px and the sum inside it from 137px to 150px, because a band with padding and two lines of its own is worth more than the three thin rows it replaced. **The pane end moved from 1634px to 1651px.** The amount field did not move at all, 951px in both, since nothing above it changed.

**So this step bought no vertical room and did not claim to.** What it bought is that three of three rows in the money column now carry a figure, against three of six before.

**And one thing got further away.** The deposit limit was a row in the money column and it is now the last of four notes below the press. A person who never scrolls past the button no longer learns that they have no limit set. That is `D-103`'s cost being paid a second time, one line lower.

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

**No competitor screen of this type exists that we may open.** `blocks.md` section 0 declares the gap before the tables: deposit, withdrawal and identity verification are behind login on all five hard competitors, and this project never logs in. The substitute is public documentation plus the As-Is barriers plus Refero for the craft. ~~**This section inherits that gap rather than covering it**, which is why the method list itself is `[?]` instead of a plausible list of five.~~ **Amended 25 August 2026 by `D-96`, and the sentence above is the one this node got wrong for three days.** The competitor gap is real and it never covered **our own baseline**, which `CLAUDE.md` makes a source in the same class as a walked page. `baseline-account.md` section 5b.1 has held the list since 20 August. **Thirty five routes, section 2d.**

**The craft, from the bank.** Payment methods as cards with an empty state, Refero Navan `803e703a`: "the empty first deposit is the common case and is designed rather than met."

**The rule this node adds, and it comes from an FAQ.** Hellcase publishes "Steam Balance is not appropriate on this site" **only in its FAQ**, `blocks.md` section 5. The bank's verdict is to take the disclosure and place it earlier. Written as a rule:

> **An exclusion renders on the card of the method it excludes, in the same block, before the method is chosen. A document may repeat an exclusion. A document may never be the only place it exists.**

`blocks.md` section 8 states the general form of this on the `0.9` and `0.10` pass: "a rule a person meets in the product is stated in the product. The FAQ repeats it, it does not own it."

**Empty state, first deposit.** No saved methods is the normal case for the account this screen is designed for, since `flows.md` flow 2 opens on "the starter credit is spent and they want to keep opening". The empty state is the default composition of block 6, and the populated state is the variant. **Stated in that order deliberately:** a screen designed for the returning depositor and patched for the first one puts its worst layout in front of the person with the least reason to trust it.

**What is `[?]` and stays `[?]`:** the method list, any fee, any minimum, any maximum per method, and whether a method carries its own crediting window different from the published one. `baseline.md` section 2 records deposit as `[?]` with no pre-login route found, and no source in this repository names a method. **None of these is invented here**, and block 6 is specified as a shape with an unknown list, which is a drawable instruction: one card per method, exclusions on the card, empty state first.

---

## 5. The persistent summary, and the single control

**Craft parent:** Refero Fresha `3d6c5b9f` in the bank, "persistent summary card carrying the total, beside the choice, with a full width continue", verdict `TAKE`, traced to `C2` and design principle 3: "cost stays on screen while the choice is made rather than appearing after it."

**Four figures when this was written, three since `D-104`, and they are the answer to why block 5 is not on the first screen.** The withdrawal threshold sits fifth in the scroll order and **is on the first screen anyway**, because the summary docks and carries it. The block below is the full statement with its rule; the summary is the figure, present continuously from the moment an amount exists.

| Line in the summary | Where the number comes from | Rule it carries |
|---|---|---|
| Amount | Block 2 | Real money in, coins out, and the rate with its as-of, `C1` as `D-28` rewrote it |
| Total charged | Amount plus any fee. **Fee is `[?]`** | If the two ever differ, both are shown. A total that silently differs from the typed amount is the defect |
| ~~Ceiling in force after this deposit~~ | ~~Block 3, and `4.3` if a raise is pending~~ | **Removed from the summary by `D-104`**, after `D-103` removed the form it read from. The figure is a note below the press and it is quoted here rather than deleted |
| ~~Withdrawal threshold~~ | ~~Block 5~~ | **Removed from the summary by `D-104` as a duplicate.** Block 5 below the press already carried it with its never-rises clause, which the summary line had no room for. `C4` is unchanged: still stated on this screen, still frozen at this moment |
| Bonus | The standing offer, `D-94` | Raised into a band of its own by `D-104` and still a line in the sum, never a badge. The cap and the period travel with the percentage |
| Fee | `[?]` | **A caption on the total since `D-104`, not a row.** An unpublished fee is what can falsify a total, so it stays attached to the figure it qualifies |

**One control, and one next step.** The primary control submits the deposit. **The clause that followed here was "and it is inert until the ceiling is accepted or changed", and it is overridden twice over:** `D-103` took the ceiling off this node, and `D-58` had already ruled that a live control which refuses beats a dimmed one. **The terms checkbox is the only blocking condition on the screen**, and pressing Pay without it says what is missing rather than doing nothing. **Nothing else on this page is a primary control.** The responsible play entry is a link, the method cards are a choice inside block 6, and the amount presets, if any ship, are inputs into block 2 rather than actions.

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
| ~~**Payment methods**~~ **Closed 25 August 2026 by `D-96`.** Fees, minimums and maximums | ~~No source in this repository names one~~ **The methods are named: 27 fiat and 8 crypto, `baseline-account.md` 5b.1 as corrected.** What stays open is every number attached to them: no fee, no minimum, no maximum, and whether any route carries its own crediting window | Founder, then production |
| **Whether the spend ceiling can bind on the crypto route** | Section 2d. `C2` works by being accepted before a submission and **the crypto route has neither.** Enforcing on arrival means refusing money already sent, which is holding it or returning it, and neither has a row, a policy or a node | Founder |
| **Whether depositing skins is in round 1** | The `CS:GO Skins` tile exists on the live product and has **no row in `cjm-to-be.md`, no node and no flow.** Carried with its orphan printed and not drawn | Founder |
| **Which payment providers take the money** | Step 2 for cards opens a provider sub-choice, `baseline-account.md` 5b.2. Ours has none chosen | Founder, then production |
| **Which of the six gift card resellers we send people to** | The baseline sends to all six. None is a link in ours until this is answered | Founder |
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
