# Stage 04, step 2. The grey contract

**One contract for every screen and every subagent.** Written before the first screen so that the fanout at step 8 has something to obey rather than something to infer.

**It inherits from the IA rather than starting over**, and it inherits **structure, not the form of presentation**. IA(b) was a node diagram with labelled zones. A wireframe is a live screen. The blocks, their order and their states carry across; the diagram does not.

**Where it gets a visible place.** Step 3 renders this file live inside `wireframes/overview.html`, section "Conventions", **with the grey palette shown as swatches rather than a list of hex**. Rules that live only in markdown get read only by a model next time.

---

## 1. Inherited, and the reference is the rule

### 1.1 One stylesheet, and it is already written

`wireframes/_wf.css`. **Every screen links it and no screen opens a second one.**

**The six greys are not new.** They are the exact values the 27 IA node pages already use for their black and white anatomies, `--wf-bg` through `--wf-ink-dim`, read from `ia/*.html` on 18 August 2026. The wireframes continue that surface rather than opening a second one beside it.

**This file stays grey forever.** Colour arrives at stage 06 and lands on **copies** of these screens inside `design/`, never here. `CLAUDE.md`: values migrate, they are never re-derived.

### 1.2 Inline CSS is transport, not a home, and this is where the stage breaks quietly

At step 8 parallel subagents write screens. **They cannot all write into `_wf.css`, they would collide.** So an agent puts its own screen's rules inline, **and that is temporary**: the reconcile pass of the same step folds them back.

**Two criteria decide the fate of every rule, and they are not preferences.**

1. **A token value never lives inline. Not even on one screen.** Greys, spacing, radius, type size are already variables in `_wf.css`, and a screen writes `var(--wf-...)`. **A literal inline is where drift starts.**
2. **A rule that appears on two or more screens moves into `_wf.css`.** Same "two or more occurrences" test stage 07 uses to decide what is a component. Only something genuinely one-off on one screen stays inline, **and even that is written through `var()`**.

**Why this is not pedantry.** Stage 07 extracts the component kit **from these screens**. If the structure of twenty screens lives in twenty inline blocks, the extract honestly collects a kit made of the differences: three versions of one card, two grids, four spacings where there should be one. **Stage 08's token audit then shows the forks, and the defect becomes visible three stages after it was created.** That is the most expensive class of error in this pipeline.

### 1.3 The IA anatomy is read as order, and rendered as one screen

`§01 desktop / §02 mobile` in an IA node is **the order and priority of blocks**. It is rendered as **one live screen at full viewport, mobile first**, never as two frames and never as the node diagram.

### 1.4 Body text comes from the node, interface strings are drafts

**Text comes from the A to E SEO block of each node:** the finished H1, the headings and the body. **So no lorem ipsum, anywhere.**

**Interface strings are a different thing and the IA does not hold them.** Buttons, field labels, state messages and toasts: the node holds **which information must be present in that place**, not the finished wording. **So they are drafts here:** write the substance of the action, short, no marketing, no exclamation marks. **Stage 05 owns the final wording** and it rewrites these files in place. **Do not push draft strings back into the IA.**

### 1.5 Components are included once

The shell `0.1`, the footer `0.2`, the skin card `0.6`, the case tile `0.7`, the ticker `0.8`, toasts `0.5` and the round proof `0.14` are documented IA nodes. **They are built once, on the etalon, and reused.** Nobody redraws the header per screen.

### 1.6 Every zone has a role, and every screen has exactly one main action

**A zone that cannot answer "why is it here" is a defect, not filler.** On any screen there is **exactly one main action**. **The footer is secondary and never competes with it.**

---

## 2. Fidelity, and what grey means

