# Node 5.10. Profile

**Type:** page. **Group:** `pages`. **Scope:** MVP. **Cluster:** 5, take out what I earned.

**Written 22 August 2026, two days after `D-36` put it on the map.** The same record that added it said what it is: "**`5.10` Profile has no parent in the three legal classes.** No capability in `cjm-to-be.md` asks for it and no job in `jtbd.md` needs it. **It ships with the empty cell printed**, the treatment `D6` the favourite got."

**Purpose.** Hold the account's own view of itself: who this account is on this product, which Steam account it was made from, and the identifiers a person needs when they have to describe themselves to us.

**Jobs served: none.** **Parent class: none, and this is the orphan cell printed rather than filled.**

| Legal class | Does it hold a parent for this node |
|---|---|
| A barrier code from the As-Is map | **No.** No barrier in `cjm-as-is.md` is about not knowing who you are |
| A job from `jtbd.md` | **No.** Not the main job, none of the five related jobs, neither social job |
| A compliance constraint or design principle from `CLAUDE.md`, quoted | **No.** Identity is `2.7` and it is `LATER`. Nothing in the compliance paragraph asks for a profile |

**So it exists because the founder said all three would exist in the real product, asked directly, `D-36`.** That is a legitimate reason and it is not one of the three classes, which is exactly why it is printed here instead of being dressed as a job. **A screen with no parent is cut or carried with its orphan status printed.** This one is carried, and the record of who carried it is in the decision file.

**And that has one consequence this node enforces on itself.** An orphan may not grow. **Every block below has to be either a fact the product already holds about this account or a control that already exists somewhere else on the map.** Nothing on this page may be the first home of a new capability, because a capability whose only justification is a page that has no parent has no parent either.

**URL:** `/profile`. **Indexed:** no, `noindex, follow`. **Canonical:** self. **Schema:** none. **Breadcrumb:** none. **Not inherited, because `0.13` has no row for this node**; the finding and the shape of the three missing rows are in `history.md` section 8 and are not restated here.

**Reached from:** the account menu, `0.1`, row 4. **Leads to:** `5.11` settings, `5.1`, `5.9`.

**States specified inside this file:** none numbered.

**Baseline row, `5.10`.** The rule in `CLAUDE.md`: every node carries one baseline row, what the live product does, what we keep, what we change and why.

| What the live product does | What we keep | What we change, and why |
|---|---|---|
| **A public profile page**, walked by the founder's capture of 21 August 2026 and recorded in `baseline.md` section 9.9: a hexagonal avatar, the display name, **a numeric public id read as `ID 852261`**, three counters reading `N/A`, the name repeated under the avatar, four history tabs and a grid of item cards. | **The avatar, the display name and the Steam origin.** Three facts, and the baseline is the source for the fact that an account is not anonymous here. | **That it is public, and that it is a shelf.** Ours is the account's own view of itself and there is no public form of it in round 1: `D-69` records two of our own decisions pointing opposite ways on a public profile and leaves it `[?]`. **And the id is not copied.** `baseline.md` records that `852261` is sequential and that a stranger can decrement it, which makes the platform's registered-account count enumerable from outside. It is a fact about the baseline, recorded, and not a pattern to inherit. **The three `N/A` counters are not inherited either:** a counter that has never had a value is a field waiting for a score. |

---

## 0. What this page holds, and the test every row had to pass

**The test:** is this a fact the product already holds, or a control that already exists elsewhere on the map. **Nothing else was allowed on**, per the orphan rule above.

| # | Block | What it holds | Where it already exists | First screen at 360 |
|---|---|---|---|---|
| **1** | **The identity band** | Avatar, display name, and the moment the account was created | The avatar and the name are on `0.1`'s account control and in `0.8`'s tile hover. The creation moment is a fact of the account | Yes |
| **2** | **The Steam origin** | Which Steam account this was made from, and that sign in is Steam and nothing else | `2.4` row `B6`: no password anywhere outside Steam OpenID, and no profile changes requested | Yes |
| **3** | **Your account id** | The identifier support and an appeal refer to | `0.10` section 3, whose appeal form carries the decision and the account | Yes |
| **4** | **What is public about you** | One statement of what a stranger can see today, and what they cannot | `7.1` block 6, `D-69` | Partly |
| **5** | **Routes** | Settings `5.11`, My items `5.1`, Roll history `5.9` | The account menu already carries all three | No |
| **6** | Footer, `0.2` | Unchanged | `0.2` | No |

**Block 4 is the only one that is not obviously a fact, and it is the one this page is worth having for.** `D-69` left the public profile `[?]` with two of our own decisions against each other: `0.8` gives the feed's avatar a destination and `7.1` block 6 refuses an owner profile outright, on the ground that it would rebuild the trophy shelf that node was created to replace. **A person cannot be told what is public about them by a product that has not decided**, so block 4 states exactly what is true today: **a shared result carries the display name and the avatar, and there is no page a stranger can reach that lists what this account has won.** That is a true sentence under either resolution of `D-69`, and it stops being true the day one is taken, which is when this block is rewritten.

### What this page refuses, and every refusal is the orphan rule doing its job

