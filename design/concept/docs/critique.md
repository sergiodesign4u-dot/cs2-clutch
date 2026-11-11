# Stage 06 critique log

**Step 8, 10 November 2026, run 1.** The two screens in colour, Home v4 (`design/v4/index.html`) and the case screen v4 (`design/v4/case.html`), with every stylesheet and script they load, plus `design/concept/concept.html` and `design/concept/directions.html`, checked on two instruments taken independently and merged only when every set was complete, plus `/impeccable audit`. The labs (`design/v4/*-lab.html`) are not product screens and are out of scope. The roadmap sidebar is the course shell, not the product, and its findings are listed once as out of scope. Its visible place is the "Before and after" section of `design/concept/concept.html`, built after the second run.

**Founder's priorities, 10 November 2026:** "let's do 1, then 3 to 7, and 2 goes to stage 07" (translated). Rows 1 and 3 to 7 are fixed in `D-215`, row 2 is deferred to stage 07, rows 8 to 19 were taken in run 3.

## How it was run

| Instrument | Classes it owned | How |
|---|---|---|
| Claude, with a browser | Breaks at 360; a layout broken by a string; the eye's classes: a decision from nowhere, an AI default, a card that differs between screens | Real Chrome, window 375 so that `clientWidth` is 360, measured before each look; `scrollWidth` against `clientWidth` on four pages at 360 and 1440; every element past the right edge without a clipping parent; every leaf of text cut by its own overflow; the case screen walked at rest, five chosen, spinning and the outcome of five; Home and the case screen read top to bottom at 360 in 22 screenshots; touch targets, alt text, accessible names, heading order, landmarks, and a focus ring on each of the case screen's 58 controls |
| Codex, plugin `codex`, read only, `gpt-5.6-terra`, effort medium | Structure and text against the grey copy and `microcopy.md`; values and tokens; contrast from hex, links, facts without a source, orphans | Three tasks, one class group each, with a method and a coverage count. Task 1: 19 files and 4 995 lines for states, 25 files and 12 120 lines of strings, 54 files for the em dash. Task 2: 52 files and 19 243 lines for literals, 1 976 lines of token sheets, `concept.html` and `directions.html` against the last full `DESIGN-artifacts.md`. Task 3: contrast in 16 CSS files and 5 611 lines, links in 54 files and 20 260 lines, facts in 8 files, orphans in 7 |
| `/impeccable audit`, detector v4.7.0 | Accessibility, performance, theming, responsive, integrity | `impeccable detect --json` on both pages served locally, 96 findings on the case screen and 58 on Home, each one checked in the page before it entered the table |

## Findings

Severity: **P0** the stage cannot close with it; **P1** a WCAG AA failure or a broken promise; **P2** a rough edge; **P3** polish. Status: **confirmed** (re-read in the current file or the rendered page), **withdrawn on verification** with the reason, **deferred** with the owner.

