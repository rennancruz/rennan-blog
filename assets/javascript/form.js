const blogtEl = document.querySelector("#blogtitle");
const userEl = document.querySelector("#username");
const contentEL = document.querySelector("#content");
const buttonEl = document.querySelector("#submit-btn");
const msgDiv = document.querySelector("#msg");
let blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
if (!blogPosts) {
  blogPosts = [];
}
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();

  const blogTitle = document.querySelector("#blog-title").value;
  const user = document.querySelector("#username").value;
  const content = document.querySelector("#content").value;

  if (blogTitle === "") {
    displayMessage("error", "Blog cannot be blank");
  } else if (user === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (content === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    const userInfo = {
      username: user,
      content: content,
      blogTitle: blogTitle,
    };
    blogPosts.push(userInfo);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    window.location = "blog.html";
  }
});
