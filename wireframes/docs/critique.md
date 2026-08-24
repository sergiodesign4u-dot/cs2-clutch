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

---

## 8. Raised on 23 August 2026 by `D-89`, and two of them are the same class the taxonomy still has no row for

**Found by:** the founder, opening the published prototype. **Verified by:** Claude with a browser, and two instruments written for these findings specifically.

| # | Class | Finding | Status |
|---|---|---|---|
| 8.1 | **attribute that did not take effect** | **`[hidden]` does nothing to an element with a display rule.** `[hidden]` is a user-agent rule and `.wf-hist { display: flex }` beats it, so the panel marked hidden went on rendering: **Deposits selected with the rolls list underneath it, live on the published site.** The sweep checked that the strip rendered and that the selected panel appeared; it never checked that the other one had gone | **Fixed.** `[hidden] { display: none }` stated once, author-side. And the tabs became pages, so the hiding is gone as well as fixed |
| 8.2 | **two renderings of one fact** | **One account, two names, two ids, on one page.** The band read `Spectacle` and `ID 953709`; the record card ten pixels below read `nightjar_cs` and `acc-7f3a91c4`. **Third instance of one class**, after the header reading 18.60 for the value of items held while the page read 130.60 | **Fixed.** `WF_WHO` is the one source and anything that prints identity reads it. `profile-steam-down` overrides it once, so its band cannot claim a name its own card says is unreadable |
| 8.3 | **invented number** | **The withdrawal ledger printed "our published ceiling is 48 h" and no such figure exists in this repository.** `withdraw-clock.html` renders every one of its ceilings as not published, which is a live `[?]`. Raised by the agent that built the page rather than smoothed | **Fixed.** No row prints a ceiling figure. The overdue state is still drawn, and it says why: **a ceiling published into a product with no state for missing it is a promise with nothing behind it**, so the state comes first and the number later |
| 8.4 | **claim wider than the fix** | **Four shell controls were still under 44px** while three nodes claim AAA: the mobile deposit entry at 36, the ticker pause at 26, the rail toggle at 32, the link-shaped button at 15.6. The 22 August fix grew `.wf-btn--small` on sixteen pages, **and a control in the shell is on all 113** | **Partly fixed, and the rest is recorded rather than patched.** See 8.5 |
| 8.5 | **fix that created a worse defect** | **Applying the hit-area patch to all four made two controls overlap their neighbours.** The ticker pause grew into the tile beside it and the link-shaped button over the link next to it. **Two overlapping targets is worse than one small target**, because a press near the edge fires the wrong control | **Reverted on those two, measured before and after.** They stay under 44 with the reason recorded: their fix is a layout change, not a hit area. The other two keep the patch |
| 8.6 | **target size, pre-existing** | **228 controls under 44px across six sampled pages**, once inline links in prose are excluded as WCAG allows. The bulk is the rail item at 31, the rail's social links at 28 and the two money figures at 17 and 20 | **Open, and not patched.** The rail items are a vertical list at 31px, so a 44px hit area would overlap the item above and below: 8.5 again. **Owner: a layout decision on `0.1`, not a stylesheet patch** |

### The instrument gap this leaves, stated because it has now cost three findings

**An assertion that reads one element cannot catch a contradiction between two.** 8.2 is the third instance and the answer has been the same each time: one source, both read it. **The sweep gained a rule after the first instance and it was written for money rather than for the class.**

**And an assertion that reads an attribute cannot tell you the attribute took effect.** 8.1 passed every check in the taxonomy because every check reads the DOM as text or reads one computed property in isolation. **The contract checklist gained a CSS-grammar line after `D-82`; it now needs a second: for any element the code hides, assert it is not rendered.**

**Both instruments were written after the founder pointed at the screen.** That is the honest order and it is worth recording: **for the second time in two days, the thing eight instruments missed was found by a person looking at a picture of it.**

---

## 9. Raised on 23 August 2026 by `D-90`, and every one of them came from a person looking at a screen

**Found by: the founder, on five screens in one sitting, plus one row this pass found by running an assertion it had just written down.** This section has a different shape from the eight above it and the difference is the point. **Sections 1 to 8 record what instruments asserted. Nothing the founder raised in this one came from an assertion**, and the one row that did, 9.8, was found by writing the assertion out and running it once. **That instrument existed for less than an hour before it paid for itself**, which is the whole argument of this section demonstrated rather than made. No sweep raised any of these, no instrument was told to look for them, and the acceptance run over the same pages had passed the day they were built.

**Verified by:** Claude with a browser, re-reading each place in the file before touching it, per `CLAUDE.md` "Verify before fixing". **Nothing here was withdrawn on verification**, which is itself worth recording: findings that come from a person looking at the rendered thing do not evaporate on a re-read the way a snapshot reading does.

