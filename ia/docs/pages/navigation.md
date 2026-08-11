# Node 0.1. Navigation

**Type:** global element. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Carry the product's destinations, its money figures and its account control on every screen, in two account states and at two widths, in the two carrier model the baseline runs, without ever advertising a destination that does not exist yet.

**Jobs served.** No job of its own: a global element is a carrier. It is the surface on which Main Job `jtbd.md:17` reaches the case grid, on which Related Job 1 `jtbd.md:33` and Related Job 3 `jtbd.md:51` reach the public provably fair page, on which Related Job 5 `jtbd.md:69` reaches inventory, and on which the compliance constraint in `CLAUDE.md`, responsible play tooling, gets its persistent entry. **Parent class:** design principle 1 for the provably fair item, design principle 1 as limited by `D-14` for the value figure, the compliance constraint for the boundary entry. All three are legal parents under the three class rule.

**Sitemap transitions:** 1.0, 1.2, 2.4, 3.1, 4.1, 5.1, 6.1.

---

## 0. This node was rebuilt on 11 August 2026, and the reason is worth more than the node

The first version of 0.1 shipped a **bottom tab bar** on mobile and a single header row on desktop. The founder rejected it, supplied three screenshots of the baseline's own navigation, and named the model: two menus, filled with round 1 content, with the header changing on login and carrying two money figures.

**The founder is right, and the failure was structural rather than a matter of taste.** `CLAUDE.md:25` lists the **navigation model** first among the things inherited "deliberately close to identical". The first version replaced that model with a different one, and the justification was a component guideline about navigation bars. **A component guideline can tell you how to build a component well. It cannot tell you which component to build.** The research was sound and the conclusion it was used for was outside what it could support. That is the class, and it is recorded in `D-21` so that a later stage does not repeat it on a different component.

What survives from the first version is listed rather than quietly reused: the three sources, the 44 by 44 target decision, the Provably fair position argument, and the transient state table. What is deleted is the tab bar, the "Home as tab 1" resolution and the claim that round 1 ships no drawer.

---

## 1. The model: two carriers, and neither one holds the other's kind

The baseline runs **three** carriers that do not overlap, `baseline.md:48`: the left icon rail, the header, the footer. The footer is node 0.2. This node owns the first two.

| Carrier | Owns | Never holds |
|---|---|---|
| **The rail**, full height at the leading edge, collapsible | The logo at its top, every destination, and its own toggle on the seam | Money. Actions. The account control |
| **The header**, starting at the rail's edge | Money, the account control, and ambient controls | **Any destination at all.** No exception, not even the logo |

**This rule is what makes "two menus" rigorous instead of ambiguous**, and it is exactly what the baseline already practises: `baseline.md:78`, "the header is where money and account live". It also lands the product on Material's supported configuration rather than beside it. Material's navigation drawer guidance says "**avoid using two navigation components on the same screen**", and a top app bar is not a navigation component in that taxonomy: it is the thing the drawer is opened from. "Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation menu icon."

So the count is one primary navigation component plus one app bar, which is the standard shape, and the founder's "two menus" is the correct reading of it.

### The geometry, and why it makes the rule absolute

**The rail runs the full height of the window and the logo sits at the top of it.** The header therefore starts at the rail's right edge rather than spanning the window, and it holds no destination at all, not even a route home. The first draft of this node put the logo in the header and needed the words "except the logo" to keep the rule true. It no longer does, and a rule with no exception is a rule a later stage cannot erode.

**The toggle sits on the junction of the two seams**, straddling the vertical edge of the rail and the horizontal edge of the header. It is anchored there rather than placed in either carrier, so when the rail collapses the toggle tracks its width instead of jumping. This also settles Material's caution structurally rather than by instruction: "avoid using logos that could be mistaken as buttons, don't use a logo as a menu button to expand the navigation rail." Here the logo cannot be mistaken for the toggle, because the toggle is a separate control in a different place.

**One inherited fact does not match, and it is marked rather than overwritten.** `baseline.md:70` records the baseline header as full width with the logo at `x=5` and the toggle at `x=51`, which is not this geometry. Either the walk captured the collapsed state, or the founder is diverging from the baseline deliberately here. **`[?]`, and the next baseline walk resolves it.** `baseline.md` is not edited from a screenshot: it says what was walked.

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

