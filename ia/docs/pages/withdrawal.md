# Node 5.3. Withdrawal, with the public clock

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned. **Base layer code:** `S-E2`.

**URL:** `/withdraw`, from `0.13`. **Indexed:** no. **Schema:** none. **Breadcrumb:** none. Inherited from the indexation register, section 3.

**Purpose.** Move a held item into the person's Steam inventory, **which on this product is a purchase and not a delivery since `D-91`, section 0b**, and make both the cost and the wait legible while they happen: what the difference is and which way it settles, then every state named, every timer owned by us, by Steam or by the person, and every published figure checkable against their own clock.

**Jobs served.** Related Job 5, withdraw and get what I earned, and Core Job 3, withdraw cleanly, `jtbd.md`. **Parent class:** barrier `B8-2`, waiting with numbers, pattern of 6, by way of rows `G1`, `G2` and `G3`; barrier `B8-3`, winning treated as suspicious behaviour, pattern of 3, by way of rows `G4` and `G5`; barrier `B8-4`, verification ambushes at the exit, pattern of 5, by way of row `B2`, which is an absence rather than a block; and Related Job 5 by way of row `G6`, which carries no barrier and says so.

**Renders:** `0.1` navigation, `0.2` footer, `0.5` toasts, `0.6` skin card. **Reads:** `0.11` for every published figure and for the Steam health probe, `0.12` for the legal ground behind a blocked market, `0.10` for the appeal route.

**Entered from:** `5.1` only, level 2. **Transitions:** `5.4` to `5.8`.

**Phase.** T8, the floor of the entire As-Is emotional map at `-5`.

**Amended 23 August 2026 by `D-92`, and the largest remaining `[?]` on this node closed into a smaller and sharper one.** The founder named the market the settlement price is read from: **it is us.** The prices are ours, taken from Steam, and the market for these items is this product. **So both columns of the four column table are ours**, our credited value and our price for a copy, **and the outbound route this node kept asking for cannot exist**, because a link to our own listing confirms nothing. **What block `1b` renders instead is the relation to Steam and the hole inside it**, section 1b.1: the price is ours, it is set against the Steam market, and how far under Steam we set it is not published. **The founder's own hedge travels with all of it**, section 9b: the wording was "in principle", and if a third party supplies the copy at withdrawal time one word changes on every line above.

---

## 0. The barrier, with its own figures

`B8-2` is the densest numeric barrier on the As-Is map. Ledger U-09, in `cjm-as-is.md`, P8: **30 hours, 7 days, 2 to 3 days, 9 days from last deposit, 16 hours, almost 3 weeks.** Against it, the positive pole is worth as much and is recorded in the same section: "Recently I won and withdrew a butterfly gamma doppler p2 within 5 minutes of winning", five stars. **The category can do this. Most of it does not.**

**The injury is not the duration, it is the unattributed silence.** `G1`'s success signal is the share of withdrawals that generate a support ticket asking for status, which is a measurement of how many people had to ask a human what their own transaction was doing. So the page's job is not to be fast. It is to make a slow withdrawal legible while it is slow, and to publish the number that says how slow we usually are before anyone needs it.

Three published figures do that work and all three already have an owner in `0.11`: **the rolling median and p90**, rows `A4` and `G3`; **the ceiling on each of our own states**, row `G2`; **the per-state timer with attribution**, row `G1`. None of their values is decided here. This node specifies where they render and what they may never do.

---

## 0b. The mechanic this node did not know the baseline had, found 18 August 2026, **closed 23 August 2026 by `D-91`**

**The account capture broke an assumption that runs under this whole node**, `research/docs/baseline-account.md` section 5, screenshot `acct_withdraw_step2_total.png`.

**On the live product, withdrawal is a purchase and not a delivery.** The screen prints it in a four column table of its own:

| SKIN NAME | YOUR SKIN PRICE | MARKET SKIN PRICE | YOUR BALANCE IMPACT |
|---|---|---|---|
| M4A4 Desert-Strike, Field-Tested | `4.48` | `27.52` | **`-23.04`** |

> "Based on the market price, `23.04` will be taken from your balance"

**The arithmetic closes exactly:** `27.52 − 4.48 = 23.04`. The item a person won is valued at `4.48` by the site, a real copy on the market costs `27.52`, and **the difference is charged to their balance at the moment they ask for the real thing.** In the observed row that difference is **five times** the value of the win, and a copy of it costs **six times** what the win was credited at (`23.04 / 4.48 = 5.14`, `27.52 / 4.48 = 6.14`). **The earlier wording said the difference was six times and that was the market price's ratio, not the difference's.**

**What this node assumed until 23 August 2026, and the paragraph is kept because it is the record of what was corrected.** Every block, state and figure below was written as though **the thing you won is the thing you receive**, and the only cost between them is time. `cjm-to-be.md` has no row for a settlement difference. `sitemap.md` has no state for it. `0.11` has no figure for it. **The gap is not an omission in this node: it is a mechanic the whole map does not model.**

