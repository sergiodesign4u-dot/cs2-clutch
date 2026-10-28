# Stage 05 critique log

**Step 8, 19 October 2026.** The voice, run against every product page of `wireframes/` and every string literal of `wireframes/_nav.js`, on two instruments taken independently and merged only when both sets were complete. Its visible place is the "Was to now" section of `voice/voice.html`, read from this file at load.

## How it was run

| Instrument | Classes it owned | How |
|---|---|---|
| Claude, with a browser | State tone; a string that breaks the layout | Layout: 133 pages at a real 360 (`clientWidth` 360, touch) and at 1440, the tree before step 7 (`55883a7`) served beside the current one, compared page by page for visible button text that wraps, text cut by overflow, H1 and H2 line counts, and the first primary action inside the first viewport. Tone: the rendered main text of 55 state pages, empty, error, stop and success, read against principles 1 and 5, "Tone by phase" and the microcopy rules |
| Codex, plugin `codex`, read only, `gpt-5.6-terra`, effort medium | A term not from the glossary; the same act named two ways; Forbidden got through; screen against inventory; SEO limits of the node | Four tasks. **Task 1, every class at once, returned zero findings after a handful of searches and is not counted as a pass.** Tasks 2 to 4 reran the classes with one method each and a coverage count: 53 glossary and Forbidden rows and 131 retired words searched; 875 link and button instances grouped by destination and 338 Now rows checked against their files; 133 pages and 50 Forbidden patterns. The second run, task 5, covered the 15 files step 8 changed, the FAQ array and the inventory card renderer |

## Findings

Status: **fixed**; **withdrawn on verification**, with the reason; **deferred**, with the reason and the owner.

| # | Run | Class | File | Screen | String | What was wrong | Fix | Found by | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | Breaks the layout | `legal-refund.html` | `0.9` | 4. A charge you did not make, or a chargeback | The clause heading went from one line to two at 360 (19 to 38px) | 4. Unknown charges and chargebacks, the contents link with it | Claude | fixed, one line at 360 |
| 2 | 1 | Breaks the layout | `history-no-seed.html` | `5.9` | These rounds cannot be checked | One line to two at 360 (25 to 50px): "rolls" to "rounds" added one character | No proof for these rounds | Claude | fixed, one line at 360 |
| 3 | 1 | State tone | `history-deposits-empty.html` | `5.9` | No payments yet | Read as an empty state with no way out | None | Claude | **withdrawn on verification**: the empty state carries its Add funds button (`histEmpty`, `_nav.js`); the text extraction that found it dropped the button as a repeat of the header's Add funds |
| 4 | 1 | State tone | `withdraw-steam-degraded.html` | `5.3` | Steam is degraded right now | An engineer's word in a stop, principle 1 | Steam is not working normally right now | Claude | fixed |
| 5 | 1 | Term | `responsible-excluded.html` | `6.1` | Taking what you hold out to Steam is open. | C9 retires "open" for availability; C1 | Sending items to Steam stays available. So does support, and so does reading the product. | Claude | fixed |
| 6 | 1 | Term | `_nav.js` FAQ | `0.10` | ...or sell it for coins at its value. | C2 retires "at its value" phrased as a price | ...or sell it for coins. | Codex | fixed |
| 7 | 1 | Term | `_nav.js` FAQ | `0.10` | a Steam login that will not complete; My Steam login does not come back here | "login" is retired | sign in | Codex | fixed |
| 8 | 1 | Term, C11 | `account.html`, `account-degraded.html`, `_nav.js` card renderer | `5.1` | 21.40; Starting at 18.90 | A coin figure with no unit; the case tiles carry "coins" | {n} coins on the card figure and on Starting at | Codex | fixed; no card grew at 360 or 1440 |
| 9 | 1 | Term, C11 | four `withdraw*.html` | `5.3` | Our commission 0.00 | A coin figure with no unit | 0.00 coins | Codex | fixed |
| 10 | 1 | Term, C11 | `_nav.js` withdrawal tables | `5.3` | the cells `wdFmt(...)` writes | Figures with no unit in table cells | The rule, not the strings: the table prints "Prices in coins at 1 coin = $1.00", and C11 now names that exception | Codex | fixed in `voice.md` C11 |
| 11 | 1 | Same act, two names | `legal-unpublished.html` | `0.9` | Ask us about it, beside Ask us on the other legal pages | One destination, two labels on one screen | Ask us, read from `WF_STR.askUs` | Codex | fixed |
| 12 | 1 | Same act, two names | rail, `WF_STR`, empty states | global | Cases; All cases; See the cases | One destination, three labels | None | Codex | **withdrawn on verification**: three roles, not three names for one act. Cases is the rail's destination; All cases is the global link that names the whole shelf; See the cases is the empty-state action step 4 settled, `voice-input.md` f row 22 |
| 13 | 1 | SEO, node copy | `legal.html`, `legal-changed.html`, `legal-guest.html`, `legal-superseded.html`, `legal-refund.html` | `0.9` | These are the rules between you and us... | Drifted from block C since `D-77`: block C says "CS2 Clutch" and has a second sentence the pages lacked; block C still said "disputed" | The pages carry block C's second sentence; block C takes "us" and "charged back" | Codex | fixed, md and html of the node |
| 14 | 2 | Breaks the layout | `account.html` card, at 1440 | `5.1` | Nobody is offering one | Beside the rewritten "On sale {n}" it took three lines on a 206px card and the card grew 17px | None on sale, also in `_nav.js` | Claude | fixed; card heights equal to the tree before step 7 |
| 15 | 2 | Term, C11 | `_nav.js` card updater | `5.1` | Starting at 61.20; Offers {n} | The renderer rewrote the page's fixed figure without its unit, and still wrote "Offers" | coins on the figure, On sale | Claude, while verifying 8 | fixed |
| 16 | 2 | SEO limits | `legal.html`, `legal-refund.html` | `0.9` | Terms of use; Refund and payments policy | The title lacked the node's pattern, block A | Terms of use - CS2 Clutch; Refund and payments policy - CS2 Clutch | Codex | fixed |
| 17 | 2 | SEO, node copy | `ia/docs/pages/legal.md` block A | `0.9` | How payments, refunds and disputed charges work | N4 retires "disputed" for a chargeback | ...refunds and chargebacks work... | Claude | fixed, md and html |
| 18 | 2 | SEO limits | the six `legal*.html` | `0.9` | no meta description | Block A writes one per document; the pages carry none | None at this stage | Claude | **deferred**: a missing tag is markup, which stage 05 does not change; block A holds the line production reads, and stage 07's copies take it from there |