`https://m3.material.io/components/navigation-bar/guidelines`, opened live. What it now proves is the opposite of what the first version used it for.

- "**Don't use a navigation bar for fewer than three destinations.**"
- "**For products with more than five navigation items, don't use a navigation bar**; the elements may collide and there likely won't be enough space for translated text."

**These two sentences are the whole argument for the carrier, and they point in opposite directions at two different moments in this product's life.** At round 1's count, three destinations for a guest and four with an account, Material would pick a bar. At the scope this product is locked to, nine rail destinations in the baseline and eight LATER modes and surfaces in `CLAUDE.md:41`, Material forbids a bar outright. **The carrier is built for the destination rather than for the round.** The cost is named in section 3 rather than absorbed.

### Apple Human Interface Guidelines, tab bars, carried

`https://developer.apple.com/design/human-interface-guidelines/tab-bars`, opened live.

- "Use a tab bar to support **navigation, not to provide actions**."
- "**Don't disable or hide tab bar buttons, even when their content is unavailable.**"

The first rule survives the carrier change intact and still binds this node: it is why the deposit control is not a destination. The second rule was the first version's main lever and no longer applies to anything we ship.

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
| | My items | no | yes | 5.1 |
| **Boundary and ambient** | Responsible play | yes | yes | 6.1 |
| | Sound | yes | yes | no destination, `[?]` below |

**Three items for a guest, four with an account.** Material's collapsed rail wants 3 to 7. The guest state clears the floor exactly and the product has room to grow to seven before the component itself is the constraint.

**Responsible play in the rail is an addition to the base layer and it is named rather than absorbed.** The base layer gave it a persistent entry inside the Balance control and a footer link, `sitemap.md:553`, on the argument that a brake which has to be searched for at the worst moment is not a brake. That entry is unchanged. This adds a second one, in the rail's lower group, and it is affordable now for the same reason the rail is: there is space. **Parent:** `B7-4`, pattern of 12, plus the compliance constraint at `CLAUDE.md:58`, "responsible play tooling". Both legal.

**The logo sits at the top of the rail and routes to 1.0**, which is the baseline's placement, `baseline.md:64`. It is inside the rail rather than above it: the rail is the full-height carrier and the logo is its first row.

### What is not in it, each with its reason

| Baseline item | Verdict | Why |
|---|---|---|
| Case Battles, Gunfights, Upgrade, Giveaways, Rewards Hub, Top wins, Partnership, Exchange | Not in round 1 | All LATER, `CLAUDE.md:41`. They enter the rail as they ship. The rail is the carrier designed to receive them, which is the whole point of building it now |
| All Races and the race pot | Not in round 1 | Cluster 8, orphan `8.9`, no parent in the three legal classes |
| The promotional partner tile above the destinations | Cut from round 1 | A paid third party placement. No barrier, no job, no constraint behind it. If it returns it returns as a revenue decision with a named owner, not as inherited furniture |
| The language switcher | Cut permanently | `D-02`, one language, English. `baseline.md:80` already recorded this divergence |
| The social icon row at the foot of the drawer | Deferred to 0.2 | The footer owns the canonical social set. The drawer may render it, from that one source and never a second list |
| The daily free case, `I2` | Deliberately absent, and this is the interesting one | It is MVP by founder decision and it is the product's only free entry point, so a rail slot is tempting. It is **not a node in `sitemap.md`**: `sitemap.md:537` places it inside the catalogue as an addressable case. The rule this stage applies to the footer applies here too. A carrier may not promise a destination the map does not hold. Either it becomes a node or it stays inside 3.1. **Owed a decision before step 5** |

### The cost of the carrier choice, stated rather than defended

On mobile the rail is a modal drawer behind a menu icon, which is the baseline's own behaviour, `baseline.md:90`. **So on mobile, from any screen that is not Home, reaching the catalogue costs two taps rather than one.** That is the price of Material's compact-window advice being declined.

It is affordable for one reason and the reason is checkable: **the main job never routes through the rail.** `CLAUDE.md:51` fixes the main flow as home, case screen, age gate, open, and `D-20` put the featured case grid on Home directly. Tap 1 is a case tile on Home, tap 2 is the gate, tap 3 is Open. **The three tap budget is untouched by this change.** The browsing route was already four taps and already not the main-job route, `sitemap.md:533`.

---

## 4. The header, and the two figures

### Guest

