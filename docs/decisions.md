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

**The dialog is built once in `_nav.js` and fires from the case screen's own trigger**, because **a gate that does not fire is a picture of a gate**, the same standard the founder set for the filter control. It traps the keyboard, closes on Escape, records nothing on dismissal, and the gate fires again at the next case interaction.

**And the page behind it is the case screen, not an empty column.** Each state page is the case screen with the gate pinned, the way the sign in canon already works. **What the person was doing is what the interrupt is a consequence of**, so removing it would make the gate read as an ejection rather than a step.

### Three things the states carry that a shorter version would have dropped

**Not launched is the default, not blocked.** `D-23` chose an allowlist, and its consequence lands on a state rather than on a paragraph: the person most likely to meet a refusal meets "we have not reviewed this market" rather than "the law forbids it". **Merging them would state a legal verdict we do not hold.**

**Detection unavailable renders the not-launched message.** Under an allowlist a missing row denies. **The tempting default is to fail open, and failing open is precisely the property the allowlist was chosen to eliminate.**

**Every refusal says what is still open in the same breath.** Reading, the legal pages, support, and where an account exists, the withdrawal. **A blocked market is a restriction on service, not an ejection from the building**, and the sweep asserts the sentence rather than trusting it.

### A measurement rule the instrument had wrong

The first version of the check read the whole rendered `main` and failed the gate pages for containing "sign in" and a figure. **Both are on the case screen behind the dialog, which is required to be there.** Scoping the assertion to `.wf-gate` was the fix, and the sweep gained the opposite assertion at the same time: **it now fails a gate page whose interrupted surface is missing.**

### What this leaves

**The main flow is drawn end to end**: Home, catalogue, case, gate, sign in, open, outcome, public result. **Every remaining unbuilt screen is off the main path.**

---

## D-71. Node `5.1` is drawn, `D-40` had reached the map and not this node, and one number was rendering two values on adjacent surfaces

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder on the queue, stage 04 on the rest. **Binds:** node `5.1`, the shell's money pair in `wireframes/_nav.js`, and the acceptance instrument.

### Why this screen

**Twenty two references and a 404 on every one.** It is the first row of the account menu since `D-40`, and it is the front door of the cluster that sits at **the floor of the entire As-Is emotional map, T8 at `-5`**. This is where the product either keeps its promise or does not.

### `D-40` had reached the map and not this node

Section 6 of `account.md` said the rail carries **four** destinations including My items, and the mobile bar **rises to four** with My items. `D-40` made the rail one destination in both states, moved My items into the account menu, and left the bar at two. **Three days of a node describing a navigation the product does not have.**

**This is the third time in two days.** `D-60` reached three files out of nine, `D-26` reached `gate.md`'s header and not its body, and now `D-40`. The rule `D-64` left is holding; what it has not yet become is a check that runs.

### The page is built around one line of the backlog

`F2`: **the receipt stays on the item, and the same receipt is retrievable a week later.** `B7-1` is not a complaint about losing, it is a complaint about a number that stopped being true and left nothing behind to check. **A page that shows today's price and nothing else cannot be wrong a week later, because there is nothing left to compare it against.**

**So every item carries two dated figures and no third number made out of them.** No arrow, no percentage, no up-or-down colour, no badge. **They never share a line at 360**, because collapsing them is how a delta gets invented by a layout, and a rendered delta turns a held skin into a position and this page into a portfolio.

**The sweep asserts all of it** rather than trusting it: two figures per item, each with its own as-of, never on one line, and no delta pattern anywhere in the rendered text.

### The empty state, where the refusal is the design

**No offer, no free case, no nudge.** `B7-3` records the one voice in the corpus that criticises the consolation frame itself: "it just gives incentive to people in spending more and fools them into thinking that the end result isn't that bad". **An empty inventory answered with an offer to open again is that pattern with a different label**, and the person who arrives here after a low-value first open is at the emotional floor of the whole map.

**The withdrawal entry is absent rather than disabled**, which is `D-58`'s rule arriving at the opposite answer for the opposite reason: there the precondition was one a person could satisfy, here the control has no subject at all.

**And the money still renders**, because a balance can be non-zero while items are zero and "you hold nothing" would be false.

### One number was rendering two values on adjacent surfaces

The shell's header read **18.60 coins** for the value of items held while this page rendered a holding of **130.60**. **Two renderings of one number disagreeing on surfaces a person sees together**, which is exactly what the published numbers register exists to prevent, and this node's own rule is that these are the same pair the header carries.

**Fixed by making the shell read the page rather than by editing both.** A page may declare `WF_SHELL.money`, and the empty state declares `0.00` so the header does not contradict it either. **The sweep now fails a page whose header pair and body pair disagree.**

### One CSS defect the measurement found

The summary column and the item grid overflowed by 12px at 900 with the rail open and by 95 with it collapsed. **A bare `1fr` is `minmax(auto, 1fr)` and refuses to shrink below its content.** `minmax(0, 1fr)`, and the three-across grid moved to 1200 where there is room for it.

### The narrow sweep missed what the broad one caught

**The three-page sweep reported clean at 1200 and the forty three page sweep found 15px of overflow there**, on the degraded card, whose caption is longer than the others because it explains why a figure is absent. **A grid item's `min-width` is `auto` and it refuses to go below its content**, which is the same defect as the bare `1fr` one level up, two elements down.

**The lesson is about the instruments rather than the card.** A per-node sweep is a convenience, not a substitute: **the only run that counts is the one over every page**, and that is now true twice, after the link sweep was found under-reporting yesterday.

### What this node hands on, sharpened rather than restated

**Where selling a skin back for coins lives on this page.** `D-38` put it in round 1 and `3.6` carries it at the outcome. **A person who did not sell then and wants to sell now has no control here**, and this node's own baseline row already called that the gap: the live product answers what a person does with a skin they do not want, and this node answers only what they do with one they do want. **A second exit beside the one CTA is a founder decision, not a page edit.**

---

## D-72. Node `1.2` is drawn, and the page with the form is the one page that never prints a verdict

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder on the queue, stage 04 on the rest. **Binds:** node `1.2`, its states `1.3` and `1.4`, and the acceptance instrument.

### Why this screen

**Seventeen references, from the footer of every page.** And it is the largest single piece of product a person can read without an account, which is the whole of barrier `B2-1`: **the competitor pattern puts this page behind a login wall, and a login wall in front of a fairness page is also an indexation wall.**

### Six pages

Default with the verifier idle, prefilled, checked and matched, proof not available, `1.3` malformed round, and `1.4` our own proof failed.

### The page with the form is the page that never prints a verdict

`0.14` forbids a verified badge in every variant, and **this is where the temptation is largest because it is the page with the form.** The bank recorded the live anti-pattern: Key-Drop's safety portal carries a mock verifier with a fake seed pair printing "Outcome Verified" for a round that never happened. **A verified verdict on a round that does not exist.**

**The matched state renders the recomputation and its inputs, plainly, and the scope line does not change.** The sweep fails any of the six pages whose rendered text contains "verified", "guarantee", "100%", "certified" or "provably safe".

### Three failures, three states, and conflating any two is the defect

| State | What it is |
|---|---|
| **Malformed**, `1.3` | A round we could not read |
| **Unavailable** | A round we can read and cannot prove yet |
| **Mismatched**, `1.4` | A round we can read, can prove, and our proof is wrong |

**Three causes, three routes, three owners.** `1.3` never reaches `1.4`, because **a round we could not read is not evidence that our proof is wrong**, and routing it there would manufacture incidents out of typing errors.

### `1.3` asserts four rules rather than describing them

Nothing typed is cleared, every failed field carries its own message attached to it, all failures render at once rather than one per press, and **no generic message**: "Invalid input" is a silent rejection with a sentence on it. **The sweep fails a page with a cleared field, a failed field with no message, or a message matching "invalid", "error" or "incorrect".**

### `1.4` is a dead end and it stays one

**Nothing in the product can confirm an outcome while the proof of it is wrong.** What changed is that the person is no longer standing in front of a wall while we call it an incident on our own side.

**Two values, labelled, never one value with a mark on it.** A mark is a verdict rendered as decoration, and this state has to assign the fault in words: these do not agree, and that is ours to explain rather than yours to prove. **No claim about the cause**, because a bug, a migration, a rotation or a real failure is unknown at that moment.

**One report control with the round attached and no form to fill in.** A person who has just been told the platform's own proof failed is not asked to write a support ticket describing it.

**No route back into spending**, and the sweep asserts it: `1.4` fails on "open a case", "try another", "next" or "deposit".

### Prefill, and the line it does not cross

**The fields carry the round and nothing is computed.** What the map rejected at phase T7 is auto-publishing the seed pair, recomputing in the browser and showing a verified badge, and **the reason it gave is the badge and the proposition, not the convenience.** Carrying inputs is not asserting a verdict. **The verdict is never rendered before an action.**

### Nothing on this page is drafted with a plausible value

The algorithm block renders three headings and three absences: the function and its encoding, the worked example, and the version history. **A published algorithm with an invented function in it is the one artefact a reader would compute against**, which makes it the most dangerous median in the project.

**The version history renders before it has entries**, because a scheme that changes silently invalidates every proof before it, and a list that appears with the first change is a list nobody knew to look for.

**And block 3 carries the finding this node made rather than hiding it:** the drop table in force at that round, versioned, **is missing from `0.14`'s field set**, and a round cannot be fully recomputed without it. It renders as an absence in the field list, on the page, in front of the reader who would need it.

### And the row this page exists to receive had never pointed at it

`F3` is the post-reveal verification link, and it is one of the two jobs that route into this node. **On four outcome pages it pointed at `provably-fair.html`**, which is the IA specification's filename, not the wireframe's. **Eleven links, a 404 on every one, since the day the outcome was drawn.**

**It was invisible until this page existed.** A link to an unbuilt screen and a link to a misspelt one are the same 404, and the sweep could not tell them apart while `fair.html` did not exist. **The screen being built is what turned one of them into a defect.**

**Rewired to `fair-prefilled.html` rather than to `fair.html`**, because section 5.1 says a person arriving from `F3` has a round in hand: the fields carry it and nothing is computed until they press.

### One inconsistency inside `0.14`, named rather than left

**V3 is a component in `_nav.js` and V4 is markup on this page.** V3 has four consumers and V4 has one, which is the same test that kept the value receipt inside `0.6` rather than making it a node. **It is defensible and it is not symmetric**, so it is written here: if a second surface ever renders the verifier, V4 moves into the shell before it renders twice.

---

## D-73. Node `5.3` is drawn, and it is drawn against a mechanic the whole map does not model

**Date:** 2026-08-21. **Stage:** 04. **Decided by:** the founder on the queue, stage 04 on the rest. **Binds:** node `5.3` and its five numbered states, and it puts one question in front of the founder that the drawing could not answer.

### Seven pages

Before the request, the clock running, and `5.4` not eligible, `5.5` Steam degraded, `5.6` account restricted, `5.7` restriction upheld, `5.8` trade offer expired.

**Two arrivals, one page, and the first screen belongs to whichever is live.** Before the request it is the record, the limits, the commission line and the one control. After it, the clock takes the first screen and the record moves under it. **A priority rule and not a second node.**

### The page's job is not to be fast

`B8-2` is the densest numeric barrier on the As-Is map: **30 hours, 7 days, 2 to 3 days, 9 days from last deposit, 16 hours, almost 3 weeks.** And the positive pole in the same section: a butterfly gamma doppler withdrawn within five minutes. **The category can do this. Most of it does not.**

**The injury is not the duration, it is the unattributed silence.** The success signal on the clock row is the share of withdrawals that generate a support ticket asking for status, which measures how many people had to ask a human what their own transaction was doing.

**So the clock shows three real figures and never a fourth invented one:** the elapsed in the current state, the published ceiling for that state, and who is being waited on. **Never an estimated time remaining**, because an ETA that slips is the barrier with a number attached. **Never a progress bar**, because a bar implies a rate and nothing here measures one. **Never a spinner**, because every wait in this flow is a named state with a timer.

**Two stages share the owner "us" and they are still two stages.** A single block reading "waiting on us" for forty hours is the unattributed silence again, one label thinner.

### The mechanic the whole map does not model, and it is drawn against the other reading

**The account capture of 18 August 2026 found that on the live product withdrawal is a purchase rather than a delivery.** The screen prints a four column table: the item is valued at the site price `4.48`, a real copy on the market costs `27.52`, **and the difference of `23.04` is charged to the balance at the checkout.** In the observed row that difference is **six times the value of the win**.

**Every figure on this page is drawn against the other reading**, that what you win is what you receive, because that is what the node was written against and the node says so in as many words.

**It is the founder's, and both answers cost something.** Inherit the mechanic and the settlement difference has to be disclosed **at the moment of the win and on the case page**, not at the till, which makes the reveal carry a second number. Refuse it and the published chances and the tested return have to hold against real market prices, **which rewrites the treasury model and is a business decision no row in this repository can take.**

**The recommendation on the record stands and it is a recommendation:** disclose it early, because that is what makes the trust positioning actually differentiated. **We would be the platform that names the gap before a person spends rather than at the till.**

### What the sweep asserts rather than trusts

**No verification anywhere in this cluster, in any state, behind any control.** That absence is the direct answer to `B8-4`, verification ambushes at the exit, and the sweep fails any of the seven pages containing "verify your identity", "upload", "passport", "id document", "selfie", "kyc" or "document".

**`5.4` offers no substitute.** The out-of-stock substitution barrier is a user's own words: "they force you to exchange it for much lower-value skins or 'site balance'". **A not-eligible state that offers to convert the item into balance is that barrier arriving at a different door, dressed as helpfulness.** The sweep fails it on "sell it", "convert", "exchange it for" or "site balance".

**`5.6` and `5.7` never zero the balance.** A zero there is not a display bug, it is the barrier itself. The sweep fails a restriction page rendering `0.00 coins`, and fails one whose written ground does not say it can be copied.

**Every stage carries an owner label in text**, never a colour alone, asserted per stage rather than per page.

### Three absences rendered rather than filled

**The published median and p90 are not available**, and the page says so where they would be. **And one thing about them is not decided either:** whether they measure the whole elapsed time end to end or only the stretches attributed to us. **A p90 whose definition is ambiguous is not checkable by the person holding the clock**, and `5.8` is the concrete case: a withdrawal that sat four days on the person and forty minutes on us is one number end to end and a different number by attribution.

**Steam's trade hold duration and its offer expiry are Steam's numbers** and neither is printed, because a number about a third party carries its source and its date or it is not printed.

**And what happens to a frozen balance after a restriction is upheld is stated as undecided on the surface**, with the half that is decided beside it: never silently zeroed, and whatever happens is stated in the notice rather than found out.

### And the same filename defect, a second time, found the same way

**The footer's own published figure pointed at `withdrawal.html`** on every page, which is the IA specification's filename rather than the wireframe's. **A 404 under the middle withdrawal time, on all fifty six pages.**

