// const fonts = ["inter", "outfit", "mozilla-text", "jetbrains-mono", "cabin"].map(name => `${name}-font-style`);
//
// console.log(fonts);

// const fonts = ["inter", "outfit", "mozilla-text", "jetbrains-mono", "cabin"];



function setFont(name) {
    // toggle all off
    // const pEls = document.querySelectorAll("p");
    // pEls.forEach(p => p.style.removeProperty("font-family"));


}


(() => {
    const fonts = ["inter", "outfit", "mozilla-text", "jetbrains-mono", "cabin"].map(name => `${name}-font-style`);

    // console.log(fonts);

    // setFont("asdf");

    // toggle all off
    const pEls = document.querySelectorAll("p");

    pEls.forEach(p => p.style.removeProperty("font-family"));

    let idx = 0;
    setInterval(() => {
        pEls.forEach(p => {
            p.classList.remove(...fonts);
            p.classList.add(fonts[idx]);

        });

        ++idx;
            idx %= fonts.length;
    }, 1000);

    // for (const font of fonts) {
    //
    //     pEls.forEach(p => p.classList.add(font));
    //     sleep()
    //
    // }
});