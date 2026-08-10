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

---

## D-10. Stage 01 critique, run on two instruments

**Date:** 2026-08-05. **Closes:** D-09. **Leaves open:** one finding, carried deliberately (see the last section here).

The stage 01 critique had never run. It ran now, following the stage pack: Codex first and read only, Claude's own pass in parallel on a different class, neither instrument seeing the other's table until both were complete, dedup afterwards on full data.

**Dedup key:** file, line and statement. Where both instruments hit the same line with different defects, one row was kept and both defects named, because a single fix has to satisfy both.

**Result:** 22 findings confirmed, 2 withdrawn on verification. Codex 12, Claude 8, both 2. No verdicts conflicted, so nothing had to be escalated.

**Why the split fell that way, and what it says about the second instrument.** Codex took the entire class of unsourced facts, including nine sites that step 8 of stage 01 had already walked past with its own pass. That is the whole argument for a second instrument in one number: the author of the material, re-reading the material, believed the same things the second time. Claude took the entire class of conclusions that do not follow from any fact above them, which needs the product understood rather than the text read.

**The pattern underneath both classes.** The level files were consistently more honest than the synthesis. `competitors.md` carried a `[?]` on the pre-login conversion claim and the synthesis dropped it. `benchmark.md` said in line 7 that Hellcase had been removed from scoring, and the synthesis then called Hellcase the lowest-scoring platform in the category. The defect is not born in the research. It is born on the merge, and that is where the next round should look first.

**Withdrawn on verification, kept visible so they do not return:**

- Codex reported Clash.gg's "Champion house edge 7.5%" as unsourced. The source index carries the row (skincasereviewer.com). Half the finding falls; "30-second average matchmaking" in the same cell had no source and was fixed.
- Claude reported two source index rows citing "research compilation" instead of a source. One of the two carries a real URL. Corrected to one row, which was fixed.

**Pre-critique wording of the canvas, preserved as promised in `lean-ux-canvas.md`:**

> **Cell 7, riskiest assumption:** "Users who care about trust infrastructure will discover this platform through it, convert into depositors because of it, and stay longer because of it, at a rate meaningfully above what the same effort would achieve spent on a bigger first-deposit bonus, more streamers, or a Rain-style ambient mechanic." Counter-evidence: "Hellcase has 2M MAU and 150,000 daily opens with the lowest trust score in category."

> **Cell 8, smallest test:** "Landing page A/B. Variant A, trust-first: 'the only platform with a named, verified RNG auditor, check the result yourself'. Variant B, experience-first: 'the most electric case opening on the web'."

Both were retired because their premise had been killed in `research.md` section 9 and because Decision 1 had already chosen the hybrid hero. The assumption now lives in exactly one place, `strategy.md` section 4, and is quoted rather than restated elsewhere.

**One finding stayed open by decision, and is closed by D-11:** `benchmark.md` scored five same-category competitors, while stage 01 step 4 defines the benchmark as one dimension measured against four to five best-in-class products from **other** categories, and warns against exactly this confusion in its own text. Stages 04, 06 and 07 read this file. Editing could not fix it: the file measured the wrong population. It had to be re-run, and step 4 requires the founder to choose the dimension first from proposed candidates rather than the model deciding.

---

## D-11. Step 4 re-run. The benchmark measures the reveal moment

**Date:** 2026-08-05. **Closes:** the last open finding of D-10. **Leaves open:** one relocation, owned and dated below.

**Dimension, chosen by the founder** from three candidates offered (the reveal moment, the trust and verification layer, the money in-and-out loop): **the reveal moment**, the span from committing to a randomised outcome to understanding what you got and knowing what to do next. It is the one span the product exists to deliver, and the primary JTBD names it directly.

**Five products, none of them in our category:** Pokémon TCG Pocket (digital collectible cards), MONOPOLY GO! (casual mobile), EA SPORTS FC 26 Ultimate Team (sports game), Genshin Impact (action RPG), Nike SNKRS (retail commerce). Six criteria on a 1 to 5 scale. Scores: 29, 25, 19, 19, 9 out of 30.

**Every score rests on a page opened in a browser on 2026-08-05,** listed with URL and screenshot in the file's own source index, screenshots in `research/screens/benchmark/`.

**The criteria were chosen to be verifiable from outside the product, and that constraint produced the sharpest finding in the step.** Odds, floors, rarity ladders and duplicate economies are documented publicly, because probability disclosure is a legal requirement in several jurisdictions and publishers write those pages themselves. The craft of a reveal is documented nowhere: build-up length, where the cut lands, what sound does at the payoff, how long the hold is. So the mechanics of a reveal are copyable from documentation and the craft is not. Stage 06 gets C1 to C6 from the benchmark and has to derive the timing, the cut, the sound and the hold itself, then test them. Any number that appears later for those is a decision this project made, not a benchmark it matched, and it gets recorded that way. Stage 11 inherits the same list.

**Rejected: scoring the craft criteria anyway from secondary write-ups and model memory.** That would have produced a table with no `[?]` in it and no way to tell which cells were facts. Cells that could not be verified from a public page carry `[?]` and say so.

**One access failure recorded rather than worked around:** the in-client Genshin announcement viewer at `webstatic.hoyoverse.com` returns HTTP 403 to an outside browser. The Genshin figures therefore rest on a community statistical model published on HoYoverse's own community platform in 2021, which states the 0.6% base rate and the 90-pull limit as publisher-announced and derives the curve between them from 25 million recorded pulls. That distinction is preserved in the observation and must not be flattened later. It is also the finding that matters most for us: the most successful pity system in games is one whose actual behaviour players had to reverse engineer, which is the exact gap this product exists to close.

**Kept, not deleted: the old trust and fairness scoring.** It is now Part 2 of the same file, renamed for what it is, an in-category competitor matrix and therefore step 3 material. It stays in `benchmark.md` rather than moving because twelve citations across `personas.md`, `jtbd.md`, `ux-patterns.md`, `research.md` and `quality-check.md` resolve into it by name, including `benchmark.md (Criterion 2: Odds Visibility)` and `benchmark.md Mechanism 1`, and `personas.md` has exactly one writer. Its section and mechanism numbering is unchanged, so every existing citation still resolves.

**Open, with an owner and a trigger:** the round that runs CJM step 4 moves Part 2 into `competitors.md` and repoints every citation in the same pass, including those in `personas.md`, which that step is permitted to touch. **Rejected:** doing it now by rewriting `personas.md`, which would have broken the single-writer rule to save one round of waiting.
