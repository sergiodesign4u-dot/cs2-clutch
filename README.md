# CS2 Clutch

Redesign of a live CS2 skin platform, built as a twelve stage product design pipeline. Working placeholder name. Baseline: daddyskins.com, the founder's own product, six years live.

**Live: [project roadmap](https://sergiodesign4u-dot.github.io/cs2-clutch/)**

Every stage leaves two outputs: a markdown source of truth in `docs/` for the model, and an html page in the browser for the person who decides. Structure and information architecture are inherited from the baseline, and so is the colour register since 11 August 2026. Typography, shape language, motion and copy are derived at stage 06.

## Status

This table and `_nav.js` are the only two places where status lives. Nothing else records it.

| # | Stage | Pages | Status |
|---|-------|-------|--------|
| 01 | Foundation Research | [Research](https://sergiodesign4u-dot.github.io/cs2-clutch/research/research.html) | Done |
| 02 | User Research (Personas, JTBD) | [Personas](https://sergiodesign4u-dot.github.io/cs2-clutch/research/personas.html), [JTBD](https://sergiodesign4u-dot.github.io/cs2-clutch/research/jtbd.html) | Done |
| 02+ | CJM (As-Is, To-Be) | [CJM As-Is](https://sergiodesign4u-dot.github.io/cs2-clutch/research/cjm-as-is.html), [CJM To-Be](https://sergiodesign4u-dot.github.io/cs2-clutch/research/cjm-to-be.html) | Done |
| 03 | Information Architecture (Base, Detail) | [Flows](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/flows.html), [Concept map](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/concept-map.html), [Sitemap](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/sitemap.html), [Structure](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/structure.html), [0.1 Navigation](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/navigation.html), [0.2 Footer](https://sergiodesign4u-dot.github.io/cs2-clutch/ia/footer.html) | In progress. Base layer done, Detail layer at node 2 of 22 |
| 04 | Wireframes | overview, index, screens | Not started |
| 05 | Voice | voice | Not started |
| 06 | Concept | directions, concept | Not started |
| 07 | UI + Visual | overview, index, sample screens | Not started |
| 08 | Tokens + Components | kit overview, foundations, component pages | Not started |
| 09 | Design System | why, patterns, states | Not started |
| 10 | Responsive | defined by the stage | Not started |
| 11 | Animation | defined by the stage | Not started |
| 12 | Handoff | defined by the stage | Not started |

**Stage 01 critique: done and closed.** It ran on two instruments in August 2026 and produced 22 confirmed findings, 2 withdrawn on verification. All 22 are now fixed, and the summary is visible on the research page under "Before and after" (D-10).

**The last one, closed by re-running step 4.** The benchmark had scored five same-category competitors, while the stage defines it as one dimension measured against four to five best-in-class products from **other** categories. It could not be edited into shape, so it was re-run on 5 August 2026. Dimension chosen by the founder: **the reveal moment**. Products: Pokémon TCG Pocket, MONOPOLY GO!, EA SPORTS FC 26 Ultimate Team, Genshin Impact, Nike SNKRS. Six criteria, all verifiable from pages opened in a browser that day, with screenshots in `research/screens/benchmark/`. The in-category trust scoring is retained as Part 2 of the same file, renamed for what it is, with its relocation into `competitors.md` owned by CJM step 4 (D-11).

One thing the re-run could not deliver, named rather than hidden: no product in the set documents the craft of its reveal publicly, because probability disclosure is legally forced in several jurisdictions and craft is not. Timing, cut, sound and hold get designed at stage 06, not matched.

**CJM stage: done, August 2026.** `cjm-as-is.md` is the research half: the input inventory, the eight phases of the real path, and on each phase an emotion with a counted source or a `[?]`, plus 8 barrier classes, an emotional curve that breaks rather than interpolates where no signal exists, and 5 growth zones. `cjm-evidence.md` holds the quotes each pattern is counted from. `cjm-to-be.md` is the design half: the same eight phases rebuilt, six divergences run diverge-then-converge, every capability traced to a barrier, a job or a named constraint, and one backlog of 38 MVP rows over 37 distinct capabilities that refines the MVP core instead of forking it. Both halves went through a two instrument critique, 40 rows on As-Is and 37 on To-Be. The stage closed with two founder decisions on 11 August 2026: the responsible play page returns to round 1, and the daily free case enters the MVP as row I2 with its missing parent stated rather than dressed up.

**The one line conclusion.** The deepest pit is not the open, it is everything after it: P7 the outcome and P8 payoff or exit both sit at -5, on patterns of 7, 11 and 12 people, while the open itself has no counted signal at all. To-Be closes that end of the path with the instance value receipt that follows the item into inventory and onto the withdrawal record, a public withdrawal clock with per-state timers and our own published p90, and the rule that the sum required to withdraw is stated before the deposit and can never rise.

**IA base layer: done, August 2026.** Sixteen entities before any screen, twelve MVP screens in seven intent clusters against thirteen LATER, six flows in Mermaid with states and dead ends rather than happy paths, and the main job at three taps. The tracing matrix carries a scope row and a budget line, and both critiques ran on two instruments: 31 findings, Codex 13, Claude 13, both 5, with 25 fixed and the withdrawn ones visible with their reasons. **One thing it decided did not survive the detail layer.** The base layer flattened the baseline's nine item rail into a header of four items; on 11 August 2026 the founder reversed that at node 0.1. The model is the baseline's own two carriers, a rail that owns destinations and a header that owns money in two figures, with the rail filled by round 1's live items only. Reasoning: `docs/decisions.md` D-19 and D-21.

**Stage 03 input gate: passed on 11 August 2026, and it found more than it expected.** All seven declared inputs exist. The four decisions the CJM map could not close were answered (D-17): the age gate becomes two layers, a declaration at registration plus identity verification before funding; the roll history migration goes to the platform as a question of fact; the internal weights check is scheduled before stage 04; inventory capital is deferred to 03b. The founder also decided the colour register is taken from the baseline rather than derived near it (D-18), which reverses part of D-03. Then the gate found that "the structure is inherited" had no source document: seven things were listed as inherited and none of them was written down. That produced `baseline.md`, a live walk of daddyskins.com on public pre-login pages, whose sharpest finding is that **only one of the nine left rail destinations is in round 1**.

## Scope

**Round 1:** home, case opening, registration and account, deposit, skin withdrawal to Steam, provably fair page with verification tool, age gate and geo block, responsible play page, public result page. Nine surfaces, and the list moved twice on 11 August 2026, both times by founder decision: responsible play was restored after the CJM stage found it named in the Lean UX canvas and dropped from both scope lists with no verdict, and the public result page was added at the 03b gate because row `F4` puts a shared object into the world and nothing said what that object was.

**Later:** case battles, gunfights, upgrades, in-platform exchange, giveaways, leaderboards, referral programme, rakeback.

## Locked decisions

| Decision | Value |
|---|---|
| Language | One, English |
| Existing brand | Own logo. **Colour register inherited from the baseline** by founder decision, 11 Aug 2026, D-18 |
| Existing design system | None |
| Baseline inheritance | Structure, IA and colour. Typography, shape, motion and copy are ours |

Full reasoning and consequences: `CLAUDE.md`. Decision records: `docs/decisions.md`.

## Sources

```
research/docs/
├── competitors.md      competitor groups (hard, soft, aspirational) and matrix
├── benchmark.md        Part 1 reveal-moment benchmark (out of category), Part 2 retained trust matrix
├── aarrr.md            AARRR funnel, one metric and one decision per stage
├── ux-patterns.md      behavioural patterns and the chosen pattern
├── lean-ux-canvas.md   Lean UX Canvas v2 (Gothelf), glance view of the foundation
├── research.md         synthesis, single source of truth
├── personas.md         four behavioural personas, one primary
├── jtbd.md             JTBD hierarchy, matrix, MVP core refined at the CJM stage
├── cjm-as-is.md        As-Is journey: 8 phases, emotions with sources, barriers, growth zones
├── cjm-evidence.md     the counted quotes behind every As-Is pattern
├── cjm-to-be.md        To-Be journey, divergences, backlog and MVP core
├── baseline.md         daddyskins.com walked live: inventory, navigation, composition, colour
├── strategy.md         objectives, segments, business model, four locked founder decisions
├── live-research.md    post-persona verification: 5 confirmed, 1 killed, 2 unresolved
├── quality-check.md    quality gate, claim verification
└── product-model.md    superseded by strategy.md, kept for history
ia/docs/
├── sitemap.md          entities, detailed node map (clusters 0..8), navigation, tracing matrix
├── flows.md            six user flows in Mermaid: decisions, states, both ends
├── critique.md         both critique passes, two instruments, with a found-by column
└── pages/              one md per file-level node, 22 planned
    ├── navigation.md   node 0.1, the two carriers: rail and header, state matrix, anatomy, SEO and a11y
    └── footer.md       node 0.2, the second interlinking plane, the trust strip and the legal ground
research/screens/            competitor screenshots
research/screens/baseline/   daddyskins.com baseline screenshots
research/screens/benchmark/  out-of-category reveal-moment sources
```

The last four files are migration residue: they carry real research but do not map onto a course artefact yet. Their fate is recorded in `docs/decisions.md` and settled in the next round.

## Repo layout

```
index.html          project roadmap, entry point
_nav.js             the one navigation registry: stages, pages, done flags
_nav.css            the one sidebar theme
CLAUDE.md           rules that must hold next session, no status
AGENTS.md           entry point for the Codex critic
docs/decisions.md   decision records, never auto loaded
research/           stages 01, 02 and 02+
```

The stage packs live outside this repo, in `AI Design Workflow/`. Nothing from there is committed here.