**Three of those four sentences still stand and one does not.** The blocks and states below are now written against the settlement, section 0b.2, and the per-state matrix in section 6a says which of them carries it and why. **`cjm-to-be.md` is still untouched and still has no settlement row**, and `D-91` leaves open whether it gains one or whether `A1` and `B7-1` already carry it. **`sitemap.md` has one now**, its `D-91` debt section. **`0.11` has two rows now and both of their values are `[?]`**, `numbers.md` group A. **Nothing was retro-fitted into the backlog**, which is the same discipline `D-38` and `D-60` left in place.

**And it is `B7-1` stopping being a perception problem.** The barrier reads: the gap between what a win appears to be worth and what it is worth. **On this screen the gap is a number the product prints itself**, at the last possible moment, after the person has already decided they want the item.

### 0b.1 Two ways out, and this node may not pick between them. **The founder picked A**

| Option | What it means | What it costs |
|---|---|---|
| **A. Inherit the mechanic and move it forward** | The won item stays a credit note valued at the site price, and the settlement difference is disclosed **at the moment of the win and on the case page**, not at the checkout. `A1`'s two prices stop being a trust feature and become the spine of the product | **The reveal has to carry a second number**, and the outcome screen has to say what the win is worth against what a real copy costs. Emotional Job 2 and design principle 2 both take the hit, and stage 04 draws it |
| **B. Refuse it** | What you win is what you receive, and the drop table's values are real market values | **It rewrites the treasury model**, because the published chances and the RTP would then have to hold against real market prices rather than site prices. **This is a business decision and not a design one**, and no row in this repository can take it |

**The recommendation on the record, and it is a recommendation rather than a decision.** **A**, because B rewrites the economics of the product and A is what makes our trust positioning actually differentiated: we would be the platform that names the gap **before** a person spends rather than at the till. Design principle 1 and `D-14` both point the same way, and `A1` already exists to carry it.

~~**Owner: the founder, before stage 04 draws this node.** Until it is answered, **every figure below is specified against option B by default**, because that is what the node was written against, and the difference between the two is a block and a state rather than a redraw.~~

**Struck 23 August 2026. Both halves of that sentence turned out false and each one differently.** Stage 04 drew this node before the answer arrived rather than after, and it said so on the page instead of waiting. And **the difference was not a block and a state**: it was a block on this node, a line on four other nodes, a figure on `0.11`, a field that stopped being an orphan on `0.6`, and a per-state matrix here. **The estimate was made by the node that would not have to pay it.**

### 0b.2 Decided. Option A, 23 August 2026, `D-91`

| What | The answer |
|---|---|
| **What was chosen** | **A. The mechanic is inherited and moved forward.** What a person wins is a credit note at our price. Taking the real skin out means the platform buys a real copy on the market, and **the difference settles against the balance in either direction.** The disclosure lands at the win and on the case page rather than at the checkout |
| **When** | 23 August 2026 |
| **By whom** | The founder, answering the item five days after this node raised it |
| **The reason, unchanged from the recommendation above** | B rewrites the economics and no row in this repository can take that decision. A is what makes the trust positioning differentiated: **we name the gap before a person spends rather than at the till** |
| **What it costs** | **The reveal carries a second number.** Emotional Job 2 and design principle 2 both take the hit and `D-91` accepts it in as many words. **This node loses its "delivery" reading whole**, and four other nodes gain a line each: `5.1`, `3.3`, `3.6` and `3.7` |
| **What is not claimed** | **B is not wrong and it is not deleted.** It lost, and the table above keeps it with the reason it lost |

**The founder's own words, 23 August 2026, `D-91`:** the top-up is the difference between the value on the site and real trades on the market.

**And one figure inside the mechanic is decided rather than left to a later read.** **The number that settles is the price of a copy that can actually be bought, never the Steam listing.** The second capture reads `51.33` for a purchasable copy against `70.26` on Steam for the same M4A4 The Emperor, and those two are 27 percent apart. **Presenting the listing as what an item is worth is the abstraction `B7-1` describes with a larger number on it.**

### 0b.3 Why the gap is structural, and why hiding it was never an option

**Prices inside a case are frozen at the moment the case was priced.** Re-pricing one item re-prices the case, which moves its entry cost, its expected value and **the value of every unwithdrawn copy in every inventory on the platform.** So re-pricing is rare for a rational reason rather than through neglect.

**The market re-prices itself daily.** The lag is therefore a property of the model. **A thing that will not go away cannot be handled by hiding it**, which is the sentence option A rests on and the reason the disclosure moved forward rather than being softened.

### 0b.4 Three things this node refuses to smooth, and each one is a rule on every surface below