| # | Class | Finding | Found by | Status |
|---|---|---|---|---|
| 9.1 | **declared field not rendered** | **The inventory card had no picture for the skin.** Field one of the canonical skin card `0.6` is the image. The grid had a slot and put it on a background layer behind the text, **which in a grey wireframe cannot be told apart from having no slot at all** | **The founder**, on the built page | **Fixed, in two passes.** The picture leads the card, under the tick and the Share, at 4 by 3. **The first pass put it below the price and the founder sent it back**: his reference has the picture first, and a skin is recognised by its finish before it is read by its name |
| 9.2 | **space reserved for nothing** | **The card reserved an empty band at rest.** Build two put the three acts in the flow and held their band open with `visibility: hidden` so that rest and hover matched in height. **The measurement was right and what it bought was a rectangle of nothing on the face of every card in the grid** | **The founder**, on the built page | **Fixed.** The acts are absolutely positioned over the whole card with a dim, so the two states are the same height **by construction rather than by measurement**, and the space the band held empty is the picture instead |
| 9.3 | **capability removed, not a line deleted** | **The receipt line records a value the product will not store.** "Won at 64.80, 17 Aug 2026 22:11" **is row `F2` of `cjm-to-be.md`**, the instance value receipt persisting onto the item, and `F2` is an MVP row. The founder: we will not store that | **The founder**, and only the founder could have: no file in this repository says what the product stores | **Removed from the surface, and the row is not closed.** `F2` stays in `cjm-to-be.md` carrying an open question rather than a quiet edit. **The question decides whether the row moved or died:** if the refusal is to the per-item copy, `F2` lives on `5.9`'s roll row and the card stops repeating it; **if the refusal is to retaining the value at the moment of the win at all, `5.9`'s returned column dies with it and `F2` has no home anywhere.** Owner: the founder. Counts unchanged at 40 MVP rows over 39 capabilities, `D-38`'s treatment |
| 9.4 | **one set of destinations, two carriers** | **Three buttons at the foot of `5.10`'s record column duplicated the account band's tab strip.** Settings, My items and History, ten pixels of scrolling below a strip carrying exactly those three | **The founder**, on the built page | **Fixed.** The three buttons are gone. The band is the carrier and the record column holds the record |
| 9.5 | **page length set by a list** | **`5.10`'s height was set by the message count.** At 1000 and up the page is two columns; the left one ends and the right one keeps going, **so an account with twenty messages made a profile page twenty messages long**, with a column of nothing beside the bottom half of it | **The founder**, on the built page | **Fixed at 1000 and above only.** `max-height: 46vh`, `min-height: 240px`, `overscroll-behavior: contain`, inside the same query that creates the two columns. **Below 1000 the rule does not apply:** the columns are stacked, there is no mismatch to fix, and a nested scroll region on a touch screen traps the page's own scroll, which would be a real defect traded for a tidy one |
| 9.6 | **provisional route outlived its decision** | **`5.10`'s main action pointed at a result instead of at a public profile.** "See yourself as a stranger does" opened `result-owner.html` | **The founder**, and the correction was the decision: we need the public profile, not a link to a result | **Fixed, and the losing argument is kept.** The control opens `player-owner.html`. **`7.1` block 6 refused a public profile outright**, because adding one would rebuild the trophy shelf that node was created to replace, **and that refusal is not deleted anywhere:** it stays in `7.1`'s own comment, in the node and in `D-90`, with its reason attached. It lost, it did not turn out to be wrong. What answers it is that every trophy on `7.3` carries a route to its own round proof and the page has no total, no rank and no tier |
| 9.7 | **two renderings of one fact** | **The result pages called this account `Nightjar`.** Everything else calls it `nightjar_cs`: `WF_WHO`, the account band on every signed-in page, and now `7.3`. `result-owner.html` is the owner state of those pages, **so it was one account with two names on two surfaces reached from each other.** **Fourth instance of one class**, after the header reading 18.60 while the page read 130.60, the profile band reading `Spectacle` against its own card's `nightjar_cs`, and the deposit figures | **The founder**, on the built page | **Fixed.** The result pages read the name the rest of the product uses. The two occurrences of the old string that remain are comment lines in `result.html` recording what it was, **because a name that was wrong on a published page is not deleted quietly** |
| 9.8 | **two renderings of one fact, fifth instance** | **The account menu says `Spectacle` on all 72 signed-in pages.** `renderAcct` in `_nav.js` writes the literal twice, into `.wf-acct-who` and into the control's `aria-label` as "Account, Spectacle", **while `WF_WHO.name` and the account band on the same page read `nightjar_cs`.** `D-89` declared this class fixed by making `WF_WHO` the one source: **the fix reached the band and never reached the menu that hangs off it.** And `profile-steam-down.html`, the one page that legitimately overrides `WF_WHO` to `Name unavailable`, gets a third reading, because its menu confidently prints a name its own card says cannot be read | **Not the founder. The assertion written one row above, for 9.7, and then run** | **Fixed, and the cost stays printed.** The literal is gone from both the menu's name line and the control's accessible name, and **`window.WF_WHO` is now declared at the top of `_nav.js`, above its first reader.** **That second half is the mechanism and it is the part worth keeping:** the single source had been declared halfway down the file, **below the function that renders the menu**, so the menu could not have used the fix even if `D-89` had looked at it. Verified over all 120 pages: 72 carry the menu, **0 disagree with their own `WF_WHO`**, and `profile-steam-down.html`'s override still resolves, **which is the test that the source is single rather than merely uniform.** **What it cost is not deleted by the fix:** `D-89` said the class was shut about the band, `D-90` said it about the result pages, and it was live on 72 pages while both were being written |

