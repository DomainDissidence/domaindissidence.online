// import { lgThumbnail } from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.8.3/lightgallery.min.js";

// import lightGallery from "./lib/lightgallery/lightgallery.es5.js";

lightGallery(document.getElementById("light-gallery"), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,

});