# DESIGN-artifacts

**What this file is.** The draft design document of stage 06, opened at step 3b on 19 October 2026: the approved brand decisions and the concept language, each value with its origin. It is not the product `DESIGN.md`: stage 07 forms that one from the code of the coloured screens plus this file, and carries every origin across as written. A value with no origin is not entered here.

**Visible place.** `design/concept/concept.html`, built at step 5: palette, type, shape and icons render there live, each with its attribute and origin. **Since step 6 the one `:root` block lives in `design/_theme.css`**, and the stand and the coloured Home, `design/index.html` and `design/index-account.html`, all read it from there, `D-191`.

**Route.** An inherited visual language, no system, `D-18`, `D-181`, `D-182`. So the plate is one and collected, and **`наявний бренд` outranks `піксель плейта`**: a pixel is taken only where the brand gives no value. Where the baseline gives two answers, the founder picks and the loser is named, `D-181`; those picks are in section 9 and nothing here pretends to have made them.

**Origins used.** `наявний бренд` (read live in `research/docs/baseline.md`, cited by section) · `піксель плейта, зона <N>` (sampled from `design/concept/assets/brand-plate.png`) · `рішення користувача` (cited by decision) · `атрибут A<n>` (from `design/concept/docs/concept.md` section 3).

**Variable names.** The convention is set here with the first values: a prefix by kind, `--color-*`, `--radius-*`, `--font-*`, `--size-*`, `--space-*`, flat names, no semantic roles yet (those come at stage 08). The names below are the ones `design/_theme.css` declares at step 6, each with its origin as a comment, and that `:root` block moves byte for byte to `design/kit/kit.css` at stage 07.

---

## 1. Sources

- `design/concept/docs/concept.md`: the founder's taste, the attributes A1 to A5, section 4 Logo, section 5 Brand plate.
- `design/concept/docs/references.md`: the techniques S1 to S4, C1, C2, R1, R2.
- `design/concept/assets/brand-plate.png`: the collected plate, approved as the language.
- `design/concept/assets/logo-kit.png` and `design/concept/assets/logo/`: the logo, `D-184`.
- `research/docs/baseline.md` sections 5 and 13: the inherited values.

---

## 2. Identity

The logo is the G2-b symbol beside the A1-a wordmark, traced from the picture, no spark, `D-184`. Versions, clear space, minimum sizes, backgrounds and misuse: `concept.md` section 4, drawn on `logo-kit.png`. It lives in the rail and never in the header, `CLAUDE.md`, "Baseline".

---

## 3. Palette

The plate column is the pixel actually sampled from the plate's swatch, shown so the drift is visible; it is not the value. The value column is the one that enters `_theme.css`.

### Grounds and surfaces

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-ground` | `#060A1E` | page ground | `наявний бренд`, `baseline.md` 5, `body` | `#020619`, zone 2 | principle 4, dark; A3, calm |
| `--color-ticker` | `#020C17` | live drop ticker plate | `наявний бренд`, `baseline.md` 5 | not on the plate | A1 |
| `--color-card` | `#0F0E2B` | card, primary | `наявний бренд`, `baseline.md` 5, 36 elements | `#0E0E28`, zone 2 | A2 |
| `--color-card-2` | `#090827` | card, secondary; the rail | `наявний бренд`, `baseline.md` 5, 33 elements | `#060720`, zone 2 | A2 |
| `--color-raised` | `#223660` | panel, raised | `наявний бренд`, `baseline.md` 5, 12 elements | `#23385D`, zone 2 | A1, depth |

### Accents

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-pink` | `#FB3F8A` | the brand primary: the logo, a text link, the footer counters, a selected state; the act's fill is `--color-button` since `D-209`, `D-226` | `рішення користувача`, `D-185`; `піксель плейта, зона 2` | `#FB3F8A`, zone 2 | A3 |
| `--color-blue` | `#65A3FF` | secondary accent | `наявний бренд`, `baseline.md` 5 | `#609DFC`, zone 2 | A1 |
| `--color-gold` | `#FADA62` | the coin itself, a rail mark, the Daily tiers; every price is `--color-money` since `D-209`, `D-226` | `наявний бренд`, `baseline.md` 5 | `#FADB58`, zone 2 | A5 |
| `--color-green` | `#33CC66` | success | `наявний бренд`, `baseline.md` 5 | `#25D562`, zone 2 | A5 |

### Text

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-text-hi` | `#FFFFFF` | high emphasis, figures | `наявний бренд`, `baseline.md` 5, 221 elements | `#FEFEFE`, zone 2 | A5 |
| `--color-text` | `#9F9F9F` | body in the rules carried from the grey screens; the body of v4 is `--color-text-soft` since `D-226` | `наявний бренд`, `baseline.md` 5, 940 elements; `рішення користувача`, `D-186`, over `#A5A5A5` (174) | `#9B9B9B`, zone 2 | A5 |
| `--color-text-muted` | `#9E9DB1` | secondary lines, meta, labels | `наявний бренд`, `baseline.md` 5; `рішення користувача`, `D-186`, over `#727B8C`, which fails AA on a card | not on the plate | A3, calm |
| `--color-field-edge` | `#CECED4` | the edge of a field or a checkbox, never text | `наявний бренд`, `baseline.md` 13.3, the checkbox edge; `рішення користувача`, `D-186` | not on the plate | A2 |

### Lines, proposed at step 6

The baseline draws a 1px line in five colours, `baseline.md` 13.5 point 6. The coloured Home needs two jobs, and these are proposed for them on the screen, `D-191`; the founder confirms or changes them, section 9 point 1.

| Variable | Value | Role | Origin | Attribute |
|---|---|---|---|---|
| `--color-line-soft` | `#262950` | a divider, the edge of a quiet surface | `наявний бренд`, `baseline.md` 13.2, the welcome dialog edge; proposed, `D-191` | A2, calm |
| `--color-line` | `#353446` | the edge of a control at rest | `наявний бренд`, `baseline.md` 13.2, the rail toggle edge; proposed, `D-191` | A2 |
| `--color-footer-edge` | `#65A3FF` | the 2px line across the top of the footer | `наявний бренд`, `baseline.md` 13.2 | A1 |

Not proposed: `#A5A5A5` and `#9F9F9F`, a grey line reads as the wireframe; `#332CD1`, saturated, it belongs to a field and fields are not on Home. Against the ground `#262950` is 1.42:1 and `#353446` 1.62:1: neither identifies a control alone, and none has to, every outlined control on Home carries its label.

### Rarity ladder

Read from the drop table of four case pages, `baseline.md` 13.4, rarest first. Which in-game rarity each step names is `[?]`: the plate's names are drawn, not read, and stay unused.

| Variable | Value | Origin | Attribute |
|---|---|---|---|
| `--color-rarity-1` | `#F6C915` | `наявний бренд`, `baseline.md` 13.4 | A4; never flat on a blue ground at the reveal, `references.md` section 5 |
| `--color-rarity-2` | `#D1273E` | `наявний бренд`, `baseline.md` 13.4 | A4 |
| `--color-rarity-3` | `#D22BCE` | `наявний бренд`, `baseline.md` 13.4 | A4 |
| `--color-rarity-4` | `#6B42B9` | `наявний бренд`, `baseline.md` 13.4 | A4 |
| `--color-rarity-5` | `#3955E8` | `наявний бренд`, `baseline.md` 13.4 | A4 |
| `--color-rarity-6` | `#305F8D` | `наявний бренд`, `baseline.md` 13.4 | A4 |
| `--color-rarity-7` | `#DDDDDD` | `наявний бренд`, `baseline.md` 13.4 | A4 |

### Contrast, measured

WCAG 2 ratios, computed from the values above. AA asks 4.5:1 for normal text, 3:1 for large text and for UI parts.

| Pair | Ratio | Reading |
|---|---|---|
| `#FFFFFF` on `#FB3F8A`, a white label on the pink button | 3.40 | fails AA for normal text; carried by `D-185` to step 8 |
| `#060A1E` on `#FB3F8A`, a dark label on the pink button | 5.78 | passes; the way out if step 4 takes it |
| `#FB3F8A` on `#060A1E` / on `#0F0E2B` | 5.78 / 5.53 | passes as text |
| `#FFFFFF` on `#060A1E` | 19.63 | passes |
| `#9F9F9F` / `#A5A5A5` on `#060A1E` | 7.42 / 7.97 | both pass |
| `#9F9F9F` on `#223660`, body on a raised panel | 4.50 | passes at the line |
| `#727B8C` on `#0F0E2B` | 4.41 | fails AA for normal text |
| `#FADA62` on `#060A1E` / `#0F0E2B` | 14.27 / 13.66 | passes |
| `#65A3FF` on `#060A1E` | 7.70 | passes |
| `#33CC66` on `#0F0E2B` | 8.92 | passes |
| `#7E2DC8` on `#060A1E` | 2.89 | fails even 3:1 |
| rarity on `#0F0E2B`: `#F6C915` 11.88, `#DDDDDD` 13.83, `#D22BCE` 4.45, `#D1273E` 3.64, `#3955E8` 3.25, `#305F8D` 2.81, `#6B42B9` 2.78 | | the last two fail 3:1 even as a mark; a rarity line in them needs its glow or a lighter edge to be seen |

---

## 4. Typography

| Variable | Value | Origin | Attribute |
|---|---|---|---|
| `--font-family` | `Roboto, sans-serif` | `наявний бренд`, `baseline.md` 5 and 13.1; Roboto only, `D-182` point 5 | A2, one piece |
| weight, body | 400 | `наявний бренд`, `baseline.md` 13.1, risk band labels and body lines | A5 |
| weight, rail and header items | 500 | `наявний бренд`, `baseline.md` 13.3 | A2 |
| weight, case names, tile prices, buttons | 700 | `наявний бренд`, `baseline.md` 13.1 and 13.3 | A2 |
| weight, the one action, drop table figures, hero lines | 900 | `наявний бренд`, `baseline.md` 13.1 and 13.3; game feel through scale in Roboto 900, `D-183` point 4 | A3, A4 |

The baseline uses 700 and 900 on buttons with no rule between them, `baseline.md` 13.5 point 3; which button takes which is a step 4 choice. The plate's specimen captions, 400, 700 and 900, are drawn and are not the source.

| Variable | Value | Job | Origin | Attribute |
|---|---|---|---|---|
| `--size-xl` | `40px` | case name, the screen title, weight 900 | `рішення користувача`, `D-187` | A3, A4 |
| `--size-l` | `24px` | section heading, a figure in a panel, weight 900 | `рішення користувача`, `D-187` | A2 |
| `--size-m` | `18px` | skin name on a card, the price on the act, weight 700 | `рішення користувача`, `D-187` | A4 |
| `--size-s` | `15px` | body, figures in a card, weight 400 | `рішення користувача`, `D-187` | A5 |
| `--size-xs` | `13px` | meta, labels, the peg | `рішення користувача`, `D-187` | A3 |
| `--size-action-label` | `20px` | the label of the one lit action, weight 900, large text | `рішення користувача`, `D-187` | A3 |

**No display face**, `D-182` point 5: the pack's two Google Fonts candidates per role are not drawn. **The type scale is 13, 15, 18, 24, 40**, `рішення користувача`, `D-187`: The baseline's thirteen sizes, `baseline.md` 13.5 point 4, brought to five, with scale carrying the game feel, A3 and A4.

---

## 5. Shape

The founder's direction: rounded, on a three step ladder, small, medium and large, `D-182` point 4, values taken from the baseline where it already rounds.

| Variable | Value | Origin | Attribute |
|---|---|---|---|
| `--radius-s` | `8px` | `наявний бренд`, `baseline.md` 13.2: 47 surfaces, the most frequent rounded value | A2 |
| `--radius-m` | `16px` | `наявний бренд`, `baseline.md` 13.2: the welcome dialog | A2 |
| `--radius-l` | `24px` | `рішення користувача`, `D-186`: a step of our own, the baseline has no larger panel radius; it closes an even ladder 8, 16, 24 | A2 |
| `--radius-pill` | `999px` | `наявний бренд`, `baseline.md` 13.2: every text button is a full pill, written both `25px` and `999px`; one spelling of one shape, `baseline.md` 13.5 point 2 | A2, A3 |

**The rounded side border in the rarity colour is out**, `D-189`: in by `D-183` point 2 and drawn at 4px by `D-187`, withdrawn by the founder on the drawn cards. Rarity is carried as light, section 6, and by **a 2px line in the rarity colour along the foot of every rarity surface**, `D-190`, the carrier the live feed tile already had, drawn as an inset shadow so it follows the radius.

| Variable | Value | Job | Origin | Attribute |
|---|---|---|---|---|
| `--size-action` | `56px` | the height of every button | `рішення користувача`, `D-187` | A2, A3 |
| `--size-rarity-line` | `2px` | the line in the rarity colour along the foot of a card, a Best drops tile, a showcase tile and a feed tile | `рішення користувача`, `D-190`; the feed tile, `D-59` | A4 |

---

## 6. Light and depth

The two glows were drawn on The stage and enter with it, `D-187`; the two rarity mixes and the lit stage enter with `D-188`. The two step depth was not drawn and stays open, section 9.

| Variable | Value | Job | Origin | Attribute |
|---|---|---|---|---|
| `--shadow-action` | `0 8px 36px rgba(251, 63, 138, .45)` | the glow of the one lit action | `рішення користувача`, `D-187`; technique S3 | A3 |
| `--shadow-glow` | `0 0 12px`, in the rarity colour | the glow of a rarity mark | `рішення користувача`, `D-187`; technique C1 | A4 |
| `--mix-rarity-tint` | `18%` of the rarity colour, rising from a card's foot to clear at 70 % | the rarity carried as light on a card, the showcase and Best drops | `рішення користувача`, `D-188` | A4 |
| `--mix-rarity-pad` | `42%` of the rarity colour, a radial pad under the skin | the skin lit by its own rarity | `рішення користувача`, `D-188` | A4 |
| `--mix-light-beam` | `24%` of the blue | the brightest beam from above, the banner and the case tile on hover | `рішення користувача`, `D-188`, moved from the stage CSS at step 6 | A3 |
| `--mix-light-soft` | `12%` of the blue | a soft beam, the glow behind a card or a figure | `рішення користувача`, `D-188`, moved at step 6 | A1 |
| `--mix-light-pad` | `55%` of the blue | the centre of the pad under a case | `рішення користувача`, `D-188`, moved at step 6 | A3 |
| `--shadow-item` | `0 4px 12px rgba(0, 0, 0, .5)` | an item lifted off its card | `наявний бренд`, `baseline.md` 13.2, the support button; proposed, `D-191` | A1 |
| `--shadow-panel` | `0 24px 48px -24px rgba(0, 0, 0, .7)` | a container over the ground: a dialog, a menu, the drawer | proposed, `D-191`; technique S2 | A1 |
| `--color-scrim` | `rgba(6, 10, 30, .72)` | the ground behind a dialog | the ground at 72 %, `D-191`; the grey screen drew black at 66 % | A3 |

- **One lit action per screen**, the pink primary with a glow of its own colour, A3, technique S3. Every other button is quiet.
- **Rarity glows**: a line in the rarity colour under the item, with a glow of the same colour, A4, techniques S4 and C1.
- **Two step depth**, a low shadow for an item and a softer one for a container, A1, technique S2. Not glass, `D-183` point 1.
- **The lit stage**, `D-188`: three beams from above in the blue, a pad with two rings under the case and a floor line, the case floating over its reflection. Its job is the hero, A3; the values live in the stage CSS until step 6 moves them into `design/_theme.css`.
- A glow or gradient with no job is slop, `D-183` point 1.

---

## 6a. Structure sizes, carried from the grey screen

Sizes of the frame the screens are laid out in. They are layout, owned by `wireframes/_wf.css`; where the baseline measured its own, the baseline's value enters, `D-191`.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--size-rail` | `250px` | the rail, open | `наявний бренд`, `baseline.md` 13, measured above 1440; the grey screen drew 220 |
| `--size-rail-collapsed` | `70px` | the rail, closed to icons | `наявний бренд`, `baseline.md` 13, measured at 1440 and below; the grey screen drew 64 |
| `--size-header` | `72px` | the header: one 56px button and 8px above and below | `D-191`; the baseline's is about 66 |
| `--size-bar` | `64px` | the bottom bar on mobile, an icon over a 13px label | `D-191`; the grey screen drew 56 |
| `--size-content` | `1220px` | the content column at the 1440 reference | `wireframes/_wf.css` |
| `--size-measure` | `68ch` | the longest line of prose | `wireframes/_wf.css` |
| `--size-tap` | `44px` | the smallest target | `wireframes/_wf.css`, WCAG 2.5.5 |

The case screen's stage frame, `--wf-frame-h`, enters with that screen at step 7.

---

## 7. Icon language

