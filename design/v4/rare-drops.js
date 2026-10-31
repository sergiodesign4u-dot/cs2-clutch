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
