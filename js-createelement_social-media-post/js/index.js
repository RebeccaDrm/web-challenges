console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//new post container (article)
function createNewPost() {
  const postContainer = document.createElement("article");
  postContainer.classList.add("post");

  //post content paragraph
  const postContent = document.createElement("p");
  postContent.classList.add("post_content");
  postContent.textContent = "Hello, Sharks! 🦈";

  postContainer.appendChild(postContent);

  //footer for the post
  const postFooter = document.createElement("footer");
  postFooter.classList.add("post__footer");

  //username span
  const usernameSpan = document.createElement("span");
  usernameSpan.classList.add("post__username");
  usernameSpan.textContent = "@sharkuser";

  // Create a like button
  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.classList.add("post__button");
  likeButton.dataset.js = "like-button";
  likeButton.textContent = "♥ Like";

  // Attach the like button event listener
  likeButton.addEventListener("click", handleLikeButtonClick);

  // Append username and like button to the footer
  postFooter.appendChild(usernameSpan);
  postFooter.appendChild(likeButton);

  // Append the footer to the post container
  postContainer.appendChild(postFooter);

  // Append the new post to the body
  document.body.appendChild(postContainer);
}

// Call the function to append the new post to the body
createNewPost();
