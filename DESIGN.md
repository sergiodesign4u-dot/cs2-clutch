---
name: CS2 Clutch
description: A CS2 skin case-opening platform, dark and electric, where the case is the hero on a lit stage and every price sits beside its chance.
colors:
  ground: "#060A1E"
  ticker: "#020C17"
  card: "#0F0E2B"
  card-2: "#090827"
  card-hover: "#17144B"
  raised: "#223660"
  tile: "#0B0A22"
  mode: "#100F2C"
  pink: "#FB3F8A"
  button: "#DF055C"
  button-hover: "#E8156A"
  blue: "#65A3FF"
  gold: "#FADA62"
  money: "#FFC44D"
  green: "#33CC66"
  fair: "#0B6A8C"
  mode-light: "#7E2DC8"
  text-hi: "#FFFFFF"
  text-soft: "#CECED4"
  text: "#9F9F9F"
  text-muted: "#9E9DB1"
  line-soft: "#262950"
  line: "#353446"
  skull-off: "#272D3F"
  rarity-1: "#F6C915"
  rarity-2: "#D1273E"
  rarity-3: "#D22BCE"
  rarity-4: "#6B42B9"
  rarity-5: "#3955E8"
  rarity-6: "#305F8D"
  risk-low: "#33CC66"
  risk-mid: "#65A3FF"
  risk-high: "#D22BCE"
typography:
  display:
    fontFamily: "Roboto, sans-serif"
    fontSize: "46px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.01em"
  figure:
    fontFamily: "Roboto, sans-serif"
    fontSize: "44.44px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: 1.4
  title:
    fontFamily: "Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 900
    lineHeight: 1.15
  price:
    fontFamily: "Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 900
    lineHeight: 1.2
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  s: "8px"
  card: "12px"
  button: "12px"
  m: "16px"
  l: "24px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "56px"
components:
  button-primary-l:
    backgroundColor: "{colors.button}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.button}"
    height: "52px"
    padding: "0 28px"
  button-primary-m:
    backgroundColor: "{colors.button}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.button}"
    height: "40px"
    padding: "0 20px"
  button-primary-s:
    backgroundColor: "{colors.button}"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.button}"
    height: "32px"
    padding: "0 14px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-ghost:
    backgroundColor: "rgba(11, 10, 34, .55)"
    textColor: "{colors.text-hi}"
    rounded: "{rounded.button}"
    height: "40px"
  rail-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.card}"
    height: "42px"
  case-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
---

# Design System: CS2 Clutch

**What this file is.** The product `DESIGN.md`, formed at stage 07 step 1 on 18 November 2026 by `/impeccable document` from the code of the two coloured screens that close stage 06, [Home v4](design/v4/index.html) and the [case screen v4](design/v4/case.html), with their states, read together with `design/_theme.css` (since step 3 `design/kit/kit.css`) and `DESIGN-artifacts.md`. It describes what the screens render, not what earlier drafts proposed. Brand decisions are not rewritten here: they are in `DESIGN-artifacts.md`, which stays the source, and every origin below is carried from it or from the comment beside the value in `design/_theme.css` as written.

**How it was read.** Twelve loads, measured on 18 November 2026 in Chromium: Home as a guest and signed in (`?account`), the case screen as a guest and signed in, and the outcome after an open with a big gain (`?account&land=k`) and with a loss (`?account&land=8`), each at 1440 and 375. On each load every stylesheet rule that matched an element was read for the variables it names, and every visible element outside the project sidebar was read for its computed type, colour, radius and shadow. The frontmatter holds the values the screens render; where that value is a literal in a block sheet rather than a variable, the prose says so.

**What the frontmatter is not.** The colour keys are the variable names of `design/kit/kit.css` without their `--color-` prefix. A colour written as a mix of two others (`--color-rail-icon-*`, the rarity plates) is not a primitive and is left to the tables. The typography roles are measured off the screens; only `--font-family` among them is a variable today, see "Typography".

**Visible place.** The section "Tokens" of `design/kit/kit.html`, built at step 3: the `:root` block live with the origin of each value beside it. Until then this file is read in the repository.

## Overview

**Creative North Star: "The Stage"**

The name is carried from direction 2, picked on 20 October 2026 (`D-187`), and confirmed for v4 by the founder on 18 November 2026 (`D-226`): the case is the hero, lit from above, and the open is the event the whole screen is built around. Everything else on a screen is either the stage, the act that starts the show, or the house lights that let a person read the numbers before they spend. Home is the lobby of that stage: an event banner that moves, the ways to play, the cases, the live drops passing overhead.

