const openNavBttn = document.getElementById("header--open-nav");
const closeNavBttn = document.getElementById("header--close-nav");
const mediaIsMobile = window.matchMedia("(width > 414px)")
const headerOptions = document.getElementById("header--options");

function setupTopNav(media) {
    console.log(media);
    if (media.matches) {
        // is Desktop/tablet screen
        console.log("is desktop/tablet")
        headerOptions.removeAttribute("inert");
    } else {
        // is phone screen
        console.log("mobileScreen");
        headerOptions.setAttribute("inert", "");
        headerOptions.removeAttribute("style");
        headerOptions.style.transition = "none";
    }

}

function toggleNavOpen() {
    openNavBttn.setAttribute("aria-expanded", "true");
    headerOptions.removeAttribute("inert");
    headerOptions.removeAttribute("style");
}

function toggleNavClosed() {
    openNavBttn.setAttribute("aria-expanded", "false");
    headerOptions.setAttribute("inert", "");
    // IS THIS NEEDED?
    setTimeout(() => {
        headerOptions.style.transition = 'none';
    }, 750);
}

openNavBttn.addEventListener("click", toggleNavOpen);

closeNavBttn.addEventListener("click", toggleNavClosed);

setupTopNav(mediaIsMobile)

mediaIsMobile.addEventListener("change", (event) => {
    setupTopNav(event);
});