**Invisible until this screen was built**, for the same reason `provably-fair.html` was: a link to an unbuilt screen and a link to a misspelt one are the same 404, and the sweep could not tell them apart while the target did not exist.

**Twice in two screens is a pattern rather than a coincidence.** Both were written when the IA node was the only thing that existed, and both survived because the sweep counted them as expected debt. **The check that would have caught either is comparing every `href` against the registry's `file` column rather than against the filesystem**, and that is a change to the instrument rather than to a page.

### The new check found a third one before it had finished its first run

**`markets.html` is linked from the footer of every page and is not in the registry at all.** It is the IA filename of register `0.12`, **and a register is read rather than visited**: it has no URL and never will.

**`0.2` names `2.2` as that row's transition**, and `2.2` is a refusal state. **It is the right destination for a visitor who is refused and there is nothing on the map for a visitor who is not.**

**So the row keeps its label and loses its href**, marked, which is the treatment the feed's avatar already carries under `D-59`. **A carrier may not promise a destination the map does not hold**, and routing it somewhere convenient is how the promise stops being visible.

**Three filename defects in one session, and the third was found by the check written for the first two**, before that check had finished its first full run. Two of them were misspellings and one is a genuine hole in the map.

### One rule that survived being written down twice

**Outage days are not excluded from the rolling window.** A figure that drops its bad days is not a measurement, and `5.5` is a state of the product rather than an exemption from its own numbers. It renders on the degraded page, beside the suspended ceiling.

**Suspending the ceiling out loud is the whole design of `5.5`.** A published ceiling that keeps running through a third-party outage is a promise we cannot keep, and letting it lapse quietly is the unattributed silence with a number on top of it.

---

## D-74. Node `4.1` is drawn, `D-26` had reached three files out of ten, and the one screen an unpublished peg empties

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** Claude, on the drawing pass, with two items handed to the founder. **Binds:** node `4.1` and its four numbered states, `flows.md` flow 2, `sitemap.md`, `gate.md`, `markets.md`, `case.md`, `account.md`, `concept-map.html`, and the feed component `0.8`.

**What was built.** Five pages: `deposit.html`, `deposit-ceiling-reached.html`, `deposit-ceiling-pending.html`, `deposit-crediting.html`, `deposit-declined.html`. Cluster 4 is complete and the map is at 61 of 93.

### `D-26` reached three files out of ten, and the fifth node in a row was written against a reversed rule

`D-26` took `2.7`, `2.8` and `2.9` out of round 1 on 18 August and moved the surviving layer **from before funding to before withdrawal**. It reached `sitemap.md`'s node rows, `CLAUDE.md`'s compliance paragraph and `identity.md`, which carries it with four costs printed at the top of the file. **It reached nothing else.**

| Where it still asserted the reversed rule | What that was doing |
|---|---|
| `deposit.md` section 1, titled "Reached through `2.7`" | Routed the deposit through a check the product does not have, and specified a state table where two of three arriving states were identity states |
| `flows.md` flow 2 | Drew eight nodes of identity branch: the check, the pending review, the pass, the failure, the appeal, the upheld appeal and two exits |
| `sitemap.md`, four places | The account entity's parts, the pattern-A resolution, the contextual compliance list, and the free-entry hole's own explanation |
| `gate.md` section 0 | Still called this node the cheap half of a two-layer split, with a header six lines above saying the declaration had left it |
| `markets.md` evidence table | Rated the identity document as evidence collected before funding |
| `case.md`, `concept-map.html`, `account.md` | One sentence each, all of the form "identity verification before funding" |

**`gate.md` is the sharpest instance and it is worth its own line:** the header records `D-26` and section 0, six lines below it, contradicts the header. **A decision applied to the top of a file is not applied.**

### What the deferral actually did, and it is not a deletion

**Block 1 of `4.1` could promise that the exit carries no check, and it can no longer make that promise.** The promise rested on two rows: `B1` put the check before funding, `B2` forbade a branch on the exit. `D-26` moved the surviving layer to **before withdrawal**, so the only identity layer the map still holds is the one that would stand on the way out.

**Stating "no check on the exit" would be true today and false the day layer 2 lands, which is `B4-1`'s shape applied to a condition instead of to a number:** something the exit demands that was not named before the money went in. **So the strip says the account state and funding open, and nothing about the exit in either direction.** Whether it should say more is the founder's, and it is on the node's open list rather than guessed.

**`B2` survives on one reading and the reading was already in the repository.** `flows.md` flow 3 proposes raising the check **when the account first holds a withdrawable item**, at the outcome. A check resolved before a withdrawal is attempted is not a branch inside the exit. **That is the only reading on which `B2` and `2.7`'s new placement can both be true**, and it is proposed rather than drawn, because it rides on `D-A`.

**And the hole got wider rather than different.** `flows.md` and `sitemap.md` both explained the free-entry hole as "`B1` gates funding and `B2` forbids the check at the exit, so someone who never funds never meets the gate". With `2.7` out of round 1 **there is no identity check on any route at all**, so the hole is not the free-entry route. It is every route. Both files now say so.

### The one screen an unpublished peg empties rather than degrades

Every other surface prints a coin figure and marks the rate missing beside it. **Here the conversion is the block:** real money in, coins out, rate with its as-of. `D-28` shipped the coin on the condition that the peg is printed wherever money is spent, and the peg is `[?]`. **So block 2 renders as two absences and a sentence saying what a person cannot learn:** what they are getting for their money.

**A second gap fell out of it and no file in the repository had named it.** `D-28` deleted "one real currency throughout" as the denomination. **Nothing then said which real currency a deposit is taken in.** The amount field's unit is `[?]`, the presets are slots, and the total carries "unit not set". Added to the node's open list.

### `C2` is the only blocking thing on the page, and it blocks the way `D-58` fixed rather than the way the bank drew it

The block bank's Wealthsimple row is "submit disabled until the condition is met" and `deposit.md` section 3.2 took that wording. **`D-58` had already replaced that form on the consent gate**, on the founder's own operating argument: a person meets a dead control, cannot see what to do about it, and either leaves or writes to support.

**Extended here rather than re-argued, and the rule underneath is untouched: no press goes through until the ceiling is accepted or changed.** The refused press marks the condition on itself, names which one in a line under the summary, and moves focus to it. **The old wording stays in `deposit.md` section 3.2** as the argument that was overridden.

**Accepting and changing both satisfy it.** `C2`'s mechanism is "one tap on a number they chose themselves", so typing a different figure is the same consent, on a number that is even more theirs. A form demanding both would be asking twice.

### The live strip comes off `4.2`, and it is a finding to `0.8` rather than an edit to it

`D-59` put the feed on every page and the argument was that a strip identical everywhere becomes furniture. **`4.2`'s own forbidden list already reads "no offer of any kind: no alternative funding route, no reminder when the period resets, no invitation to raise the ceiling."** Twenty four other people's wins beside a deposit control that will not fire this period is an offer with a scroll on it.

**Declared by the page and never inferred by the shell**, so the exception is visible in the file that takes it. `0.8` owns whether it stands.

### Measured

**The dock is fixed below 900 and sticky above it, and sticky was measured before it was replaced:** the dock is the only child of its grid item, so a sticky bottom has zero travel and it ended 90px below the fold at 360, crossing the mobile bar. **It costs 236px of an 800px viewport**, which is the trade for four figures continuously present. Dropping the withdrawal figure would move the exit price off the first screen, which is the one thing the block exists to prevent.

133 checks over the five pages: no horizontal overflow at six widths, one H1 each, **no verification named anywhere in the cluster**, no currency symbol invented anywhere, no disabled control, no progress or meter element, the ceiling refusing and then going through, typing counting as consent, `4.2` with no completion mechanic and no countdown and no feed, `4.5` keeping the typed amount and offering no smaller one.

### What went to the founder rather than into the page

| Question | Why it is not decided here |
|---|---|
| **Which real currency a deposit is taken in** | `D-28` removed the sentence that used to answer it and nothing replaced it. It empties block 2 with the peg |
| **Whether the screen says anything about a future identity check** | Silence is the safe default and it is not free. Naming it costs a sentence on a conversion surface, describing a node that does not exist |
| **The periods the ceiling offers, and the pre-filled one** | `C2` says "a named period" and the list is nowhere. A competitor's daily, weekly and monthly is an observation, not our decision |
| **The published crediting window** | The register row exists since the step 8 audit. The value does not |
| **Methods, fees, minimums, maximums** | No source in this repository names one, and no screen of this type can be opened without logging in |

---

## D-75. Node `6.1` is drawn, three files disagreed about where its own entrances are, and one shared rule was breaking any long heading

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** Claude, on the drawing pass. **Binds:** node `6.1` and its states `6.2` and `6.3`, `footer.md`, `sitemap.md`, and the shared section head in `_wf.css`.

**What was built.** Five pages: `responsible.html`, `responsible-guest.html`, `responsible-confirm.html` `6.2`, `responsible-in-force.html` `6.3`, `responsible-excluded.html`. **Cluster 6 is complete.** 66 of 93.

### The count was right and every file naming the members was wrong

Responsible play has had three entries since the base layer, and three files listed them. **All three listed the rail.**

| File | What it said | What moved it |
|---|---|---|
| `responsible.md` section 0 | "the rail, in its lower group; the money control; the footer's fourth column" | `D-29`, 19 August, took it off the rail. `D-40`, 20 August, put it in the account menu |
| `footer.md` | "It has three entries: the rail, the money control, and this band" | The same two, **and this file already says six lines further up that responsible play has had no other carrier since `D-40` took it off the rail.** One file, two counts |
| `sitemap.md` | "Responsible play gains a rail entry and keeps the one it had" | The same two. Marked as a record of step 6 rather than rewritten |

**The current three are the footer's own column, the entry inside the money control, and the account menu**, and `navigation.md` had them right the whole time. **The number never changed, which is exactly why nobody checked the list.**

### A refusal survived its own citation

Block 2 refused the live drop ticker with the reason "`sitemap.md` restricts the ticker to `1.0` and `3.3`". **`D-59` put the feed on every page on 21 August, so the citation is gone.** The row was resting on the sentence after it, which is this node's own: **this is the page where a run of other people's wins would do harm rather than merely be noise.**

**It has a live parent now rather than a stale one.** `sitemap.md`'s register row for the daily ladder `0.15` carries the identical shape in the register itself: "**`6.1` may never render it**". A surface that may not show a person what to wager may not show them twenty four strangers winning either. **Declared by the page, so `0.8` owns whether it stands**, which is the same treatment `4.2` got the same day.

### Two internal states drawn, and the reason each one is not a numbered node

**The guest.** The page reads in full without an account and refuses the sign-in wall, which is the same refusal `1.2` makes of the competitor that puts its proof behind a login. **On this page the wall would be worse:** the person most likely to need it is the one least likely to want to sign in first. It is one screen with different control behaviour, not a destination.

**The self-excluded surface.** The state matrix's fourth column: the four controls are locked for the duration and other boundaries can still be tightened, which is different enough from a general boundary in force to be drawn rather than described.

### The third application of `D-58` off its own surface, and it is now a rule looking for a home

Guest controls and locked controls are **live and they answer**. A press names what is missing and marks the row it belongs to.

**On this page the argument is sharper than it was on the consent gate.** A person inside a self exclusion who presses a control is owed the reason in words, and a grey rectangle is the product declining to speak to somebody who has just told it to stop.

**`D-58` has now been extended to the deposit ceiling and to this page, both on Claude's reading of a founder decision taken about one dialog. Three surfaces is a rule rather than three readings**, and it belongs in `CLAUDE.md` by the project's own repeated-instruction test. **Not written there in this step**, because that file changes only on an explicit go and only by replacing an existing clause. Carried as a candidate for the stage close.

### One shared rule was breaking any page with a long heading

Every one of the five pages scrolled sideways by 3px at 900. **The cause was not in this node.** `.wf-sec-head` at 900 is a flex row of title, description and a rule with a 96px floor, and the comment beside it says the description gives up width before the rule falls below that floor. **The title was `flex: 0 0 auto`**, so it could neither shrink nor wrap, and a long H2 pushed the rule past the edge.

**Found on `6.1`, whose block 7 heading is the longest in the product, and latent on every page with a long heading rather than local to this one.** The title wraps now, which is what a heading does. The 402-check sweep over all 66 pages confirms no page regressed.

### Measured

146 checks over the five pages at six widths. No horizontal overflow. One H1 each. **No live strip and no daily ladder on any of the five**, both refused by this node and by the register. **No case tile, no grid, no deposit route in main.** No disabled control, no progress or meter element. **No completion mechanic anywhere:** no streak, badge, congratulation, days survived, total saved or level. **No countdown:** the end of every boundary is a stated date and time. **What a boundary closes sits above the controls on all four pages that carry both.** The dialog opens, traps, escapes back with nothing recorded, delivers the exit sentence, states the cost, and carries exactly two controls of equal weight. The guest press answers and marks its row.

**And one absence asserted rather than assumed:** none of the five pages is `noindex`. This is one of the nine indexed surfaces and the only one in the product that proves the compliance constraint is a product rather than a paragraph in terms.

### Two open items closed and one created

**Closed:** whether the spend ceiling is per deposit or per period, answered by `4.1` the day before. **Closed:** the `0.13` title pattern this node reported missing, which now exists.

**Created by closing the second one.** The pattern is `<node H1 subject>` then a separator then `CS2 Clutch`, **and `CS2 Clutch` is a working placeholder.** This node's title ships without the suffix. **A title is the one string that survives into search results and browser history before anyone reviews it**, and this is an indexed page. The divergence is named on the node rather than left as a quiet inconsistency, and it resolves itself the day the product has a name.

---

## D-76. Node `0.10` is drawn, nine pages, and the state that earns the node is the one where our own published number fails

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** Claude, on the drawing pass, with one collision handed to the founder. **Binds:** node `0.10` and its eight states, and it puts node `6.1` and node `0.13` against each other on one line of copy.

**What was built.** Nine pages: `support.html`, `-submitted`, `-waiting`, `-answered`, `-upheld`, `-refused`, `-deadline`, `-nodispute`, `-notfound`. **75 of 93.**

### The page is not a help centre with a form at the bottom, and the evidence says why

`B8-3` is three reviews and **not one of them is a complaint about slow support**. "My account was suddenly banned, excluded from the Rain system, and my balance of over 160 coins was completely wiped out... they refused to provide any specific explanation." "As soon as I tried to withdraw my winnings, the site permanently banned me." "Banning a user just to avoid paying out a small $80 prize."

**Every one is a decision with no ground and no route.** So four things ship instead of a help centre: a written ground produced by the surface that took the decision, a public route to dispute it, a published deadline for an answer, and **a state for that deadline being missed**.

**The last one is what earns the node.** `G4`'s success signal is that response time stays inside the published deadline. **A signal with no state for its own failure is a number nobody has to meet**, and the failure would then be met as an incident with no interface, which is the sentence the barrier already records. The page says the deadline passed, that the clock keeps running, and that it is not reset.

