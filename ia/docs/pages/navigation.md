# Node 0.1. Navigation

**Type:** global element. **Group:** `global`. **Scope:** MVP. **Cluster:** 0, global shell.

**Purpose.** Carry the four global destinations, the money figure and the account control on every screen of the product, in two account states and at two widths, without ever advertising something that does not exist yet.

**Jobs served.** No job of its own: a global element is a carrier. It is the surface on which Main Job `jtbd.md:17` reaches the case grid in one tap, on which Related Job 1 `jtbd.md:33` and Related Job 3 `jtbd.md:51` reach the public provably fair page, on which Related Job 5 `jtbd.md:69` reaches inventory, and on which the compliance constraint in `CLAUDE.md`, responsible play tooling, gets its persistent entry. **Parent class:** design principle 1 for the provably fair item, and the compliance constraint for the boundary entry. Both are legal parents under the three class rule.

**Sitemap transitions:** 1.0, 1.2, 3.1, 4.1, 5.1, 6.1.

---

## 1. Research before the set was chosen

Three sources, all opened in a browser on 11 August 2026 rather than recalled. What each one changed is stated, because a source that changes nothing was decoration.

### Material Design 3, navigation bar guidelines

`https://m3.material.io/components/navigation-bar/guidelines`, opened live with a rendered browser because the page is a JS application and a plain fetch returns only its title.

- "Navigation bars provide access to **three to five destinations**."
- "**Don't use a navigation bar for fewer than three destinations.** Instead, use tabs."
- "**Don't remove the labels from navigation items.**"
- "Each destination is represented by an icon and label text. **One navigation destination is always active.**"
- "Navigation bar destinations have **fixed positions**. Don't scroll them or modify their positions."
- "For products with more than five navigation items, don't use a navigation bar; the elements may collide and there likely won't be enough space for translated text."

### Apple Human Interface Guidelines, tab bars

`https://developer.apple.com/design/human-interface-guidelines/tab-bars`, opened live on the same date.

- "Use a tab bar to support **navigation, not to provide actions**."
- "**Don't disable or hide tab bar buttons, even when their content is unavailable.** Having tab bar buttons available in some cases but not others makes your app's interface appear unstable and unpredictable. If a section is empty, explain why its content is unavailable."
- "**Include tab labels** to help with navigation. Use single words whenever possible."
- "Make sure the tab bar is visible when people navigate to different sections."

### WCAG 2.2, target size

`https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html` and `.../target-size-enhanced.html`, both opened live.

- **2.5.8 Target Size (Minimum), Level AA:** "The size of the target for pointer inputs is at least **24 by 24 CSS pixels**", with five exceptions including a spacing exception.
- **2.5.5 Target Size (Enhanced), Level AAA:** "The size of the target for pointer inputs is at least **44 by 44 CSS pixels**", with four exceptions.

**This node takes 44 by 44, the AAA figure, and it is a choice rather than an inheritance.** Nothing obliges an AA product to meet a AAA criterion. Global navigation is the one surface every screen carries and the one a person hits while moving, so the enhanced figure is cheap here and expensive to retrofit. Recorded so that a later stage does not read 44 as a WCAG obligation and apply it everywhere by mistake.

---

## 2. The conflict the research produced, and how it is resolved

The base layer decided the navigation model at `sitemap.md`: **four global items in two states**, pre-login Cases and Provably fair, and after an account exists My items and Balance as well.

**On mobile that model breaks two documented rules at once.** Rendered as a bottom bar it would be **two items pre-login**, which is below Material's floor of three and carries its explicit "don't". And two of the four would appear only after login, which is precisely what Apple's stability rule forbids: a tab that exists sometimes and not others.

**Three ways out were on the table.**

1. **Show four tabs always, and route the two account tabs into sign in with an explanation.** Satisfies Apple exactly, including its own remedy, "if a section is empty, explain why its content is unavailable". Cost: it advertises two destinations that hold nothing, which is the same defect that removed the baseline's nine item rail from round 1. `D-19` already ruled on that shape.
2. **No bottom bar pre-login, one appears after login.** Satisfies Material by never drawing a bar below three. Cost: the pre-login person, the one this product must convince, gets the weakest navigation of the two, and Related Job 1 lives entirely pre-login.
3. **Home becomes a tab on mobile.** Three tabs pre-login, four after, and nothing is ever removed.

