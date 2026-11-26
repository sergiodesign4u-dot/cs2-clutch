# Token audit of the kit, stage 08 step 1

Facts, not decisions. What every custom property of `design/kit/kit.css` is, where it is used and which role it plays there, measured on 26 Nov 2026 against the coloured product: the eight screens of stage 07 and their states, 51 addresses in `design/_nav.js`, at 1440 and at 360. Step 2 (consolidation) and step 3 (`design/system/tokens.css`) decide from it; nothing here changes a value.

**Who reads it.** Step 2 reads the findings and the three lists; step 3 reads the drift and the role candidates; step 8 checks every pixel difference against the section "Changes of look, named" below; step 9 prints the numbers on `design/kit/pixel-proof.html`, block "Audit summary". That block is this file's visible place, named now and built at step 9 as the pack sets it; until then the founder reads the step on its review page.

**How it was measured.** Two instruments, each taken in full before any merge (CLAUDE.md, "Critique runs on two instruments").

- **Claude, by script.** `audit.py` tokenises `kit.css` into its 3663 rules and reads every declaration of a custom property with its comment, every `var()` reference with its selector and property, and the references in the screens' `style` attributes and in `design/kit/*.js`. The property a reference sits in gives the surface it paints: ink (text, a glyph), fill (a ground, a bar, a plate) or line (a border, a rule, a ring). `census.js` then opened every state in Chromium and asked, for each rule, whether its selector matches anything once dynamic pseudo-classes and pseudo-elements are stripped; a reference is live when its rule matches on at least one state at one width. The scripts are kept locally in `.playwright-mcp/s08/` (ignored).
- **Codex, read only** (`gpt-5.6-terra`, effort medium, task `task-mwwnygzb-mc0ud2`), the five classes of the pack: usage, drift, values beside variables, variables without an origin, orphans. Merged in "Two instruments" with a "found by" column.

**What "unworn" means here.** A rule no state matched at load. In parts 2 and 3 of `kit.css` that is final: they are written on the grey's `wf-*` classes, no coloured screen carries one and no script adds one (`pay.js` names `wf-country` only as a storage key). In part 4 it is a lead, not a verdict: a class a script adds after a press (an open menu, a landed reel, a rare drop's flash), or a rarity no sample item has, is unworn at load and alive in use. Step 6 takes the part 4 list as its third list and verifies each row.

## The numbers

Counted now so step 9 prints them as "before"; the "after" column is filled at step 9.

| What | Before (26 Nov 2026) | After |
|---|---|---|
| Rules in `kit.css` | 3663 | |
| Rules no coloured state wears at load | 1326 (parts 2 and 3, on `wf-*`: 979; part 4: 347) | |
| Variables in `:root` | 554 | |
| by kind | color 147, shadow 81, size 65, gradient 63, art 55, icon 44, motion 29, space 15, tracking 14, blur 12, shape 11, radius 8, filter 8, font 2 | |
| Distinct colour values written in `kit.css` (variables and the colours inside gradients and shadows) | 231 | |
| Custom properties declared inside a component rule, not in `:root` | 432 names, 844 declarations, 382 of them a literal pixel value | |
| `:root` variables used in at least one live rule | 497 | |
| used only in rules no state wears | 47 | |
| used nowhere (orphans) | 10 | |
| used exactly once | 218 | |
| painting two or three surfaces (ink, fill, line) in live rules | 18 | |
| with an origin comment beside the declaration | 554 of 554 | |
| named in `DESIGN.md` | 140 | |
| Near-identical colour pairs (drift candidates) | 148, 32 of them between two variables | |
| Pixel literals in a rule equal to a `--space-*`, `--size-*` or `--radius-*` value | 87 | |
| References to a variable no file declares | 24 (11 set by a style attribute or a script, 13 declared nowhere) | |
| Semantic roles | 0 (stage 07 named none, by design) | |

## Changes of look, named

The only three legal sources of a change of look in this stage. Every row is "variable or class, was, becomes, why". Step 8's pixel proof is checked against these rows: a difference with no row here is a defect, fixed in `tokens.css` or a component's file, never on a screen.

### Merged drift (step 3)

Decided at step 2 (`D-260`), on the atoms' page, by the founder: "Q1 и Q2 как рекомендуешь" (Q1 and Q2 as you recommend), and with the atoms accepted. The two variable rows are written into `tokens.css` at step 3; the two class rows are written into the Button at step 5 and worn by the screens at step 6, and are listed here because they change what a screen shows.

