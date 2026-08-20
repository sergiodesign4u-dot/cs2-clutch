# Stage 04, step 1. Screen inventory, the state matrix, and the etalon

**What this file is.** The list of every screen the grey prototype has to hold, every state each one owes, and the one screen that sets the standard. **It invents nothing.** Every row comes from `ia/docs/sitemap.md`, the node spec of that screen in `ia/docs/pages/`, and `ia/docs/flows.md`. A screen or a state that appears here for the first time would be an IA defect, and there is none: this file is a projection, not a decision.

**Where it gets a visible place.** Step 3 renders this matrix live inside `wireframes/overview.html`, section "Coverage". Until that step exists, this file is the source and the page is owed.

**Derived on 18 August 2026**, from the map as `D-24`, `D-25` and `D-26` left it: 65 nodes, 49 MVP, `2.3` dissolved, `2.7` with `2.8` and `2.9` parked as `LATER`.

---

## 1. What becomes a screen, and what does not

The map holds 26 file-level nodes and **not all of them are screens.** The rule is the map's own and it is applied here rather than re-derived.

| Kind | Nodes | Drawn at stage 04? |
|---|---|---|
| **Register** | `0.11` published numbers, `0.12` markets, `0.13` SEO | **No.** `sitemap.md`: a register is read by several nodes and drawn by none. **The nodes that read them are drawn** |
| **Global element** | `0.1` navigation, `0.2` footer | **Not as their own screen.** They render inside every screen, from `wireframes/_nav.js`, once |
| **Component** | `0.5` toasts, `0.6` skin card, `0.7` case tile, `0.8` ticker, `0.14` round proof | **Not as their own screen.** They render inside the screens that use them, and the etalon is where each one is built first |
| **Page, dialog, state** | everything else | **Yes, one page per node**, because the prototype navigates between states |
| **`LATER`** | `2.7`, `2.8`, `2.9` identity, and cluster 8 | **No.** Parked by `D-26`, kept on the map |

**So the count that matters is not 26.** It is **35 numbered MVP nodes in clusters 1 to 7, plus 4 surfaces from cluster 0**, and that is the floor before the internal states each spec declares on top.

---

## 2. The matrix, screen by state

**One page per row.** Job column is the job or barrier the node names as its parent, shortened. Flow column is where `flows.md` puts it. **A row marked `unnumbered` is a state its own spec declares and the map does not number**, so it gets a page here and no code: inventing a map code at stage 04 would be the defect this file exists to avoid.

### Cluster 0, the shell surfaces that are screens

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `0.3` | System pages: **404 external arrival**, **404 internal referrer**, **404 on a retired case slug**, **500**, **503 planned**, **503 unplanned** | Six states, one template. `B5`, and the withdrawal clock for the 503 | Off-flow, reachable from any wrong address |
| `0.4` | Cookie consent: **pending**, **accepted**, **rejected**, **partial**, **changed later**, **consent expired** | Compliance constraint. Fires on arrival, so it lands on `1.0` | Layer over the first screen |
| `0.9` | Legal and policy: **current**, **changed since you last agreed**, **guest never agreed**, **superseded version**, **not yet published** | Compliance constraint, four documents on one template | Footer routes |
| `0.10` | Support and contact: **entry**, **appeal submitted**, **waiting with attribution**, **appeal answered**, **upheld**, **refused**, **deadline missed**, **no dispute to appeal**, **ticket id not found** | `B8-3`, row `G4` | Footer routes, and the exit from `5.6` |

### Cluster 1, decide whether this place is real

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| **`1.0`** | **Home, guest** | `B1-1`, Main Job, Related Job 1 | **Entry. Tap 1 of the main job** |
| `1.1` | Home, account exists | Same page, state-dependent strip | After sign in |
| `1.2` | Provably fair, public, with the verifier | Design principle 1 as limited by `D-14`, Core Job 1 | From `1.0` B7 and from `3.6` |
| `1.3` | Verifier, malformed round | Names which part is missing | Inside `1.2` |
| `1.4` | Verifier, our own proof failed | A report route and an incident with a deadline | Inside `1.2` |

### Cluster 2, get through the door

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `2.1` | **Geo gate** | `D-23`, the allowlist closed by default | Fires at first case interaction |
| `2.2` | Geo blocked | Legal ground cited | **Dead end by design** |
| **`2.4`** | **Sign in, consent not given** | `B6`, `B3-2`, and the consent gate `D-26` added | **Tap 2 of the main job** |
| `2.4`, unnumbered | Sign in, **one of two given** | `D-26`. The control names which declaration is missing | Inside `2.4` |
| `2.4`, unnumbered | Sign in, **consent given** | `D-26`. The provider control becomes available | Inside `2.4` |
| `2.5` | Steam refused | `B5`, a readable failure rather than a code | Back into `2.4` |
| `2.6` | Steam unavailable | Reading the product stays open | Into `3.3` |

### Cluster 3, choose what to open and open it

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `3.1` | Case catalogue | Main Job, `D-20` puts it off the main path | "All cases" from `1.0` |
| `3.2` | Catalogue, nothing matches | `D1`, the shelf is legibly empty rather than silently short | Inside `3.1` |
| **`3.3`** | **Case screen, phase 1, choosing** | Main Job, `D2`, `D3`, `D4` | **The screen the main job is decided on** |
| `3.4` | Item at zero free units | `D1`, `B8-1` | Inside `3.3` phase 1 |
| **`3.5`** | **Case screen, phase 2, the open** | `E1`, `E4`, design principle 2 | **Tap 3 of the main job** |
| **`3.6`** | **Case screen, phase 3, the outcome** | `F1`, `F2`, `F4`, `E3` | The end of the main job |
| `3.7` | Interrupted reveal | `E1`. The roll settled before the animation | Out of `3.5` |

### Cluster 4, put money in

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `4.1` | Deposit | `C1`, `C2`, `C3`, `C4` | From the money control, and from `3.3` with no balance |
| `4.2` | Ceiling reached this period | `C2`, the spend ceiling | Inside `4.1` |
| `4.3` | Ceiling raise pending 24 hours | `C2`. The old ceiling holds | Inside `4.1` |
| `4.4` | Crediting, with a named timer | `C3` | After the deposit |
| `4.5` | Payment declined | `B4-3`. Ceiling and threshold preserved | Inside `4.1` |

### Cluster 5, take out what I earned

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `5.1` | Account and inventory | Related Job 5, `F2`, `G5` | From the shell |
| `5.2` | Inventory empty | Where every new account starts | Inside `5.1` |
| `5.3` | Withdrawal, with the public clock | `B8-2`, `G1`, `G2`, `G6` | From `5.1` |
| `5.4` | Not eligible, limit stated before entry | `G5` | Inside `5.3` |
| `5.5` | Steam degraded | `G2`, the health probe | Inside `5.3` |
| `5.6` | Account restricted, notice and appeal | `B8-3`, `G4` | Into `0.10` |
| `5.7` | Restriction upheld | The ground stays on the record | **Dead end by design** |
| `5.8` | Trade offer expired | Resend from the same record | Inside `5.3` |

### Clusters 6 and 7

| Node | Screen or state | Job or parent | In the flow |
|---|---|---|---|
| `6.1` | Responsible play | **No job. The compliance constraint, quoted** | From the rail and the footer |
| `6.2` | Self exclusion confirmation | An explicit confirmation with the period named | Inside `6.1` |
| `6.3` | Boundary in force | The boundary holds without being a thing to engage with | Across `4.1`, `3.3`, `5.3` |
| `7.1` | Public result | `F4`, and the shared object `D-20` created | From `0.8` and from a share |
| `7.2` | Result gone or private | Routed into `1.2` | Inside `7.1` |

### The count

| Group | Pages |
|---|---|
| Cluster 0 surfaces, with their internal states | **26** |
| Clusters 1 to 7, numbered MVP nodes | **35** |
| Sign-in consent states the spec adds and the map does not number | **2** |
| **Floor for the prototype** | **63 pages** |

**Sixty three is a floor and not an estimate.** Internal states that a spec declares without numbering, catalogue's guest, account, loading, filtered and degraded among them, are drawn where the node says they change the screen. **The number goes up at step 6, never down**, and a state that is not in this matrix does not get drawn.