| # | Sev | Class | Where | What is wrong | How to fix | Found by | Status |
|---|---|---|---|---|---|---|---|
| 1 | P0 | Source of values lost | `DESIGN-artifacts.md` | The file is 336 bytes. Commit `6e2fc5f` (D-205, 30 Oct 2026) replaced the whole 33 458 byte file with one paragraph about flags, and `d0c58c5` edited that paragraph. Every value's origin, which `_theme.css` comments point to and stage 07 reads, is gone from the working copy | Restore the text of `5317406:DESIGN-artifacts.md` and append the D-205 paragraph as its own entry; name the loss in `docs/decisions.md` | Claude | **fixed**, `D-215`: restored from `5317406`, D-205's entry appended; Codex run 2 checks the diff |
| 2 | P1 | Structural desync, a state missing | `design/v4/case-page.js:10-13` against `wireframes/case-degraded.html`, `case-nocounter.html`, `case-interrupted.html` | The case screen in colour has no values degraded, no observed counter, and interrupted reveal states; the grey copy has all three, and no decision drops them | Draw the three states on v4 (by query, as `guest` is) or record a decision that moves them to stage 07 | Codex | **deferred to stage 07**, founder, `D-215` |
| 3 | P1 | Contrast | Home, Before you spend, `.x6-stub h2` and `.v4p-h` | White heading on the pink stub `#ff6ca6`, 2.6:1; large text needs 3:1 | Deepen the stub's light end or set the heading on `--btn-fill` | impeccable | **fixed**, `D-215`: the stub runs from the brand pink to `--btn-fill`, 3.11:1 at the lightest stripe, and `.v4p-h` never drops under 19px |
| 4 | P1 | Contrast | Footer plates on both pages, `a.fl-plate.is-18`, `.is-pf` | Play responsibly subline 3.7:1, Every round title 3.9:1, subline 3.3:1, on the plates' gradients | Darken the plates' light ends or lift the sublines to white | impeccable | **fixed**, `D-215`: `--v4-fair-blue` `#0B6A8C`, sublines at full white; 4.62 and 5.07:1 |
| 5 | P1 | Contrast | Home, Before you spend figures, `.x6-from`, `.x6-r`, `.x6-k`, `.x6-ok` | 4.3, 3.9, 3.4 and 3.9 to 1 for small text on the red and teal plates | As row 4 | impeccable | **fixed**, `D-215`: full white on the cards, the plate on `--v4-fair-blue` (4.93:1), the hash box at .6 (green 5.98:1) |
| 6 | P1 | Contrast | Home, mode cards, `design/v4/theme.css:13,16,303`, `modes.css:67` | The 12px white description on Cases' pink end, 3.40:1, and on Upgrade's gold end, 3.65:1 | A darker start to both gradients under the text, or a scrim | Codex | **fixed**, `D-215`: Upgrade from `#9E6905`, 4.69:1; the Cases card from `--btn-fill`, 4.87:1 |
| 7 | P1 | Contrast | Home, Daily, `li.dc-card.dc-t5 b.dc-name` | ELITE in white on gold `#ce9623`, 2.6:1 for large text | A darker gold at the name's line, or a dark name | impeccable | **fixed**, `D-215`: `--g1` `#B07806`, 3.25:1, and a tier's name 19px on a phone |
| 8 | P2 | Breaks at 360 | Case screen, What is in this case, `.wf-d-axes` | "Field-Tested · StatTrak · Covert" is cut to "Co..." (139 of 149px), at 11px | Let the line wrap to two at 360 | Claude, impeccable (11px) | **fixed**, run 3: the line wraps to two at any width (`case-body.css`), 139 of 139px at 360 |
| 9 | P2 | Breaks at 360 | Case screen, outcome of five, card name | "Water Elemental" is cut to "Water Element..." | Two lines for the name at 360, as the item cards do | Claude | **fixed**, run 3: on a phone a name of two to five takes a second line (`case-stage.css`) |
| 10 | P2 | Breaks at 360 | Case screen, outcome of five | The group actions, Add funds to open 5 again, Sell all 5, Send 5 to Steam, start at 895px; the first screen ends at 715px above the bottom bar | Lift the action group above the cards at 360, or pin it | Claude | **kept by the founder, 11 Nov 2026**, option C: each card's own Sell is on the first screen and the group acts stay one scroll down; pinning one Sell all (B) and moving the group above the cards (A, which needs the stage's layout redone) were shown and not taken |
| 11 | P2 | Touch target | Header and case screen at 360 | Add funds 32x32, Favorite this case 40x40, the two money figures 14px tall, live drop names 12px tall as links | 44px hit areas without changing the drawn size | Claude | **fixed**, run 3: Add funds 44px and Favorite 44px of hit area, the drawn size kept; the stacked money figures and a live drop's winner name 24px, WCAG 2.2 target size, because 44 would take each other's taps |
| 12 | P2 | Small text | Header `.ac-fig.is-held .ac-v`; Coldfront countdown labels; at 360 also the footer counters' labels and the live drops' skin names | The value held, 140.95, at 10px; Days, Hours, Minutes, Seconds at 9px; Cases opened, Upgrades, Total users, Online now and Redline, Asiimov at 10px on a phone | 11px floor | impeccable | **fixed**, run 3: 11px for the value held, the countdown's labels, the footer counters' labels, a live drop's skin name on a phone, and the mode cards' Not launched yet |
| 13 | P2 | Same value, two forms | `design/v4/daily-home.js:38` against the case screen and the counters | Daily writes 2,000.00 with a comma (`toLocaleString('en-US')`); every other figure groups with a space, 41 208, 100 000, 367 013 504. `voice.md` has no grouping rule | One rule in `voice.md` and one formatter | Claude | **fixed**, run 3: Daily groups with a space; the rule is in `voice.md` C11 |
| 14 | P2 | Value beside its variable | `design/v4/theme.css:262,304,332` against `buttons.css:5` | Three buttons at 8px radius (Coldfront's action, the mode card's button, the tile price) where `buttons.css` holds one radius, 10px | `var(--btn-radius)` | Codex | **fixed**, run 3: `var(--btn-radius, 10px)` on the three |
| 15 | P2 | Value beside its variable | `case-open.css:108`, `footer-home.css:167`; `case-tiles.js:5`, `daily-home.js:14` and `:91`, `case-blocks.js:17` | `#FB3F8A` and white written as literals beside `--color-pink` and `--color-text-hi`; the scripts carry palettes as literals and Daily writes one into an inline gradient | `var()` in CSS; scripts read the tokens with `getComputedStyle` | Codex | **fixed**, run 3: CSS on tokens; the scripts' palettes read the theme: plates `--v4-plate-r1..r5-a/b`, the sparks `var()`, Daily's hues from `daily-home.css` `--hue`. `--v4-plate-r1-a` is the Upgrade gold of `D-215`, `#9E6905`, was `#B57A06` |
| 16 | P2 | Token outside the theme | `case-tiles.css:35`; `case-tiles.js:5` | `--color-money` #FFC44D, decided on 2 Nov 2026, lives in `case-tiles.css`, not in `_theme.css`, and the script writes the literal | Move it to `_theme.css` with its origin comment | Codex | **fixed**, run 3: `--color-money` in `design/_theme.css` with its origin; the header balance and the footer's icon read it |
| 17 | P3 | Origin missing | `design/v4/theme.css:22` | `--v4-tile-edge` has no origin comment while its three neighbours do | One comment | Codex | **fixed**, run 3 |
| 18 | P3 | Motion | Both pages | An overshoot curve, `cubic-bezier(.34, 1.56, .64, 1)` | Motion is ours, not the baseline's | impeccable | deferred to stage 11, which derives the motion |
| 19 | P3 | Leading | Case screen at 360, a section's subline and a note | Line height 1.2 where body text wants 1.3 or more | 1.35 at 360 | impeccable, run 1 at 360 | **fixed**, run 3: a section's subline and its note at 1.4 at every width, Daily's unit line at 1.4 |