1. **The settlement goes both ways.** Four of the nine rows walked on 18 August 2026 had a site price **above** the market start, which is money back rather than money owed. **A surface that can only print a surcharge is wrong on nearly half its rows**, and that binds `5.1`, `3.6` and this node's own table equally.
2. **No market is its own state and it is never a zero.** Two of the nine rows had no offers at all. With nothing to buy there is nothing to settle and **no way out**, so the line says exactly that. `0.11` rule 3. **A printed `0.00` there would read as free**, which is the opposite of true.
3. **Our commission is not the settlement.** `G6` is zero and stays zero. A zero commission standing beside "you receive the item" said, on its own, that nothing else moves, and something else does. **The commission line points at the settlement rather than carrying a second copy of its figure**, section 3.

---

## 0c. Amended 24 August 2026 by `D-93`. The resend rule is decided, and the venue answer is confirmed

**Two founder decisions land on this node.**

### Sending an expired offer again strikes a new settlement at the price of the day

State 5.8 carried this as a named absence for one day: *"whether Send the offer again honours the settlement already struck or strikes a new one at today's market is a business rule this repository does not hold, and the two answers differ by real money."* **It is decided as a re-strike.**

**Holding the old quote hands a person a free option.** Sit on an expired offer, watch the market, press when it has moved your way. We carry the downside and they take the upside, **and nothing about an expired offer earns that.**

**Re-striking is symmetric and it is already how every other settlement on this node works.** The cost is real and it is printed: on the drawn record it is 4.90 coins more than the person agreed to two days ago, because the copy read 58.90 on 19 August and 63.80 on 21 August.

**The figure goes before the control, not into the receipt after it.** Design principle 3: where money is about to move, the number that moves is next to the thing that moves it. **A settlement discovered after the press is `B7-1` with our name on it.** So state 5.8 renders the re-struck four-column table and the difference above the button, and the past settlement stays below as the record.

**The label does not carry the figure.** "Send the offer again, settling at 42.40" was written and taken out: `D-52`, a button label never wraps, and that string is 36 characters inside a full width button at 360.

**The absence that preceded the rule earned its keep and is kept in the file.** That sentence is what got the rule asked for rather than guessed at by whoever built the next state. `D-58` is the same instinct on the control: an undecided rule is not a reason to kill a button.

### The venue: confirmed, and it is not `F1`'s venue

**The founder, 24 August 2026: our market, we sell the copy.** `D-92`'s flagged caveat is spent and section 0b's amended rows stand as written.

**And one distinction this node now names on the page**, because eleven wireframe pages were nearly rewritten the wrong way:

| Question | Answer |
|---|---|
| Where the copy on this screen comes from | **Us**, at our price, set against Steam. `D-92`, confirmed `D-93` |
| Which two venues price `F1`'s instance value receipt on `3.6` and `7.1` | **`[?]`, and neither of them can be us** |

**They read identically as "the venue" and they have opposite answers.** The same collision `CLAUDE.md` records for screen codes against capability codes, and the comment on this node's wireframe now names both so the next reader does not merge them again.

---

## 1. Blocks, mobile first

Composition from `blocks.md`, type **T4 Transactional form with named states**, which carries a declared gap: **no competitor screens of this type exist that we may open**, because all five put deposit, withdrawal and identity behind login and this project never logs in. The substitute source is public documentation of the same mechanics plus Refero for the craft, and it found real product rules living in an FAQ.

| # | Block | What it holds | Parent | From |
|---|---|---|---|---|
| **1** | **The record** | The item as a `0.6` card with its `F2` receipt, both dated figures intact | Row `F2`, on `B7-1` | Backlog group 6 |
| **1b** | **The settlement** | **Added 23 August 2026 by `D-91`.** What sending this item out costs: **the copy we buy**, then the baseline's own four columns, skin name, your skin price, market skin price, your balance impact, then the total difference, the as-of on the market price and the direction stated in words. Section 6a | Row `A1`, on `B1-2` and `B2-1`, **applied rather than invented**, plus barrier `B7-1` and design principle 1 in `CLAUDE.md`, quoted by its `D-14` limit, "the product is built so that its own numbers are checkable" | **The baseline's own withdrawal screen**, `research/docs/baseline-account.md` section 5, walked 18 August 2026 |
| **2** | **Destination** | The Steam account it goes to, named | Related Job 5, `jtbd.md` | The job's own wording |
| **3** | **The total, with commission on its own line** | Zero to Steam, section 3 | Row `G6`, Related Job 5, **job only, no barrier** | Backlog group 7 |
| **4** | **The named limits, before the request** | Three limits in plain words, section 4 | Row `G5`, on `B8-3` and `B8-2` | Backlog group 7 |
| **5** | **The clock** | Named states, elapsed per state, owner label on each, section 2 | Row `G1`, on `B8-2` | Backlog group 7 |
| **6** | **Our published numbers** | Median and p90, and the ceiling for the state that is live | Rows `A4`, `G3` and `G2`, on `B8-2` | `0.11` groups A |
| **7** | **The history of this record** | Every state it has been in, its elapsed and its owner, kept and not replaced | Row `G1`, on `B8-2` | Required by `5.8` |
| **8** | **Support and appeal** | The route to `0.10`, which carries the published response deadline | Row `G4`, on `B8-3` | Backlog group 7 |

