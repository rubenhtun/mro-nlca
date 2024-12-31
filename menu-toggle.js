const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuButton.addEventListener("click", () => {
  const isMenuOpen = mobileMenu.classList.contains("hidden");

  if (isMenuOpen) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});
