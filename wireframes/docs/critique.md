# Stage 04, step 9. The critique log

**Run on 22 August 2026, after the last of the 106 pages was built.** Nothing in this file is fixed yet. This is the raised set, complete, before verification and before a single edit. The columns that follow the raised set get filled as the pass proceeds: what was confirmed, what was withdrawn on verification and why, what was fixed, and what the second pass found afterwards.

**Nothing raised here has been deleted.** A finding that does not survive a re-read stays with its reason printed, because a silently dropped finding comes back next time as a new one.

---

## 1. The instruments

**Seven independent sets, taken in full before any merge.** No instrument saw another's table.

| # | Instrument | What it owned | Radius |
|---|---|---|---|
| 1 | **Codex**, plugin `codex`, **read only, stated on every one of the three calls** | Look leaked, look lives inline, placeholders | All 107 files at once, computed globally |
| 2 | **Codex**, second call, read only | State missing, dead end, screen not on the map, canonical data out of sync | The registry, the matrix and the map against the files |
| 3 | **Codex**, third call, read only | Navigation, rule violated, count reconciliation, broken link | Every file mechanically, no sampling |
| 4 | **The reader.** A clean context with no access to `docs/decisions.md`, to any critique log, to `README.md`, to `ia/` or to `research/` | Not defects. The real question of the next stage: zones, states, where the text comes from, what the main action is, on three screens from three flows | `case-outcome`, `deposit`, `responsible` |
| 5 | **Auditor with a browser**, read only | Schema instead of a screen, zone without a role, breaks at 360 | 22 screens: home, catalogue, case, open, outcome |
| 6 | **Auditor with a browser**, read only | The same three classes | 32 screens: sign in, gate, legal, deposit, withdraw, account |
| 7 | **Auditor with a browser**, read only | The same three classes | 53 screens: cookie, fair, history, profile, responsible, result, settings, support, system, the hub |
| 8 | **Grep and a measuring script**, run by me | The one class the pack gives to a mechanical instrument: a rule repeated on two or more screens. Plus the counters no model should be trusted with | All files at once |

**Why the reader is not an eighth auditor.** He was not asked to find defects. Asked that, he returns my own list back to me, because he is the same model with the same priors. He was asked the question stage 12 will ask, and **his second list is the instrument**: every place where he concluded something other than what was meant is a defect, because that is how the file will be read by the person colouring it and by the developer at handoff. His voice is not equal to Codex's, and verification on his rows counts triple.

**Codex was available and every call stated read only.** No quiet single instrument pass was run.

---

## 2. How the seven sets were deduplicated

**Merge happened only after all seven tables were on the table.** The rule applied: **two rows are one finding when they name the same defect in the same file region**, whatever words each instrument used and whatever width it was measured at. Two rows stay two when the same string is wrong on two screens for two different reasons.

**Three findings arrived from more than one instrument independently, and that is recorded rather than collapsed**, because agreement between instruments with different radii is itself evidence:

1. **The header money that does not move** came from Codex as a source contradiction and from a measuring script as a rendered one.
2. **One main action per screen** came from grep as a count and from the reader as an inability to choose, on a screen he had never been told the rule about.
3. **Process prose on the product surface** came from all three browser auditors separately, on screens none of them shared.

**Two instruments disagree and the disagreement is carried, not voted on.** Both are in section 5.

---

## 3. The raised set, by class

### 3.1 A control that does not do its thing, and is therefore a picture of it

**The rule is the project's own, `D-58`, and it is the rule this stage breaks most.** 22 distinct controls, and because most of them ship from the shared renderer or from a repeated tile, they land far more often than that.

