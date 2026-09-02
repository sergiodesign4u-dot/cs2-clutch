# Node 5.1. Account and inventory

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned. **Base layer code:** `S-E1`.

**URL:** `/my-items`, from `0.13`. **Indexed:** no. **Schema:** none. **Breadcrumb:** none. All four inherited from the indexation register, section 3, and not re-derived here.

**Purpose.** Show what the person actually holds, ~~with every item carrying the receipt that makes the win checkable a week later~~ **struck 23 August 2026 by `D-90`, section 0.7**, the money in the two figures the header already uses, the one route out of the product, **and since `D-91` of the same day what that route costs on each item, before anything is pressed rather than at the till, section 0.8.**

**Jobs served.** Related Job 5, withdraw and get what I earned, `jtbd.md`. **Parent class:** barrier `B7-1`, the win that turned out to be worth less than it looked, pattern of 7, by way of rows `B7` and `F2`; and barrier `B8-4`, verification ambushes at the exit, pattern of 5, by way of row `B1`, which resolved the check before funding so that nothing on this page has to ask for it. **`D-26` parked `B1` with `2.7` and this page is unaffected either way:** it asks for nothing now because there is nothing to ask for, and it asks for nothing later because the layer that returns stands before withdrawal rather than on an inventory page. Every block below names its own parent.

**Renders:** `0.1` navigation, `0.2` footer, `0.5` toasts, `0.6` skin card, `0.11` figures. **Reads:** `0.11` for the money figures and the receipt, `0.12` through the limits statement in section 3.

**Transitions:** `5.2` inventory empty, `5.3` withdrawal. From the map, unchanged.

**Phase.** T8, the floor of the entire As-Is emotional map at `-5`. This cluster is where the product either keeps its promise or does not, and this page is its front door.

**Baseline row, `5.1`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| Four tabs as peers on one page, `INVENTORY`, `HISTORY`, `PROFILE`, `SETTINGS`. The inventory grid has two sorts, no filters and no search, and a sticky bar carrying a count, a sum and **four exits**: send to Steam, sell to site, cash out, exchange. History is **five separate histories**, three of which are empty and all three say only `History is empty...`. `baseline-account.md` sections 2 to 4. | The count and the sum of the selection, which are the same pair the header carries, and the per-item action set. | **Our map gives this node one exit and the canon has four**, and the gap narrowed twice since this row was written. **`D-38` put selling a skin back for coins in round 1**, so the second exit exists as a capability and has no placement on this page; `D-60` recorded that **the exchange for a real skin does not exist at all**, and in-platform skin-for-skin exchange stays LATER by scope. **What is still true is the shape of the finding:** the live product answers what a person does with a skin they do not want, and this node answers only what they do with one they do want. **Open item, section 8, not a divergence.** And `History is empty...` with no route is the empty state `3.2` refuses. **The four tabs are four nodes on our map since `D-36`**, `5.1`, `5.9`, `5.10` and `5.11`, so the tab strip is not inherited either. |

---

## 0.5 Amended 23 August 2026 by `D-84` and `D-85`, and the baseline row loses two of its own sentences

**The founder put the live account screen beside ours and asked for the live one.** Two things this node had argued against are now inherited, and both refusals are kept above rather than deleted, because each was right about something the reversal does not touch.

| What changed | Why |
|---|---|
| **The account band is inherited**: artwork, avatar, name, id, the two money figures and the deposit entry, on all thirteen pages of the cluster | The baseline row above said the four tabs are four nodes on our map since `D-36` "so the tab strip is not inherited either". **Four nodes on a map is not an argument against a carrier between them, it is what makes one legal**: every destination the strip promises exists on the map. The account menu is how a person enters cluster 5 from anywhere; the strip is how they move between the four once inside |
| **It is rendered by `_nav.js`, not written into thirteen files** | A strip that exists on one of four peers is a dead end on the other three, and thirteen copies of one band is thirteen places for it to drift. It is a carrier, so it is built like the other carriers |
| **The two money figures are on this screen twice, and the cost is printed rather than absorbed** | `0.1` and `CLAUDE.md` give the money to the header and the header is sticky, so on cluster 5 the same pair renders as chrome above and as the page's own subject in the band. The baseline does exactly this and the founder asked for it in as many words. **What may not happen is the two disagreeing, so both read one source** |
| **A visible breadcrumb, and this contradicts the indexation register** | Section 0 above inherits "Breadcrumb: none" from `0.13`. The baseline runs `HOME / MY ACCOUNT / INVENTORY` and the founder asked for it. It ships **as wayfinding with no `BreadcrumbList` schema**, which keeps the schema half of `0.13`'s row true and leaves the visible half false. **`0.13` owes a corrected row and this node cannot write it** |
| **The summary column is gone** | It carried the money the band now carries, wrapped one button in three paragraphs, and squeezed the grid it stood beside. The limits survive as one line above the set, which is what `G5` asks for: a limit met before the route runs rather than discovered inside it. The rest lives on `5.3`, which owns it |
| **The card is rebuilt on the baseline's shape**: artwork, weapon, skin, wear in parentheses, one price, then `Starting at` and `Offers` | Section 2 gave every card two timestamped figures and a holding line. In a grid of them that is a table with pictures, not an inventory. **The live card is read at a glance and ours had to be read** |
| ~~**The receipt moves into the actions panel**, and section 2's rule that the two figures are never merged is untouched~~ **Struck 23 August 2026 by `D-90`: the receipt is deleted, section 0.7** | The argument is kept because it was right about where a retrospective number is read: `B7-1` is a number that stopped being true, **so the receipt was read at the moment a person decides what to do with the item** rather than on every tile of a grid nobody is reading yet. **What removed it is a founder decision about what the product stores, not a placement argument that beat this one** |
| **Three actions per item, revealed by selection and by hover over the whole card** | The baseline's own instruction is "click on the item to select", and selecting a card is what reveals its actions. **Hover is the desktop shortcut, never the mechanism**: it does not exist on a touch screen, so the panel also opens on `:has(:checked)` and on focus |
| **A permanent selection bar, counting and summing what is ticked** | It first shipped hidden until something was selected, on the argument that a bar saying nothing is furniture. **That argument missed what the bar is for: it is where a person learns the exits exist.** Hidden, the four exits are invisible to anyone who has not already guessed items are selectable. With nothing ticked the actions are unavailable and the bar says so, which is a state of a working control rather than the dead control `D-58` forbids |
| **Sorting is back, four keys, and section 4 is reversed narrowly** | Section 4 refused sorting because an inventory is bounded by what one person opened. **Sorting is not filtering**: a sort reorders the same set, so it cannot manufacture the second empty state with no parent that section 4 was actually protecting against. A filter would, and there is still none |
| **`Exchange` is drawn disabled with its reason printed, and that is a cost** | `D-58` took every dead control off this product and a switch that cannot move is the case it names first. The founder wants the control standing so it can be activated the day exchange ships. **The reason renders beside it**, because a disabled control with no explanation is exactly the theatre the rule was written against |
| **`CASH-OUT` is not drawn at all, and neither is the promoted third party slot** | Paying out to real money has no row in `cjm-to-be.md` and no node on the map. Drawing it would invent a capability at wireframe stage, which is the one thing this stage may not do. **The gap section 8 records stays open and is now one exit narrower** |
| **One column at 360 where the baseline runs two** | `D-52`: a button label never wraps. Their five actions are unlabelled circles, so two columns cost them nothing. Ours are words and `Send to Steam` needs 152px. **The divergence is the label, not the column count, and the count follows it** |

