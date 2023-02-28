let navBtn = document.querySelector(".header__nav-btn");
let nav = document.querySelector(".header__nav");
navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});
