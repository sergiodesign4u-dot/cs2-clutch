# Node 0.6. Canonical skin item card

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** One rendering of one thing, the skin, at five sites, so that the item a person compares, wins, holds and takes out is recognisably the same object every time and never gains or loses a field on the way.

**Jobs served.** Main Job, `jtbd.md` Section 1, a chance at a rare skin I actually want. Related Job 5, withdraw and get what I earned. **Parent class:** job, through the Main Job and Related Job 5, plus barriers `B7-1` and `B7-2` carried by rows `D2`, `F1` and `F2`. **`B8-1` reached this card through `D1` and left on 21 August 2026 with `D-60`**, together with field 10 and one of the eight states. Design principle 3 in `CLAUDE.md` is what makes it canonical rather than five implementations: **where money is about to be spent, odds, cost and expected value are visible and legible**, and a field that appears on one surface and quietly leaves on another is a field that hides.

**Used by:** `3.1` Case catalogue, `3.3` Case screen at phase 1 and at phase 3, `5.1` Account and inventory, `5.3` Withdrawal, `7.1` Public result. The list is the `used by` line of node `0.6` in `ia/docs/sitemap.md`, cluster 0.

**Not a page.** It has no URL of its own. It renders inside nodes that do.

---

## 0. Three objects, one card, and this is the thing to settle first

The entity inventory in `sitemap.md` holds three separate objects, and this one card renders all three:

| Where | Object it renders | What that object is |
|---|---|---|
| `3.3` phase 1 | **Drop table entry** | This skin, at this chance, at this value, in this ticket range. **The free units left this object on 21 August 2026, `D-60`** |
| `3.3` phase 3, `5.1`, `5.3`, `7.1` | **Skin instance** | The specific unit somebody owns, carrying the receipt that says what it was worth when it was won |
| `3.1`, and inside both of the above | **Skin** | The item type as the market knows it: weapon, finish, wear, rarity |

**A card that changed shape between the three would be three components with one name.** The rule this node exists to hold is the rule `0.14` holds for the proof: **one field set, several densities. No site adds a field the others do not have, names a field differently, or orders them differently.**

**Why that rule is not cosmetic here.** `B7-1` is the gap between what a win appears to be worth and what it is worth, pattern of 7. It is a barrier about a number changing between two screens. A component whose fields change between two screens is the same defect one level down.

---

## 1. The field set

Fifteen fields. Fourteen ship and one is carried with its orphan status printed, which is the treatment `CLAUDE.md` requires rather than a quiet deletion.

| # | Field | Object | Parent | Class |
|---|---|---|---|---|
| 1 | **Image** | Skin | Main Job, `jtbd.md` Section 1, a rare skin I actually want | job |
| 2 | **Weapon name** | Skin | Main Job | job |
| 3 | **Skin name** | Skin | Main Job | job |
| 4 | **Wear grade** | Skin | Row `F1`, which stands on `B7-1`. Wear is most of what a unit is worth, so a value with no wear beside it is a value with no subject | barrier |
| 5 | **StatTrak flag** | Skin | Row `F1`, `B7-1`. Recorded as a separate axis by `blocks.md` section 10 | barrier |
| 6 | **Rarity treatment** | Skin | Row `E3`, rarity-differentiated reveal, which stands on the Main Job and on Emotional Job 2 | job |
| 7 | **Published drop chance** | Drop table entry | Row `D2`, which stands on `B7-2`, the belief that the numbers shown are not the numbers used | barrier |
| 8 | **Current value** | Drop table entry | Row `D2`, same parent. Paired with field 7 by rule 2 below | barrier |
| 9 | **Ticket range** | Drop table entry | Rows `E4` and `F3`, both standing on Related Job 3. The proof has to resolve against something, and `0.14` lists the ticket range as a proof field | job |
| ~~10~~ | ~~**Live free-unit count**~~ | Drop table entry | Row `A2`, which stood on `B8-1`, the stock question. **Withdrawn 21 August 2026, `D-60`**, and the row is kept rather than renumbered so that the field list of this card can still be read against every document that cites a field by its number | ~~barrier~~ |
| 11 | **Observed rate** | Read from `0.11` | Row `D3`, which stands on `B7-2` and `B6-2`. **Conditional on `D-B`** | barrier |
| 12 | **Market price, its as-of and its outbound link** | Skin | Row `A1`, which stands on `B1-2` and `B2-1`. `A1` puts it **on the top item**, and that wording is carried rather than generalised | barrier |
| 13 | **Instance value receipt** | Skin instance | Rows `F1` and `F2`, both on `B7-1`. What this unit was worth at the moment it was won, with that moment attached | barrier |
| 14 | **Instance state**, held, withdrawing, withdrawn | Skin instance | Row `G1`, named states, which stands on `B8-2` | barrier |
| 15 | **Float and pattern** | Skin instance | **None. `[ORPHAN]`** | none |

