# CS2 Clutch

Redesign of a live CS2 skin platform. Working placeholder name. This file holds rules that must hold next session. It holds no status: status lives in `README.md` and in `/_nav.js`, and nowhere else. Budget: 200 lines. A new rule enters by replacing or generalising an existing one, never by being added alongside.

## Pipeline

The stage packs live outside this repo, in `/Users/sergiyshevchenko/Claud Projects/AI Design Workflow/`: `CLAUDE.md` (course source of truth) plus `01 - Research.md` through `10 - Responsive.md`. Read the pack of the stage being worked on before its first step. Nothing from that folder is copied into this repo. The twelve stage list is not repeated here: it lives in `/_nav.js`, which is the roadmap every page in the project renders from.

## Locked decisions

These are the stage 01 boundary answers. They were asked, not assumed, and they do not get re-derived.

| Decision | Value | Consequence |
|---|---|---|
| Language | One, English | One IA node is one page. Microcopy is strings, not keys. Voice and glossary run once. |
| Existing brand | Own logo, inherited colour | Amended 11 August 2026, `D-18`. Logo is ours. The colour register comes from the baseline, so stage 06 collects before it derives. |
| Existing design system | None | Stages 06 to 08 run as written. |
| Product size | Above the 8 screen floor | Stages 07 to 09 pay their full price and are worth it. |
| Baseline inheritance | Structure, IA and colour | See "Baseline" below. |

## Baseline

daddyskins.com is the product being redesigned. It is the founder's own product, six years live, and its structure carries six years of validated behaviour. Therefore:

- **Inherited, deliberately close to identical:** navigation model, page inventory, page composition, flows, the live drop ticker, the placement of the money and account actions. **The navigation model is two inherited carriers and no carrier holds another's kind:** a full height left rail owning the logo, the destinations and its own toggle on the seam, and a header starting at the rail's edge owning money and the account and holding no destination at all. **Mobile carries a third the baseline does not have, a bottom bar, and it is a shortcut subset of the rail rather than a second model: every item in it exists in the rail and the rail is always the superset.** **A carrier is inherited and filled with live items. Only a dead item is deferred, never the carrier that would have held it.** So the baseline's rail of nine ships as three live destinations and grows as modes arrive, while the row of four game mode cards on Home is deferred, because one live card of four is the dead item defect and Home carrying the case grid directly is what keeps the main job at three taps. A guideline about a component may not be used to select that component. `docs/decisions.md` D-19, D-20, D-21.
- **Also inherited, by founder decision of 11 August 2026:** the colour register. Stage 06 collects the baseline values before it derives anything, and its route becomes one collected plate plus a named list of what the founder wants changed, not three plates from nothing. Reasoning and limits: `docs/decisions.md` D-18.
- **Not inherited:** logo, typography, shape language, motion, component look, copy. That list is a limit, not an omission: nothing else follows the colour across.

The rule of the course still holds and outranks the resemblance target: a reference is an input, never an output. No screen is carried over whole. Where the inherited structure loses to research, research wins and the divergence is named out loud in the IA node.

**Inheriting a thing means having it written down first.** Everything in the list above is in `research/docs/baseline.md`, walked live on public pre-login pages on 11 August 2026 with proof screenshots. What is not in it is the rarity ladder, and the stage that needs it walks it the same way before building on it. Reconstructing the baseline from images plus model memory is the median the input gate exists to prevent, and it reads as knowledge until someone asks where a node came from.

## Scope

Round 1 is what gets designed to colour first. Everything else carries the `LATER` mark in the IA and waits for its own round.

**Round 1:** home, case opening, registration and account, deposit, skin withdrawal to Steam, provably fair page with verification tool, age gate and geo block layer, responsible play page, public result page. Nine surfaces, and the list has moved twice by founder decision, both times on 11 August 2026: responsible play was restored after the CJM stage found it named in the canvas and dropped from both scope lists with no verdict, and the public result page was added because row `F4` puts a shared object into the world and nothing said what that object was. `docs/decisions.md` D-20.

**LATER:** case battles, gunfights, upgrades, in-platform exchange, giveaways, leaderboards, referral programme, rakeback.

The MVP core is refined at capability level exactly once, in `research/docs/cjm-to-be.md`: 38 MVP rows over 37 distinct capabilities, grouped by the surface each one lives on. No other file holds a competing list. Stage 03a marked every screen and 03b marks every block, both inheriting that mark rather than deriving it a second time. `MVP` means a documented As-Is barrier recurs without the row, not merely that the mechanics still complete. An MVP that was never cut is not an MVP.