**Written at step 3** (`design/system/tokens.css`): row 1 as the primitive `--shadow-tile-edge` at .07, which also reaches `--shadow-shell` (the header strip, the rail's panel, the selection bar and the account head), and as the one role `--line-edge` for both edges; row 2 as the role `--line-error` on `--color-error`, which the Text field and the Text area read from step 5. Rows 3 and 4 wait for the Button at step 5.

| Variable or class | Was | Becomes | Why |
|---|---|---|---|
| `--shadow-tile-edge` | `inset 0 0 0 1px rgba(255, 255, 255, .05)` | white at .07, one role with `--shadow-edge` | Q1: one 1px edge of a dark tile drawn at .05 by the icon tiles, menu rows and best drop cards and at .07 by fields, tabs, the segmented control, the rail, the header and the disabled button (`census.md`, Line colours); .07 is what most families draw. Its 16 readers in `kit.css` brighten by .02. The Hero's glass at .10 and a form control's meta-grey edge are other roles and stay. |
| `.input[aria-invalid="true"]`, `.textarea[aria-invalid="true"]` ring | `--color-down` `#FF5C7A` | `--color-error` `#FF4D6A` | Q2: a refusing control is an error, as Sign in's declarations already draw it; the fall's red stays for a value that went down. Seen on the Verify form's malformed entry (`fair-malformed.html`). |
| `.daily__tier.is-live > .button` | sides 10px; at 360, 12px words that wrap | the Button M as the family draws it | a local rule restyling an atom; the family's values fit at 1440 and 360 (fit test, step 2); on a phone the words go from 12 to 13px. |
| `.item-card > .button`, `.item-card__acts > .button` | sides 4px | the Button S's 14px sides | a local rule restyling an atom; no visible change, the act fills the card's width. |

### Review of the foundations (step 4)

Decided at step 4's review on the stand, `D-262`, by the founder: "Q1–Q5 как рекомендуешь" (Q1 to Q5 as you recommend). One row changes a file and none changes a pixel.

| Variable or class | Was | Becomes | Why |
|---|---|---|---|
| `--shadow-tile-lit-soft` | declared twice in `:root`: white at .20 (the account menu's tile) and at .22 (the involves plate); the second won everywhere | one declaration, white at .22 | Q2: one value per name; .22 is what every reader drew, so nothing on screen moves. |
| The light theme's 28 values | proposed at step 3 | accepted as written | Q1: every role holds its threshold on paper; the light theme is the stress test of step 7, and whether it stays in the product is decided at step 8. |
| `--bg-rarity-4`, `--bg-rarity-6` | 2.9:1 on the dark tile, under 3:1 | kept | Q3: the baseline's ladder (`baseline.md` 13.4); the tier is also said in words on the item. A known cost, printed in both roles' comments. |
| The Figure's sizes by container | seven sizes, unnamed | `.fig--xs` 13, `.fig` 14, `.fig--m` 18, `.fig--title` 20, `.fig--l` 22, `.fig--head` 26, `.fig--win` 30 | Q4: each named by the step of the type scale it reads; worn from step 5. |
| `--fig-l`, `--outcome-name` | 22px, the one Figure size off the scale | kept, the Figure's own value | Q5: moving it to 20 or 24 would move the price beside every act. |

### Moved onto the system's classes (step 6)

None yet.

## The light theme's values, new at step 3

The second theme is light (`D-258` point 1), and light grounds do not exist in `kit.css`, so each light value below is new. They stand at the end of the primitive block of `design/system/tokens.css`, each with its why, and only the `[data-theme="light"]` block reads them. **Accepted at step 4's review**, `D-262` (Q1), as written; no row changed. Contrast is measured against the three light grounds (paper `#F2F3F9`, the white card, the light tile `#E8EAF4`) and the worst figure is given. Nine roles take a light value the kit already has instead of a new one: `--text-hi` and `--bg-mark` the ground's navy, `--bg-card` and `--bg-menu` the kit's white, `--text-error` and `--line-error` the footer's deep red `--color-footer-age`, `--text-risk-mid` rarity 5's blue, `--bg-lit` the act pink, `--bg-rarity-1` the rarity 1 plate's dark gold `--color-plate-r1-a`, until now read by nothing.

| Variable | Value | Why |
|---|---|---|
| `--color-paper` | `#F2F3F9` | the page ground of the light theme: the navy of --color-ground (hue 230) lifted to paper, so the light page keeps the product's blue cast rather than a neutral grey |
| `--color-paper-2` | `#E8EAF4` | a step under the paper, the light tile and the stage's deep card: the dark theme draws them a step off the card, the light one a step off the page |
| `--color-paper-3` | `#E2E5F1` | the light square of the burger toggle, a step under --color-paper-2 as --color-burger stands a step over the tile |
| `--color-ink-soft` | `#3B3A52` | the body of the light theme, the pair of --color-text-soft: navy grey at 8.7:1 on the darkest light ground, where the dark body holds 12:1 |
| `--color-ink-grey` | `#5F5F66` | the pair of --color-text, the baseline's neutral grey kept neutral: 5.0:1 on the darkest light ground |
| `--color-ink-lavender` | `#5A5974` | the pair of --color-text-muted, kept a lavender a step off --color-ink-grey as the dark pair is: 5.4:1 on the darkest light ground |
| `--color-ink-lead` | `rgba(6, 10, 30, .86)` | the pair of --color-text-lead (white at .90): the ground's navy at .86, the lead line a shade under the heading as in the dark theme |
| `--color-pink-deep` | `#C8004F` | the link and the current item on a light ground: the brand pink holds 3.1:1 on the paper and --color-button 4.1:1 on the light tile, both under 4.5:1; this one holds 4.7:1 |
| `--color-money-deep` | `#7F5300` | money on a light ground: --color-money holds 1.6:1 on paper; a deep cut of the same gold at 5.3:1 keeps the One Job Rule (gold counts) |
| `--color-green-deep` | `#116B35` | a gain, a match and the low risk mark on a light ground: --color-up and --color-green hold 1.7 to 2.1:1 on paper; this one 5.3:1 |
| `--color-green-mid` | `#1A9450` | the green fill on a light ground: --color-green holds 1.8:1 on the light tile; this one 3.2:1 there, as a fill needs, and the dark ink on it still 5.0:1 |
| `--color-grey-mid` | `#7A7A88` | rarity 7, the commonest, on a light card: #DDDDDD holds 1.4:1 there; this grey 3.4:1. No sample item is rarity 7 today |
| `--color-skull-off-light` | `#C5C9DA` | an unlit risk mark on a light ground: drawn as faint as the dark one, 1.3 to 1.6:1 against 1.4:1 in the dark, so lit and unlit read the same way round |
| `--color-line-light` | `#D5D8E8` | the soft hairline on a light ground, at the dark pair's own faintness (1.2 to 1.4:1 against 1.4:1) |
| `--color-paper-veil` | `rgba(255, 255, 255, .82)` | the veil over a picture in the light theme, the pair of --color-veil (.78): white instead of navy, a step thicker because dark words sit on it |
| `--color-paper-veil-tile` | `rgba(255, 255, 255, .72)` | the pair of --color-tile-veil (.70), white for navy |
| `--color-paper-veil-plate` | `rgba(255, 255, 255, .74)` | the pair of --color-plate-veil (.72), white for navy |
| `--color-navy-05` | `rgba(6, 10, 30, .05)` | a wash and a note plate on a light ground: the navy at .05 where the dark theme lays white at .07 or a navy plate at .70 |
| `--color-navy-06` | `rgba(6, 10, 30, .06)` | a sunken well on a light ground, a hair deeper than the wash |
| `--color-navy-08` | `rgba(6, 10, 30, .08)` | a track on a light ground, the pair of --color-track (white at .08) |
| `--gradient-paper` | `linear-gradient(180deg, var(--color-text-hi), var(--color-paper))` | a raised layer, a row and the Daily panel in the light theme: white falling to paper, as the dark ones fall from a lit navy to a deep one |
| `--gradient-paper-panel` | `linear-gradient(180deg, var(--color-text-hi), var(--color-paper) 60%, var(--color-paper-2))` | the rail's and the footer's panel in the light theme, the three stops of --gradient-panel on paper |
| `--gradient-paper-plate` | `linear-gradient(180deg, var(--color-paper), var(--color-paper-2))` | the plate a bar of controls stands on, light |
| `--gradient-paper-feed` | `linear-gradient(to bottom, var(--color-paper-2), var(--color-text-hi))` | a drop's plate in the ticker, light: a step under the card at its top falling to the card, as --gradient-feed-plate does in navy |
| `--gradient-burger-ink` | `linear-gradient(var(--color-ground) 0 var(--space-hair), transparent var(--space-hair) var(--space-1-5), var(--color-ground) var(--space-1-5) var(--space-2), transparent var(--space-2) var(--space-3), var(--color-ground) var(--space-3) var(--size-burger-h))` | the burger's three lines in navy: --gradient-burger stop for stop with the ground for the white |
| `--shadow-edge-ink` | `inset 0 0 0 1px rgba(6, 10, 30, .1)` | the 1px edge of a tile on a light ground: the white .07 edge vanishes on paper, the navy at .10 draws the same faint edge |
| `--shadow-edge-lit-ink` | `inset 0 0 0 1px rgba(6, 10, 30, .14)` | the brighter edge (white .10 in the dark) light: navy at .14, a step over --shadow-edge-ink as the dark pair is |
| `--shadow-ring-ink` | `inset 0 0 0 1px rgba(6, 10, 30, .16)` | the soft ring of a bot's avatar (white .18 in the dark) light |

## What the semantic level does not take yet, step 3

`tokens.css` names 101 roles: 22 ink, 55 fill, 9 line and 15 depth (a lift, a glow, a shadow under art: colour with no contrast threshold, a role because a component reads colour only through this level). 44 of them take a new or another value in the light theme; 57 keep theirs, each saying why (a word or a mark on a coloured plate, a mode's or a case's plate, the rarity ladder but its ends, the scrim, the foil, the depth values until step 7). What is left outside, by the pack's rules:

- **States, 13, for step 5.** (Step 5, round 0: `--bg-hover`, `--bg-active` and `--line-focus` made in both themes with the Button, and its eight `--button-*` tokens proposed; the fourth, `--opacity-disabled`, put to the founder, since only the Button draws disabled and it has its own look.) A hover, a press or a disabled look is a state token, made with the first component that wears it and in both themes: `--color-button-hover`, `--color-button-ghost-hover`, `--shadow-button-press`, `--color-disabled`, `--shadow-trust-hover`, `--shadow-tile-lit-hover`, `--shadow-daily-lift-hover`, `--shadow-daily-lift-live-hover`, `--shadow-card-hover`, `--color-burger-hover`, `--color-footer-pay-hover`, `--color-plate-hover`, `--filter-card-hover`; and the white focus ring, drawn by 35 rules in `--color-text-hi`, becomes `--color-focus`.
- **A colour on two blocks but on a different surface in each, 6.** Each surface has one reader, so no role yet (rule 4): `--color-ticker` (bottom bar, rail); `--color-blue` (icon story, d-235, case tile, daily ladder, rail); `--color-gold` (icon story, d-235, case tile, daily ladder, feed tile); `--color-line` (status steps, popover menu); `--color-down` (form controls, published against observed); `--color-plate-rule` (before you spend, what this case pays).
- **Colours read in one block only, 151 in 33 blocks, for step 9.** They stay primitives and the component reads them directly; step 9 decides for each whether it is a role that has not repeated yet. By block: About Clutch: `--color-rule-faint`; After my items' second gate: `--color-pink-on-dark`; Avatar: `--color-raised`, `--shadow-avatar`, `--shadow-avatar-s`; Badge: `--color-badge-ink`; Before you open: `--gradient-before-plate`, `--shadow-before-plate`, `--color-head-steam`; Before you spend: `--gradient-spend-stub`, `--shadow-card-drop`, `--shadow-word-text`, `--color-plate-ticket`, `--color-ruler`, `--color-ruler-range`, `--shadow-ruler-mark`, `--filter-card-skin`; Button: `--gradient-button-sheen`, `--color-button-ghost`, `--shadow-button-ghost`, `--color-veil-soft`, `--color-price-chip`; Case head: `--color-stage`, `--shadow-stage`, `--shadow-case-name`; Case stage: `--gradient-stage-band`, `--gradient-stage-edge`, `--gradient-stage-cell`, `--color-pointer-deep`, `--shadow-case-stage`; Case tile: `--color-rare-fire`, `--color-fav-plate`, `--gradient-case-violet`, `--gradient-fade-up`, `--shadow-tip`; Commit block: `--color-skull-off-plate`; Daily ladder: `--color-daily-silver`, `--color-daily-chip`, `--shadow-tile-lit-live`, `--shadow-daily-lift`, `--shadow-daily-name`, `--shadow-daily-skin`, `--gradient-daily-fade`, `--gradient-daily-fade-s`, `--gradient-daily-silver`, `--gradient-daily-guardian`, `--gradient-daily-legend`, `--gradient-daily-elite`; Dialog: `--color-price-plate`, `--shadow-dialog`; Event banner: `--color-banner`, `--color-banner-clock-phone`, `--color-banner-cell`, `--color-banner-rule`, `--shadow-banner`, `--shadow-banner-clock`, `--shadow-banner-title`, `--filter-banner-plate`, `--filter-banner-flare`, `--filter-banner-flare-still`, `--gradient-banner-shade`, `--gradient-banner-shade-phone`, `--gradient-banner-foot`, `--gradient-banner-foot-phone`, `--gradient-banner-hero-mask`, `--gradient-banner-hero-mask-phone`, `--gradient-banner-story-mask-phone`, `--gradient-banner-art-mask`, `--gradient-banner-sweep`, `--gradient-banner-snow-near`, `--gradient-banner-snow-far`; Feed tile: `--gradient-feed-back`, `--shadow-feed-tile`, `--shadow-feed-skin`, `--shadow-feed-text`, `--color-feed-ring-deep`, `--color-avatar-bot`; Field: `--color-pink-edge`; Figure: `--shadow-fig-stat`; Footer: `--gradient-footer-light`, `--shadow-footer-lift`, `--gradient-footer-band`, `--gradient-footer-fade`, `--gradient-edge-blue`, `--shadow-footer-plate`, `--gradient-footer-fair`, `--color-footer-pt`, `--color-footer-age`, `--shadow-footer-age`, `--color-footer-pay`, `--shadow-footer-pay`; Header: `--gradient-header-light`, `--gradient-header-edge`, `--shadow-header-edge`, `--shadow-header-fall`; Hero: `--color-trustpilot`, `--color-trust-plate`, `--color-trust-off`, `--color-trust-rule`, `--gradient-trust`, `--gradient-trust-edge`, `--shadow-trust`; How this case works: `--color-ruler-ground`, `--shadow-ruler-plate`, `--color-ruler-track`, `--color-ruler-gap`, `--color-ruler-notch`, `--color-ruler-tear`, `--color-ruler-step`, `--color-ruler-quarter`, `--shadow-ruler-pin`; Icon story: `--color-rail-icon-red`, `--color-rail-icon-cyan`; Mode card: `--gradient-mode-foot`, `--shadow-mode-art-warm`, `--shadow-mode-knife`, `--shadow-mode-name`, `--shadow-mode-line`, `--color-mode-later`, `--shadow-mode-later`, `--color-mode-scrim`; Note line: `--color-refuse`; Outcome card: `--color-tab`, `--color-up-tab`, `--shadow-outcome`, `--shadow-up-tab`; Payment panel: `--gradient-mode-cases-deep`; Popover menu: `--shadow-panel`, `--color-error-wash`, `--color-handle`, `--shadow-menu`; Published against observed: `--shadow-observed-row`, `--color-bar-track`, `--shadow-bar-inset`, `--shadow-tick`; Rail: `--gradient-rail-giveaways`, `--shadow-rail-peek`, `--shadow-rail-chip`, `--color-rail-chip-sub`, `--color-rail-tile-chip`, `--shadow-rail-drawer`; Section head: `--color-head-upgrade`, `--color-head-battles`, `--color-head-showdowns`; Status notice: `--color-fail`, `--color-fail-wash`; Ticker: `--color-ticker-chip`, `--shadow-ticker-chip`, `--color-ticker-halo`; What opening a case here involves: `--gradient-involves-stage`, `--shadow-edge-bright`.
- **Below a threshold, for step 4.** `--bg-rarity-4` at 2.9:1 on the dark tile; `--bg-rarity-6` at 2.9:1 on the dark tile: the baseline's ladder (`baseline.md` 13.4) as `kit.css` draws it, not changed here; and in the light theme every role holds its threshold. **Kept at step 4** (`D-262`, Q3).
- **Declared twice in `kit.css` `:root`, for step 4.** `--shadow-tile-lit-soft` at white .20 (the account menu's tile) and again at .22 (the involves plate); the second wins, so every reader draws .22. Carried as it stands, both lines, so nothing on screen moves; which value is meant is the founder's. **Resolved at step 4** (`D-262`, Q2): one declaration at .22.
- **Dropped.** `--size-banner-v4` (read by nothing) and `--size-drop` (read only by grey-era rules no state wears), the pair stage 07 handed over (finding 7).

## Findings

### 1. Drift: one role, several values

The script lists every pair of colours whose channels differ by 8 or less at the same alpha, or whose alpha differs by .03 or less at the same colour: 148 pairs, Appendix C. Read together they are four clusters, not 148 accidents.

- **The navy grounds.** About twenty dark navies stand within 3 to 8 steps of each other: `--color-card` #0F0E2B, `--color-mode` #100F2C, `--color-card-deep` #0D0C2C, `--color-card-2` #090827, `--color-banner` #0B0F2A, `--color-tile` #0B0A22, `--color-stage` #100F33, `--color-ruler-notch` #120F33, `--color-ruler-gap` #0B0A26, `--color-rail-tile-chip` #08091B, and the stops inside `--gradient-panel`, `--gradient-plate`, `--gradient-row`, `--gradient-menu`, `--gradient-daily-panel`, `--gradient-before-plate`, `--gradient-feed-plate` and `--gradient-feed-back`. Each came with its own block from v4. Whether a pair is one surface or two is step 2's question: a card and a raised card may part in a light theme, a card drawn at #0F0E2B in one block and #100F2C in the next may not.
- **The white hairlines and washes.** White at .05, .06, .07, .08, .09, .10, .12, .14, .16, .18, .20, .22 and .25, each a variable or a stop: `--color-ruler-track` .05, `--color-plate-hover` and `--color-bar-track` .06, `--color-wash` .07, `--color-track`, `--color-footer-pay-hover` and `--color-rule-faint` .08, `--color-ruler-tear` .14, `--color-trust-rule` .16, `--color-plate-rule` .18, `--color-ruler-step` .22, `--color-handle` .25. The census measures the costliest of them on the controls themselves: the same tile edge drawn at two alphas (`census.md`, "Line colours").
- **Pairs that are one value written twice.** `--color-tile-veil` .70 and `--color-plate-veil` .72 on #0B0A22; `--color-daily-chip` .62 and `--color-hash-well` .60 on the ground; `--shadow-button` .32 and `--shadow-button-press` .30 on the button pink; the pink at .35 and .36 in `--gradient-stage-bam` and `--gradient-header-light`; `--color-well` #060818 and `--color-ruler-ground` #060518, both at .60.
- **Two reds for one refusal.** `--color-error` #FF4D6A and `--color-down` #FF5C7A both draw the ring of a control that refuses: the Field's declaration in Sign in reads the first, the Text field and Text area of the Verify form read the second (`census.md`, "Line colours").

Codex judged the same ground "no falsifiable drift: near values carry separately named roles and origins". Both readings stand in the merge below; the pack makes it step 2's decision which near pair is two roles and which is drift.

### 2. One variable, several roles

The pack's third axis: a variable that paints ink in one place and a fill or a line in another, in rules a state wears. A role on two surfaces is held to the lower threshold (3:1) and fails the higher one (4.5:1) unseen. 18 variables:

| Variable | Value | Live references by surface | Blocks it stands in (live) |
|---|---|---|---|
| `--color-text-hi` | #FFFFFF | ink 158, line 41, fill 27 | FOOTER, POPOVER MENU, BEFORE YOU SPEND, THE PAGE'S HEAD, PAYMENT PANEL |
| `--space-1` | 4px | line 3, fill 1 | POPOVER MENU, CASE TILE, FOOTER, AFTER MY ITEMS' SECOND GATE, D-241, THE SELECTION BAR |
| `--color-text-soft` | #CECED4 | ink 77, line 2 | OUTCOME CARD, POPOVER MENU, PUBLISHED AGAINST OBSERVED, FIGURE, CASE TILE |
| `--color-pink` | #FB3F8A | ink 12, fill 11, line 2 | 1. VALUES, POPOVER MENU, CASE STAGE, ICON STORY, D-235, FAVOURITE TOGGLE |
| `--color-text-muted` | #9E9DB1 | ink 33, line 1 | POPOVER MENU, FOOTER, RAIL, FIGURE, FORM CONTROLS |
| `--color-money` | #FFC44D | ink 17, fill 1 | PAYMENT PANEL, DAILY LADDER, DEPOSIT DOCK, AFTER ITS THIRD LOOK, D-242, BEFORE YOU SPEND |
| `--space-thin` | 3px | fill 2, line 1 | BEFORE YOU SPEND, FOOTER, HERO, HOW THIS CASE WORKS, HEADER |
| `--color-ground` | #060A1E | fill 6, ink 3 | 1. VALUES, THE STAGE FORM, D-242, BADGE, COPYABLE VALUE, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--color-green` | #33CC66 | fill 6, ink 4 | D-243, BEFORE YOU SPEND, BADGE, COPYABLE VALUE, DAILY LADDER |
| `--color-line-soft` | #262950 | line 9, fill 1 | AFTER MY ITEMS' SECOND GATE, D-241, THE FILTER DRAWER, KEY-VALUE LINE, TABS, DEPOSIT DOCK |
| `--color-blue` | #65A3FF | line 2, ink 1 | DAILY LADDER, 1. VALUES, ICON STORY, D-235, CASE TILE, RAIL |
| `--color-gold` | #FADA62 | line 1, fill 1, ink 1 | ICON STORY, D-235, CASE TILE, DAILY LADDER, FEED TILE |
| `--color-up` | #35E08A | ink 3, fill 1 | PUBLISHED AGAINST OBSERVED, DEPOSIT DOCK, OUTCOME CARD |
| `--color-error` | #FF4D6A | ink 3, fill 1 | POPOVER MENU, BUTTON, NOTE LINE, FIELD |
| `--color-down` | #FF5C7A | ink 1, fill 1 | PUBLISHED AGAINST OBSERVED, FORM CONTROLS |
| `--color-plate-rule` | rgba(255, 255, 255, .18) | fill 2, line 2 | BEFORE YOU SPEND, WHAT THIS CASE PAYS |
| `--color-ticker` | #020C17 | fill 1, ink 1 | BOTTOM BAR, RAIL |
| `--color-ruler-gap` | #0B0A26 | line 1, ink 1 | HOW THIS CASE WORKS |

The three that carry the product: `--color-text-hi` is the text of most of the product and also the colour of lines and fills; `--color-pink` is the link's ink, a lit fill and an edge; `--color-ground` is the page and the ink on gold and pink plates. Any of `--space-1`, `--space-hair` or `--space-thin` in this table is a pixel value read as a line's width: geometry, not a colour role, and outside this check.

### 3. Values beside variables

- **Colours.** No colour literal outside `:root` equals a variable's value. 36 colour literals stand outside `:root`: all but one are `#000` inside a mask or a fade (a mask reads only its alpha, so this is not a colour), and one is `#B9B4FF` in `.wf-panel::before`, a rule no state wears.
- **Pixels.** 87 pixel literals in a rule equal a `--space-*`, `--size-*` or `--radius-*` value (Appendix D); 69 sit in parts 2 and 3, rules no state wears, and 18 in part 4's one-off blocks. Codex found the same class and called it a coincidence of number, not proof of the same role; agreed, which is why they are listed and not counted as drift.
- **Geometry declared inside components.** The larger class, which the pack's four kinds do not name: 432 custom properties are declared inside a component's rule rather than in `:root` (`--popover-tile: 76px`, `--commit-bolt: 28px`, `--daily-card: 166px`, `--rail-row-start: 20px` and so on), 382 of the declarations a literal pixel value and 316 an alias of a `:root` variable. They are component tokens in all but name, written before the pack's rule that a component token is made only where a state finds no semantic role. Appendix B lists them by prefix. Step 2 decides which are primitives (a size of the system), which stay a component's own geometry, and which are aliases to delete.
- **Art written twice.** The nine round flags are declared as `--art-flag-*` in `:root` and written again as literal data URIs in the `[data-flag]` rules of part 3 (lines 1990 to 1994).
- **Fonts.** None: every `font-family` reads a variable.
- **Screens.** No `<style>` block and no colour or pixel literal in any `style` attribute of the 44 coloured pages. Their attributes set only art (`--case-art: var(--art-case-*)`) and per-item numbers (`--k`, `--t`, `--a`, `--w`).

### 4. Variables without an origin

**None.** Every one of the 554 variables carries a comment beside it or in the block directly above it. By the words of the comment: founder decision 475, carried from v4 328, existing brand 62, taste 23, technical 13, structure 7. 10 name a source but none of the origin words:

- `--icon-facebook`: "simple-icons:facebook, the provider's own mark on its own sign in button"
- `--icon-youtube`: "simple-icons:youtube, the provider's own mark on its own sign in button"
- `--icon-instagram`: "simple-icons:instagram, the provider's own mark on its own sign in button"
- `--icon-tiktok`: "simple-icons:tiktok, the provider's own mark on its own sign in button"
- `--icon-telegram`: "simple-icons:telegram, the provider's own mark on its own sign in button"
- `--icon-steam`: "simple-icons:steam, the provider's own mark on its own sign in button"
- `--icon-google`: "simple-icons:google, the provider's own mark on its own sign in button"
- `--icon-discord`: "simple-icons:discord, the provider's own mark on its own sign in button"
- `--icon-x`: "simple-icons:x, the provider's own mark on its own sign in button"
- `--color-pink-on-dark`: "the brand pink lightened for small type on a dark card: the pink itself holds 11px at 3.7:1 on the item card's navy; the item on its way ..."

The provider marks are third-party glyphs (simple-icons), a technical source; `--color-pink-on-dark` was made by a contrast finding of stage 07 step 6 (I2), a technical decision. Neither is a value from nowhere. Only 140 of the 554 are named in `DESIGN.md`; the rest carry their origin in `kit.css` alone, and step 3 carries every comment into `tokens.css`.

### 5. Orphans and references to nothing

**Orphans, 10**, declared and read by nothing (no rule, no screen, no script):

- `--size-banner-v4` = 440px, `kit.css` line 200
- `--shape-hex-outer` = url(data: svg), `kit.css` line 231
- `--art-case-base` = url(../visuals/cases/base.webp), `kit.css` line 326
- `--color-rare-gold` = var(--color-rarity-1), `kit.css` line 344
- `--color-plate-r1-a` = #9E6905, `kit.css` line 351
- `--color-plate-r3-a` = #A62BC4, `kit.css` line 353
- `--color-plate-r3-b` = #4A1260, `kit.css` line 354
- `--color-plate-r5-a` = var(--color-rarity-5), `kit.css` line 355
- `--motion-rare-drop` = 4s, `kit.css` line 360
- `--shape-case-mark` = url(data: svg), `kit.css` line 361

**Read only by rules no state wears, 47.** Some are read by a part 4 rule a script turns on (finding 6), so they are not orphans yet: `--size-panel`, `--size-btn-s`, `--size-btn-m`, `--size-btn-l`, `--size-mode`, `--color-mode`, `--color-timer`, `--size-drop`, `--shape-hex-line`, `--color-card-hover`, `--art-ground`, `--icon-close`, `--icon-like`, `--icon-skull`, `--icon-rail`, `--icon-mute`, `--icon-crown`, `--size-switch-w`, `--size-switch-h`, `--color-footer-base`, `--color-mode-glow`, `--color-rare-zap`, `--color-field-edge`, `--color-footer-edge`, `--color-rarity-7`, `--color-risk-extreme`, `--size-daily`, `--motion-rail-icon`, `--motion-ease-rail-icon`, `--shadow-price-edge`, `--color-done`, `--color-done-wash`, `--color-scrim-sheet`, `--color-rare-volt-light`, `--color-rare-orbit-light`, `--color-rare-orbit-deep`, `--color-rare-plasma-light`, `--color-rare-chance`, `--color-crown-light`, `--color-crown-deep`, `--shadow-rare-volt`, `--shadow-rare-orbit`, `--shadow-rare-plasma-glow`, `--filter-rare-skin`, `--gradient-stage-bam`, `--shadow-stage-wave`, `--gradient-button-sweep`.

**References to a variable no file declares, 24.** 11 are set where they are used (a screen's `style` attribute: `--a`, `--b`, `--o`, `--p`, `--r1`, `--r2`, `--t`, `--w`; a script: `--bc` in `motion.js`, `--selbar-room` in `items.js`; the stand's panel: `--nav-w` in `_nav.css`). 13 are declared nowhere and all sit in rules no state wears: `--art-banner`, `--art-banner-bg`, `--art-banner-case`, `--art-banner-operator`, `--art-banner-shards`, `--art-daily-1`, `--art-daily-2`, `--art-daily-3`, `--art-daily-4`, `--art-daily-5`, `--art-daily-bg`, `--art-daily-rings`, `--wf-body-x`.

### 6. Rules no state wears

1326 of 3663 rules matched nothing on any of the 51 states at either width.

- **Parts 2 and 3, 979 rules, dead.** Part 2 carried the grey's layout onto the variables (D-191) and part 3 painted the grey's classes in stage 06's language. Stage 07 rebuilt every screen on the kit's own classes, so nothing in the coloured product wears a `wf-*` class. What in those parts is alive is not on `wf-*`: the reset (`*, ::before, ::after`, `html`, `[hidden]`), the rarity classes `.r1` to `.r7`, the glyph library `[data-icon]`, the art map `[data-art]`, the flags `[data-flag]` and the keyframes. Those go to `base.css`, the icon page and the art list (list 2); the rest has no reader. **Corrected at step 3**, on the same census (`census-before.json`, every state at both widths): none of `.r1` to `.r7`, `[data-icon]`, `[data-art]` or `[data-flag]` is worn by any state; what is alive in parts 2 and 3 is the reset (`html`, `[hidden]`, and the box model, whose selector the matcher cannot test) and the keyframes. `base.css` takes the reset; the rarity classes, the glyph library, the art map and the flags go with `kit.css` at step 8; the 55 `--art-*` values, which components read directly, moved to `design/system/art.css`.
- **Part 4, 347 rules, unworn at load.** By block in Appendix E. Largest: the icon story (52, a mark that plays under the pointer), the case stage (43, the phases after the press), the data table (22), the withdraw item (17, a component with no coloured screen yet), the outcome card (15) and the button (14). Step 6 verifies each as "alive in a state" or "dead".

### 7. What stage 07 carried here

`README.md` lists six items stage 07 handed to this stage. Where each stands after this step:

| Carried | Where it stands now |
|---|---|
| The grey-era `.wf-*` layer | Finding 6: 979 rules on `wf-*` in parts 2 and 3, worn by no coloured state; deleted with `kit.css` at step 8, after base.css, the icon page and the art list take what is alive in them. |
| Literals beside variables | Finding 3: none in colour, 87 pixel literals equal by number, 432 custom properties declared inside components. Decided at step 2. |
| The six clashing jobs of the census (`inventory.md`, "Cross-check 1") | Measured again in colour: `census.md`, section 2, seventeen jobs with more than one form. Decided at step 2. |
| One of each pair `--size-banner` and `--size-banner-v4`, `--size-drop` and `--size-drop-v4` | Measured: `--size-banner-v4` (440px) is read by nothing, an orphan; `--size-drop` (92px) is read only by rules no state wears. Each pair keeps one value in use, `--size-banner` 340px and `--size-drop-v4` 104px (86px under 600px). Step 3 keeps those and drops the other two. Done at step 3: `tokens.css` keeps `--size-banner` and `--size-drop-v4` and drops the other two. |
| The origins read from a sheet's header (`DESIGN-artifacts.md` 11) | Finding 4: every variable carries its origin in a comment beside it; step 3 carries each comment into `tokens.css`, the header-only ones among them. |
| A skip link, and the rows of the critique log still to verify | Not a token question. Step 6 (the system against the product) takes the skip link into the shell; step 9's check reads the open rows of `critique.md`. |

## Two instruments

| Finding | Claude (script) | Codex (read only) | Found by | Verdict |
|---|---|---|---|---|
| Declarations | 1398 declarations of 986 names; 554 in `:root` | 917 declared | both | Codex counted the lines that begin with a declaration (913 such lines); inline declarations such as `.daily { --daily-card: 166px; ... }` share a line. A second parser recounts 1 400 declarations of 986 names. Claude's figure stands. |
| Orphans | 10 | 2 (`--motion-rare-drop`, `--size-banner-v4`) | Claude 10, Codex 2 | Verified by search over `kit.css`, every coloured page, `shell.html` and `design/kit/*.js`: none of the eight further names is referenced anywhere. 10 stand. |
| Variables without an origin | 0, 10 naming a source only | 0 | both | Agree. |
| Drift | 148 near pairs in four clusters | none falsifiable | Claude | Both kept: the pairs are facts; which is a role and which is drift is step 2's. |
| Values beside variables | 0 colours, 87 pixel literals, 432 component-scoped properties, flags written twice | 0 on screens; pixel literals equal by number only | both | Agree on screens and pixels; the component-scoped geometry and the twice-written flags found by Claude alone. |
| `--motion-disclosure` read from a script | counted as used (`motion.js` reads it) | same | both | Agree. |
| Rules no state wears | 1326 | not asked | Claude | A browser measure; Codex reads source. |

## List 1: candidates for semantic roles

Read from where each colour is used in live rules, by the surface it paints. A candidate is a job two or more blocks share. Names here are the product's jobs, not another system's; step 3 names them finally.

| Candidate | Surface | From which variables | Seen where |
|---|---|---|---|
| page ground | fill | `--color-ground` #060A1E | the page under every screen; the ticker (`--color-ticker`) and the rail (`--color-card-2`) each keep their own baseline value |
| card surface | fill | `--color-card` #0F0E2B, `--color-card-deep` #0D0C2C, `--color-tile` #0B0A22 | cards, the stage's cards and the dark tile under every control; three navies for what may be one or two roles (finding 1) |
| raised surface, under the pointer | fill | `--color-raised` #223660, `--color-card-hover` #17144B, `--color-burger-hover` #241F58 | the lift a tile takes; the seed of the hover token at step 5 |
| veil over art | fill | `--color-veil` .78, `--color-tile-veil` .70, `--color-plate-veil` .72, `--color-note-plate` .70 | a dark plate under words on a picture; four alphas |
| well | fill | `--color-well`, `--color-hash-well` | a sunken field: the seeds, the limits, the dock |
| scrim | fill | `--color-scrim` .72, `--color-scrim-sheet` | the page behind a layer |
| text, high | ink | `--color-text-hi` #FFFFFF | figures, headings, the label of an act; 158 live ink references |
| text, body | ink | `--color-text-soft` #CECED4, `--color-text` #9F9F9F | two body greys; `--color-text` is the baseline's body, `--color-text-soft` the one the kit reaches for (77 live ink references against 28) |
| text, meta | ink | `--color-text-muted` #9E9DB1 | labels, meta, the quiet half of a pair |
| text, lead | ink | `--color-text-lead`, white at .90 | the lead line of prose and of a page head |
| action | fill | `--color-button` #DF055C, `--color-button-hover` #E8156A | the one lit act of a zone (D-226) |
| accent: link and current | ink and line | `--color-pink` #FB3F8A | the link, the current tab, the open disclosure, the edge of a chosen tile; also a fill (finding 2) |
| money | ink | `--color-money` #FFC44D, `--color-gold` #FADA62 | every price and balance reads `--color-money` (D-209); `--color-gold` keeps the coin and the baseline's other gold jobs |
| success, up | ink and fill | `--color-green` #33CC66, `--color-up` #35E08A, `--color-done` #7BE8A0 | a gain, a done step, a match |
| refusal, down | ink and line | `--color-error` #FF4D6A, `--color-down` #FF5C7A, `--color-refuse` #FF8297, `--color-fail` #FF8FA3 | four reds: a refusal, a fall, the refusal line, a failed notice (finding 1) |
| trust, fair | fill and line | `--color-blue` #65A3FF, `--color-fair` #0B6A8C | the fair blue of the proof block and the section rule |
| line, soft | line | `--color-line-soft` #262950 | the hairline between rows and around plates |
| line | line | `--color-line` #353446 | the stronger rule, the rail's seam |
| tile edge | line | white at .05 and .07 (`--shadow-tile-edge`, `--shadow-edge`) | the 1px ring of every dark tile; two alphas on one role (census, line colours) |
| disabled | fill | `--color-disabled` | Exchange, the one disabled look (D-239) |
| rarity 1 to 7 | fill and line | `--color-rarity-1` to `--color-rarity-7` with the `-lit` and plate pairs | the baseline's ladder (baseline.md 13.4): a ring, a plate, a bar; seven roles by definition |
| risk, four steps | ink | `--color-risk-low`, `-mid`, `-high`, `-extreme` | the case's risk bolts; aliases of green, blue, rarity 3 and a red |
| mode colours | fill | `--color-head-*`, `--color-mode-*`, `--color-case-violet` | a section head's tile in its mode's colour |

**Colours used in exactly one place, 69.** Not candidates: a role is shared. Step 2 keeps each as a primitive of its component or merges it into a role: `--color-rail-icon-cyan`, `--color-plate-r2-a`, `--color-plate-r2-b`, `--color-plate-r4-a`, `--color-plate-r4-b`, `--color-button-ghost`, `--color-veil-soft`, `--color-badge-ink`, `--color-footer-base`, `--color-rare-fire`, `--color-rare-zap`, `--color-field-edge`, `--color-plate-r1-b`, `--color-plate-r5-b`, `--color-head-upgrade`, `--color-head-showdowns`, `--color-trust-plate`, `--color-trust-off`, `--color-trust-rule`, `--color-fav-plate`, `--color-daily-silver`, `--color-daily-chip`, `--color-banner`, `--color-banner-clock-phone`, `--color-banner-cell`, `--color-banner-rule`, `--color-feed-ring-deep`, `--color-avatar-bot`, `--color-mode-later`, `--color-mode-scrim`, `--color-tab`, `--color-up-tab`, `--color-done`, `--color-done-wash`, `--color-pink-edge`, `--color-pink-on-dark`, `--color-refuse`, `--color-stage`, `--color-pointer-deep`, `--color-price-chip`, `--color-skull-off-plate`, `--color-rail-chip-sub`, `--color-rail-tile-chip`, `--color-footer-pt`, `--color-footer-age`, `--color-footer-pay`, `--color-footer-pay-hover`, `--color-ticker-chip`, `--color-ticker-halo`, `--color-plate-ticket`, `--color-ruler`, `--color-ruler-range`, `--color-plate-hover`, `--color-rule-faint`, `--color-rare-volt-light`, `--color-rare-orbit-light`, `--color-rare-orbit-deep`, `--color-rare-plasma-light`, `--color-rare-chance`, `--color-crown-light`, `--color-crown-deep`, `--color-head-steam`, `--color-bar-track`, `--color-ruler-ground`, `--color-ruler-track`, `--color-ruler-notch`, `--color-ruler-tear`, `--color-ruler-step`, `--color-ruler-quarter`.

## List 2: the split into files, by level

Every component of the inventory, 67 rows, in the order of its "Level" column (atoms, molecules, organisms; inside level 3 the inventory's own order, a part before its whole). Each gets the pair `design/system/components/<name>.css` and `design/kit/<name>.html`. "Classes" are the blocks of `kit.css` part 4 that go into the file, read from the header comment each component opens with. No row is without a level.

The inventory stays at `design/kit/inventory.md`, not moved into `docs/` as the pack suggests: the founder's pick at the input gate, 26 Nov 2026, since `CLAUDE.md` names that path. Every mention of the inventory in the pack reads this path.

| Level | Component | Files | Classes in its block of `kit.css`, the component's own first, then the parts of other components it styles inside it (line range) |
|---|---|---|---|
| 1 | Avatar | `components/avatar.css`, `kit/avatar.html` | `.avatar` (2322 to 2331) |
| 1 | Badge | `components/badge.css`, `kit/badge.html` | `.badge` (2310 to 2321) |
| 1 | Button | `components/button.css`, `kit/button.html` | `.button`, `.icon` (2051 to 2119) |
| 1 | Checkbox (form control) | `components/checkbox.css`, `kit/checkbox.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Disclosure | `components/disclosure.css`, `kit/disclosure.html` | `.disclosure`, `.is-closing`, `.link`, `.is-sliding` (2369 to 2390) |
| 1 | Favourite toggle | `components/favourite-toggle.css`, `kit/favourite-toggle.html` | `.fav`, `.icon` (2391 to 2412) |
| 1 | Figure | `components/figure.css`, `kit/figure.html` | `.fig`, `.icon` (2282 to 2309) |
| 1 | File picker (form control) | `components/file-picker.css`, `kit/file-picker.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Icon | `components/icon.css`, `kit/icon.html` | `.icon` (2120 to 2136); `.icon-story`, `.has-story`, `.icon`, `.is-story` (2137 to 2281) |
| 1 | Key-value line | `components/key-value-line.css`, `kit/key-value-line.html` | `.kv` (2443 to 2451) |
| 1 | Logo | `components/logo.css`, `kit/logo.html` | `.logo` (2332 to 2345) |
| 1 | Media slot | `components/media-slot.css`, `kit/media-slot.html` | `.media` (2346 to 2351) |
| 1 | Note line | `components/note-line.css`, `kit/note-line.html` | `.note` (2413 to 2425) |
| 1 | Prose | `components/prose.css`, `kit/prose.html` | `.prose` (2426 to 2432) |
| 1 | Radio (form control) | `components/radio.css`, `kit/radio.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Range (form control) | `components/range.css`, `kit/range.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Segmented control | `components/segmented-control.css`, `kit/segmented-control.html` | `.seg` (2433 to 2442) |
| 1 | Select (form control) | `components/select.css`, `kit/select.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Status steps | `components/status-steps.css`, `kit/status-steps.html` | `.steps`, `.is-done`, `.is-now` (2452 to 2461) |
| 1 | Switch (form control) | `components/switch.css`, `kit/switch.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Tabs | `components/tabs.css`, `kit/tabs.html` | `.tabs` (2462 to 2468) |
| 1 | Text area (form control) | `components/text-area.css`, `kit/text-area.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Text field (form control) | `components/text-field.css`, `kit/text-field.html` | the shared `FORM CONTROLS` block (2469 to 2513), split by element at step 5 |
| 1 | Text link | `components/text-link.css`, `kit/text-link.html` | `.link` (2360 to 2368) |
| 2 | Amount field | `components/amount-field.css`, `kit/amount-field.html` | `.amount`, `.input` (2514 to 2521) |
| 2 | Breadcrumb | `components/breadcrumb.css`, `kit/breadcrumb.html` | `.crumb` (2522 to 2544) |
| 2 | Case tile | `components/case-tile.css`, `kit/case-tile.html` | `.case-tile`, `.icon`, `.is-on`, `.is-left` (2545 to 2629) |
| 2 | Category bar | `components/category-bar.css`, `kit/category-bar.html` | `.catbar`, `.seg`, `.button`, `.is-more` (2630 to 2653) |
| 2 | Chosen method | `components/chosen-method.css`, `kit/chosen-method.html` | `.chosen` (2654 to 2669) |
| 2 | Copyable value | `components/copyable-value.css`, `kit/copyable-value.html` | `.copy-value` (2670 to 2689) |
| 2 | Daily ladder | `components/daily-ladder.css`, `kit/daily-ladder.html` | `.daily`, `.is-live`, `.button`, `.media` (2690 to 2879) |
| 2 | Drop card | `components/drop-card.css`, `kit/drop-card.html` | `.drop-card`, `.kv`, `.fig`, `.recent-drop` (2927 to 2993) |
| 2 | Empty state | `components/empty-state.css`, `kit/empty-state.html` | `.empty` (2994 to 3010) |
| 2 | Event banner | `components/event-banner.css`, `kit/event-banner.html` | `.banner`, `.is-story` (3011 to 3147) |
| 2 | Feed tile | `components/feed-tile.css`, `kit/feed-tile.html` | `.feed-tile` (3148 to 3236) |
| 2 | Field | `components/field.css`, `kit/field.html` | `.field`, `.is-missing` (3328 to 3361) |
| 2 | Filter chip | `components/filter-chip.css`, `kit/filter-chip.html` | `.chip` (3362 to 3369) |
| 2 | Hero | `components/hero.css`, `kit/hero.html` | `.hero` (3370 to 3412) |
| 2 | Item card | `components/item-card.css`, `kit/item-card.html` | rules elsewhere, see below (3413 to 3420) |
| 2 | Mode card | `components/mode-card.css`, `kit/mode-card.html` | `.mode-card` (3469 to 3551) |
| 2 | Outcome card | `components/outcome-card.css`, `kit/outcome-card.html` | `.outcome`, `.fig`, `.icon`, `.is-on` (3552 to 3618) |
| 2 | Popover menu | `components/popover-menu.css`, `kit/popover-menu.html` | `.popover`, `.is-done`, `.icon`, `.avatar` (3619 to 3774) |
| 2 | Recent drop card | `components/recent-drop-card.css`, `kit/recent-drop-card.html` | `.recent-drop`, `.avatar` (3775 to 3807) |
| 2 | Section head | `components/section-head.css`, `kit/section-head.html` | `.sec-head`, `.icon`, `.link` (3808 to 3847) |
| 2 | Withdraw item | `components/withdraw-item.css`, `kit/withdraw-item.html` | `.withdraw-item`, `.fig`, `.media`, `.kv` (3848 to 3878) |
| 3 | Account head | `components/account-head.css`, `kit/account-head.html` | rules elsewhere, see below (3879 to 3885) |
| 3 | Bottom bar | `components/bottom-bar.css`, `kit/bottom-bar.html` | `.bottom-bar`, `.icon` (4002 to 4014) |
| 3 | Case grid | `components/case-grid.css`, `kit/case-grid.html` | `.case-grid` (4015 to 4035) |
| 3 | Case stage | `components/case-stage.css`, `kit/case-stage.html` | `.case-stage`, `.outcome`, `.is-landed`, `.is-on` (4036 to 4254) |
| 3 | Commit block | `components/commit-block.css`, `kit/commit-block.html` | `.commit`, `.icon`, `.button`, `.is-on` (4276 to 4346) |
| 3 | Data table | `components/data-table.css`, `kit/data-table.html` | `.data-table`, `.is-money` (4347 to 4396) |
| 3 | Deposit dock | `components/deposit-dock.css`, `kit/deposit-dock.html` | `.dock`, `.fig`, `.button` (2880 to 2902) |
| 3 | Footer | `components/footer.css`, `kit/footer.html` | `.footer`, `.fig` (4397 to 4558) |
| 3 | Header | `components/header.css`, `kit/header.html` | `.header`, `.popover` (4559 to 4616) |
| 3 | Item grid | `components/item-grid.css`, `kit/item-grid.html` | `.item-grid` (4617 to 4635) |
| 3 | Limits panel | `components/limits-panel.css`, `kit/limits-panel.html` | `.limits`, `.field`, `.button`, `.is-said` (4636 to 4688) |
| 3 | Mode row | `components/mode-row.css`, `kit/mode-row.html` | `.mode-row` (4689 to 4703) |
| 3 | Proof block | `components/proof-block.css`, `kit/proof-block.html` | `.proof` (4704 to 4724) |
| 3 | Rail | `components/rail.css`, `kit/rail.html` | `.rail`, `.is-closed`, `.button`, `.icon-story` (4725 to 4887) |
| 3 | Recent drops | `components/recent-drops.css`, `kit/recent-drops.html` | `.recent-drops` (4888 to 4902) |
| 3 | Status notice | `components/status-notice.css`, `kit/status-notice.html` | `.notice`, `.steps`, `.copy-value`, `.kv` (4903 to 4925) |
| 3 | Ticker | `components/ticker.css`, `kit/ticker.html` | `.ticker`, `.is-held`, `.is-new` (4926 to 4980) |
| 3 | Verify form | `components/verify-form.css`, `kit/verify-form.html` | `.verify` (4981 to 5005) |
| 3 | Payment panel | `components/payment-panel.css`, `kit/payment-panel.html` | `.pay-panel`, `.radio` (5006 to 5081) |
| 3 | Case head | `components/case-head.css`, `kit/case-head.html` | `.case-head` (5082 to 5109) |
| 3 | Sign-in block | `components/sign-in-block.css`, `kit/sign-in-block.html` | `.signin`, `.button` (5110 to 5154) |
| 3 | Dialog | `components/dialog.css`, `kit/dialog.html` | `.dialog` (5155 to 5250) |

**Parts of a component that stand in another block of `kit.css`.** They move with their component, not with the block: the item card's rules in "After my items' second gate" (3421 to 3468); the account head's in "After its third look" and "The stage form" (3899 to 4001); the feed tile's rare marks (3237 to 3327); the drop card's rare marks on the case's cards (4255 to 4275); "The stage's own card" (2903 to 2926), shared by the drop card, the recent drop card and the outcome card; "A case as Home draws it" (2352 to 2359), a form of the media slot; the icon story (2137 to 2281), a form of the icon.

**Classes that fall in no component file, for the founder to place:**

- **To `design/system/base.css`:** the reset and the root (`*, ::before, ::after`, `html`, `[hidden]`), "The shell's page layout" and "The screen's column and rhythm" (5756 to 5823, `.shell`), "A block off the screen pauses its loops" (5824 to 5838, `.is-idle`), and the rarity classes `.r1` to `.r7` (corrected at step 3: the rarity classes are worn by no state and stay behind with `kit.css`; finding 6).
- **To the icon page and its file:** the glyph library `[data-icon]` (part 3) and the 44 `--icon-*` masks (corrected at step 3: `[data-icon]` is worn by no state; the icon file takes part 4's `.icon` and the masks).
- **Art:** the art map `[data-art]` and the flags `[data-flag]` (part 3), and the 55 `--art-*` variables. Pictures, not components. Proposed: a small `art.css` beside `base.css`, shown on the icon page under "Art".
- **A screen's own blocks** (`kit.css` part 4.4: `.spend`, `.involves`, `.faq`, `.about`, `.before`, `.observed`, `.how` with `.ruler`, `.methods`, `.works`, `.record`, `.selbar`, `.cashout`, `.steam-state`, `.fair-head` with its parts, `.shelf-head`, `.shelf-state`, `.filter-drawer` with `.stepper` and `.risk-marks`, `.rp-head`). The pack's tree has no place for them. Proposed: `design/system/screens/<screen>.css`, imported after the organisms, so the product loads them and the stand does not list them as components.
- **Dead, to delete at step 8 with `kit.css`:** every rule of parts 2 and 3 on `wf-*` (finding 6), and the 13 references to variables declared nowhere that live in them.

**The form controls are eight components, not one block.** Checkbox, Radio, Range, Select, Switch, Text area, Text field and File picker each get their own pair at step 5. The census adds what they look like today: Select is drawn as the Popover menu's `--select` form (D-238); Switch and File picker stand on no coloured screen.

**One-offs counted again over the whole grey product.** The 46 one-offs of stage 07, counted on all 134 grey pages rendered in the browser (the grey builds much of its markup in script, so a search of the files undercounts). A block stands on a second screen only when its own class is on a second IA node; a shared class (`wf-figs`, `wf-prose`, `wf-sec`, `wf-crumb`, `wf-table`, `wf-faq`, `wf-form`) gives only an upper bound and is marked so.

| One-off | Node | Grey class | Grey pages | IA nodes | Reading |
|---|---|---|---|---|---|
| Before you spend | 1.0 | `wf-figs` | 37 | 0.4,1.0,1.1,2.1,2.2,2.4,3.3,3.5,3.6,3.7,4.1,5.3,5.4,5.5,5.6,5.8 | already known: stands on 1.0 and, as What this case pays, on 3.3; owed to the components at stage 08 (inventory, D-245). |
| What opening a case here involves | 1.0 | `wf-prose` | 37 | 0.4,1.0,1.1,2.1,2.2,2.4,3.1,3.2,3.3,3.5,3.6,3.7,4.1 | upper bound only: the class is shared by other blocks |
| Questions and answers | 1.0 | `wf-faq` | 9 | 0.10 | upper bound only: the class is shared by other blocks |
| About Clutch | 1.0 | `wf-prose` | 37 | 0.4,1.0,1.1,2.1,2.2,2.4,3.1,3.2,3.3,3.5,3.6,3.7,4.1 | upper bound only: the class is shared by other blocks |
| Before you open | 3.3 | `wf-case-info` | 20 | 2.1,2.2,2.4,3.3,3.5,3.6,3.7,4.1 | the case screen behind a layer (2.1, 2.2, 2.4 and 4.1 open over 3.3); one screen. |
| What this case pays | 3.3 | `wf-figs` | 37 | 0.4,1.0,1.1,2.1,2.2,2.4,3.3,3.5,3.6,3.7,4.1,5.3,5.4,5.5,5.6,5.8 | the form of Before you spend on 3.3; see that row. |
| Published against observed | 3.3 | `wf-table` | 31 | 2.1,2.2,2.4,3.3,3.5,3.6,3.7,4.1,5.3,5.5,5.8,5.9 | upper bound only: the class is shared by other blocks |
| Provably fair's head | 1.2 | `wf-scope-two` | 6 | 1.2, 1.3, 1.4 | one screen with its states |
| What a round proof is made of | 1.2 | `wf-proof-fields` | 11 | 1.2,1.3,1.4,7.1 | **second screen: 7.1**, the public result page reads the same field set. Candidate for a component. |
| If your check does not match ours | 1.2 | `wf-sec` | 52 | 0.4,1.0,1.1,1.2,1.3,1.4,2.1,2.2,2.4,3.1,3.2,3.3,3.5,3.6,3.7,4.1,4.2,4.4,7.1,7.2,7.3 | upper bound only: the class is shared by other blocks |
| The algorithm, published in full | 1.2 | `wf-algo` | 6 | 1.2,1.3,1.4 | one screen with its states |
| How this case works | 3.3, 1.2 | `wf-prose` | 37 | 0.4,1.0,1.1,2.1,2.2,2.4,3.1,3.2,3.3,3.5,3.6,3.7,4.1 | already known: 3.3 and 1.2 (D-245); owed to the components at stage 08. |
| System page block | 0.3 | `wf-sys` | 7 | 0.3 | one screen with its states |
| Toast | 0.3 | `wf-copied` | 2 | 0.3 | one screen with its states |
| Cookie consent | 0.4 | `wf-ck` | 8 | 0.4 | one screen with its states |
| Legal document | 0.9 | `wf-doc` | 6 | 0.9 | one screen with its states |
| Support form | 0.10 | `wf-form` | 4 | 0.10 | upper bound only: the class is shared by other blocks |
| Support topics | 0.10 | `wf-faq` | 9 | 0.10 | upper bound only: the class is shared by other blocks |
| Ticket card | 0.10 | `wf-tick` | 6 | 0.10 | one screen with its states |
| Filter drawer | 3.1 | `wf-drawer` | 1 | 3.1 | one screen with its states |
| Number stepper | 3.1 | `wf-stepper` | 1 | 3.1 | one screen with its states |
| Risk pips | 3.1 | `wf-pips` | 1 | 3.1 | one screen with its states |
| Skeleton | 3.1 | `wf-skel-line` | 1 | 3.1 | one screen with its states |
| The catalogue's head | 3.1, 3.2 | `wf-crumb` | 83 | 0.10,0.9,1.2,1.3,1.4,2.1,2.2,2.4,3.1,3.2,3.3,3.5,3.6,3.7,4.1,5.1,5.10,5.11,5.2,5.9,6.1,6.2,6.3,7.3 | upper bound only: the class is shared by other blocks |
| Filters in force | 3.1, 3.2 | `wf-chips, wf-count-line` | 3 | 3.1, 3.2 | one screen with its states |
| Responsible play's head | 6.1, 6.3 | `wf-rp-say` | 4 | 6.1, 6.3 | one screen with its states |
| Showcase | 3.3 | `wf-show` | 11 | 2.1,2.2,2.4,3.3,4.1 | the case screen behind a layer; one screen. |
| Reveal lanes | 3.5 | `wf-lanes` | 2 | 3.5 | one screen with its states |
| Round detail popover | 3.6 | `wf-detail-wrap` | 2 | 3.6 | one screen with its states |
| Gift cards | 4.1 | `wf-gift` | 1 | 4.1 | one screen with its states |
| Provider tile | 4.1 | `wf-pay-t` | 2 | 4.1 | one screen with its states |
| Skin deposit | 4.1 | `wf-skindep` | 1 | 4.1 | one screen with its states |
| What still works | 4.2 | `wf-open-list` | 1 | 4.2 | one screen with its states |
| This deposit | 4.4 | `wf-total` | 5 | 0.10,4.1,4.3,4.4,4.5 | **second screen: 0.10**, support's upheld state shows the same record; 4.1 to 4.5 are deposit's own states. Candidate for a component. |
| Cash out form | 5.1 | `wf-co-lay` | 1 | 5.1 | one screen with its states |
| Selection bar | 5.1 | `wf-invbar` | 2 | 5.1 | one screen with its states |
| Steam state | 5.1 | `-` | 0 | - | no grey class: drawn from the grey's sub line, nothing to count. |
| Offer list | 5.3 | `wf-offs` | 2 | 5.3 | one screen with its states |
| Selected skin | 5.3 | `wf-selskin` | 2 | 5.3 | one screen with its states |
| History filters | 5.9 | `wf-hfilters` | 4 | 5.9 | one screen with its states |
| History round row | 5.9 | `wf-roll` | 4 | 5.9 | one screen with its states |
| Messages | 5.10 | `wf-msg` | 3 | 5.10 | one screen with its states |
| Case row link | 7.1 | `wf-caserow` | 5 | 7.1 | one screen with its states |
| Owner block | 7.1 | `wf-owner` | 1 | 7.1 | one screen with its states |
| Winner line | 7.1 | `wf-who` | 5 | 7.1 | one screen with its states |
| Profile strip | 7.3 | `wf-strip` | 2 | 7.3 | one screen with its states |

Four one-offs are owed to the components at step 2: Before you spend with its form What this case pays, How this case works, What a round proof is made of, and This deposit.

## List 3: the foundation pages

Where each kind of value is shown, so no token and no class is left without a page (step 4).

| Page | What goes on it | From `kit.css` |
|---|---|---|
| `color.html` | the primitive palette, the semantic roles with their pairs (the second theme is light, the founder's pick 1a of 26 Nov 2026), the contrast pairs, the rarity ladder | `--color-*` 147 |
| `typography.html` | the font, the scale 13 15 18 24 40 and its extras, weights, tracking, line heights | `--font-*` 2, the type sizes among `--size-*`, `--tracking-*` 14 |
| `geometry.html` | spacing, radii, sizes of controls and shells, the shell's widths | `--space-*` 15, `--radius-*` 8, the rest of `--size-*` (65 in all) |
| `icons.html` | the glyph set, the provider marks, `design/kit/marks/`, the icon story; proposed also the art | `--icon-*` 44, `[data-icon]`, `--art-*` 55, `[data-art]`, `[data-flag]` |

**Material that fits none of the four, with a proposal:**

- **Depth and surface:** `--shadow-*` 81, `--gradient-*` 63, `--blur-*` 12, `--filter-*` 8, `--shape-*` 11. Proposed: a fifth page, `depth.html` ("Depth and surface"), each shadow, glow, gradient, blur and clip shape shown on a tile.
- **Motion:** `--motion-*` 29, durations and curves. Proposed: a section "Motion as it stands" on `geometry.html` now; stage 11 gives it its own page, `motion.html`, already registered in `/_nav.js`.

## Appendix A: every variable of `:root`

Live and unworn references counted as in finding 6; the surfaces of live references; the blocks of `kit.css` they stand in. Origin comments stay in `kit.css` beside each declaration and are not repeated here.

| Variable | Value | Live | Unworn | Surfaces (live) | Blocks (live) |
|---|---|---|---|---|---|
| `--color-ground` | #060A1E | 11 | 42 | fill 6, ink 3, variable 2 | 1. VALUES, THE STAGE FORM, D-242, BADGE, COPYABLE VALUE |
| `--color-ticker` | #020C17 | 2 | 12 | fill 1, ink 1 | BOTTOM BAR, RAIL |
| `--color-card` | #0F0E2B | 10 | 32 | fill 9, variable 1 | AFTER MY ITEMS' SECOND GATE, D-241, THE STAGE FORM, D-242, 1. VALUES, POPOVER MENU |
| `--color-card-2` | #090827 | 3 | 19 | fill 3 | POPOVER MENU, MEDIA SLOT |
| `--color-raised` | #223660 | 1 | 20 | fill 1 | AVATAR |
| `--color-pink` | #FB3F8A | 55 | 43 | variable 17, ink 12, fill 11, shadow or effect 11, line 2, script 2 | 1. VALUES, POPOVER MENU, CASE STAGE, ICON STORY, D-235 |
| `--color-blue` | #65A3FF | 8 | 23 | variable 4, line 2, ink 1, script 1 | DAILY LADDER, 1. VALUES, ICON STORY, D-235, CASE TILE |
| `--color-gold` | #FADA62 | 6 | 14 | variable 3, line 1, fill 1, ink 1 | ICON STORY, D-235, CASE TILE, DAILY LADDER, FEED TILE |
| `--color-money` | #FFC44D | 20 | 1 | ink 17, fill 1, shadow or effect 1, script 1 | PAYMENT PANEL, DAILY LADDER, DEPOSIT DOCK, AFTER ITS THIRD LOOK, D-242 |
| `--color-green` | #33CC66 | 10 | 6 | fill 6, ink 4 | D-243, BEFORE YOU SPEND, BADGE, COPYABLE VALUE |
| `--color-text-hi` | #FFFFFF | 246 | 135 | ink 158, line 41, fill 27, variable 9, other 7, shadow or effect 2, script 2 | FOOTER, POPOVER MENU, BEFORE YOU SPEND, THE PAGE'S HEAD |
| `--color-text` | #9F9F9F | 28 | 41 | ink 28 | POPOVER MENU, FEED TILE, DATA TABLE, BREADCRUMB |
| `--color-text-muted` | #9E9DB1 | 37 | 37 | ink 33, variable 2, shadow or effect 1, line 1 | POPOVER MENU, FOOTER, RAIL, FIGURE |
| `--color-rarity-1` | #F6C915 | 1 | 6 | variable 1 | 1. VALUES |
| `--color-rarity-2` | #D1273E | 17 | 2 | variable 17 | 1. VALUES, HOW THIS CASE WORKS, THE STAGE'S OWN CARD, FEED TILE |
| `--color-rarity-3` | #D22BCE | 15 | 4 | variable 15 | THE STAGE'S OWN CARD, FEED TILE, CASE STAGE, PUBLISHED AGAINST OBSERVED |
| `--color-rarity-4` | #6B42B9 | 6 | 6 | variable 5, fill 1 | 1. VALUES, FEED TILE, THE STAGE FORM, D-242 |
| `--color-rarity-5` | #3955E8 | 8 | 3 | variable 8 | 1. VALUES, FEED TILE, AFTER MY ITEMS' SECOND GATE, D-241, THE STAGE FORM, D-242 |
| `--color-rarity-6` | #305F8D | 1 | 7 | variable 1 | FEED TILE |
| `--size-xl` | 40px | 5 | 4 | type 5 | THE PAGE'S HEAD, FIGURE, PAYMENT PANEL |
| `--size-l` | 24px | 9 | 9 | type 5, space 2, size 2 | DAILY LADDER, MODE CARD, DIALOG, WHAT THIS CASE PAYS |
| `--size-m` | 18px | 14 | 5 | type 14 | DROP CARD, FIGURE, DAILY LADDER, EVENT BANNER |
| `--size-s` | 15px | 13 | 12 | type 13 | OUTCOME CARD, ABOUT CLUTCH, SEGMENTED CONTROL, DAILY LADDER |
| `--size-xs` | 13px | 29 | 58 | type 29 | DAILY LADDER, FEED TILE, COMMIT BLOCK, BUTTON |
| `--radius-s` | 8px | 33 | 23 | radius 33 | POPOVER MENU, CASE TILE, FEED TILE, DAILY LADDER |
| `--radius-m` | 16px | 38 | 33 | radius 38 | CASE TILE, RAIL, THE PAGE'S HEAD, DAILY LADDER |
| `--radius-l` | 24px | 10 | 9 | radius 10 | POPOVER MENU, AFTER ITS THIRD LOOK, D-242, FOOTER, CASE HEAD |
| `--radius-pill` | 999px | 2 | 9 | radius 2 | FORM CONTROLS, TICKER |
| `--font-family` | Roboto, sans-serif | 12 | 8 | type 12 | DAILY LADDER, FEED TILE, MODE CARD, AFTER ITS THIRD LOOK, D-242 |
| `--space-1` | 4px | 100 | 65 | space 86, line 3, other 3, size 3, shadow or effect 2, fill 1, variable 1, type 1 | POPOVER MENU, CASE TILE, FOOTER, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--space-2` | 8px | 198 | 127 | space 173, size 13, variable 9, shadow or effect 2, other 1 | POPOVER MENU, RAIL, THE PAGE'S HEAD, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--space-3` | 12px | 207 | 35 | space 186, variable 8, size 6, other 5, shadow or effect 2 | POPOVER MENU, DAILY LADDER, HEADER, RAIL |
| `--space-4` | 16px | 179 | 98 | space 164, variable 7, size 6, type 1, other 1 | THE PAGE'S HEAD, EVENT BANNER, AFTER ITS THIRD LOOK, D-242, POPOVER MENU |
| `--space-5` | 24px | 86 | 59 | space 77, ink 3, variable 3, size 2, other 1 | THE PAGE'S HEAD, EVENT BANNER, PAYMENT PANEL, FOOTER |
| `--space-6` | 32px | 46 | 19 | space 40, variable 4, fill 2 | THE PAGE'S HEAD, THE SCREEN'S COLUMN AND RHYTHM, D-234, THE STAGE FORM, D-242, WHERE THE BAR STICKS AND WHERE THE BLOCKS STAND |
| `--space-7` | 56px | 3 | 2 | space 2, variable 1 | THE SHELL'S PAGE LAYOUT, D-232, THE SCREEN'S COLUMN AND RHYTHM, D-234 |
| `--color-line-soft` | #262950 | 10 | 68 | line 9, fill 1 | AFTER MY ITEMS' SECOND GATE, D-241, THE FILTER DRAWER, KEY-VALUE LINE, TABS |
| `--color-line` | #353446 | 3 | 26 | line 2, shadow or effect 1 | POPOVER MENU, STATUS STEPS |
| `--shadow-panel` | 0 24px 48px -24px rgba(0, 0, 0, .7) | 2 | 3 | shadow or effect 2 | POPOVER MENU |
| `--size-unit` | 11px | 34 | 9 | type 34 | DROP CARD, AFTER MY ITEMS' SECOND GATE, D-241, FIGURE, MODE CARD |
| `--size-chip` | 12px | 56 | 28 | type 56 | BEFORE YOU SPEND, FIGURE, CASE TILE, COPYABLE VALUE |
| `--size-label` | 14px | 51 | 23 | type 51 | POPOVER MENU, LIMITS PANEL, PAYMENT PANEL, FIELD |
| `--size-text` | 16px | 67 | 21 | type 67 | WHAT OPENING A CASE HERE INVOLVES, HOW THIS CASE WORKS, CASE TILE, DAILY LADDER |
| `--size-title` | 20px | 26 | 7 | type 22, space 2, size 2 | DAILY LADDER, FIGURE, POPOVER MENU, AFTER ITS THIRD LOOK, D-242 |
| `--size-panel` | 24px | 0 | 5 |  |  |
| `--size-stat` | 30px | 3 | 2 | type 3 | DIALOG, OUTCOME CARD |
| `--size-btn-s` | 28px | 0 | 6 |  |  |
| `--size-btn-m` | 40px | 0 | 9 |  |  |
| `--size-btn-l` | 48px | 0 | 3 |  |  |
| `--size-ticker` | 120px | 1 | 1 | size 1 | TICKER |
| `--size-banner` | 340px | 2 | 1 | size 1, variable 1 | EVENT BANNER |
| `--size-mode` | 160px | 0 | 3 |  |  |
| `--size-edge` | 2px | 123 | 32 | line 82, shadow or effect 21, space 8, size 7, other 3, variable 2 | POPOVER MENU, FORM CONTROLS, FOOTER, BUTTON |
| `--color-text-soft` | #CECED4 | 79 | 28 | ink 77, line 2 | OUTCOME CARD, POPOVER MENU, PUBLISHED AGAINST OBSERVED, FIGURE |
| `--color-mode` | #100F2C | 0 | 5 |  |  |
| `--color-timer` | rgba(2, 12, 23, .7) | 0 | 2 |  |  |
| `--color-risk-low` | #33CC66 | 2 | 2 | variable 2 | CASE TILE, RISK MARKS |
| `--color-risk-mid` | #65A3FF | 3 | 1 | variable 3 | CASE TILE, COMMIT BLOCK, RISK MARKS |
| `--color-risk-high` | #D22BCE | 2 | 2 | variable 2 | CASE TILE, RISK MARKS |
| `--color-skull-off` | #272D3F | 2 | 1 | ink 2 | CASE TILE, RISK MARKS |
| `--size-micro` | 9px | 3 | 5 | type 3 | KEY-VALUE LINE, DROP CARD, PUBLISHED AGAINST OBSERVED |
| `--size-drop` | 92px | 0 | 2 |  |  |
| `--shape-hex-fill` | url(data: svg) | 12 | 4 | fill 12 | THE STAGE'S OWN CARD, FEED TILE, AFTER MY ITEMS' SECOND GATE, D-241, CASE STAGE |
| `--shape-hex-line` | url(data: svg) | 0 | 4 |  |  |
| `--color-mode-light` | #7E2DC8 | 2 | 4 | fill 2 | HOW THIS CASE WORKS, THE ALGORITHM, PUBLISHED IN FULL |
| `--color-card-hover` | #17144B | 0 | 3 |  |  |
| `--blur-mode` | 40px | 2 | 1 | shadow or effect 2 | AFTER MY ITEMS' SECOND GATE, D-241 |
| `--art-ground` | url(../visuals/brand/ground.webp) | 0 | 2 |  |  |
| `--motion-drift` | 26s | 1 | 1 | motion 1 | EVENT BANNER |
| `--motion-float` | 6s | 1 | 2 | motion 1 | PAYMENT PANEL |
| `--motion-sway` | 9s | 1 | 1 | motion 1 | EVENT BANNER |
| `--motion-snow` | 14s | 1 | 1 | motion 1 | EVENT BANNER |
| `--size-rail` | 250px | 1 | 4 | size 1 | RAIL |
| `--size-rail-collapsed` | 70px | 2 | 2 | variable 1, size 1 | RAIL, THE SHELL'S PAGE LAYOUT, D-232 |
| `--size-header` | 64px | 5 | 5 | size 2, variable 1, space 1, other 1 | RAIL, WHERE THE BAR STICKS AND WHERE THE BLOCKS STAND, HEADER |
| `--size-content` | 1298px | 3 | 4 | space 3 | EVENT BANNER |
| `--size-bar` | 64px | 4 | 3 | space 3, size 1 | THE SELECTION BAR, BOTTOM BAR, THE SHELL'S PAGE LAYOUT, D-232 |
| `--size-measure` | 68ch | 12 | 4 | size 12 | DAILY LADDER, PROSE, EMPTY STATE, SECTION HEAD |
| `--size-tap` | 44px | 38 | 32 | size 32, space 3, other 2, variable 1 | BUTTON, SEGMENTED CONTROL, FIELD, FILTER CHIP |
| `--icon-box` | url(data: svg) | 1 | 5 | variable 1 | ICON |
| `--icon-battle` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-target` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-arrow-up` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-users` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-pulse` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-star` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-home` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-user` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-history` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-send` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-share` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--icon-search` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--icon-filter` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--icon-settings` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-shield` | url(data: svg) | 1 | 4 | variable 1 | ICON |
| `--icon-out` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-close` | url(data: svg) | 0 | 3 |  |  |
| `--icon-like` | url(data: svg) | 0 | 4 |  |  |
| `--icon-cup` | url(data: svg) | 1 | 3 | variable 1 | ICON |
| `--icon-calendar` | url(data: svg) | 2 | 3 | fill 2 | DAILY LADDER |
| `--icon-skull` | url(data: svg) | 0 | 3 |  |  |
| `--icon-rail` | url(data: svg) | 0 | 3 |  |  |
| `--icon-sound` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-mute` | url(data: svg) | 0 | 3 |  |  |
| `--icon-gift` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-dollar` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-swap` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-diamond` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-pistol` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-facebook` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-youtube` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-instagram` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-tiktok` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-telegram` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-steam` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-google` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-discord` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--icon-x` | url(data: svg) | 1 | 1 | variable 1 | ICON |
| `--color-button` | #DF055C | 19 | 3 | fill 9, variable 5, shadow or effect 5 | FORM CONTROLS, BUTTON, 1. VALUES, CASE STAGE |
| `--color-button-hover` | #E8156A | 3 | 0 | fill 3 | BUTTON |
| `--color-fair` | #0B6A8C | 2 | 0 | variable 2 | 1. VALUES |
| `--color-tile` | #0B0A22 | 15 | 1 | fill 15 | FORM CONTROLS, POPOVER MENU, CASE TILE, BUTTON |
| `--color-rail-icon-red` | color-mix(in srgb, var(--color-rarity-2) 72%,... | 1 | 1 | variable 1 | ICON STORY, D-235 |
| `--color-rail-icon-cyan` | color-mix(in srgb, var(--color-blue) 70%, var... | 1 | 0 | variable 1 | ICON STORY, D-235 |
| `--color-plate-r2-a` | var(--color-rarity-2) | 1 | 0 | variable 1 |  |
| `--color-plate-r2-b` | #7A0F22 | 1 | 0 | variable 1 |  |
| `--color-plate-r4-a` | var(--color-rarity-4) | 1 | 0 | variable 1 |  |
| `--color-plate-r4-b` | #2E1A63 | 1 | 0 | variable 1 |  |
| `--size-banner-v4` | 440px | 0 | 0 |  |  |
| `--size-drop-v4` | 104px | 2 | 2 | size 2 | FEED TILE, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--size-tile` | 42px | 17 | 0 | size 15, variable 1, space 1 | SECTION HEAD, HEADER, RAIL, BUTTON |
| `--size-button-l` | 52px | 4 | 1 | size 3, space 1 | BUTTON, FORM CONTROLS, DAILY LADDER, EVENT BANNER |
| `--size-button-m` | 40px | 21 | 1 | size 19, space 2 | POPOVER MENU, FAVOURITE TOGGLE, BUTTON, FORM CONTROLS |
| `--size-button-s` | 32px | 16 | 0 | size 12, space 4 | AFTER MY ITEMS' SECOND GATE, D-241, BUTTON, FILTER CHIP, SEGMENTED CONTROL |
| `--radius-card` | 12px | 66 | 1 | radius 61, shape 4, variable 1 | BEFORE YOU SPEND, WHAT THIS CASE PAYS, MODE CARD, FOOTER |
| `--radius-tile` | var(--radius-card) | 7 | 0 | radius 7 | BUTTON, POPOVER MENU, SECTION HEAD, FOOTER |
| `--radius-button` | 12px | 12 | 0 | radius 12 | BUTTON, FORM CONTROLS, NUMBER STEPPER, FAVOURITE TOGGLE |
| `--shadow-button` | 0 4px 14px rgba(223, 5, 92, .32) | 5 | 0 | shadow or effect 5 | BUTTON, SEGMENTED CONTROL, FORM CONTROLS, CATEGORY BAR |
| `--shadow-tile-edge` | inset 0 0 0 1px rgba(255, 255, 255, .05) | 14 | 2 | shadow or effect 13, variable 1 | POPOVER MENU, FOOTER, 1. VALUES, BUTTON |
| `--motion-ease-pop` | cubic-bezier(.34, 1.56, .64, 1) | 15 | 0 | motion 15 | MODE CARD, CASE TILE, BEFORE YOU SPEND, FEED TILE |
| `--gradient-mode-cases` | linear-gradient(120deg, var(--color-pink), #8... | 9 | 0 | fill 5, variable 4 | POPOVER MENU, CASE TILE, EMPTY STATE, SECTION HEAD |
| `--gradient-mode-cases-deep` | linear-gradient(120deg, var(--color-button), ... | 1 | 0 | fill 1 | PAYMENT PANEL |
| `--gradient-mode-battles` | linear-gradient(120deg, var(--color-rarity-5)... | 14 | 0 | variable 7, fill 7 | POPOVER MENU, RAIL, CASE TILE, DAILY LADDER |
| `--gradient-mode-showdowns` | linear-gradient(120deg, var(--color-rarity-2)... | 6 | 0 | variable 4, fill 2 | FOOTER, CASE TILE, MODE CARD, SECTION HEAD |
| `--gradient-mode-upgrade` | linear-gradient(120deg, #9E6905, #B4400F) | 4 | 0 | fill 2, variable 2 | DAILY LADDER, MODE CARD, SECTION HEAD, FOOTER |
| `--gradient-panel` | linear-gradient(180deg, #120F33, #0B0A22 60%,... | 3 | 0 | fill 3 | RAIL, FOOTER |
| `--gradient-stripes` | repeating-linear-gradient(135deg, rgba(255, 2... | 14 | 0 | fill 14 | FOOTER, THE STAGE FORM, D-242, RAIL, DAILY LADDER |
| `--gradient-button-stripes` | repeating-linear-gradient(135deg, rgba(255, 2... | 21 | 1 | fill 21 | POPOVER MENU, BUTTON, PAYMENT PANEL, DIALOG |
| `--gradient-button-sheen` | linear-gradient(105deg, transparent 42%, rgba... | 2 | 0 | fill 2 | BUTTON |
| `--shape-hex-outer` | url(data: svg) | 0 | 0 |  |  |
| `--shape-hex-inner` | url(data: svg) | 10 | 2 | fill 10 | THE STAGE'S OWN CARD, FEED TILE, AFTER MY ITEMS' SECOND GATE, D-241, CASE STAGE |
| `--shape-feed-ring` | url(data: svg) | 2 | 0 | fill 2 | FEED TILE |
| `--shape-ring-mask` | url(data: svg) | 2 | 0 | fill 2 | RARE MARKS ON A DROP, D-235 |
| `--shape-hex-glow` | url(data: svg) | 2 | 0 | fill 2 | CASE STAGE |
| `--icon-heart` | url(data: svg) | 1 | 2 | variable 1 | ICON |
| `--icon-crown` | url(data: svg) | 0 | 3 |  |  |
| `--icon-bolt` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--icon-question` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--radius-xs` | 4px | 38 | 8 | radius 38 | FEED TILE, DROP CARD, POPOVER MENU, CASE STAGE |
| `--color-up` | #35E08A | 5 | 1 | ink 3, fill 1, shadow or effect 1 | PUBLISHED AGAINST OBSERVED, DEPOSIT DOCK, OUTCOME CARD |
| `--color-down` | #FF5C7A | 4 | 8 | shadow or effect 2, ink 1, fill 1 | PUBLISHED AGAINST OBSERVED, FORM CONTROLS |
| `--color-button-ghost` | rgba(11, 10, 34, .55) | 1 | 0 | fill 1 | BUTTON |
| `--color-button-ghost-hover` | rgba(223, 5, 92, .2) | 3 | 0 | fill 2, shadow or effect 1 | BUTTON, STATUS STEPS |
| `--shadow-button-ghost` | 0 4px 14px rgba(223, 5, 92, .2) | 2 | 0 | shadow or effect 2 | BUTTON |
| `--shadow-button-press` | 0 2px 8px rgba(223, 5, 92, .3) | 1 | 0 | shadow or effect 1 | BUTTON |
| `--color-disabled` | rgba(150, 160, 215, .14) | 2 | 4 | fill 2 | BUTTON, CASE TILE |
| `--shadow-edge` | inset 0 0 0 1px rgba(255, 255, 255, .07) | 48 | 1 | shadow or effect 48 | POPOVER MENU, FORM CONTROLS, DIALOG, EVENT BANNER |
| `--color-veil` | rgba(6, 8, 24, .78) | 11 | 0 | fill 11 | POPOVER MENU, AFTER ITS THIRD LOOK, D-242, FAVOURITE TOGGLE, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--color-veil-soft` | rgba(6, 8, 24, .45) | 1 | 0 | fill 1 | BUTTON |
| `--color-error` | #FF4D6A | 5 | 1 | ink 3, fill 1, shadow or effect 1 | POPOVER MENU, BUTTON, NOTE LINE, FIELD |
| `--color-badge-ink` | #3A2600 | 1 | 0 | ink 1 | BADGE |
| `--gradient-row` | linear-gradient(180deg, #16133C, #100E2E) | 5 | 0 | fill 5 | DISCLOSURE, EMPTY STATE, FIELD, LIMITS PANEL |
| `--shadow-avatar` | 0 0 0 1px rgba(255, 255, 255, .12) | 1 | 0 | shadow or effect 1 | AVATAR |
| `--shadow-avatar-s` | 0 0 0 1px rgba(255, 255, 255, .25) | 1 | 0 | shadow or effect 1 | AVATAR |
| `--size-hairline` | 1px | 75 | 30 | size 31, shadow or effect 17, line 13, space 9, variable 2, other 2, type 1 | AFTER MY ITEMS' SECOND GATE, D-241, RAIL, POPOVER MENU, CASE STAGE |
| `--tracking-caps` | .06em | 8 | 1 | type 8 | BUTTON, BADGE, BREADCRUMB, FEED TILE |
| `--tracking-label` | .08em | 30 | 2 | type 30 | EVENT BANNER, AFTER MY ITEMS' SECOND GATE, D-241, OUTCOME CARD, PUBLISHED AGAINST OBSERVED |
| `--size-button-l-pad` | 28px | 1 | 0 | space 1 | BUTTON |
| `--size-button-m-pad` | 20px | 2 | 0 | space 2 | BUTTON |
| `--size-button-s-pad` | 14px | 3 | 0 | space 3 | BUTTON, SEGMENTED CONTROL, MODE CARD |
| `--size-badge` | 16px | 1 | 1 | size 1 | BADGE |
| `--size-avatar-s` | 16px | 2 | 0 | size 2 | AVATAR |
| `--size-avatar-m` | 32px | 2 | 0 | size 2 | AVATAR |
| `--size-close` | 40px | 2 | 0 | size 2 | BUTTON |
| `--size-row` | 64px | 3 | 0 | size 3 | DISCLOSURE, FIELD, THE WAYS TO PAY |
| `--size-mark` | 28px | 2 | 0 | size 2 | DISCLOSURE |
| `--size-check` | 20px | 17 | 0 | size 10, type 4, space 2, variable 1 | FORM CONTROLS, CASE TILE, POPOVER MENU, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--size-switch-w` | 40px | 0 | 2 |  |  |
| `--size-lead` | 17px | 7 | 0 | type 7 | BUTTON, DISCLOSURE, PROSE, POPOVER MENU |
| `--color-text-lead` | rgba(255, 255, 255, .9) | 6 | 1 | ink 6 | THE PAGE'S HEAD, PROSE, WHAT OPENING A CASE HERE INVOLVES, ABOUT CLUTCH |
| `--color-well` | rgba(6, 8, 24, .6) | 4 | 0 | fill 4 | LIMITS PANEL, DISCLOSURE, DEPOSIT DOCK |
| `--color-tile-veil` | rgba(11, 10, 34, .7) | 8 | 0 | fill 8 | FAVOURITE TOGGLE, SEGMENTED CONTROL, COPYABLE VALUE, FILTER CHIP |
| `--gradient-edge-pink` | linear-gradient(90deg, transparent, var(--col... | 3 | 0 | fill 3 | FOOTER, DISCLOSURE |
| `--tracking-link` | .02em | 9 | 0 | type 9 | BUTTON, BEFORE YOU SPEND, TEXT LINK, SEGMENTED CONTROL |
| `--size-switch-h` | 24px | 0 | 4 |  |  |
| `--art-coin` | url(../v4/art/brand/coin-6-small.svg) | 2 | 2 | fill 2 | ICON, PAYMENT PANEL |
| `--art-logo` | url(../v4/art/brand/logo2-10.svg) | 1 | 0 | fill 1 | LOGO |
| `--art-case-ironbound` | url(../visuals/cases/ironbound-c.webp) | 118 | 1 | variable 116, fill 1, script 1 | BEFORE YOU SPEND |
| `--art-case-warsteel` | url(../visuals/cases/warsteel-c.webp) | 178 | 1 | variable 178 |  |
| `--art-case-coldfront` | url(../visuals/cases/coldfront-c.webp) | 145 | 1 | variable 145 | RAIL |
| `--art-case-nightfall` | url(../visuals/cases/nightfall-c.webp) | 111 | 1 | variable 110, fill 1 | WHAT OPENING A CASE HERE INVOLVES |
| `--art-case-emberforge` | url(../visuals/cases/emberforge-c.webp) | 8 | 1 | variable 8 |  |
| `--art-case-emberline` | url(../visuals/cases/emberline-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-saltmarsh` | url(../visuals/cases/saltmarsh-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-blacklight` | url(../visuals/cases/blacklight-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-riftwork` | url(../visuals/cases/riftwork-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-deadbolt` | url(../visuals/cases/deadbolt-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-overcast` | url(../visuals/cases/overcast-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-tinderbox` | url(../visuals/cases/tinderbox-c.webp) | 7 | 0 | variable 7 |  |
| `--art-case-halfmoon` | url(../visuals/cases/halfmoon-c.webp) | 7 | 0 | variable 7 |  |
| `--art-daily-silver` | url(../visuals/daily/silver.webp) | 1 | 0 | variable 1 | DAILY LADDER |
| `--art-daily-nova` | url(../visuals/daily/nova.webp) | 1 | 0 | variable 1 | DAILY LADDER |
| `--art-daily-guardian` | url(../visuals/daily/guardian.webp) | 1 | 0 | variable 1 | DAILY LADDER |
| `--art-daily-legend` | url(../visuals/daily/legend.webp) | 1 | 0 | variable 1 | DAILY LADDER |
| `--art-daily-elite` | url(../visuals/daily/elite.webp) | 1 | 0 | variable 1 | DAILY LADDER |
| `--art-mode-cases` | url(../visuals/modes/mode-cases-obj4.webp) | 2 | 1 | variable 1, fill 1 | MODE CARD, THE PAGE'S HEAD |
| `--art-mode-cases-burst` | url(../visuals/modes/mode-cases-burst4.webp) | 1 | 0 | variable 1 | MODE CARD |
| `--art-mode-battles` | url(../visuals/modes/mode-battles-clash.webp) | 1 | 1 | variable 1 | MODE CARD |
| `--art-mode-showdowns` | url(../visuals/modes/mode-showdowns-obj4.webp) | 2 | 1 | variable 2 | MODE CARD, RAIL |
| `--art-mode-showdowns-burst` | url(../visuals/modes/mode-showdowns-burst4.webp) | 1 | 0 | variable 1 | MODE CARD |
| `--art-mode-upgrade` | url(../visuals/modes/mode-upgrade-obj4.webp) | 2 | 1 | variable 2 | MODE CARD, RAIL |
| `--art-mode-upgrade-burst` | url(../visuals/modes/mode-upgrade-burst4.webp) | 1 | 0 | variable 1 | MODE CARD |
| `--art-banner-hero` | url(../visuals/banner/banner-hero.webp) | 1 | 0 | fill 1 | EVENT BANNER |
| `--art-banner-aurora` | url(../visuals/banner/banner-aurora.webp) | 1 | 0 | fill 1 | EVENT BANNER |
| `--art-banner-glow` | url(../visuals/banner/banner-glow.webp) | 1 | 0 | fill 1 | EVENT BANNER |
| `--art-banner-plate` | url(../visuals/banner/banner-plate.webp) | 1 | 0 | fill 1 | EVENT BANNER |
| `--art-banner-title` | url(../visuals/banner/banner-title-d.webp) | 1 | 1 | fill 1 | EVENT BANNER |
| `--art-fx-bolt` | url(../visuals/fx/bolt-24.webp) | 1 | 0 | fill 1 | RARE MARKS ON A DROP, D-235 |
| `--art-fx-plasma` | url(../visuals/fx/plasma-24.webp) | 1 | 0 | fill 1 | RARE MARKS ON THE CASE'S CARDS, D-236 |
| `--size-badge-text` | 10px | 6 | 2 | type 6 | BADGE, DROP CARD, OUTCOME CARD, CASE STAGE |
| `--size-badge-pad` | 5px | 3 | 0 | space 3 | DAILY LADDER, BADGE |
| `--size-tile-icon` | 22px | 8 | 0 | type 5, size 3 | POPOVER MENU, BUTTON, CATEGORY BAR, EMPTY STATE |
| `--color-case-violet` | #A35CFF | 2 | 0 | variable 2 | CASE TILE, DAILY LADDER |
| `--shadow-skin-drop` | drop-shadow(0 6px 6px rgba(0, 0, 0, .7)) | 2 | 1 | shadow or effect 2 | A CASE AS HOME DRAWS IT, D-230, AFTER MY ITEMS' SECOND GATE, D-241 |
| `--shape-case-rim` | polygon(0 49%, 9.6% 50.5%, 70% 59%, 77% 56%, ... | 3 | 0 | shape 3 | A CASE AS HOME DRAWS IT, D-230, BEFORE YOU SPEND, WHAT OPENING A CASE HERE INVOLVES |
| `--art-case-base` | url(../visuals/cases/base.webp) | 0 | 0 |  |  |
| `--art-banner-plate-wide` | url(../visuals/banner/banner-plate-wide.webp) | 1 | 0 | variable 1 | EVENT BANNER |
| `--art-daily-ground` | url(../visuals/daily/daily-bg.webp) | 2 | 0 | fill 2 | DAILY LADDER |
| `--art-fall-far` | url(../visuals/brand/fall-far.webp) | 1 | 0 | fill 1 | HEADER |
| `--art-fall-near` | url(../visuals/brand/fall-near.webp) | 1 | 0 | fill 1 | HEADER |
| `--art-footer-agents` | url(../visuals/brand/footer-agents.webp) | 2 | 0 | fill 2 | AFTER ITS THIRD LOOK, D-242, THE STAGE FORM, D-242 |
| `--art-footer-agents-2` | url(../visuals/brand/footer-agents-2.webp) | 1 | 0 | fill 1 | FOOTER |
| `--art-fx-plasma-tall` | url(../visuals/fx/plasma-tall-24.webp) | 2 | 0 | fill 2 | RARE MARKS ON A DROP, D-235, RARE MARKS ON THE CASE'S CARDS, D-236 |
| `--art-mode-battles-crossed` | url(../visuals/modes/mode-battles-crossed.webp) | 1 | 0 | variable 1 | RAIL |
| `--art-mode-battles-knife-blue` | url(../visuals/modes/mode-battles-knife-blue.... | 1 | 0 | fill 1 | MODE CARD |
| `--art-mode-battles-knife-red` | url(../visuals/modes/mode-battles-knife-red.w... | 1 | 0 | fill 1 | MODE CARD |
| `--color-scrim` | rgba(6, 10, 30, .72) | 3 | 3 | fill 3 | EVENT BANNER, RAIL, DIALOG |
| `--color-footer-base` | #030214 | 0 | 1 |  |  |
| `--color-mode-glow` | #2B1751 | 0 | 2 |  |  |
| `--color-rare-gold` | var(--color-rarity-1) | 0 | 0 |  |  |
| `--color-rare-fire` | #FF5A2E | 1 | 0 | variable 1 | CASE TILE |
| `--color-rare-zap` | #8FD3FF | 0 | 1 |  |  |
| `--color-field-edge` | #CECED4 | 0 | 1 |  |  |
| `--color-footer-edge` | #65A3FF | 0 | 2 |  |  |
| `--color-rarity-7` | #DDDDDD | 0 | 5 |  |  |
| `--color-risk-extreme` | #FF4D3D | 0 | 2 |  |  |
| `--color-plate-r1-a` | #9E6905 | 0 | 0 |  |  |
| `--color-plate-r1-b` | #B4400F | 1 | 0 | variable 1 | 1. VALUES |
| `--color-plate-r3-a` | #A62BC4 | 0 | 0 |  |  |
| `--color-plate-r3-b` | #4A1260 | 0 | 0 |  |  |
| `--color-plate-r5-a` | var(--color-rarity-5) | 0 | 0 |  |  |
| `--color-plate-r5-b` | #1B2A8F | 1 | 0 | variable 1 | 1. VALUES |
| `--size-daily` | 344px | 0 | 1 |  |  |
| `--motion-rail-icon` | .95s | 0 | 41 |  |  |
| `--motion-ease-rail-icon` | cubic-bezier(.3, .7, .3, 1) | 0 | 41 |  |  |
| `--motion-rare-drop` | 4s | 0 | 0 |  |  |
| `--shape-case-mark` | url(data: svg) | 0 | 0 |  |  |
| `--space-hair` | 2px | 41 | 5 | space 22, size 8, other 5, radius 3, variable 2, line 1 | RAIL, FOOTER, CASE TILE, BEFORE YOU SPEND |
| `--space-thin` | 3px | 20 | 2 | space 8, other 5, fill 2, radius 2, size 2, line 1 | BEFORE YOU SPEND, FOOTER, HERO, HOW THIS CASE WORKS |
| `--space-1-5` | 6px | 79 | 9 | space 63, radius 5, size 4, other 4, variable 3 | DAILY LADDER, BEFORE YOU SPEND, CASE TILE, POPOVER MENU |
| `--space-1-75` | 7px | 10 | 0 | space 8, radius 2 | POPOVER MENU, HOW THIS CASE WORKS, OUTCOME CARD, HEADER |
| `--space-2-5` | 10px | 73 | 3 | space 67, size 4, other 1, variable 1 | DAILY LADDER, POPOVER MENU, CASE TILE, DEPOSIT DOCK |
| `--space-3-5` | 14px | 58 | 7 | space 49, size 8, variable 1 | BEFORE YOU SPEND, DROP CARD, FOOTER, DAILY LADDER |
| `--space-4-25` | 18px | 15 | 2 | space 13, variable 2 | WHAT OPENING A CASE HERE INVOLVES, HOW THIS CASE WORKS, DROP CARD, OUTCOME CARD |
| `--space-5-5` | 28px | 15 | 0 | space 13, variable 2 | DAILY LADDER, EVENT BANNER, DIALOG, WHAT OPENING A CASE HERE INVOLVES |
| `--size-head-l` | 26px | 10 | 0 | type 9, variable 1 | THE PAGE'S HEAD, CHOSEN METHOD, DEPOSIT DOCK, EVENT BANNER |
| `--size-lift` | 3px | 7 | 1 | other 7 | FOOTER, RAIL, DROP CARD, RECENT DROP CARD |
| `--size-tier-bar` | 3px | 5 | 0 | size 5 | DROP CARD, OUTCOME CARD, RECENT DROP CARD, CASE STAGE |
| `--size-tier-bar-w` | 44px | 6 | 0 | size 3, space 3 | DROP CARD, OUTCOME CARD, RECENT DROP CARD |
| `--size-ring-stroke` | 3.6px | 3 | 0 | other 3 | THE STAGE'S OWN CARD, CASE STAGE, HOW THIS CASE WORKS |
| `--size-ring-glow-near` | 1.5px | 2 | 0 | shadow or effect 2 | THE STAGE'S OWN CARD |
| `--size-ring-glow-far` | 3px | 2 | 0 | shadow or effect 2 | THE STAGE'S OWN CARD |
| `--size-card-art` | 112px | 2 | 0 | size 2 | DROP CARD, RECENT DROP CARD |
| `--size-card-art-s` | 96px | 1 | 1 | size 1 | RECENT DROP CARD |
| `--tracking-title` | .02em | 2 | 0 | type 2 | HERO, FOOTER |
| `--tracking-case-name` | .04em | 1 | 0 | type 1 | CASE TILE |
| `--tracking-score` | -.01em | 6 | 0 | type 6 | THE PAGE'S HEAD, THE STAGE FORM, D-242, HERO |
| `--color-head-upgrade` | #F0A21B | 1 | 0 | variable 1 | SECTION HEAD |
| `--color-head-battles` | #4A6BFF | 2 | 0 | variable 2 | 1. VALUES, SECTION HEAD |
| `--color-head-showdowns` | #E5394F | 1 | 0 | variable 1 | SECTION HEAD |
| `--color-trustpilot` | #00B67A | 2 | 0 | variable 1, fill 1 | 1. VALUES, HERO |
| `--color-trust-plate` | rgba(12, 16, 44, .82) | 1 | 0 | fill 1 | HERO |
| `--color-trust-off` | rgba(150, 160, 215, .24) | 1 | 0 | fill 1 | HERO |
| `--color-trust-rule` | rgba(255, 255, 255, .16) | 1 | 0 | line 1 | HERO |
| `--color-fav-plate` | rgba(11, 10, 34, .78) | 1 | 0 | fill 1 | CASE TILE |
| `--color-price-plate` | rgba(11, 10, 34, .82) | 1 | 1 | fill 1 | DIALOG |
| `--gradient-trust` | linear-gradient(135deg, rgba(0, 182, 122, .16... | 1 | 0 | fill 1 | HERO |
| `--gradient-trust-edge` | linear-gradient(120deg, var(--color-trustpilo... | 1 | 0 | fill 1 | HERO |
| `--gradient-trust-sweep` | linear-gradient(105deg, transparent 23%, rgba... | 2 | 0 | fill 2 | HERO, PAYMENT PANEL |
| `--gradient-case-gold` | linear-gradient(120deg, #B57A06, #B4400F) | 3 | 0 | variable 3 | RAIL, CASE TILE |
| `--gradient-case-violet` | linear-gradient(120deg, #8E2BC9, #3B1A8F) | 1 | 0 | variable 1 | CASE TILE |
| `--gradient-fade-up` | linear-gradient(to top, #000 30%, transparent... | 2 | 0 | fill 2 | CASE TILE |
| `--shadow-tile-lit` | inset 0 1px 0 rgba(255, 255, 255, .25) | 16 | 1 | shadow or effect 15, variable 1 | PAYMENT PANEL, BEFORE YOU SPEND, DAILY LADDER, 1. VALUES |
| `--shadow-edge-lit` | inset 0 0 0 1px rgba(255, 255, 255, .1) | 8 | 1 | shadow or effect 7, variable 1 | 1. VALUES, CASE TILE, DAILY LADDER, VERIFY FORM |
| `--shadow-price-edge` | inset 0 0 0 1px rgba(255, 255, 255, .14) | 0 | 1 |  |  |
| `--shadow-trust` | var(--shadow-edge-lit), 0 8px 24px rgba(6, 10... | 1 | 0 | shadow or effect 1 | HERO |
| `--shadow-trust-hover` | inset 0 0 0 1px rgba(255, 255, 255, .16), 0 1... | 1 | 0 | shadow or effect 1 | HERO |
| `--shadow-tip` | 0 8px 18px rgba(4, 6, 20, .5) | 1 | 0 | shadow or effect 1 | CASE TILE |
| `--shape-tip-tail` | polygon(100% 0, 100% 100%, 0 50%) | 1 | 0 | shape 1 | CASE TILE |
| `--motion-ease-settle` | cubic-bezier(.22, 1, .36, 1) | 24 | 0 | motion 24 | CASE STAGE, CASE TILE, EVENT BANNER, RAIL |
| `--motion-ease-bounce` | cubic-bezier(.3, 1.6, .5, 1) | 2 | 0 | motion 2 | CASE TILE |
| `--motion-trust-sweep` | 7s | 1 | 0 | motion 1 | HERO |
| `--motion-stagger` | 45ms | 4 | 0 | motion 4 | HERO |
| `--motion-stagger-bolt` | 70ms | 2 | 0 | motion 2 | CASE TILE |
| `--color-daily-silver` | #C9D2E3 | 1 | 0 | variable 1 | DAILY LADDER |
| `--color-plate-veil` | rgba(11, 10, 34, .72) | 2 | 0 | fill 2 | DAILY LADDER, WHAT OPENING A CASE HERE INVOLVES |
| `--color-daily-chip` | rgba(6, 10, 30, .62) | 1 | 0 | fill 1 | DAILY LADDER |
| `--shadow-tile-lit-hover` | inset 0 1px 0 rgba(255, 255, 255, .3) | 1 | 0 | shadow or effect 1 | DAILY LADDER |
| `--shadow-tile-lit-live` | inset 0 1px 0 rgba(255, 255, 255, .4) | 2 | 0 | shadow or effect 2 | DAILY LADDER |
| `--shadow-daily-lift` | 0 18px 30px rgba(6, 10, 30, .55) | 1 | 0 | shadow or effect 1 | DAILY LADDER |
| `--shadow-daily-lift-hover` | 0 18px 30px rgba(6, 10, 30, .6) | 1 | 0 | shadow or effect 1 | DAILY LADDER |
| `--shadow-daily-lift-live-hover` | 0 24px 36px rgba(6, 10, 30, .6) | 1 | 0 | shadow or effect 1 | DAILY LADDER |
| `--shadow-daily-name` | 0 2px 8px rgba(6, 10, 30, .4) | 1 | 0 | ink 1 | DAILY LADDER |
| `--shadow-daily-skin` | drop-shadow(0 6px 6px rgba(0, 0, 0, .65)) | 1 | 0 | shadow or effect 1 | DAILY LADDER |
| `--gradient-daily-panel` | linear-gradient(180deg, #16133C, #0D0C28) | 2 | 0 | fill 2 | DAILY LADDER, WHAT OPENING A CASE HERE INVOLVES |
| `--gradient-daily-fade` | linear-gradient(90deg, transparent 18%, #000 ... | 2 | 0 | fill 2 | DAILY LADDER |
| `--gradient-daily-fade-s` | linear-gradient(180deg, #000 0, transparent 4... | 2 | 0 | fill 2 | DAILY LADDER |
| `--gradient-daily-silver` | linear-gradient(120deg, #7D88A8, #333C5A) | 1 | 0 | variable 1 | DAILY LADDER |
| `--gradient-daily-guardian` | linear-gradient(120deg, #8E2BC9, #41157A) | 1 | 0 | variable 1 | DAILY LADDER |
| `--gradient-daily-legend` | linear-gradient(120deg, var(--color-pink), #8... | 1 | 0 | variable 1 | DAILY LADDER |
| `--gradient-daily-elite` | linear-gradient(120deg, #B07806, var(--color-... | 1 | 0 | variable 1 | DAILY LADDER |
| `--tracking-tight` | .03em | 2 | 0 | type 2 | DAILY LADDER, MODE CARD |
| `--shape-daily-rim` | polygon(0 55%, 100% 55%, 100% 100%, 0 100%) | 1 | 0 | shape 1 | DAILY LADDER |
| `--color-banner` | #0B0F2A | 1 | 0 | fill 1 | EVENT BANNER |
| `--color-banner-clock-phone` | rgba(6, 10, 30, .78) | 1 | 0 | fill 1 | EVENT BANNER |
| `--color-banner-cell` | rgba(15, 14, 43, .9) | 1 | 0 | fill 1 | EVENT BANNER |
| `--color-banner-rule` | rgba(101, 163, 255, .14) | 1 | 0 | line 1 | EVENT BANNER |
| `--shadow-banner` | 0 14px 34px rgba(0, 0, 0, .4) | 1 | 0 | shadow or effect 1 | EVENT BANNER |
| `--shadow-banner-clock` | inset 0 0 0 1px rgba(101, 163, 255, .18), 0 1... | 1 | 0 | shadow or effect 1 | EVENT BANNER |
| `--shadow-banner-title` | drop-shadow(0 1px 2px rgba(6, 10, 30, .9)) dr... | 1 | 0 | shadow or effect 1 | EVENT BANNER |
| `--filter-banner-plate` | brightness(1.08) saturate(1.1) | 1 | 0 | shadow or effect 1 | EVENT BANNER |
| `--filter-banner-flare` | brightness(1.5) | 2 | 0 | shadow or effect 2 | EVENT BANNER |
| `--filter-banner-flare-still` | brightness(1.15) | 1 | 0 | shadow or effect 1 | EVENT BANNER |
| `--blur-banner-clock` | 6px | 4 | 0 | shadow or effect 4 | EVENT BANNER, TICKER |
| `--tracking-banner-unit-phone` | .04em | 1 | 0 | type 1 | EVENT BANNER |
| `--gradient-banner-shade` | linear-gradient(90deg, rgba(6, 10, 30, .5), r... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-shade-phone` | linear-gradient(to bottom, rgba(6, 10, 30, .4... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-foot` | linear-gradient(to top, var(--color-ground), ... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-foot-phone` | linear-gradient(to top, var(--color-ground) 1... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-hero-mask` | linear-gradient(to top, transparent, #000 14%) | 2 | 0 | fill 2 | EVENT BANNER |
| `--gradient-banner-hero-mask-phone` | linear-gradient(to top, transparent 22%, #000... | 2 | 0 | fill 2 | EVENT BANNER |
| `--gradient-banner-story-mask-phone` | linear-gradient(to bottom, #000 68%, transpar... | 2 | 0 | fill 2 | EVENT BANNER |
| `--gradient-banner-art-mask` | radial-gradient(closest-side, #000 72%, trans... | 2 | 0 | fill 2 | EVENT BANNER |
| `--gradient-banner-sweep` | linear-gradient(105deg, transparent 20%, rgba... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-snow-near` | radial-gradient(circle at 12% 18%, rgba(255, ... | 1 | 0 | fill 1 | EVENT BANNER |
| `--gradient-banner-snow-far` | radial-gradient(circle at 8% 31%, rgba(220, 2... | 1 | 0 | fill 1 | EVENT BANNER |
| `--motion-banner-pulse` | 3.2s | 1 | 0 | motion 1 | EVENT BANNER |
| `--motion-banner-pulse-fast` | 1.4s | 2 | 0 | motion 2 | EVENT BANNER |
| `--motion-banner-snow-near` | 11s | 3 | 0 | motion 3 | EVENT BANNER |
| `--motion-banner-snow-far` | 22s | 1 | 0 | motion 1 | EVENT BANNER |
| `--motion-banner-sweep` | 4.5s | 2 | 0 | motion 2 | EVENT BANNER, PAYMENT PANEL |
| `--motion-banner-sweep-fast` | .8s | 2 | 0 | motion 2 | EVENT BANNER |
| `--motion-banner-lean` | .9s | 2 | 0 | motion 2 | EVENT BANNER |
| `--motion-banner-fade` | .6s | 2 | 1 | motion 2 | EVENT BANNER |
| `--gradient-feed-plate` | linear-gradient(to bottom, #191842, var(--col... | 2 | 0 | fill 2 | FEED TILE, RARE MARKS ON A DROP, D-235 |
| `--gradient-feed-back` | linear-gradient(to bottom, #1D1B4A, #110F31) | 1 | 0 | fill 1 | FEED TILE |
| `--shadow-feed-tile` | 0 6px 14px rgba(0, 0, 0, .35) | 1 | 0 | shadow or effect 1 | FEED TILE |
| `--shadow-feed-skin` | drop-shadow(0 6px 5px rgba(0, 0, 0, .75)) | 1 | 0 | shadow or effect 1 | FEED TILE |
| `--shadow-feed-text` | 0 1px 2px rgba(0, 0, 0, .6) | 1 | 0 | ink 1 | FEED TILE |
| `--color-feed-ring-deep` | #12001C | 1 | 0 | fill 1 | FEED TILE |
| `--color-avatar-bot` | #2B2A63 | 1 | 0 | fill 1 | FEED TILE |
| `--shadow-avatar-bot` | inset 0 0 0 1px rgba(255, 255, 255, .18) | 2 | 0 | shadow or effect 2 | FEED TILE, FOOTER |
| `--gradient-mode-cases-card` | linear-gradient(120deg, var(--color-button), ... | 4 | 0 | fill 3, variable 1 | MODE CARD, AFTER ITS THIRD LOOK, D-242, THE STAGE FORM, D-242, THE PAGE'S HEAD |
| `--gradient-mode-foot` | linear-gradient(to top, rgba(8, 6, 30, .6), t... | 1 | 0 | fill 1 | MODE CARD |
| `--shadow-mode-card` | inset 0 1px 0 rgba(255, 255, 255, .25), 0 10p... | 2 | 0 | shadow or effect 2 | MODE CARD, THE PAGE'S HEAD |
| `--shadow-mode-art` | drop-shadow(0 8px 10px rgba(6, 10, 30, .5)) | 2 | 0 | shadow or effect 2 | MODE CARD, THE PAGE'S HEAD |
| `--shadow-mode-art-warm` | drop-shadow(0 4px 8px rgba(90, 40, 0, .55)) | 1 | 0 | shadow or effect 1 | MODE CARD |
| `--shadow-mode-knife` | drop-shadow(0 6px 8px rgba(6, 10, 30, .55)) | 1 | 0 | shadow or effect 1 | MODE CARD |
| `--shadow-mode-name` | 0 2px 4px rgba(6, 10, 30, .6), 0 2px 14px rgb... | 1 | 0 | ink 1 | MODE CARD |
| `--shadow-mode-line` | 0 1px 6px rgba(6, 10, 30, .5) | 2 | 0 | ink 2 | MODE CARD |
| `--color-mode-later` | rgba(66, 74, 128, .7) | 1 | 0 | fill 1 | MODE CARD |
| `--shadow-mode-later` | inset 0 0 0 1px rgba(255, 255, 255, .16), 0 6... | 1 | 0 | shadow or effect 1 | MODE CARD |
| `--blur-mode-later` | 8px | 2 | 0 | shadow or effect 2 | MODE CARD |
| `--color-mode-scrim` | rgba(8, 6, 30, .7) | 1 | 0 | fill 1 | MODE CARD |
| `--blur-mode-scrim` | 12px | 1 | 0 | shadow or effect 1 | MODE CARD |
| `--tracking-mode-name` | .01em | 3 | 0 | type 3 | MODE CARD, RAIL, CASE HEAD |
| `--motion-mode-float` | 4.6s | 3 | 0 | motion 3 | MODE CARD, THE STAGE FORM, D-242, THE PAGE'S HEAD |
| `--motion-mode-burst` | 5s | 1 | 0 | motion 1 | MODE CARD |
| `--motion-mode-strike` | .7s | 2 | 0 | motion 2 | MODE CARD |
| `--blur-bolt` | 4px | 1 | 0 | shadow or effect 1 | CASE TILE |
| `--blur-bolt-strike` | 6px | 1 | 0 | shadow or effect 1 | CASE TILE |
| `--blur-tier-bar` | 10px | 6 | 0 | shadow or effect 6 | FEED TILE, DROP CARD, OUTCOME CARD, RECENT DROP CARD |
| `--tracking-feed-sub` | .4px | 1 | 0 | type 1 | FEED TILE |
| `--tracking-tile` | .03em | 1 | 0 | type 1 | POPOVER MENU |
| `--tracking-snug` | .04em | 6 | 2 | type 6 | RAIL, DROP CARD, POPOVER MENU, FOOTER |
| `--color-rarity-4-lit` | #8F63E6 | 5 | 0 | variable 5 | CASE STAGE, THE STAGE'S OWN CARD, PUBLISHED AGAINST OBSERVED, HOW THIS CASE WORKS |
| `--color-rarity-5-lit` | #4F6BFF | 5 | 1 | variable 5 | HOW THIS CASE WORKS, THE STAGE'S OWN CARD, CASE STAGE, PUBLISHED AGAINST OBSERVED |
| `--color-card-deep` | #0D0C2C | 11 | 6 | fill 11 | PUBLISHED AGAINST OBSERVED, DROP CARD, OUTCOME CARD, RECENT DROP CARD |
| `--color-ring-deep` | #12001C | 3 | 0 | other 3 | THE STAGE'S OWN CARD, CASE STAGE, HOW THIS CASE WORKS |
| `--color-track` | rgba(255, 255, 255, .08) | 4 | 6 | fill 2, shadow or effect 2 | RAIL, DROP CARD, OUTCOME CARD |
| `--color-foil` | rgba(255, 255, 255, .45) | 2 | 0 | fill 2 | OUTCOME CARD, THE STAGE FORM, D-242 |
| `--color-tab` | #1A1940 | 1 | 0 | fill 1 | OUTCOME CARD |
| `--color-up-tab` | #0F2E33 | 1 | 0 | fill 1 | OUTCOME CARD |
| `--color-wash` | rgba(255, 255, 255, .07) | 3 | 0 | fill 3 | POPOVER MENU, STATUS NOTICE, SIGN-IN BLOCK |
| `--color-done` | #7BE8A0 | 0 | 1 |  |  |
| `--color-done-wash` | rgba(51, 204, 102, .18) | 0 | 1 |  |  |
| `--color-fail` | #FF8FA3 | 1 | 1 | ink 1 | STATUS NOTICE |
| `--color-fail-wash` | rgba(209, 39, 62, .2) | 1 | 1 | fill 1 | STATUS NOTICE |
| `--color-error-wash` | rgba(255, 77, 106, .08) | 2 | 4 | fill 2 | POPOVER MENU |
| `--color-scrim-sheet` | rgba(3, 5, 16, .6) | 0 | 2 |  |  |
| `--color-handle` | rgba(255, 255, 255, .25) | 2 | 0 | fill 2 | POPOVER MENU |
| `--shadow-card` | 0 10px 22px rgba(3, 3, 16, .45) | 7 | 3 | shadow or effect 7 | AFTER MY ITEMS' SECOND GATE, D-241, DROP CARD, EMPTY STATE, RECENT DROP CARD |
| `--shadow-card-hover` | 0 14px 28px rgba(3, 3, 16, .55) | 2 | 0 | shadow or effect 2 | DROP CARD, RECENT DROP CARD |
| `--shadow-outcome` | 0 24px 40px rgba(3, 3, 16, .55) | 1 | 0 | shadow or effect 1 | OUTCOME CARD |
| `--shadow-skin-card` | drop-shadow(0 8px 6px rgba(0, 0, 0, .7)) | 3 | 0 | shadow or effect 3 | DROP CARD, CASE STAGE, HOW THIS CASE WORKS |
| `--shadow-skin-prize` | drop-shadow(0 14px 12px rgba(0, 0, 0, .7)) | 2 | 0 | shadow or effect 2 | OUTCOME CARD, THE STAGE FORM, D-242 |
| `--shadow-up-tab` | inset 0 0 0 1px rgba(53, 224, 138, .35), 0 0 ... | 1 | 0 | shadow or effect 1 | OUTCOME CARD |
| `--shadow-menu` | 0 24px 48px rgba(0, 0, 0, .5) | 2 | 0 | shadow or effect 2 | POPOVER MENU |
| `--shadow-avatar-l` | 0 0 0 2px rgba(255, 255, 255, .85), 0 6px 14p... | 2 | 0 | shadow or effect 2 | AVATAR, POPOVER MENU |
| `--shadow-tile-lit-soft` | inset 0 1px 0 rgba(255, 255, 255, .2) | 5 | 0 | shadow or effect 5 | POPOVER MENU, WHAT OPENING A CASE HERE INVOLVES, THE PAGE'S HEAD |
| `--gradient-menu` | linear-gradient(180deg, #16133C, #0D0C28) | 7 | 0 | fill 7 | POPOVER MENU, HEADER, VERIFY FORM, DIALOG |
| `--gradient-stripes-m` | repeating-linear-gradient(135deg, rgba(255, 2... | 5 | 0 | fill 5 | POPOVER MENU, FOOTER, THE PAGE'S HEAD |
| `--art-flag-gb` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-de` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-cn` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-fr` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-pl` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-tr` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-pt` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-es` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--art-flag-ua` | url(data: svg) | 1 | 0 | variable 1 | POPOVER MENU |
| `--blur-ring-glow-near` | 2px | 1 | 0 | shadow or effect 1 | THE STAGE'S OWN CARD |
| `--blur-ring-glow-far` | 10px | 1 | 0 | shadow or effect 1 | THE STAGE'S OWN CARD |
| `--blur-card-hover` | 22px | 2 | 0 | shadow or effect 2 | DROP CARD, RECENT DROP CARD |
| `--blur-winner-ring` | 16px | 1 | 0 | shadow or effect 1 | RECENT DROP CARD |
| `--blur-outcome` | 40px | 1 | 0 | shadow or effect 1 | OUTCOME CARD |
| `--font-mono` | ui-monospace, SFMono-Regular, Menlo, monospace | 4 | 2 | type 4 | COPYABLE VALUE, VERIFY FORM, BEFORE YOU SPEND, THE ALGORITHM, PUBLISHED IN FULL |
| `--gradient-plate` | linear-gradient(180deg, #100F33, #0B0A26) | 6 | 0 | fill 6 | CATEGORY BAR, DEPOSIT DOCK, AFTER ITS THIRD LOOK, D-242, COMMIT BLOCK |
| `--shadow-plate-edge` | inset 0 0 0 1px rgba(139, 124, 255, .16) | 4 | 0 | shadow or effect 4 | CATEGORY BAR, DEPOSIT DOCK, COMMIT BLOCK, THIS DEPOSIT |
| `--color-pink-edge` | rgba(251, 63, 138, .45) | 1 | 0 | shadow or effect 1 | FIELD |
| `--color-pink-on-dark` | color-mix(in srgb, var(--color-pink) 40%, var... | 1 | 0 | ink 1 | AFTER MY ITEMS' SECOND GATE, D-241 |
| `--color-refuse` | #FF8297 | 1 | 0 | ink 1 | NOTE LINE |
| `--size-refuse-mark` | 18px | 4 | 0 | size 2, space 1, type 1 | NOTE LINE |
| `--shadow-lift` | 0 10px 26px rgba(0, 0, 0, .35) | 1 | 1 | variable 1 | 1. VALUES |
| `--shadow-shell` | var(--shadow-tile-edge), var(--shadow-lift) | 4 | 0 | shadow or effect 4 | AFTER ITS THIRD LOOK, D-242, HEADER, RAIL, THE SELECTION BAR |
| `--color-burger` | #1A1945 | 2 | 0 | fill 2 | HEADER, RAIL |
| `--color-burger-hover` | #241F58 | 2 | 1 | fill 2 | HEADER, RAIL |
| `--size-burger-w` | 20px | 2 | 0 | size 2 | HEADER, RAIL |
| `--size-burger-h` | 14px | 3 | 0 | size 2, variable 1 | 1. VALUES, HEADER, RAIL |
| `--gradient-burger` | linear-gradient(var(--color-text-hi) 0 var(--... | 2 | 0 | fill 2 | HEADER, RAIL |
| `--size-nav-mark` | 24px | 7 | 0 | size 5, type 2 | RAIL, BOTTOM BAR |
| `--tracking-wide` | .1em | 2 | 0 | type 2 | FIGURE, FOOTER |
| `--shadow-fig-stat` | 0 0 22px rgba(251, 63, 138, .45) | 1 | 0 | ink 1 | FIGURE |
| `--color-stage` | #100F33 | 1 | 0 | fill 1 | CASE HEAD |
| `--shadow-stage` | 0 24px 60px rgba(2, 4, 16, .5) | 1 | 0 | shadow or effect 1 | CASE HEAD |
| `--shadow-case-name` | 0 2px 0 rgba(0, 0, 0, .35) | 1 | 0 | ink 1 | CASE HEAD |
| `--gradient-stage-band` | linear-gradient(180deg, rgba(8, 7, 30, .35), ... | 1 | 0 | fill 1 | CASE STAGE |
| `--gradient-stage-edge` | linear-gradient(90deg, transparent, rgba(139,... | 1 | 0 | fill 1 | CASE STAGE |
| `--gradient-stage-cell` | linear-gradient(180deg, transparent, rgba(139... | 1 | 0 | fill 1 | CASE STAGE |
| `--color-pointer-deep` | #2A0018 | 1 | 0 | other 1 | CASE STAGE |
| `--shadow-case-stage` | drop-shadow(0 24px 22px rgba(0, 0, 0, .75)) d... | 1 | 0 | shadow or effect 1 | CASE STAGE |
| `--color-price-chip` | rgba(46, 4, 26, .45) | 1 | 0 | fill 1 | BUTTON |
| `--color-skull-off-plate` | #1D1B4A | 1 | 0 | ink 1 | COMMIT BLOCK |
| `--motion-ease-unfold` | cubic-bezier(.2, 1, .3, 1) | 1 | 0 | motion 1 | CASE STAGE |
| `--motion-ease-fold` | cubic-bezier(.5, 0, .75, 0) | 2 | 0 | motion 2 | CASE STAGE |
| `--motion-ease-open` | cubic-bezier(.2, 1.1, .3, 1) | 1 | 0 | motion 1 | CASE STAGE |
| `--gradient-fair` | linear-gradient(160deg, var(--color-fair), #1... | 3 | 1 | fill 3 | BEFORE YOU SPEND, THE PAGE'S HEAD, CHECK A ROUND |
| `--shadow-fair` | 0 14px 34px rgba(6, 10, 30, .5) | 3 | 1 | shadow or effect 3 | BEFORE YOU SPEND, THE PAGE'S HEAD, CHECK A ROUND |
| `--color-hash-well` | rgba(6, 10, 30, .6) | 5 | 1 | fill 5 | VERIFY FORM, BEFORE YOU SPEND, THE PAGE'S HEAD, CHECK A ROUND |
| `--shadow-dialog` | 0 30px 60px rgba(0, 0, 0, .45) | 1 | 0 | shadow or effect 1 | DIALOG |
| `--color-note-plate` | rgba(6, 8, 24, .7) | 3 | 0 | fill 3 | FOOTER, STATUS NOTICE, SIGN-IN BLOCK |
| `--gradient-stripes-s` | repeating-linear-gradient(135deg, rgba(255, 2... | 2 | 0 | fill 2 | STATUS NOTICE, SIGN-IN BLOCK |
| `--gradient-steam` | linear-gradient(140deg, #2A475E, #171D25) | 2 | 0 | fill 2 | SIGN-IN BLOCK, D-243 |
| `--gradient-rail-giveaways` | linear-gradient(120deg, #2C7FD6, var(--color-... | 1 | 0 | variable 1 | RAIL |
| `--shadow-rail-peek` | drop-shadow(0 4px 5px rgba(6, 10, 30, .5)) | 2 | 0 | shadow or effect 2 | RAIL |
| `--shadow-rail-chip` | 0 10px 24px rgba(4, 6, 20, .45) | 2 | 0 | shadow or effect 2 | RAIL |
| `--color-rail-chip-sub` | rgba(255, 255, 255, .78) | 1 | 0 | ink 1 | RAIL |
| `--color-rail-tile-chip` | #08091B | 1 | 0 | fill 1 | RAIL |
| `--shadow-rail-drawer` | inset calc(-1 * var(--size-hairline)) 0 0 rgb... | 1 | 1 | shadow or effect 1 | RAIL |
| `--gradient-header-light` | radial-gradient(34% 130% at 50% 0%, rgba(251,... | 1 | 0 | fill 1 | HEADER |
| `--gradient-header-edge` | linear-gradient(90deg, transparent, #FF6FA8 5... | 1 | 0 | fill 1 | HEADER |
| `--shadow-header-edge` | 0 0 10px rgba(251, 63, 138, .6) | 1 | 0 | shadow or effect 1 | HEADER |
| `--shadow-header-fall` | drop-shadow(0 0 4px rgba(251, 63, 138, .6)) | 1 | 0 | shadow or effect 1 | HEADER |
| `--gradient-footer-light` | radial-gradient(50% 100% at 50% 100%, rgba(74... | 1 | 0 | fill 1 | FOOTER |
| `--shadow-footer-lift` | 0 20px 40px rgba(4, 6, 20, .5) | 1 | 0 | shadow or effect 1 | FOOTER |
| `--gradient-footer-band` | radial-gradient(50% 120% at 50% 0%, rgba(74, ... | 1 | 0 | fill 1 | FOOTER |
| `--gradient-footer-fade` | linear-gradient(90deg, transparent, rgba(5, 6... | 1 | 0 | fill 1 | FOOTER |
| `--gradient-edge-blue` | linear-gradient(90deg, transparent, var(--col... | 1 | 0 | fill 1 | FOOTER |
| `--shadow-footer-plate` | var(--shadow-tile-lit), 0 10px 24px rgba(6, 1... | 1 | 0 | shadow or effect 1 | FOOTER |
| `--gradient-footer-fair` | linear-gradient(140deg, var(--color-fair), #1... | 1 | 0 | fill 1 | FOOTER |
| `--color-footer-pt` | rgba(6, 10, 30, .35) | 1 | 0 | fill 1 | FOOTER |
| `--color-footer-age` | #B4142E | 1 | 0 | ink 1 | FOOTER |
| `--shadow-footer-age` | 0 4px 10px rgba(60, 0, 10, .35) | 1 | 0 | shadow or effect 1 | FOOTER |
| `--tracking-footer-age` | -.02em | 1 | 0 | type 1 | FOOTER |
| `--color-footer-pay` | rgba(215, 215, 240, .8) | 1 | 0 | ink 1 | FOOTER |
| `--color-footer-pay-hover` | rgba(255, 255, 255, .08) | 1 | 0 | fill 1 | FOOTER |
| `--shadow-footer-pay` | 0 8px 16px rgba(4, 6, 20, .45) | 1 | 0 | shadow or effect 1 | FOOTER |
| `--color-ticker-chip` | rgba(6, 10, 30, .82) | 1 | 0 | fill 1 | TICKER |
| `--shadow-ticker-chip` | 0 4px 14px rgba(0, 0, 0, .4) | 1 | 0 | shadow or effect 1 | TICKER |
| `--color-ticker-halo` | color-mix(in srgb, var(--color-pink) 70%, tra... | 1 | 0 | fill 1 | TICKER |
| `--icon-percent` | url(data: svg) | 1 | 0 | variable 1 | ICON |
| `--gradient-spend-strip` | linear-gradient(100deg, #2B3FD6 0%, #4A2BC0 3... | 2 | 0 | fill 2 | PAYMENT PANEL, BEFORE YOU SPEND |
| `--gradient-spend-stub` | linear-gradient(160deg, var(--color-pink), va... | 1 | 0 | fill 1 | BEFORE YOU SPEND |
| `--shadow-plate-deep` | 0 14px 34px rgba(6, 10, 30, .55) | 3 | 0 | shadow or effect 3 | PAYMENT PANEL, BEFORE YOU SPEND |
| `--shadow-card-drop` | 0 10px 30px rgba(6, 10, 30, .45) | 1 | 0 | shadow or effect 1 | BEFORE YOU SPEND |
| `--shadow-stub-text` | 0 2px 8px rgba(120, 10, 60, .35) | 2 | 0 | ink 2 | PAYMENT PANEL, BEFORE YOU SPEND |
| `--shadow-figure-text` | 0 2px 10px rgba(6, 10, 30, .3) | 5 | 0 | ink 5 | AFTER ITS THIRD LOOK, D-242, PAYMENT PANEL, BEFORE YOU SPEND, THE SELECTION BAR |
| `--shadow-word-text` | 0 2px 8px rgba(6, 10, 30, .35) | 1 | 0 | ink 1 | BEFORE YOU SPEND |
| `--color-plate-rule` | rgba(255, 255, 255, .18) | 4 | 0 | fill 2, line 2 | BEFORE YOU SPEND, WHAT THIS CASE PAYS |
| `--color-plate-say` | rgba(255, 255, 255, .86) | 2 | 0 | ink 2 | PAYMENT PANEL, BEFORE YOU SPEND |
| `--color-plate-ticket` | rgba(255, 255, 255, .88) | 1 | 0 | ink 1 | BEFORE YOU SPEND |
| `--color-ruler` | rgba(6, 10, 30, .38) | 1 | 0 | fill 1 | BEFORE YOU SPEND |
| `--color-ruler-range` | rgba(255, 255, 255, .62) | 1 | 0 | fill 1 | BEFORE YOU SPEND |
| `--shadow-ruler-mark` | 0 0 0 2px rgba(6, 10, 30, .3) | 1 | 0 | shadow or effect 1 | BEFORE YOU SPEND |
| `--color-plate-hover` | rgba(255, 255, 255, .06) | 1 | 0 | fill 1 | BEFORE YOU SPEND |
| `--filter-case-lift` | drop-shadow(0 10px 14px rgba(6, 10, 30, .55)) | 2 | 0 | shadow or effect 2 | BEFORE YOU SPEND, WHAT OPENING A CASE HERE INVOLVES |
| `--filter-skin-lift` | drop-shadow(0 10px 10px rgba(0, 0, 0, .6)) | 2 | 0 | shadow or effect 2 | BEFORE YOU SPEND, WHAT OPENING A CASE HERE INVOLVES |
| `--filter-card-skin` | drop-shadow(0 10px 10px rgba(6, 10, 30, .55)) | 1 | 0 | shadow or effect 1 | BEFORE YOU SPEND |
| `--filter-card-hover` | brightness(1.08) | 1 | 0 | shadow or effect 1 | BEFORE YOU SPEND |
| `--gradient-involves-stage` | linear-gradient(150deg, #8E2BC9, #3B1A8F) | 1 | 0 | fill 1 | WHAT OPENING A CASE HERE INVOLVES |
| `--shadow-edge-bright` | inset 0 0 0 1px rgba(255, 255, 255, .12) | 1 | 0 | shadow or effect 1 | WHAT OPENING A CASE HERE INVOLVES |
| `--color-rule-faint` | rgba(255, 255, 255, .08) | 1 | 0 | line 1 | ABOUT CLUTCH |
| `--color-rare-volt-light` | #F2FBFF | 0 | 1 |  |  |
| `--color-rare-orbit-light` | #FFF6CF | 0 | 1 |  |  |
| `--color-rare-orbit-deep` | #FF9A1F | 0 | 1 |  |  |
| `--color-rare-plasma-light` | #FFE0F4 | 0 | 1 |  |  |
| `--color-rare-chance` | #FFF8D6 | 0 | 1 |  |  |
| `--color-crown-light` | #FFE27A | 0 | 1 |  |  |
| `--color-crown-deep` | #B87800 | 0 | 1 |  |  |
| `--shadow-rare-volt` | inset 0 0 0 1px rgba(143, 211, 255, .55), 0 0... | 0 | 1 |  |  |
| `--shadow-rare-orbit` | inset 0 0 0 1px rgba(246, 201, 21, .4), 0 0 1... | 0 | 1 |  |  |
| `--shadow-rare-plasma-glow` | 0 0 12px rgba(210, 43, 206, .45) | 0 | 1 |  |  |
| `--filter-rare-skin` | drop-shadow(0 6px 5px rgba(0, 0, 0, .75)) | 0 | 1 |  |  |
| `--motion-disclosure` | .4s | 1 | 0 | script 1 |  |
| `--motion-ease-disclosure` | cubic-bezier(.2, .7, .2, 1) | 3 | 0 | motion 2, script 1 | DISCLOSURE |
| `--gradient-before-plate` | linear-gradient(180deg, #14123A, #0E0C2A) | 1 | 0 | fill 1 | BEFORE YOU OPEN |
| `--shadow-before-plate` | inset 0 0 0 1px rgba(255, 255, 255, .06), 0 1... | 1 | 0 | shadow or effect 1 | BEFORE YOU OPEN |
| `--color-head-steam` | #6F8BFF | 1 | 0 | variable 1 | BEFORE YOU OPEN |
| `--shadow-observed-row` | inset 0 0 0 1px rgba(255, 255, 255, .05), 0 1... | 1 | 0 | shadow or effect 1 | PUBLISHED AGAINST OBSERVED |
| `--color-bar-track` | rgba(255, 255, 255, .06) | 1 | 0 | fill 1 | PUBLISHED AGAINST OBSERVED |
| `--shadow-bar-inset` | inset 0 1px 2px rgba(0, 0, 0, .4) | 1 | 0 | shadow or effect 1 | PUBLISHED AGAINST OBSERVED |
| `--shadow-tick` | 0 0 8px rgba(255, 255, 255, .8) | 1 | 0 | shadow or effect 1 | PUBLISHED AGAINST OBSERVED |
| `--color-ruler-ground` | rgba(6, 5, 24, .6) | 1 | 0 | fill 1 | HOW THIS CASE WORKS |
| `--shadow-ruler-plate` | inset 0 0 0 1px rgba(255, 255, 255, .07), 0 1... | 1 | 0 | shadow or effect 1 | HOW THIS CASE WORKS |
| `--color-ruler-track` | rgba(255, 255, 255, .05) | 1 | 0 | fill 1 | HOW THIS CASE WORKS |
| `--color-ruler-gap` | #0B0A26 | 2 | 0 | line 1, ink 1 | HOW THIS CASE WORKS |
| `--color-ruler-notch` | #120F33 | 1 | 0 | fill 1 | HOW THIS CASE WORKS |
| `--color-ruler-tear` | rgba(255, 255, 255, .14) | 1 | 0 | line 1 | HOW THIS CASE WORKS |
| `--color-ruler-step` | rgba(255, 255, 255, .22) | 1 | 0 | fill 1 | HOW THIS CASE WORKS |
| `--color-ruler-quarter` | rgba(255, 255, 255, .5) | 1 | 0 | fill 1 | HOW THIS CASE WORKS |
| `--shadow-ruler-pin` | 0 0 12px rgba(255, 255, 255, .9) | 1 | 0 | shadow or effect 1 | HOW THIS CASE WORKS |
| `--gradient-stage-bam` | radial-gradient(closest-side, var(--color-tex... | 0 | 1 |  |  |
| `--shadow-stage-wave` | 0 0 0 3px var(--color-pink), 0 0 26px var(--c... | 0 | 1 |  |  |
| `--gradient-button-sweep` | linear-gradient(105deg, transparent 30%, rgba... | 0 | 1 |  |  |

## Appendix B: custom properties declared inside components

| Prefix | Names | Declarations | Literal pixel values | Names (first twelve) |
|---|---|---|---|---|
| `--feed-*` | 29 | 63 | 49 | `--feed-back-gap`, `--feed-back-pad-foot`, `--feed-back-pad-side`, `--feed-back-pad-top`, `--feed-back-shift`, `--feed-bar`, `--feed-bar-back`, `--feed-bar-h`, `--feed-case-h`, `--feed-case-w`, `--feed-eq-l`, `--feed-eq-r` |
| `--footer-*` | 37 | 49 | 39 | `--footer-agents-phone-drop`, `--footer-agents-phone-h`, `--footer-agents-phone-w`, `--footer-agents-right`, `--footer-agents-rise`, `--footer-agents-w`, `--footer-arrow`, `--footer-arrow-line`, `--footer-arrow-right`, `--footer-band-pad`, `--footer-brand-min`, `--footer-col-gap` |
| `--stage-*` | 32 | 48 | 39 | `--stage-band-fade`, `--stage-band-fade-run`, `--stage-band-h`, `--stage-card-bar`, `--stage-card-h`, `--stage-card-price`, `--stage-card-w`, `--stage-case`, `--stage-case-2`, `--stage-case-3`, `--stage-case-4`, `--stage-case-5` |
| `--i-*` | 1 | 44 | 0 | `--i` |
| `--rail-*` | 32 | 42 | 22 | `--rail-chip-hide`, `--rail-chip-peek`, `--rail-chip-peek-cases`, `--rail-chip-room`, `--rail-chip-show`, `--rail-chip-sub`, `--rail-chip-w`, `--rail-drawer-max`, `--rail-drawer-rest`, `--rail-drawer-w`, `--rail-edge`, `--rail-fill` |
| `--tier-*` | 3 | 37 | 0 | `--tier`, `--tier-g`, `--tier-hue` |
| `--dialog-*` | 25 | 33 | 18 | `--dialog-agents-out`, `--dialog-agents-wide`, `--dialog-art-h`, `--dialog-art-pad-side`, `--dialog-art-pad-top`, `--dialog-art-pad-top-wide`, `--dialog-art-side-wide`, `--dialog-art-title`, `--dialog-art-title-wide`, `--dialog-art-w`, `--dialog-close-side`, `--dialog-close-side-wide` |
| `--ic-*` | 1 | 30 | 0 | `--ic` |
| `--banner-*` | 28 | 28 | 26 | `--banner-act`, `--banner-block`, `--banner-cell`, `--banner-cell-foot`, `--banner-cell-narrow`, `--banner-cell-top`, `--banner-content-v4`, `--banner-end-phone`, `--banner-gutter`, `--banner-lean`, `--banner-phone-max`, `--banner-plate` |
| `--case-*` | 9 | 21 | 6 | `--case-art`, `--case-glow`, `--case-grid-all-w`, `--case-head-inset-l`, `--case-head-name`, `--case-head-page`, `--case-plate`, `--case-tile-fav-strip`, `--case-tile-risk` |
| `--account-*` | 11 | 21 | 14 | `--account-head-art`, `--account-head-avatar`, `--account-head-hero`, `--account-head-lift`, `--account-head-pad`, `--account-head-rise`, `--account-head-short`, `--account-head-skin`, `--account-head-tilt`, `--account-head-title`, `--account-head-word` |
| `--art-*` | 1 | 20 | 0 | `--art` |
| `--mode-*` | 8 | 20 | 4 | `--mode-art`, `--mode-burst`, `--mode-fill`, `--mode-line-foot`, `--mode-obj`, `--mode-pad-foot`, `--mode-rise`, `--mode-row-gap` |
| `--flag-*` | 1 | 18 | 0 | `--flag` |
| `--daily-*` | 18 | 18 | 18 | `--daily-art-foot`, `--daily-art-foot-live`, `--daily-art-s`, `--daily-art-s-pad`, `--daily-card`, `--daily-glow`, `--daily-glow-live`, `--daily-ground-s`, `--daily-heading`, `--daily-heading-s`, `--daily-mark`, `--daily-mark-s` |
| `--rc-*` | 1 | 17 | 0 | `--rc` |
| `--rare-*` | 11 | 17 | 8 | `--rare-chance`, `--rare-chance-x`, `--rare-chance-y`, `--rare-crown-h`, `--rare-crown-w`, `--rare-crown-x`, `--rare-crown-y`, `--rare-deep`, `--rare-light`, `--rare-mid`, `--rare-wave` |
| `--popover-*` | 17 | 17 | 17 | `--popover-avatar`, `--popover-caret`, `--popover-case-h`, `--popover-case-w`, `--popover-copy`, `--popover-copy-icon`, `--popover-copy-line`, `--popover-copy-square`, `--popover-handle`, `--popover-id-plate`, `--popover-lang-menu`, `--popover-menu` |
| `--ticker-*` | 14 | 16 | 12 | `--ticker-arrive`, `--ticker-chip`, `--ticker-chip-inset`, `--ticker-dot`, `--ticker-gap`, `--ticker-pause`, `--ticker-pause-bar`, `--ticker-pause-h`, `--ticker-pause-hit`, `--ticker-pause-w`, `--ticker-play`, `--ticker-play-w` |
| `--spend-*` | 8 | 16 | 10 | `--spend-card-min`, `--spend-case-h`, `--spend-fig`, `--spend-min`, `--spend-pad`, `--spend-row-gap`, `--spend-rtp`, `--spend-stub` |
| `--mark-*` | 7 | 12 | 9 | `--mark-bolt-out`, `--mark-fire-rise`, `--mark-fire-side`, `--mark-loop`, `--mark-ring-h`, `--mark-ring-top`, `--mark-ring-w` |
| `--outcome-*` | 12 | 12 | 11 | `--outcome-art-s`, `--outcome-batch-art-s`, `--outcome-batch-h`, `--outcome-batch-h-s`, `--outcome-batch-w`, `--outcome-dot`, `--outcome-foot`, `--outcome-h`, `--outcome-name`, `--outcome-w`, `--outcome-x-tab`, `--outcome-x-tab-s` |
| `--sec-*` | 6 | 12 | 4 | `--sec-c`, `--sec-g`, `--sec-head-icon-s`, `--sec-head-l-s`, `--sec-head-line`, `--sec-head-tile-s` |
| `--header-*` | 12 | 12 | 8 | `--header-edge-inset`, `--header-fall-far`, `--header-fall-far-w`, `--header-fall-far-x`, `--header-fall-far-y`, `--header-fall-loop`, `--header-fall-mask`, `--header-fall-near`, `--header-fall-near-w`, `--header-fig-hit`, `--header-plate`, `--header-room` |
| `--k-*` | 1 | 11 | 0 | `--k` |
| `--signin-*` | 7 | 10 | 2 | `--signin-go-above`, `--signin-go-above-wide`, `--signin-note-above`, `--signin-or-above`, `--signin-or-above-wide`, `--signin-or-below`, `--signin-tile` |
| `--involves-*` | 3 | 9 | 7 | `--involves-art`, `--involves-pad`, `--involves-stage-h` |
| `--rarity-*` | 1 | 8 | 0 | `--rarity` |
| `--commit-*` | 8 | 8 | 8 | `--commit-act-pad-s`, `--commit-act-w`, `--commit-bolt`, `--commit-bolts-h`, `--commit-bolts-w`, `--commit-col-gap`, `--commit-rounds-indent`, `--commit-rounds-w` |
| `--pay-*` | 8 | 8 | 8 | `--pay-dock`, `--pay-head`, `--pay-offer`, `--pay-offer-art`, `--pay-offer-art-phone`, `--pay-prov`, `--pay-prov-h`, `--pay-prov-wide` |
| `--r-*` | 1 | 7 | 0 | `--r` |
| `--story-*` | 1 | 6 | 0 | `--story-c` |
| `--cover-*` | 1 | 5 | 0 | `--cover` |
| `--skin-*` | 1 | 5 | 0 | `--skin` |
| `--n-*` | 1 | 5 | 0 | `--n` |
| `--da-*` | 1 | 5 | 0 | `--da` |
| `--item-*` | 3 | 5 | 0 | `--item-card-skin`, `--item-card-tilt`, `--item-tier` |
| `--count-*` | 1 | 5 | 0 | `--count` |
| `--mi-*` | 1 | 4 | 0 | `--mi` |
| `--tint-*` | 1 | 4 | 0 | `--tint` |
| `--fi-*` | 1 | 4 | 0 | `--fi` |
| `--cx-*` | 1 | 4 | 4 | `--cx` |
| `--cy-*` | 1 | 4 | 4 | `--cy` |
| `--cr-*` | 1 | 4 | 0 | `--cr` |
| `--fig-*` | 4 | 4 | 1 | `--fig-l`, `--fig-stat-c`, `--fig-stat-gap`, `--fig-stat-v` |
| `--methods-*` | 2 | 4 | 3 | `--methods-mark`, `--methods-tile` |
| `--scene-*` | 2 | 4 | 0 | `--scene-pos`, `--scene-size` |
| `--ol-*` | 1 | 4 | 0 | `--ol` |
| `--ot-*` | 1 | 4 | 0 | `--ot` |
| `--ow-*` | 1 | 4 | 0 | `--ow` |
| `--bz-*` | 1 | 4 | 0 | `--bz` |
| `--mx-*` | 1 | 4 | 0 | `--mx` |
| `--my-*` | 1 | 4 | 0 | `--my` |
| `--recent-*` | 4 | 4 | 4 | `--recent-drop-avatar`, `--recent-drop-who-top`, `--recent-drops-col`, `--recent-drops-col-s` |
| `--limits-*` | 4 | 4 | 4 | `--limits-act`, `--limits-amount`, `--limits-measure`, `--limits-period` |
| `--before-*` | 2 | 4 | 0 | `--before-c`, `--before-g` |
| `--seg-*` | 1 | 4 | 0 | `--seg` |
| `--button-*` | 3 | 3 | 3 | `--button-dot`, `--button-price-coin`, `--button-price-h` |
| `--plate-*` | 3 | 3 | 0 | `--plate`, `--plate-pos`, `--plate-size` |
| `--dy-*` | 1 | 3 | 0 | `--dy` |
| `--proof-*` | 2 | 3 | 2 | `--proof-pad`, `--proof-well-y` |
| `--shell-*` | 2 | 3 | 1 | `--shell-column`, `--shell-gutter` |
| `--sx-*` | 1 | 2 | 2 | `--sx` |
| `--logo-*` | 2 | 2 | 2 | `--logo-l`, `--logo-s` |
| `--fill-*` | 1 | 2 | 0 | `--fill` |
| `--drop-*` | 2 | 2 | 2 | `--drop-card-row-art`, `--drop-card-row-art-h` |
| `--hero-*` | 2 | 2 | 2 | `--hero-title`, `--hero-trust-tile` |
| `--pw-*` | 1 | 2 | 0 | `--pw` |
| `--rx-*` | 1 | 2 | 0 | `--rx` |
| `--ry-*` | 1 | 2 | 0 | `--ry` |
| `--shelf-*` | 2 | 2 | 2 | `--shelf-head-art`, `--shelf-head-art-s` |
| `--avatar-*` | 1 | 1 | 1 | `--avatar-l` |
| `--bar-*` | 1 | 1 | 0 | `--bar` |
| `--len-*` | 1 | 1 | 0 | `--len` |
| `--ph-*` | 1 | 1 | 0 | `--ph-h` |
| `--dx-*` | 1 | 1 | 0 | `--dx` |
| `--pointer-*` | 1 | 1 | 0 | `--pointer` |
| `--hot-*` | 1 | 1 | 0 | `--hot` |
| `--data-*` | 1 | 1 | 1 | `--data-table-card` |
| `--igrid-*` | 1 | 1 | 1 | `--igrid-min` |
| `--notice-*` | 1 | 1 | 1 | `--notice-mark` |
| `--verify-*` | 1 | 1 | 1 | `--verify-ok` |
| `--record-*` | 1 | 1 | 1 | `--record-w` |
| `--selbar-*` | 1 | 1 | 0 | `--selbar-gap` |
| `--steam-*` | 1 | 1 | 0 | `--steam-state-pulse` |
| `--filter-*` | 1 | 1 | 1 | `--filter-drawer-w` |

## Appendix C: near-identical colours

| A | B | Channel gap | Alpha gap | Where A (first five) | Where B (first five) |
|---|---|---|---|---|---|
| #FFFFFF at 0.08 | #FFFFFF at 0.07 | 0 | 0.01 | var --color-track; var --color-footer-pay-hover; var --color-rule-faint | var --color-wash; kit.css:252 :root { --shadow-edge }; kit.css:660 :root { --shadow-ruler-plate } |
| #FFFFFF at 0.08 | #FFFFFF at 0.09 | 0 | 0.01 | var --color-track; var --color-footer-pay-hover; var --color-rule-faint | kit.css:226 :root { --gradient-stripes }; kit.css:522 :root { --gradient-stripes-m }; kit.css:579 :root { --gradient-stripes-s } |
| #FFFFFF at 0.07 | #FFFFFF at 0.06 | 0 | 0.01 | var --color-wash; kit.css:252 :root { --shadow-edge }; kit.css:660 :root { --shadow-ruler-plate } | var --color-plate-hover; var --color-bar-track; kit.css:653 :root { --shadow-before-plate } |
| #FFFFFF at 0.25 | #FFFFFF at 0.26 | 0 | 0.01 | var --color-handle; kit.css:259 :root { --shadow-avatar-s }; kit.css:402 :root { --shadow-tile-lit }; kit.css:474 :root { --shadow-mode-card } | kit.css:228 :root { --gradient-button-sheen } |
| #FFFFFF at 0.86 | #FFFFFF at 0.85 | 0 | 0.01 | var --color-plate-say | kit.css:454 :root { --gradient-banner-snow-near }; kit.css:519 :root { --shadow-avatar-l } |
| #FFFFFF at 0.06 | #FFFFFF at 0.05 | 0 | 0.01 | var --color-plate-hover; var --color-bar-track; kit.css:653 :root { --shadow-before-plate } | var --color-ruler-track; kit.css:214 :root { --shadow-tile-edge }; kit.css:588 :root { --shadow-rail-drawer }; kit.css:655 :root { --shadow-observed-row } |
| #FFFFFF at 0.09 | #FFFFFF at 0.10 | 0 | 0.01 | kit.css:226 :root { --gradient-stripes }; kit.css:522 :root { --gradient-stripes-m }; kit.css:579 :root { --gradient-stripes-s } | kit.css:227 :root { --gradient-button-stripes }; kit.css:403 :root { --shadow-edge-lit } |
| #FB3F8A at 0.36 | #FB3F8A at 0.35 | 0 | 0.01 | kit.css:589 :root { --gradient-header-light } | kit.css:668 :root { --gradient-stage-bam } |
| #FFFFFF at 0.90 | #FFFFFF at 0.88 | 0 | 0.02 | var --color-text-lead; kit.css:454 :root { --gradient-banner-snow-near }; kit.css:667 :root { --shadow-ruler-pin } | var --color-plate-ticket |
| #0B0A22 at 0.70 | #0B0A22 at 0.72 | 0 | 0.02 | var --color-tile-veil | var --color-plate-veil |
| #FFFFFF at 0.16 | #FFFFFF at 0.18 | 0 | 0.02 | var --color-trust-rule; kit.css:406 :root { --shadow-trust-hover }; kit.css:481 :root { --shadow-mode-later }; kit.css:670 :root { --gradient-button-sweep } | var --color-plate-rule; kit.css:471 :root { --shadow-avatar-bot } |
| #FFFFFF at 0.16 | #FFFFFF at 0.14 | 0 | 0.02 | var --color-trust-rule; kit.css:406 :root { --shadow-trust-hover }; kit.css:481 :root { --shadow-mode-later }; kit.css:670 :root { --gradient-button-sweep } | var --color-ruler-tear; kit.css:404 :root { --shadow-price-edge } |
| #060A1E at 0.62 | #060A1E at 0.60 | 0 | 0.02 | var --color-daily-chip | var --color-hash-well; kit.css:420 :root { --shadow-daily-lift-hover }; kit.css:421 :root { --shadow-daily-lift-live-hover }; kit.css:478 :root { --shadow-mode-name } |
| #FFFFFF at 0.08 | #FFFFFF at 0.06 | 0 | 0.02 | var --color-track; var --color-footer-pay-hover; var --color-rule-faint | var --color-plate-hover; var --color-bar-track; kit.css:653 :root { --shadow-before-plate } |
| #FFFFFF at 0.08 | #FFFFFF at 0.10 | 0 | 0.02 | var --color-track; var --color-footer-pay-hover; var --color-rule-faint | kit.css:227 :root { --gradient-button-stripes }; kit.css:403 :root { --shadow-edge-lit } |
| #FFFFFF at 0.07 | #FFFFFF at 0.05 | 0 | 0.02 | var --color-wash; kit.css:252 :root { --shadow-edge }; kit.css:660 :root { --shadow-ruler-plate } | var --color-ruler-track; kit.css:214 :root { --shadow-tile-edge }; kit.css:588 :root { --shadow-rail-drawer }; kit.css:655 :root { --shadow-observed-row } |
| #FFFFFF at 0.07 | #FFFFFF at 0.09 | 0 | 0.02 | var --color-wash; kit.css:252 :root { --shadow-edge }; kit.css:660 :root { --shadow-ruler-plate } | kit.css:226 :root { --gradient-stripes }; kit.css:522 :root { --gradient-stripes-m }; kit.css:579 :root { --gradient-stripes-s } |
| #FFFFFF at 0.78 | #FFFFFF at 0.80 | 0 | 0.02 | var --color-rail-chip-sub | kit.css:454 :root { --gradient-banner-snow-near }; kit.css:658 :root { --shadow-tick } |
| #FFFFFF at 0.18 | #FFFFFF at 0.20 | 0 | 0.02 | var --color-plate-rule; kit.css:471 :root { --shadow-avatar-bot } | kit.css:520 :root { --shadow-tile-lit-soft } |
| #FFFFFF at 0.86 | #FFFFFF at 0.88 | 0 | 0.02 | var --color-plate-say | var --color-plate-ticket |
| #060A1E at 0.38 | #060A1E at 0.40 | 0 | 0.02 | var --color-ruler | kit.css:422 :root { --shadow-daily-name }; kit.css:598 :root { --shadow-footer-plate } |
| #FFFFFF at 0.14 | #FFFFFF at 0.12 | 0 | 0.02 | var --color-ruler-tear; kit.css:404 :root { --shadow-price-edge } | kit.css:258 :root { --shadow-avatar }; kit.css:633 :root { --shadow-edge-bright } |
| #FFFFFF at 0.22 | #FFFFFF at 0.20 | 0 | 0.02 | var --color-ruler-step; kit.css:398 :root { --gradient-trust-sweep }; kit.css:632 :root { --shadow-tile-lit-soft } | kit.css:520 :root { --shadow-tile-lit-soft } |
| #DF055C at 0.32 | #DF055C at 0.30 | 0 | 0.02 | kit.css:213 :root { --shadow-button } | kit.css:250 :root { --shadow-button-press } |
| #FFFFFF at 0.10 | #FFFFFF at 0.12 | 0 | 0.02 | kit.css:227 :root { --gradient-button-stripes }; kit.css:403 :root { --shadow-edge-lit } | kit.css:258 :root { --shadow-avatar }; kit.css:633 :root { --shadow-edge-bright } |
| #FFFFFF at 0.08 | #FFFFFF at 0.05 | 0 | 0.03 | var --color-track; var --color-footer-pay-hover; var --color-rule-faint | var --color-ruler-track; kit.css:214 :root { --shadow-tile-edge }; kit.css:588 :root { --shadow-rail-drawer }; kit.css:655 :root { --shadow-observed-row } |
| #FFFFFF at 0.07 | #FFFFFF at 0.10 | 0 | 0.03 | var --color-wash; kit.css:252 :root { --shadow-edge }; kit.css:660 :root { --shadow-ruler-plate } | kit.css:227 :root { --gradient-button-stripes }; kit.css:403 :root { --shadow-edge-lit } |
| #FFFFFF at 0.25 | #FFFFFF at 0.22 | 0 | 0.03 | var --color-handle; kit.css:259 :root { --shadow-avatar-s }; kit.css:402 :root { --shadow-tile-lit }; kit.css:474 :root { --shadow-mode-card } | var --color-ruler-step; kit.css:398 :root { --gradient-trust-sweep }; kit.css:632 :root { --shadow-tile-lit-soft } |
| #FFFFFF at 0.06 | #FFFFFF at 0.09 | 0 | 0.03 | var --color-plate-hover; var --color-bar-track; kit.css:653 :root { --shadow-before-plate } | kit.css:226 :root { --gradient-stripes }; kit.css:522 :root { --gradient-stripes-m }; kit.css:579 :root { --gradient-stripes-s } |
| #FFFFFF at 0.09 | #FFFFFF at 0.12 | 0 | 0.03 | kit.css:226 :root { --gradient-stripes }; kit.css:522 :root { --gradient-stripes-m }; kit.css:579 :root { --gradient-stripes-s } | kit.css:258 :root { --shadow-avatar }; kit.css:633 :root { --shadow-edge-bright } |
| #0F0E2B | #100F2C | 1 | 0.00 | var --color-card | var --color-mode |
| #08061E at 0.60 | #08071E at 0.60 | 1 | 0.00 | kit.css:473 :root { --gradient-mode-foot } | kit.css:563 :root { --gradient-stage-band } |
| #0F0E2B | #0D0C2C | 2 | 0.00 | var --color-card | var --color-card-deep |
| #0F0E2B | #0E0C2A | 2 | 0.00 | var --color-card | kit.css:652 :root { --gradient-before-plate } |
| #090827 | #0B0A26 | 2 | 0.00 | var --color-card-2 | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #100F2C | #100E2E | 2 | 0.00 | var --color-mode | kit.css:257 :root { --gradient-row } |
| #0D0C2C | #0E0C2A | 2 | 0.00 | var --color-card-deep | kit.css:652 :root { --gradient-before-plate } |
| #1A1940 | #191842 | 2 | 0.00 | var --color-tab | kit.css:464 :root { --gradient-feed-plate } |
| #100F33 | #120F33 | 2 | 0.00 | var --color-stage; kit.css:539 :root { --gradient-plate } | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } |
| #100F33 | #110F31 | 2 | 0.00 | var --color-stage; kit.css:539 :root { --gradient-plate } | kit.css:465 :root { --gradient-feed-back } |
| #08091B | #08071C | 2 | 0.00 | var --color-rail-tile-chip | kit.css:225 :root { --gradient-panel } |
| #0B0A26 | #0D0C28 | 2 | 0.00 | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #120F33 | #110F31 | 2 | 0.00 | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } | kit.css:465 :root { --gradient-feed-back } |
| #16133C | #14123A | 2 | 0.00 | kit.css:257 :root { --gradient-row }; kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } | kit.css:652 :root { --gradient-before-plate } |
| #0D0C28 | #0E0C2A | 2 | 0.00 | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } | kit.css:652 :root { --gradient-before-plate } |
| #060A1E | #08091B | 3 | 0.00 | var --color-ground | var --color-rail-tile-chip |
| #060A1E | #08071C | 3 | 0.00 | var --color-ground | kit.css:225 :root { --gradient-panel } |
| #0F0E2B | #100E2E | 3 | 0.00 | var --color-card | kit.css:257 :root { --gradient-row } |
| #0F0E2B | #0D0C28 | 3 | 0.00 | var --color-card | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #100F2C | #0D0C2C | 3 | 0.00 | var --color-mode | var --color-card-deep |
| #100F2C | #0E0C2A | 3 | 0.00 | var --color-mode | kit.css:652 :root { --gradient-before-plate } |
| #060818 at 0.60 | #060518 at 0.60 | 3 | 0.00 | var --color-well | var --color-ruler-ground |
| #0B0F2A | #0D0C2C | 3 | 0.00 | var --color-banner | var --color-card-deep |
| #0B0F2A | #0D0C28 | 3 | 0.00 | var --color-banner | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #0B0F2A | #0E0C2A | 3 | 0.00 | var --color-banner | kit.css:652 :root { --gradient-before-plate } |
| #0D0C2C | #100E2E | 3 | 0.00 | var --color-card-deep | kit.css:257 :root { --gradient-row } |
| #1A1945 | #191842 | 3 | 0.00 | var --color-burger | kit.css:464 :root { --gradient-feed-plate } |
| #060A1E at 0.60 | #08071E at 0.60 | 3 | 0.00 | var --color-hash-well; kit.css:420 :root { --shadow-daily-lift-hover }; kit.css:421 :root { --shadow-daily-lift-live-hover }; kit.css:478 :root { --shadow-mode-name } | kit.css:563 :root { --gradient-stage-band } |
| #060A1E at 0.35 | #08071E at 0.35 | 3 | 0.00 | var --color-footer-pt; kit.css:619 :root { --shadow-word-text } | kit.css:563 :root { --gradient-stage-band } |
| #100E2E | #110F31 | 3 | 0.00 | kit.css:257 :root { --gradient-row } | kit.css:465 :root { --gradient-feed-back } |
| #0F0E2B | #0B0F2A | 4 | 0.00 | var --color-card | var --color-banner |
| #090827 | #0D0C28 | 4 | 0.00 | var --color-card-2 | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #100F2C | #0D0C28 | 4 | 0.00 | var --color-mode | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #020C17 at 0.70 | #060818 at 0.70 | 4 | 0.00 | var --color-timer | var --color-note-plate |
| #0B0A22 | #0B0A26 | 4 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #060818 at 0.45 | #040614 at 0.45 | 4 | 0.00 | var --color-veil-soft | kit.css:585 :root { --shadow-rail-chip }; kit.css:606 :root { --shadow-footer-pay } |
| #0B0A22 at 0.70 | #08061E at 0.70 | 4 | 0.00 | var --color-tile-veil | var --color-mode-scrim |
| #0D0C2C | #0D0C28 | 4 | 0.00 | var --color-card-deep | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #060A1E at 0.60 | #08061E at 0.60 | 4 | 0.00 | var --color-hash-well; kit.css:420 :root { --shadow-daily-lift-hover }; kit.css:421 :root { --shadow-daily-lift-live-hover }; kit.css:478 :root { --shadow-mode-name } | kit.css:473 :root { --gradient-mode-foot } |
| #0B0A26 | #0E0C2A | 4 | 0.00 | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } | kit.css:652 :root { --gradient-before-plate } |
| #100E2E | #0E0C2A | 4 | 0.00 | kit.css:257 :root { --gradient-row } | kit.css:652 :root { --gradient-before-plate } |
| #040614 at 0.50 | #020410 at 0.50 | 4 | 0.00 | kit.css:407 :root { --shadow-tip }; kit.css:594 :root { --shadow-footer-lift } | kit.css:561 :root { --shadow-stage } |
| #030310 at 0.45 | #040614 at 0.45 | 4 | 0.00 | kit.css:512 :root { --shadow-card } | kit.css:585 :root { --shadow-rail-chip }; kit.css:606 :root { --shadow-footer-pay } |
| #060A1E | #0B0A22 | 5 | 0.00 | var --color-ground | var --color-tile; kit.css:225 :root { --gradient-panel } |
| #0F0E2B | #0B0A26 | 5 | 0.00 | var --color-card | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #090827 | #0B0A22 | 5 | 0.00 | var --color-card-2 | var --color-tile; kit.css:225 :root { --gradient-panel } |
| #090827 | #0D0C2C | 5 | 0.00 | var --color-card-2 | var --color-card-deep |
| #090827 | #0E0C2A | 5 | 0.00 | var --color-card-2 | kit.css:652 :root { --gradient-before-plate } |
| #100F2C | #0B0F2A | 5 | 0.00 | var --color-mode | var --color-banner |
| #100F2C | #110F31 | 5 | 0.00 | var --color-mode | kit.css:465 :root { --gradient-feed-back } |
| #0B0A22 at 0.55 | #060A1E at 0.55 | 5 | 0.00 | var --color-button-ghost | kit.css:419 :root { --shadow-daily-lift }; kit.css:477 :root { --shadow-mode-knife }; kit.css:615 :root { --shadow-plate-deep }; kit.css:627 :root { --filter-case-lift }; kit.css:629 :root { --filter-card-skin } |
| #060A1E at 0.72 | #0B0A22 at 0.72 | 5 | 0.00 | var --color-scrim | var --color-plate-veil |
| #4A6BFF | #4F6BFF | 5 | 0.00 | var --color-head-battles | var --color-rarity-5-lit |
| #0B0A22 at 0.78 | #060A1E at 0.78 | 5 | 0.00 | var --color-fav-plate | var --color-banner-clock-phone |
| #0B0A22 at 0.82 | #060A1E at 0.82 | 5 | 0.00 | var --color-price-plate | var --color-ticker-chip |
| #0B0F2A | #0B0A26 | 5 | 0.00 | var --color-banner | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #0B0F2A | #100E2E | 5 | 0.00 | var --color-banner | kit.css:257 :root { --gradient-row } |
| #0D0C2C | #110F31 | 5 | 0.00 | var --color-card-deep | kit.css:465 :root { --gradient-feed-back } |
| #1A1940 | #1A1945 | 5 | 0.00 | var --color-tab | var --color-burger |
| #1A1945 | #1D1B4A | 5 | 0.00 | var --color-burger | var --color-skull-off-plate; kit.css:465 :root { --gradient-feed-back } |
| #100F33 | #100E2E | 5 | 0.00 | var --color-stage; kit.css:539 :root { --gradient-plate } | kit.css:257 :root { --gradient-row } |
| #120F33 | #100E2E | 5 | 0.00 | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } | kit.css:257 :root { --gradient-row } |
| #B57A06 | #B07806 | 5 | 0.00 | kit.css:399 :root { --gradient-case-gold } | kit.css:430 :root { --gradient-daily-elite } |
| #020C17 | #08091B | 6 | 0.00 | var --color-ticker | var --color-rail-tile-chip |
| #020C17 | #08071C | 6 | 0.00 | var --color-ticker | kit.css:225 :root { --gradient-panel } |
| #0F0E2B | #090827 | 6 | 0.00 | var --color-card | var --color-card-2 |
| #0F0E2B | #110F31 | 6 | 0.00 | var --color-card | kit.css:465 :root { --gradient-feed-back } |
| #100F2C | #0B0A26 | 6 | 0.00 | var --color-mode | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #17144B | #1A1945 | 6 | 0.00 | var --color-card-hover | var --color-burger |
| #0B0A22 | #08071C | 6 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | kit.css:225 :root { --gradient-panel } |
| #0B0A22 | #0D0C28 | 6 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #060818 at 0.78 | #060A1E at 0.78 | 6 | 0.00 | var --color-veil | var --color-banner-clock-phone |
| #060818 at 0.45 | #060A1E at 0.45 | 6 | 0.00 | var --color-veil-soft | kit.css:446 :root { --gradient-banner-shade-phone }; kit.css:474 :root { --shadow-mode-card }; kit.css:519 :root { --shadow-avatar-l }; kit.css:616 :root { --shadow-card-drop } |
| #060818 at 0.60 | #060A1E at 0.60 | 6 | 0.00 | var --color-well | var --color-hash-well; kit.css:420 :root { --shadow-daily-lift-hover }; kit.css:421 :root { --shadow-daily-lift-live-hover }; kit.css:478 :root { --shadow-mode-name } |
| #060818 at 0.60 | #08061E at 0.60 | 6 | 0.00 | var --color-well | kit.css:473 :root { --gradient-mode-foot } |
| #060818 at 0.60 | #08071E at 0.60 | 6 | 0.00 | var --color-well | kit.css:563 :root { --gradient-stage-band } |
| #08061E at 0.70 | #060818 at 0.70 | 6 | 0.00 | var --color-mode-scrim | var --color-note-plate |
| #0D0C2C | #0B0A26 | 6 | 0.00 | var --color-card-deep | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #1A1940 | #16133C | 6 | 0.00 | var --color-tab | kit.css:257 :root { --gradient-row }; kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #060A1E at 0.60 | #060518 at 0.60 | 6 | 0.00 | var --color-hash-well; kit.css:420 :root { --shadow-daily-lift-hover }; kit.css:421 :root { --shadow-daily-lift-live-hover }; kit.css:478 :root { --shadow-mode-name } | var --color-ruler-ground |
| #B87800 | #B57A06 | 6 | 0.00 | var --color-crown-deep | kit.css:399 :root { --gradient-case-gold } |
| #060518 at 0.60 | #08061E at 0.60 | 6 | 0.00 | var --color-ruler-ground | kit.css:473 :root { --gradient-mode-foot } |
| #060518 at 0.60 | #08071E at 0.60 | 6 | 0.00 | var --color-ruler-ground | kit.css:563 :root { --gradient-stage-band } |
| #16133C | #191842 | 6 | 0.00 | kit.css:257 :root { --gradient-row }; kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } | kit.css:464 :root { --gradient-feed-plate } |
| #100E2E | #0D0C28 | 6 | 0.00 | kit.css:257 :root { --gradient-row } | kit.css:424 :root { --gradient-daily-panel }; kit.css:521 :root { --gradient-menu } |
| #060A1E at 0.90 | #060518 at 0.90 | 6 | 0.00 | kit.css:439 :root { --shadow-banner-title } | kit.css:567 :root { --shadow-case-stage } |
| #060A1E | #020C17 | 7 | 0.00 | var --color-ground | var --color-ticker |
| #090827 | #100F2C | 7 | 0.00 | var --color-card-2 | var --color-mode |
| #090827 | #0B0F2A | 7 | 0.00 | var --color-card-2 | var --color-banner |
| #090827 | #100E2E | 7 | 0.00 | var --color-card-2 | kit.css:257 :root { --gradient-row } |
| #100F2C | #100F33 | 7 | 0.00 | var --color-mode | var --color-stage; kit.css:539 :root { --gradient-plate } |
| #100F2C | #120F33 | 7 | 0.00 | var --color-mode | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } |
| #020C17 at 0.70 | #08061E at 0.70 | 7 | 0.00 | var --color-timer | var --color-mode-scrim |
| #17144B | #1D1B4A | 7 | 0.00 | var --color-card-hover | var --color-skull-off-plate; kit.css:465 :root { --gradient-feed-back } |
| #0B0A22 | #08091B | 7 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | var --color-rail-tile-chip |
| #030214 | #08091B | 7 | 0.00 | var --color-footer-base | var --color-rail-tile-chip |
| #0B0F2A | #110F31 | 7 | 0.00 | var --color-banner | kit.css:465 :root { --gradient-feed-back } |
| #0D0C2C | #100F33 | 7 | 0.00 | var --color-card-deep | var --color-stage; kit.css:539 :root { --gradient-plate } |
| #0D0C2C | #120F33 | 7 | 0.00 | var --color-card-deep | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } |
| #1A1940 | #14123A | 7 | 0.00 | var --color-tab | kit.css:652 :root { --gradient-before-plate } |
| #100F33 | #14123A | 7 | 0.00 | var --color-stage; kit.css:539 :root { --gradient-plate } | kit.css:652 :root { --gradient-before-plate } |
| #FFF6CF | #FFF8D6 | 7 | 0.00 | var --color-rare-orbit-light | var --color-rare-chance |
| #120F33 | #14123A | 7 | 0.00 | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } | kit.css:652 :root { --gradient-before-plate } |
| #110F31 | #0E0C2A | 7 | 0.00 | kit.css:465 :root { --gradient-feed-back } | kit.css:652 :root { --gradient-before-plate } |
| #060A1E | #0B0A26 | 8 | 0.00 | var --color-ground | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } |
| #0F0E2B | #100F33 | 8 | 0.00 | var --color-card | var --color-stage; kit.css:539 :root { --gradient-plate } |
| #0F0E2B | #120F33 | 8 | 0.00 | var --color-card | var --color-ruler-notch; kit.css:225 :root { --gradient-panel } |
| #0B0A22 | #0B0F2A | 8 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | var --color-banner |
| #0B0A22 | #0E0C2A | 8 | 0.00 | var --color-tile; kit.css:225 :root { --gradient-panel } | kit.css:652 :root { --gradient-before-plate } |
| #060818 at 0.45 | #030310 at 0.45 | 8 | 0.00 | var --color-veil-soft | kit.css:512 :root { --shadow-card } |
| #060818 at 0.60 | #030510 at 0.60 | 8 | 0.00 | var --color-well | var --color-scrim-sheet |
| #030214 | #08071C | 8 | 0.00 | var --color-footer-base | kit.css:225 :root { --gradient-panel } |
| #2B1751 | #241F58 | 8 | 0.00 | var --color-mode-glow | var --color-burger-hover |
| #030510 at 0.60 | #060518 at 0.60 | 8 | 0.00 | var --color-scrim-sheet | var --color-ruler-ground |
| #1D1B4A | #191842 | 8 | 0.00 | var --color-skull-off-plate; kit.css:465 :root { --gradient-feed-back } | kit.css:464 :root { --gradient-feed-plate } |
| #B87800 | #B07806 | 8 | 0.00 | var --color-crown-deep | kit.css:430 :root { --gradient-daily-elite } |
| #0B0A26 | #100E2E | 8 | 0.00 | var --color-ruler-gap; kit.css:539 :root { --gradient-plate } | kit.css:257 :root { --gradient-row } |
| #191842 | #14123A | 8 | 0.00 | kit.css:464 :root { --gradient-feed-plate } | kit.css:652 :root { --gradient-before-plate } |

## Appendix D: pixel literals equal to a variable

| Line | Selector | Property | Literal | Variable of that value | Block | Part |
|---|---|---|---|---|---|---|
| 701 | `.wf-fig` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 719 | `:where(body:has(> .wf-screen-body)) h2` | font-size | 24px | `--size-l`, `--size-panel`, `--size-switch-h` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 754 | `.wf-rail-soc-h` | font-size | 10px | `--size-badge-text` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 805 | `.wf-event-clock` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 807 | `.wf-event-cell span` | font-size | 9px | `--size-micro` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 808 | `.wf-event-end` | font-size | 10px | `--size-badge-text` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 812 | `.wf-event .wf-event-name` | font-size | 32px | `--size-button-s`, `--size-avatar-m` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 813 | `.wf-event-clock` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 837 | `.wf-tile-link` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 842 | `.wf-tile-cur` | font-size | 10px | `--size-badge-text` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 963 | `.wf-bar a` | gap | 3px | `--space-thin` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 973 | `.wf-rail-toggle` | top | 16px | `--space-4` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 994 | `.is-rail-collapsed .wf-rail [data-lbl]:hover::a...` | padding | 4px | `--space-1` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1023 | `.wf-money` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1034 | `.wf-dep-b` | padding | 4px | `--space-1` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1034 | `.wf-dep-b` | border-radius | 999px | `--radius-pill` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1034 | `.wf-dep-b` | font-size | 10px | `--size-badge-text` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1064 | `.wf-money .wf-fig-c` | font-size | 10px | `--size-badge-text` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1120 | `.wf-feed-head` | padding | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1138 | `.wf-feed-hit` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1150 | `.wf-feed-tocase` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1152 | `.wf-feed-who` | gap | 4px | `--space-1` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1152 | `.wf-feed-who` | padding | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1156 | `.wf-feed-bot` | font-size | 9px | `--size-micro` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1179 | `.wf-ck-fixed` | padding-top | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1182 | `.wf-ck-row input` | margin | 3px | `--space-thin` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1183 | `.wf-ck-rec` | gap | 2px | `--space-hair` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1198 | `.wf-dep-b` | font-size | 9px | `--size-micro` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1198 | `.wf-dep-b` | padding | 3px | `--space-thin` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1211 | `.wf-hero-line a, .wf-ck-more > a` | padding-block | 14px | `--space-3-5` | 2. STRUCTURE, carried from wireframes/_wf.css | 2 structure |
| 1277 | `.wf-tile-cost::before` | margin-right | 6px | `--space-1-5` | THE CASE COVER AS THE BASELINE BUILDS IT, D-193 | 3 visual layer |
| 1338 | `.wf-feed-hit .wf-feed-s` | margin-top | 4px | `--space-1` | THE DROP AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1339 | `.wf-feed-mode` | right | 4px | `--space-1` | THE DROP AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1341 | `.wf-feed-back` | gap | 2px | `--space-hair` | THE DROP AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1347 | `.wf-feed-who` | padding | 2px | `--space-hair` | THE DROP AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1427 | `.wf-mode p` | margin | 4px | `--space-1` | THE MODE CARD AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1427 | `.wf-mode p` | margin | 14px | `--space-3-5` | THE MODE CARD AS THE BASELINE BUILDS IT, D-194 | 3 visual layer |
| 1467 | `.wf-panel-head .wf-fig:has(+ .wf-fig) .wf-fig-v...` | margin-right | 6px | `--space-1-5` | daily cases: the art panel, five cases on a track | 3 visual layer |
| 1476 | `.wf-ladder::after` | left | 3px | `--space-thin` | daily cases: the art panel, five cases on a track | 3 visual layer |
| 1494 | `.wf-foot-stats .wf-fig-v` | font-size | 22px | `--size-tile-icon` | the footer | 3 visual layer |
| 1505 | `.wf-foot-help .wf-btn` | font-size | 15px | `--size-s` | the footer | 3 visual layer |
| 1553 | `body:where(:has(> #sidebar)) .wf-screen-body` | padding-top | 32px | `--space-6` | the roadmap sidebar of the copy, until stage 07 | 3 visual layer |
| 1574 | `.is-rail-collapsed .wf-rail .wf-rail-logo` | padding | 56px | `--space-7` | THE RAIL AS THE BASELINE BUILDS IT | 3 visual layer |
| 1575 | `.wf-rail-item` | margin-bottom | 2px | `--space-hair` | THE RAIL AS THE BASELINE BUILDS IT | 3 visual layer |
| 1587 | `.wf-rail-snd::before` | margin-right | 6px | `--space-1-5` | THE RAIL AS THE BASELINE BUILDS IT | 3 visual layer |
| 1600 | `.wf-feed-head` | top | 6px | `--space-1-5` | THE LIVE MARK | 3 visual layer |
| 1600 | `.wf-feed-head` | right | 8px | `--space-2` | THE LIVE MARK | 3 visual layer |
| 1600 | `.wf-feed-head` | gap | 6px | `--space-1-5` | THE LIVE MARK | 3 visual layer |
| 1600 | `.wf-feed-head` | padding | 10px | `--space-2-5` | THE LIVE MARK | 3 visual layer |
| 1600 | `.wf-feed-head` | padding | 4px | `--space-1` | THE LIVE MARK | 3 visual layer |
| 1601 | `.wf-feed-lbl` | gap | 6px | `--space-1-5` | THE LIVE MARK | 3 visual layer |
| 1601 | `.wf-feed-lbl` | padding-left | 6px | `--space-1-5` | THE LIVE MARK | 3 visual layer |
| 1614 | `.wf-mode .wf-fig-missing` | margin-top | 6px | `--space-1-5` | THE MODE CARD, AGAIN | 3 visual layer |
| 1614 | `.wf-mode .wf-fig-missing` | padding | 12px | `--space-3` | THE MODE CARD, AGAIN | 3 visual layer |
| 1658 | `.wf-figs .wf-fig::before, .wf-figs .wf-fig::after` | right | 14px | `--space-3-5` | BEFORE YOU SPEND | 3 visual layer |
| 1658 | `.wf-figs .wf-fig::before, .wf-figs .wf-fig::after` | top | 12px | `--space-3` | BEFORE YOU SPEND | 3 visual layer |
| 1660 | `.wf-figs .wf-fig::after` | top | 28px | `--space-5-5` | BEFORE YOU SPEND | 3 visual layer |
| 1666 | `.wf-figs .wf-fig::before` | top | 18px | `--space-4-25` | BEFORE YOU SPEND | 3 visual layer |
| 1704 | `.wf-mode > p:not(.wf-fig-missing)` | margin | 14px | `--space-3-5` | MODE CARDS AT THE BASELINE'S MEASURE | 3 visual layer |
| 1717 | `.wf-rail-amb` | gap | 2px | `--space-hair` | THE RAIL | 3 visual layer |
| 1726 | `.wf-rail .wf-rail-lang::after` | margin-left | 6px | `--space-1-5` | THE RAIL | 3 visual layer |
| 1768 | `.wf-marks li` | padding | 2px | `--space-hair` | THE FOOTER AT THE BASELINE'S DISTANCE | 3 visual layer |
| 1808 | `.wf-rail-logo, .is-rail-collapsed .wf-rail .wf-...` | margin-bottom | 2px | `--space-hair` | THE RAIL | 3 visual layer |
| 1815 | `.wf-rail-item.is-later` | row-gap | 2px | `--space-hair` | THE RAIL | 3 visual layer |
| 1828 | `.wf-lang-list` | gap | 2px | `--space-hair` | THE LANGUAGE LIST | 3 visual layer |
| 1873 | `.wf-rail-foot` | margin-top | 2px | `--space-hair` | D-199: the founder's marks on the D-198 Home | 3 visual layer |
| 1888 | `.wf-feed-pause[aria-pressed="true"]::after` | margin-left | 2px | `--space-hair` | LIVE DROPS | 3 visual layer |
| 1890 | `.wf-feed-lbl` | padding-left | 2px | `--space-hair` | LIVE DROPS | 3 visual layer |
| 1929 | `.wf-panel::after` | bottom | 16px | `--space-4` | THE DAILY PANEL IN LAYERS | 3 visual layer |
| 5284 | `.spend__title` | font-size | 20px | `--size-title`, `--size-button-m-pad`, `--size-check` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5284 | `.spend__title` | font-size | 26px | `--size-head-l` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5288 | `.spend__k` | font-size | 11px | `--size-unit` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5288 | `.spend__k` | font-size | 12px | `--size-chip` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5291 | `.spend__say` | font-size | 13px | `--size-xs` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5291 | `.spend__say` | font-size | 14px | `--size-label`, `--size-button-s-pad`, `--size-burger-h` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5294 | `.spend__go` | font-size | 12px | `--size-chip` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5294 | `.spend__go` | font-size | 13px | `--size-xs` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5311 | `.spend__word` | font-size | 26px | `--size-head-l` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5326 | `.spend__s` | font-size | 18px | `--size-m`, `--size-refuse-mark` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5326 | `.spend__s` | font-size | 22px | `--size-tile-icon` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5381 | `.spend__skin--low` | top | 14px | `--space-3-5` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5382 | `.spend__skin--whole` | top | 24px | `--space-5` | BEFORE YOU SPEND | 4 one-offs and screens |
| 5410 | `.involves__pin > .icon` | font-size | 15px | `--size-s` | WHAT OPENING A CASE HERE INVOLVES | 4 one-offs and screens |
| 5498 | `.spend--pays .spend__mark` | font-size | 32px | `--size-button-s`, `--size-avatar-m` | WHAT THIS CASE PAYS | 4 one-offs and screens |
| 5499 | `.spend--pays .spend__title` | font-size | 24px | `--size-l`, `--size-panel`, `--size-switch-h` | WHAT THIS CASE PAYS | 4 one-offs and screens |
| 5533 | `.observed__tier > *` | font-size | 15px | `--size-s` | PUBLISHED AGAINST OBSERVED | 4 one-offs and screens |
| 5619 | `.ruler__art img` | inset | 6px | `--space-1-5` | HOW THIS CASE WORKS | 4 one-offs and screens |

## Appendix E: rules no state wears, by block

| Block of `kit.css` | Rules |
|---|---|
| 2. STRUCTURE, carried from wireframes/_wf.css | 410 |
| ICON STORY, D-235 | 52 |
| ground, type, links | 49 |
| CASE STAGE | 43 |
| layers over the screen | 36 |
| THE RAIL | 27 |
| daily cases: the art panel, five cases on a track | 24 |
| THE DROP AS THE BASELINE BUILDS IT, D-194 | 22 |
| DATA TABLE | 22 |
| MODE CARDS | 21 |
| THE FOOTER AT THE BASELINE'S DISTANCE | 21 |
| A RARE DROP, D-235 | 21 |
| the footer | 19 |
| D-204 LIVE DROPS | 17 |
| WITHDRAW ITEM | 17 |
| THE BANNER MOVES, D-194 | 16 |
| THE RAIL AS THE BASELINE BUILDS IT | 16 |
| BEFORE YOU SPEND | 16 |
| THE MODE CARD AS THE BASELINE BUILDS IT, D-194 | 15 |
| D-205 A FLAG BESIDE EACH LANGUAGE | 15 |
| OUTCOME CARD | 15 |
| BUTTON | 14 |
| THE CASE COVER AS THE BASELINE BUILDS IT, D-193 | 13 |
| the rail | 13 |
| THE RISK AS THE BASELINE'S THREE SKULLS, D-193 | 13 |
| RAIL | 13 |
| ONE COLUMN OF MODES ON A PHONE | 12 |
| FORM CONTROLS | 12 |
| POPOVER MENU | 12 |
| THE FOOTER'S LAST ROW | 11 |
| COMMIT BLOCK | 11 |
| the header | 10 |
| section heads: uppercase, a blue icon, the blue rule | 10 |
| THE RAIL'S SOCIAL ROW | 10 |
| CASE TILE | 10 |
| DROP CARD | 10 |
| PROOF BLOCK | 10 |
| buttons: The baseline's two pills | 8 |
| FROM EDGE TO EDGE OF THE SCREEN BESIDE THE RAIL, D-194 | 8 |
| THE LIVE MARK | 8 |
| THE MODE CARD, AGAIN | 8 |
| DAILY CASES | 8 |
| LIVE DROPS | 8 |
| THE CASE CARD AS THE BASELINE BUILDS IT, D-194 | 7 |
| MODE CARDS AT THE BASELINE'S MEASURE | 7 |
| THE LANGUAGE LIST | 7 |
| FIVE CASES TO A ROW ON A WIDE SCREEN | 7 |
| D-199: the founder's marks on the D-198 Home | 7 |
| ICON | 7 |
| MODE CARD | 7 |
| figures before spending: the counter style of the baseline, in white | 6 |
| the bottom bar | 6 |
| THE EVENT TITLE AS AN ILLUSTRATED LOGOTYPE | 6 |
| WHAT OPENING A CASE INVOLVES | 6 |
| THE DAILY PANEL IN LAYERS | 6 |
| THE STRIPES BEHIND A CASE | 6 |
| D-205 FIXED THE SAME DAY | 6 |
| FAVOURITE TOGGLE | 5 |
| THE LIGHT ABOVE THE FOOTER COUNTERS | 4 |
| FIGURE | 4 |
| AFTER ITS THIRD LOOK, D-242 | 4 |
| RARE MARKS ON THE CASE'S CARDS, D-236 | 4 |
| TICKER | 4 |
| the live feed: The baseline's bare strip with a pink line under it | 3 |
| SIX RESERVED SLOTS FOR CHANNELS NOT YET NAMED | 3 |
| DAILY TIERS ON A PHONE | 3 |
| CASE CARDS | 3 |
| THE RAIL'S LIVE ROWS | 3 |
| THE LIGHT ABOVE THE COUNTERS | 3 |
| D-206 FOLLOW-UP | 3 |
| D-206 CORRECTED | 3 |
| MEDIA SLOT | 3 |
| BREADCRUMB | 3 |
| THE STAGE'S OWN CARD | 3 |
| EVENT BANNER | 3 |
| FEED TILE | 3 |
| AFTER MY ITEMS' SECOND GATE, D-241 | 3 |
| RECENT DROP CARD | 3 |
| THE STAGE FORM, D-242 | 3 |
| VERIFY FORM | 3 |
| HOW THIS CASE WORKS | 3 |
| the roadmap sidebar of the copy, until stage 07 | 2 |
| CARDS ROUNDED | 2 |
| THE COUNTERS | 2 |
| PROSE | 2 |
| DAILY LADDER | 2 |
| EMPTY STATE | 2 |
| HEADER | 2 |
| LIMITS PANEL | 2 |
| DIALOG | 2 |
| the H1 | 1 |
| prose | 1 |
| THE GROUND AS THE BASELINE'S | 1 |
| THE PROSE PLATE | 1 |
| BADGE | 1 |
| DISCLOSURE | 1 |
| STATUS STEPS | 1 |
| TABS | 1 |
| COPYABLE VALUE | 1 |
| RARE MARKS ON A DROP, D-235 | 1 |
| PAYMENT PANEL | 1 |
| THE SHELL'S PAGE LAYOUT, D-232 | 1 |