## Withdrawn on verification

| Finding | Found by | Why it was withdrawn |
|---|---|---|
| Three rare skins' art in `design/v4/rare.css:7-9` points at a missing `design/v4/concept/assets/skins/` | Codex | The custom property is read in `design/_theme.css`, so the URL resolves from `design/`; all three pictures load with 200 on `rare-marks-lab.html`, `rare-lab.html` and Home |
| 54 "AI colour palette" findings: pink and violet on a dark ground | impeccable | The colour register is the baseline's by founder decision, `D-18` |
| Glow on dark, a marquee band, pulsing live dots, a radial halo, stripes, a side stripe on Best drops F, each live drop's top stripe in its rarity's colour (24 at 360), cards inside cards | impeccable | The baseline's visual language, inherited by `D-181` and walked in `D-194`; the band's cards are the open on row M, `D-213` |
| A counter for Upgrades, a mode not launched | Claude | Decided in `docs/decisions.md`: drawn, "the cost of the cell rather than an argument that was answered" |
| Trustpilot 4.1 and 1 870 reviews on Home | Claude | The badge is a founder decision of 1 Nov 2026, the string is `microcopy.md` 0.4-13, the figures are samples, `D-124` |
| The Live drops label covers part of a tile at 360 | Claude | The label is a chip over the strip's corner by decision, `D-204` and its update |
| What is in this case orders Mil-Spec 7.40, 6.90, 7.90 | Claude | The order is the ticket ranges', 1 to 100 000, which How this case works reads; not a value order |
| Text outside `microcopy.md` | Codex, zero | Spot check by Claude: 16 of 17 strings found in `microcopy.md`, the 17th, Field-Tested, is game data |
| Facts without a source, orphan blocks | Codex, zero | Figures are marked as samples, `D-124`; the blocks have IA nodes or `D-213` and `D-214` |
| The roadmap sidebar: 2.7:1 subheads, 9px badges, the first 25 tab stops | impeccable, Claude | The course shell, not the product; out of scope of this stage |