- **A live screen, not a diagram.** A real page at full viewport that clicks and scrolls. Zones carry real content and a clickable main action, **a real button or link**. No annotation labels on zones, no mockup frames, no skeleton placeholders standing in for a screen.
- **Structure, hierarchy and zones only**, in grey. **No colour, type choices, brand, icons, shadows, images or finished UI.** Those are stages 06 to 08. If look creeps in, put it back in grey.
- **A button label never wraps.** Added 20 August 2026, `D-52`. A label broken over two lines is a label read twice: the eye finds the verb, loses the amount, and comes back for it, **on the one control where the amount is the decision**. It also makes the control taller than the one beside it, so a row of two acts stops being a row of two equal acts. **What gives instead is the row, not the label:** below 599 the acts take a line each at full width. **And a control that sits in a row of controls is the height of that row**, or the row reads as controls plus an afterthought.
- **An icon is stage 06's. Its space is this stage's.** Amended 20 August 2026, `D-50`, generalising the rule the rail has followed since it was drawn: "a destination whose icon has no reserved space gets one bolted on later, which moves every label in the carrier on the day it arrives". **Every row, every destination, every figure with a unit mark gets a slot the size the icon will be**, so what arrives at stage 06 is an image in a place rather than a new element in a full row. **This is a game product and its carriers carry icons**, `CLAUDE.md` design principle 4: the main stage, not a back room. **A carrier drawn without its icon zones is not simpler, it is unfinished**, and the account menu, the mobile bar and the two money figures each shipped that way before this rule was written down.
- **Semantic HTML.** `header`, `nav`, `main`, `section`, `article`, `form`, `button`. Not a pile of divs. **Controls and fields are real elements**, because stage 07 reads these files and a styled span is not a button.
- **One viewport, mobile first.** The product is the web, so the screen is responsive and rebuilds itself wider, **but it is one live screen**, not a desktop file and a mobile file. **Mobile is checked by narrowing the browser**, never by a second file.

---

- **A responsive block goes after everything it overrides.** `_wf.css` has lost a media query to a later flat rule three times now, and every time the symptom was a layout that looked correct at one width and silently reverted at another. Specificity is equal, so order decides, and the order is not a preference.
- **A surface owes a person what to do. The node owes the reader why.** A sentence on a screen that answers "why is it built like this" belongs in the IA node, not on the screen. `D-57`.

- **No control is disabled to express a precondition.** A dead control answers "why not" with nothing, and a person who cannot see what to do either leaves or writes to support. The control stays live and the refusal says what is missing, marks it where it is, and puts the keyboard on it. `D-58`.

- **Every page this project publishes is measured, not only the ones the current stage is writing.** Two sweeps run: 315 checks over `wireframes/` at seven widths and both rail states, and 128 over `ia/`, `docs/` and the root at four widths. The second one found three IA pages that had scrolled sideways at 360px since the day each was written. `D-62`.

## 3. Naming

- **Latin, from `ia/docs/sitemap.md`.**
- **`wireframes/<name>.html` is the success state** of that screen.
- **`wireframes/<name>-<state>.html` for every real state**, one page each.
- **One exception in the whole project:** the product home screen is **`wireframes/index.html`**. The name `index` is reserved for the product's front door and for nothing else.
- **The hub listing every screen is `overview.html`**, never `index.html`. `CLAUDE.md` fixes this for every stage folder.

**Worked examples, from the matrix in `screens.md`:**

| Node | File |
|---|---|
| `1.0` Home, guest | `index.html` |
| `1.1` Home, account exists | `index-account.html` |
| `3.3` Case screen, phase 1 | `case.html` |
| `3.5` Phase 2, the open | `case-open.html` |
| `3.6` Phase 3, the outcome | `case-outcome.html` |
| `2.4` Sign in, consent not given | `signin.html` |
| `2.4` Sign in, one of two given | `signin-consent-partial.html` |

---

## 4. States