**Nine blocks since `D-91`, and the new one is `1b` rather than `9`.** It is numbered beside the record because it is what the record costs, and a block that sits eight rows away from its subject is a footnote with a number on it. **Blocks 1, 1b and 4 are the first screen at 360px before the request**: what this is, what it costs to take out, and the three limits, in that order, because a limit met after the cost is a limit met too late and a cost met after the act is `B7-1`.

**Two arrivals, one page, and the first screen belongs to whichever is live.** Before the request the first screen is the record, the settlement, the limits, the commission line and the one control. After the request the clock takes the first screen and the record moves under it. This is a priority rule and not a second node: the same page, the same blocks, ordered by what the person came back for. `1.0` and `1.1` already settle that a state-dependent first screen is a state, not a different page.

**The persistent summary card is taken from the bank**, Refero Fresha row in T4: the total stays on screen while the choice is made rather than appearing after it. Here the total is the item and the zero commission, and it stays visible through every state below.

---

## 1b. The settlement block, its shape, and the two things the baseline does not have

**The shape is inherited and it was walked.** Four columns, skin name, your skin price, market skin price, your balance impact, then the total difference underneath. `research/docs/baseline-account.md` section 5. **It is inherited rather than invented because six years of people have read it in that order**, which is the same rule the rest of this project's baseline inheritance runs on.

**Which of our two figures is `your skin price`, and it is not a free choice.** It is **the worth-now figure**, the current value with its own as-of, and never the worth-when-won. **A settlement struck against a price we no longer publish is a settlement nobody can check**, which is design principle 1 under its `D-14` limit failing in one step.

**And the settlement is not a third number made out of the record's two.** Section 2.1 of `5.1` forbids a delta between the captured figure and the current one, and that rule is untouched here: **the settlement is the gap between our current price and a different figure entirely, what a real copy costs.** Two prices, one item, which is row `A1` verbatim.

**And since `D-92` the second of those two prices is also ours, which is where `A1` verbatim stops being enough.** `A1` asks for two prices on one item where the second is a market's. **On this page the second is our price for a copy**, so the pair answers what the exit costs and no longer answers what the item would cost somewhere else. **The rule of `5.1` section 2.1 still holds and holds for the same reason:** the forbidden delta is our price then against our price now, a position; **this is our price now against what we charge to hand over the real thing**, which is what an exit costs. `numbers.md` section 2c holds the working on what `A1` requires after that and returns a verdict of partly satisfied rather than a tick.

### 1b.1 Two things the baseline lacks and this node requires

| What is added | Why it is required rather than nice |
|---|---|
| **An as-of on the market price** | `A1` is two prices on one item with a live market price **and a timestamp**. The baseline prints the price with neither the moment nor the route. `0.11` rule 2: a figure with no time attached is read as current forever, and this one moves daily. ~~**The moment renders; the route is drawn as the hole it is**, because the venue is not chosen and a link to nothing is worse than a named absence~~ **Amended 23 August 2026 by `D-92`, and the route did not appear when the venue did.** The venue is us: **the copy comes from us, at our price, set against the Steam market.** A link to our own listing is not a route, because the point of a route is that a person confirms the figure somewhere we do not control. **What renders instead is the relation and the hole inside it:** the price is ours, it is set against Steam, and **how far under Steam we set it is not published.** The moment still renders |
| **The float on each copy on offer** | `baseline-account.md` section 5 records that float is shown at the only moment it decides anything: **choosing between several copies of one skin at one price.** All six offers the founder walked were priced identically and differed only by float. **This is the job that closes field 15's orphan status on `0.6`**, section 7 |

### 1b.2 One control and not an offer market, and the cost of that is printed

**The baseline draws a shelf here:** a From and To filter, a search field, a delete control and six offer cards with badges and wear bars. **That screen is a shop and this page is a record with one decision on it.** Drawing the shelf would turn `5.3` into a different screen and nothing in this node asks for one.

**What it costs, and this is the honest half.** With one control the floats cannot be read side by side at rest, only the chosen one and then the others one act in. **If comparing floats turns out to be the act rather than a detail of it, the shelf is what this block becomes**, and that is a measurement rather than an argument.

**At one price the choice cannot move the settlement**, so the four columns hold whichever copy is picked. **The case where copies differ in price is named and not drawn:** whether the cheapest is picked for the person or by them is `[?]`, section 9.

### 1b.3 What this block never publishes

**No ceiling and no deadline anywhere in it.** Nothing here says how long a purchase takes or how long a quote is good for, because no such figure exists in this repository and section 2 renders every ceiling on this page as `[?]`. **A block that invented one would be inventing exactly the class of number `0.11` exists to govern.**

---

## 1c. Amended 2 September 2026 by `D-109`. The picture stops being the page, and the offer shelf is put back to the founder

**Founder, on the built screen:** there is an enormous block under the picture here, and it should be done the way the product does it.

### The first half was literal and it is fixed

