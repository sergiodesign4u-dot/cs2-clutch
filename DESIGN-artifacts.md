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
| `--color-pink` | `#FB3F8A` | the primary: the one lit action, the logo | `рішення користувача`, `D-185`; `піксель плейта, зона 2` | `#FB3F8A`, zone 2 | A3 |
| `--color-blue` | `#65A3FF` | secondary accent | `наявний бренд`, `baseline.md` 5 | `#609DFC`, zone 2 | A1 |
| `--color-gold` | `#FADA62` | the coin and every price | `наявний бренд`, `baseline.md` 5 | `#FADB58`, zone 2 | A5 |
| `--color-green` | `#33CC66` | success | `наявний бренд`, `baseline.md` 5 | `#25D562`, zone 2 | A5 |

### Text

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-text-hi` | `#FFFFFF` | high emphasis, figures | `наявний бренд`, `baseline.md` 5, 221 elements | `#FEFEFE`, zone 2 | A5 |
| `--color-text` | `#9F9F9F` | body | `наявний бренд`, `baseline.md` 5, 940 elements; `рішення користувача`, `D-186`, over `#A5A5A5` (174) | `#9B9B9B`, zone 2 | A5 |
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

**No display face**, `D-182` point 5: the pack's two Google Fonts candidates per role are not drawn. **The type scale is 13, 15, 18, 24, 40**, `рішення користувача`, `D-187`: the baseline's thirteen sizes, `baseline.md` 13.5 point 4, brought to five, with scale carrying the game feel, A3 and A4.

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
| Style | line icons, one stroke weight, rounded caps and joins, no fills, on a square grid | `піксель плейта, зона 7`: ten line icons of one stroke | A2 |
| Set | Solar, Linear style, inline SVG | the stage's named icon set, `dp-concept` dependencies; its Linear style matches zone 7 | A2 |
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


