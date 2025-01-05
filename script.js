const NavBtn = document.querySelector("#NavBtn");
const slideNav = document.querySelector("#slideNav");
const sldieBtn = document.querySelector("#slideBtn")
let isMenuOpen = false;


function navBtn() {
    NavBtn.addEventListener("click", () => {
        console.log("navbtn events started ")
        if (isMenuOpen) {
            slideNav.classList.remove("active");
            NavBtn.querySelector("img").src = "./Assets/hamburgerIcon.png";
            isMenuOpen = false;
        }else {
            slideNav.classList.add("active");
            NavBtn.style.visibility = "hidden"
            isMenuOpen = true;
            slidebtn();
        }
    });
}

function slidebtn(){
    sldieBtn.addEventListener("click", () => {
        NavBtn.style.visibility = "Visible"
        slideNav.classList.remove("active");
        isMenuOpen = false;
    });
}

navBtn();
slidebtn();