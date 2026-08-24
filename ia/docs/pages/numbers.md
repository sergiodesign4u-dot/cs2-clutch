# Node 0.11. Published numbers register

**Type:** register. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Hold every number this product publishes about itself in one place, with its computation, its refresh, its behaviour when the data is missing, and the surfaces that read it, so that a figure is defined once instead of five times.

**Jobs served.** None directly: a register is read, never visited. **Parent class:** barrier `B8-2`, the withdrawal that goes silent, pattern of 6, and barrier `B7-2`, the belief that the numbers shown are not the numbers used, pattern of 11, by way of rows `A4`, `G3`, `D2`, `D3` and `D4`; Related Job 1, arrive with confidence; and design principle 1 in `CLAUDE.md`, quoted by its `D-14` limit, "the product is built so that its own numbers are checkable". All three legal parent classes, and each row below names its own.

**Read by:** `1.0` Home, `1.2` Provably fair, `3.3` Case screen, `5.3` Withdrawal, `0.2` Footer. Rendered by `0.6` and `0.7` where a number sits on a card. **`5.1` and `3.6` join the list on 23 August 2026 with `D-91`**, both reading the same pair of prices that the two settlement rows in group A aggregate at case level.

**Amended 23 August 2026 by `D-92`, and this register is the file that owns the amendment.** The founder named the venue `D-91` left open: **the prices are ours, taken from Steam, cases are built from them, and the market for these items is this product.** Four consequences land here and they do not point the same way. **The venue row closes**, section 2b. **The method behind the per-case gap stops being blocked by anything outside this company**, section 2b and section 10. **Row `A1`'s outbound link loses the job it was written to do**, and section 2c works out what `A1` requires instead and returns a verdict rather than a tick. **And the founder's own hedge is carried as a live row rather than absorbed**, section 2d.

**Not drawn at stage 04.** A register has no screen. The nodes that read it do, and each of them carries its figures into its own wireframe. What stage 04 inherits from here is the state set and the anatomy in sections 6 and 7, not a layout.

---

## 0. Why this is a node, and what a register is

Registered by the global sweep at step 3 on 12 August 2026. The sweep counted consumers before writing verdicts, and this one came back with five surfaces reading one family of numbers.

**The backlog itself argues for it.** Rows `A4` and `G3` are described in `cjm-to-be.md` as "the same feature, two surfaces". Node `0.2` made it a third within one step of that sentence being written, and did so while asserting a reconciliation route that does not exist. That is the failure mode a register prevents: **a number defined at each surface is a number that will eventually disagree with itself**, and the disagreement lands on the one claim this product cannot afford to get wrong.

**A register is a node read by several nodes and drawn by none.** It is not a page, because nobody navigates to it. It is not a component, because nothing renders it. The type was introduced by the sweep with that definition so that stage 04 does not enter it into the coverage check as a screen with no wireframe.

---

## 1. The condition that stands above every row

**`D-C`, from `cjm-to-be.md`, open decisions.** Every capability in this register is a commitment device that only works for an operator whose published weights are already true. The observed-against-published check has to run internally on the live platform's data **first**, and if it does not hold, that is a business decision preceding the design one. `cjm-to-be.md` also records the other half: once that check ships to the public **it is never taken down**.

**Which makes this register the place where the cost of principle 1 becomes concrete.** Publishing a number is not a display decision. It is a permanent commitment, and the design work below assumes the answer to `D-C` is yes. If it is not, the rows conditional on it do not get redesigned, they get withdrawn, and section 6 carries a withdrawn state for exactly that reason.

**`D-C` is scheduled before stage 04.** Nothing in this register is drawn until it returns.

---

## 2. Group A: numbers we compute about ourselves

We are the source. For each of these the method has to be publishable, not only the result.

