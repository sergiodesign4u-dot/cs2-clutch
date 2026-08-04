# CS2 Clutch

Redesign of a live CS2 skin platform. Working placeholder name. This file holds rules that must hold next session. It holds no status: status lives in `README.md` and in `/_nav.js`, and nowhere else. Budget: 200 lines. A new rule enters by replacing or generalising an existing one, never by being added alongside.

## Pipeline

The stage packs live outside this repo, in `/Users/sergiyshevchenko/Claud Projects/AI Design Workflow/`: `CLAUDE.md` (course source of truth) plus `01 - Research.md` through `09 - Design System.md`. Read the pack of the stage being worked on before its first step. Nothing from that folder is copied into this repo.

Twelve stages: Foundation Research, User Research (Personas, JTBD, CJM As-Is, CJM To-Be), Information Architecture (Base layer, Detail layer), Wireframes, Voice, Concept, UI + Visual, Tokens + Components, Design System, Responsive, Animation, Handoff.

## Locked decisions

These are the stage 01 boundary answers. They were asked, not assumed, and they do not get re-derived.

| Decision | Value | Consequence |
|---|---|---|
| Language | One, English | One IA node is one page. Microcopy is strings, not keys. Voice and glossary run once. |
| Existing brand | None inherited | Own logo, own palette. Stage 06 runs the full "no brand yet" route: three plates, own visual language. |
| Existing design system | None | Stages 06 to 08 run as written. |
| Product size | Above the 8 screen floor | Stages 07 to 09 pay their full price and are worth it. |
| Baseline inheritance | Structure and IA only | See "Baseline" below. |

## Baseline

daddyskins.com is the product being redesigned. It is the founder's own product, six years live, and its structure carries six years of validated behaviour. Therefore:

- **Inherited, deliberately close to identical:** navigation model, page inventory, page composition, flows, the left icon rail, the live drop ticker, the placement of the money and account actions.
- **Not inherited:** logo, palette, typography, shape language, motion, component look, copy.

The rule of the course still holds and outranks the resemblance target: a reference is an input, never an output. No screen is carried over whole. Where the inherited structure loses to research, research wins and the divergence is named out loud in the IA node.

One nuance carried from the founder and not to be lost at stage 06: the colour register should read as adjacent to the baseline, not as a break from it. Dark near black ground, a hot accent, neon energy. That enters stage 06 as an **attribute** feeding the plates, never as a palette lifted from the baseline. Adjacent by derivation, not by copy. If the derived palette lands far from that register, it gets said out loud and decided, not quietly accepted.

## Scope

Round 1 is what gets designed to colour first. Everything else carries the `LATER` mark in the IA and waits for its own round.

**Round 1:** home, case opening, registration and account, deposit, skin withdrawal to Steam, provably fair page with verification tool, age gate and geo block layer.

**LATER:** case battles, gunfights, upgrades, in-platform exchange, giveaways, leaderboards, referral programme, rakeback.

The MVP mark lives in one place: stage 03a puts `MVP` or `LATER` on every screen, and 03b puts it on every block. An MVP that was never cut is not an MVP.

## Product substance

Primary JTBD: when I am between CS2 sessions and want more excitement in the ecosystem, I want to open a case with a real chance at a skin I actually want, so that I get the rush of a drop and possibly end up with something worth having.

Primary persona is The Opener. `primary` does work, it does not only label: when two decisions conflict, the primary persona wins, and the interface is not built around secondary scenarios even though they must work. Sources: `research/docs/personas.md`, `research/docs/jtbd.md`.

Design principles, in priority order:

1. **Trust is the product.** Every visual and interaction decision answers first: does this help the user believe the drop is honest. Provable fairness is the brand, not a footnote.
2. **Motion serves emotion, not decoration.** Animation amplifies the reveal, signals outcomes, keeps the platform alive. Motion without an emotional or informational job gets cut.
3. **Clarity at every risk moment.** Where money is about to be spent, odds, cost and expected value are visible and legible. Cost never hides inside excitement.
4. **Dark and electric, never heavy.** High energy, neon accented, premium dark. The main stage, not a back room.
5. **Speed is trust.** Fast load, fast reveal, fast withdrawal status. Lag reads as dishonesty on a platform built on randomised outcomes.

Compliance is a first class product constraint, not a later feature: age verification before any case interaction, geo blocking informed by cited legal research, responsible play tooling (deposit limits, session limits, self exclusion, cool down), provable fairness as a legal and trust requirement, staged regional rollout resting on cited law. Whether this category counts as gambling is unsettled and varies by jurisdiction. Sources and citations: `research/docs/research.md`, section 7.

## How we work

**Step by step, not autonomously.** One step, then show the result and wait. Ask where an input is missing instead of filling it with a median.

**The input gate runs before step 1 of every stage.** Check that every file the pack declares as an input actually exists in this repo. List what is missing as "which file, from which stage, what it was meant to give, which step goes hollow without it". Then the user decides: fill the gap, proceed with a named hole, or substitute a source. A model without a source does not stop, it returns a median, and that is the failure this gate exists to prevent.

**Quality of research output.** Cite the source of every fact. Never invent a number: unknown is `[?]`. Diverge then converge: several options, then the chosen one and why the others were dropped. Public and pre-login pages only, never log in. A fact about a competitor comes from a page opened in this session, not from model memory; taken from memory or from an undated article it is `[?]`, not a fact.

