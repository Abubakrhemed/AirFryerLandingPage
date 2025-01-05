const NavBtn = document.querySelector("#NavBtn");
const slideNav = document.querySelector("#slideNav");
const sldieBtn = document.querySelector("#slideBtn");
const navLinks = document.querySelectorAll(".slideNav .navLinks a");
let isMenuOpen = false;

//monitor when nav button is clicked
function navBtn() {
    NavBtn.addEventListener("click", () => {
        console.log("navbtn events started ");
        if (isMenuOpen) {
            slideNav.classList.remove("active");
            NavBtn.querySelector("img").src = "./Assets/hamburgerIcon.png";
            isMenuOpen = false;
        } else {
            slideNav.classList.add("active");
            NavBtn.style.visibility = "hidden";
            isMenuOpen = true;
            slidebtn();
        }
    });
}

// monitor when slide btn is clicked
function slidebtn() {
    sldieBtn.addEventListener("click", () => {
        NavBtn.style.visibility = "visible";
        slideNav.classList.remove("active");
        isMenuOpen = false;
    });
}

// Close the slide menu when any <a> tag is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        slideNav.classList.remove("active");
        NavBtn.style.visibility = "visible";
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