| Number | Parent | Read on | Its route to something checkable | Refresh |
|---|---|---|---|---|
| **Cases opened, running total** | Founder decision of 11 August 2026, the inherited strip, plus `B1-1` | 0.2 | The per-case observed rate counters, row `D3`, whose N comes from the settlement ledger that pays users. **Per case, not one auditable total**, and conditional on `D-B` | Per round |
| **Observed rate per tier: published, observed, N** | `D3`, on `B7-2` pattern of 11 and `B6-2` pattern of 9 | 3.3 | It is itself the route: the published percentage stands beside it in the same unit the complaint is made in. **Never reset.** A weights change forks the counter, the old configuration keeps its history and stays visible, the new one starts at zero and says so | Per round |
| **Published chance per item** | `D2`, on `B7-2` | 3.3, rendered by 0.6 | The observed counter beside it, and the ticket range the roll resolves against | Static until the configuration changes |
| **Current value per item** | `D2`, with the market price and timestamp from `A1` | 1.0, 3.1, 3.3, rendered by 0.6 | The outbound market link on the item | Per read |
| **Published tested RTP for this case** | `D4`, on design principle 3 and `B1-2` | 3.3, and before login on 1.0 | **The test itself, which has to be named and dated: who tested, when, over how many opens.** Open, see section 10 | Static until the configuration changes |
| **Expected value at this entry cost** | `D4`, design principle 3 in `CLAUDE.md`, "odds, cost and expected value are visible and legible" | 3.3 | **The strongest row in the register: it is recomputable with arithmetic from the chances and values printed on the same screen.** A reader who distrusts the figure can derive it without leaving the page | Static until the configuration changes |
| ~~**Live free-unit count per item**~~ | `A2`, on `B8-1` | **Nowhere.** Was 1.0, 3.1, 3.3 | **Withdrawn 21 August 2026, `D-60`, and it is the first row in this register to use section 7's withdrawn state.** Every item is current and available, so the product computes no such figure and no surface reads one. **The row stays rather than being deleted**, because section 7 requires this file to keep a withdrawn figure with its reason, and a figure that leaves a register silently is a figure somebody restores by habit | Was real time |
| **Rolling median and p90 withdrawal time** | `A4` and `G3`, on `B8-2` pattern of 6 and Related Job 1 | 1.0 before login, 5.3, and 0.2 if slot 2 is approved | The person's own clock on their own withdrawal, row `G1`, which either lands inside the published figure or does not | Rolling window, length `[?]` |
| **Published ceiling per withdrawal state** | `G2`, on `B8-2` | 5.3 | The same clock. The row's own success signal is that our states stay inside the published ceiling at p90 | Static until republished |
| **Per-state timer with attribution to us, Steam or you** | `G1`, on `B8-2` | 5.3 | It is the check for the two rows above | Real time |
| **Published appeal response deadline** | `G4`, on `B8-3` pattern of 3 | 5.3, 2.9, 0.10 | The person's own appeal, which either gets an answer inside the deadline or does not | Static until republished |
| **Published deposit crediting window** | `C3`, on `B4-3`. **Added by the step 8 audit:** `C3` promises a named timer and this register held no deposit row at all, so `4.1` had a promise with no owner | 4.1, and the crediting state 4.4 | The person's own deposit, which either credits inside the published window or does not. **Value `[?]`**, and a competitor states the same figure only in an FAQ, which is the placement this row exists to refuse | Rolling window, length `[?]` |
| **Commission, zero to Steam** | `G6`, Related Job 5, job only, no barrier | 1.0, 5.3 | The withdrawal itself. A commission of zero is the one figure a person verifies by finishing the transaction | Static |
| **Risk band per case, three named values** | Design principle 3 in `CLAUDE.md`, quoted: odds, cost and expected value are visible and legible. Placed on the tile by `D-24`. **No backlog row yet** | 1.0 and 3.1 as a band rendered by 0.7, 3.3 as the figure it is derived from | **The method reads the same drop table whose chances and values are printed on 3.3**, so a reader recomputes the band without leaving the page, the way the expected value row already works. **The thresholds between the three values are `[?]` and the band cannot render until they are set** | Static until the configuration changes |
| **Favourite count per case** | **None in the three legal classes.** In by founder decision `D-24`, which is also what amends rule 7 to admit it | 1.0 and 3.1, rendered by 0.7 | The person's own press, which moves the count by one in front of them. It has no other route and it claims nothing beyond itself | Real time |
| **Steam API health, the degraded flag** | `G2` | 5.3 as a banner | A published state rather than a figure, driven by a measurement, and it is in this register because it obeys the same missing-data rules as the numbers it protects | Real time probe |
| **How our values across one case stand against the market** | **Barrier `B7-1`, the gap between what a win appears to be worth and what it is worth, pattern of 7**, by way of `D-91` of 23 August 2026, plus design principle 1 in `CLAUDE.md` quoted by its `D-14` limit. Row `A1` supplies the two prices; **no backlog row asks for the case-level aggregate of them, and that is printed rather than smoothed**, section 2b | **3.3 block 7.** Not on 1.0 and not on 3.1 | **`[?]`, and this is the row's whole problem.** A reader has to be able to recompute it or wait for it, rule 1, and nothing here says from what. Section 2b names what a method would have to say before this row can ship | **`[?]`.** The cadence is part of the claim, the way the rolling window is part of `A4`'s |
| **The date this case's values were last set** | **The same parent, and it is half of what the row above means.** `D-91`: prices inside a case are frozen at the moment the case was priced, because re-pricing one item re-prices the case and moves the value of every unwithdrawn copy in every inventory on the platform. **The market re-prices itself daily, so the age of the freeze is the other half of the gap** | **3.3 block 7**, beside the figure above | **`[?]`.** It is the as-of rule 2 already requires, pointed at a figure that does not move on its own. **A gap figure with no date behind it cannot be checked by the person reading it** | **Static until the case is re-priced**, which is the one event that changes it |

**Both rows render as absences today and neither renders as a placeholder.** Rule 3, and there is a sharper reason on this pair: **a zero printed for the gap would read as "our values match the market"**, which is the one claim the two walked captures disprove outright, `research/docs/baseline-account.md` section 5 and the founder's second capture of 23 August 2026. **A figure that lies in the direction of encouraging the spend is the worst class of missing-data defect this register exists to prevent.**

**And the gap is unsigned until it has a value.** Four of the nine rows in the 18 August walk sat above the market rather than below it, so when the figure arrives it carries a sign in both directions.

**Amended the same day by `D-92`, and only the rendering survives unchanged.** `D-91` described the subtraction as our price against the market's. **It is our price against our other price**, both set by us, both known continuously. **The figure still renders as an absence and the reason is now a different reason.** It was absent because reading a live market costs something and no venue was chosen; **it is absent today because we have not published a number we hold**, which rule 3 treats identically on the screen and section 10 no longer treats identically in its owner column.

---

## 2b. What a method for the two rows above would have to say

**Neither row ships until this is answered, and this section is the question rather than the answer.** `CLAUDE.md`: never invent a number, and a method is a number's shape. **This node names the shape the method has to have and fills none of it.**

