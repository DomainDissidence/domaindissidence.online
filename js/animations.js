import { animate, onScroll, stagger } from "./lib/animejs/anime.esm.js";

animate("#chevron-container", {
    y: [0, "+=13"],
    ease: "outSine",
    loop: true,
    alternate: true,
    loopDelay: 50,
});


animate(".bigger-picture-row", {
    opacity: { from: 0 },
    delay: stagger(100, { start: 0 }),
    duration: 800,
    autoplay: onScroll({
        sync: "play none none reverse",
        target: "#bigger-picture",
    }),
});


animate(".goal > *", {
    opacity: { from: 0 },
    delay: stagger(40),
    ease: "outSine",
    autoplay: false,
});