---

## 3. The etalon: `1.0` Home

**Chosen: `1.0` Home, guest.** The pack asks for the workhorse with maximum reuse rather than the first screen of the flow. Here they are the same screen, and that is a coincidence worth naming rather than leaning on.

**Why it, on four grounds.**

1. **It carries the most distinct component kinds of any screen in the product:** the shell `0.1`, the footer `0.2`, the ticker `0.8`, a grid of `0.7` tiles, one `0.6` skin card in the worked example, and the figure-block anatomy from `0.11` applied to six different figures. **Building it builds most of the kit.**
2. **It is the densest surface.** Ten blocks, two account states, and the tightest 360px budget in the product, where the ticker, the banner and the H1 all compete for the first screen. **A grey contract that survives Home survives everything.**
3. **Its unknowns render rather than block.** The risk band and the daily countdown both have a specified "not available" rendering. **Nothing on Home depends on an answer that could delete a whole block.**
4. **It is where the last three decisions landed.** `D-24` rebuilt the tile it renders, `D-25` put a banner above its H1 and a ladder under its grid. **Seeing those in a live screen is the fastest correction loop available.**

**Rejected, and why each one loses.**

| Candidate | Why it was considered | Why not |
|---|---|---|
| **`3.3` case screen** | The main job is decided on it, it holds four state nodes, and it renders `0.14` which Home does not | **`D-C` is unanswered.** If the internal check returns negative, row `D3`, the observed rate counter, leaves this screen entirely. **An etalon whose block set is conditional sets a standard that may be withdrawn.** It becomes screen 2 the moment `D-C` lands |
| **`5.1` account and inventory** | Renders `0.6` many times, which is the component with the most fields | One component repeated is not maximum reuse. And it is behind sign in, so the prototype cannot start there |
| **`3.1` catalogue** | A grid of `0.7`, plus filters and an empty result | A thinner version of Home's grid with none of Home's argument blocks |

---

## 4. The first flow to assemble

**The main job, end to end, five screens:**

`1.0` Home → `3.3` Case screen, phase 1 → `2.4` Sign in with the consent gate → `3.5` Phase 2, the open → `3.6` Phase 3, the outcome

**Why this one and not a shorter one.** `CLAUDE.md` fixes the main flow and this is it, with sign in in the place `D-26` put it. **It crosses three clusters, it ends on the product's emotional peak, and it is the only flow in the product where every screen is load-bearing.** It also forces the two hardest problems early: the reveal, which has no baseline reference at all, and the consent gate, which is two days old.

**The branch this flow does not take, and it is drawn at step 7 rather than step 6:** `2.1` the geo gate fires at first case interaction, so it sits between Home and the case screen for a person whose market has no row. It is a dialog over `3.3`, not a sixth screen in the line.

---

## 5. The eight holes this matrix carries, and where each one bites

**Named at the stage 04 input gate on 18 August 2026 and accepted by the founder.** None is filled with a median. Each renders as the "not available" state its own node already specifies.

| Hole | Where it bites | How it renders until answered |
|---|---|---|
| **`D-C`, the internal check on live data** | `3.3`, `0.11`. **Structural: it decides whether row `D3` exists** | **Not rendered as a hole. It is why `3.3` is not the etalon**, and it is due before step 6 draws it |
| **Withdrawal: delivery or purchase** | `5.3`, and the outcome screen `3.6` | **Drawn against option B**, what you win is what you receive, which is what the node was written against. Option A adds a block to `3.6` and a table to `5.3` |
| **Risk band thresholds** | `0.7` on `1.0`, `3.1`, `3.3` | The band prints **"not available"** in its slot. `0.7` state 6 |
| **Daily reset and tier wager** | `1.0` block B5 | The ladder renders, **the countdown does not**. `1.0` section 2.5 rule 4 |
| **Deposit crediting window `C3`** | `4.1`, and state `4.4` | The named timer renders **without a value**, which is the state `0.11` rule 3 requires |
| **Withdrawal ceilings, p90 window, appeal deadline** | `5.3`, `5.4` to `5.8`, `0.10` | Three figures print as missing, never as zero |
| **Starter credit `I1` and threshold `C4`** | `1.0` B9, `2.4`, `4.1`, `5.3` | The offer renders with its bound stated and the number missing |
| **Featured grid size and selection rule, `D-D`** | `1.0` B4, `3.1` | **The etalon draws four tiles** and says so here, so the number is a decision on this page rather than an accident in the markup |

---

## 6. What step 1 does not decide

| Open item | Owner |
|---|---|
| The grey conventions themselves: semantics, naming, the state contract, the viewport rule | **Step 2**, `conventions.md` |
| Which of the three candidates leads the hero on `1.0` | Founder, then stages 06 and 07. **Structure is unaffected: the hero is one unit either way** |
| How many screens the fanout at step 8 takes per subagent | Step 8, with the conflict-free contract |
| Whether `0.4` cookie consent is drawn as six pages or as two with four variants | **Step 5**, when the etalon's own states are built and the layer contract is set |

---

## 7. Three open items handed to this stage, answered at the etalon

**All three were handed here by name.** They are answered on `1.0` because that is the screen that renders them first, and the answer is measured rather than preferred.

| Open item | Owner named in the node | The answer, and what measured it |
|---|---|---|
| **Whether the ticker tile carries the item image**, `0.8` section 6 | Stage 04, "whether artwork is legible at 92px is a drawing question rather than a field question" | **It carries one.** The strip is read at a glance rather than read, `baseline.md` section 3 runs artwork at exactly 92 by 120 and it is legible there, and four text fields alone at 92px read as a list rather than as a feed |
| **The minimum tile count**, `0.8` rule 5.2 and section 6 | Stage 04, "from the drawn width" | **Eight.** One row at 360px holds 3.9 tiles of 92px, so a loop needs two screenfuls before it can run without a visible gap. Below eight the strip is a static row and says so. The etalon draws twelve, which is the first count that still reads as a feed at 1440px |
| **The ambient sound control at 360px**, `0.1` section 6, cell left `[?]` | Stage 04 drew it; the parent is still the founder's, `0.1` section 9 | **It leaves the header below 900px.** `0.1` section 9 fixes the mobile header at one row, and menu plus two figures plus deposit plus avatar plus sound does not fit 360px. The baseline makes the same cut at 390px. Audio during the reveal belongs to `3.5`, on the screen where the sound plays. **This does not give the control a parent**, and if the founder rules it out it leaves the header at every width: one deletion, not a redraw |

**And one thing this stage measured against its own node rather than answering.** `home.md` section 1.2 sets the H1 target at 360px: it has to begin above the fold, which the same section measures at 584px once the fixed bottom bar takes its 56px. **The H1 begins at 420px.** The banner and the ticker together spend 294px of the 420, which is the budget `D-25` said it would spend.

---

## 8. Two founder decisions taken during step 5, and what still carries the old rule

**`D-27`, the row of four ways to play.** Drawn on `1.0` and `1.1` as block B4, one live card and three reading "Not launched yet". Node `1.0` took it in the same step: the block table, section 2.3a, the order argument, the fold note, the adaptive table and the SEO heading table, with B4 to B10 renumbered to B5 to B11 on both the markdown and the page.

**`D-28`, the coin.** Row `C1` is reversed and the cost is printed in the decision record. What the wireframes now render:

| Where | What it says |
|---|---|
| The header's two figures, the tile entry cost, the daily wager figure, the item value, the entry cost and the expected value | **coins** |
| Beside the entry cost in B7 | **The peg, as its missing state.** "Peg not available: what one coin is worth in real money is not published yet". `D-28` ships on the condition that the peg is printed wherever money is spent, and a wireframe that hid the condition would hide the whole cost |
| The Steam market price in B7 | **Still EUR, and marked as not comparable.** It is Steam's price, not ours. `D-28` names this consequence in its own table: `A1`'s comparison is no longer one unit against itself |
| The withdrawal times, the tested RTP, the expected return | **Unchanged.** Time is time and a ratio is a ratio, `A4`, `G3`, `D4` |

