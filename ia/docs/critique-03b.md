# Detail layer critique, two instruments, 12 August 2026

**Run after step 6, on twenty nodes written in parallel by ten authors** against one template, one block bank and one map. The authors could not edit shared files, so every cross-file problem they met was reported rather than patched. That constraint is what made this log possible: forty two findings arrived as findings instead of as silent edits in somebody else's node.

**Two instruments, sets taken independently and in full before any merge.**

| Instrument | What it owns | How it ran |
|---|---|---|
| **Codex**, plugin `codex`, **read only, stated on the call** | What is falsifiable in the source: contradiction between files, orphan without a parent, state absent from code, value drifted from its token, broken link, violated rule, count reconciliation | One pass over the whole repository from `AGENTS.md`, ten suspected claims handed to it by name for confirm or withdraw |
| **Claude with a browser** | What breaks at 360px, what breaks a layout as a string, what only the published address shows | Every one of the twenty pages fetched from the live URL, plus a layout walk at 360px on the heaviest page |

---

## Before and after, by class

| Class | Raised | Confirmed | Withdrawn on verification | Fixed in this pass | Carried with an owner |
|---|---|---|---|---|---|
| Contradiction between files | 8 | 6 | 2 | 6 | 0 |
| Orphan without a parent | 5 | 2 | 3 | 0 | 2 |
| State absent from code | 4 | 0 | 4 | 0 | 0 |
| Value drifted from its source | 4 | 2 | 2 | 2 | 0 |
| Broken link | 2 | 1 | 1 | 1 | 0 |
| Violated rule | 3 | 1 | 2 | 1 | 0 |
| Count reconciliation | 4 | 3 | 1 | 3 | 0 |
| Product and legal questions raised by authors | 12 | n/a | n/a | 0 | 12 |
| **Total** | **42** | **15** | **15** | **13** | **14** |

**Fifteen findings did not survive verification and none of them was deleted.** They are below with their reasons, because a critique log that only keeps its wins is a marketing document.

---

## Five telling pairs

### 1. Twenty three backlinks that led nowhere

**Before.** Every node page ends with a link home to the hub, `href="structure.html#5.1"`. **The hub renders its chips from a registry and gave them no `id` at all**, so all twenty three of those links resolved to the top of the page and nothing else.

**After.** One line in `ia/_nav.js`: the chip carries its node number as its id. Twenty three links start working at once.

**Why it matters.** No author could have found this. Each of them checked their own page, and their own page was correct. **The defect lived in the space between twenty three files and one renderer**, which is exactly the class a parallel build creates and a single-instrument review misses.

### 2. The register that decides indexation was overruled by a file that does not

**Before.** `navigation.md` stated that `7.1` is indexed and sits under `1.2` as a breadcrumb. `seo.md`, node `0.13`, the register that owns indexation, states `noindex, follow` for `7.1` with three reasons, and gives it no breadcrumb.

**After.** `navigation.md` corrected in both places, with the correction printed rather than swapped in silently. **A result is not a child of the verifier**, and the register decides.

**Why it matters.** The author of `7.1` found this, inherited `0.13`, and refused to edit `navigation.md`. Two files disagreed for a whole step and both read as authoritative.

### 3. A promise that a pattern exists, standing in for the pattern

**Before.** `seo.md` assigned final titles to stage 05 and left the shape here, printed as the literal words **"Pattern here"**.

**After.** The pattern is written: the node's H1 subject first, then a separator, then the product name, one line, subject first because the tail truncates.

**Why it matters.** A placeholder that reads like a decision is worse than a blank. Every node inherited a title rule that did not exist, and nobody noticed because the cell was not empty.

### 4. The proof of the round claimed a universality its own table denied

**Before.** Node `0.14` said "seven states, and every site that renders the block inherits all seven". **Its own scope column restricts gone or private to `7.1`**, and pre-roll has no moment on a verifier at all.

**After.** Corrected to seven in the object and none in any single site, with the scope column named as what decides.

**Why it matters.** This is the node that carries the product's central claim. **A specification of the evidence that overstates itself in its own second paragraph is the same defect the node was written to prevent**, one level up.

### 5. One hundred and thirty one citations into files that are still moving

**Before.** `jtbd.md:93`, `aarrr.md:157`, `cjm-to-be.md` by line, and so on across ten files. `CLAUDE.md` forbids it in as many words: cite by section name rather than by line any file a later step may still edit, because a line citation into a moving file rots silently and still reads as sourced.

**After.** All one hundred and thirty one converted to section names, computed from each source file's own heading positions rather than guessed. Zero line citations remain anywhere in `ia/`.

**Why it matters.** Not one of them was wrong today. **All of them would have been wrong the first time somebody inserted a paragraph into `jtbd.md`**, and nothing would have flagged it.

---

## Withdrawn on verification, with the reason