### The observation from `D-89`, and this round is the proof it was not acted on

**Section 8 already recorded it, in these words: the assertions ask whether the page scrolls sideways, whether it has one H1, whether a target is 44 pixels and whether a label wraps, and none of them asks whether the thing looks like something a person would use.**

**That was written on 23 August and every finding above was raised on 23 August, on pages built after it.** Two assertions were added in response to `D-89`, the `[hidden]` render check and `WF_WHO` as one source for identity. **Both did their jobs and neither prevented anything here**, because both were written for the instance rather than for the class: the first checks one attribute, the second checks one fact. **9.7 is the fourth instance of the class `WF_WHO` was created to close**, on pages `WF_WHO` was never wired into. **Recording an instrument gap is not the same as closing one, and the distance between the two is one working day and seven findings.**

### What a new instrument would have to assert, finding by finding

**Five of the seven are mechanically checkable and none of them was checked.** Naming the assertion is the part that has been missing, so each one is written as something that could be run tomorrow rather than as a wish. **One of the five was then run, within the hour it was written, and it returned 9.8 on 72 pages**, which is the shortest available proof that the gap is a gap and not a rhetorical one. **It is fixed now, and it was found by the instrument rather than by the founder**, which is the first time on this page that sentence is true.

| # | The assertion, stated so it could be written | Why the existing sweep misses it |
|---|---|---|
| **9.1** | **For every declared field of a canonical component, `elementFromPoint` at the centre of that field's box returns the field or a descendant of it.** The picture existed in the DOM and had a box; it was behind the text | Every present-tense check asks whether an element exists. **This asks whether it is the thing you would touch if you touched it**, which is the only form that separates "rendered" from "rendered underneath something else" |
| **9.2** | **No box taller than 24px inside a component renders no ink.** Walk the subtree: no text node, no border, no background differing from the parent, nothing painted. Report per component class | Sibling of the `D-83` gap scan and the same shape of question. **`D-83` asked whether two adjacent things look like two things. This asks whether one thing is a thing at all** |
| **9.4** | **No two carriers on one page render the same set of three or more destinations.** Collect every `href` with the carrier it sits in, rail, header band, page body, footer, and compare the sets | Near zero false positives at a threshold of three: one shared link between a rail and a body is normal, three in the same order is a duplicated strip. **Nothing in the taxonomy compares two regions of one page to each other** |
| **9.5** | **In a multi-column layout, no column may exceed its neighbour's height by more than one viewport, measured against a stress fixture rather than against the authored page.** | **The real gap, and it is bigger than this row.** Every instrument in this stage reads the page as authored. The profile ships with a handful of messages and passes a balance check that an account with twenty fails. **An assertion is only as good as the data behind it, and no instrument here has ever re-rendered a page with a list N times longer than the author typed** |
| **9.7** | **For each canonical fact, the whole corpus holds exactly one rendering of it, exceptions declared by name.** Render every page, read the account name wherever one appears, and assert the set has size 1 with `profile-steam-down` as the single declared exception, because its own card says the name is unreadable | This is the class assertion the money rule should have been after instance one. **It costs one pass over the corpus and it would have caught all four instances**, not the one it was written for. **It was written down here and then run, and it found a fifth: 9.8** |

### And two of the seven are not mechanically checkable at all, for two different reasons

**Saying which is more useful than a list of assertions nobody can write, so both are named rather than padded out.**

**9.3, the receipt line, cannot be caught by any instrument this repository could hold.** The line was **conformant**. `cjm-to-be.md` carries `F2` as an MVP row, the card rendered exactly what the row describes, and every parent check in the taxonomy passed because the parent was real. **The thing that was wrong was the backlog row, and what makes it wrong is a fact about the product's data model that exists in no file here.** An instrument can catch the inverse, a figure on a screen with no row behind it, and that check already exists. **It cannot catch a row that is real and unbuildable**, because it has nothing to compare the row against. The founder is the only source, and that is not a gap in the instruments, it is the boundary of what instruments are for.

**9.6, the repointed main action, was not wrong when it shipped.** `7.3` did not exist, the link resolved, the label was honest about what it opened, and `D-89` printed in the record that the control deliberately did not settle whether a public profile exists. **It became wrong the moment a decision landed, not the moment it was written.** No screen assertion can find that, because at no point was the screen inconsistent with itself.

