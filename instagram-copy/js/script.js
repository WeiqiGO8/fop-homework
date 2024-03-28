const contentElement = document.getElementById("content");

const user1 = {
  id: 1,
  name: "Gizmo The Inventor",
  profileImage: "img/GizmoTheInventor.webp",
};

const post1 = {
  id: 1,
  userId: 1,
  image:
    "img/instagram-copy/img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
  description: "diving into the future with sustanable enregy for all",
  likes: 12,
  likedByUser: false,
};

function createHeaderElement(user) {
  const headerElement = document.createElement("div");

  const imageElement = document.createElement("img");
  imageElement.src = user.profileImage;
  imageElement.classList.add("profile-image");
  headerElement.appendChild(imageElement);

  const nameElement = document.createElement("h4");
  nameElement.innerText = user.name;
  headerElement.appendChild(nameElement);

  return headerElement;
}

function createPostElement(user, post) {
  const postELement = document.createElement("article");
  postELement.classList.add("post");
  postELement.id = post.id;

  const headerElement = createHeaderElement(user);
  postELement.appendChild(headerElement);

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  postELement.appendChild(imageElement);

  const infoElement = document.createElement("article");

  let likedText = "💟";
  if (post.likedByUser === true) {
    likedText = "❣️";
  }

  const likeButtonElement = document.createElement("button");
  likeButtonElement.innerHTML = likedText;
  infoElement.appendChild(likeButtonElement);

  const likeTextElement = document.createElement("span");
  likeTextElement.innerText = post.likes + " likes";
  infoElement.appendChild(likeTextElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = post.description;
  infoElement.appendChild(descriptionElement);

  postELement.appendChild(infoElement);

  return postELement;
}

const post = createPostElement(user1, post1);
contentElement.appendChild(post);

post1.likes = 128;
post1.likedByUser = true;

const post2 = createPostElement(user1, post1);
contentElement.appendChild(post2);
