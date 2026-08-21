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

---

## D-21. The navigation model returns to the baseline: two carriers, and the rail ships

**Date:** 2026-08-11. **Stage:** 03b, step 2, node 0.1. **Decided by:** the founder, on rejecting the first version of the node. **Binds:** every node from here, stage 04 which draws them, stage 07 which colours them, and it amends `D-19`.

### What was rejected and what was named instead

The first version of node 0.1 shipped a **bottom tab bar** on mobile and a single header row on desktop, with four global destinations in two account states.

The founder rejected it with three screenshots of the baseline's own navigation and named the model directly: **two menus**, filled with the content round 1 is ready to ship, with the **header changing on login** and carrying **two money figures**, the upper one the balance and the lower one the value of what is held in skins.

### The failure was structural, and the class matters more than the node

`CLAUDE.md` lists the **navigation model** first among the things inherited "deliberately close to identical". The first version replaced that model with a different one, and the justification was a Material Design guideline about navigation bars.

**A component guideline can tell you how to build a component well. It cannot tell you which component to build.** The research was correct and the conclusion drawn from it was outside what it could support. A locked inheritance decision was overturned by a source with no standing to overturn it, and the divergence was never named as one, which is the specific thing `CLAUDE.md` requires of every divergence.

Recorded as a class so that a later stage does not repeat the move on a different component: **a guideline about a component may not be used to select that component.**

### How this sits with `D-19`, which deferred the rail

`D-19` rejected the baseline rail on one ground, quoted exactly: "a rail carrying one live item and eight dead ones advertises absence on every screen."

**The founder's instruction does not overrule that objection, it removes its subject.** The rail ships with round 1's own destinations and every item in it is live: Cases, Provably fair, Responsible play, and My items once an account exists. Three for a guest, four with an account, against Material's collapsed rail range of 3 to 7. Nothing in it is dead, so nothing in it advertises absence.

**What `D-19` measured was the baseline's nine item list, not the rail as a component.** That distinction was available at the time and was not made.

**`D-20`'s ruling on the mode hub on Home is untouched.** Home still carries the case grid directly. The rail is not a mode switcher in round 1, it is the product's destination list, and the modes join it as they ship.

### Why the carrier is built for the destination rather than for the round

Material's two rules point opposite ways at two moments in this product's life, and both were opened live on 11 August 2026.

- "Don't use a navigation bar for fewer than three destinations."
- "For products with more than five navigation items, don't use a navigation bar."

At round 1's count Material would pick a bar. At the locked scope, nine baseline rail destinations and eight LATER surfaces in `CLAUDE.md`, Material forbids a bar outright. **Chosen: the rail, because the rail is the carrier that receives the roadmap.** A bar would be replaced rather than extended.

**Cost, accepted and named.** On mobile the rail is a modal drawer behind a menu icon, the baseline's own behaviour. From any screen that is not Home, the catalogue costs two taps rather than one. Material's compact-window advice is declined knowingly. **The three tap budget for the main job is untouched**, because the main flow never routes through the rail: tap 1 is a case tile on Home, tap 2 is the gate, tap 3 is Open.

### The geometry, specified by the founder in the same sitting

**The rail runs the full height of the window and the logo sits at the top of it.** The header therefore starts at the rail's right edge rather than spanning the window, and **the toggle sits on the junction of the two seams**, anchored there rather than placed in either carrier, so it tracks the rail's width when the rail collapses instead of jumping.

**This is what makes the carrier rule absolute.** The first draft of the rebuilt node put the logo in the header and needed the words "except the logo" to stay true. It no longer does. The header holds no destination at all, and a rule with no exception is a rule a later stage cannot erode.

It also settles Material's caution structurally rather than by instruction: "avoid using logos that could be mistaken as buttons, don't use a logo as a menu button to expand the navigation rail." The logo cannot be mistaken for the toggle when the toggle is a separate control in a different place.

**One inherited fact does not match, and it is marked rather than overwritten.** `baseline.md` records the baseline header as full width with the logo at `x=5` and the toggle at `x=51`. Either the walk captured the collapsed state or this is a deliberate divergence. **`[?]`, resolved by the next baseline walk.** `baseline.md` says what was walked and is not edited from a screenshot.

**The one place the logo leaves the rail is 360px**, where the rail is a drawer behind a menu icon. A route home may not sit behind a menu, so the logo mark moves into the header and the drawer carries no logo row of its own.

### The two figures, and the four rules they acquired on the way in

The founder specified the pair. Four rules were derived from files that already exist, and each one is a constraint the baseline's own version does not meet.

1. **Both figures are in real currency and neither wears a coin.** `cjm-to-be.md:208`, row `C1`, MVP and architecture: "one real currency throughout, no internal coin denomination anywhere". The baseline renders both figures against a branded coin glyph. That glyph cannot cross. `C1` exists to make `B7-1` impossible: a payout cannot wear a label that is not a price. **Superseded on 19 August 2026 by `D-28`, which reversed `C1`.** The record stands as written because a decision record says what was decided then; what the product does now is in `D-28` and in `0.11` rule 10.
2. **The two are never summed and never presented as a total.** The upper one is spendable now, the lower one is an estimate of what a set of objects would fetch, and round 1 has exactly one exit for those objects, withdrawal to Steam. A combined number would read as net worth, one line above a deposit control.
3. **The lower figure is a current market value, never profit, gain or growth.** It moves without the person acting. A figure that can fall is honest only if it never claimed to be a score. **Parent:** design principle 1 as limited by `D-14`, "published chance, current value and tested RTP", plus row `B7`, the account and inventory with each item carrying its receipt. The header figure is the sum of those receipts and reconciles with 5.1 exactly.
4. **No percentage badge on the deposit control in round 1.** The baseline runs a green 5 percent badge on its add control. `cjm-to-be.md:282` cuts any first-deposit bonus in round 1, including the zero-wagering variant, because `aarrr.md:224` requires case mathematics to be modelled first and that model does not exist. Blocked behind a named model with a named owner, not forbidden forever.

**And one refusal the node makes on its own.** No counter, no streak, no progress bar and no session score anywhere in either carrier. `CLAUDE.md` binds this stage, and two live money figures in a persistent header is exactly where that pressure arrives.

### What did not come across from the baseline, each with a reason

| Baseline item | Verdict | Reason |
|---|---|---|
| The promotional partner tile above the rail destinations | Cut from round 1 | A paid third party placement with no barrier, no job and no constraint behind it |
| The language switcher, nine languages | Cut permanently | `D-02`, one language |
| The race pot in the pre-login header slot | Not in round 1 | Cluster 8, orphan `8.9`, no parent in the three legal classes. The slot stays empty rather than being filled with an invention |
| The social icon row at the foot of the drawer | Deferred to node 0.2 | The footer owns the canonical set. The drawer may render it, from that one source and never a second list |
| Eight LATER rail destinations | Enter as they ship | The rail is the carrier designed to receive them |

### Two things this decision leaves open

**The sound control** is in the baseline header and drawer and has **no parent in any of the three legal classes**. Design principle 2 covers motion, not audio, and no backlog row mentions sound. **Owner: the founder, before stage 04.** It ships with a stated parent or it does not ship.

**The daily free case, `I2`, in the rail.** It is MVP by founder decision and it is the product's only free entry point, so a rail slot is tempting. It is not a node in `sitemap.md`, which places it inside the catalogue as an addressable case. A carrier may not promise a destination the map does not hold. **Owner: this stage, before step 5.** Either it becomes a node or it stays inside 3.1.

### Consequence for the rule file

`CLAUDE.md` and `CLAUDE.md` both change. The generalised mode-switcher rule from `D-20` is narrowed to what it actually established, and the global navigation sentence is rewritten from a flat count of four items into the two carrier model. That is a rule edit and it goes through the budget, not around it.

---

## D-22. The mobile bottom bar returns, as a shortcut over the rail and not as a second model

**Date:** 2026-08-11. **Stage:** 03b, node 0.1, one step after `D-21`. **Decided by:** the founder. **Binds:** node 0.1, stage 04 which draws it, stage 07 which colours it, and it amends `D-21`.

### What the founder decided

**Keep a bottom navigation bar on mobile, in addition to the rail and its drawer.** Their words: the bottom bar is a good improvement on the current project and should stay. `D-21` had removed it from the mobile resolution one step earlier, and this puts it back.

### This answers a cost the previous decision wrote down

`D-21` accepted a price in as many words, and the sentence is quoted here rather than paraphrased: **"On mobile the rail is a modal drawer behind a menu icon. From any screen that is not Home, the catalogue costs two taps rather than one."**

**The bar removes exactly that cost.** Cases sits in position 2, so the catalogue is one tap from anywhere again. This is not a reversal out of nowhere: it is the founder responding to a cost the previous decision was required to name, which is the whole reason the project makes decisions name their costs.

### The conflict, stated rather than buried

Material's navigation drawer guidance, opened live on 11 August 2026 and quoted in full in node 0.1:

> "**Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.** Avoid using two navigation components on the same screen."

That is an explicit "don't", it names this exact configuration, and **this decision declines it.** Material does not permit what we are building on mobile. The quote is not deleted from the node, it is not softened, and no reading of it makes the two compatible.

**Desktop is unaffected and stays inside the supported configuration:** one primary navigation component, the rail, plus one app bar, which is not a navigation component in that taxonomy.

### The condition the decision rests on, and it is the whole of its defence

**The bar is a shortcut layer over the rail, never a second navigation model.**

> **Every item in the bar also exists in the rail, and the rail is always a superset.**

Two disjoint sets would be two competing menus, which is the ambiguity Material's sentence exists to prevent: a person who finds something in one place and not the other cannot tell which list is the product. One complete list plus one shortcut set drawn from it is a different object. There is one navigation model with two ways into it.

**If a later stage puts an item in the bar that the rail does not hold, the model is broken rather than extended.** That is the acceptance test and it is checkable by reading two lists.

### What the bar carries

| Position | Item | Guest | Account | Leads to |
|---|---|---|---|---|
| 1 | Home | yes | yes | 1.0 |
| 2 | Cases | yes | yes | 3.1 |
| 3 | Provably fair | yes | yes | 1.2 |
| 4 | My items | no | yes | 5.1 |

**Three before an account, four after.** Three clears Material's own floor exactly, "don't use a navigation bar for fewer than three destinations", and four sits well inside its ceiling of five.

**Positions 1 to 3 never move and nothing is ever removed.** Exactly one slot is added, at the moment the person creates the thing it describes. **This puts Apple's stability rule back in force**, the rule `D-21` retired: "Don't disable or hide tab bar buttons, even when their content is unavailable." It was correct to retire it when nothing we shipped was a tab bar. Something we ship is one again.

**Provably fair holds position 3 in both states**, the same structural claim the rail makes on the same parents: `jtbd.md:180` plus design principle 1, carrying the `D-14` limit that its position is not a claim that a verifier converts a sceptic.

**Balance stays out of the bar in both states**, unchanged from `D-21`. Apple: a tab bar supports navigation, not actions. Design principle 3 at `CLAUDE.md`: cost never hides inside excitement, and making money a permanent navigation destination is the mechanism by which spending stops being a decision and becomes a place you go. The money stays in the header.

### The honest cost of carrying both, named rather than defended

In round 1 the rail holds three or four destinations and the bar holds three or four of the same ones. **The drawer's unique contribution in round 1 is therefore thin:** Responsible play, the sound control and the logo row, and little else. Two carriers holding nearly the same list is redundancy at this size and calling it anything else would be dressing it up.

**What makes it a cost paid for a reason is the roadmap.** `CLAUDE.md` lists eight LATER surfaces. Material's bar ceiling is five and the rail's is seven, so the bar runs out first and the drawer is what absorbs the modes as they ship. The founder is choosing to carry both from day one so that the mobile shortcut exists immediately **and** the drawer is already in place to receive the modes, rather than introducing it later as a change of navigation model in front of people who already learned one.

**It stops being redundancy at the fifth destination**, which is inside this product's own roadmap rather than a hypothetical.

### The logo leaves the mobile header, and `D-21` supplies the reason

`D-21` moved the logo into the mobile header for exactly one stated reason: the rail sits behind a menu icon and a route home may not. **Bar item 1 is now that route**, permanently visible, labelled, and never removed in either state.

**The reason has been met by a better carrier**, so keeping the logo in the header as well would be two controls doing one job on the narrowest width the product supports. The logo returns to the drawer's first row, where the rail keeps it at every other width, and that is also what makes the superset rule hold literally: Home is in the rail because the logo is.

**It returns the mobile header to the baseline's own composition.** `baseline.md` records that the baseline's mobile header keeps the hamburger, the money slot and the account control, and carries no logo.

### Behaviour fixed here so a later stage does not invent it

The bar does not hide or condense on scroll, for the same reason the header and the rail do not. When the modal drawer is open the bar sits **behind the scrim** with the rest of the content: a bar left live above a scrim is content the scrim failed to block. Labels are never removed. Every target is at least 44 by 44 CSS pixels, the node's AAA choice. **Exactly one item is active across the bar and the drawer together, never one in each**, which two carriers rendering overlapping lists makes the easiest thing in this node to ship wrong. The bar does not exist above 900px.

### Consequence for the rule file

`CLAUDE.md` and `CLAUDE.md` both change again. The inherited navigation model stays two carriers, because the bar is not inherited: `baseline.md` records that the baseline has no bottom tab bar at all. What is added is that mobile carries a third carrier the baseline does not have, and that it is a subset of the rail rather than a second model. That is a rule edit and it goes through the budget, not around it.

---

## D-23. The licence, the allowlist and the first memo batch

**Date:** 2026-08-12. **Stage:** 03b, node `0.12`, after the two research forks returned. **Decided by:** the founder, who delegated the choice to the research seat in as many words, give me the option you consider best. **Binds:** node `0.12` and its register, nodes `2.1` and `2.2` which render the verdict, node `0.2` whose market statement quotes it, stage 04 which draws the states, and the operating side of the business.

**What this decision is and is not.** It fixes a direction and it binds the design. **It is not legal advice and it files nothing.** Every ground under it is research rather than an opinion, and each of the three parts names the moment a licensed lawyer has to sign before anything real happens. That distinction is `D-A`'s and it is not weakened here.

### Part 1. The allowlist, closed by default

**Decided: allowlist.** A market is closed until a row opens it.

**The property that decides it is not caution.** Under a blocklist a missing row **grants** access, so "we have never looked at this market" and "we looked and it is fine" produce identical behaviour in the product, and the confidence field in the register becomes decoration: nothing reads it, because absence already decided. Under an allowlist a missing row **denies** access, so ignorance is free and only knowledge costs money. For a liability that is criminal in at least two of the rows we already hold, Belgium and Michigan, that is the correct direction.

**The cost, named rather than softened:** every market is work before it is revenue, and there is no market we can open this month. The staged rollout is slow by construction and the delay is the price.

**And the blocklist stops growing.** India, New Zealand, Ireland and Australia need no rows. They are `not launched` like everywhere else nobody has paid to review. The ten explicit blocks stay explicit only because they carry exposure we already know about.

### Part 2. The licence direction: the Isle of Man

**Decided as a direction, not as a filing.**

**Why it, and not a cheaper one.** It is the only regulator on the comparison whose statutory hook was written around what this product actually does: Isle of Man operators may accept deposits **"in money or value in money's worth, including virtual assets"**, Appleby's 2026 guide, opened live. Everywhere else covers this product generically or not at all, and generic cover means the classification question is answered by an official who has never been asked it.

| Rejected | Why |
|---|---|
| **Curacao, LOK** | The category's route and the obvious cheap answer. **Local substance from 1 January 2026**, a physical office, a local managing director and up to three local staff by year five, removes most of the price advantage, and it still answers the classification question generically. The two fee figures found for it disagree, so the saving is `[?]` as well |
| **Anjouan, Tobique, Kahnawake** | Generic cover only, no skins provision found. Cheapest, and the cheapness is the whole of the case for them |
| **Malta, MGA** | Virtual tokens as payment need prior approval case by case. That is the classification question again, with the heaviest process on the list attached to it |
| **Costa Rica** | There is no gambling licence to hold. A structure, not a permission |
| **No licence at all** | **This is the status quo of the live product**, and it is what makes every row in the register a guess. It is also what the Netherlands is fining at EUR 280,000 a week and what Michigan wrote to forty five operators about |

**Every fee in that comparison is a secondary source and none was checked against a regulator's own schedule. Counsel checks that first, and the direction survives a surprise on the fee because it does not rest on the fee.**

**What follows immediately is a design consequence rather than a corporate one:** a tier one regulator supervises which markets its licensees serve, so parts 1 and 2 are one decision. The allowlist is not an extra caution stacked on top of the licence. It is what the licence would require anyway.

### Part 3. The first memo batch: three, in order, and the second waits for the first

**No budget figure is set here, because none was found and inventing one is the failure this project's rules exist to prevent.** What is fixed is the shape and the order.

| # | Memo | Why it sits in this position |
|---|---|---|
| **M1** | **The operating structure and its current exposure.** Who contracts with players today, what the Cypriot entity is exposed to for gambling offered outside Cyprus, and what has to move | **It is about a product that is already live.** Every other question is about a market we have not entered. This one is about six years that already happened |
| **M2** | **Isle of Man licensability of our exact mechanics**, taken to a pre-application conversation: paid entry, randomised outcome, withdrawal of a tradable item to Steam. Not online casino in general | It decides whether part 2 survives contact with the regulator. **Nothing downstream is worth paying for until it does** |
| **M3** | **The first allowlist row.** The target is chosen after M2 returns, not now | Because the licence constrains the market list rather than the other way round. Choosing the market first is how a plan gets built on the wrong permission |

**Three quotes before the first instruction**, and the number that shapes the plan is not the memo fee, it is the licence application. **The first market memo is as much a test of the register's mechanic end to end as it is revenue.**

**Brazil stays at the head of the queue and does not become M3.** Its route is known and priced, R$30 million for five years, which makes it a post-funding decision rather than a first one.

### What this decision does not do

It opens no market. It verifies no fee. It does not answer whether a Cypriot contracting entity attracts Cypriot exposure, which is M1's first question. **Every verdict in the register stays `[?]` until counsel signs the row**, and the two signature fields added to the schema on 12 August 2026 are where that lands.

### Consequence for the map, and it changes a state rather than a paragraph

**Under a blocklist the person most likely to meet a refusal meets `blocked`. Under an allowlist they meet `not launched`, and those are two different messages.** `not launched` says we have not reviewed this market, which is not a legal verdict and must not be dressed as one. Section 11 of node `0.12` already separates the two verdicts and section 9 already requires a ground in readable words. **What changes is which of them is the common case**, so node `2.2` draws both, with `not launched` as the default rather than the exception. That is the acceptance test at stage 04.

---

## D-24. The case tile is rebuilt around the image, gains a risk band and a favourite, and loses the item count

