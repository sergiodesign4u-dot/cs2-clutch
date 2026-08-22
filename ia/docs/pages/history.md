# Node 5.9. Roll history

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned.

**Written 22 August 2026, twenty days after the map closed and two days after this node was added to it.** `D-36` put `5.9`, `5.10` and `5.11` on the map on 20 August so the account menu could carry live rows instead of dead ones, and it named the cost in the same record: "stage 04 owes three more screens". **It did not write them.** Three registered destinations went two days with a file in the wireframe registry, a 404 behind it, and no specification anywhere. This node closes one of the three.

**Purpose.** Hold every roll this account has made, each one reachable as a checkable round, so that the product's central claim survives past the moment of the reveal.

**Jobs served.** **Related Job 3**, verify the outcome after I open, `jtbd.md` section 2. **Parent class: job**, by way of row `F3`, post-reveal verification link, `cjm-to-be.md` phase T7, marked "MVP by locked round 1 scope and founder decision, not by persona score", weight secondary proof.

**And the parent is stronger than the row that names it.** `F3` is one link on one outcome screen. **Until this node existed, the only trace of a roll a person could reach was the item it produced**, `D-36`. An item is not a round: it survives a sale, it can be withdrawn away, and it carries no seed material. A product whose whole trust claim is "every round can be checked afterwards" had no afterwards.

**URL:** `/roll-history`. **Indexed:** no, `noindex, follow`. **Canonical:** self. **Schema:** none. **Breadcrumb:** none. **Not inherited, because `0.13` has no row for this node**, section 8.

**Reached from:** the account menu, `0.1`, row 2; `5.1` beside the items; `3.6` the outcome, as the place the roll goes after the screen closes. **Leads to:** `1.2` the verifier, one route per row; `7.1` the public result, one route per row; `5.1`; `0.10` where a roll cannot be produced.

**States specified inside this file:** none numbered. `sitemap.md` gives this node no numbered states, and the four conditions below are internal states the wireframe draws.

**Baseline row, `5.9`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| **A public profile with four history tabs**, Inventory history, Case battle history, Gunfights history and Upgrades history, each a grid of item cards carrying the mode icon, the image, the weapon, the skin, the wear and a value in coins. Founder capture, 21 August 2026, `baseline.md` section 9.9. | **The idea that history is a first-class surface**, and the split by mode, which arrives when a second mode does. | **Everything about what a row is.** The baseline's history is an **inventory** history: it lists items, and an item is the outcome of a roll with the roll removed. Ours lists **rolls**, and the item is one column of a row. `baseline.md` section 9.9 records the same thing from the other side: that page is a trophy shelf, and `public-result.md` was written to replace the shelf with something checkable. **A history of items is the shelf again, one screen deeper.** And it is private: the baseline's is public and this one is the account's own. |

---

## 0. What a row is, and why that is the whole node

A row is **a roll**, not an item. Seven fields, and every one of them exists because something reads it separately.

| Field | What it holds | Why it is a field |
|---|---|---|
| **When** | The moment of the roll, to the minute | The only field a person navigates by. Everything else is looked up once they have found the row |
| **The case** | Which case was opened, with a route to it | A roll with no case is an event with no price and no chance attached |
| **What it cost** | The entry cost at the moment of the roll, in coins | **The cost is dated to the roll and never re-read from the case today.** A case whose price changed would otherwise rewrite what every past roll cost |
| **What it returned** | The item, as `0.6`, with the `F1` receipt figure it was worth at that moment | Two dated figures, never one, and never a third made out of them. Same rule as `5.1` |
| **The published chance** | The chance of that outcome, as published at the moment of the roll | `D3` and `D4` live on `3.3` and they are about the case. **This is the same claim about one event**, and it is what makes a row checkable rather than merely recorded |
| **The round proof** | Component `0.14`, variant V1 in the row and V3 on demand | The whole reason this page exists |
| **The state of the roll's item** | Held, sold back, or withdrawn | **Derived and stated, because the item is the part of a roll that moves.** A row whose item has gone is not an error and it is not a gap: it is a roll whose outcome left, and `7.2` already has that shape for a public result |

**No row is ever removed.** Selling the item back or withdrawing it changes one field and deletes nothing. **A history that loses a roll when its item leaves is a history of the inventory again**, which is the exact thing the baseline row above rejects.

---

## 1. The dependency this node inherits, and what it does if the answer is no

**`D-C` decides whether roll history is retained per roll, with seed and nonce, in a publishable form.** It was scheduled before stage 04 by `D-17`, sent to the live platform with `D-B` as one request by `D-20`, and **it has not come back.** `D-36` already wrote what happens if it comes back no: "the page renders the rolls without the seed material and says so."

**This node draws both readings rather than waiting**, because the shape does not change and only one block does.

| If `D-C` returns | What this page renders |
|---|---|
| **Yes, retained per roll** | Every row carries its hash, and its seed and nonce once revealed. The route into `1.2` arrives prefilled. This is the page as specified below |
| **No, not retained** | Every row still exists, with all six other fields. **The proof column says the seed material was not retained for this roll and why**, and the route into `1.2` is absent on that row rather than present and broken |