**What can be built for 9.6 is a register rather than a check:** **every provisional route names the decision that would retire it, and nothing may survive that decision unrevisited.** `D-89`'s own text carries the entry already, in the words "this control does not settle it". **The instrument is one pass over the decision record: for each decision closed, list every place that named it as open.** That is bookkeeping, it costs a grep, and it is the only one of these seven an instrument could have raised before the founder did.

### The order this happened in, recorded again because it has not changed

**For the third time in two days, the thing the instruments missed was found by a person looking at a picture of it.** Section 7 recorded it, section 8 recorded it, and this section records it with the difference that **section 8's assertions were written and shipped and this round happened anyway.** The five checkable rows above are the first ones written as running code rather than as a lesson.

**And the one that was run came back positive, which is the finding that should outlast the rest of this section.** 9.8 is the fifth instance of the class two consecutive decisions describe as closed. **The gap was never that the class was hard to detect. It was that after each instance the answer was written for the instance:** a rule for the money figures after the first, `WF_WHO` after the third, and neither of them ever asked the corpus-wide question. **The assertion that finds all five is one pass and it took under an hour to write down once someone asked for it as code instead of as a lesson.**

### The rule 9.8 leaves behind, and it is one line

**A fix that goes where the defect was seen, rather than to every reader of the fact, is how a class survives being closed twice.** `D-89` saw the band, fixed the band, and wrote `WF_WHO` to make the band's source single. **The menu hanging ten pixels off that band was never opened**, and it could not have read the new source anyway, because `WF_WHO` was declared below the function that renders it. **A single source declared under one of its own readers is not a single source, it is a second one with a better name.**

**So the closing question for a fix of this class is not "does this page agree now".** It is: **who else renders this fact, and can every one of them reach the source.** That is answerable by the corpus assertion above plus one grep for the declaration's position, and both together cost less than the two rounds of prose this class has already been given.

---

## 10. Raised on 23 August 2026 by `D-91`, and not one of these came from a founder or from a sweep

**Found by: the agents building the settlement, reporting what they saw beside their own work.** This section has a different shape again, and the difference from section 9 is the whole reason it is written separately.

**Sections 1 to 8 record what instruments asserted. Section 9 records what a founder saw on a screen.** This one records a third source: **an agent given a job, doing that job, and reporting the thing next to it.** Every row below was raised by an agent that was building something else at the time. **None of them was in anybody's scope, no assertion was written for any of them, and the acceptance run over the same pages had passed.**

**Verified by:** Claude with a browser, re-reading each place in the file before touching it, per `CLAUDE.md` "Verify before fixing". **Nothing here was withdrawn on verification.**