| # | Control | Where | Instances | Found by |
|---|---|---|---|---|
| 1 | `.wf-fav`, the favourite on a case tile. `aria-pressed="false"` forever | index, index-account, all catalogue states, all eight cookie states | **101** | Auditors 1 and 3 |
| 2 | `.wf-fav-case`, the favourite flank on a case screen | 13 case screens, 6 gate screens | **19** | Auditors 1 and 2 |
| 3 | The rail's ambient toggle, `Sound on`, `aria-pressed="true"` and no listener anywhere | **every screen** | **106** | Auditor 2 |
| 4 | `Sign out` in the account menu | every signed in screen | ~60 | Auditor 2 |
| 5 | `Recompute this round`, which `fair.html:105` calls **"the page's one call to action"** | 6 fair states | 6 | Auditor 3 |
| 6 | `Report this round`, the escalation on the state where our own proof failed | fair-proof-failed | 1 | Auditor 3 |
| 7 | `Send it to Steam`, `.wf-btn--primary`, the screen's main action | withdraw | 1 | Auditor 2 |
| 8 | `Send the offer again`, `.wf-btn--primary`, the screen's main action | withdraw-offer-expired | 1 | Auditor 2 |
| 9 | `Cancel the raise`, **the state's only escape** | deposit-ceiling-pending | 1 | Auditor 2 |
| 10 | `Copy the link`, `.wf-btn--primary`, **the entire reason the owner state exists**, and `Revoke this page` beside it | result-owner | 2 | Auditor 3 |
| 11 | `Send` on the contact form, while `Send the appeal` beside it is a live link | support, -nodispute, -notfound | 3 | Auditor 3 |
| 12 | Every filter chip: `All cases`, `Any date`, `Still held`, `Older rolls` | history, -mismatch, -no-seed | 10 | Auditor 3 |
| 13 | `Save` twice and `Start a cool down`. **`data-rp-refuse` is on the guest and excluded states and absent from the two states where a boundary is actually set** | responsible, -in-force | 6 | Auditor 3 |
| 14 | The four amount `preset` buttons | 3 deposit states | 12 | Auditor 2 |
| 15 | Every sell control, batch and per card | 4 outcome states | 11 | Auditor 1 |
| 16 | `Copy` on the round hash, on the trust screen | 3 case-open states | 3 | Auditor 1 |
| 17 | `Copy` on the account id and the ticket reference, **the two strings that exist only to be pasted** | profile, -steam-down, 4 support states | 6 | Auditor 3 |
| 18 | `Search`, sitting beside a `Filters` control that works | 7 catalogue states | 7 | Auditor 1 |
| 19 | Every route out of the empty state: chip `x`, `Clear all`, `Raise the ceiling to 0.80`, `Drop the risk level` | catalogue-empty, -filtered | 8 | Auditor 1 |
| 20 | Roll counts `3` and `4`, inert buttons in a row of five where `1`, `2` and `5` are live links | 3 case-account states | 6 | Auditor 1 |
| 21 | **The sticky commit bar's primary is a `<span>`.** At 360 it is the top hit test target, the real control sits behind it and below the fold | 6 case screens | 6 | Auditor 1 |
| 22 | `disabled` on `Available now: 0 cases`, **which `D-58` forbids in as many words** | index-account, catalogue-account | 2 | Auditor 1 |

### 3.2 Process prose on the product surface

**The rule is `D-66`: a wireframe may state a state, and may never explain the project to the person looking at it.** 32 distinct strings. Three of them ship from the shared renderer and therefore appear on every page in the prototype.