At 1440 the record card is 612 wide. **A 4/3 slot in a single column made the picture 578 by 434, and the card spent 434 of its 658 pixels on an empty box** with four short facts underneath it. The settlement table, which is the block a person came to read, started below the fold.

**The picture is now beside the facts rather than above them**, which is the move `D-57` already made for the sign-in dialog's art: stacked, a picture spends the one axis the page is short of, and beside the content it spends an axis that was empty. **Nothing is cut and the slot is still a real slot at the same 4/3**, 200 by 150.

| | The card | The page |
|---|---|---|
| Before | 658px tall, 434 of it picture | 3001px |
| After | **217px tall**, 150 of it picture | **2559px** |

**Below 600px it still stacks and that is deliberate.** There is no side axis to spend at 360, and `5.1`'s own item cards put a 4/3 picture at the top of a card the same width. **The saving is a desktop saving and does not claim to be more.**

**The facts gained a wrapper and the wrapper is the fix.** As flat siblings they were rows of a grid the picture spanned, so the picture's height was shared out between them. **A wrapper is cheaper than a rule that counts children**, and the six state pages carry different numbers of them.

### The second half is a refusal reversed, and it is put back to the founder rather than built

**Section 1b.2 refused the offer shelf and said what would reverse it**, in its own words: "if comparing floats turns out to be the act rather than a detail of it, the shelf is what this block becomes, and that is a measurement rather than an argument."

**The founder brought the capture and asked for the shelf.** The refusal is reversed, and the argument it lost is kept above rather than deleted: that screen is a shop and this page is a record with one decision on it.

**What the shelf cannot be built from is answers this repository does not hold. Six of them, and three were already open rows on this node before the capture arrived.**

| # | The question | Where it stands |
|---|---|---|
| **1** | **Are the copies ours or the market's at the moment of the press.** The shelf renders six of them, and **a stable list of our own stock needs no expiry while a snapshot of somebody else's does** | Already open since `D-92`. **Raised to blocking** |
| **2** | **Do we publish how far under Steam we set a copy.** The baseline puts a green `-29%` on every card and **that badge is exactly this figure** | Already open since `D-92`. **Raised to blocking.** A badge computed from a figure we decline to publish is the figure published |
| **3** | **Does the person pick the copy, or do we** | Already open since `D-91`. **Building the shelf answers it**, and the cost is that a person can choose a dearer copy of the same skin and pay the difference |
| **4** | **What a float is on the screen.** Raw `0.7683732`, a wear band, or a bar. The baseline's bar is coloured and **colour does not exist here until stage 07** | **New** |
| **5** | **What happens when there is one copy, or none.** The shelf assumes a shelf, and **no copy at any price is a state this node does not have** | **New** |
| **6** | **Is a withdrawal one item or a basket.** The baseline's `TOTAL DIFFERENCE` only means something for several at once, and `5.1` already has Select all | **New, and the largest.** If it is a basket this is a different page rather than a changed block |

**Until they come back, this section carries the reversal and not a drawing of it**, because a shelf drawn on invented answers is six invented product rules with a picture around them.

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
- **And since `D-91`, the total card may not read as though zero commission meant nothing moves.** It did: "our commission `0.00`" standing beside "you receive: the item" was a true statement that produced a false reading, and the false half is the one a person acts on. **The card carries a pointer and never a second copy of the figure**: the settlement is printed once, in block `1b`, where the market price and its as-of stand beside it. **Two printings of one money figure in two blocks is two places for it to disagree**, which is the duplication rule `D-33` applied to money instead of to a control.

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

### 6a. The settlement does not go on every state, and the rule that decides it

**Added 23 August 2026 by `D-91`, and it is a rule rather than a list**, so that a seventh state added later knows which side it falls on.

> **The settlement renders where a purchase is happening or has happened. Where the act is refused, the state says in one line that nothing was bought and nothing was taken.**

**On a state that refuses the act, a four column table would be a figure about something that will not occur**, which is the same defect as printing `0.00` where no copy is on sale. **And a screen that refuses the act while saying nothing about the figure is worse than either**, because the person saw a settlement one screen back and is left to guess whether they were charged for a refusal. **The absence is stated, not left as a gap.**

