import os, math
out = os.path.dirname(os.path.abspath(__file__))  
PINK, BLUE, GOLD, WHITE, CARD = '#E94D8B', '#65A3FF', '#FADA62', '#FFFFFF', '#0F0E2B'  # baseline section 5
T15 = math.tan(math.radians(15))

def f(v): return ('%.2f' % v).rstrip('0').rstrip('.')

def fillet(pts):
    """pts: [(x, y, r)], a closed polygon whose every corner is rounded by its own radius."""
    n, segs = len(pts), []
    for i in range(n):
        ax, ay, _ = pts[i - 1]; px, py, r = pts[i]; bx, by, _ = pts[(i + 1) % n]
        ux, uy = ax - px, ay - py; lu = math.hypot(ux, uy); ux, uy = ux / lu, uy / lu
        vx, vy = bx - px, by - py; lv = math.hypot(vx, vy); vx, vy = vx / lv, vy / lv
        phi = math.acos(max(-1, min(1, ux * vx + uy * vy)))
        t = r / math.tan(phi / 2) if r else 0
        tmax = min(lu, lv) / 2
        if t > tmax: t, r = tmax, tmax * math.tan(phi / 2)
        z = (px - ax) * (by - py) - (py - ay) * (bx - px)
        segs.append(((px + ux * t, py + uy * t), (px + vx * t, py + vy * t), r, 1 if z > 0 else 0))
    d = 'M%s %s' % (f(segs[0][0][0]), f(segs[0][0][1]))
    for i, (s, e, r, sw) in enumerate(segs):
        if i: d += 'L%s %s' % (f(s[0]), f(s[1]))
        if r > 0.01: d += 'A%s %s 0 0 %d %s %s' % (f(r), f(r), sw, f(e[0]), f(e[1]))
    return d + 'Z'

def place(pts, dx, dy, base):
    """move a letter and slant it 15 degrees about its own baseline"""
    return [(x + (base - y) * T15 + dx, y + dy, r) for x, y, r in pts]

# ---- wordmark, CLUTCH: stem 40 on a cap height of 128; the first C is a drop cap, 8 over and 8 under
C1 = [(146,-8,10),(0,-8,60),(0,136,60),(110,136,10),(121,92,8),(44,92,16),(44,36,16),(132,36,8)]
L  = [(0,0,12),(40,0,12),(40,88,12),(90,88,12),(90,128,12),(0,128,20)]
U  = [(0,0,12),(40,0,12),(40,88,16),(72,88,16),(72,0,12),(112,0,12),(112,128,48),(0,128,48)]
T  = [(0,0,12),(108,0,12),(108,40,12),(74,40,10),(74,128,12),(34,128,12),(34,40,10),(0,40,12)]
C2 = [(116,0,10),(0,0,56),(0,128,56),(106,128,10),(116,88,8),(40,88,14),(40,40,14),(106,40,8)]
H  = [(0,0,12),(40,0,12),(40,44,8),(72,44,8),(72,0,12),(112,0,12),(112,128,12),(72,128,12),(72,84,8),(40,84,8),(40,128,12),(0,128,12)]
word, x = [], 0
for g, w in ((C1,128),(L,90),(U,112),(T,108),(C2,116),(H,112)):
    word.append(fillet(place(g, x, 0, 128))); x += w + 10
word_right = x - 10

# ---- CS2: stem 14 on a cap height of 64, the same 15 degree slant and the same terminal cut
c  = [(56,0,3),(0,0,26),(0,64,26),(52.5,64,3),(56,50,3),(14,50,6),(14,14,6),(52.5,14,3)]
S  = [(52,0,3),(0,0,22),(0,39,10),(38,39,4),(38,50,4),(0,50,3),(0,64,3),(52,64,22),(52,25,10),(14,25,4),(14,14,4),(52,14,3)]
two = [(52 - x2, y2, r2) for x2, y2, r2 in S]
two = [(x2, y2, {(52,0):22,(0,64):3,(52,39):10,(0,25):10}.get((x2, y2), r2 if r2 < 10 else 3)) for x2, y2, r2 in two]
cs, cx = [], 0
for g, w in ((c,56),(S,52),(two,52)):
    cs.append((g, cx)); cx += w + 8
