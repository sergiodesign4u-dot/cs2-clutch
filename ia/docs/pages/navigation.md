# Node 0.1. Navigation

**Type:** global element. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Carry the product's destinations, its money figures and its account control on every screen, in two account states and at two widths, in the carrier model the baseline runs plus one shortcut layer on mobile, without ever advertising a destination that does not exist yet.

**Jobs served.** No job of its own: a global element is a carrier. It is the surface on which Main Job `jtbd.md` "Section 1" reaches the case grid, on which Related Job 1 `jtbd.md` Section 2, Related Jobs and Related Job 3 `jtbd.md` Section 2, Related Jobs reach the public provably fair page, on which Related Job 5 `jtbd.md` "Section 2" reaches inventory, and on which the compliance constraint in `CLAUDE.md`, responsible play tooling, gets its persistent entry. **Parent class:** design principle 1 for the provably fair item, design principle 1 as limited by `D-14` for the value figure, the compliance constraint for the boundary entry. All three are legal parents under the three class rule.

**Sitemap transitions:** 1.0, 1.2, 2.4, 3.1, 4.1, 5.1, 6.1.

**Baseline row, `0.1`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| The header carries **two money figures side by side and never summed**, labelled `INVENTORY` and `BALANCE`, with a round `+` beside them for deposit. The rail is a full height icon column of nine destinations. `baseline-account.md` section 1. | **The money rule, exactly.** `CLAUDE.md` fixes two figures, balance and value of items held, never summed. **The canon already runs it**, which is the strongest confirmation in the capture. | The denomination, `C1`. And **the `+` control carries a permanent `5%` badge** advertising the standing deposit bonus, `baseline-account.md` section 5b.2. **Ours carries no badge:** a promotional percentage welded to a money control turns the shell into an advertisement that never stops running. |

---

## 0. This node was rebuilt on 11 August 2026, and the reason is worth more than the node

The first version of 0.1 shipped a **bottom tab bar** on mobile and a single header row on desktop. The founder rejected it, supplied three screenshots of the baseline's own navigation, and named the model: two menus, filled with round 1 content, with the header changing on login and carrying two money figures.

**The founder is right, and the failure was structural rather than a matter of taste.** `CLAUDE.md` lists the **navigation model** first among the things inherited "deliberately close to identical". The first version replaced that model with a different one, and the justification was a component guideline about navigation bars. **A component guideline can tell you how to build a component well. It cannot tell you which component to build.** The research was sound and the conclusion it was used for was outside what it could support. That is the class, and it is recorded in `D-21` so that a later stage does not repeat it on a different component.

What survives from the first version is listed rather than quietly reused: the three sources, the 44 by 44 target decision, the Provably fair position argument, and the transient state table.

**What `D-21` deleted, and what `D-22` put back one step later.** `D-21` deleted the bottom tab bar, the "Home as tab 1" resolution and the claim that round 1 ships no drawer. On the same day the founder restored the first two as `D-22`: **the bar returns, and it returns as a shortcut over the rail rather than as the product's navigation model.** What stays deleted is the claim that round 1 ships no drawer, and the claim that a bar can be the primary carrier. Section 4 owns the bar and the conflict it creates.

---

## 1. The model: three carriers on mobile, two on desktop, and no carrier holds another's kind

The baseline runs **three** carriers that do not overlap, `baseline.md`: the left icon rail, the header, the footer. The footer is node 0.2. This node owns the first two, and adds one the baseline does not have.

| Carrier | Owns | Never holds |
|---|---|---|
| **The rail**, full height at the leading edge, collapsible, a modal drawer on mobile | The logo at its top, **every** destination, its **ambient controls and social links at its foot** since `D-29`, and its own toggle on the seam. It is the complete list of destinations | Money. Actions. The account control |
| **The header**, starting at the rail's edge | Money, the account control, and ambient controls | **Any destination at all.** No exception, not even the logo |
| **The mobile bar**, below 900px only, added by `D-22` | A subset of the rail's destinations, plus Home | Money. Actions. Any item the rail does not hold |

**The kind separation survives the third carrier intact**, and the wording is exact on purpose: the bar holds destinations and nothing else. Not the balance, not the deposit control, not the account, not the sound toggle. **A control that is not a destination has never belonged in a navigation carrier in this node, and the arrival of a second destination carrier does not create a place for one.**

**This rule is what makes "two menus" rigorous instead of ambiguous**, and it is exactly what the baseline already practises: `baseline.md`, "the header is where money and account live".

**On desktop the product sits inside Material's supported configuration.** The drawer guidance says "**avoid using two navigation components on the same screen**", and a top app bar is not a navigation component in that taxonomy: it is the thing the drawer is opened from. "Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation menu icon." So above 900px the count is one primary navigation component plus one app bar, which is the standard shape.

**On mobile it does not, and that is stated here rather than left for a reader to notice.** `D-22` adds a navigation bar beside a navigation drawer, which is the configuration that sentence forbids by name. **Section 4 carries the conflict, the condition the decision rests on, and its cost.** It is not resolved by reinterpretation.

### The geometry, and why it makes the rule absolute

**The rail runs the full height of the window and the logo sits at the top of it.** The header therefore starts at the rail's right edge rather than spanning the window, and it holds no destination at all, not even a route home. The first draft of this node put the logo in the header and needed the words "except the logo" to keep the rule true. It no longer does, and a rule with no exception is a rule a later stage cannot erode.