### `D-26` reached a fourth file, and this time it deleted a route rather than a rule

The node counts **five routes in**. `2.9` identity failed is one of them and it has been `LATER` since 18 August. Four live, one parked, and the parked one is kept on every list in the node rather than deleted.

**What the deferral does here is less than it looks and more than nothing.** Three of the four `G4` cases still route in, so the appeal form, the deadline and the six appeal states all keep their subjects. **What is gone is the one route that would have carried an identity ground into the form**, which makes section 3's refusal of identity documents a rule with no live case rather than a rule holding one back. **It stays written and it is asserted by the sweep**, because a rule that only exists while its case does is a rule that will be missing on the day the case returns.

**And a heading said three while its table held four rows.** `2.2` was registered by `markets.md` rather than by the sitemap's transition column and the count was never updated. Now three of four are live and the two numbers finally mean different things, so both are printed.

### Two nodes, two answers, one pattern, and they cannot both ship

`6.1` reported that `0.13` owed it a title pattern and did not have one. **The pattern exists now:** node H1 subject, separator, `CS2 Clutch`.

**`0.10` follows it. `6.1` refuses it**, on the ground that `CS2 Clutch` is a working placeholder and a title is the one string that reaches search results and browser history before anyone reviews it. **Both are indexed surfaces and neither is wrong on its own reasoning.** Printed on both nodes and carried as an open item on both, rather than quietly reconciled by whichever one was edited last. **The answer is the naming decision, not a copy preference.**

### What the page refuses, and each refusal has a live parent

| Refused | Why |
|---|---|
| **A single form with a type selector** | Contact and appeal are two entry points into one queue. The appeal carries four prefilled fields a question does not have, and a selector that rewrites the required fields under a person is how the prefill gets lost |
| **Tabs over the two routes** | A tab hides one of two routes from a person who arrived needing the other |
| **Any identity document** | An appeal form that asks for a passport has moved the exit ambush to the complaints desk |
| **An account** | The live product's own submit button reads SIGN IN, so **a person locked out of their account cannot use its support channel to say so.** That is a walked fact and it is the strongest single argument in this repository for the appeal route |
| **A named escalation authority** | The licence is a direction rather than a filing, so there is no authority to name. **A page about disputed decisions is the worst possible place in the product to invent one** |
| **A deadline figure** | The register holds the row and its value is `[?]`. Every page prints "not published" where the number goes |
| **A support address** | It depends on the operating company and that is not decided |

### The FAQ is built once and it holds no number of its own

Seven sections, each naming the surfaces that own it, **and the questions are not drawn**: they are derived at stage 05 from the barrier ledger, one per documented barrier that survives its surface. **A competitor keeps its thirty day holding deadline and its crediting window in its FAQ and nowhere else**, and both are real product rules living in a document. **The FAQ repeats a rule. It never owns one**, so every section renders its scope and says the answers are not written yet rather than inventing three plausible ones.

### Measured

245 checks over the nine pages at six widths. No horizontal overflow. One H1 each. **Seven accordion sections on every page, every answer in the DOM at every width**, every control a real `<button>` with `aria-expanded` and `aria-controls`, none a styled `div`. No disabled control, no image in main, **nothing is `noindex`**. **No deadline figure invented on any page**, no support address invented, no identity document asked for anywhere while the refusal sentence is asserted present. The ticket id is copyable text on all four states that carry one, every wait names its owner, and **the frozen-not-zeroed balance is stated on all four**. The ground quoted back into the appeal form **wraps and is not in a scroller**, asserted by measuring its overflow rather than by reading the markup: a ground a person has to scroll inside a box is a ground they will not read, and `G4` exists so that it gets read.

456 checks over all 75 pages clean, prose sweep 0 of 75, every internal link a registry file. **Four dead links remain and all four are undrawn screens.**

---

## D-77. Node `0.9` is drawn, a component I had taken off nine pages goes back, and the small button was failing the level three nodes claim

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** Claude, on the drawing pass. **Binds:** node `0.9` and its four states, node `0.10`'s nine pages, and `.wf-btn--small` in the grey contract, which is on sixteen pages.

**What was built.** Five pages: `legal.html`, `-changed`, `-guest`, `-superseded`, `-unpublished`. **80 of 93.**

### First: I took a component off nine pages with no parent, and it goes back

`0.10` shipped this morning with the live drop strip suppressed on all nine of its pages. **Nothing in `support.md` refuses the strip.** I took it off on the argument `4.2` and `6.1` use, and **neither of those is available to `0.10`:**

| Surface | Why the strip comes off | Status |
|---|---|---|
| `4.2` | Its own forbidden list reads "no offer of any kind: no alternative funding route, no reminder when the period resets, no invitation to raise the ceiling" | **Parented** |
| `6.1` | Its block 2 refuses the ticker in writing, and `sitemap.md`'s register row for the daily ladder carries the identical shape: "`6.1` may never render it" | **Parented** |
| `0.10` | Nothing | **Unparented. Reverted the same day** |

**A wireframe cannot borrow another node's parent**, and a component the founder placed on every page by `D-59` does not come off a surface because the surface felt wrong to a reader. **This is the rule catching me rather than a file**, and it is written here in full rather than fixed quietly, because a silent revert teaches nothing and a silent removal would have survived.

**The argument for taking it off is real and it goes to the founder.** Three of the four routes into `0.10` are a person who was restricted, refused or blocked, and the appeal states are read by exactly those people: **a run of other people's wins beside "your appeal was refused" is the shape `4.2` names.** What makes it a question rather than a rule is the entry state, which is also reached by a person with an ordinary question, **and splitting the strip across nine pages of one node is worse than either answer.** Open item on `0.10`, owner `0.8` and the founder.

**`0.9` records the same absence deliberately.** The strip renders on the legal pages, this node refuses nothing, and the absence of a refusal is now written down rather than left as something nobody looked at. **"A legal document deserves quiet" is a guideline, and a guideline about a component may not be used to select that component.**

### The small button was 32px and three nodes claim AAA

`0.1` and `0.2` chose 44 by 44 CSS pixels, which is WCAG 2.5.5 at AAA, and `0.9` repeats it. **`.wf-btn--small` has a 32px floor and it is on sixteen pages:** the case reveal, the catalogue, the deposit presets, the support copy control and the version links here. AA is 24. **This contract does not claim AA.**

**The fix is the hit area and not the box.** A 44px visual button inside a dense component is exactly what the small size exists to avoid, so the target grows to 44 through an expander and the drawing does not move a pixel. **Nothing in any layout changes and the claim becomes true on all sixteen pages at once.**

**And the sweep was measuring the wrong thing.** It read the element box, which is why this survived four nodes that all state the rule. It now reads the effective target, box or expander, whichever is larger.

### The node

**One template, four documents, and only the terms are drawn.** Four drawings of one shape would be three copies. Each keeps its own address and its own indexation.

**The baseline runs four documents, all `noindex`, each with one H1 and zero H2.** The terms are about 7,270 words as a single wall, last updated 08/01/2025, and the cookie policy is dated April 2019 under a product that changed every year since. **The wall is the defect the template exists to fix, and the dates are the second one.**

**What no competitor in this category does at all is version its policies visibly.** A policy that changes silently invalidates everything decided under the old one: a person who accepted version 2 and is judged under version 4 has agreed to a document that no longer exists, **and neither side can prove what it said.** Four versions render with all seven fields, and **"requires a new agreement" is a trigger rather than a note about one**, so its yes puts every existing account into the changed state.

**The state that earns the node is "changed since you last agreed."** A component built only for the current version meets its first amendment as an incident, and the incident is a person being held to a text they never saw. **It never blocks reading**, because a wall demanding acceptance before the terms can be read is the terms being agreed unread. **Acceptance is asked at the next action that depends on it:** the document informs, the flow asks. **The exit stays open.** And it is not a toast, because a dismissible strip that leaves no trace is a state announced in the one place that does not keep it, with a legal consequence attached.

**The template writes no legal copy and that is a boundary rather than an omission.** Every clause renders as "not written" and the sweep fails any page that drafts one. **Placeholder legal text is the worst possible thing to ship on a legal page**, because it reads as a document until somebody relies on it, which is exactly what the unpublished state says out loud.

**Three things the page will not invent:** an operating company, an address or a VAT number; a supervisory authority, which has a candidate under `D-23` and no licence, so the field stays empty rather than naming one; and the middle breadcrumb, **which the register writes as `Home > Legal > Document` while holding four document URLs and no `/legal`.** A middle crumb needs an address or it is not a crumb, so it renders as text with the gap marked.

### Six indexed URLs, two answers, and the third node to meet it

`0.13`'s title pattern is node H1 subject, separator, `CS2 Clutch`. **`0.9` follows it four times, `0.10` follows it once, `6.1` refuses it.** All six pages are indexed and `CS2 Clutch` is a working placeholder. **Two nodes disagreeing was an inconsistency. Three nodes and six indexed URLs is a decision that has to be taken**, and the titles stay as written because rewriting them here would settle it by editing order rather than by a decision.

### Measured

175 checks over the five pages at six widths. No horizontal overflow. One H1 each, eight real clause H2s, eight real contents anchors, **nothing behind a native accordion and nothing offered as a file**: a file has no H1 to validate, no breadcrumb and no version history around it. Two machine-readable dates per page. **The summary sits above the document at every width**, asserted by geometry. The identification block renders all six fields with all six empty. No legal copy drafted anywhere, no identification value invented, no supervisory authority named, no `Legal` crumb linked. **Every target at least 44 by 44, measured as the hit area.**

486 checks over all 80 pages clean, prose sweep 0 of 80, every internal link a registry file. **Three dead links remain, and all three are screens with no IA node written yet.**

---

## D-78. Nodes `5.9` and `5.10` are written and drawn, two days after `D-36` put them on the map and did not write them

**Date:** 2026-08-22. **Stage:** 04, doing 03b's work for two of three nodes. **Decided by:** Claude, with `5.11` left for the founder because `D-36` already said it is theirs. **Binds:** the two new node files, `ia/_nav.js`, and it puts one finding on register `0.13`.

**What was built.** Two IA nodes, `ia/docs/pages/history.md` and `profile.md`, their two pages, and six wireframes: `history.html`, `-empty`, `-no-seed`, `-mismatch`, `profile.html`, `profile-steam-down.html`. **86 of 99.**

### Two days with a registered file, a 404 behind it, and no specification anywhere

`D-36` added `5.9`, `5.10` and `5.11` on 20 August so the account menu could carry live rows instead of dead ones. **It named the cost in its own record, "stage 04 owes three more screens", and wrote none of them.** The wireframe registry got three files, the shell linked all three, and nothing in `ia/docs/pages/` described any of them.

**That is the dead item defect one level up.** The rule `D-36` invoked says a carrier is inherited and filled with live items, and only a dead item is deferred. **A row pointing at a specified page with no drawing is work outstanding. A row pointing at nothing at all is the defect the rule exists to prevent**, and it survived because the registry entry looked like the work had been scheduled.

**`5.11` stays unwritten and that is the correct state.** `D-36`: "what it holds in round 1 is `[?]` and the node owes that answer before it can be drawn." Sound is at the foot of the rail, language is one language by the locked decision, and no notification row exists anywhere in the backlog. **Asking is the instruction here, not filling it with a median.**

### `5.9` is the strongest of the three and the map had left it out entirely

Its parent is real: Related Job 3, verify the outcome after I open, by way of row `F3`. **And the parent is stronger than the row that names it.** `F3` is one link on one outcome screen. **Until this node existed, the only trace of a roll a person could reach was the item it produced**, and an item is not a round: it survives a sale, it can be withdrawn away, and it carries no seed material. **A product whose whole trust claim is that every round can be checked afterwards had no afterwards.**

**A row is a roll, not an item, and that is the whole node.** The baseline runs four history tabs and every one is an **inventory** history: a grid of item cards, which is the outcome of a roll with the roll removed. **That is the trophy shelf `7.1` was written to replace, one screen deeper.** Seven fields per row, the cost and the worth both dated to the roll, and **no row is ever removed**: selling the item back or withdrawing it changes one field and deletes nothing.

**No total of any kind, and the absence is the decision.** Spent, returned, the ratio of the two, a best drop, a rarest pull, a personal record, a sort by value. **Every one is a session score with a longer window**, and a lifetime profit figure is the strongest completion mechanic this product could ship. **The cost is printed rather than absorbed:** a person who wants to know whether they are up or down cannot learn it here, and that loss is the correct one.

**Both readings of `D-C` are drawn rather than waited for.** The question of whether rolls are retained with seed and nonce went to the platform on 11 August and has not come back. **The no reading is not a degraded state, it is a different product**, so it has its own page: every row keeps its six other fields, the proof column says the material was never kept, **and the check control is absent rather than present and broken.** A dead check control promises the thing the row cannot do.

**And the degraded row sits inside the base page beside a normal one**, because the distinction is the point: a source we cannot read **now** is not a roll whose material was never kept **ever**.

### `5.10` is an orphan and the page enforces that on itself

No barrier, no job, no compliance constraint. **It exists because the founder said all three would exist, asked directly**, which is a legitimate reason and is not one of the three legal classes, so the cell is printed rather than filled.

**An orphan may not grow.** Every block is either a fact the product already holds or a control that exists elsewhere on the map. **Nothing here may be the first home of a new capability**, because a capability whose only justification is a page with no parent has no parent either. Six refusals follow from that one rule, and the sharpest is the counter: **the baseline runs three of them and every one reads `N/A`. This is the page where a level would be invented.**

**The baseline's public id is recorded and refused.** `852261` is sequential and a stranger can decrement it, which makes the registered-account count enumerable from outside. **A fact about the baseline, not a pattern to inherit.**

**Block 4 is the one this page is worth having for.** `D-69` left the public profile `[?]` with two of our own decisions against each other. **A person cannot be told what is public about them by a product that has not decided**, so the block states what is true today under either resolution: a shared result carries the name and the avatar, the live strip can carry a win, and there is no page a stranger can reach that lists what this account has won.

**And it asks the honest question about itself in its own open list:** whether it survives its orphan status at all. If it is cut, the account menu loses a row and the rule that put it there applies again in the other direction.

### The register owes three rows

**`0.13` has no row for `5.9`, `5.10` or `5.11`.** Fourteen addresses in the URL map, sixteen in the indexation register, and none of them is one of the three nodes added on 20 August. Its closing count, "nine indexed surfaces and six that are not", **was taken before those nodes existed and becomes nine and nine.** The indexed half does not change, which makes it a bookkeeping error rather than a scope one.

**The URLs are derived from the register's own rules rather than invented:** no language prefix, and one destination carries one label in every carrier, which is the rule that produced `/my-items` and is stated there as "not a styling choice". **Recorded as a finding with the three rows written out, and not edited into `0.13`.**

### One fix traded a defect for another and was taken back

The mismatch row's control read "Reported, with the round attached" and pushed the page sideways by 40px at 900. **The first fix let the label wrap, which the repo-wide sweep has failed since the case screen:** a control whose label runs to two lines. **The label is shortened instead and the sentence moved beside it as text**, which is what the node's own wording asked for anyway: reported automatically, and the person adds nothing.