cs_w = cx - 8
CS_TOP = 140
cs_dx = word_right - 18 - cs_w - 64 * T15 * 0  # right edge under the H
cs_paths = [fillet(place(g, cs_dx + ox, CS_TOP, CS_TOP + 64)) for g, ox in cs]

# ---- the spark in the mouth of the drop cap, A1-a
def spark(cx_, cy_, a, b):
    p = lambda dx, dy: '%s %s' % (f(cx_ + dx), f(cy_ + dy))
    return ('M%s Q%s %s Q%s %s Q%s %s Q%s %sZ' % (p(0,-a), p(b,-b), p(a,0), p(b,b), p(0,a), p(-b,b), p(-a,0), p(-b,-b), p(0,-a)))
SPARK = spark(86 + (128 - 64) * T15, 64, 26, 6)

# ---- speed streaks, A1-a: lenses pointed at both ends, two over the word, two leading into CS2, 4 degrees steeper than the word
def streak(x0, x1, y, th):
    xm, h = (x0 + x1) / 2, th
    return 'M%s %sQ%s %s %s %sQ%s %s %s %sZ' % (f(x0), f(y), f(xm), f(y - h), f(x1), f(y), f(xm), f(y + h), f(x0), f(y))
STREAKS_UP = [streak(300, 760, -30, 9), streak(400, 760, -50, 6)]
STREAKS_DOWN = [streak(20, cs_dx - 10, CS_TOP + 18, 9), streak(130, cs_dx - 30, CS_TOP + 40, 6)]
STREAK_TILT = -4
WORD_TILT = -8

def glow(fid, col, near, far, a1=.85, a2=.5):
    return ('<filter id="%s" x="-50%%" y="-50%%" width="200%%" height="200%%" color-interpolation-filters="sRGB">'
            '<feGaussianBlur in="SourceAlpha" stdDeviation="%s" result="n"/><feFlood flood-color="%s" flood-opacity="%s"/><feComposite in2="n" operator="in" result="gn"/>'
            '<feGaussianBlur in="SourceAlpha" stdDeviation="%s" result="w"/><feFlood flood-color="%s" flood-opacity="%s"/><feComposite in2="w" operator="in" result="gw"/>'
            '<feMerge><feMergeNode in="gw"/><feMergeNode in="gn"/><feMergeNode in="SourceGraphic"/></feMerge></filter>') % (fid, near, col, a1, far, col, a2)

def wordmark(spark_on=True, flat=False, mono=None, screen=False):
    body, fp, fb = '', '', ''
    if screen:
        body += ('<defs><linearGradient id="wm" gradientUnits="userSpaceOnUse" x1="0" y1="-8" x2="0" y2="190">'
                 '<stop offset="0.3" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient>'
                 '<linearGradient id="cs" gradientUnits="userSpaceOnUse" x1="0" y1="%s" x2="0" y2="%s">'
                 '<stop offset="0" stop-color="%s"/><stop offset="0.75" stop-color="%s"/></linearGradient>%s%s</defs>'
                 % (WHITE, PINK, CS_TOP - 10, CS_TOP + 64, WHITE, BLUE, glow('gp', PINK, 4, 18, .95, .7), glow('gb', BLUE, 4, 18, .95, .75)))
        top, csf, fp, fb = 'url(#wm)', 'url(#cs)', ' filter="url(#gp)"', ' filter="url(#gb)"'
        rim = ' stroke="%s" stroke-width="5" stroke-linejoin="round" paint-order="stroke"' % PINK
    else:
        if not flat and not mono:
            body += ('<defs><linearGradient id="wm" gradientUnits="userSpaceOnUse" x1="0" y1="-8" x2="0" y2="136">'
                     '<stop offset="0.3" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient></defs>' % (WHITE, PINK))
        top, csf, rim = (mono or ('url(#wm)' if not flat else WHITE)), (mono or BLUE), ''
    sc = mono or PINK
    rot = lambda a, cx_, cy_: ' transform="rotate(%s %s %s)"' % (a, f(cx_), f(cy_))
    body += '<g id="tilt"%s>' % rot(WORD_TILT, word_right / 2, 64)
    body += '<g%s><path id="streaks" fill="%s" d="%s"/></g>' % (fp, sc, ''.join(STREAKS_DOWN))
    body += '<g%s><path id="streaks-up" fill="%s"%s d="%s"/></g>' % (fp, sc, rot(STREAK_TILT, 560, -40), ''.join(STREAKS_UP))
    body += '<g%s><path id="clutch" fill="%s"%s d="%s"/></g>' % (fp, top, rim, ''.join(word))
    body += '<g%s><path id="cs2" fill="%s" d="%s"/></g>' % (fb, csf, ''.join(cs_paths))
    if spark_on and screen:
        body += ('<defs><radialGradient id="sk"><stop offset="0.15" stop-color="%s"/><stop offset="0.6" stop-color="%s"/></radialGradient></defs>' % (WHITE, PINK))
        body += '<g%s><path id="spark" fill="url(#sk)" d="%s"/></g>' % (fp, SPARK)
    elif spark_on: body += '<g%s><path id="spark" fill="%s" d="%s"/></g>' % (fp, sc, SPARK)
    return body + '</g>'

