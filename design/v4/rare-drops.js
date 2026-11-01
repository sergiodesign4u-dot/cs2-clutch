/* design/v4/rare-drops.js, the living fire behind a rare drop on the exploration page, D-209.
   One small WebGL shader per canvas: a fractal noise field scrolling upward, shaped into a flame that is strongest at its foot
   and thins as it rises, coloured from the variant's four colours. It renders only while on screen and stands still for a
   reader who asked for less motion. */
(function () {
  var VS = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }';
  var FS = [
    'precision mediump float;',
    'uniform vec2 r; uniform float t; uniform vec3 c1, c2, c3, c4;',
    'float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
    'float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y); }',
    'float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 5; k++) { v += a * n(p); p *= 2.03; a *= 0.5; } return v; }',
    'void main(){',
    '  vec2 uv = gl_FragCoord.xy / r;',
    '  vec2 q = vec2(uv.x * 4.0, uv.y * 2.6 - t * 1.7);',
    '  float f = fbm(q + vec2(fbm(q * 1.7 + t * 0.4), 0.0));',
    '  float rise = 1.0 - uv.y;',
    '  float side = smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x);',
    '  float fire = (f * 1.45 * rise + rise * 0.55 - 0.52) * side;',
    '  fire = clamp(fire * 2.4, 0.0, 1.0);',
    '  vec3 col = mix(c4, c3, smoothstep(0.0, 0.35, fire));',
    '  col = mix(col, c2, smoothstep(0.35, 0.7, fire));',
    '  col = mix(col, c1, smoothstep(0.75, 1.0, fire));',
    '  float a = smoothstep(0.03, 0.3, fire) * smoothstep(0.0, 0.28, uv.y);',
    '  gl_FragColor = vec4(col * a, a);',
    '}'
  ].join('\n');
  function rgb(hex) { var v = parseInt(hex.replace('#', ''), 16); return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255]; }
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  Array.prototype.forEach.call(document.querySelectorAll('.rd-fire-gl'), function (cv) {
    var gl = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true });
    if (!gl) return;
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var lp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
    var cs = getComputedStyle(cv.closest('.rd-live'));
    ['c1', 'c2', 'c3', 'c4'].forEach(function (k) { var c = rgb(cs.getPropertyValue('--rd-hex-' + k).trim() || '#ffffff'); gl.uniform3f(gl.getUniformLocation(pr, k), c[0], c[1], c[2]); });
    var ur = gl.getUniformLocation(pr, 'r'), ut = gl.getUniformLocation(pr, 't');
    var on = true; if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { on = e[0].isIntersecting; }).observe(cv);
    var t0 = performance.now();
    function frame(now) {
      var w = Math.round(cv.clientWidth * 0.75), hgt = Math.round(cv.clientHeight * 0.75);
      if (cv.width !== w || cv.height !== hgt) { cv.width = w; cv.height = hgt; gl.viewport(0, 0, w, hgt); }
      if (on) { gl.uniform2f(ur, w, hgt); gl.uniform1f(ut, still ? 3.0 : (now - t0) / 1000); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
      if (!still) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
})();

