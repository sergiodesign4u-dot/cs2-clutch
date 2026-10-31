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