**The toggle sits on the junction of the two seams**, straddling the vertical edge of the rail and the horizontal edge of the header. It is anchored there rather than placed in either carrier, so when the rail collapses the toggle tracks its width instead of jumping. This also settles Material's caution structurally rather than by instruction: "avoid using logos that could be mistaken as buttons, don't use a logo as a menu button to expand the navigation rail." Here the logo cannot be mistaken for the toggle, because the toggle is a separate control in a different place.

**One inherited fact does not match, and it is marked rather than overwritten.** `baseline.md` records the baseline header as full width with the logo at `x=5` and the toggle at `x=51`, which is not this geometry. Either the walk captured the collapsed state, or the founder is diverging from the baseline deliberately here. **`[?]`, and the next baseline walk resolves it.** `baseline.md` is not edited from a screenshot: it says what was walked.

---

## 2. Research, all opened in a browser on 11 August 2026

Two sources are new to this rebuild because the component changed. Three are carried from the first version, and what each one now proves is restated, because a source kept for its conclusion after the conclusion moved is decoration.

### Material Design 3, navigation rail guidelines

`https://m3.material.io/components/navigation-rail/guidelines`, opened live with a rendered browser because the page is a JS application and a plain fetch returns only its title.

- "The collapsed nav rail runs along the leading edge of the window, and should contain **3 to 7 navigation items**. **It should not be hidden.**"
- "There are two variants of navigation rails, collapsed and expanded, which can easily transform into each other when the menu button is selected."
- "The expanded navigation rail can be standard or modal, and **should always open from a menu icon**. An expanded rail can reveal secondary destinations not visible when collapsed."
- "A navigation rail should be **the only visible navigation element**."
- "**Compact windows should always use a navigation bar.**"
- "The top of the rail can also be used for a logo, however **avoid using logos that could be mistaken as buttons**. Don't use a logo as a menu button to expand the navigation rail."
- "Use the active indicator only for the current open page." "Don't use the active indicator for more than one navigation item at a time."
- "**All navigation items require a one word label text.**"

### Material Design 3, navigation drawer guidelines

`https://m3.material.io/components/navigation-drawer/guidelines`, opened live on the same date.

- "Navigation drawers are recommended for: apps with **5 or more top-level destinations**; apps with 2 or more levels of navigation hierarchy; quick navigation between unrelated destinations."
- "**Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.** Avoid using two navigation components on the same screen."
- "Navigation bars for compact breakpoints. Navigation rails for medium and expanded breakpoints. Standard navigation drawers for expanded, large and extra-large breakpoints."
- "**Modal navigation drawers use a scrim to block interaction** with the rest of an app's content, and don't affect the screen's layout grid. Modal navigation drawers can be used in any breakpoint, but are **primarily used in compact and medium sizes** where space is limited or prioritized for app content."
- Modal drawers "can be dismissed by: selecting a drawer item; tapping the scrim; **swiping toward the drawer's anchoring edge**".
- "Use **full-width dividers** to separate **groups** of destinations." "**Don't use dividers to separate individual destinations.**"
- "One navigation destination is always active."

### Material Design 3, navigation bar guidelines, carried

`https://m3.material.io/components/navigation-bar/guidelines`, opened live. It has now been used for three different conclusions across three revisions of this node, which is worth stating rather than hiding: it selected the carrier in the first version, it ruled that carrier out in the second, and in the third it sets the floor and the ceiling the mobile bar has to live inside.

- "**Don't use a navigation bar for fewer than three destinations.**"
- "**For products with more than five navigation items, don't use a navigation bar**; the elements may collide and there likely won't be enough space for translated text."

**These two sentences point in opposite directions at two different moments in this product's life.** At round 1's count, three destinations for a guest and four with an account, Material would pick a bar. At the scope this product is locked to, nine rail destinations in the baseline and eight LATER surfaces in `CLAUDE.md`, Material forbids a bar outright. **The primary carrier is therefore built for the destination rather than for the round**, which is why it is the rail. The cost is named in section 3 rather than absorbed.

**`D-22` did not overturn that conclusion, it added a second carrier beside it.** The floor sentence is what the mobile bar has to clear, and it clears it exactly: three destinations before an account.

**Superseded in part on 19 August 2026 by `D-29`.** The rail then carried **one** destination before an account and two after, Cases plus My items, and Provably fair and Responsible play moved to the footer. **The floor sentence became violated rather than cleared:** the bar held Home plus Cases, which is two. `D-29` printed that instead of reinterpreting the quote, and named the two honest ways out without taking either.

**Superseded again on 20 August 2026 by `D-40`, and this time the count is the same in both states.** **My items left the rail**, so the rail carries **one destination, Cases, whether or not there is an account**, and the bar carries **Home and Cases, two, in both states.** The floor is now missed for a signed-in person as well as for a guest. **The way out `D-29` named is unchanged and still not taken**, and this record is bigger than it was: the violation used to apply to one state.

The rest of this section stands as written. The ceiling sentence is the reason the bar can never become the primary carrier: at six destinations Material forbids it and the rail is still legal to seven. **The bar is a shortcut over the model, not the model.**

### Apple Human Interface Guidelines, tab bars, carried

`https://developer.apple.com/design/human-interface-guidelines/tab-bars`, opened live.

- "Use a tab bar to support **navigation, not to provide actions**."
- "**Don't disable or hide tab bar buttons, even when their content is unavailable.**"

The first rule survives every revision of this node and still binds it: it is why the deposit control is not a destination, and it is why Balance never becomes a bar item.

