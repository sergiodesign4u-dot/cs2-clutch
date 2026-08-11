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

**Amended on 2026-08-11, at the close of the CJM stage.** An eighth surface joins round 1: the responsible play page. It was named in `lean-ux-canvas.md:54` and dropped from this list with no verdict recorded anywhere, which the CJM map found and could not settle on its own. Reasoning and the second decision taken with it, the daily free case, are in D-15.

---

## D-06. Four residue files kept, with their fate named

**Date:** 2026-08-05. **Status: open.** **Owner:** the round that closes the stage 01 gaps.

`strategy.md`, `product-model.md`, `quality-check.md` and `live-research.md` moved into `research/docs/` but do not map onto any course artefact. They carry real research and cannot simply be deleted.

**Intended resolution, not yet executed:** the strategic layer of `strategy.md` folds into `research.md` and into the missing `lean-ux-canvas.md`; the four locked founder decisions inside it move into this file; `quality-check.md` and `live-research.md` merge into a single `critique.md`, which is what the course expects a critique log to be and which then earns a visible "before to after" section on `research.html`; `product-model.md` is superseded history and survives in git.

Carrying them unresolved is the smaller error. The larger one would be to leave them looking like current artefacts with no reader, which is exactly how the museum problem starts.

**Amended on 2026-08-11 at the stage 03a input gate. Narrowed, and the narrowing has a reason.** The resolution above cannot be executed as written: repointing the citations that the merge produces means editing `personas.md`, and that file has had no writer since CJM step 4. The merge of `quality-check.md` and `live-research.md` into `critique.md` is therefore dropped. It was tidiness, and tidiness bought with a broken rule is the trade this project keeps refusing. **Rejected with it:** naming stage 03a as a new writer for `personas.md` to get the merge through.

**What survives, and is executed by this round:** each of the four files carries a header saying what it is, which artefact superseded it, and who may still read it, and the four get one visible place in the browser. `product-model.md` is the urgent one. `ux-patterns.md:6` still cites it as a live input while this record calls it superseded history, so a dead file holds a living citation into a declared stage 03a input.

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

---

## D-12. CJM focus: one map, The Opener x the main job

**Date:** 2026-08-11. **Stage:** 02+, step 1.

**Chosen:** a single As-Is and To-Be map for the primary persona doing the main job, `personas.md:93` x `jtbd.md:17`. The map describes how that person does that job today, on the platforms that exist, without our product.

**Why that pair and not another.** `personas.md:95` states the reason the Opener is primary in terms the map needs: this person drives the most volume and is the first user any platform must succeed with. The rule in `CLAUDE.md` that the primary persona wins a conflict is the same rule that makes a second map a cost rather than a courtesy.

**Rejected: a map per persona.** The Battler's path diverges structurally, lobby, human opponent, simultaneous reveal, and would genuinely need its own map, but battle mode is hidden at launch (`jtbd.md:201`), so it earns that map in the round that opens it. The Researcher diverges by channel rather than by structure, search-led and reads odds before committing, which the pack answers with one marked line rather than a second full map. The Accumulator's path is a post-D1 loop and sits outside this job entirely.

**Consequence carried into stage 03.** Three of the four personas are represented in the map by a line, not by a path. The IA has to keep them working without being built around them, which is the same instruction `CLAUDE.md` already gives about the primary persona, now with a named place where it applies.

---

## D-13. Mining depth: Deep, chosen before step 3

**Date:** 2026-08-11. **Stage:** 02+, step 3. **Decided by:** the founder, before the mining pass ran.

**Chosen:** Deep. Full voice-of-customer mining under this focus: review aggregators, Reddit and topical forums, YouTube comments, discussions under the competitors in `competitors.md`. Public and pre-login pages only, no accounts. Anything behind a login stays `[?]`.

**What the fork actually bought, and it is not more quotes.** It bought the central finding of step 4: **the loss is almost never described as losing.** People describe one of two other things instead, and neither had appeared in any stage 01 or 02 artefact. That finding is what moved the floor of the emotional curve away from the open, where every competitor puts its design budget, and onto the outcome and the exit, P7 and P8, both at -5.

**It also bought a discipline that outlived it.** The mining pass read more than the evidence ledger can show. Rather than quoting the pass total, every count in the map was reduced to what `cjm-evidence.md` holds as a row with platform, rating, date and URL, and the wider pass total is named as a pass total. Where the pass reported something with no verbatim line, it is `[?]`: two of three named self-exclusion tools, the absence of a real-money iOS app, the whole of the country distribution.