**Chosen: option 3.** Mobile carries **Home, Cases, Provably fair** before an account and the same three plus **My items** after. Three meets Material's floor exactly. Positions 1 to 3 never move, which is Material's fixed-position rule honoured across the one boundary that matters. Nothing that existed disappears, which is Apple's objection answered rather than argued with. Only one slot is ever added, and it is added at the moment the person creates the thing it describes.

**Balance stays out of the tab bar in both states and both widths.** Two reasons and they point the same way. Apple: a tab bar supports navigation, not actions, and adding funds is an action. Design principle 3: cost never hides inside excitement, and making money a permanent navigation destination is the mechanism by which spending becomes a place you go rather than a decision you take. The balance figure lives in the top bar, visible always, and it is the entry to 4.1 and to 6.1.

**What this changes in the base layer's wording, stated rather than absorbed.** The four global items are unchanged and this node adds none. What changes is **which carrier renders each one**: the desktop header renders all four plus the brand mark, and the mobile bottom bar renders three of them plus Home, with Balance held in the mobile top bar. Home is the logo on desktop and a tab on mobile. **Without Home as a tab the pre-login bar is two items and below the documented floor**, so this dependency is written down rather than left as a layout preference.

**One thing round 1 does not need and the baseline does.** There is no drawer and no hamburger anywhere in this node. `baseline.md` section 2 records that mobile drops the nine item rail into a hamburger, so all nine destinations sit one tap behind a drawer. Three destinations do not need a drawer. The drawer returns when the mode switchers do, and not before.

---

## 3. State matrix

Rows are navigation zones. Columns are account state by width. A cell says what is shown.

| Zone | Guest, desktop | Guest, mobile | Account exists, desktop | Account exists, mobile |
|---|---|---|---|---|
| **Brand and home** | Logo, routes to 1.0 | Logo in the top bar, and **Home as tab 1** | Logo, routes to 1.0 | Logo, and **Home as tab 1** |
| **Primary destinations** | Cases, Provably fair | Tabs: Cases, Provably fair | Cases, Provably fair, My items | Tabs: Cases, Provably fair, My items |
| **Money** | Nothing. There is no balance before an account | Nothing | Balance figure with its value, entry to 4.1 | Balance figure in the top bar, entry to 4.1 |
| **Account** | Sign in, a single control, routes to 2.4 | Sign in in the top bar, routes to 2.4 | Account control, routes to 5.1 | Account control in the top bar, routes to 5.1 |
| **Boundary** | Not present. Nothing to limit yet | Not present | Responsible play, **inside the balance control**, routes to 6.1 | Responsible play, inside the balance control, routes to 6.1 |
| **Ambient** | Ticker 0.8, but only on 1.0 and 3.3 | Ticker 0.8, same two nodes only | Same | Same |

**The money zone is empty pre-login and that is deliberate rather than unfinished.** `baseline.md` section 2 records that the baseline fills the same slot with a race pot promotion before login. That destination is `8.9` and it is an orphan with no parent in any of the three legal classes. The slot stays empty.

### Transient states

| State | What the navigation does | Why |
|---|---|---|
| **Scrolled** | Both bars stay fixed and do not condense or hide | Apple: the tab bar stays visible when people navigate. Hiding it to buy pixels costs orientation on the one surface that provides it |
| **Balance crediting**, `C3` | The figure carries a named timer beside it rather than a spinner, and does not silently change | Deposit node 4.4 owns the timer, the navigation only renders the state |
| **Boundary in force**, `6.3` | The balance control opens to the limits rather than to add funds. The figure stays visible, the deposit route closes, the withdrawal route stays open | `flows.md` flow 2a: a boundary stops money going in and never traps what the person already holds |
| **Ceiling reached**, `4.2` | Same as above, and no counter, no progress bar, no streak, no session score appears anywhere in the navigation | `CLAUDE.md`: a limit that acquires completion mechanics stops being a boundary. This binds this node too |
| **Gate open**, `2.1` | The navigation is inert behind the gate layer and is not removed | Removing it would make the gate feel like an ejection rather than a check |
| **Steam unavailable**, `2.6` | Sign in stays present and states the failure on 2.4. The navigation itself does not change | Reading the product stays open for a person who cannot sign in |

**No role dimension.** This product has one user role in round 1. There is no operator, moderator or seller view in scope, so the matrix has two account states and nothing else. Stated so that a later stage does not read the absence as an oversight.

