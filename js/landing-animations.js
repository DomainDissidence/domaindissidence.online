// LANDING PAGE PARTICLE BACKGROUND
particlesJS.load("particles", "assets/json/particles.json");


// DOWN CHEVRON LANDING PAGE ANIMATION
import { animate, createTimeline, onScroll, stagger, waapi } from "./lib/animejs/anime.esm.js";

animate("#chevron-container", {
    y: [0, "+=13"],
    ease: "outSine",
    loop: true,
    alternate: true,
    loopDelay: 50,
});


// waapi.animate(".bigger-picture-row", {
//     opacity: { from: 0 },
//     // scale: { from: 0 },
//     // duration: stagger(120, { start: 200 }),
//     delay: stagger(150, { start: 0 }),
//     ease: "outSine",
//     // ease: "inSine",
//     autoplay: onScroll({
//         // sync: 'enterForward leaveForward enterBackward leaveBackward'
//         // sync: "play none none reverse",
//         sync: "play play reverse reset",
//
//         // target: "#bigger-picture"
//         // target: "#bigger-picture .section-content"
//         // enter: "bottom-=100 top",
//         // leave: "top-=100 bottom",
//         enter: 'bottom-=120 top',
//         // leave: "bottom top"
//         // leave: 'top+=60 bottom',
//         // reset: false,
//     }),
// });

// animate(".goal", {
//     opacity: { from: 0 },
//     scale: { from: 0 },
//     duration: 320,
//     // delay: stagger(120),
//     ease: "outSine",
//     autoplay: onScroll({
//         // sync: 'enterForward leaveForward enterBackward leaveBackward'
//         sync: "play none none reverse",
//         enter: "bottom-=100 top",
//         leave: "top-=100 bottom"
//         // enter: 'bottom top',
//         // leave: "bottom top"
//         // leave: 'top+=60 bottom',
//         // reset: false,
//     })
// });


// // const goals = document.querySelectorAll(".goal");
// const goalsTimeline = createTimeline({
//     duration: 200,
//     autoplay: onScroll({
//         /* sync: 'enterForward leaveForward enterBackward leaveBackward' */
//         // sync: "play play  reverse"
//         // sync: "play pause reverse reverse",
//         // enter: "bottom-=100 top",
//         // leave: "top-=100 bottom"
//         // enter: 'bottom top',
//         // leave: "bottom top"
//         // leave: 'top+=60 bottom',
//         // sync: "play none none reverse",
//         sync: "play play reverse reset",
//         target: "#goals .section-content",
//
//     }),
// });
// goalsTimeline
//     .sync(animate(".goal > *", {
//         opacity: { from: 0 },
//         delay: stagger(40),
//         ease: "outSine",
//         autoplay: false,
//     }));
//
//
// const biggerPictureTimeline = createTimeline({
//     // duration: 200,
//     autoplay: onScroll({
//         /* sync: 'enterForward leaveForward enterBackward leaveBackward' */
//         // sync: "play play  reverse"
//         // sync: "play pause reverse reverse",
//         // enter: "bottom-=100 top",
//         // leave: "top-=100 bottom"
//         // enter: 'bottom top',
//         // leave: "bottom top"
//         // leave: 'top+=60 bottom',
//         // sync: "play none none reverse",
//         sync: "play play reverse reset",
//         target: "#bigger-picture",
//
//     }),
// });
//
// biggerPictureTimeline.sync(waapi.animate(".bigger-picture-row", {
//     // scale: { from: 0 },
//     opacity: { from: 0 },
//     delay: stagger(100, {start: 50}),
//     // ease: "inSine",
//     ease: "outQuad",
//     target: "#bigger-picture .section-content",
//     // enter: "bottom+=300 top",
//     // duration: 1000,
//     autoplay: false,
//     duration: 1000
// }), 0)
animate(".bigger-picture-row", {
    // scale: { from: 0 },
    opacity: { from: 0 },
    delay: stagger(100, {start: 0}),
    // ease: "inSine",
    // ease: "inQuad",
    // target: "#bigger-picture .section-content",
    // enter: "bottom+=300 top",
    // duration: 1000,
    // autoplay: false,
    duration: 800,
    autoplay: onScroll({
        /* sync: 'enterForward leaveForward enterBackward leaveBackward' */
        // sync: "play play  reverse"
        // sync: "play pause reverse reverse",
        // enter: "bottom-=100 top",
        // leave: "top-=100 bottom"
        // enter: 'bottom top',
        // leave: "bottom top"
        // leave: 'top+=600 bottom',
        sync: "play none none reverse",
        // sync: "play none none reverse",
        target: "#bigger-picture",
    }),
});


animate(".goal > *", {
        opacity: { from: 0 },
        delay: stagger(40),
        ease: "outSine",
        autoplay: false,
    });


// const showOnScrollOptions = {
//     scale: { from: 0 },
//     opacity: { from: 0 },
//     // duration: 600,
//     ease: "inOutQuad",
//     autoplay: onScroll({
//         debug: true,
//         // repeat: true,
//         // enter: "bottom top-=10",
//         // leave: "top bottom+=100",
//         // enter: { container: "bottom", target: "top-=100" },
//         sync: .3,
//     }),
//     delay: stagger(250),
// };

// animate(".goal .icon", showOnScrollOptions);
// animate(".bigger-picture-row", {
//     scale: { from: 0 },
//     opacity: { from: 0 },
//     duration: 600,
//     ease: "outQuad",
//     autoplay: onScroll({
//         debug: true,
//         // container: "#bigger-picture",
//         // repeat: true,
//         // enter: "bottom top-=1000",
//         // enter: "bottom top-=400",
//         enter: "bottom+=500 top-=400",
//         // leave: "top+=60 bottom",
//         sync: .4,
//         // leave: "top bottom+=100",
//         // enter: { container: "bottom", target: "top-=100" },
//         // sync:
//     }),
//     delay: stagger(250),
// });
