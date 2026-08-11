# Node 0.8. Live drop ticker

**Type:** component. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** A continuous strip of real wins, on two surfaces only, where every tile is a link to a checkable object. It is the product's evidence that drops actually happen, and it is the one component whose whole value dies the moment anything in it is invented.

**Jobs served.** Social Job 2, `jtbd.md` Section 3, be part of a platform that feels alive. Also Related Job 1 before login, arrive with enough confidence to try. **Parent class:** job, by row `A3`, which `cjm-to-be.md` marks **job only, no barrier** in its own priority cell and whose success signal is `[?]` because no isolated measurement of it exists.

**Used by:** `1.0` Home and `3.3` Case screen. **Nowhere else, and that is a decision rather than an oversight**, section 3.

**Not a page.** It renders inside two nodes and it has no destination of its own. Every tile lands on `7.1`.

---

## 0. What this node adds to its own row in the map, and why

`sitemap.md` describes `0.8` as a continuous tile strip with a source mode label, weapon and skin, a rarity tint, and a destination on every tile. **Three things are added here, and they are listed before the specification rather than discovered inside it**, which is the treatment `blocks.md` section 11 uses for the same class of change.

| Addition | Where it comes from | Why it is not a quiet edit |
|---|---|---|
| **A pause control** | `blocks.md` section 2, taken from Key-Drop's ticker. Parents: row `A3`, and design principle 2, motion serves emotion, since a strip that cannot be stopped serves neither | It is also the `prefers-reduced-motion` answer, so **one control carries two parents** rather than the product shipping two mechanisms for one state. Section 2 |
| **The winner, as the account chooses to appear** | Entity 14 in `sitemap.md` lists the winning account as a part, and row `A3` regulates it directly: no invented names, and any bot present labelled as one | The map's INCLUDES line names the item and not the person. **A feed of items with no people is a stock ticker**, and Social Job 2 is about people. The rejected alternative is kept in section 1 with its real merit |
| **The source field carries the case name in round 1** | The baseline's tile carries a source mode label such as "Case Battle", `baseline.md` section 3. **Round 1 ships one mode** | A label reading the same word on every tile is the dead item defect `CLAUDE.md` names. The carrier is inherited and filled with a live item: the case. When a second mode arrives the same field carries the mode |

---

## 1. The tile

| # | Field | Object | Parent | Class |
|---|---|---|---|---|
| 1 | **Source**, the case in round 1 | Live drop event | Social Job 2, and Related Job 1: "drops actually happen" is not a claim until a person can see which case produced one | job |
| 2 | **Weapon name** | Skin | Main Job, `jtbd.md` Section 1 | job |
| 3 | **Skin name** | Skin | Main Job | job |
| 4 | **Rarity treatment** | Skin | Row `E3`, and `blocks.md` section 10, the seven tier ladder walked live. The same slot as `0.6`, carrying the same `[?]` | job |
| 5 | **The winner, as they choose to appear** | Live drop event | Row `A3`, **no invented names**, carried from `aarrr.md:157` | job |
| 6 | **Bot label, where a bot is present** | Live drop event | Row `A3` verbatim: any bot present in it labelled as one | job |
| 7 | **The destination** | Shared result | `D-20`, which approved `7.1`, and `sitemap.md`: every tile lands on `7.1` | constraint, founder decision |

**Field 5 was the one real fork on this node, and the loser is kept.** The alternative was a feed with **no names at all**, and its merit is genuine: a feed that carries no names cannot carry invented ones, so the pain `A3` exists to prevent becomes structurally impossible rather than policed. It was not taken because Social Job 2 is "real activity from real players", and a nameless strip answers a narrower question than the job asks. **It is the fallback if the labelling requirement in `A3` cannot be enforced at the data layer**, and that is a real risk rather than a rhetorical one: `baseline.md` section 3 records that the bot name problem was not visible in the tiles sampled during the baseline walk, and marks that `[?]` because one sample proves nothing about a live feed's distribution.

**No timestamp on the tile, and the reason is not space.** `0.11` rule 2 requires an as-of on anything that moves, and the strip satisfies it at the strip level: it is a real-time figure in `0.11` section 6, so lag is a wrong answer and staleness is a degraded state rather than an old number. **The moment travels with the event to `7.1`**, where it is printed beside the round proof. A clock on a 92px tile would be an as-of on the tile rather than on the claim.

---

## 2. The pause control, which is also the reduced-motion answer

**One control, one state, one behaviour, two parents.** This is the whole point of the section: the product does not ship a pause button and a separate accessibility path that happen to do the same thing.