**Never deleted, per the project rule.** Two of these were relayed to the founder before verification and are corrected here.

| Finding | Why it was raised | Why it did not survive |
|---|---|---|
| **`0.14` cites two facts to `research.md` section 5b that live in section 4** | Raised by the author of `1.2` | **Withdrawn.** The HMAC and provable-fairness material is in fact in section 5b, "Trust and fairness". Section 4 holds competitive overview but not those assertions. The pointers were correct. **This was relayed to the founder as a finding before it was checked, and it was wrong** |
| **`0.11` has no row for the appeal response deadline** | Raised alongside the deposit row, which was real | **Withdrawn.** The row exists, "Published appeal response deadline", read on `5.3`, `2.9` and `0.10`. Only the deposit row was missing |
| **`0.11` names consumers that do not read it** | Raised by two authors | **Withdrawn.** Each named consumer has a corresponding figure. The conditional footer slots are openly marked conditional rather than asserted as shipped |
| **`0.2` puts a statistics strip under the self-exclusion controls on `6.1`** | Raised by the author of `7.1` and `6.1` | **Withdrawn as a falsifiable contradiction**, kept as a design concern. No file forbids the combination, so it is product judgement rather than an incompatibility. It stays on the founder list |
| **Live chat on `0.10` is an orphan** | It has no parent and no backlog row | **Withdrawn.** The node cut it rather than shipping it, which is the rule satisfied by cutting |
| **Float and pattern on `0.6`, daily marker on `0.7`** | Both have no parent | **Withdrawn as defects.** Both are printed as `[ORPHAN]` in their own rows, which is exactly what the rule requires instead of a silent drop |
| **Four states named in specs but missing from the html** | Suspected after a parallel build | **Withdrawn, all four.** The market lookup, the three Steam states, the two identity states and proof unavailable are each present in both the markdown and the page |
| **Em dash or en dash somewhere in the output** | The project bans both | **Withdrawn.** A character search found none anywhere in `ia/` |
| **A markdown artefact with no visible place** | The project requires one for every file | **Withdrawn.** All twenty six specifications have a page and all twenty six are registered |
| **The map's 66 / 53 / 26 arithmetic is stale** | Step 6 added states | **Withdrawn on the arithmetic, confirmed as a different finding.** 26 files plus 27 numbered states is 53, plus 13 LATER is 66, and that still holds. What is true is that the specifications hold eight internal states the map does not number, which is now printed as its own count rather than folded into this one |

---

## Confirmed and carried, with an owner

**Two orphans that are real and are the founder's, not this stage's.**

**The cookie node has no legal parent class at all.** `CLAUDE.md` enumerates exactly five compliance constraints, and **data protection is not one of them**. Node `0.4` stands entirely on GDPR and ePrivacy, both opened live and quoted, and neither is a member of any of the three legal parent classes. The author refused to widen the third class quietly and raised it as a stage-close candidate. **Either the rule file gains a data-protection constraint, or the cookie node is officially an orphan.**

**The sound control still has no parent.** Carried since the base layer, drawn in `0.1`, and node `3.3` has now supplied a candidate: row `E3` plus design principle 2. The decision stays with `0.1` and the founder.

**And twelve product or legal questions the authors raised rather than answered.** The sharpest three:

1. **`D1`, `D2` and `D3` are not simultaneously satisfiable as written.** Nothing says what the published chance **is** while an item sits at zero free units. Recomputing forks the observed counter on every stock change and destroys its N. Not recomputing prints a number that is not the number used, which is barrier `B7-2` in our own drop table. Closing the case costs availability. Three readings tabled, recommendation on file, rides with `D-D`.
2. **The withdrawal-right exception cannot be created by a policy.** 2011/83/EU Articles 16(a) and 16(m), opened live on EUR-Lex, each require prior express consent **and** a separate acknowledgement that the right is lost, captured at the transaction. **A block is owed at `4.1` and at the open, and no node holds one today.**
3. **`F4` does not publish, the ticker already did.** `0.8` lands every tile on `7.1`, and a tile is a win nobody shared, so for any ticker-eligible open the public page exists before any consent. **Revoke stops being a nicety and becomes the only consent instrument on the node.**

---

## What the two instruments each caught that the other could not

**Codex alone:** the twenty three broken anchors, the one hundred and thirty one line citations, the six file-to-file contradictions, and the count reconciliation. None of these is visible in a browser and none is visible from inside a single file.

**The browser alone:** that all twenty pages serve on the published address, that each has exactly one H1, that every declared section anchor resolves, and that the heaviest page holds at 345 pixels inside a 360 pixel viewport.

**Neither, and it is worth saying:** the twelve product and legal questions came from the authors while writing, not from either audit. **The audit checks that the work is consistent. It does not check that the work is right**, and this stage's best findings arrived from someone trying to specify a screen and discovering that the map could not answer a question the screen forced.
