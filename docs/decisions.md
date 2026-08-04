# Decision records

What was done, why it was done that way, what was rejected and on what grounds. This file is never auto loaded. Reference it by path, not by import. Newest last.

---

## D-01. Migrate the old project onto the course structure

**Date:** 2026-08-05. **Stage:** migration, before 02+.

The repo was built under an ad hoc scheme: eleven markdown files flat in `research/`, three html pages at the root, an inline sidebar copied into each page, six empty placeholder folders with `.gitkeep`, and a `CLAUDE.md` carrying status tables. The pipeline the project is moving onto expects `research/docs/` with fixed names, pages flat inside the stage folder, one root navigation registry, and a `CLAUDE.md` of rules with no status in it at all.

**Chosen:** full migration.

**Rejected:** a hybrid keeping the old file locations and adding only navigation. Every later pack declares its inputs by exact path, and the input gate would then fail by hand on every stage, twelve times, for the life of the project. **Also rejected:** a fresh repository. It would have thrown away the git history of the research and forced a manual carry of every artefact.

**Cost accepted:** roughly 175 lines of source path citations inside the research corpus had to be rewritten, since the files those lines cite moved.

---

## D-02. One language, English

**Date:** 2026-08-05. **Stage:** 01 boundary question, answered by the founder.

Multilingual multiplies the IA node count by language, pulls in hreflang and URL structure, forces microcopy into keys instead of strings, runs voice and glossary separately per language, and requires layouts that survive text a third longer. It is decided at 03a because after 03a it means rewriting every IA node.

**Chosen:** one language, English. **Rejected:** English plus Russian, and full multilingual matching the baseline.

---

## D-03. No brand inherited

**Date:** 2026-08-05. **Stage:** 01 boundary question, answered by the founder.

The baseline has a live brand: dark violet ground, hot pink accent, a top hat skull mark. The founder wants a new logo and a look of its own.

**Chosen:** stage 06 runs the full "no brand yet" route: three brand plates, own palette, own typography, own shape language. **Rejected:** the "brand already exists" route with one collected plate and values lifted from the baseline.

**Constraint carried forward, not to be lost:** the founder asked for a colour register adjacent to the baseline, dark near black with a hot accent and neon energy. That enters stage 06 as an attribute feeding the plates, never as a lifted palette. If the derived palette lands far from that register, it gets said out loud and decided, not quietly accepted.

---

## D-04. The baseline is inherited structurally, not visually

**Date:** 2026-08-05. **Stage:** migration, binding on 03a and 03b.

daddyskins.com is the founder's own product, six years live. Its structure carries six years of validated behaviour, which is a stronger input than anything a fresh IA exercise could produce.

**Inherited, deliberately close to identical:** navigation model, page inventory, page composition, flows, the left icon rail, the live drop ticker, the placement of money and account actions.

**Not inherited:** logo, palette, typography, shape language, motion, component look, copy.

The course rule that a reference is an input and never an output still outranks the resemblance target. No screen is carried over whole. Where the inherited structure loses to research, research wins and the divergence is named in the IA node rather than absorbed silently.

---

## D-05. Round 1 scope

**Date:** 2026-08-05. **Stage:** binding on 03a, which marks every screen MVP or LATER.

The founder named home, one game (case opening) and registration with an account as the starting point, then chose to close the money loop and the compliance layer in the same round.

**Round 1:** home, case opening, registration and account, deposit, skin withdrawal to Steam, provably fair page with verification tool, age gate and geo block.

**Later:** case battles, gunfights, upgrades, in-platform exchange, giveaways, leaderboards, referral programme, rakeback.

**Reasoning for the additions beyond the three named:** deposit, because a case cannot be paid for without it and the loop breaks on the first step. Withdrawal, because the research names it the primary exit trigger and it is the payoff the whole value loop exists to deliver. Provably fair, because the brief makes fairness the differentiator rather than a footnote. Age gate and geo block, because the brief makes compliance a first class constraint.

---

## D-06. Four residue files kept, with their fate named

**Date:** 2026-08-05. **Status: open.** **Owner:** the round that closes the stage 01 gaps.

`strategy.md`, `product-model.md`, `quality-check.md` and `live-research.md` moved into `research/docs/` but do not map onto any course artefact. They carry real research and cannot simply be deleted.

**Intended resolution, not yet executed:** the strategic layer of `strategy.md` folds into `research.md` and into the missing `lean-ux-canvas.md`; the four locked founder decisions inside it move into this file; `quality-check.md` and `live-research.md` merge into a single `critique.md`, which is what the course expects a critique log to be and which then earns a visible "before to after" section on `research.html`; `product-model.md` is superseded history and survives in git.

Carrying them unresolved is the smaller error. The larger one would be to leave them looking like current artefacts with no reader, which is exactly how the museum problem starts.

---

## D-07. Nine theme variables in `_nav.css`, not eight

**Date:** 2026-08-05. **Stage:** migration.

The course specifies eight variables at the top of `_nav.css`: `--nav-fg`, `--nav-active`, `--nav-muted`, `--nav-rule`, `--nav-badge`, `--nav-w`, `--nav-size`, `--nav-lh`. The panel is fixed over scrolling page content and needs an opaque plate of its own, so it also needs a background value.

**Chosen:** add `--nav-bg` as a ninth variable in the same block. The intent of the rule holds: the theme lives in one file and pages never write `nav-*` rules of their own. Naming the deviation beats diverging quietly.

---

## D-08. The Lean UX Canvas had no markdown source, and that is now fixed

**Date:** 2026-08-05. **Status: closed.**

Stage 01 as the course defines it produces six documents, and `lean-ux-canvas.md` appeared to be missing. It was not missing: the canvas was fully authored, all eight cells, but it lived only inside `research.html`. Html was the source and markdown did not exist, which is the ownership rule inverted.

**Chosen:** extract it cell for cell into `research/docs/lean-ux-canvas.md`, with nothing added, removed or reworded, and record the provenance of the extraction inside the file. Markdown is the source again, html is the visualisation, and the section already had its visible place in `NAV_SECTIONS`.

**Rejected:** writing a fresh canvas from `research.md`. That would have produced a stage 01 artefact reverse engineered from its own downstream summary, which is exactly the "both sides derived from one source" failure, and it would have thrown away the authored one.

**Two divergences found during the extraction, recorded inside the file and not patched:** cell 3 names three motivation segments (Thrill Seeker, Grinder, Collector) while stage 02 later cut the audience behaviourally into four personas, with no mapping ever written between the two models; and cell 5 carries the old five game MVP, which round 1 has since narrowed. Both are carried as written, because a canvas records what was believed when it was drawn, with the authoritative source named next to each.

---

## D-09. The remaining stage 01 gap is carried openly

**Date:** 2026-08-05. **Status: open.**

Stage 01 requires a critique pass on two instruments, Claude and Codex, and it never ran on this material. Everything downstream rests on stage 01, so a fabricated number there poisons all eleven stages below it, and this is the cheapest place to catch one.

**Chosen:** name the gap in `README.md` and in `AGENTS.md` so that no later audit reports it as a discovery, and make closing it the first work item of the next round. **Rejected:** running the critique inline during the structure migration. Critique is a stage step with its own log, its own verification pass and its own visible "before to after" section; folding it into a migration would produce findings with nowhere to live.