**Rejected: Shallow.** It would have produced the same eight phases with emotions inferred from the stage 01 corpus, which is exactly the median this project's input gate exists to prevent. The cost of Deep, admitted: one full pass plus a targeted re-research on 11 August 2026 that opened video comment threads, the one source class the first pass could not reach.

**What it did not buy.** The age gate as a rendered screen is still `[?]` after both passes. Not one user anywhere describes meeting an age gate on arrival; age appears only as a ban reason at withdrawal. That hole is inherited by stage 03 with no evidence behind the screen it has to draw.

---

## D-14. Provable fairness ships, positioned as a secondary proof

**Date:** 2026-08-11. **Stage:** 02+, step 8. **Decided by:** the founder, in the step 8 conversation.

**The problem this closes.** `CLAUDE.md` design principle 1 says provable fairness is the brand, not a footnote. The mining says something else: the barrier that actually recurs is `B7-2`, the belief that the numbers shown are not the numbers used, a pattern of 11 people, and a cryptographic verifier is not what those 11 people ask for. The three provably fair rows in the backlog, E4 the round hash, F3 the post-reveal link, H1 the public page, trace to Related Job 3, which scores 3 for The Researcher and 1 for The Opener.

**Chosen:** build and ship all three, and stop claiming they convert a sceptic.

**What is demoted is a claim, not a feature.** Nothing is cut. The reframing is that provable fairness is evidence that our own numbers are honest, which is a different job from making a sceptic believe them at all. What answers `B7-2` at launch is D2, the published chance and current value per item, and D4, the published tested RTP and expected value at this entry cost. D3, the observed rate counter, is infrastructure at launch and does not close `B7-2` until N is large enough, which depends on decision `D-B`.

**Rejected: cutting the provably fair page from round 1.** It is a locked round 1 surface and a declared job, and `jtbd.md:180` names a public provably fair surface as one of three things no competitor offers before login. **Also rejected:** leaving principle 1 as written and letting three rows quietly stand on a claim the evidence does not support.

**Consequence for stage 06 and after.** Principle 1 keeps its priority, and the word "brand" in it now has a stated limit: it means the product is built so that its own numbers are checkable, not that a verifier is the thing that persuades. Whoever designs the hero reads that limit before deciding what occupies it.

---

## D-15. The MVP core is refined once, in one place, and two questions are left for the founder

**Date:** 2026-08-11. **Stage:** 02+, steps 8 and 11.

**The problem.** Three lists in this repository carried the name of the MVP core and did not agree: 3 jobs at `jtbd.md`, 8 solution bullets in the Lean UX canvas, and a 7 item round 1 screen list in `CLAUDE.md` against an 8 item LATER list. No file mapped any of them onto the others.

**Chosen:** one backlog at capability level, in `cjm-to-be.md`, 38 MVP rows over 37 distinct capabilities, grouped by the round 1 surface each row lives on. Every other file points at it and none of them holds a competing copy. `CLAUDE.md` wins every disagreement about scope, and the canvas cell is kept as drawn because a canvas records what was believed when it was drawn.

**Rejected: a second list.** The failure mode the pack names is "naming, not forking", and the way it happens is that each stage writes its own MVP list next to the last one. `jtbd.md`, `jtbd.html`, `lean-ux-canvas.md` and `research.html` were all edited in the same step so that no file was left holding the old version.

**Two things this stage found and did not smooth.** The criterion stated in `jtbd.md` for choosing the three core jobs, score 3 for the primary persona, is failed by the third of its own three: withdraw cleanly scores 2 for The Opener. It stays in the core as a stated exception, because it is the only one whose failure ends the relationship rather than degrading it. And the priority test for MVP had to be restated as "a documented As-Is barrier recurs" rather than "the mechanics still complete", after which seven rows declared themselves exceptions rather than hiding behind the label.

**Two questions went to the founder and both came back on 11 August 2026. Both were answered the same way: take them.**

