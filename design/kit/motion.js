/* design/kit/motion.js, THE KIT'S MOTION, stage 07 step 5, D-235: the motion v4 Home was approved with, carried into the kit so every screen
   built from it moves as v4 does. It only dresses and plays what the kit's markup already holds, reading kit classes; the look of every part is
   in kit.css beside the component it moves, and for whoever asked for less motion nothing here moves. Loaded after kit.js on every screen
   in colour, the shell and the kit page.
   Its parts, each from its v4 file:
   1. ICON STORY (rail-icons.js): the marks of the rail, the footer's counters and its round plate redrawn as inline SVG in parts, their host
      marked .has-story; the sound's speaker laid into its button.
   2. RARE MARKS AND RARE DROPS (rare-mark.js, rare.js): a drop's mark by its chance, A at 5 % or less, B at 2.5 %, C at 1 %; a rare drop's
      landing. window.KitMotion.mark(tile) and .land(tile) are what the ticker in kit.js calls on each arrival.
   3. THE FAVOURITE'S BURST (case-tiles.js).
   4. THE DISCLOSURE SLIDING open and shut (faq-home.css), one open at a time in a group.
   5. THE EVENT COUNTDOWN ticking to its published end every second (wireframes/_nav.js tickEvents), stopping at zero.
   6. A BLOCK OFF THE SCREEN PAUSES ITS LOOPS (idle.js), and the banner's story with it.
   7. THE TICKET RULER of How this case works playing once it is in view (case-blocks.js play), D-236; and the rare marks of part 2 on the
      case screen's cards, a run's card and an item of What is in this case, D-236. */