---

## 0.6 Amended again, 23 August 2026, by `D-89`. The card puts its actions in the flow and the sort comes out of its menu

**The founder opened the published page and rejected two things on it.** Both were correct in this file and wrong on the screen.

### The card, rebuilt on the live product's own composition

**The actions floated over the artwork, on top of the receipt line, pushing the item's own name below them.** The source is `acct_inventory_item_actions.png` and it does something simpler: **the tick and the share on the top row, then the weapon, the skin, the wear and the price, then the three acts, then the two market figures at the foot, and the artwork behind all of it.**

| What changed | Why |
|---|---|
| **The artwork is the background of the whole card**, not a box in the column | It is what lets the acts sit in the flow without the card growing |
| ~~**The acts reserve their space with `visibility`, not `display`**~~ **Superseded by `D-90`, section 0.7: the acts are absolute over a dim and nothing is reserved** | The requirement it was written for survives and is met a better way. A card that grows on hover shoves the row below it and a grid of them ripples, **so the two states are the same height by construction rather than by measurement**, and the band this row held empty is the picture instead |
| ~~**The tick and the share are in the flow, not absolutely positioned**~~ **Superseded by `D-90`, section 0.7** | The defect it closed is closed a third way and stays closed: **the tick, the share and the market foot are raised above the dim**, so the overlay darkens what is behind them and never intercepts a press meant for them. Build one covered the card's own checkbox; **a person may always deselect the item they selected** |
| ~~**The receipt line is back on the face of the card**~~ **Deleted 23 August 2026 by founder decision, `D-90`, and it is row `F2` leaving rather than a line leaving. Section 0.7** | The argument is kept intact: it is exactly what `B7-1` asks for, what this was worth when it was won, dated, beside what it is worth now, and no third number made out of the two. **What overrode it is a decision about what the product stores**, and the open question that decision leaves is printed in section 0.7 rather than resolved here |

### The sort, and why a `select` was the wrong control

**Both keys are on the screen, each carrying its direction, and pressing the active one flips it.** The live product does this and the founder asked for it. **A `select` hides three of its four options behind a press**, so the existence of sorting by value is itself hidden.

**The direction is a word and never an arrow.** This stage draws no icons, and a caret alone is a state carried by a shape, which is the colour-only rule one step further out.

**And the control reorders the grid rather than describing an order.** A sort is the cheapest control in this product to make real, because every card already carries the two values it sorts on. **Sorting is still not filtering**, so section 4's protection against a second empty state with no parent is untouched.

---

## 0.7 Amended a third time, 23 August 2026, by `D-90`. The card's third build, and an MVP row is deleted

**The founder, on build two: where is the skin's picture, and put the hover over everything with a dim.** Two instructions, and the second one reverses a rule this file wrote a few hours earlier. **Both earlier builds stay in the record**, because each one was a fix for a real defect and each one bought a new one.

| Build | What it did | What it cost |
|---|---|---|
| **One** | Floated a panel over the artwork | **Covered the card's own tick**, so a person could open the actions and not be able to deselect the item under them |
| **Two** | Put the actions in the flow and reserved their band with `visibility` | The two states became the same height, and it cost **a rectangle of nothing on the face of every card at rest**, with the skin's picture pushed to a background layer where grey renders it as nothing at all |
| **Three, this one** | Picture in the flow, actions absolute over a dim, the controls raised above the dim | Section below |

### The picture is a defect closed, not a taste served

**Field one of the canonical skin card `0.6` is the image.** The grid had a slot for it and rendered it behind the text, **which in a grey wireframe cannot be told apart from having no slot at all.** It leads the card, directly under the tick and the Share, and the text follows it. **It was below the price for one build and the founder sent it back:** "a big skin picture after the name" was read as after the whole text block, and both his reference and the way a grid of skins is used say the opposite. **A skin is recognised by its finish before it is read by its name**, which is the same sentence `D-59` used to put the image first in the live strip. **This is `0.6` being rendered rather than `5.1` adding a field**, and the rule in section 2 holds: no context adds a field the others do not have.

### Nothing is reserved and nothing moves

**The actions are absolutely positioned over the card with a dim behind them**, so rest and hover are the same height **by construction rather than by measurement.** Build two's reserved band bought the same result with a rectangle of nothing; **the space it held empty is the picture instead.**

**And build one's defect cannot come back.** ~~The tick and the share are in the flow, not absolutely positioned~~ was build two's answer to it. **The answer now is that the tick, the share and the market foot are raised above the dim:** the overlay darkens what is behind them and never intercepts a press meant for them. **A person may always deselect the item they selected**, which is the requirement both builds were trying to satisfy.

### The grid got denser because the thing that limited it went away

**Three columns waited until 1200 and four until 1600 because the receipt line inside the actions panel wrapped and clipped.** `D-90` deleted both the receipt and the panel, so **the remaining floor is the widest label that may not wrap, `Send to Steam`.** **Measured at a 1000px viewport on 23 August 2026:** the label is **100px**, the button with the reduced inline padding is **118px**, and the card's inner width at three columns is **199px**, so three columns from 1000 fit with room. **`D-90` first recorded 153px against 206px and called it measured, and it was an estimate.** Corrected here. Section 0.5's **152px** is not drift against any of it: that is the same label on a button at full padding.

### An MVP row was deleted, and this is the part that is not a layout change

**The founder: remove "Won at 64.80, 17 Aug 2026 22:11", we will not store that.**

**That line is row `F2`**, the instance value receipt persisting onto the item, and **`F2` is an MVP row of `cjm-to-be.md`.** It is not a decoration that was removed, **it is a capability that was removed**, and the difference is the whole of this section. `F2` is named in this node's own parent line, in block 4 and in section 2, and every one of those places is amended rather than quietly re-worded.

**What is not claimed: that `F2` is satisfied somewhere else by accident.** Its one remaining home is `5.9`'s roll row, which records what an open cost and what it returned.

**So the question the founder still owes an answer to is narrow, and it decides whether the row is moved or dead:**

