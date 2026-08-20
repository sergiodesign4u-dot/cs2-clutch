# Node 3.1. Case catalogue

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 3, choose what to open and open it. **Alias:** `S-C1`. **Page type:** T2, listing with an empty state.

**URL:** `/cases`. **Category view:** `/cases/category/<category-slug>`, conditional on `D-D`. **Filtered or searched:** `/cases?...`, `noindex, follow`, canonical to `/cases`. All three inherited from `0.13`, section 3, not re-decided here.

**Breadcrumb:** Home > Cases.

**Purpose.** Hold every case the shelf actually backs, in a form where a person can narrow it to what they can afford and see what is really in stock before they commit to anything.

**Jobs served.** MVP Core Job 1, arrive with confidence to try, `jtbd.md` Related Job 1, at the moment it stops being about the platform and starts being about one object. The Main Job is served indirectly: this node hands the person to `3.3`, where the job actually completes. **Parent class:** job, plus barrier `B8-1` by way of rows `D1` and `A2`.

**States held in this file:** `3.2`, catalogue with nothing matching, section 7.2 under its own anchor.

**Transitions:** `3.2`, `3.3`. Entered from `1.0`, from the rail, from the mobile bar position 2, and from search.

---

## 0. The one thing this node is not, and it is a decision rather than a preference

**This page is off the main path.** `D-20` settled it: Home carries the featured case grid directly, which is what keeps the main job at three taps, and this node holds what Home cannot, the categories, the search, the filters and the daily free case as an addressable case. `sitemap.md`, "Depth to the main job, counted", prices the difference out loud: the browsing route is four taps and over budget, and it is not the main-job route.

**So the design target here is not speed to the trigger.** The Opener who arrived from a clip is already on `3.3` by tap 1. The person on this page has a different question, which is what is on the shelf and what fits inside a budget, and that question is answered by legibility rather than by shortening the route.

**The catalogue's size is `[?]` and no longer blocks anything.** `D-20`: whatever the backed count turns out to be, Home shows a curated subset and this node holds all of it. `D-D` still sets that count, and it decides one thing on this page, whether the category bar exists at all.

---

## 1. Content blocks, in mobile order, each with its parent

Composition taken from `blocks.md` section 3, T2 listing with an empty state. Every row names the bank row or the backlog row it comes from. Order reasoned at 360px.

| # | Block | What it holds | Parent | Source |
|---|---|---|---|---|
| 1 | **Breadcrumb and H1** | Home > Cases, then exactly one H1, then one line stating what this shelf is | `0.13`, breadcrumbs and the single H1 rule. The line under it: `D1` | Bank T2, Hellcase's H1 below the fold marked **LEAVE** |
| 2 | **Search and filter control** | A search field, a filter control carrying an **active count badge** | `D1`, and MVP Core Job 1 | Bank T2 **TAKE**, Hellcase's filter with an active count badge |
| 3 | **Category bar** | One horizontal row of categories with an overflow control. **Conditional on `D-D`**, and it does not exist if the backed catalogue is small | MVP Core Job 1 | Bank T2 **DIFFERENT**: Hellcase ships twenty five chips horizontally and Key-Drop eighteen stacked rows, and both are taxonomies nobody reads |
| 4 | **Active filter chips** | One removable chip per filter in force, plus clear all. Renders only when something is in force | `D1`, and node `3.2`, which needs a route out | Bank T2 **TAKE**, Refero New Balance. **No competitor in the bank provides this** |
| 5 | **Result count** | How many cases match, in text, above the grid | Node `3.2`, which requires a legible bottom to the list | Bank T2 **LEAVE**: skin.club's 248 case links on 28,160px with no count and no bottom |
| 6 | **The grid** | Case tiles `0.7`, one column at 360px. **Position 1 is the daily free case** when nothing filters it out, section 2 | `0.7`, on `D1`, `D2` and `A2`. The daily free case: row `I2`, section 2, **no parent in the three legal classes** | Bank T2 **DIFFERENT**: their tile makes a person open the case to learn what is in it |
| 7 | **End of the list** | Pagination as crawlable links, and a visible end | Node `3.2`. Crawlable `<a>`: `0.13` section 8 | Bank T2 **LEAVE**, the infinite shelf |
| 8 | **SEO text** | The H2 and H3 structured block that `0.13` places | `0.13`, the structural SEO layer | Bank T1 **TAKE**: four of four competitors carry it, which settles that the block exists |
| 9 | **Footer `0.2`** | Global, unchanged | Node `0.2` | Global shell |

