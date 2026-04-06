const openNavBttn = document.getElementById("header--open-nav");
const closeNavBttn = document.getElementById("header--close-nav");

function toggleNavOpen() {
    openNavBttn.setAttribute("aria-expanded", "true");
}

function toggleNavClosed() {
    openNavBttn.setAttribute("aria-expanded", "false");
}

openNavBttn.addEventListener("click", toggleNavOpen);

closeNavBttn.addEventListener("click", toggleNavClosed);