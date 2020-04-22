const menu = document.querySelector(".menutoggle");
const nl = document.querySelector(".navbar-links");
menu.addEventListener("click", () => {
  nl.classList.toggle("active");
});

function scrollAppear() {
  var infodiv = document.getElementsByClassName("my-info-inner")[0];
  var infodiv1 = document.getElementsByClassName("my-info-inner")[1];
  var infodiv2 = document.getElementsByClassName("my-info-inner")[2];
  var infodiv3 = document.getElementsByClassName("my-info-inner")[3];

  var pos = infodiv.getBoundingClientRect().top;
  
  var spos = window.innerHeight / 1.3;

  if (pos < spos) {
    infodiv.classList.add("my-info-innera");
    infodiv1.classList.add("my-info-innera");
    infodiv2.classList.add("my-info-innera");
    infodiv3.classList.add("my-info-innera");
  }
}

window.addEventListener("scroll", scrollAppear);
