# Node 6.1. Responsible play

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 6, keep myself in check.

**Purpose.** Hold the four brakes this product gives a person over their own spending and their own time, in the room where the spending happens, in a form that keeps working without ever becoming a thing to engage with.

**Jobs served. None, and there never will be one.** Nobody arrives wanting to limit themselves. `sitemap.md`, cluster 6 and the orphan screen table, both say it in those words, and the tracing matrix carries it as a stated empty rather than as a tick placed somewhere plausible.

**Parent class, both legal, neither a job:**

- **Barrier `B7-4`**, the escalation loop, pattern of 12 who gave a concrete loss figure unprompted, `cjm-as-is.md` growth zone Z5. One user in that ledger names his own brake and it is a third-party tool, which is the evidence that the need is real rather than assumed.
- **The compliance constraint in `CLAUDE.md`**, quoted: "responsible play tooling (deposit limits, session limits, self exclusion, cool down)".

**Capabilities:** `C2` spend ceiling chosen at deposit, `C5` session limit, cool down and self exclusion.

**URL:** `/responsible-play`. **Indexed:** yes, canonical self, schema `WebPage`, breadcrumb Home > Responsible play. All four inherited from `0.13` section 3 and not re-decided here.

**Sitemap transitions:** `6.2`, `6.3`. `5.3` stays reachable under every boundary.

**States specified inside this node, under their own anchors:** `6.2` self exclusion confirmation, a dialog, and `6.3` boundary in force, a state. Neither gets a file: `sitemap.md` fixes that `6.2` guards one action on one screen and is therefore not a destination.

**Baseline row, `6.1`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| **One tool exists**, called **TAKE A BREAK**, doing deposit restriction or full account restriction. It is the second row of the `SECURITY` block inside the settings tab of the account. `baseline-account.md` section 7.1. | **Nothing structural**, and that is the finding rather than a gap in the reading. | **Everything about where it lives.** There is no responsible play page and **no route to the tool from anywhere**: not the footer, not the rail, not the header, not the home page, all four re-checked on 18 August 2026. It sits beside Logout and an anonymity toggle, in the vocabulary of account protection rather than self protection. **An absence could be answered with "nobody in the category has it". This cannot: they built it and then filed it where nobody looks.** |

---

## 0. The node with no job, and why that is written at the top rather than buried

Every other page in this product is entered by somebody who wants what is on it. This one is entered by somebody who has decided against what the rest of the product sells, or who has been told about it, or who followed a footer link out of curiosity. **The parent classes are a barrier and a constraint, and the interface has to be designed from those two rather than from a want that does not exist.**

Three consequences follow, and they run through every section below.

1. **Nothing on this page persuades.** A page arguing that limits are good is a page arguing with the person who already opened it. It states what each tool does and gets out of the way.
2. **Nothing on this page rewards.** The hard rule from `CLAUDE.md` binds here first: "A limit never acquires completion mechanics, streaks, status or a session score: at that point it stops being a boundary and becomes a reason to keep going." `cjm-to-be.md` attaches the same rule to `C2` at T4, and `flows.md` flow 2a repeats it because it is the thing most likely to be lost.
3. **Nothing on this page can fail.** `flows.md` flow 2a: no loading node and no error node, deliberately, because a brake that can fail to apply is not a brake.

**Reachability is not prominence**, which `sitemap.md` states and this node inherits. **The page has three entries and they are not the three this section named until 22 August 2026.** It read "the rail, in its lower group; a persistent entry inside the money control; and the footer's fourth column", and the rail entry had been gone since `D-29` of 19 August while the account menu entry arrived with `D-40` on 20 August. **Two decisions out of date in one sentence, and `navigation.md` had already printed both.** The current three:

| Entry | Which moment it answers | Where it is fixed |
|---|---|---|
| **The footer's Play responsibly column** | A person reading the site finds it | `footer.md`, and `CLAUDE.md`: "Provably fair and Responsible play are carried by the footer, which holds each in its own column" |
| **The entry inside the money control** | A person about to spend meets it, two taps from anywhere | `navigation.md`, unchanged since `D-19` |
| **The account menu** | A person managing their account looks for it | `navigation.md` since `D-40` |