Left to right: rail toggle, logo, then the right group: **Sign in**, routing to 2.4, and the sound control.

**The slot the baseline fills with the race pot stays empty.** `baseline.md:78` records that pre-login there is no balance widget at all and that a promotion occupies its place. That promotion is `8.9` and has no parent. Nothing is invented to fill the gap.

### Account exists

This is the state the founder specified. Left to right: rail toggle, logo, then the right group: the account control, the **two figures**, the **deposit control**, and the sound control.

| Element | What it shows | Leads to |
|---|---|---|
| Account control | Avatar and display name | 5.1 |
| **Balance**, upper figure | Spendable funds, in real currency | 4.1 |
| **Value of items held**, lower figure | Current market value of the skins on the account, in real currency | 5.1 |
| Deposit control | A single add control beside the figures | 4.1 |
| Responsible play, inside the money control | Persistent, unchanged from `D-19` | 6.1 |

### Four rules the two figures carry, and every one of them is derived rather than styled

**1. Both figures are in real currency and neither wears a coin.** `cjm-to-be.md:208`, row `C1`: "one real currency throughout, no internal coin denomination anywhere", MVP and architecture, with the acceptance rule "no number renders anywhere without a currency mark". The baseline shows both of its figures against a branded coin glyph. **That glyph cannot cross.** This is the single hardest divergence in this node and it is not negotiable at IA level, because `C1` exists to make `B7-1` impossible: a payout cannot wear a label that is not a price.

**2. The two figures are never summed and never presented as a total.** They are different kinds. The upper one is spendable now. The lower one is an estimate of what a set of objects would fetch, and the only exit for those objects in round 1 is withdrawal to Steam, `cjm-to-be.md:105`. A combined number would read as net worth, which is a claim the product cannot honour, and it would sit one line above a deposit control.

**3. The lower figure is labelled as a current market value and never as profit, gain or growth.** It moves without the person acting, because skin prices move. A figure that can fall is honest only if it never claimed to be a score. **Parent:** design principle 1 as limited by `D-14`, "what answers the doubt people actually record is published chance, **current value** and tested RTP", plus row `B7` at `cjm-to-be.md:202`, the account and inventory with each item carrying its receipt. The header figure is the sum of those receipts and must reconcile with 5.1 exactly.

**4. No percentage badge on the deposit control in round 1.** The baseline runs a green 5 percent badge on its add control. `cjm-to-be.md:282` cuts **any** first-deposit bonus in round 1, including the zero-wagering variant, because `aarrr.md:224` requires case mathematics to be modelled before any bonus is designed and that model does not exist. The control ships without the badge. The badge is not forbidden forever, it is blocked behind a named model with a named owner.

**A fifth thing this node refuses on its own.** No counter, no streak, no progress bar and no session score appears anywhere in either carrier. `CLAUDE.md:58` binds this stage: a limit that acquires completion mechanics stops being a boundary. Two live money figures in a persistent header is exactly where that pressure arrives.

---

## 5. State matrix

Rows are zones. Columns are account state by width. A cell says what is shown.

| Zone | Guest, desktop | Guest, mobile | Account, desktop | Account, mobile |
|---|---|---|---|---|
| **Rail** | Standard, beside content. Cases, Provably fair, divider, Responsible play | Modal drawer behind the menu icon, same items | Same plus My items | Modal drawer, same four |
| **Brand and home** | Top of the rail, above the destinations, routes to 1.0 | Header, because the rail is a drawer. Routes to 1.0 | Same | Same, narrowed to a mark |
| **Rail toggle** | On the junction of the two seams. Collapses to icons | Header, leading edge. Opens the modal drawer | Same | Same |
| **Money** | Nothing. There is no balance before an account | Nothing | Balance and value of items held, two lines, with the deposit control | Both figures, condensed to one line each, deposit control kept |
| **Account** | Sign in, routes to 2.4 | Sign in, routes to 2.4 | Avatar and name, routes to 5.1 | Avatar only, routes to 5.1 |
| **Boundary** | Rail entry only. Nothing to limit yet | Rail entry only | Rail entry plus the entry inside the money control | Same |
| **Ambient** | Sound control. Ticker 0.8 on 1.0 and 3.3 only | Sound control, `[?]` at this width | Same | Same |

**No role dimension.** One user role in round 1. No operator, moderator or seller view is in scope, so the matrix has two account states and nothing else. Stated so that a later stage does not read the absence as an oversight.