**Date:** 2026-08-18. **Stage:** 03b, node `0.7`, after the founder read the anatomy page and compared it against the live baseline. **Decided by:** the founder, on three questions asked and answered in order. **Binds:** node `0.7` and both densities of it, register `0.11` whose rule 7 is amended, node `3.3` which owed a verdict on the risk meter, nodes `1.0` and `3.1` which render the grid, and stage 04 which draws the states.

**What was asked.** The tile the first version specified carried six always-on fields: artwork, name, item count, entry cost, live free-unit state and a daily marker. The founder's instruction was to make it simpler and closer to the baseline: **a large case image, the name, the price, and a risk level, with the like control the baseline puts on its tile.** Three things in that instruction had no source in this repository, so three questions were put rather than filled with a median.

### Part 1. The risk band is computed from the drop table

**Decided: computed, and the register owns the method.** The band is derived from the case's own drop table, the figure it is derived from is published on `3.3` beside `D4`, and the tile carries only the three-value label.

| Rejected | Why |
|---|---|
| **A label set by hand per case** | The baseline's own answer, `baseline.md` section 4. It is a claim about risk with nothing behind it, printed by a product whose first design principle is that its own numbers are checkable. **The weakest possible sentence on the busiest surface** |
| **Not on the tile at all, only on `3.3`** | The cheapest answer and the one the first version took. It leaves the tile with three fields, which is exactly what the category ships, and it puts the whole "what is this case shaped like" question one tap away |

**What this fixes that was already broken.** The risk band has been `[ORPHAN]` since the entity list: `sitemap.md` names it a part of the Case, `baseline.md` records it live on both the tile and the case page, and no backlog row required it. Node `3.3` refused it with a reason that was correct at the time, **no computation for it exists anywhere in this repository**. That sentence is what this decision answers. It now has a parent, design principle 3 quoted directly, and a route in the sense of `0.11` rule 1: the same drop table whose chances and values are printed on `3.3`, so a reader recomputes the band without leaving the page.

**What is still missing and is not invented here.** The thresholds. Where High stops and Medium begins is `[?]`, it is a treasury question, and **the band does not render until the founder sets them.** Naming a boundary here would be the exact failure the research rules exist to prevent.

### Part 2. The favourite ships with a public count, and rule 7 gains its first exception

**Decided: as the baseline does it.** A toggle that marks the case, and a count of the accounts that marked it, visible to everyone.

**The cost, stated before the decision and taken anyway.** `0.11` rule 7 says a number is never a score, and it was written to keep the interface from telling a person which case to open. A public count beside a price is social proof next to a spend. The founder was shown that and chose the baseline's behaviour, so **the rule is amended out loud rather than quietly worked around**, which is the only form of this that the repository allows.

**What the amendment permits and what it does not.** One count, in one place, of a thing people did. **Still refused:** a rank, a default sort by favourites, a most-popular strip, a TOP badge, an opened counter, and any appearance of the count beside the open control on `3.3`. The line the amendment draws is between **data about what others did** and **the platform recommending a spend**, and everything on the second side of it stays out.

**The favourite has no parent in the three legal classes.** It is carried with an empty parent cell, printed, exactly as `I2` is. It is the second element on this tile in that condition and the repository now shows both rather than inventing a job for either.

### Part 3. The item count and the free-unit state stop being fields and become a marker

**Decided: silence is the available state.** In the normal case the tile shows four things. The stock marker appears only when there is something to say, "3 items out of stock" or "every item out of stock".

**Why the barrier survives the change.** `A2` and `D1` stand on `B8-1`, the stock question, and the thing that barrier needs is that **a short shelf is legibly short**. A marker that appears exactly when the shelf is short does that better than a line that says "all items in stock" on every tile in the grid, because a message printed everywhere is read nowhere. The sold-out tile still stays in the grid and still says so, which remains the one row in `blocks.md` section 3 that no competitor matches.

**The item count leaves the tile entirely and this is a real loss, priced.** It was the field that let a person see how much is in the case without opening it. **The risk band replaces it and is a better answer from the same table:** the count says how long the table is, the band says what it is shaped like. The count still renders on `3.3`, on the table it describes.

### What this decision does not do

It writes no backlog row. **The risk band and the favourite are two new capabilities and `cjm-to-be.md` is the single owner of that list**, so adding them moves its count and the line in `CLAUDE.md` that quotes it, 38 MVP rows over 37 capabilities. That is its own go and it has not been given. Until it is, both elements carry their parent status in node `0.7`'s own table and the gap is visible rather than assumed.

It sets no threshold, it decides no grid, and it does not say where the list of favourited cases lives. Those belong to `0.11`, to `1.0` and `3.1`, and to `5.1`.

---

## D-25. Home takes the baseline's shape: a promotion banner above the H1, and the daily case as a tier ladder

**Date:** 2026-08-18. **Stage:** 03b, node `1.0`, in the same session as `D-24` and from the same comparison against the live baseline. **Decided by:** the founder, on four questions. **Binds:** node `1.0` and its state `1.1`, node `0.7` whose rule 5.3 is narrowed, node `6.1` which is named as the one surface the ladder may never reach, `0.13`'s heading rule for this page, and stage 04.

**Two of the four answers changed nothing and they are recorded because a decision not to move is still a decision.**

### Part 1. The mode card row stays deferred

**Decided: unchanged.** `D-20` deferred the row of four game mode cards because three of the four modes are LATER and one live card of four is the dead item defect. The baseline's row of Cases, Case battles, Gunfights and Upgrade was put in front of the founder again with three ways to ship it, and the answer was to leave it deferred. **Home keeps the case grid directly on the page and the main job keeps its three taps.** The row arrives when a second mode is live.

### Part 2. The promotion banner ships, with its countdown, above the H1

**Decided: as the baseline does it.** One promotion, an image, one line, one control, and a countdown.

**This reverses a refusal rather than filling a gap.** `blocks.md` section 2 recorded the Key-Drop and Hellcase event banner as **DIFFERENT** with a reason in its own row: "no parent in round 1, and a countdown is urgency attached to spending". That reason is not withdrawn. **The banner ships with it printed**, and the banner is the third element in this repository carried with an empty parent cell, after `I2` and the favourite from `D-24`.

**Six rules bound the reversal**, and they are in node `1.0` section 2.2: one promotion and never a carousel; the countdown counts to a real published end, because a time is a number and `CLAUDE.md` says never invent one; no odds, no price and no chance on the banner; it never takes H1 or H2 markup; **its empty state is that it does not render at all**, the same rule `A5` obeys for the auditor we do not have; and it obeys the 360px height budget the ticker already obeys.

**One thing is refused by name inside the same decision:** a promotion tile inside the featured grid. The baseline drops a paid Triple Fun tile into its own case shelf, `baseline.md` section 4, **an advertisement shaped exactly like a case tile in a grid of case tiles.** The grid holds cases.

### Part 3. The H1 goes under the banner, and the cost lands at 360px

**Decided: banner first, H1 second, at every width.** The alternative of a different order by width was rejected on the spot: node `1.0` fixes one block order for all widths, and a page that reorders itself has two orders and defends neither.

| Width | What it costs |
|---|---|
| **Desktop, 1440px** | **Nothing.** Ticker, banner, hero with the H1 and the first grid row all sit on the first screen. This is the composition the baseline runs |
| **360px** | **Two things.** The H1 is no longer the first thing after the shell, and the first grid row no longer crests the fold. `D-24` bought part of the second one back: four fields per tile means two tiles across at 360px |

**The rule that survives is narrower and harder rather than dropped.** The H1 must still begin on the first screen at 360px, and the banner is what gets measured against it. **Stage 04 accepting a banner that pushes the H1 out of the first screen is a failed acceptance, not a layout preference.** And the first-visit case is worse: `0.4` fires on arrival, so a cookie dialog and a banner can cover the H1 between them. That exact combination is an acceptance step at stage 04, at 360px, on a first visit.

### Part 4. The daily case becomes the baseline's tier ladder, and `0.7` rule 5.3 is narrowed

**Decided: the five tier ladder, the wager remaining figure and the reset countdown, as the baseline runs them.** This is the largest reversal in the session and it is the one with a responsible play surface on the other side of it, so what moves and what does not is written line by line.

| Rule | Status |
|---|---|
| **`CLAUDE.md`: a limit never acquires completion mechanics, streaks, status or a session score** | **Untouched and absolute.** It binds deposit limits, session limits, self exclusion and cool down. Nothing in this decision reaches them |
| **`0.7` rule 5.3, which generalised that rule from limits to entitlements** | **Narrowed back to what `CLAUDE.md` actually binds.** The daily case is an entitlement, not a limit. The generalisation was this repository's own extension and it is withdrawn by name |
| **`0.11` rule 7, a number is never a score** | **Holds.** The wager figure is money in one real currency, `C1`, not points and not a level. **Superseded on 19 August 2026 by `D-28`, which reversed `C1`.** The record stands as written because a decision record says what was decided then; what the product does now is in `D-28` and in `0.11` rule 10. The rule itself still holds: the figure is money in coins, and a coin ladder is exactly where a currency turns into a score if nobody is watching |

**The cost, stated in full because it is the whole of the objection.** `baseline.md` flagged the ladder as an inherited answer to the risk recorded in row `I2`: that a daily free open teaches a first-session user that opening is free. The ladder answers that risk **by making the daily case not free but earned, and the thing it is earned with is spending.** One risk is traded for another. Neither `I2` nor the ladder has a parent in the three legal classes, and both are carried with empty parent cells, printed.

**Four rules bound it**, in node `1.0` section 2.5: the ladder never appears on a responsible play surface and never beside a limit, **because the place a person goes to stop is the one place progress may not follow them**; it never tells a person with a limit in force what they would need to wager to advance; a tier gives a case and nothing else, no badge, no title, no rank; and the reset countdown does not render until the reset moment is a real published figure rather than `[?]`.

### What this decision does not do

It does not review its own trade. **Whether the ladder is the right answer to `I2` is now an open item on node `1.0` with the founder's name on it**, and it is open before stage 04 draws it rather than after. It sets no threshold, names no promotion, and does not decide the daily reset. And it does not touch the mode row, which stays where `D-20` left it.

---

## D-26. A blocking consent gate on sign in, and identity verification proposed out of round 1

**Date:** 2026-08-18. **Stage:** 03b, after the founder's account capture returned the deposit flow and confirmed the live product has no identity verification. **Decided by:** the founder. **Binds:** node `2.4` sign in, node `2.1` age and geo gate, node `2.7` identity verification, and the compliance constraint in `CLAUDE.md`.

**This record has two halves and they are deliberately not the same weight.** Part 1 is decided and applied. **Part 2 is proposed with its cost printed and it is not applied**, because it collides with a line in `CLAUDE.md` and with `D-17`, and a component edit is not allowed to move either.

### Part 1. The sign-in surface gains a blocking consent gate, and it is two declarations rather than one

**Decided.** Before any provider control can be used, the person ticks **two separate checkboxes**:

1. **the terms consent**, naming the documents it covers and linking each one, and
2. **the age declaration**, "I am at least 18 years old", **on its own line and as its own act.**

**The provider controls are unavailable until both are ticked**, and the surface says why in words above them rather than only by dimming a button.

**The reference, and what it is and is not.** The founder supplied a screenshot of another product's sign-in dialog on 18 August 2026, filed as `research/screens/baseline-account/acct_ref_signin_18plus.png`. **The site is not identified in the capture, so this is a design reference and not a fact about a named competitor**, and nothing in this repository cites it as one. What it demonstrates is the pattern: a headline that states the requirement in words, two hexagonal checkboxes, and two provider buttons rendered inactive until both are set.

**Why two checkboxes and not one, because the baseline runs one.** `baseline-account.md` records the live product's version: a single line, "I'm 18+ and I agree to the Terms and Conditions", **with no `required` attribute and with the provider buttons not disabled while it is unchecked.** One checkbox bundles a contract consent with an age declaration, and **a person who ticks it to get past it has made one gesture that answers two questions.** Splitting them costs one line and makes the age declaration a separate deliberate act, which is the only property that makes it worth anything at all.

**What this does not claim.** A self-declaration is not verification and this node says so on its own surface. It is layer 1 of `D-A` and it was always layer 1. **What changed is that it is now enforced rather than decorative**, which is strictly stronger than the canon and strictly weaker than `D-17`.

### Part 2. Identity verification out of round 1, proposed rather than applied

**The founder's position, recorded verbatim in substance:** the live product has no identity verification, so round 1 does not need to build one either, and the 18+ checkbox on sign in is the whole of the age control.

**The first half is now a walked fact.** `baseline-account.md` section 7 records the entire settings surface and there is no KYC step anywhere in it.

**The second half collides with four things and each one is named rather than softened.**

| What it collides with | The collision |
|---|---|
| **`CLAUDE.md`, compliance** | "age verification before any case interaction... **identity verification before funding**". Deferring `2.7` deletes the second clause, and moving the age declaration into sign in changes the first from "before any case interaction" to "before an account exists" |
| **`D-17`, decision `D-A`** | It locked **two layers** and took the founder's own answer as "an addition, not as a replacement". This keeps layer 1 and drops layer 2 |
| **`D-23`, the Isle of Man direction** | **A tier one regulator requires identity before withdrawal.** Without layer 2 the licence direction has no enforcement point in the product, and memo `M2` would be asking a regulator about mechanics the design has already removed |
| **The free-entry withdrawal hole** | `D-A` recorded it in the open: a person who only ever took free entries can reach a real withdrawal without meeting an identity check. **Layer 2 was the answer. Dropping it makes the hole permanent rather than open** |

**What is recommended instead of a straight deletion, and it costs nothing to take.** **Keep `2.7` on the map, marked `LATER`, with the reason printed in its own row.** Round 1 does not draw it, which is what the founder asked for. The map keeps the node, so the hole stays visible, the licence route can reclaim it without an archaeology pass, and `CLAUDE.md`'s compliance line changes from "before funding" to "before withdrawal, and not in round 1" rather than disappearing.

**And one consequence that is structural rather than legal.** Node `2.1` is the **age and geo** gate. If the age declaration moves into sign in, **`2.1` does not disappear: it becomes the geo gate alone**, and it still has to exist because `D-23` needs a surface on which a market with no row meets `not launched`. Renaming it is part of the same go.

### What this decision does not do

It does not touch `CLAUDE.md`. It does not remove `2.7` from `sitemap.md`, and it does not move the MVP counts. **Part 2 is a proposal with a printed cost and it waits for an explicit go**, because the two files it would change are the two this project does not let a component edit move.

---

## D-27. The row of four ways to play returns to Home, and it carries three unlaunched cards saying so

**Date:** 2026-08-19. **Stage:** 04, node `1.0`, after the founder read the etalon beside five screens of the live product and asked where the four categories were. **Decided by:** the founder. **Binds:** node `1.0` and its state `1.1`, `D-20` which is partly reversed, and stage 04 which draws it.

**What was decided.** Home carries the baseline's row of four entry cards, directly under the hero, as block **B4**. Blocks B4 to B10 renumber to B5 to B11. **One card is live, Cases, and it carries a control. Three are not launched and they render as not launched:** a name, one line of what the mode will be, and the words "Not launched yet". No control, no link, no badge, no waiting list, no date.

**What it reverses, and the reversal is partial rather than total.** `D-20` deferred this row with a reason: "one live card of four is the dead item defect", and `home.md` section 0 refuses a hub of nine when we would ship one. **That reasoning stands and it is what shapes the three deferred cards.** What changes is the conclusion drawn from it: the carrier ships, and the dead items are marked dead rather than the carrier being removed. **This is `CLAUDE.md`'s own rule applied to a case `D-20` decided the other way:** "A carrier is inherited and filled with live items. Only a dead item is deferred, never the carrier that would have held it."

**The cost, printed rather than argued away.**

| Cost | What it is |
|---|---|
| **Three quarters of a block advertises absence** | Three of four cards name something a person cannot do. `D-19` calls that the rail defect. It is accepted here because the cards say so in words rather than implying availability, which the rail's nine icons did not |
| **The first screen moves** | The featured grid drops further down the page. `home.md` section 1.2 already recorded the grid's first row as cresting the fold before `D-25` and not after. This pushes it further |
| **A second route to Cases** | The rail, the mobile bar and now this row all reach `3.1`. Duplicate internal links cost nothing for a crawler and the row is the baseline's own primary entry, but it is a third carrier of the same destination and that is worth knowing |
| **It has no parent in the three legal classes** | Like `D-25`'s banner. In by founder decision, and the row in `home.md` prints an empty parent cell rather than borrowing one |

**What it does not do.** It does not add a mode to the map. `case battles`, `gunfights` and `upgrades` stay `LATER` in `CLAUDE.md` scope, with no node, no route and no page. **The row is a promise of a shape, not of a surface**, and a card gains a link on the day its node exists.

---

## D-28. The product denominates in coins, and `C1` is reversed

**Date:** 2026-08-19. **Stage:** 04, from the founder reading the etalon and asking why every figure was in EUR. **Decided by:** the founder, after the cost below was put in front of them. **Binds:** row `C1` at `research/docs/cjm-to-be.md`, `CLAUDE.md`'s money rule, register `0.11`, and every node that renders a figure.

**What was decided.** The product's denomination is the coin, as the live product runs it. Every price, balance, item value and threshold renders in coins.

**What it reverses.** Row `C1` reads "One real currency throughout, **no internal coin denomination anywhere**", status MVP and architecture, parent `B7-1`, **pattern of 7**. `cjm-to-be.md` states the harder version in its `B7-1` reasoning: "the receipt must be denominated in real currency, **because a receipt in coins fails its own test**."

**The cost, in full, because this is the most evidence-backed row the decision touches.**

| Cost | What it is |
|---|---|
| **A pattern of 7 loses its answer** | `B7-1`, the currency abstraction that hides what things cost, is the second densest barrier pattern in the corpus. `C1` was the whole of the structural answer to it |
| **Block B7 loses a sentence it was built on** | `home.md` section 2.6 and its SEO text both run "Nothing here is priced in a coin or a token: every figure on this page is in real currency, so what you read is what it costs." That sentence is deleted, not rewritten |
| **Design principle 3 loses its sharpest edge** | "Odds, cost and expected value are visible and legible" is weaker when the unit is one the reader has to convert |
| **The comparison against the market price stops being direct** | `A1` prints a Steam market price in real money beside our value. In coins the two are no longer the same unit and the comparison needs a conversion the reader has to trust |

**The condition this decision ships under, and it is not optional.** **The coin is pegged and the peg is printed wherever money is spent.** A coin whose rate is not published is exactly the abstraction `B7-1` describes. What that means concretely is decided by the nodes, not here: `0.11` owns the anatomy of a coin figure, and the peg belongs beside the entry cost, in the deposit flow, and on the withdrawal record.

**And two things do not become coins.** The **withdrawal time figures** are time. The **tested RTP and expected value** are ratios and stay percentages. `A4`, `G3`, `D4`.

### Propagation, and the split that matters

**Two kinds of file carry the word coin and only one kind changes.**