### Measured

149 checks over the six pages at six widths. No horizontal overflow. One H1 each. **No total, profit, ratio, streak, best drop or personal record anywhere in either node**, and no verdict on any row. Five cells in every roll and **no cell dropped at any of three widths**, because a column that disappears at a width is a field the page decided a person did not need. Both dated figures on every row. **No sequential id and no counter on either profile page.** The empty state sells nothing, the no-seed state offers no check control, and the Steam-down state refuses the generated name in words.

522 checks over all 86 pages, prose sweep clean, every internal link a registry file. **One dead link left in the whole product: `settings.html`.**

---

## D-79. Node `0.3` is drawn in eight pages, `D-59` had reached three files and left five, and a decision record was printed on every page of the product

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** stage 04, on everything except the two questions listed at the end. **Binds:** node `0.3`, node `0.8` whose placement section is rewritten, node `0.2` whose transient row gains a surface, the shell's footer, and the prose instrument.

**What was built.** Eight wireframes: `system.html`, `-404-internal`, `-404-retired`, `-404-noresult`, `-500`, `-500-noshell`, `-503-planned`, `-503-unplanned`. **94 of 101**, the total having grown by two because the node asked for two pages the registry did not hold.

### The registry had five states and the node had been asking for seven

**Neither extra page is an idea of mine.** Both were already written into `system.md` and neither had been counted.

| Page | Where the node asked for it | How long it had been asking |
|---|---|---|
| **`404`, the search returns nothing** | Section 7, states table, its own row with its own route out | Since the node was written |
| **`500` with no carriers** | Section 9, open items, owner column: "Production, **and stage 04 draws both versions**" | Four days |

**A conditional block drawn once is drawn in whichever condition the person drawing it assumed**, and nobody discovers the other condition until it ships. The 500 renders its carriers only if the shell is static enough to render without the backend, which is production's answer to give; what stage 04 owes is both drawings, so that the answer is a choice between two things somebody has seen.

**And the empty search was the sharper of the two.** It is the one branch of the search block that can go wrong, it is the only state of this node nobody could look at, and it could not be drawn at all while the search was a picture of a field. **So the field became a control.** It filters the twelve case names `3.1` already draws, it renders hits that land on a case, and it has an empty result that keeps the quick links under it, because an empty search that clears the page is a second dead end inside the first one.

### The response is drawn, and without it a wireframe of this node cannot show the defect it exists to prevent

**A response speaks to two readers and can lie to either one independently.** A soft 404 is HTTP 200 with a "not found" body: the person is told the truth and the crawler is told the page is fine. Key-Drop's inversion, walked on 12 August 2026, is HTTP 404 with the home page rendered in it, no H1 and no error message anywhere: the crawler is told the truth and the person is told nothing. **Both are the same defect, the status and the body disagreeing.**

**Every one of those failures is an agreement between a header and a body, so a drawing of the body alone cannot contain any of them.** Each of the eight pages therefore carries a short response block: the status, **the address the response was served at**, and the `Retry-After` where there is one. The address row is the one nobody draws and it is doing real work: the response renders at the address that was requested, because a redirect to `/404` answers somewhere else and takes the mistyped address out of the browser bar along with any chance of correcting it.

### The 503 made the node contradict itself, and it took drawing it to find out

Section 1's table says `Retry-After`: **Yes** for 503, without qualification. Section 5 says the unplanned window "states that there is no end time yet and gives the support route rather than a number invented to look reassuring". **A header that must always be sent and a figure that must never be invented cannot both hold on the unplanned page.** Two sections of one file, four days apart, and neither reader would have noticed until something had to render.

**Resolved in favour of not inventing, and the RFC is what makes that legal rather than a preference of ours:** 9110 section 15.6.4 says the server **MAY** send `Retry-After`, not must. So the planned page sends the header and says the same figure in words, two readers and one number, and the unplanned page sends no header at all and says in words that there is no figure yet. **`0.11` rule 3 from the other side: missing is a state, never a zero, and a `Retry-After` guessed to look reassuring is a published promise nobody intends to keep.** Both sections are amended rather than one of them being quietly followed.

### `D-59` had reached three files and left five, and one of the five is the component's own node

`D-59` put the live feed in the shell on every page on 21 August. **On 22 August, five places in this repository still described the placement it replaced, and they did not agree with each other either.**

| Where | What it said | Which decision it was behind |
|---|---|---|
| `ticker.md` section 3, the component's own node | "`1.0` Home and `3.3` Case screen. Nowhere else" | **Before `D-31`.** Two |
| `ia/ticker.html`, the same section | "1.0 Home. Nowhere else since `D-31`" | One |
| `system.md` section 2, refusing the feed | "renders on `1.0` only since `D-31`" | One |
| `ia/system.html`, the same row | "renders on `1.0` and `3.3` only" | Two |
| **Nineteen wireframe pages**, in a comment | "THE TICKER IS NOT ON THIS PAGE" | **One, and every one of the nineteen was rendering it** |

**The component's own node is the worst of the five, and its page carried both answers in its own contents list**, a section labelled "`D-59` every page" directly above a section labelled "Two surfaces". **An amendment appended to the top of a file does not amend the file.** It adds a second answer, and from then on the file is a place where the reader picks.

**The nineteen comments are the second kind of rot and they are worse than a stale sentence in a spec.** A comment that contradicts the page it sits in reads as the reason for what is on screen, so the next person to touch one of those pages learns the placement from a rule that was reversed. All nineteen were byte-identical, which is how they were written and how they were fixed.

**And a rendered claim on `overview.html` is marked rather than rewritten**, "0.8 now renders on 1.0 alone", because that page is a log of what was decided when and it was true for two days.

### `0.8` gains the register it should have had since `D-77`, and it changes what "every page" means

**Six pages already opted out of the feed in the built product and the component's specification named none of them.** `D-74` said the finding went back to `0.8`; it never arrived. `D-77` reverted a removal I had made from nine pages with no parent and fixed the rule: **a surface takes the feed off itself only on a parent written in that surface's own file.** That rule had no register to be written into.

It has one now, in `ticker.md` section 3, and this node is its third row: `4.2` on its own forbidden list, `6.1` on its own refusal, `0.3` on its own sentence that a live feed of other people's wins beside our own failure is the tone this product does not have. **Fourteen pages of the built product refuse it and the other eighty carry it.** Nothing about `D-59` changes. What changes is that the exception was invisible: **a component whose specification says "every page" while its renderer carries an opt-out flag is a component nobody can audit.**

**Two sentences in that node were also false rather than merely old.** The pause-persistence row said "this product has one settings surface, `6.1`", which stopped being true on 20 August when `D-36` put `5.11` Settings on the map, and `6.1` is a boundary surface and never was the settings one. **That row is now one of the few concrete candidates for what `5.11` holds in round 1.** And the baseline sentence claimed a divergence that no longer exists: `D-59` converged on the baseline's own placement, and what diverges now is one smaller thing, the strip sitting after the content at 360 rather than under the header.

### A decision record was printed on every page of the product, and the instrument that removed thirty one of them could not see it

`D-66` fixed that a wireframe may state a state and may never cite a decision record. The sweep that enforced it removed 31 citations across 17 files on 21 August. **On 22 August the footer's last line still read "Prices are in coins. What one coin is worth in real money is published wherever money is spent, D-28." on all ninety four pages.**

**The rule was right and the reach was wrong.** The instrument read `document.querySelector('main').innerText`, and the footer is not in `main`. **So the one citation that was on every single page was the one citation the instrument could not see**, and the more pages it shipped on, the less likely it was to be caught by the check built for exactly it.

**The instrument now reads the whole surface** with the scaffolding panel and its toggle excluded by name, which is the honest boundary: those two are the prototype talking to a reviewer, and everything else on the page is the product talking to a person. **The sentence itself stays and only the citation goes:** rule 10 of the published-numbers register is what makes it true, and a person reading a price is owed it whether or not a record number is stapled to the end.

### The 500 twice, and the line between what survives and what does not is not arbitrary

The version with no carriers keeps the footer, and that pair is the specification rather than a layout choice. **The carriers need to know who you are:** the rail is a drawer on mobile and the header carries the account menu and the money, and a drawer whose contents come from a session that just failed is worse than a page without one, because it opens, it is wrong, and it looks like the product rather than like the failure. **The footer needs to know nothing:** legal identity, the compliance line, the market statement and the support route are the same text for everybody.

**And on both versions the money says what it does not know.** The header's two figures come from the application that failed, so they render as **Not available** rather than as `0.00`. `0.11` rule 3, and on a page about money the zero is the expensive lie. The footer's two live statistics take the same treatment and the strip keeps its space, because removing it takes the proof-of-scale half of "never a dead end" away with the figure.

### `0.2`'s transient row stopped one short of the set

The footer node's transient table read "**404 and 500**, `0.3`", and `0.3` had already inherited the same treatment for the 503 and named the extension in its own file rather than assuming it. **A row that stops one short of a set of three reads as a deliberate exclusion**, and the 503 is the surface where the footer matters most, since it holds the only route out that is not the thing that is down. Widened to all three, dated, with the reason printed.

### Measured

**80 checks over the eight pages at seven widths.** No horizontal overflow at any of them. One H1 each, **never the numeral**, and the `<title>` equal to the H1 on all eight, because the title is the one part of an error page that survives being left open in a background tab. The status row leads with the right code on every page. The address row is present on every page. **No live money figure and no live footer statistic on any page whose source is down, and no zero anywhere.** Exactly two quick links, real `<a href>`, on all eight. No autofocus, no meta refresh, no automatic reload. Every target 44px or more.

**And the behaviour was walked rather than asserted**, at 360 and at 1200: the search finds Ironbound and lands it on the case screen, the search for a name that does not exist renders the empty result **with both quick links still under it** and announces the count politely, the pinned page renders that state on load, the retry answers, counts its second press and does not navigate, and the reference is in the DOM whole while being truncated in the middle on screen.

**570 checks over all 94 pages at six widths, layout clean. 136 checks over every IA and root page, clean.** Prose sweep **0 of 94** on the widened instrument. Every internal link a registry file. **One dead link left in the whole product: `settings.html`.**

### Two questions went to the founder rather than into the pages

**410 against 404 for a retired case.** RFC 9110 prefers 410 where the origin knows the condition is likely permanent. The retired page is drawn as a 404 because nobody has answered whether a case can come back, and the difference is not cosmetic: 404 says "not now", 410 says "stop asking", and a crawler treats them differently. **Drawing the 410 would have answered a product question by drawing it.**

**Whether the quick links should carry a third destination.** Two is the map's number, not a taste: this node's transitions row holds `1.0` and `3.1`, and a carrier may not promise a destination the map does not hold. Adding `1.2` or `0.10` to the body is a change to the map.

---

## D-80. Node `0.4` is drawn in eight pages, the block this node said it could not place had been placed four days earlier, and the control that placed it did nothing

**Date:** 2026-08-22. **Stage:** 04. **Decided by:** stage 04, except the two items at the end. **Binds:** node `0.4`, node `0.2` whose Company control becomes live, and the shell on every page.

**What was built.** Eight wireframes: `cookie.html`, `-manage`, `-accepted`, `-rejected`, `-partial`, `-changed`, `-expired`, `-nostore`. **102 of 103, cluster 0 is complete, and the only unbuilt page left in the whole product is `settings.html`.**

### The one block this node said it could not place had been placed, and the fix was itself a defect

Section 8 of `cookie.md` carried the sharpest sentence in the node: **`0.2` does not have one.** Article 7(3) says withdrawal must be as easy as giving, so there has to be a permanent entry that reopens the dialog, and the footer had no control that did. The node recommended one and **recorded it rather than applying it, which was correct**: a block a carrier lacks is a finding for the step 8 audit and never a quiet edit in another node's file.

**The audit took the finding and applied it.** `0.2`'s Company column has carried **Cookie settings** since, a control rather than a link and the only control in that column, quoting Article 7(3) from this node by name. **What never happened is the finding coming back**, so `0.4` went on describing a hole that had been filled, in its section 8 and in its open list, for four days.

**And the control did nothing.** It shipped as a `<button>` with no handler on all ninety four pages, because `0.4` was unbuilt and there was nothing for it to open. `D-58`: **a control that does not do its thing is a picture of it.** So the fix for Article 7(3) was itself the defect `D-58` forbids, and it was invisible to both nodes, **because one owns the carrier and the other owns what the carrier carries, and neither one owns the pair.** It opens layer 2 with the current answer now, on every page, which is what makes the withdrawal route real rather than drawn.

### Article 7(3) is a rule about a count, so the count is measured

| Width | Presses to give | Presses to withdraw |
|---|---|---|
| **1200 and up** | 1, on a region pinned to the viewport | **1** |
| **360** | 1, on a region pinned to the viewport | **2** |

**Below 900 the footer's link columns are accordions collapsed by default**, `0.2` section 4, so the control sits behind one press before its own, at the very bottom of the page. **The narrow case is not equal and it is printed rather than absorbed.** Moving the control out of the accordion is a change to `0.2`'s composition, which is that node's to make, so it goes back the same way the control itself did.

### Symmetry is drawn as a construction rather than as a resemblance

The CNIL's finding of 14 December 2021 is that banners "do not allow the user to refuse the deposit of cookies as easily as to accept it", and this node calls it the single most common place the rule is lost. **So the two decisions are one grid of equal columns rather than two buttons that happen to look similar:** equal width by construction, the same class string on both, neither carrying the primary weight, and on one line at every width. **The sweep measures all four of those at seven widths**, because "a reject button that is technically the same size and visually a ghost has failed the same rule with better plausible deniability" is a sentence that needs an instrument, not a reviewer's eye.

**Two of two in the category ship accept only.** Hellcase and skin.club both run a banner with one control and the text "if you continue to use this site, you consent", walked 12 August 2026. Both halves fail and against different texts: accept-only fails the CNIL, consent by browsing fails recital 32 directly. **A reject button of the same size is the cheapest evidence in this whole product that `B1-1`'s expectation is wrong, and it costs a button.**

### Two pages render the same picture and record different facts, and that is the point

`cookie-manage.html` and `cookie-rejected.html` are the same screenshot: both non-essential toggles off. **On one they are off because nothing was chosen, and on the other because they were refused**, which is Article 4(11)'s "unambiguous indication" made visible: silence and refusal are not the same answer and only one of them was given. **The record line is the only thing that separates them**, which is exactly what Article 7(1) is for, and it is why the record is a block in this node rather than an implementation detail.

**And the same argument runs the other way on accepting and refusing.** To the person those two produce the identical page, and that identity is the node working rather than a gap in the drawing: refusing costs nothing except the analytics we would have collected, which is what Article 7(4) measures. **The one place the two answers differ visibly is the reopened dialog**, which shows the current answer and is never blank.

### Layer 2 had four of the node's ten blocks and nowhere to be drawn

