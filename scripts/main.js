// Toggle between two images on click
let toggleImg = document.querySelector(".hamburger-menu");
let mobileDropdown = document.querySelector(".dropdown");

toggleImg.addEventListener("click", function () {
  // Toggle between two images
  if (toggleImg.src.endsWith("close.svg")) {
    toggleImg.setAttribute("src", "assets/images/svg/menu-primary-open.svg");
    mobileDropdown.style.display = "block";
  } else {
    toggleImg.setAttribute("src", "assets/images/svg/menu-primary-close.svg");
    mobileDropdown.style.display = "none";
  }
});

// Brand logo navigate to home page
let brandLogoImg = document.querySelector(".brand-logo");

brandLogoImg.addEventListener("click", function () {
  location.href = "/";
});
