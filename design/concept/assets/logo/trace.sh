#!/bin/sh
# Rebuilds the CS2 Clutch logo masters next to this script by tracing A1-a and G2-b from the round 3 sheet.
# Needs potrace (brew install potrace) and Playwright; intermediate masks go to a temporary folder.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
SHEET="$HERE/../logo-styles-r3.png"
WORK="$(mktemp -d)"
mkdir -p "$WORK/word" "$WORK/sym"
node "$HERE/masks.mjs" "$SHEET" "$WORK/word" word 25 20 470 230 6
node "$HERE/masks.mjs" "$SHEET" "$WORK/sym" sym 545 755 210 210 8
for k in letters blue pink; do potrace "$WORK/word/$k.pgm" -s -o "$WORK/word/$k.svg" -t 3000 -a 1.2 -O 1.0 --flat; done
for k in pink blue; do potrace "$WORK/sym/$k.pgm" -s -o "$WORK/sym/$k.svg" -t 3000 -a 1.2 -O 1.0 --flat; done
python3 -I "$HERE/build_trace.py" "$HERE" "$WORK"
python3 -I "$HERE/make.py"
# web icons: favicons from the small-size cut, the larger icons from the traced, lit symbol on its tile
SK="${LOGO_SKILL:-$HOME/.claude/skills/logo-design}/scripts"
if [ -d "$SK" ]; then
  python3 -I "$SK/export_variants.py" "$HERE/symbol.svg" --out-dir "$HERE/web" --name cs2-clutch --title "CS2 Clutch" --only favicon --icon-bg "#0F0E2B" --icon-fg keep --favicon-source "$HERE/symbol-small.svg" --web-icons >/dev/null
  python3 -I "$SK/render_png.py" "$HERE/app-icon.svg" --size 180 -o "$HERE/web/apple-touch-icon.png" >/dev/null
  python3 -I "$SK/render_png.py" "$HERE/app-icon.svg" --size 192 -o "$HERE/web/icon-192.png" >/dev/null
  python3 -I "$SK/render_png.py" "$HERE/app-icon.svg" --size 512 -o "$HERE/web/icon-512.png" >/dev/null
  python3 -I "$SK/render_png.py" "$HERE/app-icon-maskable.svg" --size 512 -o "$HERE/web/maskable-512.png" >/dev/null
else
  echo "logo-design skill not found at $SK: web icons not rebuilt" >&2
fi
rm -rf "$WORK"
