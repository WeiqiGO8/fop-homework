// objects
const workWrapperIdElement = document.getElementById("work-wrapper");

function displayProjectImages(projects) {
  workWrapperIdElement.innerText = "";

  for (let project of projects) {
    const projectElement = createProjectElement(project);
    workWrapperIdElement.appendChild(projectElement);
  }
}

function loadData() {
  fetch("data.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      displayProjectImages(json.projects);
    });
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

loadData();