| What the method must state | Why it cannot be skipped | Value |
|---|---|---|
| **What is being compared** | Our value for an item against **the price of a copy that can actually be bought**, never the Steam listing. `D-91` fixes that half: on the founder's second capture those two read `51.33` and `70.26`, 27 percent apart. **`D-92` adds a sentence rather than changing it:** the purchasable copy is ours, and **the Steam listing it is set against becomes the anchor the whole figure is published as a relation to.** Steam stays out of the subtraction and arrives beside it | **Decided.** The purchasable copy, **ours since `D-92`, published against Steam** |
| ~~**Which venue supplies that price**~~ **Closed 23 August 2026 by `D-92`, founder decision** | ~~Row `A1` says "a named market venue" and **no file in this repository names one.** Until it does the figure has no source, and rule 9 forbids printing a number about someone else without one.~~ **The argument is kept because it is what the answer has to be read against.** The founder: the prices are ours, taken from Steam, and the market for these items is this product. **So the venue is us, and rule 9 stops applying to this figure at all**, because it is no longer a number about someone else. **What replaces it is harder rather than easier:** a figure we set on both sides has no external source to name, so **its route cannot be a source**, and section 2c is where that is worked out instead of waved past | **Decided. Us.** **What stayed open is the relation: how far under Steam we set a copy**, `[?]`, section 10 |
| **How the per-item gaps become one case figure** | A mean, a median, a chance-weighted mean, or the gap on the expected value itself. **They give different answers on the same case**, and a chance-weighted figure is the only one that answers "what will this cost me on the way out" rather than "what does a random item in here cost" | `[?]` |
| **What happens to items with no copy on sale** | Two of the nine rows walked had no offers. **They cannot be dropped silently and they cannot be counted as zero**, because both moves flatter the figure. Whether they are excluded with their count printed, or the figure is withheld above some share of them, is a rule | `[?]` |
| **The unit** | A percentage of our value, or an amount in coins. **A percentage travels across cases; an amount does not.** Rule 10 also binds: an amount in coins carries the peg wherever money is spent, and the peg is not published | `[?]` |
| **How often it is read** | The cadence. **It is part of the claim**, exactly as the rolling window is part of `A4`'s, and a figure refreshed at an unstated interval is read as current forever. **`D-92` takes the cost out of this row and leaves the claim in it:** both operands are ours and both move under our own hand, so **the interval is chosen rather than afforded** | `[?]`, **and nothing outside this company is holding it up** |
| **The sample floor** | Whether a market price read off a single listing counts. **A gap struck against one outlier offer is a number with a route nobody can check**, which is rule 4 pointed at a different kind of thin sample. **Amended 23 August 2026 by `D-92`, and the question moved rather than closing:** the six offers on the 23 August capture were one skin at one price under one discount, which is one seller, so **a sample of one is the construction and not an accident.** A floor counted over our own listings counts nothing. **The floor that still means something sits on the Steam side of the relation** and it is not set | `[?]`, **and on the Steam side now** |
| **The route** | Rule 1: a stranger opens it, computes it or waits for it. **The expected value row is the model to beat**, because its route is arithmetic on figures printed on the same page. ~~**The gap's route cannot be that**, because half its inputs are on somebody else's page~~ **Amended 23 August 2026 by `D-92`, and the obstacle inverted.** No input is on somebody else's page any more, so the model to beat is reachable, **and reaching it proves only that we can subtract two of our own numbers.** The route that carries weight is the one input a stranger can check without us: **the Steam price and our stated relation to it**, section 2c | `[?]`, **and a different `[?]` from the one it replaces** |

**One thing is decided and it is not the method.** **Where the figure renders**, `3.3` block 7, and how it behaves while it is missing, which is as an absence with the missing method and the missing freeze date both named beside it. `case.md` section 5.3.

**And the parent is printed rather than borrowed.** `A1` is the row that puts two prices on one item, and it is the parent of the pair. **The case-level aggregate of them is not in `cjm-to-be.md` at all.** `D-91` leaves open whether the backlog gains a settlement row or whether `A1` and `B7-1` already carry it, and **nothing was retro-fitted into that file**, which is the same discipline `D-38` and `D-60` left in place.

**Seven of the eight were `[?]` on 22 August and six of them are `[?]` today**, one closed and two rewritten into different questions. **The count is the least interesting thing about that.** What matters is that **the method has no external dependency left**: every remaining row is a rule this company writes, so the register stops being able to say the figure is waiting on anybody.

---

## 2c. What `A1` requires on this product now, and whether it is met

**This section is this register's answer to the second half of `D-92`, and it is not a tick.** `A1`, verbatim from `cjm-to-be.md`, MVP backlog: **"Two prices, one item: live market price with timestamp beside the exact chance at this entry cost, an outbound market link on the top item, and the cheaper-on-average statement in our own voice."** Parents `B1-2`, **pattern of 14, described in `cjm-as-is.md` as the strongest pattern in the corpus**, and `B2-1`, the pre-login information wall.

**Naming the venue did not close `A1`. It changed what closing it means**, and this is the file that has to work that out rather than assume it.

### 2c.1 What the outbound link was actually buying, and it was two jobs on one control

**`B1-2` is people teaching each other to buy the skin outright instead of opening for it.** `A1` answers that by conceding it on our own page, before login, with a number attached. **The concession has two halves and `A1` hangs both on a single link.**

| The job | What the link did | What that job needs |
|---|---|---|
| **Verification** | A person leaves, reads the price somewhere we do not control, comes back. **The proof is that we did not host the number** | A source that is not us |
| **Concession** | "Here is the cheaper way to get this exact item, and we are showing it to you at the cost of our own sale" | A cheaper alternative that is not us |

**On this product those two point at different places, and that is the whole of the difficulty.** Steam is checkable and **dearer**: the two walked captures put a copy from us 39 percent and 27 percent under the Steam listing, `D-92`. Our own listing is cheaper and **verifies nothing.** **`A1` assumed one object where this product has two**, and naming a venue does not merge them back.

