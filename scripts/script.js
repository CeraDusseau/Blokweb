// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.add("toonMenu");
}

var deexitButton = document.querySelector("header nav button:nth-of-type(2)");

deexitButton.addEventListener("click", exitMenu);

function exitMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.remove("toonMenu");
    deexitButton.classList.add("exitknop");
}

var switchbutton = document.querySelector(".tweedepagina article:nth-of-type(2)");

switchbutton.addEventListener("click", andermenu);

function andermenu(event) {
    anderekekenook = event.target.parentNode;
    anderekekenook.classList.remove("afleveringen");
    switchbutton.classList.add("andermenu");
}

var switchbuttonterug = document.querySelector(".tweedepagina section:nth-of-type(5)");

switchbuttonterug.addEventListener("click", afleveringen);

function afleveringen(event) {
    anderekekenook = event.target.parentNode;
    anderekekenook.classList.remove("andermenu");
    switchbuttonterug.classList.add("afleveringen");
}