- **Records of the world, never edited:** `research/docs/baseline.md`, `baseline-account.md`, `competitors.md`, `research.md`. They say what was walked. A competitor pricing in coins is a fact about that competitor.
- **Our own rule, rewritten:** `CLAUDE.md`, `cjm-to-be.md` row `C1`, and the nodes that state the unit: `0.11`, `0.7`, `1.0`, `0.1`, `3.1`, `3.3`, `4.1`, `5.1`, `0.2`.

**Order:** the decision record first, then `CLAUDE.md` and `C1`, then the wireframes so the founder can see it, then the nodes with their pages.

**Closed on 19 August 2026, in the same session.** Every file in the second list was rewritten with its page in the same step: `CLAUDE.md`, row `C1` in `cjm-to-be.md`, and nodes `0.11`, `0.7`, `0.1`, `1.0`, `3.1`, `3.3`, `4.1`, `5.1`, plus `sitemap.md`, `blocks.md`, `flows.md` and the concept map. **`0.11` gained rule 10**, which is where the peg now lives as a rule rather than as a sentence in a decision record.

**Three kinds of file were deliberately not rewritten and each has a reason.** The walked records say what was walked. The earlier decision records `D-21` and `D-25` carry a **superseded** marker instead of new wording, because a decision record says what was decided then. And the critique entries that quote `C1`'s old name are records of a namespace collision, where the old string is the evidence.

---

## D-29. The rail carries one destination, and its foot carries the ambient controls and the social links

**Date:** 2026-08-19. **Stage:** 04, node `0.1`, after the founder read the drawn rail beside the live product. **Decided by:** the founder. **Binds:** node `0.1`, `CLAUDE.md`'s navigation line, node `0.2` which now carries two destinations the rail used to, `D-21` and `D-22` which are partly superseded, and stage 04.

**What was decided.**

- **The rail is the ways-to-play carrier, and round 1 ships one way to play.** It holds **Cases**, plus **My items** once an account exists. Nothing else.
- **Provably fair and Responsible play leave the rail for the footer**, which already carries each of them in a column of its own: Provably fair in **Play**, Responsible play in **Play responsibly**. **Neither destination is lost and neither loses a route.** The baseline keeps its own Provably Fair link in exactly that place, `baseline.md` section 9.7.
- **The foot of the rail carries the ambient controls and the social links**, as the baseline runs them: the sound control, the language, and the social row.
- **The logo slot says `Logo`** and carries no wordmark beside it. The mark is stage 06's asset and the name is part of it.

**The sound control finally has a parent-shaped home, though it still has no parent.** `0.1` section 9 recorded it with no parent in the three legal classes, and it has spent two revisions in a header that `0.1` fixes at one row on mobile. **It is now at the foot of the rail**, which is where the baseline keeps it and where it competes with nothing. **That is a placement, not a parent:** the founder still owes it one, or it goes.

**The language is not a switcher.** One language is locked in `CLAUDE.md`. It states `EN` and carries no menu, because a picker with one option is a dead control. **It becomes a control on the day a second language ships**, which is the same rule the rail applies to a mode that does not exist.

**The cost, printed rather than argued away.**

| Cost | What it is |
|---|---|
| **The mobile bar falls below Material's floor** | `0.1` section 2 quotes it: "Don't use a navigation bar for fewer than three destinations." `D-22`'s justification was that the bar "clears it exactly: three destinations before an account". **With Cases and Home it is two, and that justification is void.** The bar is kept as drawn and the violation is printed. The honest options are to retire the bar, which the baseline does not have at all, or to carry it below the floor. **Neither is decided here** |
| **Two trust destinations drop one carrier** | Provably fair and Responsible play were in the rail because design principle 1 makes trust the product and because a limit has to be reachable. They are now footer-only, which is one carrier rather than two, and on mobile that means scrolling to the end of a page rather than opening a drawer |
| **`D-21`'s argument is partly superseded** | It restored the rail as the primary carrier "built for the destination rather than for the round". That still holds for the shape. What no longer holds is its count |

**What this decision does not do.** It does not remove any node from the map, it does not change any route, and it does not touch the footer's four-column structure, which was already carrying both destinations before this decision was taken.

---

## D-30. The case screen takes the reference's shape: contents on the stage, the numbers on the trigger, and the refused drops row back as a carrier

**Date:** 2026-08-19. **Stage:** 04, node `3.3`, after the founder put six live captures beside the drawn screen: three of the baseline and of two competitors' case pages, and three of our own wireframe. **Decided by:** the founder. **Binds:** node `3.3` sections 1, 3, 11, 12, 14, 15 and 16, node `0.6` at its next pass, and stage 04's render of `3.3` and of its four states.

**What was decided.**

- **The stage carries the case's contents.** The framed region holds the artwork and, standing still beneath it, the strip of what is in the case. In phase 2 that strip is the thing that moves. **It carries chance and value on every tile**, never value alone, and it carries no figure the drop table does not.
- **The two case numbers move onto the commit block.** Tested RTP and expected value sit beside the entry cost, inside the block `0.11` rule 10 calls the last surface before money moves. Their section keeps the derivation, the as-of, the route and the printed hole where the tester's name is missing, and it moves below the drop table.
- **The drop table renders as a uniform card grid at every width**, one column at 360 and four from 1200, with the table markup and the tier row groups intact.
- **A row of the case's own recent drops returns, directly under the trigger.** In the order they happened, each with the value it paid, each landing on `7.1`.
- **The commit block is condensed.** It was a display figure, a caption, a hole, a trigger and a sentence stacked in a 500px box. The founder's word was that the wireframe's parts are simply too large, and the size of a block is not neutral: a commit block that fills the screen is the page arguing for the act.

**The row is half of a refusal reversed, and the half that stayed is what makes it safe.** `3.3` section 16 refused Hellcase's "last 7 days top drop" and the baseline's "Best drops" as **survivorship by construction**, and that reasoning was not wrong. What it did was defer a carrier because the item inside it was dead, which `CLAUDE.md` names as the defect in the opposite direction: **a carrier is inherited and filled with live items, and only a dead item is deferred.**

| What came back | What stayed refused |
|---|---|
| The row itself, in the place all three references put it, directly under the trigger and above the contents | **The ranking by value.** The moment it sorts by value it is the refused block wearing our own name |
| The item, its value in coins, and the moment it happened | **The multiplier**, x38.8 on one capture and x536.2 on another. A multiplier is the survivorship claim compressed into one number |
| A destination on every tile, `7.1`, which the ticker already required | **The window chosen to flatter.** Seven days is a parameter, and a parameter that can be tuned upward is a claim |
| | **The word "best"**, and any person's name. This row carries values and no people; the ticker carries people and no values |

**The cost, printed rather than argued away.** It is still a sample. Six recent outcomes are six outcomes and nothing about them is a distribution, and a person reading them directly under a spend trigger is reading the most favourable class of evidence this product has. **The counterweight is on the same page and one link away:** the row's caption routes to the tier ladder, `D3`, which is the block that can disappoint. **If `D-B` comes back negative the ladder does not render, and then this row stands with no counterweight at all.** That is the condition under which the row itself should be reconsidered, and it is written here so the question is asked rather than discovered.

**What was rejected on the way.** Retiring the global ticker from this node so the page carried one strip instead of two. It would have left `0.8` with a single consumer, contradicted its own "used by two surfaces and that is a decision rather than an oversight", and touched `sitemap.md`, `0.8`, `0.12`, `0.3` and `0.1`. **The two strips are kept apart by what they carry instead of by where they sit:** people and no values at the foot of the page, values and no people under the trigger.

**Amended the same day by `D-31`, and two of the four decisions above did not survive the founder reading them on screen.** The contents strip on the stage lost its figures and became the reveal lane, and the tested RTP and the expected value left the commit block again. The record stands as written because a decision record says what was decided then. **What the product does now is in `D-31`.**

**And one thing the references have that this node still refuses without amendment,** because the founder's captures repeated them rather than reopened them: the multi-open selector at x1 to x30, AUTO, FAST OPEN, ADD TO BATTLE, the like count, and the risk band drawn as skulls or bars. `3.3` section 16 carries each with its reason.


---

## D-31. The case screen is cut back to what a person reads first, and the multi-open switch ships before its ceiling

**Date:** 2026-08-19. **Stage:** 04, node `3.3`, hours after `D-30` and from the same session: the founder read the drawn screen block by block and sent six corrections. **Decided by:** the founder. **Binds:** node `3.3` sections 1, 5, 11, 12, 13, 15, 16 and 17, node `0.8` and the five files that carried its placement rule, node `0.2`, and stage 04's render.

**What was decided, in the order the screen reads.**

| # | Change | What it replaces |
|---|---|---|
| 1 | **The risk band gets a reserved zone** on its flank instead of a line of italic text | A hole drawn as a sentence in the corner is **a hole that has no size**, and the block that lands there later has to find its own room |
| 2 | **The stage is the reveal lane at rest, with the case artwork large on it, and the lane prints nothing** | `D-30`'s strip of nine tiles carrying a value and a chance each. **Too much information on the stage**, and the founder is right |
| 3 | **The commit block is the act and the cost of the act, and nothing else** | Three figures, two explanatory paragraphs and a trigger in one box. `D-30`'s move of the RTP and the EV onto it is reversed |
| 4 | **A count switch, one to five, beside the trigger** | The refusal `3.3` section 16 made twice |
| 5 | **The drops row is called `Last drops`** and the drop card puts the image first with the information beside it | "What has come out of this case", which the founder read as unclear, and a card that led with a name |
| 6 | **The ticker `0.8` leaves this screen**, and the statistics in the footer gain a reserved icon zone each | A component on two surfaces, and a statistics band with no room for the icons that are coming |

### The lane prints nothing, and that is the correction of an argument rather than of a taste

`D-30` put chance and value on every strip tile, reasoning that **a strip of values alone is the shop window** the node refuses. The reasoning was sound and the conclusion was wrong. **The rule binds any surface that prints a value, so the honest way to satisfy it on the stage is to print no value, not to print two.** The lane is the reveal's track, not a second listing: it makes no claim and needs no pairing, and every figure about the case lives one block down beside the ticket range, the free units and the market link that make it checkable.

**The cost:** the first screen now shows the case's name, its cost and its risk zone, and nothing about its contents. The contents are one block down on a page that is one document, and the first screen is genuinely thinner than it was.

### The switch ships before `C2` exists, and that is the cost this record carries

`3.3` section 16 refused the multi-open selector twice and wrote the condition itself: **"if multi-open ever ships it ships behind `C2`"**, the spend ceiling chosen at deposit. `C2` does not exist. **The switch ships anyway, by founder decision, and the condition becomes a printed cost rather than a satisfied one.**

**What the design owes in exchange, and each of these is a rule and not a preference:**

- **The trigger carries the total and never the unit.** At five it reads the five-case price. A multiplier that leaves the unit price on the button is a multiplier that hides the amount.
- **It defaults to one on every visit and remembers nothing.** A remembered five is a multiplier that spends without being chosen again.
- **One deliberate act per open request.** Which is exactly why **AUTO stays refused**: it is the one control on the reference that removes the decision entirely.
- **One to five and no further.** x10, x20 and x30 stay refused, because **five is a number a person can hold and thirty is a number they accept.**

### The ticker leaving costs a component its second consumer

Stage 04 argued against this a few hours earlier, when `D-30` considered it and kept the ticker. **The founder cut it.** `0.8` now renders on `1.0` alone, against its own node's sentence that two surfaces was "a decision rather than an oversight", and **a component with one consumer is a component, or it is that screen's block** - a question `0.8` now carries open.

**Social Job 2 was carried on this page by the ticker.** What carries it now is the `Last drops` row, which lands every tile on the same `7.1` and is about this case rather than about the platform. **That is a narrower answer and it is recorded as narrower.**

**The claim "renders on `1.0` and `3.3` only" was written in five other files** and all five were corrected in the same step. A rule that survives in four files is the rule a later stage will follow.

### What was refused inside the founder's own instruction

**The heading.** The founder named the category's two labels, skin.club's **Last top skins** and Hellcase's **Last 7 days top drop**, and asked for one of them. **The length was the right complaint and the word is the problem:** both claim a ranking, and this row is in time order, so either label would be a heading that lies about the list under it. **Taken: the short form. Refused: the claim.** If the word "top" is wanted, the row has to actually rank by value and `D-30`'s survivorship cost comes back with it. That is a decision and not a rename, and it sits in `3.3` section 17 with the founder as its owner.

### What this record does not touch

The refusals `3.3` section 16 still carries unamended: **AUTO, FAST OPEN, ADD TO BATTLE, keyboard shortcuts on the spend controls, a sign-in wall over the open control, the risk band as skulls or bars, and the like count.** Six captures repeated them and **a reference repeating a pattern is not an argument for it.**

---

## D-32. Best drops ranks, the guest stage is one picture, and the trigger says the act that is available

**Date:** 2026-08-19. **Stage:** 04, node `3.3`, third pass in one session. **Decided by:** the founder. **Binds:** node `3.3` sections 1, 12, 15 and 16, and stage 04's render of `3.3` and of its states.

**What was decided.**

- **Block 4 is ranked by value and it is called `Best drops`.** The label and the sort now agree.
- **The stage on the guest state carries the case artwork alone.** The reveal lane renders from the moment a person can open.
- **The commit block loses its frame**, and **its trigger carries the act that is actually available:** `Sign in with Steam` for a guest, `Open for <total>` once an account exists. **The entry cost returns as a figure beside it**, because a trigger that no longer says the price does not repeal design principle 3.

### The ranking, and why the argument stops here

`D-30` took the carrier and refused the ranking. `D-31` refused the label for the same reason: a heading claiming a rank over a list in time order lies about the list. **The founder asked for the ranked row a third time and asked what had to change for it to happen. Nothing had to change except this record.** A request repeated three times is a decision, not a misunderstanding, and the design's job from here is to make the decision honest rather than to keep relitigating it.

**The cost is not reduced by having been predicted, and it is the same cost section 16 named:** this is **survivorship by construction**. The biggest drops of a period are not what happens. **What makes it survivable is that the block saying what does happen is on the same page and one tap from this row's caption**, the published rate against the observed rate, `D3`.

**And the dependency is now sharper than it was.** `D-B` decides whether that block renders at all. **If it comes back negative, a ranked row of the biggest wins stands on this page with no counterweight**, and that is the state to reconsider the row in rather than a footnote to it.

**Still refused inside the row:** the multiplier, x38.8 and x536.2 on the captures, because a multiplier is the survivorship claim compressed into one number; **the window chosen to flatter**, because a parameter that can be tuned upward is a claim; and **any person's name**.

### The guest sees the case, not the machine

The lane is the reveal's track. **A guest is two steps from a reveal**, the geo layer and Steam, so the track is showing them the mechanics of something they cannot start. **What a guest gets is the object they came to look at**, at the size the stage can give it once the lane is not sharing the room.

### The label names the act that exists

A button reading `Open` in front of a person who cannot open **names an act this person cannot perform, and the page tells them so only after the tap.** The route does not change, `2.1` first because the gate fires at the first case interaction, `D-17`. **What changes is that the label stops promising.**

**The consequence that had to be paid immediately:** the total left the button, so **the entry cost is a figure again above the switch.** Design principle 3 does not stop applying because the trigger changed its wording, and a guest deciding whether this case is worth reading further needs the price.

### The frame goes

A bordered box around the trigger was **the block insisting on itself.** `conventions.md` section 1.6 gives each screen exactly one main action and this screen's is already the loudest thing on it. **The unit still reads as one thing because its parts are stacked and centred on one axis**, which was doing the work the border was taking credit for.

---

## D-33. The price and the act sit in one row, and each state puts a different thing beside the trigger

**Date:** 2026-08-20. **Stage:** 04, node `3.3`. **Decided by:** the founder, from a capture of the live product. **Binds:** node `3.3` sections 1 and 12, and every drawn state of `3.3`.

**What was decided.**

- **The commit block's two objects sit side by side rather than stacked.** The row holds exactly two things and the second is always the trigger.
- **On the guest state the first thing is the entry cost.** The count switch does not render there at all.
- **On the signed-in state the first thing is the count switch, and the cost figure above the trigger goes.** The trigger already carries the total.

### Why the row rather than the stack

The price and the act are one decision: what this costs and what happens if I agree. **Stacked they are two glances, and the second one is the button**, so the number is behind the eye by the time the hand moves. The founder's capture puts them beside each other and the baseline does the same on this exact surface.

### Why the switch leaves the guest state

It sets a quantity for an act this person cannot perform, and **nothing carries the choice across the sign in because there is no session yet to hold it.** A control whose only effect is discarded at the next step is a control that was answering nobody. It arrives with the account, which is where `D-31` put it in the first place.

### Why the cost figure leaves the signed-in state

At the default count the figure and the trigger printed the same number twice, and **a number printed twice is not twice as clear.** `D-31` fixed that the trigger carries the total and never the unit, so removing the figure left the unit price with nowhere to live once the switch goes above one. **The unit moved into the caption and prints at every count**, `1 × 12.40 coins`, rather than appearing conditionally: design principle 3 asks for the cost, and a total with no unit beside it is a cost a person cannot check against the drop table.

### What this costs

**The guest state now shows the entry cost for one roll and no way to see the cost of five.** That is deliberate and it is the smaller of two prices: the alternative is a switch that quietly resets. **At 360 the row becomes two rows** and both halves keep their full width, because the one thing that may not be dropped for height is the cost, section 14.

---

## D-34. The outcome is the item, and the receipt is a line

**Date:** 2026-08-20. **Stage:** 04, node `3.6` inside `3.3`. **Decided by:** the founder, reading the drawn outcome beside a live one. **Binds:** node `3.3` section 8, and the drawn outcome and interrupted states.

**What was decided.**

- **The instance value receipt renders as one caption line, not as a bordered four column table.** Float, pattern and phase keep every field `F1` asks for.
- **The two paragraphs under it become one line of routes and one line of holes.** Check this round, share it and inspect in game are three destinations on one row.
- **The item's own published chance prints above it**, read off this page's own drop table.

### The reading that forced it

The founder's words were that ours is overloaded and complicated, next to a capture where the item, its chance, its name and three controls are the entire screen. **On the one surface where the item is supposed to be the event, ours led with an object around four fields, one of which was a three line hole.** `F1` asks for the fields that make this **this unit rather than a name**. It never asked for a container around them. **Nothing was dropped to make it lighter:** four fields became one line and two paragraphs became one, and every route and every named hole survived the move.

### The chance is the one thing the capture had that we did not

It is **the item's own published chance**, already printed two blocks down in the drop table, so it is checkable rather than flattering. `0.11` rule 7 forbids a number that is a score; **this is a property of what landed, not of the person who landed it**, and it is what makes a win legible as a win rather than as an item appearing.

---

## D-35. Multi-open gets its own states, at both ends of the range

**Date:** 2026-08-20. **Stage:** 04, nodes `3.5` and `3.6` inside `3.3`. **Decided by:** the founder. **Binds:** node `3.3` sections 7, 8, 12 and 16.

