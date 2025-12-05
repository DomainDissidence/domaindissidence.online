import { animate, spring, utils, createTimeline } from "./lib/animejs/anime.esm.js";


particlesJS.load("particles", "assets/json/particles.json");





const chevronContainerAnim = animate("#chevron-container", {
    // y: ["+=15", "0", "+=15"],
    y: [0, "+=13"],
    // y: [0, -15],
    // scale: [1, 1.1],
    // width: "-=4",
    ease: "outSine",
    autoplay: false,
    // filter: "box-shadow(0 0 5px black)"
});

const svgAnim = animate("#down-chevron", {
    // color: "#FF6060",
    // color: ["#FFF000", "#F00FFf"],
    // loopDelay: 1000,
    // opacity: 0.4,
    // ease: "outSine",
    // ease: "outQuad",
    // ease: "out",
    // color: {
    //     from: 'rgba(255, 255, 255, .4)',
    //     to: 'rgba(255, 255, 255, .8)'
    // },
    // opacity: { from: 0.6 },
    // color: "var(--ddtheme-pink)",
    // strokeWidth: "+=2",
    // strokeWidth: "+=1",
    autoplay: false,
    // filter: "drop-shadow(0 -4px 1px var(--ddtheme-pink))",
    // filter: "drop-shadow(0 2px 1px white)",
    // loopDelay: 300
    // boxShadow: "0 0 5px black",
});

const tl = createTimeline({
    loop: true,
    alternate: true,
    // duration: 600,
    // playbackEase: "outQuad",
    // loopDelay: 0,
    // autoplay: true
});

tl.sync(chevronContainerAnim).sync(svgAnim, 0);
// tl.restart().refresh();