**Propagation, closed on 19 August 2026 in the same session.** `CLAUDE.md`, row `C1` and every node that states the unit were rewritten with their pages: `0.11`, `0.7`, `0.1`, `1.0`, `3.1`, `3.3`, `4.1`, `5.1`, plus `sitemap.md`, `blocks.md`, `flows.md` and the concept map. **`0.11` gained rule 10**, so the peg is a rule of the register rather than a sentence in a decision record, and every node that spends money now points at it instead of restating it.

**Three kinds of file were deliberately left alone.** `baseline.md`, `baseline-account.md`, `competitors.md` and `research.md` **record what was walked**. `D-21` and `D-25` carry a **superseded** marker rather than new wording, because a decision record says what was decided then. And the critique entries that quote `C1`'s old name are records of a namespace collision, where the old string is the evidence.

**One node was checked and needed nothing: `0.2`.** Its statistics strip carries a count, two times and a ratio, and `D-28` turns none of those into coins.

---

## 9. `D-29`, the rail

**Decided on 19 August 2026 after the founder read the drawn rail beside the live product.** The rail is the ways-to-play carrier and round 1 ships one way to play, so it holds **Cases**, plus **My items** once an account exists.

| What the rail holds now | Where it went |
|---|---|
| **Logo slot**, saying `Logo`, no wordmark beside it | The mark is stage 06's asset and the name is part of it |
| **Cases**, plus **My items** with an account | Unchanged |
| **Provably fair** | The footer's **Play** column, which already held it |
| **Responsible play** | The footer's **Play responsibly** column, which already held it |
| **Sound, language, social** | **The foot of the rail**, as the baseline runs them. The sound control leaves the header, which is what finally clears the one-row rule at 360px |

**The language is not a switcher.** One language is locked in `CLAUDE.md`, so it states `EN` and carries no menu: a picker with one option is a dead control. It becomes one when a second language ships.

**One cost is a rule violation and it is drawn, not hidden.** The mobile bar is now Home plus Cases, two before an account, and `0.1` quotes Material's floor of three. `D-22`'s justification was that the bar cleared it exactly. **That justification is void and `D-29` prints it instead of reinterpreting the quote.** The bar is drawn as it stands; whether it is retired, which the baseline would support since it has no bar at all, is not decided.

**Measured after the change, both states at 360px:** the header holds at one row and 61px, and nothing overflows with the drawer open or closed.

---

## 10. The quality pass on `1.0`, 19 August 2026

**Run as an instrumented sweep rather than by eye:** heading outline, landmarks, controls without an accessible name, links without a destination, duplicate ids, and the measured height of every block. Six findings, and the first one was invisible on this page and wrong on every page.

| Finding | Why it is a defect | Fix |
|---|---|---|
| **The footer spent four `H2`s** on its column labels | Node `1.0` section 8B makes the H2 list the block order and the check mechanical: read the block order, read the H2 list, they match or the node is wrong. **Four headings injected by a global break that check on every screen in the product**, not on the one where it was noticed | The labels are text. Each column's name is already carried by its own `<nav aria-label>`, which is what a screen reader announces anyway |
| **Two placeholder treatments** | Half the reserved areas were an outline on the page background, half an outline on a surface, which reads as two kinds of missing thing. It is one kind. **Stage 07 extracts components from these files, so two treatments here become two components there** | One rule, applied to all ten placeholder classes |
| **`A5` was two figures in an empty column** | The node calls it "the institutional trust unit" and DANGER 1's locked implication is a hybrid hero, the badge **in the same unit**. Two figures floating is not a unit | It is a bordered unit inside the hero |
| **The SEO block was the tallest on the page**, 555px | It is the lowest-priority block on the page and it was the largest. `0.13` makes it the structural SEO layer, not the page's case | Two columns from 900px, **357px**. Multi-column rather than grid: a grid pairs a heading with the paragraph beside it and breaks the one thing prose depends on |
| **The daily control was a link carrying `aria-disabled`** | A link with `aria-disabled` still navigates when clicked. A control that cannot act is a disabled control | A real `<button disabled>` |
| **A drawn track nobody could see** | The ladder's rule ran behind tier markers that carry a surface of their own. **Something drawn that renders invisible is a defect, not decoration** | Removed. Five equal cells are what make it a ladder |

**And one thing the node asked for that no tile carried:** the daily marker. `0.7` field 6 makes it a marker shown only where it applies, and every tile in the grid was silent. One tile now carries it, which is also what proves the marker and the stock marker do not collide.

**Measured after the pass.** Desktop page height 4,326 to 4,123. At 360px the H1 begins at 500 against a fold of 584. No horizontal overflow at either width, in either account state, with the drawer open or closed. One `H1`, and the `H2` list matches the block order on both states.

---

## 11. The two-instrument audit of `1.0`, 19 August 2026

**Run because the founder asked for one more pass over Home.** Claude took the browser side, measured at 1440 and 360 in both account states. Codex ran read only over `index.html`, `index-account.html`, `_wf.css` and `_nav.js` against the nodes that own them, with the falsifiable classes named in its brief: a rule a node states and the code contradicts, a state the node specifies with no code, a value drifted from its token, an orphan, a broken link, a fact with no source. **Twelve findings came back, every one was re-read in the file before it was touched, nine were confirmed and three are withdrawn with their reasons kept.**

| # | Finding | Found by | Status and what changed |
|---|---|---|---|
| 1 | **The rail toggle rendered under the header** | Founder, with a screenshot | Confirmed. `position: sticky` opens a stacking context, so the toggle's `z-index: 31` resolved inside the rail while the rail itself sat at `auto`: the header's 30 covered a control `0.1` section 1 puts on the seam on purpose. The rail carries the number now |
| 2 | **`A5` rendered twice on `1.1`**, once in the hero and once below the grid | Codex | Confirmed. The comment above the second one said "the same unit, not a second one" while the code drew both. `home.md` section 4.1 says the unit **moves**. Removed from the hero |
| 3 | **The guest daily block showed progress and a wager figure** | Codex | Confirmed, and the worst of the twelve. Section 4.1: "the ladder renders as a description of what exists, with no progress and no wager figure, because a guest has none. The control routes to `2.4`". It shipped as `0.00 of 5.00`, Silver marked reached and a disabled control, which is the account render with its numbers zeroed. **A zero is not the guest state, it is a claim that this person has wagered nothing**, which `0.11` rule 3 refuses |
| 4 | **`1.1` had replaced B10 with a second withdrawal-threshold block** | Claude | Confirmed. Same missing figure twice on one page, `I1` dropped from the account render, nothing in `decisions.md`. Put back to the matrix, and **the product question it was silently answering is now an open item on the node** |
| 5 | **The Trustpilot score was hardcoded at `4.3 of 5`** | Codex | Confirmed. `0.11` group B: "Live or not at all. A hardcoded score is a fabricated review claim", and whether we have a score at all is an open item on the node. It renders as the missing state, like the auditor beside it |
| 6 | **The favourite control was a 28px target** | Codex | Confirmed. `0.7` section 6 asks for "a target no smaller than 44px that does not overlap the link's own tap area". A corner mark is a decision about the visible chip, not a licence to shrink the target: the chip is drawn by the button's own `::before` so the target can be 44 while the mark stays small |
| 7 | **The featured grid carried no peg** | Codex | Confirmed. `0.7` section 5.1 puts it "on the grid once", and the first mention of the missing peg was two blocks lower. One line, above the first prices on the page |
| 8 | **Neither money figure in the header was a route** | Codex | Confirmed. `navigation.md` gives balance `4.1` and value of items held `5.1`. Both were `div`s, so the account half of the header was four figures and two buttons of which only the buttons worked |
| 9 | **The footer statistics passed a route and never rendered it** | Codex | Confirmed. The fourth field was in the data from the first version and no line read it. `0.11` rule 1: a route, or it does not ship |
| 10 | **The footer link columns were open lists at every width** | Codex | Confirmed. `0.2` requires three accordions plus the interlinking one, collapsed by default at 360 and **present in the DOM**, each header a `<button>` with `aria-expanded` and `aria-controls`. The links were all there and the control was not, which is the wrong half of the pattern. The compliance lines stay outside every accordion at every width |
| 11 | **The median and p90 carried no window length, and the Steam fee no source** | Codex | Confirmed. `home.md` section 2.8 makes the window part of the claim, and `competitors.md` marks the 15 percent fee `[?]` in the record itself. The window renders as a named hole; **the comparison does not render at all until the fee carries its source and date**, `0.11` rule 9 |
| 12 | **The section head rule collapsed to a 15px stub** | Claude, measured | Confirmed. The description took what it wanted and a long title left a hairline that reads as a rendering fault. The rule has a floor of 96 and the description pays for it |
| 13 | **The state strip was four rows and 227px at 360** | Claude, measured | Confirmed. Section 7 says it is "one row that wraps to two". Two figures share row one, the next step takes row two, and the caption that explained why the balance is repeated came off: **a caption arguing for a duplicate is an admission that the duplicate is not needed** |
| 14 | **The account control ran 8px past the right edge at 360** | Claude, measured | Confirmed. The header row needed 320px inside 297. The header gives back the screen's own gutter and runs edge to edge below 900, which is also how the baseline draws it |
| 15 | **The footer statistics carried our backlog in the product** | Claude | Confirmed. Four figures each carrying a second italic line reading "Conditional on `D-B`", "Slot 2, filled with a figure that has a route", "it needs its own backlog row". Every one of them is already in `footer.md`. **A route is rendered, a process note is not**: the route survives on the one figure that claims to be checkable against something else |

