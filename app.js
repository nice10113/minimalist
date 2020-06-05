var navbarToggler = document.querySelector(".navbar-toggler");
var navbar = document.querySelector("nav ul");

navbarToggler.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});
