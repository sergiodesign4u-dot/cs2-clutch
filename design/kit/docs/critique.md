# Critique log of the kit zone

The first log of `design/kit/`. Stage 07 opens it at step 6, the critique of the sample of eight screens in colour; stages 08 to 11 append their own sections. A row is never deleted: a finding that does not survive verification stays, marked "withdrawn on verification" with its reason.

## Stage 07, step 6: the sample in colour, 24 Nov 2026

**What was read.** The 44 coloured screens `design/*.html` (eight screens, 51 states; the hub `design/overview.html` aside), against `design/kit/kit.css`, `design/kit/kit.html`, `design/kit/shell.html` and `design/kit/inventory.md`.

**Instruments, each taken in full before any merge.**

| Instrument | How it ran | Coverage it reported |
|---|---|---|
| Wiring check (mechanical) | grep over every `design/*.html`, `design/kit/kit.html` and `shell.html`, then the hub loaded in Chromium | 45 pages plus 2 kit pages; 1 hit |
| Codex, read only | five tasks on gpt-5.6-terra, effort medium, one per class (classes 4 and 6 share a task), no `--write` | 44/44 screens opened in every task; raw hits before filtering: class 1, 1 186; class 2, 148; class 3, 26 signatures; classes 4 and 6, 86 tokens; class 5, 37 candidates |
| Reader, clean context | a Claude subagent with the repository only, forbidden the chat, the critique logs and `docs/decisions.md`; the stage pack's question | 9 "could not understand", 5 "understood as" |
| `/impeccable critique`, assessment B | `impeccable detect --json` over the 44 screens (exit 2, 2 590 findings, about 17 distinct sources) plus the browser overlay on Home, the case screen, Deposit and Sign in | 4 pages in the browser at desktop width; 83 findings per page inside the side panel, out of scope |
| `/impeccable critique`, assessment A | a design review subagent, isolated from B | see its section below |
| Claude in the browser | Chromium at 360 over every screen in both account states (81 page states); the case stage measured through rest, open and outcome at 1440 and 360, both motion settings | 81/81 |

### The wiring check, before the critique

| Check | Files | Hits | What |
|---|---|---|---|
| 1. `wireframes/` inside a `<link href>` or `<script src>` | 44 screens, the hub, `kit.html`, `shell.html` | 1 | `design/overview.html:132`, `<script src="../wireframes/_nav.js"></script>`. The hub reads the grey registry to draw Coverage (`D-225`). Loaded in Chromium: it mounts no shell, writes no inline variable on `<html>` at load or on resize, and logs no error; it defines twelve `WF_*` globals. The 44 screens: 0. |
| 2. `wf` plus a capital called from markup | the same | 0 | none on any page, none in `design/kit/*.js` or `design/_nav.js` |

Decision owed: unhook the hub now, or carry it to the backlog. The screens themselves are clean.

### Findings, merged

Found by: Codex, Reader, Imp-A (impeccable design review), Imp-B (impeccable detector and overlay), Claude, Wiring. Status: verified (re-read in the current file), withdrawn on verification (with the reason), to verify (not yet re-read), deliberate (a recorded decision covers it, named).