**Withdrawn on verification, kept with their reasons.**

| Finding | Why it does not stand |
|---|---|
| **Links point at pages that do not exist**, `case.html`, `catalogue.html`, `signin.html` and the rest | True and not a defect. Two of 63 pages are built and the panel prints that count on every screen. The routes are the map's, and they resolve as the map is drawn. What would be a defect is a route to a file no node names, and there is none |
| **The ticker does not move, the pause control does nothing, and there is no reduced-motion state** | Motion is not this stage's. `conventions.md` section 7 defers finished UI and the pipeline puts motion later; the control is a real element because section 2 requires real elements, and a reduced-motion state has nothing to reduce until there is motion to reduce |
| **The favourite has no behaviour: no toggle, no count change, no route while signed out** | `conventions.md` section 4: every state is its own page, not a live script. The on state is drawn on a tile of its own. The signed-out press routes to `2.4`, which step 6 builds |

**Measured after.** Guest page 4,123 to 4,167 at 1440, the growth being the peg line and the window marks, both of which are content the nodes asked for. `1.1` at 4,440 with one `A5` instead of two. At 360 the strip is 175px against 227, the header holds one row at 61px with nothing past the edge, all four footer accordions are collapsed with their eight links in the DOM, and the favourite targets measure 44 high. No horizontal overflow on either page at either width.

---

## 12. `3.3` Case screen, phase 1, 19 August 2026

**The second screen, and the first one that is not Home.** Node `3.3` holds three phases and four states; this step draws phase 1, the document a crawler and a first-time reader both see. `3.4` to `3.7` are the next step.

### 12.1 Two contradictions inside the node, found by drawing it

**The heading list and the block order disagreed, and the node's own checklist made that fatal.** Section 15B listed the H2s as drop table, then what this case pays, then published against observed. Section 1 orders the blocks the other way round, pays and the ladder above the table. Checklist item 2 in the same section says "H2s exist in block order, matching block B", so the two could not both be right. **Section 1 wins because it carries an argument and the heading list carried only an order:** putting the summary under the list means the cost of the case is read after its contents, which is design principle 3 failing on layout rather than on content. `case.md` and `ia/case.html` were both corrected before the page was drawn.

**The risk band has no method, not only no thresholds.** `0.11` says the method "reads the same drop table whose chances and values are printed on `3.3`" and marks the thresholds `[?]`. **It never says what the method computes.** This screen renders the one figure that satisfies the stated property, the share of outcomes worth at least the entry cost, and names it a candidate rather than the method. New open item on the node, owner founder.

### 12.2 Every figure on the page is recomputable from the table under it

`case.md` section 5 calls the expected value the strongest row in the register, and the reason is that a reader who distrusts it can derive it without leaving the page. **That is a layout requirement and it is also an arithmetic one, so the drawn table was built to satisfy it rather than filled with plausible numbers.** Checked in the browser against the rendered DOM:

| Printed | Recomputed from the nine rows | Match |
|---|---|---|
| Expected value **11.68 coins** | Sum of chance times value | **11.68** |
| Tested RTP **94.2 %** | Expected value over the 12.40 entry cost | **94.2** |
| Share worth at least the entry cost **37.000 %** | Chances of the six items priced at or above 12.40 | **37.000** |
| **100 000** tickets | Every range added, none overlapping, no gap | **100 000** |
| Chances | Added across all nine items | **100.000 %** |

**The ticket ranges and the percentages say the same thing twice**, which is what section 15C's own copy claims and what makes a result checkable afterwards. Tickets 1 to 37 000 are exactly the outcomes worth at least the entry cost.

**One figure changed on `1.0` to keep this true.** Home's worked example carried the AK-47 Redline at 18.60 coins over tickets 7 300 to 7 420, a range of 121 tickets beside a chance of 3.180 per cent. **A drop table whose ticket ranges contradict its percentages is the defect this product exists to prevent, printed in our own copy.** Home now carries 47.30 coins over tickets 1 to 3 180, which is the same row this screen prints.

### 12.3 What the node asked for that the browser refused

**`position: sticky` cannot do what section 14 describes.** The commit block "becomes sticky once it scrolls out of view and sits directly above the mobile bar". Sticky with `bottom` pins an element while its normal position is still below the threshold: it holds a block you are scrolling down towards and releases it the moment you pass it, and it never drags one down from above. Drawn that way the block simply scrolled off. **The behaviour is a second, condensed carrier**, built by `_nav.js` from the real block and shown by an `IntersectionObserver`. The entry cost and the trigger are on it always, because "it never drops the entry cost to save the height" is the node quoting design principle 3; the sentence explaining what the trigger will ask for has been read by then and is the part that goes. It is `aria-hidden`, because a screen reader meeting the same trigger twice is being told there are two ways to spend and there is one.

**The drop table had to stop being a table at 360.** Section 14: "nothing scrolls sideways: the table wraps into cards rather than becoming a horizontally scrolled grid, with chance and value on the same line so the pairing survives the width". Drawn as a table it needed 445px inside 313 and scrolled inside its own box. Each row is now a card: the item full width, then chance beside value, then tickets beside free units. **The column headers move onto the cells**, because a header row a person has scrolled past is not a header.

**Four tier groups are not four headings.** The drop table groups by rarity because `D3` attaches the observed counter to the tier, so a table with no grouping has nowhere to put block 5. Four `H3`s inside it would break the same mechanical check that the footer's four `H2`s broke on every page. The group is a row, and its name travels in the `tbody`'s own accessible name.

### 12.4 Measured

**1440:** page 3 553px, no horizontal overflow, one `H1`, and the `H2` list is pays, published against observed, what is in this case, live drops, how this case works, matching the block order exactly. The commit block sits beside the artwork, section 14. **360:** no horizontal scroll on the page or inside either table, the commit bar rises to meet the mobile bar at 584 and the two fixed layers take 117px of 640, which is the cost the node names and accepts. Every control has an accessible name, no link is without a destination, no id repeats.

**What is drawn as a named hole rather than as a number:** the coin peg, who tested the RTP and over how many opens, the risk band's thresholds and its method, the sample floor under the observed counter, and the two conditions `D-B` and `D-C` that decide whether the tier ladder ships at all. **And one that is a hole in the record rather than in the product:** whether this rarity ladder is the game's own. `blocks.md` walked seven tiers by reading colours and did not capture their names, and `CLAUDE.md` already says the ladder is the one inherited thing nobody wrote down.


---

## 13. The header's account zone, 19 August 2026

**Reported by the founder against the baseline capture**, and the node had already said most of it. Three of the four findings are the render contradicting `0.1`, not a new decision.