**The rail is not one of them and it may not become one again by accident:** it carries one destination in both states, Cases, `D-40`. Three entries are still how a person finds a brake at the worst moment. None of them is a promotion, and none of them is a number.

---

## 1. The only surface of this kind in the category, walked

**Key-Drop's safety portal, `safety.key-drop.com`, opened live on 12 August 2026** and recorded in `blocks.md` section 7 with proof at `research/screens/blocks/t6-keydrop-safety.jpeg`. **It is the only responsible play surface any of the five hard competitors publishes.** Hellcase's footer carries no link of the kind at all, and `baseline.md` section 6 records zero responsible play routes, zero footer links and zero matches for self exclusion, deposit limit, cool down or gambling anywhere on our own baseline.

### What it settles

Its four tools are deposit limits by day, week and month; session reminders; time-outs from 24 hours to 7 days; and self exclusion up to permanent. **That set is near identical to ours, which settles that these four are the category floor rather than our invention.** `C2` and `C5` were derived from a barrier ledger and they landed on the same four, which is the cheapest possible confirmation that the shape is right.

### The three things refused, with the reason on the row

| What Key-Drop does | Verdict | Reason |
|---|---|---|
| Calls its session control **"session reminders: gentle alerts during long play sessions"** | **Refused** | A reminder a person can ignore forever is not a limit. `C5` is a limit: when the session limit is reached the session ends and `6.3` holds it. A gentle alert is the interface admitting it does not intend to stop anything |
| **Puts the whole surface on a separate subdomain** | **Refused** | The brake lives outside the room where the spending happens. Ours is a node of this product at `/responsible-play`, entered from the rail, from the money control and from the footer, and it renders the same shell as every other page |
| Carries a **decorative verifier widget** printing a fake server seed, a fake client seed and **"Outcome Verified: DRAGON LORE (FN)"** for a round that never happened | **Refused, and it is the live instance of a rule this project already wrote** | `0.14` section 0 forbids a verified badge in any variant, for exactly this reason: it asserts a proposition the scheme does not prove. A responsible play page is the last surface in a product that should carry a fabricated proof, and it is where this one carries it |

### And two smaller ones

| What Key-Drop does | Verdict | Reason |
|---|---|---|
| Three principle cards: fun first, collectibles not investments, healthy play mindset | **Take the second, leave the framing** | "Collectibles, not investments" is a true and useful sentence. The other two are mood. This page states what the tools do and stage 05 writes the words |
| 18+ badges: NO MINORS, ID MATCH REQUIRED, KYC VERIFICATION | **Refused** | Claims about a mechanism, printed as badges, with nothing to check. `0.11` rule 9 and `D-A`: our identity method is `[?]` and will be described rather than badged |

**The one thing taken from craft rather than from the category.** Refero's Kraken settings `b7ae7d3a` and Stocktwits preferences `e47ee59e`: grouped settings, one column, right-aligned controls. **A limit is a setting and it must look like one rather than like an achievement**, which is the same rule as consequence 2 above arriving from the layout side.

---

## 2. Blocks, mobile first

Composition is taken from `blocks.md` section 7, type T6, rows marked TAKE, plus what the two parents require of this node specifically. Nothing was added for completeness.

| # | Block | Source | Traces to | Scope |
|---|---|---|---|---|
| **1** | **H1 and one plain statement of what these tools do.** Not a case for using them, not a warning, not a mood card | Key-Drop principle card 2, framing refused | Compliance constraint, `CLAUDE.md` | MVP |
| **2** | **What is in force now**, if anything: each active boundary, its period, the moment it ends, and the route to change it. Absent entirely when nothing is set | Own research. The state `6.3` needs a home on its own page | `B7-4`, `C2`, `C5` | MVP |
| **3** | **Spend ceiling**, `C2`. Amount and period. Lowering applies immediately, raising waits 24 hours, which is the asymmetry that makes it a brake rather than a setting | Key-Drop deposit limits, Refero grouped settings | `B7-4`, pattern of 12, through `C2` | MVP |
| **4** | **Session limit**, `C5`. Length of a single session, after which the session ends | Key-Drop session reminders, **refused as a reminder and taken as a limit** | `B7-4`, plus the compliance constraint | MVP |
| **5** | **Cool down**, `C5`. A chosen period during which opening and depositing are closed. Ends by running out | Key-Drop time-outs | `B7-4`, plus the compliance constraint | MVP |
| **6** | **Self exclusion**, `C5`. The one control on this page a person cannot undo on impulse. Opens `6.2` | Key-Drop self exclusion | `B7-4`, plus the compliance constraint | MVP |
| **7** | **What every boundary does and does not close**, stated once, above the controls rather than after them. **Withdrawal stays open under every boundary, self exclusion included** | Own research, `flows.md` flow 2a | `B7-4`, and `B2` by consequence: nothing here may put a branch on the exit route | MVP |
| **8** | **Routes that are not us:** external help. Structure fixed here, contents `[?]` | `cjm-as-is.md` Z5, where one user in the ledger names a third-party tool as his own brake | `B7-4` | MVP, contents `[?]` |
| **9** | **Support route**, `0.10`, for the person who is inside a boundary and needs something from us | `blocks.md` T7, Article 5(c) and row `G4` through node `0.10` | `B8-3` by way of `G4`, through `0.10` | MVP |

