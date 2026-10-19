"""Builds the CS2 Clutch logo from potrace tracings of the founder's picks, A1-a (wordmark) and G2-b (symbol),
in design/concept/assets/logo-styles-r3.png. Called by trace.sh, which traces into a temporary work folder."""
import json, os, re, sys
out = sys.argv[1]
here = sys.argv[2]  # the work folder trace.sh traced into
PINK, BLUE, GOLD, WHITE, CARD = '#E94D8B', '#65A3FF', '#FADA62', '#FFFFFF', '#0F0E2B'  # baseline section 5

def traced(d, name):
    s = open(os.path.join(here, d, name + '.svg')).read()
    return re.search(r'<g transform="([^"]*)"', s).group(1), re.findall(r'<path d="([^"]*)"', s, re.S)

def layer(d, name, fill, extra=''):
    tr, paths = traced(d, name)
    return '<g transform="%s"%s><path fill="%s" d="%s"/></g>' % (tr, extra, fill, ' '.join(p.replace('\n', ' ') for p in paths))

def glow(fid, col, near, far, a1=1, a2=.5):
    return ('<filter id="%s" x="-30%%" y="-30%%" width="160%%" height="160%%" color-interpolation-filters="sRGB">'
            '<feGaussianBlur in="SourceAlpha" stdDeviation="%s" result="n"/><feFlood flood-color="%s" flood-opacity="%s"/><feComposite in2="n" operator="in" result="gn"/>'
            '<feGaussianBlur in="SourceAlpha" stdDeviation="%s" result="w"/><feFlood flood-color="%s" flood-opacity="%s"/><feComposite in2="w" operator="in" result="gw"/>'
            '<feMerge><feMergeNode in="gw"/><feMergeNode in="gn"/><feMergeNode in="SourceGraphic"/></feMerge></filter>') % (fid, near, col, a1, far, col, a2)

W = json.load(open(os.path.join(here, 'word', 'stats.json')))
Y = json.load(open(os.path.join(here, 'sym', 'stats.json')))
H6, S6 = W['H'], W['scale']
loc = lambda y: (H6 - y) * 10  # potrace's local y, its group is flipped and scaled by 0.1

# the spark, measured: centroid of the pink pixels in the drop cap's mouth, drawn clean as a four-point star
sx, sy = W['spark'][0] * S6, W['spark'][1] * S6
def spark(cx, cy, a, b):
    p = lambda dx, dy: '%.1f %.1f' % (cx + dx, cy + dy)
    return 'M%s Q%s %s Q%s %s Q%s %s Q%s %sZ' % (p(0, -a), p(b, -b), p(a, 0), p(b, b), p(0, a), p(-b, b), p(-a, 0), p(-b, -b), p(0, -a))
SPARK = spark(sx, sy, 100, 30)

# the four speed streaks, measured on an overlay of A1-a (crop pixels of the 1000px view, mapped to trace units);
# drawn as clean lenses pointed at both ends because the traced ones came out lumpy
def u(bx, by): return ((bx / 2.2727 + 15) * S6, (by / 2.2727 + 10) * S6)
def lens(p0, p1, h):
    (x0, y0), (x1, y1) = u(*p0), u(*p1)
    dx, dy = x1 - x0, y1 - y0; n = (dx * dx + dy * dy) ** .5; nx, ny = -dy / n * h, dx / n * h
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    return 'M%.1f %.1fQ%.1f %.1f %.1f %.1fQ%.1f %.1f %.1f %.1fZ' % (x0, y0, mx + nx, my + ny, x1, y1, mx - nx, my - ny, x0, y0)
STREAKS = ''.join(lens(*s) for s in (((410, 112), (852, 30), 32), ((330, 138), (882, 62), 36), ((135, 384), (640, 292), 40), ((245, 397), (556, 343), 32)))

def wordmark(spark_on=True, mode='screen', mono=None, pink=PINK):
    """mode: screen (gradients and glow), gradient (gradient, no glow), flat (white, blue, pink), mono"""
    defs, fp, fb, fs = '', '', '', ''
    lt, bt = W['st']['letters'], W['st']['blue']
    if mode in ('screen', 'gradient'):
        defs += ('<linearGradient id="wm" gradientUnits="userSpaceOnUse" x1="0" y1="%d" x2="0" y2="%d"><stop offset="0.3" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient>'
                 '<linearGradient id="cs" gradientUnits="userSpaceOnUse" x1="0" y1="%d" x2="0" y2="%d"><stop offset="0" stop-color="%s"/><stop offset="0.35" stop-color="%s"/></linearGradient>'
                 '<radialGradient id="sk"><stop offset="0.04" stop-color="%s"/><stop offset="0.32" stop-color="%s"/></radialGradient>'
                 % (loc(lt['y0']), loc(lt['y1'] + 60), WHITE, pink, loc(bt['y0']), loc(bt['y1']), WHITE, BLUE, WHITE, pink))
        lf, bf, sf = 'url(#wm)', 'url(#cs)', 'url(#sk)'
    else:
        lf, bf, sf = (mono or WHITE), (mono or BLUE), (mono or pink)
    if mode == 'screen':
        defs += glow('gp', pink, 8, 26, 1, .7) + glow('gb', BLUE, 8, 26, 1, .7)
        fp, fb = ' filter="url(#gp)"', ' filter="url(#gb)"'
    body = '<defs>%s</defs>' % defs if defs else ''
    body += '<g%s><path id="streaks" fill="%s" d="%s"/></g>' % (fp, mono or pink, STREAKS)
    body += '<g%s>%s</g>' % (fp, layer('word', 'letters', lf))
    body += '<g%s>%s</g>' % (fb, layer('word', 'blue', bf))
    if spark_on: body += '<g%s><path id="spark" fill="%s" d="%s"/></g>' % (fp, sf, SPARK)
    return body