B6 the purpose list, B7 strictly necessary, B8 save, and the record. **None of them could exist while the second layer had no page**, and the registry held none. **The strictly necessary row has no control at all**, because a disabled switch that cannot move is theatre and `D-58` already took every dead control off this product's surfaces: the row says what it covers and why it needs no consent.

**And the marketing purpose renders its own unknown rather than being dropped.** Round 1 has no referral programme, it is `LATER` with no parent, and whether any marketing tag exists at launch is unanswered. **A purpose removed for being empty and a purpose nobody has decided about are different things**, so the row states the second on its own face.

### The registry's own note pointed at the wrong section of the wrong question

It read: "whether this ships as six pages or two with four variants is step 5, conventions section 6". **Section 6 of that file is the three readers.** The rule is section 4 and it has answered this since it was written: **every state is its own page, so the prototype can navigate between them, and the real set comes from the States section of the node spec.** That set is nine rows: two say "same as its base state" and get no page, **one had no page at all**, the storage-unavailable state, and the second layer is not in the table because it is a layer rather than an answer.

### Three smaller things this file was wrong about

**The mobile bar carries two destinations, not three.** `D-29` took Provably fair off the rail on 19 August and `D-40` took My items off on 20 August, and the bar follows the rail. The line was true when it was written and stopped being true two decisions later.

**The consent lifetime is still `[?]` and the expired page renders it as unset.** No source opened on 12 August states a re-ask interval: the EDPB guidelines could not be parsed in that environment and the ICO returned 403. **A number invented here would read as sourced.**

**The expired state says why it is back.** A banner that reappears with the words it used the first time reads as one that was never listening, which is the interface half of consent by attrition.

### Measured

**107 checks over the eight pages at seven widths.** No horizontal overflow. **One H1 on every page and it is Home's:** the region takes its accessible name from a visible line rather than injecting a heading into the host page's outline. **No `aria-modal`, no scrim, no focus trap, the document never locked, and the page behind always scrollable**, at every width, on all eight. Layer 1 never covers more than half the viewport. **The region never overlaps the mobile bar.** The two decisions equal in width, height, class and baseline everywhere. **No pre-ticked box anywhere nothing has been chosen, no dead control in the region, no switch on the strictly necessary row, and exactly two non-essential purposes with separate controls.** Every target 44px or more, the policy link having failed that at 23px and been fixed as a hit area. The live region polite and never an alert. Every copy of Home `noindex`.

**And the loop was walked at 360 and at 1200:** arrive, open layer 2, find both boxes off, refuse in one press, watch the region close and the announcement fire, come back through the footer, find the answer still there, change one purpose, save, come back again and find the change kept. **The dead control was walked on three pages outside this node** and it opens layer 2 with the record reading "nothing recorded yet" rather than inventing an answer.

**136 checks over every IA and root page, clean.**

### Two things went to the founder

**The missing compliance constraint, and it is the one that matters.** `CLAUDE.md` enumerates five compliance constraints and **none of them is data protection**, so the entire legal ground of this node, Article 5(3), Articles 4(11), 7(1), 7(3) and 7(4), recital 32 and two CNIL pages, has **no parent in the three legal classes.** It is carried on `B1-1` and design principle 1, which is true and is not the whole reason the node exists. **The alternative is quietly widening the third class, which is the thing that rule exists to stop.** A candidate line for `CLAUDE.md` at the stage close, and the founder's call.

**And whether the re-open control comes out of the accordion**, which is the 360 asymmetry above and belongs to `0.2`.

---

## D-81. Node `5.11` is written and drawn, the input it was waiting for had been in the repository for four days, and one of the baseline's twenty rows survives

**Date:** 2026-08-22. **Stage:** 04, doing 03b's work for the last of `D-36`'s three nodes. **Decided by:** stage 04, on everything except the two items at the end. **Binds:** node `5.11`, `research/docs/baseline-account.md`, and it adds a fourth surface to the debt `D-55` opened.

**What was built.** `ia/docs/pages/settings.md`, `ia/settings.html`, and four wireframes: `settings.html`, `-no-trade`, `-refused`, `-no-steam`. **106 of 106. Stage 04 has no unbuilt page left.**

### The input was never missing, and the `[?]` was on the wrong thing

**`D-36` wrote that what `5.11` holds in round 1 is `[?]` and that the node owes that answer before it can be drawn.** For two days I read that as a question for the founder and put it to them twice, in as many words: asking is the instruction here, not filling it with a median.

**That was wrong and the record says so on its face.** It says *the node* owes the answer. And the source was already in this repository and was four days old: **`research/docs/baseline-account.md` section 7 has carried this screen since the founder's capture of 18 August 2026, with all twenty rows written out in three tables.**

**What was missing was the derivation, not the input**, and the input gate exists to tell those two apart. **A gate that cannot tell an absent source from an unfinished reading fires on the wrong thing and blocks work that was ready.** The derivation is the same one every other node gets: take the baseline row, apply the round 1 scope list, apply the three legal parent classes, and print what does not survive.

**The founder answered by supplying the captures again**, which is the correct answer to the question I actually asked and not to the one I should have.

### Nineteen of twenty rows do not survive, and almost none of them for a reason about settings

| Verdict | Rows | What it means |
|---|---|---|
| **LATER** | 11 | Case battles, gunfights, upgrades, crypto withdrawal, giveaways, a partner programme, and notification channels. **A toggle over nothing is the dead item defect with a switch on it** |
| **ELSEWHERE** | 5 | Language and sound at the foot of the rail, the break tool on `6.1`, sign out in the account menu, the display name on `5.10` |
| **REFUSED** | 3 | The country control, and the two confirmation switches whose subjects are live |
| **`[?]`** | 1 | The anonymity control |
| **KEEP** | **1** | The Steam trade URL |

**The verdict on every row is printed rather than summarised, because a settings page that quietly drops nineteen rows is one nobody can audit against its own baseline.**

### The one that survives is why this node exists at all

**Withdrawal to Steam is round 1 and it works by sending a trade offer. A trade offer needs a trade URL. No node on the map held that field.** `withdrawal.md` names three limits before the request, blocked countries, Steam trade holds and Steam-side bans, and **it never names the one precondition the person themselves controls.**

**So the exit had a missing input and the map did not know**, and that is a better reason for this page than the row in the account menu that put it there. `5.11` arrived with no parent in the three legal classes and it still has none; **the field it holds does**, rows `G1` and `G5` on `B8-2` and `B8-3`. **`D-78`'s rule that an orphan may not grow is not broken by this: a precondition of a live row is not a new capability, it is an unowned one.**

**Two homes and it is not a duplicate.** `5.3` states the requirement **before the request**, which is `G5`'s own rule. This node is where the field is set and changed, outside the flow, on a day when nobody is withdrawing anything. That is the shape responsible play already has in three carriers.

**And the value is checked when it is offered rather than at the exit.** A field that saves anything and fails three days later inside a withdrawal is barrier `B8-3`'s shape with a text input in front of it.

### The country control, refused, and it is a compliance decision rather than a scope one

**`Your Selected Country: United States`, with a `CHANGE` button, is the entire market control of the live product.** `baseline-account.md` section 7.2 walked it and said so. **A self-declared country the person can change is the geo control handed to the person being controlled**, which is not a stricter version of `D-23`'s closed allowlist, it is the absence of one.

**And the baseline demonstrates the failure mode on itself:** section 5b.6 records **two self-declared countries in one account, and they disagree**, because the deposit step carries its own country field. A product with two answers to the same question has none.

### Two rows are refused on a principle rather than on scope, and that is the harder refusal

**Confirmation on selling a skin back and confirmation on withdrawing one both have live subjects for us**, `D-38` and round 1, so scope refuses neither. **Design principle 3 does, quoted: "Cost never hides inside excitement."**

**A switch that removes the confirmation before a value leaves the account is a switch that removes a risk moment**, and it is the one preference in this list a person sets once, in a calm minute, and meets months later at the worst one. **The cost is printed:** somebody who withdraws every day will confirm every day, and **the answer to that is a faster confirmation, not an absent one.**

### The anonymity control is stated and not drawn, and another node has been waiting for it since 21 August

`public-result.md` has carried this open item in its own words since `D-69`: **"What remains open is whether they can turn it off, which no node says."** Owner, the founder.

**The baseline answers where such a control lives and does not answer whether ours has one.** `Make me Anonymous`, `OFF` / `ON`, in the `SECURITY` group of this same screen. **So the place was in the repository too**, and only the decision is missing.

**This node will not take it.** The toggle changes what `0.8` renders in every tile and what `7.1` renders in block 6, and `D-69` already left two of our own decisions pointing opposite ways. **A control that rewrites two published nodes is not a settings row, it is a decision with a settings row attached.** So the page renders the absence with the reason, and **the cost is on the page rather than only in the node**, because it is a fact about that person: today the product puts their name on every win in the feed and on every shared result and they cannot stop it.

### The baseline changed under us between two dated captures

| Capture | The row |
|---|---|
| `acct_settings_security_linked.png`, 18 August 2026 | **Facebook**, labelled and glyphed |
| `acct_settings_linked_22aug.png`, 22 August 2026 | **Discord**, labelled and glyphed |

**Neither record is corrected, because both are right on their own date.** **This is the case the dating rule exists for:** a source with a date survives the thing it describes changing, and a source without one becomes wrong silently. Both shots are filed beside each other.

**And `D-55` shipped the newer set four days before it appeared in our own baseline.** It chose Steam, Google, Discord and X on 21 August from three competitor modals, not from this product. **What was a divergence on 21 August is a match on 22 August**, and it is recorded as a coincidence rather than as a source: nothing in that decision claims the baseline, and nothing built changes either way.

### `D-55`'s debt reaches a fourth surface

That record printed three unbuilt states as its price: **no Steam linked** on `5.3`, **Link Steam** on `5.1`, and somebody with no Steam linked about to spend on `4.1`. **None is built.** This node adds a fourth, because **the one field it holds cannot be filled by an account that has no Steam identity at all.** Drawn here as a state, with the act routed to `5.1` which owes it, rather than built here.

### A third AAA link fix, and it becomes one rule instead of a third selector

`D-77` expanded the small button after three nodes claimed AAA 44 and it shipped at 32. `D-80` expanded the cookie policy link at 23. **This node met it again on the trade URL helper at 16.** Three one-off selectors for one rule is how the fourth one gets missed, so it is one class from here.

**And the rule is scoped honestly:** it applies to a link standing as a control, not to a link inside a sentence. WCAG's target size criteria exempt a target whose size is constrained by the line height of the text around it, and forcing 44px onto an inline link would overlap the lines above and below it. **All three of these were standalone.**

### Measured

**58 checks over the four pages at seven widths.** No horizontal overflow. One H1 each. **One column at every width, asserted by geometry rather than by eye:** every block starts below the one before it, on all four pages, at all seven widths. A real `<input>` with a real `<label for>` and **no placeholder doing the label's job**. The value unmasked and wrapping. **No control inside the stated absence and no control in the route list.** Nothing on the page counts anything. Every target 44px or more. `noindex` on all four.

**And the field was walked at 360 and at 1200:** typing and blurring commits nothing, a value Steam will not accept is refused on the press with **which part is wrong named**, the refused value stays in the field so the person can look at it, a value it will accept saves and clears the invalid mark, and an empty press says what is missing rather than nothing.

### Two things went to the founder

**Whether `5.11` survives at all.** It holds one block. If the trade URL should live only on `5.3`, this node is cut and the account menu loses a row, and the rule that put the row there applies again in the other direction. **Recommended: keep it**, because a field that only exists inside a flow can only be corrected by re-entering the flow.

**And whether a person can turn off their public appearance**, which is `7.1`'s open item, not this node's, and which the baseline shows the live product answers with a control.

---

## D-82. The founder's screen review of 23 August 2026: one broken stylesheet, four pages that said too much, and the argument section 2 of `3.1` had already won

**Date:** 2026-08-23. **Stage:** 04, between step 9's collection and its fixes. **Decided by:** the founder, on five things, looking at the drawn pages. **Binds:** `wireframes/_wf.css`, nodes `0.3`, `0.4`, `0.10` and `3.1`, and it deletes one page and adds one.

**This entry is one decision with five parts because it was one pass.** The founder opened the prototype, and everything below came out of looking at it rather than out of reading a table.

### The stylesheet had not parsed since the ticker was rewritten, and no instrument caught it

**`padding-top` on `.wf-main` computed to `0px` on all 106 pages, at 360, 1024 and 1440.** The first block of every screen touched the header seam and at 360 the last one touched the foot.

**The cause was not a value.** Lines 460 to 486 of `_wf.css` held a superseded draft of the ticker that had lost all five of its selectors, leaving five declaration blocks with nothing in front of them. CSS error recovery then reads forward to the next `{` looking for a selector, **and the rule it swallowed on the way was `.wf-main { padding-block: var(--wf-s-2) }`.** The live ticker rules live 1900 lines further down and were never touched, which is exactly why nothing looked broken enough to investigate.

**Eight instruments ran over this file the day before and none of them found it.** Three Codex passes, a clean-context reader, three browser auditors and a grep. The audit asked whether values drifted from their tokens, whether a state was absent, whether a rule was violated. **Nobody asked whether the file parses.** A stylesheet that parses to fewer rules than it contains is not a contradiction between two files, it is not an orphan and it is not a broken link, so it fell through every class in the taxonomy.

**What was also wrong was that the dead draft's comments were still being read as documentation:** they cited 92px tiles and 44px artwork against the live block's 128px and 34px. Deleted rather than reattached to selectors, because the rules they described are not the rules that ship.

**One value changed deliberately, named as the convention requires:** `.wf-main` at 1200 and up, `padding-bottom: var(--wf-s-4)` becomes `padding-block: var(--wf-s-4)`. The header is sticky, and 16px above against 40px below reads as a mistake rather than as a decision. Mobile keeps 16px.

**And the second syntax fault, `}}` on `.wf-won-card .wf-won-art`, cost nothing:** a stray brace at top level is discarded. Fixed anyway. **The file now parses with zero orphans and depth zero, and that check is worth keeping as an instrument in its own right.**

### Node `0.3`: the response was printed to the person, and the search was a second job

**Three rows, Status, Served at and Retry-After, rendered in the body of every system page.** That is the machine half of a response shown to the human half, which `D-66` forbids in as many words and which the 22 August audit raised as process prose on the product surface. **The node's own argument for drawing them survives and moves:** they are kept as each page's annotation, so a reviewer still reads the response against the words beside it, and a person never does. **The block was also redundant: the address bar already shows the served address**, which was the load-bearing half of the argument.

**The search field is off the 404.** It worked, it filtered twelve real names and its empty result was a state with a page of its own, and none of that was the objection. The page exists to say one sentence and offer one way out.

**`system-404-noresult.html` is deleted and `SYS_CASES` went with it.** A state whose subject is gone is deleted, not carried as an empty page. **Eight pages become seven.**