**The second rule was retired by `D-21` and is back in force under `D-22`.** The mobile bar adds a fourth item when an account exists and removes none, ever, which is the shape this rule asks for. It was correct to retire it when nothing we shipped was a tab bar. Something we ship is one again.

### WCAG 2.2, target size, carried

`https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html` and `.../target-size-enhanced.html`, both opened live.

- **2.5.8 Target Size (Minimum), Level AA:** at least **24 by 24 CSS pixels**.
- **2.5.5 Target Size (Enhanced), Level AAA:** at least **44 by 44 CSS pixels**.

**This node takes 44 by 44, the AAA figure, and it is a choice rather than an inheritance.** Nothing obliges an AA product to meet a AAA criterion. Navigation is the one surface every screen carries and the one a person hits while moving. Recorded so that a later stage does not read 44 as a WCAG obligation and apply it everywhere by mistake.

---

## 3. The rail, and how it answers the objection that deferred it

`D-19` rejected the baseline rail on one ground, quoted exactly: "a rail carrying one live item and eight dead ones advertises absence on every screen." **The founder's instruction does not overrule that objection, it removes its subject.** The rail ships with the content round 1 actually has, and every item in it is live. Nothing in it is dead, so nothing in it advertises absence. What `D-19` measured was the baseline's nine item list, not the rail as a component.

### What it carries

Two groups, separated by one full-width divider, per Material's rule that dividers separate groups and never individual items.

| Group | Item | Guest | Account | Leads to |
|---|---|---|---|---|
| **Destinations** | Cases | yes | yes | 3.1 |
| | Provably fair | yes | yes | 1.2 |
| | My items | **no**, `D-40` | **no**, `D-40`. It is in the account menu | 5.1 |
| **Boundary and ambient** | Responsible play | yes | yes | 6.1 |
| | Sound | yes | yes | no destination, `[?]` below |

**Three items for a guest, four with an account.** Material's collapsed rail wants 3 to 7. The guest state clears the floor exactly and the product has room to grow to seven before the component itself is the constraint.

**Responsible play in the rail is an addition to the base layer and it is named rather than absorbed.** The base layer gave it a persistent entry inside the Balance control and a footer link, `sitemap.md` section "Global navigation: the rail's destinations and the job behind each"`, on the argument that a brake which has to be searched for at the worst moment is not a brake. That entry is unchanged. This adds a second one, in the rail's lower group, and it is affordable now for the same reason the rail is: there is space. **Parent:** `B7-4`, pattern of 12, plus the compliance constraint at `CLAUDE.md`, "responsible play tooling". Both legal.

**The logo sits at the top of the rail and routes to 1.0**, which is the baseline's placement, `baseline.md`. It is inside the rail rather than above it: the rail is the full-height carrier and the logo is its first row.

### What is not in it, each with its reason

| Baseline item | Verdict | Why |
|---|---|---|
| Case Battles, Gunfights, Upgrade, Giveaways, Rewards Hub, Top wins, Partnership, Exchange | Not in round 1 | All LATER, `CLAUDE.md`. They enter the rail as they ship. The rail is the carrier designed to receive them, which is the whole point of building it now |
| All Races and the race pot | Not in round 1 | Cluster 8, orphan `8.9`, no parent in the three legal classes |
| The promotional partner tile above the destinations | Cut from round 1 | A paid third party placement. No barrier, no job, no constraint behind it. If it returns it returns as a revenue decision with a named owner, not as inherited furniture |
| The language switcher | Cut permanently | `D-02`, one language, English. `baseline.md` already recorded this divergence |
| The social icon row at the foot of the drawer | Deferred to 0.2 | The footer owns the canonical social set. The drawer may render it, from that one source and never a second list |
| The daily free case, `I2` | Deliberately absent, and this is the interesting one | It is MVP by founder decision and it is the product's only free entry point, so a rail slot is tempting. It is **not a node in `sitemap.md`**: `sitemap.md` section "Global navigation: the rail's destinations and the job behind each"` places it inside the catalogue as an addressable case. The rule this stage applies to the footer applies here too. A carrier may not promise a destination the map does not hold. Either it becomes a node or it stays inside 3.1. **Owed a decision before step 5** |

### The cost of the carrier choice, and what paid it down

On mobile the rail is a modal drawer behind a menu icon, which is the baseline's own behaviour, `baseline.md`. **`D-21` accepted a named cost for that: on mobile, from any screen that is not Home, reaching the catalogue cost two taps rather than one.** That was the price of Material's compact-window advice being declined.

It was affordable for one reason and the reason is checkable: **the main job never routes through the rail.** `CLAUDE.md` fixes the main flow as home, case screen, age gate, open, and `D-20` put the featured case grid on Home directly. Tap 1 is a case tile on Home, tap 2 is the gate, tap 3 is Open. **The three tap budget was untouched by that change**, and it is untouched by this one. The browsing route was already four taps and already not the main-job route, `sitemap.md` section "Global navigation".

**`D-22` paid the cost off rather than re-argued it.** The mobile bar carries Cases in position 2, so from any screen the catalogue is one tap again. **This is the founder answering a cost the previous decision wrote down**, which is the whole reason `D-21` was required to write it down.

---

## 4. The mobile bar, and the rule it rests on

**Added by founder decision `D-22` on 11 August 2026**, one step after `D-21` removed it. That is not a reversal out of nowhere: section 3 records the cost `D-21` accepted in writing, two taps to the catalogue from any screen that is not Home, and **the bar removes exactly that cost.** The founder is answering a cost the previous decision named.