**Agreement.** No finding was found by both instruments and no verdict differed: Claude's classes and Codex's did not overlap, which is the split the pack draws.

## Was to now

| Class | Found | By Claude | By Codex | Fixed | Withdrawn on verification | Deferred |
|---|---|---|---|---|---|---|
| A term not from the glossary, units included | 7 | 2 | 5 | 7, one of them by the rule | 0 | 0 |
| The same act named two ways | 2 | 0 | 2 | 1 | 1, three roles rather than one act | 0 |
| Forbidden got through | 0 | 0 | 0 | 0 | 0 | 0 |
| State tone against the rule | 2 | 2 | 0 | 1 | 1, the button was there | 0 |
| Screen against inventory | 0, of 338 rows | 0 | 0 | 0 | 0 | 0 |
| SEO limits and node copy | 4 | 2 | 2 | 3 | 0 | 1, a missing tag is markup |
| A string that breaks the layout | 3 | 3 | 0 | 3 | 0 | 0 |
| **Total** | **18** | **9** | **9** | **15** | **2** | **1** |

**Five pairs, before and after.**

| Was | Now | Why |
|---|---|---|
| These rounds cannot be checked | No proof for these rounds | Breaks the layout: the step 7 word added one character and the heading took two lines at 360. Fixed by shorter text, not by the layout. Screens: `voice/screens/step8-layout-360-defect.png`, `voice/screens/step8-layout-360-fixed.png` |
| Nobody is offering one | None on sale | Breaks the layout at 1440: three lines on a 206px card, beside the rewritten "On sale {n}" |
| Steam is degraded right now | Steam is not working normally right now | Principle 1: the person on the scene does not say "degraded" |
| Our commission 0.00 | Our commission 0.00 coins | C11: a coin figure carries its unit |
| Taking what you hold out to Steam is open. | Sending items to Steam stays available. | C9 and C1: availability says "available", the act is "Send to Steam" |

## The stage contract, as a checklist

Read against "Input and output", the gates and "Done when" of the pack `05 - Voice.md`. Separate from the findings: a step that never ran is in no file, so neither instrument above can see it.

| Contract line | Status | Note |
|---|---|---|
| Input gate before step 1 | done | Step 1, 5 October 2026 |
| `wireframes/_nav.js` read for the inventory | done | 164 Global rows, the shell and `WF_STR` |
| Unique strings, two sections, counts named | done | 133 pages; 1263 unique strings, 164 Global and 1099 By screen; 154 press-only. **The Counts table said 1093 until step 8**: six screen strings arrived with `D-169` to `D-174` and the table had not followed. Corrected |
| Four fields per principle, each with its source | done | Step 2 |
| Tone by phase from the CJM, the bottom of the curve marked | done | Step 2 |
| The brand question asked before the principles | done | `D-166`: The baseline's voice is the foundation |
| Competitors' language, or its absence said aloud | done | Step 2, `research.md` |
| Glossary and Forbidden, with examples | done | Step 3; C11 gained the table exception at step 8 |
| Microcopy rules, checked against phases and "one main action" | done | Step 4; the one real two-equal case found at step 7, the empty catalogue's two widens, is the IA's own design, node `3.1` section 7.2 |
| `voice.html` built, `done: true` in `/_nav.js` | done | Step 5 |
| The sample accepted on screen, three acts | done | Step 6, `1.0` Home |
| Globals rewritten by the parent before the fanout, in their files | done | Step 7, first move, 28 changed |
| Coverage list from the registry before the fanout | done | 19 screens, 133 pages |
| Fanout closed by number | done | N = 17, M = 17; every one of 594 rows returned once |
| Divergence table after the merge | done | No string with two wordings; six new strings on two screens each, kept By screen by the inventory's own three-screen rule |
| SEO synced to block C and the node pages rebuilt | done | Eleven nodes carry "Updated after publication, words by stage 05"; `legal.md` blocks A and C aligned at step 8 |
| No string breaks the layout | done | Three found and shortened; 268 loads at 360 and 1440, no error, no sideways scroll |
| Only text changed | **done, with named exceptions** | Attribute text the renderers read (`data-sw-on`, `data-rp-refuse`); renderer literals and the `?n=` patterns in `_nav.js` that wrote over the new words; two `data-str` spans swapped for plain text or back, `D-180` |
| Critique on two instruments, verification before every fix | done | Codex's first task not counted; two findings withdrawn on verification |
| A second run on the touched screens | done | Codex task 5 and the browser comparison; five new findings, four fixed and one deferred |
| Was to now on `voice.html`, with a layout pair and a 360 screen | done | This file's section, read by the page |
| Closing ritual: `CLAUDE.md` Voice section, deletions, budget | **not done** | Waits for the founder's go |
| `README.md` Voice = Done, live URL | **not done** | With the ritual |
| `wip` taken off Voice in `/_nav.js` | **not done** | With the ritual |