**The two quick-link cards become two buttons, Home primary and All cases beside it.** The destinations did not change and could not: the transitions row holds `1.0` and `3.1`, and a carrier may not promise a destination the map does not hold. **This also answers section 9's open item on a third destination, and the answer is no.**

**`system-500-noshell.html` keeps the stacked list, and that is not an inconsistency.** Its whole subject is a 500 where the carriers do not render, and there the body is the only thing certain to.

### Node `0.10`: two forms side by side, and a person with a question met an appeal they had not made

**Fourteen fields over two forms, with a `[?]` deadline as the first thing on the page.** The entry page now carries one form and the FAQ above it.

**The appeal keeps every field it had, on `support-appeal.html`.** The refusal that mattered is untouched: **a selector that rewrites required fields under a person is still refused**, so the subject navigates rather than mutating the form. A prefill that is never carried across a state change cannot be lost in one.

**The FAQ moved above the form because the live product is right and shouts.** Its yellow ATTENTION!!! box tells a person to read the articles first. Making the answers the block a person meets does the same job without telling anyone off.

**The deadline moved under the Send.** It is still the entire difference between this page and a help page, it is still a deadline for an answer rather than a resolution, and it is still not published. What changed is that a figure nobody has yet is no longer the first thing read.

**The three cross-link buttons are gone.** The footer carries all three destinations in its own columns, on this page as on every other.

### Node `3.1`: section 2 wins its argument back, and it took a screenshot to do it

**Section 2 of `catalogue.md` refused a daily banner on one ground: a banner survives every filter and a case does not.** `D-68` overrode it on 21 August, put the ladder in as a panel outside the list, and printed the cost in the node rather than absorbing it.

**The founder narrowed the shelf, saw the panel standing over two results, and the printed cost turned out to be the whole objection.** The panel is off `catalogue-filtered` and `catalogue-empty`. **The ladder is not cut, it is scoped:** it keeps the unfiltered shelf, where it competes with nothing.

**The Daily jump chip goes with it, and in the empty state the whole jump list goes**, because a jump to a heading that is not on the page is a dead control and section 4 had already written that rule for emptied categories.

**And a sentence in the SEO prose on all seven catalogue pages was corrected:** it said the daily case sits in the grid rather than in a banner, "so it is filtered and searched like any other case". That had been false since `D-68` took the tile off. **A sentence describing the design before last is worse than no sentence, and it survived a full audit the day before.**

### Node `0.4`: the band gets shorter and the symmetry does not move

**240px at 1440 and 260px at 360, plus a 300px reserve on the host page, for a question with two answers.** Layer 1 is one band above 900 now: words left, decisions right, **141px**. The reserve follows the measurement, 160px above 900 and 260px below.

**What may not be traded for the height is written into the node rather than left to taste.** Accept and Reject stay one grid of equal columns, the same class on both, neither primary. The CNIL finding of 14 December 2021 is that banners do not let a person refuse as easily as accept. **A shorter band may not be paid for with a smaller refusal**, and stages 06 and 07 inherit that as the hard half of the row.

**Layer 2's two decisions are pinned to the foot of its scrolling region.** At 360 both sat around 300px below the region's own scrollport, so a person had to scroll a fixed band to find either answer. That was a 22 August audit finding and it is closed here. **It is the same symmetry read as a scroll position rather than as a width.**

**And `--wf-measure` is off the say text above 900, only there and with the reason written beside it:** 68ch held one sentence to three lines inside a column twice that wide.

### What this pass says about the audit that ran the day before

**Four of the five parts were already in `critique.md` as raised findings.** Process prose on the product surface, a dead control, a 360 failure, and a rule the stage wrote for itself and did not sweep. **They were collected, deduplicated and prioritised, and the fix had not started, so the founder found them again by opening the pages.** That is the audit working and the queue being too slow, not the audit failing.

**The fifth was invisible to all eight instruments.** The stylesheet parse is added to the contract checklist as its own line: **a file that parses to fewer rules than it contains passes every check that reads it as text.**

---

## D-83. Vertical rhythm becomes two rules instead of twenty missing ones, and it is the fifth time position beat intention in this stylesheet

**Date:** 2026-08-23. **Stage:** 04, the second half of the founder's screen review. **Decided by:** the founder, pointing at one gap on `3.1` filtered. **Binds:** `wireframes/_wf.css`, `wireframes/docs/conventions.md` section 1.2a, and every page in the stage.

**The complaint was one arrow between a count line and the note under it.** Measured, it was twenty distinct pairs of adjacent blocks touching at under 12px, across the built set: a breadcrumb on its H1, a chip row on the count, a table on the note that qualifies it on nineteen pages, two stacked notes 8px apart reading as one note that wrapped.

### Why there was nothing to fix block by block

**Every block carried its own answer or none.** `.wf-sec` owned 40px as padding, `.wf-cats-sec` owned 40 as a margin, `.wf-crumb` owned 16 as padding, and `.wf-count-line`, `.wf-sec-sub` and half the rest declared `margin: 0`. **A rhythm that lives in twenty places is twenty places to forget**, and this stage forgot it in twenty places.

**So it is one declaration per level, on the container.** 24 between the page's own blocks, 16 between the parts of one section, and the 40 that separates sections left where it already was. **Three steps and each one has to be told apart from the other two**: 8 and 16 are what separates lines inside a block, 40 is what separates one argument from the next, and a block boundary is neither.

### The `:not()` pairs are the rule, not decoration on it

**A flat `.wf-main > * + *` was written first and it moved exactly the blocks that did not need moving.** Half the blocks on these pages declare `margin: 0` later in the file at equal specificity, so they won, and the ones with no margin at all were the ones that already had space.

**This is `D-62` for the fifth time.** In this file a flat rule later beats a media query or an earlier rule on equal specificity, and the answer each time has been to make the intention outrank the position rather than to move the rule and hope. **`.wf-cats-sec + .wf-cats-sec` now carries a `:not()` it does not otherwise need**, purely so a category boundary keeps its 40 against a page rhythm that would flatten it to 24. That is written beside it rather than left as a puzzle.

### Three exclusions, and each is a statement about what the thing is

`.wf-sec` owns its 40 as padding, so a margin on top would make one boundary 64 while every other is 24. **`.wf-sec-sub` is the deck of its heading, not a block**, and 24 between a title and its own second line reads as two things. **`.wf-sec-foot` is the route out of a block** and keeps the 24 that lifts it clear of the block's last line.

### Measured

**Twenty sticking pairs at 1440 before, zero after**, scanned over all 106 pages across two levels of nesting, ink to ink rather than box to box.

**The same scan at 360 found three more that 1440 could not show, and one of them was a real defect.** `.wf-wd` declares its two columns at 900 and up and declared nothing below it, so on seven withdrawal pages the side panel sat flush against the last line of the main column with no gap at all. It is one column with the page's own 24 now, two columns with 40 above 900. **A layout that only exists above a breakpoint has no layout below it, and that is not the same as having a simple one.**

**The two that remain are deliberate and stay.** Inside the home banner at 360 the artwork, its countdown and its line sit 8px apart, which is the caption relationship inside one component rather than a boundary between blocks.

No horizontal scroll at 360 or 1440. No page with zero top padding. The stylesheet still parses with zero orphan declarations and brace depth zero.

**And the scan is worth keeping as an instrument, at both widths.** It found seventeen pairs the founder had not seen, on pages they had not opened.

---

## D-84. The account band and its tab strip are inherited, rendered as a carrier, and the money is on cluster 5 twice on purpose

**Date:** 2026-08-23. **Stage:** 04. **Decided by:** the founder, putting the live account screen beside ours. **Binds:** nodes `5.1`, `5.9`, `5.10`, `5.11`, thirteen wireframes, `_nav.js`, `_wf.css`, and it owes `0.13` a corrected row.

**What node `5.1`'s baseline row said, in its own words:** the four tabs are four nodes on our map since `D-36`, `5.1`, `5.9`, `5.10` and `5.11`, "so the tab strip is not inherited either". **That inference is wrong and the reversal is the reason why: four nodes on a map is not an argument against a carrier between them, it is what makes one legal.** Every destination the strip promises exists on the map, which is the test `CLAUDE.md` sets for a carrier.

**The account menu and the strip are not the same carrier doing the same job.** The menu is how a person enters cluster 5 from anywhere in the product. The strip is how they move between the four once inside. The baseline runs both.

### It is rendered, not pasted, and that is the load bearing part

**A strip that exists on one of four peers is a dead end on the other three.** So it is not markup in `account.html`: it is `renderAcctHero` in `_nav.js`, on all thirteen pages of the cluster, each declaring `window.WF_ACCT = { active: ... }`. **Thirteen copies of one band is thirteen places for it to drift**, which is the same argument that put the shell, the footer and the bar in the renderer.

**The active tab is a `span`, not a link.** A tab that navigates to the page you are already on is a control that does nothing, `D-58`.

### The money renders twice on cluster 5 and the cost is printed rather than absorbed

`0.1` and `CLAUDE.md` give the money to the header, and the header is sticky. So on these thirteen pages the same two figures appear as chrome above and as the page's own subject in the band. **The baseline does exactly this and the founder asked for it in as many words.**

**What may not happen is the two disagreeing, so both read one source**, `WF_SHELL.money`. The band cannot say one thing while the header says another, which is the failure this would otherwise be.

### And one thing this node cannot fix from here

**The band carries a visible breadcrumb and `0.13` says this page has none.** It ships as wayfinding with no `BreadcrumbList` schema, so the schema half of the register's row stays true and the visible half is now false. **`0.13` owes a corrected row.** Recorded rather than quietly written from a node that does not own it.

---

## D-85. The inventory is rebuilt on the baseline's card, the selection bar stops hiding, and sorting comes back on a narrow reversal

**Date:** 2026-08-23. **Stage:** 04. **Decided by:** the founder, screen by screen. **Binds:** node `5.1`, `account.html`, `-empty`, `-degraded`.

**The first rebuild kept our own anatomy and lost to the baseline on the only thing that mattered.** Every card carried two timestamped figures and a holding line, six pieces of text and two moments. **In a grid of them that is a table with pictures: the live card is read at a glance and ours had to be read.**

### The face is five things and the receipt is not one of them

Artwork, weapon, skin, wear in parentheses, one price, then the market foot the baseline runs. **The as-of is said once for the whole grid rather than printed on every card:** gap `A1` asks for a reference price with a moment attached, not for the same timestamp six times.

**The receipt moves into the actions panel and it is not cut.** `F2` and barrier `B7-1` are the whole reason this node exists. `B7-1` is retrospective by nature, a number that stopped being true, **so the receipt is read at the moment a person decides what to do with the item** rather than on every tile of a grid nobody is reading yet.

### Hover is the shortcut and selection is the mechanism

**The whole card is the hover target, not the picture inside it.** A person moving a pointer at a grid aims at the card, and making the artwork the only live area meant the actions flickered as the pointer crossed the name.

**And hover is never the mechanism.** It does not exist on a touch screen, so the panel also opens on `:has(:checked)` and on focus, which is what the baseline's own "click on the item to select" describes.

### The bar stops hiding, and the earlier argument was half right

It first shipped hidden until something was ticked, on the ground that a bar saying nothing is a band of furniture. **That missed what the bar is for: it is where a person learns the exits exist.** Hidden, four exits are invisible to anyone who has not already guessed that items are selectable.

**With nothing ticked the actions are unavailable and the bar says why.** That is not the dead control `D-58` forbids: **a dead control has no state in which it works**, and each of these works from the first tick. The line beside them is what makes the difference visible instead of assumed.

### Sorting is reversed narrowly, and the distinction is the whole reversal

Section 4 of the node refused sorting because an inventory is bounded by what one person opened. **Sorting is not filtering.** A sort reorders the same set, so it cannot manufacture the second empty state with no parent that section 4 was actually protecting against. A filter would. **There is still no filter.**

### Three costs printed, not absorbed

**`Exchange` is drawn disabled.** `D-58` took every dead control off this product and a switch that cannot move is the case it names first. The founder wants it standing so it can be activated the day exchange ships, **so the reason renders beside it**: a disabled control with no explanation is precisely the theatre the rule was written against.

**`CASH-OUT` is not drawn at all.** Paying out to real money has no row in `cjm-to-be.md` and no node on the map, and drawing it would invent a capability at wireframe stage. The promoted third party slot beside it is not ours either. **Section 8's open item, four exits against our one, is now four against three.**

**One column at 360 where the baseline runs two.** `D-52`: a button label never wraps. Their five actions are unlabelled circles, so two columns cost them nothing; ours are words and `Send to Steam` needs 152px before it breaks. **The divergence is the label and the column count follows it.**

### Three defects the browser caught and reading would not have

**The actions panel covered the card's own checkbox.** A person could open the actions and could not select or deselect the item under them.

**`aspect-ratio` together with `min-height` resolves by growing the width.** At 1024 that pushed a 224px card to a 267px image and put a horizontal scrollbar on the page.

**The column count was set by the viewport and not by the card.** Three columns at 900 gave each card 200px, and the receipt inside the panel wrapped to a third line and clipped. **A card has a width below which its own contents stop fitting, and the grid stops before it.**

**Measured:** 106 pages at 360 and 1440, no horizontal scroll, no page with zero top padding, the panel fitting its slot at four widths with the item's name still visible under it, the bar counting and summing from the cards themselves so grid and bar cannot disagree.

---

## D-86. The country control comes back, and it comes back as a statement the person makes rather than as the geo control

**Date:** 2026-08-23. **Stage:** 04, node `5.11`. **Decided by:** the founder, in one sentence: the declaration is our lever, and a false one is a ban. **Binds:** node `5.11`, `4.1`, `0.10`, `0.12`, and it reverses one of `D-81`'s three refusals.

### What `D-81` refused, and the half of it that was right

That record refused `Your Selected Country` as "the sharpest refusal on the page", on this ground: **a self-declared country a person can change is the geo control handed to the person being controlled, which is not a stricter version of `D-23`'s allowlist, it is the absence of one.**

**That is still true and it is not what the control is for.** The founder's answer is that the declaration was never meant to decide access. **`D-23` decides access and nothing else does.** What the declaration adds is a statement with the person's name on it, which turns a false one into a breach of terms and a ground for closing the account. **That is a lever the product did not have, and `D-81` argued only against the reading it does not need.**

### Three conditions, and without them the reversal recreates the thing it was refused for

**One. The selector offers launched markets only.** If it can name a market with no row, the declaration opens access and it is the geo control by the back door, which is exactly `D-81`'s objection. Declaring a market we have not opened lands on `2.1`'s `not launched`, never on a working product.

**Two. One answer per account.** `baseline-account.md` section 5b.6 walked **two self-declared countries in one live account that disagree**, because the deposit step carries its own field: settings says United States, deposit step 1 says Ukraine. That was a curiosity while nothing hung on it. **With a ban on the other end of a false declaration it is a defect that bans people over the product's own contradiction.** `4.1` reads this field and offers no second one.

