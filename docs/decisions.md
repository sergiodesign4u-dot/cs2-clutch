

---

## D-205. Ukrainian in the place of Russian, and a flag beside each language

**Date:** 2026-10-30. **Stage:** 06, step 6. **Decided by:** the founder, on the language list: "тут я бы добавил бы флаги и убрал бы русский и поставил бы украинский"; asked which flags and which shape, "по стране языка" and "круглые 20px". **Binds:** `wireframes/_nav.js` `LANGS`, `design/_design.js`, `design/_theme.css`, `voice/docs/microcopy.md` G13 and 5.11-25.

**What was decided.**

1. **The ninth language is Ukrainian, `uk`, in the place of Russian.** The change is made in the grey shell, so every screen and the settings list take it, and the copy inherits it. It is the one option of the nine that is not the baseline's set, `baseline.md` section "Header". A code kept in the session from before the swap falls back to English.
2. **A round 20px flag stands beside each language** in the coloured copy, in the list and on the closed control in the rail and the footer: English the United Kingdom, Chinese China, Portuguese Portugal, Spanish Spain, Ukrainian Ukraine, the rest by their own code. The flags are circle-flags 2.7.0, MIT, inlined in `design/_theme.css` so they are there the moment the list opens, not fetched one by one, from the source files kept in `design/concept/assets/flags/`; `design/_design.js` names a flag from the code the renderer wrote. The grey screen draws none.

**Rejected.** Keeping `D-42`'s "no flag icons". Flags by the CS2 audience, the United States for English and Brazil for Portuguese.

**Proven.** The list open, the closed field on English and on Ukrainian at 1440 and 360; the rail's control collapsed and open. Structural diff zero at 360 and 1440 on both pages; no horizontal scroll at nine widths on both pages.

**The cost.** `D-42` gave the reason against flags and it still holds: a flag is a country and a language is not, so Chinese, Portuguese, Spanish and English each carry a claim about whose language it is. The founder took that cost. The list now departs from the baseline's by one option, named here and in node 0.1.

**Fixed the same day.** The founder: "да давай UA", and on the open list, "визуально правая часть выходит за дроп", and on the closed rail. Ukrainian now shows the mark UA; its code stays `uk`, the language's own, and a third field in `LANGS` carries the mark. The list's two columns had been sized by their content, so where the footer's field is narrow, 260px at 1199 and 280 at 1280, the right column ran past the panel: the columns now share the width, the rows are tighter, the footer's panel is never narrower than 320px and grows to its left, and below 360 the codes leave the screen, the flag carrying the same mark. In the closed rail, 70px wide, the code leaves too and the flag and caret stand alone; the code stays in the control's name. Measured at eleven widths from 320 to 1920 in the footer and the rail: no option past its panel. Structural diff zero; no horizontal scroll at nine widths.

---

## D-206. The closed rail's label as the baseline's

**Date:** 2026-10-30. **Stage:** 06, step 6. **Decided by:** the founder, on the label a closed rail shows under the pointer, beside the baseline's: "мне нравится, но я бы сделал чуть больше текст и чуть больше отступы воздуха добавил бы и цвет бы поменял ближе к чему-то такому". **Binds:** `design/_theme.css`.

**What was decided.** The label is a square plate flush against the rail's edge in `--color-ticker`, 16px bold white, 24px either side and 12px above and below, at least 120px wide and 48px high. It was a raised pill in 13px, 16px off the rail. One thing the baseline's has not: a 1px `--color-line-soft` edge, because ours opens over the ticker, which is the same near black, and without the edge the plate vanishes there.

**Read from.** The founder's screenshot of the baseline's label, 30 October 2026, read at 2x: plate `#020B17`, about 122 by 50px, text 16px bold, 23px from the plate's left edge.

**Proven.** Captured over Cases, a row not launched yet and the language control at 1440. Structural diff zero at 360 and 1440 on both pages; no horizontal scroll at nine widths. **The cost.** None: no new value.

**Updated the same day.** Asked whether a row not launched yet should put Not launched yet on a second line, the founder: "давай сделаем чипсом рядом". Such a row now shows its name on the plate and Not launched yet beside it as a chip, the mode cards' chip: pill, 12px bold, `--color-text-soft` on white at 9 % over the plate. The row's name is the plate, so the chip sits right after it; `design/_design.js` copies the row's own mark into `data-chip`. Captured over Case battles and Top wins at 1440; structural diff zero; no horizontal scroll at nine widths.

**Corrected the same day.** The founder: "ничего не поменялось ... я имел в виду всю подсказку, когда свёрнуто боковое меню, как чип такой рядом, как раньше было, просто раньше оно было маленьким и со странной подложкой". The square plate flush with the rail was a misreading. The label is a chip again: a pill 40px high standing 12px off the rail, as before this record, with this record's 16px bold white and 24px either side, and the near black `--color-ticker` with a 1px `--color-line-soft` edge in place of the old raised blue. A row not launched yet keeps its name and the small chip beside it inside the pill. Captured over Cases, Case battles, Top wins and the language control at 1440; structural diff zero; no horizontal scroll at nine widths.