| Surface | What it carries | Why |
|---|---|---|
| **`5.3` before the request** | **The full block `1b`**: the copy picker, the four columns, the total, the as-of, the direction in words | The quote is live and the act has not happened. This is the one place the person chooses |
| **`5.3` after the request, the clock** | **The same four columns, struck and past tense, with the copy picker gone.** The float of the copy that was actually bought stays | The purchase has happened and the difference has already moved. **It does not re-quote while the clock runs**, which is the one thing a person watching a slow withdrawal needs to be sure of. Re-offering the picker would suggest the settlement is still open, and `F1`'s whole argument is that a name is not an instance, so the float says **which** copy is on its way |
| **`5.5` Steam degraded** | **The same struck record**, plus one clause: the price is not read again because Steam is degraded, and it will not be read again when Steam recovers either | **The fear this state creates is specifically about money**: a person watching a third party fall over wants to know whether the price they agreed to gets re-read at a worse moment. Saying it is not is the same job the suspended ceiling does, applied to money instead of time |
| **`5.8` Trade offer expired** | **The struck record with its own date, plus the second read printed as its own figure with its own moment beside it**, never substituted into the row | The offer sat for two days and the market moves daily. **Re-quoting silently is a different number wearing the old one's clothes**, which is precisely the injury `B7-1` describes. **Our own price has not moved and the market has, and that is the mechanic rather than an oddity**, section 0b.3 |
| **`5.4` Not eligible** | **No table. One line: nothing was bought and nothing was settled against your balance**, plus the fact that the earlier figure is not held for them | The act will not occur. **And the market moves daily, so a quote struck before a limit bit is not a quote after it.** Saying so is cheaper than a person returning to a different number and reading the difference as a fee |
| **`5.6` Account restricted** | **No table. One line: no copy was bought and nothing was settled against either figure above** | The clock stops at Our checks, so the offer was never sent. **A settlement figure here would be a charge for something that did not happen, printed beside a balance the page has just promised is frozen and never zeroed.** The absence is what makes "frozen, not emptied" checkable rather than asserted |
| **`5.7` Restriction upheld** | **No table. One clause inside the open item**, saying that no copy was bought and nothing was settled for a withdrawal that never went out | The clearest case of the five: nothing goes out from here at all. **But the settlement is the one way this product can take money off a frozen balance**, so a page whose whole promise is that nothing is silently zeroed has to say it did not happen. **It narrows the undecided item rather than answering it** |

**One thing this matrix opens rather than closes, and it is real money.** On `5.8`, **whether sending the offer again honours the settlement already struck or strikes a new one at the price of the day is not decided.** It is a business rule this repository does not hold and the two answers differ by an amount the person pays. **It is named before the press rather than discovered after it**, and the resend control stays live, `D-58`: an undecided rule is not a reason to kill a button.

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
| **No settlement table, and the absence is stated** | **Added by `D-91`.** Nothing was bought and nothing was settled against the balance, **and the figure the person saw one screen back is not held for them**, because the market moves daily | Section 6a |
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
| **The settlement is struck and the outage does not re-open it** | **Added by `D-91`.** The four columns render past tense with the picker gone, and one clause says the price is not read again because Steam is degraded **and will not be read again when Steam recovers either.** The wait is Steam's; the price is not | Section 6a |
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
| **No settlement table, and it is what makes "frozen, not emptied" checkable** | **Added by `D-91`.** The clock stops at Our checks, so the offer was never sent and no copy was ever bought. One line says **nothing was settled against either money figure above**, which is why they are both whole | Section 6a, row `G4` |
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
| **What happens to the frozen balance and the held items** | **`[?]`, and it is the largest open item in this cluster.** What is decided: never silently zeroed, and the disposition is stated in the notice rather than discovered. **`D-91` narrows it by one clause rather than answering it:** the settlement is the one way this product takes money off a balance, and **no copy was bought and nothing was settled for a withdrawal that never went out**, so the settlement is not what is going to move this balance | Row `G4` for the half that is decided. The rest: founder and counsel |
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
| **The settlement is the record and the second read is its own figure** | **Added by `D-91`.** The four columns render past tense at the price of the day the copy was bought, **and today's read is printed beside them with its own moment rather than substituted into the row.** Our own price has not moved and the market has, and section 0b.3 says why that is the mechanic rather than an oddity | Section 6a, `0.11` rule 2 |
| **Resend is one control** | It re-enters the offer stage. The limits are evaluated again because they can change, and if one now bites the person meets `5.4` with the record intact rather than a generic failure | Row `G5` |
| **What resend does to the settlement is `[?]`, and the control still works** | **Whether it honours the settlement already struck or strikes a new one at the price of the day is not decided**, and the two answers differ by real money. **Named before the press rather than discovered after it**, and the control stays live because an undecided rule is not a reason to kill a button | `D-58`, `CLAUDE.md`: never invent a number |
| **A restart is refused** | A new record would reset the elapsed and lose the history, which is the one thing this page has that the category does not | Row `G1` |

**This state is the concrete case behind the hole in section 2.3.** A withdrawal that sat four days on the person and forty minutes on us is one number end to end and a different number by attribution, and nothing yet says which one our published p90 is.

**And it is the state that most needs a signal outside the page.** The global sweep already recorded that there is **no notification, email or push row anywhere in `cjm-to-be.md`**, and therefore no node. It is carried here in the same treatment, so that nobody later reports it as a discovery.

---

## 7. Components, CTA, emotional support, responsive

**Components.** `0.1` navigation in its account state. `0.2` footer, which by its own rule links no private transactional node and therefore never links back here. `0.5` toasts for transient confirmations such as an offer sent or resent, never the only place a state is announced. `0.6` skin card, rendering the same dated figures it renders on `5.1`. `0.11` figure anatomy for the clock, the ceilings, the p90 **and, since `D-91`, for the two settlement rows in group A**.