**Three. The ban is a decision and it owes a written ground.** Barrier `B8-3` is three reviews of accounts banned with no explanation, and node `0.10` exists because of them. **"The country you declared does not match where you are" has to be a named ground that renders in the appeal form's quoted-back field**, or we have rebuilt the exact barrier this product is designed against, with our own name on it.

### And the rest of `5.11`, rebuilt on the baseline's shape

**Two columns from 1000: what a person sets about themselves on the left, what the product may send them on the right.** The split is by who acts, not by topic.

**One live switch in Notifications, and its parent is not a feature request.** The baseline runs eight and `D-81` read every one: six are over capabilities that are `LATER`, and the two with live subjects are the confirmations before selling and before withdrawing, refused on design principle 3 and still refused. **What earns a control is the marketing channel itself**, which the profile now carries: a channel that sends promotional messages owes a way to stop them, and consent that cannot be withdrawn as easily as it was given is the finding `0.4` is built around.

**System messages have no switch and the row says why.** It is the cookie node's strictly necessary row arriving a second time: a disabled control is theatre, so the row states what it covers and takes no answer. **A person cannot opt out of being told what happened to their own money.**

**Linked profiles is a statement, not four rows of controls.** `D-55` chose Steam, Discord, Twitter and Google for the sign in surface, and **linking a second provider to one account has no row in `cjm-to-be.md` and no node on the map**, so three of those four would be controls over nothing.

**And the page prints what it refused**, seventeen rows in a block named for it, because a settings page that quietly drops them is one nobody can audit against its own baseline.

### One raised finding closed on the way

**The trade URL field was an `<input>` and this node's own copy promises the saved value "wraps rather than truncating".** An input cannot wrap. At 360 it hid 46% of the URL and the hidden half was `?partner=...&token=...`, **the only part worth comparing against what Steam shows**. The 22 August audit raised it. It is a `textarea` now: same value, same press, and the whole 75 characters visible at 360 and at 1440 with no internal scroll.

---

## D-87. The profile is rebuilt on the baseline's shape, and the messages panel is the first capability an orphan page has ever been the first home of

**Date:** 2026-08-23. **Stage:** 04, node `5.10`. **Decided by:** the founder, twice: "нужен блок с нотификациями маркетинговыми и системными", then "делать профайл как на деддискинс". **Source:** `acct_profile_daily.png`, the founder's capture of 21 August 2026, cited by shot and date. **Binds:** node `5.10`, and it amends two sentences the node wrote about itself.

### What the baseline's Profile tab actually is

Two blocks side by side under the account band. **Left, a card headed `DAILY CASES`:** a ring with `0` in it, the line "Next level up at `5.00` wager", and an `OPEN` control. **Right, a panel with two tabs, `PROMO` and `SYSTEM`,** headed `MARKETING MESSAGES`, carrying `Mark all as read` and `Delete all`, and an empty state of an envelope and `NO MARKETING MESSAGES`.

**Ours is that shape.** Daily entry on the left, messages on the right, the record of who this account is beneath the daily card. **On a phone the DOM order is the mobile order and it is not the desktop one:** what changes today comes first, what never changes comes last.

### The cost, and it is the largest single cost this node has taken

Node `5.10` was written with a rule about itself: **"An orphan may not grow. Every block below has to be either a fact the product already holds about this account or a control that already exists somewhere else on the map. Nothing on this page may be the first home of a new capability, because a capability whose only justification is a page that has no parent has no parent either."**

**The messages panel is the first home of a new capability.** There is no notifications row anywhere in `cjm-to-be.md`, no barrier asks for an inbox, and no job needs one. It is here because the founder asked for it directly, **which is the same ground `D-36` put the page itself on**.

**The treatment is `D-38`'s and it is applied without softening.** The capability ships with the empty parent printed on the page and in the node, and **no backlog row is retro-fitted**: `cjm-to-be.md` stays at 40 MVP rows over 39 capabilities and the count is not quietly moved to make this look sourced. **An orphan carried honestly is a different thing from an orphan dressed as a job.**

### One half of it does have a parent, and it is worth separating from the other half

**The `SYSTEM` tab stands on `B8-2`, waiting with numbers.** Six people in the ledger with hard figures: 30 hours, 7 days, 2 to 3 days, 9 days from last deposit, 16 hours, almost 3 weeks. **What every one of them describes is not slowness, it is silence.** A product message that says the withdrawal is still with Steam, that an open stopped part way and the item is already yours, or that a bank refused a top up, is the answer to that barrier and it is the one block here that a barrier asked for.

**The `PROMO` tab has no parent at all.** It is the marketing channel, and it is the orphan.

**And that split is not cosmetic, because it decides two controls.** `Delete all` exists on promo and does not exist on system: **a product that lets you erase its own notice can afterwards say it told you.** The system tab's row says so in words rather than showing a disabled button, which is `D-58` and the cookie node's strictly necessary row for the third time.

**One further guard, and it is ours rather than the baseline's.** A promotional message never reaches an account with a deposit limit, a session limit or a cool down in force. **A channel that keeps talking through a boundary is the boundary doing the opposite of its job**, and it is `D-25` rule 2 applied to a different carrier.

### The five tiers do not travel, and this is the second time that rule has decided something

The baseline's profile shows the daily mechanic **compressed**: the count, the wager figure and the control, and **no ladder**. Ours does the same, and the reason is written rather than copied. **`D-25` rule 3: "A tier gives a case, and nothing else. No badge, no title, no rank against other people, no public tier on a profile. The moment the tier becomes an identity the ladder has stopped describing an entitlement."**

**This is the page whose whole subject is who this account is.** A tier rendered here is a rank whatever it is called. So `0.15` renders on `1.0` and on `3.1` where it is an offer, the count and the wager figure travel here because they are facts about an entitlement, and **the absence of the five rungs is rendered on the page rather than left as a silence**, with the route to where they live.

### And the node's own refusal on counters is narrowed rather than broken

`5.10` refuses "any counter: cases opened, best drop, days here, level", on the ground that a counter is a score. **Two numbers on this page are counters and neither is a score.** The wager figure is money in coins, which `D-25` already settled against `0.11` rule 7. The unread count on a tab counts messages addressed to this person that they have not opened, **it goes to zero when they read them, and nothing accumulates.** The refusal now reads: no counter that measures what this account has done.

### What changed in the node, named because an unnamed amendment is how a specification stops describing its own page

| Sentence in `5.10` | What happens to it |
|---|---|
| "Nothing on this page may be the first home of a new capability" | **Amended.** It is now the first home of one, by founder decision, with the empty parent printed. The rule holds for everything else on the page |
| "Nothing here becomes two columns, because five short blocks in two columns is a dashboard, and this page is a record" | **Amended.** The reason held against what the page was. A list that grows, beside a short record, is a reading surface and not a dashboard. Two columns from 1000 |
| Section 5 B, the H2 order | **Rewritten.** Your daily case, your messages, who this account is, what a stranger can see |
| Section 2, the state table | **Two rows added.** No messages in either tab, which is the state the baseline capture was actually taken in and the state every new account is in |

### One state page added and it is the one the source shows

`profile-quiet.html`. **The capture the whole of this record is built on is the empty state**, so the populated page is the reasoned one and the empty page is the walked one. **Both tabs empty say different things:** an empty promo tab is a channel that has not spoken, an empty system tab is the far better news that nothing has gone wrong with this account's money, and saying that is worth more than an envelope.

### Owed, and printed rather than drawn

**Nothing anywhere else on the product says a message is waiting.** The account control `0.1` and the tab strip `D-84` are the two carriers that could hold an unread marker, and both belong to other nodes. **An inbox with no signal outside itself is a room nobody walks into**, and drawing the marker here would decide another node's carrier from inside this one. It is listed as owed by `0.1`, and the count on the panel's own tabs is the whole of the signal until it is.

---

## D-88. History gets all four tabs, three of them find a parent the node had not looked for, and the node had been measured against the wrong surface

**Date:** 2026-08-23. **Stage:** 04, node `5.9`. **Decided by:** the founder, in two words, "всі чотири", after the argument for three was put and lost. **Source:** `acct_history_inventory.png` and `acct_history_deposit.png`, the founder's captures of 18 August 2026, cited by shot and date. **Binds:** node `5.9`, `0.1` row 2, `0.13`, `sitemap.md`.

### The argument that lost, and it deserves to be recorded as put

Stage 04 proposed **three** tabs, rolls, deposits and withdrawals, and refused the fourth on the ground that cash out has no subject anywhere on our map. **The founder chose four.** The refusal was not wrong about the fact and it was wrong about what follows from it: **a tab with no subject is a thing we can render honestly, and a tab silently dropped is a thing nobody can audit.**

### The finding that fell out of asking, and it is the largest one here

**The baseline has two history surfaces and this node had been compared against the wrong one.**

| Surface | Tabs | Source | What they are |
|---|---|---|---|
| **The public profile** | Inventory, Case battles, Gunfights, Upgrades | `baseline.md` section 9.9, founder capture 21 August | **Mode histories.** Four grids of item cards, one per game mode |
| **The account** | Inventory, Deposit, Withdraw, Cash-out, CS:GO skins deposits | `baseline-account.md` section 4, founder capture 18 August | **Transaction histories.** One item grid and four ledgers |

**`5.9` is a private account page, and its baseline row cites the public one.** It says the baseline runs "four history tabs and every one of them is an inventory history", which is true of the public profile and false of the account. **The right source had been in the repository since 18 August**, five days, and it describes the surface this node actually is.

**Nothing built on the wrong row was wrong**, which is why it survived: the argument that an inventory history is a roll with the roll removed holds against both surfaces, because both first tabs are one. **What was lost is everything the account surface holds that the public one does not**, which is three tabs, and the founder had to point at them.

**And the rule that let it happen is worth naming.** `CLAUDE.md` requires every node to carry a baseline row. **It does not say which surface the row is about.** For a private node compared against a public page, the row reads as sourced and is about a different screen. Candidate line for the stage close.

### The four, and three of them have a parent the node had not gone looking for

| Tab | Parent | What it is |
|---|---|---|
| **Rolls** | `F3` and Related Job 3, unchanged | The node as written. **A row is a roll, not an item** |
| **Deposits** | **`B4-3`, money leaves and does not arrive.** Pattern of 4 across 3 platforms: "I've deposited $25 through Crypto, nothing. I've waited a few hours, nothing... The ticket is closed, still $0 added to balance" | Every payment, arrived or not, with its state and both references |
| **Withdrawals** | **`B8-2`, waiting with numbers.** Six people in the ledger with hard figures, and what every one of them describes is silence rather than slowness | Every item sent to Steam, with **who it is waiting on** and how long it has been |
| **Cash out** | **None, in any of the three classes** | A rendered absence, below |

**So the three-tab proposal was refusing two capabilities with real barriers behind them.** Neither is a new capability: `4.1` and `5.3` are both round 1 nodes with drawn states, and what was missing was the place a person reads their own record of them afterwards. **The deposit ledger is the answer to `B4-3` and the withdrawal ledger is the answer to `B8-2`, and both barriers are about not being told**, which is the same shape as `D-87`'s system messages one screen over.

### The fourth tab, and why it is not a dead item

**Turning coins back into money is not a capability anywhere in `cjm-to-be.md`, and the only capture of that tab is empty**, so the source cannot say what a row of it would even hold. **Two readings, and the panel prints both:**

- **Taking a balance out as money**, to a card or a wallet. Nothing on this product does it, and **what one coin is worth in real money is not published either**, so the tab has no subject and no unit.
- **Selling an item back for coins**, `D-38`. That one exists and it is already recorded: the roll it came from carries it, on the Rolls tab.

**A tab that renders only "History is empty..." is the pattern `0.5` and `3.2` both refuse**, and it is exactly what the baseline does on three of its five. Ours says what the tab is for, that neither reading is built, and where the one that exists is already written down. **That is an absence a person can read, and the difference from a dead item is that a dead item promises something.**

### What the rename costs and why it is right

**`/roll-history` becomes `/history`, and `0.1` row 2 and the account strip read History.** A destination whose label names one of the four things behind it is a promise that under-describes, which is the same defect as one that over-promises with the sign reversed. **The node keeps its number and its owner**, and `0.13` owes the URL row along with the three it already owes.

### The refusals that hold, and one that now binds three more lists

**No total, no net, no profit, no ratio, no streak, on any of the four tabs.** The node refused these for rolls on the ground that a lifetime figure is the strongest completion mechanic this product could ship. **Three ledgers make the temptation larger, not smaller:** deposited against withdrawn is one subtraction away on the deposits tab, and it is the same number wearing an accountant's clothes.

**Each tab carries a count and never a total**, which is the node's own block 1 rule applied four times.

**The deposit tab says it cannot be reconciled against a bank statement**, on the panel, because the peg is unpublished. **A ledger of amounts in a unit with no rate is a ledger you cannot check**, and saying so is `D-28` arriving on a fourth surface.

### Two defects the browser caught

**A skin name was rendering in a code face.** `.wf-table td` is 0,1,1 and the class that excepts it was 0,1,0, so the exception lost. **`D-62` for the sixth time**, and the first time it has been visible in the render rather than in a measurement.

**At 360 a timestamp was shredded into `14:4` and `0:07`.** `overflow-wrap: anywhere`, which a reference needs and a figure must never have. **The table scrolls inside its own wrapper instead**, which is what the wrapper is for, and the page still does not scroll at any width.

---

## D-89. Six rejections in one sitting, five of them the same mistake, and two live defects that every instrument passed

**Date:** 2026-08-23. **Stage:** 04, nodes `5.1`, `5.9`, `5.10`, `5.11`. **Decided by:** the founder, opening the published prototype and pointing at six screens in one sitting. **Sources:** the founder's captures of the live product, `acct_inventory_item_actions.png`, `acct_settings_top_22aug.png`, `acct_settings_linked_22aug.png`, and four screenshots of our own pages taken on 23 August 2026.

### The through-line, because five of the six are one mistake wearing five faces

**Nothing was missing on any of these screens. Everything was in the wrong layer.**

| Screen | What was wrong | What it actually was |
|---|---|---|
| `5.1` the item card | The actions floated over the artwork, on top of the receipt line, pushing the item's own name below them | **A panel over the thing it acts on** |
| `5.1` the sort | Four orders inside a `select` | **A control hidden behind a press**, so a person has to open it to learn that sorting by value exists |
| `5.9` history | Four tabs inside one page | **Three states nobody could link to**, so the registry could not list them and the panel could not show them |
| `5.10` the record | Avatar and display name repeated under a band that already carries them | **Two renderings of one fact**, and they disagreed |
| `5.11` settings | Nineteen refused rows collected in one block at the end | **The absence exiled from where a person looks for it** |

**Each of those was defensible in prose and wrong on the screen.** That is worth saying plainly rather than filing five separate lessons.

### And the instruments passed all of them, which is the finding that outlasts this session

**Acceptance here is: open it in the browser, walk every state, narrow to 360, then check the published address.** That ran on every one of these pages and every one passed, because the assertions ask whether the page scrolls sideways, whether it has one H1, whether a target is 44 pixels and whether a label wraps. **None of them asks whether the thing looks like something a person would use.**