**Field 15 is carried and not shipped.** Entity 4 in `sitemap.md` already marks float and pattern specifics `[?]` and says no job in the current list requires them. They are the most requested thing in the category that our own map has no parent for, so the row exists here with an empty parent cell rather than being discovered later as an omission.

**Field 11 is conditional and stays conditional.** `D3` does not do its job until N is large enough, and `0.11` rule 4 says that below the sample floor the counter prints N and no percentage. The card reserves the slot; the register owns the behaviour.

---

## 2. Three axes, and the block bank settled it

`blocks.md` section 10 walked the ladder live on 12 August 2026 on two Hellcase case pages by reading the computed background colour of every rarity chip.

| Observed value | Chips counted on the two pages |
|---|---|
| `#b0c3d9` | 2 |
| `#5e98d9` | 5 |
| `#4b69ff` | 20 and 17 |
| `#8847ff` | 5 and 4 |
| `#d32ce6` | 16 and 3 |
| `#eb4b4b` | 10 and 11 |
| `#f7b62d` | 16, **only on the case that contains knives and gloves** |

**Seven distinct tiers, and the seventh is conditional on what the case holds.** So the card needs a rarity slot with seven values, one of which does not appear on most cases.

**One claim is deliberately not made, and it is the `[?]` this node inherits.** Six of the seven look like the CS2 client's own rarity palette, which would mean the ladder belongs to the game rather than to any platform, and that we may not restyle it freely because a player already reads it without a legend. **That reading is model memory and is `[?]` until a Valve or Steam page is opened and the values are compared.** The check is one page. It is not this node's to run and it is not stage 06's to skip.

**And the three axes are three.** `blocks.md` section 10 records wear printed as Factory New, Minimal Wear, Field-Tested and Battle-Scarred on skin.club and as FN, MW, FT and BS on Hellcase, with StatTrak as a further flag on top of both. Rarity, wear and StatTrak vary independently, so they are fields 4, 5 and 6 and not one badge. **Collapsing them loses the two that move the value**, which is exactly the money `F1` exists to be honest about.

---

## 3. Five densities, one field set

`x` means the field renders. `p1` and `p3` are the two phases of `3.3`, which is one page.

| Field | `3.1` | `3.3` | `5.1` | `5.3` | `7.1` |
|---|---|---|---|---|---|
| Image | x | x | x | x | x |
| Weapon name | x | x | x | x | x |
| Skin name | x | x | x | x | x |
| Wear grade | x | x | x | x | x |
| StatTrak flag | x | x | x | x | x |
| Rarity treatment | x | x | x | x | x |
| Published drop chance | | p1 | | | x, the entry that was hit |
| Current value | | p1 | | | |
| Ticket range | | p1 | | | x |
| ~~Live free-unit count~~ | | | | | **Withdrawn, `D-60`** |
| Observed rate | | p1 | | | |
| Market price with as-of and link | | p1, top item only | | | |
| Instance value receipt | | p3 | x | x | x |
| Instance state | | | x | x | |
| Float and pattern | | | | | |

**V1, the preview at `3.1`.** Identification only, and no number that is part of a spend decision. **This variant is the answer to the bank's sharpest finding about the category:** competitor tiles carry name plus price plus image, so a person has to open the case to learn what is in it, `blocks.md` section 3. Node `0.7` answers half of that with an item count. This variant answers the other half by naming the items. **Must not** carry a chance or a value, because `3.1` does not show the entry cost of each case beside each item and a chance without its cost is not a decision.

**V2, the drop table row at `3.3` phase 1.** The fullest density and the only one that carries the decision numbers. **Must not** hide the chance behind a control. skin.club puts its odds behind a `[ CHECK ODDS RANGE ]` door, `blocks.md` section 4, and this is the one place in the product where the number a person came for is the number that must be on the surface.

**V2 again, the won item at `3.3` phase 3.** The same card at the moment `F1` mints the receipt. The chance, the value and the market price leave, because the decision is over; the receipt arrives and never leaves the item again. **Must not** carry a sell control, a repeat control or an upgrade control, see rule 5.