1. **The daily free case enters round 1 as backlog row I2.** `jtbd.md:198` is founder Decision 3 and says the MVP free-to-play offer is starter credit plus daily free case. The round 1 list neither contained it nor ruled it out, and a founder decision is not settled by a superseded canvas cell, so the row was held in LATER for exactly one step and then decided by the person whose decision it was. **What the decision does not resolve is printed in the row rather than closed by it.** I2 is the only capability on the map with no parent in any of the three legal classes: not a barrier, not a job, not a named constraint. It stands on this decision and on the MVP product decision at `aarrr.md:172`. And it repeats daily the impression that answer 1 of the To-Be map records as the starter credit's residual risk, that opening is free, which is the one impression the rest of the map spends its budget contradicting. Its success signal is the D7 retention rate at `aarrr.md:167`, target `[?]` 35 percent, marked a hypothesis at its own source. **Rejected: giving it a borrowed parent to make the table look clean.** A fourth parent class was not invented either. The row is an exception that declares itself, which is the same treatment the other seven exceptions get.
2. **The responsible play page returns to round 1, taking the surface count from seven to eight.** `lean-ux-canvas.md:54` names an actual page. Both scope lists dropped it with no verdict recorded anywhere in the repository, and `cjm-as-is.md:125` had already noticed. Its tooling survives as C2 and C5, session limit, self exclusion, cool down, and the compliance constraint in `CLAUDE.md` requires that tooling to exist regardless. The contribution of the CJM stage here was not a design answer: it was finding a page that had been deleted by silence and naming who had to decide. The page has no group of its own in the backlog, because its capabilities live where the money decision is made, at the deposit.

**A third thing closed with them.** Critique finding M-01 had handed the wording of design principle 1 to this step. `CLAUDE.md` said "provable fairness is the brand, not a footnote" while the map framed it as a secondary proof, and only one of the two could be read literally. Principle 1 now carries the limit in its own text, so the rule file and the map say the same thing. See D-14.

**Open, inherited, and not closed here.** D-11 handed the relocation of `benchmark.md` Part 2 into `competitors.md` to the round that runs CJM step 4, on the ground that this step may touch `personas.md`. Step 4 ran and did not do it. The relocation is now unowned, and `personas.md` returns to having no writer at all once this stage closes. **Closed by D-16.**

---

## D-16. The relocation of `benchmark.md` Part 2 is cancelled

**Date:** 2026-08-11. **Stage:** 03a input gate. **Closes:** the only thread in the project with no owner. **Status: closed, will not do.**

D-11 handed the move of Part 2 into `competitors.md` to the round that runs CJM step 4, because only that round was permitted to touch `personas.md` and repoint the citations the move would break. Step 4 ran and did not do it. The thread has been unowned since, and the window it depended on closed with the stage.

**Chosen: do not move it.** Part 2 was already renamed for what it is, an in-category competitor matrix and therefore step 3 material, and its section and mechanism numbering never changed. All twelve citations across `personas.md`, `jtbd.md`, `ux-patterns.md`, `research.md` and `quality-check.md` still resolve by name. Nothing downstream is broken by the section living where it lives. The move buys shelf order and nothing else.

**Rejected: handing it to stage 03a with a new writer for `personas.md`.** The only thing the move actually requires is editing citations inside a file whose single-writer rule this project wrote down on purpose. A rule bent once for a cosmetic gain is bent later for a real one, and the gain here is cosmetic by its own description.

**Cost accepted:** one file keeps two populations under one name, and a reader who opens `benchmark.md` expecting only out-of-category products meets an in-category matrix in Part 2. The header of that section says which it is, so the cost is a moment of surprise rather than a wrong conclusion.

---

## D-17. The four open map decisions, answered at the input gate

**Date:** 2026-08-11. **Stage:** 03a input gate. **Decided by:** the founder, with the shape of `D-A` recommended and accepted. **Closes:** `D-A` in shape and `D-C` in schedule. **Leaves conditional:** `D-B` and `D-D`, both with owners.

The To-Be map closed carrying four decisions it had no right to take by itself. `cjm-to-be.md:351` names the stage 03a input gate as their latest owner. They came due here and all four were answered.

### `D-A`. The age and identity method: two layers, not one

**Chosen.** Layer 1 is an 18+ self-declaration at registration. Layer 2 is identity verification before funding, which is the sequence that was already locked.

**The founder's answer is taken as an addition, not as a replacement, and the reason is in this repository rather than in anyone's judgement.** `aarrr.md:105` already discarded soft and optional age gating by name, citing the UK Online Safety Act of July 2025 and its requirement of robust identity-based verification. A declaration on its own would put this product below its own cited research and below the compliance constraint in `CLAUDE.md`. It sits above the baseline either way: `research.md:171` records daddyskins.com as having no age verification beyond FAQ text at all.

