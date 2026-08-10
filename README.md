# CS2 Clutch

Redesign of a live CS2 skin platform, built as a twelve stage product design pipeline. Working placeholder name. Baseline: daddyskins.com, the founder's own product, six years live.

**Live: [project roadmap](https://sergiodesign4u-dot.github.io/cs2-clutch/)**

Every stage leaves two outputs: a markdown source of truth in `docs/` for the model, and an html page in the browser for the person who decides. Structure and information architecture are inherited from the baseline; the visual language is derived from scratch at stage 06.

## Status

This table and `_nav.js` are the only two places where status lives. Nothing else records it.

| # | Stage | Pages | Status |
|---|-------|-------|--------|
| 01 | Foundation Research | [Research](https://sergiodesign4u-dot.github.io/cs2-clutch/research/research.html) | Done |
| 02 | User Research (Personas, JTBD) | [Personas](https://sergiodesign4u-dot.github.io/cs2-clutch/research/personas.html), [JTBD](https://sergiodesign4u-dot.github.io/cs2-clutch/research/jtbd.html) | Done |
| 02+ | CJM (As-Is, To-Be) | [CJM As-Is](https://sergiodesign4u-dot.github.io/cs2-clutch/research/cjm-as-is.html), [CJM To-Be](https://sergiodesign4u-dot.github.io/cs2-clutch/research/cjm-to-be.html) | Done |
| 03 | Information Architecture (Base, Detail) | flows, concept-map, sitemap, structure | Next |
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

## Scope

**Round 1:** home, case opening, registration and account, deposit, skin withdrawal to Steam, provably fair page with verification tool, age gate and geo block.

**Later:** case battles, gunfights, upgrades, in-platform exchange, giveaways, leaderboards, referral programme, rakeback.

## Locked decisions

| Decision | Value |
|---|---|
| Language | One, English |
| Existing brand | None inherited. Own logo, own palette from stage 06 |
| Existing design system | None |
| Baseline inheritance | Structure and IA only. Look is derived, not lifted |

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
├── jtbd.md             JTBD hierarchy, matrix, critique
├── strategy.md         objectives, segments, business model, four locked founder decisions
├── live-research.md    post-persona verification: 5 confirmed, 1 killed, 2 unresolved
├── quality-check.md    quality gate, claim verification
└── product-model.md    superseded by strategy.md, kept for history
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
