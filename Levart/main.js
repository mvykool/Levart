// import swup






//drop down menu

function myMenu() {
    const openMenu = document.getElementById("drop-menu");

    if (openMenu.classList.contains("open")) {
        document.getElementById("drop-menu").style.display = "block";
    }
}

//cerrar drop menu si se hace click en otro lado

document.addEventListener("mouseup", function(e) {
    const menu = document.getElementById("drop-menu");
    if (!menu.contains(e.target)) {
        menu.style.display = "none";
        document.querySelector(".filter").style.display = "block";
    }
});


const hiddeButton = document.querySelector(".filter");

hiddeButton.addEventListener("click", () => {

});





//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------------------------------------------------------------

//dark mode 

let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {



    //adding class to the body

    document.body.classList.add("dark-mode");
    document.querySelector(".filter").style.background = "black";
    document.querySelector(".filter").style.border = "white 1px solid";
    document.querySelector(".bottom-menu").style.background = "black";
    document.querySelector(".footer").style.background = "grey";
    document.querySelector("#drop-menu").style.background = "grey";
    document.querySelector(".inner-menu").setAttribute("id", "dark-inner");
    document.querySelector(".inner-menu2").setAttribute("id", "dark-inner");
    document.querySelector(".inner-menu3").setAttribute("id", "dark-inner");
    document.querySelector(".inner-menu4").setAttribute("id", "dark-inner");



    //dark mode stays saved in local storage

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {


    //removing class to the body

    document.body.classList.remove("dark-mode");
    document.querySelector(".filter").style.background = "white";
    document.querySelector(".filter").style.border = "none";
    document.querySelector(".bottom-menu").style.background = "white";
    document.querySelector(".footer").style.background = "turquoise";
    document.querySelector("#drop-menu").style.background = "turquoise";
    document.querySelector(".inner-menu").removeAttribute("id", "dark-inner");
    document.querySelector(".inner-menu2").removeAttribute("id", "dark-inner");
    document.querySelector(".inner-menu3").removeAttribute("id", "dark-inner");
    document.querySelector(".inner-menu4").removeAttribute("id", "dark-inner");



    //dark mode off stays saved in local storage

    localStorage.setItem("darkMode", null);
};

//stays in dark mode after realoding

if (darkMode == "enabled") {
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});