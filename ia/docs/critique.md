# Critique 1: defects

Stage 03a, step 6, run on 11 August 2026 on `ia/docs/sitemap.md` and `ia/docs/flows.md`.

**Two instruments, taken independently and in full.** Codex ran first, read only, stated explicitly on the call, reading this local working folder and returning findings without editing anything. Its table was not shown to it, and its prompt was not coloured with any conclusion of mine. My own pass ran while it worked. Merging happened afterwards, on complete data.

**Dedup key: the node or the line, plus whether one edit fixes both.** Where both instruments hit the same node with different defects, one row is kept and both defects are named, because a single fix has to satisfy both. A finding from one instrument is not weaker than a shared one, it is simply inside that instrument's radius.

**Result: 16 findings. Codex 4, Claude 7, both 5.** No verdicts conflicted, so nothing had to be escalated as a disagreement. Two findings changed class on verification and say so in their own rows.

**Status after the fix pass, applied on 11 August 2026 with the three decisions taken by the founder's instruction to pick what is optimal:** 13 fixed, 2 carried with an owner, 1 recorded and outside this stage. Nothing was deleted, and the two carried rows are carried for reasons written in their own cells rather than because they were hard.

**Visible place.** This log gets its closed form as the "Before to after" section of `ia/concept-map.html`, assembled at step 7 when the second critique closes, with a status on every row and the withdrawn rows visible with their reasons. Named here by the step that created the file.

---

## Finding 0, outside the four classes, and it is the most expensive one here

| Where | What | Found by |
|---|---|---|
| `sitemap.md` and `flows.md` throughout, plus both html pages | **The screen codes and the backlog capability codes share one namespace and collide completely.** All twelve screen codes are also backlog row codes: `A1` is both the Home screen and "two prices, one item". `C1` is both the Case catalogue and "one real currency throughout". `C2` is both the Case screen and "spend ceiling chosen at deposit". `E1` is both Account and inventory and "the reveal renders the settled roll". `G1` is both Public result and "public withdrawal clock". Twelve of twelve. | Claude, found while verifying a different finding |

**It is already producing ambiguous sentences in shipped files.** `sitemap.md` navigation section reads "`C2` sets the spend ceiling where the money decision is made" on a page where C2 is also the case screen. `flows.md` flow 2 labels a node "Chooses an amount in one real currency, no coin denomination, C1" inside a document whose screen C1 is the catalogue. The concept map page carries both meanings of `C1` in two tables on one screen.

**Why it is the most expensive finding.** 03b writes one markdown node and one page per screen from these codes, stage 04 draws screens from them, and stage 07 colours them. A collision that costs a moment of confusion now costs a wrong node later, and it will not announce itself: both readings parse.

**Proposed fix.** Rename the screen codes so that they cannot collide, keeping the intent cluster letter and prefixing with `S`: `S-A1 Home`, `S-A2 Provably fair`, `S-B1 Age and geo gate`, `S-B2 Sign in`, `S-B3 Identity verification`, `S-C1 Catalogue`, `S-C2 Case screen`, `S-D1 Deposit`, `S-E1 Account and inventory`, `S-E2 Withdrawal`, `S-F1 Responsible play`, `S-G1 Public result`. Backlog codes are untouched, because they are owned by `cjm-to-be.md` and this stage does not rewrite an upstream file. Four files change: both markdown sources and both pages.

---

## Class 1: dead ends

Placed first with missing states, as the pack requires: these are the two most dangerous classes.