### The conflict, stated rather than buried

Material's navigation drawer guidance, quoted in full in section 2 and opened live on 11 August 2026:

> "**Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.** Avoid using two navigation components on the same screen."

That is an explicit "don't", it names this exact configuration, and **this decision declines it.** Material does not permit what we are building on mobile. The quote stays in section 2 unedited, and no reading of it makes the two compatible. What follows is the condition that makes the decision defensible, not an argument that the guideline allows it.

### The condition the decision rests on

**The bar is a shortcut layer over the rail, never a second navigation model.** The rule that carries the whole weight:

> **Every item in the bar also exists in the rail, and the rail is always a superset.**

Two disjoint sets would be two competing menus, which is the ambiguity Material's sentence exists to prevent: a person who found something in one place and not the other cannot tell which list is the product. One complete list plus one shortcut set drawn from it is a different object. There is one navigation model and two ways into it.

**If a later stage puts an item in the bar that the rail does not hold, the model is broken rather than extended**, and this node has been violated. That is the acceptance test, and it is checkable by reading two lists.

**The superset holds literally rather than nearly, and the logo is why.** The drawer's first row is the logo and the logo routes to 1.0, so Home is in the rail as well as in the bar. Section 9 records that the logo moved back into the drawer for this reason among others.

**And the superset is about labels as much as about hrefs: one destination carries one label in every carrier.** The first draft of the bar shortened Provably fair to "Fairness" to meet Material's "all navigation items require a one word label text". Two labels for one destination, rendered on the same 360px screen in the bar and in the drawer, is the superset rule failing where a person actually reads it. **The bar says Provably fair.** Material's one-word preference loses here to a rule this node already carries: the word "provably" is what holds design principle 1 and the `D-14` limit, and "My items" is already two words in the same bar, so the preference was being bent one item along regardless.

### What the bar carries

| Position | Item | Guest | Account | Leads to |
|---|---|---|---|---|
| 1 | Home | yes | yes | 1.0 |
| 2 | Cases | yes | yes | 3.1 |
| 3 | Provably fair | yes | yes | 1.2 |
| 4 | My items | **no**, `D-40` | **no**, `D-40`. It is in the account menu | 5.1 |

**Three before an account, four after.** **Two and three since `D-29`, which is below the floor and is printed as a violation in that record.** Three used to clear Material's own floor exactly: "Don't use a navigation bar for fewer than three destinations." Four sits well inside its ceiling of five.

**Positions 1 to 3 never move and nothing is ever removed.** Exactly one slot is added, and it is added at the moment the person creates the thing it describes. That answers Apple's stability rule rather than arguing with it: "Don't disable or hide tab bar buttons, even when their content is unavailable." Section 2 records that this rule had been retired by `D-21` and is now back in force.

**Provably fair holds position 3 in both states.** Same structural claim the rail makes, on the same parents: `jtbd.md` Section 3, Emotional and Social Jobs names a public provably fair surface as one of three things no competitor offers pre-login, and design principle 1 says trust is the product. It carries the `D-14` limit with it: its position is not a claim that a verifier converts a sceptic.

**Balance stays out of the bar in both states.** Unchanged from `D-21`, and two reasons point the same way. Apple: "Use a tab bar to support navigation, not to provide actions." Design principle 3 at `CLAUDE.md`: cost never hides inside excitement, and making money a permanent navigation destination is the mechanism by which spending stops being a decision and becomes a place you go. **The money stays in the header.**

### The honest cost of carrying both, named rather than defended

In round 1 the rail holds three or four destinations and the bar holds three or four of the same ones. **So in round 1 the drawer's unique contribution is thin.** What it adds over the bar is Responsible play, the sound control and the logo row, and little else. Two carriers holding nearly the same list is redundancy at this size, and calling it anything else would be dressing it up.

**What makes it a cost paid for a reason rather than an oversight is the roadmap.** `CLAUDE.md` lists eight LATER surfaces. Material's bar ceiling is five and the rail's is seven, so the bar runs out first and the drawer is what absorbs the modes as they ship. The founder is choosing to carry both from day one so that the mobile shortcut exists immediately **and** the drawer is already in place to receive the modes, rather than introducing it later as a change of navigation model in front of people who already learned one.

**It stops being redundancy at the fifth destination.** That is inside this product's own roadmap, not a hypothetical.

### Behaviour

| Aspect | Rule | Why |
|---|---|---|
| **Scroll** | The bar does not hide and does not condense | The same reasoning the header and the rail already carry: hiding navigation to buy pixels costs orientation on the one surface that provides it |
| **Drawer open** | The bar sits behind the scrim with the rest of the content and is not raised above it | Material: a modal drawer "uses a scrim to block interaction with the rest of an app's content". A navigation bar left live above the scrim is content the scrim failed to block |
| **Labels** | Never removed, at any width or in any state | Material: "All navigation items require a one word label text." The collapsed rail is the only place in this node where a label may be absent, and the bar is not it |
| **Targets** | At least 44 by 44 CSS pixels | The node's AAA choice, unchanged and applied here too |
| **Active item** | Exactly one item is active **across the bar and the drawer together**, never one in each | Material: "Don't use the active indicator for more than one navigation item at a time." Two carriers rendering overlapping lists makes this the single easiest thing in this node to ship wrong |
| **Desktop** | The bar does not exist above 900px | The rail is beside the content at that width and a shortcut has nothing to shorten |

---