### Transient states

| State | What the navigation does | Why |
|---|---|---|
| **Rail collapsed** | Icons with the active indicator, labels gone, tooltips on hover and on focus | Material: collapsed and expanded transform into each other from the menu button. The collapsed rail is never hidden on desktop |
| **Drawer open**, mobile | Scrim blocks the content behind. Dismissed by selecting an item, tapping the scrim, or swiping toward the left edge | Material's modal drawer contract, all three dismissals, quoted in section 2 |
| **Scrolled** | Header stays fixed. The rail stays. Neither condenses nor hides | Hiding navigation to buy pixels costs orientation on the one surface that provides it |
| **Balance crediting**, `C3` | The figure carries a named timer beside it rather than a spinner, and does not silently change | Deposit node 4.4 owns the timer, the navigation renders the state |
| **Item value stale or unavailable** | The lower figure states that it is stale with its timestamp. It never renders a stale number as current, and never renders zero for unknown | Rule 3 above. `[?]` is a legal value in this project and a wrong number is not |
| **Boundary in force**, `6.3` | The money control opens to the limits rather than to add funds. Both figures stay visible, the deposit route closes, the withdrawal route stays open | `flows.md` flow 2a: a boundary stops money going in and never traps what the person already holds |
| **Ceiling reached**, `4.2` | Same, and no counter, no progress bar, no streak and no session score appears anywhere | `CLAUDE.md:58`. This binds this node too |
| **Gate open**, `2.1` | Both carriers are inert behind the gate layer and neither is removed | Removing them would make the gate feel like an ejection rather than a check |
| **Steam unavailable**, `2.6` | Sign in stays present and states the failure on 2.4 | Reading the product stays open for a person who cannot sign in |

---

## 6. Anatomy

| Element | Behaviour | Leads to |
|---|---|---|
| Logo | Top of the rail on desktop, in the header on mobile where the rail is a drawer. Always the route home, never the control that expands the rail | 1.0 |
| Rail toggle | Anchored to the junction of the two seams and tracks the rail's width. Desktop: collapse to icons and back, and the choice persists. Mobile: leading edge of the header, opens the modal drawer | current node |
| Cases | Enters the catalogue, not a case | 3.1 |
| Provably fair | Public, works with no account, and holds its position after login | 1.2 |
| My items, account only | Inventory with receipts, and the entry to withdrawal | 5.1 |
| Responsible play | Rail, lower group, both states | 6.1 |
| Sound | Toggle only. Not a destination and never in the destination group | none |
| Sign in, guest only | A single control in the header | 2.4 |
| Account control, account only | Avatar and name | 5.1 |
| Balance figure, account only | Spendable funds, real currency | 4.1 |
| Value of items held, account only | Current market value, real currency, timestamped when stale | 5.1 |
| Deposit control, account only | One add control. No badge in round 1 | 4.1 |
| Active indicator | Exactly one destination is active at any time, in both rail variants | current node |

**Provably fair holds its rail position in both states, and that is the structural claim of this node.** `jtbd.md:180` names a public provably fair surface as one of three things no competitor offers pre-login, and `baseline.md` verified that our own baseline still redirects that route to login and demotes it to a footer link, `baseline.md:84`. Design principle 1 says trust is the product. Letting the item slide down or out when the account arrives would say the proof was a sales argument. It carries the `D-14` limit with it: its position is not a claim that a verifier converts a sceptic.

---

## 7. SEO and accessibility

**This node carries no H1.** A global element is not a page and never owns the document heading. Every node that renders it supplies its own single H1.

**It is the product's main internal linking plane.** Every destination is a crawlable `<a>` with a real href, never a script handler, so the global routes are reachable by a crawler from every page. The footer, node 0.2, is the second plane and carries the long tail.

**The mobile drawer is a display concern and never a crawl concern.** The rail's links are present in the markup at every width, and the menu icon toggles their visibility rather than their existence. A drawer that renders its links only after a click hides the product's main linking plane from a crawler, which is the standard way this pattern is shipped wrong.

**Nothing here is indexed as its own URL.** The navigation has no route of its own. Nodes it links into carry their own indexation rules: 1.0, 1.2, 3.1, 6.1 and 7.1 are indexed, and 2.4, 2.7, 4.1, 5.1 and 5.3 are noindex.