def tilt_box(pad):
    a = math.radians(WORD_TILT); cx_, cy_ = word_right / 2, 64
    xs, ys = [], []
    for x_, y_ in ((-4, -60), (word_right + 40, -60), (-4, CS_TOP + 72), (word_right + 40, CS_TOP + 72)):
        dx, dy = x_ - cx_, y_ - cy_
        xs.append(cx_ + dx * math.cos(a) - dy * math.sin(a)); ys.append(cy_ + dx * math.sin(a) + dy * math.cos(a))
    return (min(xs) - pad, min(ys) - pad, max(xs) - min(xs) + 2 * pad, max(ys) - min(ys) + 2 * pad)
WM_BOX = tuple(round(v) for v in tilt_box(8))

# ---- symbol, G2-b: four blades on a clockwise spiral round the last one standing
def blade(k, cx_=128, cy_=128, r0=44, r1=124, w=33, sweep=165, th0=215, pointed=True):
    N = 9; outer, inner = [], []
    for i in range(N + 1):
        t = i / N
        th = math.radians(th0 - sweep * t - 90 * k)
        rc = r0 + (r1 - r0) * t
        wt = max(2.4, w * math.sin(math.pi * t) ** 0.75) if pointed else max(2.4, w * min(1, (t + 0.3) / 0.45) * (1 - t) ** 0.7)
        ux, uy = math.cos(th), -math.sin(th)
        outer.append((cx_ + ux * (rc + wt / 2), cy_ + uy * (rc + wt / 2)))
        inner.append((cx_ + ux * (rc - wt / 2), cy_ + uy * (rc - wt / 2)))
        if i == 0: cap = wt / 2
    def smooth(p):  # Catmull-Rom through the points as cubic Beziers
        d = ''
        for j in range(len(p) - 1):
            p0 = p[j - 1] if j else p[j]; p1, p2 = p[j], p[j + 1]; p3 = p[j + 2] if j + 2 < len(p) else p2
            c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
            c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
            d += 'C%s %s %s %s %s %s' % (f(c1[0]), f(c1[1]), f(c2[0]), f(c2[1]), f(p2[0]), f(p2[1]))
        return d
    tipr = math.hypot(outer[-1][0] - inner[-1][0], outer[-1][1] - inner[-1][1]) / 2
    return ('M%s %s' % (f(inner[0][0]), f(inner[0][1])) +
            'A%s %s 0 0 1 %s %s' % (f(cap), f(cap), f(outer[0][0]), f(outer[0][1])) + smooth(outer) +
            'A%s %s 0 0 1 %s %s' % (f(tipr), f(tipr), f(inner[-1][0]), f(inner[-1][1])) + smooth(inner[::-1]) + 'Z')

