# wireframes/: rules that break the artefact forever if broken

1. **This folder is grey and is never recoloured.** Colour goes onto copies in `design/`, never here.
2. **Structure and the set of states belong to this folder.** A coloured copy owns only the visual layer; copy text from stage 05 belongs to `voice/docs/microcopy.md` and the IA node, and only sits here.
3. **`_wf.css` is the grey contract and the only source of look.** Inline CSS on a screen lives only as a one-off rule through `var()`; anything repeated, and every token value, lives in `_wf.css`.
4. **`index.html` is the product's Home; the hub listing every screen is `overview.html`.**
5. **An unknown figure is drawn as a sample and marked as one in its IA node, `D-124`.** "Not available" belongs to degraded and system states only.
6. **Every drawn control answers**: it acts as labelled or refuses with its reason beside it, and one figure on several screens is read from one declaration in `_nav.js`.
7. Conventions in detail: `docs/conventions.md`. The screen registry: `_nav.js`.
