const banners = [
  {
    image:
      "https://drive.google.com/file/d/1zXXgWPMO2oCBDXgdhgnyi_UU72MMEfoT/view",
    heading: "MRO National Literature and Culture Association",
    description: "Preserving and Promoting Our Heritage",
    mission:
      "ကျွန်ုပ်တို့လူမျိုး၏ ယဉ်ကျေးမှုနှင့် စာပေအမွေအနှစ်များကို ထိန်းသိမ်းမြှင့်တင်ရန် ရည်ရွယ်ပါသည်။ ရပ်ရွာလူထုပူးပေါင်းပါဝင်သော လုပ်ငန်းစဉ်များမှတစ်ဆင့် ယဉ်ကျေးမှုအမွေအနှစ်များ ရှင်သန်ထွန်းကားစေရန် ဆောင်ရွက်သွားမည် ဖြစ်ပါသည်။",
  },
  {
    image:
      "https://drive.google.com/file/d/1gq0SNrNNeJAzxo1B4KU9OH6iAUlW3rZ8/view",
    heading: "Celebrating Our Unique Traditions",
    description: "Join us in exploring cultural richness.",
    mission:
      "ကျွန်ုပ်တို့သည် အတူတကွ ကျွန်ုပ်တို့၏ စာပေသမိုင်းကို အစီအမံများနှင့် ပညာရေးမှတစ်ဆင့် ကာကွယ်ပေးရန် အလုပ်လုပ်နေပါသည်။",
  },
  {
    image:
      "https://drive.google.com/file/d/1zXXgWPMO2oCBDXgdhgnyi_UU72MMEfoT/view",
    heading: "Promoting Education and Literature",
    description: "Inspiring generations through knowledge.",
    mission:
      "အစီအစဉ်များနှင့် အခမ်းအနားများမှတစ်ဆင့် ကျွန်ုပ်တို့သည် ကျွန်ုပ်တို့၏ယဉ်ကျေးမှုကို ကာကွယ်ပြီး တိုးတက်စေရန်မြှင့်တင်ပါမည်။",
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