### 2c.2 What the drawn screens already do, checked before the verdict was written

**This was read off the stage 04 screens rather than reasoned from the backlog, and it changes the answer.**

| Surface | What `A1`'s "live market price" is there | What the route is |
|---|---|---|
| `1.0`, `3.3`, `3.6` | **Steam, in EUR, with its own as-of, marked not comparable to our coin value until the peg is published** | **A live outbound link to Steam's market**, labelled "Open on the market" |
| `5.1`, `5.3` | **Ours, in coins**, the price we charge for a real copy, since `D-92` | **No route.** `5.3` says in words that the Steam listing is a different and higher number and prints no Steam figure; `5.1` says we set our prices against Steam and prints no Steam figure |

**So one backlog row means two different numbers on two groups of surfaces, and no file said so before this pass.** On the acquisition surfaces "market" is Steam. On the exit surfaces "market" is us. **Both readings are correct in their own place and the word is the same word**, which is the failure this register exists to prevent, arriving on the one row with a pattern of 14 behind it.

### 2c.3 The six requirements, restated for this product

| | Requirement | State on 23 August 2026 |
|---|---|---|
| **R1** | **Two prices on one item, and at least one of them not ours** | **Split, and that is the finding.** Met on `1.0`, `3.3` and `3.6`, where our coin value sits beside a Steam figure in EUR. **Not met on `5.1` and `5.3`**, where since `D-92` both operands of the settlement are ours |
| **R2** | **An as-of on the one that moves** | **Met on all five.** `D-91` put it above the inventory grid on `5.1` and beside the market column on `5.3`; the Steam figure carried one already |
| **R3** | **The exact chance at this entry cost, beside it** | **Met in specification**, row `D2` on `3.3`, **and conditional on `D-C`** exactly like every other row in this register |
| **R4** | **An outbound route to something we do not control** | **Met.** The drawn `3.3` links to Steam's market, which is genuinely outside us and genuinely checkable. **~~Wrong in its words, because it offers a cheaper alternative and leads to the dearer place.~~ Withdrawn on verification, 23 August 2026.** The comparison `A1` is making is against **opening a case**, not against our copy price, and against opening, Steam is still the cheaper route on average. **Our copy price is not a route at all:** there is no product that sells a skin, and that price is reachable only by winning the item first, which costs an entry. A price nobody can buy at is not an alternative. **What survives the withdrawal is a different and better finding, kept as R7 below** |
| **R5** | **The relation to Steam, printed as a number** | **Not met anywhere.** How far under Steam we set a copy is `[?]`, it is ours, and **it is not a constant**: 39 percent on one capture and 27 percent on the other. Both `5.1` and `5.3` name the relation in words and print no figure for it |
| **R6** | **The cheaper-on-average statement, with its comparator named** | **Partly met.** The sentence renders pre-login on `1.0` and on every case screen. It says buying an item outright is cheaper on average than opening for it and **it never says who from.** Since `D-92` the honest answer is us, and the reader is not told |

### 2c.4 The verdict

**Partly satisfied.** One requirement met outright, one met in specification, one met on three surfaces and broken on two, one met mechanically and wrong in its label, one partly met, one not met at all.

**R7, and it is what R4 turned into.** **This product now holds a price for a copy that is below Steam and offers no way to buy at it.** On the two captures our copy sat 39 and 27 percent under the Steam listing, and the only route to that price is to win the item first and withdraw it. **That is not a defect in a link, it is a fact about the product**, and it is the sharpest form of `B1-2`, the barrier that says a person can simply buy the skin instead: the cheapest copy in the whole arithmetic is ours, and reaching it costs an entry. **Whether that is said out loud anywhere is undecided and it is the founder's**, because saying it is a pricing disclosure and not a layout choice.

**And the shortfall changed shape rather than shrinking.** On 22 August every gap in this row was an unchosen input: pick a venue and R1, R4 and R5 all resolve together. **Today they resolve in three different directions and two of them cannot resolve at all without a decision above this stage.** A requirement waiting on an answer and a requirement that has stopped being coherent read identically in a `[?]` column, and **that is exactly what four disappearing `[?]` marks concealed on 23 August.**

**Which of them `D-92` caused, said precisely rather than blamed in a heap.** R1's split is `D-92`'s: it is the decision that made the exit-side market figure ours. R5 is `D-92`'s, and it is the good half, because the figure is now ours to publish. **R4 was reported as a defect and did not survive verification**, and the withdrawal is in its row with the reason: the comparison is against opening, not against our copy, and our copy is not purchasable. What `D-91` and `D-92` did create is R7, which is not a defect in a control at all, the same way `D-84`'s drift was made unignorable rather than caused by `D-91` in `skin-card.md` section 3.1.

**Why the trade is still the right one, and this is not a consolation prize.** Against an outside venue our own two numbers were opaque and the venue was checkable, so a sceptic could verify everything except the thing they actually doubted. **Against Steam our numbers become checkable as a stated relation**, which is design principle 1 in the exact `D-14` wording, "the product is built so that its own numbers are checkable". **What a `B1-2` sceptic disputes is our pricing, not Steam's.** The relation answers that and the outbound link never did.

**And what the trade does not cover.** The label. **Shipping "buy it on the market instead" unchanged turns an honesty gesture into advice that costs the reader money**, while we sell the same copy cheaper. That is not a string for stage 05 to tidy: **it is a requirement that has to be re-decided before there is a string to write**, because whether we tell a person the cheaper source is us is a claim about pricing.

### 2c.5 What would satisfy it, and nothing here is decided by this node