| # | Class | Finding | Found by | Status |
|---|---|---|---|---|
| 10.1 | **two figures with no sentence between them** | **The item card printed our value and `Starting at` two rows apart and never said what their difference meant.** Not a bug in any file: every element was correct, both operands were on the face of every card in the grid, **and the person still met the gap at the checkout.** It is row `A1`, a pattern of 14 and the best-supported row in the backlog, **rendered as two figures instead of as a statement** | **The agent building the settlement line**, which is to say the defect was the reason for the work rather than a side finding | **Fixed.** `.wf-inv-out` is the last row of every card, the rule is said once above the grid, and the two grids between them carry five surcharges, four credits and three absences of two different causes |
| 10.2 | **empty state advertising a deleted feature** | **`account-empty.html` promised the per item receipt `D-90` had deleted the day before.** It read "each with what it was worth at the moment you won it. That figure is stored rather than recalculated." The founder decided on 23 August that the product will not hold that value; the card stopped printing it **and the empty state went on advertising it.** **An empty state promising a feature the full state no longer has is the worst place for the promise to survive: it is read by the one person with nothing to check it against** | **The agent building the settlement line**, outside what it was asked to look at | **Fixed.** The sentence now says what the card actually carries: our value, what a copy costs on the market, and what the difference means at the exit. **Same job, a true version of it** |
| 10.3 | **a fixed column count is a promise** | **`.wf-figs` was a hard four columns above 900px.** The case page's figures group went to five when the settlement figure arrived, **so the fifth sat alone on a second row with three empty columns beside it inside a bordered box.** The block did not break, it just looked like a mistake, **and no assertion in the taxonomy reads a grid against the number of children it has** | **The agent adding the fifth figure**, which reported that its own output looked wrong | **Fixed.** `repeat(auto-fit, minmax(160px, 1fr))`. The 160px floor is the width below which a mono figure and its caption stop fitting side by side. **35 pages carry a `.wf-figs` block and all of them now get a row that fits their own content rather than the count the author had on the day** |
| 10.4 | **the flagship statement at the weight of a caveat** | **The settlement disclosure shipped as `.wf-note`, this file's faintest and smallest prose.** Design principle 3: where money is about to be spent, cost never hides inside excitement. **The live product hides the difference until the till; putting it on the case page in footnote grey moves it earlier and keeps it hidden.** That is the shape of a disclosure that satisfies a rule without doing its job, **which is the same defect `D-91` exists to close, one level down** | **The agent that wrote it**, flagging its own output within the same pass | **Fixed with `.wf-cost-say`.** Body size, full ink, a rule down its leading edge so it reads as a statement the page is making rather than an aside from it. **It is not loud, it is legible:** no warning colour, because this stage has none and a cost stated plainly does not need one |
| 10.5 | **a comment asserting the opposite of what its rule does** | **Every `select` in the product had lost its dropdown caret.** The base `select` rule draws one from our own ink. **Two separate rules set `background` as a shorthand, and a shorthand resets `background-image`**, so between them they wiped it. **Ten selects on six pages rendered as text fields with words in them:** the four settings pages, support, and the withdrawal. **The comment sitting on one of the two rules said "its own arrow is left alone", which is how this survived: reading the file said the arrow was fine.** And **fixing one rule changed nothing, which is how it was confirmed to be two rather than one** | **The agent drawing the withdrawal's copy picker**, which reported that its own new control looked wrong and traced it rather than working around it | **Fixed with `background-color`, which is what both rules always meant.** Nothing else changes and the caret comes back on all ten at once. **The false comment is replaced with the record of what it said**, because a comment that was wrong on a shipped rule is not deleted quietly |
| 10.6 | **a record read as a rule** | **`withdraw-offer-expired.html` printed `48:00` twice while a line on the same page said the period is not published.** Both were true and the wording was wrong. **A record of what happened to one offer is not a rule about all offers:** `48:00` is how long this one stood before Steam closed it, a fact about an event we watched. **What we may not print is "we give you 48 hours"**, because that is Steam's period, it is theirs to change, and a rule of ours needs a source and a date | **The agent building the settlement**, outside what it was asked to look at | **Fixed by changing the wording rather than either number.** The line now says the elapsed is what this offer ran for, not a period we publish. **The old wording said we do not know the number while the same screen showed it twice**, which is the state the ceiling figure was in before `D-89` pulled it |
| 10.7 | **a cost on one route and not on the other** | **Node `3.7` carries the same receipt and the same sell control as `3.6` and had no settlement line.** The decision names `3.6` and not `3.7`. **A person whose reveal stopped part way reaches the same sell control and the same balance, and a page that carries a cost on one route and not on the other teaches that the second route is cheaper** | **The agent building the case pages, which flagged the gap rather than filling it** | **Filled, with the argument written down.** The reason for `3.6` is about the item and not about the animation. Same figures as `3.6`, because it is the same item on the same round: **if the two ever disagree, one of the two pages is describing a different open** |
| 10.8 | **one block, two renderings, no record** | **Block 7 exists on thirteen pages and got the `D-91` treatment on ten.** The three outcome states carry it with four figures: **no settlement figure, and no denomination clause on the expected value.** They carry the per-item settlement instead, which is a stronger statement about the same cost, **so this may well be right. What is wrong is that no page says so** | **This pass, counting the block across every page that carries it** | **Open, recorded, not patched.** The reason has to be the node's or the founder's and neither has been asked. **Recorded in `screens.md` section 70 as owed.** An unrecorded difference between two renderings of one thing is exactly how instances four and five of the two-renderings class happened |

### The second lesson, and it is not the one section 9 recorded

**Section 9 said the acceptance ritual asks about sideways scroll, one H1, a 44 pixel target and a wrapped label, and asks nothing about whether a screen looks like something a person would use.** That is still true and this round does not restate it. **This round adds something different, and it is about who reads the files rather than about what the instruments assert.**

**Five of these eight were found by an agent looking at its own output and reporting what was beside it.** 10.1 was the reason for the work. 10.3 and 10.4 are an agent saying **its own new thing looks wrong**. 10.5 is an agent whose new control looked wrong and who **traced the cause rather than working around it**, which is the whole difference between a finding and a local patch. 10.7 is an agent **declining to fill a gap it had no authority to fill and saying so on the record.**

**None of that is an instrument and none of it can be turned into one.** What it is, is a working posture, and it had already paid for itself once in the round before: `account-empty.html` carried the id `h2-items` on two headings, which is invalid and makes any `aria-labelledby` or anchor pointing at it resolve to whichever came first. **It was found by the agent rebuilding the card, outside its brief, and it is recorded in that page's own comment rather than in section 9**, because nothing in the taxonomy had a row for it.

**So the rule this leaves is about scope rather than about assertions: an agent that reports only what it was asked about is cheaper per pass and more expensive per round.** The three findings that cost most here, 10.2, 10.5 and 10.6, were all outside every brief that was issued.

### And one of the eight is about how this project reads its own files, which is worse