**What the split buys is the one thing `aarrr.md:110` marks unknown,** the conversion cost of identity verification, `[?]`. The cheap declaration meets every visitor at the door, where conversion is most fragile and where a heavy gate would be paid for by people who never reach a deposit. The expensive verification meets the person at the money moment, where they are already committed and where the law actually attaches. B1 to B3 stay intact, verification still resolves before funding, and the withdrawal route still carries no verification branch.

**The method inside layer 2 stays open, and the flow is drawn as a superset instead of waiting for it.** Facial age estimation as the fast path, document KYC as the escalation when estimation is inconclusive. That shape contains both candidate methods, including the asynchronous "pending review" state that only KYC has and that changes the shape of the flow rather than its screen count. If cited legal research later forces document KYC for everyone, one branch is deleted rather than the whole flow redrawn. **Rejected: picking one method now to keep the flow simple.** The simpler flow would have been redrawn once, and a redrawn flow loses the reason it had its original shape.

**Owners.** The method inside layer 2: stage 03b. The cited legal research and counsel: the founder, running in parallel because it costs calendar rather than session time.

### `D-B`. The roll history migration is a question to the platform, not a decision by the design

**Chosen: ask, and proceed with the fallback recorded rather than wait.** Two parts, both factual: whether six years of roll history exists in a form that migrates into a new ledger, and whether any legal or contractual reason prevents publishing it.

Until an answer arrives, 03a proceeds with D3, the observed rate counter, in the map, because a counter that starts at launch is worth building on day one and worthless to retrofit. If the answer is negative, the capability is disqualified by its own evidence rule until volume accrues, and the finite visible pool returns from the cut table by default rather than by preference. That fallback is already written at `cjm-to-be.md:283` and has a row to return to.

### `D-C`. The internal check runs before stage 04, not before 03a

**Chosen: scheduled, with the reason stated in full.** Every trust capability on the To-Be map is a commitment device that only works for an operator whose published weights are already true. The observed-against-published check ships to the public and is never taken down.

It is placed before stage 04 rather than before 03a because it changes no node and no route: it changes whether the routes are worth drawing at all. It costs one query now, and it costs the entire visual half of the project if it comes back negative after stage 07. **This is the cheapest test in the project and the one with the largest blast radius, and that pairing is the whole reason it gets a date instead of a mention.**

### `D-D`. Inventory capital is deferred to 03b on purpose

**Chosen: defer, and say why rather than letting it drift.** It sets the ceiling on what the case grid can contain, and a grid is a block, which is detail-layer material. On the base layer the case grid is one node and its capacity is not measured.

**Rejected: asking now because it is cheap to ask.** A treasury question asked five weeks before it is needed comes back as a guess, and a guess written into a document is indistinguishable from a figure a month later. Owner: 03b.

---

## D-18. The baseline is inherited visually as well, and D-03 loses its palette clause

**Date:** 2026-08-11. **Stage:** 03a input gate. **Decided by:** the founder. **Amends:** D-03 and D-04.

**Chosen.** The structure of daddyskins.com is matched closely, with improvements, which D-04 already said and which this record only confirms. What is new: **the colour register is taken from the baseline rather than derived to sit near it.**

**What this overturns, stated rather than quietly reinterpreted.** D-03 chose the full "no brand yet" route and explicitly rejected "the brand already exists route with one collected plate and values lifted from the baseline". D-04 listed the palette under "not inherited". `CLAUDE.md` said the register enters stage 06 as an attribute feeding the plates, "adjacent by derivation, not by copy". Those clauses no longer hold as written. The founder owns the product and the brand and the call is theirs; what this record refuses to do is leave two files saying opposite things and let stage 06 pick whichever it reads first.

**What is deliberately not decided yet, and why later is better than now.** Whether "take the colours" means the exact values or the register carried by our own values cannot be answered today, because **no file in this repository holds a single colour value from the baseline.** The corpus documents daddyskins at the trust and competitive level: eleven mentions in `research.md`, a benchmark score of 15 out of 40, six screenshots in `research/screens/baseline/`. Not one hex value anywhere. Answering now would be choosing between two descriptions. Answering after the values are extracted is choosing between two things on the table, which is a different quality of decision for the same price.