| # | Where | What | Found by | Proposed fix |
|---|---|---|---|---|
| **D-01** | `flows.md`, flow 2, node `IdFail` | Two defects on one node. **Claude:** it is drawn as an absolute dead end while capability `B2` guarantees the withdrawal route carries no verification branch at all, so a person whose check fails can still withdraw what they already hold. The diagram contradicts a shipped capability. **Codex:** there is no retry, no data correction and no appeal, unlike the restriction path in flow 3 which has all three. | Both | Add an edge from `IdFail` to the withdrawal route, and an appeal path mirroring `G4`. The node stops being red and becomes an error with an exit |
| **D-02** | `flows.md`, flow 4, node `Broken` | The person standing in front of a failed proof has no action at all. Calling it an incident describes our side of it, not theirs. | Both | Add a support or report exit. The incident framing stays in the words, the person gets a route |
| **D-03** | `flows.md`, flow 1, node `Leave` | The only red node in the file with no explanation under its diagram, while `Market`, `Blocked` and `Under` each have one. **Reclassified on verification:** this is not a route defect, a visitor who evaluates and declines is the null result of a free evaluation. It is a documentation gap that makes a correct route read as an unexamined one. | Codex | One sentence under the diagram, not a route change |
| **D-04** | `flows.md`, flow 1, nodes `Signin`, `SteamWait`, `SteamOk`, `SteamErr` | If Steam is down rather than merely rejecting, the person cycles Signin to wait to error to Signin with no exit. A loop is not a dead end by the colour rule, which is exactly why it slipped through: it is a trap that the rule cannot paint. | Claude | Add an exit from `SteamErr` back to the case screen, so a person who cannot sign in can still read the product |

## Class 2: missing states

| # | Where | What | Found by | Proposed fix |
|---|---|---|---|---|
| **D-05** | `flows.md`, flow 1, node `Reveal` | **No state for an interrupted reveal**, and this is the one missing state that threatens a capability directly. `E1` settles the roll before the animation, so the result already exists when the connection drops. Without a return path the person sees an animation that never resolved and a ledger that says they won, which is `B6-1`, the animation and the credited item disagreeing, arriving through the back door. | Claude | Add an interrupted state that resolves to the settled outcome on return |
| **D-06** | `sitemap.md` C1 Catalogue, and its absence from `flows.md` | The catalogue is an MVP screen carrying the Main Job at phase T5, and **no flow passes through it**. It therefore has no happy path, no empty state for filters that match nothing, and no loading state. | Both | Decision needed, see below. This is not a mechanical fix |
| **D-07** | `flows.md`, flow 3, node `Inv` | Flow 3 begins at "holds a skin worth taking out". An empty inventory, which is where every new account starts and where a low-value first open leaves someone, has no state. | Codex | Add an empty state on `E1` returning to the catalogue |
| **D-08** | `flows.md`, flow 4, node `Verify` | No state for empty, incomplete or malformed seed input. The only branch drawn is a correct paste. | Codex | Add an invalid-input state that recovers to `Verify` |
| **D-09** | `flows.md`, flow 2, node `Ceiling` | `cjm-to-be.md:66` specifies that lowering the ceiling applies immediately and **raising it applies 24 hours later**. A pending ceiling change is a state with a timer and it appears in no flow. Missing it would let 03b write the ceiling as instantaneous in both directions, which deletes the capability's whole point. | Claude | Add a pending-raise state with its 24 hour timer |
| **D-10** | `flows.md`, flow 1, node `Share` | No state for a public result that is missing, deleted, or fails to load for the stranger who follows the link. | Codex | Add an empty state on `G1`, conditional on the scope answer |

## Class 3: excess depth

| # | Where | What | Found by | Proposed fix |
|---|---|---|---|---|
| **D-11** | `flows.md`, flow 1, activation | Four distinct screens before the activation node against a threshold of three. **Already named as a defect in the file itself at step 4**, so both instruments confirming it is a confirmation rather than a new finding. | Both | Carried, not fixed. The obvious fix was rejected at the T2 divergence for spending the reveal, `cjm-to-be.md:47` |
| **D-12** | `sitemap.md` navigation | The browsing route is four taps. **Already named at step 3**, with the note that it is not the main job route and that `D-D` may collapse it to three. | Both | Carried, with an owner |
| **D-13** | `sitemap.md` navigation, "deep" classification | **Self exclusion and cool down are classed as deep**: footer, then the responsible play page, then inside it. Three taps or more to reach a brake, for the person `B7-4` describes with a pattern of 12 who is inside an escalation loop at the moment they need it. A brake that takes three taps at the worst moment is not a brake. Design principle 3 says clarity at every risk moment, and this is the risk moment. | Claude | Decision needed, see below |

## Class 4: orphans

