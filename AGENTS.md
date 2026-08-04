# AGENTS.md

The rules of this repository live in **`CLAUDE.md`** at the root. Read it on your first move. Without it any finding here is a median, not a judgement about this project.

## What this repository is

Not an application. A **product design pipeline** for a CS2 skin platform redesign: twelve stages, each leaving a markdown source of truth in its `docs/` folder and an html page that renders the shared sidebar from the root `/_nav.js`. Nothing here is executed. The material is text and structure, and it is checked as text and structure.

Stage packs are not in this repo. They live in `AI Design Workflow/` alongside it, and nothing from there is committed here.

## Hard rules

1. **Audit is read only.** Findings come back as a list with `file:line` proof. Edits are made by the repository owner after an explicit go. Do not edit files yourself unless asked in plain words.
2. **A finding without proof is not a finding.** Every claim quotes a line that actually exists in the file. If it does not survive a re-read, it is not submitted.
3. **General advice is noise.** "Add examples", "structure this better", "consider automating" are worthless here. Only falsifiable divergences count: a quote contradicting another quote, a promise with no one to keep it, a step number disagreeing with its heading, a path that no longer resolves, a fact without a source.
4. **Deliberate decisions are not defects.** Read `CLAUDE.md` and `docs/decisions.md` before calling something broken. Already decided, on the record, and not up for rediscovery:
   - The structural resemblance to daddyskins.com is the point, not laziness. The visual language is deliberately not inherited.
   - `[?]` marks a claim the research could not source. It is honest bookkeeping, not a hole.
   - Four files in `research/docs/` are named migration residue in `README.md` and `docs/decisions.md`. Naming them is the decision; they are not orphans.
   - Stage 01 carries two openly named gaps. They are in `README.md`. Reporting them again is not a finding.
   - Wireframes, when they exist, are grey on purpose and do not get coloured in place.
   - Token levels are exactly two, primitive and semantic. Component tokens wait for stage 09.
5. **Response language is Ukrainian.** The files themselves are English, and that is deliberate.
