const hamburgerBtn = document.querySelector("#NavBtn");
const slideNav = document.querySelector("#slideNav");

let isMenuOpen = false;

hamburgerBtn.addEventListener("click", () => {
    if (isMenuOpen) {
        slideNav.classList.remove("active");
        hamburgerBtn.querySelector("img").src = "./Assets/hamburgerIcon.png";
        isMenuOpen = false;
    } else {
        slideNav.classList.add("active");
        hamburgerBtn.querySelector("img").src = "./Assets/closeIcon.png";
        isMenuOpen = true;
    }
});
