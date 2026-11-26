# Architecture of the system

The rules of `design/system/`, the code the product loads, and of `design/kit/`, the stand that shows it. Written at stage 08 step 4, 26 November 2026. Its visible place is `design/kit/architecture.html`, the first page of Foundations, and a change here rebuilds that page in the same step.

## Two ladders, both called levels

They are different axes, and mixing them is the commonest mistake (`CLAUDE.md`, "Two ladders").

**The ladder of tokens: where a value comes from.** Two levels, in one file, `design/system/tokens.css`.

1. **Primitive.** A raw value with its origin comment beside it, carried from `design/kit/kit.css` line for line: `--color-*`, `--space-*`, `--radius-*`, `--size-*`, `--tracking-*`, `--font-*`, `--motion-*`, `--shadow-*`, `--gradient-*`, `--blur-*`, `--filter-*`, `--shape-*`, `--icon-*`. The pictures, `--art-*`, live beside it in `design/system/art.css` (`D-259`).
2. **Semantic.** A role a component reads: a job that repeats in two blocks or more, may part from its neighbour, and paints one surface. Every role is a `var()` of a primitive, never a literal, and its comment says who reads it, its parent and its contrast in both themes.

A component token, a third level, is made only at step 5 and only where a state finds no semantic role. A job that two components or more repeat is a role even when the components bring it, not a token of each: the atoms brought four (`--line-act`, `--line-lit`, `--line-control`, `--bg-error`, D-264), the molecules five (`--line-focus-on-plate`, `--text-meta-on-plate`, `--bg-scrim-sheet`, `--bg-handle`, `--depth-menu`, D-265).

**The ladder of components: what contains what.** Level is one plus the highest level of what the component contains, capped at three:

1. **Atoms** contain no component.
2. **Molecules** contain an atom.
3. **Organisms** contain a molecule or an organism. The cap holds: whatever an organism contains, it stays an organism. Inside the level, one that contains another loads after it.

From stage 09, **patterns** stand above the organisms. The level is produced once, in `design/kit/inventory.md`, and only read after that: it sets the files, the `@import` order, the stand's groups and the order of the rounds. Grouping by purpose at the top level is forbidden: by purpose a button and the sign in dialog are both "forms", although one holds the other.

## Roles and their names

The prefix of a role names the surface it paints, because each surface has its own threshold (WCAG 1.4.3 and 1.4.11).

| Prefix | Surface | Threshold |
|---|---|---|
| `--text-*` | ink: words, and glyphs | 4.5:1; 3:1 for a glyph or large text |
| `--bg-*` | fill: grounds, plates, marks | 3:1 where the fill carries meaning; a ground is what ink is measured on |
| `--line-*` | line: rules, edges, rings | 3:1 where the line carries meaning; a decorative divider is exempt |
| `--depth-*` | a lift, a glow, a shadow under art | none; colour without a contrast job |

The suffix `-on-plate` marks the same job standing on a coloured plate or a picture rather than on the theme's ground (`--text-hi` and `--text-on-plate`): the theme moves the ground and leaves the plate, so the two part in the light theme. A role on one surface never paints another, even at the same value: a fill on a 12px label passes as a fill and fails as text.

## What a component reads

- **Colour only through the semantic level.** The theme and a rebrand override colour, and a component that reads a colour primitive is a hole the first theme finds. The exception is named: a colour read in one block only stays a primitive until step 9 decides (`tokens-audit.md`, "What the semantic level does not take yet").
- **Geometry, type and motion straight from the primitives.** A radius, a gap or a duration has nothing to override.
- **No literal.** No hex and no pixel value in a component's file; a state reads a state token (`--bg-hover`, `--bg-active`, `--line-focus`), made at step 5 in both themes, or, where it lands on no role, a component token (`--button-bg-disabled`) made by the founder's decision at the round's gate (`D-263`). There is no opacity for disabled: disabled is drawn once, on the Button, and a control otherwise stays live and refuses (`D-58`).

## The themes

The product is dark from its first day (design principle 4, `D-258`). `:root` holds the dark roles, and `[data-theme="dark"]` repeats them, so a part of a page can stay dark inside a light one. `[data-theme="light"]` overrides the semantic level only, never a primitive. Every role has its pair. A pair is not a mirror: contrast is measured against the opposite ground, so the light theme takes another step of a colour, or a new value named "variable, value, why" in `tokens-audit.md`.

## Two folders

```
design/system/      what the product loads; a package that can be lifted out whole
  tokens.css        primitive, semantic, the light pair
  base.css          reset, the page's type and ground, the shell's layout
  art.css           the pictures
  index.css         from step 5: tokens, base, art, then @import by level
  components/       one file per component
  screens/          one file per screen for its own blocks (D-259)
design/kit/         what shows the system to a person
  _nav.js _page.css the stand's panel and its own styles; _tokens.js reads tokens.css for the pages
  overview.html     the hub
  *.html            a page per foundation, per component
  docs/             the audit, the census, this file; the inventory stays at design/kit/inventory.md (D-258)
```

A product class in the stand, or a stand style in a component's file, is a defect. No screen of `design/` links `_page.css`.

## Why `@import` goes by level

`index.css` loads `tokens.css`, `base.css` and `art.css` first, then the atoms, then the molecules, then the organisms, then the screens' own blocks. Inside a level, a component that contains another loads after it. The cascade then lets a container adjust what it holds, and never the other way round. Alphabetical order would let a Button load after the Dialog that styles it.

## Adding a component: five things at once

1. `design/system/components/<name>.css`, with its states in both themes.
2. `design/kit/<name>.html`, its page with five blocks.
3. A record in `design/kit/_nav.js` (`KIT_NAV`), in the group of its level.
4. A row in `design/kit/inventory.md` with its level.
5. An `@import` in its level's group in `index.css`, not at the end of the file.

A card on the hub is not a sixth: the registry draws it.

## Where a change goes

- **A value** (a colour, a size, a duration): one line in `tokens.css` and a row in `tokens-audit.md`, "variable, was, becomes, why". It reaches every component through `var()`.
- **A form** (a variant, a part, a state): the component's file and its page.
- **A screen's markup:** the screen, wearing the system's classes. A screen never holds a value of its own.
