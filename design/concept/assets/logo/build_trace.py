"""Builds the CS2 Clutch logo from potrace tracings of the founder's picks, A1-a (wordmark) and G2-b (symbol),
in design/concept/assets/logo-styles-r3.png. Called by trace.sh, which traces into a temporary work folder."""
import json, os, re, sys
out = sys.argv[1]
here = sys.argv[2]  # the work folder trace.sh traced into
BLUE, GOLD, WHITE, CARD = '#65A3FF', '#FADA62', '#FFFFFF', '#0F0E2B'  # baseline section 5
PINK = '#FB3F8A'  # the pink the approved brand plate renders, picked for the logo by the founder, D-184; the UI pink stays #E94D8B

def traced(d, name):
    s = open(os.path.join(here, d, name + '.svg')).read()
    return re.search(r'<g transform="([^"]*)"', s).group(1), re.findall(r'<path d="([^"]*)"', s, re.S)

def layer(d, name, fill, extra='', attrs=''):
    tr, paths = traced(d, name)
    return '<g transform="%s"%s><path fill="%s"%s d="%s"/></g>' % (tr, extra, fill, attrs, ' '.join(p.replace('\n', ' ') for p in paths))

def mix(a, b, t):
    """a derived tint: t of the way from colour a to colour b, both brand values"""
    a, b = [int(a[i:i + 2], 16) for i in (1, 3, 5)], [int(b[i:i + 2], 16) for i in (1, 3, 5)]
    return '#%02X%02X%02X' % tuple(round(x + (y - x) * t) for x, y in zip(a, b))

def inner_light(fid, erode, blur, a=.55):
    """a light core inside a shape, as on the picture's blades: the shape shrunk, blurred, lit white, kept inside"""
    return ('<filter id="%s" color-interpolation-filters="sRGB"><feMorphology in="SourceAlpha" operator="erode" radius="%s" result="e"/>'
            '<feGaussianBlur in="e" stdDeviation="%s" result="eb"/><feFlood flood-color="#FFFFFF" flood-opacity="%s"/><feComposite in2="eb" operator="in" result="l"/>'
            '<feComposite in="l" in2="SourceAlpha" operator="in" result="li"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="li"/></feMerge></filter>') % (fid, erode, blur, a)

def soft(fid, std):
    return '<filter id="%s" x="-100%%" y="-100%%" width="300%%" height="300%%"><feGaussianBlur stdDeviation="%s"/></filter>' % (fid, std)

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
def sparkle(cx, cy, tips, b):
    """four needle tips, each pair joined by a cubic whose handles sit near the centre, so the arms are thin and concave"""
    pts = [(cx + x, cy + y) for x, y in tips]
    d = 'M%.1f %.1f' % pts[0]
    for i in range(4):
        (x0, y0), (x1, y1) = pts[i], pts[(i + 1) % 4]
        mx, my = (x0 + x1) / 2 - cx, (y0 + y1) / 2 - cy; n = (mx * mx + my * my) ** .5
        d += 'C%.1f %.1f %.1f %.1f %.1f %.1f' % (cx + mx / n * b, cy + my / n * b, cx + mx / n * b, cy + my / n * b, x1, y1)
    return d + 'Z'
# tips measured on a 2.5x zoom of A1-a: the vertical axis leans right with the italic, the horizontal one dips a little
SPARK = sparkle(sx, sy, ((21, -121), (127, -10), (-21, 121), (-127, 10)), 22)