| # | The string, shortened | Where | Found by |
|---|---|---|---|
| 1 | "round 1 ships one language, the page stays `lang="en"`, and the product carries no `hreflang` until real translations arrive" | the language popover, **every page** | Auditor 1 |
| 2 | "One game in round 1. The other modes enter **this column** as they ship" | the footer, **every page** | Auditor 1 |
| 3 | "Which channels are **ours** in round 1 is not decided" | the footer, **every page** | Auditor 1 |
| 4 | "Image slot, stage 06", rendered uppercase in a 360 by 110 band above the H1 | signin-dialog | Auditor 2 |
| 5 | "a permission list written from memory is a permission invented from memory" | 4 signin states | Auditor 2 |
| 6 | "Every clause of every one of the four documents is counsel's, and **this template** writes none of it" | 4 legal states | Auditor 2 |
| 7 | "Only the terms are drawn here, because **four drawings of one template would be three copies**" | 5 legal states | Auditor 2 |
| 8 | "because a summary written later drifts from what it summarises" | 4 legal states | Auditor 2 |
| 9 | "an address of its own is not decided, so this one renders inside the live document rather than at a URL **the register does not hold**" | legal-superseded | Auditor 2 |
| 10 | "A placeholder on a legal page reads as a document until somebody relies on it" | legal-unpublished | Auditor 2 |
| 11 | "Anything this method will not take **is printed here, on this card**" | 3 deposit states | Auditor 2 |
| 12 | "**Nothing is drawn here** that has not been chosen" | 3 deposit states | Auditor 2 |
| 13 | "Same items as the strip on the stage, with the ticket range and the market link **the strip does not carry**" | 6 gate and dialog states | Auditor 2 |
| 14 | "one stamp over both would quietly claim the chance was re-read too" | 6 gate and dialog states | Auditor 2 |
| 15 | "How many this row shows, and over what window, is not decided" | 6 gate and dialog states | Auditor 2 |
| 16 | "It belongs to production timings, and a spinner for a lookup that resolves in milliseconds is an interruption inside an interruption". **Two of the three rendered lines of the whole dialog** | gate | Auditor 2 |
| 17 | "**Our Steam health probe** is what puts this message on the screen" | signin-steam-unavailable | Auditor 2 |
| 18 | "A rolling figure that drops its bad days is not a measurement" | withdraw-steam-degraded | Auditor 2 |
| 19 | "Nothing above is erased and nothing is relabelled" | withdraw-offer-expired | Auditor 2 |
| 20 | "whether they measure the whole elapsed time end to end or only the stretches **we are waiting on**" | 6 withdraw states | Auditor 2 |
| 21 | "One is live in round 1. The other three are **named here rather than hidden**" | index, index-account | Auditor 1 |
| 22 | "**Absent, not a placeholder badge**" | index, index-account, 8 cookie states | Auditors 1 and 3 |
| 23 | "**No dead end:** every route out of this state is a chip or a link, never a browser back" | catalogue-empty | Auditor 1 |
| 24 | "the page says so on every card **rather than showing the last ones it had**" | case-degraded | Auditor 1 |
| 25 | "**The block** that says what usually happens is **not on this page in this state**" | case-nocounter | Auditor 1 |
| 26 | "Linking a Steam account is an act **this prototype does not draw yet**. It belongs to My items, **which owes it**" | settings-no-steam | Auditor 3 |
| 27 | "that is a real gap **rather than a screen still being built**" | 4 settings states | Auditor 3 |
| 28 | "public profile: **no node yet**", under the winner's name on the page a stranger lands on from a chat | 5 result states and the global feed | Auditor 3 |
| 29 | "Response deadline not available: **it is owned by the support node**" | 7 fair states | Auditor 3 |
| 30 | "Fetched from Trustpilot when the page is read, or not shown at all. **Never a stored number**" | 8 cookie states | Auditor 3 |
| 31 | "**that is a state of the decision rather than an answer**", on the one surface whose subject is a person trying to stop | responsible-excluded | Auditor 3 |
| 32 | "**No source we have opened** states a re-ask interval, and a number invented here would read as a rule", inside a consent banner | cookie-expired | Auditor 3 |

### 3.3 Exactly one main action, a rule that holds on 47 pages of 106

`conventions.md` section 1.6: **"On any screen there is exactly one main action."** Section 6 of the same file hands that rule to stage 09 as a mechanical counter, quoted: **"no more than one `.btn--primary` per screen"**.

| `.wf-btn--primary` per page | Pages | Found by |
|---|---|---|
| **0** | **46** | grep |
| 1 | 47 | grep |
| **2** | **12** | grep, auditors 1, 2 and 3 |
| **3** | **1**, `fair-proof-failed` | grep, auditor 3 |

**The reader hit the same rule from the other side without being told it existed.** On `case-outcome` he could not decide which of `Open again for 12.40 coins` and `Sell for 12.90 coins` was the main action, because they carry identical classes and identical width, and no file ranks them. On `responsible` he concluded there should be no accent at all, which is very likely right and is written down nowhere.

**Named instances:** two primaries on the four outcome states, on six fair states, on three support states, on `result-owner`, and **three rendering simultaneously on five gate and dialog states**, where the commit bar's primary, the in-page copy of the same action and the dialog's own `Continue` are all live at once.

### 3.4 Breaks at 360