The register is inherited from the baseline (`D-18`, `D-181`): navy and near-black grounds, a hot pink for the act, gold for money, the seven-step rarity ladder. What is ours is the finish the founder asked for on 19 October 2026: rounded instead of sharp, depth instead of flat, things that move instead of static, and the rule that a glow or gradient earns its place by lighting the action or a rarity (`design/concept/docs/concept.md`, section 1). Density is high, the category's own: many figures, many small uppercase labels, cards in rows. Type is one family, Roboto, carried by weight 900 at scale rather than by a display face (`D-182` point 5, `D-183`).

**Key Characteristics:**
- Dark grounds in three steps of navy, `#060A1E` page, `#0F0E2B` card, `#0B0A22` tile, never a light surface.
- One family, Roboto, with 900 doing the work a display face would; most labels uppercase.
- The act is a deep pink, `#DF055C`, filled, with faint diagonal stripes and a sweep of light under the pointer.
- Money is a warm gold, `#FFC44D`, everywhere a price, a balance or a stake appears.
- Rarity is light: a ring, a hexagon, a plate in the rarity's colour, never a side stripe.
- Cards and buttons round at 12px; circles, pills and small chips take their own radii.

## Colors

A dark navy register with three loud accents, each owning one job: pink acts, gold counts money, blue informs; rarity owns its own ladder.

### Primary
- **Act Pink** (`button`): the fill of every filled button, the act that spends or starts. A deeper cut of the brand pink, picked by the founder on 4 November 2026 so a white 13px label holds 4.5:1 on its stripes.
- **Brand Pink** (`pink`): the brand's own pink, `D-185`. On v4 it is the colour of a text link, the counters in the footer, a selected state and the logo, not of a filled button.

### Secondary
- **Coin Gold** (`money`): every price, balance and stake, `D-209` update of 2 November 2026. The brand gold (`gold`) keeps the coin itself, a rail mark and the Daily tiers.
- **Signal Blue** (`blue`): secondary accent, links on blue grounds, a medium-risk mark, the lightning of a rare drop.
- **Fair Teal** (`fair`): the light end of the provably fair plate, "Every round", on Home and in the footer.

### Tertiary
- **Rarity ladder** (`rarity-1` to `rarity-6`, rarest first): the colour of an item's rarity, on its ring, its hexagon, its plate. `rarity-7`, the commonest, is declared and not rendered on these two screens.
- **Risk** (`risk-low`, `risk-mid`, `risk-high`): the bolts under a case. `risk-high` is rarity step 3, because the baseline's own violet fails 3:1.

### Neutral
- **Ground** (`ground`): the page. **Card** (`card`), **Card 2** (`card-2`), **Tile** (`tile`), **Mode** (`mode`): the surfaces, darkest under the most important. **Card hover** (`card-hover`) and **Raised** (`raised`) answer the pointer.
- **White** (`text-hi`): figures, names, headings, every label on a filled surface.
- **Mist** (`text-soft`, `#CECED4`): the body text of v4 and most secondary lines, 752 of the measured text runs against 140 for `text`; the body colour since `D-226`.
- **Grey** (`text`, `#9F9F9F`) and **Lavender Grey** (`text-muted`): body and meta in the rules carried from the grey screens; on v4 they are the minority.
- **Lines** (`line-soft`, `line`): a divider and the edge of a control at rest.

### Named Rules
**The One Job Rule.** Pink acts, gold counts, blue informs, rarity ranks. A colour does not take another's job: a price is never pink, an act is never gold.

**The Money Is Calm Rule.** Money is set in gold at weight 900 and never glows, pulses or animates; the energy belongs to the item and the act (attribute A3).

**The Rarity Is Light Rule.** Rarity reaches a card as a ring, a hexagon or a lit plate in its colour (`D-188`, `D-213`, `D-214`), and the coloured side border stays out (`D-189`).

### Tokens with their origin

Parent is one word: `атрибут A<n>` where `DESIGN-artifacts.md` names the attribute pair, `смак` for a founder pick recorded with the founder's words, `технічне рішення` for a value set by a rule (WCAG, performance, structure), and `наявний бренд` for a value inherited as it is from the baseline (`CLAUDE.md`, "Baseline"). The origin column is carried from `DESIGN-artifacts.md` or from the comment beside the value in `design/_theme.css`, shortened to its first clause and its decisions; the full text stays there.