- **Every state is its own page.** Same structure, different content, **so the prototype can navigate between them**.
- **The floor is four**: empty, error, loading, success. **The real set comes from the States section of the node spec**, and it is usually larger: role states, domain states, transit states.
- **Success is not automatic everywhere.** A state that is not in the matrix does not get drawn.
- **Every state has a visible way out**, checked against `ia/docs/flows.md`. **No dead ends**, except the two the map declares dead by design and names as such: **`2.2` geo blocked** and **`5.7` restriction upheld**. Everything else has a way out, and `flows.md` states it for the catalogue in as many words: a person who finds nothing can always widen what they are looking at.
- **Missing is a state, never a zero.** `0.11` rule 3, and it is why `_wf.css` carries `.wf-fig-missing`. The eight holes in `screens.md` all render through it.

---

## 5. Nothing new gets drawn

**If a block, a page or a state is missing, fix the IA first and then render.** A block that appears in the wireframes for the first time is an IA defect, and drawing it here hides the defect instead of fixing it.

**The one thing that does not go back up:** button and label wording. Interface strings are drafted here and owned by stage 05, section 1.4.

---

## 6. Three readers, named by step, and each takes its own

**A usage rule with no executing step dies on the stage that wrote it.** So the readers are named here rather than left as "context for later stages".

| Reader | What it takes from this file |
|---|---|
| **Stage 05, step 4** | Section 1.6, **one main action per screen and a footer that does not compete**: microcopy must not create a second competing action, **and that is checked in the text rather than in the layout**. Plus section 4, the state rules, so the copy is written for the states that exist rather than inventing new ones |
| **Stage 07** | Sections 1.1 to 1.5, **what is inherited from the IA and does not change when the screens are coloured**. The component list in 1.5 is the input to the component inventory |
| **Stage 09, step 1** | Section 1.6 again, **reformulated in system class terms**: "no more than one `.btn--primary` per screen", written into `design/kit/docs/architecture.md` under usage rules. It is derived in the same pass as the patterns, with the same counter run backwards |

---

## 7. Deferred by name

**Colour, type choices, shadows, icons, images and finished UI.** Stages 06 to 08.

**And one thing that is deferred rather than absent:** the eight holes listed in `screens.md` section 5. They are not drawn as blanks. **Each renders as the "not available" state its own node already specifies**, so the screen is complete and the gap is visible on it.

---

## 8. The shell, drawn once and measured, after the founder read the etalon on 18 August 2026

**The finding.** The first etalon rendered the rail and the header as two boxes stacked above the content, so the rail was 90px tall and every block ran the full width of the window underneath it. `CLAUDE.md` fixes the opposite and fixes it as an inherited decision: "a full height left rail owning the logo, the destinations and its own toggle on the seam, and a header starting at the rail's edge". A rail that stops after four items is a third carrier nobody decided on.

**The contract, and it holds for every screen from here.**

| Rule | Value | Where it comes from |
|---|---|---|
| **The rail is full height** and holds the left edge at every width from 900px | `100vh`, sticky, `220px` | `CLAUDE.md` Baseline, node `0.1` section 1 |
| **The header starts at the rail's edge** and never spans the window | one grid column across | `0.1` section 1, and it holds no destination at all |
| **The toggle sits on the junction of the two seams**, not at the foot of the rail | 32px, on the rail's vertical edge at header height | `0.1` section 1. At the foot it read as a fifth destination, which is the one thing this control may not look like |
| **The mobile header is one row** | 61px at 360px | `0.1` section 9. Full figures with captions and two-word controls made it three rows and 230px, which pushed the state strip of `1.1` off the first screen |
| **The content column is capped and centred** | `--wf-content: 1220px`. **Amended 20 August 2026, `D-43`** | 1220px is what 1440 leaves after the rail, and 1440 is the width `baseline.md` walked. Uncapped, the argument blocks ran 1900px wide on the founder's own monitor. **The cap used to sit on `.wf-screen-body` with no auto margin, so the whole app was pinned to the left of a wide monitor and a 2000px screen got a 560px dead strip on the right.** It moved: the app is full width, and the header, the main column and every footer band share one `padding-inline: max(gutter, (100% - var(--wf-content)) / 2)`. **One declaration, three places, so their content edges cannot drift apart**, and a band can paint edge to edge while its content still lines up with the columns above it |

