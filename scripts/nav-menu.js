const openNavButton = document.getElementById("header--open-nav");
const headerOptionsNav = document.getElementById("header--options");

function toggleNavOpen() {
    openNavButton.setAttribute("aria-expanded", "true");
    openNavButton.classList.toggle("visibility-collapse");
}

openNavButton.addEventListener("click", toggleNavOpen)