Marks travel with that backlog and are carried, not smoothed: the observed rate counter is conditional on decision `D-B`, the scale of stock-backed drop tables on an inventory figure that is still `[?]`, the blocked-market list is `[?]` until re-verified against current law, the conversion cost of the age gate has no target, and one capability sits in MVP with no parent in the three legal classes at all, the daily free case, placed there by founder decision and carrying that cost in the open. Reasoning: `docs/decisions.md` D-15.

## Information architecture

**Two layers, one stance.** The base layer answered where a person can go: seven clusters, twelve MVP screens, the routes. The detail layer answers what is on each screen and how it behaves, and every screen gets one specification with blocks, states, components and SEO. **Stance: mobile first, fully responsive, mobile base 360px.** Block priority and what sits on the first screen are reasoned from mobile, and desktop is designed deliberately rather than inherited by stretching. **SEO is decided ahead, in three layers on three stages:** the structural layer, URL and slug, H1 and H2, breadcrumbs, schema, indexation and internal linking, is IA and belongs here; stage 04 validates only that every SEO block has a visible place; final copy and real query volumes belong to production. Mixing them means a missing block is discovered as a redraw.

Seven clusters by intent, not by site section: decide whether this place is real, get through the door, choose what to open and open it, put money in, take out what I earned, keep myself in check, tell someone. Twelve MVP screens against thirteen LATER, expanded by 03b into 62 numbered nodes of which 49 are MVP, a count that grows when a carrier promises a destination the map does not hold, listed once in `ia/docs/sitemap.md` and never derived a second time. Routes, states and dead ends are in `ia/docs/flows.md`.

**Main flow:** home, case screen, age gate, open, outcome. **The rail carries three destinations before an account and four after**, Cases, Provably fair and Responsible play, plus My items once an account exists, and **on mobile a bottom bar carries a shortcut subset of it, Home plus Cases plus Provably fair, rising to four with My items**. The header carries the money as **two figures, balance and value of items held, both in real currency, never summed and never a score**, and money is never a bar item in either state. **Depth to the main job is three taps and one of them is the age gate**, which is why that gate carries only the 18+ declaration while identity verification sits before funding, `docs/decisions.md` D-17, D-19, D-21 and D-22.

**Screen codes carry an `S-` prefix, backlog capability codes do not.** They shared one namespace through four steps and collided on all twelve, and both readings parsed. 03b writes one node and one page per screen from these codes, 04 draws them and 07 colours them.

## Product substance

Primary JTBD, canonical wording, not paraphrased anywhere: when I am embedded in the CS2 ecosystem and want excitement beyond the game itself, I want a chance at a rare skin I actually want, with a reveal that feels real and unpredictable, so that I get the rush of a genuine drop and potentially end up with something worth having. Single owner: `research/docs/jtbd.md`. The reveal clause is load bearing, it is the whole of MVP core job 2 and of design principle 2, and it is exactly what three earlier paraphrases of this job dropped.

Primary persona is The Opener. `primary` does work, it does not only label: when two decisions conflict, the primary persona wins, and the interface is not built around secondary scenarios even though they must work. Sources: `research/docs/personas.md`, `research/docs/jtbd.md`.

Design principles, in priority order:

1. **Trust is the product.** Every visual and interaction decision answers first: does this help the user believe the drop is honest. Provable fairness is the brand, not a footnote, and since 11 August 2026 the word brand carries a stated limit: it means the product is built so that its own numbers are checkable, not that a verifier is what persuades a sceptic. What answers the doubt people actually record is published chance, current value and tested RTP at the moment of spending. Nothing is cut by this limit, one claim is. `docs/decisions.md` D-14.
2. **Motion serves emotion, not decoration.** Animation amplifies the reveal, signals outcomes, keeps the platform alive. Motion without an emotional or informational job gets cut.
3. **Clarity at every risk moment.** Where money is about to be spent, odds, cost and expected value are visible and legible. Cost never hides inside excitement.
4. **Dark and electric, never heavy.** High energy, neon accented, premium dark. The main stage, not a back room.
5. **Speed is trust.** Fast load, fast reveal, fast withdrawal status. Lag reads as dishonesty on a platform built on randomised outcomes.

Compliance is a first class product constraint, not a later feature: age verification before any case interaction, geo blocking informed by cited legal research, responsible play tooling (deposit limits, session limits, self exclusion, cool down), provable fairness as a legal and trust requirement, staged regional rollout resting on cited law. **A limit never acquires completion mechanics, streaks, status or a session score:** at that point it stops being a boundary and becomes a reason to keep going, and that binds stages 04, 07 and 11 as much as this one. Whether this category counts as gambling is unsettled and varies by jurisdiction. Sources and citations: `research/docs/research.md`, section 7.

## How we work

