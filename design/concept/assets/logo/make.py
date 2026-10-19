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
C1 = [(127,-8,6),(0,-8,56),(0,136,56),(110,136,6),(121,92,6),(44,92,14),(44,36,14),(116,36,6)]
L  = [(0,0,6),(40,0,6),(40,88,10),(90,88,6),(90,128,6),(0,128,16)]
U  = [(0,0,6),(40,0,6),(40,88,14),(72,88,14),(72,0,6),(112,0,6),(112,128,44),(0,128,44)]
T  = [(0,0,6),(108,0,6),(108,40,6),(74,40,8),(74,128,6),(34,128,6),(34,40,8),(0,40,6)]
C2 = [(116,0,6),(0,0,52),(0,128,52),(106,128,6),(116,88,6),(40,88,12),(40,40,12),(106,40,6)]
H  = [(0,0,6),(40,0,6),(40,44,6),(72,44,6),(72,0,6),(112,0,6),(112,128,6),(72,128,6),(72,84,6),(40,84,6),(40,128,6),(0,128,6)]
word, x = [], 0
for g, w in ((C1,121),(L,90),(U,112),(T,108),(C2,116),(H,112)):
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
CS_TOP = 144
cs_dx = word_right - 18 - cs_w - 64 * T15 * 0  # right edge under the H
cs_paths = [fillet(place(g, cs_dx + ox, CS_TOP, CS_TOP + 64)) for g, ox in cs]

# ---- the spark in the mouth of the drop cap, A1-a
def spark(cx_, cy_, a, b):
    p = lambda dx, dy: '%s %s' % (f(cx_ + dx), f(cy_ + dy))
    return ('M%s Q%s %s Q%s %s Q%s %s Q%s %sZ' % (p(0,-a), p(b,-b), p(a,0), p(b,b), p(0,a), p(-b,b), p(-a,0), p(-b,-b), p(0,-a)))
SPARK = spark(84 + (128 - 64) * T15, 64, 19, 4)

# ---- speed streaks leading into CS2: tapered, a round head, horizontal
def streak(x_end, y, length, th):
    r = th / 2
    return 'M%s %sL%s %sA%s %s 0 0 1 %s %sZ' % (f(x_end - length), f(y), f(x_end), f(y - r), f(r), f(r), f(x_end), f(y + r))
STREAKS = [streak(cs_dx - 6, CS_TOP + 24, 236, 8), streak(cs_dx - 18, CS_TOP + 44, 168, 6)]

def wordmark(spark_on=True, flat=False, mono=None):
    top = mono or ('url(#wm)' if not flat else WHITE)
    body = ''
    if not flat and not mono:
        body += ('<defs><linearGradient id="wm" gradientUnits="userSpaceOnUse" x1="0" y1="-8" x2="0" y2="136">'
                 '<stop offset="0.3" stop-color="%s"/><stop offset="1" stop-color="%s"/></linearGradient></defs>' % (WHITE, PINK))
    body += '<path id="clutch" fill="%s" d="%s"/>' % (top, ''.join(word))
    body += '<path id="cs2" fill="%s" d="%s"/>' % (mono or BLUE, ''.join(cs_paths))
    body += '<path id="streaks" fill="%s" d="%s"/>' % (mono or PINK, ''.join(STREAKS))
    if spark_on: body += '<path id="spark" fill="%s" d="%s"/>' % (mono or PINK, SPARK)
    return body
WM_BOX = (-4, -12, word_right + 40 + 8, 232)   # x, y, w, h

# ---- symbol, G2-b: four blades on a clockwise spiral round the last one standing
def blade(k, cx_=128, cy_=128, r0=50, r1=114, w=40, sweep=145, th0=205):
    N = 9; outer, inner = [], []
    for i in range(N + 1):
        t = i / N
        th = math.radians(th0 - sweep * t - 90 * k)
        rc = r0 + (r1 - r0) * t ** 1.15
        wt = max(2.4, w * min(1, (t + 0.3) / 0.45) * (1 - t) ** 0.7)
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

def symbol(small=False, mono=None):
    kw = dict(w=52, r0=54, r1=110, sweep=130) if small else {}
    dot = 30 if small else 25
    b = ['<path fill="%s" d="%s%s"/>' % (mono or col, blade(k, **kw), blade(k + 2, **kw)) for k, col in ((0, PINK), (1, BLUE))]
    return ''.join(b) + '<circle id="dot" cx="128" cy="128" r="%d" fill="%s"/>' % (dot, mono or GOLD)

def svg(body, vb, title):
    w, h = vb.split()[2:]
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" width="%s" height="%s" role="img" aria-labelledby="title">'
            '<title id="title">%s</title>%s</svg>\n') % (vb, w, h, title, body)

def lockup(spark_on=True, flat=False, mono=None, small_symbol=False):
    x, y, w, h = WM_BOX
    s = h / 256  # symbol scaled to the wordmark's full height
    g = 24
    body = '<g id="symbol" transform="translate(0 %s) scale(%s)">%s</g>' % (f(y), f(s), symbol(small_symbol, mono))
    body += '<g id="wordmark" transform="translate(%s 0)">%s</g>' % (f(256 * s + g - x), wordmark(spark_on, flat, mono))
    return svg(body, '0 %s %s %s' % (f(y), f(256 * s + g + w), f(h)), 'CS2 Clutch logo')

files = {
  'symbol.svg': svg(symbol(), '0 0 256 256', 'CS2 Clutch symbol'),
  'symbol-small.svg': svg(symbol(True), '0 0 256 256', 'CS2 Clutch symbol, small-size cut'),
  'symbol-white.svg': svg(symbol(mono=WHITE), '0 0 256 256', 'CS2 Clutch symbol, white'),
  'app-icon.svg': svg('<rect width="256" height="256" rx="56" fill="%s"/><g transform="translate(38.4 38.4) scale(0.7)">%s</g>' % (CARD, symbol(True)), '0 0 256 256', 'CS2 Clutch app icon'),
  'wordmark.svg': svg(wordmark(), '%s %s %s %s' % WM_BOX, 'CS2 Clutch wordmark'),
  'lockup.svg': lockup(),
  'lockup-nospark.svg': lockup(spark_on=False),
  'lockup-flat.svg': lockup(flat=True),
  'lockup-white.svg': lockup(mono=WHITE),
  'lockup-black.svg': lockup(mono='#000000'),
}
for n, s in files.items(): open(os.path.join(out, n), 'w').write(s)
print('ok', word_right, cs_dx, WM_BOX)