**Two blocks that are on the baseline and are not here.** The baseline's catalogue carries a Back control beside the breadcrumb, `baseline.md` section 4, which duplicates the browser and the rail. And its Daily Cases block is a five tier ladder with a wager counter and four mode shortcuts, which is section 2's subject.

**The ticker `0.8` is not on this page.** It renders on `1.0` only since `D-31`, `sitemap.md` cluster 0, because a feed on every screen is wallpaper rather than context. That is inherited, not decided here.

---

## 2. The daily free case is an addressable case, and the consequence is not free

**The obligation is written down, and it predates this node.** `sitemap.md`, "Free entry gets an obligation rather than a surface": `I1` and `I2` are components rather than screens, so inventing a surface for them would be scope nobody asked for, and instead two nodes carry a debt. Home owes the starter credit `I1`. **This node owes the daily free case as an addressable case rather than as a banner.**

**What addressable means, concretely.** It is a case. It has a tile, it sits in the grid, it carries the same four fields as every other tile plus the daily marker `0.7` already holds, and it routes to `3.3` like any other case.

**And the consequence, which is the part worth writing down: it can be filtered out of view.** A banner survives every filter because it is not part of the list. A case does not. If a person filters to one category or to a price range, the daily free case leaves the grid with everything else that does not match. **That is the price of the decision rather than a defect in it**, and it is stated here so that stage 04 does not quietly promote it back into a banner to keep it always visible.

**Row `I2` carries its orphan status onto this page rather than losing it here.** `cjm-to-be.md`, backlog group 8: the daily free case is the only capability on the map with no parent in any of the three legal classes, placed in round 1 by founder decision of 11 August 2026, and it runs against the residual risk named in answer 1, that a daily free open teaches on a repeating schedule the impression the rest of the map spends its budget contradicting. `CLAUDE.md` requires an orphan to be carried with its status printed in its own row. This is that row.

**An inherited answer to that risk exists and is not adopted here.** `baseline.md` section 4 records that the baseline gates its daily reward behind a wager requirement of 0.00 / 5.00 and presents it as a five tier ladder. That is an answer to exactly this risk and it is the founder's to take or refuse. **This node ships the case ungated** and hands the question on, because adopting a wager requirement would be a product decision taken inside an IA node.

---

## 3. Zero stock stays visible, which is the whole of `D1` on this surface

**Row `D1`, and it is the one thing no competitor in the bank does.** An item at zero free units stays visible and marked rather than being filtered out, so the shelf is legibly empty instead of silently short. `flows.md` flow 1a states the reason in one line: hiding sold-out items would restore exactly the surprise `D1` exists to remove.

**On this page the figure is case level, and that distinction matters.** The Case entity in `sitemap.md` carries "free-unit availability across its table, `A2`". The tile's counter is that figure. **A single item at zero free units is not a case level state**, it is node `3.4` and it lives on `3.3`, where the item card is. A case whose top item is out is still a case a person can open.

**So there is no in-stock-only facet on this page.** Section 4 records it as a refusal with its reason: at case level the predicate has no clean definition, and at item level the answer is already on the item card.

**The count obeys `0.11` section 7 rather than a rule of its own.** Every consumer of a published figure inherits all seven states, and the live free-unit count is a real-time row: any lag is a wrong answer, so a failing source renders as degraded and never as a frozen last good value, and missing renders as missing and never as zero.

---

## 4. Filters and facets

| Facet | Values | Parent | Note |
|---|---|---|---|
| **Category** | The category list, `[?]` | MVP Core Job 1 | **Exists only if `D-D` returns a catalogue large enough to need it.** It is also the one facet with an indexed URL, `0.13` section 4.2 |
| **Price range** | Minimum and maximum entry cost, in coins, `C1` as `D-28` rewrote it. **The peg renders once on the shelf**, not on every tile, `0.7` section 5.1 | MVP Core Job 1, and `C2`, the spend ceiling | Bank T2 **TAKE**, Key-Drop's min and max. **Same control, different job:** for us a price filter is also a way to stay under a ceiling, so it is placed where the ceiling is visible |
| **Search** | Free text over case names | MVP Core Job 1 | `S-C1` in `sitemap.md`. Results are `noindex, follow`, canonical to `/cases` |