| Question | Answer |
|---|---|
| **Where** | On the strip, always visible, reachable by keyboard, with a text label rather than an icon alone |
| **Initial state** | **The system preference decides it.** Where `prefers-reduced-motion` is set, the strip starts paused, every time, and nothing on the site silently overrides that |
| **What paused means** | The strip stops moving. It stays **fully readable and fully linked**: every visible tile keeps its destination. New events do not shove the strip while it is paused |
| **What resuming means** | It resumes from the current feed. **It never replays a backlog**, because a burst of old wins arriving at once is a manufactured moment and `E2` is the rule against those |
| **Touching it pauses it** | A person cannot tap a target that is moving away from them, and the destination on every tile is the entire point of the component. Manual scroll pauses the motion and it resumes after |
| **Persistence** | For the session at minimum. Beyond the session is `[?]` and belongs to production |

**Pause is not a speed control, and the distinction is load bearing.** `blocks.md` section 4 refuses Hellcase's "fast mode" toggle, which shortens the reveal: same mechanism, opposite reason. **This control makes reading possible. It never makes anything faster, and it never touches the reveal.**

**And the strip is not a live region.** `0.11` section 9 states the rule with its reason: a live region that fires on every round is a denial of service to a screen reader. The strip is a list that updates silently, whose current contents are available on demand.

---

## 3. Two surfaces, and the placement is the specification

**`1.0` Home and `3.3` Case screen. Nowhere else.**

`sitemap.md` gives the reason in cluster 0 and repeats it in the reconciliation with the chosen UX pattern: a feed on every screen is wallpaper rather than context, `ux-patterns.md:262`. Pattern E is an ambient layer and it has **no screen of its own anywhere in the map**, which is the correct implementation of the pattern rather than an omission. A screen for the live feed would turn a layer into a place.

**The baseline puts it on every page walked**, 120px tall, directly under the header and above the hero, `baseline.md` section 3. That is the divergence, and it is named here rather than absorbed.

**On `3.3` the strip pauses itself for phases 2 and 3.** The reveal is the moment the whole product is built around, `E3`, and a second moving strip beside it competes for the same attention and can be read as a second outcome. Design principle 2: motion without an emotional or informational job gets cut, and during a reveal the strip has neither. It resumes when the person leaves the outcome. **Node `3.3` confirms the placement at step 6; this node states the behaviour.**

---

## 4. Five states

| State | What the strip shows | Route out |
|---|---|---|
| **Running** | Tiles moving continuously, each one a link. The normal case | `7.1`, from any tile |
| **Paused** | The same tiles, stopped, fully readable and fully linked. By the control, by the system preference, by a touch, or by phase 2 on `3.3` | `7.1`, and the control back to running |
| **Empty** | **The strip holds its space and says, in text, that no drops have landed yet**, with the route into the case grid on the same page. It does not collapse and it does not invent a tile | `3.1` from `1.0`, the drop table from `3.3` |
| **Degraded**, the feed is not updating | It **stops** and says the feed is not updating. The tiles already on screen stay readable and stay linked, because they are real settled events. `0.11` rule 6: a failed source is marked degraded, **never frozen at its last good value**, and a strip that keeps scrolling stale events is precisely a frozen value pretending to be live | `7.1` from the tiles that are there. The staleness threshold is `[?]` |
| **Too few to move** | Below the minimum tile count the strip is **a static row, not a loop**. See rule 5.2. The minimum is `[?]` | `7.1` from any tile |

**The empty state is taken from a competitor and the table around it is refused.** `blocks.md` section 2 records Clash.gg rendering its live feed as a sortable table with tabs, All, High Rollers and Lucky Wins, with columns Game, User, Amount, Multi and Payout, **and an explicit "NO BETS YET" empty state.** We take the empty state, section 5.1 refuses the rest.

---

## 5. Five rules that are not styling

### 5.1 It is a strip, never a table, and never sortable

`blocks.md` section 2: **a sortable ledger of other people's payouts is a leaderboard with a different name**, and `CLAUDE.md` puts leaderboards in `LATER` with a parent that is itself a hypothesis marked `[?]`. So no columns, no sort, no tabs, no "high rollers", no "lucky wins".

**The refusal is structural rather than aesthetic.** A tab called High Rollers is a claim about what is normal, made by selection. It is the same defect as Hellcase's "last 7 days top drop", which `blocks.md` section 4 calls survivorship by construction: the top drops of the week are not what happens.

### 5.2 The strip never repeats an event to fill space

A continuous loop built from four events looks like forty. **Below the minimum count the strip is a static row and says nothing about volume**, because a loop is a quantity claim made silently. This is the same proposition `A3` protects at the level of names, applied to counts.