| # | What was drawn | What the node says | Status |
|---|---|---|---|
| 1 | The two money figures side by side, separated by a vertical hairline | Section 5 names them the **upper** and the **lower** figure, and the state matrix says "two lines" on desktop and "one line each" on mobile. **It has said that since the node was written** | Fixed. The block is stacked, balance above |
| 2 | Money first, the account control last | Section 5, left to right: "**the account control**, the two figures, the deposit control". The capture runs the same order | Fixed |
| 3 | A word-labelled `Deposit` button, condensing to `+` only below 900 | Section 5: "**a single add control** beside the figures". The capture is one compact round control at every width | Fixed. **No badge**, and the capture shows exactly the badge rule 4 refuses: a green 5 per cent welded to a money control |
| 4 | The account control was a link to `5.1` | **New, by founder decision.** It opens a menu, which the baseline does and the node did not | Node amended first, then drawn |

### 13.1 What replaced the hairline

The vertical rule between the two figures was not decoration: rule 2 says they are never summed and never a total, and the rule enforced it. **Stacked, the same job falls to weight and caption.** The balance is the larger figure, the value of items held is smaller and dimmer, and each keeps its own caption. **Two figures of equal weight in a column is a receipt**, which is the one reading this zone may not produce.

**And the caption sits beside its figure rather than under it, which is a height decision with a rule behind it.** Figure over caption twice put the header at 96px against the 61 that section 9 measures for one row, and every screen in the product would have lost that difference from its first screen. **Dropping the captions instead would have been cheaper and is refused:** rule 3 says the lower figure is labelled a current market value and never profit or growth, and a label only a screen reader gets is not doing that job for the person looking at it. The mono value takes a fixed measure so the two captions line up. Header back to **62px** at 1440 and **61px** at 360.

### 13.2 The menu carries four rows, and the two the reference has that we do not are refused

The capture's menu is INVENTORY, HISTORY, PROFILE, SETTINGS, LOGOUT. Ours is **My items** `5.1`, **Withdrawals** `5.3`, **Responsible play** `6.1`, **Sign out**. **No node in the map holds a profile or a settings page**, and `CLAUDE.md` says a carrier is inherited and filled with live items while only a dead item is deferred. The carrier is inherited and filled with the four rows that exist: **a row for a page nobody has specified is the dead item defect inside a menu.** There is no separate history node either, so the withdrawal record is the row that answers it.

**Responsible play now has three persistent entries and that is deliberate.** The footer column since `D-29`, the entry inside the money control, and this menu. Each answers a different moment: reading the site, being about to spend, managing the account. **A brake that has to be searched for at the worst moment is not a brake.**

### 13.3 Hover, and the bug that separating it fixed

The reference opens on hover. **Hover alone excludes touch entirely and the keyboard almost entirely**, so the control opens on hover, on click and on Enter or Space, and closes on Escape, on a click outside and when focus leaves.

**Bound as two JS handlers that both wrote the same flag, the control appeared dead to a mouse:** hover opened the menu, and the click that followed toggled the flag straight back to closed. **Hover is a pointer affordance with no state behind it.** `:hover` and `:focus-within` show the panel in CSS and record nothing, inside a `(hover: hover)` query so a touch device never inherits a rule it can only fire with the tap it already spent. Click, Enter and Space set the class, and that class is the only thing `aria-expanded` reports, because hover is not a state a screen reader has.

**Measured:** header 62px at 1440 and 61px at 360, one row in both, no horizontal overflow in either state. The menu sits inside the viewport at 360, where it anchors to the screen edge rather than to a 44px avatar, and every row is a 44px target.


---

## 14. The case stage, 19 August 2026

**Two founder captures put beside `3.3`:** the baseline's own case screen, and a second product the founder prefers. **Both run the same composition and this screen now runs it too:** the risk band on one flank, the title in the centre, the object control on the other, a framed stage holding the case artwork, and the trigger centred under it with the cost on it.

### 14.1 The stage is the argument, not the decoration

Section 0 of the node says the phases are states of one page and the person never navigates during the main job. **A frame that holds the artwork while the choice is made, and the reveal once it is made, is what makes that true in the layout** rather than only in the routing: nothing is unmounted, one region changes what it holds.

Drawn as artwork in one column with the trigger in another, which is how it shipped first, **phase 2 would have to build a stage phase 1 never showed, and the person would watch the page rearrange itself at the exact moment they have just spent.** Section 14 allows either placement, "the commit block **may** sit beside the case artwork rather than under it", so nothing was overruled. The centred reading is taken and the reason is written into the node.

### 14.2 What the captures carry that this screen refuses, each with the reason already on the node

| On the reference | Refused because |
|---|---|
| **Multi-open, 1 to 5 on one capture and x1 to x30 on the other** | **No parent.** A spend multiplier next to the trigger before any ceiling is visible. **The second capture strengthens the refusal rather than reopening it:** x30 behind one tap is thirty spends behind one deliberate act, and `C2`, the spend ceiling chosen at deposit, does not exist yet |
| **AUTO** | The multiplier's refusal with the deliberate act removed entirely. **The one control on the reference that spends without a decision per spend** |
| **FAST OPEN** | A control that makes spending faster, sold as a preference. The mechanism is kept as reduced motion honouring the system preference, which is the same mechanism for the opposite reason |
| **ADD TO BATTLE** | **Case battles are `LATER`.** A control that enters a mode round 1 does not have is the dead item defect on a spend surface |
| **The risk band as skulls, or as bars beside the word** | `0.11` rule 8: a figure in an icon is not text. `0.7` rule 5.5: the tier has a name and the name is in the markup. **The word is taken and the glyph is not** |
| **The like count** | `0.11` rule 7, a number is never a score. **The favourite is not this and the difference is the whole of `D-24`:** a favourite is the person's own press on their own shelf and claims nothing beyond itself, while a like count is a popularity figure printed beside a spend trigger |

**The flanks they occupy are inherited and filled with live items**, which is the rule `CLAUDE.md` states: only a dead item is deferred, never the carrier that would have held it. One flank carries the risk band as a word, currently its named hole because neither the thresholds nor the method is set. The other carries the favourite, `D-24`, **in MVP with no parent in the three legal classes and that cell printed**.

### 14.3 The trigger is the loudest thing on the page, and in grey that is size

`conventions.md` section 1.6 gives every screen exactly one main action. Both captures put the cost inside the trigger, which is what puts the number and the act in one glance, and this screen does the same. **The figure stays above it as well**, because a number inside a button is a label and this block owes a figure with a caption and a named hole beside it.

### 14.4 The entry cost was thirty pixels under the fold, and the fix was the rule read literally

Section 14 asks for "the commit block on the first screen **with the entry cost and the trigger together**". At 360 the head, the stage and the cost fit above 584 and the trigger landed at 614. **Two things gave the height back and one rule was rewritten.**

The description line under the title ran three lines. Block 2 asks for the item count and "the one line that says what kind of case this is", and everything it said beyond that is already the drop table's own section head, two blocks down, **where it is read beside the numbers it describes**. It is one line now. The stage gave up its padding at this width: a frame with room to spare above the fold is room the cost is not using.

**And the condensed commit bar now watches the trigger rather than the block.** Watching the block, the bar stayed hidden because the block was partly in view, so the one control the screen exists for was the thing below the line. **The rule is literal now: the trigger is on screen at every scroll position, as itself or as the bar**, and the bar's own bottom margin is the mobile bar's height, because a control behind a fixed carrier is not visible however much of it intersects the viewport.

**A note on how that was found, because it cost two false readings.** The first two attempts at this appeared not to work and were not wrong: the browser was serving a cached `_nav.js`, which the page's own cache-busting query does not touch. **A behaviour that is not in the file the browser loaded cannot be measured**, and the project's own rule, a fresh port for every acceptance pass, exists for exactly this.

**Measured after.** 1440: page 3 809px, one `H1`, the `H2` list still matches the block order, no horizontal overflow, every control named, no link without a destination, no repeated id. The expected value, the tested RTP, the risk figure, the ticket total and the chance total still recompute from the nine drawn rows: **11.68, 94.2 %, 37.000 %, 100 000, 100.000 %.** 360: no horizontal overflow, the head stacks to flanks over title, and the first screen carries the entry cost and a trigger.

