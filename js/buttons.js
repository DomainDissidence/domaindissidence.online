const COMING_SOON_MODE = true;

const CREATE_WEBSITE_URL = "https://github.com/rynstwrt/DomainDissidence/releases";
const GUIDE_URL = "https://github.com/rynstwrt/DomainDissidence/wiki";


function onClick(url) {
    if (COMING_SOON_MODE)
        return alert("Coming soon!");

    window.open(url, "_blank");
}


document.querySelector("#create-website-button")
        .addEventListener("click", () =>
            onClick(CREATE_WEBSITE_URL));

document.querySelector("#guide-button")
        .addEventListener("click", () =>
            onClick(GUIDE_URL));