**Accessibility, and every line is a requirement rather than an aspiration.**

- Semantics: `<nav>` on the rail with an accessible name. The header is `<header>` with a `<nav>` only around the logo link, because it holds no other destination. Two navigation landmarks on one page are ambiguous without names
- `aria-current="page"` on the active destination. Material's "one destination is always active" is a visual statement; this is the same statement for a screen reader
- The modal drawer traps focus while open, returns focus to the menu icon on close, closes on Escape, and the menu icon carries `aria-expanded`. Material names three dismissals and a keyboard user gets a fourth
- Every target at least **44 by 44 CSS pixels**, WCAG 2.5.5 AAA, chosen deliberately as recorded above
- **Labels are never removed except in the collapsed rail variant**, where Material sanctions icon-only presentation and the expanded variant is one control away. Labels are one word, per Material's explicit requirement
- Both money figures announce as text with their currency mark, never as an image or a background, so a crediting or stale state is readable rather than merely visible
- The scrim is not the only affordance: the drawer is dismissible by keyboard and by an explicit close control, because a scrim is invisible to a screen reader user

**No breadcrumbs in this node.** They belong to nodes with a parent to point at, 3.3 under 3.1 and 7.1 under 1.2. A global element cannot know where it is.

---

## 8. Adaptive behaviour

**Mobile is the base, 360px.** One header row: menu icon, logo mark, then the money and account zone. The rail is a modal drawer, closed by default. No bottom bar at any width, in either state. **The logo moves into the header at this width and only at this width**, because the rail is behind a menu icon and a route home may not be. The drawer therefore carries no logo row of its own. **The two figures survive at 360px**, which is the width this node was reasoned from rather than checked against afterwards: they are the reason the header's right group is designed before its left one. Measured in the mockup, the whole mobile header group needs 298px and still leaves a 77px flexible gap.

**Desktop, from 900px.** Rail at the full height of the window, logo at its top, expanded by default with labels, collapsible to icons and the choice persists. The header starts at the rail's edge and holds only the money and account group. The toggle is on the seam between them.

**Between the two,** the drawer becomes standard rather than modal, and no destination is added or removed at any breakpoint. A person who resizes a window changes how the rail is presented and keeps every route.

**Expanded by default on desktop is a decision, not a default.** Material allows either. With three or four items there is no space pressure, labels are the cheapest thing a navigation can carry, and the collapsed variant exists for a person who wants the width back.

**Growth is bounded and the bound is written now.** Material's collapsed rail tops out at seven. Round 1 uses three or four, so five of the eight LATER destinations fit before the component is the constraint. At eight the rail needs section labels and a scroll, which is what the baseline does at nine. **That is a real ceiling and it arrives inside this product's own roadmap**, so it is handed to whichever round ships the fifth mode rather than discovered there.

---

## 9. Open, carried, and what this node does not decide

**Two items are open and both are named rather than filled with a median.**

| Open item | What is missing | Owner and when |
|---|---|---|
| **The sound control** | It is in the baseline header and drawer, `baseline.md:76`, and dropped by the baseline itself at 390px, `baseline.md:90`. It has **no parent in any of the three legal classes**. Design principle 2 covers motion, not audio, and no backlog row mentions sound. It is drawn here because the reveal has audio and a person needs to be able to stop it, which is an argument this stage cannot ratify on its own | Founder, before stage 04. It ships with a stated parent or it does not ship |
| **The daily free case, `I2`, in the rail** | It is MVP and it is the only free entry point, but it is not a node in `sitemap.md`. A carrier may not promise a destination the map does not hold | This stage, before step 5. Either it becomes a node or it stays inside 3.1 |

**What this node does not decide.**

**Block composition of any page.** This node is the shell. What sits inside a page comes from the block bank at step 4 and from nothing else.

**Visual treatment.** The mockups are wireframe level and monochrome. Icon style, rail width in pixels, the treatment of the two figures and motion on the active indicator are stage 06, 07 and 11.

**Icon set.** Which glyph carries which destination is a stage 07 decision. This node fixes that there are icons **and** labels, and that the collapsed variant is the only place a label may be absent.

**Microcopy.** The labels here are single words, held to Material's "all navigation items require a one word label text". "Value of items held" is a description of the figure and not its final label. Stage 05 owns the final strings and syncs them back into this file.