## 5. The header, and the two figures

### Guest

Left to right: rail toggle, logo, then the right group: **Sign in**, routing to 2.4, and the sound control.

**The slot the baseline fills with the race pot stays empty.** `baseline.md` records that pre-login there is no balance widget at all and that a promotion occupies its place. That promotion is `8.9` and has no parent. Nothing is invented to fill the gap.

### Account exists

This is the state the founder specified. Left to right: rail toggle, logo, then the right group: the account control, the **two figures**, the **deposit control**, and the sound control.

| Element | What it shows | Leads to |
|---|---|---|
| Account control | Avatar and display name, and **it opens the account menu** rather than navigating on its own | the menu, whose first item is 5.1 |
| **Balance**, upper figure | Spendable funds, in coins, `D-28` | 4.1 |
| **Value of items held**, lower figure | Current market value of the skins on the account, in coins, `D-28` | 5.1 |
| Deposit control | A single add control beside the figures | 4.1 |
| Responsible play, inside the money control | Persistent, unchanged from `D-19` | 6.1 |

**The two figures are one stacked block and not a row, and that has been this node's word since it was written.** Upper and lower are structural, not decorative: the state matrix says "two lines" on desktop and "one line each" on mobile. Stage 04 drew them side by side with a vertical hairline between them and had to be corrected on 19 August 2026 against the founder's own baseline capture, which stacks them.

**What replaces the hairline as the thing that stops them being added by eye.** The rule they carry is rule 2 below, never summed and never a total, and a vertical rule was one way to enforce it. Stacked, the separation is carried by weight and by caption instead: **the balance is the larger figure and the value of items held is smaller and dimmer, and each keeps its own caption on its own line.** Two figures of equal weight in a column is a receipt, which is the one reading this zone may not produce.

### The account menu, added 19 August 2026 by founder decision

**The account control opens a menu instead of navigating.** The baseline does this and the founder specified it from the baseline capture: avatar and display name, and the menu opens under them. The control keeps its accessible name and its route target as the menu's first item, so nothing that was reachable becomes unreachable.

| Row | Node | Parent |
|---|---|---|
| **My items** | 5.1 | Related Job 5, and the inventory row `B7` at `cjm-to-be.md` |
| **Roll history** | 5.9 | `F3` and Related Job 3, verify the outcome after I open. **Added by `D-36`** |
| **Withdrawals** | 5.3 | `G1`, named states with a per-state clock |
| **Profile** | 5.10 | **None. Founder decision `D-36`, and the empty cell is printed rather than filled** |
| **Settings** | 5.11 | **None yet. What it holds in round 1 is `[?]`**, `D-36` |
| **Responsible play** | 6.1 | The compliance constraint at `CLAUDE.md`, "responsible play tooling", plus this node's own requirement that the entry is persistent |
| **Sign out** | none. It is a control rather than a destination | The account state itself |

**Seven rows since 20 August 2026, and the count changed because the map changed rather than because the menu did.** Until that date this section carried four rows and refused PROFILE and SETTINGS on a stated argument: no node in the map held either, and `CLAUDE.md`'s rule is that a carrier is inherited and filled with live items while only a dead item is deferred, so a row for a page nobody has specified is the dead item defect inside a menu.

**That argument was answered rather than overruled, and it is worth being exact about which.** The rule points at the gap without saying which side closes it. **The founder closed it on the map's side:** Profile, Settings and Roll history became nodes `5.10`, `5.11` and `5.9`, so the rows are live items now and the menu is filled with what exists, exactly as the rule requires. `docs/decisions.md` `D-36`.

**What travelled with them is the price.** Two of the three have **no parent in the three legal classes** and say so in their own rows above and on the map. **Roll history is the one that arrived with a real parent**, `F3`, and it also inherits a real dependency: `D-C` decides whether roll history is retained per roll in a publishable form at all.

**One sentence in the row above was also wrong and is corrected rather than left.** The Withdrawals row read "this is the record, and the map has no separate history node". **The map has one now**, and the two are different records: withdrawals are what left, rolls are what happened.

**Responsible play is now in three carriers and that is deliberate rather than sloppy.** The footer column since `D-29`, the entry inside the money control, and this menu. Each answers a different moment: the footer is where a person reading the site finds it, the money control is where a person about to spend meets it, and the menu is where a person managing their account looks for it. **A brake that has to be searched for at the worst moment is not a brake**, which is the base layer's own sentence.

**And since `D-40` the menu is the only place My items lives.** It was in the rail as well, and the rule this node opens with is that **no carrier holds another's kind**: My items is an account thing and the header owns the account. **The rail did not lose a destination, it stopped holding one twice.** What that costs is one extra tap from a case screen to the inventory on desktop, and it is the reason the rail is now identical in both states.

**Hover is not the only way in, and this is an accessibility limit rather than a preference.** The founder's reference opens the menu on hover. Hover alone excludes touch entirely and the keyboard almost entirely, so the control opens on hover, on click and on Enter or Space, and closes on Escape, on a click outside and when focus leaves. `WCAG 2.2` is already carried by this node in section 2 for target size; the same section is why a hover-only disclosure does not ship.

**No badge on the deposit control, and the reference shows exactly the badge being refused.** The baseline capture carries a green 5 percent on its add control. Rule 4 below blocks it behind a named model with a named owner. The **shape** is taken, a single compact add control beside the figures; the promotion welded onto it is not.

### Four rules the two figures carry, and every one of them is derived rather than styled

