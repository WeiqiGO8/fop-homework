const contentElement = document.getElementById("content");

// const user1 = {
//   id: 1,
//   name: "Gizmo The Inventor",
//   profileImage: "img/GizmoTheInventor.webp",
// };

// const post1 = {
//   id: 1,
//   userId: 1,
//   image:
//     "img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
//   description: "diving into the future with sustanable enregy for all",
//   likes: 12,
//   likedByUser: false,
// };

function findUserById(users, id) {
  let selectedUser = users.find((user) => {
    return user.id === id;
  });
  return selectedUser;
}

function displayPosts(users, posts) {
  contentElement.innerText = "";

  for (let post of posts) {
    const user = findUserById(users, post.userId);
    const postElement = createPostElement(user, post);
    contentElement.appendChild(postElement);
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
      displayPosts(json.users, json.posts);
    });
}

function createHeaderElement(user) {
  const headerElement = document.createElement("article");

  const imageElement = document.createElement("img");
  imageElement.src = user.profileImage;
  imageElement.classList.add("profile-image");
  headerElement.appendChild(imageElement);

  const nameElement = document.createElement("h4");
  nameElement.innerText = user.name;
  headerElement.appendChild(nameElement);

  return headerElement;
}

function getHearEmoji(post) {
  let likedText = "💟";
  if (post.likedByUser === true) {
    likedText = "💌";
  }
  return likedText;
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

  const likeButtonElement = document.createElement("button");
  likeButtonElement.innerText = getHearEmoji(post);

  likeButtonElement.addEventListener("click", () => {
    if (post.likedByUser) {
      post.likedByUser = false;
      post.likes = post.likes - 1;
    } else {
      post.likedByUser = true;
      post.likes += 1;
    }

    likeButtonElement.innerText = getHearEmoji(post);
    likeTextElement.innerText = post.likes + " likes";

    // const updatePostElement = createPostElement(user, post);
    // contentElement.insertBefore(updatePostElement, postElement);
    // postElement.remove();
  });
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

// const post = createPostElement(user1, post1);
// contentElement.appendChild(post);

// post1.likes = 128;
// post1.likedByUser = true;

// const post2 = createPostElement(user1, post1);
// contentElement.appendChild(post2);

loadData();