| What | Value | Origin | Attribute |
|---|---|---|---|
| Style | ~~line icons, one stroke weight, rounded caps and joins, no fills, on a square grid~~ **filled glyphs on a square grid, as the baseline draws them; a glyph its own filled set draws as a line (an arrow, the clock, the rail toggle, the crossed swords) stays a line** | `піксель плейта, зона 7`: ten line icons of one stroke; then `рішення користувача`, `D-193` and `D-227`, the census of stage 07 step 2 | A2 |
| Set | ~~Solar, Linear style, inline SVG~~ **Solar Bold, drawn as a CSS mask; mdi or a mark drawn for this project where Solar has no glyph for the job, filled like it** | the stage's named icon set, `dp-concept` dependencies; Bold since `D-193`, one style for every icon since `D-227` | A2 |
| Colour | text white or body grey at rest, pink when active | `піксель плейта, зона 7` and zone 8, the tabs | A3 |
| Count and behaviour | many, and interactive; an icon sits in a circle only where the circle is the control | `рішення користувача`, `D-183` point 1 | A1 |
| Carrier | `--icon-<name>` in `design/_theme.css`, a Solar SVG drawn as a CSS mask, so an icon takes the colour of the text around it | `D-191`: the grey renderer draws a placeholder and the copy may not add markup | A2 |
| Provider marks | Steam, Google, Discord and X in their own marks, `simple-icons`, on their own sign in buttons only; a third party's mark is not an icon of the language | `D-191`, after the critique found the Steam button empty, the category's best known scam | A5 |

---

## 8. UI tone

Dark and electric, never heavy, `CLAUDE.md` principle 4. Energy sits in the item and in the one action; the money is calm and legible, A3 and principle 3. Figures are white or gold in Roboto 900, with the chance and the age of a published figure beside the price at commitment, A5, technique C2. Game feel comes from the skins, their rarity colour, our own banner and case art, and scale, `D-183` point 4: banners and case art may be generated in our own style, skins never. Motion is stage 11.

**What on the plate is not product truth.** Its copy ("Turn pressure into profits", "Higher odds", "Play fair. Open smart. Clutch more.") breaks the voice and is not product copy; product strings come from `voice/docs/microcopy.md`. Its rarity names are drawn. Its mobile mock puts the logo in the header, which the navigation model forbids. Its banner lettering is not Roboto. Its own logo zone was rejected and replaced by `D-184`.

---

## 9. Open

These have more than one answer in the baseline, or none, and are the founder's or step 4's to settle. Nothing above assumes them.

Closed by `D-186` on 20 October 2026: body text `#9F9F9F`, muted text `#9E9DB1`, `#CECED4` for field edges only, `--radius-l` 24px; `#727B8C`, `#A5A5A5`, `#180A35` and `#7E2DC8` are left out of the palette until a screen needs them, the violet failing 3:1 as text.

Closed by `D-187` on 20 October 2026, the founder's pick of direction 2, The stage: type scale 13, 15, 18, 24, 40; one button height, 56px; the label on the pink white, 20px weight 900, large text 3.40:1; the rarity side border 4px with its glow, removed again by `D-189`. They enter `design/_theme.css` at step 6 with that origin.

1. **Still open from the baseline's contradictions,** `baseline.md` 13.5: six letter-spacings, five line colours, and two field values outside the palette (`#0F0D3E`, `#332CD1`). **Lines proposed on the coloured Home, `D-191`:** `#262950` for a divider and `#353446` for a control edge, section 3. The founder confirms them; letter-spacing and the two field values wait for a screen with a field.
2. **Spacing, proposed at step 5:** `--space-1` to `--space-7`, 4, 8, 12, 16, 24, 32, 56px, read from the gaps The stage drew, which also used 10, 14, 18 and 20. Shown on `concept.html` as proposed. **On the coloured Home since `D-191`**: the grey screen's five steps land on it, 4, 8, 16, 24 and 40, with 40 on 32, so sections stand 32 apart. The founder confirms or changes it there.
3. **Depth for items and containers,** the two step shadow of technique S2: **proposed on the coloured Home, `D-191`**, `--shadow-item` from the baseline's one shadow and `--shadow-panel` for a dialog, a menu and the drawer, section 6. The founder confirms them.

## 10. The baseline look on the coloured Home, `D-192`

**The founder's decision of 20 October 2026, on the first coloured Home:** "надо переделивать все, так чтоби єто було похоже прямо на деддискинс хотя би а потом уже отталкиваться что можно улучшить". So the copies in `design/` take the baseline's visual layer as it is: square surfaces, the pink pill filled or ghost, uppercase heads with a blue icon and a blue rule, cases floating with no plate, art in every hero slot, pink counters in the footer. **Ours stays ours:** the logo, every word, the art, and the pink `#FB3F8A` of `D-185`. The language of sections 4 to 6, `D-187` to `D-191`, stays on the stand as the record; an improvement returns to the Home one at a time, each by its own founder decision.

**Read, not remembered.** Every value below is a computed style of `the baseline site`, a public pre-login page opened on 20 October 2026, at 1440 and 390.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--size-unit` | `11px` | a countdown unit | `наявний бренд`, walk of 20 Oct 2026, banner-timer__countdown-unit |
| `--size-chip` | `12px` | a small button label, a case name on a phone | `наявний бренд`, walk of 20 Oct 2026, small-button, case-card__name at 390 |
| `--size-label` | `14px` | a case name, a button label, a description | `наявний бренд`, walk of 20 Oct 2026, case-card__name, game-preview__description |
| `--size-text` | `16px` | a mode name, a section line, a tier name, a large button | `наявний бренд`, walk of 20 Oct 2026, game-preview__name, header__description |
| `--size-title` | `20px` | a section title, a price | `наявний бренд`, walk of 20 Oct 2026, header__title, case-card__price |
| `--size-panel` | `24px` | the Daily cases heading | `наявний бренд`, walk of 20 Oct 2026, daily-case-progress-home__main-header |
| `--size-stat` | `30px` | a footer counter | `наявний бренд`, walk of 20 Oct 2026, statistic-score; 22px at 390 |
| `--size-btn-s` | `28px` | a small button | `наявний бренд`, walk of 20 Oct 2026, small-button |
| `--size-btn-m` | `40px` | a button: Sign in, Support, Available cases | `наявний бренд`, walk of 20 Oct 2026, sign-in-btn |
| `--size-btn-l` | `48px` | a large button: All cases | `наявний бренд`, walk of 20 Oct 2026, large-button |
| `--size-ticker` | `120px` | the live drop ticker | `наявний бренд`, walk of 20 Oct 2026, drops-live-feed |
| `--size-banner` | `340px` | the event banner at 1440 | `наявний бренд`, walk of 20 Oct 2026, banner-content |
| `--size-mode` | `160px` | a mode card | `наявний бренд`, walk of 20 Oct 2026, game-preview |
| `--size-daily` | `344px` | the Daily cases panel | `наявний бренд`, walk of 20 Oct 2026, daily-cases-bg |
| `--size-edge` | `2px` | the edge of a pill, filled or ghost | `наявний бренд`, walk of 20 Oct 2026, rose-button border |
| `--color-text-soft` | `#CECED4` | a description on a mode card; the body text of v4, `D-226` | `наявний бренд`, walk of 20 Oct 2026, game-preview__description |
| `--color-mode` | `#100F2C` | a mode card | `наявний бренд`, walk of 20 Oct 2026, game-preview |
| `--color-timer` | `rgba(2, 12, 23, .7)` | a countdown plate over art | `наявний бренд`, walk of 20 Oct 2026, banner-timer |
| `--color-risk-low` | `#33CC66` | a low-risk mark | `наявний бренд`, walk of 20 Oct 2026, risk-level__skull |
| `--color-risk-mid` | `#65A3FF` | a medium-risk mark | `наявний бренд`, walk of 20 Oct 2026, risk-level__skull |
| `--color-risk-high` | `#D22BCE` | a high-risk mark | `наявний бренд`, walk of 20 Oct 2026 drew #7E2DC8, 2.89:1, so rarity step 3 carries it |

**The art is ours, generated by Codex** on `gpt-5.6-terra`, founder decision of 20 October 2026: the Coldfront banner, four mode cards, the Daily cases panel and its five tier cases, in `design/concept/assets/home/`, each a `--art-*` variable in `design/_theme.css`. No text in any image, no skin, no real likeness; skins stay the real Steam images.

**The baseline's own art is never published.** It carries its brand, a coin name, case names and characters that are theirs. A local reference build puts it in our slots only to tune this layer against the live product, served from outside the repo and never pushed.

**Second pass, `D-193`.** The founder, on the Home of `D-192`: "пока что чуть лучше но ми очень далеко от крутого вида", with ten screenshots of the baseline. What the computed styles did not carry is read as pixels from those screenshots; icons are Solar Bold plus four mode marks drawn after the baseline's.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--color-mode-glow` | `#2B1751` | the purple glow at the art end of a mode card, the glow in the counter band | `наявний бренд`, founder screenshots of 20 Oct 2026, pixel at the foot of the Cases card |
| `--color-skull-off` | `#272D3F` | a risk skull not lit | `наявний бренд`, founder screenshots of 20 Oct 2026, pixel, the dark skulls under a case |
| `--shape-hex` | a dashed hexagon, SVG | the hexagon behind a drop in the ticker | `наявний бренд`, founder screenshots of 20 Oct 2026, the ticker drop, drawn as an outline |
| `--art-coin` | three radial gradients in `--color-gold` | the coin beside a price: a gold disc, a struck rim, a highlight | `наявний бренд`, founder screenshots of 20 Oct 2026, the coin beside a price, drawn in our gold |
| `--art-daily-bg` | `assets/home/daily-bg.webp` | the Daily cases panel, violet with a rifle silhouette as a watermark | Codex image generation, `D-192`, redrawn `D-193` |
| `--art-case-ironbound`, `-warsteel`, `-coldfront`, `-nightfall` | `assets/home/case-*.webp` | a case cover in the case grid, a drop from the feed laid over it | Codex image generation, `D-193` |
| `--art-mode-*` | `assets/home/mode-*.webp` | a mode card, redrawn cut out in gold and violet | Codex image generation, `D-192`, redrawn `D-193` |
| `--icon-box`, `-battle`, `-target`, `-arrow-up` | drawn marks | the four modes, wherever they appear | drawn for `D-193` after the baseline's chest, swords, crosshair and rising bars |
| `--icon-skull`, `--icon-rail` | `mdi:skull`, `mdi:menu-open` | a risk mark, the rail toggle | `D-193` |
| every other `--icon-*` | Solar Bold | the same jobs as before | `D-193`, was Solar Linear |

**Third pass, `D-194`.** A deep walk of the baseline's Home on 20 October 2026, every element with its pseudo-elements: the values below are its computed styles. The covers and mode arts are Codex variations of the baseline's own, at the founder's ask, with our emblems.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--size-content` | `1298px` | the content column at 1440 | `наявний бренд`, deep walk of 20 Oct 2026, the game previews and section heads; the grey screen drew 1220 |
| `--size-drop` | `92px` | a drop in the ticker | `наявний бренд`, deep walk, cases-live-tape-item |
| `--size-micro` | `9px` | a skin name in the ticker | `наявний бренд`, deep walk, cases-live-tape-item h6 |
| `--shape-hex-fill`, `--shape-hex-line` | The baseline's hexagon geometry, 136 by 118 | the hexagon behind a drop, filled with its rarity, three lines, one dashed | `наявний бренд`, deep walk, hex-bg |
| `--color-mode-light` | `#7E2DC8` | the light behind a mode card art | `наявний бренд`, deep walk, game-preview::before |
| `--blur-mode` | `40px` | its blur | `наявний бренд`, deep walk, game-preview::before filter |
| `--color-card-hover` | `#17144B` | a case card under the pointer | `наявний бренд`, deep walk, case-card:hover |
| `--art-case-*` | `assets/home/cover-*.webp` | a case cover | Codex image generation, `D-194`, a variation of a baseline case |
| `--art-mode-*` | `assets/home/mode-*.webp` | a mode card | Codex image generation, `D-194`, a variation of the baseline mode art |
| `--art-banner-bg`, `-case`, `-operator`, `-shards` | `assets/home/banner-*.webp` | the event banner in four layers | Codex image generation, `D-194` |
| `--art-daily-1` to `-5` | `assets/home/daily-*.webp` | the five Daily tiers | Codex image generation, `D-194`, a variation of the baseline tiers |
| `--icon-sound`, `--icon-mute` | drawn marks | the sound control in the rail | drawn for `D-194` |
| `--motion-drift`, `-float`, `-sway`, `-snow` | `26s`, `6s`, `9s`, `14s` | the banner's motion | `підібрано під характер`, `D-194`; motion is not inherited |

**Fourth pass, `D-195`.** One new value; the rest of the pass reuses values already in this section.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--art-banner-title` | `assets/home/banner-title.webp` | the event title drawn as a logotype in ice; the typed title stays in the page | Codex image generation, `D-195` |

**Fifth pass, `D-196`.** Two new values; the four case covers keep their variables and get new pictures.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--art-ground` | `assets/home/ground.webp` | the page ground at the top of the page, two operators in the dark, faded into `--color-ground` | Codex image generation, `D-196`, a variation of the baseline ground |
| `--color-footer-base` | `#030214` | the strip under the footer, the copyright row | `наявний бренд`, walk of 22 Oct 2026, computed style, copyright-wrapper |
| `--art-case-*` | `assets/home/cover-*.webp` | a case cover, redrawn gritty and themed | Codex image generation, `D-196`, variations of the baseline's featured cases |

**Sixth pass, `D-197`.** No new value. One value takes a new job, four pictures are redrawn, six icons join the set.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--radius-m` | `16px`, unchanged | now also the corner of every card on Home: mode cards, case cards, the Daily panel, the facts, the prose plate | `рішення користувача`, `D-197`, "давай сделаем закругления"; the value stays `наявний бренд`, baseline.md 13.2 |
| `--art-mode-*` | `assets/home/mode-*.webp` | the four mode arts, one family with the case covers | Codex image generation, `D-197`, redrawn on the founder's mark |
| `--icon-gift`, `--icon-dollar`, `--icon-swap`, `--icon-users-bold`, `--icon-user-check` | Solar Bold `gift`, `dollar-minimalistic`, `transfer-horizontal`, `users-group-rounded`, `user-check-rounded` | the rail's later rows and the footer counters | `D-197`, after the baseline's icon of the same job |
| `--icon-diamond` | MDI `diamond-stone` | the rail's Giveaways row | `D-197`, after the baseline's icon of the same job |

`--icon-users-bold` and `--icon-user-check` left the set in `D-200`: the counters went back to the outline people marks, as the baseline draws them.

**Seventh pass, `D-198`.** One new value and five icons.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--art-case-emberforge` | `assets/home/cover-emberforge.webp` | the fifth featured cover, black iron and embers, a real Desert Eagle Blaze across it | Codex image generation, `D-198`, drawn in the family of the four covers |
| `--icon-facebook`, `--icon-youtube`, `--icon-instagram`, `--icon-tiktok`, `--icon-telegram` | Simple Icons, the providers' own marks | the rail's social row, with `--icon-x` and `--icon-discord` already in the set | `D-198`, the baseline's seven channels named by the founder |
| `--color-line` | `#353446`, unchanged | now also the foot of the rail's right edge, a 1px line rising from `--color-card-2` | the founder's screenshot of the baseline rail, 22 Oct 2026, the line read from `#0F0D2B` at the top to `#343245` at the foot |

**Eighth pass, `D-200`.** One new value, one picture redrawn.

| Variable | Value | Job | Origin |
|---|---|---|---|
| `--art-daily-bg` | `assets/home/daily-base.webp`, was `daily-bg.webp` | the Daily panel's base layer only: three rifles in the dark, navy to magenta | Codex image generation, `D-200`, after the baseline panel's base layer |
| `--art-daily-rings` | `assets/home/daily-rings.svg` | the Daily panel's ring layer: two rings and the turning arrows of the daily reset | drawn for `D-200` after the baseline panel's layering, walk of 22 Oct 2026 |
| `--color-gold` | unchanged | now also the rail: the mark of a live row under the pointer, and the 3px left edge and mark of the current row | the founder's captures of the baseline rail, 22 Oct 2026 |

**`D-201`.** No new value. `--icon-arrow-up`, the drawn bars-up mark, is redrawn closer to the baseline's: three short bars and a narrow column ending in a wide arrowhead. `--color-footer-edge` is back on the counters' top edge, where `D-200` had replaced it by mistake.

**`D-204`.** One new value. `--icon-pistol`, mdi:pistol, the mark of the items held beside their value in the header, as the baseline's, founder screenshot of 30 Oct 2026. `--color-card-hover` now also paints the header's money plate, the screenshot's `#16144B`; `--color-green` now also paints the 5% badge on Add funds, the screenshot's `#34CC66`.

**`D-205`.** Nine pictures, no new variable. Round flags `gb de cn fr pl tr pt es ua` from circle-flags 2.7.0 (MIT), inlined in `design/_theme.css` as data URIs from the source files in `assets/flags/`, drawn at 20px beside each language, read through `--flag` set by `[data-flag]`; the country each code names is the founder's pick.

**`D-215`.** One new value, four changed, all for WCAG AA on the coloured screens, measured with the stripes over them. `--v4-fair-blue` `#0B6A8C`, the provably fair blue's light end on both Every round plates, was `#0F7EA6`. `--v4-mode-upgrade` starts at `#9E6905`, was `#B57A06`. The Cases mode card starts at `--btn-fill` instead of `--color-pink`, that card only. The Before you spend stub runs `--color-pink` → `--btn-fill` → `#B8044E`, was `#FF5C9C` → `--color-pink` → `#D42C76`. Daily Elite's `--g1` is `#B07806`, was `#C98A0A`. Origin: rule, WCAG 2.2 AA, stage 06 critique of 10 November 2026, rows 3 to 7.