## What held

No horizontal scroll on any of the four pages at a measured 360 or at 1440, in any of the four case states walked. No image without `alt`, no control without a name, one H1 and no skipped heading level on both screens, `lang="en"`, landmarks present. All 58 controls of the case screen show a focus ring. `prefers-reduced-motion` answered in 42 blocks on the case screen and 34 on Home. No em dash in 54 files. `concept.html` and `directions.html` agree with the last full `DESIGN-artifacts.md` in colour, type and radius.

## Run 2, after the fixes, 10 November 2026

The touched files only: `DESIGN-artifacts.md`, `design/v4/theme.css`, `proof-home.css`, `footer-home.css`, `daily-home.css`, `case-blocks.css`. Codex, read only, `gpt-5.6-terra`, one task with four classes (restore, contrast of every changed pair with the stripes over it, values beside their variable, origin comments). Claude: the detector again at 1280 and at a measured 360 on both pages, no product contrast finding left at either width; the four pages at 360 and 1440 with no horizontal scroll and no console error; the changed plates looked at in screenshots.

| # | Sev | Class | Where | What is wrong | How to fix | Found by | Status |
|---|---|---|---|---|---|---|---|
| 20 | P1 | Contrast | Home, Daily, `.dc-card.is-hero` | The available tier lifts its fill 22 % to white: the white name at 2.47:1 on Elite, and 2.3 to 2.5:1 on Silver and Legend, under large text's 3:1 | The light as an edge of the tier's hue, not a paler fill | Codex (Elite); Claude extended it to every tier | **fixed**, `D-215` run 2: a 2px inner ring of `--hue` |
| 21 | P3 | Value beside its variable | `theme.css`, `proof-home.css` | `#DF055C` written beside `--btn-fill` | `var()` alone | Codex | **withdrawn on verification**: it is the fallback of `var(--btn-fill, #DF055C)`, the pattern `theme.css` already uses for pages that do not load `buttons.css` |
| 22 | P3 | Old literal | `case-blocks.css:112` | `#FF5C9C` still in a stylesheet the case screen loads | Remove | Codex | **withdrawn on verification**: `.v4p-bar`, a bar with no text on it; no variable holds that value |
| 23 | P3 | Restore | `DESIGN-artifacts.md` | A difference beyond `5317406` plus `D-205`: a `D-215` entry | None | Codex | **withdrawn on verification**: the `D-215` entry is the value record the change requires |

Measured after the fixes: every pair below AA in run 1 now passes, small text 4.62 to 6.02:1, large text 3.11 to 3.31:1.

## Run 3, rows 8 to 19, 10 November 2026

Founder: "let's do it", rows 8 to 17 as one batch, row 10 shown first. Claude: the detector again at 1280 and a measured 360 on both pages, the four case states and Home signed in at 360 and 1440 with no horizontal scroll and no page error, the changed labels measured in their cells. Codex, read only, `gpt-5.6-terra`, one task on the diff: values beside their variable, the plates' contrast, whether the ellipsis removals win the cascade, the grouping rule against every figure in `microcopy.md` and `_nav.js`, the em dash.

| # | Sev | Class | Where | What is wrong | How to fix | Found by | Status |
|---|---|---|---|---|---|---|---|
| 24 | P1 | Contrast | `proof-home.css` `.x6-w` | White at .9 on the r1 and r2 plates' light ends, 4.13 and 4.42:1 at 12px | Full white | Codex | **fixed**: 4.69 and 5.16:1 |
| 25 | P3 | Value beside its variable | `case-tiles.js`, `daily-home.js` | `#fff` in a `color-mix()` and `#FFFFFF` as a script's fallback | `var(--color-text-hi)` | Codex | **fixed** |
| 26 | P3 | Small text | `.wf-d-axes` | 11px read as body text, the detector's floor for it is 12 | None | impeccable | **withdrawn on verification**: a meta line under the name, at the 11px floor for functional text the critique holds |