**Grounds and surfaces.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--color-ground` | `#060A1E` | атрибут A3 | наявний бренд, baseline.md 5 |
| `--color-ticker` | `#020C17` | атрибут A1 | наявний бренд, baseline.md 5 |
| `--color-card` | `#0F0E2B` | атрибут A2 | наявний бренд, baseline.md 5 |
| `--color-card-2` | `#090827` | атрибут A2 | наявний бренд, baseline.md 5 |
| `--color-raised` | `#223660` | атрибут A1 | наявний бренд, baseline.md 5 |
| `--color-mode` | `#100F2C` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, game-preview |
| `--color-timer` | `rgba(2, 12, 23, .7)` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, banner-timer |
| `--color-card-hover` | `#17144B` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style, case-card:hover |
| `--color-tile` | `#0B0A22` | смак | рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 (origin read from the sheet header) |

**Accents and money.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--color-pink` | `#FB3F8A` | атрибут A3 | рішення користувача, D-185 |
| `--color-blue` | `#65A3FF` | атрибут A1 | наявний бренд, baseline.md 5 |
| `--color-gold` | `#FADA62` | атрибут A5 | наявний бренд, baseline.md 5 |
| `--color-money` | `#FFC44D` | смак | рішення користувача, D-209 update of 2 Nov 2026 |
| `--color-green` | `#33CC66` | атрибут A5 | наявний бренд, baseline.md 5 |
| `--color-mode-light` | `#7E2DC8` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |
| `--color-button` | `#DF055C` | технічне рішення | founder pick A of 4 Nov 2026 |
| `--color-button-hover` | `#E8156A` | смак | founder of 4 Nov 2026 |
| `--color-fair` | `#0B6A8C` | смак | рішення користувача, D-209 (Every round, footer I of 3 Nov 2026), D-215 |
| `--color-rail-icon-red` | `color-mix(in srgb, var(--color-rarity-2) 72%, var(--color-text-hi))` | смак | підібрано під характер, D-209, the side menu's icons |
| `--color-rail-icon-cyan` | `color-mix(in srgb, var(--color-blue) 70%, var(--color-text-hi))` | смак | підібрано під характер, D-209, the side menu's icons |

**Text and lines.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--color-text-hi` | `#FFFFFF` | атрибут A5 | наявний бренд, baseline.md 5 |
| `--color-text` | `#9F9F9F` | атрибут A5 | наявний бренд, D-186 |
| `--color-text-muted` | `#9E9DB1` | атрибут A3 | наявний бренд, D-186 |
| `--color-line-soft` | `#262950` | атрибут A2 | наявний бренд, baseline.md 13.2, the welcome dialog edge, D-191 |
| `--color-line` | `#353446` | атрибут A2 | наявний бренд, baseline.md 13.2, the rail toggle edge, D-191 |
| `--color-text-soft` | `#CECED4` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, game-preview__description |
| `--color-skull-off` | `#272D3F` | наявний бренд | наявний бренд, founder screenshots of 20 Oct 2026, pixel, the dark skulls under a case |

**Rarity and risk.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--color-rarity-1` | `#F6C915` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-rarity-2` | `#D1273E` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-rarity-3` | `#D22BCE` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-rarity-4` | `#6B42B9` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-rarity-5` | `#3955E8` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-rarity-6` | `#305F8D` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-risk-low` | `#33CC66` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, risk-level__skull |
| `--color-risk-mid` | `#65A3FF` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, risk-level__skull |
| `--color-risk-high` | `#D22BCE` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style drew #7E2DC8, 2.89:1 |
| `--color-plate-r2-a` | `var(--color-rarity-2)` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r2-b` | `#7A0F22` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r4-a` | `var(--color-rarity-4)` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r4-b` | `#2E1A63` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |

**Gradients.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--gradient-mode-cases` | `linear-gradient(120deg, var(--color-pink), #8E2BC9)` | смак | comp A, founder pick |
| `--gradient-mode-battles` | `linear-gradient(120deg, var(--color-rarity-5), #1B2A8F)` | смак | comp A, founder pick |
| `--gradient-mode-showdowns` | `linear-gradient(120deg, var(--color-rarity-2), #7A0F22)` | смак | comp A, founder pick |
| `--gradient-mode-upgrade` | `linear-gradient(120deg, #9E6905, #B4400F)` | технічне рішення | stage 06 critique of 10 Nov 2026, row 6 |
| `--gradient-panel` | `linear-gradient(180deg, #120F33, #0B0A22 60%, #08071C)` | смак | founder, D-209 |
| `--gradient-stripes` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .09) 0 8px,  ...` | смак | comp A and C, founder pick |
| `--gradient-button-stripes` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .1) 0 14px,  ...` | смак | рішення користувача, D-209 update of 2 Nov 2026, buttons.css (origin read from the sheet header) |
| `--gradient-button-sheen` | `linear-gradient(105deg, transparent 42%, rgba(255, 255, 255, .26)  ...` | смак | рішення користувача, D-209 update of 4 Nov 2026, buttons-lab.html (origin read from the sheet header) |