## 11. v4's values, folded into `design/_theme.css` at stage 07, `D-224`

**Date:** 12 November 2026. Stage 07 opens by the fold `D-222` named as its first step. v4's 58 `:root` declarations in `design/v4/theme.css` and nine block sheets beside it moved into `design/_theme.css`, part 1, renamed by kind, every value byte for byte: 53 names, four pairs merged where the two values were identical, `--gradient-*` declared as a kind of its own, two values written as the variable they already were (`--color-rare-gold` is `--color-rarity-1`, `--radius-tile` is `--radius-card`). No value changed: the computed style of every element on the 29 v4 pages at 1440 and 375 was recorded before and after and compared, `D-224`.

**Two jobs with two answers, named, not settled.** `--size-banner-v4` 440px and `--size-banner` 340px are the event banner's height in v4 and in direction 2; `--size-drop-v4` 104px (86px under 600px) and `--size-drop` 92px are a live drop's width. One of each pair goes when `_theme.css` moves to `design/kit/kit.css` at step 3, as a value decision of its own.

**Origins.** Every row names its record. The rows marked below take their origin from the header of the sheet the value stood in, which names the founder's pick for the whole block, rather than from a comment on the value itself; they are the candidates the pack asks to list for checking.

| Variable | Value | Origin | Was |
|---|---|---|---|
| `--color-button` | `#DF055C` | a filled button's pink, founder pick A of 4 Nov 2026, buttons-lab.html Contrast: the brand pink var(--color-pink) carried a 13px white label at 3.1:1 on its light stripe, this deeper pink of the same hue at 4.5:1, WCAG AA; the brand pink itself is ... | `--btn-fill`, buttons.css |
| `--color-button-hover` | `#E8156A` | the fill a little lighter under the pointer, founder of 4 Nov 2026: "на кнопках при ховери фон робити трохи світлишим"; the label holds 4.4:1 on it and 4.1:1 on its light stripe while hovered, under AA's 4.5, accepted as the cost | `--btn-fill-hover`, buttons.css |
| `--color-fair` | `#0B6A8C` | the light end of the provably fair blue, Every round on Home and in the footer; was #0F7EA6, where white 13px sat at 3.3 to 3.9:1 under the plates' stripes; #0B6A8C holds white at 4.9:1 with the stripes over it, stage 06 critique of 10 Nov 2026, rows 4 and ... | `--v4-fair-blue`, theme.css |
| `--color-tile` | `#0B0A22` | the rail's tile fill, 31 Oct 2026, a dark near the page ground; рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 **Origin read from the sheet's header, not from the value.** | `--v4-tile-bg`, theme.css |
| `--color-risk-extreme` | `#FF4D3D` | the fourth band of the risk bolts, founder of 2 Nov 2026 in case-tiles.css: "4 штуки: Low, Medium, High и Extreme"; D-209; no case carries it yet, its threshold not decided **Origin read from the sheet's header, not from the value.** | `--color-risk-extreme`, case-tiles.css |
| `--color-rare-gold` | `var(--color-rarity-1)` | the rare drop's colour, --color-rarity-1, the top of the ladder, written as its variable since D-224; підібрано під характер, D-209 rare drops of 1 Nov 2026 | `--rd-gold`, rare-drops.css |
| `--color-rare-fire` | `#FF5A2E` | ember, as Emberforge's light in v4; підібрано під характер, D-209 rare drops of 1 Nov 2026 | `--rd-fire`, rare-drops.css |
| `--color-rare-zap` | `#8FD3FF` | lightning, --color-blue lifted; підібрано під характер, D-209 rare drops of 1 Nov 2026 | `--rd-zap`, rare-drops.css |
| `--color-rail-icon-red` | `color-mix(in srgb, var(--color-rarity-2) 72%, var(--color-text-hi))` | the rarity red lifted until it holds on a dark tile, as the Showdowns card's colour; підібрано під характер, D-209, the side menu's icons | `--ri-red`, rail-icons.css |
| `--color-rail-icon-cyan` | `color-mix(in srgb, var(--color-blue) 70%, var(--color-text-hi))` | a gem's cold light, from the secondary accent; підібрано під характер, D-209, the side menu's icons | `--ri-cyan`, rail-icons.css |
| `--color-plate-r1-a` | `#9E6905` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r1-a`, theme.css |
| `--color-plate-r1-b` | `#B4400F` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r1-b`, theme.css |
| `--color-plate-r2-a` | `var(--color-rarity-2)` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r2-a`, theme.css |
| `--color-plate-r2-b` | `#7A0F22` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r2-b`, theme.css |
| `--color-plate-r3-a` | `#A62BC4` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r3-a`, theme.css |
| `--color-plate-r3-b` | `#4A1260` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r3-b`, theme.css |
| `--color-plate-r4-a` | `var(--color-rarity-4)` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r4-a`, theme.css |
| `--color-plate-r4-b` | `#2E1A63` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r4-b`, theme.css |
| `--color-plate-r5-a` | `var(--color-rarity-5)` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r5-a`, theme.css |
| `--color-plate-r5-b` | `#1B2A8F` | one end of a rarity tier's plate, the round cards read by proof-home.js and case-blocks.js; stage 06 critique of 10 Nov 2026, row 15, D-215 | `--v4-plate-r5-b`, theme.css |
| `--size-banner-v4` | `440px` | the banner at 1440; comp B, founder pick, the scene needs room for title, countdown and button stacked on its left; рішення користувача, D-209; the same job as --size-banner, 340px, direction 2: one of the two goes at step 3, D-224 | `--v4-banner-h`, theme.css |
| `--size-drop-v4` | `104px` | a live drop tile; comp B, founder pick, a dark card round the hexagon; 124px until the founder, "карточки сделать меньше, сейчас они сильно много места занимают"; рішення користувача, D-209; the same job as --size-drop, 92px, direction 2: one of the two ... | `--v4-drop`, theme.css |
| `--size-tile` | `42px` | the rail tile's height; рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 **Origin read from the sheet's header, not from the value.** | `--v4-tile-h`, theme.css |
| `--size-button-l` | `52px` | рішення користувача, D-209 update of 2 Nov 2026, buttons.css: "кнопки везде сделать одинаковые ... большая средняя и маленькая" **Origin read from the sheet's header, not from the value.** | `--btn-l`, buttons.css |
| `--size-button-m` | `40px` | рішення користувача, D-209 update of 2 Nov 2026, buttons.css, the medium button **Origin read from the sheet's header, not from the value.** | `--btn-m`, buttons.css |
| `--size-button-s` | `32px` | рішення користувача, D-209 update of 2 Nov 2026, buttons.css, the small button **Origin read from the sheet's header, not from the value.** | `--btn-s`, buttons.css |
| `--radius-card` | `12px` | card and banner corner; comp A and B, founder pick; рішення користувача, D-209 | `--v4-radius`, theme.css |
| `--radius-tile` | `var(--radius-card)` | the tile's corner is the card's; рішення користувача, D-209 | `--v4-tile-radius`, theme.css |
| `--radius-button` | `12px` | рішення користувача, D-209 update of 2 Nov 2026, "одинаковые по закруглениям"; 10 to 12px by the founder on 11 Nov 2026 of 8, 10 and 12: "10 I don't like", D-218 **Origin read from the sheet's header, not from the value.** | `--btn-radius`, buttons.css |
| `--shadow-button` | `0 4px 14px rgba(223, 5, 92, .32)` | the filled button's glow under the pointer, in --color-button; рішення користувача, D-209 update of 4 Nov 2026, buttons-lab.html **Origin read from the sheet's header, not from the value.** | `--btn-glow`, buttons.css |
| `--shadow-tile-edge` | `inset 0 0 0 1px rgba(255, 255, 255, .05)` | the tile's hairline, white at 5 %, read off the rail's tile, 31 Oct 2026; рішення користувача, D-209, the side menu's tile marked OK by the founder on 4 Nov 2026 **Origin read from the sheet's header, not from the value.** | `--v4-tile-edge`, theme.css |
| `--motion-ease-pop` | `cubic-bezier(.34, 1.56, .64, 1)` | a lift that overshoots and settles; підібрано під характер, design principle 2 | `--v4-ease-pop`, theme.css |
| `--motion-rail-icon` | `.95s` | one story; longer than a state change because it is the event, shorter than a wait; підібрано під характер, design principle 2; D-209, the side menu's icons | `--ri-play`, rail-icons.css |
| `--motion-ease-rail-icon` | `cubic-bezier(.3, .7, .3, 1)` | підібрано під характер; the side menu's icons, D-209 | `--ri-ease`, rail-icons.css |
| `--motion-rare-drop` | `4s` | one landing and its afterglow, then again; підібрано під характер, long enough to watch, short enough to compare; D-209 rare drops of 1 Nov 2026 | `--rd-loop`, rare-drops.css |
| `--gradient-mode-cases` | `linear-gradient(120deg, var(--color-pink), #8E2BC9)` | pink to violet; comp A, founder pick; from --color-pink to a violet between rarity 3 and 4 | `--v4-mode-cases`, theme.css |
| `--gradient-mode-battles` | `linear-gradient(120deg, var(--color-rarity-5), #1B2A8F)` | blue; comp A, founder pick; from --color-rarity-5 | `--v4-mode-battles`, theme.css |
| `--gradient-mode-showdowns` | `linear-gradient(120deg, var(--color-rarity-2), #7A0F22)` | red; comp A, founder pick; from --color-rarity-2 | `--v4-mode-showdowns`, theme.css |
| `--gradient-mode-upgrade` | `linear-gradient(120deg, #9E6905, #B4400F)` | gold to orange; comp A, founder pick; from --color-rarity-1, darkened until white type holds on it: #B57A06 held white 12px at 3.65:1, so the gold end went to #9E6905, 4.7:1, stage 06 critique of 10 Nov 2026, row 6 | `--v4-mode-upgrade`, theme.css |
| `--gradient-panel` | `linear-gradient(180deg, #120F33, #0B0A22 60%, #08071C)` | the footer's own panel, footer I of 3 Nov 2026; the rail's panel took it too as a trial and kept it on 4 Nov 2026, founder: "более темний мне больше нравится как в футере давай поставим на главной в боковом меню", D-209; the rail was ... | `--v4-panel-ground`, theme.css |
| `--gradient-stripes` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .09) 0 8px, transparent 8px 16px)` | faint diagonal stripes on a filled button; comp A and C, founder pick; also the section headings' tile, heading-home.css, founder of 2 Nov 2026: "о вот это прикольно смотрится - берем" | `--v4-stripes`, theme.css |
| `--gradient-button-stripes` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .1) 0 14px, transparent 14px 28px)` | the stripes of a filled button; рішення користувача, D-209 update of 2 Nov 2026, buttons.css **Origin read from the sheet's header, not from the value.** | `--btn-stripes`, buttons.css |
| `--gradient-button-sheen` | `linear-gradient(105deg, transparent 42%, rgba(255, 255, 255, .26) 50%, transparent 58%)` | the light that crosses a filled button under the pointer; рішення користувача, D-209 update of 4 Nov 2026, buttons-lab.html **Origin read from the sheet's header, not from the value.** | `--btn-sheen`, buttons.css |
| `--shape-hex-outer` | `SVG mask, data URI` | the outer two of --shape-hex-line, the same paths; рішення користувача, D-209, founder of 31 Oct 2026: "как у нас сейчас плюс как на дедди скинс подложку для скинов"; also the rare drops' hexagon, rare-drops.css | `--v4-hex-outer`, theme.css |
| `--shape-hex-inner` | `SVG mask, data URI` | the inner line of --shape-hex-line, drawn a little heavier to carry the gradient; рішення користувача, D-209, founder of 31 Oct 2026: "самый внутренний бордер сделаем градиентом" | `--v4-hex-inner`, theme.css |
| `--shape-feed-ring` | `SVG mask, data URI` | a live drop's ring and its light in one mask, no filter; технічне рішення, the performance pass of 10 Nov 2026, D-214 **Origin read from the sheet's header, not from the value.** | `--v4-feed-ring`, theme.css |
| `--shape-ring-mask` | `SVG mask, data URI` | the ring a rare mark's current runs round; рішення користувача, D-214, rare-mark.css, founder of 10 Nov 2026 **Origin read from the sheet's header, not from the value.** | `--rm-ringmask`, rare-mark.css |
| `--shape-hex-glow` | `SVG mask, data URI` | the ring's light on W7's band and reel cards in one mask; технічне рішення, the performance pass of 10 Nov 2026, D-214 **Origin read from the sheet's header, not from the value.** | `--v4-hex-glow`, case-stage.css |
| `--shape-case-mark` | `SVG mask, data URI` | the reel's pointer, a cut chevron in the pink; рішення користувача, D-213, stage-lab.html rows H to J: "стрелочки сделай интереснее, визуальнее" **Origin read from the sheet's header, not from the value.** | `--v4c-mark`, case-stage.css |
| `--icon-heart` | `SVG mask, data URI` | the favourite's heart and its burst; рішення користувача, D-209 update of 2 Nov 2026, round 4 **Origin read from the sheet's header, not from the value.** | `--v4-heart`, case-tiles.css |
| `--icon-crown` | `SVG mask, data URI` | the rare drop's crown, the golden orbit tier; рішення користувача, D-209 rare drops of 1 Nov 2026 **Origin read from the sheet's header, not from the value.** | `--v4-crown`, rare.css |
| `--icon-bolt` | `SVG mask, data URI` | the risk bolts, founder of 2 Nov 2026: "черепа нам ни к чему, давай сделаем молнии"; D-209 **Origin read from the sheet's header, not from the value.** | `--icon-bolt`, case-tiles.css |
| `--icon-question` | `SVG mask, data URI` | the FAQ heading's mark; рішення користувача, D-209 update of 2 Nov 2026, round 8 **Origin read from the sheet's header, not from the value.** | `--icon-question`, faq-home.css |

53 rows; one more value, `--size-drop-v4: 86px` under 600px, stands in a media block after part 1. ~~Section 7 still names Solar Linear; the icon style is chosen in step 2's control census, `D-222`.~~ **Section 7 names Solar Bold since step 2's census, `D-227`.**

## 12. Stage 07 step 1, the founder's answers, `D-226`

**Date:** 18 November 2026. `DESIGN.md` was formed from the code of v4 and set against this draft; where the code and the draft parted, the founder chose on a page of before and after crops: "Да все как ти рекомендуешь, только А3 - блюр оставляем мне так больше нравится". The rows of section 3 above were brought in line in place; what else follows from the answers:

| What | Answer | Where it lands |
|---|---|---|
| Body text | `#CECED4`, `--color-text-soft`, 12.5:1 on the ground against 7.4:1 for `#9F9F9F` | section 3, the two text rows; the carried grey rules keep `--color-text` until step 3 |
| Up and down | `#35E08A` up, `#FF5C7A` down, today literals in four block sheets | two variables declared at step 3, `--color-up` and `--color-down`, with this decision as their origin |
| Weight 800 | moved to 900, the weight of every other figure | six rules in `design/v4/case-blocks.css` and `case-stage.css`; 0 text runs at 800 on the twelve measured loads after the change |
| Pink and gold roles | the act fills with `--color-button` `#DF055C`, every price is `--color-money` `#FFC44D` | section 3, the pink and gold rows; both values were already the founder's, `D-209` |
| The radii and the button heights | one ladder each, value by value with the founder | step 3; 17 radii and six button heights render today, `DESIGN.md` "Shapes" and "Components" |
| Blur on a text plate | kept | `concept.md` section 1, point 1, now with a named exception |
| Stripes | the texture mark of the act and of a section heading, nowhere else | `concept.md` section 1, point 2 |


## 13. Stage 07 step 2, the icon census, `D-227`

**Date:** 18 November 2026. The control census read the 40 `--icon-*` values in `design/_theme.css` on one rendered sheet; the founder chose one style for them, option A on the review page of step 2: "Да в целом то все ок", then "да давай делать".

| What | Answer | Where it lands |
|---|---|---|
| Style | filled everywhere, section 7 | 30 icons already filled; 5 line glyphs stay lines, as their own filled sets draw them: `--icon-send`, `--icon-swap`, `--icon-history`, `--icon-rail`, `--icon-battle` |
| `--icon-close` | Solar close-circle-bold in place of close-circle-linear | step 3, in `design/kit/kit.css`, one variable changed with its origin |
| `--icon-diamond` | the filled mdi twin of diamond-stone | step 3, the same way |
| `--icon-target`, `--icon-users`, `--icon-pulse` | redrawn as filled marks after the baseline's same jobs, their motion kept | step 4 at the latest, with the visuals; done at step 4, `D-233`, section 20 |

## 14. Stage 07 step 3, the move into the kit

**Date:** 18 November 2026. `design/_theme.css` moved to `design/kit/kit.css` by `git mv`, its bytes identical at the move (sha1 `ea09d47f7b22` on both sides). No variable was renamed and no value changed. Three things had to follow the file, and each is a path, not a value:

