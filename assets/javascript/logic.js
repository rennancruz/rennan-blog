const themeSwitcher = document.querySelector("#theme");
const container = document.querySelector(".container");
const themeEmoji = document.querySelector("#theme-text");

console.log(document);

let mode = "light";

themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    themeEmoji.textContent("☀️");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    themeEmoji.textContent("🌙");
  }
});