**What was decided.** Four state pages: **the reveal at two rolls and at five, and the outcome at two items and at five.** `D-31` shipped a count switch of one to five and **neither phase had a state above one roll**, so the switch changed a number on a button and nothing else in the drawn product.

### One lane per roll

Each roll is a separate settled result with its own hash, so **each gets its own track and its own pointer.** One lane resolving five results in turn would be five waits, and the second of them is a person watching a machine rather than their own roll.

**They run at once and settle in order.** `research.md` carries `0.5 to 1 second per card` for bulk reveals as Pattern B, and **section 16 of node `3.3` recorded that figure as having nothing to attach to, because multi-open was refused at the time.** `D-31` gave it something. It is spent on **the settling and not on the running**: the lanes move together and lock one after another, so five results can be read one at a time without five separate waits for them. **That sentence in section 16 is now false and is amended rather than left standing.**

**The lanes are shorter from three up.** Five at full height do not fit above the fold at 360 and the stage would scroll during the one moment it may not. **That is the cost of the switch, printed rather than absorbed.**

### The batch outcome is items, not a summary

Five results are five events, so there are five cards, each carrying what the single outcome carries: the chance it landed against, what it is, what it is worth, the fields that make it that unit, and **its own route to its own proof**, because each roll is its own round with its own hash.

**Two figures and never the difference between them.** What was spent and what landed are both facts of this one act, and design principle 3 puts them where the money moved. **The net is not printed and never will be:** a plus or minus on a batch is a score, `0.11` rule 7, and a red number after five rolls is the loss-chasing prompt section 4 of the node dropped in the `B7-2` divergence. A person who wants the difference can subtract; the page does not do it for them and does not colour the answer.

**The share stays per item.** `7.1` owns one object per result, and a batch card would be a shared object nothing on the map defines.

### What this record leaves open

**The balance in the drawn shell rose to 74.20 coins** so that five rolls at 12.40 are affordable in the state being drawn. **The state where they are not affordable is not drawn**, and it is a real state: the count switch can name a total above the balance. It is named here so it is a gap rather than a discovery.

---

## D-36. The account menu keeps the reference's rows, and the map gains three nodes to hold them

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.1` section 5. **Decided by:** the founder, asked directly. **Binds:** `ia/docs/sitemap.md` cluster 5, node `0.1` section 5, the shell in `wireframes/_nav.js`, and the round 1 scope list in `CLAUDE.md`.

**What was decided.** The account menu carries **Roll history, Profile and Settings** as well as the four rows it already had, and **the map gains `5.9`, `5.10` and `5.11`** to hold them.

### The rule pointed at the gap without saying which side closes it

On 19 August the menu shipped with four rows and a stated refusal: the reference carries PROFILE and SETTINGS, **no node in the map holds either**, and `CLAUDE.md` says a carrier is inherited and filled with live items while only a dead item is deferred. **A row for a page nobody has specified is the dead item defect inside a menu.**

That reasoning is unchanged and it is still the reason the rows could not simply be drawn. **What it never said is which side of the gap moves.** The founder was asked which of the three would exist in the real product and answered all three. **So the map moved, not the rule:** the rows are live items now because the destinations exist, which is exactly what the rule requires.

### The three are not equal and the record says so rather than levelling them

- **`5.9` Roll history has a real parent**, `F3` and Related Job 3, verify the outcome after I open. It is arguably the strongest of the three: the product's whole trust claim is that a round is checkable afterwards, and until now **the only trace of a roll a person could reach was the item it produced.** It also inherits a real dependency: **`D-C` decides whether roll history is retained per roll with seed and nonce in a publishable form**, and if that comes back no, the page renders the rolls without the seed material and says so.
- **`5.10` Profile has no parent in the three legal classes.** No capability in `cjm-to-be.md` asks for it and no job in `jtbd.md` needs it. **It ships with the empty cell printed**, the treatment `D6` the favourite got.
- **`5.11` Settings has no parent either, and worse, it has no contents yet.** Sound sits at the foot of the rail and has no parent of its own; language is one language by the locked boundary decision; no notification row exists anywhere in the backlog. **What it holds in round 1 is `[?]` and the node owes that answer before it can be drawn.**

### What this costs, stated rather than absorbed

**Round 1 grows from nine surfaces to twelve**, and the scope list in `CLAUDE.md` is the one place that records it. **The map goes from 65 nodes to 68 and from 49 MVP to 52.** Stage 04 owes three more screens, and `5.11` cannot be drawn at all until its contents are decided.

**And one older sentence was wrong and is corrected rather than left standing.** Node `0.1`'s Withdrawals row read "this is the record, and the map has no separate history node". **It has one now**, and the two are different records: withdrawals are what left, rolls are what happened.

---

## D-37. The reveal stands up from two rolls

**Date:** 2026-08-20. **Stage:** 04, node `3.5` inside `3.3`. **Decided by:** the founder. **Binds:** node `3.3` section 7 and the drawn reveal states.

**What was decided.** **One roll runs horizontally. Two or more run vertically, as reels side by side.**

### The axis is doing work rather than decorating

**Stacked horizontal lanes put every extra roll below the previous one.** The second roll is further from the eye than the first, the fifth is off the first screen at 360, and **the batch acquires an order it does not have**: every roll was settled at the same moment and none of them is first.

**Standing them side by side puts every roll at the same distance from the eye**, and it gives the batch **one pointer line across all of the reels** instead of five markers at five heights. `D-35` had already had to shorten the lanes to fit five of them, which was the axis telling us it was the wrong one.

**A single roll stays horizontal, and that is not an inconsistency.** With nothing beside it to compare against, the wide axis is the one that gives the artwork its room, and **phase 1's lane is horizontal because it is the same region at rest.** The axis changes at the only condition that makes the vertical reel better: more than one thing to line up.

---

## D-38. The sell control arrives, and two refusals are reversed with their reasons kept

**Date:** 2026-08-20. **Stage:** 04, node `3.6` inside `3.3`. **Decided by:** the founder. **Binds:** node `3.3` section 8 and 8.3, the drawn outcome states, and the `LATER` list in `CLAUDE.md`.

**What was decided.**

- **A sell control on the outcome.** Per item on a batch, on the card. One for the whole batch, `Sell all for <total>`.
- **The acts become the accent of the screen: two big controls**, `Open again for <cost>` and `Sell`. The reference carries three and the third is UPGRADE, **a capability that does not exist here, so there are two rather than a placeholder**.
- **Keeping stops being a button.** `E1` credits the item before the animation starts, so keeping is what happens if nothing is tapped. It is a line of text with a route to `5.1`.
- **The two figure chips go**, because the two controls print the same two numbers a line later. `D-33`'s argument, applied after the spend rather than before it.

### This reverses two named refusals and the reasons are kept rather than deleted

**Section 8.3 refused a sell control** on the ground that round 1 has exactly one exit, withdrawal to Steam, and that `cjm-to-be.md` T7 rejected a binding buyback at the displayed value before scoring because it adds a payout rail round 1 does not have. **That ground is unchanged. It is now a cost rather than a refusal.** The capability is in no backlog row, so **it ships with no parent in the three legal classes**, the treatment the daily free case and the favourite already carry.

**Section 8.3 also refused a one-key repeat, and it named exactly this pair:** one key to liquidate and one key to spend again, which `blocks.md` section 12 calls the single most telling block in the whole bank. **Half of that refusal survives, and it is the half doing the work.** `Open again` is a full control that re-enters phase 1 **with the entry cost, the tested RTP and the expected value all on screen again**. It never becomes a key that re-rolls in place. **The other half is spent**, and this record is where anyone looking for the argument against it will find it intact.

### Three things this leaves undecided, and one of them should block closing the node

- **The sold state is not drawn.** Selling is instant and irreversible; what the screen becomes afterwards, whether it confirms first, and what the balance figure does are all `[?]`. **A control that cannot be undone with no drawn confirmation is the one thing this node should not close without.**
- **Whether the sell price carries a spread against the published current value is `[?]`.** They are drawn as the same number. **If they differ, design principle 1 makes printing the difference mandatory rather than optional:** a buyback below a figure we published on the same screen is a cut the reader can see us take.
- **`CLAUDE.md` lists in-platform exchange as `LATER`.** A buyback for coins is not that capability, but it is close enough that the scope list should say which of the two it is instead of leaving a reader to guess. **That line needs a founder decision and is not edited here.**

---

## D-39. The batch outcome is one row at every width, and the card is cut down until that is true

**Date:** 2026-08-20. **Stage:** 04, node `3.6` inside `3.3`. **Decided by:** the founder. **Binds:** node `3.3` section 8 and the drawn batch outcomes.

**What was decided.** **N items sit in N columns at 360 exactly as at 1440.** No wrapping to a second row at any width, and **the card sheds fields until that holds** rather than the row breaking.

### The argument is structural, not a preference

**Since `D-37` the reveal is N reels side by side.** An outcome in N columns means **column `i` of the result is column `i` of the reel it came out of.** Wrapping to a second row at 600px broke that correspondence at the exact width where it is hardest to hold five things in the head, and it gave five results a two-then-three shape they do not have.

### What it costs, tier by tier, because a fifth of 360px is about 55px

- **The value figure leaves every card at every width.** The figure above the sell control and the number inside it were the same number. **While the sell price equals the published current value there is nothing for a second printing to say**, and the moment a spread exists the figure comes back, because then they are two numbers and design principle 1 makes the difference mandatory. That condition is `D-38`'s open question.
- **Float, pattern and phase leave the card and become one receipt line per roll under the row.** `F1` is satisfied at every width instead of at wide ones, and in the same order as the row, which is the order of the reels.
- **Below 900px at four columns and up, the name leaves the card too.** At 55px a skin name does not wrap, it breaks mid-word, and **a name broken into "Asii mo v" is not a name.** What identifies a skin at that size is the picture. The name is on the receipt line, on a full line of its own.
- **What the card never loses:** the artwork, the chance it landed against, and its price on a control. **The verb stays on that control at every width and only the words around the number go**, because a control whose whole label is a number reads as another figure in a box.

---

## D-40. My items leaves the rail, and both carriers stop changing on sign in

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.1`. **Decided by:** the founder. **Binds:** node `0.1`, `ia/docs/sitemap.md` row `0.1`, the shell in `wireframes/_nav.js`, and the navigation paragraph in `CLAUDE.md`.

**What was decided.** **My items is removed from the rail**, and by the superset rule from the mobile bar with it.

### It did not lose a destination, it stopped holding one twice

Since `D-36` the account menu carries **My items as its first row**. `CLAUDE.md`'s navigation model says **no carrier holds another's kind**: My items is an account thing and **the header owns the account**. The rail is the ways-to-play carrier and round 1 ships one way to play.

**The superset rule forces the second half.** Every bar item exists in the rail and the rail is always the superset, so an item leaving the rail leaves the bar in the same step. This is the same mechanism `D-29` used when Provably fair left.

### The cost, and it is bigger than the one D-29 printed

- **The rail now carries one destination and the bar two, identically in both states.** Neither carrier changes on sign in at all.
- **The bar is below Material's floor of three for a signed-in person as well as for a guest.** `D-29` printed that violation when it applied to one state. **It now applies to both, and the way out `D-29` named is still not taken.**
- **One extra tap from a case screen to the inventory on desktop**, through the account menu instead of the rail.
- **`CLAUDE.md`'s navigation paragraph still reads "one destination before an account and two after".** That sentence is now wrong and **is not edited here**, because that file changes only on an explicit go.

---

## D-41. The language switcher ships as a carrier, and no second language ships with it

**Date:** 2026-08-20. **Stage:** 04, raised against nodes `0.1` and `0.2`. **Decided by:** the founder, asked directly. **Binds:** node `0.1`'s ambient foot, node `0.2`'s "Language, absent" row, the shell in `wireframes/_nav.js`, and the reading of `D-02` in `CLAUDE.md`.

**What was decided.** **The language control is a real switcher, in the rail's foot and in the footer.** **No translation is produced and round 1 still ships one language.**

### The question this settles, and why it was worth asking

`0.2` refused a language control on a **locked boundary decision** rather than on a preference: "Language, absent. `D-02`, one language. The baseline's nine-language switcher does not cross." `0.1` drew the rail's `EN` deliberately as **not a control**, in its own words: "the half that reports rather than acts, no press state, and not a button element. One language is locked, so there is nothing to pick."

**The founder's answer separates two things those rows had welded together:** the live product has a switcher, so the carrier is inherited; and this project has no translations, so the content does not follow. **`D-02` is untouched. Its consequences all still hold**, and they are the reason it was worth being exact: one IA node is still one page, microcopy is still strings rather than keys, and voice and glossary still run once. **None of that depends on whether a control exists. All of it depends on whether a second language exists, and none does.**

### The rule that decides what the control opens

`CLAUDE.md`: **a carrier is inherited and filled with live items, and only a dead item is deferred, never the carrier that would have held it.** The baseline's switcher lists nine languages. **Eight rows for languages that do not exist would be the dead item defect inside a control**, which is the same defect the rail of nine was cut down to avoid.

So it opens **one live option, English, and a printed sentence naming what is absent**: the others arrive with their translations, and **the product carries no hreflang until they do**. That last clause is not decoration: a switcher in the interface is the usual reason a crawler is told a page has alternates, and saying so here stops a later stage inferring it.

### What this costs, stated

- **A control with one option is a control a person can press and get nothing from.** That is real and it is the price of inheriting the carrier before the content. **The sentence inside it is what keeps that honest** rather than a menu that opens onto itself.
- **It is in two carriers**, the rail's foot and the footer, at the founder's request and on the same argument that puts responsible play in three: each answers a different moment. **It is the same control in both, not a copy with different behaviour.**
- **`CLAUDE.md`'s locked table still reads "Language, One, English", and that stays true.** What a future reader could take from it wrongly is that no switcher may be drawn. **The proposed amendment is one clause on that row and it is not made here**, because that file changes only on an explicit go.

---

## D-42. The footer's kinds get sorted: the social set joins the brand column, the language stays in the bottom row and gains eight stubs

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.2` and reaching `0.1`. **Decided by:** the founder, from the rendered footer and one competitor reference supplied as an image. **Binds:** node `0.2` bands 2 and 4, node `0.1`'s ambient foot, `wireframes/_nav.js`, and it amends `D-41` without reversing it.

**What was decided.** **The social set moves out of the bottom row and into the brand column.** **The language switcher stays in the bottom row and opens nine options, the baseline's own set, of which one is live and eight are stubs that change nothing.**

### Part one: the social set moves, and the reason is kind

`D-41`'s render put the social icons and the language control side by side in band 4, next to the payment marks. **That row then held three kinds at once:** a payment mark is a claim about a contract, a social link is an exit from the product, and a language is a preference of the session.

**The brand column already holds every way to reach us**, the Support button and the identification block. The social set is another one, so it joins its own kind. **Ownership does not move with the drawing:** `0.2` still owns the canonical set and the rail's drawer renders it from here, which is the rule that put it in the footer in the first place.

**The language does not follow it.** A preference of the session is not a way to reach us. The bottom row is where a product keeps the meta of the page a person is on, who owns it, what it accepts, what language it is in, and that is the row it stays in.

### Part two: eight dead options ship, and this is the interesting half

`D-41` refused exactly this, in writing: **"Eight rows for languages that do not exist would be the dead item defect inside a control."** That refusal followed the rule that shaped every other carrier in this project, the rule that took the baseline's rail of nine down to one live destination.

**The founder reverses it, and the reversal is scoped rather than general.** The argument is that the prototype is a portfolio artefact rather than a release, and that a reader should see the shape the live product actually has, which is nine.

**What is bought.** The footer reads as the real product's footer rather than a reduced one, and the carrier is drawn ahead of its content on purpose.

**What is paid, and it is not small.** **A control that changes nothing is a promise the product does not keep.** In anything shipped that is a defect, not a placeholder. It is carried in the open: the panel itself says the interface stays English and that the other eight switch the control and nothing else.

**It does not become a precedent.** The rule stands everywhere else. No other carrier in this project gets dead items on the "it is a portfolio" argument, and if one is proposed, this record is the reason to refuse it rather than the reason to allow it.

### The nine are sourced, not invented

`en de` Chinese `fr pl tr pt es ru`, from `baseline.md` section "Header", walked live on 11 August 2026 with the switcher itself as evidence. **This project does not invent a list of languages any more than it invents a number.**

### Three things the stubs deliberately do not do

- **The page keeps `lang="en"` in every option.** English text announced to a screen reader as German is an accessibility defect, not a placeholder. The one attribute that would make the stub look real is the one that makes it harmful.
- **No hreflang, no localised URL, no second IA node.** `D-02`'s three consequences stay exactly as they are: one node is one page, microcopy is strings rather than keys, voice and glossary run once.
- **No flag icons.** A flag is a country and a language is not, and the baseline's own list proves the point: Chinese, Portuguese and Spanish each have no single flag that is not a claim about who counts.

### Two contradictions inside `0.1`, found while writing this and corrected

Both were left standing by `D-41` and both are kept in place with their reasons rather than deleted.

- **The rejected-items table still read "The language switcher, cut permanently".** `D-41` had reversed it hours earlier. What it was right about survives: no second language ships. What it got wrong was reading a decision about content as a decision about a control.
- **Section 9 still read that the language "is a label with no border and no press state, because one language is locked and there is nothing to pick".** `D-41` had already made it a button. **The reasoning was sound and the premise moved under it**, which is the failure mode this project's "markdown stays alive" rule exists to catch, appearing twice in one node on the same day.

### Still open, unchanged by this record

`CLAUDE.md`'s locked row "Language | One, English" is still true and still carries the reading risk `D-41` named. **The proposed clause is not written here either**, and it now has more to say than it did: not only that a switcher may be drawn, but that eight of its options are deliberately inert.

---

## D-43. The page gets centred, and the footer gets rebuilt as three full bleed bands

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.2` and the shell contract. **Decided by:** the founder, from the rendered page on a wide monitor plus two competitor footers supplied as images. **Binds:** `wireframes/docs/conventions.md` section 8, node `0.2` section 3, `_wf.css` and the shell in `wireframes/_nav.js`. **Amends** `D-42`'s placement of the language without touching what `D-42` decided about its options.

**What was decided.** **The app is full width and the content measure is centred inside it.** **The footer becomes three bands that paint edge to edge with their content at that same measure.** **The brand block leads with the logo slot and carries the language switcher.** **The compliance statements leave column 4 for the trust row.** **One reserved brand art slot ships with no parent, printed.**

### The defect the founder saw, and it was one line

`.wf-screen-body` carried `max-width: 1440px` **and no auto margin**. On a 2000px monitor the whole application sat against the left edge with 560px of dead grey on the right. **The cap was right and the centring was missing**, and because the cap was on the app box rather than on the measure, no band inside it could ever reach the edges of the screen either. One missing declaration was doing two kinds of damage at once.

**The fix is one declaration in three places rather than three declarations.** The header, the main column and every footer band share `padding-inline: max(gutter, (100% - var(--wf-content)) / 2)`. **Their content edges cannot drift apart, because there is nothing to keep in sync.** It serves a 360px phone and a 2560px monitor with no breakpoint of its own.