**Block 7 sits above the controls, and the order is the decision.** A person who does not know that self exclusion leaves the exit open cannot evaluate self exclusion. Putting that sentence under the controls means it is read after the choice, which is the placement `G5` exists to forbid one cluster over.

**Block 8 is fixed in structure and empty in contents on purpose.** Which organisations are named depends on the market, and every market verdict in `0.12` is `[?]` until re-verified against current law. Writing a plausible list of helplines now would be model memory presented as a legal fact, in the one place in the product where that would do the most damage. Owner: founder with counsel, on the same answer as `0.12`.

### What this page refuses to carry, and each refusal has a parent

| Refused | Why |
|---|---|
| **Any counter, streak, status, level or session score** | The rule in `CLAUDE.md`, quoted in section 0. This is the whole reason the list is written out rather than summarised |
| **Any celebration of staying inside a limit** | Same rule. A boundary that congratulates is a boundary that has started measuring, and a measurement is something to improve |
| **A progress bar on a cool down or a self exclusion** | Same rule, in its most tempting form. A bar filling toward the end of a boundary is a countdown to spending again, drawn as an achievement |
| **The live drop ticker `0.8`** | **The citation under this row was reversed and the refusal was not.** It read "`sitemap.md` restricts the ticker to `1.0` and `3.3`", and `D-59` put the feed on every page on 21 August. **What the row was actually resting on is the sentence after the citation**, which is this node's own: this is the page where a run of other people's wins would do harm rather than merely be noise. **It has a live parent now rather than a stale one:** `sitemap.md` row `0.15` carries the identical shape in the register itself, "`6.1` may never render it", for the daily ladder. A surface that may not show a person what to wager may not show them twenty four strangers winning either. **Declared by the page, so `0.8` owns whether it stands** |
| **Any case tile, any deposit control, any spend route** | No parent, and the opposite of both parents |
| **A "not now", "remind me later" or "skip" control** | There is nothing to skip. This page asks for nothing, so it has nothing to defer |
| **A sign-in wall** | `blocks.md` T5 records Key-Drop putting provably fair behind login and `1.2` refusing that. Same refusal here: the page reads in full for a guest, and only the controls need an account |

**One block is deliberately absent and named so nobody reports it as a discovery: there is no single primary call to action on this page.** The pack's template asks every page for one clear next step. Four independent boundaries with none promoted over the others is the honest shape, because promoting one is the product choosing which brake a person should want. Stated rather than solved.

---

## 3. The four boundaries, and the rules that are not styling

| Boundary | Row | What it closes | What stays open | Direction rule | Period |
|---|---|---|---|---|---|
| **Spend ceiling** | `C2` | Deposits, once the ceiling for the period is reached, which is state `4.2` | Opening from existing balance, and withdrawal | **Lowering applies immediately. Raising applies 24 hours later and the old ceiling holds until then**, which is state `4.3` | A named period, chosen at the deposit. The set of periods is `[?]` |
| **Session limit** | `C5` | The session, when the length is reached | Withdrawal, support, reading | Shortening immediate. Lengthening waits 24 hours, by the same asymmetry | `[?]` |
| **Cool down** | `C5` | Opening and depositing, for the chosen period | Withdrawal, support, reading | Extending immediate. It cannot be shortened or lifted early | `[?]` |
| **Self exclusion** | `C5` | Opening and depositing | **Withdrawal, support, reading** | **No early exit at all.** It ends by running out, which is the point of it | `[?]` |

