// Mobile menu toggle
const menuButton = document.getElementById("menuButton");
menuCloseButton = document.getElementById("menuCloseButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileAboutButton = document.getElementById("mobileAboutButton");
const mobileAboutMenu = document.getElementById("mobileAboutMenu");
const aboutArrow = mobileAboutButton.querySelector("svg");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

menuCloseButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
});

mobileAboutButton.addEventListener("click", () => {
  mobileAboutMenu.classList.toggle("hidden");
  aboutArrow.classList.toggle("rotate-180");
});
