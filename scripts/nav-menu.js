const openNavBttn = document.getElementById("header--open-nav");
const closeNavBttn = document.getElementById("header--close-nav");
const mediaIsMobile = window.matchMedia("(width > 414px)")
const headerOptions = document.getElementById("header--options");

function setupTopNav(media) {
    if (media.matches) {
        // is Desktop/tablet screen
        console.log("is desktop/tablet")
        headerOptions.removeAttribute("inert");

    } else {
        // is phone screen
        console.log("mobileScreen");
        headerOptions.setAttribute("inert", "");

    }

}

function toggleNavOpen() {
    openNavBttn.setAttribute("aria-expanded", "true");
}

function toggleNavClosed() {
    openNavBttn.setAttribute("aria-expanded", "false");
}

openNavBttn.addEventListener("click", toggleNavOpen);

closeNavBttn.addEventListener("click", toggleNavClosed);

setupTopNav(mediaIsMobile)