- **Publish the relation as a number.** R5, and it is the single figure standing between this register and a satisfiable `A1`. It is ours. Section 10 carries it as a decision rather than a dependency.
- **Relabel the link that already exists.** It stays pointed at Steam, it stops being a cheaper-alternative route and becomes a verification route, **and the words have to say which one it is.** The link is drawn; the sentence around it is the defect.
- **Say on the exit surfaces which "market" is meant.** R1's split, section 2c.2. `5.1` and `5.3` already name the relation to Steam in words and **neither prints the Steam figure that would make the pair two prices again.**
- **Name the comparator in the cheaper-on-average sentence.** R6. The string is stage 05's; **whether the comparator is us is the founder's**, because it is a claim about pricing and not a wording choice.
- **Split `A1` in the backlog, or decide out loud that it does not split.** One row for the Steam reference relation, one for the cheaper alternative. **Not retro-fitted here**, the discipline `D-38`, `D-60` and `D-91` all left in place. Owner: the stage that reopens the backlog.

---

## 2d. The caveat under all of it, and it is one word wide

**The founder's wording was "our market should, in principle, be the product itself".** The 23 August capture is consistent with it: **six offers for one skin, all at one price, all badged at the same discount against Steam**, which is what a single seller looks like and not what a market of sellers looks like.

**If those copies are in fact sourced from a third party at the moment of withdrawal, one word changes in every line of 2b and 2c**, from `we` to a named party, **and `A1`'s outbound link recovers the job it was written to do.** R1 stops being split, because the exit-side figure gains an owner who is not us, and **R4's label stops being wrong**, because "buy it on the market instead" points at a cheaper place again. Both become ordinary open questions with a venue to name.

**Flagged rather than assumed**, `D-92`'s own instruction, and carried in section 10 as a live row with the founder as owner. **It is not a footnote: it is the difference between two of six requirements needing a decision above this stage and being merely unanswered**, and no file in this repository can settle it, because it is a question of fact about how the live platform buys.

---

## 2e. Amended 24 August 2026 by `D-93`. The caveat above is spent, and one register row gets a method

**The founder confirmed on 24 August 2026: our market, we sell the copy.** Section 2d refused to spend `D-92`'s "in principle" and named what a third-party source would change. **It is not a third party.** Every line of section 2c stands as written.

### The per-case gap row now has a method, a cadence and a named owner

| | Before `D-93` | After |
|---|---|---|
| Method | Undecided | Every item weighted by its published chance, our value against what we charge for a copy, one signed percentage |
| Cadence | Undecided | Every item read at one moment, re-read when the case is priced again or the market moves |
| Value | `[?]` | `[?]` |
| Owner | Node `0.11` | **The founder** |

**The value did not move and that is the point.** What moved is the shape of the debt: **a `[?]` with no method behind it is a debt nobody can pay**, because nobody knows what number would settle it. A `[?]` against a published method is one value from one person.

**Requirement six of `A1` in section 2c.3 is the same figure**, so this is the row that would take that requirement from not met to met.

### `R7` stays a finding and does not become a block

The product holds the cheapest copy in its own arithmetic and offers no route to it except winning first. **Founder decision, 24 August 2026: it is not printed in the product.**

**It is a fact about our pricing, not a fact a person can act on.** The price cannot be bought. **Printing a price nobody can pay is the dead item defect expressed as a number** rather than as a control, and rule 3 of section 5 is the same instinct applied to a zero.

**And the honest form of the idea is already shipped**, in `A1`'s own voice on `3.3`: if you can afford an item outright, buying it is cheaper on average than opening for it.

### The two venue questions, which read identically and have opposite answers

**Named here because eleven pages were nearly rewritten the wrong way on 24 August 2026.**

| Question | Answer |
|---|---|
| Where does the copy on a withdrawal come from | **Us**, `D-92`, confirmed `D-93` |
| Which two venues price the `F1` instance value receipt | **`[?]`, and neither of them can be us**, `D-92` |

**The first is closed and the second is narrowed.** A fix that treated them as one would have made `3.6`, `3.7` and the five `7.1` pages say "there is no outside listing because the copy comes from us", **which is the opposite of what `D-92` decided about the receipt.** Caught before commit and reverted.

---

## 3. Group B: numbers we quote from outside

The source is somebody else's. For these, the rule is not "publish the method", it is **name the source and the date, or do not print the number**.