**Every period in this table is `[?]` and none is invented.** Key-Drop runs 24 hours to 7 days for time-outs and up to permanent for self exclusion, and that is their number recorded from their page, not ours. Ours is a founder decision with counsel, because in several markets the minimum self exclusion period is set by law rather than by product.

**The direction asymmetry is one rule with four instances, and it comes from `C2`.** `cjm-to-be.md` T4: lowering applies immediately and raising applies 24 hours later. Generalised here: **a change that tightens a boundary takes effect at once, and a change that loosens one waits.** Without that rule every control on this page is a setting a person can undo in the same minute they set it, which is the definition of not being a brake.

**This page owns the deposit limit outright since 27 August 2026, `D-103`.** The clause here read: *"The ceiling is set at the deposit and changed here, and both are true at once. `C2` puts the choice at the money decision, where `cjm-to-be.md` says the person is calm and the number is one they typed themselves. Two surfaces, one value, and `4.1` owns the moment it is first chosen."* **It is kept above as the argument that was overridden, not deleted.**

**What is true now.** The founder read the drawn deposit screen, could not name the control, and moved it here, where the other three boundaries already were. **Block 3 was already built and unchanged by the move:** an amount, a period, the tighten and loosen asymmetry, and a save. What it gains is the whole of `C2` rather than half of it, and the label it carries is the one the deposit screen uses, **Deposit limit** rather than **Spend ceiling**, because two names for one boundary across two surfaces is how a person stops believing they are the same thing.

**`4.1` keeps the figure and loses the form.** The limit in force is a line in its receipt with a route here, so the number is still in front of a person at the moment of spending, which is design principle 3. **What the deposit no longer does is ask.** The cost of that is `D-103`'s and it is printed there: a boundary a person has to come here to set is a boundary most people never set, and `cjm-to-be.md` T4 chose the deposit moment over two alternatives for exactly that reason.

**A boundary never locks the exit.** `flows.md` flow 2a states the reason: a limit that also locks the exit would be a punishment rather than a brake, and it would give anyone a reason never to set one. `B2` makes the same thing true from the other end, since the withdrawal route carries no branch of any kind.

---

## 4. Node `6.2`. Self exclusion confirmation

**Type:** dialog. **Scope:** MVP. **Anchor:** `6.2`. **Route out:** `6.3`, or back to `6.1`.

**Why it exists.** It is the one choice on this screen a person cannot undo on impulse, which is exactly what makes it worth a confirmation and exactly what makes the confirmation hard to write: it has to be certain without being a discouragement.

**Craft source:** Refero Parallel confirmation modal `80a30705`, `blocks.md` section 5, taken across the type boundary: a destructive confirmation with cancel and confirm, where closing prevents the accident. **What is added here is that the dialog states the period rather than asking a second time.**

### What it contains

| Element | Content | Rule |
|---|---|---|
| **The period** | The period the person already chose, restated in full, with the date and time it ends | The dialog never asks for the period. Choosing happens on `6.1`, confirming happens here |
| **What closes** | Opening and depositing | Stated as a fact, not as a warning |
| **What stays open** | **Withdrawal, support, and reading the product** | This is the sentence the dialog exists to deliver. A person confirming self exclusion is entitled to know their items are not being taken |
| **That it cannot be lifted early** | One line | The honest cost of the choice, said before it is made |
| **Confirm and cancel** | Two controls of equal weight, cancel returning to `6.1` unchanged | |

### Four refusals, each with its reason

1. **No second confirmation and no typed phrase.** Escalating friction on a brake is discouragement wearing a safety label. The product does not make it harder to stop than it made it to start.
2. **No period pre-selected in the dialog**, because the dialog does not carry a period control at all.
3. **No consequence framed as a loss.** "You will lose your daily free case" is the product bargaining, and `I2` already carries its own recorded risk without being used as leverage here.
4. **No cool-off delay before the confirmation takes effect.** Self exclusion tightens a boundary, and by the rule in section 3 a tightening change applies at once.

### Behaviour