def symbol(small=False, mono=None, screen=False):
    kw = dict(w=58, r0=52, r1=112, sweep=140, th0=210, pointed=False) if small else {}
    dot = 31 if small else 28
    if not screen:
        b = ['<path fill="%s" d="%s%s"/>' % (mono or col, blade(k, **kw), blade(k + 2, **kw)) for k, col in ((0, PINK), (1, BLUE))]
        return ''.join(b) + '<circle id="dot" cx="128" cy="128" r="%d" fill="%s"/>' % (dot, mono or GOLD)
    d = ('<defs>%s%s%s<radialGradient id="dl" cx="0.4" cy="0.38" r="0.65"><stop offset="0" stop-color="%s"/><stop offset="0.45" stop-color="%s"/></radialGradient></defs>'
         % (glow('sp', PINK, 4, 14, .95, .7), glow('sb', BLUE, 4, 14, .95, .7), glow('sg', GOLD, 5, 18, 1, .85), WHITE, GOLD))
    b = ['<g filter="url(#%s)"><path fill="%s" d="%s%s"/></g>' % (fid, col, blade(k, **kw), blade(k + 2, **kw)) for k, col, fid in ((0, PINK, 'sp'), (1, BLUE, 'sb'))]
    return d + ''.join(b) + '<g filter="url(#sg)"><circle id="dot" cx="128" cy="128" r="%d" fill="url(#dl)"/></g>' % dot

def svg(body, vb, title):
    w, h = vb.split()[2:]
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%s" height="%s" role="img" aria-labelledby="title">'
            '<title id="title">%s</title>%s</svg>\n') % (vb, w, h, title, body)

def lockup(spark_on=True, flat=False, mono=None, small_symbol=False, screen=False):
    x, y, w, h = WM_BOX
    s = 290 / 256  # the symbol about twice the cap height, as in G2-b
    g = 10
    sy = 64 - 128 * s + 30
    body = '<g id="symbol" transform="translate(%s %s) scale(%s)">%s</g>' % (f(x - g - 256 * s), f(sy), f(s), symbol(small_symbol, mono, screen))
    body += '<g id="wordmark">%s</g>' % wordmark(spark_on, flat, mono, screen)
    x0, y0 = x - g - 256 * s - 12, min(y, sy - 12)
    return svg(body, '%s %s %s %s' % (f(x0), f(y0), f(x + w - x0), f(max(y + h, sy + 256 * s + 12) - y0)), 'CS2 Clutch logo')

files = {
  'symbol.svg': svg(symbol(), '0 0 256 256', 'CS2 Clutch symbol'),
  'symbol-screen.svg': svg(symbol(screen=True), '-16 -16 288 288', 'CS2 Clutch symbol, screen'),
  'symbol-small.svg': svg(symbol(True), '0 0 256 256', 'CS2 Clutch symbol, small-size cut'),
  'symbol-white.svg': svg(symbol(mono=WHITE), '0 0 256 256', 'CS2 Clutch symbol, white'),
  'app-icon.svg': svg('<rect width="256" height="256" rx="56" fill="%s"/><g transform="translate(38.4 38.4) scale(0.7)">%s</g>' % (CARD, symbol(True, screen=True)), '0 0 256 256', 'CS2 Clutch app icon'),
  'wordmark.svg': svg(wordmark(), '%s %s %s %s' % WM_BOX, 'CS2 Clutch wordmark'),
  'wordmark-screen.svg': svg(wordmark(screen=True), '%s %s %s %s' % WM_BOX, 'CS2 Clutch wordmark, screen'),
  'lockup-screen.svg': lockup(screen=True),
  'lockup-screen-nospark.svg': lockup(spark_on=False, screen=True),
  'lockup.svg': lockup(),
  'lockup-nospark.svg': lockup(spark_on=False),
  'lockup-flat.svg': lockup(flat=True),
  'lockup-white.svg': lockup(mono=WHITE),
  'lockup-black.svg': lockup(mono='#000000'),
}
# the same screen lockup in the pink the approved plate actually renders, sampled from its pixels, for the founder to compare
files['lockup-screen-plate-pink.svg'] = files['lockup-screen.svg'].replace(PINK, '#FB3F8A')
for n, s in files.items(): open(os.path.join(out, n), 'w').write(s)
print('ok', word_right, cs_dx, WM_BOX)