The four plate rows marked **none** take their origin from a critique row that moved them into variables, not from a pair or a pick that chose their hue; they are on the candidate list in "Open". The plates for tiers 1, 3 and 5 are built by name in `case-blocks.js` and were not drawn on the twelve loads; they are under "Not on these two screens".

## Typography

**Display Font:** Roboto (with sans-serif)
**Body Font:** Roboto (with sans-serif)
**Label/Mono Font:** Roboto for labels; a monospace stack only for the server seed hash, a technical string.

**Character:** One family in four weights, 400, 500, 700 and 900, with 900 carrying the game feel at scale the way a display face would (`D-182` point 5, `D-183` point 4). Most labels and every heading are uppercase with a little air between the letters.

### Hierarchy

Measured on the screens at 1440, with the 375 value after the slash where it changes.

- **Display** (900, 46px / 30px, line 1, uppercase, +0.01em): the case's name on the case screen. Home's own h1, the SEO line, runs 28px / 24.9px.
- **Figure** (900, 44.44px / 38px, line 1, -0.01em): the published figures before spending, tested RTP, median time to Steam, the round's figures; white, or gold where the figure is money.
- **Headline** (900, 20px, line 1.4, uppercase): a section heading, "Ways to play", "Best drops", "What is in this case". Three other heading sizes stand beside it today: 26px / 21px for the prose sections and the FAQ, 22.2px / 20px for "Before you spend", 36px / 28px for "Daily cases".
- **Title** (900, 15px to 16px, line 1.15 to 1.2): a skin's name, a case's name on its tile (16px, uppercase, +0.04em), a mode's name (20px, uppercase).
- **Price** (900, gold): 20px on a case tile, 18px and 16.4px in the tables, 12px in a row.
- **Body** (400, 15px to 16px, line 1.55 to 1.6, `text-soft`): prose, answers, the line under a block.
- **Label** (700 or 900, 10px to 13px, uppercase, +0.06em to +0.1em): a weapon's name over its skin, a counter's caption, a small button.

### Named Rules
**The Weight Carries It Rule.** Hierarchy is made by weight 900 and by uppercase, not by a second family. No display face enters (`D-182` point 5).

**The type is not yet a scale.** Read as it is: the two screens render 35 distinct font sizes, from 9px to 46px, several of them fluid. In the 24 block sheets of v4, 342 `font-size` declarations are literal pixels and 12 name a variable; the five steps of direction 2, `--size-xs` to `--size-xl`, 13, 15, 18, 24 and 40 (`D-187`), and the baseline's sizes of `D-192` reach these screens only through the rules carried from the grey screens. So the hierarchy above is a reading of the code, not a set of tokens. Bringing it to a scale changes values, which is a founder decision per value (`CLAUDE.md`, "Values migrate"), and it is named in "Open". Weight 800 appeared too, 208 measured runs on the chance and change figures in the case tables; `D-226` moved them to 900, so the screens now render the four weights of `DESIGN-artifacts.md` section 4 and no other.

**Type.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--size-xl` | `40px` | атрибут A3 A4 | рішення користувача, D-187 |
| `--size-l` | `24px` | атрибут A2 | рішення користувача, D-187 |
| `--size-m` | `18px` | атрибут A4 | рішення користувача, D-187 |
| `--size-s` | `15px` | атрибут A5 | рішення користувача, D-187 |
| `--size-xs` | `13px` | атрибут A3 | рішення користувача, D-187 |
| `--font-family` | `Roboto, sans-serif` | атрибут A2 | наявний бренд, baseline.md 5, D-182 |
| `--size-unit` | `11px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, banner-timer__countdown-unit |
| `--size-chip` | `12px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, small-button |
| `--size-label` | `14px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, case-card__name |
| `--size-text` | `16px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, game-preview__name |
| `--size-title` | `20px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, header__title, case-card__price |
| `--size-panel` | `24px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style |
| `--size-stat` | `30px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, statistic-score |
| `--size-micro` | `9px` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |


## Layout

A full height left rail and a header that starts at its edge, the baseline's two carriers (`CLAUDE.md`, "Information architecture"); a bottom bar on a phone. The rail is 250px open and 70px closed, the header 64px, the content column 1298px at 1440, prose no wider than 68ch, no target smaller than 44px. The event banner stands 440px high from 900px up (`--size-banner-v4`); a live drop tile is 104px wide, 86px under 600px (`--size-drop-v4`). Each of those two jobs also has direction 2's value declared, 340px and 92px, which the v4 rule overrides on screen; one of each pair goes at step 3 (`D-224`).