| Reading of "we will not store that" | What happens to `F2` | What else dies with it |
|---|---|---|
| **The per-item copy** | `F2` lives on the roll row in `5.9` and the card simply stops repeating it | Nothing |
| **The value at the moment of the win is not retained at all** | **`F2` has no home anywhere** | `5.9`'s returned column dies with it |

**This node does not resolve it and does not touch `cjm-to-be.md`.** That file is the single owner of the MVP capability list, it still reads 40 MVP rows over 39 capabilities, and **`F2` is still one of them, carrying the open question rather than a quiet edit.** The same treatment `D-38` set: the cost is printed, not absorbed. **Owner: the founder.**

### What else changed in this file

| Where | What happens to it |
|---|---|
| **Purpose line and block 4** | The receipt is struck with `D-90` named, and the parent line keeps `F2` with its status printed rather than dropping the row |
| **Section 0.5 and 0.6** | Their receipt rows are struck in place. **Both arguments for putting the receipt where they put it are kept**, because neither was wrong about the defect it was fixing |
| **Section 2, the field table** | `Receipt as captured` becomes not rendered here, with the open question in the cell. **Current value is unaffected** and stays with its own as-of |
| **Section 2.1** | Two dated figures becomes one, and **the rule that no third number is made out of them is untouched**: with one figure there is nothing to subtract |
| **Section 5.2, the empty state** | "with their value receipt" goes with the receipt. **That sweep was incomplete and section 0.8 says so:** the drawn empty state still promised "each with what it was worth at the moment you won it. That figure is stored rather than recalculated" for a day after `D-90` deleted the thing it described |

---

## 0.8 Amended a fourth time, 23 August 2026, by `D-91`. The card gains a settlement line, and the empty state is corrected rather than rewritten

**Withdrawal on this product is a purchase and not a delivery.** What a person wins is credited at our price; taking the real item out means the platform buys a real copy on the market, and **the difference settles against the balance in either direction.** The founder chose that reading on 23 August 2026, option A of `5.3` section 0b.1, and `research/docs/baseline-account.md` section 5 closes the arithmetic exactly: `27.52 − 4.48 = 23.04`.

**This node is the first of the four surfaces `D-91` names**, and it is the one where the gap has been sitting in plain sight the longest. **The site price and `Starting at` have been two rows apart on this card since `D-84` rebuilt it on the live product's shape, and nothing said what their difference meant.** A person met that difference at the till. It is now on the shelf, before anything is pressed.

### The line, and where it goes

| Decision | What it is | Why |
|---|---|---|
| **It is the last row of every card** | Under the market foot, `Starting at` and `Offers`, which are the two figures it is computed from | **It is the row the receipt vacated.** `D-90` deleted the per-item receipt from this card, section 0.7, and the slot that opened is where the number that actually decides a withdrawal now goes |
| **The rule is said once, above the grid, in words** | One sentence: a win is credited at our price, taking the real item out buys a real copy, so the difference comes off the balance or goes back on it | **A number with no rule behind it is worse than no number**, and six repetitions of one rule is six places for it to drift. The rule produces all six lines, so it is stated where all six can see it |
| **It is not the peg line and the two are not one fact** | The peg is what one coin is worth in real money: one statement for the whole product, `D-28`, and not published yet. **This is what taking one particular item out costs: per item, both directions, and it moves daily** | `D-91` is explicit that the peg alone cannot express the second. **"One coin is worth X" does not answer "what does it cost to take this item out."** Two statements are needed, not one |
| **It invents no figure** | Each line is that card's own `Starting at` minus that card's own price, and **the word carries the sign**: `more` when the market is higher, `back` when it is lower | `CLAUDE.md`: never invent a number. The two figures were already on the card; the line is their difference and nothing else |

### Why it goes both ways, and this is not softening

**Four of the nine rows the founder walked on 18 August 2026 had a site price above the market start**, which is money back rather than money owed. **A card that can only print a surcharge is wrong on nearly half its rows.** The drawn grid carries three cards asking for more, two paying back and one with no market at all, which is the shape the walk found rather than a shape chosen for balance.

**And it is not an unsigned figure with a colour on it.** The direction is a word, `more` or `back`, for the same reason section 0.6 gives for the sort direction: a state carried by a shape or a hue alone is a state some readers do not have.

### Why no market is a state and not a zero

**Two of the nine rows walked had no offers at all.** With nothing to buy there is nothing to settle **and no way out**, so the line says that instead of a number. `0.11` rule 3: missing is a state and never a zero. **A printed `0.00` there would read as free**, which is the exact opposite of true, and it would be the only figure on this page that lies in the direction of encouraging the act.

**It renders through the same missing treatment as every other hole on this page**, rather than through a treatment of its own, so a reader who has learned what an absence looks like here does not have to learn a second one.

### The empty state's copy is corrected, and the cause is not this decision

**`5.2` read: "Items you open appear here, each with what it was worth at the moment you won it. That figure is stored rather than recalculated."**

**That sentence promised the receipt `D-90` deleted, and it survived the deletion by one day.** Section 0.7 struck the receipt from the card and from four places in this file, and the empty state kept advertising it. **An empty state promising a feature the full state no longer has is the worst place for the promise to survive:** it is read by the one person with nothing to check it against.

| What | Reading |
|---|---|
| **The cause** | `D-90`, not `D-91`. The receipt was deleted on 23 August 2026 by founder decision and this line was missed in the sweep of that decision |
| **What replaced it** | What the card actually carries: **our value for the item, what a copy is going for on the market, and what the difference between those two means at the exit.** Same job, a true version of it |
| **Why it is a correction and not a rewrite** | The sentence's job never changed. It says what a person will find here, so that an empty shelf is a page about what is coming rather than an apology. **What changed is that its contents became false**, and the entry in section 8 records which decision made them false |
| **Found by** | The agent that built the settlement line, outside what it was asked to look at |

### And the rule sentence does not go on the empty state, which is a decision rather than an omission

**Three things are absent from `5.2` by the same test and the settlement rule is now the third.** There is no card, no item and no withdrawal to price, so **the sentence would have no subject** in exactly the way the sort keys and the selection bar have none.

**`D-91` names four sites and two of them sit before a person holds anything**, `3.3` the case page and `3.6` the outcome, which is where a warning has to land if it is to change a decision. **Putting a fifth copy on the one page whose whole design is a refusal to nudge** would answer an empty shelf with a lecture about a cost that cannot yet be incurred, and `B7-3` is the row that objects to exactly that move in its cheerful form.

---

## 0.9 Amended a fifth time, 23 August 2026, by `D-92`. The market foot names the seller, and it is us

**The founder answered the venue question `D-91` left open, hours after `D-91` closed.** The prices are ours, taken from Steam, cases are built from them, and **the market for these items is this product.** So `Starting at` is not a market figure at all. **It is our price for a copy**, and the settlement line at the foot of every card is our value against our other price.