**`0.6` field 15 stops being an orphan here, and that is this node's one effect on that component.** Float and pattern were carried on the card with an empty parent cell because no job in this repository needed them. **Choosing between several copies of one skin at one price on this screen is that job**, `baseline-account.md` section 5. The card does not gain a field: field 15 was always in its set and never rendered anywhere. **What changed is that it now has a parent and one density that renders it**, `0.6` sections 1 and 3.

**The settlement is not a field of `0.6` and this node may not make it one.** It is a rendering of two figures, our current value and the market price, on a page that owns the exit. **A settlement printed inside the card would be a field that appears at one site and not at the others**, which is exactly the rule `0.6` section 0 exists to hold.

**One control that is new and it is the house form select.** The copy picker is a real control and never a disabled one, `D-58`, and it uses the existing form control rather than a new size, because a third control size needs a reason written down first.

**Main CTA, and the deliberate absence of one.** Before the request: **Withdraw to Steam**, one control. **After the request there is no primary action at all**, because the next act belongs to us, to Steam or to the person inside Steam. A page whose main control during a wait is another action is a page that sells during a wait, and this is the phase at `-5`. The two exceptions are the states that need one: resend on `5.8`, appeal on `5.6`.

**Emotional support.** **None, and it is checked rather than assumed.** No row of the emotional and social table in `sitemap.md` places a mechanism on `S-E2`. Nothing is added for completeness.

**Responsive, and the settlement table is the one thing on this page that is wider than 360px.** It is four columns of money and none of them may be dropped: without the market price the impact figure is unchecked, and without our own price it is unexplained. **It scrolls inside its own container and the page never scrolls sideways**, `0.6` section 6, and each cell carries its column name so the row is still readable when the head has scrolled out of view.

**Responsive.** Mobile base 360px, one column. **The clock stacks vertically**, one stage per row, each carrying three labelled lines: owner, elapsed, ceiling. **Not a horizontal timeline**, which at 360px either scrolls sideways or drops the labels, and dropping the owner label deletes the whole of `G1`. Desktop keeps the vertical stack, because the stage list reads as a history rather than as a progress track, and places the record and the total in a column beside it.

---

## 8. SEO, inherited and reduced

**`5.3` is `noindex` with no schema and that was decided in `0.13`.** Inherited, not re-derived.

**A. Meta.** `title`: Withdraw. `robots`: `noindex`. `canonical`: self. `description`: none. **`hreflang`: none anywhere**, one language, locked. **No OG image and no Twitter card:** a pasted `/withdraw` link must not unfurl a transaction into a chat, which is the inverse of the reason `0.13` section 4.1 makes the unfurl a hard requirement on `7.1`.

**B. Headings.** One H1, Withdraw. **H2 in block order, and the order changed with `D-91`:** what sending it out costs, the limits, the clock, our published times. **The settlement heading is the first H2 before the request** and it takes the past tense after it, "what this settled at", so the heading itself carries whether the figure is a quote or a record. The single H1 rule is structural and binds on an unindexed page.

**C. SEO body text.** None, and there is no query behind it.

**D. Structured data.** None.

**E. The checklist, and what survives.** Crawlable `<a>` for real routes, **text never in images** so a state and its elapsed can be pasted into a support ticket, LCP and Core Web Vitals under design principle 5, speed is trust, and one H1. On this page principle 5 is not a preference: **lag on the surface that reports a wait reads as the wait**.

---

## 9. What this node does not decide

### 9a. Closed

| Item | How it closed | What stayed open |
|---|---|---|
| ~~**Whether withdrawal is a delivery or a purchase**~~ **Closed 23 August 2026 by `D-91`, founder decision** | **It is a purchase. Option A: the mechanic is inherited and the settlement is disclosed at the win and on the case page rather than at the till.** The argument that recommended A is in section 0b.1 and is unchanged; **option B is kept there with the reason it lost**, which is that it rewrites the treasury model and no row in this repository can take that decision. It was raised on 18 August 2026 as the largest open item on this node, owner the founder, and it was answered five days later | **Four things, and none of them is the mechanic.** The per-case gap figure, its method and its cadence, owner `0.11`. Whether "tested return" is renamed now the denomination is stated, owner the founder, `3.3`. Whether `cjm-to-be.md` gains a settlement row or whether `A1` and `B7-1` already carry it, owner the stage that reopens the backlog. **And what resend does to a settlement already struck**, section 6a, owner the founder |
| ~~**The market venue the settlement price is read from**~~ **Closed 23 August 2026 by `D-92`, founder decision, hours after the row above** | **The market is us.** The prices are ours, taken from Steam, cases are built from them, and the market for these items is this product. **So both operands on this page are ours** and the subtraction is our value against our other price. **The argument that opened the row is kept in section 9b rather than deleted**, because it is what the answer has to be read against | **Three things, and one of them is worse than the row it closed.** How far under Steam we set a copy, `[?]`, ours, section 9b. **Whether the copies are in fact ours at withdrawal time**, the founder's "in principle", section 9b. **And what `A1` requires now that its outbound link cannot leave our own product**, `numbers.md` section 2c, which returns partly satisfied |