| Number | Source | Read on | The rule it carries |
|---|---|---|---|
| **Live market price with timestamp, plus an outbound market link on the top item** | ~~A named market venue~~ **Us, since 23 August 2026, `D-92`**, at a price we set against Steam. **Which puts this row in the wrong group and it is kept here with that printed rather than moved quietly**, section 10 | 1.0, 3.3 | Row `A1`. The timestamp is visible, not implied. ~~The link is genuinely outbound~~ **and what the link now points at is the open question of section 2c**, because the only target a stranger can check is Steam and Steam is the dearer one. `cjm-to-be.md` records that outbound clicks are tracked as an accepted cost and never as a failure metric, **and that protection has to survive whatever the link becomes** |
| **Instance value receipt: current sell price for the comparable float band and phase on two named venues** | ~~Two venues, `[?]` which~~ **Narrowed 23 August 2026 by `D-92`, and not closed.** The decision binds `0.6` and answers the settlement's venue, not this one. **What it does settle is that neither of the two can be us**: our price quoted beside our price is one reading printed twice | 3.6, then carried by `F2` onto 5.1 and 5.3, rendered by 0.6 | Row `F1`. Priced as **that instance**, never as the skin name, and the link opens the venue listing filtered to that float band so the person checks it themselves rather than taking our word. **Steam is the one candidate this repository can name and no decision names it. The second is `[?]`** |
| **Trustpilot score** | Trustpilot, live | 1.0 hero | Row `A5`. **Live or not at all.** A hardcoded score is a fabricated review claim, which is a different category of wrong from a stale number |
| **Named third-party RNG auditor** | An auditor we have not engaged | 1.0 hero | Row `A5`, and **it cannot render today.** `lean-ux-canvas.md` records that nobody in the category has a named auditor, which is the opportunity and also the fact: we do not have one either. A placeholder badge is the invented certification node `0.2` refused |
| **Steam Market's 15 percent fee** | `jtbd.md`, Related Job 5, research basis, sourced there to `strategy.md` and `competitors.md` | 1.0, 5.3, wherever `G6` argues its value | A number about a third party that can change. Dated and sourced where printed |
| **Category tested RTP figures** | `aarrr.md`, "What competitors reveal": Hellcase 82.1 percent tested, DatDrop 80.6 percent tested across 118 cases, Key-Drop 89 percent **stated**, Clash.gg 90 to 92.8 percent platform-disclosed | Only where a comparison is printed | **Never mix a tested figure with a stated one in the same comparison.** Two of those four are third-party tests and two are platform claims, and a row that prints them side by side as though they were the same measurement is doing the thing this product exists to stop |

---

## 4. Group C: proposed, and not capabilities yet

Kept visible so that nobody later ships one by assuming it was approved.

| Candidate | Status |
|---|---|
| **Aggregate tested RTP across all cases** | Proposed by node `0.2` as the fallback for statistics slot 4. Adjacent to `D4` rather than inside it, so **it needs its own backlog row before it can ship** |
| **Online users** | Carried with a condition by `0.2`: it ships only if it counts humans in real time. If it cannot, it does not ship |
| **Total users, Upgrades** | **Cut by `0.2`**, one as unverifiable from outside and one as a counter for a LATER mode. Recorded here so they are not restored by habit at stage 04 |

---

## 5. Ten rules every published number obeys

1. **A route, or it does not ship.** Every figure points at something a stranger can open, compute or wait for. `D-14`: a number without one is decoration that looks like evidence.
2. **An as-of moment on anything that moves.** Row `A1` requires the timestamp by name, and the rule generalises: a figure with no time attached is read as current forever.
3. **Missing is a state, never a zero.** A dash that reads as zero and a zero that means "we do not know" are the same lie in two typefaces. `CLAUDE.md`: unknown is `[?]`, and that discipline is why this register exists.
4. **Below the sample floor, print N rather than a percentage.** `D-B` says the observed rate counter is worth nothing at N = 0. A percentage over a handful of rolls is not a smaller truth, it is a different claim.
5. **A configuration change forks the counter.** From row `D3` verbatim: the old configuration keeps its history and stays visible, the new one starts at zero and says so. A counter that silently absorbs a weights change is worse than no counter.
6. **A failed source is marked degraded, never frozen at its last good value.** The Steam health probe in `G2` is the pattern, and it applies to every real-time figure here.
7. **A number is never a score.** No summing across kinds, which is why the header's two money figures are never added, node `0.1`. No streaks, no progress, no celebration, which is the rule `C5` and `T4` attach to limits and which binds this register too: the moment a figure acquires completion mechanics it stops describing and starts encouraging. **One named exception, and it is named rather than quietly allowed: the favourite count on node `0.7`, founder decision `D-24` of 18 August 2026.** It is a count of accounts that marked a case, not a rank, not a rating and not a measure of anything the platform is claiming. The decision that admits it also fixes what it may never become: a rank, a default sort, a most-popular strip, a badge on a top tile, or a figure beside an open control. **It is one count in one place and it is not a precedent for a second.**
8. **Text, never an image.** A figure baked into a picture is invisible to search, to a screen reader and to a person who copies it into a complaint.
9. **A number about someone else carries its source and its date, or it is `[?]`.** The same rule this project applies to its own research, applied to product copy, because a comparative claim in the interface is a claim about a third party.
10. **A money figure carries its unit, and a coin figure carries its peg wherever money is spent.** `D-28` of 19 August 2026 reversed `C1` and made the coin the product's denomination, which removed the structural answer to `B7-1`, the currency abstraction that hides what things cost. **What is left of that answer is this rule, and the decision ships on it rather than beside it.** Wherever a person is about to spend, commit or withdraw, the coin figure renders with what one coin is worth in real money, from a published rate carrying its own as-of under rule 2. **Three consequences, and each one is a place this rule is checked.** A coin figure with no peg within reach of the spend is the abstraction `B7-1` names, not a shorter label. **Time and ratios do not become coins:** `A4` and `G3` stay minutes, `D4` stays a percentage, and converting either into coins would be summing across kinds under rule 7. **A figure quoted from outside stays in its own unit:** `A1`'s Steam market price is real money, and until the peg is published it is marked as not comparable rather than set silently beside a coin value.

---

## 6. Refresh classes

Five, and every row in sections 2 and 3 belongs to exactly one. The class is what decides both the staleness rule and the cost.