Held: the ellipsis removals win the cascade, `.wf-d-axes` on order and `.v4c-won-name b` at 0,7,1 against 0,6,1; no figure in visible text groups thousands with a comma; `--color-money` is declared once.

## The stage contract as a checklist, 11 November 2026

A separate table from the defects, by the pack's rule: both instruments read what exists, so a step that never happened shows in neither. Built by a read-only Claude subagent against `06 - Concept.md` ("Вхід і вихід" VI, "Перед етапом" G, "Що на виході" O, "Готово, коли" R), then checked by Claude: rows 15 and 36 are done since (the Before and after section and five pairs, one at 360), and row 26 was narrowed in the browser (Home v4's case links open v4's case screen; one link, What this case pays, opens the grey case screen).

| # | Contract line | Verdict | Reason | Proof |
|---|---|---|---|---|
| 1 | VI: every declared input read; the contrast screen chosen | done | The gate found every input; the contrast screen is 3.3 | `D-182` |
| 2 | VI, R: `DESIGN-artifacts.md` gives every value's origin, for 07 | not done | Restored, but v4's values never reached it; `D-215` names it as a cost only | `DESIGN-artifacts.md`; `D-215` |
| 3 | VI, R: `concept.md` holds taste, attributes, brand and the chosen layout | not done | The layout section still records direction 2; v4 and `D-209` are absent | `concept.md` section 7 |
| 4 | VI: `design/_theme.css` is the one source 07 moves by `git mv` | not done | v4's values live in `design/v4/theme.css` and the block sheets; `D-209` waits for a named fold decision | `design/v4/index.html` links; `D-209` |
| 5 | VI, O: two coloured screens in `design/` | done | Home v4 and the case screen v4 | `D-209`, `D-213` |
| 6 | VI, R: the plate on `concept.html` for 09 | done | One collected plate, the brand exists route | `concept.html` Brand and references |
| 7 | VI, R: `references.md` visible, its section in `NAV_SECTIONS` | done | | `concept.html` |
| 8 | G: Refero | done | | `references.md` |
| 9 | G: impeccable | done | Detector v4.7.0 | this log |
| 10 | G: Magnific, Nano Banana 2, 4k | done differently | The founder chose Codex; recorded in `concept.md` without a decision number | `concept.md` section 5 |
| 11 | G: real photos, no grey placeholder | done differently | Real skin art, no stock (`D-183`); no placeholder found in runs 1 to 3 | `concept.md` section 6 |
| 12 | G: Solar icons as inline SVG | done differently | CSS masks (`D-191`); the stated style differs, Linear in one file and Bold in another | `DESIGN-artifacts.md` section 7; `_theme.css` |
| 13 | O: this log with a separate contract table | done | This table | here |
| 14 | O: `directions.html`, three directions | done | | `D-187` |
| 15 | O, R: before and after pairs in `screens/`, one at 360 | done | Five pairs, pair 3 at a measured 360 | `concept.html#before-after` |
| 16 | O, R: `_theme.css` naming convention and an origin on every variable | not done | Prefixes outside the convention (`--icon`, `--art`, `--mix`, `--shadow`, `--motion`, `--shape`, `--blur`) are undeclared; `--space-1..7` share one origin line | `design/_theme.css` |
| 17 | O, R: no inline styles on the pages | done | No `style=` in either page; scripts set runtime values | grep |
| 18 | O, R: copies, the grey screens untouched | done differently | Grey markup untouched; the shared data in `wireframes/_nav.js` edited by decision | `D-213`, `D-217` |
| 19 | O, R: `CLAUDE.md` gets the stage's rules and the keep-it rule | not done | Proposed to the founder, not written | `CLAUDE.md` |
| 20 | O, R: README Concept = Done | not done | Still in progress | `README.md` |
| 21 | O, R: decisions record the plate and the direction with what was rejected | done | | `D-184`, `D-185`, `D-187`, `D-209` |
| 22 | R: the brand fork asked and answered out loud | done | Brand exists | `D-18`, `D-181`, `D-182` |
| 23 | R: palette from plate pixels, two Google Fonts | done differently | Brand values as fact, the pink from a pixel; Roboto alone | `D-182`, `D-185` |
| 24 | R: `concept.html` is the stand of the chosen language, no contradiction | not done for v4 | The stand still shows direction 2 and links to the closed first copies | `concept.html` |
| 25 | R: both screens take colour only from the theme | not done | Only `design/v4/theme.css` is declared; literals remain in block rules (`case-blocks.css` heading colours, `case-stage.css`) beyond the ones run 3 fixed | `case-blocks.css:8` |
| 26 | R: links go to the coloured versions where they exist | not done, narrowed | One link, What this case pays on Home, opens the grey case screen; the rest go to v4 or to grey screens that have no coloured copy, as the pack asks | browser, 11 Nov 2026 |
| 27 | R: the same card looks like one product on both screens | done | The W7 card and its ring on both | `D-213`, `D-214` |
| 28 | R: every value pairs with an attribute or the taste | not done | v4's values come from founder picks not written into `concept.md` | `D-209`, `D-213` |
| 29 | R: WCAG AA on every pair | done | Runs 1 to 3 | `D-215` |
| 30 | R: structural desync zero | not done | Three states deferred to 07 by the founder (`D-215`); the markup diff was not rerun since v4's scripts began writing markup | `D-215` |
| 31 | R: `done:true` for Directions and Concept | done | | `/_nav.js` |
| 32 | R: `wip:true` removed from the Concept group | not done | Still set | `/_nav.js` |
| 33 | R: both screens at a measured 360 | done | | runs 1 to 3 |
| 34 | R: `/impeccable critique` | not done | It ran on the first copies (`D-191`), never on v4 | `D-212` to `D-214` "The cost" |
| 35 | R: `/impeccable audit`, verified, fixed, a second pass | done | | runs 1 to 3 |
| 36 | R: the Before and after section on `concept.html` | done | Built 11 Nov 2026, in `NAV_SECTIONS` | `concept.html#before-after` |
| 37 | R: the closing ritual and GitHub | not done | Waits on 19, 20, 32 | |
| 38 | R: this checklist | done | | here |