| What | Where | Why |
|---|---|---|
| 49 asset paths `url(concept/...)` became `url(../concept/...)` | `design/kit/kit.css`, 23 lines in `:root` and the rules that draw the art | a relative path resolves from the sheet's folder, now `design/kit/`; the files are the same ones in `design/concept/assets/` |
| 3 paths the same way | `design/v4/rare.css`, the rare marks' art | its custom properties were resolved against the old folder of the theme sheet; `../concept/` resolves the same from `design/kit/` and `design/v4/` |
| 36 links `_theme.css` became `kit/kit.css` | every page in `design/` that loaded the sheet: v2, v3, v4 and its labs, the first copies, the concept stand | the pack moves the seeded screens onto kit classes at step 5; a dead link until then would have left 36 published pages unstyled |

**Proof.** Every one of the 37 pages that load the sheet was measured before and after: no request fails, and 33 pages plus all twelve seeded loads (Home and the case screen, guest, signed in, a gain, a loss, at 360 and 1440) render pixel for pixel the same. The four that differ differ by the same amount between two captures taken before the move, from their own motion. The before captures are kept on disk in `_archive/stage07-before/` with the script that took them, out of the published site, which carries only what a page cites (`D-223`).


## 15. Stage 07 step 3, batch 1, the atoms: new variables, `D-228`

**Date:** 19 November 2026. The kit's atoms read every value from `:root`, and v4 drew many of them as literals in its block sheets. Each literal an atom needs became a variable at the end of `:root` in `design/kit/kit.css`, with the value v4 draws, its origin and the component that needs it. `--radius-xs` and the button heights are the founder's answers on the ladders page; `--color-up` and `--color-down` are `D-226` row B2; the rest are listed here for the founder at the batch's gate, and a value the founder changes is changed in its one variable.

| Variable | Value | Origin, as in the file | Needed by |
|---|---|---|---|
| `--radius-xs` | `4px` | thin lines and small marks; рішення користувача, D-228, the corner ladder 4 8 12 16 24, option A | thin lines, check box, close bars |
| `--color-up` | `#35E08A` | a figure that went up, the net of a gain; рішення користувача, D-226 row B2, was a literal in four v4 block sheets | Figure, up |
| `--color-down` | `#FF5C7A` | a figure that went down; рішення користувача, D-226 row B2, was a literal in four v4 block sheets | Figure, down; refusal note; invalid field |
| `--color-button-ghost` | `rgba(11, 10, 34, .55)` | the ghost button's fill, the tile at 55 %; рішення користувача, D-209 update of 2 Nov 2026, buttons.css | Button, ghost; Segmented, not chosen |
| `--color-button-ghost-hover` | `rgba(223, 5, 92, .2)` | the ghost under the pointer, the button pink at 20 %; рішення користувача, D-209 update of 4 Nov 2026, buttons.css | Button, ghost under the pointer; Status steps, now |
| `--shadow-button-ghost` | `0 4px 14px rgba(223, 5, 92, .2)` | the ghost's glow under the pointer; рішення користувача, D-209 update of 4 Nov 2026, buttons.css | Button, ghost |
| `--shadow-button-press` | `0 2px 8px rgba(223, 5, 92, .3)` | pressed, the glow tightens; рішення користувача, D-209 update of 4 Nov 2026, buttons.css | Button, pressed |
| `--color-disabled` | `rgba(150, 160, 215, .14)` | the wash of a control that is busy; buttons.css; D-58 keeps controls live, so it shows only while a round rolls | Button, busy |
| `--shadow-edge` | `inset 0 0 0 1px rgba(255, 255, 255, .07)` | the inner hairline of a plate, a FAQ row, a chip; v4 drew .05 to .08 for the one role, D-228 takes .07, the header plate's and the FAQ row's | plates, FAQ row, chips, fields |
| `--color-veil` | `rgba(6, 8, 24, .78)` | a dark plate over art, the header's money plate; account-home.css, рішення користувача, D-209 | Favourite toggle; the money plate (molecule batch) |
| `--color-veil-soft` | `rgba(6, 8, 24, .45)` | the close button's see-through tile; buttons.css, founder of 3 Nov 2026 | Button, close |
| `--color-error` | `#FF4D6A` | the close cross under the pointer; buttons.css, founder of 3 Nov 2026: "крестик становится красным" | Button, close under the pointer |
| `--color-badge-ink` | `#3A2600` | рішення користувача, D-209; the text on a gold badge; account-home.css, the 5 % bonus badge | Badge on gold |
| `--gradient-row` | `linear-gradient(180deg, #16133C, #100E2E)` | a FAQ row's fill; faq-home.css, D-209 round 8 | Disclosure |
| `--shadow-avatar` | `0 0 0 1px rgba(255, 255, 255, .12)` | рішення користувача, D-209; an avatar's ring; account-home.css | Avatar |
| `--shadow-avatar-s` | `0 0 0 1px rgba(255, 255, 255, .25)` | рішення користувача, D-209; a 16px avatar's ring, stronger to read at that size; the ticker, v4 theme | Avatar, small |
| `--size-hairline` | `1px` | технічне рішення; a hairline rule or ring; the 1px of every inset edge the screens draw | every 1px edge |
| `--tracking-caps` | `.06em` | the letter spacing of an uppercase button label; buttons.css, D-209 update of 2 Nov 2026 | Button label |
| `--tracking-label` | `.08em` | наявний бренд, DESIGN.md typography; an uppercase field label or key; DESIGN.md typography, label | key, field label, status badge |
| `--size-button-l-pad` | `28px` | рішення користувача, D-209; the large button's side padding; buttons.css | Button, large |
| `--size-button-m-pad` | `20px` | рішення користувача, D-209; the medium button's side padding; buttons.css | Button, medium |
| `--size-button-s-pad` | `14px` | рішення користувача, D-209; the small button's side padding; buttons.css | Button, small |
| `--size-badge` | `16px` | рішення користувача, D-209; a badge's height; account-home.css | Badge |
| `--size-avatar-s` | `16px` | рішення користувача, D-209; the ticker's avatar; v4 theme | Avatar, small |
| `--size-avatar-m` | `32px` | рішення користувача, D-209; the header's avatar; account-home.css | Avatar |
| `--size-close` | `40px` | рішення користувача, D-209; the close button; buttons.css. Changed 36 to 40 by founder pick `D-232`: v4's sign in dialog draws it 40 by 40 (signin-home.css .sd-close) | Button, close |
| `--size-row` | `64px` | рішення користувача, D-209; a FAQ row's height on a desktop; faq-home.css | Disclosure |
| `--size-mark` | `28px` | рішення користувача, D-209; the plus and minus mark of a FAQ row; faq-home.css | Disclosure mark |
| `--size-check` | `20px` | підібрано під характер; a checkbox or radio box; the fav glyph's size, case-tiles.css, so a box reads as one size with the icons | Checkbox, Radio, Range, Status steps |
| `--size-switch-w` | `40px` | a switch's track; підібрано під характер, the medium button's height laid flat | Switch |
| `--color-edge-open` | `color-mix(in srgb, var(--color-pink) 60%, transparent)` | рішення користувача, D-209 round 8; an open FAQ row's edge, the pink at 60 %, faq-home.css | Disclosure, open |
| `--size-switch-h` | `24px` | a switch's track height; підібрано під характер, the check box plus its 2px edges | Switch |

One value moved on the way and is named rather than hidden: v4 drew the inner hairline of a plate at .05, .06, .07 and .08 alpha for the same role; `--shadow-edge` takes .07, the header plate's and the FAQ row's.


## 16. Stage 07 step 3, the kit holds only v4's language, `D-229`

**Date:** 19 November 2026. The founder found the kit's showcase "like the screens but not them": an old coin, old case art, two kinds of checkbox, a browser range. The cause was the sheet itself: `kit.css` carried direction 2 and v4 together, as `D-224` had left them until step 3 chose. The founder chose "все как ти рекомендуешь".

| What | Where it went | Proof |
|---|---|---|
| The whole sheet as it moved, with direction 2's values and art | `design/archive/theme-d2.css`, a byte copy of commit `d1a84a4` under a three line header | the 7 pages that record direction 2 (`design/index.html`, `index-account.html`, `v2-a`, `v2-b`, `v2-c`, `v3`, `concept/concept.html`) and the 27 v4 labs load it and render as before |
| 12 values nothing reaches: `--size-action`, `--size-action-label`, `--shadow-action`, `--shadow-glow`, `--shadow-item`, `--size-rarity-line`, `--mix-rarity-tint`, `--mix-rarity-pad`, `--mix-light-beam`, `--mix-light-soft`, `--mix-light-pad`, `--shape-hex` | left the kit | no v4 sheet, script or kit rule names them |
| 21 values `DESIGN.md` listed as not on the two screens, which v4 does reach for a rarity, a hover or a risk the twelve loads did not draw (`case-blocks.js` builds the rarity plates by name) | stay in the kit, in a block that says why | removing them dropped the Mil-spec plate on the case screen's recent drops |
| Direction 2's art: the coin, the case covers, the daily cases, the mode art, the banner layers | left the kit; `--art-ground` stays, the one old picture v4 shows | the twelve loads render the same with each group set to none |
| v4's own art | 26 variables at the end of `:root`, from `design/v4/art/`: the coin with the bolt, the logo, the five cases, the five daily tiers, the four modes and their bursts, the banner's five layers, two rare effects | the showcase draws them |
| New values the atoms needed to match Home v4 | `--size-lead` 17px, `--color-text-lead`, `--color-well`, `--color-tile-veil`, `--tracking-link`, `--gradient-edge-pink`; `--color-edge-open` of section 15 left, v4 does not draw it | the side by side of each coloured atom with its original |


## 17. Stage 07 step 3, the founder's review of the atoms, `D-230`

**Date:** 19 November 2026. Variable, value, why; every value is read from the v4 sheet named.

| Variable | Value | Why, from |
|---|---|---|
| `--size-badge-text` | 10px | the 5 % bonus badge, the one badge v4 draws, `account-home.css`; every badge variant takes its shape |
| `--size-badge-pad` | 5px | the same badge |
| `--size-tile-icon` | 22px | the sound and the flag on the closed rail, `theme.css` |
| `--color-case-violet` | #A35CFF | Nightfall's light behind its skin, the case tile's `--case`, `theme.css` |
| `--shadow-skin-drop` | drop-shadow(0 6px 6px rgba(0, 0, 0, .7)) | the skin's shadow on its case, `theme.css` |
| `--shape-case-rim` | polygon(0 49%, 9.6% 50.5%, 70% 59%, 77% 56%, 100% 47%, 100% 100%, 0 100%) | the cover's front cut at the rim, `case-tiles.css` and `proof-home.css` |
| `--art-case-base` | `cases-v2/base.webp`, the skeleton in dark charcoal at 900px | the one base case, the form of the five live covers with every theme removed, founder's pick of variant B, 19 Nov 2026; replaced the same day first five dropped round 2 covers, then the Welcome case |
| ten more `--art-*` | banner plate wide, Daily ground, falling weapons far and near, footer agents two, tall plasma, crossed daggers, two daggers | loaded by Home and the case screen, measured from every request at 360 and 1440 |

The badge's own size had drifted from its source, 11px words and 4px sides; it now reads the source's values.

## 18. Stage 07 step 3, batch 2, the molecules, `D-231`

The 22 molecules drew 274 values with no variable. The shared language, 173, is appended to `:root` under its own heading; each carries the v4 file and rule it was read from. The geometry one molecule reads is named at the head of that molecule's block in part 4.2, 116 local properties: Case tile 2, Daily ladder 18, Drop card 2, Event banner 28, Feed tile 27, Hero 2, Mode card 3, Outcome card 12, Popover menu 17, Recent drop card 2, Section head 3. The refusal line's two values are the founder's pick of v4's sign in refusal.