**Three rules had to be removed for it to work, and each had been correct when it was written.**

| Rule | What it was for | Why it had to go |
|---|---|---|
| `.wf-header { padding: var(--wf-s-1) }` | The header's own inset | A shorthand `padding` beats a later `padding-inline`, so the header alone stayed uncentred while main and footer moved |
| `.wf-header { margin: -16px -16px 0 }` below 900 | Pulling the header out of `.wf-screen-body`'s 16px padding to reach the edges | That padding is gone. The margin then pushed the header 16px **past** both edges and put a sideways scroll on every page below 1200 |
| `.wf-foot-cols { grid-template-columns: 1.4fr 1fr 1fr 1.2fr }` inside `@media (min-width: 900px)` | The 19 August scaffolding audit's fix | It sat later in the file than the container query that replaced it and **beat it silently**. This is how a container query stops working with nothing reporting an error |

### The footer, rebuilt

**Four bands became three.** The interlinking block is one hairline and one sentence; a band is a promise of weight it does not have, so it is the last row of the main band now. **Nothing left the footer.**

- **The brand block leads with the logo slot.** It opened with the words "CS2 Clutch" in bold, which is a placeholder pretending to be finished. **The logo is an asset stage 06 draws and what this stage owes it is the space it will occupy**, at the size the live product gives a footer logo, so it arrives as an image in a place rather than as a new element in a finished column.
- **The about line is one sentence and it is the product's promise:** published chance, current value, tested return before the spend, and a round that can be checked after it. That is principle 1 and `D-14`'s stated limit in one line.
- **The language switcher moves into that block**, one day after `D-42` put it in the bottom row. Both supplied references put it here and the reason survives the reference: **it is the only control in the footer that changes how the whole page reads.** It is drawn wide with the full language name while the rail keeps the two character form. **Same control, two labels, written by one function so they cannot disagree.**
- **The compliance statements leave column 4**, which is not a decision at all: **this node has said since it was written** that the compliance line "moved out of its own band and into the bottom row, and that is a promotion rather than a demotion. It now sits beside the legal identity and the copyright." The render had them stacked in a column where they made it three times the height of every other one. **A render catching up with its node, found by looking at the drawing.**
- **The trust row is three kinds on purpose**, a way to reach us, a statement about who may be here, a claim about what we accept, because a stranger checks all three in one look.

### The brand art slot, and it is an orphan

**Founder request, and it ships with its orphan status printed rather than argued into a parent.** It has no barrier code, no job and no compliance constraint behind it. What it has is the shape both references use and the space a visual stage will want.

**Because it carries nothing, it is the first thing to go:** `aria-hidden`, and it leaves the layout when the column can no longer hold five, rather than competing with four columns of real routes. **A decorative slot that survives a narrowing that kills a route would be the wrong order of loss.**

### Play holds two, and that is not an omission

The column is inherited and filled with what is live, and the LATER modes enter it as they ship, exactly as they enter the rail. **A short column is the truth about the round.** Padding it with a route the map does not hold would be the dead item defect one carrier down, which is the rule that took the rail from nine to one and the same rule `D-42` suspended for the language control alone.

---

## D-44. Five link columns: Play holds one game, Cases gets its own, and Help replaces nothing

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.2` section 3. **Decided by:** the founder, reading the drawn band. **Binds:** node `0.2` band 2 and the shell in `wireframes/_nav.js`. **Amends** `D-43` one day old.

**What was decided.** **Play holds one game. A Cases column is added. A Help column is added and carries Provably fair and the contact route. Play responsibly keeps its column.**

### The ask, and the one place it collided with a rule

The founder asked for a Help column **instead of** Play responsibly. **That collides with `CLAUDE.md` directly:** "Provably fair and Responsible play are carried by the footer, which holds each in its own column." Responsible play has no other carrier since `D-40` took it off the rail.

**The collision dissolves once the two halves are separated.** What the founder wants in Help is FAQ, Provably fair and contact. **Only one of those was in Play responsibly**, and it was not there: Provably fair was in Play. So Help is built from Provably fair plus the contact route, **Play responsibly keeps its column untouched**, and nothing is displaced. **The rule holds: each still has a column. They are just not the same two columns as before.**

**Provably fair belongs in Help rather than in Play on its own merits.** A person looking for the proof is checking us, not choosing a mode.

### There is no FAQ row, and the founder should know why

`sitemap.md` cut the baseline's FAQ **on an argument rather than on scope**, and the argument is recorded: on the live product the FAQ is the whole of the age control and the whole of the geo statement, both of which move to real surfaces here, `2.1` and `6.1`, and the residue goes to `0.10` Support.

**A row for it would be a carrier promising a destination the map does not hold**, which is the rule this project has applied to the rail, the account menu and the mobile bar in turn. **So the row is not drawn and the absence is printed inside the column** in the smallest type in this footer: "No FAQ: its two jobs moved to the geo gate and to Responsible play, and the rest went to Support."

**That is a question handed back rather than a refusal.** Reopening the FAQ is a decision, it needs a node before it needs a link, and the founder can make it with the argument in front of them instead of discovering the row missing.

### Play holds one game, and Cases holds the few

**One game, because the product has one.** The column is inherited and filled with what is live, and the LATER modes enter it as they ship, exactly as they enter the rail. **A short column is the truth about the round.**

**The Cases column is not the interlinking row.** The row points a crawler at the priority indexed set; the column points a person at the cases we are putting forward. **They may turn out to be one list**, in which case the row goes and the column stays, and `3.1` decides that.

**The four names are the four this prototype already draws** on Home and on `3.3`, Ironbound, Warsteel, Coldfront and Nightfall, rather than four plausible-sounding new ones. **Which four deserve the slot is a merchandising decision and it is not made**, printed in the column beside them.

### What it cost in layout, and it was paid rather than absorbed

Six tracks plus the art slot is seven, in a measure of 1220. **The ladder is asked of the content column at every step:** one column, then two with the brand block taking the whole row, then three, then six, then seven with the art. **The art slot and the seventh track switch at exactly the same width**, because for one measurement pass they did not and the art wrapped to a row of its own under the brand block.

---

## D-45. Play responsibly stacks under Help, and the language moves to the meta corner

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.2` band 2 and band 3. **Decided by:** the founder. **Binds:** the node and the shell. **Amends** `D-43` and `D-44`, both a day old.

**What was decided.** **The column order goes back to Play, Cases, Company, Help.** **Play responsibly sits under Help in the same track rather than beside it.** **The language switcher moves out of the brand column and above the payment marks.**

### Merging was refused. Stacking is not merging, and the difference is the whole record

The question before this one was whether Help and Play responsibly should **merge**. **The answer was no, on three grounds**, and all three are about taxonomy:

| | |
|---|---|
| **The rule** | `CLAUDE.md`: "Provably fair and Responsible play are carried by the footer, **which holds each in its own column**." Responsible play has had no other carrier since `D-40` took it off the rail |
| **The kind** | Help is *I have a problem, help me*. **A limit you set on yourself is not help, it is a boundary.** Filing self exclusion under a support heading reframes a compliance instrument as customer service |
| **The divergence** | The compliance section is the whole reason this band diverges from the baseline: no responsible play route, no footer link, no age statement anywhere on the live product, `baseline.md` section 6 |

**Stacked, it keeps its own heading, its own accent bar and its own list. What it shares is a grid track.** That is a layout fact, and every objection above is about taxonomy. **The section is still nobody's subheading.**

**The literal wording is bent by this and it is said out loud rather than reasoned away.** "Its own column" becomes "its own titled section in a shared track". **What the rule protects is intact; what it happens to say about geometry is not.** If that distinction ever stops being obvious in the drawing, the stack goes back to a column.

**What it fixes:** two sections of two rows each, side by side, read as one half empty block. Stacked, the track fills and **the row of column headings stays a row.**

### The language switcher's third address in two days

Band 4 by `D-42`, the brand column by `D-43`, above the payment marks now. **That is a lot of moving for one control, and what settles it is a reason rather than a preference.**

**This cell is already the page's meta corner:** what we accept as payment, and now what language you are reading. **The brand column answers who we are**, and a preference of the session is not part of that answer. `D-43` put it there on the strength of two references that do; the references were right about the shape and wrong about the kind.

**It is drawn to the width of the marks under it**, so a control and a row of marks read as one cell rather than two things that happen to be near each other.

### One defect, and it is the second of exactly the same shape

**The rail's collapsed tooltip rule matched by attribute and was not scoped to the rail.** The footer's language control carries the same `data-lbl`, because it is the same control, so **focusing it in the footer drew a rail tooltip off the right edge of the last band and pushed the page 105px sideways** in the collapsed state.

**`D-42` fixed the identical leak in the panel rule two days ago.** A rule written for the rail, matching by class or by attribute, reaching a copy of the control somewhere else on the page. **Both are scoped now**, and the pattern is the one to look for the next time a control exists in two carriers.

---

## D-46. The stage at rest carries the case, follows the count, and the state list gets one naming scheme

**Date:** 2026-08-20. **Stage:** 04, raised against node `3.3` and the screen registry. **Decided by:** the founder, reading the drawn case screen and the two navigation lists beside it. **Binds:** node `3.3` sections 1, 7.2b and 12, `wireframes/_nav.js`, `_nav.js` and the grey contract.

**What was decided.** **The lane at rest carries this case's items and drifts.** **Choosing a count redraws the stage into that many lanes on the axis the reveal will use, drawn at two and at five.** **Every state carries its node code as a field, and both renderers read it.**

### The cost the lane's refusal printed has now been paid

On 19 August the lane was cut from nine tiles carrying a value and a chance each down to nothing at all, and **the node printed what that cost in its own words**: "the stage now shows what the reveal will look like rather than what is in the case, so a person who reads only the first screen learns the case's name, its cost, its tested RTP and its expected value, and nothing about its contents."

**The founder's answer separates the two things that refusal had welded together.** What was refused was **figures on the lane**, and it stays refused. What was lost with them was **the items themselves**, and nothing required that. **An artwork is not a claim**, so no value, no chance, no name and no pointer, and the first screen answers what is in this case again.

**The drift has a job, which is the test `CLAUDE.md` sets for motion.** Design principle 2 cuts motion without an emotional or informational job. **Informational: a strip that moves is legibly longer than its frame**, so it reads as a sample of a set rather than as the set. **Emotional: principle 4**, the platform alive rather than a page at rest.

**It is not a spin, and three limits keep it from becoming one.** No pointer, ever, in phase 1, which is `E2`'s near-miss objection arriving one phase early. **It stops under `prefers-reduced-motion`** and renders the same items still, because section 7.3 makes that an accessibility setting rather than a speed control. **And it never accelerates into the reveal**, which would be the interface pretending the roll is happening now when `E1` says it is already settled.

### Phase 1 follows the count, and the matrix used to say it did not

The node has said since it was written that the stage is "the reveal lane standing still" and "the same region holding the same object in two states rather than two layouts trading places". **Its own state matrix then said "count switch at more than one: phase 1 unchanged"**, which made that true only at a count of one.

**A stage that shows one lane and then opens five is a layout trading places at the moment of the tap**, which is exactly what the paragraph exists to forbid. So the stage at rest takes the axis and the count the reveal will use: **one horizontal, two or five vertical and side by side.** **What a person sees before the tap is what they will see during it, minus the motion that decides anything.**

**Drawn at two and at five**, the same pair `D-35` chose for the reveal and the outcome: two is the shape and five is the load. **One, two and five are walkable in the prototype and three and four are not**, which is a prototype fact rather than a product one.

### Two navigation lists, two answers, one set of files

The founder asked what the difference was between the flat list of screens and the list on the screen itself. **There was no difference in the files and every difference in the reading.**

| | |
|---|---|
| **The flat list** | Printed the host's code for every page, so eleven states of the case screen all read `3.3`, and folded the state's own name into "Case screen, <state>" after **stripping the code out of its own label** |
| **The list on the screen** | Printed `3.4` through `3.7` for the same eleven pages, because those codes were **typed into the label text** |
| **The flow walker** | Found a state by **searching for its code inside a string**, so a state could only take part in a flow if somebody had remembered to prefix its label |

**The code is a field now and both renderers read the same two fields:** the state's own node code where it has one, the host's where it does not, and the state's own label untouched. **A state with no code of its own is a variation of its host node and is shown as one**, rather than borrowing a number it does not have.

**And the rows are in flow order**, which they were not: the two phase 1 states at a chosen count had been appended after `3.4` because they were added last.

---

## D-47. The stage is two objects: the boxes multiply, the showcase does not

**Date:** 2026-08-20. **Stage:** 04, raised against node `3.3` section 1. **Decided by:** the founder, reading the drawn stage at a count of two. **Binds:** node `3.3` sections 1, 7.2b and 12, and the three phase 1 pages. **Corrects `D-46`, hours old**, and **reopens the figures the 19 August cut removed**.

**What was decided.** **The reveal boxes multiply with the count, one per roll.** **The showcase is one horizontal strip that never multiplies, and it prints artwork, name, current value and published chance.**

### One object was doing two jobs, and separating them dissolves the older conflict

`D-46` made the drifting strip multiply with the count, on the node's own reasoning that the stage is "the reveal lane standing still". **The founder read the result and the reading is the correction: the contents of a case appeared to double because somebody asked for two openings.** What is in the case does not change because a person wants two of them.

| Object | What it is | What it prints |
|---|---|---|
| **The reveal boxes** | **One per chosen roll.** Each is where one roll's artwork lands | **Nothing.** A track is not a listing, and no box carries a pointer |
| **The showcase** | **One horizontal strip, and it never multiplies** | **Artwork, name, current value, published chance.** Nothing else |

### This is what reopens the figures, and it is not a reversal of the reading behind the cut

On 19 August the lane went from nine tiles carrying a value and a chance each to nothing at all. **The founder's reading then was that it was too much information on the stage, and that reading stands: the stage carries none of it.**

**What the cut was actually enforcing was `D2`**, in the node's own words: "the rule against a value with no chance beside it binds any surface that **prints** a value, and the honest way to satisfy it here is to print no value, not to print two." **That was the honest answer for an object that was the reveal's track.** The showcase is not that object. **Once the strip is a listing rather than a track, printing both is not the compromise, it is the requirement.**

**And it pays a cost the node has been carrying in writing since 19 August:** "the stage now shows what the reveal will look like rather than what is in the case, so a person who reads only the first screen learns the case's name, its cost, its tested RTP and its expected value, and nothing about its contents."

### Four fields and no fifth

The ticket range, the free-unit count, the wear axes and the outbound market link stay in block 5, which is the surface that makes those figures checkable. **The strip is a sample of that table and routes to it** rather than trying to be a second one.

**Two surfaces printing one pair is a real cost and it is stated rather than absorbed:** they render from one source, and if they ever disagree the page is broken rather than merely untidy.

**The strip carries `aria-hidden` and the table below it does not.** Nine items read twice is nine items read twice, and a moving region is a poor thing to make a screen reader walk. The complete, grouped, checkable listing is one block down and is not hidden.

### The guest gets it too, and that part is a derivation rather than an instruction

`D-32` kept the **lane** off the guest screen because a lane is the reveal's track and a guest is two steps from a reveal. **The showcase is not that object.**

**A guest is the person most deciding whether this case is worth it**, which is design principle 1 and design principle 3 pointing the same way. **Nothing in `D-32` required the contents to be hidden from a guest; it required the track to be.** The guest still sees one box rather than a lane, because a guest has no count to choose.

**This half was not asked for and it is marked as such**, so reversing it is one word rather than an archaeology exercise.

---

## D-48. One stage, one size, in every phase of the case page

**Date:** 2026-08-20. **Stage:** 04, raised against node `3.3`. **Decided by:** the founder, comparing six drawn states side by side. **Binds:** node `3.3` section 0 and the grey contract.

**What was decided.** **The stage frame is the same box on all fourteen pages of `3.3`.** **The batch receipt moves out of it.** **The content of each phase fills the box rather than sitting in the middle of it.**

### If the phases are states of one page, the region they happen in is one region

The node has said since it was written that choosing, opening and the outcome are **one address** and that the person never navigates during the main job. **A region that changes height when a state changes is three layouts wearing one URL.**

**Measured before the fix, at 1440:** 179px on the reveal, 330 on the three figure conditions, 370 on the outcome, 460 on the batch, 501 on phase 1. **At 360 it ran from 128 to 469.** The commit block, the Best drops row and the whole drop table moved up and down under a person walking one flow.

**One token now, `--wf-frame-h`, 460px from 900 and 380 below it**, and every phase is asked to fit it.

### The content is centred, and what stretches is what the phase is about

**A phase with less to show shows less, in the same place.** What does stretch is the thing the phase is actually for: the case artwork in phase 1, the reels in phase 2, the item cards in phase 3, each taking whatever the box has left after the labels around it.

**Two things grew because the box stopped being their size.** The single-roll reveal was a row of 72px tiles floating in the middle of a 460px frame, **smaller than a card in the Best drops row underneath it**, and the vertical reels already filled their frame. And the outcome cards sized to their own content, leaving the difference as empty grey inside a bordered box.

### The batch receipt is not the stage

One line per roll made the five-roll outcome the tallest stage on the page and the one-roll outcome the shortest. **The receipt is what the stage produced**, and it belongs under it the way a receipt belongs under a purchase.

**No field was removed.** Float, pattern, phase and the per-roll proof link are all still printed, still one line per roll, still in the order of the row above, which is the order of the reels they came out of. **`F1` and `F3` are satisfied exactly as they were.**

---

## D-49. The account control moves to the right edge, loses its name, and its menu becomes reachable

**Date:** 2026-08-20. **Stage:** 04, raised against node `0.1` sections 5 and 9. **Decided by:** the founder, reading the drawn header. **Binds:** node `0.1` and the shell.

**What was decided.** **The account control sits at the far right of the header.** **It is the avatar alone at every width, and the display name is the menu's first line.** **The menu can be moved into.**

### The order was the founder's first reading of a capture, and the baseline disagrees with it

The node has said since it was written: "the account control, the **two figures**, the **deposit control**". **`baseline.md` records the opposite**, in the section on the header: "`.user-panel-right`, right aligned at `x=1174`". The live product puts the user panel at the right edge.

**And the new order is the order of the job:** what I have, how to add to it, who I am. **The account control is the least used of the three and it is the one that opens a menu**, so it belongs at the edge the menu hangs from.

### One control in two forms was the defect

It carried the display name on desktop and dropped it at 360. **That is a difference a person can see and cannot explain**, and the node's own state matrix printed it as two rows: "Avatar and name" against "Avatar only".

**The name is not information a signed-in person needs on every screen: they know who they are.** What it is for is confirming **which** account you are in, and **that question is asked at the moment the menu opens**, so the answer moved there as the menu's first line. **It stays in the control's accessible name**, so nothing is lost to a reader. **Desktop and mobile are now one control in one form.**

