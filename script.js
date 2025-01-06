const NavBtn = document.querySelector("#NavBtn");
const slideNav = document.querySelector("#slideNav");
const sldieBtn = document.querySelector("#slideBtn");
const navLinks = document.querySelectorAll(".slideNav .navLinks a");
const navbar = document.querySelector("#nav");

let isMenuOpen = false;
navbar.style.visibility = "visible";

function navBtn() {
    NavBtn.addEventListener("click", () => {
        console.log("navbtn events started ")
        if (isMenuOpen) {
            slideNav.classList.remove("active");
            NavBtn.querySelector("img").src = "./Assets/hamburgerIcon.png";
            isMenuOpen = false;
        } else {
            slideNav.classList.add("active");
            NavBtn.style.visibility = "hidden"
            isMenuOpen = true;
            navbar.style.visibility = "hidden"
            slidebtn();
        }
    });
}

function slidebtn() {
    sldieBtn.addEventListener("click", () => {
        NavBtn.style.visibility = "Visible"
        slideNav.classList.remove("active");
        navbar.style.visibility = "visible"
        isMenuOpen = false;
    });
}


// Close the slide menu when any <a> tag is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        slideNav.classList.remove("active");
        NavBtn.style.visibility = "visible";
        navbar.style.visibility = "visible";
        isMenuOpen = false;
    });
});


// Adjust scrolling to account for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - document.querySelector("nav").offsetHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    });
});

navBtn();
slidebtn();