| Name | Value | Origin | Components using it |
|---|---|---|---|
| `--space-hair` | `2px` | kit.css part 2 .wf-tile-link gap and theme.css .wf-tile-risk margin-block, case-tiles.css .wf-tile .wf-fav top and right: the smallest gap between stacked lines / a figure to its unit on a phone; v4 banner.css: .wf-event-cell span, margin-top | Case tile, Event banner |
| `--space-thin` | `3px` | trust-badge.css .v4-trust-tiles gap and its svg inset, the Trustpilot star tiles / a cell's top and foot on a phone; v4 banner.css: .wf-event-cell, padding | Event banner, Hero |
| `--space-1-5` | `6px` | case-tiles.css .wf-tile .wf-fav padding and its ::before inset, .v4-risk-tip padding, kit.css .wf-tile-cost::before margin-right: the coin to its price, a small plate's height padding / рішення користувача, D-209; a status chip's icon to its words; design/v4/daily-home.css: .dc-chip gap / the same on a phone, "more compact"; v4 banner.css: .wf-event-clock, padding / the step v4 draws between --space-1 and --space-2: theme.css .wf-feed-hit padding and .wf-feed-back gap, modes.css .wf-grid .wf-mode p margin / v4 case-page.css: .v4c-nav .wf-crumb ol gap; case-blocks.css: .v4d-p gap; case-body.css: row F tickets padding-top. Breadcrumb, Drop card, Recent drop card | Breadcrumb, Case tile, Daily ladder, Drop card, Event banner, Feed tile, Mode card, Outcome card, Popover menu |
| `--space-1-75` | `7px` | v4 case-stage.css: z7 .v4c-won-x padding-top; account-home.css: .ac2-btn padding-left. Outcome card, Popover menu | Outcome card, Popover menu |
| `--space-2-5` | `10px` | trust-badge.css .v4-trust gap and padding, .v4-trust-meta padding-left; case-tiles.css .v4-risk-tip padding and offset, .v4-fx bottom and translate / рішення користувача, D-209; the Daily head's row and box gaps, a chip's sides, the line under the cards; design/v4/daily-home.css: .dc-row, .dc-boxes, .dc-box, .dc-chip, .dc-say / the title's top on a phone; v4 banner.css: .wf-event .wf-event-name, top / the countdown plate's padding; v4 theme.css: .wf-event-clock, padding / v4 case-body.css: row F .wf-art-c margin-top; case-stage.css: z7 card column-gap; account-home.css: .am3 top offset, .am3-t gap. Drop card, Recent drop card, Outcome card, Popover menu | Case tile, Daily ladder, Drop card, Event banner, Hero, Outcome card, Popover menu, Recent drop card |
| `--space-3-5` | `14px` | heading-home.css .wf-sec-head h2 gap, the section tile to its title; case-tiles.css .wf-tile:hover .wf-tile-price padding, the price plate's sides / рішення користувача, D-209; a Daily card's inset and the lead's distance under a wide head; design/v4/daily-home.css: .dc-card padding, .dc-head.has-title .dc-l / v4 case-body.css: row F .v4b-row padding-inline, th margin-bottom; account-home.css: .am3-head gap. Drop card, Popover menu | Case tile, Daily ladder, Drop card, Popover menu, Recent drop card, Section head |
| `--space-4-25` | `18px` | v4 case-body.css: row F .v4b-row padding-bottom; case-blocks.css: .v4d-w7 a padding-bottom; case-stage.css: z7 card padding-inline. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--space-5-5` | `28px` | рішення користувача, D-209; the Daily panel's inset; design/v4/daily-home.css: .dc padding / the title's and the countdown's top and the act's foot from 900px; v4 banner.css: .wf-event .wf-event-name, .wf-event-clock, .wf-event-go | Daily ladder, Event banner |
| `--size-head-l` | `26px` | theme.css .wf-sec-head:has(+ .wf-grid .wf-tile) h2, the Featured cases title; trust-badge.css .v4-trust-score, the Trustpilot score / a countdown figure; v4 theme.css: .wf-event-cell b, font-size | Event banner, Hero, Section head |
| `--size-lift` | `3px` | v4 case-blocks.css: .v4d-w7 a:hover translateY; case-body.css row F :hover, a card rising under the pointer. Drop card, Recent drop card | Drop card, Recent drop card |
| `--size-tier-bar` | `3px` | v4 case-blocks.css: .v4d-w7 a::after height, the tier's short bar at the card's foot; case-body.css row F ::before, the line of the 100 000. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--size-tier-bar-w` | `44px` | v4 case-blocks.css: .v4d-w7 a::after width. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--size-ring-stroke` | `3.6px` | v4 case-blocks.css: .v4d-art .v4o-hex .hx-grad-d stroke-width, in the ring's own 136 by 118 units. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--size-ring-glow-near` | `1.5px` | the ring's near light, cast up and left; case-blocks.css .v4d-art .v4o-hex filter, case-body.css row F, case-stage.css w5 and w7; made a variable at the merge, D-231 | Drop card, Outcome card, Recent drop card |
| `--size-ring-glow-far` | `3px` | the ring's far light, cast up and left; the same rules; made a variable at the merge, D-231 | Drop card, Outcome card, Recent drop card |
| `--size-card-art` | `112px` | v4 case-blocks.css: .v4d-art height; case-body.css: row F .wf-art-c height. Drop card, Recent drop card | Drop card, Recent drop card |
| `--size-card-art-s` | `96px` | v4 case-blocks.css: .v4d-art height at 599px. Recent drop card | Outcome card, Recent drop card |
| `--tracking-title` | `.02em` | theme.css .wf-hero--short h1, Home's H1 | Hero |
| `--tracking-case-name` | `.04em` | theme.css .wf-tile-name, a case's name on its tile | Case tile |
| `--tracking-score` | `-.01em` | trust-badge.css .v4-trust-score | Hero |
| `--color-head-upgrade` | `#F0A21B` | case-blocks.css .wf-sec-head:has(#h2-recent) --hx-c, the line of a head in the Upgrade colour | Section head |
| `--color-head-battles` | `#4A6BFF` | case-blocks.css .wf-sec-head:has(#h2-pays) --hx-c, the line of a head in the Case battles colour | Section head |
| `--color-head-showdowns` | `#E5394F` | case-blocks.css .wf-sec-head:has(#h2-observed) --hx-c, the line of a head in the Showdowns colour | Section head |
| `--color-trustpilot` | `#00B67A` | trust-badge.css .v4-trust-tiles i, Trustpilot's own green, kept so the mark is known at a glance | Hero |
| `--color-trust-plate` | `rgba(12, 16, 44, .82)` | trust-badge.css a.v4-trust background, the badge's glass under its tint | Hero |
| `--color-trust-off` | `rgba(150, 160, 215, .24)` | trust-badge.css .v4-trust-tiles i, the unfilled part of a star tile | Hero |
| `--color-trust-rule` | `rgba(255, 255, 255, .16)` | trust-badge.css .v4-trust-meta border-left, the rule before the source | Hero |
| `--color-fav-plate` | `rgba(11, 10, 34, .78)` | case-tiles.css .wf-tile .wf-fav::before, the favourite's dark pill over a tile | Case tile |
| `--color-price-plate` | `rgba(11, 10, 34, .82)` | case-tiles.css .wf-tile:hover .wf-tile-price, the price's plate under the pointer | Case tile |
| `--gradient-trust` | `linear-gradient(135deg, rgba(0, 182, 122, .16), rgba(101, 163, 255, .08) 45%, rgba(251, 63, 138, .12))` | trust-badge.css a.v4-trust, the tint over the badge's glass | Hero |
| `--gradient-trust-edge` | `linear-gradient(120deg, var(--color-trustpilot), rgba(101, 163, 255, .5) 45%, var(--color-pink))` | trust-badge.css a.v4-trust::before, the lit edge | Hero |
| `--gradient-trust-sweep` | `linear-gradient(105deg, transparent 23%, rgba(255, 255, 255, .22) 50%, transparent 77%)` | trust-badge.css .v4-trust::after, the light that crosses the badge | Hero |
| `--gradient-case-gold` | `linear-gradient(120deg, #B57A06, #B4400F)` | case-tiles.css .wf-tile:has([data-art="case-gold"]) --tile-g, a gold case's card under the pointer | Case tile |
| `--gradient-case-violet` | `linear-gradient(120deg, #8E2BC9, #3B1A8F)` | case-tiles.css .wf-tile:has([data-art="case-violet"]) --tile-g, a violet case's card under the pointer | Case tile |
| `--gradient-fade-up` | `linear-gradient(to top, #000 30%, transparent 100%)` | case-tiles.css .v4-fx mask, the case's card fading out toward the case | Case tile |
| `--shadow-tile-lit` | `inset 0 1px 0 rgba(255, 255, 255, .25)` | heading-home.css .wf-sec-head h2::before, the light along a striped tile's top edge / рішення користувача, D-209; the lit top edge of a striped tile: a tier card, the title's calendar tile; design/v4/daily-home.css: .dc-card, heading-home.css: .dc-t::before | Daily ladder, Section head |
| `--shadow-edge-lit` | `inset 0 0 0 1px rgba(255, 255, 255, .1)` | case-tiles.css .wf-tile .wf-fav::before and trust-badge.css a.v4-trust, the hairline of a plate over art, brighter than --shadow-edge / рішення користувача, D-209; the hairline of a Daily head box, brighter than --shadow-edge's .07 because it sits on art; design/v4/daily-home.css: .dc-box box-shadow | Case tile, Daily ladder, Hero |
| `--shadow-price-edge` | `inset 0 0 0 1px rgba(255, 255, 255, .14)` | case-tiles.css .wf-tile:hover .wf-tile-price, the price plate's hairline | Case tile |
| `--shadow-trust` | `var(--shadow-edge-lit), 0 8px 24px rgba(6, 10, 30, .5)` | trust-badge.css a.v4-trust box-shadow | Hero |
| `--shadow-trust-hover` | `inset 0 0 0 1px rgba(255, 255, 255, .16), 0 12px 30px rgba(0, 182, 122, .25)` | trust-badge.css a.v4-trust:hover box-shadow | Hero |
| `--shadow-tip` | `0 8px 18px rgba(4, 6, 20, .5)` | case-tiles.css .v4-risk-tip, the risk tooltip's drop | Case tile |
| `--shape-tip-tail` | `polygon(100% 0, 100% 100%, 0 50%)` | case-tiles.css .v4-risk-tip::after, the tooltip's tail | Case tile |
| `--motion-ease-settle` | `cubic-bezier(.22, 1, .36, 1)` | case-tiles.css .v4-fx and .v4-risk-tip, trust-badge.css a.v4-trust: a move that arrives fast and settles / a long settle for the lean; v4 banner.css: .wf-event --scene-ease | Case tile, Event banner, Hero |
| `--motion-ease-bounce` | `cubic-bezier(.3, 1.6, .5, 1)` | case-tiles.css .wf-tile .wf-fav-i and the bolts' strike: a pop that overshoots | Case tile |
| `--motion-trust-sweep` | `7s` | trust-badge.css .v4-trust::after, one pass of the light and its rest | Hero |
| `--motion-stagger` | `45ms` | trust-badge.css .v4-trust-tiles i, the delay from one star tile to the next | Hero |
| `--motion-stagger-bolt` | `70ms` | case-tiles.css .wf-tile-risk:hover .v4-bolts i, the delay from one bolt to the next | Case tile |
| `--color-daily-silver` | `#C9D2E3` | рішення користувача, D-209; Silver's hue, its light and its live edge; design/v4/daily-home.css: .dc-t1 --hue | Daily ladder |
| `--color-plate-veil` | `rgba(11, 10, 34, .72)` | рішення користувача, D-209; the dark plate of a Daily head box; design/v4/daily-home.css: .dc-box background | Daily ladder |
| `--color-daily-chip` | `rgba(6, 10, 30, .62)` | рішення користувача, D-209; a tier's status chip on its colour; design/v4/daily-home.css: .dc-chip background | Daily ladder |
| `--shadow-tile-lit-hover` | `inset 0 1px 0 rgba(255, 255, 255, .3)` | the same edge under the pointer; design/v4/daily-home.css: .dc-card:hover | Daily ladder |
| `--shadow-tile-lit-live` | `inset 0 1px 0 rgba(255, 255, 255, .4)` | the same edge on the card with the open control; design/v4/daily-home.css: .dc-card.is-hero | Daily ladder |
| `--shadow-daily-lift` | `0 18px 30px rgba(6, 10, 30, .55)` | the card with the open control standing off the panel; design/v4/daily-home.css: .dc-card.is-hero | Daily ladder |
| `--shadow-daily-lift-hover` | `0 18px 30px rgba(6, 10, 30, .6)` | a card lifted under the pointer; design/v4/daily-home.css: .dc-card:hover | Daily ladder |
| `--shadow-daily-lift-live-hover` | `0 24px 36px rgba(6, 10, 30, .6)` | the live card lifted under the pointer; design/v4/daily-home.css: .dc-card.is-hero:hover | Daily ladder |
| `--shadow-daily-name` | `0 2px 8px rgba(6, 10, 30, .4)` | a tier name's text shadow on its stripes; design/v4/daily-home.css: .dc-name | Daily ladder |
| `--shadow-daily-skin` | `drop-shadow(0 6px 6px rgba(0, 0, 0, .65))` | a skin's shadow in a daily case, a filter; .65 where --shadow-skin-drop is .7; design/v4/daily-home.css: .dc-skin | Daily ladder |
| `--gradient-daily-panel` | `linear-gradient(180deg, #16133C, #0D0C28)` | рішення користувача, D-209; the Daily panel's fill; design/v4/daily-home.css: .dc background | Daily ladder |
| `--gradient-daily-fade` | `linear-gradient(90deg, transparent 18%, #000 64%)` | the mask that fades the warehouse ground out to the left; design/v4/daily-home.css: .dc::before | Daily ladder |
| `--gradient-daily-fade-s` | `linear-gradient(180deg, #000 0, transparent 440px)` | the same, downward, on a phone; design/v4/daily-home.css: @container dc (max-width: 760px) .dc::before | Daily ladder |
| `--gradient-daily-silver` | `linear-gradient(120deg, #7D88A8, #333C5A)` | рішення користувача, D-209; Silver's card; design/v4/daily-home.css: .dc-t1 --g1 --g2 | Daily ladder |
| `--gradient-daily-guardian` | `linear-gradient(120deg, #8E2BC9, #41157A)` | рішення користувача, D-209; Guardian's card; design/v4/daily-home.css: .dc-t3 --g1 --g2 | Daily ladder |
| `--gradient-daily-legend` | `linear-gradient(120deg, var(--color-pink), #8E1F5E)` | рішення користувача, D-209; Legend's card; design/v4/daily-home.css: .dc-t4 --g1 --g2 | Daily ladder |
| `--gradient-daily-elite` | `linear-gradient(120deg, #B07806, var(--color-plate-r1-b))` | Elite's card; #B07806 holds ELITE in white at 3.3:1, stage 06 critique of 10 Nov 2026 row 7; design/v4/daily-home.css: .dc-t5 --g1 --g2 | Daily ladder |
| `--tracking-tight` | `.03em` | the open control's label when it takes two lines on a phone card; design/v4/daily-home.css: @container dc (max-width: 760px) .dc-card.is-hero .v4-btn / v4 modes.css .wf-mode > .wf-fig-missing: Not launched yet, tracked less so it fits a narrow plate | Daily ladder, Mode card |
| `--shape-daily-rim` | `polygon(0 55%, 100% 55%, 100% 100%, 0 100%)` | a daily case's front wall, level at 55 % in every tier picture, cut so the skins lie in the tray; design/v4/daily-home.css: .dc-front | Daily ladder |
| `--color-banner` | `#0B0F2A` | the night behind the scene before its pictures load; v4 banner.css: .wf-event, background | Event banner |
| `--color-banner-clock-phone` | `rgba(6, 10, 30, .78)` | the countdown's plate on a phone, without the blur; v4 theme.css: .wf-event-clock, background | Event banner |
| `--color-banner-cell` | `rgba(15, 14, 43, .9)` | a countdown cell, the card at 90 %; v4 theme.css: .wf-event-cell, background | Event banner |
| `--color-banner-rule` | `rgba(101, 163, 255, .14)` | the line under the end date, the blue at 14 %; v4 theme.css: .wf-event-end, border-bottom | Event banner |
| `--shadow-banner` | `0 14px 34px rgba(0, 0, 0, .4)` | the banner's drop as a block from 900px; v4 banner.css: .wf-main > .wf-event, box-shadow (its inset .06 hairline is --shadow-edge, D-228) | Event banner |
| `--shadow-banner-clock` | `inset 0 0 0 1px rgba(101, 163, 255, .18), 0 10px 30px rgba(6, 10, 30, .5)` | the countdown's blue hairline and drop; v4 theme.css: .wf-event-clock, box-shadow | Event banner |
| `--shadow-banner-title` | `drop-shadow(0 1px 2px rgba(6, 10, 30, .9)) drop-shadow(0 6px 18px rgba(6, 10, 30, .75))` | the title art's shadow on the sky, a filter; v4 theme.css: .wf-event .wf-event-name, filter | Event banner |
| `--filter-banner-plate` | `brightness(1.08) saturate(1.1)` | the plate lit a step, "brighter as in B"; v4 banner.css: .wf-event::before, filter | Event banner |
| `--filter-banner-flare` | `brightness(1.5)` | the case's light under the pointer or with the act focused; v4 banner.css: .wf-event:hover::after, filter | Event banner |
| `--filter-banner-flare-still` | `brightness(1.15)` | the same flare, still, for reduced motion; v4 banner.css: @media (prefers-reduced-motion) .wf-event:hover::after | Event banner |
| `--blur-banner-clock` | `6px` | the countdown plate's backdrop blur from 600px; v4 banner.css: .wf-event-clock, backdrop-filter | Event banner |
| `--tracking-banner-unit-phone` | `.04em` | the unit's tracking on a phone, so Seconds fits 76px at 360; v4 banner.css: .wf-event-cell span, letter-spacing | Event banner |
| `--gradient-banner-shade` | `linear-gradient(90deg, rgba(6, 10, 30, .5), rgba(6, 10, 30, .12) 30%, transparent 46%)` | the shade that keeps the title legible, from 600px; v4 banner.css: .wf-event::before | Event banner |
| `--gradient-banner-shade-phone` | `linear-gradient(to bottom, rgba(6, 10, 30, .45), transparent 26%)` | the same under the phone's title; v4 banner.css: @media (max-width: 599px) .wf-event::before | Event banner |
| `--gradient-banner-foot` | `linear-gradient(to top, var(--color-ground), transparent 14%)` | the plate melting into the page at its foot; v4 banner.css: .wf-event::before | Event banner |
| `--gradient-banner-foot-phone` | `linear-gradient(to top, var(--color-ground) 16%, transparent 34%)` | the same on a phone, behind the countdown; v4 banner.css: @media (max-width: 599px) .wf-event::before | Event banner |
| `--gradient-banner-hero-mask` | `linear-gradient(to top, transparent, #000 14%)` | the soldier's foot melting as the plate's; v4 banner.css: .wf-event .wf-banner-art::after, mask | Event banner |
| `--gradient-banner-hero-mask-phone` | `linear-gradient(to top, transparent 22%, #000 36%)` | the same on a phone; v4 banner.css: @media (max-width: 599px) .wf-event .wf-banner-art::after, mask | Event banner |
| `--gradient-banner-story-mask-phone` | `linear-gradient(to bottom, #000 68%, transparent)` | the phone story melting behind the countdown; v4 banner.css: @media (max-width: 599px) .v4-story, mask | Event banner |
| `--gradient-banner-art-mask` | `radial-gradient(closest-side, #000 72%, transparent)` | the soldier and the aurora fading at the corners; kit.css part 3: [data-art^="case-"] on the banner's art, which Home v4 draws | Event banner |
| `--gradient-banner-sweep` | `linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, .45) 50%, transparent 80%)` | the light crossing the act; v4 banner.css: .wf-event-go::after | Event banner |
| `--gradient-banner-snow-near` | `radial-gradient(circle at 12% 18%, rgba(255, 255, 255, .95)  ... (525 characters, as in the sheet)` | falling snow, near; v4 banner.css: .wf-event --snow-near | Event banner |
| `--gradient-banner-snow-far` | `radial-gradient(circle at 8% 31%, rgba(220, 230, 255, .7) 0  ... (520 characters, as in the sheet)` | falling snow, far; v4 banner.css: .wf-event --snow-far | Event banner |
| `--motion-banner-pulse` | `3.2s` | the case's light pulsing; v4 banner.css: .wf-event::after, animation | Event banner |
| `--motion-banner-pulse-fast` | `1.4s` | the pulse under the pointer; v4 banner.css: .wf-event:hover::after | Event banner |
| `--motion-banner-snow-near` | `11s` | v4 banner.css: .wf-event::after, animation | Event banner |
| `--motion-banner-snow-far` | `22s` | v4 banner.css: .wf-event .wf-banner-art::before, animation | Event banner |
| `--motion-banner-sweep` | `4.5s` | the act's light, every few seconds; v4 banner.css: .wf-event-go::after | Event banner |
| `--motion-banner-sweep-fast` | `.8s` | the act's light at once under the pointer; v4 banner.css: .wf-event-go:hover::after | Event banner |
| `--motion-banner-lean` | `.9s` | the layers leaning apart; v4 banner.css: .wf-event::before, transition | Event banner |
| `--motion-banner-fade` | `.6s` | the story fading in, the flare settling; v4 banner.css: .v4-story and .wf-event::after, transition | Event banner |
| `--gradient-feed-plate` | `linear-gradient(to bottom, #191842, var(--color-card))` | v4 theme.css .wf-feed-i: the drop's plate, --color-card lifted a step at its top, comp B | Feed tile |
| `--gradient-feed-back` | `linear-gradient(to bottom, #1D1B4A, #110F31)` | v4 theme.css .wf-feed-back: the back face's opaque navy | Feed tile |
| `--shadow-feed-tile` | `0 6px 14px rgba(0, 0, 0, .35)` | v4 theme.css .wf-feed-i: the drop's shadow on the strip | Feed tile |
| `--shadow-feed-skin` | `drop-shadow(0 6px 5px rgba(0, 0, 0, .75))` | a filter; v4 theme.css .wf-feed-hit .wf-feed-art: the skin's shadow over its ring | Feed tile |
| `--shadow-feed-text` | `0 1px 2px rgba(0, 0, 0, .6)` | a text shadow; v4 theme.css .wf-feed-hit .wf-feed-w and .wf-feed-s: the names over the ring's light | Feed tile |
| `--color-feed-ring-deep` | `#12001C` | v4 theme.css .wf-feed-hit::after: the dark the ring's colour is mixed into at its foot | Feed tile |
| `--color-avatar-bot` | `#2B2A63` | v4 account-home.css .wf-feed-av.is-bot: a bot's empty avatar disc | Feed tile |
| `--shadow-avatar-bot` | `inset 0 0 0 1px rgba(255, 255, 255, .18)` | v4 account-home.css .wf-feed-av.is-bot: its ring | Feed tile |
| `--gradient-mode-cases-card` | `linear-gradient(120deg, var(--color-button), #8E2BC9)` | v4 theme.css .wf-mode:has([data-icon="box"]) --mode-fill: the Cases card starts on the button's pink, not --gradient-mode-cases's brand pink | Mode card |
| `--gradient-mode-foot` | `linear-gradient(to top, rgba(8, 6, 30, .6), transparent 48%)` | v4 modes.css .wf-grid .wf-mode: comp A's cards darken towards the foot | Mode card |
| `--shadow-mode-card` | `inset 0 1px 0 rgba(255, 255, 255, .25), 0 10px 30px rgba(6, 10, 30, .45)` | v4 theme.css .wf-mode: the card's lit top edge and its shadow | Mode card |
| `--shadow-mode-art` | `drop-shadow(0 8px 10px rgba(6, 10, 30, .5))` | a filter; v4 modes.css .wf-grid .wf-mode .wf-mode-art: the floating object's shadow | Mode card |
| `--shadow-mode-art-warm` | `drop-shadow(0 4px 8px rgba(90, 40, 0, .55))` | a filter; v4 modes.css, the Upgrade object: a warm shadow on the gold card | Mode card |
| `--shadow-mode-knife` | `drop-shadow(0 6px 8px rgba(6, 10, 30, .55))` | a filter; v4 modes.css, Case battles' two knives | Mode card |
| `--shadow-mode-name` | `0 2px 4px rgba(6, 10, 30, .6), 0 2px 14px rgba(6, 10, 30, .5)` | a text shadow; v4 modes.css .wf-grid .wf-mode h3 | Mode card |
| `--shadow-mode-line` | `0 1px 6px rgba(6, 10, 30, .5)` | a text shadow; v4 modes.css .wf-grid .wf-mode p | Mode card |
| `--color-mode-later` | `rgba(66, 74, 128, .6)` | v4 modes.css .wf-mode > .wf-fig-missing: the Not launched plate, a pale glass over the art | Mode card |
| `--shadow-mode-later` | `inset 0 0 0 1px rgba(255, 255, 255, .16), 0 6px 16px rgba(6, 10, 30, .3)` | the same plate's edge and shadow | Mode card |
| `--blur-mode-later` | `8px` | the same plate's backdrop blur | Mode card |
| `--tracking-mode-name` | `.01em` | v4 theme.css .wf-grid .wf-mode h3: a mode's name | Mode card |
| `--motion-mode-float` | `4.6s` | v4 modes.css v4-float: the object's breath | Mode card |
| `--motion-mode-burst` | `5s` | v4 modes.css v4-burst: the rim copy's breath | Mode card |
| `--motion-mode-strike` | `.7s` | v4 modes.css v4-strike-l and -r: the knives drawing apart under the pointer | Mode card |
| `--blur-bolt` | `4px` | the light round a lit risk bolt under the pointer; рішення користувача, D-209, case-tiles.css .wf-tile:hover .v4-bolts i.is-on; made a variable at the merge, D-231 | Case tile |
| `--blur-bolt-strike` | `6px` | the same light while the bolts strike; case-tiles.css .wf-tile-risk:hover .v4-bolts i.is-on; made a variable at the merge, D-231 | Case tile |
| `--blur-tier-bar` | `10px` | the light a tier's foot bar casts, with a 1px spread: a live drop, a drop card, a best drop, the prize; theme.css .wf-feed-hit::after and .wf-feed-back::before, case-blocks.css .v4d-w7 a::after, case-body.css row F ::after, case-stage.css .v4c-won-card::before; made a variable at the merge, D-231 | Drop card, Feed tile, Outcome card, Recent drop card |
| `--tracking-feed-sub` | `.4px` | a live drop's skin name; kit.css part 3 .wf-feed-hit .wf-feed-s, v4 theme.css live drops; made a variable at the merge, D-231 | Feed tile |
| `--tracking-tile` | `.03em` | v4 account-home.css: .am3-t.is-items letter-spacing, My items in capitals. Popover menu | Popover menu |
| `--tracking-snug` | `.04em` | v4 case-body.css: row F td::before at 599px, the label of Chance and Tickets on a phone. Drop card | Drop card, Popover menu |
| `--color-rarity-4-lit` | `#8F63E6` | v4 case-body.css: .r4 --r-lit; case-blocks.css .v4d-w7 > li.r4; case-page.css .v4c-won.r4: Restricted lit on a dark card, rarity step 4 read too dark there. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--color-rarity-5-lit` | `#4F6BFF` | v4 case-body.css: .r5 --r-lit; case-blocks.css .v4d-w7 > li.r5; case-page.css .v4c-won.r5: Mil-Spec lit. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--color-card-deep` | `#0D0C2C` | v4 case-blocks.css: .v4d-w7 a background, the stage's own card W7; case-body.css row F; case-stage.css z7 card. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--color-ring-deep` | `#12001C` | v4 case-blocks.css: .v4d-art .hs3, the foot of the ring's gradient. Drop card, Recent drop card, Outcome card | Drop card, Outcome card, Recent drop card |
| `--color-track` | `rgba(255, 255, 255, .08)` | v4 case-body.css: row F ::before, the 100 000 behind the item's stretch; case-stage.css z7 .v4c-won-x inset edge. Drop card, Outcome card | Drop card, Outcome card |
| `--color-foil` | `rgba(255, 255, 255, .45)` | v4 case-stage.css: .v4c-won-card::after, the band of light that crosses the prize once. Outcome card | Outcome card |
| `--color-tab` | `#1A1940` | v4 case-stage.css: z .v4c-won-x background, the multiple's tab. Outcome card | Outcome card |
| `--color-up-tab` | `#0F2E33` | v4 case-stage.css: z .v4c-won-x.is-up background, the tab of an item worth more than the open. Outcome card | Outcome card |
| `--color-wash` | `rgba(255, 255, 255, .07)` | v4 account-home.css: .am3-copy background. Popover menu | Popover menu |
| `--color-done` | `#7BE8A0` | v4 account-home.css: .am3-copy.is-done color, Copied. Popover menu | Popover menu |
| `--color-done-wash` | `rgba(51, 204, 102, .18)` | v4 account-home.css: .am3-copy.is-done background. Popover menu | Popover menu |
| `--color-fail` | `#FF8FA3` | v4 account-home.css: .am3-copy.is-fail color, Not copied. Popover menu | Popover menu |
| `--color-fail-wash` | `rgba(209, 39, 62, .2)` | v4 account-home.css: .am3-copy.is-fail background. Popover menu | Popover menu |
| `--color-error-wash` | `rgba(255, 77, 106, .08)` | v4 account-home.css: .am3-out:hover background, under Sign out. Popover menu | Popover menu |
| `--color-scrim-sheet` | `rgba(3, 5, 16, .6)` | v4 account-home.css: .v4-ac-scrim at 899px, the page dimmed under the sheet. Popover menu, account on a phone | Popover menu |
| `--color-handle` | `rgba(255, 255, 255, .25)` | v4 account-home.css: .am3::before at 899px, the sheet's handle. Popover menu, account on a phone | Popover menu |
| `--shadow-card` | `0 10px 22px rgba(3, 3, 16, .45)` | v4 case-blocks.css: .v4d-w7 a, under the stage's own card; case-body.css row F. Drop card, Recent drop card / an item card lifted off the ground; design/v4/case-body.css .wf-drops[data-v="f"] .v4b-row, What is in this case | Drop card, Empty state, Item card, Recent drop card, Withdraw item |
| `--shadow-card-hover` | `0 14px 28px rgba(3, 3, 16, .55)` | v4 case-blocks.css: .v4d-w7 a:hover. Drop card, Recent drop card | Drop card, Recent drop card |
| `--shadow-outcome` | `0 24px 40px rgba(3, 3, 16, .55)` | v4 case-stage.css: w7 .v4c-won-card, under the prize. Outcome card | Outcome card |
| `--shadow-skin-card` | `drop-shadow(0 8px 6px rgba(0, 0, 0, .7))` | v4 case-blocks.css: .v4d-img filter; case-body.css row F .v4b-img. Drop card, Recent drop card | Drop card |
| `--shadow-skin-prize` | `drop-shadow(0 14px 12px rgba(0, 0, 0, .7))` | v4 case-stage.css: .v4c-won-art img filter. Outcome card | Outcome card |
| `--shadow-up-tab` | `inset 0 0 0 1px rgba(53, 224, 138, .35), 0 0 14px rgba(53, 224, 138, .22)` | v4 case-stage.css: z .v4c-won-x.is-up. Outcome card | Outcome card |
| `--shadow-menu` | `0 24px 48px rgba(0, 0, 0, .5)` | v4 account-home.css: .am3, under the account menu. Popover menu, account | Popover menu |
| `--shadow-avatar-l` | `0 0 0 2px rgba(255, 255, 255, .85), 0 6px 14px rgba(6, 10, 30, .45)` | v4 account-home.css: .am3-ava. Popover menu | Popover menu |
| `--shadow-tile-lit-soft` | `inset 0 1px 0 rgba(255, 255, 255, .2)` | v4 account-home.css: .am3-t.is-items and .is-rp, the light along a lit tile's top. Popover menu | Popover menu |
| `--gradient-menu` | `linear-gradient(180deg, #16133C, #0D0C28)` | v4 account-home.css: .am3 background. Popover menu, account | Popover menu |
| `--gradient-stripes-m` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .09) 0 10px, transparent 10px 20px)` | v4 account-home.css: .am3-t.is-rp, the stripes on Responsible play, wider than --gradient-stripes. Popover menu | Popover menu |
| `--art-flag-gb` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (893 characters, as in the sheet)` | a round flag beside a language, gb; carried from kit.css part 3 [data-flag="gb"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-de` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (410 characters, as in the sheet)` | a round flag beside a language, de; carried from kit.css part 3 [data-flag="de"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-cn` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (775 characters, as in the sheet)` | a round flag beside a language, cn; carried from kit.css part 3 [data-flag="cn"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-fr` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (416 characters, as in the sheet)` | a round flag beside a language, fr; carried from kit.css part 3 [data-flag="fr"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-pl` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (350 characters, as in the sheet)` | a round flag beside a language, pl; carried from kit.css part 3 [data-flag="pl"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-tr` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (502 characters, as in the sheet)` | a round flag beside a language, tr; carried from kit.css part 3 [data-flag="tr"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-pt` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (594 characters, as in the sheet)` | a round flag beside a language, pt; carried from kit.css part 3 [data-flag="pt"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-es` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (2701 characters, as in the sheet)` | a round flag beside a language, es; carried from kit.css part 3 [data-flag="es"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--art-flag-ua` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000 ... (351 characters, as in the sheet)` | a round flag beside a language, ua; carried from kit.css part 3 [data-flag="ua"] --flag (D-205, circle-flags 2.7.0, MIT), so the popover keeps it when parts 2 and 3 leave | Popover menu |
| `--blur-ring-glow-near` | `2px` | the near light's blur; the same rules; made a variable at the merge, D-231 | Drop card, Outcome card, Recent drop card |
| `--blur-ring-glow-far` | `10px` | the far light's blur; the same rules; made a variable at the merge, D-231 | Drop card, Outcome card, Recent drop card |
| `--blur-card-hover` | `22px` | a stage card's light in its tier under the pointer; case-blocks.css .v4d-w7 a:hover, case-body.css row F :hover; made a variable at the merge, D-231 | Drop card, Recent drop card |
| `--blur-winner-ring` | `16px` | the light round the winner's avatar over a best drop; case-blocks.css .v4d-av; made a variable at the merge, D-231 | Recent drop card |
| `--blur-outcome` | `40px` | the prize's light in its tier; case-stage.css w7 .v4c-won-card; made a variable at the merge, D-231 | Outcome card |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, monospace` | a value read one character at a time: a seed, a hash, an id, an address; design/v4/case-page.css .v4c-hash code, the server seed hash under the case screen's open act | Copyable value |
| `--gradient-plate` | `linear-gradient(180deg, #100F33, #0B0A26)` | the plate a bar of controls stands on; design/v4/case-stage.css .v4c-plate, the case screen's open bar | Category bar, Deposit dock |
| `--shadow-plate-edge` | `inset 0 0 0 1px rgba(139, 124, 255, .16)` | the violet hairline round that plate; design/v4/case-stage.css .v4c-plate | Category bar, Deposit dock |
| `--color-pink-edge` | `rgba(251, 63, 138, .45)` | the edge of a declaration that is made; design/v4/signin-home.css .sd-cbx.is-set | Field |
| `--color-refuse` | `#FF8297` | the refusal line's words, a light error red; рішення користувача, D-231, "carried from v4's sign in", design/v4/signin-home.css .sd--e.is-asked .sd-why | Deposit dock, Empty state, Field, Item card, note--refuse (atom, 4.1) |
| `--size-refuse-mark` | `18px` | the round "!" that leads a refusal line, in --color-error; рішення користувача, D-231, "carried from v4's sign in", design/v4/signin-home.css .sd--e.is-asked .sd-why::before | Deposit dock, Empty state, Field, Item card, note--refuse (atom, 4.1) |

## 19. Stage 07 step 3, batch 3, the organisms, `D-232`

The 21 organisms follow the rule of `D-231`. The shared language they drew with no variable, 57 values, is appended to `:root` under its own heading, each with the v4 file and rule it was read from; 27 of them are colours, shadows and gradients the agents had first declared inside an organism's block and that moved to `:root` because the language lives there. The geometry one organism reads is named at the head of its block in part 4.3, 182 local properties: Account head 1, Case grid 1, Case stage 32, Commit block 8, Data table 1, Footer 37, Header 12, Item grid 1, Limits panel 3, Mode row 1, Proof block 2, Rail 28, Recent drops 2, Status notice 1, Ticker 14, Verify form 1, Payment panel 2, Case head 3, Sign-in block 7, Dialog 25, Bottom bar 0; and 7 on the modifiers organisms asked of atoms and molecules (`.button--priced` 3, `.fig--l`, `.avatar--l`, `.logo--s`, `.logo--l` 1 each). Dropped: `--shadow-edge-dim` (.06), folded into `--shadow-edge` (.07) by `D-228`; a footer veil equal to `--color-note-plate`. One existing value changed, by founder pick: `--size-close` 36 to 40px.

| Name | Value | Origin | Components using it |
|---|---|---|---|
| `--shadow-lift` | `0 10px 26px rgba(0, 0, 0, .35)` | v4 theme.css: .wf-header::before and .wf-rail::before, the lift under the header strip, the rail's panel and the open drawer. Header, Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail, (in :root) --shadow-shell |
| `--shadow-shell` | `var(--shadow-tile-edge), var(--shadow-lift)` | v4 theme.css: .wf-header::before and .wf-rail::before, the strip's and the panel's hairline and lift. Header, Rail; рішення користувача, D-209 (v4) carried by D-232 | Account Head, Header, Rail |
| `--color-burger` | `#1A1945` | v4 theme.css: .wf-rail .wf-rail-toggle and .wf-header .wf-menu, the burger tile. Rail, Header; рішення користувача, D-209 (v4) carried by D-232 | Header, Rail |
| `--color-burger-hover` | `#241F58` | the same, under the pointer and, on a phone, while the drawer it opens is open. Rail, Header; рішення користувача, D-209 (v4) carried by D-232 | Header, Rail |
| `--size-burger-w` | `20px` | v4 theme.css: .wf-rail-toggle::after and .wf-menu::after, the burger's three lines, width. Rail, Header; рішення користувача, D-209 (v4) carried by D-232 | Header, Rail |
| `--size-burger-h` | `14px` | the same, height: three 2px lines 4px apart. Rail, Header; рішення користувача, D-209 (v4) carried by D-232 | Header, Rail, (in :root) --gradient-burger |
| `--gradient-burger` | `linear-gradient(var(--color-text-hi) 0 var(--space-hair), transparent var(--space-hair) var(--space-1-5), var(--color-text-hi) var(--space-1-5) var(--space-2), transparent var(--space-2) var(--space-3), var(--color-text-hi) var(--space-3) var(--size-burger-h))` | v4 theme.css: the same, the three lines. Rail, Header; рішення користувача, D-209 (v4) carried by D-232 | Header, Rail |
| `--size-nav-mark` | `24px` | v4 rail-b1.css .wf-rail-item .wf-rail-ico and kit.css part 3 .wf-bar-i: a destination's mark in the rail and in the bottom bar. Rail, Bottom bar; рішення користувача, D-209 (v4) carried by D-232 | Bottom Bar, Rail |
| `--tracking-wide` | `.1em` | v4 footer-home.css: .fl-col h3 and .ff-stat b + span, the footer's column heads and the counters' captions. Footer, Figure (--stat); рішення користувача, D-209 (v4) carried by D-232 | Figure, Footer |
| `--shadow-fig-stat` | `0 0 22px rgba(251, 63, 138, .45)` | v4 footer-home.css: .ff-stat b, the pink light round a counter. Figure (--stat), read by Footer; рішення користувача, D-209 (v4) carried by D-232 | Figure |
| `--color-stage` | `#100F33` | v4 case-page.css: .v4c-stage[data-light="d"] background, the case block's ground behind the stage; the first stop of --gradient-plate; рішення користувача, D-209 (v4) carried by D-232 | Case Head |
| `--shadow-stage` | `0 24px 60px rgba(2, 4, 16, .5)` | v4 case-page.css: .v4c-stage box-shadow, the case block's fall onto the page (its inset hairline is --shadow-edge, D-228); рішення користувача, D-209 (v4) carried by D-232 | Case Head |
| `--shadow-case-name` | `0 2px 0 rgba(0, 0, 0, .35)` | a text shadow; v4 case-stage.css: .v4c-title h1, the case's name over the stage; рішення користувача, D-209 (v4) carried by D-232 | Case Head |
| `--gradient-stage-band` | `linear-gradient(180deg, rgba(8, 7, 30, .35), rgba(8, 7, 30, .6))` | v4 case-stage.css: .v4c-band background, the band the nine run through; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--gradient-stage-edge` | `linear-gradient(90deg, transparent, rgba(139, 124, 255, .55) 30%, rgba(251, 63, 138, .55) 50%, rgba(139, 124, 255, .55) 70%, transparent)` | v4 case-stage.css: .v4c-band::before and ::after, the line along the band's top and foot; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--gradient-stage-cell` | `linear-gradient(180deg, transparent, rgba(139, 124, 255, .45) 25%, rgba(251, 63, 138, .5) 50%, rgba(139, 124, 255, .45) 75%, transparent)` | v4 case-stage.css: .v4c-cells i, the line between two cases' cells; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--color-pointer-deep` | `#2A0018` | v4 case-stage.css: .v4c-ptr-a .h-s3, the deep end the pointer's pink runs to at its tip; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--shadow-case-stage` | `drop-shadow(0 24px 22px rgba(0, 0, 0, .75)) drop-shadow(0 0 40px rgba(6, 5, 24, .9))` | a filter; v4 case-stage.css: .v4c-top[data-v="m"] .v4c-box img, the case standing over the band; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--color-price-chip` | `rgba(46, 4, 26, .45)` | v4 case-stage.css: .v4c-go-price background, the price riding at the end of the open act and the sum at the end of Sell all; рішення користувача, D-209 (v4) carried by D-232 | Button |
| `--color-skull-off-plate` | `#1D1B4A` | v4 case-stage.css: .v4c-plate .v4c-risk --color-skull-off, an unlit bolt on the commit plate, the plate's own navy and not a grey; рішення користувача, D-209 (v4) carried by D-232 | Commit Block |
| `--motion-ease-unfold` | `cubic-bezier(.2, 1, .3, 1)` | v4 case-stage.css: .v4c-band transition, the band unfolding a beat after the columns close; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--motion-ease-fold` | `cubic-bezier(.5, 0, .75, 0)` | v4 case-stage.css: .v4c-frame:not([data-count="1"]) .v4c-band and .v4c-col transitions, a fold that starts slow and shuts fast; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--motion-ease-open` | `cubic-bezier(.2, 1.1, .3, 1)` | v4 case-stage.css: .v4c-frame[data-count] .v4c-col:nth-child scale, a column opening from the middle with a little give; рішення користувача, D-209 (v4) carried by D-232 | Case Stage |
| `--gradient-fair` | `linear-gradient(160deg, var(--color-fair), #1F55C9 58%, #24359E)` | v4 proof-home.css: .x6-plate background under its stripes, the provably fair blue of Every round on Home. Proof block; рішення користувача, D-209 (v4) carried by D-232 | Proof Block |
| `--shadow-fair` | `0 14px 34px rgba(6, 10, 30, .5)` | v4 proof-home.css: .x6-plate box-shadow, the drop under the Every round plate (its lit top edge is --shadow-tile-lit). Proof block; рішення користувача, D-209 (v4) carried by D-232 | Proof Block |
| `--color-hash-well` | `rgba(6, 10, 30, .6)` | v4 proof-home.css: .x6-hash background, the dark well a hash and "Recomputed: matches" sit in on the blue plate. Proof block, Verify form; рішення користувача, D-209 (v4) carried by D-232 | Proof Block, Verify Form |
| `--shadow-dialog` | `0 30px 60px rgba(0, 0, 0, .45)` | v4 signin-home.css: .sd at 760px of dialog and up, the drop under the dialog card (its .06 inner hairline is --shadow-edge, D-228). Dialog; рішення користувача, D-209 (v4) carried by D-232 | Dialog |
| `--color-note-plate` | `rgba(6, 8, 24, .7)` | v4 signin-home.css: .sd-note background, the dark foot plate of the sign in dialog, "the footer strip's dark ground". Sign-in block, Status notice; рішення користувача, D-209 (v4) carried by D-232 | Footer, Sign-In Block, Status Notice |
| `--gradient-stripes-s` | `repeating-linear-gradient(135deg, rgba(255, 255, 255, .09) 0 6px, transparent 6px 12px)` | v4 signin-home.css: .sd-note .is-guard .sd-note-i, the stripes of a 30px tile, the small step of --gradient-stripes. Sign-in block, Status notice; рішення користувача, D-209 (v4) carried by D-232 | Sign-In Block, Status Notice |
| `--gradient-steam` | `linear-gradient(140deg, #2A475E, #171D25)` | v4 signin-home.css: .sd-note .is-steam .sd-note-i, Steam's own dark blue under its mark. Sign-in block; рішення користувача, D-209 (v4) carried by D-232 | Sign-In Block |
| `--gradient-rail-giveaways` | `linear-gradient(120deg, #2C7FD6, var(--color-plate-r5-b))` | v4 rail-b1.css :has([data-icon="diamond"]): Giveaways' fill. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--shadow-rail-peek` | `drop-shadow(0 4px 5px rgba(6, 10, 30, .5))` | v4 rail-b1.css .wf-rail-item::after: the object's shadow. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--shadow-rail-chip` | `0 10px 24px rgba(4, 6, 20, .45)` | v4 rail-b1.css: every closed chip's lift. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--color-rail-chip-sub` | `rgba(255, 255, 255, .78)` | v4 rail-b1.css: "Not launched yet" on a chip. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--color-rail-tile-chip` | `#08091B` | v4 rail-b1.css: the sound and language chips, the footer strip's dark made solid. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--shadow-rail-drawer` | `inset calc(-1 * var(--size-hairline)) 0 0 rgba(255, 255, 255, .05)` | v4 theme.css @media (max-width: 899px) .wf-rail: the drawer's hairline on the side that faces the page. Rail; рішення користувача, D-209 (v4) carried by D-232 | Rail |
| `--gradient-header-light` | `radial-gradient(34% 130% at 50% 0%, rgba(251, 63, 138, .36), transparent 72%)` | v4 theme.css .wf-header::before: --color-pink's light falling from the strip's top onto the logo. Header; рішення користувача, D-209 (v4) carried by D-232 | Header |
| `--gradient-header-edge` | `linear-gradient(90deg, transparent, #FF6FA8 50%, transparent)` | v4 theme.css .wf-row::before: the pink edge, --color-pink lifted a step. Header; рішення користувача, D-209 (v4) carried by D-232 | Header |
| `--shadow-header-edge` | `0 0 10px rgba(251, 63, 138, .6)` | v4 theme.css .wf-row::before: the pink edge's light. Header; рішення користувача, D-209 (v4) carried by D-232 | Header |
| `--shadow-header-fall` | `drop-shadow(0 0 4px rgba(251, 63, 138, .6))` | v4 theme.css .v4-fall i: the weapons' pink glow. Header; рішення користувача, D-209 (v4) carried by D-232 | Header |
| `--gradient-footer-light` | `radial-gradient(50% 100% at 50% 100%, rgba(74, 107, 255, .26), rgba(74, 107, 255, .1) 45%, transparent 100%)` | v4 footer-home.css #wf-footer.v4-foot .ft-h::before: the blue light rising off the block's top. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--shadow-footer-lift` | `0 20px 40px rgba(4, 6, 20, .5)` | v4 footer-home.css .ft-h: the block's lift. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--gradient-footer-band` | `radial-gradient(50% 120% at 50% 0%, rgba(74, 107, 255, .2), transparent 70%)` | v4 footer-home.css .ff-band: the blue falling into the counters' band. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--gradient-footer-fade` | `linear-gradient(90deg, transparent, rgba(5, 6, 20, .85) 22%, rgba(5, 6, 20, .85) 78%, transparent)` | v4 footer-home.css .ff-band::before and .ff-foot::before: the dark ground fading to both sides. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--gradient-edge-blue` | `linear-gradient(90deg, transparent, var(--color-head-battles) 50%, transparent)` | v4 footer-home.css .ff-band > .ff-stats::before: the band's top line. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--shadow-footer-plate` | `var(--shadow-tile-lit), 0 10px 24px rgba(6, 10, 30, .4)` | v4 footer-home.css .fl-plate: a trust plate's lit top (--shadow-tile-lit) and lift. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--gradient-footer-fair` | `linear-gradient(140deg, var(--color-fair), #1F55C9 60%, #24359E)` | v4 footer-home.css .fl-plate.is-pf: Every round's blue. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--color-footer-pt` | `rgba(6, 10, 30, .35)` | v4 footer-home.css .fl-pt: the target's tile. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--color-footer-age` | `#B4142E` | v4 footer-home.css .ff-18: 18+ in red on white. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--shadow-footer-age` | `0 4px 10px rgba(60, 0, 10, .35)` | v4 footer-home.css .ff-18: its shadow. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--tracking-footer-age` | `-.02em` | v4 footer-home.css .ff-18: 18+ set tight. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--color-footer-pay` | `rgba(215, 215, 240, .8)` | v4 footer-home.css .fe-pay li: the marks' one muted tone. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--color-footer-pay-hover` | `rgba(255, 255, 255, .08)` | v4 footer-home.css .fh-pay:hover: a card under the pointer. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--shadow-footer-pay` | `0 8px 16px rgba(4, 6, 20, .45)` | v4 footer-home.css .fh-pay:hover: a payment card's lift under the pointer. Footer; рішення користувача, D-209 (v4) carried by D-232 | Footer |
| `--color-ticker-chip` | `rgba(6, 10, 30, .82)` | v4 theme.css .wf-feed-head: the live chip's dark, with no edge. Ticker; рішення користувача, D-209 (v4) carried by D-232 | Ticker |
| `--shadow-ticker-chip` | `0 4px 14px rgba(0, 0, 0, .4)` | v4 theme.css .wf-feed-head: the live chip's lift. Ticker; рішення користувача, D-209 (v4) carried by D-232 | Ticker |
| `--color-ticker-halo` | `color-mix(in srgb, var(--color-pink) 70%, transparent)` | v4 theme.css .wf-feed-lbl::after: the dot's halo. Ticker; рішення користувача, D-209 (v4) carried by D-232 | Ticker |

## 20. Stage 07 step 4, the visuals and the last three icons, `D-233`

**Where the pictures went.** The 42 files of the product's own image set moved by `git mv` into `design/visuals/`, a folder per component; the `--art-*` variables in `design/kit/kit.css` that name them changed their path only, and so did every page, sheet and script that cites them. No picture changed. The set, its colourway and every prompt are in `design/visuals/README.md`. The rows of this file above keep the path a value had when it was decided; this table maps it.

| Was | Is |
|---|---|
| `design/v4/art/cases-v2/ironbound-c.webp` | `design/visuals/cases/ironbound-c.webp` |
| `design/v4/art/cases-v2/warsteel-c.webp` | `design/visuals/cases/warsteel-c.webp` |
| `design/v4/art/cases-v2/coldfront-c.webp` | `design/visuals/cases/coldfront-c.webp` |
| `design/v4/art/cases-v2/nightfall-c.webp` | `design/visuals/cases/nightfall-c.webp` |
| `design/v4/art/cases-v2/emberforge-c.webp` | `design/visuals/cases/emberforge-c.webp` |
| `design/v4/art/cases-v2/base.webp` | `design/visuals/cases/base.webp` |
| `design/v4/art/daily-cases-v2/silver.webp` | `design/visuals/daily/silver.webp` |
| `design/v4/art/daily-cases-v2/nova.webp` | `design/visuals/daily/nova.webp` |
| `design/v4/art/daily-cases-v2/guardian.webp` | `design/visuals/daily/guardian.webp` |
| `design/v4/art/daily-cases-v2/legend.webp` | `design/visuals/daily/legend.webp` |
| `design/v4/art/daily-cases-v2/elite.webp` | `design/visuals/daily/elite.webp` |
| `design/v4/art/daily-bg.webp` | `design/visuals/daily/daily-bg.webp` |
| `design/v4/art/mode-cases-obj4.webp` | `design/visuals/modes/mode-cases-obj4.webp` |
| `design/v4/art/mode-cases-burst4.webp` | `design/visuals/modes/mode-cases-burst4.webp` |
| `design/v4/art/mode-battles-clash.webp` | `design/visuals/modes/mode-battles-clash.webp` |
| `design/v4/art/mode-battles-knife-blue.webp` | `design/visuals/modes/mode-battles-knife-blue.webp` |
| `design/v4/art/mode-battles-knife-red.webp` | `design/visuals/modes/mode-battles-knife-red.webp` |
| `design/v4/art/mode-battles-crossed.webp` | `design/visuals/modes/mode-battles-crossed.webp` |
| `design/v4/art/mode-showdowns-obj4.webp` | `design/visuals/modes/mode-showdowns-obj4.webp` |
| `design/v4/art/mode-showdowns-burst4.webp` | `design/visuals/modes/mode-showdowns-burst4.webp` |
| `design/v4/art/mode-upgrade-obj4.webp` | `design/visuals/modes/mode-upgrade-obj4.webp` |
| `design/v4/art/mode-upgrade-burst4.webp` | `design/visuals/modes/mode-upgrade-burst4.webp` |
| `design/v4/art/banner-plate.webp` | `design/visuals/banner/banner-plate.webp` |
| `design/v4/art/banner-plate-wide.webp` | `design/visuals/banner/banner-plate-wide.webp` |
| `design/v4/art/banner-aurora.webp` | `design/visuals/banner/banner-aurora.webp` |
| `design/v4/art/banner-glow.webp` | `design/visuals/banner/banner-glow.webp` |
| `design/v4/art/banner-hero.webp` | `design/visuals/banner/banner-hero.webp` |
| `design/v4/art/banner-title-d.webp` | `design/visuals/banner/banner-title-d.webp` |
| `design/v4/art/footer-agents.webp` | `design/visuals/brand/footer-agents.webp` |
| `design/v4/art/footer-agents-2.webp` | `design/visuals/brand/footer-agents-2.webp` |
| `design/concept/assets/home/ground.webp` | `design/visuals/brand/ground.webp` |
| `design/v4/art/fall-far.webp` | `design/visuals/brand/fall-far.webp` |
| `design/v4/art/fall-near.webp` | `design/visuals/brand/fall-near.webp` |
| `design/v4/art/fx/bolt-24.webp` | `design/visuals/fx/bolt-24.webp` |
| `design/v4/art/fx/plasma-24.webp` | `design/visuals/fx/plasma-24.webp` |
| `design/v4/art/fx/plasma-tall-24.webp` | `design/visuals/fx/plasma-tall-24.webp` |
| `design/v4/art/avatars/a1.webp` | `design/visuals/avatars/a1.webp` |
| `design/v4/art/avatars/a2.webp` | `design/visuals/avatars/a2.webp` |
| `design/v4/art/avatars/a3.webp` | `design/visuals/avatars/a3.webp` |
| `design/v4/art/avatars/a4.webp` | `design/visuals/avatars/a4.webp` |
| `design/v4/art/avatars/a5.webp` | `design/visuals/avatars/a5.webp` |
| `design/v4/art/avatars/a6.webp` | `design/visuals/avatars/a6.webp` |

**The three icons.** Variable, value, why, each in `kit.css` and drawn the same in `design/v4/rail-icons.js`:

| Variable | Was | Is | Why |
|---|---|---|---|
| `--icon-target` | outline: a ring and an inner ring by stroke, four ticks | filled: a ring, four ticks, a centre disc | `D-227` point 6, the founder's pick A of step 4 |
| `--icon-users` | outline: two people by stroke, the one behind a crescent | filled: two people, the one behind cut clear of the one in front | the same |
| `--icon-pulse` | outline: a person and a tick by stroke (online) | filled: a person, a tick in a disc | the same |

Section 13's row for these three is done. `D-200` had brought the counters back to outline people as the baseline draws them; `D-227` and `D-233` end that, and every icon in the product is filled.

## 21. Stage 07 step 5, Home in colour from the kit, `D-234`

**What moved.** Home, `design/index.html`, is assembled from the kit alone, and what Home v4 drew outside the kit's components came in with it. Its four closing blocks are one-offs of node 1.0 and their look is `kit.css` part 4.4 (`.spend`, `.involves`, `.faq`, `.about`), carried from v4's `proof-home.css`, `seo-home.css` and `faq-home.css`; where a screen's blocks stand in the slot is the shell's layout, carried from v4 `theme.css` and `banner.css`; the shell's behaviour is `design/kit/kit.js`. The language those blocks need is 23 new variables in `:root`, each with its v4 file and rule:

| Variable | Value | Origin |
|---|---|---|
| `--icon-percent` | `an inline SVG mask, the percent sign` | a published chance, drawn in the set's solid style for What opening a case here involves; v4 seo-home.css .sx-ic--pct; рішення користувача, D-209 (v4) carried by D-234 |
| `--gradient-spend-strip` | `linear-gradient(100deg, #2B3FD6 0%, #4A2BC0 38%, #7A2BB8 70%, #B02F8C 100%)` | the money strip of Before you spend, blue to violet to pink; v4 proof-home.css .x6-strip background; рішення користувача, D-209 (v4) carried by D-234 |
| `--gradient-spend-stub` | `linear-gradient(160deg, var(--color-pink), var(--color-button) 55%, #B8044E)` | the strip's striped pink stub under its title, holding 3.2:1 at the worst stripe; v4 proof-home.css .x6-stub; рішення користувача, D-209, critique of 10 Nov 2026 row 3, carried by D-234 |
| `--shadow-plate-deep` | `0 14px 34px rgba(6, 10, 30, .55)` | the money strip's drop; v4 proof-home.css .x6-strip box-shadow; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-card-drop` | `0 10px 30px rgba(6, 10, 30, .45)` | a checked round's card, its drop; v4 proof-home.css .x6-card box-shadow; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-stub-text` | `0 2px 8px rgba(120, 10, 60, .35)` | the stub's title lifted off its pink; v4 proof-home.css .x6-stub h2 text-shadow; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-figure-text` | `0 2px 10px rgba(6, 10, 30, .3)` | a large figure on a plate; v4 proof-home.css .x6-v text-shadow; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-word-text` | `0 2px 8px rgba(6, 10, 30, .35)` | Every round, the word on the blue plate; v4 proof-home.css .x6-word text-shadow; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-plate-rule` | `rgba(255, 255, 255, .18)` | the rule between two panels of the money strip; v4 proof-home.css .x6-p + .x6-p::before; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-plate-say` | `rgba(255, 255, 255, .86)` | the line under a figure on the strip; v4 proof-home.css .x6-say; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-plate-ticket` | `rgba(255, 255, 255, .88)` | a ticket's line on a round card; v4 proof-home.css .x6-t; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-ruler` | `rgba(6, 10, 30, .38)` | the ruler of 100 000 under a ticket; v4 proof-home.css .x6-ruler; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-ruler-range` | `rgba(255, 255, 255, .62)` | the round's range on the ruler; v4 proof-home.css .x6-ruler i; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-ruler-mark` | `0 0 0 2px rgba(6, 10, 30, .3)` | the ticket's mark standing off the range; v4 proof-home.css .x6-ruler b; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-plate-hover` | `rgba(255, 255, 255, .06)` | a strip panel under the pointer, and a dark fact tile's fill; v4 proof-home.css a.x6-p:hover and seo-home.css .sx-tile; рішення користувача, D-209 (v4) carried by D-234 |
| `--filter-case-lift` | `drop-shadow(0 10px 14px rgba(6, 10, 30, .55))` | a case standing on a plate; v4 proof-home.css .x6-case .b and seo-home.css .sl-case .b; рішення користувача, D-209 (v4) carried by D-234 |
| `--filter-skin-lift` | `drop-shadow(0 10px 10px rgba(0, 0, 0, .6))` | a skin lying in that case; v4 proof-home.css .x6-case .sk and seo-home.css .sl-case .sk; рішення користувача, D-209 (v4) carried by D-234 |
| `--filter-card-skin` | `drop-shadow(0 10px 10px rgba(6, 10, 30, .55))` | a skin rising off a round's card; v4 proof-home.css .x6-skin; рішення користувача, D-209 (v4) carried by D-234 |
| `--filter-card-hover` | `brightness(1.08)` | a round's card under the pointer; v4 proof-home.css .x6-card:hover; рішення користувача, D-209 (v4) carried by D-234 |
| `--gradient-involves-stage` | `linear-gradient(150deg, #8E2BC9, #3B1A8F)` | the plate Nightfall stands on, the case tile's violet; v4 seo-home.css .v4-seo --c1 --c2 and .sx-stage; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-tile-lit-soft` | `inset 0 1px 0 rgba(255, 255, 255, .22)` | that plate's lit top edge, a step under --shadow-tile-lit; v4 seo-home.css .sx-stage; рішення користувача, D-209 (v4) carried by D-234 |
| `--shadow-edge-bright` | `inset 0 0 0 1px rgba(255, 255, 255, .12)` | a dark pill's edge over the plate; v4 seo-home.css .sl-pill; рішення користувача, D-209 (v4) carried by D-234 |
| `--color-rule-faint` | `rgba(255, 255, 255, .08)` | the hairline over each part of About Clutch; v4 faq-home.css .ab-i border-top; the same value as --color-track, a pair for stage 08; рішення користувача, D-209 (v4) carried by D-234 |

**Local properties.** `.spend__in` 8 (`--spend-*`, the strip's columns, figure, padding and the case's height, all scaling with the block), `.involves__in` 3 (`--involves-*`), `.shell__main` 2 (`--shell-gutter` 32px and 56px from 1200px, `--shell-column` 1560px, v4 `theme.css` `.wf-main > :not(.wf-event)`), `.sec-head` 1 (`--sec-head-l-s`).

**Values changed, variable, value, why.**
- `.sec-head__title` line-height, 1.4 to 1.1: every head v4 drew in colour sets 1.1 (`faq-home.css` `.hz-head h2`, `seo-home.css` `.sx-h h2`); the grey's 1.4 showed only where a title wraps, and the large heads of Home's closing sections wrap on a phone.
- `--sec-head-l-s`, new, 21px: the large head on a phone. v4 drew it 21px on three heads and 26px on Featured cases; one head takes one size, so Featured cases' head is 21px on a phone now, 5px smaller than v4.

## 22. Stage 07 step 5, Home's motion carried into the kit, `D-235`

**What moved.** The motion v4 Home was approved with, which `D-234` had left to stage 11, comes into the kit beside the component it moves, and `design/kit/motion.js` plays it: the Icon atom's story form (`.icon.is-story`, `.icon-story`, from `rail-icons.css` and `rail-icons.js`), the Feed tile's rare marks and rare drops (`.rare-mark`, `.feed-tile--rare`, from `rare-mark.css` and `rare.css`), the Disclosure's slide, the Favourite's burst, the footer's 18+ spin and the pause of loops off the screen (`.is-idle`, from `idle.js`). Keyframes keep their v4 offsets in the drawing's own units, a mark 24 across. 13 variables enter `:root`:

| Variable | Value | Origin |
|---|---|---|
| `--color-rare-volt-light` | `#F2FBFF` | lightning's white core, the first of the volt tier's three; v4 rare.css .v4-rare-volt --rd-c1; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-rare-orbit-light` | `#FFF6CF` | the golden orbit's pale core; v4 rare.css .v4-rare-orbit --rd-c1; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-rare-orbit-deep` | `#FF9A1F` | its orange rim; v4 rare.css .v4-rare-orbit --rd-c3; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-rare-plasma-light` | `#FFE0F4` | plasma's pale core; v4 rare.css .v4-rare-plasma --rd-c1; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-rare-chance` | `#FFF8D6` | the top of a rare drop's chance figure, which fades to its tier; v4 rare.css .v4-rare-chance; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-crown-light` | `#FFE27A` | the crown's lit edge over the rarest drop; v4 rare.css .v4-rare-crown::before; рішення користувача, D-209 (v4) carried by D-235 |
| `--color-crown-deep` | `#B87800` | its shaded foot; the same; рішення користувача, D-209 (v4) carried by D-235 |
| `--shadow-rare-volt` | `inset 0 0 0 1px rgba(143, 211, 255, .55), 0 0 12px rgba(57, 85, 232, .4)` | a lightning drop's edge and glow, live or calmed; v4 rare.css .v4-rare-volt:is(.is-live, .is-calm)::before; рішення користувача, D-209 (v4) carried by D-235 |
| `--shadow-rare-orbit` | `inset 0 0 0 1px rgba(246, 201, 21, .4), 0 0 12px rgba(246, 201, 21, .22)` | the golden orbit's; v4 rare.css .v4-rare-orbit:is(.is-live, .is-calm)::before; рішення користувача, D-209 (v4) carried by D-235 |
| `--shadow-rare-plasma-glow` | `0 0 12px rgba(210, 43, 206, .45)` | plasma's glow, its edge the tile's own tier; v4 rare.css .v4-rare-plasma:is(.is-live, .is-calm)::before; рішення користувача, D-209 (v4) carried by D-235 |
| `--filter-rare-skin` | `drop-shadow(0 6px 5px rgba(0, 0, 0, .75))` | a live rare drop's skin lifted off its plate; v4 rare.css .v4-rare.is-live .wf-feed-art; рішення користувача, D-209 (v4) carried by D-235 |
| `--motion-disclosure` | `.4s` | an answer sliding open or shut; v4 faq-home.css .fq-a, grid-template-rows .4s; рішення користувача, D-209 (v4) carried by D-235 |
| `--motion-ease-disclosure` | `cubic-bezier(.2, .7, .2, 1)` | the same, and the plus turning; v4 faq-home.css .fq-a and .fq-x::before; рішення користувача, D-209 (v4) carried by D-235 |

**Read from the kit as it stood.** `--color-rare-zap` (#8FD3FF) is the volt tier's middle colour, `--color-rarity-1` the orbit's, `--color-rarity-3` the plasma's deep and `--color-rarity-5` the volt's deep, as v4 `rare.css` names the same values; `--motion-rail-icon` and `--motion-ease-rail-icon`, in `:root` since `D-231`, are the stories' pace; `--art-fx-bolt`, `--art-fx-plasma-tall` and `--shape-ring-mask`, in `:root` since `D-214`, are the marks' pictures and shape.

**Local properties.** `.feed-tile` 14 geometry: the marks' ring, lightning and flame (`--mark-*`, the ring 78 by 68px 7px down, 60 by 52px and 5px on a phone; lightning 8px past the edge, 6px on a phone; the flame 100px over the tile and 14% past each side), the rare drop's chance figure, crown and wave (`--rare-*`), and the three tier colours each rare drop reads (`--rare-light`, `--rare-mid`, `--rare-deep`); the stories' light `--story-c` per mark; the equalizer's two bars as registered properties `--feed-eq-l` and `--feed-eq-r`.

**Values changed, variable, value, why.** None. Two rules moved: the Disclosure's pink edges and its open mark leave `[open]` for a motion block where they fade in and turn; the open mark keeps its upright bar at height 0, so the plus can shrink to a minus.

## 23. Stage 07 step 5, the case screen in colour from the kit, `D-236`

**What moved.** The case screen v4 (`design/v4/case.html`, row M with card W7 and prize Z7, the founder's picks of `D-213` and `D-214`) is assembled from the kit at `design/case.html`, with the three states `D-215` owed as pages of their own. Its four blocks under the stage are one-offs of node 3.3 in `kit.css` part 4.4 (`.before`, `.spend--pays`, `.observed`, `.how` with `.ruler`), carried from v4 `case-blocks.css` rows D, B, D and I as they stand; the open and the outcome are played by a third kit script, `design/kit/stage.js`, and their look is the Case stage's play form beside it in part 4.3. Their language is 19 new variables in `:root`, each with its v4 file and rule:

| Variable | Value | Origin |
|---|---|---|
| `--gradient-before-plate` | `linear-gradient(180deg, #14123A, #0E0C2A)` | a Before you open plate; v4 case-blocks.css .wf-case-info[data-v="d"] > p; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-before-plate` | `inset 0 0 0 1px rgba(255, 255, 255, .06), 0 10px 24px rgba(3, 3, 16, .35)` | its edge and its drop; the same rule; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-head-steam` | `#6F8BFF` | the Steam plate's light, the battles blue lifted; v4 case-blocks.css .wf-case-info .v4i-steam --c; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-observed-row` | `inset 0 0 0 1px rgba(255, 255, 255, .05), 0 10px 22px rgba(3, 3, 16, .35)` | a tier's row of Published against observed; v4 case-blocks.css .wf-table[data-v="d"] .v4b-tier; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-bar-track` | `rgba(255, 255, 255, .06)` | the empty track under a published rate's bar; v4 case-blocks.css .v4o-bar; the same value as --color-plate-hover, a pair for stage 08; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-bar-inset` | `inset 0 1px 2px rgba(0, 0, 0, .4)` | the track sunk into its row; the same rule; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-tick` | `0 0 8px rgba(255, 255, 255, .8)` | the observed rate's tick, white and lit; v4 case-blocks.css .v4o-bar b, .v4o-tk; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-ground` | `rgba(6, 5, 24, .6)` | the ticket ruler's plate under its tier's light; v4 case-blocks.css .v4t; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-ruler-plate` | `inset 0 0 0 1px rgba(255, 255, 255, .07), 0 14px 30px rgba(3, 3, 16, .4)` | its edge and drop; the same rule; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-track` | `rgba(255, 255, 255, .05)` | the line of 100 000 tickets under its items; v4 case-blocks.css .v4t-line; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-gap` | `#0B0A26` | the cut between two items on the line, and the pin's figure; v4 case-blocks.css .v4t-line i border-right, .v4t-n color; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-notch` | `#120F33` | the two notches where the ruler's ticket tears; v4 case-blocks.css .v4t-cut::before; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-tear` | `rgba(255, 255, 255, .14)` | the dashed tear across the ruler; v4 case-blocks.css .v4t-cut border-top; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-step` | `rgba(255, 255, 255, .22)` | a step of 5 000 tickets on the scale; v4 case-blocks.css .v4u-scale i; рішення користувача, D-209 (v4) carried by D-236 |
| `--color-ruler-quarter` | `rgba(255, 255, 255, .5)` | a quarter on the scale; v4 case-blocks.css .v4u-scale i.is-q; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-ruler-pin` | `0 0 12px rgba(255, 255, 255, .9)` | the pin that runs to the ticket; v4 case-blocks.css .v4t-pin; рішення користувача, D-209 (v4) carried by D-236 |
| `--gradient-stage-bam` | `radial-gradient(closest-side, var(--color-text-hi), color-mix(in srgb, var(--color-pink) 70%, var(--color-text-hi)) 18%, rgba(251, 63, 138, .35) 45%, transparent 72%)` | the flash where a case hits the stage's middle; v4 case-stage.css .v4c-bam; рішення користувача, D-209 (v4) carried by D-236 |
| `--shadow-stage-wave` | `0 0 0 3px var(--color-pink), 0 0 26px var(--color-pink), inset 0 0 22px rgba(251, 63, 138, .6)` | the wave the hit sends out; v4 case-stage.css .v4c-wave; рішення користувача, D-209 (v4) carried by D-236 |
| `--gradient-button-sweep` | `linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, .16) 50%, transparent 70%)` | the light running through a busy act, Rolling; v4 case-page.css .v4c-go.is-rolling::after; рішення користувача, D-209 (v4) carried by D-236 |

**Read from the kit as it stood.** The tiers' lit pair (`--color-rarity-4-lit`, `--color-rarity-5-lit`) for every tier colour v4 read through `--r-lit`; `--color-card-deep` (#0D0C2C) for the observed rows' ground; `--color-up` and `--color-down` for whom a change favours; `--color-card` and `--color-mode-light` for How's plate, kit.css part 3's prose plate that v4 drew it on; `--shadow-skin-card` for the skin under the ruler; `--gradient-mode-cases` and `--gradient-mode-battles` for Before you open's tiles; `--art-fx-plasma`, `--art-fx-plasma-tall` and `--art-fx-bolt` for the rare marks on the case's cards; the money strip's own variables (`.spend`, `D-234`) for What this case pays.

**Local properties.** Geometry a block reads only inside itself stays a literal beside its v4 rule in a comment: Before you open's 20 by 22px padding and 44px tile, the observed rows' 22px sides and 15px figures, the ruler's 64px head room, 18px corner and 112 by 88px item, How's 48px column gap, What this case pays' 32px dollar and its two container folds at 980 and 480px, the flash's 420px (260 under 900px) and the wave's 220px.

**Values changed, variable, value, why.** None. Rules added to the shell's page layout, no value changed: the case head and the commit keep the banner's insets from 900px, the commit stands on the content edge under 900px and Before you open 12px inside it, the case screen's rhythm (commit 14px, Before you open 28px, What this case pays 48px, Published against observed 40px), and the live drops after the content on a page whose act is on its first screen (`D-126`).

## 24. Stage 07 step 5, Deposit in colour from the kit, `D-237`

**Variables added to `:root`.** None: the root holds 540, as after `D-236`. Deposit was drawn only in grey, so its blocks read the language already in the kit: the Payment panel's provider option (`--color-tile-veil`, `--shadow-edge`, its edge in `--color-button`) for the ways to pay, the Disclosure's row ground (`--gradient-row`) for What still works, the Deposit dock's plate (`--gradient-plate`, `--shadow-plate-edge`) for This deposit, `--size-row` for a method tile's height, `calc(5 * var(--size-tap))` for a still-works row, as the Field's row reads it.

**Local properties.** `--methods-tile` 124px, `wireframes/_wf.css` `.wf-pay-g` `minmax(124px, 1fr)`, the narrowest tile, technical, carried from the grey; `--record-w` 520px, the one-column card's width (`.dialog` `--dialog-w-card`), technical.

**Values changed, variable, value, why.** None. Rules added to the shell's page layout, no value changed: a Section head standing alone in the slot takes its content 16px under it (the head's own margin), and What still works and This deposit stand 48px under the notice, as Home's panels with their own titles.