/* Living lightning round a rare drop, variant I: short jagged discharges along the card's edge. Each one takes a random stretch of the
   edge, is bent by midpoint displacement into a crooked line, flickers for 90 to 260ms and dies, while new ones strike elsewhere;
   sometimes a branch jumps off outward. Drawn on a 2D canvas with a blurred glow under a white-blue core. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  Array.prototype.forEach.call(document.querySelectorAll('.rd-volt-gl'), function (cv) {
    var cx = cv.getContext('2d'), M = 18, bolts = [], dpr = Math.min(window.devicePixelRatio || 1, 2), on = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { on = e[0].isIntersecting; }).observe(cv);
    function size() { var w = cv.clientWidth, h = cv.clientHeight; if (cv.width !== w * dpr || cv.height !== h * dpr) { cv.width = w * dpr; cv.height = h * dpr; } return [w, h]; }
    function edge(d, w, h) { var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b); d = ((d % P) + P) % P;
      if (d < a) return [M + d, M, 0, -1]; d -= a; if (d < b) return [M + a, M + d, 1, 0]; d -= b; if (d < a) return [M + a - d, M + b, 0, 1]; d -= a; return [M, M + b - d, -1, 0]; }
    function jag(pts, rough) { for (var pass = 0; pass < 3; pass++) { var out = [pts[0]]; for (var i = 1; i < pts.length; i++) { var p = pts[i - 1], q = pts[i];
      var mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1, o = (Math.random() - .5) * rough * len / 14;
      out.push([mx - dy / len * o, my + dx / len * o], q); } pts = out; rough *= .6; } return pts; }
    function spawn(w, h) { var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b), s = Math.random() * P, L = 26 + Math.random() * 70, pts = [];
      for (var d = 0; d <= L; d += 9) { var e = edge(s + d, w, h); pts.push([e[0] + e[2] * (Math.random() * 4 - 1), e[1] + e[3] * (Math.random() * 4 - 1)]); }
      var bolt = { pts: jag(pts, 7), born: performance.now(), life: 90 + Math.random() * 170, br: null };
      if (Math.random() < .35) { var k = Math.floor(Math.random() * bolt.pts.length), st = bolt.pts[k], n = edge(s + k * L / bolt.pts.length, w, h), len = 8 + Math.random() * 14;
        bolt.br = jag([st, [st[0] + n[2] * len + (Math.random() - .5) * 10, st[1] + n[3] * len + (Math.random() - .5) * 10]], 9); }
      bolts.push(bolt); }
    function line(pts, width, color, blur, alpha) { cx.globalAlpha = alpha; cx.lineWidth = width; cx.strokeStyle = color; cx.shadowColor = '#8FD3FF'; cx.shadowBlur = blur;
      cx.beginPath(); cx.moveTo(pts[0][0], pts[0][1]); for (var i = 1; i < pts.length; i++) cx.lineTo(pts[i][0], pts[i][1]); cx.stroke(); }
    function frame(now) {
      var wh = size(), w = wh[0], h = wh[1];
      cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, w, h);
      if (on) {
        while (bolts.length < 3 || (bolts.length < 6 && Math.random() < .08)) spawn(w, h);
        bolts = bolts.filter(function (b) { return now - b.born < b.life; });
        cx.lineCap = cx.lineJoin = 'round';
        bolts.forEach(function (b) { var f = .55 + Math.random() * .45;
          line(b.pts, 4, 'rgba(57, 85, 232, .55)', 14, f); line(b.pts, 1.4, '#F2FBFF', 8, f);
          if (b.br) { line(b.br, 2.5, 'rgba(57, 85, 232, .5)', 10, f * .8); line(b.br, 1, '#F2FBFF', 6, f * .8); } });
        cx.globalAlpha = 1; cx.shadowBlur = 0;
      }
      if (!still) requestAnimationFrame(frame);
    }
    if (still) { var wh = size(); for (var i = 0; i < 4; i++) spawn(wh[0], wh[1]); }
    requestAnimationFrame(frame);
  });
})();

/* Variant I2, I refined: a discharge crawls along the edge for its life and is re-forked every 40 to 80ms, so it walks and flickers rather
   than standing still; the straight edge under it glows, a strong one throws a flash of light into the card, and 3 to 7 live at once.
   Colours come from the variant's --rd-hex-c1..c3: core, glow, deep. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rgba(hex, a) { var v = parseInt(hex.replace('#', ''), 16); return 'rgba(' + (v >> 16 & 255) + ',' + (v >> 8 & 255) + ',' + (v & 255) + ',' + a + ')'; }
  Array.prototype.forEach.call(document.querySelectorAll('.rd-arc-gl'), function (cv) {
    var cs = getComputedStyle(cv.closest('.rd-live')), C1 = cs.getPropertyValue('--rd-hex-c1').trim(), C2 = cs.getPropertyValue('--rd-hex-c2').trim(), C3 = cs.getPropertyValue('--rd-hex-c3').trim();
    var cx = cv.getContext('2d'), M = 18, bolts = [], flashes = [], dpr = Math.min(window.devicePixelRatio || 1, 2), on = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { on = e[0].isIntersecting; }).observe(cv);
    function size() { var w = cv.clientWidth, h = cv.clientHeight; if (cv.width !== w * dpr || cv.height !== h * dpr) { cv.width = w * dpr; cv.height = h * dpr; } return [w, h]; }
    function per(w, h) { return 2 * (w - 2 * M + h - 2 * M); }
    function edge(d, w, h) { var a = w - 2 * M, b = h - 2 * M, P = 2 * (a + b); d = ((d % P) + P) % P;
      if (d < a) return [M + d, M, 0, -1]; d -= a; if (d < b) return [M + a, M + d, 1, 0]; d -= b; if (d < a) return [M + a - d, M + b, 0, 1]; d -= a; return [M, M + b - d, -1, 0]; }
    function jag(pts, rough) { for (var pass = 0; pass < 3; pass++) { var out = [pts[0]]; for (var i = 1; i < pts.length; i++) { var p = pts[i - 1], q = pts[i];
      var mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1, o = (Math.random() - .5) * rough * len / 14;
      out.push([mx - dy / len * o, my + dx / len * o], q); } pts = out; rough *= .6; } return pts; }
    function spawn(w, h, now) { var big = Math.random() < .22;
      bolts.push({ s: Math.random() * per(w, h), L: big ? 60 + Math.random() * 70 : 22 + Math.random() * 46, v: (Math.random() < .5 ? -1 : 1) * (.03 + Math.random() * .09),
        born: now, life: big ? 380 + Math.random() * 360 : 200 + Math.random() * 320, big: big, next: 0 });
      if (still) bolts[bolts.length - 1].born = now - bolts[bolts.length - 1].life * .3; /* a reader who asked for less motion gets one still frame, drawn mid-life */
      if (big) flashes.push({ born: now, s: bolts[bolts.length - 1] }); }
    function shape(b, w, h, now) { var s = b.s + b.v * (now - b.born), rim = [], pts = [];
      for (var d = 0; d <= b.L; d += 8) { var e = edge(s + d, w, h); rim.push([e[0], e[1]]); pts.push([e[0] + e[2] * (Math.random() * 5 - 1.5), e[1] + e[3] * (Math.random() * 5 - 1.5)]); }
      b.rim = rim; b.pts = jag(pts, b.big ? 9 : 7); b.mid = edge(s + b.L / 2, w, h); b.br = null;
      if (Math.random() < (b.big ? .55 : .2)) { var k = Math.floor(Math.random() * b.pts.length), st = b.pts[k], n = edge(s + k * b.L / b.pts.length, w, h), len = 8 + Math.random() * (b.big ? 18 : 10);
        b.br = jag([st, [st[0] + n[2] * len + (Math.random() - .5) * 12, st[1] + n[3] * len + (Math.random() - .5) * 12]], 9); }
      b.next = now + 40 + Math.random() * 40; }
    function line(pts, width, color, blur, alpha) { cx.globalAlpha = alpha; cx.lineWidth = width; cx.strokeStyle = color; cx.shadowColor = C2; cx.shadowBlur = blur;
      cx.beginPath(); cx.moveTo(pts[0][0], pts[0][1]); for (var i = 1; i < pts.length; i++) cx.lineTo(pts[i][0], pts[i][1]); cx.stroke(); }
    function frame(now) {
      var wh = size(), w = wh[0], h = wh[1];
      cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, w, h);
      if (on) {
        while (bolts.length < 3 || (bolts.length < 7 && Math.random() < .07)) spawn(w, h, now);
        bolts = bolts.filter(function (b) { return now - b.born < b.life; });
        flashes = flashes.filter(function (f) { return now - f.born < 240; });
        cx.lineCap = cx.lineJoin = 'round';
        cx.save(); cx.beginPath(); cx.rect(M, M, w - 2 * M, h - 2 * M); cx.clip(); cx.globalCompositeOperation = 'lighter';
        flashes.forEach(function (f) { var b = f.s; if (!b.mid) return; var a = .32 * (1 - (now - f.born) / 240), g = cx.createRadialGradient(b.mid[0], b.mid[1], 0, b.mid[0], b.mid[1], 70);
          g.addColorStop(0, rgba(C2, a)); g.addColorStop(1, rgba(C3, 0)); cx.globalAlpha = 1; cx.fillStyle = g; cx.fillRect(M, M, w - 2 * M, h - 2 * M); });
        cx.restore();
        bolts.forEach(function (b) { if (now >= b.next) shape(b, w, h, now);
          var k = (now - b.born) / b.life, f = Math.min(1, k * 6) * Math.pow(1 - k, .6) * (.6 + Math.random() * .4);
          line(b.rim, 5, rgba(C2, .35), 10, f);
          line(b.pts, b.big ? 5 : 4, rgba(C3, .6), 14, f); line(b.pts, b.big ? 1.8 : 1.3, C1, 8, f);
          if (b.br) { line(b.br, 2.5, rgba(C3, .5), 10, f * .8); line(b.br, 1, C1, 6, f * .8); } });
        cx.globalAlpha = 1; cx.shadowBlur = 0;
      }
      if (!still) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
})();