Focus is trapped while open, Escape closes it back to `6.1`, focus returns to the control that opened it, and the dialog carries an accessible name. Same modal rules as the drawer in `0.1`, and they are stated again here rather than referenced, because this dialog is the one place in the product where a mis-dismissal costs a person a decision they had made.

**On confirm the boundary is in force immediately**, `6.3`, and there is no interstitial, no success animation and no congratulation.

---

## 5. Node `6.3`. Boundary in force

**Type:** state. **Scope:** MVP. **Anchor:** `6.3`. **Route out:** `5.3` stays reachable.

**The whole specification in one line, from `sitemap.md`: the boundary holds without being a thing to engage with.**

### Where it renders, which is not only here

| Surface | What `6.3` does there | Source |
|---|---|---|
| **`6.1`**, block 2 | Names the boundary, its period, and the moment it ends. Offers the tightening direction only | This node |
| **The money control**, `0.1` | Opens to the limits rather than to add funds. Both money figures stay visible, the deposit route closes, the withdrawal route stays open | `navigation.md` state table |
| **`4.1` deposit** | State `4.2`, the ceiling reached this period. Deposits stop, opening from balance and withdrawal stay fully open | `sitemap.md` cluster 4 |
| **`3.3` case screen** | The open control renders as closed with the boundary named, rather than disappearing | This node, see below |
| **`0.2` footer** | Unchanged. The responsible play link keeps its place and its label | `footer.md` transient state table: a boundary is not an error state and the footer does not editorialise about it |

### What it shows, and one rule that is easy to get wrong

- **Which boundary, and when it ends, as a stated date and time.**
- **Never as a live countdown.** A countdown is a clock a person comes back to watch, and watching a boundary expire is engagement with a boundary. This is the same rule as the refusal of a progress bar in section 2, in the form it is most likely to be shipped by accident.
- **No elapsed time, no days survived, no "you have stayed inside your limit for", no badge, no total saved.** Every one of those is the completion mechanic the rule in `CLAUDE.md` forbids, and each is a plausible thing to build.
- **The closed control stays visible and says why.** A control that vanishes is a control a person hunts for, and hunting for the open button while excluded is the worst possible use of anyone's next ten minutes.

### What stays open under every boundary, self exclusion included

**Withdrawal, `5.3`.** Stated three times in this repository and once more here, because it is the rule most likely to be traded away for a cleaner implementation: `flows.md` flow 2a, `cjm-to-be.md` T4 for the ceiling, `sitemap.md` cluster 6. **Support, `0.10`,** including the appeal route with its published response deadline. **Reading**, subject to the open item below.

### The open item this state cannot close on its own

**Whether self exclusion also removes the case grid and the ticker from what the person sees.** The map says opening and depositing close. It does not say the product becomes unreadable, and nothing in this repository decides whether a self-excluded person should still be shown a reveal-driven shelf. **Recommendation, not a decision: the case grid and the ticker are removed for the duration of a self exclusion and of a cool down, and are unaffected by a spend ceiling or a session limit**, because the first two are the person removing themselves from the activity and the last two are the person sizing it. It needs a founder decision and it may need counsel. Carried in section 9 with an owner rather than drawn.

---

## 6. State matrix

Columns are the account state. **The page reads in full for a guest**, which is the same refusal `1.2` makes of the login wall.

| Zone | Guest | Account, nothing set | Account, boundary in force `6.3` | Self excluded |
|---|---|---|---|---|
| **Block 1, statement** | Full | Full | Full | Full |
| **Block 2, what is in force** | Absent | Absent | Present, per `6.3` | Present, with the end date |
| **Blocks 3 to 6, the four controls** | **Visible and inert, with the reason: an account is needed to set one.** Never a sign-in wall over the page | Live, nothing set | Live. Tightening immediate, loosening waits 24 hours | **Locked for the duration.** Other boundaries can still be tightened |
| **Block 7, what a boundary does not close** | Full | Full | Full | Full |
| **Blocks 8 and 9, external routes and support** | Full | Full | Full | Full |
| **The money control in `0.1`** | Absent, no account | Balance and value of items held | Opens to the limits rather than to add funds | Same |

**Transient states, and there are fewer than a reader expects.**