**V3, the inventory item at `5.1`.** The receipt with its moment, and the instance state. This is where `F2` proves itself: the same receipt is retrievable a week later. **Must not** replace the receipt with anything else, and must not restate the value without saying which moment it belongs to.

**V4, the withdrawal line at `5.3`.** The same card carrying the receipt into the exit record. The card holds the instance state; **the page holds the clock**, because `G1`'s per-state timer with its attribution to us, to Steam or to the person is a property of the withdrawal and not of the item.

**V5, the public item at `7.1`.** The card a stranger sees, with the receipt, the ticket range it landed in, and `0.14` beside it. **Must not** require an account, and **must not** carry a route into another case. `blocks.md` section 4 refuses MWM's "similar items" for this exact node: a shared result that recommends another case is an advertisement wearing a receipt.

---

## 4. Seven states, and every site inherits all seven. **It was eight until 21 August 2026**

| State | What the card shows | Route out |
|---|---|---|
| **Available** | The density's full field set | Its own destination |
| ~~**Zero free units**, node `3.4`~~ | **Dissolved 21 August 2026, `D-60`.** Every item is current and available, so the state has no subject. It read: the card stays visible and is marked, never filtered out of the list, `D1` makes the roll unable to select it, so the state is a fact about the shelf rather than a warning about a risk | **Gone.** Node `3.4` is dissolved and `case.md` section 6 keeps its record |
| **Value unavailable** | An explicit "not available" and what would produce it. **Never a zero, never a dash.** `0.11` rule 3: a dash that reads as zero and a zero that means we do not know are the same lie in two typefaces | The route that would produce the figure |
| **Value stale** | The value with its real as-of, marked as older than its refresh promise. Value is a per-read figure in `0.11` section 6, so its as-of is not optional | Refresh, and the market link on the top item where `A1` applies |
| **Observed rate below the sample floor** | N and the published chance. **No observed percentage.** `0.11` rule 4 | The explanation on `1.2` |
| **Won, receipt minted** | The item plus `F1`, its value and its moment. The chance and the market price are gone, because they were inputs to a decision that has been taken | `5.1`, `7.1`, and the proof through `0.14` |
| **Withdrawing or withdrawn** | The instance state, and the receipt still attached. **A withdrawn item does not lose its receipt**, which is the whole of `F2` | `5.3` |
| **Image unavailable** | Every load-bearing field is text and the card is still complete: weapon, skin, wear, rarity in words, value. `0.11` rule 8 is the reason the identity was never in the picture in the first place | None needed. The card is not broken, it is plainer |

**The zero-stock state is the one that earns the node.** No competitor in the bank does it: `blocks.md` section 3 records that skin.club and Hellcase drop unavailable items rather than mark them, so their shelf is silently short instead of legibly empty. `D1` is an architecture row, and this state is the only place a person ever sees that architecture working.

---

## 5. Five rules that are not styling

### 5.1 Three axes, never one chip

Rarity, wear and StatTrak vary independently. A single "covert" badge tells a person nothing about whether this unit is Factory New or Battle-Scarred, and those are different amounts of money. `F1` exists because they are.

### 5.2 A chance and a value never travel alone

`blocks.md` section 4 records the finding plainly: **neither Hellcase nor skin.club shows chance and current value on the same item.** Hellcase gives the chance in the table and the value only in a "last 7 days top drop" strip; skin.club gives the value in "last top skins" and hides the odds behind a control. `D2` requires both, on the card, at the same moment.

**A chance without a value is a lottery ticket with no prize printed on it. A value without a chance is a shop window.** Where one of the two is missing, the state is "value unavailable" and the card says so, rather than the pair silently becoming a single number.

### 5.3 The rarity slot has seven values and no colour decision

Seven tiers are established. The treatment is stage 06's, and it is constrained by a `[?]` that stage 06 has to close first: whether this ladder is the game's rather than any platform's. **And rarity is never carried by colour alone, in any density.** Seven hues with no text is a ladder only a player who already knows it can read, and it disappears entirely for anyone who cannot separate the hues. The rarity has a name, and the name is in the card or in its accessible name.

### 5.4 The card renders, it never computes

Same rule as `0.14` rule 2, for the same reason. The chance is published configuration, the value is fetched, the receipt is a settled fact, the ticket range comes with the entry. **No field on this card is derived in the browser.** `E1` makes divergence between what is animated and what is credited impossible by construction, and a card that recomputes a value reintroduces exactly that class of divergence one screen later.