**Breakpoints, as the sheets write them.** Three carry the layout: under 600px a phone, 600px to 899px a tablet, 900px and up the rail beside the content (69 rules at `min-width: 900px`, 47 at `max-width: 599px`, 42 at `max-width: 899px`). Single rules also stand at 760, 1100, 1200 and 1360px, and seven wide screen steps from 2200px to 3800px, one rule each. Stage 10 names the points; this is the census they start from.

**Rhythm.** The seven steps of `--space-1` to `--space-7`, 4, 8, 12, 16, 24, 32 and 56px, reach the screens through the carried rules; the v4 block sheets mostly write their padding and gaps as literals.

**Space.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--space-1` | `4px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-2` | `8px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-3` | `12px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-4` | `16px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-5` | `24px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-6` | `32px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |
| `--space-7` | `56px` | смак | підібрано під характер, from the gaps The stage drew, D-187 |

**Sizes of things.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--size-btn-s` | `28px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, small-button |
| `--size-btn-m` | `40px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, sign-in-btn |
| `--size-btn-l` | `48px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, large-button |
| `--size-ticker` | `120px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, drops-live-feed |
| `--size-banner` | `340px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, banner-content |
| `--size-mode` | `160px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, game-preview |
| `--size-drop` | `92px` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |
| `--size-rail` | `250px` | наявний бренд | наявний бренд, baseline.md 13, the rail measured above 1440 |
| `--size-rail-collapsed` | `70px` | наявний бренд | наявний бренд, baseline.md 13, the rail measured at 1440 and below |
| `--size-header` | `64px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, main-header, D-192, D-191 |
| `--size-content` | `1298px` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, D-194 |
| `--size-bar` | `64px` | смак | рішення користувача, D-191, an icon over a 13px label |
| `--size-measure` | `68ch` | технічне рішення | структура, wireframes/_wf.css, stage 04 |
| `--size-tap` | `44px` | технічне рішення | структура, wireframes/_wf.css, stage 04 |
| `--size-banner-v4` | `440px` | смак | рішення користувача, D-209, D-224 |
| `--size-drop-v4` | `104px` | смак | рішення користувача, D-209, D-224 |
| `--size-tile` | `42px` | смак | рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 (origin read from the sheet header) |
| `--size-button-l` | `52px` | смак | рішення користувача, D-209 update of 2 Nov 2026, buttons.css (origin read from the sheet header) |
| `--size-button-m` | `40px` | смак | рішення користувача, D-209 update of 2 Nov 2026, buttons.css, the medium button (origin read from the sheet header) |
| `--size-button-s` | `32px` | смак | рішення користувача, D-209 update of 2 Nov 2026, buttons.css, the small button (origin read from the sheet header) |


## Elevation & Depth

A hybrid: depth comes first from three dark surfaces stepped against the page, then from one soft drop shadow under a card, and light appears on demand. At rest a filled button has no glow; under the pointer or on keyboard focus a band of light sweeps across it once and its pink glow comes up (founder, 4 November 2026). A rarity lights its own ring or hexagon. The stage under the case is lit from above.

### Shadow Vocabulary
- **Card lift** (`box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .05), 0 10px 22px rgba(3, 3, 16, .45)`): the most common shadow on the screens, 366 measured runs; written as a literal in `case-body.css` and `case-stage.css`, its hairline half is `--shadow-tile-edge`.
- **Tile hairline** (`--shadow-tile-edge`): the rail tile's edge, white at 5 %.
- **Button glow** (`--shadow-button`): the filled button under the pointer, in the act pink.
- **Panel** (`--shadow-panel`): a dialog, a menu, the drawer.

59 distinct shadows render in all; the four above are the ones with a job named. The rest are literals in the block sheets, many of them a rarity's own light.

### Named Rules
**The Glow On Demand Rule.** Nothing glows at rest except a rarity. A button glows under the pointer or on focus, and stops.

