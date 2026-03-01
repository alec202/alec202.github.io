// need to make it so whenever clicking on a project, it will
// open the link to the github, or to the
// web app if hosted.

const productListingPage = document.querySelector("#vue-product-listing");
productListingPage.addEventListener("click", () => document.location.href = "https://gvsu-cis371.github.io/project5-teamteam/");

const movieReviewer = document.querySelector("#movie-reviewer")
movieReviewer.addEventListener("click", () => document.location.href = "https://github.com/alec202/movieReviewerApp");

const storeDatabaseManagementSystem = document.querySelector("#store-database-management-system");
