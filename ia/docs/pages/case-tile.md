# Node 0.7. Canonical case tile

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One rendering of one Case, at two sites, carrying enough for a person to decide whether to open the case screen at all. It is the first object of the main job and it is tap one of three.

**Jobs served.** Main Job, `jtbd.md` Section 1, and Related Job 1, arrive with enough confidence to try. **Parent class:** job, plus barriers `B8-1` and `B7-1` carried by rows `D1`, `A2` and `C1`. Design principle 3 in `CLAUDE.md` is what fixes its element list: **cost never hides inside excitement**, so the entry cost is on the tile and not a number a person meets one screen later.

**Used by:** `1.0` Home, and `1.1`, which is the same page in a different account state. `3.1` Case catalogue.

**Not a page.** It has no URL of its own. It opens one, `3.3`.

**Rewritten on 18 August 2026 by founder decision `D-24`.** The tile the first version specified was six always-on fields. It is now **four fields, two conditional markers and one control**, and the reasoning of every surviving rule is unchanged. What changed, why, and what it costs is in `docs/decisions.md` D-24. The paragraphs below are the specification, not the diff.

---

## 0. What the category ships, what the baseline ships, and what we ship

`blocks.md` section 3 opened Hellcase and Key-Drop live on 12 August 2026 and recorded the tile:

> Case tile fields: **name, price, image**, and on Hellcase a TOP badge and one bare number.

`baseline.md` section 4 records the baseline's own tile: **item count, case name, a risk label of High-risk, Medium-risk or Low-risk, and the price in coins.**

| Source | Tile carries | What we take |
|---|---|---|
| Hellcase, Key-Drop | Name, price, image | The shape. **Not the TOP badge**, `0.11` rule 7 |
| Baseline, daddyskins | Name, image, risk label, price **in coins**, item count, a favourite control with a public count | Name, image, **risk band**, price, favourite. **In coins as well, since `D-28` of 19 August 2026 reversed `C1`.** What does not cross is a coin with no published rate: `0.11` rule 10 puts the peg wherever money is spent |
| **This node** | **Artwork, name, entry cost, risk band**, plus a stock marker and a daily marker where each applies, plus the favourite control | Four things a person reads before deciding, and nothing that reads as a statistic |

**The one thing the first version had that this one drops is the item count**, and it is dropped because the risk band answers the same question better. "Forty items" says how long the table is. **The risk band says what the table is shaped like**, it is computed from the same table, and it is the version of that fact a person can act on. The count still renders on `3.3`, where the table itself is, so no fact is lost, only an early and weaker rendering of it.

---

## 1. Four fields, two markers, one control

| # | Element | Kind | Object | Parent | Class |
|---|---|---|---|---|---|
| 1 | **Case artwork** | Field, always | Case | Main Job, `jtbd.md` Section 1. Entity 1 in `sitemap.md` lists name and artwork together. **By `D-24` it is the largest element on the tile** | job |
| 2 | **Case name** | Field, always | Case | Main Job. It is also the accessible name of the whole tile | job |
| 3 | **Entry cost**, in coins | Field, always | Case | Row `C1` as `D-28` rewrote it, still standing on `B7-1`, pattern of 7. **The barrier is now answered by the peg rather than by the denomination**, `0.11` rule 10 | barrier |
| 4 | **Risk band**, three values in words | Field, always | Case, over its drop table | **Design principle 3 in `CLAUDE.md`, quoted:** where money is about to be spent, odds, cost and expected value are visible and legible. **No backlog row yet**, section 7 | principle |
| 5 | **Stock shortfall marker** | Marker, only when true | Case, over its drop table | Rows `A2` and `D1`, both standing on `B8-1` | barrier |
| 6 | **Daily marker** | Marker, only where it applies | Free entry | Row `I2`. **No parent in any of the three legal classes.** In MVP by founder decision of 11 August 2026, `D-15` | **none, printed** |
| 7 | **Favourite control**, a toggle and its public count | Control | Case, plus the account that pressed it | **None in the three legal classes.** In MVP by founder decision of 18 August 2026, `D-24`, which also amends `0.11` rule 7 to let it exist | **none, printed** |