def symbol(mode='screen', mono=None, pink=PINK):
    g = Y['st']['gold']; cx, cy, r = (g['x0'] + g['x1']) / 2, (g['y0'] + g['y1']) / 2, (g['x1'] - g['x0']) / 2
    defs, fp, fb, fg, dot = '', '', '', '', mono or GOLD
    if mode == 'screen':
        defs = ('<defs>%s%s%s<radialGradient id="dl" cx="0.4" cy="0.38" r="0.65"><stop offset="0" stop-color="%s"/><stop offset="0.45" stop-color="%s"/></radialGradient></defs>'
                % (glow('sp', pink, 14, 44, 1, .7), glow('sb', BLUE, 14, 44, 1, .7), glow('sg', GOLD, 16, 50, 1, .8), WHITE, GOLD))
        fp, fb, fg, dot = ' filter="url(#sp)"', ' filter="url(#sb)"', ' filter="url(#sg)"', 'url(#dl)'
    return (defs + '<g%s>%s</g>' % (fp, layer('sym', 'pink', mono or pink)) + '<g%s>%s</g>' % (fb, layer('sym', 'blue', mono or BLUE))
            + '<g%s><circle id="dot" cx="%.1f" cy="%.1f" r="%.1f" fill="%s"/></g>' % (fg, cx, cy, r, dot))

def bounds(st, pad):
    x0 = min(v['x0'] for v in st.values()); y0 = min(v['y0'] for v in st.values())
    x1 = max(v['x1'] for v in st.values()); y1 = max(v['y1'] for v in st.values())
    return x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad
WB, SB = bounds(W['st'], 60), bounds(Y['st'], 60)
side = max(SB[2], SB[3]); SB = (SB[0] + SB[2] / 2 - side / 2, SB[1] + SB[3] / 2 - side / 2, side, side)

def svg(body, vb, title):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%d" height="%d" role="img" aria-labelledby="title"><title id="title">%s</title>%s</svg>\n'
            % (' '.join('%.0f' % v for v in vb), vb[2] / 4, vb[3] / 4, title, body))

def lockup(spark_on=True, mode='screen', mono=None, pink=PINK):
    size = 1000  # the symbol a little taller than the drop cap, centred on it
    cy = (W['st']['letters']['y0'] + W['st']['letters']['y1']) / 2 + 40
    sx0 = WB[0] - size - 20
    s = size / SB[2]
    sym = '<g transform="translate(%.1f %.1f) scale(%.4f) translate(%.1f %.1f)">%s</g>' % (sx0, cy - size / 2, s, -SB[0], -SB[1], symbol(mode, mono, pink))
    y0, y1 = min(WB[1], cy - size / 2 - 40), max(WB[1] + WB[3], cy + size / 2 + 40)
    vb = (sx0 - 40, y0, WB[0] + WB[2] - sx0 + 40, y1 - y0)
    return svg(sym + wordmark(spark_on, mode, mono, pink), vb, 'CS2 Clutch logo')

files = {
    'wordmark-screen.svg': svg(wordmark(), WB, 'CS2 Clutch wordmark'),
    'wordmark.svg': svg(wordmark(mode='gradient'), WB, 'CS2 Clutch wordmark'),
    'symbol-screen.svg': svg(symbol(), SB, 'CS2 Clutch symbol'),
    'symbol.svg': svg(symbol('flat'), SB, 'CS2 Clutch symbol'),
    'symbol-white.svg': svg(symbol('mono', WHITE), SB, 'CS2 Clutch symbol, white'),
    'lockup-screen.svg': lockup(),
    'lockup-screen-nospark.svg': lockup(False),
    'lockup-screen-plate-pink.svg': lockup(pink='#FB3F8A'),  # the pink the approved plate renders, for the founder to compare
    'lockup.svg': lockup(mode='gradient'),
    'lockup-nospark.svg': lockup(False, 'gradient'),
    'lockup-flat.svg': lockup(mode='flat'),
    'lockup-white.svg': lockup(mode='mono', mono=WHITE),
    'lockup-black.svg': lockup(mode='mono', mono='#000000'),
    'app-icon.svg': svg('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" rx="%.0f" fill="%s"/><g transform="translate(%.1f %.1f) scale(0.72) translate(%.1f %.1f)">%s</g>'
                        % (SB[0], SB[1], side, side, side * 0.22, CARD, SB[0] + side * 0.14, SB[1] + side * 0.14, -SB[0], -SB[1], symbol()), SB, 'CS2 Clutch app icon'),
}
for n, s in files.items(): open(os.path.join(out, n), 'w').write(s)
print('ok', len(files), WB, SB)