| State | What happens | Why |
|---|---|---|
| **Loading** | None. The page renders its own skeleton with the shell | `flows.md` flow 2a: every action here is a local state change |
| **Error** | **None, by design.** A brake that can fail to apply is not a brake | `flows.md` flow 2a, stated as deliberate rather than as an omission |
| **Empty** | Block 2 is absent when nothing is set. **Not an empty state with an illustration and an invitation**, which would be the product suggesting a limit as a thing to acquire | The rule in section 0, consequence 2 |
| **Geo blocked**, `2.2` | The page renders in full | Same reasoning as `0.2`: a person the product will not serve keeps the routes that let them act on their own account |
| **Gate open**, `2.1` | Not reachable from here. `2.1` fires at first case interaction and nothing on this page is one | `B3`, `D-17` |

---

## 7. Adaptive behaviour

**Mobile, base, 360px.** One column throughout. Statement, then what is in force, then the four controls stacked as grouped rows with the control right-aligned on the row, then what a boundary does not close, then the external routes and support. **A control never wraps below its own label into what looks like a separate row**, and the amount field on the ceiling is full width under its label rather than squeezed beside it.

**No horizontal scroll anywhere, and one specific thing that would cause it:** the period selector. Four or five periods as a horizontal chip row is a scroll at 360px. It stacks or it becomes a select. Decided here rather than discovered at stage 04.

**Desktop, from 900px.** The same single column, held to a readable measure rather than stretched to the viewport. **Nothing on this page becomes a multi-column dashboard at width**, because a dashboard of limits is a dashboard, and a dashboard is a thing to check.

---

## 8. SEO and accessibility

**Indexed, and that is inherited from `0.13` section 3 rather than argued here.** It is one of the nine indexed surfaces, it is public, and it is the surface that proves the compliance constraint is a product rather than a paragraph in terms.

- **`WebPage` and nothing more**, `0.13` section 7. **No `FAQPage` schema**, even though blocks 3 to 6 read like questions and answers: the policy `0.13` quotes requires markup to be a true representation, and these are controls rather than answers.
- **Exactly one H1**, and it is the page's job in words.
- **Every route is a crawlable `<a>`**, including the support route and the external routes in block 8.
- **Every control is a real control.** Toggles are `<button>` or `<input>` with a label, never a styled `<div>`. Targets at least 44 by 44 CSS pixels, matching the AAA choice in `0.1` and `0.2`.
- **The boundary in force is announced once, not continuously.** `6.3` is not an `aria-live` region and the end time is not a live-updating string, which is the accessibility form of the countdown refusal in section 5.
- **Nothing here is an image.** Not the periods, not the amounts, not the statement. `0.11` rule 8, and here the reason is that a person may need to quote this page to somebody who is helping them.

### SEO block, A to E

**A. Meta tags, finished copy.**

- **Title, 54 characters:** `Responsible play: limits, cool down and self exclusion`
- **Description, 144 characters:** `Set a spend ceiling, a session limit, a cool down or a self exclusion. Withdrawal stays open under every one of them. No account needed to read.`
- **Canonical:** `https://<host>/responsible-play`, self. Host is `[?]`, `0.13` open items.
- **Robots:** `index, follow`
- **hreflang:** none, anywhere. One language, `0.13` section 1
- **OG and Twitter:** title and description as above, summary card. **No image of a skin and no image of a case on this card**, for the obvious reason

**The `0.13` finding this section raised is closed, and closing it created a smaller one.** The row now reads: "**The pattern, written here rather than promised:** `<node H1 subject>` then a separator then `CS2 Clutch`, one line, the subject first because the tail truncates." So a pattern exists.

**And this node's title still does not follow it, deliberately.** The pattern bakes in `CS2 Clutch`, which is a working placeholder, and this is one of nine indexed surfaces. **Baking a placeholder into finished copy is how a placeholder ships**, and a title is the one string that survives into search results and browser history before anyone reviews it. The title above stays without the suffix, **the divergence is named here rather than left as a quiet inconsistency**, and it resolves itself the day the product has a name. Owner: the founder, with the naming decision.

**B. Heading structure, in block order.**