**Limits of this record, so that it is not read wider than it is.** The logo stays not inherited. Typography, shape language, motion and component look are not covered here and stay where D-04 put them. The consequence for stage 06 is that its route shifts from three brand plates toward one collected plate plus a named list of what the founder wants changed, and that shift is recorded here rather than discovered by stage 06 as a surprise.

**The consequence for 03a, and it is why this record exists before step 1 rather than after it.** "Inherit the structure" currently has **no source document.** `CLAUDE.md` names what is inherited, the navigation model, the page inventory, the page composition, the flows, the left icon rail, the live drop ticker and the placement of the money and account actions, and not one of those seven is written down anywhere in this repository. Six screenshots are not an inventory. Building the concept sitemap on them would mean reconstructing a six-year-old product from images plus model memory, which is exactly the median the input gate exists to prevent, and it would look convincing right up until someone asked where a node came from. The baseline therefore gets its own documented walk, on public and pre-login pages, before step 1 of the stage.

**Executed the same day.** `research/docs/baseline.md`, visible at `research/baseline.html`, seven pages opened live with proof screenshots in `research/screens/baseline/`. It found more than the inventory it was sent for. **Of the nine destinations in the left icon rail, exactly one is in our round 1**, which means the navigation model cannot be inherited as drawn without shipping a round 1 that is eight-ninths empty. Backlog row D2 turns out to be inherited rather than added, because the baseline already publishes per item chance and the roll interval pre-login. The daily free case, our parentless row I2, already exists there gated behind a wager requirement rather than given away, which is an inherited answer to the exact risk I2 carries in the open. The age gate and the responsible play page are the only two round 1 surfaces with no baseline at all: age is one FAQ sentence and responsible play returns zero matches anywhere on the product. And the walk answered this record's own held question with a fact rather than an argument: **every documentation page in this repository already runs the baseline's three accent values**, `#E94D8B`, `#65A3FF` and `#FADA62`, with a card ground one hex digit from the baseline's. That went unrecorded for three stages while D-03 said the palette was not inherited.

---

## D-19. The base layer of the information architecture

**Date:** 2026-08-11. **Stage:** 03a, closed at step 8. **Binds:** 03b, which expands every node, stage 04, which draws them, and stage 07, which colours them.

### Why the clusters formed this way

**Chosen: seven clusters by intent**, each named for what the person is trying to do. Decide whether this place is real. Get through the door. Choose what to open and open it. Put money in. Take out what I earned. Keep myself in check. Tell someone.

**Rejected: grouping by site section**, which is what the baseline runs and what every competitor runs. It produces a map whose top level is the operator's org chart rather than anyone's intent, and it hides the fact that four of the twelve screens exist because a barrier or a constraint demands them rather than because a person wants them. Cluster B, get through the door, is three screens nobody chooses to visit, and naming it by intent is what makes that visible instead of burying it under "Account".

**Rejected: grouping by persona.** The Opener is primary and `CLAUDE.md` says the interface is not built around secondary scenarios, so a persona-shaped map would have had one full branch and three stubs. The secondary personas are represented in the matrix and in the emotional and social table, which is where they belong.

### Why this navigation model, and what was flattened for three taps

**Chosen: four global items in two states**, and pre-login it is two. Cases, Provably fair, and after an account exists My items and Balance.

**Provably fair in the global navigation is the one structural claim here that no competitor makes.** `jtbd.md:180` names a public provably fair surface as one of three things no competitor offers pre-login, and the baseline walk verified on 11 August 2026 that our own baseline still redirects that route to login. A principle that does not reach the navigation is a slogan. It carries the limit `D-14` attached to it: the position is not a claim that a verifier converts a sceptic.

**Rejected: keeping the baseline's left icon rail.** The rail is a mode switcher with nine destinations and **exactly one of them is in our round 1**. A rail carrying one live item and eight dead ones advertises absence on every screen. Deferred with its trigger named, battles at Phase 1.5, rather than deleted. This is the largest single divergence from the inherited structure and it is named here because `CLAUDE.md` requires divergences to be named rather than absorbed.

**What was flattened, stated as a cost rather than defended.** Featured cases sit on Home, which is what buys the three tap route to the main job. Home therefore carries three loads at once: the trust evaluation that rows A1 to A5 exist for, the entry to the main job, and after step 6 the starter credit offer as well. Design principle 3 says cost never hides inside excitement, and a home that is simultaneously a trust page and a shop is exactly where that risk lives. Handed to stage 04 as a named constraint rather than as a solved problem.