**The second reading is not a degraded state, it is a different product, and the page has to say which one it is.** `0.14` section 0 already fixes the vocabulary: the proof shows the round was fixed before the click and not altered after it. **A history that cannot produce the material for that sentence is a log**, and calling it a proof would be the fabricated-verifier defect `1.2` refuses, moved one screen over.

**The founder decision this exposes and does not take.** If `D-C` is no, `F3`'s success signal is unmeasurable for every roll older than the retention window, and Related Job 3 is served for a session rather than for an account. **That is a platform answer, not a design one**, and it stays with the request already sent.

---

## 2. Blocks, reasoned from 360px

Composition from `blocks.md` section 3, **T2 listing with an empty state**, rows marked TAKE, plus what `F3` requires of this node specifically.

| # | Block | What it holds | Parent | First screen at 360 |
|---|---|---|---|---|
| **1** | **H1 and the count** | Every roll on this account, and how many. **A count and never a total** | `F3` | Yes |
| **2** | **The scope line** | What a proof here shows and what it does not, from `0.14` section 0, in the short form the component carries everywhere | `0.14`, design principle 1 | Yes |
| **3** | **Filters** | By case, by date range, by whether the item is still held. **No filter by outcome value** | `F3`, and the refusal below | Partly |
| **4** | **The rows** | Section 0, one per roll | `F3`, Related Job 3 | Yes |
| **5** | **The empty state** | No rolls yet, with the route to a case | `blocks.md` T2, which makes the empty state the default composition rather than a fallback | Yes when it fires |
| **6** | **The pager** | Whatever the list does past one screen, and its end | `blocks.md` T2 | No |
| **7** | Footer, `0.2` | Unchanged | `0.2` | No |

**No block 8 and no summary of any kind, and the absence is the decision.** A history of rolls invites a total: how much was spent, how much came back, the ratio of the two. **Every one of those is a session score with a longer window**, and `CLAUDE.md`'s limits rule binds it: a limit never acquires a session score. The same sentence protects this page, because a lifetime profit figure is the strongest completion mechanic the product could ship and nothing in the backlog asks for one.

**What that costs, printed rather than absorbed.** A person who wants to know whether they are up or down cannot learn it here. **That is a real loss and it is the correct one:** `B7-1`'s answer is that each figure is honest at the moment it is shown, not that the product keeps a running score of a person's luck. The tested RTP on `3.3` is the honest form of the same question and it is about the case rather than about the person.

### What this page refuses, each with a reason

| Refused | Why |
|---|---|
| **Any total, profit, loss, ratio or streak** | Above. The limits rule, and `0.11` rule 7: a number is never a score |
| **A best drop, a rarest pull or a personal record** | Survivorship by construction, which `blocks.md` section 4 already refuses for a competitor's "top drop of the week". The top of a history is not what happened |
| **Sorting by value** | The one sort that turns a history into a leaderboard of yourself. Sorting by date is the only order a history has |
| **Sharing the page** | `7.1` shares **one round**, publicly and checkably. A shared history is the trophy shelf, and the shelf is what `7.1` was built to replace |
| **A rarity-tinted row** | The tint belongs to the item, `0.6`. A list tinted by outcome reads as a scoreboard whatever the columns say |

---

## 3. The proof in a row, and the one thing it may not become

**Component `0.14`, and this node uses two of its variants rather than inventing a third.** V1, the hash chip, sits in the row. V3, the full panel, opens on demand or on `1.2`.

- **The hash renders as text, monospace, copyable, never an image**, `0.14` section 5 and `0.11` rule 8. It exists to be pasted into a verifier that is not ours.
- **The route into `1.2` arrives prefilled** with what that node's form takes, so a person checking their own roll types nothing. `1.2` is public and needs no account, which is why the same route works for a stranger holding a `7.1` link.
- **No row prints a verdict.** `0.14` section 0 forbids a verified badge in every variant, and `1.2` is the one page in the product that never prints one either. **A history that ticks every row green has asserted the thing the scheme does not prove.**

**And the mismatch case is drawn rather than assumed away.** If our own recomputation of a row disagrees with what we published, the row says so and routes to `0.10` with the round attached, exactly as `1.4` does. **It is drawn on purpose and early**, for the same reason `7.1`'s was: the states nobody wants are the states that get discovered late.

---

## 4. States

| State | What the page does | Where it is specified |
|---|---|---|
| **Rolls exist** | The list, section 0 | Here |
| **Empty, no rolls yet** | The default composition of block 5, with one route into `3.1`. **Never an illustration with an invitation**, which would be the product selling a roll on the page that records them | `blocks.md` T2 |
| **Loading** | The list's own skeleton. Rows, not a spinner | `3.1`'s treatment, inherited |
| **Degraded, the proof source is unavailable** | The rows render and the proof column says the material could not be read **now**, distinguished from not retained **ever**, which is `D-C`. `0.11` rule 6: a failed source is marked degraded, never frozen at its last good value | `0.11` |
| **A row whose item has gone** | The row stays, the item field says sold back or withdrawn with its date | Section 0 |
| **A row whose proof does not match** | Section 3 | Here |
| **Guest** | Never rendered. This is an account's own record and there is no public form of it | `0.13`'s transactional zone |
| **Boundary in force `6.3`, or a market closing `0.12`** | Unchanged, in full. **Reading your own record is never closed by a boundary**, the same rule `6.1` states about the exit | `6.1`, `markets.md` section 9 |

