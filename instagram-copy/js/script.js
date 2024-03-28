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
    "img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
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
  const postElement = document.createElement("article");
  postElement.classList.add("post");
  postElement.id = post.id;

  const headerElement = createHeaderElement(user);
  postElement.appendChild(headerElement);

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  const infoElement = document.createElement("article");

  let likedText = "💟";
  if (post.likedByUser === true) {
    likedText = "❣️";
  }

  const likeButtonElement = document.createElement("button");
  likeButtonElement.innerText = likedText;
  infoElement.appendChild(likeButtonElement);

  const likeTextElement = document.createElement("span");
  likeTextElement.innerText = post.likes + " likes";
  infoElement.appendChild(likeTextElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = post.description;
  infoElement.appendChild(descriptionElement);

  postElement.appendChild(infoElement);

  return postElement;
}

const post = createPostElement(user1, post1);
contentElement.appendChild(post);

post1.likes = 128;
post1.likedByUser = true;

const post2 = createPostElement(user1, post1);
contentElement.appendChild(post2);
