/* design/v4/rare-drops.js, the living effects of the rare drop exploration page, D-209.
   One small engine: each effect is a function that takes a canvas and draws into it every frame while the canvas is on screen and, inside
   a live strip, while its card is live. The tiers at the top play in a strip built as v4's live drops; the earlier explorations below
   loop in their own rows. Everything stands still for a reader who asked for less motion. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TAU = Math.PI * 2;
  function rgba(hex, a) { var v = parseInt(hex.replace('#', ''), 16); return 'rgba(' + (v >> 16 & 255) + ',' + (v >> 8 & 255) + ',' + (v & 255) + ',' + a + ')'; }
  function rgb(hex) { var v = parseInt(hex.replace('#', ''), 16); return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255]; }
  function colours(cv) { var cs = getComputedStyle(cv.closest('.rd-tier, .rd-live')); return [1, 2, 3, 4].map(function (k) { return cs.getPropertyValue('--rd-hex-c' + k).trim() || '#ffffff'; }); }
  // a canvas in a live strip draws only once its card is live; the earlier rows draw always
  function live(cv) { var d = cv.closest('.rd-d'); return !d || d.classList.contains('is-live'); }
  function watch(cv) { var st = { on: true }; if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { st.on = e[0].isIntersecting; }).observe(cv); return st; }

  // a 2D canvas loop: sizes the canvas to its box, clears it, calls draw while it should
  function loop2d(cv, draw) {
    var cx = cv.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2), st = watch(cv), t0 = performance.now();
    function frame(now) {
      if (!cv.isConnected) return;
      var w = cv.clientWidth, h = cv.clientHeight;
      if (cv.width !== w * dpr || cv.height !== h * dpr) { cv.width = w * dpr; cv.height = h * dpr; }
      cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, w, h);
      if (st.on && live(cv) && w && h) draw(cx, w, h, still ? t0 + 2600 : now);
      if (!still || !w) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  // the card's edge as one path: d along the perimeter of the box inset by M gives a point and its outward normal
  function edgeOf(M) {
    return function (d, w, h) { var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b); d = ((d % P) + P) % P;
      if (d < a) return [M + d, M, 0, -1]; d -= a; if (d < b) return [M + a, M + d, 1, 0]; d -= b; if (d < a) return [M + a - d, M + b, 0, 1]; d -= a; return [M, M + b - d, -1, 0]; };
  }
  function jag(pts, rough) { for (var pass = 0; pass < 3; pass++) { var out = [pts[0]]; for (var i = 1; i < pts.length; i++) { var p = pts[i - 1], q = pts[i];
    var mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1, o = (Math.random() - .5) * rough * len / 14;
    out.push([mx - dy / len * o, my + dx / len * o], q); } pts = out; rough *= .6; } return pts; }
  function stroke(cx, pts, width, color, glow, blur, alpha) { cx.globalAlpha = alpha; cx.lineWidth = width; cx.strokeStyle = color; cx.shadowColor = glow; cx.shadowBlur = blur;
    cx.beginPath(); cx.moveTo(pts[0][0], pts[0][1]); for (var i = 1; i < pts.length; i++) cx.lineTo(pts[i][0], pts[i][1]); cx.stroke(); }

  var FX = {};

  /* FIRE. A fractal noise field scrolling upward, shaped into a flame strongest at its foot, coloured from the tier's four colours.
     Behind a card (G, H) it rises round the card's top and sides; inside a card (the plasma tier) it fills the card from its foot. */
  var VS = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }';
  var FS = [
    'precision mediump float;',
    'uniform vec2 r; uniform float t, inside; uniform vec3 c1, c2, c3, c4;',
    'float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
    'float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y); }',
    'float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 5; k++) { v += a * n(p); p *= 2.03; a *= 0.5; } return v; }',
    'void main(){',
    '  vec2 uv = gl_FragCoord.xy / r;',
    '  vec2 q = vec2(uv.x * 4.0, uv.y * 2.6 - t * 1.7);',
    '  float f = fbm(q + vec2(fbm(q * 1.7 + t * 0.4), 0.0));',
    '  float rise = 1.0 - uv.y;',
    '  float side = mix(smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x), 1.0, inside);',
    '  float fire = (f * 1.45 * rise + rise * 0.55 - 0.52) * side;',
    '  fire = clamp(fire * mix(2.4, 1.5, inside), 0.0, 1.0);', // inside a card the flame runs cooler, so its white core stays under the names
    '  vec3 col = mix(c4, c3, smoothstep(0.0, 0.35, fire));',
    '  col = mix(col, c2, smoothstep(0.35, 0.7, fire));',
    '  col = mix(col, c1, smoothstep(0.75, 1.0, fire));',
    '  float a = smoothstep(0.03, 0.3, fire) * mix(smoothstep(0.0, 0.28, uv.y), 1.0, inside);',
    '  gl_FragColor = vec4(col * a, a);',
    '}'
  ].join('\n');
  FX.fire = function (cv, inside) {
    var gl = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true });
    if (!gl) return;
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    var C = colours(cv); ['c1', 'c2', 'c3', 'c4'].forEach(function (k, i) { var c = rgb(C[i]); gl.uniform3f(gl.getUniformLocation(pr, k), c[0], c[1], c[2]); });
    gl.uniform1f(gl.getUniformLocation(pr, 'inside'), inside ? 1 : 0);
    // behind a card the flame is soft and drawn at three quarters; inside a card it is small and drawn sharp
    var ur = gl.getUniformLocation(pr, 'r'), ut = gl.getUniformLocation(pr, 't'), st = watch(cv), t0 = performance.now(), sc = inside ? Math.min(window.devicePixelRatio || 1, 2) : .75;
    function frame(now) {
      if (!cv.isConnected) return;
      var w = Math.round(cv.clientWidth * sc), hgt = Math.round(cv.clientHeight * sc);
      if (cv.width !== w || cv.height !== hgt) { cv.width = w; cv.height = hgt; gl.viewport(0, 0, w, hgt); }
      if (st.on && live(cv) && w && hgt) { gl.uniform2f(ur, w, hgt); gl.uniform1f(ut, still ? 3.0 : (now - t0) / 1000); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
      if (!still || !w) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };

  /* LIGHTNING. Short discharges crawl along the edge for their life and are re-forked every 40 to 80ms, so they walk and flicker; the
     straight edge under each glows; a strong one throws a flash into the card; three to seven at once. M is how far the canvas reaches
     past the card, and nothing is drawn further out than that. */
  FX.volt = function (cv, M) {
    var C = colours(cv), edge = edgeOf(M), bolts = [], flashes = [], reach = M - 2;
    function per(w, h) { return 2 * (w - 2 * M + h - 2 * M); }
    function spawn(w, h, now) { var big = Math.random() < .22, life = big ? 380 + Math.random() * 360 : 200 + Math.random() * 320;
      var b = { s: Math.random() * per(w, h), L: big ? 50 + Math.random() * 60 : 20 + Math.random() * 40, v: (Math.random() < .5 ? -1 : 1) * (.03 + Math.random() * .09),
        born: still ? now - life * .3 : now, life: life, big: big, next: 0 };
      bolts.push(b); if (big) flashes.push({ born: b.born, b: b }); }
    function shape(b, w, h, now) { var s = b.s + b.v * (now - b.born), rim = [], pts = [];
      for (var d = 0; d <= b.L; d += 8) { var e = edge(s + d, w, h); rim.push([e[0], e[1]]); pts.push([e[0] + e[2] * (Math.random() * 4 - 1.5), e[1] + e[3] * (Math.random() * 4 - 1.5)]); }
      b.rim = rim; b.pts = jag(pts, b.big ? 8 : 6); b.mid = edge(s + b.L / 2, w, h); b.br = null;
      if (Math.random() < (b.big ? .55 : .2)) { var k = Math.floor(Math.random() * b.pts.length), p0 = b.pts[k], n = edge(s + k * b.L / b.pts.length, w, h), len = Math.min(reach, 4 + Math.random() * (b.big ? 18 : 10));
        b.br = jag([p0, [p0[0] + n[2] * len + (Math.random() - .5) * 8, p0[1] + n[3] * len + (Math.random() - .5) * 8]], 8); }
      b.next = now + 40 + Math.random() * 40; }
    loop2d(cv, function (cx, w, h, now) {
      while (bolts.length < 3 || (bolts.length < 7 && Math.random() < .07)) spawn(w, h, now);
      bolts = bolts.filter(function (b) { return now - b.born < b.life; });
      flashes = flashes.filter(function (f) { return now - f.born < 240; });
      cx.lineCap = cx.lineJoin = 'round';
      cx.save(); cx.beginPath(); cx.rect(M, M, w - 2 * M, h - 2 * M); cx.clip(); cx.globalCompositeOperation = 'lighter';
      flashes.forEach(function (f) { if (!f.b.mid) return; var a = .3 * (1 - (now - f.born) / 240), g = cx.createRadialGradient(f.b.mid[0], f.b.mid[1], 0, f.b.mid[0], f.b.mid[1], 60);
        g.addColorStop(0, rgba(C[1], a)); g.addColorStop(1, rgba(C[2], 0)); cx.globalAlpha = 1; cx.fillStyle = g; cx.fillRect(M, M, w - 2 * M, h - 2 * M); });
      cx.restore();
      bolts.forEach(function (b) { if (now >= b.next) shape(b, w, h, now);
        var k = (now - b.born) / b.life, f = Math.min(1, k * 6) * Math.pow(1 - k, .6) * (.6 + Math.random() * .4);
        stroke(cx, b.rim, 4, rgba(C[1], .35), C[1], 8, f);
        stroke(cx, b.pts, b.big ? 4 : 3, rgba(C[2], .6), C[1], 10, f); stroke(cx, b.pts, b.big ? 1.6 : 1.2, C[0], C[1], 6, f);
        if (b.br) { stroke(cx, b.br, 2.2, rgba(C[2], .5), C[1], 8, f * .8); stroke(cx, b.br, 1, C[0], C[1], 5, f * .8); } });
      cx.globalAlpha = 1; cx.shadowBlur = 0;
    });
  };

  /* LIGHTNING AS IT WAS, variant I: discharges that stand where they strike, flicker for 90 to 260ms and die. */
  FX.voltOld = function (cv) {
    var M = 18, edge = edgeOf(M), bolts = [];
    function spawn(w, h, now) { var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b), s = Math.random() * P, L = 26 + Math.random() * 70, pts = [];
      for (var d = 0; d <= L; d += 9) { var e = edge(s + d, w, h); pts.push([e[0] + e[2] * (Math.random() * 4 - 1), e[1] + e[3] * (Math.random() * 4 - 1)]); }
      var bolt = { pts: jag(pts, 7), born: still ? now - 60 : now, life: 90 + Math.random() * 170, br: null };
      if (Math.random() < .35) { var k = Math.floor(Math.random() * bolt.pts.length), p0 = bolt.pts[k], n = edge(s + k * L / bolt.pts.length, w, h), len = 8 + Math.random() * 14;
        bolt.br = jag([p0, [p0[0] + n[2] * len + (Math.random() - .5) * 10, p0[1] + n[3] * len + (Math.random() - .5) * 10]], 9); }
      bolts.push(bolt); }
    loop2d(cv, function (cx, w, h, now) {
      while (bolts.length < 3 || (bolts.length < 6 && Math.random() < .08)) spawn(w, h, now);
      bolts = bolts.filter(function (b) { return now - b.born < b.life; });
      cx.lineCap = cx.lineJoin = 'round';
      bolts.forEach(function (b) { var f = .55 + Math.random() * .45;
        stroke(cx, b.pts, 4, 'rgba(57, 85, 232, .55)', '#8FD3FF', 14, f); stroke(cx, b.pts, 1.4, '#F2FBFF', '#8FD3FF', 8, f);
        if (b.br) { stroke(cx, b.br, 2.5, 'rgba(57, 85, 232, .5)', '#8FD3FF', 10, f * .8); stroke(cx, b.br, 1, '#F2FBFF', '#8FD3FF', 6, f * .8); } });
      cx.globalAlpha = 1; cx.shadowBlur = 0;
    });
  };

  /* GOLDEN ORBIT. A comet of gold runs round the frame, a lap in 2.2s, with a tail fading over a third of the edge, and a fainter one
     opposite; each time a head passes a corner it throws off a spray of short sparks that die within a few pixels. */
  FX.orbit = function (cv, M) {
    var C = colours(cv), edge = edgeOf(M), sparks = [], last = -1;
    function comet(cx, w, h, head, P, strength) {
      var tail = P * .34, n = 48;
      for (var i = 0; i < n; i++) { var u0 = i / n, p = edge(head - u0 * tail, w, h), q = edge(head - (i + 1) / n * tail, w, h), k = Math.pow(1 - u0, 1.8);
        cx.globalAlpha = k * strength; cx.lineWidth = .6 + 2.6 * (1 - u0); cx.strokeStyle = u0 < .15 ? C[0] : (u0 < .5 ? C[1] : C[2]); cx.shadowColor = C[1]; cx.shadowBlur = 8;
        cx.beginPath(); cx.moveTo(p[0], p[1]); cx.lineTo(q[0], q[1]); cx.stroke(); }
      var e = edge(head, w, h), g = cx.createRadialGradient(e[0], e[1], 0, e[0], e[1], 6);
      g.addColorStop(0, rgba(C[0], strength)); g.addColorStop(.5, rgba(C[1], .6 * strength)); g.addColorStop(1, rgba(C[1], 0));
      cx.globalAlpha = 1; cx.shadowBlur = 0; cx.fillStyle = g; cx.beginPath(); cx.arc(e[0], e[1], 6, 0, TAU); cx.fill();
    }
    loop2d(cv, function (cx, w, h, now) {
      var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b), head = (now / 2200 * P) % P;
      if (last >= 0) [0, a, a + b, 2 * a + b].forEach(function (c, i) { var passed = last <= head ? (last < c && c <= head) : (c > last || c <= head);
        if (passed) { var e = edge(c, w, h), out = [[-1, -1], [1, -1], [1, 1], [-1, 1]][i];
          for (var k = 0; k < 8; k++) { var ang = Math.atan2(out[1], out[0]) + (Math.random() - .5) * 1.6, v = 10 + Math.random() * 16;
            sparks.push({ x: e[0], y: e[1], vx: Math.cos(ang) * v, vy: Math.sin(ang) * v, born: now, life: 260 + Math.random() * 300 }); } } });
      last = head;
      cx.globalCompositeOperation = 'lighter'; cx.lineCap = 'round';
      comet(cx, w, h, head, P, 1); comet(cx, w, h, head + P / 2, P, .4);
      sparks = sparks.filter(function (s) { var k = (now - s.born) / s.life; if (k >= 1) return false; var t = (now - s.born) / 1000;
        var x = s.x + s.vx * t, y = s.y + s.vy * t; cx.globalAlpha = Math.pow(1 - k, 1.4); cx.strokeStyle = k < .3 ? C[0] : C[1]; cx.lineWidth = 1.2; cx.shadowColor = C[1]; cx.shadowBlur = 4;
        cx.beginPath(); cx.moveTo(x, y); cx.lineTo(x - s.vx * .08, y - s.vy * .08); cx.stroke(); return true; });
      cx.globalAlpha = 1; cx.shadowBlur = 0; cx.globalCompositeOperation = 'source-over';
    });
  };

  /* ICE RIFT. Frost crystals grow in from the edges and corners: a stem bent a little off the inward normal, side branches at sixty
     degrees, two levels deep. Each crystal lives 3 to 6s, melts in half a second and grows again somewhere new. Glints flash on grown ice,
     and a cold mist drifts along the foot inside the card. */
  FX.frost = function (cv, M) {
    var C = colours(cv), edge = edgeOf(M), crystals = [], glints = [], seeded = false;
    function branch(segs, x, y, ang, len, depth, t0) {
      var x2 = x + Math.cos(ang) * len, y2 = y + Math.sin(ang) * len, dur = len * 22;
      segs.push({ x1: x, y1: y, x2: x2, y2: y2, t0: t0, t1: t0 + dur, w: depth ? .8 : 1.3 });
      if (depth < 2) [.35, .6, .85].forEach(function (f, i) { if (Math.random() < .85) {
        var bx = x + (x2 - x) * f, by = y + (y2 - y) * f, side = i % 2 ? 1 : -1, sub = len * (.42 - depth * .1) * (.7 + Math.random() * .5);
        branch(segs, bx, by, ang + side * 1.05, sub, depth + 1, t0 + dur * f);
        if (Math.random() < .5) branch(segs, bx, by, ang - side * 1.05, sub * .8, depth + 1, t0 + dur * f); } });
    }
    function grow(w, h, now, slot) {
      var a = w - 2 * M, b = h - 2 * M, segs = [], x, y, ang, len;
      if (slot < 4) { var cs = [[M, M, .785], [M + a, M, 2.356], [M + a, M + b, -2.356], [M, M + b, -.785]][slot]; x = cs[0]; y = cs[1]; ang = cs[2] + (Math.random() - .5) * .4; len = 16 + Math.random() * 12;
        branch(segs, x, y, ang + Math.PI, 3 + Math.random() * 3, 2, 0); } // a short spike out of the corner, within the reach
      else { var e = edge(Math.random() * 2 * (a + b), w, h); x = e[0]; y = e[1]; ang = Math.atan2(-e[3], -e[2]) + (Math.random() - .5) * .9; len = 8 + Math.random() * 14; }
      branch(segs, x, y, ang, len, 0, 0);
      var life = 3000 + Math.random() * 3000, born = (still || !seeded) ? now - 1500 - Math.random() * 1200 : now;
      return { segs: segs, born: born, die: born + life, slot: slot, ph: Math.random() * TAU };
    }
    var grown = null;
    loop2d(cv, function (cx, w, h, now) {
      // the first frost grows from nothing when the card goes live, as if the hit froze it
      if (!seeded) { grown = now; for (var i = 0; i < 12; i++) { var c = grow(w, h, now, i); if (!still) { c.born = now + (i < 4 ? 0 : Math.random() * 500); c.die = c.born + 3000 + Math.random() * 3000; } crystals.push(c); } seeded = true; }
      crystals = crystals.map(function (c) { return now > c.die + 500 ? grow(w, h, now, c.slot) : c; });
      cx.save(); cx.beginPath(); cx.rect(M, M, w - 2 * M, h - 2 * M); cx.clip();
      for (var m = 0; m < 3; m++) { var span = w - 2 * M + 60, mx = M - 30 + ((now / 1000 * (8 + m * 4) + m * 45) % span), my = h - M - 6 - m * 5, g = cx.createRadialGradient(mx, my, 0, mx, my, 30);
        g.addColorStop(0, rgba(C[1], .16)); g.addColorStop(1, rgba(C[1], 0)); cx.fillStyle = g; cx.fillRect(M, M, w - 2 * M, h - 2 * M); }
      cx.restore();
      cx.lineCap = 'round'; cx.shadowColor = C[2]; cx.shadowBlur = 4;
      var tips = [];
      crystals.forEach(function (c) { var age = now - c.born, fade = Math.min(1, (c.die + 500 - now) / 500), a = Math.max(0, fade) * (.78 + .22 * Math.sin(now / 420 + c.ph));
        c.segs.forEach(function (s) { var p = Math.max(0, Math.min(1, (age - s.t0) / (s.t1 - s.t0))); if (!p) return;
          var x = s.x1 + (s.x2 - s.x1) * p, y = s.y1 + (s.y2 - s.y1) * p; cx.globalAlpha = a; cx.strokeStyle = rgba(C[0], .9); cx.lineWidth = s.w;
          cx.beginPath(); cx.moveTo(s.x1, s.y1); cx.lineTo(x, y); cx.stroke(); if (p === 1 && fade === 1) tips.push([s.x2, s.y2]); }); });
      if (tips.length && glints.length < 4 && (still || Math.random() < .08)) { var t = tips[Math.floor(Math.random() * tips.length)]; glints.push({ x: t[0], y: t[1], born: still ? now - 200 : now, life: 350 + Math.random() * 300, r: 2.5 + Math.random() * 2.5 }); }
      cx.globalCompositeOperation = 'lighter'; cx.shadowColor = C[1]; cx.shadowBlur = 6; cx.strokeStyle = C[0]; cx.lineWidth = 1;
      glints = glints.filter(function (g) { var k = (now - g.born) / g.life; if (k >= 1) return false; var r = g.r * Math.sin(Math.PI * k);
        cx.globalAlpha = Math.sin(Math.PI * k); cx.beginPath(); cx.moveTo(g.x - r, g.y); cx.lineTo(g.x + r, g.y); cx.moveTo(g.x, g.y - r); cx.lineTo(g.x, g.y + r); cx.stroke(); return true; });
      cx.globalAlpha = 1; cx.shadowBlur = 0; cx.globalCompositeOperation = 'source-over';
    });
  };

  /* SPARKS. Founder: "точки надо как-то сделать как искры, типа чуть мигать должны и затухать потихонечку". Each rises from the card's lower
     part on a swaying path, flickers and fades out slowly over 1.4 to 3.4s, about thirty at once; the canvas reaches 8px over the card. */
  FX.sparks = function (cv) {
    var C = colours(cv), ps = [], prev = performance.now();
    loop2d(cv, function (cx, w, h, now) {
      var dt = Math.min(50, Math.max(0, now - prev)) / 1000; prev = now;
      while (ps.length < 30 && (still || Math.random() < .35)) { var life = 1400 + Math.random() * 2000;
        ps.push({ x: 10 + Math.random() * (w - 20), y: h * .35 + Math.random() * h * .6, vy: 12 + Math.random() * 22, amp: 2 + Math.random() * 6, fq: .7 + Math.random() * 1.5,
          ph: Math.random() * TAU, born: still ? now - life * .4 : now, life: life, r: .7 + Math.random() * 1.1, c: C[Math.random() < .45 ? 0 : 1], fl: 1 }); }
      cx.globalCompositeOperation = 'lighter';
      ps = ps.filter(function (p) { var k = (now - p.born) / p.life; if (k >= 1 || p.y < 1) return false;
        p.y -= p.vy * dt; if (Math.random() < .12) p.fl = .35 + Math.random() * .65;
        var x = p.x + Math.sin(p.ph + (now - p.born) / 1000 * p.fq * TAU) * p.amp, a = Math.min(1, k * 8) * Math.pow(1 - k, 1.6) * p.fl;
        cx.globalAlpha = a; cx.fillStyle = p.c; cx.shadowColor = p.c; cx.shadowBlur = 5;
        cx.beginPath(); cx.arc(x, p.y, p.r * (1 - k * .4), 0, TAU); cx.fill(); return true; });
      cx.globalAlpha = 1; cx.shadowBlur = 0; cx.globalCompositeOperation = 'source-over';
    });
  };

  // the earlier rows: always on, looping in their own rows
  Array.prototype.forEach.call(document.querySelectorAll('.rd-fire-gl'), function (cv) { FX.fire(cv, false); });
  Array.prototype.forEach.call(document.querySelectorAll('.rd-volt-gl'), FX.voltOld);
  Array.prototype.forEach.call(document.querySelectorAll('.rd-arc-gl'), function (cv) { FX.volt(cv, 18); });

  /* THE STRIP. Founder: "появление делать один раз ... 3D появление и потом бамс с волной, а дальше оно идёт по ленте и просто горит".
     The strip opens full of ordinary drops; the rare one swings in at the left as every new drop does, lands with the hit, goes live, and
     three ordinary drops arrive after it and carry it down the strip, still alive. It plays once when first seen; Replay plays it again. */
  var POOL = [
    ['ak-47-redline', 'AK-47', 'Redline', 'r3'], ['awp-asiimov', 'AWP', 'Asiimov', 'r3'], ['glock-18-water-elemental', 'Glock-18', 'Water Elemental', 'r4'],
    ['usp-s-kill-confirmed', 'USP-S', 'Kill Confirmed', 'r3'], ['m4a1-s-hyper-beast', 'M4A1-S', 'Hyper Beast', 'r3'], ['desert-eagle-blaze', 'Desert Eagle', 'Blaze', 'r4'],
    ['mp9-rose-iron', 'MP9', 'Rose Iron', 'r5'], ['p250-asiimov', 'P250', 'Asiimov', 'r4'], ['awp-neo-noir', 'AWP', 'Neo-Noir', 'r3'], ['ak-47-vulcan', 'AK-47', 'Vulcan', 'r3'],
    ['five-seven-monkey-business', 'Five-SeveN', 'Monkey Business', 'r4'], ['sg-553-cyrex', 'SG 553', 'Cyrex', 'r5'], ['nova-koi', 'Nova', 'Koi', 'r5'], ['p250-sand-dune', 'P250', 'Sand Dune', 'r6']
  ];
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function deco(n) { n.setAttribute('aria-hidden', 'true'); return n; }
  function card(skin, w, s, r) {
    var d = el('div', 'rd-d ' + r), img = el('img'); img.src = '../concept/assets/skins/' + skin + '.png'; img.alt = '';
    d.appendChild(deco(el('span', 'rd-d-hex'))); d.appendChild(img); d.appendChild(el('b', null, w)); d.appendChild(el('span', 'rd-d-s', s));
    return d;
  }
  function rareCard(fx, chance, crown) {
    var d = card('karambit-tiger-tooth', '★ Karambit', 'Tiger Tooth', 'r1'); d.classList.add('is-rare');
    var bg = deco(el('span', 'rd-bg'));
    if (fx === 'plasma') bg.appendChild(el('canvas', 'rd-fire-in'));
    if (fx === 'orbit') bg.appendChild(el('span', 'rd-rays-in'));
    bg.appendChild(el('span', 'rd-chance-bg', chance));
    if (crown) bg.appendChild(el('span', 'rd-crown'));
    d.insertBefore(bg, d.firstChild);
    d.insertBefore(deco(el('span', 'rd-flash')), d.firstChild); d.insertBefore(deco(el('span', 'rd-wave')), d.firstChild);
    if (fx === 'plasma') { d.appendChild(deco(el('span', 'rd-eq'))); d.appendChild(deco(el('canvas', 'rd-spark-gl'))); }
    else d.appendChild(deco(el('canvas', 'rd-fx-gl')));
    if (crown) d.appendChild(deco(el('span', 'rd-crown-top')));
    d.appendChild(el('span', 'rd-chance-chip', chance));
    return d;
  }
  function mount(d, fx) {
    if (fx === 'plasma') { FX.fire(d.querySelector('.rd-fire-in'), true); FX.sparks(d.querySelector('.rd-spark-gl')); }
    else FX[fx](d.querySelector('.rd-fx-gl'), 8);
  }
  Array.prototype.forEach.call(document.querySelectorAll('.rd-tier'), function (sec) {
    var sim = sec.querySelector('.rd-sim'), fx = sec.getAttribute('data-fx'), chance = sec.getAttribute('data-chance'), crown = sec.hasAttribute('data-crown');
    var strip = el('div', 'rd-sim-strip'), run = el('div', 'rd-sim-run'), replay = el('button', 'rd-replay', 'Replay'), timers = [], k = 0;
    replay.type = 'button';
    sim.appendChild(el('div', 'rd-sim-hdr')); strip.appendChild(run); sim.appendChild(strip); sim.appendChild(el('div', 'rd-sim-ban')); sim.appendChild(replay);
    function next() { var p = POOL[k++ % POOL.length]; return card(p[0], p[1], p[2], p[3]); }
    function arrive(d) { d.classList.add('is-new'); run.insertBefore(d, run.firstChild); while (run.children.length > 13) run.removeChild(run.lastChild); }
    function at(ms, f) { timers.push(setTimeout(f, ms)); }
    function play() {
      timers.forEach(clearTimeout); timers = []; run.innerHTML = ''; k = Math.floor(Math.random() * POOL.length);
      for (var i = 0; i < 12; i++) run.appendChild(next());
      var rare = rareCard(fx, chance, crown);
      if (still) { run.insertBefore(rare, run.children[2]); rare.classList.add('is-live'); mount(rare, fx); return; }
      at(500, function () { arrive(rare); mount(rare, fx); });
      at(1400, function () { rare.classList.remove('is-new'); rare.classList.add('is-hit', 'is-live');
        [1, 2].forEach(function (i) { var n = run.children[i]; if (n) { n.classList.add('is-shoved'); setTimeout(function () { n.classList.remove('is-shoved'); }, 650); } }); });
      [3800, 6200, 8600].forEach(function (ms) { at(ms, function () { arrive(next()); }); });
    }
    replay.addEventListener('click', play);
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); play(); } }, { threshold: .5 }); io.observe(sim); }
    else play();
  });

  // the page's switches: the chance large in the background or as a chip, the crown in the corner or on the top edge
  Array.prototype.forEach.call(document.querySelectorAll('.rd-ctl'), function (g) {
    var bs = g.querySelectorAll('.rd-ctl-b');
    Array.prototype.forEach.call(bs, function (b) { b.addEventListener('click', function () {
      Array.prototype.forEach.call(bs, function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      if (b.hasAttribute('data-chance')) document.body.classList.toggle('rd-chance-is-chip', b.getAttribute('data-chance') === 'chip');
      if (b.hasAttribute('data-crown')) document.body.classList.toggle('rd-crown-is-top', b.getAttribute('data-crown') === 'top');
    }); });
  });
})();