### A hover menu you cannot move into is a menu that only works by click

The panel hung **four pixels** below the control, and those four pixels are outside the control's own box. **Moving the pointer down towards the menu left the control and closed the menu before it could be entered.**

**The gap is a visual decision and the hover target is a functional one, and they were the same box.** The panel keeps its gap and carries an invisible bridge across it, belonging to the menu, which is inside the wrapper, so hovering the gap is still hovering the wrapper.

**This was never a keyboard or touch defect:** `0.1` section 5 already requires hover, click, Enter and Space to open it and Escape, an outside click and focus leaving to close it, and all of those worked. **It was the one input the drawing appeared to support and did not.**

---

## D-50. An icon is stage 06's. Its space is this stage's

**Date:** 2026-08-20. **Stage:** 04, raised against the grey contract and node `0.1`. **Decided by:** the founder, reading the drawn account menu. **Binds:** `wireframes/docs/conventions.md` section 2, node `0.1`, and every carrier drawn from here.

**What was decided.** **Every row, every destination and every figure with a unit mark reserves the space its icon will occupy.** **This is a game product and its carriers carry icons.**

### It is not a new rule, it is an existing one applied where it was not

The rail has followed it since it was drawn, in its own words: **"a destination whose icon has no reserved space gets one bolted on later, which moves every label in the carrier on the day it arrives."** The statistics strip in the footer follows it. The case tiles, the item cards and the showcase all follow it.

**Three carriers did not**, and all three are the ones a person sees on every screen:

| Carrier | What it drew | What it draws now |
|---|---|---|
| **The account menu** | Seven rows of bare text | A 20px slot per row, including Sign out |
| **The mobile bar** | Bare text labels | A 22px zone over the label, solid on the current item |
| **The two money figures** | A number and a caption | A coin slot against the value, and **against the value rather than the caption**, because it is a unit mark rather than a decoration on a label |

**A carrier drawn without its icon zones is not simpler, it is unfinished.** The grey contract's "no icons" line was being read as "no icon zones", which is the opposite of what it is for: **the zone is structure and the glyph is look.**

### The founder's framing, and it is already in `CLAUDE.md`

**"This is a game site and it has to be interactive and engaging."** Design principle 4 says it: high energy, neon accented, premium dark, **the main stage, not a back room**. What was missing was the operational consequence at this stage, which is that a stage 04 drawing that leaves no room for the icons a stage 06 will add is a drawing that will be redrawn.

**The rule is written into `conventions.md` rather than into `CLAUDE.md`**, because it is how this stage draws rather than a rule that must hold across the project, and because it generalises a line that file already carries rather than sitting beside it.

---

## D-51. The batch receipt becomes a disclosure beside the acts

**Date:** 2026-08-20. **Stage:** 04, raised against node `3.3` section 8. **Decided by:** the founder, reading the two batch outcomes. **Binds:** node `3.3`, the two batch outcome pages, and the account menu, which had the same latent defect.

**What was decided.** **The per-roll receipt moves out of the page's flow into a control beside the two acts.** **Nothing is deleted and `F1` and `F3` stay satisfied on this screen.**

### The cards are the result, the buttons are the act, and this is the paperwork

`D-48` took the receipt out of the stage frame because it made the five-roll outcome the tallest stage on the page. **It was still in the flow, and at five rolls that is five lines of float and pattern standing between the results and the two acts.** The last thing read before a person spends again was machine detail.

**A drawer is the right carrier for it** because what it holds is how to check a result later, not what the result is.

### What the drawer holds and what it may never hold

| In the drawer | Why |
|---|---|
| Float, pattern, phase, per roll | `F1` owes them on this screen and a control on this screen is on this screen |
| A proof link per roll | `F3`'s aggregate route, **Check all N rolls, stays in the open** in the link row, so the per-roll links are a convenience rather than the only way |

**Never in a drawer: the cost, the odds and the sell prices.** Design principle 3 binds those, and none of them moved.

**The single outcome keeps its line in the open**, deliberately: one item has one line and it sits directly under the thing it describes. **A drawer for one line would be a control that hides less than it costs.**

### Escape had to beat `:focus-within`, and the account menu had the same defect

The panel opens on hover, on click, on Enter and on Space, and it carries the bridge `D-49` gave the account menu. **Escape then failed on both**, and for the same reason: **Escape closes the panel and returns focus to the control, which is inside the wrapper, so `:focus-within` reopened it in the same frame.** The class came off and the panel stayed.

**A dismissal is a state and not an event.** It is held now until the pointer leaves or focus does. **The account menu was fixed in the same pass, because it was the same bug and it had been shipped.**

---

## D-52. A button label never wraps, and a control in a row is the height of that row

**Date:** 2026-08-20. **Stage:** 04, raised against the grey contract. **Decided by:** the founder, reading the outcome acts. **Binds:** `wireframes/docs/conventions.md` section 2 and every button in the prototype.

**What was decided.** **Total ban on a button label breaking to a second line.** **The roll detail control is the height of the acts beside it.**

### Why the ban is absolute rather than a preference

"Open again for 24.80 coins" broke after the verb. **A label read over two lines is a label read twice:** the eye finds the act, loses the amount, and comes back for it, **on the one control where the amount is the decision.**

**And it breaks the row.** A wrapped label makes its control taller than the one beside it, so **a row of two equal acts stops being a row of two equal acts** on exactly the screen where they are meant to be equal.

**What gives instead is the row, not the label.** Below 599px the acts already take a line each at full width, which is where a long label gets its room.

### The instrument had to change with the rule

**A height test is not a wrap test.** The first version flagged every square control in the file, the rail toggle and the sound control among them, which are tall by design.

**A range over the button's own text reports one client rect per line box**, so two line boxes is two lines and nothing else is. **With one correction:** an icon slot and its text sit on the same line box and round to neighbouring pixel values, so tops a pixel apart are one line. The spread has to be most of a line before it counts.

**224 checks across 17 pages and 7 widths report no wrapped label anywhere.**

### The control in the row

The roll detail control sat at the 44px tap floor beside two 60px acts, **so a row of three controls read as two controls and an afterthought.** It is the height of the row now. **It still does not try to look like an act:** it is the width of an icon and they are the width of a sentence.

---

## D-53. The screen list keeps its place and shows where you are

**Date:** 2026-08-20. **Stage:** 04, raised against the prototype's own scaffolding. **Decided by:** the founder. **Binds:** the panel in `wireframes/_nav.js` and the roadmap sidebar in `_nav.js`.

**What was decided.** **Both lists restore the offset they were left at, and both bring the current row into view when it is not already there.**

### Two parts, and they are not the same part

**Restoring the offset is what keeps a person in the place they were reading.** Every navigation reset the list to the top, so walking a set of states meant scrolling back to the row you were on, every time.

**Bringing the current row into view handles the arrival that did not come from the list:** a link inside the page, a flow step, a typed address. **The offset is restored first and the row is only pulled in if it is not already visible**, so the common case does not move at all.

**It stops the moment a person scrolls the list themselves**, and it tells its own writes apart from theirs so it does not mistake its own restore for a person's scroll.

### Three defects on the way, and the third is the one worth keeping

- **The first attempt set `scrollTop` on a detached element.** The panel is built, then appended; a scroll offset written before it is in the document is discarded and its rect is all zeros.
- **The second measured too early.** At render time the current row sat at y=675 in an 800px panel, so it looked visible and nothing moved. **The rows are two lines once the real type is applied**, and the same row ends up at y=1694 in a panel 2209 tall. **An honest early measurement is the same as a wrong one**, so the placement runs again on the next frame, on load and when the fonts resolve.
- **The third was a comma.** `querySelector('.wfp-state.is-current, .wfp-done.is-current')` returns whichever match appears **earliest in the document**, not the first selector that hits. The panel opens with a "Built so far" list whose current row is always visible near the top, **so the reveal always found a row that needed no revealing.** It asks for one selector at a time now, in priority order.

---

## D-54. Sign in is a dialog, and the address is its cold arrival

**Date:** 2026-08-21. **Stage:** 04, raised by the founder before the screen was drawn. **Decided by:** the founder. **Binds:** node `2.4` in `ia/docs/pages/signin.md`, the type row in `ia/_nav.js`, and every guest surface at stage 04.

**What was decided.** **Sign in stops being a page a person is sent to and becomes a dialog opened over the surface they are already on.** It is drawn once as a canon and then mounted wherever a guest meets a control they cannot use. **`/signin` survives as a real address** rendering the same content as a full page.

### The argument, and it is smaller than it looks

**A dialog does not remove a step.** The Steam round trip is unchanged, the gate still fires first, and the tap count in `CLAUDE.md` is untouched. **It removes a loss.** On a page the case a person chose, the count they set and the price they were reading are behind them; in a dialog those are behind the scrim, still on screen, so a person can see the thing they are signing in for while deciding whether to sign in.

**The route defect narrows, it does not close.** `flows.md` counts four distinct screens before the activation node against a threshold of three. Three now. The step count is the same, and the node says so in its own words rather than claiming the defect is paid off.

### The map already held this type and this node was the exception

`ia/_nav.js` carries five node types and **`dialog` is one of them**. `2.1` the geo gate has been a dialog since it was written, `0.4` cookie consent is the second, and **`2.4` was the only node in cluster 2 typed as a page while its own flow put it on top of another screen**. This is the map becoming consistent with itself.

### Two dialogs in cluster 2, and they are opposites

**The gate has no address and its decline persists rather than resetting with the dialog**, because a gate re-answerable by reloading teaches the answer. **Sign in keeps its address and its dismissal is free**, because block 6 of the node says a person who will not sign in is not ejected, and the dismissal is now what enforces that rather than a link they have to notice.

**They are never on screen at once.** On the case screen the first interaction fires the gate, and the sign-in dialog opens only once the gate has passed. Two layers in sequence, never stacked.

### Why the address had to survive

**Deleting it would have silently deleted four reasoned rules**, all in the node's own SEO checklist: that `noindex` is a meta tag readable at a URL, that the route back is a crawlable `<a href>`, that the statement is text rather than an image, and that the surface is identical for a person and a crawler. **A rule stops applying by decision, not as a side effect of a carrier change.** The address is also the only carrier for a typed URL, a deep link, a session with no script, and the node's own "already signed in" state, which exists because a person can type `/signin`.

**So: one content, two carriers, and the canon drawn at stage 04 is the address.**

### What it costs, printed rather than smoothed

- **The footer leaves this surface in the dialog.** A dialog carries no footer; the surface behind already has one. At the address it stays. The two carriers are not identical and the node names where.
- **The dialog carries no H1.** The host page already has one and a second breaks an outline the dialog does not own. The same text becomes the dialog's accessible name.
- **At 360px it is a full height sheet rather than a centred card**, because the node's one hard requirement is that blocks 1 and 2 are both above the fold, and a centred card at 360px puts the fold sooner than the page that requirement was written for.
- **The dialog never closes itself**, not on `2.5`, not on `2.6`, not on a timer. A layer that vanishes on failure returns a person to a screen that cannot explain what happened.

### Rejected

**A dialog with no address.** It reads simpler and it deletes the four rules above without a decision being taken about any of them.

**Keeping the page and adding a dialog as a second surface with less in it.** Two versions of the one statement the node exists for is how the shorter one becomes the real one and the statement becomes fine print. Same content in both carriers, same order.

---

## D-55. Four providers, and only one of them can receive what you win

**Date:** 2026-08-21. **Stage:** 04, raised by the founder with three competitor arrival modals beside the node. **Decided by:** the founder, against this node's recorded argument and knowing its price. **Binds:** node `2.4`, and it adds debt to `5.3`, `5.1` and `4.1`.

**What was decided.** **Steam, Google, Discord and X.** Steam as a full width primary control; the other three as one secondary row.

### What it overrides, kept rather than deleted

Node `2.4` section 1: *"One route, and it follows from the exit rather than from simplicity. Withdrawal is to Steam and Steam only at launch, `jtbd.md` Decision 4, so an account not tied to a Steam identity cannot receive what it wins. A second provider would create accounts that can pay in and cannot take out, which is barrier `B4-1`'s shape built into the sign-up."*

**That argument was not taste and it is not withdrawn.** It stays in the node, marked as overridden, because a deleted argument cannot be reread when the decision is revisited.

### What makes the override honest

**Not that the sentence exists but where it sits.** `C4` generalised: what is required to withdraw is stated **before** the money moves. So the requirement is printed on the sign-in surface itself, beside the three buttons that carry it, in both carriers, and never in a settings page a person finds afterwards.

**One primary and three secondary, and the difference is structural rather than decorative.** Steam is the only provider that can receive a skin, so it is the only one drawn as the act. **Four equal buttons would say the four are equal.** This node's reason for existing is that it does not say things that are not true.

### The price, and it is scope rather than layout

**Three states that could not exist before, because until now no account could exist without a Steam identity:**

| Node | The state it now needs |
|---|---|
| `5.3` Withdrawal | **No Steam linked**, with the link as the act. The exit is Steam and a person arriving from Google has nowhere for the skin to go |
| `5.1` Account and inventory | **Link Steam**, available at any time rather than only at the exit |
| `4.1` Deposit | **Somebody with no Steam linked is about to spend money.** Whether that is a warning, a block or nothing is `[?]` and it is the founder's |

**None is built. All three are debt and are printed rather than absorbed.**

### Rejected

**One provider, as the node had it.** It is the safer product and the founder is paying conversion for a rule nobody else in the category keeps. Named, not hidden.

**Four equal buttons, as the captures ship them.** That is the shape on the screenshots and it is the one thing in them that says something false.

---

## D-56. The dialog is simple without being thinner

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder. **Binds:** node `2.4` sections 0.10.3 and 0.10.4, and `authCard` in `wireframes/_nav.js`.

**What was decided.** **The dialog carries the image slot, the title, the two declarations, the four providers and the four "never read or do" lines. The address carries all of that plus the field list, the round trip, the starter credit, block 6 as a link, the footer and the H1.**

### Why this is not what `D-54` rejected

`D-54` rejected *"keeping the page and adding a dialog as a second surface with less in it"*, because two versions of the one statement the node exists for is how the shorter one becomes the real one.

**The line here is drawn somewhere else: the dialog carries every part of the statement that is finished.** The four "never" lines are absolute and each one is a rule written down elsewhere in this repository rather than a promise made on the surface. **The "what we read" half is still `[?]` field by field, and a list of unknowns is not a statement yet.** It waits at the address for production to fill it, **and when production fills it this split is re-decided rather than inherited.**

The two remaining blocks stay at the address for a reason of their own: the round trip description and the starter credit are what a person reads arriving cold with no context. **In the dialog the context is the surface behind them**, which is the whole of `D-54`.

### The order changed in both carriers, which is why `D-54`'s rule still holds

**The two declarations now come before the provider controls.** `D-54` fixed that the block order never differs between the carriers, so it changed in both or in neither.

**Two reasons.** The node's own default state already required the reason to be "stated in text above it", which is an order and not a decoration. And `D-55` made it structural: **one inert control above its own explanation was tolerable, four is a wall of dead buttons a person meets before being told why they are dead.**

### What was not taken from the captures

**No email and no password field**, which the node already forbade under `B6`. **No single bundled checkbox**, because one gesture answering two questions is exactly what `D-26` split. **No separate sign-up route**, because there is no separate registration in this product and a second door implies a first one that is different.

---

## D-57. The dialog gets shorter without losing a sentence that was doing work

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, who read the built dialog and said it was too long. **Binds:** the dialog half of `authCard` and the dialog rules in `wireframes/_wf.css`.

**What was decided.** **659px tall at desktop instead of 877, and 847 instead of 946 at 360.** Nothing the node requires was removed to get there.

### The height came from the layout, not from the content

**The picture moved to the side above 600px.** The founder had asked for it "on the side or on top" and the side is the half that pays: **stacked, the picture spends 150px of the one axis the dialog is short of; beside the content it spends an axis that was empty.** That is 150 of the 218px saved and it cost nothing.

### Four sentences went, and each one was doing something other than helping

| Cut | Why it was not load bearing |
|---|---|
| "Nothing you chose is lost", after "You stay on this page" | **It says what the screen already shows.** The surface behind the scrim is the evidence |
| "They are two separate acts on purpose: one is a contract, the other is a statement about you" | It explains our design to the person instead of telling them what to do. **The node still has it, which is where it belongs** |
| "because a surface that rearranges itself when a box is ticked has moved the target you were aiming at" | Same. It is the reason for a behaviour they are not being asked to understand |
| "because that is where a skin can go, and the link can be made at any time before your first withdrawal", shortened | **Every part of `D-55`'s requirement is still printed:** those three work now, Steam is needed to take a skin out, and the link is not urgent. What went was the reason why |

**The rule this leaves behind: a surface owes a person what to do, and the node owes the reader why.** A sentence that answers "why is it built like this" belongs in the node.

### What was not touched, and it is the longest block left

**The four "never read or do" lines.** They are `D-56`, one day old, and they are the reason this node exists. **The shorter dialog is still the only sign-in surface in this category that prints them.** If it has to get shorter again, that block is the next thing to be discussed rather than the next thing to be trimmed.

### A defect found on the way, and it is the third of its kind in this file

**A media query lost to a later flat rule, again.** `@media (min-width: 600px)` set the art column to full height and the plain `.wf-dlg-art` rule below it set 120px back, so the picture rendered as a small box in the corner of a two column grid. **The fix is now the convention:** a responsive block goes after everything it overrides, and both dialog breakpoints sit at the end of the section.

**The same reorder found a second one:** below 600 the sheet kept `max-width: 460px`, so from 500 to 599 it rendered as a full height card with margins down both sides, **which is neither of the two shapes the node specifies**. A sheet is full width or it is not a sheet.

---

## D-58. No control on this surface is disabled, and `D-26` is enforced exactly as before

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, from his own operating experience. **Binds:** node `2.4` section 0.10.6, the consent block in `wireframes/_nav.js`, and **it needs one clause of `CLAUDE.md` amended.**

**What was decided.** **The four provider controls are live in every state.** A press that cannot go through **answers** instead of not existing.

### The founder's argument, and it is about what happens after the dead end

**A person meets a dead control, cannot see what to do about it, and either leaves or writes to support.** Four dead controls in a row is that four times over, which is exactly the wall `D-56` named when it moved the declarations above them.

### Why this is not a compliance retreat

**`D-26` requires that nobody gets through without both declarations. That is unchanged.** The press does not sign anyone in.

**The baseline's defect was that its provider buttons worked with the box unticked**, `baseline-account.md`, with no `required` attribute anywhere. **These do not work.** The collision was with the word **inert** in the wording, not with the rule underneath it.

### What a refused press does, and why each part is there

| | What happens | Why that |
|---|---|---|
| The missing declarations | Are marked **on themselves** | The answer to "why did nothing happen" is a place on the screen, not only a sentence about a place on the screen |
| The line under them | **Names which one** | Two declarations means two failure messages, node section 4. **That rule was written for a dimmed control and is worth more here**, where the sentence is the entire reply |
| The keyboard | Goes to the first missing declaration | A message about a control somewhere above is a message a person has to go and find |