---

## 5. Components

| Component | Where | Variant |
|---|---|---|
| Navigation `0.1` | Shell | Account exists. The account menu row is the current destination |
| Footer `0.2` | Below | Full |
| Skin card `0.6` | The item column of a row | Compact, two dated figures |
| Round proof `0.14` | Every row | **V1 in the row, V3 on demand.** No new variant |
| Live feed `0.8` | Shell | Full. **This node refuses nothing**, and the absence of a refusal is deliberate rather than unnoticed |
| Toasts `0.5` | `aria-live` | Never the only place a state is announced |

---

## 6. Responsive

**Mobile 360, the base.** One row per card, stacked: when, case, cost and return, then the proof chip. **The list is never a horizontal table at 360**, and it is not a table with a scroller either: `blocks.md`'s only permitted horizontal overflow is a table inside its own container, and a history a person has to scroll sideways to read is a history they will read one column of.

**Desktop from 900.** The same rows widen into columns. **The order does not change** and no column is dropped: a column that disappears at a width is a field the page decided a person did not need, and `F3`'s whole point is that they do.

**The filter set is a stack at 360 and a row above 600**, the same treatment `3.1`'s drawer settled.

---

## 7. SEO block A to E

**A. Meta.** `robots: noindex, follow`. Canonical self. Title and description exist for the tab and for history, not for a result page. **No OG or Twitter card:** this page is one account's record and an unfurl preview of it is a card that should never be generated. One language, no `hreflang`.

**B. Headings.** One H1, the page's job in words. H2s in block order: the scope line, the filters, the rolls, and the pager is not a heading.

**C. SEO text.** None, and the reason is `noindex`. What the node holds instead is the field list in section 0.

**D. Structured data.** None. Private transactional zone.

**E. Checklist.** One H1. `noindex` as a meta tag and never a `robots.txt` disallow, `0.13` section 4.5. **Every hash is crawlable text and never an image**, and here the reason is that a hash exists to be pasted. Every figure carries its unit in its accessible name. No horizontal scroll at 360. **Colour alone never carries the state of a row**, whether that is a mismatch, a degraded proof or an item that has gone.

---

## 8. The finding this node cannot fix, and the register that owes it

**`0.13` has no row for `5.9`, `5.10` or `5.11`.** Its URL map lists fourteen addresses and its indexation register lists sixteen rows, and **none of them is one of the three nodes `D-36` added on 20 August.** The register's closing sentence, "nine indexed surfaces and six that are not", is a count taken before those nodes existed.

**The URL above is derived from the register's own rules rather than invented:** no language prefix, and one destination carries one label in every carrier, which is the rule that produced `/my-items` and is stated in `0.13` section 2 as "not a styling choice". The account menu's label is Roll history, so the address is `/roll-history`.

**Recorded as a finding rather than fixed here**, `CLAUDE.md`: a node returns a contradiction against a register it consumes instead of editing it. **The shape of the three rows `0.13` needs:**

| Node | URL | Indexed | Canonical | Schema | Breadcrumb |
|---|---|---|---|---|---|
| `5.9` Roll history | `/roll-history` | No | Self | None | None |
| `5.10` Profile | `/profile` | No | Self | None | None |
| `5.11` Settings | `/settings` | No | Self | None | None |

**And the count sentence moves with them:** nine indexed and six that are not becomes nine and nine. The indexed half does not change, which is why this is a bookkeeping error rather than a scope one, and it is exactly the class the step 8 audit calls count reconciliation.

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **`D-C`, whether rolls are retained with seed and nonce** | Sent to the platform on 11 August with `D-B` as one request and not returned. **Section 1 draws both answers and the page shape survives either**, but which one ships is not a design choice | The live platform, then the founder |
| **How far back the history goes** | Whether it is every roll ever or a window. **A window is a retention decision with a privacy face**, so it belongs in the privacy document, which does not exist | Counsel, then production |
| **The three register rows** | Section 8 | Node `0.13` |
| **Whether a roll can be hidden by its owner** | `7.1` publishes one round to a stranger with a link. Whether a person can keep a specific roll out of that is not decided anywhere, and this page is where they would do it | Founder, with `7.1` |
| **What a row shows when the case itself is gone** | A case can be retired. The roll happened and the case page may not exist. **Named rather than assumed either way** | Node `3.1`, then here |
| **The page size and what the pager is** | `blocks.md` T2 gives the shape and no number | Production |

**And what belongs elsewhere.** The words: stage 05. How it looks: stages 06 and 07. The verifier itself: `1.2`. The proof component's anatomy: `0.14`. The public form of one round: `7.1`. The item's own record: `5.1`.