**One of the three taps is the age gate**, which is the reason that gate carries only the 18+ declaration. If identity verification sat at that tap the main job would be unreachable inside budget for a first-time visitor. The two layer split came from `D-17`, a compliance argument, and the Pattern A reconciliation at step 2 arrived at the same shape from a completely different direction. Two instruments converging on one answer is the strongest thing that happened in this stage.

**One structural fork stays open.** Whether the catalogue survives as a separate node depends on `D-D`. A small enough backed catalogue means Home absorbs it. Deferred, not guessed.

### How the orphans were resolved

**One orphan job, RJ4, convert my result into something more valuable.** Backlog, deliberately. Its two screens exist in the map marked LATER, it scores 2 for the primary persona and 3 for a secondary one, and the row stays empty and marked rather than being given a tick somewhere plausible.

**One orphan screen, responsible play, and the finding was about the instrument.** It has no functional job and never will, because nobody arrives wanting to limit themselves. Its parents are a barrier and a compliance constraint, both legal classes in this project. **The pack's tracing matrix measures exactly one of the three**, so any screen parented on a barrier or a constraint reads as ballast. Deposit escapes only by accident, because the CJM mapped phase T4 onto Related Job 2. Kept the matrix, added the paragraph, and named the limit rather than putting a tick somewhere to make the table look clean.

**Seven orphan screens in LATER, carried rather than cut**, because scope locks them in and no step may cut a locked item. Each has to acquire a parent before its own round opens. One of them, Top wins, had fallen out of the screen list between two steps and was restored at step 7 when the count disagreed with its own list.

### The screen code namespace, and why it is a rule rather than a note

All twelve screen codes collided with backlog capability codes: `C1` was the catalogue and also "one real currency throughout", `E1` was the account and also "the reveal renders the settled roll". Both readings parsed, which is why it survived four steps and produced ambiguous sentences in shipped files. Screens now carry an `S-` prefix and backlog codes are untouched, because they belong to `cjm-to-be.md` and this stage does not rewrite an upstream file. **03b writes one node per screen from these codes**, so the rule enters `CLAUDE.md` rather than staying here.

### What both critiques cost and what they bought

31 findings across two passes on two instruments. Codex 13, Claude 13, both 5. 25 fixed, 2 withdrawn on verification with their reasons kept visible, 3 carried with an owner, 1 outside this stage.

**Six of the fourteen findings in the second pass were damage the first pass caused**, three of them by a single rename regex. Critique 1 found what the map was missing, critique 2 found what fixing it broke. A stage that runs one critique and stops ships that damage, and this is the first time in the project that the second pass paid for itself in a way that can be counted.

**The second critique split with zero overlap between instruments**, which is the strongest evidence for the two instrument rule the project has produced. Codex owned every mechanical inconsistency including the three defects the rename had just created; Claude owned the consequences of its own edits, an axis Codex cannot have because it did not make them.

---

## D-20. The 03b input gate: three answers, and one structural input that changed the shape of Home

**Date:** 2026-08-11. **Stage:** 03b input gate. **Decided by:** the founder. **Closes:** `D-D`, and the ninth surface question `sitemap.md` raised and refused to answer. **Schedules:** `D-C` together with `D-B`, as one request to the live platform. **Amends:** the round 1 scope list in `CLAUDE.md`, from eight surfaces to nine.

The gate found no missing file. All five declared inputs exist and are substantive. What it found instead were three decisions 03a had deliberately left, all three landing inside the first steps of this stage, and all three were answered in one move.

### The structural input, which was not asked for and mattered most

The founder described the target architecture without being asked: **Home routes to several game modes, and round 1 ships case opening plus the account with deposit and withdrawal plus the supporting pages.** The scope half of that matches the locked round 1 list exactly. The other half is a statement about the shape of Home, and nothing in this repository had one.

The baseline confirms both halves as an existing product rather than as a plan. `baseline.md` section 4: Home carries a row of four game mode cards, Cases, Case Battles, Gunfights and Upgrade, and the case catalogue is a separate page at `/en/cases` with a category bar, a search and filter control, the daily cases ladder and rows of case tiles.

### `D-D`. Answered by structure rather than by a number, and the number is no longer in the way