**Step by step, not autonomously.** One step, then show the result and wait. Ask where an input is missing instead of filling it with a median.

**The input gate runs before step 1 of every stage.** Check that every file the pack declares as an input actually exists in this repo. List what is missing as "which file, from which stage, what it was meant to give, which step goes hollow without it". Then the user decides: fill the gap, proceed with a named hole, or substitute a source. A model without a source does not stop, it returns a median, and that is the failure this gate exists to prevent.

**Quality of research output.** Cite the source of every fact. Never invent a number: unknown is `[?]`. Diverge then converge: several options, then the chosen one and why the others were dropped. Public and pre-login pages only, never log in. A fact about a competitor comes from a page opened in this session, not from model memory; taken from memory or from an undated article it is `[?]`, not a fact.

**Every capability names a parent, and there are exactly three legal classes:** a barrier code from the CJM As-Is map, a job from `jtbd.md`, or a named compliance constraint or design principle from this file, quoted by which one. A screen, a block or a component with no parent is cut, or carried with its orphan status printed in its own row. This holds from stage 03 on. Untraceable work is what gets defended later on taste alone.

**Live data.** Playwright first: it renders JS, navigates, scrolls, and saves proof screenshots into the stage `screens/` folder. Web fetch is the fallback for simple static pages.

**Acceptance happens on screen, not in a table, and on the published address, not only on localhost.** Where a stage produces a screen or text on a screen, open it in the browser, walk every state, narrow to 360px, then open the live URL and check the same page there before saying it is done. Local acceptance on its own once hid a dead sidebar on every published page for three stages. Deliver a fix as a prompt, not as a hand edit: a hand edit does not survive the next clone and takes the repeatability of the process with it.

**Critique runs on two instruments.** Every critique and audit step goes through Claude and through Codex (plugin `codex`, read only, stated explicitly on every call, reading this local working folder). Sets are taken independently and in full before any merge; dedup happens afterwards on complete data. Codex owns what is falsifiable in the source: contradiction between files, orphan without a parent, state absent from code, value drifted from its token, broken link, violated rule, fact without a source. Claude with a browser keeps what breaks at 360px, what breaks a layout as a string, and pixel comparisons. Every critique log carries a "found by" column. Codex unavailable means stop and ask, never a quiet single instrument pass. Its entry point is `AGENTS.md` in this root.

**Verify before fixing.** Re-read the place in the file before editing it: a parallel auditor reads a snapshot and can describe what is already gone. A finding that does not survive verification stays in the log marked "withdrawn on verification" with the reason, and is never deleted silently.

**Repeated prompt equals a rule here.** Typing the same instruction a third time means it belongs in this file, called by a trigger word, not in memory.

## Files and structure

Folder convention per stage: `docs/` for markdown sources of truth, the html page flat in the stage folder, `screens/` where proof images are needed. No `html/` subfolder. `research/` holds stages 01, 02 and 02+ together; `design/` holds the whole visual half from stage 06 on. A folder is created by the stage that first writes into it. No empty folders ahead of time and no `.gitkeep`.

`index.html` is the entry point of the folder you opened, and nothing else: at the repo root it is the project roadmap, in a stage folder it is the product home screen. Where a stage has a hub listing its pages, that hub is `overview.html`. A stage may have none: 03a shipped two equal pages and no hub.

**Every markdown file gets a visible place in the browser, named by the same step that creates it.** Four legal forms: its own page registered in a nav registry, a named section on the stage page registered in that page's `NAV_SECTIONS`, a satellite page outside the roadmap registry declaring `NAV_ACTIVE`, or a root level page for an artefact that belongs to no stage, listed in the brand block of `/_nav.js` beside the roadmap link and rendering its own `NAV_SECTIONS` at root level. `docs/decisions.html` is the only page of the fourth kind and the form exists because that artefact spans every stage and attaching it to one would have been a lie. An artefact no one can see in a browser does not exist for the person who decides. Service files (`CLAUDE.md`, `README.md`, `AGENTS.md`) need no page.

**Critique gets a visible place too, in closed form.** Not a defect list: a "before to after" summary by class, plus three to five telling pairs, assembled after the critique closes, with a status on every row and the "withdrawn on verification" rows visible with their reasons.

**Markdown stays alive, html does not freeze.** Changing a markdown file that already has a deployed page means rebuilding the affected section of that page in the same step. If the page structure cannot hold the new material, put a visible "Updated after publication" block on it and say so out loud.

`research/docs/personas.md` has no writer left. Stage 02 wrote it, CJM step 4 spent the one window to correct it, and that window is closed. Every stage from here reads it read only and returns a contradiction as a finding instead of describing people its own way. Reopening it is a decision named out loud, with the new writer named in `docs/decisions.md`.

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