### What changed on the screen, and it is one line and one absence

| Before | After |
|---|---|
| Above the grid: market figures read at one moment for every card here, **and which market they are read from is not named yet, and a settlement struck against an unnamed source is not checkable** | Above the grid: market figures read at one moment for every card here, **a copy comes from us, at our price, and we set our prices against the Steam market**, with **how far under Steam we set them not published yet** |

**Nothing else on the card moved.** The settlement line, its direction word, the no-market state and the peg absence are all unchanged, because `D-92` changes who owns the second number and not what the subtraction is.

### Why the route still does not render, and this is the part that got worse

**`D-91` left the route as a named hole because the venue was unchosen.** A venue was going to arrive and a link with it. **The venue arrived and the link cannot**, because a link to our own listing asks the reader to check our number against our number. **`A1`'s outbound link was buying the fact that a person leaves and confirms the figure somewhere we do not control**, and naming ourselves as the venue removes that outright.

**What replaces it is a relation rather than a route.** Steam is the one number in this card's chain a stranger can read without us, both of ours are derived from it, so **the honest form on this surface is "the copy is ours, our price is set against Steam, and here is by how much".** The first two clauses render. **The third is `[?]` and it is ours**: two walked captures read 39 percent and 27 percent, so it is not a constant and it is not published.

**Which is a sharper hole than the one it replaces and not a smaller one.** The venue was an unknown somebody had to choose. **This is an undeclared margin.** `numbers.md` section 2c carries the full working on what `A1` requires after this and returns **partly satisfied** rather than a tick, and section 8 of this file carries the two rows that replaced the closed one.

### And the founder said "in principle", which is carried rather than absorbed

**The exact wording was that our market should, in principle, be the product itself.** The 23 August capture is consistent with it, six offers for one skin all at one price under one discount, **which is what a single seller looks like and not proof of one.** If those copies are in fact sourced from a third party at withdrawal time, **the line above the grid goes back to naming somebody else and `A1`'s outbound link recovers the job it was written to do.** Section 8 carries it as a live row with the founder as owner.

---

## 0.10 Amended 1 September 2026 by `D-107`. The skins come first and what qualifies them comes after

**Founder, on the built page:** why is there so much text, the skins and the inventory are more important, show the skins first and describe the features after them, in blocks.

**Four paragraphs stood between the sort bar and the first card.** The withdrawal line, the settlement rule, the market as-of and the peg. **Every one of them qualifies a figure that is on a card**, and none of them can be used by a person who has not seen a card yet. **A qualifier read before the thing it qualifies is a paragraph about nothing yet.**

**All four moved under the grid, into one labelled block.** Nothing is cut and nothing is softened: each keeps its wording, its as-of and its named unknown, and each gains a label so the block is scanned for the one fact wanted rather than read from the top.

**One thing did not move, and the rule is in the exception.** The degraded state's line, "some current values cannot be read right now", **is not a qualifier, it is a condition on every figure below it**, so it stays above the set where it is read first.

**The cost, printed rather than absorbed.** Every card carries a signed settlement figure since `D-91`, and that decision's own reasoning was that "the rule that produces all six is stated here rather than repeated six times". **That rule is now below the six.** A person who reads only the grid meets six signed numbers before the sentence that says what they are. **The founder asked for the items first and this is what the order costs.**

---

## 0.11 Amended 2 September 2026 by `D-118`. The third exit exists, and it is the one this node refused to draw

Founder, with the live product's layer beside ours: **"cash out - кстати это про крипту, нам нужен диалог вывода средств через крипту. Мы делаем в инвентаре кнопку cash-out, по которой будет диалог с выводом скина как крипта."**

### What this node said, and it was right on both facts

`account.html` carried this in the selection bar's own comment:

> CASH-OUT IS NOT DRAWN: paying out to real money has no row in `cjm-to-be.md` and no node on the map, and drawing it would invent a capability at wireframe stage.

**Both halves are still true.** There is no row. There is no node. **What the build could not know is that the founder had a live layer for it**, which makes this a **missing input rather than a missing capability**, and the input gate exists to ask rather than to assume in either direction. **A cash out layer only exists behind a login**, so the public walk could never have reached it and no amount of care in the baseline pass would have found it.

**Kept struck rather than deleted**, because the refusal was correct reasoning and the record of why a build declines to draw something is worth more than the drawing.

### The cost, printed rather than absorbed

**A fiat or crypto withdrawal path was deferred at stage 02.** `jtbd.md`, Candidate-for-Cut Functions, and `cjm-to-be.md` says of it in as many words: "already deferred at `jtbd.md:198` to `:200` and are not re-litigated here."

**So this capability enters round 1 with no parent in any of the three legal classes.** Not a barrier code, not a job, not a compliance constraint or design principle. **It is the second capability on this map in that position**, after the daily free case, `D-15`, and it stands on a founder decision alone. **That is the row, and it is printed here rather than smoothed.**

**Round 1's surface list moves for the fourth time.** Twelve on 11 August, three added on 20 August by `D-36`, and a layer on `5.1` now.

### What is drawn

**One control in the selection bar**, beside Send to Steam and Sell for coins, and **it is the third exit rather than a fourth**: the bar's own comment already said three exits and not the baseline's five, and Exchange stays drawn disabled.

**One layer, rendered once in `_nav.js` and hosted**, the contract `D-99` set for the deposit and `D-114` reused for the basket. **Pinned open at `cashout-dialog.html`**, because a layer only reachable by knowing which control to press is a layer nobody reviews.

| Block | What it holds | Why |
|---|---|---|
| **Three networks** | Ethereum, Litecoin, Tether, as a strip. Founder answer of 2 September 2026 | The live layer's own three. The current one is a pressed control, never a link to itself, `D-58` |
| **The chain line** | `Sent on the Ethereum network` | **A coin is not an address space.** Tether has no chain named on our side, so the line says that instead of letting the field imply one |
| **The address** | A saved-address select where one exists, a field, and Save | The live layer's shape. **Saving is not built**, and the press says so rather than pretending |
| **The calculator** | Items selected, their value, blockchain fee, you receive, in ETH | **A line in a sum gets checked and a badge only asserts**, `D-94`. Three of the five lines are `[?]` |
| **The press** | Request cash out, live | `D-58`. It refuses with the ground that applies, and there are three of them |

**The amount is read off the ticked items and is never typed.** A cash out here is a sell back with the money leaving, so what goes out is decided on the grid before the layer opens. **A free amount field would be a second way to say the same thing and the two would disagree.**

### Three `[?]` in one small block, and they are the whole cost of shipping this today