**One consequence worth stating rather than discovering.** The screen is laid out by a grid on `.wf-screen-body` and `.wf-shell` is `display: contents`, so the rail and the header become items of that grid. **No screen HTML changed to get this**, and none has to: a new screen inherits the shell by rendering `#wf-shell` exactly as the etalon does.

### 8.1 The second pass, after the founder put five baseline screens beside the etalon

The report was three things at once: the block composition, the proportions, and the weight of text. **Four of the five reference screens turned out to be blocks whose own node already specified the shape we were not drawing**, which makes them defects rather than preferences.

| What the reference showed | What we were drawing | The node that already said so |
|---|---|---|
| A footer of four bands: a statistics strip, four columns, an interlinking block, a copyright and marks row | One strip, one row of five links, one compliance line | `0.2` section 3, band by band. **The fourth column, Play responsibly, is the divergence from the baseline and it was missing whole** |
| The daily block as one panel: the wager at one end, the reset at the other, five tiers on one run, the control on its own line | Five boxes in a column with two figures underneath | `home.md` section 7, in those words |
| A section head of a title plus a line of what the block is for | A bare H2 | Not specified. **Taken from the reference**, because a bare H2 above a grid is what made the page read as a document |
| The route out of a shelf as one centred control | A small link at the left, under the grid | Not specified. Taken from the reference |
| A rail of full width rows with a hairline between them | Three floating text links in a 220px column | The carrier is inherited, `CLAUDE.md`. Its shape is part of what was inherited |

**And one thing was demoted rather than redrawn.** The SEO text block B10 was set at the same weight as the argument blocks B6 to B9, which doubled the page's apparent text. It is the SEO layer, `0.13`, not the page's case, so it now renders smaller and dimmer. **No word of it was cut**: the node owns that copy and stage 05 owns its final wording.

**The one block in the reference we still do not draw is the row of four game mode cards.** `D-20` defers it because one live card of four is the dead item defect, and `home.md` section 0 refuses a hub of nine when we would ship one. **It comes back when a second mode exists, or when the founder reverses `D-20` in writing.**

---

## 9. The control contract, and one thing that was specified and never drawn

**Added on 19 August 2026, when the founder said the buttons looked slapped together. They did, and for a reason that is one line of CSS.**

**A link styled as a button is still a link**, so it kept the browser's underline, and an underline running under a label inside a border is what made every control on the page look unfinished. **Controls are now drawn once and identically**, and the rule set is deliberately small:

- **`inline-flex`, centred by construction** rather than by the accident of line-height, so a one word label and a four word label are the same component.
- **No underline inside a control.** Underline belongs to links in prose, where it is the only thing marking them.
- **Two sizes and no third.** The default is a 44px tap target. `.wf-btn--small` is for a control that sits **inside** another component rather than under one, the ticker's pause and the tile's favourite. **A third size needs a reason written here first.**
- **One `.wf-btn--primary` per screen**, unchanged from section 1.6.

### 9.1 The mobile drawer: specified by `0.1`, never drawn until now

**Node `0.1` section 6 carries the modal drawer contract in full:** the scrim blocks the content behind, the three dismissals are selecting an item, tapping the scrim and the keyboard, and **"the bar sits behind the scrim with the content and is not raised above it"**.

**Stage 04 had drawn none of it.** The rail rendered **inline**, above the header, pushing the whole screen down, which is a disclosure rather than a drawer. It is now fixed, overlaid, and animated in from the leading edge, with the scrim created on open and removed on close so nothing invisible sits over the screen at a width where the drawer does not exist. The bar is at `z-index` 40 and the scrim at 65, which is the node's sentence expressed as a number.

**The finding worth carrying forward is not about the drawer.** A contract written in a node and not read at the drawing step produced a defect the founder found by opening the page. **Every node section titled "transient states" is now a checklist item for the screen that renders it**, not background reading.