**1. Both figures are in coins, and neither is a coin nobody can price.** **Rewritten on 19 August 2026 by `D-28`**, which reversed `C1`. The old rule read "one real currency throughout, no internal coin denomination anywhere" and called the baseline's branded coin glyph the single hardest divergence in this node. **The founder took the coin, and the decision record prints what that cost: `C1` was the whole structural answer to `B7-1`, a pattern of 7.**

**What the header owes instead is the peg, and the header is not where it goes.** `0.11` rule 10 puts the peg wherever money is spent, and the header is a persistent carrier rather than a spend moment: a conversion rate in a bar that is on screen at all times is wallpaper, and by the time it matters nobody reads it. **So the two figures carry the coin and their unit, and the peg lives on `4.1`, on `3.3` and on the withdrawal record**, which are the three places money actually moves. A header figure that carried the peg would also be the fourth number in a zone this node holds to two.

**2. The two figures are never summed and never presented as a total.** They are different kinds. The upper one is spendable now. The lower one is an estimate of what a set of objects would fetch, and the only exit for those objects in round 1 is withdrawal to Steam, `cjm-to-be.md` "T7. The outcome". A combined number would read as net worth, which is a claim the product cannot honour, and it would sit one line above a deposit control.

**3. The lower figure is labelled as a current market value and never as profit, gain or growth.** It moves without the person acting, because skin prices move. A figure that can fall is honest only if it never claimed to be a score. **Parent:** design principle 1 as limited by `D-14`, "what answers the doubt people actually record is published chance, **current value** and tested RTP", plus row `B7` at `cjm-to-be.md` "2. Registration, account, age, geography", the account and inventory with each item carrying its receipt. The header figure is the sum of those receipts and must reconcile with 5.1 exactly.

**4. No percentage badge on the deposit control in round 1.** The baseline runs a green 5 percent badge on its add control. `cjm-to-be.md` "Cut at this step" cuts **any** first-deposit bonus in round 1, including the zero-wagering variant, because `aarrr.md` "MVP product decision" requires case mathematics to be modelled before any bonus is designed and that model does not exist. The control ships without the badge. The badge is not forbidden forever, it is blocked behind a named model with a named owner.

**A fifth thing this node refuses on its own.** No counter, no streak, no progress bar and no session score appears anywhere in either carrier. `CLAUDE.md` binds this stage: a limit that acquires completion mechanics stops being a boundary. Two live money figures in a persistent header is exactly where that pressure arrives.

---

## 6. State matrix

Rows are zones. Columns are account state by width. A cell says what is shown.

| Zone | Guest, desktop | Guest, mobile | Account, desktop | Account, mobile |
|---|---|---|---|---|
| **Rail** | Standard, beside content. **Cases**, and the foot: sound, language, social | Modal drawer behind the menu icon, same items | **Cases. Identical to the guest rail since `D-40`** | Modal drawer, same one plus the same foot |
| **Mobile bar** | Does not exist at this width | **Home, Cases.** Two, below Material's floor since `D-29`, printed as a violation there | Does not exist at this width | **The same two since `D-40`.** The bar no longer changes with the account at all |
| **Brand and home** | Logo at the top of the rail, routes to 1.0 | **Logo is the drawer's first row.** The persistent route home is bar item 1 | Same | Same |
| **Rail toggle** | On the junction of the two seams. Collapses to icons | Header, leading edge. Opens the modal drawer | Same | Same |
| **Money** | Nothing. There is no balance before an account | Nothing | Balance and value of items held, two lines, with the deposit control | Both figures, condensed to one line each, deposit control kept |
| **Account** | Sign in, routes to 2.4 | Sign in, routes to 2.4 | Avatar and name, routes to 5.1 | Avatar only, routes to 5.1 |
| **Boundary** | Rail entry only. Nothing to limit yet | Rail entry only | Rail entry plus the entry inside the money control | Same |
| **Ambient**, at the foot of the rail since `D-29`, never in the header | Sound control, language, social links. Ticker 0.8 on 1.0 only since `D-31` | **No sound control at this width**, answered by stage 04 on 18 August 2026: the one row rule in section 9 does not fit menu plus two figures plus deposit plus avatar plus sound at 360px, and the baseline makes the same cut at 390px. The ticker is unchanged | Same as guest desktop | **Same cut.** The control that matters during a reveal belongs to `3.5`, on the screen where the sound plays |

**No role dimension.** One user role in round 1. No operator, moderator or seller view is in scope, so the matrix has two account states and nothing else. Stated so that a later stage does not read the absence as an oversight.

### Transient states

| State | What the navigation does | Why |
|---|---|---|
| **Rail collapsed** | Icons with the active indicator, labels gone, tooltips on hover and on focus | Material: collapsed and expanded transform into each other from the menu button. The collapsed rail is never hidden on desktop |
| **Drawer open**, mobile | Scrim blocks the content behind. Dismissed by selecting an item, tapping the scrim, or swiping toward the left edge. **The bar sits behind the scrim with the content and is not raised above it** | Material's modal drawer contract, all three dismissals, quoted in section 2. A bar left live above the scrim is content the scrim failed to block |
| **Scrolled** | Header stays fixed. The rail stays. The mobile bar stays. None of the three condenses or hides | Hiding navigation to buy pixels costs orientation on the one surface that provides it |
| **Balance crediting**, `C3` | The figure carries a named timer beside it rather than a spinner, and does not silently change | Deposit node 4.4 owns the timer, the navigation renders the state |
| **Item value stale or unavailable** | The lower figure states that it is stale with its timestamp. It never renders a stale number as current, and never renders zero for unknown | Rule 3 above. `[?]` is a legal value in this project and a wrong number is not |
| **Boundary in force**, `6.3` | The money control opens to the limits rather than to add funds. Both figures stay visible, the deposit route closes, the withdrawal route stays open | `flows.md` flow 2a: a boundary stops money going in and never traps what the person already holds |
| **Ceiling reached**, `4.2` | Same, and no counter, no progress bar, no streak and no session score appears anywhere | `CLAUDE.md`. This binds this node too |
| **Gate open**, `2.1` | Every carrier is inert behind the gate layer and none is removed | Removing them would make the gate feel like an ejection rather than a check |
| **Steam unavailable**, `2.6` | Sign in stays present and states the failure on 2.4 | Reading the product stays open for a person who cannot sign in |