| Unknown | What it blocks | Owner |
|---|---|---|
| **Which network we send USDT on** | One of the three tabs. **An address with no chain named is money sent to nothing**, so the press refuses on that tab and says why | Founder |
| **The blockchain fee** | The result of the calculator. An amount minus an unknown is an unknown, so **You receive is `[?]`** | Founder, then production |
| **The coin to crypto rate at the moment of sending** | The `In ETH` line, and every crypto figure in the ledger. `D-28` publishes the peg to the dollar and nothing publishes a crypto rate | Founder |

**The press refuses on all three and never on none.** Nothing ticked, no chain for this coin, no address, and where all three are satisfied it still refuses: **a request is not sent on a figure we cannot show the person.**

### What is deliberately not drawn

**The live layer's notice.** It reads that cashing out forfeits the deposit bonus for the rest of the day, and free case battles and giveaways until the end of the same day.

**Two of those three do not exist for us.** Case battles and giveaways are `LATER`. **And whether OUR deposit bonus, `D-94`, is forfeited by a cash out is not decided by anyone.**

**`D-107` decides where that goes.** Our side of an unknown is that we have not decided; the person's side is that we have not told them; only the second is a fact about them. **So the sentence is not on the layer and the question is in section 8 of this node.**

### And the degraded state carries a question the other two do not

`account-degraded.html` renders values that cannot be read. **A cash out is a sale at a value.** What a cash out does when the value is degraded is **`[?]`**, the control is drawn there like everywhere else, and the question is in section 8 rather than answered by a drawing.

---

## 0. The sentence this page is built around

`F2` is one line in the backlog and it is the whole page: **the receipt stays on the item in inventory and on the withdrawal record**, with the success signal "the same receipt is retrievable a week later".

Barrier `B7-1` is not a complaint about losing. It is a complaint about a number that stopped being true and left nothing behind to check: "a knife that Hellcase displayed as being worth about $1,600. After withdrawing it, I found out that on CSFloat and even on Steam it is worth only around $550-600", `cjm-as-is.md`, P7. **The injury is retrospective**, which is why the fix has to be a stored object rather than a display. A page that shows today's price and nothing else cannot be wrong a week later, because there is nothing left to compare it against.

~~**So this page holds two dated figures per item and never merges them**, section 2. That is the single decision the node exists to make.~~

**Struck 23 August 2026 by `D-90`, and this is the paragraph where the cost of that decision is clearest.** The card holds **one** dated figure now, the current value. **The argument above is not amended into agreement:** `B7-1` is retrospective, the fix has to be a stored object rather than a display, and a page that shows today's price and nothing else cannot be wrong a week later **because there is nothing left to compare it against.** That is exactly what this page now is. **Whether `F2` survives on `5.9`'s roll row or has no home anywhere is the founder's, section 0.7**, and it is the question that decides whether this barrier is still answered somewhere in the product.

---

## 1. Blocks, mobile first

Order is reasoned from 360px and from the barriers, not from the order of the sources. Composition comes from `blocks.md`, type **T2 Listing with an empty state**, plus the rows this node's own parents require.

| # | Block | What it holds | Parent | From |
|---|---|---|---|---|
| **1** | **Account state, one line** | Verified, withdrawals open. A statement of a fact resolved earlier, never a task raised here | Row `B7`, on `B7-1`. Row `B1`, on `B8-4` | Backlog group 2 |
| **2** | **The money, two figures** | Balance and value of items held, both in coins, `D-28`, **never summed and never a score** | `D-19` in `CLAUDE.md` by way of `0.1`. Row `C1` as `D-28` rewrote it, still on `B7-1` | Node `0.1`, Refero Kraken Pro row in T1 |
| **3** | **Withdraw, with the named limits stated beside it** | The one CTA, and the three limits in plain words before the person enters the route | Row `G5`, on `B8-3` and `B8-2` | `flows.md` flow 3, node order |
| **4** | **Items held: `0.6` cards.** ~~each carrying its `F2` receipt~~ **The receipt is deleted by `D-90`, section 0.7**, and the card carries the picture, the names, the wear, the current value and the three acts | The list, and the substance of the page | ~~Row `F2`, on `B7-1`~~. Row `B7`. **`F2` is still an MVP row of `cjm-to-be.md` and this block no longer renders it:** whether it moves to `5.9`'s roll row or has no home at all is the founder's, section 0.7 | Backlog group 6 |
| **4b** | **The settlement, one line per card and one rule above the grid** | **Added 23 August 2026 by `D-91`, section 0.8.** What sending this item out costs, signed in words, `more` or `back`, computed from that card's own two figures. **No market is its own state and never a zero** | Row `A1`, on `B1-2` and `B2-1`, **applied rather than invented**, plus barrier `B7-1`, the gap between what a win appears to be worth and what it is worth | `research/docs/baseline-account.md` section 5, walked 18 August 2026 |
| **5** | **The holding statement on each item** | Whether this item has a deadline, stated from the moment it exists. Value `[?]`, section 3 | Row `G5` | `blocks.md` T4, Hellcase FAQ row |
| **6** | **A legible bottom to the list** | Count of items held, and pagination if the count needs it. Conditional, threshold `[?]` | Related Job 5, `jtbd.md` | `blocks.md` T2, the skin.club LEAVE row |
| **7** | **Sort by value or by date acquired** | Conditional and named out loud, section 4 | Related Job 5, `jtbd.md` | Named here, not taken from the bank |

**Blocks 1 to 4b are the first screen at 360px.** The state, the money, the way out, the first item and what that item costs to take out. The order is the barrier order: `B8-4` says the exit must not ambush, so the account state is answered before anything else is offered; `B7-1` says the money must be checkable, so the figures come before the list they describe.

**Two blocks the shell already carries and this page does not repeat.** The responsible play entry lives inside the money control, `0.1`, and the support route lives in `0.2` and `0.10`. Duplicating either here would put two entries into one destination, which is the defect `0.1` was written to prevent.

**One block deliberately refused.** No re-entry offer, no daily free case, no "open another". The empty state is where that temptation is strongest and section 5 refuses it there too, with the reason.

---

## 2. The item card here, and the two figures it must never merge

`0.6` is one component with one field set, and the context decides which fields render. That is the same rule `0.14` uses for its four variants, applied to the card. **No context may add a field the others do not have, rename one, or reorder them.**

