const DOWNLOAD_URL = "https://github.com/rynstwrt/DomainDissidence/releases";
const USAGE_URL = "https://github.com/rynstwrt/DomainDissidence/wiki";

const downloadButton = document.querySelector("#download-button");
const usageButton = document.querySelector("#usage-button");

downloadButton.addEventListener("click", () =>
    window.open(DOWNLOAD_URL, "_blank"));


usageButton.addEventListener("click", () =>
    window.open(USAGE_URL, "_blank"));