---

## 15. `D-30`. The case screen takes the reference's shape, 19 August 2026

**Six captures went in front of the node at once:** three of the live product and of two competitors' case pages, three of our own wireframe. **Nothing was drawn before `ia/docs/pages/case.md` and `ia/case.html` were amended and `D-30` was written**, which is the rule this stage runs on: fix the IA first, then render.

| # | Change | Where the argument is | Found by |
|---|---|---|---|
| 1 | The stage carries the case's contents, standing still | Node section 1. **In phase 2 that strip is the thing that moves**, so one region holds one object in two states rather than two layouts trading places | Founder capture |
| 2 | The strip carries chance **and** value on every tile | Section 2. A strip of values alone is the shop window | Claude, against `D2` |
| 3 | No pointer over the strip in phase 1 | All three competitor captures draw one. **Before a roll exists, a marker over an item points at a result that has not been decided**, which is `E2` arriving one phase early | Claude, against the references |
| 4 | Tested RTP and expected value move onto the commit block | `D-30`. Design principle 3 asks for them **where money is about to be spent**, and `0.11` rule 10 calls that block the last surface before money moves. The old argument defended a position 800px above the table | Founder, "the parts are too large" |
| 5 | The commit block condensed, 500px to 290 at 360 and 253 at 1440 | **The size of a block is not neutral: a commit block that fills the screen is the page arguing for the act** | Founder capture |
| 6 | The drop table renders as a uniform card grid at every width | Section 3. All four live pages walked for this node render a grid. **What keeps it a comparison is a rule and not a shape:** every field in the same place on every card, no card omitting one | Founder capture |
| 7 | Three columns and not four | Each tier is its own grid and the ladder runs two or three items per tier. **At four the fourth cell was empty in every tier on the page**, which reads as a broken layout rather than as a tier holding two items | Claude, at 1440 |
| 8 | A row of this case's recent drops, under the trigger | `D-30`, half of a refusal reversed. **The dead item was the ranking, not the row** | Founder capture |
| 9 | The figures sit at the foot of every strip tile | A value that moves down the tile because the name above it is longer is a column that cannot be read across | Claude, at 1440 |

### What the row under the trigger kept from the refusal

**Section 16 refused Hellcase's "last 7 days top drop" and the baseline's "Best drops" as survivorship by construction, and that reasoning was not wrong.** What it did was defer a carrier because the item inside it was dead. `CLAUDE.md`: a carrier is inherited and filled with live items, and only a dead item is deferred.

**Refused and still refused:** the ranking by value, the multiplier (x38.8 on one capture, x536.2 on another), the seven-day window, the word "best", and any person's name. **Taken:** the row, the item, its value in coins, its moment, and a destination on every tile.

**The line between this row and the ticker is what each carries, not where it sits.** The ticker carries people and no values. This row carries values and no people. Neither is the other with a different sort order.

**The drawn row is five outcomes below the entry cost out of six**, and the page says so out loud: that is what an unranked row looks like, and a row sorted by value would have shown six wins and told a reader nothing about the sixth.

### Two defects found by measuring rather than by looking

**The strip wrapped into two rows instead of scrolling.** A global rule sets `flex-wrap: wrap`, so nine tiles at 122px inside 885px became two rows of 158px and the stage frame ran 577px tall at 1440. `flex-wrap: nowrap` restored the one axis the strip has, and at desktop the nine tiles now share the width so **nothing scrolls and no item is cut off at an edge, which none of the three references manage**.

**The mobile stage overrides never applied.** They sat in a `@media (max-width: 899px)` block **above** the base rules they were meant to override. Equal specificity, later rule wins: **a media query is not specificity.** Moved below the base block, the stage went from 345px to 298px at 360.

**And the cache trap fired again, on the stylesheet this time.** `_wf.css` is linked with no version query, so a `?v=` on the page does not touch it. Two measurements came back byte-identical after a real edit. **Fresh port, every acceptance pass.**

### The cost at 360, named rather than absorbed

**The trigger is not on the first screen at 360 by 640 and cannot be.** Head plus stage plus the strip ends at 567, the commit block starts at 583 and its trigger at 684. Section 14's budget is 584 once the fixed bar takes its 56.

**The condensed commit bar is the answer the node already specified**, and it is on at load at this width: it carries the entry cost and the trigger, so **the requirement that the cost and the trigger are together and reachable at every scroll position is met literally**. What the strip cost is the real block's place on the first screen, and that is the trade the founder asked for by putting the contents on the stage.

**Proof:** superseded by section 16 the same day. The shots under those names now show the screen `D-31` left behind it, and **a proof file that no longer matches its page is worse than no proof**, so they were overwritten rather than kept beside the new ones.

---

## 16. `D-31`. Six corrections from the founder, and two of `D-30`'s four decisions did not survive

**Same session, hours after `D-30`.** The founder read the drawn screen block by block and sent six corrections in a row. **Every one was written into `ia/docs/pages/case.md`, `ia/case.html` and `docs/decisions.md` before the render changed.**

| # | Correction | What it replaced | Found by |
|---|---|---|---|
| 1 | The risk band gets a **reserved zone** on its flank | A line of italic text. **A hole drawn as a sentence in the corner is a hole that has no size** | Founder |
| 2 | The stage is the **reveal lane at rest** with the case artwork large on it, and **the lane prints nothing** | `D-30`'s nine tiles carrying a value and a chance each. Too much information on the stage | Founder |
| 3 | The commit block is **the act and the cost of the act, and nothing else** | Three figures, two paragraphs and a trigger in one box. `D-30`'s move of the RTP and EV onto it is reversed | Founder |
| 4 | A **count switch, one to five**, beside the trigger | The refusal section 16 made twice, and `C2` still does not exist | Founder |
| 5 | The row is called **Last drops**, and the drop card puts **the image first with the information beside it** | "What has come out of this case", read as unclear, and a card that led with a name | Founder |
| 6 | The **ticker leaves this screen**, and each footer statistic gains a **reserved icon zone** | A component on two surfaces, and a statistics band with no room for what is coming | Founder |

### The one thing inside the founder's instruction that was refused

**The founder named the category's two labels: skin.club's "Last top skins" and Hellcase's "Last 7 days top drop".** The length was the right complaint. **The word is the problem:** both claim a ranking and this row is in time order, so either label would be **a heading that lies about the list under it**. Taken: the short form. Refused: the claim. **If the word "top" is wanted the row has to actually rank by value**, and `D-30`'s survivorship cost comes back with it. It is in section 17 with the founder as owner.

### The argument that was sound and whose conclusion was wrong

`D-30` put chance and value on every strip tile because **a strip of values alone is the shop window**. That rule is real. **What it binds is any surface that prints a value**, so the honest way to satisfy it on the stage is **to print no value, not to print two**. The lane makes no claim and needs no pairing.

### Three defects the change created and measurement caught

**The commit bar stopped mounting.** `mountCommitBar` required a `.wf-fig-v` inside the commit block, and `D-31` removed the last one: the total now lives on the trigger label alone. The bar returned `undefined` at 360 and **the one control section 14 requires at every scroll position was gone**. It now mounts on the trigger and carries the figure only where one exists.

**The drop card put its name under the picture** in a 96px column, so "Field-Tested · StatTrak · Covert" ran three lines. **The artwork became its own cell** so it can hold the left column at the card's full height while the name sits with the figures it belongs to, and the head gained the matching column: **a body cell with no column is a table that only looks like one.**

**The tier heading rows still spanned five columns** after the table gained a sixth. Corrected in all four groups.

### What leaving costs the ticker, printed rather than absorbed

**`0.8` now has one consumer.** Stage 04 argued against exactly this a few hours earlier and `D-30` kept the ticker for that reason; the founder cut it. **Social Job 2 was carried on this page by the ticker** and is now carried by `Last drops`, which lands on the same `7.1` but is about this case rather than the platform. **A narrower answer, recorded as narrower.** The claim "renders on `1.0` and `3.3` only" lived in five other files and all five were corrected in the same step, plus their pages: `sitemap`, `ticker`, `catalogue`, `system`, `navigation`, `responsible`.