| # | What | Measured | Found by |
|---|---|---|---|
| 1 | The five sell labels on `case-outcome-5` **start 12px left of their own buttons** and land over the neighbouring card. Button `clientWidth` 20 against a nowrap label | 5 instances, correct at 1440 | Auditor 1 |
| 2 | The saved trade URL is **46% hidden** inside its own input, and the hidden half is `?partner=...&token=...`, the only part worth comparing. **The file's own contract at `settings.html:66` says "It wraps rather than truncating"** | `scrollWidth` 603 against `clientWidth` 326 | Auditor 3 |
| 3 | The consent region is **70% of the viewport** and scrolls inside itself, and **`Accept all` and `Reject all` are below its inner fold**. `cookie-changed` fails at 1440 too | region 518 of 740, content 907, buttons at 966 | Auditor 3 |
| 4 | The consent region **permanently covers 573px of footer** at 360 and 630px at 1440. The `padding-bottom: 300px` compensation is on `.wf-main`, and the footer is a sibling after `main`, so it gets none | all eight cookie states | Auditor 3 |
| 5 | Fixed furniture takes **46% of the viewport** on the deposit screens: a 236px dock plus a 56px bar, leaving 287px for a form with an amount field, four presets, a ceiling field and a ceiling control | 292 of 640 | Auditor 2 |
| 6 | `withdraw`'s only main action is **390px below the first fold** and nothing sticky carries it. The first fold is 35% grey art placeholder | action at y=1030 of a 3396px page | Auditor 2 |
| 7 | The front door's single primary sits at **3877px of a 7707px page**, 5.2 viewport heights down, and the first screen opens with a 228px banner of four empty countdown boxes above the H1 | index | Auditor 1 |
| 8 | The case screen's real trigger is at 744 against a 740 viewport, **behind the fixed bar**. `_nav.js` concedes it in its own comment | 6 case screens | Auditor 1 |
| 9 | The prototype's own tab overlays product content: it clips a link at x=343 against its edge at 332, and overlaps `h1` by 12 by 56 | all screens at 360 | Auditor 1 |
| 10 | The footer is **1732px with 40 controls on every screen**. On `history-empty` that is **5.43 times the height of the whole screen body, and 40 routes against the screen's 1**. On `catalogue-empty` it is 46% of the page | 6 short states measured | Auditors 1 and 3 |

**Clean, and said out loud:** no horizontal scroll on any of the 106 pages at 360 or 1440, verified by all three auditors independently. No button label wraps to a second line, so `D-52` holds. No page errors in the console.

### 3.5 Canonical data out of sync

| # | What | Found by |
|---|---|---|
| 1 | **The header money does not move when money is spent.** `case-open` body 61.80 against header 74.20, `-2` 49.40 against 74.20, `-5` 12.20 against 74.20. None of the thirteen case screens passes `money` to the shell, so the renderer serves the same fallback through the whole main flow, spend and win included | Codex 2, then measured across all 106 |
| 2 | `history-mismatch` and `history-no-seed` head "212 rolls." and render **3**, with no pager at all against the base state's one. Rolls 4 to 212 are unreachable | Auditor 3 |
| 3 | Two of the four document links in the legal closing zone point at the page the reader is already on, and `legal-unpublished` self-links a third | Auditor 2 |
| 4 | `account`, `-degraded` and `-empty` repeat the header's two money figures verbatim in `main`, 120px and 186px apart, both on the first fold, with no added meaning | Auditor 2 |

### 3.6 Skeleton instead of a screen

| # | What | Found by |
|---|---|---|
| 1 | The legal body is **eight consecutive empty clause blocks**, "Clause text not written." under H2 1 through 8, on four states. 2780 characters of rendered text and zero clause text | Auditor 2 |
| 2 | The loading state is the loaded state with the ink turned off. All 12 tiles are still live links whose accessible names read the real data, and all 12 favourite counters still render their real numbers | Auditor 1 |
| 3 | The signin permissions block prints the layout instruction as its content: "`[?]` field, and on the same row the thing it is for" | Auditor 2 |
| 4 | Four amount presets whose entire label is the word `preset` | Auditor 2 |

### 3.7 The navigation contract of the stage

