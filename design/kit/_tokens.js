/* design/kit/_tokens.js: the stand reads design/system/tokens.css and art.css themselves, stage 08 step 4, so a foundation page shows
 * what the files say today and never a copy. KitTokens.load() resolves to { prims, roles, art }:
 *   prims: [{ name, value, comment, section }]   the primitive :root block, in file order, the section a block comment opened
 *   roles: [{ name, dark, light, comment, lightComment, group }]   the semantic level and its [data-theme="light"] pair
 *   art:   [{ name, value, comment, section }]   art.css
 * And the measures the colour page needs: rgba(), contrast(), over(). A stand file: no screen of design/ loads it. */
(function () {
  function scan(block) {
    var out = [], i = 0, n = block.length, section = '';
    while (i < n) {
      var c = block[i];
      if (/\s/.test(c)) { i++; continue; }
      if (block.substr(i, 2) === '/*') { var e = block.indexOf('*/', i + 2); if (e < 0) break; section = block.slice(i + 2, e).replace(/\s+/g, ' ').trim(); i = e + 2; continue; }
      if (block.substr(i, 2) !== '--') { i++; continue; }
      var colon = block.indexOf(':', i), name = block.slice(i, colon).trim(), j = colon + 1, depth = 0, q = '';
      for (; j < n; j++) {
        var ch = block[j];
        if (q) { if (ch === q) q = ''; continue; }
        if (ch === '"' || ch === "'") { q = ch; continue; }
        if (ch === '(') depth++; else if (ch === ')') depth--; else if (ch === ';' && depth === 0) break;
      }
      var value = block.slice(colon + 1, j).trim(), k = j + 1, comment = '';
      while (k < n && (block[k] === ' ' || block[k] === '\t')) k++;
      if (block.substr(k, 2) === '/*') { var ce = block.indexOf('*/', k + 2); comment = block.slice(k + 2, ce).replace(/\s+/g, ' ').trim(); k = ce + 2; }
      out.push({ name: name, value: value, comment: comment, section: section });
      i = k;
    }
    return out;
  }
  function between(text, start, endMark) {
    var a = text.indexOf(start); if (a < 0) return '';
    a += start.length; var b = text.indexOf(endMark, a); return text.slice(a, b < 0 ? undefined : b);
  }
  function parseTokens(t) {
    var prims = scan(between(t, '/* ===== PRIMITIVE ===== */\n:root {', '\n}\n'));
    var semText = between(t, ':root, [data-theme="dark"] {', '\n}\n'), litText = between(t, '[data-theme="light"] {', '\n}\n');
    var sem = scan(semText), lit = scan(litText), L = {};
    lit.forEach(function (d) { L[d.name] = d; });
    var roles = sem.map(function (d) {
      var l = L[d.name] || {};
      return { name: d.name, dark: d.value.replace(/^var\(|\)$/g, ''), light: (l.value || '').replace(/^var\(|\)$/g, ''), comment: d.comment, lightComment: l.comment || '', group: d.section };
    });
    return { prims: prims, roles: roles };
  }
  function rgba(s) {
    var m = String(s).match(/rgba?\(([^)]+)\)/); if (!m) return null;
    var v = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat); return [v[0], v[1], v[2], v.length > 3 ? v[3] : 1];
  }
  function lum(c) { var f = function (x) { x /= 255; return x <= .03928 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4); }; return .2126 * f(c[0]) + .7152 * f(c[1]) + .0722 * f(c[2]); }
  function over(c, bg) { var a = c[3]; return [a * c[0] + (1 - a) * bg[0], a * c[1] + (1 - a) * bg[1], a * c[2] + (1 - a) * bg[2], 1]; }
  function contrast(fg, bg) { var f = fg[3] < 1 ? over(fg, bg) : fg, a = lum(f), b = lum(bg); return (Math.max(a, b) + .05) / (Math.min(a, b) + .05); }
  window.KitTokens = {
    load: function () {
      return Promise.all([fetch('../system/tokens.css').then(function (r) { return r.text(); }), fetch('../system/art.css').then(function (r) { return r.text(); })])
        .then(function (x) { var o = parseTokens(x[0]); o.art = scan(between(x[1], ':root {', '\n}')); return o; });
    },
    rgba: rgba, contrast: contrast, over: over,
    esc: function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); },
    surface: function (n) { return /^--text-/.test(n) ? 'ink' : /^--bg-/.test(n) ? 'fill' : /^--line-/.test(n) ? 'line' : /^--depth-/.test(n) ? 'depth' : ''; }
  };
})();