| Field | In this context | Source |
|---|---|---|
| Weapon name, skin name | Rendered | `0.6` |
| Wear grade | Rendered. A separate axis from rarity | `0.6`, and `blocks.md` section 10 |
| StatTrak flag | Rendered where it applies. The third axis | `blocks.md` section 10 |
| Rarity treatment | Rendered. **Seven tiers, the seventh conditional on the case**, walked live | `blocks.md` section 10 |
| Image | Rendered | `0.6` |
| ~~**Receipt as captured**~~ | **Not rendered here since 23 August 2026, `D-90`.** The instance value at the moment of the open is not on this card. **This is not a field the context declined to render, it is a capability the founder removed**, and whether `F2` survives on `5.9`'s roll row is open, section 0.7 | Row `F1`, carried by `F2`, **and `F2`'s home is now `[?]`** |
| **Current value** | **Rendered, with its own as-of.** Per read, refresh class from `0.11` | Row `D2`, `0.11` group A |
| **Market price, its as-of and its outbound link** | **Rendered as the market foot since `D-84`**, `Starting at` and `Offers`, which is what the live card carries. **Field 12 of `0.6`, and `A1` puts the outbound link on the top item rather than on every one**, so the foot here carries the figures and not the link | Field 12, row `A1` |
| Drop chance | Not rendered. It is a property of the case, not of a held instance | `0.6` |
| Ticket range | Not rendered here, same reason | `0.6` |

**The settlement line is not a sixteenth field and this node may not make it one.** Section 0 of `0.6` holds one rule above every density: **no site adds a field the others do not have.** The settlement is **a rendering of two fields the card already has**, field 8 current value and field 12 market price, subtracted on the one surface that owns the exit. **The card gains nothing; this context renders one relation between two of its own numbers**, the way `3.3` renders a chance beside a value without either of them becoming a new field.

**The honest half of that claim.** It is a computed thing on the face of a card, and `0.6` rule 5.4 says the card renders and never computes. **That rule is about deriving a field's value in the browser**, so the subtraction happens where the two figures are read rather than in the page, and the line arrives already computed like every other figure on the card. **If a later step finds the settlement being computed client side, the rule has been broken and this paragraph is the place that says so.**

### 2.1 Two dates, two numbers, and no third number made out of them

**Amended 23 August 2026 by `D-90`: there is one figure on this card now, not two.** The rules below are kept whole, because each is about a different failure and only one of them lost its subject.

~~**The captured receipt is never overwritten.** Overwrite it and the person cannot check what we told them, which is the whole of `F2`.~~ **The subject is gone from this card**, and the rule stands wherever the captured value is retained at all, which is the open question in section 0.7.

**The current value is never presented as what we said at the time.** Show only the captured figure and we are printing a stale price as current, which is the whole of `B7-1`. **This one is unchanged and is now the only figure on the card**, with its own as-of, per rule 2 of `0.11`: an as-of on anything that moves.

**And no delta.** No arrow, no percentage, no up-or-down colour, no badge. **With one figure there is nothing to subtract**, so the rule costs nothing here and it is kept rather than deleted: it binds again the day a second figure returns.

**`D-91` does not break that rule and the distinction is exact.** The forbidden delta is **our price then against our price now**, which turns a held skin into a position and the page into a portfolio. ~~**The settlement is our price now against a third party's price now**, which is what an exit costs rather than how an item has performed.~~ **Amended 23 August 2026 by `D-92`, and the distinction survives on a different footing than the one it was written on.** There is no third party: **the settlement is our value for the item now against our price for a real copy now**, both ours since the founder named the market as this product. **The rule still holds and the reason is the test rather than the parties.** A delta compares one price at two moments and invites holding for a better one. **A settlement compares two prices at the same moment and answers the one control on this page.** Two figures being ours does not make the second one a history of the first. **The test is what a person could do with the number:** a delta invites holding for a better moment, the settlement answers whether to press the one control on this page. And the rule's own reasons still hold against a delta: in-platform exchange is `LATER`, `0.11` rule 7 forbids a figure that becomes a score, and a gain indicator on an inventory is a reason to keep going. A rendered delta turns a held skin into a position and the page into a portfolio. In-platform exchange is `LATER` by scope, `0.11` rule 7 forbids a figure that becomes a score, and a gain indicator on an inventory is a reason to keep going, which is the same defect the limits rule names for boundaries.

### 2.2 What the receipt actually is, unchanged from its owner

Row `F1`, as `0.11` group B records it: **the current sell price for the comparable float band and phase on two named venues**, priced as that instance and never as the skin name, with the link opening the venue listing filtered to that float band so the person checks it rather than taking our word. **Which two venues is `[?]`** and belongs to the founder before stage 04. **Narrowed 23 August 2026 by `D-92`: neither of the two can be us**, because the receipt's whole argument is that the person does not take our word for what an instance is worth. This node renders the receipt and does not redefine it.

---

## 3. The thirty day question

`blocks.md`, type T4, opened Hellcase's public FAQ live on 12 August 2026 and found a real product rule living in a document: **"Your drop is waiting for up to 30 days. Full cost of the item will be returned to your balance if you don't withdraw it within 30 days."**

A deadline that converts an item into balance is not a policy detail. It is the difference between holding a skin and holding a countdown, and the person meets it by having already missed it.

**Whether we carry any such deadline is `[?]` and it is a product decision, not a design one.** What is decided here is the slot and its behaviour, because `G5` requires a limit to be met before it runs rather than discovered afterwards.

| Part of the slot | Rule | Value |
|---|---|---|
| Does a deadline exist at all | Product decision | `[?]` |
| Its length | Never invented | `[?]` |
| What the item converts to | Hellcase converts to balance at full cost. Ours is not chosen | `[?]` |
| **When the statement renders** | **From the moment the item exists**, not when it is nearly expired. A statement that appears at day 27 is a warning, and `G5` asks for a limit, not a warning | Decided |
| **Where it renders** | **On the item**, inside the `0.6` card, and repeated on the withdrawal record. Not in a policy page, not in an FAQ | Decided |
| **If the answer is no deadline** | **The slot still renders**, saying the item is held with no time limit | Decided |

**The last row is the one that matters.** Hellcase's rule became a discovery because nothing on the item said anything at all, and silence about a deadline reads identically to there being none. A positive statement costs one line and removes the whole class of failure, whichever way the decision goes.

**A card state may be needed if the answer is yes.** An item inside its final stretch is a display variant of `0.6`, not a state of this page, and adding it is `0.6`'s to authorise. Recorded here as a requirement this node places on that component.

---

## 4. The facet question the sweep left open, answered

The global sweep in `sitemap.md` left one instruction for this step: "Facet and filter system, 3.1 only. Not global. **Revisit at step 6 if 5.1 acquires filters of its own:** two listings sharing a facet set makes it canonical, one listing does not."

**Answered: 5.1 does not take the `3.1` facet set, so the facet system stays local to the catalogue.**

- **An inventory is bounded by what one person opened.** The catalogue's filters exist because a shelf of hundreds cannot be read; a holding of a handful can.
- **A filter on an inventory manufactures a second empty state with no parent.** `3.2` has removable chips as its route out, `blocks.md` T2. An empty filtered inventory would need the same machinery to solve a problem the page does not have, and `5.2` is an empty with a completely different meaning: nothing held, route to the catalogue.