# the four speed streaks, measured on an overlay of A1-a (crop pixels of the 1000px view, mapped to trace units);
# drawn as clean lenses pointed at both ends because the traced ones came out lumpy
def u(bx, by): return ((bx / 2.2727 + 15) * S6, (by / 2.2727 + 10) * S6)
def lens(p0, p1, h):
    (x0, y0), (x1, y1) = u(*p0), u(*p1)
    dx, dy = x1 - x0, y1 - y0; n = (dx * dx + dy * dy) ** .5; nx, ny = -dy / n * h, dx / n * h
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    return 'M%.1f %.1fQ%.1f %.1f %.1f %.1fQ%.1f %.1f %.1f %.1fZ' % (x0, y0, mx + nx, my + ny, x1, y1, mx - nx, my - ny, x0, y0)
# the letters' own top line and baseline, measured at the L on A1-a, baseline rising 6.5 degrees; the gradient runs along
# their normal from the top line to 120 units under the baseline, so the drop cap's foot reaches the full pink
import math
_n = (math.sin(math.radians(6.5)), math.cos(math.radians(6.5)))
_top = u(250, 150)
GRAD = (_top, (_top[0] + _n[0] * 582, _top[1] + _n[1] * 582))
STREAK_SET = (((410, 112), (852, 30), 32), ((330, 138), (882, 62), 36), ((135, 384), (640, 292), 40), ((245, 397), (556, 343), 32))
STREAKS = ''.join(lens(*s) for s in STREAK_SET)
def core(p0, p1, h):  # a lighter, thinner lens down the middle of each streak, the picture's hot centre line
    k = .18; q0 = (p0[0] + (p1[0] - p0[0]) * k, p0[1] + (p1[1] - p0[1]) * k); q1 = (p1[0] - (p1[0] - p0[0]) * k, p1[1] - (p1[1] - p0[1]) * k)
    return lens(q0, q1, h * .35)
STREAK_CORES = ''.join(core(*s) for s in STREAK_SET)

def wordmark(spark_on=False, mode='screen', mono=None, pink=PINK):
    """mode: screen (gradients, rims, glow), gradient (gradient, no glow), flat (white, blue, pink), mono"""
    defs, fp, fb = '', '', ''
    lt, bt = W['st']['letters'], W['st']['blue']
    rim_l = rim_b = ''
    if mode in ('screen', 'gradient'):
        # the picture's gradient runs across the tilted letters, not down the screen: white to 40 percent of the cap height,
        # then pink, so every letter's foot is pink, the H's as much as the C's. Top line and baseline measured on A1-a.
        (tx, ty), (bx, by) = GRAD
        defs += ('<linearGradient id="wm" gradientUnits="userSpaceOnUse" x1="%.0f" y1="%.0f" x2="%.0f" y2="%.0f"><stop offset="0.4" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient>' % (tx * 10, loc(ty), bx * 10, loc(by), WHITE, pink))
        defs += ('<linearGradient id="cs" gradientUnits="userSpaceOnUse" x1="0" y1="%d" x2="0" y2="%d"><stop offset="0" stop-color="%s"/><stop offset="0.35" stop-color="%s"/></linearGradient>'
                 % (loc(bt['y0']), loc(bt['y1']), WHITE, BLUE))
        lf, bf = 'url(#wm)', 'url(#cs)'
    else:
        lf, bf = (mono or WHITE), (mono or BLUE)
    if mode == 'screen':
        # the picture's letters have a crisp white rim and the pink haze outside it, not a blur on the letter itself
        defs += glow('gp', pink, 8, 26, 1, .9) + glow('gb', BLUE, 8, 26, 1, .9) + glow('gs', pink, 6, 30, 1, .8) + soft('fc', 14) + soft('hz', 40)
        defs += '<radialGradient id="sk"><stop offset="0" stop-color="%s"/><stop offset="0.35" stop-color="%s"/></radialGradient>' % (mix(pink, WHITE, .45), pink)
        fp, fb = ' filter="url(#gp)"', ' filter="url(#gb)"'
        rim_l = ' stroke="%s" stroke-width="90" stroke-linejoin="round"' % WHITE
        rim_b = ' stroke="%s" stroke-width="70" stroke-linejoin="round"' % mix(BLUE, WHITE, .6)
    body = '<defs>%s</defs>' % defs if defs else ''
    sc = mono or pink
    if spark_on and mode == 'screen':
        # the picture fills the drop cap's mouth with a deep magenta haze behind the spark; it sits under the letters
        body += '<ellipse cx="%.1f" cy="%.1f" rx="150" ry="125" fill="%s" fill-opacity="0.85" filter="url(#hz)"/>' % (sx, sy, mix(pink, '#060A1E', .5))
    body += '<g%s><path id="streaks" fill="%s" d="%s"/>' % (fp, sc, STREAKS)
    if mode == 'screen': body += '<path id="streak-cores" fill="%s" d="%s"/>' % (mix(pink, WHITE, .45), STREAK_CORES)
    body += '</g>'
    body += '<g%s>%s</g>' % (fp, layer('word', 'letters', lf, attrs=rim_l))
    body += '<g%s>%s</g>' % (fb, layer('word', 'blue', bf, attrs=rim_b))
    if spark_on:
        if mode == 'screen':
            # as on the picture: a hot pink star with thin concave arms, a lighter heart and a small white core, its own tight haze
            body += ('<g filter="url(#gs)"><path id="spark" fill="url(#sk)" d="%s"/></g>'
                     '<circle cx="%.1f" cy="%.1f" r="22" fill="%s" fill-opacity="0.6" filter="url(#fc)"/>'
                     % (SPARK, sx, sy, mix(pink, WHITE, .6)))
        else:
            body += '<path id="spark" fill="%s" d="%s"/>' % (sc, SPARK)
    return body