**Two elements carry an empty parent cell and neither of them borrows one.** `I2` and the favourite are the only two things on this tile that no barrier, job or named constraint asks for. `cjm-to-be.md` prints `I2` that way already. `D-24` prints the favourite the same way rather than inventing a job for it after the fact, because a parent written to justify a decision already taken is the thing the three legal classes exist to stop.

**Field 4 is a label over a number, and the number is not on the tile.** The band is derived from the drop table, register `0.11` owns the definition, and the figure it is derived from is published on `3.3` beside RTP and expected value. The tile says High, Medium or Low. **The case screen says what that meant.** A band with no published number behind it is an adjective, and an adjective about risk on a page that sells risk is marketing.

**Field 5 counts entries at zero, not units.** `A2` is a live free-unit count **per item**, and that number belongs on `0.6` at `3.3` where a person is looking at one item. Summing free units across items of different value into one tile figure would be summing across kinds, which `0.11` rule 7 forbids in as many words. So the marker says "3 items out of stock" or "every item out of stock", and it says nothing at all when everything is available. **Silence is the available state**, which is what makes the marker readable when it appears.

---

## 2. Two densities, one element set

| Variant | Where | Shows | Must not |
|---|---|---|---|
| **V1, the featured tile** | `1.0` Home, in the case grid that sits **directly on the page** rather than behind a mode hub, `D-20` | All four fields, the markers that apply, the control. Largest size the grid allows | **Carry urgency.** `blocks.md` section 2 leaves the Key-Drop and Hellcase event banner with its countdown: no parent in round 1, and a countdown is urgency attached to spending. **And no TOP badge**, `0.11` rule 7 |
| **V2, the catalogue tile** | `3.1` Case catalogue, in the full shelf with the category bar, search and filters | The same set, denser, in a grid that has to survive `3.2` | **Disappear when it is out of stock.** Zero-stock items stay visible and marked, `blocks.md` section 3, which is the one row in that table no competitor matches |

**One element set, two densities, and no third.** `1.1` is the same page as `1.0` in a different account state.

**The tile still has no signed-in variant, and the favourite does not create one.** The control renders in both states. Signed out it renders unpressed and its press routes to `2.4`, sign in with Steam, and returns to the tile it was pressed from. **What differs by account is the pressed state of one control, not the composition of the tile**, and that distinction is what keeps `1.1` a state-dependent strip on one page rather than a second page.

**The two densities differ in size and in neighbours, never in elements.** On `1.0` the tile is the first spend-shaped object a pre-suspected visitor meets, `B1-1`, and it is doing trust work. On `3.1` it is one of many and it is doing comparison work. **A tile that dropped its entry cost or its risk band in the denser grid would be hiding the two decision fields exactly where comparison happens.**

---

## 3. Eight states

| State | What the tile shows | Route out |
|---|---|---|
| **Available** | Four fields, no markers. The normal case, and the quiet one | `3.3` |
| **Free units exhausted on some items** | The stock marker appears with the count of entries at zero. **A shelf that is legibly short**, `D1` | `3.3`, where `0.6` marks each one and node `3.4` owns the per-item state |
| **Sold out**, every entry at zero | The marker says so and the tile **stays in the grid**. Not removed, not filtered out and not faded past reading. `blocks.md` section 3: the shelf is legibly empty instead of silently short | `3.3` still opens and shows which items are out. **The open control is what is unavailable, not the case** |
| **Daily case, available today** | The daily marker in its available form, on a tile that is otherwise a normal case, `3.1` | `3.3` |
| **Daily case, taken today** | The marker states that it is taken and when it returns. **The reset moment is `[?]`**, entity 13 in `sitemap.md` marks availability and reset unknown | `3.3`, and the rest of the shelf |
| **Entry cost or risk band unavailable** | An explicit "not available" in the element's place. **Never a zero, never a blank and never a default band**, `0.11` rule 3. A case whose table cannot be read does not get called Low-risk | `3.3`, which is where the authoritative figures live |
| **Favourite off or on**, signed in | The control states which it is **in text as well as in shape**, and the count moves by one when it is pressed. Optimistic, and it reverts visibly if the write fails | Stays on the page. The favourite never navigates |
| **Favourite pressed while signed out** | The press routes to `2.4` and **the intent survives the round trip**: on return the case is marked. A control that silently does nothing is the failure this state exists to name | `2.4`, then back to the tile |

