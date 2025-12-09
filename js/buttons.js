// const COMING_SOON_MODE = true;
//
// const CREATE_WEBSITE_URL = "https://github.com/rynstwrt/DomainDissidence/releases";
// const GUIDE_URL = "https://github.com/rynstwrt/DomainDissidence/wiki";
//
//
// let buttonIdUrlDict = {
//     "create-website-button": CREATE_WEBSITE_URL,
//     "guide-button": GUIDE_URL
// };
//
//
// document.querySelectorAll("#landing button")
//     .forEach(btn => btn.addEventListener("click", () => {
//         if (COMING_SOON_MODE)
//             return window.alert("Coming soon...");
//
//         const url = buttonIdUrlDict[btn.id];
//         url && window.open(url, "_blank");
//     }));