const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileAboutButton = document.getElementById("mobileAboutButton");
const mobileAboutMenu = document.getElementById("mobileAboutMenu");

// Toggle mobile menu
menuButton.addEventListener("click", () => {
  const menuIcon = menuButton.querySelector("i");
  if (mobileMenu.classList.contains("open")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("open");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("open");
  }
});

// Toggle About submenu
mobileAboutButton.addEventListener("click", function () {
  mobileAboutMenu.classList.toggle("open");
  const icon = mobileAboutButton.querySelector("svg");
  icon.style.transform = mobileAboutMenu.classList.contains("open")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