**Live data.** Playwright first: it renders JS, navigates, scrolls, and saves proof screenshots into the stage `screens/` folder. Web fetch is the fallback for simple static pages.

**Acceptance happens on screen, not in a table.** Where a stage produces a screen or text on a screen, open it in the browser, walk every state, narrow to 360px, and only then say it is done. Deliver a fix as a prompt, not as a hand edit: a hand edit does not survive the next clone and takes the repeatability of the process with it.

**Critique runs on two instruments.** Every critique and audit step goes through Claude and through Codex (plugin `codex`, read only, stated explicitly on every call, reading this local working folder). Sets are taken independently and in full before any merge; dedup happens afterwards on complete data. Codex owns what is falsifiable in the source: contradiction between files, orphan without a parent, state absent from code, value drifted from its token, broken link, violated rule, fact without a source. Claude with a browser keeps what breaks at 360px, what breaks a layout as a string, and pixel comparisons. Every critique log carries a "found by" column. Codex unavailable means stop and ask, never a quiet single instrument pass. Its entry point is `AGENTS.md` in this root.

**Verify before fixing.** Re-read the place in the file before editing it: a parallel auditor reads a snapshot and can describe what is already gone. A finding that does not survive verification stays in the log marked "withdrawn on verification" with the reason, and is never deleted silently.

**Repeated prompt equals a rule here.** Typing the same instruction a third time means it belongs in this file, called by a trigger word, not in memory.

## Files and structure

Folder convention per stage: `docs/` for markdown sources of truth, the html page flat in the stage folder, `screens/` where proof images are needed. No `html/` subfolder. `research/` holds stages 01, 02 and 02+ together; `design/` holds the whole visual half from stage 06 on. A folder is created by the stage that first writes into it. No empty folders ahead of time and no `.gitkeep`.

`index.html` is the entry point of the folder you opened, and nothing else: at the repo root it is the project roadmap, in a stage folder it is the product home screen. The hub listing every page of a stage is always `overview.html`.

**Every markdown file gets a visible place in the browser, named by the same step that creates it.** Three legal forms: its own page registered in a nav registry, a named section on the stage page registered in that page's `NAV_SECTIONS`, or a satellite page outside the roadmap registry declaring `NAV_ACTIVE`. An artefact no one can see in a browser does not exist for the person who decides. Service files (`CLAUDE.md`, `README.md`, `AGENTS.md`) need no page.

**Critique gets a visible place too, in closed form.** Not a defect list: a "before to after" summary by class, plus three to five telling pairs, assembled after the critique closes, with a status on every row and the "withdrawn on verification" rows visible with their reasons.

**Markdown stays alive, html does not freeze.** Changing a markdown file that already has a deployed page means rebuilding the affected section of that page in the same step. If the page structure cannot hold the new material, put a visible "Updated after publication" block on it and say so out loud.

`research/docs/personas.md` has exactly one writer after stage 02: CJM step 4. Every other stage reads it read only and returns a contradiction as a finding instead of describing people its own way.

**Sidebar comes from the root registry.** Every page carries an empty `<aside id="sidebar">`, declares `window.NAV_BASE`, optionally `NAV_SECTIONS` / `NAV_ACTIVE` / `NAV_ACTIVE_LABEL`, links `_nav.css` and loads `_nav.js`. The renderer computes active, Next, SOON, the accordion and every relative link. The single manual act is `done: true` in `/_nav.js` when a page is finished. No page writes `nav-*` rules of its own.

**Values migrate, they are never re-derived.** One line of CSS values runs through stages 06, 07 and 08 without being derived a second time: brand plate pixels, then `DESIGN-artifacts.md` with the origin of each value, then `design/_theme.css`, then `design/kit/kit.css` by `git mv`, then `design/system/tokens.css` split into primitive and semantic, then state tokens in both themes. Each step adds a level, none rewrites the previous one. A value changes only by a deliberate decision named out loud as "variable, value, why", never as a side effect of an extract or a refactor.

**Two ladders, and they are different axes.** Tokens split by where the value comes from (primitive, semantic). Components split by markup nesting: level equals one plus the highest level of what the component contains, capped at three (atoms, molecules, organisms), with patterns above them from stage 09. The level is produced exactly once, as a column in `design/kit/inventory.md`, and after that it is only read: it drives the split into files, the `@import` order, the showcase groups and the assembly rounds. Grouping components by purpose at the top level is forbidden.

## Where things get written

| What it is | Where it goes | Owner |
|---|---|---|
| Rule that must hold next session | this file, or a zone `CLAUDE.md` | the stage that derived it |
| Status: what is done, what is next | `README.md` table plus `done: true` in `/_nav.js` | those two files only |
| Decision record: what was done, why, what was rejected | `docs/decisions.md`, never auto loaded | the stage that decided |

Closing a stage, in order: collect candidates, classify each one by the table above, **show what to delete from this file and why**, count the budget (lines before, lines after), write only after an explicit go, then update status in its own two files. Deletion is half the work and the only thing that keeps this file alive.

## Output conventions

Internal markdown is English. Chat is Ukrainian. Html pages are English. No em dash in any output file of this project: it is an AI tell. Product copy embedded in markdown (SEO text in IA nodes, glossary and forbidden phrases in voice docs, render labels) is written in the product language, while the analysis around it stays English.
