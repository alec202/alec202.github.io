const biggerScreenWidthCutOff = "764px"

const openNavBttn = document.getElementById("header--open-nav");
const closeNavBttn = document.getElementById("header--close-nav");
const mediaIsMobile = window.matchMedia(`(width > ${biggerScreenWidthCutOff})`)
const headerOptions = document.getElementById("header--options");
const mainContent = document.querySelector("main");

function setupTopNav(media) {
    console.log(media);
    if (media.matches) {
        // is Desktop/tablet screen
        console.log("is desktop/tablet")
        headerOptions.removeAttribute("inert");
        toggleNavClosed();
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
    mainContent.setAttribute("inert", "");
    closeNavBttn.focus();

}

function toggleNavClosed() {
    openNavBttn.setAttribute("aria-expanded", "false");
    headerOptions.setAttribute("inert", "");

    headerOptions.addEventListener("transitioned", () => {
        headerOptions.style.transition = 'none';
    }, { once: true });

    mainContent.removeAttribute("inert");
    openNavBttn.focus();
}

openNavBttn.addEventListener("click", toggleNavOpen);

closeNavBttn.addEventListener("click", toggleNavClosed);

setupTopNav(mediaIsMobile)

mediaIsMobile.addEventListener("change", (event) => {
    setupTopNav(event);
});