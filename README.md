# CS2 Clutch

Redesign of a live CS2 skin platform, built as a twelve stage product design pipeline. Working placeholder name. Baseline: daddyskins.com, the founder's own product, six years live.

**Live: [project roadmap](https://sergiodesign4u-dot.github.io/cs2-clutch/)**

Every stage leaves two outputs: a markdown source of truth in `docs/` for the model, and an html page in the browser for the person who decides. Structure and information architecture are inherited from the baseline; the visual language is derived from scratch at stage 06.

## Status

This table and `_nav.js` are the only two places where status lives. Nothing else records it.

| # | Stage | Pages | Status |
|---|-------|-------|--------|
| 01 | Foundation Research | [Research](https://sergiodesign4u-dot.github.io/cs2-clutch/research/research.html) | Done, 1 gap |
| 02 | User Research (Personas, JTBD) | [Personas](https://sergiodesign4u-dot.github.io/cs2-clutch/research/personas.html), [JTBD](https://sergiodesign4u-dot.github.io/cs2-clutch/research/jtbd.html) | Done |
| 02+ | CJM (As-Is, To-Be) | cjm-as-is, cjm-to-be | Next |
| 03 | Information Architecture (Base, Detail) | flows, concept-map, sitemap, structure | Not started |
| 04 | Wireframes | overview, index, screens | Not started |
| 05 | Voice | voice | Not started |
| 06 | Concept | directions, concept | Not started |
| 07 | UI + Visual | overview, index, sample screens | Not started |
| 08 | Tokens + Components | kit overview, foundations, component pages | Not started |
| 09 | Design System | why, patterns, states | Not started |
| 10 | Responsive | defined by the stage | Not started |
| 11 | Animation | defined by the stage | Not started |
| 12 | Handoff | defined by the stage | Not started |

**Named gap in stage 01.** The critique pass never ran on two instruments (Claude and Codex). It is carried openly rather than papered over, and closing it is the first work item of the next round. A second apparent gap turned out not to be one: the Lean UX Canvas was fully authored but lived only inside `research.html` with no markdown source. It has been extracted to `research/docs/lean-ux-canvas.md` cell for cell (D-08).

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
├── benchmark.md        trust and fairness benchmark across best-in-class products
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