### 5.5 No sell, no repeat, no upgrade, and no key bound to any of them

`blocks.md` section 12 calls Hellcase's keyboard row the single most telling block in the whole bank: **GET on ENTER, QUICK STOP on SPACE, SELL on S, REPEAT on R.** One key liquidates what you won and one key spends again.

None of the three is a capability in round 1. There is no sell row, no repeat row and no upgrade row in the MVP backlog, and upgrades are `LATER` on Related Job 4. **If one arrives it arrives with a parent and with a confirmation, not with a keystroke.** This rule is on the card rather than on `3.6` because the card is where such a control would naturally be added by someone who had not read this.

---

## 6. The three-part name, and it is a real layout problem at 360px

A skin's identity is three fields and sometimes four: **AK-47, Redline, Field-Tested, StatTrak.** Beside it sit a value, a chance and a ticket range. At 360px that is a paragraph pretending to be a label.

- **Weapon and skin are two fields, never one string.** A person scans for the weapon and wants the finish, and a single concatenated line makes both unscannable. This also survives the day a filter needs to sort on one of them.
- **Wear abbreviates and its accessible name does not.** FN, MW, FT, BS on the card, per `blocks.md` section 10 which found both conventions live; the full form in the accessible name, because "FT" read aloud is not a wear grade.
- **The value never truncates, never wraps and never shrinks below the name.** It is the one field that must be legible at every density. Truncated money is not a smaller truth, it is a different number.
- **The drop table is a table and reads as rows at 360px**, not as a two-across grid that halves every field. `blocks.md` section 4 takes Ableton's wide comparison table for exactly this reason: the drop table **is** a comparison table and should be built as one.
- **Chance precision is `[?]` and the card reserves room for the widest observed form.** Hellcase publishes to three decimals, 0.207 percent to 13.386 percent, `blocks.md` section 4. The baseline publishes to two and in one observed case to three, `baseline.md` section 4. Ours is not chosen, and a layout that fits 0.21 percent and breaks on 0.207 percent has been drawn against a guess.
- **The card never scrolls the page sideways.** Any density that overflows scrolls inside its own container, which at 360px is the drop table and nothing else.
- **The accessible name is the item, not the row.** Weapon, skin, wear, rarity in words, then the numbers. A screen reader that opens with a percentage has announced a statistic rather than an object.

---

## 7. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Is the seven-tier ladder the game's palette** | Six of the seven values look like the CS2 client's own, which would decide whether the ladder may be restyled at all. **Model memory, `[?]`**, and the check is one Valve or Steam page compared against the seven values in `blocks.md` section 10 | Stage 06, before it derives any rarity treatment |
| **Chance precision** | Two decimals or three. The card's widest field depends on it, and so does whether 0.025 percent is expressible at all | Production, with the weight table, before stage 04 treats the row as final |
| **A live current value beside the receipt in inventory** | Entity 4 lists the receipt and no second value, so `5.1` carries one number and not two. A person deciding whether to withdraw today plausibly wants today's figure, **and no row in `cjm-to-be.md` covers it.** Adding it here would be a capability with no parent | Founder, one backlog row, or it does not ship |
| **Float and pattern** | Field 15. `[ORPHAN]`, no parent in any of the three classes, carried rather than cut | Founder, if a job ever appears |
| **Where the preview density sits on `3.1`** | The map's `used by` line names `3.1`, and `3.1`'s own INCLUDES names case tiles and not item cards. Inside the tile, on expansion, or in a search result is a placement question rather than a field question | Node `3.1` at step 6 |
| **A holding deadline on an unwithdrawn item** | Hellcase converts an unwithdrawn drop to balance after thirty days, stated only in its public FAQ, `blocks.md` section 5. Whether we carry any such rule is `[?]`. **If we do, `G5` puts it on this card before it runs**, which makes it a sixteenth field | Founder, product decision |
| **The rarity treatment itself** | Colour, shape, weight. Seven values exist; what they look like is not IA | Stages 06 and 07 |

**And what belongs elsewhere.** The words on the card: stage 05. Where the card sits on each screen and how many render at once: nodes `3.1`, `3.3`, `5.1`, `5.3` and `7.1` at steps 5 and 6. The definition, refresh class and failure behaviour of every number it shows: node `0.11`. Indexation of the pages that render it: node `0.13`. The proof that sits beside it on `7.1`: node `0.14`.
