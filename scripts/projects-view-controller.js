const allProjects = document.querySelectorAll(".project-card");

let link = "";
for (const project of allProjects) {
    // need to make it so whenever clicking on a project, it will
    // open the link to the github, or to the
    // web app if hosted.
    
    project.addEventListener("click", (eve) => {
        console.log(project);
    })
    switch (project.id) {
        case "vue-product-listing":
            link = "https://gvsu-cis371.github.io/project5-teamteam/";
            break;
    }
}