**Measured after the change.** 1440: no horizontal overflow, five H2s in block order, no nameless control, no duplicate id. 360: page width 345 inside 360, the lane clipped inside its own frame rather than scrolling the page, the commit bar on at load carrying `Open for 12.40 coins`.

**Proof:** `screens/case_1440_stage.png`, `screens/case_1440_droptable.png`, `screens/case_360_stage-commitbar.png`, `screens/footer_1440_stat-icons.png`.

**Not done, and it is the next thing.** The two-instrument audit of `3.3` has not run: this was a build step and Codex owns what is falsifiable in the source, so it belongs after the four states of `3.3` are drawn, not between two founder corrections.

---

## 17. `D-32`. Best drops ranks, and the third pass on one block ends the argument

**Same session, third pass.** The founder asked for the ranked row a third time and asked what would have to change for it to happen. **Nothing had to change except the record.**

| # | Change | What it replaced |
|---|---|---|
| 1 | **Block 4 ranks by value and is called `Best drops`** | `Last drops` in time order. **The label and the sort now agree**, which is the one thing `D-31` said had to be true before that word could be used |
| 2 | **The guest stage carries the case artwork alone**, and the artwork takes the room the lane was using | The lane at rest under the artwork. **A guest is two steps from a reveal**, so the track was showing them the mechanics of something they cannot start |
| 3 | **The trigger reads `Sign in with Steam`** on the guest state, `Open for <total>` once an account exists | `Open for 12.40 coins` in front of a person who cannot open. **A label that promises an act the page then refuses** |
| 4 | **The entry cost is a figure again**, above the switch | Nothing. **Forced by change 3:** the total left the button, and design principle 3 does not stop applying because the trigger changed its wording |
| 5 | **The commit block loses its frame** | A bordered box, which was **the block insisting on itself** on a screen that already has exactly one main action |

### What the ranking costs, stated once and not softened

**This is survivorship by construction**, in section 16's own words, and the reasoning was never withdrawn: the biggest drops of a period are not what happens. **What makes it survivable is that the block saying what does happen is on the same page and one tap from this row's caption**, `D3`.

**The dependency is sharper than it was.** `D-B` decides whether that block renders at all. **If it returns negative, a ranked row of the biggest wins stands on this page with no counterweight.** That is the state to reconsider the row in, and it is now written on the node, on the decision record and here rather than assumed.

**Still refused inside the row:** the multiplier, x38.8 and x536.2 on the captures; the window chosen to flatter; and any person's name.

**Measured.** 1440: values descend 47.30, 14.20, 12.90, 7.90, 7.40, 6.90; five H2s in block order; no lane in the DOM; commit block border 0; no horizontal overflow; no nameless control. 360: page 345 inside 360, **the entry cost is above the fold at 452 to 500**, the trigger sits at 600 and the condensed bar is on at load carrying both the cost and `Sign in with Steam`.

**Proof:** `screens/case_1440_guest.png`, `screens/case_360_guest.png`.

---

## 18. `3.3` closes: seven state pages, 20 August 2026

**The pack's rule, and it is the reason these were not deferred:** «екран не готовий, поки не закриті його стани». Step 6 is «решта екранів головного флоу, кожен зі своїми станами», and the iteration gate before moving on is that question. **States are where a specification is tested.** A base page can look right and its states are what prove the blocks have somewhere to go.

| Page | State | What only the render could answer |
|---|---|---|
| `case-account.html` | Signed in, funded | **`D-32` created this state and left it without a page.** Three things differ from the guest: the lane renders, the trigger names a different act, and the balance relationship is finally stated, which section 1 block 3 has asked for since the node was written |
| `case-item-out.html` | `3.4`, item at zero | The card keeps every field and is marked rather than greyed. **The contradiction it exposes is printed on the page:** `D1`, `D2` and `D3` are not simultaneously satisfiable while an item sits at zero, and the card is drawn the same way under all three readings |
| `case-open.html` | `3.5`, phase 2 | **The lane that stood still is the lane that runs.** Nothing is unmounted, which is the whole argument for drawing the frame in phase 1. The pointer exists only here, because only here is there a roll to point at |
| `case-outcome.html` | `3.6`, phase 3 | The item lands where the artwork and then the reveal were: **the third state of one region rather than a third layout** |
| `case-interrupted.html` | `3.7` | A state and not an error, carrying the outcome in full and the second route to it in My items |
| `case-nocounter.html` | `D-B` negative | **The state `D-32` made expensive.** The counterweight to a ranked `Best drops` row is the block that just disappeared |
| `case-degraded.html` | Values degraded | The case stays openable, and **the expected value is not printed from the last values we had** |

### Three defects the states found, and one design question they answered

**The receipt linked to nowhere.** `F1` requires a venue listing filtered to the float band, and the two venues are `[?]`, so the first render drew `href="#"` twice. **A link to nothing is a dead end**, which conventions forbid outright; a named absence is a question with an owner. Both became printed holes.

**The condensed commit bar mounted on the outcome.** It matched `.wf-commit .wf-btn--primary` and produced a sticky bar reading `12.90 coins / Keep it` over a control already on screen. **Section 14 specifies that bar for the surface where money is about to be spent**, and phase 3 is the surface where it already has been. Suppressed by an opt-out on those two sections. **Phase 2 needed no opt-out and that is the check that it is right:** it has no primary trigger at all, because the trigger does not re-arm during a reveal.

**The won item rendered as a narrow column.** A flex column with centred items collapsed a `width: 100%` child to its content.

**And the question the states answered rather than raised:** what `D-B` negative actually costs now that `Best drops` ranks. `case-nocounter.html` is the page to look at before deciding whether the ranked row survives that condition.

**Measured across all eight pages.** One `H1` each, and the same `H1` in every phase, because they are states of one document. No duplicate ids, no hrefless links, no nameless controls, no dead in-page anchors. **`case-nocounter.html` carries four `H2`s and the rest carry five**, which is the heading list closing over the missing block rather than leaving an empty section. Every state page is `noindex`: a state has no URL of its own. At 360 no page scrolls sideways.

---

## 19. `3.3` again, on 20 August 2026: the pair, the lighter outcome, and the states multi-open never had

Three founder captures in one session, and each one is a decision before it is a render. `docs/decisions.md` `D-33`, `D-34`, `D-35`.

**The commit block became a row of two, and the two are different in each state.** The price and the act are one decision, so they sit side by side: stacked, the second glance is the button and the number is already behind the eye. **The guest gets the cost beside the trigger and no count switch at all**, because a switch there sets a quantity for an act this person cannot perform and nothing carries the choice across the sign in. **The account holder gets the switch and loses the cost figure**, because the trigger already carries the total and the figure was printing the same number twice. The unit price moved into the caption and prints at every count, since a total with no unit beside it cannot be checked against the drop table.

**The outcome lost everything that was not the item.** The founder's word was overloaded, next to a capture where the item, its chance, its name and three controls are the whole screen. **`F1` asks for the fields that make this this unit rather than a name; it never asked for a bordered table around them, with a three line hole in its last cell.** Four fields became one caption line, two paragraphs became one, and every route and every named hole survived the move. **The item's own published chance now prints above it**, read off this page's own drop table, which is the one thing the capture carried that this screen did not.

**And multi-open got the states it never had.** `D-31` shipped a switch of one to five and neither phase had a state above one roll, so the switch changed a number on a button and nothing else in the drawn product. Four pages: the reveal at two and at five, the outcome at two and at five.

| Page | What only the render could answer |
|---|---|
| `case-open-2.html` | **One lane per roll, each with its own pointer.** One lane resolving two results in turn is two waits, and the second is a person watching a machine rather than their own roll |
| `case-open-5.html` | **The load, and it is where the cost of the switch shows.** Five lanes at full height do not fit above the fold at 360, so they are shorter from three up. Five pointers bleeding past their lanes join into one line down the stage, so each stops at its own edge |
| `case-outcome-2.html` | The batch is items and not a summary: each card carries what the single outcome carries, including **its own route to its own proof**, because each roll is its own round with its own hash |
| `case-outcome-5.html` | **Two figures, total value and total spent, and never the difference between them.** A net on a batch is a score, and a red number after five rolls is the loss-chasing prompt this node dropped in the `B7-2` divergence |

