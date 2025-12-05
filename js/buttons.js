const COMING_SOON_MODE = true;

const CREATE_WEBSITE_URL = "https://github.com/rynstwrt/DomainDissidence/releases";
const GUIDE_URL = "https://github.com/rynstwrt/DomainDissidence/wiki";


let buttonIdUrlDict = {
    "create-website-button": CREATE_WEBSITE_URL,
    // "guide-button": GUIDE_URL
    "guide-buttfon": GUIDE_URL
};

const onClickFunc = COMING_SOON_MODE ? window.alert : window.open
// const onClickFunc = url => !COMING_SOON_MODE ? window.alert("Coming soon!") : window.open(url);

// window.open("asdf", "_blank")
// const onClickFunc = (targetFunc, )
// if (COMING_SOON_MODE)
//     Object.keys(buttonIdUrlDict)
//           .forEach(key => buttonIdUrlDict[key] = -1);


// function onClick(url) {
//     if (COMING_SOON_MODE)
//         return alert("Coming soon!");
//
//     window.open(url, "_blank");
// }


function onClick(event) {
    const url = buttonIdUrlDict[event.target.id];
    console.debug(url);
}


// console.log(buttonIdUrlDict["asdf"])

document.querySelectorAll("#landing button")
        .forEach(btn => btn.addEventListener("click", () => {
            const url = buttonIdUrlDict[btn.id];
            // const param = COMING_SOON_MODE ? "Coming soon!" : url
            // const param = url ?? -1;
            // console.debug(param)

            url && onClickFunc(COMING_SOON_MODE ? "Coming soon" : url);


            // onClickFunc()
            // onClickFunc.bind()
            // onClick2.bind(url ?? )

            // url && alert(url);
}));

// onClickFunc();


// document.querySelector("#create-website-button")
//         .addEventListener("click", () =>
//             onClick(CREATE_WEBSITE_URL));
//
// document.querySelector("#guide-button")
//         .addEventListener("click", () =>
//             onClick(GUIDE_URL));