| Refused | Why |
|---|---|
| **Any counter: cases opened, best drop, days here, level** | The baseline runs three of these and every one reads `N/A`. **A counter is a score**, `0.11` rule 7, and `CLAUDE.md`'s limits rule binds the whole product. **This is the page where a level would be invented**, and it has no parent to invent it for |
| **An avatar upload, a name change, a bio** | Each is a new capability with no row in `cjm-to-be.md`. The avatar and the name come from Steam, `B6`, and a product that lets them diverge from Steam has two names for one person |
| **A public link to this page** | There is no public form of it. `D-69` is open, and a link to a page that does not exist is the dead item defect |
| **The numeric public id** | Sequential, and a stranger can decrement it. Recorded in the baseline walk as a fact and refused here as a pattern |
| **Anything about other accounts** | Friends, followers, comparisons. No parent, and the social jobs are carried by the ticker and by `7.1` |
| **A settings control of any kind** | `5.11` owns settings. **A profile that quietly holds two toggles is settings with a different heading**, and the map already has one place for them |

---

## 1. The two nodes this one is between, and the line that separates them

| Node | What it is | The line |
|---|---|---|
| **`5.10`, this one** | **Who this account is.** Facts, and no control that changes anything | A page a person reads to find out what we hold about them |
| **`5.11` Settings** | **What this account does.** Controls, and its round 1 contents are `[?]` | A page a person opens to change something |

**The line matters because `5.11` cannot be drawn yet and this one can.** `D-36`: settings "has no contents yet... what it holds in round 1 is `[?]` and the node owes that answer before it can be drawn". **If the line is not fixed now, the first thing that happens when settings is answered is that half of it lands here**, because this page has space and no parent to defend.

---

## 2. States

| State | What the page does | Where it is specified |
|---|---|---|
| **Account exists** | The five blocks. This is the only state the page has of its own | Here |
| **Guest** | Never rendered. There is no public form of this page | `0.13`'s transactional zone, and `D-69` |
| **The Steam link is broken or the account is unlinked** | The band renders with the origin marked unreadable and the route to `0.10`. **Never a silent fallback to a generated name**, because a name the product invented is a second name for one person | `B5`, readable failure states |
| **Boundary in force `6.3`** | Unchanged. Reading who you are is never closed by a boundary | `6.1` |
| **Restricted `5.6`** | Unchanged, and the written ground is not repeated here. `5.6` owns it and two renderings of one ground is the defect `0.9` names about the identification block | `5.6`, `0.9` section 2 |

---

## 3. Components

| Component | Where | Variant |
|---|---|---|
| Navigation `0.1` | Shell | Account exists |
| Footer `0.2` | Below | Full |
| Live feed `0.8` | Shell | Full. **This node refuses nothing** |
| Toasts `0.5` | `aria-live` | Never the only place a state is announced |

**No new component, and that is a consequence of the orphan rule rather than a coincidence.** A component is a thing with more than one consumer. **An orphan page that produced one would be a capability entering the map through the one door with no lock on it.**

---

## 4. Responsive and accessibility

**Mobile 360, the base.** One column: the identity band, the Steam origin, the account id, what is public, the routes.

**Desktop from 900.** The same single column held to a readable measure. **Nothing here becomes two columns**, because five short blocks in two columns is a dashboard, and this page is a record.

- **The avatar is decorative and its accessible name is empty**, because the display name is beside it as text. An avatar with the name repeated into its alt text is the name announced twice.
- **The account id is monospace, copyable, and never an image.** Same rule as the round hash and the ticket id: it exists to be pasted into a message to us.
- **Every target at least 44 by 44 CSS pixels.**
- **Nothing on this page is an image of text.**

---

## 5. SEO block A to E

**A. Meta.** `robots: noindex, follow`, canonical self. No OG or Twitter card: **an unfurl preview of a person's own account page is a card that should never be generated**, and the same sentence is in `4.1` for the same reason. One language, no `hreflang`.

**B. Headings.** One H1. H2s in block order: the Steam origin, your account id, what is public about you.

**C. SEO text.** None, `noindex`.

**D. Structured data.** None. **Explicitly not `Person` and not `ProfilePage`:** `0.13` section 7 assigns the schema and it has no row for this node, and a node that adds a type its register did not assign has done the thing the register exists to stop. `0.9` refused `FAQPage` on the same reasoning.

**E. Checklist.** One H1. `noindex` as a meta tag, never a `robots.txt` disallow. The account id is crawlable text. No horizontal scroll at 360. **No colour-only state anywhere**, which here is the broken Steam link.

---

## 6. What this node does not decide

| Open item | What is missing | Owner |
|---|---|---|
| **Whether a public profile exists at all** | `D-69`, and it is two of our own decisions against each other rather than a gap: `0.8` gives the feed's avatar a destination and `7.1` refuses an owner profile. **Block 4 states what is true under either answer and is rewritten the day one is taken** | Founder, then a node |
| **Whether a person can change their display name here** | Refused above as a new capability with no row. **If the answer is that they can, it is a backlog row first and a block second**, not the other way round | Founder, then `cjm-to-be.md` |
| **The three register rows** | `0.13` has none for `5.9`, `5.10` or `5.11`. Shape in `history.md` section 8 | Node `0.13` |
| **Whether this page survives its own orphan status** | **The honest question, asked here rather than left implicit.** It has no parent, it holds five facts, and three of them are one line each. `D-36` put it on the map because the founder said it would exist. **If it is cut, the account menu loses a row and the rule that put it there applies again in the other direction** | Founder |
| **What the account id looks like** | Not the baseline's sequential number, section 0. Beyond that it is `[?]` and it is a production decision with a privacy face | Production, then counsel |

**And what belongs elsewhere.** Controls: `5.11`. The items: `5.1`. The rolls: `5.9`. The public form of one round: `7.1`. Identity verification: `2.7`, and it is `LATER`. The words: stage 05.