**Idle control.** The table has fourteen not done rows; it was not passed formally.

## Run 4, `/impeccable critique` of v4 and the structural diff, 11 November 2026

The founder's go: "yes, run both". `/impeccable critique` as the skill asks it, two isolated read-only subagents: A, a design review in the browser at 1440 and 360, unanchored by any detector output (Home 25 of 36, n/a for flexibility; case screen 24 of 40); B, the detector at 1280 and 375 and its overlay in the page. Codex, read only, the structural diff of both v4 pages against their grey copies. Claude verified each row below in the browser or the file before it entered. Status: **open, for the founder** until the founder sets the priorities; nothing here is fixed yet.

| # | Sev | Class | Where | What is wrong | How to fix | Found by | Status |
|---|---|---|---|---|---|---|---|
| 27 | P0 | Risk moment | Case screen, the outcome of five when the balance is short | After a loss (62.00 spent, items 50.60) the first and largest act is "Add funds to open 5 again for 62.00 coins"; no line states the net, −11.40. A deposit chained to a reopen at the low point of the journey, against principle 3 and the compliance stance | A net line first ("Spent 62.00 · items 50.60 · −11.40"); keep, sell and send as the acts; the reopen quiet and never a deposit | critique A | confirmed in the browser; open. Two main acts on the outcome are `D-38`; turning one into a deposit when short is not |
| 28 | P1 | Structure | `design/v4/case-page.js` outcome links | Check this round, Share a round and Send to Steam carry no round or item; the grey outcome sends `?round=`, `?item=`, `?items=` | Pass the won round and items where a record exists | Codex | confirmed; open |
| 29 | P1 | Risk moment | Case screen, five chosen, balance short | The act turns into Add funds and the total and the After this open line disappear; the shortfall is never named | Keep "Open 5 cases · 62.00" with "you have 61.80, 0.20 short"; Add funds as the second act | critique A | open, to verify on the exact balance |
| 30 | P1 | Clarity at the spend | Case screen commit line at count 5 | "expected value 11.68 coins" stays per open beside a 62.00 total | Scale it, "expected 58.40 of 62.00", or name it per open | critique A | confirmed; open |
| 31 | P1 | Trust | Footer counters on both pages | "3 349 339 upgrades" for a mode marked Not launched yet reads as invented numbers to a doubter | Drop the counter or say what it counts | critique A | open; drawn by founder decision, so the founder's to reopen (run 1 withdrew it on that decision) |
| 32 | P2 | Value without its chance | The stage's strip and the reel tiles | A value with no chance beside it, against the rule that the two travel together (`D2`) | A chance chip, or no figure on the tiles | critique A | open; the W7 card is `D-213`, the founder's to reopen |
| 33 | P2 | First screen | Home and case at 360 | The promise (RTP, EV, Before you spend) sits below the first screen; Home's header has no logo on a phone | One RTP and EV line inside the commit block; Before you spend up under the H1 | critique A | open |
| 34 | P2 | Responsible play | Home, Daily cases | "Wager to climb" with a track to an Elite tier at 2 000 wagered: completion and status on spending, which `CLAUDE.md` forbids for a limit and the critique reads the same way here | The founder's to weigh: Daily is the baseline's, drawn by decision | critique A | open, for the founder |
| 35 | P2 | Consistency | Footer | Community cases and Classic cases are listed and exist nowhere else | Remove or mark Not launched yet | critique A | open |
| 36 | P3 | Reading | Home prose and FAQ | Lines of about 91 characters (`p.ab-lead`); single words alone on a last line in four paragraphs | 65ch measure; balance the last lines | impeccable | open |
| 37 | P3 | Clarity | Case screen | The risk band shows bolts with Medium only for a screen reader; the Trustpilot badge links to the site's root | The word beside the bolts; the badge to the review page or no link | critique A | open |
| 38 | P2 | Reveal | Case screen, the reel | The reel converges on the result before it lands | Fill the strip from the published mix; the result only in the landing slot | critique A | **withdrawn on verification** for five: 1.5 s into an open of five, 15 of 40 visible tiles were an Asiimov against a published 34 %, the mix itself; the one-case strip is not re-measured |

