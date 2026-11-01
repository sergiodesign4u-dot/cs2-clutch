/* design/v4/banner-story.js, the Coldfront story on v4's banner, founder of 1 Nov 2026.
 * The video runs over the banner's still layers, a wide cut from 600px up and a tall cut below, and
 * only after the page has loaded, so the first paint stays the picture. It is silent, decorative and
 * paused off screen. The title, the countdown and the button stay the page's own, over it. A person
 * who asked for less motion or less data keeps the still banner. */
(function () {
  var wide = window.matchMedia('(min-width: 600px)'); /* from here the banner is wider than the tall cut can fill without losing the soldier's head; measured at 768 */
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');

  function cut() {
    return wide.matches ? 'art/story/coldfront-story.mp4' : 'art/story/coldfront-story-phone.mp4';
  }

  function start() {
    var banner = document.querySelector('.wf-event');
    var connection = navigator.connection;
    if (!banner || calm.matches || (connection && connection.saveData)) return;

    var video = document.createElement('video');
    var onScreen = true;
    video.className = 'v4-story';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-hidden', 'true');
    video.setAttribute('tabindex', '-1');
    video.src = cut();
    video.addEventListener('playing', function () { banner.classList.add('has-story'); });
    banner.insertBefore(video, banner.firstChild);

    function settle() {
      if (onScreen) video.play().catch(function () {});
      else video.pause();
    }
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      settle();
    }).observe(banner);
    wide.addEventListener('change', function () {
      video.src = cut();
      settle();
    });
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