| # | What the pack requires | What is there | Found by |
|---|---|---|---|
| 1 | The exit **"Design process" as the panel's first row** | **Absent. Zero such links on any product screen.** The first row is "All screens" | Codex 3, confirmed by measurement |
| 2 | Header, hub first, then a three level tree | A flat **"Built so far" list of 106 rows** sits between them, and the tree below repeats 30 of its 32 links. The panel is **5039px tall** | Codex 3, confirmed by measurement |
| 3 | "the roadmap is rendered by none of them, the hub included" | `overview.html` renders the roadmap, and **deliberately**: the root `_nav.js` carries a documented `SIBLINGS` entry built for it. **The pack and a project decision disagree, and the decision was never written down as one** | Codex 3 |
| 4 | Five sections in `NAV_SECTIONS` | Around thirty, one per decision. Benign, and worth naming before it is inherited | grep |

### 3.8 The grey contract

| # | What | Found by |
|---|---|---|
| 1 | **Twenty identical inline declarations, `style="font-size:var(--wf-t-m)"`, across five responsible states.** `conventions.md` 1.2 criterion 2: a rule on two or more screens moves into `_wf.css` | **grep, and only grep** |
| 2 | **Three scrims, two alphas, no variable:** `rgba(0, 0, 0, 0.66)` twice and `rgba(0,0,0,0.6)` once | Codex 1 |
| 3 | The palette card on the hub **hardcodes all seven greys twice each**, as a background and as a label, so the page documenting the tokens is the page that lies first if one changes | Codex 1, grep |
| 4 | That card says **"six greys"**, shows **seven** chips, and `_wf.css` defines **eight**. `conventions.md` 1.1 and the stylesheet header say "six" as well. **`--wf-ink-faint` is documented nowhere** | Codex 1, grep |
| 5 | **`_wf.css` did not parse.** A superseded draft of the ticker, lines 460 to 486, had lost all five of its selectors and stood as five selectorless declaration blocks. CSS error recovery then swallowed the next rule as part of the bad prelude, and that rule was `.wf-main { padding-block: var(--wf-s-2) }`. **Measured consequence: `padding-top` computed to `0px` on all 106 pages at 360, 1024 and 1440, so the first block of every screen touched the header seam, and `padding-bottom` was `0px` at 360.** The live ticker rules live at NODE 0.8 further down the file and were never affected, which is why nothing looked broken. Fixed by deleting the dead draft. Its comments cited 92px tiles and 44px art against the live block's 128px and 34px, so they were stale as well as orphaned | founder on screen, then Claude with a CSS parse |
| 6 | `.wf-won-card .wf-won-art` closed with a doubled brace, `}}`. A stray brace at top level is discarded by the parser, so no rule was lost. Fixed anyway: the file now parses with zero orphans and depth zero | Claude, CSS parse |

**Value changed deliberately, and named as the convention requires.** `.wf-main` at 1200 and up: `padding-bottom: var(--wf-s-4)` became `padding-block: var(--wf-s-4)`. Why: with the parse repaired the top gap was `--wf-s-2`, 16px, against 40px at the foot, and the header is sticky, so the first block sat under a live edge with a mobile gap. Top and bottom are now the same 40px on the desktop grid and stay 16px at 360.

### 3.9 Owed by the contract and not present

| # | What | Owed by | Found by |
|---|---|---|---|
| 1 | **`wireframes/CLAUDE.md` does not exist.** Up to ten lines, the rules that break the artefact forever if broken. It is the file that survives a compaction when the root one does not | step 2 | contract checklist |
| 2 | **The strategic dimension of `benchmark.md`, "the reveal moment", chosen by the founder on 5 August 2026, is named nowhere** in `screens.md` or `conventions.md`. The element that expresses it exists, `.wf-stage-frame` under `D-48`, one size through every phase. The link was never written | step 4 | contract checklist |
| 3 | `wireframes/docs/critique.md` and the "Before to after" section of the hub | step 9, in progress | contract checklist |

---

## 4. Withdrawn on verification, with the reason

**None of these was deleted.** Each was raised by a real instrument and each failed a re-read in the current files.