**Every facet in force appears as a removable chip**, block 4, and that is not a convenience. It is the route out of `3.2`, and `3.2` is the reason the chips are specified before the empty state that needs them.

**Refused, with the reason on the row.**

| Refused | Why |
|---|---|
| **In-stock only** | At case level the predicate has no clean definition, section 3. At item level the free-unit count is already printed on the card, and `D1` requires it visible rather than filterable away |
| **Sort by entry cost, chance or value** | No parent. The price range facet already answers the budget question that a price sort would answer, and the bank has no T2 row for sorting. The drop table on `3.3` is sortable, and there the parent is the Ableton comparison-table row |
| **Risk band as a filter or a tile field** | The Case entity carries "risk band as a legible label" and **nothing in this repository says how it is computed.** `0.11` rule 1: a figure ships with a route or it does not ship. `3.3` section 16 carries the same refusal and the open item |

---

## 5. Components

| Component | Variant used here |
|---|---|
| `0.1` Navigation | Rail with Cases active, header with the two figures, mobile bar with position 2 active. Exactly one active item across the bar and the drawer together |
| `0.2` Footer | Full, unchanged |
| `0.7` Canonical case tile | The tile as `D-24` rewrote it: case artwork as the largest element, case name, entry cost, risk band, plus a stock marker and a daily marker where each applies, plus the favourite control |
| `0.11` Published numbers register | Read, not rendered. The free-unit count is a real-time row and the entry cost is static until the configuration changes |
| `0.5` Toasts | A failed filter fetch is announced in the block, not only in a toast |
| `0.3` System pages | A category slug that does not exist is a real 404, never an empty catalogue pretending to be one |

**No node `0.6` on this page.** The skin item card belongs to the drop table on `3.3`. A catalogue that renders item cards is a catalogue showing the contents of every case at once, which is what the tile's risk band exists to summarise since `D-24` replaced the item count with it.

---

## 6. Main CTA, and there is exactly one

**Open a case tile, which lands on `3.3`.** Every other control on this page narrows the list so that the tile a person taps is the right one.

**The daily free case is not a second CTA.** It is the tile at position 1, and it leads to the same place by the same control, which is what section 2 means by addressable.

---

## 7. States

### 7.1 The states of `3.1` itself

| State | What renders | Route out |
|---|---|---|
| **Guest** | The whole page. Every figure, every tile, every count. **No wall of any kind** | A tile, into `3.3` |
| **Account** | Identical, plus the daily free case showing its own availability rather than an invitation to sign in | A tile, into `3.3` |
| **Loading** | The grid skeleton with **the live free-unit counts as the thing being waited on**, `flows.md` flow 1a, rather than a generic spinner. Specified here rather than as a node, per the rule in `sitemap.md` | Resolves into the grid |
| **Filtered** | The grid, the result count and the active filter chips. Chips are the only route back to everything | `3.2` if the result is empty |
| **Degraded** | Tiles render with the free-unit count marked as degraded, `0.11` section 7, and the rest of the tile intact. **A tile with an unknown count is still a tile a person can open** | Unchanged |
| **Nothing matches** | Node `3.2` below | Back through a chip |

**The age gate does not fire on this page.** `B3` requires it before any case interaction, and `flows.md` flow 1a passes through the whole catalogue without one. Choosing which case to look at is not a case interaction. The gate fires on `3.3`, and that node owns the condition.

### 7.2 Node `3.2`. Catalogue, nothing matches {#3.2}

**Type:** state. **Scope:** MVP. **Parent node:** `3.1`. **No URL of its own**, `0.13` section 2: a state gets an address only if a person can arrive at it from outside, and this one cannot. It renders at the URL the person is already on.

**What it is not.** It is not the shelf being empty. `D1` guarantees zero-stock cases stay on the shelf, so an empty result is always the result of a filter, a search or a category, never of stock.

| Block | What it holds | Parent |
|---|---|---|
| **The statement** | That nothing matches these filters, naming which ones, in text | Node `3.2` |
| **The active filter chips, still there** | Every chip in force, still removable, plus clear all. **This is the route out and it is the block that makes this state a designed thing rather than an accident** | Bank T2 **TAKE**, Refero New Balance and Rork |
| **What would widen it** | The nearest facet to relax, named. If a price ceiling excludes everything, say the lowest entry cost on the shelf | MVP Core Job 1 |
| **The shelf's own size** | How many cases exist in total, as the way back to all of them | Node `3.2` |

