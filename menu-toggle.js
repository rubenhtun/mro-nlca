const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileAboutButton = document.getElementById("mobileAboutButton");
const mobileAboutMenu = document.getElementById("mobileAboutMenu");

// Toggle mobile menu
menuButton.addEventListener("click", () => {
  const menuIcon = menuButton.querySelector("i");
  if (mobileMenu.classList.contains("-translate-y-full")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    mobileMenu.classList.remove("-translate-y-full", "opacity-0");
    mobileMenu.classList.add("translate-y-0", "opacity-100");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    mobileMenu.classList.remove("translate-y-0", "opacity-100");
    mobileMenu.classList.add("-translate-y-full", "opacity-0");
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