**What is proposed instead, named out loud rather than added quietly:** a sort by value or by date acquired, parent Related Job 5, because a person opening this page to withdraw is looking for one item and value is how they name it. **It is conditional and its trigger is `[?]`:** it ships when a typical holding does not fit one screen, and typical holding size is not a number anyone has. Until that number exists the list is ordered most recent first, which is the order the person acquired them in and the only order this node can justify.

---

## 5. States

One numbered state, and it is the common one.

### 5.2 Inventory empty {#5.2}

**Type:** state. **Scope:** MVP. **URL:** none. It renders at `/my-items`, because a person cannot arrive at it from outside, per the rule in `0.13` section 2. **Transition:** `3.1`.

**Two different people arrive here** and the map names both: where every new account starts, and where a low-value first open leaves someone. The second one has already spent.

| Element | Behaviour | Parent |
|---|---|---|
| **The money still renders** | Balance can be non-zero while items are zero. "You hold nothing" is false in that case, and the empty is of items only | Row `C1`, on `B7-1`. `0.11` rule 3, missing is a state and never a zero |
| **What would be here, said plainly** | ~~Items you open appear here, each with what it was worth at the moment you won it. That figure is stored rather than recalculated.~~ **Corrected 23 August 2026, section 0.8.** It now says what the card actually carries: **our value for the item, what a copy is going for on the market, and what the difference between those two means at the exit.** The page says what it is for rather than apologising | Row `B7`. **The cause of the correction is `D-90`, which deleted the receipt this sentence was still promising; the replacement wording comes from `D-91`** |
| **The settlement rule is absent, and by the same test as the sort keys** | There is no card, no item and no withdrawal to price, so the sentence would have no subject. **`D-91` names four sites and two of them sit before a person holds anything**, which is where a warning has to land. Section 0.8 | `B7-3`, the row that objects to a nudge in its cheerful form |
| **One route, into `3.1`** | The catalogue, not a blank page and not the home page | `flows.md` flow 3, and the map's own transition |
| **The withdrawal entry is absent, not disabled** | There is nothing to withdraw. A disabled control on an empty page is a promise of a wall | Design principle 3 in `CLAUDE.md`, clarity at every risk moment |
| **No offer, no free case, no nudge** | Below | The limits rule in `CLAUDE.md`, and `B7-3` |

**The refusal is the design here.** The obvious move on an empty inventory is a re-entry offer, and the daily free case `I2` and the starter credit `I1` are both sitting in the backlog waiting to be placed. They are not placed here.

- **The person who arrives after a low-value first open is at the emotional floor of the whole map.** `B7-3` records the one voice in the corpus that criticises the consolation frame itself: "it just gives incentive to people in spending more and fools them into thinking that the end result isn't that bad". An empty inventory answered with an offer to open again is that pattern with a different label.
- **Free entry has no surface of its own by decision**, and `sitemap.md` records where it does live: on `1.0` as an offer and in `3.1` as an available case. Adding a third home here would be this node inventing placement for a capability that already has one.
- **`I2` is the only row on the whole backlog with no parent in the three legal classes.** It is the last capability that should be given a new site by a page specification.

The route to the catalogue is the offer. A person who wants to open finds the free case where the map already put it.

---

## 6. Components, CTA, emotional support, responsive

**Components.** `0.1` navigation, in its account state. **Rewritten 21 August 2026 by `D-71`, because `D-40` had reached the map and not this node:** the rail carries **one** destination, Cases, in both states, **My items is the first row of the account menu**, and the mobile bar is **two items in both states**, Home plus Cases. This section said four, four and four for three days after that changed. The header carries the two money figures and the account control and no destination, which is the half that never moved. `0.2` footer, unchanged, and by its own rule it carries no link back into this cluster. `0.5` toasts for transient confirmations, never the only place a state is announced. `0.6` skin card, in the inventory context defined in section 2. `0.11` figure anatomy for the money and the receipt.

**Depth.** Level 1, reachable directly from the rail, per `sitemap.md`. `5.3` is level 2 and is entered only from here.

**Main CTA.** Withdraw to Steam. One control, one destination, and the named limits sit beside it rather than behind it.

**Emotional support.** **None, and that is checked rather than assumed.** No row of the emotional and social table in `sitemap.md` places its mechanism on `S-E1`. Emotional Job 2 is carried by `F1` at `S-C2` phase 3 and by `S-G1`. Nothing is added here for completeness.

**Responsive.** Mobile base 360px. One column: state, money, withdraw with limits, **the settlement rule as one sentence above the grid since `D-91`**, then the item list one card per row, each card stacking the names, the value, **the picture since `D-90`**, the market foot and **the settlement line as its last row**. Desktop keeps the same order and puts the cards on a grid, with the money and the withdrawal entry held in a summary column beside the list rather than above it. **Three columns from 1000 since `D-90`**, section 0.7, where the floor was 1200 while the receipt line could wrap. ~~The two dated figures never sit on one line at 360px: they are two labelled rows, because collapsing them is how a delta gets invented by a layout.~~ **One figure since `D-90`**, and the rule returns with the second one if it ever does.

---

## 7. SEO, inherited and reduced

**`5.1` is `noindex` with no schema and that was decided in `0.13`.** This section inherits it and records only what still binds.

**A. Meta.** `title`: My items. `robots`: `noindex`. `canonical`: self. `description`: none, it has no reader. **`hreflang`: none anywhere**, one language, locked in `CLAUDE.md`. **No OG image and no Twitter card.** `0.13` section 4.1 makes the unfurl the product for `7.1` because a result is meant to travel; the inverse holds exactly as hard here, and a pasted `/my-items` link must never unfurl a person's holdings into a chat.

**B. Headings.** One H1, My items. H2 in block order: the money, withdraw, items held. **The single H1 rule is structural, not an SEO rule**, so it binds on an unindexed page too.

**C. SEO body text.** None. There is no query behind a private page and a keyword paragraph on an inventory would be a block with no reader and no parent.

**D. Structured data.** None. `0.13` assigns schema by page type and assigns this one nothing.

**E. The checklist, and the part of it that survives.** A to D collapse on an unindexed page and E does not: crawlable `<a>` for real routes, text never in images per `0.11` rule 8 so the receipt can be copied into a complaint, LCP and Core Web Vitals under design principle 5, speed is trust, and one H1. **An unindexed page is not an unbuilt page**, and this row exists so that stage 04 does not read "noindex" as permission to skip the structure.

---