Withdrawn or carried, from B: 92 ai-color-palette, side-tab, glow, halo, pulsing dot, marquee, stripes, nested cards in the band, Roboto: the baseline's register and language (`D-18`, `D-181`) or founder picks; the bounce curve is stage 11's (row 18); the 11px wear line is row 26.

## The founder's review of the before and after page, 11 November 2026

A local page set every step 8 change side by side, commit `008e884` against the working copy, at the same width with one random seed and reduced motion; the founder: "on the whole the fixes are fine", and six notes. Two were done at once, three were drawn as options on the same page and picked, one came with the picks. Decision record: `D-218`.

| # | Sev | Class | Where | What is wrong | How to fix | Found by | Status |
|---|---|---|---|---|---|---|---|
| 39 | P2 | Rare marks | Home at 1440, live drops | The AK-47's C flame shows over the header on a phone and is hidden under the sticky header on a wide screen | A C drop over the header while the page is at its top, as the live rare card | founder | fixed, `rare.css` |
| 40 | P1 | Value from its token | Case screen: the band, the reel, Best drops, What is in this case, the Open button | Prices in white, against `--color-money` | Every price reads `--color-money` | founder | fixed, measured: no white price left at 1440 or 360 |
| 41 | P2 | Shape | Buttons on both pages; a Featured tile's price | 10px, "I don't like 10"; shown at 8, 10 and 12 | `--btn-radius` 12px; the tile's price plate 8px, named | founder | fixed |
| 42 | P2 | Breaks at 360 | What is in this case, a card of 139px | The chance on one line, the tickets on two and pushed right | Option C refined: a row, the value over the skin, the foot bar under the hexagon's middle; the wide card unchanged | founder | fixed |
| 43 | P2 | First screen at 360 | The case's head | Breadcrumb, How it works, name, line and heart stacked, 160px | Option 3: ‹ Cases with How it works, the name with the heart, 104px | founder | fixed |
| 44 | P3 | Layout | Home, Every round | Check a round sat under the hash it checks | Check inside the hash's box, accessible name Check this round, `microcopy.md` 1.0-47 | founder | fixed |
| 45 | P3 | Shape | Case screen, the heart | 10px as a literal beside 12px buttons | Reads `--btn-radius` | Claude, confirmed by the founder | fixed |