| # | Where | What | Found by | Proposed fix |
|---|---|---|---|---|
| **D-14** | `sitemap.md` Free entry | Carried from step 3 with an explicit "flagged for step 6", and it comes due here. The starter credit reads as a Balance state and the daily free case as an available case, so the entitlement appears on two screens and owns neither. An object that only ever appears as another object's state is how a capability quietly disappears between stages. | Claude | Decision needed, see below |
| **D-15** | Codex verdict | No orphans confirmed beyond those already declared. The LATER orphans, RJ4, F1 and the parentless `I2` are each marked in the files as deliberately accepted exceptions, and Codex read them as such rather than reporting them as discoveries. | Codex | Nothing to fix. Recorded because a clean result from the instrument that owns this class is itself evidence |

---

## Outside the classes, raised because the flows made it visible

| # | What | Found by |
|---|---|---|
| **D-16** | **A person who only ever uses free entry can withdraw a real skin without ever meeting an identity check.** `B1` places verification before funding and `B2` forbids it on the withdrawal route. Someone who takes the starter credit or a daily free case, wins, and withdraws never funds, so they never meet the gate. This is not an IA defect and this stage cannot decide it: it is a compliance question that the flows exposed. **It needs an owner named rather than a route drawn.** | Claude |

---

## The three decisions, taken

**D-06, the catalogue with no flow. Decided: a minimal flow, not a browsing route.** Flow 1a in `flows.md` draws exactly the three things the screen needs whether it turns out to be a page or a section of Home: loading with the live free-unit counts as the thing being waited on, an empty state whose rule is that zero-stock items stay visible rather than being filtered out, and the exit into the case screen. **Nothing in it can be made worthless by `D-D`**, which is what made this the optimal shape rather than the complete one. A full browse-and-filter route would have committed depth to a node that may not survive.

**D-13, the depth of self exclusion. Decided: promoted, with the constraint written beside it.** It now carries a persistent entry inside the Balance control, two taps rather than three or more, and it sits at the place the person already goes when they are about to spend, which is where design principle 3 puts clarity. The footer link stays. **The distinction that makes this safe is reachability against prominence:** the route carries no counters, no streaks, no status and no session score, which is the same hard rule T4 attaches to the spend ceiling at `cjm-to-be.md:73`. Making a brake easy to find is not the same as making it a thing to engage with.

**D-14, where Free entry lives. Decided: an obligation on two nodes, not a surface of its own.** `cjm-to-be.md:180` already calls `I1` and `I2` components rather than screens, so a surface would have been scope nobody asked for. Instead S-A1 Home is obliged to carry the starter credit offer pre-login and S-C1 Catalogue is obliged to carry the daily free case as an addressable case, both written for 03b to honour. An object that only appears as another object's state is how a capability quietly disappears, and the answer is not always a screen: sometimes it is naming who owes it.

---

## The original framing of those three, kept because a decision with no rejected alternative reads later as the only option

**D-06, the catalogue with no flow.** Two honest resolutions and they are not equivalent. Either the catalogue earns a flow of its own, browse and filter, which admits it is a real route with real empty states and a four tap depth, or it is accepted as a secondary entry that the main job does not use, in which case `sitemap.md` should say so where it currently implies otherwise. There is a third possibility that neither instrument can settle: `D-D` may collapse the catalogue into Home entirely, and drawing a flow for a node that may not survive is work with a known chance of being thrown away.

**D-13, the depth of self exclusion.** Promoting it costs the thing the T4 divergence warned about: the ceiling and its relatives must never become a mechanic the user engages with as part of play. Leaving it deep costs a brake that arrives too late. This is a product decision with a compliance edge and a founder call.

**D-14, where Free entry lives.** Either it acquires a place of its own, which risks a surface nobody scoped, or it stays a state on two screens and the risk of it disappearing is accepted and written down where 03b will read it.

---

## Verification notes

Every finding above was checked against the file before being written into this table. Two changed on verification and neither was deleted.

- **D-03 changed class.** Codex filed it under dead ends. Reading the node confirmed the route is correct and the gap is in the explanation, so it is kept with the class corrected and the reason stated. Deleting it silently would have let it return next round in the same words.
- **Finding 0 was not in either original set.** It surfaced while verifying whether any flow touches C1, when a grep for `C1` in `flows.md` returned a line about currency rather than a catalogue. The instrument that found it was neither pass: it was the act of checking a claim against the file, which is the step the rules require before fixing anything.
