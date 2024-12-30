const banners = [
  {
    image: "./img/img-1.jpg",
    heading: "MRO National Literature and Culture Association",
    description: "Preserving and Promoting Our Heritage",
    mission:
      "Our mission is to celebrate, protect, and enhance the cultural richness and literary traditions of our nation. Through community initiatives, educational programs, and cultural events, we aim to inspire the preservation and continuation of our unique heritage.",
  },
  {
    image: "./img/img-2.jpg",
    heading: "Celebrating Our Unique Traditions",
    description: "Join us in exploring cultural richness.",
    mission:
      "We are working together to protect our literary history through initiatives and education.",
  },
  {
    image: "./img/img-3.jpg",
    heading: "Promoting Education and Literature",
    description: "Inspiring generations through knowledge.",
    mission:
      "Through programs and events, we foster the preservation and expansion of our cultural legacy.",
  },
];

let currentIndex = 0;

function updateBanner() {
  const bannerImage = document.getElementById("bannerImage");
  const bannerHeading = document.getElementById("bannerHeading");
  const bannerDescription = document.getElementById("bannerDescription");
  const bannerMission = document.getElementById("bannerMission");
  const bannerContent = document.getElementById("bannerContent");
  const btnSupport = document.getElementById("btnSupport");
  const btnLearnMore = document.getElementById("btnLearnMore");

  // Add fade-out class to all elements to start fading out
  bannerHeading.classList.remove("opacity-100");
  bannerDescription.classList.remove("opacity-100");
  bannerMission.classList.remove("opacity-100");
  btnSupport.classList.remove("opacity-100");
  btnLearnMore.classList.remove("opacity-100");
  bannerContent.classList.remove("opacity-100");

  // Set a timeout to wait for the fade-out effect before changing content
  setTimeout(() => {
    // Update content
    bannerImage.style.backgroundImage = `url('${banners[currentIndex].image}')`;
    bannerHeading.textContent = banners[currentIndex].heading;
    bannerDescription.textContent = banners[currentIndex].description;
    bannerMission.textContent = banners[currentIndex].mission;

    // Apply fade-in class
    bannerHeading.classList.add("opacity-100");
    bannerDescription.classList.add("opacity-100");
    bannerMission.classList.add("opacity-100");
    btnSupport.classList.add("opacity-100");
    btnLearnMore.classList.add("opacity-100");
    bannerContent.classList.add("opacity-100");

    // Increment index and loop back
    currentIndex = (currentIndex + 1) % banners.length;
  }, 1000); // Match the fade-out duration (1s)
}

// Change banner every 5 seconds
setInterval(updateBanner, 5000);

// Initial animation
document.addEventListener("DOMContentLoaded", updateBanner);
