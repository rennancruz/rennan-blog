const buttonEl = document.querySelector("#back-btn");
const blogPosts = document.getElementById("blogPosts");

function displayBlog() {
  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  if (posts.length > 0) {
    const blogSection = document.querySelector("main");
    blogSection.innerHTML = "";

    posts.forEach((post) => {
      const blogPost = document.createElement("div");
      blogPost.classList.add("blog-post");

      const titleEl = document.createElement("h2");
      titleEl.textContent = post.blogTitle;
      titleEl.style.fontWeight = "bold";
      blogPost.appendChild(titleEl);

      const contentEl = document.createElement("p");
      contentEl.textContent = post.content;
      contentEl.style.fontStyle = "italic";
      blogPost.appendChild(contentEl);

      const usernameEl = document.createElement("p");
      usernameEl.textContent = `Posted by: ${post.username}`;
      usernameEl.style.color = "gray";
      usernameEl.style.textAlign = "left";
      blogPost.appendChild(usernameEl);

      blogSection.appendChild(blogPost);
    });
  } else {
    const blogSection = document.querySelector("main");
    blogSection.innerHTML =
      "<p>Ahh, looks like you still need to add content to your Blog! Please, do so <a href='../index.html'>Here!</a></p>";
  }
}

displayBlog();

buttonEl.addEventListener("click", function () {
  window.location = "index.html";
});
