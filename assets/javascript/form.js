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

  if (user === "") {
    displayMessage(
      "error",
      "Oops, looks like your username is blank. Please insert a valid username."
    );
  } else if (blogTitle === "") {
    displayMessage(
      "error",
      "Oops, looks like your blog title is blank. Please insert a valid blog title."
    );
  } else if (content === "") {
    displayMessage(
      "error",
      "Oops, looks like your blog content is blank. Please insert a valid blog content."
    );
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