| Class | Rows | What staleness means here |
|---|---|---|
| **Real time** | The withdrawal clock `G1`, the Steam health probe `G2`, the favourite count per case. **The free-unit count `A2` left this class on 21 August 2026, `D-60`**, and the favourite count was missing from it since `D-24` put it in group A as a real-time row | Any lag is a wrong answer. Degraded rather than stale |
| **Per round** | Observed rate counter `D3`, cases opened | Moves with the product. Never rewritten backwards |
| **Rolling window** | Median and p90 `A4` and `G3` | The window length is part of the claim and has to be printed with it. Length `[?]` |
| **Per read** | Market price `A1`, instance value `F1`, Trustpilot score `A5` | Fetched when the page is read, and carries the moment it was fetched |
| **Static until the configuration changes** | Published chance `D2`, tested RTP and EV `D4`, ceilings `G2`, deadlines `G4`, commission `G6`. **The date a case's values were last set joined this class on 23 August 2026, `D-91`**, and it is the odd member: it is not a figure about the product, it is **the moment the rest of this class last moved**, so it is the class's own as-of rather than a row inside it | Changing one is a republication, with rule 5 applying wherever a counter is attached |
| **Unassigned, and the row cannot ship until it has a class** | **The per-case gap against the market, `D-91`.** Its cadence is `[?]`, section 2b, and the class is what decides both the staleness rule and the cost. **A row with no refresh class is a row nobody can say is stale**, which is the reason this table exists. **Amended 23 August 2026 by `D-92`: the cost half of that sentence is gone.** Both operands are ours and both move under our own hand, so **the class is chosen and not afforded**, and the row stays unassigned by decision | **Every kind of staleness at once**, which is why it renders as an absence rather than as a value with a guessed stamp |

---

## 7. State matrix

Rows are the states any published figure can be in. Columns are what the figure shows, what its route does, and who is told. **Every consumer inherits all seven**, which is the practical reason this node exists.

| State | The figure shows | The route | Who is told |
|---|---|---|---|
| **Live** | Value, unit, as-of where the class requires one | Works | Nobody. This is the normal case |
| **Stale** | The value with its real as-of, marked as older than its refresh promise | Works | The reader, in the same block. Never the value alone |
| **Degraded** | The last known value **and** the fact that the source is failing, or nothing at all where a wrong number is worse than no number | Works, and says what it is checking | The reader on the surface, and the banner on 5.3 for the Steam case |
| **Below the sample floor** | N and the published figure. **No observed percentage** | Works | The reader, in the counter's own words |
| **Missing** | An explicit "not available", never a zero, never a dash | Points at what would produce it | The reader |
| **Forked** | The new configuration from zero, and the previous configuration with its full history beside it | Both work | The reader, because the fork is the disclosure |
| **Withdrawn** | Nothing. The figure is gone, and where it was load bearing the surface says a number used to be here and why it is not | Gone | The reader, and this file, which keeps the row with its reason |

**The withdrawn state is not decoration.** `D-B` can disqualify the observed rate counter, `D-C` can disqualify the whole class, and `A5` cannot render until an auditor exists. A register whose only states are working ones would have to be redrawn on the first no.

---

## 8. Anatomy of a figure block

One shape, five parts, and stage 04 renders it rather than inventing per surface.

| Part | Behaviour | Rule |
|---|---|---|
| **Value** | The number itself, as text | Rule 8. The largest element in the block, and never the only one |
| **Unit and caption** | What it counts, in words a person uses | No unit, no claim. "82.1" is not a figure, "82.1 percent tested RTP for this case" is |
| **As-of** | The moment it was true | Required by class for real time, per round, rolling window and per read. Omitted only for static rows |
| **Route** | The link, the recomputation, or the named wait that checks it | Rule 1. It is part of the block, never a footnote elsewhere on the page |
| **Comparison** | Optional. Our figure against a category figure or a published ceiling | Only where both sides carry a source and are the same kind of measurement, rule 9 and the `aarrr.md` tested-against-stated split |

---

## 9. SEO and accessibility

**The register has no public URL.** It is documentation, not a surface. What it constrains is how figures appear on the indexed pages that read it, and node `0.13` owns indexation, canonical and schema for those pages.

- **Every figure is crawlable text**, rule 8, which is also the "text not in images" line in the A to E checklist. The pre-login figures on `1.0` and `3.3` are the product's entire pre-login argument, and an image would remove them from search and from a screen reader in the same stroke.
- **The accessible name carries the unit and the as-of**, not the bare digits. A screen reader that announces "82.1" has announced nothing.
- **Real-time counters do not shout.** A live region that fires on every round is a denial of service to a screen reader. Real-time figures update silently by default, with the current value always available on demand; where an update genuinely changes what a person can do, the announcement is polite and rate limited. This is a design rule with a stated reason, not a quoted success criterion.
- **A degraded or missing figure is announced as such**, in text, in the block. Colour alone never carries that state.
- **Numbers do not carry schema of their own.** Where a page type takes structured data, `0.13` assigns it.

---