### 5.3 No values, no multipliers, no crowd figures

**No price on a tile.** A moving strip of money figures is a payout board whether or not it has columns, and `0.11` rule 7 is explicit that a number is never a score. The value lives on `7.1`, on the `0.6` card, with its `F1` receipt and its moment, beside a round proof that makes it checkable.

**No multiplier.** Hellcase prints x38.8 on its top drop, `blocks.md` section 4. A multiplier is a ratio between two numbers neither of which is on the tile.

**No concurrency counter.** `blocks.md` section 2 leaves Key-Drop's and skin.club's "6,537 ONLINE": no parent, and a crowd figure is not a checkable number. It answers "are other people here", which is not the doubt `B1-1` records.

### 5.4 Every tile is a link to a checkable object, and that is the only route it offers

**One destination, `7.1`, and no second action anywhere on the tile.** No route into the case, no open control, no share control. A ticker tile that opens a case turns social proof into a spend prompt, and the tile is not a place where cost is visible.

**The destination changed and the change is the point.** The baseline links every tile to the winner's public profile at `/en/profile/<id>`, `baseline.md` section 3, and no job in this repository requires a profile object at all. `D-20` approved `7.1`, so the social proof surface now points at something a stranger can check rather than at a stranger's trophy shelf.

**And no proof inline.** `0.14` renders on `7.1`, which is where the tile lands. A truncated hash in a 92px tile is not evidence, it is a decoration shaped like evidence, and `0.14` section 0 is the rule against exactly that.

### 5.5 Rarity is a tint on the tile and a word in its accessible name

The tile is too small for a rarity label and too important to carry the tier in colour alone. **So the tint is the visible carrier and the accessible name carries the tier in words**, along with the weapon, the skin and the source. Colour alone never carries a state anywhere in this product, and here the resolution is the accessible name rather than an extra field.

The seven tier ladder and its unresolved `[?]` are in `0.6` section 2 and in `blocks.md` section 10. This node reads them and adds nothing.

---

## 6. The strip at 360px

The baseline runs 26 tiles of 92px at 1440px, `baseline.md` section 3. At 360px that is fewer than four tiles carrying four text fields each.

- **The strip scrolls inside its own container and never scrolls the page sideways.** It is the widest thing in the product and it is the first candidate for the defect the project bans outright.
- **The order of sacrifice is fixed here rather than left to a breakpoint.** Weapon and skin stay at every width, because the item is what makes the drop real. **Source and winner truncate first**, and both keep their full value in the accessible name.
- **The tile is the whole target and the target does not move while it is being aimed at.** Touch pauses the motion, section 2.
- **No horizontal scrollbar chrome is required to discover it.** A strip that only reveals itself on drag is a strip most people never read, and it already has a pause control that makes reading deliberate.
- **The accessible name is source, weapon, skin, rarity, winner.** In that order, because it is a sentence about an event: this case produced this item, at this tier, for this person.
- **Where a bot is labelled, the label is in the accessible name too.** `A3` is not satisfied by a visual marker alone.

---

## 7. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Whether the winner appears at all** | Section 1 converges on yes and keeps the no. **The decision reverses if `A3`'s bot labelling cannot be enforced at the data layer**, and `baseline.md` section 3 marks the current state of that question `[?]` | Founder, plus whoever owns the feed data |
| **The staleness threshold** | How long a silent feed stays running before it is degraded. `0.11` puts the strip in the real-time class, where any lag is a wrong answer, and gives no number | Production, with the feed |
| **The minimum tile count** | The N below which the strip stops moving rather than looping, rule 5.2 | Stage 04, from the drawn width |
| **Whether the tile carries the item image** | The map's field list has none and `baseline.md` section 3 does not record one either. Whether artwork is legible at 92px is a drawing question rather than a field question | Stage 04 |
| **Volume and rate** | How many events per minute a real feed produces at launch, which decides whether the empty state or the running state is the common one on day one | Founder, question of fact to the live platform |
| **Pause persistence beyond the session** | Section 2. A remembered preference is a setting, and this product has one settings surface, `6.1`, which is not the place for it | Production |
| **The rarity treatment** | Seven tiers exist, one is conditional on the case, and whether the ladder is the game's own palette is `[?]`, `0.6` section 2 | Stage 06 |

**And what belongs elsewhere.** The words in the empty and degraded states: stage 05. Where the strip sits on each of the two surfaces and how tall it is: nodes `1.0` and `3.3` at steps 5 and 6. The object every tile lands on: node `7.1`. The proof that object carries: node `0.14`. The item as it appears there: node `0.6`.
