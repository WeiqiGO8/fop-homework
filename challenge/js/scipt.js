// objects
const contentIdElement = document.getElementById("content");

//arrays
let contentProjectElement = [];

for (let i = 1; i <= 12; i++) {
  let project = {
    id: i,
    imgSrc: `img/project-${i}.jpg`,
    imgAlt: `An image of project ${i}`,
    projectTitle: `project ${i}`,
    projectDesc: `description of project ${i}`,
  };
  contentProjectElement.push(project);
}

function createProjectElement(project) {
  const projectFigureElement = document.createElement("figure");
  projectFigureElement.classList.add("project-post");
  projectFigureElement.id = project.id;

  const projectaElement = document.createElement("a");
  projectaElement.href = "#";

  const projectImgElement = document.createElement("img");
  projectImgElement.src = project.imgSrc;
  projectImgElement.alt = project.imgAlt;

  projectaElement.appendChild(projectImgElement);

  const projectFigcapTitleElement = document.createElement("figcaption");
  projectFigcapTitleElement.innerText = project.projectTitle;

  const projectFigcapDescElement = document.createElement("figcaption");
  projectFigcapDescElement.innerText = project.projectDesc;

  projectaElement.appendChild(projectFigcapTitleElement);
  projectaElement.appendChild(projectFigcapDescElement);

  projectFigureElement.appendChild(projectaElement);
  return projectFigureElement;
}

//The following 4 lines of code was adapted from ChatGPT: https://chat.openai.com/share/7964f237-673a-41ef-a93d-2ed44f753bc1 - 2024-04-03
contentProjectElement.forEach((project) => {
  const projectElement = createProjectElement(project);
  contentIdElement.appendChild(projectElement);
});