(function () {
  var d = document, still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. ICON STORY. The drawings are rail-icons.js's, from the same paths as the kit's masks, D-233 filled; at rest the parts a story adds are
     out of sight (.icon-story__x), so a mark is the set's plain glyph */
  var S = {};
  S.box = '<g class="icon-story__rays" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v2.6M7.3 3.2l1.1 2.1M16.7 3.2l-1.1 2.1M3.6 5.5l2 1.1M20.4 5.5l-2 1.1"/></g>' +
    '<g class="icon-story__chest"><path class="icon-story__x icon-story__light" d="M5 13.4h14l2-6.4H3z"/><g class="icon-story__body"><path fill-rule="evenodd" d="M3 13.8h18v6.4c0 .5-.4.8-.8.8H3.8c-.5 0-.8-.3-.8-.8zM7.2 13.8h1.3V21H7.2zM15.5 13.8h1.3V21h-1.3zM9.7 13.8h4.6v5.4H9.7z"/><path d="M10.9 13.8v2.4a1.1 1.1 0 0 0 2.2 0v-2.4" fill="none" stroke="currentColor" stroke-width="1.3"/></g>' +
    '<path class="icon-story__lid" fill-rule="evenodd" d="M3 12.6V11.2C3 9.4 4.4 8 6.2 8h11.6C19.6 8 21 9.4 21 11.2v1.4zM8.4 8h1.3v4.6H8.4zM14.3 8h1.3v4.6h-1.3z"/></g>' +
    '<g class="icon-story__x icon-story__sparks"><path class="icon-story__s1" d="M12 5.6l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7z"/><path class="icon-story__s2" d="M7.4 6.6l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/><path class="icon-story__s3" d="M16.6 6.6l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/></g>';

  S.battle = '<defs><mask id="icon-story-sw"><rect width="24" height="24" fill="#fff"/><path d="M21.5 2.5L18.4 3.2 8.8 12.8 11.2 15.2 20.8 5.6z" fill="#000" stroke="#000" stroke-width="2.4" stroke-linejoin="round"/></mask></defs>' +
    '<g class="icon-story__sword-a"><path class="icon-story__blade" mask="url(#icon-story-sw)" d="M2.5 2.5L5.6 3.2 15.2 12.8 12.8 15.2 3.2 5.6z"/><path d="M12 17.4l5.4-5.4 1.6 1.6-5.4 5.4zM16.2 16.2l1.5-1.5 3.6 3.6-1.5 1.5z"/><circle cx="21" cy="21" r="1.5"/></g>' +
    '<g class="icon-story__sword-b"><path d="M21.5 2.5L18.4 3.2 8.8 12.8 11.2 15.2 20.8 5.6z"/><path d="M12 17.4l-5.4-5.4-1.6 1.6 5.4 5.4zM7.8 16.2l-1.5-1.5-3.6 3.6 1.5 1.5z"/><circle cx="3" cy="21" r="1.5"/></g>' +
    '<g class="icon-story__x icon-story__clash" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M12 1.6v3.2M6.4 3.4l1.8 2.6M17.6 3.4l-1.8 2.6M3.8 8.4l2.8 1M20.2 8.4l-2.8 1"/></g>' +
    '<path class="icon-story__x icon-story__flash" d="M12 5.4l1.1 3.1 3.1 1.1-3.1 1.1-1.1 3.1-1.1-3.1-3.1-1.1 3.1-1.1z"/>';

  S.target = '<g class="icon-story__scope"><path class="icon-story__outer" fill-rule="evenodd" d="M12 1.8a10.2 10.2 0 1 1 0 20.4a10.2 10.2 0 0 1 0-20.4zm0 3.4a6.8 6.8 0 1 0 0 13.6a6.8 6.8 0 0 0 0-13.6z"/>' +
    '<path class="icon-story__ticks" d="M10.9.6h2.2v7.2h-2.2zM10.9 16.2h2.2v7.2h-2.2zM.6 10.9h7.2v2.2H.6zM16.2 10.9h7.2v2.2h-7.2z"/><circle class="icon-story__inner" cx="12" cy="12" r="2.9"/></g>' +
    '<circle class="icon-story__x icon-story__dot" cx="12" cy="12" r="2"/><circle class="icon-story__x icon-story__ripple" cx="12" cy="12" r="6" fill="none" stroke-width="1.4"/>'; /* filled by D-233: the ring, the ticks and the centre are solid, the story unchanged */

  S['arrow-up'] = '<rect class="icon-story__bar icon-story__b1" x="2" y="18.5" width="3" height="4.5" rx=".4"/><rect class="icon-story__bar icon-story__b2" x="6.5" y="15.5" width="3" height="7.5" rx=".4"/><rect class="icon-story__bar icon-story__b3" x="11" y="12.5" width="3" height="10.5" rx=".4"/>' +
    '<path class="icon-story__rocket" d="M15.6 10.2H13L17.6 3l4.6 7.2h-2.6V23h-4z"/><path class="icon-story__x icon-story__tipglow" d="M17.6.6l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z"/>';

  S.diamond = '<defs><clipPath id="icon-story-gem"><path d="M6 2L2 8l10 14L22 8l-4-6z"/></clipPath></defs>' +
    '<g class="icon-story__spin"><path fill-rule="evenodd" d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6z"/>' +
    '<g clip-path="url(#icon-story-gem)"><path class="icon-story__x icon-story__glint" d="M1 24L13 0h4L5 24z"/></g></g>' +
    '<g class="icon-story__x icon-story__sparks"><path class="icon-story__s1" d="M21 .6l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7z"/><path class="icon-story__s2" d="M2.6 12.4l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/><path class="icon-story__s3" d="M20.8 15.4l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/></g>';

  S.gift = '<g class="icon-story__parcel"><path class="icon-story__x icon-story__light" d="M4 12h16l2-8H2z"/><g class="icon-story__base"><path d="M2 12.7498C2.00411 16.9681 2.07958 19.1506 3.46423 20.5353C4.84888 21.9199 7.03145 21.9954 11.2498 21.9995V14.1234C10.4701 15.6807 8.8598 16.7498 6.99976 16.7498C6.58555 16.7498 6.24976 16.414 6.24976 15.9998C6.24976 15.5856 6.58555 15.2498 6.99976 15.2498C8.53655 15.2498 9.82422 14.1831 10.1628 12.7498H2Z"/><path d="M12.7498 21.9995C16.9681 21.9954 19.1506 21.9199 20.5353 20.5353C21.9199 19.1506 21.9954 16.9681 21.9995 12.7498H13.8367C14.1753 14.1831 15.463 15.2498 16.9998 15.2498C17.414 15.2498 17.7498 15.5856 17.7498 15.9998C17.7498 16.414 17.414 16.7498 16.9998 16.7498C15.1397 16.7498 13.5294 15.6807 12.7498 14.1234V21.9995Z"/></g>' +
    '<g class="icon-story__top"><path d="M11.2498 2C7.03145 2.00411 4.84888 2.07958 3.46423 3.46423C2.07958 4.84888 2.00411 7.03145 2 11.2498H6.91352C6.56255 10.8114 6.30031 10.2943 6.15731 9.72228C5.61906 7.56926 7.56926 5.61906 9.72228 6.15731C10.2943 6.30031 10.8114 6.56255 11.2498 6.91352V2Z"/><path d="M21.9995 11.2498C21.9954 7.03145 21.9199 4.84888 20.5353 3.46423C19.1506 2.07958 16.9681 2.00411 12.7498 2V6.91352C13.1882 6.56255 13.7053 6.30031 14.2772 6.15731C16.4303 5.61906 18.3805 7.56926 17.8422 9.72228C17.6992 10.2943 17.437 10.8114 17.086 11.2498H21.9995Z"/><path d="M9.35847 7.61252C10.47 7.8904 11.2498 8.88911 11.2498 10.0348V11.2498H10.0348C8.88911 11.2498 7.8904 10.47 7.61252 9.35847C7.34891 8.30403 8.30403 7.34891 9.35847 7.61252Z"/><path d="M12.7498 10.0348V11.2498H13.9647C15.1104 11.2498 16.1091 10.47 16.387 9.35847C16.6506 8.30403 15.6955 7.34891 14.6411 7.61252C13.5295 7.8904 12.7498 8.88911 12.7498 10.0348Z"/></g></g>' +
    '<g class="icon-story__x icon-story__confetti"><rect class="icon-story__c1" x="4.6" y="7" width="1.8" height="1.8" rx=".3"/><rect class="icon-story__c2" x="9" y="4.6" width="1.6" height="1.6" rx=".3"/><rect class="icon-story__c3" x="13.4" y="4.6" width="1.6" height="1.6" rx=".3"/><rect class="icon-story__c4" x="17.6" y="7" width="1.8" height="1.8" rx=".3"/></g>';

  S.cup = '<g class="icon-story__trophy"><path class="icon-story__handle" d="M21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.8781C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L19.6636 11.298C20.2102 9.44984 20.3926 7.46414 20.4601 5.76597C20.4629 5.69316 20.4662 5.61945 20.4695 5.54497L20.4718 5.49279C21.1231 5.71896 21.4887 5.88758 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234Z"/><path class="icon-story__handle" d="M2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.8781C2.41442 10.2302 2.79063 10.4392 3.54305 10.8572L4.33681 11.2982C3.79007 9.45001 3.60767 7.46422 3.54025 5.76597C3.53736 5.69316 3.5341 5.61945 3.53081 5.54497L3.5285 5.49266C2.87701 5.7189 2.51126 5.88752 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234Z"/>' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7886 10.0545 17.8503 15.4853 12.75 15.9657V19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.35 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H8.65L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H11.25V15.9657C6.14996 15.4851 5.21169 10.0544 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2ZM12.9524 6.19887L12.8541 6.02251C12.4741 5.34084 12.2841 5 12 5C11.7159 5 11.5259 5.34084 11.1459 6.02251L11.0476 6.19887C10.9397 6.39258 10.8857 6.48944 10.8015 6.55334C10.7173 6.61725 10.6125 6.64097 10.4028 6.68841L10.2119 6.73161C9.47396 6.89857 9.10501 6.98205 9.01723 7.26432C8.92945 7.54659 9.18097 7.84072 9.68403 8.42898L9.81418 8.58117C9.95713 8.74833 10.0286 8.83191 10.0608 8.93532C10.0929 9.03872 10.0821 9.15023 10.0605 9.37327L10.0408 9.57632C9.96476 10.3612 9.92674 10.7536 10.1565 10.9281C10.3864 11.1025 10.7318 10.9435 11.4227 10.6254L11.6014 10.5431C11.7978 10.4527 11.8959 10.4075 12 10.4075C12.1041 10.4075 12.2022 10.4527 12.3986 10.5431L12.5773 10.6254C13.2682 10.9435 13.6136 11.1025 13.8435 10.9281C14.0733 10.7536 14.0352 10.3612 13.9592 9.57632L13.9395 9.37327C13.9179 9.15023 13.9071 9.03872 13.9392 8.93532C13.9714 8.83191 14.0429 8.74833 14.1858 8.58117L14.316 8.42898C14.819 7.84072 15.0706 7.54659 14.9828 7.26432C14.895 6.98205 14.526 6.89857 13.7881 6.73161L13.5972 6.68841C13.3875 6.64097 13.2827 6.61725 13.1985 6.55334C13.1143 6.48944 13.0603 6.39258 12.9524 6.19887Z"/></g>' +
    '<path class="icon-story__x icon-story__star" d="M12 5l1.5 2.2 2.5.6-1.6 2 .1 2.6L12 11.5l-2.5.9.1-2.6-1.6-2 2.5-.6z"/>' +
    '<g class="icon-story__x icon-story__sparks"><path class="icon-story__s1" d="M3 .8l.6 1.3 1.3.6-1.3.6-.6 1.3-.6-1.3-1.3-.6 1.3-.6z"/><path class="icon-story__s2" d="M21 .8l.6 1.3 1.3.6-1.3.6-.6 1.3-.6-1.3-1.3-.6 1.3-.6z"/></g>';

  S.dollar = '<g class="icon-story__coin"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V6.31673C9.61957 6.60867 8.25 7.83361 8.25 9.5C8.25 11.4172 10.0628 12.75 12 12.75C13.3765 12.75 14.25 13.6557 14.25 14.5C14.25 15.3443 13.3765 16.25 12 16.25C10.6235 16.25 9.75 15.3443 9.75 14.5C9.75 14.0858 9.41421 13.75 9 13.75C8.58579 13.75 8.25 14.0858 8.25 14.5C8.25 16.1664 9.61957 17.3913 11.25 17.6833V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.6833C14.3804 17.3913 15.75 16.1664 15.75 14.5C15.75 12.5828 13.9372 11.25 12 11.25C10.6235 11.25 9.75 10.3443 9.75 9.5C9.75 8.65573 10.6235 7.75 12 7.75C13.3765 7.75 14.25 8.65573 14.25 9.5C14.25 9.91421 14.5858 10.25 15 10.25C15.4142 10.25 15.75 9.91421 15.75 9.5C15.75 7.83361 14.3804 6.60867 12.75 6.31673V6Z"/></g>';

  /* founder of 3 Nov 2026: the footer's counters play the rail's stories, and two marks the rail has no row for get stories of their own.
     users: the second person joins from behind, the first hops, two sparks; online: the person nods, the tick pops again, a live ring (D-233) */
  S.users = '<defs><mask id="icon-story-users-k"><rect width="24" height="24" fill="#fff"/><g fill="#000" stroke="#000" stroke-width="3"><circle cx="8.8" cy="7.4" r="4.1"/><path d="M1.6 21.2c0-4.3 3.2-7.4 7.2-7.4s7.2 3.1 7.2 7.4z"/></g></mask></defs>' +
    '<g class="icon-story__p2" mask="url(#icon-story-users-k)"><circle cx="16.2" cy="6.9" r="3.6"/><path d="M14 13.6c4.6 0 8.4 2.9 8.4 7v.6H14z"/></g>' +
    '<g class="icon-story__p1"><circle cx="8.8" cy="7.4" r="4.1"/><path d="M1.6 20.6c0-4 3.2-6.8 7.2-6.8s7.2 2.8 7.2 6.8v.2c0 .4-.3.7-.7.7H2.3c-.4 0-.7-.3-.7-.7z"/></g>' +
    '<g class="icon-story__x icon-story__joins"><path class="icon-story__j1" d="M20.6 2.2l.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5z"/><path class="icon-story__j2" d="M22.4 7.4l.4.8.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4z"/></g>';
  S.online = '<defs><mask id="icon-story-online-k"><rect width="24" height="24" fill="#fff"/><circle cx="18" cy="16" r="6.8" fill="#000"/></mask></defs>' +
    '<g class="icon-story__me" mask="url(#icon-story-online-k)"><circle cx="9" cy="7.4" r="4.1"/><path d="M1.8 20.6c0-4 3.2-6.8 7.2-6.8s7.2 2.8 7.2 6.8v.2c0 .4-.3.7-.7.7H2.5c-.4 0-.7-.3-.7-.7z"/></g>' +
    '<path class="icon-story__tick" fill-rule="evenodd" d="M18 10.6a5.4 5.4 0 1 1 0 10.8a5.4 5.4 0 0 1 0-10.8zm2.5 3.4a.8.8 0 0 0-1.1 0l-2.2 2.3-1-1a.8.8 0 1 0-1.1 1.1l1.6 1.6c.3.3.8.3 1.1 0l2.7-2.9a.8.8 0 0 0 0-1.1z"/>' +
    '<circle class="icon-story__x icon-story__live" cx="18" cy="16" r="5.6" fill="none" stroke-width="1.4"/>'; /* filled by D-233: the tick sits in a disc and pops where it used to draw itself */

  S.swap = '<g class="icon-story__swap"><path class="icon-story__upper" d="M10.25 4.00003C10.25 3.69074 10.0602 3.41317 9.77191 3.30105C9.48366 3.18892 9.15614 3.26524 8.94715 3.49324L3.44715 9.49324C3.24617 9.71248 3.19374 10.0298 3.3135 10.302C3.43327 10.5743 3.70259 10.75 4.00002 10.75H20C20.4142 10.75 20.75 10.4142 20.75 10C20.75 9.58582 20.4142 9.25003 20 9.25003L10.25 9.25003V4.00003Z"/><path class="icon-story__lower" d="M13.75 20L13.75 14.75H4.00002C3.5858 14.75 3.25002 14.4142 3.25002 14C3.25002 13.5858 3.5858 13.25 4.00002 13.25L20 13.25C20.2974 13.25 20.5668 13.4258 20.6865 13.698C20.8063 13.9703 20.7539 14.2876 20.5529 14.5068L15.0529 20.5068C14.8439 20.7348 14.5164 20.8111 14.2281 20.699C13.9399 20.5869 13.75 20.3093 13.75 20Z"/></g>';

  var SPEAKER = '<path class="icon-story__cone" d="M3 9.2h3.6L11.5 5v14l-4.9-4.2H3z"/>';
  var WAVES = '<g class="icon-story__on" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path class="icon-story__w1" d="M15 9a4.2 4.2 0 0 1 0 6"/><path class="icon-story__w2" d="M17.8 6.4a8 8 0 0 1 0 11.2"/></g>';
  var CROSS = '<g class="icon-story__off" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15.5 9.5l5 5M20.5 9.5l-5 5"/></g>';
  function svg(id, body) { return '<svg class="icon-story icon-story--' + id + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' + body + '</svg>'; }
  var NAME = { pulse: 'online' }; /* the footer's Online now wears the pulse mark; its story is online's */
  function dressIcon(icon, host) {
    if (icon.classList.contains('is-story')) return;
    var m = /\bicon--([a-z-]+)/.exec(icon.className), id = m && (NAME[m[1]] || m[1]);
    if (!id || !S[id]) return;
    icon.classList.add('is-story'); icon.innerHTML = svg(id, S[id]);
    if (host) host.classList.add('has-story');
  }
  function stories(root) {
    root.querySelectorAll('.rail__item .rail__mark > .icon, .footer__stat .footer__tile > .icon, .footer__plate--fair .footer__pt > .icon').forEach(function (i) {
      dressIcon(i, i.closest('.rail__item, .footer__stat, .footer__plate')); });
    root.querySelectorAll('.has-story .icon').forEach(function (i) { dressIcon(i, null); });
    root.querySelectorAll('.rail__amb .button[aria-pressed] > .icon').forEach(function (i) {
      if (i.classList.contains('is-story')) return; i.classList.add('is-story'); i.innerHTML = svg('sound', SPEAKER + WAVES + CROSS); });
  }

  /* 2. RARE MARKS. A drop's chance in the case it came from, its data-chance, a sample, D-124 */
  function tier(ch) { ch = parseFloat(ch); return !(ch > 0) ? null : ch <= 1 ? 'c' : ch <= 2.5 ? 'b' : ch <= 5 ? 'a' : null; }
  function mark(tile) {
    if (!tile || !tile.classList) return null;
    var hit = tile.querySelector('.feed-tile__hit, .drop-card__art'), t = tier(tile.getAttribute('data-chance')); /* the ring goes where the host draws its hexagon: a live drop's hit, an item's art (D-236), else the card itself */
    [tile, hit].forEach(function (h) { if (h) [].slice.call(h.children).forEach(function (n) { if (n.classList.contains('rare-mark')) n.remove(); }); });
    tile.classList.remove('is-mark-a', 'is-mark-b', 'is-mark-c');
    if (!t) return null;
    tile.classList.add('is-mark-' + t);
    var s = d.createElement('span'), lag = (-Math.random() * 1.4).toFixed(2) + 's'; /* each starts at its own point in its loop */
    s.setAttribute('aria-hidden', 'true'); s.style.animationDelay = lag;
    if (t === 'a') { s.className = 'rare-mark rare-mark--ring'; var i = d.createElement('i'); i.style.animationDelay = lag; s.appendChild(i); (hit || tile).appendChild(s); }
    else if (t === 'b') { s.className = 'rare-mark rare-mark--bolt'; tile.appendChild(s); }
    else { s.className = 'rare-mark rare-mark--fire'; tile.insertBefore(s, tile.firstChild); }
    return t;
  }
  /* a rare drop lands once its arrival settles, on its own animationend so the swing is never cut short: one rare drop is live at a time, the
     one before calms to its lit frame; it punches, flashes and sends its wave, and the next two drops are shoved aside */
  function land(tile) {
    if (!tile || !tile.classList.contains('feed-tile--rare')) return;
    var li = tile.closest('.ticker__i') || tile, done = false;
    function go() {
      if (done) return; done = true;
      d.querySelectorAll('.feed-tile--rare.is-live').forEach(function (o) { if (o !== tile) { o.classList.remove('is-live'); o.classList.add('is-calm'); } });
      tile.classList.remove('is-hit'); void tile.offsetWidth; tile.classList.add('is-hit', 'is-live');
      [li.nextElementSibling, li.nextElementSibling && li.nextElementSibling.nextElementSibling].forEach(function (n) {
        var f = n && n.querySelector('.feed-tile'); if (!f) return; f.classList.add('is-shoved'); setTimeout(function () { f.classList.remove('is-shoved'); }, 650); });
    }
    if (li.classList.contains('is-new')) li.addEventListener('animationend', function f(e) { if (e.target === li) { li.removeEventListener('animationend', f); go(); } });
    else go();
    setTimeout(go, 1400); /* in case the arrival did not animate */
  }
  /* the page at its top: a C drop stands over the sticky header so its flame is not cut */
  function top() { d.documentElement.classList.toggle('is-scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', top, { passive: true }); top();

  /* 3. THE FAVOURITE'S BURST: the heart pops, and nine small pieces of three kinds and three sizes leave it in random directions, travel 14 to
     30px and fade within .7s; only as it turns on, and not for less motion. The colours are the kit's; the pale pink is the pink mixed with
     white. Runs after kit.js has flipped aria-pressed */
  var COLOURS = ['var(--color-pink)', 'var(--color-text-hi)', 'var(--color-money)', 'var(--color-blue)', 'color-mix(in srgb, var(--color-pink) 55%, var(--color-text-hi))'];
  var SHAPES = ['heart', 'heart', 'star', 'star', 'stroke'];
  function rand(a, b) { return a + Math.random() * (b - a); }
  function burst(btn) {
    var icon = btn.querySelector('.icon');
    if (icon && icon.animate) icon.animate([{ scale: 1 }, { scale: 1.4 }, { scale: .92 }, { scale: 1 }], { duration: 420, easing: 'ease-out' });
    if (still || !icon) return;
    var box = d.createElement('span'); box.className = 'fav__burst'; box.setAttribute('aria-hidden', 'true');
    var r = icon.getBoundingClientRect(), b = btn.getBoundingClientRect();
    box.style.left = (r.left - b.left + r.width / 2) + 'px'; box.style.top = (r.top - b.top + r.height / 2) + 'px';
    btn.appendChild(box);
    for (var k = 0; k < 9; k++) {
      var i = d.createElement('i'), shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      var size = shape === 'stroke' ? 0 : [5, 7, 9][Math.floor(Math.random() * 3)];
      var angle = (k / 9) * Math.PI * 2 + rand(-.3, .3), dist = rand(14, 30);
      i.setAttribute('data-s', shape); i.style.setProperty('--bc', COLOURS[Math.floor(Math.random() * COLOURS.length)]);
      if (shape === 'stroke') { i.style.width = '2px'; i.style.height = Math.round(rand(6, 10)) + 'px'; } else { i.style.width = size + 'px'; i.style.height = size + 'px'; }
      var w = parseFloat(i.style.width), h = parseFloat(i.style.height), turn = shape === 'stroke' ? (angle * 180 / Math.PI + 90) : rand(-40, 40);
      var x = Math.cos(angle) * dist, y = Math.sin(angle) * dist;
      box.appendChild(i);
      i.animate([
        { transform: 'translate(' + (-w / 2) + 'px,' + (-h / 2) + 'px) rotate(' + turn + 'deg) scale(.4)', opacity: 1, easing: 'cubic-bezier(.2, .7, .3, 1)' },
        { transform: 'translate(' + (x * .75 - w / 2) + 'px,' + (y * .75 - h / 2) + 'px) rotate(' + turn + 'deg) scale(1)', opacity: 1, offset: .5, easing: 'ease-in' },
        { transform: 'translate(' + (x - w / 2) + 'px,' + (y - h / 2) + 'px) rotate(' + turn + 'deg) scale(.6)', opacity: 0 }
      ], { duration: rand(560, 760), easing: 'linear', fill: 'forwards' });
    }
    setTimeout(function () { box.remove(); }, 800);
  }
  d.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.fav'); if (!btn) return;
    setTimeout(function () { if (btn.getAttribute('aria-pressed') === 'true') burst(btn); }, 0);
  });

  /* 4. THE DISCLOSURE. With motion, the group is kept by this script (the name moves to data-group, so the browser does not shut the other at
     once) and the answer slides; without, details and summary stay the browser's, which opens and shuts at once */
  var rootStyle = getComputedStyle(d.documentElement);
  function dur() { return (parseFloat(rootStyle.getPropertyValue('--motion-disclosure')) || .4) * 1000; }
  function ease() { return rootStyle.getPropertyValue('--motion-ease-disclosure').trim() || 'ease'; }
  function groups(r) { if (still) return; r.querySelectorAll('details.disclosure[name]').forEach(function (x) { x.setAttribute('data-group', x.getAttribute('name')); x.removeAttribute('name'); }); }
  function stop(det) { (det._run || []).forEach(function (a) { a.onfinish = null; a.cancel(); }); det._run = []; }
  function slide(det, opening) {
    var b = det.querySelector('.disclosure__body'); if (!b) { det.open = opening; return; }
    stop(det); det.classList.add('is-sliding');
    if (opening) { det.classList.remove('is-closing'); det.open = true; }
    else det.classList.add('is-closing');
    var cs = getComputedStyle(b), full = { height: cs.height, paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, marginBottom: cs.marginBottom };
    var none = { height: '0px', paddingTop: '0px', paddingBottom: '0px', marginBottom: '0px' };
    var a = b.animate(opening ? [none, full] : [full, none], { duration: dur(), easing: ease() });
    det._run = [a];
    [].forEach.call(b.children, function (c) {
      det._run.push(c.animate(opening ? [{ opacity: 0, translate: '0 -6px' }, { opacity: 1, translate: '0 0' }] : [{ opacity: 1, translate: '0 0' }, { opacity: 0, translate: '0 -6px' }],
        { duration: opening ? 350 : 300, delay: opening ? 100 : 0, easing: ease(), fill: opening ? 'backwards' : 'forwards' }));
    });
    a.onfinish = function () { stop(det); det.classList.remove('is-sliding'); if (!opening) { det.open = false; det.classList.remove('is-closing'); } };
  }
  d.addEventListener('click', function (e) {
    var sum = e.target.closest && e.target.closest('.disclosure > summary'); if (!sum || still) return;
    var det = sum.parentNode; e.preventDefault();
    var opening = !det.open || det.classList.contains('is-closing');
    if (opening) { var g = det.getAttribute('data-group');
      if (g) d.querySelectorAll('details.disclosure[open]').forEach(function (o) { if (o !== det && o.getAttribute('data-group') === g && !o.classList.contains('is-closing')) slide(o, false); }); }
    slide(det, opening);
  });

  /* 5. THE EVENT COUNTDOWN: computed from its published end every second, never restarted per visit, and it stops at zero; days, hours,
     minutes, seconds in the order the clock draws them. The end is a sample, D-124 */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    d.querySelectorAll('.banner__clock[data-ends]').forEach(function (c) {
      var left = Math.max(0, Math.floor((Date.parse(c.getAttribute('data-ends')) - Date.now()) / 1000));
      var v = [Math.floor(left / 86400), Math.floor(left % 86400 / 3600), Math.floor(left % 3600 / 60), left % 60];
      c.querySelectorAll('.banner__cell > b').forEach(function (b, k) { if (k < 4) b.textContent = pad(v[k]); });
    });
  }

  /* 6. IDLE: a block of the screen with looping decoration is .is-idle while none of it is within 120px of the window, and kit.css pauses its
     animations; the banner's story pauses with it and plays again on its way back */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      e.target.classList.toggle('is-idle', !e.isIntersecting);
      var v = e.target.querySelector && e.target.querySelector('.banner__story video');
      if (v) { if (e.isIntersecting && !still) v.play().catch(function () {}); else v.pause(); }
    });
  }, { rootMargin: '120px 0px' }) : null;
  function idle(r) { if (io) r.querySelectorAll('.shell__main > *, .mode-card, .footer').forEach(function (n) { if (!n._idle) { n._idle = true; io.observe(n); } }); }

  /* 7. THE TICKET RULER (How this case works, D-236, v4 case-blocks.js play): once the ruler is half in view the pin runs to the round's
     ticket, the other items step back, and after 1.3s the ticket's number counts up from 1 over 0.9s; kit.css times the rest. For less motion
     it stands at its end at once */
  function rulers(r) {
    r.querySelectorAll('.ruler, .case-how__ruler').forEach(function (v) { /* its old name and its own, .case-how__ruler (rename map row 5, D-269) */
      var n = v.querySelector('.ruler__n, .case-how__n'); if (!n || v._ruler) return; v._ruler = true;
      if (still) { v.classList.add('is-on', 'is-still'); return; }
      var to = +n.getAttribute('data-to'), fin = n.innerHTML;
      function go() {
        v.classList.add('is-on');
        setTimeout(function () {
          var t0 = performance.now(), D = 900;
          (function step(now) { var k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
            n.textContent = String(Math.max(1, Math.round(to * e))).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            if (k < 1) requestAnimationFrame(step); else n.innerHTML = fin; })(t0);
        }, 1300);
      }
      if (!('IntersectionObserver' in window)) return go();
      var o = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { o.disconnect(); go(); } }, { threshold: .45 });
      o.observe(v);
    });
  }

  function start() {
    stories(d); d.querySelectorAll('.feed-tile[data-chance], .case-stage__card[data-chance], .drop-card[data-chance]').forEach(mark); rulers(d); groups(d); idle(d); tick(); setInterval(tick, 1000);
    var again = d.getElementById('m-rare-hit'); /* the kit page's demo: land the three rare drops again */
    if (again) again.addEventListener('click', function () { d.querySelectorAll('#m-rare .feed-tile--rare').forEach(function (t) { t.classList.remove('is-live', 'is-calm'); land(t); }); });
  }
  window.KitMotion = { mark: mark, land: land, stories: stories, tier: tier };
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start); else start();
})();