def symbol(mode='screen', mono=None, pink=PINK):
    g = Y['st']['gold']; cx, cy, r = (g['x0'] + g['x1']) / 2, (g['y0'] + g['y1']) / 2, (g['x1'] - g['x0']) / 2
    if mode != 'screen':
        return ('<g>%s</g>' % layer('sym', 'pink', mono or pink) + '<g>%s</g>' % layer('sym', 'blue', mono or BLUE)
                + '<circle id="dot" cx="%.1f" cy="%.1f" r="%.1f" fill="%s"/>' % (cx, cy, r, mono or GOLD))
    # the picture's vortex: each blade lit from inside with a lighter rim and its own haze; the dot a lit sphere
    # with a white highlight, a warm edge and a gold haze
    # the sphere's shading, sampled along six radii of the dot on G2-b: a cream highlight above centre, deeper gold
    # towards the foot, a bright rim just inside the edge, a dark amber edge, then a warm haze
    defs = ('<defs>%s%s%s%s'
            '<radialGradient id="dl" cx="0.5" cy="0.36" r="0.62" fx="0.47" fy="0.3"><stop offset="0" stop-color="#FEFBC5"/><stop offset="0.25" stop-color="#FCEC8B"/>'
            '<stop offset="0.6" stop-color="#FCD452"/><stop offset="0.88" stop-color="#FBC836"/></radialGradient>'
            '<radialGradient id="dr"><stop offset="0.8" stop-color="#FEE865" stop-opacity="0"/><stop offset="0.91" stop-color="#FEE865" stop-opacity="0.85"/>'
            '<stop offset="0.965" stop-color="#D49F3A"/><stop offset="1" stop-color="#B7832E"/></radialGradient></defs>'
            % (glow('sp', pink, 14, 44, 1, .9), glow('sb', BLUE, 14, 44, 1, .9), glow('sg', '#D49F3A', 10, 50, 1, .95), inner_light('il', 40, 34, .22)))
    blades = ''
    for name, col in (('pink', pink), ('blue', BLUE)):
        blades += '<g filter="url(#s%s)"><g filter="url(#il)">%s</g></g>' % (name[0], layer('sym', name, col, attrs=' stroke="%s" stroke-width="110" stroke-linejoin="round"' % mix(col, WHITE, .22)))
    dot = ('<g filter="url(#sg)"><circle id="dot" cx="%.1f" cy="%.1f" r="%.1f" fill="url(#dl)"/></g>'
           '<circle cx="%.1f" cy="%.1f" r="%.1f" fill="url(#dr)"/>' % (cx, cy, r, cx, cy, r))
    return defs + blades + dot

def bounds(st, pad):
    x0 = min(v['x0'] for v in st.values()); y0 = min(v['y0'] for v in st.values())
    x1 = max(v['x1'] for v in st.values()); y1 = max(v['y1'] for v in st.values())
    return x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad
WB, SB = bounds(W['st'], 60), bounds(Y['st'], 60)
side = max(SB[2], SB[3]); SB = (SB[0] + SB[2] / 2 - side / 2, SB[1] + SB[3] / 2 - side / 2, side, side)

def svg(body, vb, title):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%d" height="%d" role="img" aria-labelledby="title"><title id="title">%s</title>%s</svg>\n'
            % (' '.join('%.0f' % v for v in vb), vb[2] / 4, vb[3] / 4, title, body))