| # | Class | Where | What | Found by | Status |
|---|---|---|---|---|---|
| W1 | Wiring | `design/overview.html:132` | the hub loads `../wireframes/_nav.js` for the Coverage registry | Wiring | verified; the hub, not a screen |
| K1 | Style past the kit | 44 screens | 1 186 `style=""` matches: every one a custom property carrying data (`--case-art`, the ruler's `--a --b --w --t --k`, the observed bar's `--p --o`, `--item-tier`, `--skin`, `--fill`, `--r1 --r2`), consumed by a kit rule; 44 are SVG `font-style`; 0 `<style>` blocks | Codex | withdrawn on verification: data in `style` is allowed ("the only style attributes carry data", `D-234`) |
| K2 | Literal instead of a variable | `design/kit/shell.html` footer pay marks, so 44 screens (88), `kit.html` (2) | `fill="#0B0A22"` on the Bitcoin and Tether glyphs where `--color-tile: #0B0A22` exists | Codex | verified |
| K3 | Literal instead of a variable | `design/index.html:35` | `stroke="#060A1E"` on the check mark of `.spend__ok` where `--color-ground` exists | Codex | verified |
| K4 | Literal instead of a variable | `kit.css` lines 674 to 1903, about 36 declarations | `gap: 2px`, `font-size: 10px`, `margin-right: 6px` and the like beside `--space-hair`, `--size-badge-text`, `--space-1-5` | Codex | verified; the lines sit in part 2 and part 3, the `.wf-*` layer no coloured screen uses (K10) |
| K5 | Literal instead of a variable | `kit.css:3287, 5393, 5481, 5516, 5529, 5530, 5564, 5582, 5602` | the product layer: `padding: 1.5px`, `font-size: 15px`, `font-size: 32px`, `gap: 5px`, `margin-left: 13px`, `border-radius: 18px`, `margin-top: 5px`, `inset: 6px` | Codex | verified as literals. Where Codex names a variable of another job (32px font to `--space-6`, 18px radius to `--size-m`, 13px margin to `--size-xs`, 10px radius to `--size-badge-text`) that mapping is withdrawn: an equal number is not the same value. Each is a token question for stage 08 |
| K6 | Markup diverged | 44 screens against `kit.html` | 26 raw structural signatures, all recorded states or variants | Codex | 0 findings |
| K7 | Modifier without a base | screens | `account-head__id--steam`, `before__p--price`, `daily__chip--info`, `notice--stopped`, `observed__tier--r5`, `rail__item--rewards`, `ruler__seg--r5`: used in markup, no rule of their own in `kit.css`, no script reads them | Codex | verified |
| K8 | Class with no rule | screens | `before__say`, `fair-q`, `observed__ov`, `stack` (styled only by `kit.html`'s own showcase block, so inert on the Responsible play screens) | Codex | verified. Withdrawn on verification: `commit__hash` (read by `stage.js`), `has-layer` (set by `kit.js`), `dock__bonus` (read by `pay.js`), the showcase's chrome classes `sc-*`, `vis-*`, `kit-*` and the rest (styled by `kit.html`'s own block). `data-table__empty`, in `kit.html` only: verified, minor |
| K9 | Contextual overrider | `kit.css` | 18 foreign selectors. Button `min-height` takes 4 values (`--size-button-s`, `-m`, `--size-close`, `--size-tap`), set from contexts by `.catbar__acts > .button`, `.shelf-state__chips > .button`, `.filter-drawer__head > .button--s`, `.chip > .button--close`. The crumb's link turns white under three heads (`.fair-head`, `.shelf-head`, `.rp-head`, for contrast on the blue, `D-245`). Also `.sec-head__title > .badge` (height, padding, size), `.steam-state .link` (colour), `.cashout__calc > .kv--total .kv__v` (colour), `.selbar__sum > .fig .fig__v` (size), `.dialog.filter-drawer` (height, margin, corners), `.filter-drawer__set > .range` (height), `.stepper > .input` (padding, fill), `.rp-sec > .prose` (size), `.shell__main > .commit`, `.shell__main > .catbar` | Codex | verified; each is an undeclared variant: a tap-height button, a crumb on a plate, a count badge |
| K10 | Kit weight | `kit.css` part 2 and part 3, lines 674 to 1903, about 117 KB | 1 139 `.wf-*` selectors; no coloured screen uses a `wf-` class (0 of 44); they serve the v4 labs, which load `kit.css` | Claude | verified |
| K11 | One rule written many times | `kit.css` | the visually hidden pattern (`clip-path: inset(50%)` on a 1px box) is written 21 times under 21 names (`.fav__sr`, `.commit__sr`, `.spend__vh`, `.mode-row__h`, `.data-table__cap` and others), one of them with `1px` where `--size-hairline` exists | Claude | verified |
| R1 | Could not understand | `inventory.md` "Totals", `kit.html` `#inventory` | 38 one-offs in Totals and in `kit.html`'s list; 46 rows in the md table | Reader | verified |
| R2 | Could not understand | `inventory.md` "One-off, kept out of the kit" | defined as "on one IA node only", yet four rows list two nodes (How this case works, the catalogue's head, Filters in force, Responsible play's head) and only `.spend` and How this case works are said to be owed to the components | Reader | verified |
| R3 | Could not understand | `inventory.md` | the one-off table is cut by the "Added at..." paragraphs, so the rows from System page block to Profile strip stand under no header and do not render as a table | Reader | verified |
| R4 | Could not understand | `inventory.md` "Level 2, molecules", `kit.html` | the Deposit dock sits under the molecules heading with level 3; Totals read "22 molecules, 21 organisms; 21 and 22 since D-238"; the showcase draws `#c-dock` among the molecules | Reader | verified |
| R5 | Could not understand | `inventory.md` "Control census", `kit.css` BUTTON | the census ranks primary, secondary, tertiary; the kit draws primary, ghost, icon, close; nothing maps secondary to ghost or says what a labelled tertiary becomes (255 uses), and the bare `.button` is never named | Reader | verified |
| R6 | Could not understand | the census against `--size-button-m` | the census names M "the 44px tap floor"; the kit's M is 40 (`D-209`) | Reader | verified |
| R7 | Could not understand | `#c-button`, `kit.css` | "No button is disabled to express a precondition, D-58" beside a drawn `.button:disabled` (Exchange, `D-239`) | Reader | to verify |
| R8 | Could not understand | `inventory.md` "Icons", `kit.css` ICON | the md leaves filled against outline open; `kit.css` says "one style, filled, D-227"; 40 icons in the md, 44 `--icon-*` in the kit | Reader | to verify |
| R9 | Could not understand | `kit.css` part 1 | lines and depth "open until the founder picks"; two "a pair for stage 08" | Reader | to verify |
| R10 | Understood wrongly | the Reader's answer 4 | it would carry 38 one-offs into stage 08, where the table holds 46 | Reader | follows from R1 |
| R11 | Understood as | the Reader's answer 5 | merge Select with Popover menu `--select`; split the square buttons (`--icon`, `--close`) off the s, m, l axis; promote `.spend`. The third is what was meant; the first two are stage 08 questions no line answers | Reader | to verify |
| I1 | Contrast | `.spend__stub` (Home, the case screen, two dialogs), the chosen `.pay-panel__prov` (Deposit) | white on `#fb3f8a`, 3.4:1, the lightest pixel under the text | Imp-B | to verify by measurement |
| I2 | Contrast | `.item-card` (My items, cash out) | `#fb3f8a` on `#1b2a73`, 3.8:1; `#9e9db1` on `#5c1868`, 4.4:1 | Imp-B | to verify |
| I3 | Contrast | `.pay-panel__offer p span` (Deposit) | `#f5e5f1` on `#b84498`, 4.0:1 | Imp-B | to verify |
| I4 | Contrast | `.button--primary:hover`, every page | white on `#e8156a`, 4.4:1 | Imp-B | deliberate: recorded at `kit.css:186` with its ratio |
| I5 | Size of text | the case screen's `.kv__k` (Chance, Tickets), the cash out labels, Responsible play's options, `.badge` in the ways to pay, `.drop-card__ax`, the rail's Not launched yet when open | 9px to 11px | Imp-B | to verify against the type scale's own floor |
| I6 | Overflow | Home, `span.spend__ok` in Before you spend | overflows its box by 36 to 43px at 1280 to 1312 wide | Imp-B, Claude | verified: at 1280 "Recomputed: matches" (nowrap) runs 40px past its 87px box and under the Check button, read as "Recomputed: ma"; 2px at 1440, 0 at 360 |
| I7 | Headings | `cashout-dialog.html` and My items (`h2` Cash out to `h4` What goes out); `deposit-card`, `deposit-ceiling-pending`, `deposit-declined`, `deposit-skins` (to `h4` Choose a provider) | a level skipped | Imp-B | verified |
| I8 | Motion | five infinite sweeps and five pulses (`.hero__trust::after`, `.banner__act::after`, `.case-stage__run`, `.footer__live`, `.ticker__lbl::after` and others) | whether reduced motion stops each one | Imp-B | withdrawn on verification: with reduced motion, `document.getAnimations()` holds no running infinite animation on Home, the case screen, Deposit or My items |
| I9 | Type | `code` (seeds, hashes, the address, a ticket) | SFMono, a face `DESIGN.md` does not declare | Imp-B | verified; a DESIGN.md gap, not drift |
| I10 | Detector config | `.impeccable/config.json` | the founder's iGaming ignores (`D-209`) cover only `design/v4/*` and the concept page, so about 1 100 of the 2 590 findings on the coloured screens are those approved devices again | Imp-B | verified |
| C1 | Breaks at 360 | 44 screens, both account states, 81 page states | no horizontal scroll; the only clipped text is deliberate (an ellipsis on a ticker name, visually hidden labels, the fold of a button's label) | Claude | 0 findings |
| C2 | Strategic dimension | `design/case.html`, `.case-stage` | one size through every phase holds at 1440 (1058 by 340 at rest, open and outcome) and breaks at 360: 250 at rest and open, 348 at the outcome, in both motion settings | Claude | verified by measurement; whether v4 did the same is to verify |

### Strategy check, the whole sample

| Line | What the sample shows | Status |
|---|---|---|
| The riskiest assumption, `research/docs/lean-ux-canvas.md` section 7: "Institutional trust signals placed in the hero, a named third-party RNG auditor badge plus a visible Trustpilot score, move a first-time visitor into the deposit flow at a rate meaningfully above what the same hero space achieves with the reveal animation alone." | Home's hero (`design/index.html`, `.hero__trust`) carries the Trustpilot score for a guest. The auditor half does not render, by rule: there is no auditor, and its empty state is that it does not render (`D-25`; the slot left Home by `D-126`). The badge is `role="img"` on an `<a>` with no `href`, so a person presses nothing there; the hero holds no act into deposit; no page draws variant B. **No screen tests the assumption with an element a person presses.** | P1 by the stage pack's rule; the founder decides |
| The strategic dimension, `research/docs/benchmark.md`: the reveal moment, carried by the case stage, one size through every phase (`D-48`, `wireframes/docs/screens.md` section 3) | Present on the case screen and its states; no other screen of the sample draws a second reveal, so it has not dissolved. It holds at 1440 and breaks at 360 at the outcome (C2) | measured |

### Assessment A, the design review, merged in

Its own scores: Nielsen 26/40 (consistency 2, recognition 2, flexibility 2, minimalism 2, the rest 3), cognitive load moderate (3 of 8 failed: single focus, hierarchy, minimal choices). Strengths it named: money honesty at the act, every drawn control answers, a straight voice.

| # | Class | Where | What | Found by | Status |
|---|---|---|---|---|---|
| A1 | Reveal | `design/case.html?account`, the reel when the result is the cheapest item | seven or more identical P250 cards fill the strip for about 3 s before it lands; the result is told early and looks scripted | Imp-A | verified on its shot `rev-d-1500.png`. A side effect of the no near miss rule (`stage.js` `strip()`, node 3.3 section 7.1 E2): the floor pool holds one item |
| A2 | Hierarchy | Home signed in (six filled acts: Open a case, All cases, Open Nova case, Check, Provably fair, Support), My items (the Newest first sort, a second Add funds), the catalogue (the Daily chip), Deposit (the chosen provider) | the filled pink act marks several acts and selections in one state; `DESIGN.md` says one per state | Imp-A, Imp-B (I1 on the provider) | to verify against `DESIGN.md` |
| A3 | Layering | the ticker's first rare tile, every page | its flame rises over the header: over the menu button at 360, near the logo at 1440 | Imp-A | verified on `z-home360-head.png`; whether v4, approved with this motion (`D-235`), does the same is to verify |
| A4 | Reveal at 360 | `design/case.html?account`, the outcome | after a win Sell and Open again sit under the bottom bar; with five at once the columns are about 55px, prices clip ("1 0.90") | Imp-A | joins C2: the stage grows 98px at the outcome at 360 |
| A5 | Counter | the footer strip, every page | "Upgrades" counts a mode marked Not launched yet | Imp-A | deliberate: `D-121`, "two numbers in it are decoration by decision", the cost printed in node 0.2 |
| A6 | Compliance | Home and the catalogue, Daily cases | tiers by amount wagered read as a status ladder fed by spend, near the rule "a limit never acquires completion mechanics, streaks, status or a session score" | Imp-A | deliberate in form: `D-25`, the daily case as a tier ladder, a founder decision with no parent (`CLAUDE.md` Scope). The tension with the compliance line is a question for the founder, not a defect |
| A7 | Selection bar | `design/account.html?account`, `.selbar` | "6 items 140.95" with nothing ticked reads as a selection; at 360 the bar plus the bottom bar take about a quarter of the window and cover the balance plate | Imp-A | to verify |
| A8 | Every control answers | My items, Exchange | natively disabled with no reason beside it, where the rail says Not launched yet | Imp-A, Reader (R7) | to verify against `D-239` |
| A9 | Recognition | the collapsed rail at 1440 | nine icons, the one live destination not told apart from eight dead ones on Home; the dead rows take no focus | Imp-A | maybe deliberate: `D-197` |
| A10 | Deposit | `deposit.html?account`, `deposit-dialog.html` | 35 ways to pay at once, no search or recent; the limit status shows only after a method is chosen | Imp-A | maybe deliberate: the baseline's composition (`CLAUDE.md` Baseline) |
| A11 | Proof | `design/fair-matched.html` | "Your recomputation and ours agree." carries no success treatment | Imp-A | to verify |
| A12 | Copy and figures | the case act line (EV and RTP in pink where money is gold; "94.2" and "%" break apart at 360); "Server seed hash" under the act with no gloss; the fair page's worked example (USP-S at 11 001 to 23 000 against Ironbound's 6 791 to 10 490); Sign in's "commission free" beside the case screen's "settles against your balance in either direction"; a filled Sign in in the header on the sign in page; the declined payment's shield icon; Self exclusion preselected at 5 years and Session limit at 2 hours while nothing is set | Imp-A | to verify, each |
| A13 | Layout at 1440 | the footer card wider than the content column (x 326 against 374); the outcome card touching "Nine items, one open." | Imp-A | to verify |
| A14 | Detail | a one-thumb price range for a two-ended filter; four bolts for a three-level risk; the Live drops pill over a tile's art (`D-226`); the second header figure named only by a 10px glyph (`CLAUDE.md`, money as two figures) | Imp-A | to verify; the last two maybe deliberate |

### What happened to each row, after the founder's "do as you recommend" (`D-252`)

| Row | Outcome | Where it went |
|---|---|---|
| W1 | carried | the hub's grey registry becomes a data file when stage 08 splits the kit |
| K9 | fixed | fourteen declared forms in their components' blocks (`.button--tap`, `.button--s-tap`, `.chip__x`, `.chip--tap`, `.crumb--lit`, `.badge--l`, `.link--hi`, `.kv--money`, `.fig--title`, `.range--tap`, `.input--bare`, `.prose--text`, `.dialog--drawer`, `.catbar--sticky`); the class on every screen through the builders and `catalogue.js`. Two rules withdrawn on verification as the page's composition, not a variant: `.shell__main > .commit` and the category bar's margin in the flow |
| I6 | fixed | `.spend__ok` wraps; its mark, squeezed to 0px wide before, now shows |
| I1 | fixed for the provider tile, withdrawn for the stub | the chosen provider starts from `--color-button` (`--gradient-mode-cases-deep`); the stub's heading is large bold text and holds 3:1 |
| I2 | fixed for the band | an item on its way to Steam takes `--color-pink-on-dark`; the card's other small text is carried to the step 7 measurement |
| I3 | carried | to the step 7 measurement |
| R1 to R8 | fixed | `inventory.md`: 46 one-offs and the eight named, the one-off rule as one screen, the table whole, the dock among the organisms, rank, size, the 44px press and the disabled button in colour, the icon question marked decided; the kit page's list and lede from the same source, the dock's card moved to the organisms |
| R9, R11 | carried | stage 08's questions (open tokens; Select against Popover menu `--select`; the square buttons on the size axis) |
| C2 | withdrawn on verification | v4's frame does the same at 360 (250 to 348), measured on `design/v4/case.html`; a founder pick carried by `D-232`, so `D-48`'s one size holds from 600px up and the phone outcome is its named exception |
| A1 | asked | the identical cards on the cheapest item are what `E2` produces when one item is the floor; a narrower reading of `E2` is the founder's |
| S1 | recorded | the hero A/B runs after launch, `D-252` |
| K2, K3, K5, K7, K8, K10, K11, I5, I7, A2, A3 | carried | the first step of stage 08 |

**Proof the overriders moved without a value.** The computed style of every element (pseudo-elements included) on the 44 screens, both account states, at 1440 and 360, 146 loads, before and after: the only differences are the three fixes above (the chosen provider's fill on the hidden deposit layer of every page, the band's colour on My items, the proof line on Home) and the case art's baked shadow on one load, which `stage.js` draws when the page is idle and two runs never agree on. The smoke check of 114 rows matches its baseline except the kit page's counts, 22 organisms and 21 molecules, the dock's move. The walks pass: the catalogue 104/104 in Chromium and WebKit, Responsible play 57/57 in both, Sign in 68/68, Provably fair, My items and Deposit all pass, the case screen opens, sells and opens again at one, three and five.