**Chosen: `S-C1` Case catalogue stays a node, and it comes off the main path.** Home in round 1 carries the case grid directly. The mode hub row is inherited as a pattern and deferred as a shipment, with the second mode as its trigger. The catalogue is reached as "all cases" from Home and owns what Home cannot hold: the categories, the search, the filters and the daily entry.

**Why the mode hub cannot ship in round 1, and it is the same reason as the rail.** Exactly one mode exists in round 1. A four card mode row with one live card and three dead ones is the left icon rail's defect at a different scale, and `D-19` already ruled on that shape. Deferring rather than deleting is the same verdict for the same reason, which is why this enters `CLAUDE.md` as one generalised rule and not as a second one beside it.

**And there is an arithmetic reason that is harder to argue with.** A mode hub layer inserts a tap. `CLAUDE.md` locks the main job at three taps with one of them the age gate: case tile, gate, open. Through a hub it reads mode card, case tile, gate, open, which is four. A locked number would have been broken by a routing layer serving one destination.

**Rejected: cutting `S-C1` entirely and letting Home hold everything.** The baseline runs 239 distinct cases across thirteen categories. Even a fraction of that needs a page with a category bar and a search, and Home is already carrying three loads by `D-19`'s own count.

**The inventory figure stays `[?]` and no longer blocks anything.** Whatever the backed count turns out to be, Home shows a curated subset and the catalogue holds all of it. The question returns at step 4 of this stage, where the grid's capacity is a block decision rather than a map decision, which is where `D-17` said it belonged.

**Cost carried, stated rather than absorbed.** Home now has a fourth load on top of the three `D-19` recorded: it is also the structural placeholder for a mode hub that ships later. Handed to stage 04 as a named constraint.

### The ninth surface. Option 1, the public result page

**Chosen: the public result page exists, and round 1 becomes nine surfaces.** `sitemap.md` raised this at step 5 and refused to decide it, because `CLAUDE.md` locks the list at eight and the rule outranks the step. The founder amended the list.

Reasoning taken as recommended and already written at `ia/docs/sitemap.md`: row `F4` is the single exception to the priority test in the whole backlog, the path does not break without it but the referral loop does, and landing a shared result on a verifier form gives that loop the least emotionally sharp object the product owns. Option 2 was rejected for that reason. Option 3, moving `F4` out of round 1, was rejected because `F4`'s own row says that is exactly what breaks.

**Consequence:** the scope line in `CLAUDE.md` changes from eight surfaces to nine. That is a rule edit and it goes through the budget, not around it.

### `D-C` and `D-B` go to the platform as one request

**Chosen: send now, in parallel with steps 1 to 3, because it costs calendar rather than session time.** `D-17` scheduled `D-C` before stage 04, and 03b is the last stage before it, so the deadline is real rather than nominal.

Both questions are answered by the same query against the live platform's roll history, which is why they travel together:

1. For each live case, the published per item drop chance against the observed per item hit rate, with `N`, and the difference.
2. The aggregate observed RTP against the RTP the platform publishes or claims.
3. Whether roll history is retained per roll with its server seed, client seed and nonce, which is what makes it migratable into a published ledger. This part is `D-B`.
4. Whether any legal or contractual reason prevents publishing it. Also `D-B`.

A negative answer to 1 or 2 changes no node and no route. It changes whether the routes are worth drawing at all, which is the pairing `D-17` described as the cheapest test in the project with the largest blast radius.

### What stays open, and does not block

`D-A`, the method inside identity verification, stays with counsel. The flow is drawn as a superset per `D-17`, and `S-B3`'s specification will carry the method as `[?]`. The free entry withdrawal hole rides on the same answer.

**One cost this stage will pay, named here first.** The canonical skin card needs the rarity ladder, and the baseline walk deliberately did not walk it. `CLAUDE.md` gives that walk to the stage that needs it, which is this one, before step 5.

### Dependencies, checked rather than assumed

Refero answered a live call at the gate. Its index is weighted toward SaaS and AI tools, so a domain flavoured query returns noise, which is the practical reason the pack demands searching by page type and job rather than by industry. Playwright is proven and 32 competitor screenshots already sit in `research/screens/`.

**One stop is predicted now so it is not a surprise at step 4.** Deposit, account with inventory, and withdrawal sit behind login at all five hard competitors, and this project does not log in. The domain half of the block bank will be absent for those three types, and the bank will say so in place of substituting a marketing landing page of a different type.