**Depth and light.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--shadow-panel` | `0 24px 48px -24px rgba(0, 0, 0, .7)` | атрибут A1 | рішення користувача, D-191 |
| `--blur-mode` | `40px` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |
| `--shadow-button` | `0 4px 14px rgba(223, 5, 92, .32)` | смак | рішення користувача, D-209 update of 4 Nov 2026, buttons-lab.html (origin read from the sheet header) |
| `--shadow-tile-edge` | `inset 0 0 0 1px rgba(255, 255, 255, .05)` | смак | рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 (origin read from the sheet header) |


## Shapes

Rounded and soft at the corner, sharp nowhere. Cards, banners, tiles and buttons take one corner, 12px (`--radius-card`, `--radius-button`, `D-209`, `D-218`); a circle is a control or an avatar; a pill is a chip. The silhouettes that are ours: the dashed hexagon behind a live drop, after the baseline's (`--shape-hex-*`), and the ring a rare mark's current runs round (`--shape-ring-mask`).

**Read as it is, the corners are not yet one family.** 17 distinct radii render: 12px (566 runs), 16px (456), 14px (395), 6px (308), 50 % (236), 18px (136), then 8, 2, 4, 10, 999, 3, 5, 20, 9, 1 and 7px. In the block sheets 199 `border-radius` declarations are literal pixels against about 30 that name a variable; 16px reaches the screens through the carried rules on `--radius-m`. Named in "Open".

**Shape.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--radius-s` | `8px` | атрибут A2 | наявний бренд, baseline.md 13.2 |
| `--radius-m` | `16px` | атрибут A2 | наявний бренд, baseline.md 13.2 |
| `--radius-l` | `24px` | атрибут A2 | рішення користувача, D-186 |
| `--radius-pill` | `999px` | атрибут A2 A3 | наявний бренд, baseline.md 13.2 |
| `--size-edge` | `2px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, rose-button border |
| `--radius-card` | `12px` | смак | рішення користувача, D-209 |
| `--radius-tile` | `var(--radius-card)` | смак | рішення користувача, D-209 |
| `--radius-button` | `12px` | смак | рішення користувача, D-209 update of 2 Nov 2026, D-218 (origin read from the sheet header) |


## Components

### Buttons
- **Shape:** one corner for the family, 12px (`--radius-button`).
- **Sizes:** large 52px, medium 40px, small 32px (`--size-button-l`, `-m`, `-s`), labels 16, 13 and 12px, weight 900, uppercase.
- **Primary:** one per state, the act pink `#DF055C` filled, faint diagonal stripes over it (`--gradient-button-stripes`), white label.
- **Hover / Focus:** the fill lightens to `#E8156A`, a band of light crosses it once (`--gradient-button-sheen`) and the glow comes up (`--shadow-button`); nothing moves. Keyboard focus adds a 2px white outline 2px out.
- **Ghost:** the dark tile at 55 % with a 2px pink edge inside; under the pointer the pink fills at 20 %.
- **Disabled:** soft text on a pale wash at 14 % with a 1px hairline.
- **Measured exceptions:** the case screen's act renders 56px high at 1440 and 52px at 375, and on a phone the Daily panel's Open button renders 36px and its guest Sign in 44px; all three are set by a stronger selector on the block, not by a size of the family. They are carried to step 6.

### Cards and tiles
- **Case card:** the cover art floats with no plate, the case name 16px 900 uppercase, the price in gold 20px 900, the risk bolts under it.
- **Skin card:** the skin on a ring in its rarity colour (`D-213`, the W7 card), name and weapon, the price in gold.
- **Rail tile:** 42px, `--color-tile`, 12px corner, a white hairline; the current row carries a gold edge.
- **Live drop:** the skin on the dashed hexagon, lit by its rarity ring (`--shape-feed-ring`), 104px wide.

### Navigation
- **Rail:** the logo, the destinations, the eight later ways to play as rows marked Not launched yet, the sound and language controls, the social row; icons animate their own short story on hover.
- **Header:** money as two gold figures in a plate, balance and value of items held, and Add funds beside them, a ghost button with a green 5 % badge since `D-226`, so the money stays calm; then the account.
- **Bottom bar on a phone:** Home and Cases, an icon over a 12px label.

### Signature: the stage and the open
The case on its lit stage, the reel that runs under a pointer (row M of `D-213`), the count and the act in the stage's foot, and the outcome that lands the prize and prints the net on a gain only (`D-221`).

### Icons and art
Icons are masks in the colour of the text around them, Solar Bold plus drawn marks (`DESIGN-artifacts.md` section 7 and section 10, `D-193`); the style is chosen in step 2's control census (`D-222`). 36 of the 40 declared icons render on the twelve loads, and 16 of the 24 `--art-*` pictures. Skins are the real Steam images, never generated (`D-183`); banner, case and mode art is ours, generated by Codex.