**Sold out is a state of the tile and not a reason to delete it.** Deleting it is what the category does, and it produces a shelf that looks full while being short. **The count of what is missing is the honest form of the same fact.**

**The market verdict is not a tile state.** Under `D-23` the allowlist is closed by default and a market with no row is `not launched`, but that verdict is met by node `2.1` at the first case interaction and it is owned by register `0.12`. A tile that changed by market would put a legal fact into a grid, where it would be read as availability of the case rather than of the product.

---

## 4. The tile and the screen it opens

**One tile, one case, one destination.** Every tile opens `3.3` and nothing else. There is no quick open and no open from the grid.

**The rule that used to say "no second control" now says what it always meant.** `D-24` restates it: **no control on the tile may start a spend or shorten the path to one.** The favourite does neither. It costs no tap on the main path, it moves no money, and it changes nothing about what the open costs.

**Why there is still no open control on the tile.** The numbers that make an open a decision live on `3.3` and nowhere else: published chance and current value per item `D2`, published tested RTP and the expected value at this entry cost `D4`, the observed rate counter `D3`, and now the figure the risk band is derived from. An open control on a tile puts the spend before all of them, which is design principle 3 read backwards. `blocks.md` section 4 leaves Hellcase's multi-open selector for the same reason: a spend multiplier next to the trigger, before any ceiling is visible.

**Tap one of three.** The main flow is home, case screen, age gate, open, `CLAUDE.md`. The tile is tap one, `2.1` is tap two and the open is tap three. **Anything added to the tile that costs a tap costs the whole depth budget**, which is why `3.1` is off the main path by `D-20` and reached as "all cases" rather than as a compulsory hop.

**The tile is a strict subset of the screen it opens, from one source.** Same rule as `0.14` and `0.6`: nothing on the tile that the case screen does not have, nothing named differently, nothing ordered against it. **The risk band and the stock marker are read from the drop table at read time**, not stored beside the case. A tile that says Low-risk over a table that computes High is the defect this rule exists to prevent, and it is the same class of defect as `B7-2`: the numbers shown are not the numbers used.

**What the tile does not carry, and why each one was considered.**

| Not on the tile | Why it was considered | Verdict |
|---|---|---|
| **Item count** | It was field 3 of the first version, it is parented on `D1` and `B8-1`, and the baseline prints it | **Dropped by `D-24`.** The risk band answers the same question from the same table and answers it better. The count renders on `3.3`, on the table it describes |
| **Published tested RTP and EV**, `D4` | The strongest trust numbers the product owns, and design principle 3 wants them where money is decided | **Not on the tile.** `D4`'s own row places them on the case page and before login. The tile carries the band, the case page carries the figures, and `0.11` exists so that one number has one definition |
| **The percentage behind the risk band** | It is the number that makes the band honest | **Not on the tile, and this is deliberate.** Four fields is the whole point of `D-24`. The band on the tile, the figure and its method on `3.3`, one definition in `0.11` |
| **Category or collection** | The baseline groups 239 cases into thirteen categories, `baseline.md` section 4 | **Not on the tile.** A `[?]` part of the Case entity whose scale rides on `D-D`, and the category bar on `3.1` is where grouping renders |
| **A "best drops" strip** | Hellcase and the baseline both put recent wins on the case surface | **Refused.** Survivorship by construction, `blocks.md` section 4. The top drops of the week are not what happens |
| **A TOP badge, an opened counter, a "most popular" rank** | All three exist in the category, and the favourite count makes them look adjacent | **Still refused, and `D-24` draws the line explicitly.** A favourite count is a count of people who marked this case. A TOP badge, a rank and an opened counter are the platform telling a person which case is better. **The first is data about others, the second is a recommendation to spend** |

---

## 5. Seven rules that are not styling