## 8. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| ~~**The market venue the settlement is computed against**~~ **Closed 23 August 2026 by `D-92`, founder decision, five days after it was opened** | ~~**Opened 23 August 2026 by `D-91`, section 0.8.** `Starting at` is a market figure and `A1` names "a named market venue" without naming one. **The settlement line is a subtraction against a price whose source is not chosen**, and the same hole sits on `5.3`, where the as-of renders and the route does not. Carried from `0.11` rather than re-opened.~~ **The argument is kept because the answer has to be read against it.** The venue is us: the prices are ours, taken from Steam, and the market for these items is this product. **So `Starting at` is not a market figure at all, it is our price for a copy**, and the settlement on this card is our value against our other price. **The route did not arrive with the venue and cannot**: a link to our own listing confirms nothing. **What the market foot renders instead is the relation, a copy comes from us at our price and we set our prices against the Steam market**, with the size of that relation printed as the absence it is | **Closed.** Two narrower rows replace it, below |
| **How far under Steam we set a copy** | **Opened 23 August 2026 by `D-92`, and it is what the venue row became.** Steam is the only number in this card's chain a stranger can read without us, so the relation to it is the whole of what makes `Starting at` checkable. **Two walked captures read 39 percent and 27 percent, so it is not a constant**, and no rule behind it is published. `[?]`, **and it is an undeclared margin rather than an unknown**, which is a sharper hole than the one it replaces. `numbers.md` section 2c | **Founder.** Nothing external gates it |
| **Whether the copies are in fact ours at the moment of withdrawal** | **Opened 23 August 2026 by `D-92`, and it is the condition under the two rows above and under the line at the head of the grid.** The founder's wording was "in principle". **If a third party supplies the copy at withdrawal time, the market foot goes back to naming somebody else and `A1`'s outbound link recovers its original job.** Flagged rather than assumed | **Founder**, and it is a question of fact about the live platform |
| **The as-of on the market foot** | `0.11` rule 2 requires a moment on anything that moves and the market start moves daily. **The card carries the figure and the grid carries no stamp**, which is a hole this node names rather than fills: a settlement whose market half has no moment is a settlement that reads as current forever | `0.11`, and this node at its next pass |
| **Whether a settlement figure has a sample floor of its own** | Two of the nine rows walked had no offers and rendered an absence. **What happens at one offer, or at an offer priced far off the rest, is not decided**, and a settlement struck against a single outlier listing is a number with a route nobody can check | Founder, with `0.11` |
| **The holding deadline** | Whether any deadline exists, how long, and what the item converts to. The slot is specified in section 3 and the value is `[?]` in three places | Founder, product decision |
| **Where row `F2` lives now, or whether it lives at all** | **Opened 23 August 2026 by `D-90`, section 0.7.** The receipt is deleted from this card by founder decision. **If "we will not store that" means the per-item copy, `F2` moves to `5.9`'s roll row; if it means the value at the moment of the win is not retained at all, `5.9`'s returned column dies with it and `F2` has no home anywhere.** `cjm-to-be.md` is untouched and still carries the row | **Founder** |
| **The two venues on the receipt** | Row `F1` says two named venues and no file names them. Carried from `0.11` rather than re-opened. **Conditional on the row above:** the venues are the receipt's anatomy and the receipt has no home on this card since `D-90`. **Narrowed 23 August 2026 by `D-92` and not closed:** the decision answers the settlement's venue and not this one, **and what it does settle is that neither of the two can be us**, since our price quoted beside our price is one reading printed twice | Founder, before stage 04 |
| **The sort threshold** | Section 4 makes sort conditional on a typical holding not fitting one screen, and typical holding size is `[?]` | Founder, question of fact to the live platform |
| **Where selling a skin back for coins lives on this page** | `D-38` put it in round 1 and `3.6` carries it on the outcome. **A person who did not sell at the outcome and wants to sell now has no control on this page**, and this node's own baseline row calls that the gap. Adding one is a founder decision, not a page edit: it is a second exit beside the one CTA | Founder |
| **A route from a held item back to its round** | The proof of the open lives on `7.1` and `1.2`. The map gives `5.1` two transitions, `5.2` and `5.3`, and `0.14` fixes four rendering sites of which this is not one. **The route is plausible and it is not drawn**, because adding it changes two files this node may not edit | `sitemap.md` and `0.14`, one row each if approved |
| ~~**Whether balance can leave the platform at all**~~ **Closed 2 September 2026 by `D-118`** | `G6` is commission-free withdrawal of an item to Steam. Nothing in the backlog or the map withdrew a balance. It mattered here and it mattered more on `5.6`, where `G4` freezes a balance rather than zeroing it: a balance that can never leave is a weaker promise than "frozen, not zeroed" reads as. **It can leave, as crypto, and the layer is on this page. `G4`'s promise is now worth what it says.** The row asked the right question for two weeks and the answer needed a founder | Founder, answered |
| **The identity hole on the free-entry path** | `flows.md` flow 3 records it in full: `B1` gates funding, `B2` forbids the check at the exit, and a person who never funds never meets the gate. The proposed shape raises the check when the account first holds a withdrawable item, at the outcome. **Proposed and not drawn**, riding on `D-A` | Counsel, under `D-A` |
| **Card states for a deadline** | If a deadline exists, an item inside its final stretch is a display variant of `0.6` and that component authorises it | Node `0.6` |

**And what belongs elsewhere.** The words on every control: stage 05, which owns microcopy and syncs it back. How the card looks, how rarity is coloured: stages 06 and 07, and the rarity ladder itself is already walked in `blocks.md` section 10. What the receipt is: row `F1` and `0.11`. Where the withdrawal states are named: `5.3`.


**Added 2 September 2026 by `D-118`, and all six belong to the cash out layer.**

| Open item | What is missing | Owner |
|---|---|---|
| **Which network we send USDT on** | Founder answer of 2 September named the three coins and left the chain open. **Until it is named the Tether tab cannot take an address**, and the press says so | Founder |
| **The blockchain fee** | The live layer charges one. We have no figure, so **You receive is `[?]`** and a request is refused rather than sent on a number we cannot show | Founder, then production |
| **The coin to crypto rate at the moment of sending** | `D-28` publishes the peg to the dollar. Nothing publishes a rate to ETH, LTC or USDT, so **no row of the ledger carries a crypto figure** | Founder |
| **Whether a cash out forfeits the deposit bonus** | The live layer says it does, and names two other things that do not exist for us. **`D-94` gave us a bonus and nothing says what a cash out does to it.** Not on the layer, by `D-107` | Founder |
| **What a cash out does when values are degraded** | `5.1`'s degraded state renders values that cannot be read, and **a cash out is a sale at a value.** The control is drawn there and the answer is not | Founder, with `0.11` |
| **Whether identity verification is required before money leaves** | **Answered 2 September 2026 and the answer is no**, as on the live product. Identity verification stays `LATER` on the map. **The hole is that money leaves this product with no check on who is taking it**, and it is printed here rather than closed | Founder, decided |

