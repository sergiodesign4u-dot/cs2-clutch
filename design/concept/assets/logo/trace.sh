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
for k in letters blue pink; do potrace "$WORK/word/$k.pgm" -s -o "$WORK/word/$k.svg" -t 3000 -a 1.1 -O 0.4 --flat; done
for k in pink blue; do potrace "$WORK/sym/$k.pgm" -s -o "$WORK/sym/$k.svg" -t 3000 -a 1.1 -O 0.4 --flat; done
python3 -I "$HERE/build_trace.py" "$HERE" "$WORK"
python3 -I "$HERE/make.py"
rm -rf "$WORK"