**10.5 survived because a comment asserted what the rule beside it did not do.** `select.wf-f` carried the sentence "its own arrow is left alone" and the rule under it set `background` as a shorthand, which resets `background-image` and wipes the arrow. **The comment was not stale, it was false when it was written.**

**This repository is unusually heavy in comments and that is a deliberate and good choice:** the reason for a rule lives beside the rule, so the next session inherits the argument and not just the code. **The cost of that choice is exactly this failure mode.** Reading a file here is fast and pleasant and **feels like verification**, and 10.5 is the case where it was the opposite of verification: **the only way to find the defect was to look at a rendered select, and the file actively said not to bother.**

**The one that makes it concrete: fixing one of the two rules changed nothing on screen.** An instrument that greps for `background:` on `.wf-f` would have found both. **A person reading the file found neither, twice, because both times the prose above the rule was reassuring.**

**So the line worth keeping is narrow: a comment is a claim about behaviour and it is never evidence of behaviour.** `CLAUDE.md` already says acceptance happens on screen and not in a table. **10.5 is the same rule aimed one level lower: acceptance happens on screen and not in a comment, including a comment we wrote ourselves in the same hour.**

### Which of the eight an instrument could have caught, and which needed something else

**Three of the eight are mechanically checkable today, one becomes checkable with a rule that does not exist yet, and four are not checks at all.** Saying which is more useful than listing eight assertions, so each is placed rather than padded out.

| # | Could an instrument have caught it | The assertion, or the reason there is none |
|---|---|---|
| **10.3** | **Yes, and cheaply** | **No grid whose `grid-template-columns` is a fixed track list may render a last row with more than one empty cell.** Count children, read the resolved column count, assert `children % columns == 0` or `children % columns >= columns - 1`. **It reads two computed values on one element, which is the cheapest shape of check this taxonomy has, and nothing in it looks at grids at all** |
| **10.5** | **Yes, and it is a grep** | **No rule may set the `background` shorthand on a selector that also matches an element the stylesheet gives a `background-image` to.** One pass over `_wf.css`. **Cheaper still: render one of each control and assert the computed `background-image` is not `none` where the base rule sets one.** Either would have caught both rules at once, **which is the thing a person reading the file could not do** |
| **10.6** | **Yes, and this one is an existing check aimed slightly wrong** | **No page may render a literal figure while also rendering a `wf-fig-missing` line about the same subject.** The `[?]` discipline already has an instrument; **it checks that unknowns render as unknowns and never that a known and an unknown about one fact sit on one screen.** Pair every `wf-fig-missing` with the nearest figure in its block and flag the collisions for reading |
| **10.8** | **Not today, and the rule it needs does not exist** | **The check is: every component class renders the same field set on every page that carries it, exceptions declared by name.** It is the sibling of 9.7's corpus assertion, one level up from a fact to a block. **What blocks it is that no file declares which blocks are meant to be identical across states**, so the assertion has nothing to compare against and would return every deliberate state variation as a defect. **The prerequisite is a declaration, not a script** |
| **10.1** | **No, and this is the boundary** | Every element on the card was correct, both figures were present and both were sourced. **The defect was that the product had never said what their difference meant, which is a fact about the business model and not about the page.** An instrument reading the DOM sees two correct prices. **It took a founder walking the live product with a screenshot on 18 August, and it is the input gate working rather than the instruments failing** |
| **10.2** | **No, and the reason is a timing one** | The sentence was true when it was written and false one day later, **and nothing on the page changed to make it false.** A decision did. **This is 9.6 again in a different costume:** a thing correct at ship, invalidated by a decision, with no screen ever inconsistent with itself. **The register 9.6 proposed is the answer to both:** every deleted capability names the surfaces that described it, and one pass over the decision record lists everything that mentioned a now-deleted row. **Second instance in two days, which is the argument for building it** |
| **10.4** | **No, and it is a judgement about weight** | An instrument can assert a contrast ratio and a font size. **It cannot assert that the most important sentence on a page is rendered at the size of the least important one**, because importance is not in the DOM. **What could be built is a much narrower thing: any element carrying a class named in a design decision as a required disclosure must not use the file's smallest type scale.** That needs a list of required disclosures, and no such list exists |
| **10.7** | **No, and it should not be** | The gap was real, the agent saw it, **and the right move was to flag it rather than to fill it**, because the decision named `3.6` and not `3.7`. **An instrument that flagged this would have been correct and would have been ignored**, since the decision record genuinely did not cover the node. **What closed it was a person reading the argument for `3.6` and asking whether it was about the item or about the animation.** That is the work, and it is not a check |

### The order this happened in, and this time it is different

**Section 7, section 8 and section 9 all end with the same sentence: the thing the instruments missed was found by a person looking at a picture of it.** That sentence does not fit this round and it should not be forced to.

**Seven of these eight were found by agents building the thing.** No founder review has happened on this round yet. **The instruments still caught nothing**, which is the continuity with the three sections above, **but the source that replaced them is different and it is cheaper: it is the same pass that wrote the code, noticing.**