### 5.1 The price is in coins, and the peg is never further away than the spend

**Rewritten on 19 August 2026 by `D-28`, which reversed `C1` and printed its cost in full.** The rule used to delete the coin denomination entirely. It no longer does: the product denominates in coins, as the live product and the whole category do, Clash.gg in Gems, Key-Drop in local currency, Hellcase in a bare number, `blocks.md` section 5.

**What survives is the reason the old rule existed.** `B7-1` is a pattern of 7 and it is not about the word on the price, it is about a price a person cannot convert. So the rule this node now enforces is narrower and harder to satisfy: **the entry cost renders in coins, and the peg is never further from it than the spend it precedes.** On a tile the peg is not on every card, because a grid of twenty pegs is noise rather than disclosure. **It is on the grid once, and on `3.3` beside the commit block, which is the last surface before money moves.** `0.11` rule 10 owns the anatomy and this node obeys it.

**A tile is where the price is first read, so it is where an unconvertible price would first hide.** That risk did not go away with `D-28`, it moved onto the peg.

### 5.2 The stock marker is text, never a colour

Same rule as `0.6` rule 5.3 and for the same reason. A dimmed tile does not say "three items are out of stock", it says "something is wrong with this tile", and it says nothing at all to a person who cannot separate the two treatments.

### 5.3 The daily marker is a label, not a mechanic

It says the case is free today, or that it is taken and when it returns. **The marker itself never becomes a streak, a ladder, a counter or a status**, at either density, on either page that renders this tile.

**Narrowed on 18 August 2026 by `D-25`, and the narrowing is named rather than stepped over.** This rule used to read "a boundary or an entitlement", which generalised `CLAUDE.md`'s limits rule from limits to entitlements. **That generalisation was this repository's own extension and it is withdrawn.** `CLAUDE.md` binds limits, deposit, session, self exclusion and cool down, and that rule is untouched and absolute. The daily case is an entitlement. The founder chose the baseline's five tier ladder with its wager remaining figure, and **it lives in block B5 of node `1.0` under four rules of its own, never on this tile.** The tile still carries a marker and nothing more: no tier, no wager figure, no progress.

### 5.4 The artwork is the largest element and still carries no fact

`D-24` makes the image the visual weight of the tile, which is what the baseline and the whole category do and what makes a shelf of cases readable at a glance. **The rule underneath it does not move:** every load-bearing element is text, `0.11` rule 8, and that is now name, entry cost, risk band and the markers. A tile whose image fails is plainer and still a complete offer, and the pre-login case grid is a large part of the product's argument to search and to a screen reader.

### 5.5 The risk band is three named values, and never an icon alone

Same rule as the rarity slot on `0.6`: **the tier has a name and the name is in the tile or in its accessible name.** The baseline draws three skulls, two filled and one empty, `baseline.md` section 4. A meter may render, but it never carries the band by itself, because a person who cannot separate a filled skull from an empty one has been told nothing. **Three values, in words, from one computation.**

### 5.6 The favourite is a mark, never a leaderboard, and never the largest thing on the tile

The count is the number of accounts that have marked this case, it is text, and it obeys the register: missing is a state and not a zero, a failed read is marked degraded rather than frozen, `0.11` rules 3 and 6. **What it may never become:** a rank, a default sort, a "most popular" strip, a badge on the top tile, or a number that sits next to the open control on `3.3`. `D-24` allows one public count on the tile and allows nothing that turns it into a recommendation to spend.

**And a size, added by stage 04 on 19 August 2026 after the founder read the drawn tile beside the live one.** It is **a count and a mark in the corner of the artwork**. Stage 04 first drew it as a full width control under the fields, which made a tile whose job is four fields look like a tile whose job is one button: **the one element with no parent in the three legal classes was the largest thing on the card.** `D-24` admitted it with its orphan status printed, and the weight it is drawn at has to match that status. The baseline puts a count and a thumb in the corner and nothing else. **It keeps everything `D-24` gave it:** its own focus stop, its own accessible name carrying the count in words, and it never swallows the tile's own tap.

### 5.7 The four fields run in the baseline's visual order, artwork, name, risk, cost