**Motion.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--motion-drift` | `26s` | смак | підібрано під характер, D-194 |
| `--motion-float` | `6s` | смак | підібрано під характер, D-194 |
| `--motion-sway` | `9s` | смак | підібрано під характер, D-194 |
| `--motion-snow` | `14s` | смак | підібрано під характер, D-194 |
| `--motion-ease-pop` | `cubic-bezier(.34, 1.56, .64, 1)` | смак | підібрано під характер, design principle 2 |

**Masks and outlines.**

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--shape-hex-fill` | `SVG mask, data URI` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |
| `--shape-hex-line` | `SVG mask, data URI` | наявний бренд | наявний бренд, deep walk of the baseline site on 20 Oct 2026, computed style |
| `--shape-hex-outer` | `SVG mask, data URI` | смак | рішення користувача, D-209, founder of 31 Oct 2026 |
| `--shape-hex-inner` | `SVG mask, data URI` | смак | рішення користувача, D-209, founder of 31 Oct 2026 |
| `--shape-feed-ring` | `SVG mask, data URI` | технічне рішення | технічне рішення, the performance pass of 10 Nov 2026, D-214 (origin read from the sheet header) |
| `--shape-ring-mask` | `SVG mask, data URI` | смак | рішення користувача, D-214, rare-mark.css, founder of 10 Nov 2026 (origin read from the sheet header) |
| `--shape-hex-glow` | `SVG mask, data URI` | технічне рішення | технічне рішення, the performance pass of 10 Nov 2026, D-214 (origin read from the sheet header) |

## Do's and Don'ts

### Do:
- **Do** fill an act with `--color-button`, and only one per state: Sign in for a guest, Open on a case, Sell on the outcome (`D-226`). Every other button is the ghost.
- **Do** set every price, balance and stake in `--color-money`, weight 900.
- **Do** carry rarity as light in the rarity's own colour: a ring, a hexagon, a lit plate.
- **Do** round cards, tiles and buttons at 12px.
- **Do** keep one family, Roboto, and make hierarchy with weight 900 and uppercase.
- **Do** let a glow appear on demand, under the pointer or on focus, except a rarity's.
- **Do** keep the diagonal stripes to the act and the tile beside a section heading (`D-226`).

### Don't:
- **Don't** draw a coloured side border on a card (`D-189`).
- **Don't** generate a skin (`D-183`); a skin is the real item.
- **Don't** put the logo in the header (`CLAUDE.md`, "Baseline").
- **Don't** give a limit, a balance or a visit a streak, a status or a score (`CLAUDE.md`, "Product substance", the compliance paragraph).
- **Don't** add a glow or a gradient with no job: it lights the act or a rarity, or it goes (`concept.md` section 1, the slop test).
- **Don't** make a card or a panel glass (`concept.md` section 1, point 1). The one exception is a small plate that carries text over moving art, which may blur what is behind it: the Live drops pill, the event countdown, the Not launched yet plate (`D-226`).

## Not on these two screens

Declared in `design/kit/kit.css` (moved from `design/_theme.css` at step 3) and not reached by any rule or inline style on the twelve loads. They move to `design/kit/kit.css` byte for byte at step 3 like every other value; this file does not describe them as the language of the screens. Most are direction 2's language that v4 replaced: the 56px button and its glow, the 2px rarity line, the blue light mixes of the lit stage. Some wait for a screen that has their job: `--color-field-edge` for a field, `--color-risk-extreme` for a case that carries it, the tier 1, 3 and 5 plates for a round of those tiers.

