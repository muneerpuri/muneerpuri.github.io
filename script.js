const menu = document.querySelector(".menutoggle");
const nl = document.querySelector(".navbar-links");
menu.addEventListener("click", () => {
  nl.classList.toggle("active");
});