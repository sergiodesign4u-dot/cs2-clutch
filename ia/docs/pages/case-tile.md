# Node 0.7. Canonical case tile

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One rendering of one Case, at two sites, carrying enough for a person to decide whether to open the case screen at all. It is the first object of the main job and it is tap one of three.

**Jobs served.** Main Job, `jtbd.md` Section 1, and Related Job 1, arrive with enough confidence to try. **Parent class:** job, plus barriers `B8-1` and `B7-1` carried by rows `D1`, `A2` and `C1`. Design principle 3 in `CLAUDE.md` is what fixes its field list: **cost never hides inside excitement**, so the entry cost is a field on the tile and not a number a person meets one screen later.

**Used by:** `1.0` Home, and `1.1`, which is the same page in a different account state. `3.1` Case catalogue.

**Not a page.** It has no URL of its own. It opens one, `3.3`.

---

## 0. What the category ships, and the one extra step it costs

`blocks.md` section 3 opened Hellcase and Key-Drop live on 12 August 2026 and recorded the tile:

> Case tile fields: **name, price, image**, and on Hellcase a TOP badge and one bare number.

**Three fields, and the consequence is a step.** A person who wants to know what is in the case has to open it. The baseline does better and prints an item count and a risk label, `baseline.md` section 4, and it prices in coins, which `C1` deletes.

**So the tile carries six fields rather than three**, and the two that the category does not have are the two that remove the extra step: **the item count says how much is in there, and the free-unit state says how much of it is actually available right now.** That second one is `D1` becoming visible. `D1` is an architecture row, the roll cannot select an item with zero free units, and a person only ever meets architecture through a field.

---

## 1. Six fields

| # | Field | Object | Parent | Class |
|---|---|---|---|---|
| 1 | **Case artwork** | Case | Main Job, `jtbd.md` Section 1. Entity 1 in `sitemap.md` lists name and artwork together | job |
| 2 | **Case name** | Case | Main Job. It is also the accessible name of the whole tile | job |
| 3 | **Item count** | Case, over its drop table | Row `D1`, which stands on `B8-1`. **Inherited too:** the baseline already prints it, `baseline.md` section 4 | barrier |
| 4 | **Entry cost**, in one real currency | Case | Row `C1`, which stands on `B7-1`, pattern of 7, the currency abstraction that hides what things cost | barrier |
| 5 | **Live free-unit state** | Case, over its drop table | Rows `A2` and `D1`, both standing on `B8-1` | barrier |
| 6 | **Daily marker**, where it applies | Free entry | Row `I2`. **No parent in any of the three legal classes.** In MVP by founder decision of 11 August 2026, `docs/decisions.md` D-15 | **none, printed** |

**Field 6 carries its orphan status in its own row and this node does not lend it one.** `cjm-to-be.md` prints `I2` the same way: the only row on the map with no barrier, no job and no named constraint behind it. `3.1` treats the daily free case as an addressable case rather than a banner, which is why it is a marker on a tile at all instead of a block of its own.

**Field 5 counts items, not units, and the derivation matters.** `A2` is a live free-unit count **per item**, and that number belongs on `0.6` at `3.3` where a person is looking at one item. Summing free units across items of different value into one tile figure would be summing across kinds, which `0.11` rule 7 forbids in as many words. **So the tile counts entries at zero:** all items available, or n items out of stock. One kind, one count, and it is the number that changes what a person does next.

---

## 2. Two densities, one field set

| Variant | Where | Shows | Must not |
|---|---|---|---|
| **V1, the featured tile** | `1.0` Home, in the case grid that sits **directly on the page** rather than behind a mode hub, `D-20` | All six fields, at the largest size the grid allows | **Carry urgency.** `blocks.md` section 2 leaves the Key-Drop and Hellcase event banner with its countdown: no parent in round 1, and a countdown is urgency attached to spending. **And no TOP badge**, `0.11` rule 7, a number is never a score |
| **V2, the catalogue tile** | `3.1` Case catalogue, in the full shelf with the category bar, search and filters | The same six fields, denser, in a grid that has to survive `3.2` | **Disappear when it is out of stock.** Zero-stock items stay visible and marked, `blocks.md` section 3, which is the one row in that table no competitor matches |

**One field set, two densities, and no third.** `1.1` is the same page as `1.0` in a different account state, and **the tile has no signed-in variant at all**, because not one of its six fields depends on the account. That is the practical reason `1.1` is a state-dependent strip on one page rather than a second page.

