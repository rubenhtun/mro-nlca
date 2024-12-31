document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileAboutButton = document.getElementById("mobileAboutButton");
  const mobileAboutMenu = document.getElementById("mobileAboutMenu");

  // Toggle mobile menu
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    const icon = menuButton.querySelector("i");
    if (mobileMenu.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Toggle About submenu
  mobileAboutButton.addEventListener("click", function () {
    mobileAboutMenu.classList.toggle("open");
    const icon = mobileAboutButton.querySelector("svg");
    icon.style.transform = mobileAboutMenu.classList.contains("open")
      ? "rotate(180deg)"
      : "rotate(0)";
  });
});