- **H1:** Responsible play
- **H2:** What these tools do
- **H2:** What is in force now *(rendered only when something is)*
- **H2:** Spend ceiling
- **H2:** Session limit
- **H2:** Cool down
- **H2:** Self exclusion
- **H2:** What a boundary closes, and what it never closes
- **H2:** Support that is not a limit

**C. Finished SEO text.** Product language, English. Stage 05 aligns it to voice and syncs the final version back into this block.

> **Responsible play**
>
> Four boundaries. You set them, they hold, and none of them is a game.
>
> A spend ceiling caps what you can put in over a period you choose. A session limit ends a session at a length you choose. A cool down closes opening and depositing for a period. Self exclusion closes them for longer, and it cannot be lifted early.
>
> Tightening a boundary takes effect immediately. Loosening one takes 24 hours, and the old boundary holds until then.
>
> **Withdrawal stays open under every boundary, self exclusion included.** A limit stops money going in. It never traps what you already hold.
>
> There is no score here, no streak and no reward for staying inside a limit. A boundary that congratulates you is a boundary that has started keeping count.

**D. Structured data.** `WebPage`. Nothing more, per section 7 of `0.13` and the refusal above.

**E. Optimisation checklist.** One H1. LCP is text, since the page has no hero image. Every route a crawlable `<a>`. Canonical self, no hreflang. No text in images. Core Web Vitals to production, and design principle 5 already makes speed a product rule.

---

## 9. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Every period, on all four boundaries** | Ceiling periods, session lengths, cool down lengths and self exclusion lengths are all `[?]`. In several markets the minimum self exclusion period is set by law rather than by product, so this is not purely a product choice. **Key-Drop's 24 hours to 7 days and up to permanent are their numbers, recorded, not adopted** | Founder with counsel, on the same answer as `D-A` and `0.12` |
| **Whether self exclusion also removes the case grid and the ticker** | Section 5. The map closes opening and depositing and says nothing about reading. Recommendation carried there, not drawn | Founder, possibly counsel |
| **The external help routes in block 8** | Which organisations are named, per market. Every market verdict in `0.12` is `[?]` until re-verified against current law, and a plausible list here would be model memory presented as a legal fact | Founder with counsel |
| **Whether a boundary is announced anywhere outside the product** | A self exclusion that runs for months implies a signal reaching the person off the page. The global sweep already recorded that **no notification, email or push row exists anywhere in `cjm-to-be.md`**, for withdrawal or for anything else. Named here in the same treatment rather than invented | Backlog, then the founder |
| ~~**Whether the spend ceiling is per deposit, per period, or both**~~ | **Answered by `4.1` and closed.** One ceiling is in force at a time and it belongs to the named period. A ceiling that reset per deposit could never be reached, and `4.2`, ceiling reached this period, is a numbered node, so the map already excluded that reading. **The second deposit inside one period pre-fills again and the pre-filled figure is then a change to the ceiling in force**, taking the direction rule with it | Closed, node `4.1` |
| **The conversion cost of any of this** | `CLAUDE.md` carries the age gate's cost as having no target. The same is true here and it is worse measured, since `C2`'s own success signal in `cjm-to-be.md` reads "targets `[?]`" | Production |

**Two findings for other nodes, raised rather than edited, per the verify-before-fixing rule.**

1. **`0.2` renders its statistics strip on this page.** The footer has no account dimension and no per-node dimension, by its own rule, so a cases-opened figure in the hundreds of millions sits below a self exclusion control. That is inherited rather than chosen, and it is the kind of adjacency this stage should notice out loud. Owner: `0.2`, then stage 04.
2. **The three-entry count is right and the list was wrong in three files at once.** This node named the rail, `footer.md` section on the compliance column names the rail, and `sitemap.md` says "Responsible play gains a rail entry and keeps the one it had". **All three predate `D-29`**, which moved it off the rail on 19 August, and `D-40`, which put it in the account menu on 20 August. Fixed in this node and in `footer.md`; `sitemap.md`'s sentence is a record of what step 6 of the base layer decided and is marked rather than rewritten. **The count never changed. Every file naming the members was wrong.**

**And what belongs elsewhere.** The words: structural here, stage 05 owns the final strings and syncs them back into block C. How any of it looks: stages 06 and 07. The moment the ceiling is first chosen: `4.1`. The behaviour of the exit under a boundary: `5.3`, which changes nothing, which is the point.