**The two densities differ in size and in neighbours, never in fields.** On `1.0` the tile is the first spend-shaped object a pre-suspected visitor meets, `B1-1`, and it is doing trust work. On `3.1` it is one of many and it is doing comparison work. The same six fields serve both, and a tile that dropped its entry cost in the denser grid would be hiding the cost exactly where comparison happens.

---

## 3. Six states

| State | What the tile shows | Route out |
|---|---|---|
| **Available** | All six fields. The normal case | `3.3` |
| **Free units exhausted on some items** | The count of entries at zero, as text beside the item count. **A shelf that is legibly short**, `D1` | `3.3`, where `0.6` marks each one and node `3.4` owns the per-item state |
| **Sold out**, every entry at zero | The tile **stays in the grid and says so**. It is not removed, not filtered out and not faded past reading. `blocks.md` section 3: the shelf is legibly empty instead of silently short | `3.3` still opens, and it shows which items are out. **The open control is what is unavailable, not the case** |
| **Daily case, available today** | The daily marker in its available form, on a tile that is otherwise a normal case, `3.1` | `3.3` |
| **Daily case, taken today** | The marker states that it is taken and when it returns. **The reset moment is `[?]`**, entity 13 in `sitemap.md` marks availability and reset unknown | `3.3`, and the rest of the shelf |
| **Entry cost or item count unavailable** | An explicit "not available" in the field's place. **Never a zero and never a blank**, `0.11` rule 3. A tile with no price does not render a price of nothing | `3.3`, which is where the authoritative figures live |

**Sold out is a state of the tile and not a reason to delete it.** Deleting it is what the category does, and it produces a shelf that looks full while being short. **The count of what is missing is the honest form of the same fact**, and it is the only form that a person can act on.

**The market verdict is not a tile state.** Under `D-23` the allowlist is closed by default and a market with no row is `not launched`, but that verdict is met by node `2.1` at the first case interaction and it is owned by register `0.12`. A tile that changed by market would put a legal fact into a grid, where it would be read as availability of the case rather than of the product.

---

## 4. The tile and the screen it opens

**One tile, one case, one destination.** Every tile opens `3.3` and nothing else. There is no second control on the tile, no quick open, no open from the grid.

**Why there is no open control on the tile.** The numbers that make an open a decision live on `3.3` and nowhere else: published chance and current value per item `D2`, published tested RTP and the expected value at this entry cost `D4`, the observed rate counter `D3`. An open control on a tile puts the spend before all three, which is design principle 3 read backwards. `blocks.md` section 4 leaves Hellcase's multi-open selector for the same reason: a spend multiplier next to the trigger, before any ceiling is visible.

**Tap one of three.** The main flow is home, case screen, age gate, open, `CLAUDE.md`. The tile is tap one, `2.1` is tap two and the open is tap three. **Anything added to the tile that costs a tap costs the whole depth budget**, which is why `3.1` is off the main path by `D-20` and reached as "all cases" rather than as a compulsory hop.

**The tile is a strict subset of the screen it opens, from one source.** Same rule as `0.14` and `0.6`: no field on the tile that the case screen does not have, no field named differently, no field ordered against it. **The item count and the free-unit state are read from the drop table at read time**, not stored beside the case. A tile that says forty items over a table that shows thirty eight is the defect this rule exists to prevent, and it is the same class of defect as `B7-2`: the numbers shown are not the numbers used.

**What the tile does not carry, and why each one was considered.**

| Not on the tile | Why it was considered | Verdict |
|---|---|---|
| **Risk band** | Entity 1 in `sitemap.md` lists "risk band as a legible label" as a part of the Case, and the baseline prints High-risk, Medium-risk or Low-risk on the tile plus a three-skull meter on the case page, `baseline.md` section 4 | **Not on the tile, and it has no backlog row anywhere.** It is inherited from the baseline and parentless in our map. Carried to node `3.3` with that status rather than shipped here on the strength of the baseline having it |
| **Published tested RTP and EV**, `D4` | The strongest trust number the product owns, and design principle 3 wants it where money is decided | **Not on the tile.** `D4`'s own row places it on the case page and before login. The tile is the route to that page, not a second publication of the same figure, and `0.11` exists so that one number has one definition |
| **Category or collection** | The baseline groups 239 cases into thirteen categories, `baseline.md` section 4 | **Not on the tile.** A `[?]` part of the Case entity whose scale rides on `D-D`, and the category bar on `3.1` is where grouping renders |
| **A "best drops" strip** | Hellcase and the baseline both put recent wins on the case surface | **Refused.** Survivorship by construction, `blocks.md` section 4. The top drops of the week are not what happens |
| **A like count, a TOP badge, an opened counter** | All three exist in the category | **Refused.** `0.11` rule 7: a number is never a score, no streaks, no status |

