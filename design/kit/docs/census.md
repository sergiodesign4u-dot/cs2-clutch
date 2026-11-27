# Census of forms

How every control of the coloured product actually looks, measured in the browser and never read from the CSS: the computed style of each control on every state of every coloured screen, at two widths. Stage 08 measures twice with the same walk, before the system (step 1, below) and after it (step 6, appended under it), and the second must close every row of the first. Stage 12 reads both before its rollout: no "control without a form" may stay open there.

Its visible place is the block "Census of forms" on `design/kit/pixel-proof.html`, built at step 9 as the pack sets it.

## Measure before the system (step 1)

**Taken on 26 Nov 2026** by `census.js` (kept locally in `.playwright-mcp/s08/`, ignored), on the local copy at port 8765, reduced motion on.

- **Corpus.** Every state `design/_nav.js` registers: 8 screens, 51 addresses (pages and the `?account`, `?count=` and `?land=` switches), at 1440 and at 360. 102 loads, none failed, no script error on any.
- **360 measured, not intended.** `document.documentElement.clientWidth` was 360 on all 51 loads at 360, and `scrollWidth` never exceeded it: no horizontal scroll on any state.
- **A control** is `a`, `button`, `label`, `summary`, an input, a select, a textarea, an element with `role="button"` or an `onclick`, or an element that brings a `cursor: pointer` its parent does not have (a glyph inside a button is not a second control). The stand's own panel (`#sidebar`, its grip and its toggle) is not the product and is left out.
- **Taken whole, folded after.** For each control: font size, weight and tracking, all four paddings, the radius, the width and colour of three borders, fill colour and image, text colour, transform, box shadow, text transform, and whether it is visible. 21990 controls were taken, 8885 of them visible; the rest sit in closed menus and layers, which the states that open them measure. The fold came afterwards, on the full data: by the component a control belongs to (the block of its first kit class, or the nearest component around a bare element), and a "form" is the whole set of properties above, so nothing that told two controls apart was thrown away before it was looked at.

### 1. Drift inside a family

For each family, every property that takes more than one value, with how often. More than one value is a candidate for drift, not a variant, until an axis of `design/kit/inventory.md` (rank, content, size) is named as its cause. The census counts; step 2 decides.

#### Line colours, the costliest drift

Borders of a width above zero, and the 1px or 2px rings drawn as an inset box shadow, which is how the kit draws every edge. Counted on visible controls.

| Family | Line | Colour | Controls |
|---|---|---|---|
| Button | ring 1px inset | rgba(255, 255, 255, 0.05) | 830 |
| Button | ring 2px inset | rgb(223, 5, 92) | 320 |
| Button | ring 1px inset | rgba(255, 255, 255, 0.07) | 10 |
| Popover menu | ring 1px inset | rgba(255, 255, 255, 0.05) | 204 |
| Popover menu | ring 1px inset | rgba(255, 255, 255, 0.07) | 108 |
| Payment panel (inside) | ring 1px inset | rgba(255, 255, 255, 0.07) | 140 |
| Recent drop card | ring 1px inset | rgba(255, 255, 255, 0.05) | 132 |
| Segmented control | ring 1px inset | rgba(255, 255, 255, 0.07) | 120 |
| Rail | ring 1px inset | rgba(255, 255, 255, 0.07) | 51 |
| Header | ring 1px inset | rgba(255, 255, 255, 0.07) | 51 |
| Text field (form control) | ring 1px inset | rgba(255, 255, 255, 0.07) | 48 |
| Text field (form control) | ring 2px inset | rgb(255, 92, 122) | 2 |
| Checkbox (form control) (inside) | ring 1px inset | rgb(158, 157, 177) | 40 |
| Field | ring 1px inset | rgba(255, 255, 255, 0.07) | 14 |
| Field | ring 1px inset | rgba(251, 63, 138, 0.45) | 14 |
| Field | ring 2px inset | rgb(255, 77, 106) | 6 |
| Text area (form control) | ring 1px inset | rgba(255, 255, 255, 0.07) | 22 |
| Text area (form control) | ring 2px inset | rgb(255, 92, 122) | 2 |
| Favourite toggle | ring 1px inset | rgba(255, 255, 255, 0.07) | 22 |
| Field (inside) | ring 1px inset | rgb(158, 157, 177) | 20 |
| Radio (form control) (inside) | ring 2px inset | rgb(255, 255, 255) | 6 |
| Radio (form control) (inside) | ring 1px inset | rgb(158, 157, 177) | 6 |
| Payment panel | ring 1px inset | rgba(255, 255, 255, 0.07) | 6 |
| Hero | ring 1px inset | rgba(255, 255, 255, 0.1) | 2 |