**Section 1 lists the fields. It does not order them on screen**, and stage 04 owns that. The order is the baseline's: name, risk, price. **The price last is what makes it the thing the eye lands on**, because the cost is the last fact before the decision rather than one of four facts in a column, and design principle 3 says cost never hides inside excitement.

**The entry cost also takes the slack at the foot of the tile**, so a tile carrying a stock marker and a tile carrying none still line their prices up across a row. A price that floats to a different height in every cell is a price the eye has to hunt for.

---

## 6. The tile at 360px

Four fields and a control in a grid cell, and the grid is the densest surface in the product.

- **Two across at 360px becomes possible, and that is what `D-24` bought.** The first version needed one column because six fields in 160px killed the price. Four fields and a bigger image survive a two-column grid, and the decision is node `1.0`'s and `3.1`'s to take at their own steps.
- **The case name truncates on the second line, never mid-word, and the full name is the accessible name.** The baseline truncates to "ESPORTS WO..." and "THE 100 CS2 ...", `baseline.md` section 4 walked on 11 August 2026, and a truncated identity in a grid of similar artwork is the defect we are not inheriting.
- **The entry cost never truncates and never shrinks below the name.** Money is the field the tile exists to state. Design principle 3.
- **The risk band is words, and it holds its size beside the price.** If a width cannot hold both, the width is wrong, not the band.
- **The tile is the whole target and the favourite is the one exception.** The card is a link, the link is the tile, and the favourite is a nested button with its own name, its own focus stop and a target no smaller than 44px that does not overlap the link's own tap area at any width. **A control that steals the tile's tap on a phone is worse than no control.**
- **The accessible name is name, then cost, then risk band, then the markers.** The order is the decision order, and a screen reader that opens with a number has announced a statistic rather than a case. The favourite announces separately, as a toggle with a pressed state and its own count.

---

## 7. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The backlog rows for the risk band and the favourite** | Both are on the tile with a parent named, and **neither has a row in `cjm-to-be.md`**, which is the single owner of the MVP capability list. Adding two rows moves that file's count and the line in `CLAUDE.md` that quotes it, **and that is a named decision rather than a side effect of a component edit** | Founder, and the go is explicit |
| **The thresholds of the risk band** | The method is owned by `0.11`. **Where High stops and Medium begins is `[?]`**, and it is a treasury question rather than a design one. The band cannot render until it is answered | Founder, with `0.11` |
| **Where the favourite list renders** | The mark exists; the list of marked cases has no home. A filter on `3.1` and a section on `5.1` are the two candidates and neither is decided here | Nodes `3.1` and `5.1` at their own steps |
| **The parent of the daily free case** | `I2` sits in MVP with no parent in any of the three legal classes, by founder decision. Marker 6 exists because of that decision and carries its cost in the open, `D-15` | Founder |
| **Reset and availability of the daily case** | Entity 13 marks both `[?]`. The taken state cannot say when the case returns until this is answered | Founder, product decision |
| **Whether the daily case is gated the way the baseline gates it** | **Answered on 18 August 2026 by `D-25`: yes, as the baseline gates it.** The ladder lives on `1.0` block B5 and rule 5.3 above was narrowed to admit it. **What is still open is the trade it makes**, that a free entry is now earned by wagering, and that review sits on node `1.0` | Founder, before stage 04 |
| **How many tiles a grid holds, and the sort order** | Featured on `1.0` and the full shelf on `3.1` are different problems. skin.club runs 248 case links on one page with no pagination and no result count, `blocks.md` section 3, which `3.2` already refuses | Nodes `1.0` and `3.1` at steps 5 and 6 |
| **The catalogue's scale** | `D-D`. How large a stock-backed catalogue can be is a treasury question, and it decides whether category grouping is required at all | Founder |

**And what belongs elsewhere.** The words on the tile: stage 05. The grid, the filters and the empty result: nodes `1.0`, `3.1` and `3.2`. The definition and failure behaviour of the free-unit figure, of the risk band and of the favourite count: node `0.11`. The items inside the case: node `0.6`. Indexation and the collection schema of the pages that render the tile: node `0.13`.