**No dead end.** `flows.md` flow 1a: a person who finds nothing can always widen what they are looking at, and the catalogue never traps. Every route out of this state is a chip or a link, never a browser back.

**No recommendations block.** A case suggested because a filter failed is an advertisement in the place where the person just told us what they wanted. The bank refuses "similar items" on `7.1` for the same reason, and the reason travels.

---

## 8. Emotional support

**None of the mechanisms in the emotional and social table live on this node**, and that is the correct answer rather than an omission. `sitemap.md`, "Emotional and social jobs: what carries them", puts the live drop feed on `S-A1` and `S-C2` only, and both emotional job mechanisms on `S-C2`. Adding a mechanism here to fill the row would be a round 1 commitment nobody made.

**What this page owes emotionally is a negative**, and it is design principle 3 rather than an emotional job: cost never hides inside excitement. A shelf is where a person decides how much to spend, and the price range facet plus the entry cost on every tile is the whole of the answer.

---

## 9. Responsive

**Mobile, 360px base, one column.**

- Blocks stack in the order of section 1.
- The category bar scrolls horizontally **with its overflow visible rather than hidden**, and the page itself never scrolls sideways.
- Search and filter share one row. The filter's active count badge stays visible at every width, because it is the only signal that the grid is narrowed.
- Active filter chips wrap onto as many rows as they need. **A chip never truncates its removal control**, since the control is the route out of `3.2`.
- Tiles are **two columns at 360px, which `D-24` made possible** by taking the tile down to four fields. All four stay on the tile and none is dropped for width, because the risk band and the entry cost are the two the page exists to show.

**Desktop, from 900px.** The rail sits beside the content, `0.1`. The grid becomes multi column. **Filters may move into a sidebar**, Refero New Balance, and the active chips stay above the grid where the result count is, because chips beside the grid and a count above it splits one answer into two places.

---

## 10. SEO block

Inherited from `0.13`. Nothing below re-decides a row of that register.

### A. Meta

| Field | Value |
|---|---|
| **Title**, 52 characters | `All CS2 cases, with published chances and real stock` |
| **Description**, 150 characters | `Every case here is backed by stock we hold. Each tile shows the entry cost and how many units are free, and every item shows its chance and its value.` |
| **Canonical** | Self, `/cases`. Category views self-canonical. **Filtered, searched and paginated views canonical to `/cases`** |
| **hreflang** | None, anywhere. One language, `0.13` section 1 |
| **Robots** | `index, follow`. `/cases?...` is `noindex, follow` |
| **OG and Twitter** | Title and description as above. Image: the shelf rather than one case, because the object of this page is the list |

**The brand suffix is `[?]`.** `CS2 Clutch` is a working placeholder name, `CLAUDE.md`. Both strings above are sized to take a suffix of up to seven characters when the name settles.

### B. Headings, exactly one H1 and the H2 list in block order

- **H1:** All CS2 cases, with published chances and real stock
- **H2:** Find a case _(the search, filter and category block)_
- **H2:** All cases _(the grid)_
- **H2:** What a backed case means _(SEO text)_
- **H3:** Why an item can show zero free units
- **H3:** The daily free case

**The H2 list is the block order**, `0.13` section 5, which makes the stage 04 check mechanical.

### C. SEO text, finished copy

> **What a backed case means.** Every item in every case here points at a unit we already hold. The roll can only land on an item that has at least one free unit, and the moment it lands, that unit is locked to the account in the same transaction that records the roll. This is why each tile shows how many units are free right now, and why that number can fall while you are reading it.
>
> **Why an item can show zero free units.** When the last unit of an item is won, the item stays in the case and shows zero. It is not hidden. A shelf that quietly removes what it has run out of looks full at every moment and tells you nothing, and finding out afterwards is the thing this shelf is built to prevent.
>
> **The daily free case.** One case a day opens without a balance. It sits in the grid with everything else rather than in a banner, so it is filtered and searched like any other case, and it shows the same chances and the same values as the ones that cost money.

**This block stays the property of this node.** Stage 05 aligns it to voice and syncs the final version back here. Interface strings, the filter labels, the empty state sentence and the chip text, do not move into this block: after stage 05 they live in `voice/docs/microcopy.md`, and this node holds the requirement that the information exists in that place.