Three readings, for step 2:

- **The tile edge is drawn at three alphas.** White at .05 on the Button, the Popover menu's rows and the Recent drop card; white at .07 on the Popover menu's trigger, the Payment panel's tiles, the Segmented control, the Rail, the Header, the Text field, the Text area, the Field and the Favourite toggle; white at .10 on the Hero. One job, the 1px edge of a dark tile. The Popover menu carries two of the values inside one component.
- **A refusal is ringed in two reds.** The Field's declaration in Sign in reads `--color-error` (rgb 255 77 106); the Text field and Text area of the Verify form read `--color-down` (rgb 255 92 122). Same role, same 2px ring.
- **The box of a check or a radio is ringed in the meta grey** (`--color-text-muted`, rgb 158 157 177), the one control whose edge is not white at a low alpha. A named difference or drift: step 2.

#### Other properties

Border colours are left out of this table: a border of width zero reads `currentColor`, which is the text colour and is counted under `color`.

| Family | Visible | Forms | Property | Values (count) |
|---|---|---|---|---|
| Feed tile | 2496 | 4 | font-size | 12px (1560), 16px (936) |
|  |  |  | padding-top | 6px (1092), 0px (936), 4px (468) |
|  |  |  | padding-right | 0px (1560), 4px (468), 3px (468) |
|  |  |  | padding-bottom | 6px (1092), 0px (936), 8px (468) |
|  |  |  | padding-left | 0px (1560), 4px (468), 3px (468) |
|  |  |  | border-top-left-radius | 0px (1560), 16px (936) |
|  |  |  | text-transform | uppercase (1560), none (936) |
| Footer | 1530 | 5 | font-size | 15px (1224), 16px (306) |
|  |  |  | padding-top | 0px (1326), 12px (204) |
|  |  |  | padding-right | 0px (1326), 44px (204) |
|  |  |  | padding-bottom | 0px (1326), 12px (204) |
|  |  |  | padding-left | 0px (1326), 14px (204) |
|  |  |  | border-top-left-radius | 0px (1326), 12px (204) |
|  |  |  | background-image | none (1326), repeating-linear-gradient(135deg, rgba(255,  (204) |
|  |  |  | box-shadow | none (1326), rgba(255, 255, 255, 0.25) 0px 1px 0px 0px in (204) |
| Button | 1452 | 26 | font-size | 13px (1164), 12px (160), 16px (86), 14px (30), 11px (12) |
|  |  |  | padding-top | 0px (1438), 8px (12), 4px (2) |
|  |  |  | padding-right | 0px (889), 20px (296), 14px (123), 28px (72), 8px (44), 4px (24) |
|  |  |  | padding-bottom | 0px (1438), 8px (12), 4px (2) |
|  |  |  | padding-left | 0px (889), 20px (296), 14px (123), 28px (79), 8px (30), 4px (24) |
|  |  |  | border-top-left-radius | 12px (1434), 8px (18) |
|  |  |  | background-color | rgb(11, 10, 34) (830), rgba(11, 10, 34, 0.55) (320), rgb(223, 5, 92) (274), rgba(6, 8, 24, 0.45) (10), rgba(150, 160, 215, 0.14) (10), rgba(0, 0, 0, 0) (8) |
|  |  |  | background-image | none (858), linear-gradient(105deg, rgba(0, 0, 0, 0) 42% (594) |
|  |  |  | color | rgb(206, 206, 212) (838), rgb(255, 255, 255) (604), rgb(158, 157, 177) (10) |
|  |  |  | box-shadow | rgba(255, 255, 255, 0.05) 0px 0px 0px 1px in (830), rgb(223, 5, 92) 0px 0px 0px 2px inset (320), none (292), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (10) |
|  |  |  | text-transform | uppercase (1422), none (30) |
|  |  |  | letter-spacing | 0.78px (1164), 0.72px (158), 0.96px (86), 0.28px (30), normal (12), 0.36px (2) |
| Popover menu | 312 | 5 | font-size | 14px (258), 16px (54) |
|  |  |  | font-weight | 700 (204), 400 (54), 500 (54) |
|  |  |  | padding-right | 16px (153), 32px (54), 0px (51), 12px (27), 7px (27) |
|  |  |  | padding-left | 16px (153), 7px (54), 12px (54), 0px (51) |
|  |  |  | background-color | rgb(11, 10, 34) (258), rgba(6, 8, 24, 0.78) (54) |
|  |  |  | color | rgb(206, 206, 212) (204), rgb(255, 255, 255) (108) |
|  |  |  | box-shadow | rgba(255, 255, 255, 0.05) 0px 0px 0px 1px in (204), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (108) |
| Text link | 300 | 11 | font-size | 13px (174), 14px (50), 12px (28), 16px (28), 11px (20) |
|  |  |  | font-weight | 700 (272), 400 (28) |
|  |  |  | padding-top | 0px (244), 12px (32), 10px (24) |
|  |  |  | padding-bottom | 0px (244), 12px (32), 10px (24) |
|  |  |  | color | rgb(251, 63, 138) (262), rgb(206, 206, 212) (20), rgb(255, 255, 255) (18) |
|  |  |  | letter-spacing | 0.26px (174), 0.28px (50), normal (40), 0.24px (28), 0.32px (8) |
| Logo | 204 | 3 | padding-top | 0px (153), 8px (51) |
|  |  |  | padding-right | 0px (153), 20px (51) |
|  |  |  | padding-left | 0px (153), 20px (51) |
| Favourite toggle | 172 | 3 | font-size | 13px (150), 14px (22) |
|  |  |  | font-weight | 400 (150), 700 (22) |
|  |  |  | padding-right | 6px (150), 0px (22) |
|  |  |  | padding-left | 6px (150), 0px (22) |
|  |  |  | border-top-left-radius | 0px (150), 12px (22) |
|  |  |  | background-color | rgba(0, 0, 0, 0) (150), rgba(11, 10, 34, 0.7) (22) |
|  |  |  | color | rgb(255, 255, 255) (168), rgb(251, 63, 138) (4) |
|  |  |  | box-shadow | none (150), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (22) |
| Header | 159 | 2 | font-size | 16px (108), 13.3333px (51) |
|  |  |  | padding-top | 5px (108), 0px (51) |
|  |  |  | padding-bottom | 5px (108), 0px (51) |
|  |  |  | border-top-left-radius | 0px (108), 12px (51) |
|  |  |  | background-color | rgba(0, 0, 0, 0) (108), rgb(26, 25, 69) (51) |
|  |  |  | color | rgb(159, 159, 159) (108), rgb(0, 0, 0) (51) |
|  |  |  | box-shadow | none (108), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (51) |
| Rail | 153 | 3 | font-size | 14px (102), 13.3333px (51) |
|  |  |  | font-weight | 900 (102), 400 (51) |
|  |  |  | padding-right | 0px (102), 16px (51) |
|  |  |  | padding-left | 0px (102), 20px (51) |
|  |  |  | border-top-left-radius | 0px (102), 12px (51) |
|  |  |  | background-color | rgba(0, 0, 0, 0) (102), rgb(26, 25, 69) (51) |
|  |  |  | color | rgb(255, 255, 255) (102), rgb(0, 0, 0) (51) |
|  |  |  | box-shadow | none (102), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (51) |
|  |  |  | text-transform | uppercase (102), none (51) |
|  |  |  | letter-spacing | 0.14px (102), normal (51) |
| Segmented control | 150 | 4 | font-size | 15px (138), 12px (12) |
|  |  |  | padding-right | 12px (138), 14px (12) |
|  |  |  | padding-left | 12px (138), 14px (12) |
|  |  |  | background-color | rgba(11, 10, 34, 0.7) (120), rgb(223, 5, 92) (30) |
|  |  |  | background-image | none (120), repeating-linear-gradient(135deg, rgba(255,  (30) |
|  |  |  | box-shadow | rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (120), rgba(223, 5, 92, 0.32) 0px 4px 14px 0px (30) |
|  |  |  | text-transform | none (138), uppercase (12) |
|  |  |  | letter-spacing | normal (138), 0.24px (12) |
| Recent drop card | 132 | 6 | padding-top | 16px (66), 14px (66) |
|  |  |  | padding-right | 12px (66), 10px (66) |
|  |  |  | padding-bottom | 18px (66), 16px (66) |
|  |  |  | padding-left | 12px (66), 10px (66) |
|  |  |  | background-image | radial-gradient(70% 34% at 50% 100%, color(s (66), radial-gradient(70% 34% at 50% 100%, color(s (44), radial-gradient(70% 34% at 50% 100%, color(s (22) |
| Field | 102 | 8 | font-size | 11px (68), 14px (20), 15px (14) |
|  |  |  | font-weight | 700 (68), 400 (34) |
|  |  |  | padding-top | 0px (68), 10px (20), 12px (14) |
|  |  |  | padding-right | 0px (68), 12px (20), 16px (14) |
|  |  |  | padding-bottom | 0px (68), 10px (20), 12px (14) |
|  |  |  | padding-left | 0px (68), 12px (20), 16px (14) |
|  |  |  | border-top-left-radius | 0px (68), 12px (34) |
|  |  |  | background-color | rgba(0, 0, 0, 0) (68), rgb(11, 10, 34) (34) |
|  |  |  | color | rgb(206, 206, 212) (88), rgb(255, 255, 255) (14) |
|  |  |  | box-shadow | none (68), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (14), rgba(251, 63, 138, 0.45) 0px 0px 0px 1px ins (14), rgb(255, 77, 106) 0px 0px 0px 2px inset (6) |
|  |  |  | text-transform | uppercase (68), none (34) |
|  |  |  | letter-spacing | 0.88px (68), normal (34) |
| Bottom bar | 102 | 2 | color | rgb(158, 157, 177) (82), rgb(255, 255, 255) (20) |
| Breadcrumb (inside) | 85 | 2 | color | rgb(206, 206, 212) (49), rgb(255, 255, 255) (36) |
| Field (inside) | 82 | 5 | font-size | 13.3333px (34), 14px (26), 15px (14), 16px (8) |
|  |  |  | font-weight | 700 (40), 400 (34), 900 (8) |
|  |  |  | border-top-left-radius | 0px (40), 4px (34), 12px (8) |
|  |  |  | background-color | rgba(0, 0, 0, 0) (48), rgb(11, 10, 34) (20), rgb(223, 5, 92) (14) |
|  |  |  | color | rgb(251, 63, 138) (40), rgb(0, 0, 0) (34), rgb(255, 255, 255) (8) |
|  |  |  | box-shadow | none (62), rgb(158, 157, 177) 0px 0px 0px 1px inset (20) |
| Text field (form control) | 60 | 4 | font-size | 14px (54), 16px (6) |
|  |  |  | font-weight | 400 (54), 900 (6) |
|  |  |  | padding-right | 12px (56), 0px (4) |
|  |  |  | padding-left | 12px (56), 0px (4) |
|  |  |  | background-color | rgb(11, 10, 34) (50), rgba(0, 0, 0, 0) (10) |
|  |  |  | box-shadow | rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (48), none (10), rgb(255, 92, 122) 0px 0px 0px 2px inset (2) |
| Checkbox (form control) (inside) | 50 | 2 | background-color | rgb(11, 10, 34) (40), rgb(223, 5, 92) (10) |
|  |  |  | box-shadow | rgb(158, 157, 177) 0px 0px 0px 1px inset (40), none (10) |
| one-off: spend | 46 | 12 | font-size | 16px (24), 12px (22) |
|  |  |  | font-weight | 400 (24), 700 (22) |
|  |  |  | padding-top | 14px (32), 18.786px (10), 0px (4) |
|  |  |  | padding-right | 0px (26), 18.786px (10), 14px (10) |
|  |  |  | padding-bottom | 0px (26), 18.786px (10), 14px (10) |
|  |  |  | padding-left | 0px (26), 18.786px (10), 14px (10) |
|  |  |  | border-top-left-radius | 0px (38), 12px (8) |
|  |  |  | background-image | none (38), linear-gradient(120deg, rgb(107, 66, 185), r (4), linear-gradient(120deg, rgb(209, 39, 62), rg (4) |
|  |  |  | box-shadow | none (38), rgba(255, 255, 255, 0.25) 0px 1px 0px 0px in (8) |
|  |  |  | letter-spacing | normal (24), 0.24px (22) |
| Tabs | 38 | 3 | background-image | none (30), linear-gradient(to top, color(srgb 0.984314  (8) |
|  |  |  | color | rgb(206, 206, 212) (28), rgb(255, 255, 255) (10) |
|  |  |  | box-shadow | rgba(0, 0, 0, 0) 0px -2px 0px 0px inset (28), rgb(251, 63, 138) 0px -2px 0px 0px inset (10) |
| Text area (form control) | 24 | 2 | box-shadow | rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (22), rgb(255, 92, 122) 0px 0px 0px 2px inset (2) |
| Payment panel | 12 | 2 | background-color | rgba(0, 0, 0, 0) (6), rgba(11, 10, 34, 0.7) (6) |
|  |  |  | background-image | repeating-linear-gradient(135deg, rgba(255,  (6), repeating-linear-gradient(135deg, rgba(255,  (6) |
|  |  |  | color | rgb(255, 255, 255) (6), rgb(206, 206, 212) (6) |
|  |  |  | box-shadow | rgba(255, 255, 255, 0.25) 0px 1px 0px 0px in (6), rgba(255, 255, 255, 0.07) 0px 0px 0px 1px in (6) |
| Radio (form control) (inside) | 12 | 2 | box-shadow | rgb(255, 255, 255) 0px 0px 0px 2px inset (6), rgb(158, 157, 177) 0px 0px 0px 1px inset (6) |

**Where the Button departs from its own modifiers.** The family has three sizes by class (`--s` 12px, `--m` 13px, `--l` 16px). Measured exceptions, each made by a rule of the block around the button rather than by a modifier, so each is a local redefinition for step 6's second list:

- `.selbar__a` on My items at 360: a `button--m` at **11px** with 4px sides (Steam, Sell, Cash out, Exchange).
- `.daily__tier` on Home: a `button--m` with **10px** sides (Open Nova case and its row), at 13px on one width and 12px on the other.
- `.item-card__acts` on My items: a `button--s` with **4px** sides (Sell for coins, Send to Steam, Exchange).
- `.signin__provs` in Sign in: `button--m button--name` at **14px** with 8px sides (Google, Discord, X), a modifier used nowhere else.
- `.commit__go` on the case screen at 360: `button--l` with **18px** sides where the modifier gives 28px.
- `button--close` is the only button at an **8px** radius against 12px for every other (the dialog's cross, the filter chip's cross): the kit names it its own rank, so a variant with a reason, listed for completeness.

### 2. One job, several forms

The same words on a control, drawn by different classes or at a different emphasis on different screens. Counted on the visible text with digits folded (12.40 and 24.80 read the same), and checked back against the measured rows. Left out as not one job: a destination in the rail and the same destination in the footer (two carriers, `CLAUDE.md` "Baseline"), a payment tile counted twice because its label wraps its input, and a declaration whose two forms are its own unchecked and checked states.

| Job | Forms measured | Where |
|---|---|---|
| Sign in | Button M primary (the header), Button L primary (Sign in with Steam), a Text link at 16px | every guest header; the sign in layer and page |
| Send to Steam | Button S ghost (the item card), Button M ghost (Responsible play's limits, the dialog, the deposit record), Button M primary (the selection bar), a Text link with arrow (What still works) | My items, Responsible play, Deposit |
| Sell for coins | Button S ghost, Button M ghost | the item card and the selection bar |
| Cash out | Button M ghost at 13px, the same classes at 11px | the selection bar at 1440 and at 360 (section 1) |
| Exchange | Button S ghost, Button M ghost at 13px and at 11px, disabled in all | the item card and the selection bar |
| Copy | Button S ghost (a seed on Provably fair, a reference in a refused sign in), Button M ghost (the address on crypto deposit) | Copyable value in three places |
| Add funds +5% | Button S ghost with a fold (the header), Button M primary (the account head) | every signed-in header; My items |
| Try again | Button M primary (a refused sign in's notice), Button L primary (a declined deposit's dock) | Sign in, Deposit |
| Recompute it yourself | Button M primary, Button M ghost (when the proof failed) | the Verify form across its states |
| See the cases | a Text link (the way away from sign in), Button M primary (a notice's act, an empty state's way on) | Sign in, My items |
| Close | the close cross (8px radius) in a dialog's corner, Button M ghost labelled Close in the cash out dialog's acts | Dialog |
| Share this round | the item card's icon act, a Text link with arrow (the interrupted open) | the cash out dialog, the case screen |
| Settings | a Tab, a Text link with arrow in white | the account tabs and the Steam state's link |
| My items | a Tab, a Text link | the account tabs and the interrupted open's note |
| A coin amount | a Segmented control option at 15px, Button S ghost at 12px | the amount presets |
| Provably fair | a Footer link, a Text link with arrow (a note), Button M primary (Home's What opening a case involves) | the footer, the case screen, Home |
| Support | Button M primary (the footer's help), Button M ghost (Home's questions, Responsible play's help), a Footer link | every page |

The script folded 70 texts with more than one form; the rows above are those that are one job. Featured on the catalogue's bar shows two forms that are one control's rest and chosen states, so it is not drift and is not listed.

### 3. Control without a form

The inventory's variants, read from all 134 grey pages at stage 07, minus what the eight coloured screens draw. What is left is the list of forms that would otherwise be invented anew by whoever builds the screen: step 5, then the rollout of stage 12, each time differently. Each row is closed by a decision at step 2, not here. "Evidence" names the class that draws it in colour, or why nothing does.

| Family | Grey variant | In colour | Evidence |
|---|---|---|---|
| Button | secondary, label, M | drawn | `button--ghost button--m` |
| Button | tertiary, icon only, S | drawn | `button--icon`; the stepper's minus and plus in the filter drawer |
| Button | secondary, label, S | drawn | `button--ghost button--s` |
| Button | tertiary, icon only, M | drawn | `header__menu`, `rail__toggle`, `button--close` |
| Button | tertiary, label, M (Sound on, Copy) | drawn in another form | Sound on is `button--icon button--fill`, an icon-only tile whose words are its accessible name; the language is the Popover menu's trigger; Copy is `button--ghost button--m` |
| Button | tertiary, label, S (Resume, Copy, the chip's x) | drawn in another form | the ticker's pause is an 18px round mark of its own (inventory, D-232); the chip's x is `button--close`; Copy is `button--ghost button--s` |
| Button | primary, label, M | drawn | `button--primary button--m` |
| Button | secondary, leading icon and label, M | drawn | `button--ghost button--m button--name` (the sign-in providers) |
| Button | primary, label, L | drawn | `button--primary button--l` (the commit, Sign in with Steam, a declined deposit) |
| Button | secondary, label, L (Send to Steam on the outcome, Round details) | drawn | `button--ghost button--l`: See Coldfront on Home's banner, Read the algorithm on Provably fair's head, Open again on the interrupted open. Withdrawn on verification at step 2: the fold of section 1 missed it, the walk of every component root (`blocks.js`, 26 Nov 2026) found 18 |
| Button | primary, leading icon and label, L (Sign in with Steam) | drawn | `button--primary button--l` with its glyph |
| Button | primary and secondary, leading icon and label, S (the selection bar's Steam and Sell) | drawn in another form | the selection bar draws them at M, shrunk to 11px at 360 (section 1) |
| Navigation item | the rail, the footer, the account menu, the bottom bar | drawn | `rail__item`, `footer__link`, `popover__opt`, `bottom-bar__i` |
| Navigation item | a legal page's table of contents (0.9) | **no form** | legal (0.9) has no coloured screen |
| Card link | label L, label M (the header's figures), leading icon and label L (the footer's counters) | drawn | `case-tile__link`, `feed-tile`, `recent-drop`, `header__fig`, `footer__stat` |
| Text link | label S and M | drawn | `link`, `link--arrow`, `link--quiet`, `link--hi` |
| Text link | label L (a figure as a link on the withdraw route) | **no form** | withdraw (5.3) has no coloured screen |
| Disclosure | label M (a footer column at 360, a section) | drawn | `disclosure` |
| Disclosure | label S (a question) | drawn | Home's and Provably fair's questions |
| Disclosure | label L (a group of questions, support topics) | **no form** | support (0.10) has no coloured screen |
| Tab | label M | drawn | `tabs__t` on the account head |
| Tab | label L (crypto networks) | drawn in another form | the network is chosen in the Popover menu's `--select`, D-238 |
| Breadcrumb link | label M | drawn | `crumb` |
| Breadcrumb link | label S (Support) | **no form** | support has no coloured screen; one occurrence in the grey |
| Menu option | label S (language) | drawn | `popover__opt` in the language menu |
| Favourite toggle | leading icon and label M; icon only M | drawn | `fav`, `fav--square` |
| Segmented control | label M | drawn | `seg__opt` (the count, the sort, the shelf) |
| Checkbox | label M and S; label L (a skin to deposit) | drawn | `check` on My items, Sign in, the filter drawer, the skins deposit |
| Checkbox | icon only S (the cookie layer's ticks) | **no form** | the cookie layer (0.4) has no coloured screen |
| Radio | label M (a provider) | drawn | `radio` in the Payment panel |
| Radio | label L (a Steam offer) and label S (a sticker count) | **no form** | withdraw (5.3) has no coloured screen |
| Select | label M | drawn in another form | every select in colour is the Popover menu's `--select` (country, network, saved address), D-238; no native `select` is drawn |
| Text field | label M; label L (an amount); icon only M (the promo code, a limit's amount) | drawn | `input`, `input--l`, `input--bare`; `pay-panel__code-in` on Deposit, `limits__amount` on Responsible play |
| Text area | label L | drawn | `textarea` in the Verify form |
| Text area | icon only L (support's evidence, settings) | **no form** | support and settings have no coloured screen |
| Field label | label S and M | drawn | `field__l` |
| Field label | label L (the support form's questions) | **no form** | support has no coloured screen |
| Switch | label M (settings' notifications) | **no form on a screen** | the kit has `.switch` (`kit.css` 2493) and the showcase draws it; settings (5.11) has no coloured screen |
| Range | label M | drawn | `range range--tap` in the filter drawer |
| File picker | icon only L | **no form** | support (0.10) only; nothing in colour and no rule of its own in the kit |

**11 variants had no form in colour at step 1, 10 after the row on the ghost L was withdrawn at step 2** and 5 are drawn in another form than the grey's (a decision already taken, D-238, or a shrink at 360 that section 1 lists). Each goes to step 2.

### Checked before believing it

A walk does not see what a state turns on, so the rows above were checked against the code. Rows that did not survive stay here, never deleted:

- **Controls at the browser's 13.33px, withdrawn on verification.** 251 visible controls read the default 13.33px: the check and radio boxes of My items, Sign in, the Payment panel and the filter drawer, and the icon-only header and rail buttons. Each box is the drawn control itself (`appearance: none`, `kit.css` 2484) and each button holds only a glyph: no text is drawn, so the size draws nothing.
- **Switch, kept.** `.switch` exists in `kit.css` and on the showcase, but no coloured state draws it, so "no form on a screen" stands; step 2 decides whether the showcase's form is the form.
- **Select, kept as another form.** No native `select` stands on a coloured page; every choice from a short list is the Popover menu (D-238).
- **Hidden controls.** 13105 of 21990 controls were not visible at load (closed menus and layers, the other width's carrier). They are not counted as missing: every family they belong to is measured visible on another state.


## Measure after the system (step 6)

**Taken on 28 Nov 2026** by the same `census.js`, run with `--sys` (stage 08 step 6, `D-269`): each of the 51 states drawn on `design/system/index.css` by a route swap of its link, with the rename map applied after load (`.playwright-mcp/s08/rename.js`, the 30 rows of `design/kit/inventory.md` and `D-264`'s bot disc). The screens' own markup is not changed until step 8, when it moves with its link; this is the measure of what they will show. Folded by the same `census_an.py`, which now also knows the five names the map gives.

- **Corpus.** The same: 8 screens, 51 addresses, 1440 and 360, 102 loads, none failed, no script error. 360 measured on all 51 narrow loads, and no horizontal scroll on any.
- **The same controls.** 21990 taken, 8885 of them visible, the numbers of step 1 to the control: the rename changes classes, never the tree.
- **Families.** Of the 36 families the two measures name together, 27 read exactly as at step 1, every property and every count. The nine that differ, each by a named row:

| Family | Visible, step 1 to step 6 | Forms | What moved | Row |
|---|---|---|---|---|
| Button | 1452 to 1452 | 26 to 24 | the live daily tier's act and the item card's acts drawn as the family draws them (sides 10 to 20px, 4 to 14px; at 360 the tier's words 12 to 13px); the tile edge at .07 | rename map rows 9, 10, 30 (`tokens-audit.md`, "Merged drift") |
| Popover menu | 312 to 258 | 5 to 3 | the account menu's 54 controls leave it | row 2, the split |
| Account menu | 0 to 54 | 0 to 2 | the same 54 controls under their own name, their look unchanged | row 2 |
| one-off: spend | 46 to 0 | 12 to 0 | Before you spend and What this case pays leave the one-offs | row 3 |
| Money strip | 0 to 46 | 0 to 12 | the same 46 controls, the same 12 forms | row 3 |
| Text link | 300 to 300 | 11 to 10 | the local rules on links become named variants (`.link--tap`, `.link--l`, `.link--quiet`, `.link--hi`, `.link--s`); what the census reads moves only in the padding of the 40px press, now `.link--tap`'s 12px with the room given back; the colours are the same, and the market line's new underline is a property this census does not take | rows 18 to 22 (`tokens-audit.md`, "Moved onto the system's classes") |
| Recent drop card | 132 to 132 | 6 to 6 | the tile edge at .07 | row 30 |
| Text field, Text area | 60 and 24 | 4 and 2 | the refusal ring in the error red | row 29 |

**Section 1 closed.** The line colours, the costliest drift: the tile edge was drawn at .05 on 1166 visible controls and at .07 on 592; after, at .07 on all 1758. A refusal was ringed in two reds, 4 controls in the fall's and 6 in the error's; after, all 10 in the error red. The check and the radio keep their meta grey box, a named difference since step 2 (`D-260`). Every other drift row of step 1 is either a variant step 2 named on an axis (rank, content, size) or one of the rows above.

**Section 2 closed.** The jobs drawn in several forms are the jobs of step 1, each form now a named variant of its family (`D-260`); 70 such jobs before and after. One left: "Open Nova case" is "Open case" with the case in its accessible name (row 9, microcopy 1.0-17). One appears because a link's variant is now its own class: Check this round, `.link--tap` on Home's What opening a case here involves and the plain arrow link elsewhere, the same look.

**Section 3 closed.** The eleven grey variants with no form in colour: one withdrawn at step 2, six closed by a form the kit has, four in `design/kit/docs/backlog.md` (rows 1 to 4), which step 6 wrote (`D-269`, Q5); the backlog's fifth row is the Account head's plain form at a phone (`D-266`).

### Checked before believing it, step 6

- **The same tree.** The walk pairs elements by their place; the rename changes no element, so a pair is always the same element. Checked by count on every load.
- **Read after the transitions.** A class the rename adds after load starts a link's colour transition; the first run read some colours mid-way (a white at 253 253 254). The walk now turns transitions off before the rename, and the numbers above are from that run.
- **The account menu, closed and open.** It is closed at load on all 27 states, so its panel was compared hidden; the open menu was compared on its own page at step 5 (`design/kit/account-menu.html`).
- **What scripts set after a press** (a saved limit's answer, the case's outcome, a copied seed) is not in a load. `rp.js` now writes the saved answer with `.note--hi` (row 25) and `stage.js` the outcome's figure with `.fig--win` (row 28); on `kit.css`, where neither variant exists, nothing changes.
