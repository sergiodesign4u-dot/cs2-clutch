/* design/v4/case-block-lab.js, the frame of every block lab of v4's case screen, D-209, founder of 4 Nov 2026: the case page's parts are its
   blocks, each a page of variants, as Home's are. A lab declares window.CBL = { focus, param, anchor, rows: [[value, title, line, onPage]] }
   and each row is the real page, case.html?embed&focus=<block>&<param>=<value>, drawn with that block alone; the frame takes the height the
   page posts (case-blocks.js), and Width sets it to a phone's 360px or the lab's full width. */
(function () {
  var C = window.CBL, host = document.getElementById('rows');
  if (!C || !host) return;
  var ctl = document.createElement('div');
  ctl.className = 'cl-ctl';
  ctl.innerHTML = '<label>Width <span class="cl-seg" role="group" aria-label="Width"><button type="button" aria-pressed="true" data-w="">Full</button><button type="button" aria-pressed="false" data-w="360">360</button></span></label>';
  host.parentNode.insertBefore(ctl, host);
  host.innerHTML = C.rows.map(function (r) {
    var q = (C.param ? C.param + '=' + r[0] : r[0]);
    return '<section class="cl-row"><div class="cl-row-h"><h2>' + r[1] + '</h2>' + (r[3] ? '<span class="cl-tag">On the case screen</span>' : '') +
      '<p>' + r[2] + ' <a class="cl-open" href="case.html?' + q + (C.anchor ? '#' + C.anchor : '') + '">Open on the page</a></p></div>' +
      '<div class="cl-fw"><iframe class="cl-frame" title="' + r[1] + '" src="case.html?embed&focus=' + C.focus + '&' + q + '"></iframe></div></section>';
  }).join('');
  var frames = host.querySelectorAll('iframe');
  window.addEventListener('message', function (e) {
    if (!e.data || !e.data.v4lab) return;
    Array.prototype.forEach.call(frames, function (f) { if (f.contentWindow === e.source) f.style.height = e.data.h + 'px'; });
  });
  ctl.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-w]'); if (!b) return;
    Array.prototype.forEach.call(ctl.querySelectorAll('button'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    Array.prototype.forEach.call(frames, function (f) { f.style.width = b.getAttribute('data-w') ? b.getAttribute('data-w') + 'px' : ''; });
  });
})();