**What that does not prove is that it scales.** 10.8 sat in plain sight across thirteen pages and was found by counting, not by noticing, **and it was found by this write-up rather than by any of the passes that built those thirteen pages.** So the honest reading is: **an agent reporting beside its own work catches what is in front of it, and it catches nothing at a distance of one page.** The corpus assertions from section 9 are still the only thing that reaches that far, **and three of the four rows in the table above are one of them.**

---

## 11. Raised on 23 August 2026 by `D-92`, and the finding is that closing an unknown can open a worse one

**Found by: the agent that closed the venue rows, checking what the closure was worth before writing that it was closed.**

**This section has one row and it is not a defect in a screen.** Sections 7 to 10 record things that were wrong on a page. **This one records something that was right on four pages and stopped being worth what it looked like.** No pixel moved, no assertion failed, and every instrument this project owns would have reported an improvement.

**Verified by:** Claude with a browser, re-reading each place in the file before touching it, and reading the drawn screens rather than the backlog to establish what row `A1` actually renders. **Nothing here was withdrawn on verification. One thing was corrected before it was written**, and that correction is 11.2.

| # | Class | Finding | Found by | Status |
|---|---|---|---|---|
| 11.1 | **an answer that removes the mechanism the question was buying** | **Naming the market as us made four `[?]` marks disappear and quietly invalidated the thing that made the number trustworthy.** Row `A1` is a pattern of 14, the best-supported row in the backlog, and **its outbound link exists so that a person leaves and confirms the price somewhere we do not control.** A link to our own listing proves nothing. **On the register the change reads as pure progress:** four venue rows closed on `0.11`, `5.1`, `5.3` and the map, and one figure became publishable. **On the product `A1` went from partly blocked to partly incoherent.** `0.11` section 2c restates it as six requirements and returns **partly satisfied**: one met, one met in specification, one met on three surfaces and broken on two, one met as a route and wrong in its label, one partly, one not met | Claude, checking what a closure bought before recording it | **Open.** Recorded in `0.11` section 2c with the verdict, and four narrower rows replace the closed one. **The label on the drawn link is founder-owned and was left as it is** |
| 11.2 | **the verdict was nearly written from the backlog instead of from the screens** | **The first draft of 11.1 scored `A1`'s outbound link as "not met, and not meetable".** Reading `case.html` instead of `cjm-to-be.md` showed **the link is drawn, points at `steamcommunity.com/market/`, and carries a Steam price in EUR with its own as-of.** So the route is met and **only the label is wrong**, which is a different finding with a different owner. **The same read produced 11.3**, which the backlog-only reading could not have produced at all | Claude, reading the drawn screens after drafting the verdict | **Fixed before publication.** The verdict in `0.11` is written against the screens and says so |
| 11.3 | **one backlog row denoting two different numbers with one word** | **`A1`'s "live market price" is Steam on `1.0`, `3.3` and `3.6` and is ours on `5.1` and `5.3`.** Both readings are correct where they sit. **Field 12 of component `0.6` calls them one field**, the entity inventory calls them one part, and the register calls them one row. **Before `D-92` they were one number read at two moments; after it they are two numbers with two owners.** Neither exit surface prints a Steam figure, so on those two the pair `A1` asks for is our price beside our price | Claude, reading five drawn densities against one field row | **Open and printed rather than fixed.** `0.6` section 3.3 records it and refuses both available fixes by its own rule: a sixteenth field, or a rename mid-project. **The mitigation it does take is that every density says in words which number it is showing** |

### Why this is a critique row and not a decision note

**Because the failure mode is one this project's logs exist for and no instrument here can see it.** Every check this repository runs is a check on a state: is the value present, does it match its token, does the id resolve, does the row have a parent. **A `[?]` that closes is a check going from red to green.** There is no assertion whose output is "this became green and got worse".

**And the arithmetic of it is genuinely misleading.** On the morning of 23 August the settlement carried an unnamed source on four surfaces. By the evening the source was named on all four and one blocked figure became publishable. **Counted as marks, the day was four closures and one unblocking.** Counted as requirements, **`A1` is less satisfied at the end of it than at the start**, and the register is the only place that difference is visible because it is the only file that restated the requirement instead of the mark.

### The rule this leaves, and it is one line

**A closure is worth what the answer buys, not what it removes from the open column.** `CLAUDE.md` already says a finding that does not survive verification stays in the log with its reason. **This is the mirror of that: an item that closes gets checked for what the closure cost, and the check is written into the file that owns the requirement rather than into the row that closed.**

**The concrete form of it here:** `0.11` section 2b closes the venue row and keeps the argument, and `0.11` section 2c is a second section that exists only to say what the closure did to the requirement underneath. **A closed row with no such section beside it is a row nobody checked the price of.**

### What an instrument could assert, and it is one of the three

