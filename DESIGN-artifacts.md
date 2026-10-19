# DESIGN-artifacts

**What this file is.** The draft design document of stage 06, opened at step 3b on 19 October 2026: the approved brand decisions and the concept language, each value with its origin. It is not the product `DESIGN.md`: stage 07 forms that one from the code of the coloured screens plus this file, and carries every origin across as written. A value with no origin is not entered here.

**Visible place.** `design/concept/concept.html`, built at step 5: palette, type, shape and icons render there live, each with its attribute and origin. Until step 5 this file has no page, the same as `concept.md`.

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
| `--color-panel-violet` | `#180A35` | panel, violet | `наявний бренд`, `baseline.md` 5, 6 elements | not on the plate | role `[?]`, see section 9 |

### Accents

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-pink` | `#FB3F8A` | the primary: the one lit action, the logo | `рішення користувача`, `D-185`; `піксель плейта, зона 2` | `#FB3F8A`, zone 2 | A3 |
| `--color-blue` | `#65A3FF` | secondary accent | `наявний бренд`, `baseline.md` 5 | `#609DFC`, zone 2 | A1 |
| `--color-gold` | `#FADA62` | the coin and every price | `наявний бренд`, `baseline.md` 5 | `#FADB58`, zone 2 | A5 |
| `--color-green` | `#33CC66` | success | `наявний бренд`, `baseline.md` 5 | `#25D562`, zone 2 | A5 |
| `--color-violet` | `#7E2DC8` | 11 text elements, role `[?]` | `наявний бренд`, `baseline.md` 5 | not on the plate | see section 9 |

### Text

| Variable | Value | Role | Origin | Plate pixel | Attribute |
|---|---|---|---|---|---|
| `--color-text-hi` | `#FFFFFF` | high emphasis, figures | `наявний бренд`, `baseline.md` 5, 221 elements | `#FEFEFE`, zone 2 | A5 |
| body text | open | body | two answers, `#9F9F9F` (940 elements) and `#A5A5A5` (174) | `#9B9B9B`, zone 2 | section 9 |
| muted text | open | secondary lines | three answers, `#CECED4`, `#727B8C`, `#9E9DB1` | not on the plate | section 9 |

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

**No display face**, `D-182` point 5: the pack's two Google Fonts candidates per role are not drawn. **The type scale is open:** the baseline uses thirteen sizes, `baseline.md` 13.5 point 4, and bringing them to one value per job is a step 4 choice, section 9.

---

## 5. Shape

The founder's direction: rounded, on a three step ladder, small, medium and large, `D-182` point 4, values taken from the baseline where it already rounds.

| Variable | Value | Origin | Attribute |
|---|---|---|---|
| `--radius-s` | `8px` | `наявний бренд`, `baseline.md` 13.2: 47 surfaces, the most frequent rounded value | A2 |
| `--radius-m` | `16px` | `наявний бренд`, `baseline.md` 13.2: the welcome dialog | A2 |
| `--radius-l` | open | the baseline has no larger panel radius; the plate's caption reads 24px, a drawn caption, not a pixel | section 9 |
| `--radius-pill` | `999px` | `наявний бренд`, `baseline.md` 13.2: every text button is a full pill, written both `25px` and `999px`; one spelling of one shape, `baseline.md` 13.5 point 2 | A2, A3 |

**The rounded side border in the rarity colour** is in, `D-183` point 2, A4. Its width and radius are a step 4 choice.

---

## 6. Light and depth

Principles only; the values are drawn at step 4 and enter here when chosen.

- **One lit action per screen**, the pink primary with a glow of its own colour, A3, technique S3. Every other button is quiet.
- **Rarity glows**: a line in the rarity colour under the item, with a glow of the same colour, A4, techniques S4 and C1.
- **Two step depth**, a low shadow for an item and a softer one for a container, A1, technique S2. Not glass, `D-183` point 1.
- A glow or gradient with no job is slop, `D-183` point 1.

---

## 7. Icon language

| What | Value | Origin | Attribute |
|---|---|---|---|
| Style | line icons, one stroke weight, rounded caps and joins, no fills, on a square grid | `піксель плейта, зона 7`: ten line icons of one stroke | A2 |
| Set | Solar, Linear style, inline SVG | the stage's named icon set, `dp-concept` dependencies; its Linear style matches zone 7 | A2 |
| Colour | text white or body grey at rest, pink when active | `піксель плейта, зона 7` and zone 8, the tabs | A3 |
| Count and behaviour | many, and interactive; an icon sits in a circle only where the circle is the control | `рішення користувача`, `D-183` point 1 | A1 |

---

## 8. UI tone

Dark and electric, never heavy, `CLAUDE.md` principle 4. Energy sits in the item and in the one action; the money is calm and legible, A3 and principle 3. Figures are white or gold in Roboto 900, with the chance and the age of a published figure beside the price at commitment, A5, technique C2. Game feel comes from the skins, their rarity colour, our own banner and case art, and scale, `D-183` point 4: banners and case art may be generated in our own style, skins never. Motion is stage 11.

**What on the plate is not product truth.** Its copy ("Turn pressure into profits", "Higher odds", "Play fair. Open smart. Clutch more.") breaks the voice and is not product copy; product strings come from `voice/docs/microcopy.md`. Its rarity names are drawn. Its mobile mock puts the logo in the header, which the navigation model forbids. Its banner lettering is not Roboto. Its own logo zone was rejected and replaced by `D-184`.

---

## 9. Open

These have more than one answer in the baseline, or none, and are the founder's or step 4's to settle. Nothing above assumes them.

1. **Body text:** `#9F9F9F` (940 elements) or `#A5A5A5` (174). Both pass AA.
2. **Muted text:** one of `#CECED4`, `#727B8C`, `#9E9DB1`, or two with named jobs. `#727B8C` fails AA on a card.
3. **`--radius-l`:** the baseline has no value; a step of our own is needed, `D-182` point 4.
4. **Roles of `#180A35` and `#7E2DC8`:** the violet text fails 3:1.
5. **Step 4, the baseline's contradictions,** `baseline.md` 13.5: thirteen type sizes, four button heights, six letter-spacings, five line colours, two field values outside the palette (`#0F0D3E`, `#332CD1`), and the label colour on the pink button.
