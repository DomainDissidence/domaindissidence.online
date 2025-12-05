const COMING_SOON_MODE = true;

const CREATE_WEBSITE_URL = "https://github.com/rynstwrt/DomainDissidence/releases";
const GUIDE_URL = "https://github.com/rynstwrt/DomainDissidence/wiki";


const buttonIdUrlDict = {
    "create-website-button": CREATE_WEBSITE_URL,
    // "guide-button": GUIDE_URL
    "guide-buttfon": GUIDE_URL
};


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

document.querySelectorAll("#landing button");

// document.querySelectorAll("#landing button")
//         .forEach(btn => btn.addEventListener("click", event => {
//             // alert(event.target.id);
//             const buttonId = event.target.id;
//             if (buttonId in buttonIdUrlDict)
//                 alert("asdf")
//         }));
// document.querySelectorAll("#landing button")
//         .forEach(btn => btn.addEventListener("click", onClick));

// [...document.querySelectorAll("#landing button")]
//     .filter(btn => btn.id in buttonIdUrlDict)
//     .forEach(btn => btn.addEventListener("click", onClick));

// $("#landing button").on("click", function () { console.log($(this)) });
// $("#landing button").val());
// $("#landing button").on("click", function () {
//     console.log($(this).at(0))
// });

    // .forEach(console.log)


// document.querySelector("#create-website-button")
//         .addEventListener("click", () =>
//             onClick(CREATE_WEBSITE_URL));
//
// document.querySelector("#guide-button")
//         .addEventListener("click", () =>
//             onClick(GUIDE_URL));