**One research figure came back off the shelf.** `research.md` carries 0.5 to 1 second per card for bulk reveals, and section 16 of the node recorded it as having nothing to attach to because multi-open was refused. **`D-31` had already made that sentence false.** It is amended in place rather than left standing, and the figure is spent on the settling between lanes rather than on the running, so a batch costs one wait plus an interval per extra lane instead of five waits.

**One gap is named rather than drawn.** The shell balance rose to 74.20 coins so that five rolls at 12.40 are affordable in the state being drawn. **The state where the count names a total above the balance is not drawn and is not decided.**

**Measured across all twelve pages.** One `H1` each and the same `H1` in every phase. No duplicate ids, no hrefless links, no nameless controls, no dead in-page anchors. Eleven are `noindex` and only `case.html` is indexable. `case-nocounter.html` carries four `H2`s and the rest five. At 360 no page scrolls sideways, and the condensed commit bar mounts on the five phase 1 pages and on none of the reveal or outcome pages.

**And the shell changed under all of them.** `D-36` gave the account menu three destinations it did not have: `5.9` Roll history, `5.10` Profile and `5.11` Settings. **The menu was refusing those rows on a correct argument**, that a carrier may not promise a destination the map does not hold, and the founder closed the gap on the map's side rather than the menu's. The prototype registry gains three `spec` screens, **two of the three nodes carry no parent in the three legal classes**, and `5.11` cannot be drawn until what it holds in round 1 is decided.

---

## 20. The reveal stands up, and the outcome gets controls it had refused

Two more founder captures the same day. `docs/decisions.md` `D-37`, `D-38`.

**The reels turned vertical from two rolls.** Stacked horizontal lanes put every extra roll below the previous one: the second is further from the eye than the first, the fifth is off the first screen at 360, and **the batch acquires an order it does not have**, since every roll was settled at the same moment and none of them is first. Side by side, every roll is the same distance from the eye and the batch gets **one pointer line across all the reels** rather than five markers at five heights. **`D-35` had already had to shorten the lanes to fit five of them, and that was the axis saying it was the wrong one.** A single roll stays horizontal, because with nothing beside it the wide axis is the one that gives the artwork its room.

**The outcome's controls became the accent, and two of the node's own refusals went with it.** The founder asked for the sell control: on each item of a batch, and one for the whole batch. Section 8.3 refused exactly this, twice, and **both reasons are kept rather than deleted**.

| What was refused | What happened to it |
|---|---|
| **A sell control**, because round 1 has one exit and `cjm-to-be.md` T7 rejected a binding buyback before scoring | **Reversed. The ground is unchanged and is now a cost.** No backlog row holds the capability, so it ships **with no parent in the three legal classes**, the treatment the daily free case and the favourite carry |
| **A one-key repeat**, "one key to liquidate and one key to spend again", the single most telling block in the whole bank | **Half reversed, and the surviving half is the one doing the work.** `Open again` re-enters phase 1 with the entry cost, the tested RTP and the expected value all on screen again. **It never becomes a key that re-rolls in place** |

**Two controls, not three.** The reference carries OPEN AGAIN, UPGRADE ALL and SELL. **Upgrade is a capability that does not exist here**, so the row has two rather than a placeholder holding its place.

**Keeping stopped being a button, and that is a correction rather than a cut.** `E1` credits the item before the animation starts, so **keeping is what happens if nothing is tapped**. A button for the default was a control that could not fail. It is a line of text with a route to `5.1`.

**And the two figure chips went the same way the commit block's did.** They printed the total value and the total spent, and then the two controls printed the same two numbers one line later. **Both numbers are still on screen and the page still never subtracts them**, which is `D-35`'s rule surviving the rearrangement.

**Three things this left open, and one of them should block closing the node:**

- **The sold state is not drawn.** Selling is instant and irreversible, and what the screen becomes afterwards, whether it confirms first, and what the balance does are all `[?]`. **A control that cannot be undone with no drawn confirmation is the one thing this node should not close without.**
- **Whether the sell price carries a spread against the published current value is `[?]`.** They are drawn as the same number. If they differ, **design principle 1 makes printing the difference mandatory rather than optional**.
- **`CLAUDE.md` lists in-platform exchange as `LATER`**, and a buyback for coins is close enough to it that the scope list should say which of the two it is.

---

## 21. One row carried to the end, and My items leaves the rail

**`D-39`, the batch outcome is one row at every width.** N items in N columns at 360 exactly as at 1440. **The argument is structural rather than a preference:** since `D-37` the reveal is N reels side by side, so **column `i` of the result is column `i` of the reel it came out of.** Wrapping to a second row at 600px broke that correspondence at the exact width where it is hardest to hold five things in the head, and it gave five results a two-then-three shape they do not have.

**Carrying it to the end meant cutting the card, not the row**, and each cut removed a duplication before it removed anything real:

| What left the card | Where it went, and why it was safe to move |
|---|---|
| **The value figure**, at every width | Into the sell control, which printed the same number a line later. **While the sell price equals the published current value there is nothing for a second printing to say.** The figure returns the moment a spread exists, because then they are two numbers |
| **Float, pattern, phase and the proof route** | One receipt line per roll under the row, in the row's order. **`F1` is now satisfied at every width instead of at wide ones** |
| **The name**, below 900px at four columns and up | The same receipt line. At 55px a skin name does not wrap, **it breaks mid-word, and "Asii mo v" is not a name.** What identifies a skin at that size is the picture |

**What the card never loses:** the artwork, the chance it landed against, and its price on a control. **The verb stays on that control at every width and only the words around the number go**, because a control whose whole label is a number reads as another figure in a box.

**`D-40`, My items leaves the rail.** It did not lose a destination, **it stopped holding one twice**: since `D-36` the account menu carries My items as its first row, and no carrier holds another's kind. **The superset rule forces the rest** - every bar item exists in the rail, so it leaves the bar in the same step. **The rail now carries one destination and the bar two, identically in both states**, and neither changes on sign in.

**The cost is bigger than the one `D-29` printed.** The bar is below Material's floor of three **for a signed-in person as well as for a guest** now, and the way out `D-29` named is still not taken.

**Two defects found and not fixed, because both are global and pre-existing.** Every page in the prototype, including Home, reports a scroll width of 1040px from a 900px viewport up: **between 900 and 1040 the whole prototype scrolls sideways.** It is in the shell rather than in any screen, it predates this session, and it belongs to the audit rather than to a founder correction. **It is written down here so it is a finding rather than a discovery.**

**And the cluster counts on `ia/sitemap.html` do not sum to its own total.** The nine cluster headers add to 69 and the hero figure reads 68. **The discrepancy predates today by exactly one:** before `D-36` added three nodes to cluster 5 the same headers added to 66 against a hero figure of 65. **Nothing here was derived a second time and nothing was quietly corrected**, because a total that cannot be reconstructed should be reconstructed by the instrument that owns falsifiable contradictions rather than by the hand that just changed three of the numbers.

**The IA caught up in the same step, and the debt is worth naming because it was mine.** Node `3.3`'s own page had stopped at `D-32` while its markdown carried `D-33` to `D-39`. **The decisions were never made at the wireframe level:** every one of them was written into the node before the render moved, which is the rule. **What had frozen was the node's published page**, which is exactly the failure "markdown stays alive, html does not freeze" exists to catch, and it happened because the corrections came in a chain and the render of the node was deferred each time. Rebuilt from the node: the block table, the reveal section, the outcome section with its 360px mock redrawn, the refusals table, and **the entire state matrix regenerated from the markdown rather than edited by hand**, so the two cannot drift again in that table. `ia/sitemap.html` gained `5.9`, `5.10` and `5.11` and **a line saying none of them has a node page**, since `D-36` created them at stage 04 after 03b had closed.

**Not done, and it is still the next thing:** the two-instrument audit of `3.3` and its eleven states. Codex owns what is falsifiable in the source.