**Two of the six were not taste at all. They were defects, they were live on the published site, and the same assertions passed them too.**

**One: `[hidden]` does nothing to an element with a display rule.** `[hidden]` is a user-agent rule, and the author rule `.wf-hist { display: flex }` beats it. So the rolls panel marked hidden went on rendering, and the founder's screenshot shows **Deposits selected with the rolls list underneath it**. The sweep checked that the tab strip rendered and that the selected panel appeared. **It never checked that the other one had gone.**

**Two: one account with two names and two ids on one page.** The account band read `Spectacle` and `ID 953709`; the record card ten pixels below read `nightjar_cs` and `acc-7f3a91c4`. **This is the third instance of one class:** the header once read 18.60 for the value of items held while the page read 130.60, and the fix then was to make the shell read the page. **The class is two renderings of one fact with no shared source**, and the answer is the same every time: one source, both read it. `WF_WHO` holds identity now.

**Both belong to the same gap: an assertion that reads one element cannot catch a contradiction between two.** The sweep gained a rule for the money figures after the first instance and it was written for money rather than for the class. Candidate line for the stage close.

### `5.1`, the item card, rebuilt on the live product's own composition

**The tick and the share on the top row, then the weapon, the skin, the wear and the price, then the three acts, then the two market figures at the foot, and the artwork behind all of it.** That is `acct_inventory_item_actions.png` and it solves by construction three things the floating panel solved by arithmetic.

**The acts reserve their space with `visibility` rather than arriving with `display`.** A card that grows on hover shoves the row below it and a grid of them ripples. **At rest the reserved band is where the artwork shows through**, which is exactly why the live product's two states are the same size.

**And the corner controls are in the flow now, not absolutely positioned.** The previous build had to raise them above the panel with a `z-index` because the panel covered the card's own checkbox. **In the flow that defect cannot recur**, which is a better fix than the one that worked.

**The receipt line comes back onto the face of the card.** It went into the hover panel to keep the face to five things. With the acts in the flow the panel is gone and the line has nowhere else to be, and it is what the value-gap barrier asks for: what this was worth when it was won, dated, beside what it is worth now, and no third number made out of the two.

### `5.1`, the sort, and why a select was the wrong control

**Both keys are on the screen, each carrying its direction, and pressing the active one flips it.** The live product does this and the founder asked for it. **A select hides three of its four options behind a press**, so the existence of sorting by value is itself hidden.

**The direction is a word and never an arrow.** This stage draws no icons, and a caret alone is a state carried by a shape, which is the colour-only rule one step further out.

**And the control is real: it reorders the grid.** A sort is the cheapest control in this product to make honest, because every card already carries the two values it sorts on. **Sorting is still not filtering**, so it cannot manufacture the second empty state with no parent that the node was protecting against.

### `5.9`, four pages instead of four panels

**The bug forced the question and the founder answered it in the same message.** Each tab is a page with its own states now, which is what makes them auditable: **a state that lives inside a panel nobody can link to is a state the registry cannot list.** Six pages: deposits and its empty, withdrawals and its empty, withdrawals past our own published ceiling, and cash out.

**The overdue state is the one worth building and it is built on an argument this project has already made once.** The support node earned its place because a published deadline with no state for its own failure is a number nobody has to meet. **A withdrawal ceiling is the same object.** So the page says we published 48 hours, this one is past it, it is our number and our failure, and it was not the person's job to notice.

### `5.10`, a record that reads like one, and the control the founder asked for

**The band owns identity, the card owns the record.** What the band does not carry is where the account came from, when it started and what a stranger can see, so that is all that is left in the card, as rows rather than as paragraphs.

**And the page gains its main action: see yourself as a stranger does.** The page's job is to let a person find out what we hold about them, **and the strongest form of that is showing them rather than telling them.** What it opens today is one of their own results as a signed-out reader sees it, **because whether a public profile page exists at all is still open** and this control does not settle it. The route survives either answer, which is the same treatment the block's text already had.

### `5.11`, the refusals move into the sections they belong to

**A block per section with an icon slot, and every option that section holds inside it**, which is the live product's shape and what the founder asked for. Username, where you live, the trade URL, language and sound; take a break, anonymity and sign out; the four providers with which one carried you in; and the notification groups.

**The nineteen refused rows leave the footnote and take row position in their own section, each with its reason on it.** The rule is unchanged and it is the one that matters: **a row whose subject does not exist carries no control at all, never a greyed one.** What changes is where the absence is stated. **You now meet it where you went looking for the control**, instead of in a block at the end of the page where a reader has already stopped.

**And the two refusals that are principle rather than scope say so.** The confirmations before selling a skin back and before sending one to Steam have live subjects and are still refused: a switch that removes the confirmation before value leaves the account removes a risk moment, and **it is set once in a calm minute and met months later at the worst one.**

### The icon is a slot, and that is not a placeholder

This stage draws no icons. **The room an icon takes is a layout fact and it is decided here**, so the slot is drawn at its size and stage 06 puts something in it. The founder asked for exactly that, in those words.

---

## D-90. The public profile is built against this project's own argument, and an MVP row is deleted by founder decision

**Date:** 2026-08-23. **Stage:** 04. **Decided by:** the founder, on five screens in one sitting. **Binds:** a new node `7.3`, nodes `5.9`, `5.10`, `5.1`, `7.1` and `0.8`, `wireframes/_wf.css`, `wireframes/_nav.js`, and row `F2` of `cjm-to-be.md`.

### `D-69` is settled, and it is settled against the node that refused it

**The founder: we need the public profile, not a link to a result.**

`D-69` left this product holding two opposite verdicts on one object for two days:

| Carrier | Verdict |
|---|---|
| `0.8`, the live feed | **Has one.** `D-59` gave the avatar that destination and printed `public profile: no node yet` on every tile of every page |
| `7.1`, block 6 | **Refuses one**, because "adding it would rebuild the trophy shelf this node was created to replace" |

**The founder chose the first, and `7.1`'s refusal is not deleted anywhere.** It stays in that page's own comment, in this record and in the node, with its reason intact. **It lost, it did not turn out to be wrong.** The baseline's profile is exactly what it warned about: an inventory history with four tabs, every item that account has won, priced, and nothing on it a reader can check.

### What answers the refusal is on every card, and it is the only reason this build is defensible

**Every trophy on the shelf carries a route to its own round proof.** That is the whole of the countermeasure and it is design principle 1 applied to the one surface built against a node's advice: the shelf exists, and nothing on it is a claim rather than a record. A stranger can recompute any line of it.

**And there is no total.** No sum of what the account has won, no rank, no tier, no position against anybody. `D-25` rule 3 says a tier gives a case and nothing else; the header money rule says two figures, never summed and never a score. **A shelf with a total at the top is a leaderboard with one row.**

### Four things the baseline's own profile does that this one refuses

**One counter, not three.** The capture's banner reads Cases, Case battles and Gunfights, and two of the three read `N/A`. Two modes that do not exist, rendered as empty figures, is the dead item defect with a number in it. Round 1 has one mode, so the banner carries one count and the absence is a sentence.

**The name is not printed twice.** The baseline repeats it under the avatar. Two renderings of one fact is how this project got a profile page whose band and card disagreed about whose account it was.

**The public id is not the account id.** The id on `5.10` is what support and an appeal refer to, and publishing it hands a stranger the string an impersonation uses. So the public id is a different value, **its format is `[?]`, and the node recommends opaque**: the live product's is a six digit number a reader can decrement, which makes the registered account total readable from outside.

**And the page is `noindex`.** `7.1` is noindex because indexing one object is pointless. This page is noindex because **it is about a person, and letting a crawler hold a list of what someone owns is a publication decision nobody made.**

### The open half of `D-69` moved and got sharper

`D-69` closed the question of how an account appears and left this: **whether they can turn it off, which no node says.** It was an abstract question while the only public surface was a shared result. It is not abstract now. **There is a page listing everything this account has won, it exists for every account, and it cannot be turned off.**

**There is no toggle and there will not be one until it is decided.** `D-58`: a control that does not do its thing is a picture of it. So both `7.3` and `5.10` render the absence as a sentence, on the page, where the person it concerns reads it. **Owner: the founder.**

### `5.10`, two founder corrections

**The three buttons go.** Settings, My items and History sat at the foot of the record column, and the account band at the top of the same page already renders a tab strip carrying exactly those three destinations. **Two carriers for one set of destinations, ten pixels of scrolling apart.** The founder saw no point in them and there is none.

**The messages list is bounded, and only where the two columns exist.** At 1000 and up this page is two columns: the daily card and the record on the left, the messages on the right. The left column ends and the right one keeps going, so **an account with twenty messages made a profile page twenty messages long**, with a column of nothing beside the bottom half of it. The list now scrolls inside itself at that width. **Below 1000 it does not**, because the columns are stacked and there is no mismatch to fix, and a nested scroll region on a touch screen traps the page's own scroll: that would be trading a real defect for a tidy one.

### `5.9`, every tab gets its own state set

**The founder: empty states and the rest, for all four tabs.** Three states were added, and none of them is a new subject. Each one already existed somewhere in this repository with nowhere to land.

| State | Where it already existed |
|---|---|
| An open that did not finish | `5.10` sends a system message saying exactly this and routes it to `history.html`, which had no state for it |
| Deposits, a boundary in force | `6.3` in force, read from the ledger's side rather than from the limit's |
| Withdrawals, account restricted | `G4`'s written ground and appeal, read from the ledger's side rather than from `5.6`'s |

**The unfinished open carries this project's first principle in one sentence:** the round settled before the animation ran, so an animation that stopped part way changed nothing about the outcome.

**Cash out gains nothing and that is correct.** It is already a rendered absence, it is the best-reasoned page in the set, and a second empty state for a tab that is entirely empty would be a page about a page.

### `5.1`, the third build of the inventory card, and the first two are both in the record

**Build one** floated a panel over the artwork and covered the card's own tick, so a person could open the actions and not be able to deselect the item under them. **Build two** put the actions in the flow and reserved their band with `visibility`, which made the two states the same height and cost **a rectangle of nothing on the face of every card at rest**, with the skin's picture pushed to a background layer where grey renders it as nothing at all.

**The founder, on build two: where is the skin's picture, and put the hover over everything with a dim.**

**The picture is a defect closed, not a taste served.** Field one of the canonical skin card `0.6` is the image. The grid had a slot and put it behind the text, which in a grey wireframe cannot be told apart from having no slot. It is in the flow now, after the name and the price, at a fixed ratio.

**Nothing is reserved and nothing moves.** The actions are absolutely positioned over the card, so rest and hover are the same height **by construction rather than by measurement**, and the space build two held empty is the picture instead. **The tick, the share and the market foot are raised above the dim**, so build one's defect cannot come back: the overlay darkens what is behind them and never intercepts a press meant for them.

**And the grid got denser because the thing that limited it went away.** Three columns waited until 1200 and four until 1600 because the receipt line inside the actions panel wrapped and clipped. `D-90` deleted both the receipt and the panel. The remaining floor is the widest label that may not wrap, `Send to Steam`. **Measured on 23 August 2026 at a 1000px viewport:** the label itself is **100px**, the button with the reduced inline padding this change added is **118px**, and the card's inner width at three columns is **199px**. **And the first version of this paragraph said 153px against 206px, which was an estimate written in the voice of a measurement.** It survived into five files before anyone opened a browser on it. The conclusion did not change and the sentence claiming it did was false, which is the worse of the two things: a wrong number is caught, a wrong number wearing the word "measured" is quoted. The 152px figure `D-52` records is not drift against any of these: it is the same label on a button at full padding.

### An MVP row was deleted, and this is the part that is not a layout change

**The founder: remove "Won at 64.80, 17 Aug 2026 22:11", we will not store that.**

**That line is row `F2`**, the instance value receipt persisting onto the item, and `F2` is an MVP row of `cjm-to-be.md`. It is not a decoration that was removed, it is a capability that was removed, and the difference is the whole of this section.

**What is not claimed: that `F2` is satisfied somewhere else by accident.** Its one remaining home is `5.9`'s roll row, which records what an open cost and what it returned. **So the question the founder still owes an answer to is narrow and it decides whether the row is moved or dead:** if "we will not store that" means the per-item copy, `F2` lives on the roll and the card simply stops repeating it. **If it means the value at the moment of the win is not retained at all, then `5.9`'s returned column dies with it and `F2` has no home anywhere.**

**Nothing was retro-fitted into the backlog to make this tidy.** `cjm-to-be.md` still reads 40 MVP rows over 39 capabilities, and `F2` is still one of them, **carrying the open question rather than a quiet edit.** The same treatment `D-38` set: the cost is printed, not absorbed.

### The two-renderings defect, fourth instance

The result pages called this account **Nightjar**. Everything else in the prototype calls it **nightjar_cs**: `WF_WHO` in `_nav.js`, the account band on every signed-in page, and now `7.3`. `result-owner.html` is the owner state of those pages, so it is the same account with two names.

**Three earlier instances:** the header reading 18.60 while the page read 130.60; the profile band reading `Spectacle` and `ID 953709` while its own record card read `nightjar_cs` and `acc-7f3a91c4`; and the deposit figures. **The mechanism is identical every time: two renderings of one fact with no shared source, and the second one drifts because nothing makes it move.** Fixed by pointing the result pages at the same name the rest of the product uses.

### And then a fifth instance, found by writing the assertion for the fourth

**The instrument written to prove the fourth instance was closed found a fifth, live on seventy two pages.**

`renderAcct` in `_nav.js` hardcoded the string `Spectacle` twice, into the account menu's own name line and into the control's accessible name, **on every page that carries the shell**. `D-89` had found the account band reading `Spectacle` and `ID 953709` against the profile card's `nightjar_cs` and `acc-7f3a91c4`, fixed the band, written `WF_WHO`, and declared the class closed. **The menu hanging off that same band was never looked at.**

**And it could not have used the fix even if it had looked.** `WF_WHO` was declared halfway down `_nav.js`, below the function that renders the menu. **The single source was written under one of its own readers.** It is now declared above the first reader, and nothing else in the product carries a name.

**Two decisions in a row state that this class is shut.** `D-89` said it about the band and `D-90` said it about the result pages, and it was live on seventy two pages while both were being written. **The fix that goes where the defect was seen, rather than to every reader of the fact, is how a class survives being closed twice.**

**`profile-steam-down.html` was carrying a third reading of the same account:** it overrides `WF_WHO` to say Steam cannot be read, and its menu went on naming an account its own card calls unreadable. That page now agrees with itself, and the override still works, which is the test that the source is single rather than merely uniform.

### What this cost, stated

**A trophy shelf now exists in a product that spent a node arguing against one.** The mitigations are real, every line of it is checkable and there is no score anywhere on it, and they do not make the objection wrong. **The founder decided, the argument is preserved, and the one thing that would settle the remaining harm, whether a person can hide the page, is still open with the founder's name on it.**