## 10. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The method behind the per-case gap against the market** | **Opened 23 August 2026 by `D-91`, section 2b, and narrowed the same day by `D-92`.** Eight things a method has to state. ~~Seven of them are `[?]`: the venue, the aggregation, the treatment of items with no copy on sale, the unit, the cadence, the sample floor and the route.~~ **The venue closed, `D-92`, and two of the remaining seven were rewritten into different questions rather than answered:** the sample floor moved to the Steam side of the relation, and the route stopped being blocked and started being weak, because arithmetic on two of our own numbers proves only that we can subtract. **Six are `[?]` and none of them waits on anybody outside this company** | Founder, with whoever owns pricing. **A decision, no longer a dependency** |
| **The value of the per-case gap, and the cadence it is read at** | The figure itself, and how often. **It renders as an absence on `3.3` until both exist**, because a zero there would read as "our values match the market". **Amended 23 August 2026 by `D-92` and the ownership of this row changed under it.** `D-91` left the value `[?]` partly on the reasonable ground that reading a live market has a cost; **both sides are ours, both are known continuously, and the figure is arithmetic on two numbers we already hold.** **The value stays `[?]` because we do not hold it in this repository**, `CLAUDE.md`, never invent a number. **What is gone is the excuse**: a number we set on both sides and decline to publish is a decision and not a gap | Founder. **Owner is a decision, not a dependency** |
| **How far under Steam we set a copy** | **Opened 23 August 2026 by `D-92`, section 2c requirement R5.** It is the one figure that makes our two prices checkable by a stranger, because Steam is the only number in the chain they can read without us. **Two walked captures read 39 percent and 27 percent, so it is not a constant, and neither the figure nor the rule behind it is published.** `[?]`, and it is ours: **this is an undeclared margin rather than an unknown**, which is a sharper hole than the venue question it replaces | **Founder.** Nothing external gates it |
| **What the outbound link on the top item says it is for** | **Opened 23 August 2026, section 2c.4, and the defect predates the decision that exposed it.** The link is drawn on `3.3` and points at Steam, which is the right target for verification. **Its wording offers a cheaper alternative and Steam is the dearer place**, by 39 percent and 27 percent on the two captures. **A concession that costs the reader money is not a concession.** The route is not in question; what the route is for is | **Founder**, because it is a claim about our pricing and not a string. Stage 05 writes it once the claim is settled |
| **Which "market" the exit surfaces mean** | **Opened 23 August 2026 by `D-92`, section 2c.2.** Row `A1`'s live market price is Steam on `1.0`, `3.3` and `3.6` and is ours on `5.1` and `5.3`, **and one backlog row now denotes two different numbers with one word.** Both readings are right where they sit. **Neither exit surface prints a Steam figure**, so on those two the pair is our price beside our price | This node and the two exit nodes, at the pass that also settles the link |
| **Whether `A1` splits into two backlog rows** | **Opened 23 August 2026 by `D-92`, section 2c.** `A1` hangs verification and concession on one outbound link, and on this product Steam verifies and is dearer while we are cheaper and verify nothing. **Two of `A1`'s six requirements cannot be settled inside this stage**, section 2c.3, R1's split and R4's label. **Nothing was retro-fitted into `cjm-to-be.md`** | The stage that reopens the backlog, and the go is explicit |
| **Whether the copies are in fact ours at the moment of withdrawal** | **Opened 23 August 2026 by `D-92`, section 2d.** The founder's wording was "in principle", and the capture is consistent with a single seller rather than proof of one. **If a third party supplies the copy at withdrawal time, one word changes in sections 2b and 2c and `A1`'s outbound link comes back to life.** A question of fact about the live platform that no file here can settle | **Founder** |
| **Row `A1`'s price sits in group B and is ours** | **Opened 23 August 2026 by `D-92`, section 3.** Group B is "numbers we quote from outside" and this number is now one we set. **The row is left where it is with the contradiction printed rather than moved**, because a register that re-groups a figure quietly is the failure this node exists to prevent, and moving it also moves what rule it obeys: group A owes a publishable method and group B owes a source and a date | This node, at the pass that also settles what the outbound link points at |
| **The date a case's values were last set** | The freeze date behind every value inside a case. **Prices in a case are frozen and the market moves daily, so the age of the freeze is half of what the gap figure means.** No file holds the value and no mechanism publishes it | Founder, question of fact to the live platform |
| **Whether "tested return to player" is renamed** | `D-91` states the denomination in words on `3.3` and **deliberately does not touch the label.** If the label changes, `D4`'s row in group A changes with it and so does every surface that prints it | Founder |
| **Whether `cjm-to-be.md` gains a settlement row** | The two rows above have a parent in `B7-1` and in `A1`, and **the case-level aggregate has no backlog row of its own.** Carried with that printed rather than retro-fitted, the treatment `D-38` and `D-60` both used | The stage that reopens the backlog |
| **`D-C`, the internal observed-against-published check** | It runs on live platform data before any of this is drawn, and the publication is permanent once made. Scheduled before stage 04 | Founder, on the live platform |
| **`D-B`, whether roll history migrates and can be published** | Decides the observed rate counter, and with it the route for cases opened | Founder, question of fact to the live platform |
| **The rolling window for median and p90** | Seven days, thirty, ninety. The length is part of the claim | Founder with the data, before stage 04 |
| **The sample floor for the observed counter** | The N below which the counter shows N and no percentage | Founder with the data |
| **Who tests our RTP** | `D4` says "published tested RTP". Tested by whom, over how many opens, and republished when | Founder. Same answer as the auditor below |
| **The named auditor** | Row `A5` prints a name we do not have. Nobody in the category has one, which is the opportunity and also the fact | Founder |
| **The two venues for the instance value receipt** | Row `F1` says two named venues. Which two is not decided anywhere. **Narrowed 23 August 2026 by `D-92` and not closed**, section 3: the decision answers the settlement's venue and not this one, **and what it does settle is that neither of the two can be us**, since our price quoted beside our price is one reading printed twice. Steam is the one candidate this repository can name and no decision names it | Founder, before stage 04 |
| **Statistics slots 2 and 4** | Carried from `0.2`. Slot 2 recommended: median and p90. Slot 4: online users only if honest, otherwise an aggregate RTP that needs its own backlog row | Founder, before stage 04 |
| **A browsable public round ledger** | It would give cases opened a single auditable total instead of a per-case reconciliation. **Not a backlog row today** | Founder. One row if yes |

**And what belongs elsewhere.** Where each figure sits on a screen: the node that reads it. How a figure is styled, sized or coloured: stages 06 and 07. The words around it: stage 05, which owns microcopy and syncs it back. Whether a figure is true: `D-C`, and that one is not a design question at all.