| Token | Value | Parent | Origin, as recorded |
|---|---|---|---|
| `--color-scrim` | `rgba(6, 10, 30, .72)` | атрибут A3 | структура, wireframes/_wf.css, stage 04 drew it black at 66 % |
| `--color-footer-base` | `#030214` | наявний бренд | наявний бренд, walk of the baseline site on 22 Oct 2026, computed style, copyright-wrapper, D-196 |
| `--color-mode-glow` | `#2B1751` | наявний бренд | наявний бренд, founder screenshots of 20 Oct 2026, pixel at the foot of the Cases card |
| `--color-rare-gold` | `var(--color-rarity-1)` | смак | підібрано під характер, D-209 rare drops of 1 Nov 2026, D-224 |
| `--color-rare-fire` | `#FF5A2E` | смак | підібрано під характер, D-209 rare drops of 1 Nov 2026 |
| `--color-rare-zap` | `#8FD3FF` | смак | підібрано під характер, D-209 rare drops of 1 Nov 2026 |
| `--color-field-edge` | `#CECED4` | атрибут A2 | наявний бренд, D-186 |
| `--color-footer-edge` | `#65A3FF` | атрибут A1 | наявний бренд, baseline.md 13.2 |
| `--color-rarity-7` | `#DDDDDD` | атрибут A4 | наявний бренд, baseline.md 13.4 |
| `--color-risk-extreme` | `#FF4D3D` | смак | founder of 2 Nov 2026 in case-tiles.css, D-209 |
| `--color-plate-r1-a` | `#9E6905` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r1-b` | `#B4400F` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r3-a` | `#A62BC4` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r3-b` | `#4A1260` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r5-a` | `var(--color-rarity-5)` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--color-plate-r5-b` | `#1B2A8F` | **none** | stage 06 critique of 10 Nov 2026, row 15, D-215 |
| `--size-action-label` | `20px` | атрибут A3 | рішення користувача, D-187 |
| `--size-rarity-line` | `2px` | атрибут A4 | рішення користувача, D-190, D-59 |
| `--size-action` | `56px` | атрибут A2 A3 | рішення користувача, D-187 |
| `--size-daily` | `344px` | наявний бренд | наявний бренд, baseline walk of 20 Oct 2026, computed style, daily-cases-bg |
| `--shadow-action` | `0 8px 36px rgba(251, 63, 138, .45)` | атрибут A3 | рішення користувача, D-187 |
| `--shadow-glow` | `0 0 12px` | атрибут A4 | рішення користувача, D-187 |
| `--mix-rarity-tint` | `18%` | атрибут A4 | рішення користувача, D-188 |
| `--mix-rarity-pad` | `42%` | атрибут A4 | рішення користувача, D-188 |
| `--shadow-item` | `0 4px 12px rgba(0, 0, 0, .5)` | атрибут A1 | наявний бренд, baseline.md 13.2, the support button, D-191 |
| `--mix-light-beam` | `24%` | атрибут A3 | рішення користувача, D-188 |
| `--mix-light-soft` | `12%` | атрибут A1 | рішення користувача, D-188 |
| `--mix-light-pad` | `55%` | атрибут A3 | рішення користувача, D-188 |
| `--motion-rail-icon` | `.95s` | смак | підібрано під характер, design principle 2, D-209 |
| `--motion-ease-rail-icon` | `cubic-bezier(.3, .7, .3, 1)` | смак | підібрано під характер, D-209 |
| `--motion-rare-drop` | `4s` | смак | підібрано під характер, long enough to watch, short enough to compare, D-209 |
| `--shape-hex` | `SVG mask, data URI` | наявний бренд | наявний бренд, founder screenshots of 20 Oct 2026, pixel, the ticker drop |
| `--shape-case-mark` | `SVG mask, data URI` | смак | рішення користувача, D-213, stage-lab.html rows H to J |

Four icons, `--icon-close`, `--icon-mute`, `--icon-google` and `--icon-crown`, and eight pictures, `--art-banner` and the seven of the Daily panel's earlier build, `--art-daily-bg`, `--art-daily-rings`, `--art-daily-1` to `-5`, are not drawn either. The first three icons sit in a dialog and a toggle that the loads did not open.

## Open

Named here, decided elsewhere. Each is a value or a pair a later step settles with the founder; nothing in this file pretends it is settled.

1. **The type scale.** 35 rendered sizes, 342 literal declarations; brought to a scale at step 3 by a founder decision per value.
2. **The corner family and the buttons.** 17 rendered radii, and three buttons off the family's heights; brought onto one ladder at step 3, value by value with the founder (`D-226`, row A1).
3. **Two pairs.** `--size-banner` / `-v4` and `--size-drop` / `-v4`, one of each goes at step 3 (`D-224`).
4. **Values with no token.** The block sheets hold 970 colour literals and 371 local variables. Two colours stand out because they carry a meaning: the up green `#35E08A` and the down red `#FF5C7A` of the change figures and the net. They keep their values and become `--color-up` and `--color-down` at step 3 (`D-226`). Step 3's extract lists every new variable it needs for a decision and changes no value.
5. **Origins to check.** The 19 values whose origin was read from a sheet's header rather than from the value (`DESIGN-artifacts.md` section 11): 13 are marked in the tables above, the other six are icons and masks this file does not tabulate, listed in that section. And the four plate rows with no parent.
6. **Where the screens part from the concept.** Decided on 18 November 2026, `D-226`: every attribute stands and the screens move to it, the blur on a text plate stays as a named exception, the stripes have a rule. `concept.md` section 3.2 holds the attribute by attribute reading.

## Sources

- `design/concept/docs/concept.md`: the founder's taste, the attributes A1 to A5, the logo, the plate, the layout record.
- `design/concept/docs/references.md`: the techniques S1 to S4, C1, C2, R1, R2.
- `DESIGN-artifacts.md`: the brand decisions and the origin of every value, the source this file carries from.
- `design/kit/kit.css`: the values, each with its origin beside it; it was `design/_theme.css` until stage 07 step 3.
- `design/v4/index.html` and `design/v4/case.html` with their block sheets: the code this file was read from.