**The ambient line stays and the reply does not replace it.** The reason says what is needed before anyone presses; the reply says what is missing after they did. **Removing the first would make the press the only way to learn the requirement, which is the dead button's defect wearing different clothes.**

### Built as behaviour, not as a picture

Convention section 2, a live screen and not a diagram: **the two declarations really toggle and the providers really refuse**, because the whole of this decision is what happens on the press and a still picture of a press cannot be reviewed. One still exists as well, `signin-blocked.html`, so the state has a page like every other.

**A link inside a declaration is a link.** Opening the terms is not agreeing to them, and one click may not do both. Verified: the terms link navigates and ticks nothing.

### Measured

Press with nothing declared: both marked, the line reads "Tick both to continue. Neither declaration has been made yet.", focus lands on a checkbox, **no navigation**. Press with one: the line names the missing one, **no navigation**. Both ticked: `aria-checked` true on both, **zero disabled elements in the dialog**, and the press goes through.

### The `CLAUDE.md` clause. **Applied 21 August 2026 on an explicit go**

The compliance paragraph said "an 18+ declaration enforced at sign in, two separate checkboxes with the provider controls **inert** until both are set, `D-26`". **The word inert was wrong and the sentence around it was right.** It now reads:

> an 18+ declaration enforced at sign in, two separate checkboxes and **no press goes through until both are set, `D-26` and `D-58`, the control staying live so the refusal can say what is missing**

**A replacement, not an addition**, which is the only legal form there. **Budget: 123 lines before, 123 after.**

### Rejected

**`aria-disabled` on a full strength control.** It keeps the control focusable and clickable, which is the useful half, but it announces "unavailable" to a screen reader while showing "available" to everyone else. **A control whose two audiences are told different things is the defect this node exists to avoid**, in miniature.

---

## D-59. The live feed is `0.8`, it goes on every page, and its tile gains two destinations

**Date:** 2026-08-21. **Stage:** 04, raised by the founder as a new element. **Decided by:** the founder. **Binds:** node `0.8`, the shell at stage 04, and it reverses item 6 of `D-31`.

**What was decided.** **The live feed renders on every page.** The item image leads the tile, the source becomes an icon, and a hover layer carries the case and the winner's avatar with a destination each.

### It was not a new element, and that is the first thing worth saying

**It has been in the IA since the detail layer, as node `0.8` Live drop ticker**, with eight fields, a pause control, a rule against invented names and a tile that already leads with the image. **`CLAUDE.md` lists the live drop ticker among the things inherited from the baseline deliberately close to identical.** What is new is the placement and two destinations.

### This reverses `D-31` item 6, and it settles more than it reverses

`D-31` cut the ticker from `3.3` on 19 August, leaving it on `1.0` alone, **and that left `0.8` carrying an open question in its own head: a component with one consumer is a component, or it is that screen's block.** It has every consumer now. **It is a component of the shell.**

**`D-31`'s reason was that the case screen carried too much, and that reason is still true about the case screen.** What changes it is the surface: **a shell strip that is identical on every page is read once and becomes furniture, while a block inside a screen competes with that screen every time.** This decision does not get to declare that for free. **Stage 04 measures what it costs the first screen at 360, and the measurement outranks the argument.**

**Social Job 2 on `3.3` was carried by `Last drops` after `D-31`, "a narrower answer and it is recorded as narrower".** The feed carries it again and `Last drops` stays: one is about this case, the other about the platform.

### The tile, amended

**Always:** the item image largest, weapon and skin under it, and **the source as an icon**.

**The source field is where this decision costs something.** `0.8` section 0 fixed that field's content with an argument: **a label reading the same word on every tile is the dead item defect, so in round 1 it carries the case and not the mode.** `D-59` splits it, the icon taking the mode and the case moving into the hover layer. **Round 1 ships one mode, so the mode icon is a constant: the same glyph on every tile, on every page, until a second mode arrives. A constant is not information.** It is drawn because the founder wants the carrier standing before the mode arrives, which is a legitimate reason and is not the same as the carrier earning its space.

**On hover:** the case, image first with its name, and the winner's avatar. **Row `A3` is unchanged and binds the avatar: no invented names, any bot present labelled as one. A stock avatar over an invented account is `A3` broken with a picture on top.**

### Three targets, and only one of them survives a finger

The tile body keeps `7.1`, `D-20`. The case goes to `3.3`. The avatar goes to a public profile.

**Hover does not exist on a touch screen.** On touch the tile has **exactly one destination, `7.1`**, and both other objects are on `7.1`, one tap further. **Nothing in this component is reachable only by hover**, which is the rule that stops the two input models being two products.

**And a nested target is not a link inside a link.** The tile is a container with three targets, not an anchor wrapping two more.

### What it owes

**The public profile has no node.** `5.10` Profile is the account's own view of itself, `D-36`. Until a public one exists **the avatar's destination is `[?]`** and stage 04 draws the target without a route, marked, rather than routing it somewhere convenient. Recorded in `sitemap.md`.

---

## D-60. Stock leaves the product, and node `3.4` is dissolved

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder. **Binds:** nodes `0.6`, `0.7`, `3.1`, `3.2`, `3.3`, `3.4`, `sitemap.md`, and **it needs one clause of `CLAUDE.md` retired.**

**What was decided.** **Every item is current and available.** No shortfall marker, no free-unit count, no zero-stock state. **The guarantee moves from the shelf end to the payout end:** if a win cannot go to Steam there is an exchange for a real skin, or a sale back to the site.

### What it dissolves, and the prize is bigger than the deletion

**Node `3.4` had no design answer and it knew it.** Its section 6.1 found that three backlog rows are not simultaneously satisfiable:

- `D1`: the roll can only select items with at least one free unit.
- `D2`: a published chance is printed per item.
- `D3`: a weights change forks the observed rate counter.

**Reading A recomputes the chance over selectable entries, so every stock change is a weights change and the counter forks itself into uselessness. Reading B publishes a chance that is not the chance used, which is barrier `B7-2` printed in our own drop table. Reading C closes the case while any entry is at zero.** The node's own recommendation was "C for a small catalogue, A with a stated recomputation for a large one, and B never", and it recorded that the choice was a treasury decision rather than a design one.

**`D-60` chooses none of the three. It removes the condition that made them fire.** That is a better outcome than any reading, and **the whole section is kept unedited in `case.md` so that nobody reintroduces a stock-backed table without reading what it costs.**

### What is lost, named rather than skipped

**One row this repository was proud of.** `0.7` variant V2 required that zero-stock items stay visible and marked rather than disappearing, **which `blocks.md` section 3 records as the one row in that table no competitor matches.** It is void. **We do not get the credit for handling a case that cannot occur.**

### What is owed

**The exchange for a real skin does not exist anywhere.** The sale back to coins does, `D-38`. **This is not the in-platform skin-for-skin exchange that `CLAUDE.md` keeps as LATER**, and which of the two it is, is the founder's to settle. Handed to `5.3`.

**`D-D` changes shape.** The catalogue scale question was about how large a **stock-backed** catalogue can be. Without a shelf it is a different and possibly smaller question. Not closed here.

### The `CLAUDE.md` clause. **Applied 21 August 2026 on an explicit go**

The scope paragraph carried this among the marks that travel with the backlog: "the scale of stock-backed drop tables on an inventory figure that is still `[?]`". **Deleted**, because there is no stock-backed drop table to scale. The other four marks are untouched.

**This is the rarer half of the work and the file's own rule asks for it: deletion is half of what keeps `CLAUDE.md` alive.** A mark for a condition that cannot occur reads as a live constraint to whoever reads it next.

---

## D-61. The case tile is artwork, name, cost and risk, and the daily case becomes a case

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder. **Binds:** node `0.7`, `sitemap.md`, and stage 04's render of `1.0` and `3.1`.

**What was decided.** **The tile is four fields and one control: artwork largest, name, entry cost, risk band, favourite.** Both markers leave.

**The stock marker leaves with `D-60`.** **The daily marker leaves because daily and bonus cases are their own cases now**, not a marker on a case that is otherwise normal. A case that is a daily case is named as one.

**`I2` still has no parent in any of the three legal classes and is still in MVP by founder decision**, `D-15`. **That is unchanged and is not quietly cleared by the marker leaving.** What changed is which object carries it, and no node yet says what a daily case is as a case.

### "Maximally simplified" has a floor, and it is one line of `CLAUDE.md`

**The entry cost stays.** Design principle 3, quoted: **where money is about to be spent, odds, cost and expected value are visible and legible. Cost never hides inside excitement.** A tile with artwork and no price is that principle inverted. **All three competitor captures the founder brought carry a price**, and two make it the second largest element after the artwork.

**The favourite stays and stays orphaned.** It is now the only element on this tile with no parent in the three legal classes, `D-24`, and none of the three captures carries one. **It is the next candidate if this tile has to get simpler again**, named here rather than cut without a decision.

---

## D-62. The IA pages get swept too, and three of them were scrolling sideways

**Date:** 2026-08-21. **Stage:** 04, found while measuring the pages amended by `D-59` to `D-61`. **Decided by:** stage 04. **Binds:** the acceptance instrument.

**What was found.** **Three published IA pages scrolled sideways at 360px and had done since the day each was written.** `ia/navigation.html` by 298px, `ia/ticker.html` by 38, `ia/cookie.html` by 36.

### The instrument had a hole exactly the shape of the defect

**The 315 check sweep covers `wireframes/` only.** `CLAUDE.md` requires acceptance on screen at 360px for anything a stage puts on a screen, and the IA pages are the artefact stage 03 puts on a screen. **They were never measured at any width.** The pages that specify mobile-first behaviour were the pages nobody opened at mobile width.

### The three causes, and two of them are the same cause

| Page | Over | Cause |
|---|---|---|
| `ia/navigation.html` | **298px** | **One table of eleven had no `.table-wrap`.** The page has the wrapper, the CSS for it, and ten correct uses of it. `table { min-width: 620px }` did the rest |
| `ia/ticker.html` | 38px | The strip mockup scrolls inside its own frame correctly. **The frame did not fit**: nothing stopped it taking its content's intrinsic width in a 320px column |
| `ia/cookie.html` | 36px | **`.wf-phone { width: 360px }` with its padding outside that width.** A drawing of a 360px screen that does not fit on a 360px screen |

**And a fourth instance of an ordering defect.** Both fixes had to be written at the end of their style block, because a flat rule earlier in the file wins on equal specificity. **That is now four times in this project**, and it is already a convention in `wireframes/docs/conventions.md` section 2: a responsive block goes after everything it overrides.

### What changes in the instrument

**A second sweep, over `ia/`, `docs/` and the root**, at four widths: **128 checks, and the result is zero.** It runs beside the 315 wireframe checks rather than replacing them, because the two sets check different things: the wireframe sweep also asserts no collapsed leaf and no wrapped button label, which are properties of a prototype and not of a document.

**The rule this leaves:** every page this project publishes is measured, not only the ones the current stage is writing.


---

## D-63. One clause of `CLAUDE.md` is still wrong, and the fix is to remove a number rather than correct it

**Date:** 2026-08-21. **Stage:** 04, found while applying `D-58` and `D-60`. **Decided by:** the founder, on an explicit go. **Applied 21 August 2026.** **Binds:** `CLAUDE.md`.

**What was found.** The information architecture paragraph says the map was "**expanded by 03b into 68 numbered nodes of which 52 are MVP**". **`D-60` dissolved `3.4`. It is 67 and 51.**

### The fix is not 67

**The same sentence ends with the rule that makes the number wrong:** the count is "listed once in `ia/docs/sitemap.md` and never derived a second time". **It is derived a second time, in that sentence, by that sentence.** Correcting 68 to 67 keeps the defect and resets its clock.

**Written, replacing the clause rather than being added beside it. The final wording generalises further than the proposal did**, because the proposal still listed which decisions had moved the count, which is the same status creeping back in by another door:

> expanded by 03b into a numbered node map whose count is listed once in `ia/docs/sitemap.md` and never derived a second time, here included: it grows when a carrier promises a destination the map does not hold or when a structure turns out to be read by several nodes, and it shrinks when a decision removes a state's subject, `D-26`, `D-36` and `D-60` having each moved it.

**Why this is the right shape.** `CLAUDE.md` holds rules and no status, by its own first paragraph, and a node count is a fact about the map rather than a rule about the work. **Removing the number makes the file stop carrying something that goes stale every time the map moves**, which it has now done four times.

**Applied on an explicit go, 21 August 2026, together with the `D-41` clause on the Language row. Budget: 123 lines before, 123 after.** Both are replacements, which is the only legal form in that file.

---

## D-64. `D-60` reached three files out of nine, and the sweep that found the other six also found four decisions half applied

**Date:** 2026-08-21. **Stage:** 04, run before drawing node `3.1`. **Decided by:** stage 04. **Binds:** every IA node that read the stock model, and the acceptance rule about what "applied" means.

**What was found.** `D-60` withdrew stock from the product on 21 August 2026 and was carried through `case.md`, `case-tile.md` and `sitemap.md`. **Six more live files still described a shelf that can run short**, and the worst of them was `numbers.md`, the register every other node reads its figures from. **A published-number row for a figure the product does not compute is the exact defect that register exists to prevent.**

### The files, and what each one was still saying

| File | What was still live |
|---|---|
| `numbers.md` | **Group A row "Live free-unit count per item"**, with its computation, its consumers and its refresh class. Also listed under Real time in section 6 |
| `catalogue.md` | **Section 3 entire**, a refusal row, two states, the components table, three block parents, the node's own parent class, and **the whole SEO layer**: title, description, H1, one H2, one H3 and two of three paragraphs |
| `flows.md` | A decision diamond in flow 1's Mermaid, the decisions line, the states paragraph, and all three of flow 1a's states |
| `skin-card.md` | Field 10, a matrix row, one of eight states, the object definition and the node's parent class |
| `case.md` | Block 5's field list and parents, two prose paragraphs, a state row, and **the SEO paragraph "What happens when an item runs out"** |
| `case-tile.md` | **Two live states, "Free units exhausted on some items" and "Sold out"**, both surviving the first pass, plus the parent class and `D-D`'s description |
| `sitemap.md` | Three entity part lists, the `0.6`, `0.11`, `3.1` and `3.3` rows, and `0.8` still reading "renders on 1.0 only" against `D-59` |
| `home.md` | The real-time row of the loading table, and `D-D` described as inventory capital |
| `blocks.md`, `toasts.md`, `deposit.md` | One parent, one accessibility list, one enumeration of the register's contents |

### Three other decisions were also only partly applied

**`D-61`, the daily marker.** `catalogue.md` still said the daily free case "carries the same four fields plus the daily marker `0.7` already holds". **The decision went further than the node did:** a daily case is its own case now, so nothing on the tile says daily, and **what a daily case is as a case is still owed and still unwritten.**

**`D-59`, the feed on every page.** `catalogue.md` and `sitemap.md` both still said the ticker renders on `1.0` only, `D-31`. **The reversal is recorded and the argument `D-31` made is not deleted:** what answers it is the measurement, which stage 04 took.

**`D-24`, the risk band on the tile.** `catalogue.md` section 11 refused "a risk band on the tile" on the grounds that no computation exists for it. **That was reversed three days after it was written and the row never moved.** Half of it is now flipped and half stands: the band is on the tile with a method, and **the thresholds are still `[?]`**, so nothing sorts or filters on it.

### What was kept rather than deleted, and why

**Every void section stays with its argument intact under a heading that says it is void.** `catalogue.md` section 3, `case.md` section 6, `case-tile.md`'s sold-out paragraph and its field 5 card, `skin-card.md`'s field 10 row.

**The register had a state for exactly this and had never used it.** Section 7's **withdrawn**: "the figure is gone, and where it was load bearing the surface says a number used to be here and why it is not", told to "the reader, and this file, which keeps the row with its reason". **`A2` is the first figure in this product to use it.**

**Field 10 is struck rather than renumbered.** Documents cite the card's fields by number, and renumbering silently invalidates every one of those citations.

**The SEO paragraph is quoted in the place it was removed from.** It is the only place the stock promise was ever made to a reader in plain words, and **a promise withdrawn silently is worse than one never made.**

### Two mockups were replaced rather than emptied

A wireframe that loses a state loses a slot, and an empty slot reads as an oversight. `skin-card.html`'s "zero free units" card became **won, receipt minted**, which is the state where that card changes most. `case-tile.html`'s "sold out" tile became **entry cost unavailable**, which is the state the node's own rule 3 is written about. Both say in place what used to stand there.

### What this hands to the founder rather than deciding

**`cjm-to-be.md` still carries `D1` and `A2` as MVP rows**, and this sweep did not touch it. It is the single owner of the MVP capability list, so withdrawing two rows moves its count and the line in `CLAUDE.md` that quotes it. **That is a named decision, not a side effect of an IA sweep**, which is the same rule `0.7` applied when the risk band and the favourite turned out to have no backlog rows. Printed as debt in `sitemap.md`.

### The rule this leaves

**A decision is applied when nothing left in the repository still asserts what it reversed**, not when the node that raised it has been edited. The instrument is a search for the withdrawn thing across every live file, and the finish line is that every remaining hit names the decision that killed it.

---

## D-65. The shelf takes the baseline's shape, and three of this node's rows were wrong about our own product

**Date:** 2026-08-21. **Stage:** 04, after the founder pointed at the live catalogue. **Decided by:** the founder, then stage 04 on the detail. **Binds:** node `3.1`, `baseline.md`, and the six wireframe pages drawn earlier the same day.

**What happened.** Stage 04 drew node `3.1` as one flat grid with an **empty category bar** and no filter panel, on three things `catalogue.md` said: the category list is `[?]`, a sort control has no parent, and a risk-band filter has no computation behind it. **The founder said to go and look at the product.** All three were wrong, and the page had been there the whole time.

### The walk, and it is in `baseline.md` section 10 rather than here

Public, pre-login, Playwright at 1440 and 390, 21 August 2026. Five shots in `research/screens/baseline/`.

| What the node said | What the live page does |
|---|---|
| The category list is `[?]` | **Thirteen categories, and they have been written down in `baseline.md` since 11 August 2026.** The shelf is a run of named sections, one H2 each |
| A category bar exists only if `D-D` says the catalogue is large | **The bar is a jump list over those sections**, sticky, with the search and the filter at its right end. It is not a filter and `D-D` does not decide whether it exists |
| Sort has no parent, the bank has no T2 row for one | **The product sorts**, defaulting to date newest first |
| A risk-band filter has no computation | **The product computes the band, prints it on every tile as three coloured marks, and filters by it with our three named values** |

**The first row is the one that matters most, and it is not a missing input.** `baseline.md` had the list and `catalogue.md` said `[?]` beside it. **Two files in this repository disagreeing, and the wireframe rendered the losing one.** An empty category bar shipped because of it.

### What is inherited and what is not

