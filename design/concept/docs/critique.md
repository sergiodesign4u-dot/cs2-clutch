# Stage 06 critique log

**Step 8, 10 November 2026, run 1.** The two screens in colour, Home v4 (`design/v4/index.html`) and the case screen v4 (`design/v4/case.html`), with every stylesheet and script they load, plus `design/concept/concept.html` and `design/concept/directions.html`, checked on two instruments taken independently and merged only when every set was complete, plus `/impeccable audit`. The labs (`design/v4/*-lab.html`) are not product screens and are out of scope. The roadmap sidebar is the course shell, not the product, and its findings are listed once as out of scope. Its visible place is the "Before and after" section of `design/concept/concept.html`, built after the second run.

**Founder's priorities, 10 November 2026:** "let's do 1, then 3 to 7, and 2 goes to stage 07" (translated). Rows 1 and 3 to 7 are fixed in `D-215`, row 2 is deferred to stage 07, rows 8 to 19 are open.

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
| 8 | P2 | Breaks at 360 | Case screen, What is in this case, `.wf-d-axes` | "Field-Tested · StatTrak · Covert" is cut to "Co..." (139 of 149px), at 11px | Let the line wrap to two at 360 | Claude, impeccable (11px) | confirmed |
| 9 | P2 | Breaks at 360 | Case screen, outcome of five, card name | "Water Elemental" is cut to "Water Element..." | Two lines for the name at 360, as the item cards do | Claude | confirmed |
| 10 | P2 | Breaks at 360 | Case screen, outcome of five | The group actions, Add funds to open 5 again, Sell all 5, Send 5 to Steam, start at 895px; the first screen ends at 715px above the bottom bar | Lift the action group above the cards at 360, or pin it | Claude | confirmed |
| 11 | P2 | Touch target | Header and case screen at 360 | Add funds 32x32, Favorite this case 40x40, the two money figures 14px tall, live drop names 12px tall as links | 44px hit areas without changing the drawn size | Claude | confirmed |
| 12 | P2 | Small text | Header `.ac-fig.is-held .ac-v`; Coldfront countdown labels; at 360 also the footer counters' labels and the live drops' skin names | The value held, 140.95, at 10px; Days, Hours, Minutes, Seconds at 9px; Cases opened, Upgrades, Total users, Online now and Redline, Asiimov at 10px on a phone | 11px floor | impeccable | confirmed |
| 13 | P2 | Same value, two forms | `design/v4/daily-home.js:38` against the case screen and the counters | Daily writes 2,000.00 with a comma (`toLocaleString('en-US')`); every other figure groups with a space, 41 208, 100 000, 367 013 504. `voice.md` has no grouping rule | One rule in `voice.md` and one formatter | Claude | confirmed |
| 14 | P2 | Value beside its variable | `design/v4/theme.css:262,304,332` against `buttons.css:5` | Three buttons at 8px radius (Coldfront's action, the mode card's button, the tile price) where `buttons.css` holds one radius, 10px | `var(--btn-radius)` | Codex | confirmed |
| 15 | P2 | Value beside its variable | `case-open.css:108`, `footer-home.css:167`; `case-tiles.js:5`, `daily-home.js:14` and `:91`, `case-blocks.js:17` | `#FB3F8A` and white written as literals beside `--color-pink` and `--color-text-hi`; the scripts carry palettes as literals and Daily writes one into an inline gradient | `var()` in CSS; scripts read the tokens with `getComputedStyle` | Codex | confirmed |
| 16 | P2 | Token outside the theme | `case-tiles.css:35`; `case-tiles.js:5` | `--color-money` #FFC44D, decided on 2 Nov 2026, lives in `case-tiles.css`, not in `_theme.css`, and the script writes the literal | Move it to `_theme.css` with its origin comment | Codex | confirmed, narrowed: the token exists, but not in the theme |
| 17 | P3 | Origin missing | `design/v4/theme.css:22` | `--v4-tile-edge` has no origin comment while its three neighbours do | One comment | Codex | confirmed |
| 18 | P3 | Motion | Both pages | An overshoot curve, `cubic-bezier(.34, 1.56, .64, 1)` | Motion is ours, not the baseline's | impeccable | deferred to stage 11, which derives the motion |
| 19 | P3 | Leading | Case screen at 360, a section's subline and a note | Line height 1.2 where body text wants 1.3 or more | 1.35 at 360 | impeccable, run 1 at 360 | confirmed |

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
