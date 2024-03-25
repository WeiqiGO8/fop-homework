const user = {
  id: 1,
  name: "Gizmo The Inventor",
  profileImage: "img/GizmoTheInventor.webp",
};

function createHeaderElement(user) {
  const headerElement = document.createElement("div");

  const imageElement = document.createElement("img");
  imageElement.scr = user.profileImage;
  headerElement.appendChild(imageElement);

  const nameElement = document.createElement("h4");
  nameElement.innerText = user.name;
  headerElement.appendChild(nameElement);

  return headerElement;
}

const headerElement = createHeaderElement(user);

const bodyElement = document.querySelector("body");
bodyElement.appendChild(headerElement);