| # | Raised | By | Why it does not stand |
|---|---|---|---|
| 1 | 200 or more `D-NN` citations on wireframe pages, against `D-66` | grep | **Every one is inside an HTML comment.** `D-66` binds what the person looking at the screen sees. The grep is a sign, not a verdict, and this is the case it over-reads |
| 2 | `account`, `-degraded` and `-empty` show a header balance that disagrees with the body | my own measuring script | **Regex artefact.** The script matched the caption "Balance" against the next figure. All three pages set `money` explicitly and agree with themselves |
| 3 | Fifteen saturated colours and a second font stack in `overview.html` | Codex 1 | **The hub is a case study page, not a wireframe screen.** The same `:root` block sits inline on nineteen `ia/` pages: it is the project's site chrome and `_wf.css` does not own it. The swatch hexes are the exception and stand, as 3.8 row 3 |
| 4 | Twenty two token literals in `overview.html`'s stylesheet | Codex 1 | Same reason. The hub's own type scale is not the grey contract's |
| 5 | The `≡` glyph on the panel toggle is a leaked icon | Codex 1 | Prototype chrome, not the product surface. Stage 06 never colours it |
| 6 | `--wf-ink-faint` is a colour outside the declared contract | Codex 1 | **It is declared, in the contract file.** What is wrong is the count that describes it, and that is carried as 3.8 row 4 rather than dropped |
| 7 | 106 pages lack `<aside id="sidebar">` and `window.NAV_BASE` | Codex 3 | **Deliberate.** The stage has its own panel by the pack's design. But `CLAUDE.md` states the sidebar rule without the exception, so the rule file is what is out of date. Carried to the stage close, not fixed here |
| 8 | The registry counts 106 and the folder holds 107 | Codex 3 | `overview.html` is the hub, not a product page. Every number in the repository counts product pages and they agree |
| 9 | The reader could not tell which grey each class sits on, nor read the shell, the footer, the mobile bar or the self exclusion dialog | the reader | **My restriction, not the artefact's fault.** `_wf.css` and `_nav.js` were outside his allowed set. The residue is real and kept: a reader of the files sees `data-ex-pinned` where the dialog is, and the dialog itself exists only inside the renderer |
| 10 | No node assigns the rarity tiers a colour | the reader | **A gap `CLAUDE.md` already names**, in as many words: the rarity ladder is the one thing not written into `baseline.md`, and the stage that needs it walks it first. Stage 06's input, not this stage's defect |
| 11 | A 3px clip on `.wf-mid-a`, a 16px rail overflow at 1440, and horizontal scroll inside the hub's tables | auditor 3, self withdrawn | The first is the deliberate middle truncation with `text-overflow: ellipsis`, the second is the seam toggle that `conventions.md` section 8 specifies, the third is the sanctioned `.table-wrap` containment |
| 12 | Overlapping elements on several screens | auditors 1 and 3 | Inline spans inside one wrapping paragraph, content inside closed `<details>`, and visually hidden labels. Not overlaps |

---

## 5. Where two instruments disagree, carried rather than voted on

**1. Are there dead ends.** Codex reports none, reading the markup and the map: every state has a product exit, and the only two dead by design are the two the map declares, `2.2` and `5.7`. **Auditor 1 reports that `case-open`, `-2` and `-5` have no route forward to the outcome at all**, having enumerated all thirteen visible controls in `main` at 360 and found none pointing at `case-outcome*`, against `flows.md` flow 1 which requires reveal to lead to outcome. **The two are not the same question:** Codex asked whether a state can be left, the auditor asked whether the flow can be walked. Both readings are defensible and the second one is the one a person feels. **Verification decides, and it has not run yet.**

**2. Is a rule duplicated inline on two or more screens.** Codex reports none, reasoning that the only `<style>` block in the folder is on the hub, so no rule can repeat across screens. **Grep reports twenty identical `style="font-size:var(--wf-t-m)"` attributes on five screens.** Both are correct about what they read: Codex read `<style>` elements, grep read `style` attributes. **The pack gives this class to grep for exactly this reason**, and the disagreement is the demonstration.

---

## 6. What each instrument caught that no other could

**Codex alone:** the header money that never moves, which is invisible in a browser because both figures look plausible on their own and only the arithmetic across two elements gives it away. The navigation contract read against the rule as written rather than as practised. The count reconciliation.