def lockup(spark_on=False, mode='screen', mono=None, pink=PINK):
    size = 1000  # the symbol a little taller than the drop cap, centred on it
    cy = (W['st']['letters']['y0'] + W['st']['letters']['y1']) / 2 + 40
    sx0 = WB[0] - size - 20
    s = size / SB[2]
    sym = '<g transform="translate(%.1f %.1f) scale(%.4f) translate(%.1f %.1f)">%s</g>' % (sx0, cy - size / 2, s, -SB[0], -SB[1], symbol(mode, mono, pink))
    y0, y1 = min(WB[1], cy - size / 2 - 40), max(WB[1] + WB[3], cy + size / 2 + 40)
    vb = (sx0 - 40, y0, WB[0] + WB[2] - sx0 + 40, y1 - y0)
    return svg(sym + wordmark(spark_on, mode, mono, pink), vb, 'CS2 Clutch logo')

def stacked(mode='screen', mono=None, pink=PINK):
    """the symbol centred above the wordmark, for square and tall places"""
    size, gap = 1100, 20
    s = size / SB[2]
    sx0 = WB[0] + WB[2] / 2 - size / 2
    sy0 = WB[1] - gap - size
    sym = '<g transform="translate(%.1f %.1f) scale(%.4f) translate(%.1f %.1f)">%s</g>' % (sx0, sy0, s, -SB[0], -SB[1], symbol(mode, mono, pink))
    vb = (WB[0], sy0 - 40, WB[2], WB[1] + WB[3] - sy0 + 40)
    return svg(sym + wordmark(False, mode, mono, pink), vb, 'CS2 Clutch logo, stacked')

files = {
    'wordmark-screen.svg': svg(wordmark(), WB, 'CS2 Clutch wordmark'),
    'wordmark.svg': svg(wordmark(mode='gradient'), WB, 'CS2 Clutch wordmark'),
    'symbol-screen.svg': svg(symbol(), SB, 'CS2 Clutch symbol'),
    'symbol.svg': svg(symbol('flat'), SB, 'CS2 Clutch symbol'),
    'symbol-white.svg': svg(symbol('mono', WHITE), SB, 'CS2 Clutch symbol, white'),
    'lockup-screen.svg': lockup(),
    'lockup-screen-spark.svg': lockup(True),
    'lockup.svg': lockup(mode='gradient'),
    'lockup-flat.svg': lockup(mode='flat'),
    'lockup-stacked-screen.svg': stacked(),
    'lockup-stacked-flat.svg': stacked('flat'),
    'lockup-stacked-white.svg': stacked('mono', WHITE),
    'wordmark-flat.svg': svg(wordmark(mode='flat'), WB, 'CS2 Clutch wordmark'),
    'wordmark-white.svg': svg(wordmark(mode='mono', mono=WHITE), WB, 'CS2 Clutch wordmark, white'),
    'symbol-black.svg': svg(symbol('mono', '#000000'), SB, 'CS2 Clutch symbol, black'),
    # maskable: full-bleed ground, the symbol inside the 80 percent safe circle
    'app-icon-maskable.svg': svg('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" fill="%s"/><g transform="translate(%.1f %.1f) scale(0.6) translate(%.1f %.1f)">%s</g>'
                                 % (SB[0], SB[1], side, side, CARD, SB[0] + side * 0.2, SB[1] + side * 0.2, -SB[0], -SB[1], symbol()), SB, 'CS2 Clutch app icon, maskable'),
    'lockup-white.svg': lockup(mode='mono', mono=WHITE),
    'lockup-black.svg': lockup(mode='mono', mono='#000000'),
    'app-icon.svg': svg('<rect x="%.0f" y="%.0f" width="%.0f" height="%.0f" rx="%.0f" fill="%s"/><g transform="translate(%.1f %.1f) scale(0.72) translate(%.1f %.1f)">%s</g>'
                        % (SB[0], SB[1], side, side, side * 0.22, CARD, SB[0] + side * 0.14, SB[1] + side * 0.14, -SB[0], -SB[1], symbol()), SB, 'CS2 Clutch app icon'),
}
for n, s in files.items(): open(os.path.join(out, n), 'w').write(s)
print('ok', len(files), WB, SB)
