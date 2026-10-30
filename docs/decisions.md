

---

## D-205. Ukrainian in the place of Russian, and a flag beside each language

**Date:** 2026-10-30. **Stage:** 06, step 6. **Decided by:** the founder, on the language list: "тут я бы добавил бы флаги и убрал бы русский и поставил бы украинский"; asked which flags and which shape, "по стране языка" and "круглые 20px". **Binds:** `wireframes/_nav.js` `LANGS`, `design/_design.js`, `design/_theme.css`, `voice/docs/microcopy.md` G13 and 5.11-25.

**What was decided.**

1. **The ninth language is Ukrainian, `uk`, in the place of Russian.** The change is made in the grey shell, so every screen and the settings list take it, and the copy inherits it. It is the one option of the nine that is not the baseline's set, `baseline.md` section "Header". A code kept in the session from before the swap falls back to English.
2. **A round 20px flag stands beside each language** in the coloured copy, in the list and on the closed control in the rail and the footer: English the United Kingdom, Chinese China, Portuguese Portugal, Spanish Spain, Ukrainian Ukraine, the rest by their own code. The flags are circle-flags 2.7.0, MIT, inlined in `design/_theme.css` so they are there the moment the list opens, not fetched one by one, from the source files kept in `design/concept/assets/flags/`; `design/_design.js` names a flag from the code the renderer wrote. The grey screen draws none.

**Rejected.** Keeping `D-42`'s "no flag icons". Flags by the CS2 audience, the United States for English and Brazil for Portuguese.

**Proven.** The list open, the closed field on English and on Ukrainian at 1440 and 360; the rail's control collapsed and open. Structural diff zero at 360 and 1440 on both pages; no horizontal scroll at nine widths on both pages.

**The cost.** `D-42` gave the reason against flags and it still holds: a flag is a country and a language is not, so Chinese, Portuguese, Spanish and English each carry a claim about whose language it is. The founder took that cost. The list now departs from the baseline's by one option, named here and in node 0.1.