**Inherited whole:** the sticky jump bar, the search and filter at its right end, the category sections with a heading and a subtitle each, the filter as a drawer, and the drawer's five controls in the baseline's own order.

**Not inherited: the count.** Thirteen sections over twelve round 1 cases is the dead item defect `D-20` names. **The carrier is inherited and only the live chips render**, so the wireframe draws four sections and prints that the baseline runs thirteen and which ship is the founder's.

### The two reversals, kept with what overturned them

**The risk band as a filter.** Refused on `0.11` rule 1, a figure ships with a route or it does not. **What overturned it is the page, not an argument.** What is still missing is smaller and still missing: **the thresholds.** That moves from "no computation exists" to **a question of fact to the live platform**, in the same class as `D-B`. Until it is answered the band renders as not available on every tile and the facet cannot be applied.

**Sort.** Refused because the competitor bank has no T2 row for one. **The bank is competitors. This is the product.** One limit travels with it and is not inherited: **never by chance, value, tested RTP or popularity.** `0.11` rule 7, a number is never a score, and a shelf ranked by how good a bet each case looks is a ranking with no cost beside it.

### The founder's reference, and the one thing in it that is refused with its reason

The capture the founder supplied is **not daddyskins and this session did not open the site it came from**, so its source is `[?]` and nothing in it is a fact about a named competitor. Three ideas in it that the baseline's own panel does not have:

| Idea | Verdict |
|---|---|
| **The filters live in the bar rather than behind a drawer** | Not taken. The drawer holds five controls and a sort, and a second row under a sticky bar either pushes the shelf down on every page load or hides the controls that are not in it |
| **A named continuous risk slider**, drawn as a gradient | **Refused.** The band has three values and no numbers behind them yet, so a continuous control promises a precision that does not exist. Three checkboxes are the baseline's own answer and the honest one until the thresholds are set |
| **A "sufficient balance to open" toggle** | **Refused, with the reason on the row rather than dropped.** No backlog row, nothing for a guest, and it sits one step from "top up to see the rest". `CLAUDE.md`: cost never hides inside excitement, and a boundary never becomes a reason to keep going. **A price maximum a person sets themselves answers the same question and answers it as a ceiling rather than as an inventory.** The founder's call, with that cost printed |

### One thing the drawer does that no other surface this stage has drawn is allowed to

**The risk checkboxes are disabled.** `D-58` took every disabled control off the sign in surface, on the founder's own argument: a person meets a dead control, cannot see what to do, and leaves or writes to support. **That argument does not reach here, and the difference is the whole of it.** On sign in the precondition was something the person could satisfy. Here the precondition is a number that does not exist in this repository, and nothing the person does turns it on. **So the control is inert and the reason is printed beside it in words**, which is what `D-58` actually asked for: the refusal says what is missing.

### The rule this leaves

**A node about our own product is not finished until someone has opened our own product.** `catalogue.md` cited the competitor bank eleven times and the baseline twice, and all three of its wrong rows were places where the bank was consulted and the product was not.

---

## D-66. The filter control opens the filter, the process prose leaves the surface, and the walk had missed a group

**Date:** 2026-08-21. **Stage:** 04, from the founder reading the drawn page. **Decided by:** the founder, three notes in one message. **Binds:** node `3.1`, the seven catalogue pages, `wireframes/_nav.js`, and a convention that binds every screen this stage draws from here.

### 1. The notes come off the wires and stay in the IA

**The founder pointed at a paragraph on the screen** that explained why four category sections were drawn, what the baseline runs, what the dead item defect is and what the founder still owes. **None of that is on a screen. It is the specification of a screen.**

**The rule this leaves, and it binds every page from here:** a wireframe may state a **state** and may never cite a decision record or explain the project to the person looking at it. `Peg not available` stays, because `0.11` rule 3 makes missing a rendered state. `Peg not available, D-28` does not, because product copy does not carry decision codes. **Nothing was lost: every sentence removed was already in the HTML comment above it and in `catalogue.md`.**

Removed from the surface: the four-sections note, the daily-case debt note, the sort limit, the case-type values note, and four decision codes inside otherwise correct missing-state text.

### 2. The filter control opens the filter

**It was drawn as a static state page.** The founder's note is the whole argument against that: **a filter control that does not open a filter is not a wireframe of a filter, it is a picture of one.**

The drawer is built once in `wireframes/_nav.js` and mounted on every catalogue page, for the same reason the sign in card is: seven copies of one control is how six of them rot. **It opens on a press, traps the keyboard, closes on Escape, on the scrim, on the x and on apply, restores focus to the control that opened it, and moves `aria-expanded` with it.** `catalogue-filter.html` keeps its place as the state page and now renders it open on load, the same `data-*-pinned` device the sign in canon uses.

### 3. The pre-login walk had missed a group, and the correction cuts against a refusal I wrote

**`D-65` refused a "sufficient balance to open" filter**, partly on the grounds that it came from a reference capture whose source is `[?]`. **It is on our own baseline.** The founder's capture of the same panel signed in has a group headed **Additional**, holding **Liked** and **Sufficient Funds to open**, sitting between Risk Level and Case Type.

**The walk was not wrong, it was pre-login.** Both rows read an account: Liked reads the favourite `D-24` sets, sufficient funds reads the balance. **A guest meets neither**, which is why a public walk could not have found them. `baseline.md` section 9.8 already names this hole in exactly these words.

**Both ship. The argument against the second is kept rather than deleted**, `catalogue.md` section 4.4:

- It has **no parent in any of the three legal classes**, the second element on this map in that position after `I2` and the favourite, and it is carried with that status printed.
- The concern stands: a control answering "what can I afford right now" sits one step from "top up to see the rest".
- **What makes it survivable is not that the concern was wrong.** It is off by default, it is account only so it is no part of the argument this product makes to a stranger, and it removes cases from view rather than adding a route to money.
- **One thing it may never become, and this line binds stage 07.** When it is on and the result is empty, `3.2` names the nearest facet to relax. **The nearest facet is the filter itself, never a deposit.** A "top up to see 9 more cases" on that empty state is the exact failure this row was nearly refused for.

### What this cost, stated

**A third orphan on the map.** `CLAUDE.md` allows one to be carried with its status printed and this is now the third, after the daily free case and the favourite count. **Three is not a pattern yet and four would be**, and that sentence is here so the fourth has to argue against it.

---

## D-67. The daily ladder comes to the catalogue, becomes a component, and the check found an error inside `D-25`

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, pointing at the live Daily Cases panel. **Binds:** node `3.1`, node `1.0`, the new component `0.15`, and `home.md`'s refusal of a component.

**What was asked.** The daily cases banner, as the baseline runs it: the five tier ladder, the wager remaining figure, the reset countdown and the open control with the count of cases available.

### `catalogue.md` had refused it, and the refusal said it was not refused on merit

Section 11 carried the row: **"Not refused on merit. It is an inherited answer to `I2`'s recorded risk and it belongs in front of the founder."** It is now in front of the founder and the answer is yes. **The row is kept struck rather than deleted**, because the risk it names is unchanged: the ladder answers `I2` by making the daily case not free but earned, and the thing it is earned with is spending.

### Section 2 was arguing with itself and it was refusing the wrong object

That section exists to stop stage 04 promoting the daily case back into a banner, on the ground that **a banner survives every filter and a case does not.** That argument is untouched and the filtered wireframe still honours it.

**But the ladder is not the case.** They are two objects: **the ladder is the entitlement, the tile is the case.** The baseline has both in one Daily section. So does this node now.

### The check found an error inside `D-25`, and it is printed rather than quietly corrected

`D-25` shipped the ladder onto Home block B6 **"as the baseline does it"**.

**`baseline.md` section 4 records the baseline's Home as header, ticker, hero banner with a countdown, H1, four mode cards and promotional rows. There is no ladder on it.** The ladder is on `/en/cases`, which is the surface `catalogue.md` refused it on.

**So the premise of `D-25` was wrong even though the decision may still be right.** `D-67` adds the surface the baseline actually uses rather than moving the block, and **whether the ladder stays on Home is left open to the founder** and printed as debt in `sitemap.md`. It is the kind of question that gets harder the longer both surfaces carry it.

### It is a component now, and `home.md` had refused one in as many words

`home.md`: **"No component exists for it either, and this is deliberate: a ladder that becomes a component is a ladder that spreads."**

**It spread, and it spread towards the baseline rather than away from it.** With two consumers a second copy is a second thing to drift, which is the rule `0.6`, `0.7` and `0.14` already ship under.

**And the sentence that refused a component is the reason it had to become one.** `D-25` attached three rules to this block and they are the only thing standing between a wager ladder and a progress mechanic:

1. **It never appears on a responsible play surface and never beside a limit.** `6.1` carries no ladder, no wager figure and no tier, at any width and in any account state.
2. **It never invites a person past their own limit.** A person with a deposit limit, a session limit or a cool down in force is never told what they would need to wager to advance.
3. **A tier gives a case and nothing else.** No badge, no title, no rank, no public tier on a profile.

**Boundaries attached to a node stay behind when the markup travels. Boundaries attached to a component travel with it.** Registered as `0.15`, and rule 1 is now the component's rather than `1.0`'s.

### The second half of the ask: the descriptions come off the wires

`D-66` set the rule and cleared node `3.1`. **This applied it to the whole stage.** A rendered-text sweep of all twenty nine wireframe files found **31 decision citations across 17 of them**, every one of them a `D-28` appended to an otherwise correct missing-state sentence: "not published yet, `D-28`", "in coins, `D-28`", "until the coin peg is published, `D-28`".

**All 31 removed from rendered text and none from the comments**, which is where the reasoning belongs and where it already was. **The sweep is now an instrument:** a page fails if its rendered `main` contains a decision code, a repository file name, or the words a specification uses about itself.

### What this cost, stated

**The map gains a node**, `0.15`, and the ladder gains a second surface on a product whose own baseline gives it one. **That is the cost `home.md` predicted in the sentence this decision overrides**, and the mitigation is that the three rules moved with the component instead of staying on the node it left.

---

## D-68. The daily case loses its tile, and the section it left had already written down what that costs

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, on the drawn page. **Binds:** node `3.1` section 2, node `0.7`'s two daily states, and the seven catalogue pages.

**What was decided.** **The Daily section holds the tier ladder `0.15` and nothing else.** The daily free case has no tile on the shelf. That is what the baseline does on `/en/cases` and it is what was asked for.

### This reverses section 2 of `catalogue.md`, and that section is kept whole

Section 2 exists to stop stage 04 promoting the daily case back into a banner. Its argument, in its own words: **a banner survives every filter because it is not part of the list, and a case does not.**

**That is now literally what the Daily section is.** No filter can empty it, so **it renders in every state of this page, including `3.2` when nothing matches at all**, and the Daily chip is the one chip in the bar that never leaves. The wireframe carries that visibly rather than hiding it.

**The section is kept unedited below its own reversal**, because the argument is the cost and a cost deleted is a cost nobody meets again until it lands.

### What does not change

**The daily case is still its own case.** `D-61` gave it its own object with its own page and the ladder's control is the route to it. **What it does not have is a place in the grid.**

**What answers the `I2` risk is the ladder, and it was before the tile left.** The wager gate makes the daily case earned rather than free, `D-25` and `D-67`. **The tile was never the mitigation**, so removing it does not weaken one.

### It closes a debt instead of opening one

`D-61` left an open question and `D-66` printed it on the wireframe: **where do "once a day" and "taken today" render, once the daily marker is gone and the tile is four fields?** The wireframe proposed the entry cost slot and refused to decide it.

**The answer is that no field does, because there is no tile.** The ladder's control states what is available. **And since no surface renders a daily case as a tile any more, `0.7`'s two daily states are void**, both marked with the argument kept.

### The counts move, and they move honestly

**Twelve cases in three sections**, not thirteen in four. The Daily section is a section of the page and not a section of the shelf: the result count counts case tiles, and it has none. **The chip list and the section list still match exactly in every state**, which is the check `D-65` added and it still reads clean.

### What this cost, stated

**One always-visible entitlement panel on the shelf**, which is the thing section 2 was written to prevent, taken deliberately with the reason on the record. **The mitigation is not a design device, it is the wager gate**: the panel a person always sees says the case is earned, not free.

---

## D-69. Node `7.1` is drawn, the public profile is answered, and the answer puts two of our own decisions against each other

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, on the queue and on the profile question. **Binds:** node `7.1`, node `0.14` which becomes a built component, `baseline.md`, and the debt `D-59` opened.

### Why this screen and not the geo gate

**The same rule that put the catalogue ahead of the gate, applied again.** `D-59` put the live feed in the shell on every page and every one of its twenty four tiles lands on `result.html`. Counted: **`result.html` was referenced from sixteen files and from `_nav.js`, and returned a 404 on all thirty pages.** `gate.html` is referenced six times.

**A dead link on every page outranks the next screen in the flow.** The gate is still the only unbuilt screen of the main flow and it is next.

### Six pages, and the state list is the node's own

Stranger with no account, the owner, recomputed and matched, **recomputed and mismatched**, proof not available, and `7.2` gone or private.

**The mismatched state is drawn on purpose and early.** The node says it is the state this page is least likely to be built for and the one where building it late costs the most: **our own proof failing, in a stranger's browser, on the surface that travels furthest.** It carries the report route and the published response deadline.

**`0.14` variant V3 is now a built component.** V1, the hash chip at the spin trigger, already shipped inline on the case screen; V3 is the whole panel and this is the first surface to need it. Built once in `_nav.js` because the component has four consumers. **Its scope line is not softened anywhere:** it says the round was fixed before the click and not altered after it, and that this is a different question from whether the published chances are the chances used.

### The founder answered how an account appears in public

`public-result.md` carried it open, in these words: **a default of the person's Steam name is a publication decision made by omission.** The founder's capture of the baseline's own public profile, 21 August 2026, `baseline.md` section 9.9.

**The answer is: not anonymous.** An avatar, a display name, and a numeric public id. So block 6 renders an avatar and a name.

**The row is not closed, it is converted.** What it warned about is unchanged: **the default publishes the person's name.** Whether they can turn it off is not decided anywhere and is now the open half.

### And the answer puts two of our own decisions against each other

| Carrier | Verdict on a public profile |
|---|---|
| `0.8`, the live feed | **Has one.** `D-59` gave the avatar that destination and printed that no node exists for it |
| `7.1`, block 6 | **Refuses one**, because "adding it would rebuild the trophy shelf this node was created to replace" |

**The capture settles what the object is and it is the shelf.** The baseline's profile is an inventory history with four tabs: every item that account has won, priced.

**Two carriers, opposite answers, one object, and no node on the map for it either way.** Both surfaces draw the target and print the absence rather than inventing a route. **It is the founder's, and it is now a scope question rather than a routing one.**

### Two things recorded rather than smoothed

**The baseline's account id looks sequential**, read as `852261`. A stranger can decrement it, which makes the registered-account count enumerable from outside. It is the same class of leak this node already flags for the round id, where its recommendation is opaque. **A fact about the baseline, not a recommendation.**

**The round id format is still open** and it still blocks nothing: `/r/<id>` is drawn, and whether the id is sequential or opaque is production's before the URL is final.

### The instrument was under-reporting, and that is worth more than the screen

The link sweep stored each `href` raw in its set, so **`fair.html` and `fair.html#verifier` were two entries** and the report collapsed them wrongly. **It printed nine dead links where there are fourteen.** Every earlier count from this sweep was low by the same mechanism, **including the fifteen reported when the catalogue shipped**.

**Fixed by normalising before the set rather than at the request.** The correct list is fourteen and every one is a screen this stage has not drawn.

**An instrument that under-reports is worse than no instrument, because it is trusted.** This one was trusted three times, and it is the second measurement defect this stage has found in its own scaffolding rather than in a screen.

### What this cost, stated

**Nothing was invented to fill the profile hole and nothing was routed to a convenient place.** The price is that two surfaces now show a person's identity with a dead target under it, visibly, until the founder decides whether a public profile is in scope at all.

---

## D-70. The last screen of the main flow, and the node had gone on specifying a control that moved three days ago

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder, on the queue and on the feed's direction. **Binds:** node `2.1`, the case screen's trigger, and `wireframes/_wf.css`.

### The feed runs the other way

**Founder decision.** Reversed on `.wf-feed-run` with `animation-direction` rather than by flipping `wf-drift-x`, **because the case screen's showcase run shares that keyframe and it is not what changed.** A shared keyframe edited for one consumer is exactly the drift that file's own header warns about.

### `D-26` had reached this node's header and not its body

`gate.md` opened with the correct sentence on 18 August: **the 18+ declaration left this node for the consent gate of `2.4`.** Section 4 then went on listing the declaration, its decline control and its recording line as blocks 2, 3 and 4, and section 5 listed "the declaration, unanswered" as the default state.

**Three days of a node specifying a control that had been moved.** It is the same defect `D-64` named for `D-60` and the same rule applies: **a decision is applied when nothing left in the repository still asserts what it reversed.**

**What is left when the declaration goes is smaller than a dialog.** On an open market **this node renders nothing at all**: it resolves a lookup and the person continues. The interrupt exists only when the answer is no, or when the answer carries a limit. The old five-block table is kept under section 4.4 with the argument intact.

### Five states, and the gate fires for real

Checking the market, staged with a named limit, not launched, blocked with the ground, and detection unavailable.

**The dialog is built once in `_nav.js` and fires from the case screen's own trigger**, because **a gate that does not fire is a picture of a gate** — the same standard the founder set for the filter control. It traps the keyboard, closes on Escape, records nothing on dismissal, and the gate fires again at the next case interaction.

**And the page behind it is the case screen, not an empty column.** Each state page is the case screen with the gate pinned, the way the sign in canon already works. **What the person was doing is what the interrupt is a consequence of**, so removing it would make the gate read as an ejection rather than a step.

### Three things the states carry that a shorter version would have dropped

**Not launched is the default, not blocked.** `D-23` chose an allowlist, and its consequence lands on a state rather than on a paragraph: the person most likely to meet a refusal meets "we have not reviewed this market" rather than "the law forbids it". **Merging them would state a legal verdict we do not hold.**

**Detection unavailable renders the not-launched message.** Under an allowlist a missing row denies. **The tempting default is to fail open, and failing open is precisely the property the allowlist was chosen to eliminate.**

**Every refusal says what is still open in the same breath.** Reading, the legal pages, support, and where an account exists, the withdrawal. **A blocked market is a restriction on service, not an ejection from the building**, and the sweep asserts the sentence rather than trusting it.

### A measurement rule the instrument had wrong

The first version of the check read the whole rendered `main` and failed the gate pages for containing "sign in" and a figure. **Both are on the case screen behind the dialog, which is required to be there.** Scoping the assertion to `.wf-gate` was the fix, and the sweep gained the opposite assertion at the same time: **it now fails a gate page whose interrupted surface is missing.**

### What this leaves

**The main flow is drawn end to end**: Home, catalogue, case, gate, sign in, open, outcome, public result. **Every remaining unbuilt screen is off the main path.**