---

## 7. Anatomy

| Element | Behaviour | Leads to |
|---|---|---|
| Logo | Top of the rail on desktop, and the drawer's first row on mobile. Always the route home, never the control that expands the rail | 1.0 |
| Rail toggle | Anchored to the junction of the two seams and tracks the rail's width. Desktop: collapse to icons and back, and the choice persists. Mobile: leading edge of the header, opens the modal drawer | current node |
| Mobile bar, below 900px only | Positions fixed, destinations only, never money and never an action. **`D-29` took it to Home and Cases rising to three with My items, and `D-40` removed the third**, so it is two in both states and does not change on sign in | 1.0, 3.1 |
| Home, mobile bar only | Position 1, active on arrival. **The only persistent route home at 360px** | 1.0 |
| Cases | Enters the catalogue, not a case | 3.1 |
| Provably fair | Public, works with no account. **Superseded by `D-29`:** it left the rail for its own footer column, and the claim below about holding its rail position in both states is what that decision cost | 1.2 |
| My items | **Removed from both carriers by `D-40`.** It is the first row of the account menu, section 5, and the header owns the account | 5.1, from the menu |
| Responsible play | **Superseded by `D-29`.** It left the rail on 19 August 2026 and is now carried by the footer column, by the entry inside the money control, and by the account menu | 6.1 |
| Sound | Toggle only. Not a destination and never in the destination group | none |
| Sign in, guest only | A single control in the header | 2.4 |
| Account control, account only | Avatar and name. **Opens the account menu**, four rows, section 5 | the menu, then 5.1 |
| Balance figure, account only | Spendable funds, in coins | 4.1 |
| Value of items held, account only | Current market value in coins, timestamped when stale | 5.1 |
| Deposit control, account only | One add control. No badge in round 1 | 4.1 |
| Active indicator | Exactly one destination is active at any time, **across the rail, the drawer and the mobile bar together**, never one in each | current node |

**Provably fair holds its rail position in both states, and that is the structural claim of this node.** `jtbd.md` Section 3, Emotional and Social Jobs names a public provably fair surface as one of three things no competitor offers pre-login, and `baseline.md` verified that our own baseline still redirects that route to login and demotes it to a footer link, `baseline.md`. Design principle 1 says trust is the product. Letting the item slide down or out when the account arrives would say the proof was a sales argument. It carries the `D-14` limit with it: its position is not a claim that a verifier converts a sceptic.

---

## 8. SEO and accessibility

**This node carries no H1.** A global element is not a page and never owns the document heading. Every node that renders it supplies its own single H1.

**It is the product's main internal linking plane.** Every destination is a crawlable `<a>` with a real href, never a script handler, so the global routes are reachable by a crawler from every page. The footer, node 0.2, is the second plane and carries the long tail.

**The mobile bar renders four of those hrefs a second time in the same document, and that is fine as long as it is the same set.** Duplicate internal links between a header and a footer are ordinary and cost nothing. What would cost something is a **different** set: a bar pointing somewhere the rail does not, which is the superset rule in section 4 stated as an SEO consequence rather than a navigation one.

**The mobile drawer is a display concern and never a crawl concern.** The rail's links are present in the markup at every width, and the menu icon toggles their visibility rather than their existence. A drawer that renders its links only after a click hides the product's main linking plane from a crawler, which is the standard way this pattern is shipped wrong.

**Nothing here is indexed as its own URL.** The navigation has no route of its own. Nodes it links into carry their own indexation rules, and **node `0.13` owns them**: 1.0, 1.2, 3.1 and 6.1 are indexed, and 2.4, 2.7, 4.1, 5.1, 5.3 and **7.1** are noindex. **Corrected by the step 8 audit:** this line previously listed 7.1 as indexed, which contradicted the register that decides it.

**Accessibility, and every line is a requirement rather than an aspiration.**

- Semantics: `<nav>` on the rail with an accessible name, and a second `<nav>` with its own name on the mobile bar. The header is `<header>` and carries no `<nav>` at all, because it holds no destination. **Below 900px the page has two navigation landmarks and both must be named**, since a screen reader listing two unnamed ones tells a person nothing about which is which
- `aria-current="page"` on the active destination, **on exactly one element in the whole document**. When the same destination appears in the bar and in the drawer, only one of the two carries it, and the drawer is closed while the bar is visible, so the bar carries it. Material's "one destination is always active" is a visual statement; this is the same statement for a screen reader
- The modal drawer traps focus while open, returns focus to the menu icon on close, closes on Escape, and the menu icon carries `aria-expanded`. Material names three dismissals and a keyboard user gets a fourth
- Every target at least **44 by 44 CSS pixels**, WCAG 2.5.5 AAA, chosen deliberately as recorded above
- **Labels are never removed except in the collapsed rail variant**, where Material sanctions icon-only presentation and the expanded variant is one control away. Labels are one word, per Material's explicit requirement
- Both money figures announce as text with their unit, never as an image or a background, so a crediting or stale state is readable rather than merely visible. **The unit is the coin, `D-28`, and it is a word rather than a glyph:** a branded coin mark read aloud is a brand name where a unit should be
- The scrim is not the only affordance: the drawer is dismissible by keyboard and by an explicit close control, because a scrim is invisible to a screen reader user