/* Sparks over the plasma, founder of 1 Nov 2026: "точки надо как-то сделать как искры, типа чуть мигать должны и затухать потихонечку, как
   искры пламени", drawn as wavy lines rising through the card. Each spark rises from the card's lower part on a swaying path, flickers,
   and fades out slowly over 1.4 to 3.4s; about 30 at once, in the variant's core and glow colours. */
(function () {
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  Array.prototype.forEach.call(document.querySelectorAll('.rd-spark-gl'), function (cv) {
    var cs = getComputedStyle(cv.closest('.rd-live')), C = [cs.getPropertyValue('--rd-hex-c1').trim(), cs.getPropertyValue('--rd-hex-c2').trim()];
    var cx = cv.getContext('2d'), ps = [], dpr = Math.min(window.devicePixelRatio || 1, 2), on = true, last = performance.now();
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { on = e[0].isIntersecting; }).observe(cv);
    function size() { var w = cv.clientWidth, h = cv.clientHeight; if (cv.width !== w * dpr || cv.height !== h * dpr) { cv.width = w * dpr; cv.height = h * dpr; } return [w, h]; }
    function spawn(w, h, now) { var life = 1400 + Math.random() * 2000;
      ps.push({ x: w * (.16 + Math.random() * .68), y: h - Math.random() * (h / 1.9) * .75, vy: 16 + Math.random() * 30, amp: 3 + Math.random() * 8, fq: .7 + Math.random() * 1.5,
        ph: Math.random() * 6.3, born: still ? now - life * .4 : now, life: life, r: .9 + Math.random() * 1.4, c: C[Math.random() < .45 ? 0 : 1], fl: 1 }); }
    function frame(now) {
      var wh = size(), w = wh[0], h = wh[1], dt = Math.min(50, now - last) / 1000; last = now;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, w, h);
      if (on) {
        while (ps.length < 30 && (still || Math.random() < .35)) spawn(w, h, now);
        cx.globalCompositeOperation = 'lighter';
        ps = ps.filter(function (p) { var k = (now - p.born) / p.life; if (k >= 1 || p.y < 0) return false;
          p.y -= p.vy * dt; if (Math.random() < .12) p.fl = .35 + Math.random() * .65;
          var x = p.x + Math.sin(p.ph + (now - p.born) / 1000 * p.fq * 6.283) * p.amp, a = Math.min(1, k * 8) * Math.pow(1 - k, 1.6) * p.fl;
          cx.globalAlpha = a; cx.fillStyle = p.c; cx.shadowColor = p.c; cx.shadowBlur = 6;
          cx.beginPath(); cx.arc(x, p.y, p.r * (1 - k * .4), 0, 6.283); cx.fill(); return true; });
        cx.globalAlpha = 1; cx.shadowBlur = 0; cx.globalCompositeOperation = 'source-over';
      }
      if (!still) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
})();