| # | Could an instrument have caught it | The assertion, or the reason there is none |
|---|---|---|
| **11.3** | **Yes, and it is close to an existing check** | **No component field may render values in two different units, or from two different sources, across its densities without the density table declaring both.** The density table in `0.6` is already a machine-readable grid of field against site. **What it does not carry is a unit or a source column**, and adding one makes this a diff |
| **11.1** | **No, and this is the boundary** | The assertion would be "this requirement is still satisfiable", which requires knowing what the requirement was buying. **`A1`'s row says "an outbound market link" and does not say the link's job is that we do not own the destination.** That is in `B1-2`'s quotes, in prose, in another file. **An instrument reading the backlog row would have passed this** |
| **11.2** | **No, and it is a working posture rather than a check** | The correction came from opening the drawn page instead of trusting the specification. `CLAUDE.md` already says acceptance happens on screen. **This is the same rule pointed at analysis rather than at delivery: a verdict about what a product does is read off the product** |

### The order this happened in, and it breaks the pattern the last four sections recorded

**Sections 7, 8 and 9 all end with the same sentence: the instruments missed it and a person looking at a picture found it.** Section 10 broke that by having agents find their own work's neighbours. **This one breaks it again in a third way: the finding came from being asked to close something and checking the price of closing it.**

**Nothing was looked at. Nothing was rendered differently. The trigger was a task that said "close these rows" and a rule that says verify before fixing**, pointed one step further back than usual, at whether the fix was a fix.

---

## 12. `D-93`, and the two defects the instruments could not see

**24 August 2026.** The founder confirmed the venue and took the seven recommendations. Two pages created, twenty-nine touched. What follows is what the round found beside its own work.

### 12.1 A count taken from what was edited, which cannot detect what was missed

`D-92`'s closing paragraph reads: **"every venue absence was replaced by a margin absence rather than removed: three of them, across the two surfaces that carried one."**

**It was three of thirteen.** Eleven wireframe pages still carried "the venue is not chosen yet" the following day.

**The mechanism is the whole finding.** The count was taken by listing the surfaces `D-92` edited and counting the absences on them. **A count with that shape can only ever return everything**, because its denominator is its numerator. The count that would have caught it is a grep for the string across the corpus, which is one line and was not run.

**Found by:** Claude, building `D-93` and grepping for the string in order to amend it.

### 12.2 And nine of the eleven were not stale, which nearly made the fix worse

**Two of the eleven were the settlement's venue.** Where the copy comes from, answered by `D-92`. Simply stale, and fixed.

**Nine were a different question with the opposite answer.** `case-outcome` and its variants, `case-interrupted` and the five `7.1` result pages carry `F1`'s instance value receipt, which asks for **two named external venues** so a person does not take our word for what one instance is worth. `D-92` narrowed that question without closing it: **neither of the two can be us.**

**The first pass rewrote all eleven the same way**, so nine pages briefly read "there is no outside listing to filter to this float band, because the copy comes from us", **which is the opposite of what `D-92` decided about the receipt.** Caught before commit by reading `numbers.md` for the receipt's own row, reverted, and the nine now carry the narrowing instead.

**Two venue questions, one word, and both readings parse.** The same collision `CLAUDE.md` records for screen codes against capability codes, which is why that rule exists and why this one belongs beside it.

**Found by:** Claude, verifying its own edit against the node doc before committing it.

### 12.3 Two rendering defects that no text instrument can hold

| Defect | Why every instrument passes it |
|---|---|
| **The withdrawals note rendered on the sell-back ledger.** The panel's note was an `if (deposits) / else`, so the new tab fell through to "Every item this account has sent to Steam" | **The string is correct on the page it was written for.** No file contains a wrong value, no link is dead, no state is absent from code. The defect is a branch, and it is only visible rendered |
| **The bar read `1 sales`.** The count and its noun were concatenated with no agreement | **Latent on the two older tabs for a month**, waiting for a one-row account. It was not a defect until the first ledger with exactly one row existed |

**Both were found by taking a screenshot of the page that had just been built.** Fixed in the renderer rather than in the caller, so the next tab inherits both fixes.

### What an instrument could assert, and this time two of the three are cheap

| # | Could an instrument have caught it | The assertion, or the reason there is none |
|---|---|---|
| **12.1** | **Yes, one line** | **A decision that claims to have replaced a string must leave no instance of that string in the corpus.** Every decision record naming a phrase it removed gets a grep at close. Cheap, and it is the check that was skipped |
| **12.2** | **Partly** | An instrument can flag that one phrase, "the venue", resolves to two register rows with different owners. **It cannot decide which page means which**, because that is what the node docs are for. What it can do is refuse a bulk replace on a phrase with two rows behind it |
| **12.3** | **No, and it is the same boundary as before** | A branch that falls through to a neighbour's copy is correct text in the wrong place. **Only a rendered page has a place.** This is the fifth round in which the finding came from looking at the screen after building it |