**No breadcrumbs in this node.** They belong to nodes with a parent to point at, 3.3 under 3.1. A global element cannot know where it is. **Corrected by the step 8 audit:** this line previously gave 7.1 a breadcrumb under 1.2, which `0.13` does not, and a result is not a child of the verifier.

---

## 9. Adaptive behaviour

**Mobile is the base, 360px.** One header row: menu icon, then the money and account zone, **and no sound control since `D-29` moved it to the foot of the rail**. A bottom bar with **two destinations before an account and three after**, `D-29`. The rail is a modal drawer, closed by default, its first row is the logo, and its foot carries the sound control, the language and the social links.

**The order inside the foot is a rule, not a layout preference.** The ambient pair sits **above** the social row: sound and language are controls of the session in progress, the social links are an **exit from the product**, and a control used inside does not sit below a link that leads out. On mobile the drawer scrolls, so the lowest row is the hardest to reach and belongs to what is needed least. **The pair shares one strip but not one affordance:** the sound control is a button, the language is a label with no border and no press state, because one language is locked and there is nothing to pick.

**The logo leaves the mobile header, which reverses `D-21`, and `D-21` supplies the reason.** It was moved into the header for exactly one stated reason: the rail sits behind a menu icon and a route home may not. **Bar item 1 is now that route**, permanently visible, labelled, and never removed in either state. The reason has been met by a better carrier, so keeping the logo in the header as well would be two controls doing one job on the narrowest width the product supports. **It also returns the mobile header to the baseline's own composition:** `baseline.md` records that the baseline's mobile header keeps the hamburger, the money slot and the account control, and carries no logo. The brand mark is one tap away at the top of the drawer, where the rail keeps it at every other width.

**The two figures survive at 360px**, which is the width this node was reasoned from rather than checked against afterwards: they are the reason the header's right group is designed before its left one. Measured in the mockup before the logo was removed, the whole mobile header group needed 298px and still left a 77px flexible gap. Removing the logo mark returns roughly 31px of that budget.

**Desktop, from 900px.** Rail at the full height of the window, logo at its top, expanded by default with labels, collapsible to icons and the choice persists. The header starts at the rail's edge and holds only the money and account group. The toggle is on the seam between them.

**Between the two,** the drawer becomes standard rather than modal and the bar disappears. **No destination is added or removed at any breakpoint, only the carrier that presents it changes.** A person who resizes a window loses a bar and keeps every route, because everything the bar held is in the rail by the superset rule.

**Expanded by default on desktop is a decision, not a default.** Material allows either. With three or four items there is no space pressure, labels are the cheapest thing a navigation can carry, and the collapsed variant exists for a person who wants the width back.

**Growth is bounded, the bound is written now, and the two carriers hit it at different places.** Material's collapsed rail tops out at seven and its bar at five. Round 1 uses three or four in both, so five of the eight LATER destinations fit in the rail before the component is the constraint, and **the bar runs out two destinations earlier**. At eight the rail needs section labels and a scroll, which is what the baseline does at nine.

**So the bar is the first carrier to stop growing, and it is supposed to.** It is a shortcut set, not the list. Whichever round ships the fifth destination decides which of them earns the bar's slots, and it decides that against the primary persona rather than by adding a slot. **That is a real ceiling and it arrives inside this product's own roadmap**, so it is handed forward rather than discovered there.

---

## 10. Open, carried, and what this node does not decide

**Two items are open and both are named rather than filled with a median.**

| Open item | What is missing | Owner and when |
|---|---|---|
| **The sound control** | It is in the baseline header and drawer, `baseline.md`, and dropped by the baseline itself at 390px, `baseline.md`. It has **no parent in any of the three legal classes**. Design principle 2 covers motion, not audio, and no backlog row mentions sound. It is drawn here because the reveal has audio and a person needs to be able to stop it, which is an argument this stage cannot ratify on its own | Founder, before stage 04. It ships with a stated parent or it does not ship |
| **The daily free case, `I2`, in the rail** | It is MVP and it is the only free entry point, but it is not a node in `sitemap.md`. A carrier may not promise a destination the map does not hold | This stage, before step 5. Either it becomes a node or it stays inside 3.1 |

**What this node does not decide.**

**Block composition of any page.** This node is the shell. What sits inside a page comes from the block bank at step 4 and from nothing else.

**Visual treatment.** The mockups are wireframe level and monochrome. Icon style, rail width in pixels, the treatment of the two figures and motion on the active indicator are stage 06, 07 and 11.

**Icon set.** Which glyph carries which destination is a stage 07 decision. This node fixes that there are icons **and** labels, and that the collapsed variant is the only place a label may be absent.

**Microcopy.** The labels here are single words, held to Material's "all navigation items require a one word label text". "Value of items held" is a description of the figure and not its final label. Stage 05 owns the final strings and syncs them back into this file.