---

## 4. Anatomy

| Element | Behaviour | Leads to |
|---|---|---|
| Logo | Always the route home. On mobile it does not duplicate tab 1: it is the brand mark and it is still tappable | 1.0 |
| Home tab, mobile only | Active by default on arrival | 1.0 |
| Cases | Enters the catalogue, not a case | 3.1 |
| Provably fair | Public, works with no account, and stays in the same position after login | 1.2 |
| My items, after an account only | Inventory with receipts, and the entry to withdrawal | 5.1 |
| Balance figure, after an account only | Shows the value. Opens the money panel | 4.1 |
| Responsible play, inside the money panel | Persistent, two taps from anywhere | 6.1 |
| Sign in, guest only | A single control, never a tab | 2.4 |
| Account control, after an account only | Opens the account | 5.1 |
| Active indicator | Exactly one destination is active at any time | Current node |

**Provably fair holds position 3 on mobile in both states, and that is the structural claim.** `jtbd.md:180` names a public provably fair surface as one of three things no competitor offers pre-login, and `baseline.md` verified that our own baseline still redirects that route to login. Design principle 1 says trust is the product. Letting the item slide down or out when the account arrives would say the proof was a sales argument. It carries the `D-14` limit with it: its position is not a claim that a verifier converts a sceptic.

---

## 5. SEO and accessibility

**This node carries no H1.** A global element is not a page and never owns the document heading. Every node that renders it supplies its own single H1.

**It is the product's main internal linking plane.** Every destination is a crawlable `<a>` with a real href, never a script handler, so the four global routes are reachable by a crawler from every page. The footer, node 0.2, is the second plane and carries the long tail.

**Nothing here is indexed as its own URL.** The navigation has no route of its own. Nodes it links into carry their own indexation rules: 1.0, 1.2, 3.1 and 7.1 are indexed, and 2.4, 2.7, 4.1, 5.1 and 5.3 are noindex.

**Accessibility, and every line is a requirement rather than an aspiration.**

- Semantics: `<nav>` on both carriers, with an accessible name on each, because two navigation landmarks on one page are ambiguous without one
- `aria-current="page"` on the active destination. Material's "one navigation destination is always active" is a visual statement; this is the same statement for a screen reader
- Every target at least **44 by 44 CSS pixels**, WCAG 2.5.5 AAA, chosen deliberately as recorded above
- Labels are never removed from tabs at any width, per Material's explicit "don't". Icon-only navigation is not a compact variant here, it is a different and worse component
- Focus order follows visual order, and the tab bar is reachable by keyboard even though it is a mobile carrier, because a mobile browser with a keyboard is not a special case
- The balance figure announces its value as text, not as an image or a background, so a crediting state is readable rather than merely visible

**No breadcrumbs in this node.** They belong to the nodes that have a parent to point at, 3.3 under 3.1 and 7.1 under 1.2. A global element cannot know where it is.

---

## 6. Adaptive behaviour

**Mobile is the base, 360px.** Thin top bar with the logo, the money and account zone. Bottom tab bar with three destinations before an account and four after. Nothing else. No drawer, no overflow tab, no More.

**Desktop, from 900px.** One header row. Left: logo and the destinations as text links. Right: the money and account zone. The bottom bar does not exist at this width, because the destinations are already in reach at the top.

**Between the two,** the tab bar is the carrier that disappears, never the destinations. A person who resizes a window loses a bar and keeps every route.

**Growth is bounded and the bound is written now.** Material's ceiling is five and the round 2 mode switcher will want a slot. Adding modes to this bar is therefore not free: at five destinations it is full, and the sixth forces the rail back rather than a sixth tab. That is the same trigger `D-20` already names, arrived at from a second direction.

---

## 7. What this node does not decide

**Block composition of any page.** This node is the shell. What sits inside a page comes from the block bank at step 4 and from nothing else.

**Visual treatment.** The mockups are wireframe level and monochrome. Icon style, weight, motion on the active indicator and the treatment of the balance figure are stage 06 and stage 11.

**Icon set.** Which glyph carries which destination is a stage 07 decision. This node fixes that there are icons **and** labels, never icons alone.

**Microcopy.** The labels here are single words as placeholders held to Apple's "use single words whenever possible". Stage 05 owns the final strings and syncs them back into this file.