**The browser alone:** every one of the 22 dead controls, none of which is visible in the source, because a button with no listener looks exactly like a button with one. The 360px failures. The measurement that the footer is 1732px against a 319px screen body.

**Grep alone:** the twenty inline declarations, and the counter that says 46 pages have no main action.

**The reader alone:** that `.wf-fig-missing` carries the load on every screen in the product and **nothing anywhere says how a missing figure should read once it is coloured.** Painting it as an error breaks deposit and responsible, where missing is the normal case. He is the only instrument that had to make the decision rather than check it.

**And worth stating plainly:** a string sweep I ran myself on 22 August reported zero process prose across all 106 pages. **Three browser auditors found thirty two strings.** The sweep read `innerText` of a body with the panel removed, and the language popover is closed until pressed, so its text was never in the string it read. **A sweep that cannot open a popover cannot audit what is inside one**, and that is the division of labour `CLAUDE.md` describes, arriving as a demonstration rather than as a rule.

---

## 7. Closed on 23 August 2026 by `D-82`, before the fix queue reached them

**The founder opened the prototype and found four of these again by looking.** That is not a failure of the audit, which had already raised all four: it is the distance between collecting a finding and shipping the fix. The rows below are closed, and the class they came from stays open where other instances remain.

| Class | Row | What closed it |
|---|---|---|
| 3.1 dead control | The 404's `Search` on 7 pages | **The field is gone from node `0.3` entirely.** Founder decision: the page exists to say one sentence and offer one way out. `system-404-noresult.html` deleted with it |
| 3.2 process prose | `STATUS` / `SERVED AT` / `YOU CAME FROM` / `Retry-After` on 8 system pages | Moved out of the body into each page's own annotation. **The address bar already showed the served address**, so the block was redundant as well as wrong |
| 3.3 one main action | The 404s carried a primary `Search` and two card routes | Now one `Home` primary and one `All cases` beside it. **`conventions.md` 1.6 holds on these pages again** |
| 3.4 breaks at 360 | Cookie layer 2: both decisions ~300px below the region's own scrollport | The decision row is pinned to the foot of the scrolling region. Reachable at every height, and the CNIL symmetry now holds as a scroll position as well as a width |
| new, not raised by any instrument | **`_wf.css` did not parse, and `.wf-main` lost its `padding-block` on all 106 pages** | Dead ticker draft deleted. See 3.8 rows 5 and 6 |
| new, raised by the founder | Node `0.10` carried two forms and fourteen fields | One form, the FAQ above it, the appeal on `support-appeal.html` |
| new, raised by the founder | Node `3.1` kept the daily panel above the results in the filtered and empty states | Panel scoped to the unfiltered shelf. **This restores section 2 of `catalogue.md`, which `D-68` had overridden and whose cost it had printed** |
| new, found while fixing the above | The daily prose on all 7 catalogue pages described the design before last | Corrected. It had said the daily case "sits in the grid ... so it is filtered and searched like any other case", false since `D-68`, **and it survived the full audit of 22 August** |

### What the eight instruments could not see, and it is one line

**None of them asked whether the stylesheet parses.** The taxonomy has a class for a value drifted from its token, for a state absent from code, for a rule violated and for a fact without a source. **A file that parses to fewer rules than it contains passes every one of them**, because every instrument reads CSS as text and the browser reads it as a grammar. Added to the contract checklist as its own line, with the check that found it: brace depth to zero, no declaration at top level.

### And a class the taxonomy did not have either: nothing was measured between blocks

**`D-83`, 23 August 2026.** The founder pointed at one gap on `3.1` filtered. **A scan of all 106 pages at two levels of nesting, ink to ink rather than box to box, found twenty distinct pairs of adjacent blocks touching at under 12px**, sixteen of them on pages nobody had opened.

**No instrument had asked.** Every check in section 3 asks whether something is present, whether it is honest, whether it survives 360, or whether it matches its token. **None asks whether two things that are next to each other look like two things.** The scan joins the parse check as an instrument of its own: adjacent block pairs, ink gap under 12px, reported per class pair rather than per page.

**Zero pairs after the fix**, which is two declarations rather than twenty. `conventions.md` 1.2a and `D-83` carry the rule and the reason.
