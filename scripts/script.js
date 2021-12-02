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