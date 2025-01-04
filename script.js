const hamburgerBtn = document.querySelector("#NavBtn");
const slideNav = document.querySelector("#slideNav");

// State to track whether the menu is open or closed
let isMenuOpen = false;

// Add click event listener to the button
hamburgerBtn.addEventListener("click", () => {
    if (isMenuOpen) {
        // Slide out the menu (hide it)
        slideNav.style.transform = "translateX(-100%)";
        slideNav.style.transition = "transform 2s ease";
        hamburgerBtn.querySelector("img").src = "./Assets/hamburgerIcon.png";
        isMenuOpen = false;
    } else {
        // Slide in the menu (show it)
        slideNav.style.transform = "translateX(0)";
        slideNav.style.transition = "transform 2s ease";
        hamburgerBtn.querySelector("img").src = "./Assets/closeIcon.png";
        isMenuOpen = true;
    }
});
