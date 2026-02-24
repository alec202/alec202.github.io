const moreInfoButton = document.querySelector("#landing button:last-of-type");

moreInfoButton.addEventListener("click", () => {
    console.log("clicked on button");
    window.location.href = "#about";
})