### 9b. Still open

| Open item | What is missing | Owner |
|---|---|---|
| **What a float is on the screen** | The baseline prints the raw number, `0.7683732`, and a coloured wear bar under it. **We have no colour until stage 07**, and a seven decimal number with no scale beside it means nothing to a person who has not learned the scale. **Raw number, wear band, both, or a bar with no colour** is a design question with a research half: whether the people this product is for read floats at all | Founder, and `0.6` field 15 |
| **What happens when there is one copy, or none** | **The shelf assumes a shelf.** One copy is the current single-control page with the choice removed. **No copy at any price is a state this node does not have** and the three it does have, not eligible, Steam degraded, offer expired, are none of them it. **It is a new state or it is a refusal**, and either way it is drawn rather than discovered | Founder |
| **Is a withdrawal one item or a basket** | **The baseline's total block is a table with a `TOTAL DIFFERENCE` line under it**, which only means something for several items at once. **`5.1` already has Select all and a Send to Steam over a selection.** This node is written for one record throughout: one card, one settlement, one clock, one history. **If a withdrawal is a basket, this is a different page and not a changed block**, and the clock, the states and `5.9`'s ledger all take a row per item or a row per basket | Founder, and it is the largest of the six |
| **What resend does to a settlement already struck** | **Opened 23 August 2026 by `D-91`.** On `5.8` the offer expired two days after the copy was bought and the market has moved. **Whether resend honours the struck figure or strikes a new one at the price of the day is a business rule this repository does not hold**, and the two answers differ by real money. Named on the surface before the press | Founder |
| ~~**The market venue the settlement price is read from**~~ **Closed 23 August 2026 by `D-92`, founder decision** | ~~The as-of renders and the route does not, because no venue is chosen. `A1` names "a named market venue" and no file names one, which is the same hole as the two venues on the receipt one row down. **A link to nothing is worse than a named absence**, so the absence renders.~~ **The argument is kept because the answer has to be read against it.** The venue is us: the prices are ours, taken from Steam, and the market for these items is this product. **Both operands of the settlement on this page are ours**, our credited value and our price for a copy. **The route did not arrive with the venue and it cannot**: a link to our own listing confirms nothing, so what block `1b` renders is the relation, the copy is ours and our price is set against Steam, with **how far under Steam we set it printed as the absence it is** | **Closed.** What stayed open is the relation figure, one row down, and the caveat two rows down |
| **How far under Steam we set a copy.** **Raised from open to blocking on 2 September 2026 by `D-109`:** the baseline puts a green `-29%` on every offer card, and that badge is this figure. **A badge computed from a figure we decline to publish is the figure published** | **Opened 23 August 2026 by `D-92`.** It is the figure that replaces the venue and it is a sharper hole than the one it replaces: **the venue was an unknown, this is an undeclared margin.** Two walked captures read 39 percent and 27 percent, so it is not a constant and no rule behind it is published. **Steam is the one number in this page's chain a stranger can verify**, so this figure is the whole of what makes the settlement checkable. `numbers.md` section 2c | **Founder.** Nothing external gates it |
| **Whether the copies on offer are in fact ours at the moment of withdrawal.** **Raised from open to blocking on 2 September 2026 by `D-109`:** the shelf renders six of them, and a stable list of our own stock needs no expiry while a snapshot of somebody else's does | **Opened 23 August 2026 by `D-92`, and it is the condition under the two rows above.** The founder's wording was "in principle". The 23 August capture is consistent with it, **six offers for one skin all at one price under one discount, which is what a single seller looks like**, and consistent is not the same as proved. **If a third party supplies the copy at withdrawal time, one word changes in both rows above and `A1`'s outbound market link recovers the job it was written to do.** Flagged rather than assumed | **Founder**, and it is a question of fact about the live platform rather than a design question |
| **What happens when the copies on offer differ in price.** **Answered by building the shelf, if the shelf is built, `D-109`:** the baseline lets the person pick, so the person picks, **and the cost is that a person can choose a dearer copy of the same skin and pay the difference** | Every offer the founder walked was at one price and differed only by float, so section `1b.2` holds only in that case. **Whether the cheapest is picked for the person or by them changes what the settlement figure is**, so it is a rule and not a layout question | Founder |
| **The per-case gap between our values and the market** | `D-91` puts the figure on `3.3` and the value, the method and the cadence on `0.11`, where all three are `[?]`. **This node cannot state how large the settlement typically is on any case**, and the case page renders the absence rather than a placeholder. **Amended 23 August 2026 by `D-92`: all three are still `[?]` and none of them waits on a third party any more.** Both operands are ours, so the figure is arithmetic on two numbers the platform holds continuously, and **a number we set on both sides and decline to publish is a decision rather than a gap** | `0.11` and the founder. **A decision, no longer a dependency** |
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