---

## 5. Four rules that are not styling

### 5.1 The price is in one real currency, always

`C1` deletes the coin denomination entirely, and `sitemap.md` names this the first inherited structure that research overturns: the baseline prices cases in coins with no visible conversion rate. `blocks.md` section 5 records the same in the wider category, Clash.gg in Gems, Key-Drop in local currency, Hellcase in a bare number. **A tile is where the price is first read, so it is where a second currency would first hide it.**

### 5.2 The free-unit state is text, never a colour

Same rule as `0.6` rule 5.3 and for the same reason. A dimmed tile does not say "three items are out of stock", it says "something is wrong with this tile", and it says nothing at all to a person who cannot separate the two treatments.

### 5.3 The daily marker is a label, not a mechanic

It says the case is free today, or that it is taken and when it returns. **It never becomes a streak, a ladder, a counter or a status.** The limits rule in `CLAUDE.md` binds this stage and stages 04, 07 and 11: the moment a boundary or an entitlement acquires completion mechanics it stops describing and starts encouraging. The baseline's own answer to `I2` is a five tier ladder with a wager remaining counter, `baseline.md` section 4, and that is an inherited answer to an open risk which belongs in front of the founder rather than inside this component.

### 5.4 The artwork is an enhancement and the tile survives without it

Every load-bearing field is text: name, item count, entry cost, stock state, daily marker. `0.11` rule 8. A tile whose image fails is plainer and still a complete offer, and the pre-login case grid is a large part of the product's argument to search and to a screen reader.

---

## 6. The tile at 360px

Six fields in a grid cell, and the grid is the densest surface in the product.

- **One column at 360px unless the entry cost stays at full size and the case name survives two lines.** Two across at 360px gives each tile about 160px, and the first thing to die is the price.
- **The case name truncates on the second line, never mid-word, and the full name is the accessible name.** The name is the identity of the object, and a truncated identity in a grid of similar artwork is unusable.
- **The entry cost never truncates and never shrinks below the name.** Money is the field the tile exists to state. Design principle 3.
- **The item count and the stock state are one line, in words.** "40 items" and "3 out of stock" read; "40 / 3" does not.
- **The tile is the whole target.** The card is a link, the link is the tile, and there is no small hotspot inside it.
- **The accessible name is name, then cost, then count, then stock.** The order is the decision order, and a screen reader that opens with a number has announced a statistic rather than a case.

---

## 7. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **The parent of the daily free case** | `I2` sits in MVP with no parent in any of the three legal classes, by founder decision. Field 6 exists because of that decision and carries its cost in the open, `D-15` | Founder |
| **Reset and availability of the daily case** | Entity 13 marks both `[?]`. The taken state cannot say when the case returns until this is answered | Founder, product decision |
| **Whether the daily case is gated the way the baseline gates it** | The baseline puts a wager requirement and a five tier ladder in front of its daily reward, `baseline.md` section 4, which is an answer to the recorded risk in `I2` that a daily free open teaches that opening is free. **Adopting it would contradict rule 5.3 of this node** | Founder, and the decision is named rather than pre-empted here |
| **Where the risk band renders** | Entity 1 lists it, the baseline prints it, no backlog row requires it. `[ORPHAN]` and not on the tile | Node `3.3` at step 6 |
| **How many tiles a grid holds, and the sort order** | Featured on `1.0` and the full shelf on `3.1` are different problems. skin.club runs 248 case links on one page with no pagination and no result count, `blocks.md` section 3, which `3.2` already refuses | Nodes `1.0` and `3.1` at steps 5 and 6 |
| **The catalogue's scale** | `D-D`. How large a stock-backed catalogue can be is a treasury question, and it decides whether category grouping is required at all | Founder |

**And what belongs elsewhere.** The words on the tile: stage 05. The grid, the filters and the empty result: nodes `1.0`, `3.1` and `3.2`. The definition and failure behaviour of the free-unit figure: node `0.11`. The items inside the case: node `0.6`. Indexation and the collection schema of the pages that render the tile: node `0.13`.