### D. Structured data

`CollectionPage` plus `ItemList`, from `0.13` section 7. The `ItemList` members are the cases visibly in the grid, in the order they are visibly in.

**No `Offer` on this page.** `0.13` refusal 2 places the offer on the case screen, where the entry cost is the price of the thing bought. A list of links to cases is not a list of offers.

### E. Optimisation checklist

1. Exactly one H1, and it is the page's job in words.
2. H2s exist in block order, matching block B.
3. Breadcrumb drawn, Home > Cases, with `BreadcrumbList` markup because it is visible, `0.13` section 6.
4. **Every tile is a crawlable `<a href>`**, and so is every pagination control. `0.13` section 8: a destination reachable only by script does not exist for a crawler and often not for a keyboard either.
5. **No figure is an image.** The entry cost, the risk band, the stock marker and the favourite count are text, `0.11` rule 8. The risk band is words and never an icon alone, `0.7` rule 5.5.
6. LCP is the first row of tiles. The images below the fold are lazy, the first row is not.
7. Canonical present, no hreflang anywhere.
8. The category slug is real or the response is a real 404, `0.3`.

---

## 11. What was refused, with the reason on the row

| Refused | Where it is on a live page | Why |
|---|---|---|
| **Twenty five category chips** | Hellcase, opened 12 August 2026 | A taxonomy nobody reads. Key-Drop's eighteen stacked rows is the same problem vertically |
| **The shelf as the home page** | Key-Drop, eighteen category rows, 15,119px tall | `D-20`: Home carries a featured grid, this node holds the shelf. Eighteen rows on the first surface is a catalogue pretending to be a decision |
| **An infinite shelf** | skin.club, 248 case links and 612 images on one page, 28,160px | `3.2` requires a legible bottom to the list and a result count, and this has neither |
| **H1 below the shelf** | Hellcase, H1 after 1,400px of product | `0.13`, the single H1 rule. The heading that names the page is the first thing after the shell |
| **The daily reward as a five tier ladder with a wager counter** | The baseline, `baseline.md` section 4 | Not refused on merit. It is an inherited answer to `I2`'s recorded risk and it belongs in front of the founder, section 2 |
| **A risk band on the tile** | The baseline prints High-risk, Medium-risk or Low-risk on every tile | No computation exists for it anywhere in this repository, so it has no route, `0.11` rule 1. `0.7` does not carry the field |
| **Sort controls** | Common in the category | No parent, section 4 |
| **A vanity stats bar** | skin.club and Hellcase carry one, and Key-Drop and skin.club carry a concurrency counter | `0.11` rule 7, never a score, and rule 1, no route. Refused on `1.0` already and it does not return by a side door |

---

## 12. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **`D-D`, how large the backed catalogue is** | It decides whether the category bar and the category URLs exist at all. `D-17` deferred it to this stage and it is still open | Founder, with the treasury answer, before stage 04 |
| **The category list itself** | If categories ship, which ones. The baseline runs thirteen and none of them is derived from a job. `0.13` section 8 is waiting on this same list for the interlinking block | Founder plus production, after `D-D` |
| **Whether the daily free case is gated** | The baseline gates its daily reward behind a wager requirement, which is a live answer to `I2`'s recorded risk. Adopting it is a product decision, not an IA one | Founder |
| **Page size and pagination length** | How many tiles per page. It rides on `D-D` and on the image weight, which is a stage 04 and production measurement | Stage 04, then production |
| **Whether paginated pages should be self-canonical** | `0.13` puts every `/cases?...` view canonical to `/cases`, and pagination inherits that. The consequence is that cases beyond page 1 are discovered through `follow` rather than through an indexed listing, which is acceptable because every case page is indexed on its own. **If that trade is wrong it is `0.13`'s row to change, not this node's** | Node `0.13`, if the founder disagrees |
| **The rarity ladder's origin** | `blocks.md` section 10 walked seven tiers live and left one claim `[?]`: whether six of the seven values are the CS2 client's own palette, which would mean we may not restyle them freely. It does not touch this page, since no tile carries rarity, and it is carried because `0.6` on `3.3` does | Whoever specifies `0.6` |

**And what belongs elsewhere.** How a tile looks: `0.7`, then stages 06 and 07. The words on the controls: stage 05. Where the shelf sits relative to Home: `D-20`, already decided. What happens after the tap: node `3.3`.
