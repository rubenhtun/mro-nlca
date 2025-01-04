const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileSubMenuButton = document.querySelectorAll("#mobileSubMenuButton");
const mobileSubMenu = document.getElementById("mobileSubMenu");

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
mobileSubMenuButton.addEventListener("click", function () {
  if (mobileSubMenu.classList.contains("open")) {
    mobileSubMenu.classList.remove("open");
    mobileSubMenu.classList.add("hidden");
  } else {
    mobileSubMenu.classList.remove("hidden");
    mobileSubMenu.classList.add("open");
  }
  const icon = mobileSubMenuButton.querySelector("fa-angle-down");
  icon.style.transform = mobileSubMenu.classList.contains("open")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
