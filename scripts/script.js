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


// Met hulp van Sundous!!!!!!
var switchbutton = document.querySelector(".tweedepagina>ul li:first-of-type  button");
var artikel1 = document.querySelector(".tweedepagina article:nth-of-type(2)");
var switchbutton2 = document.querySelector(".tweedepagina>ul li:last-of-type button");
var artikel2 = document.querySelector(".tweedepagina article:nth-of-type(3)");


function artikel1weg() {
    console.log("haai");
    artikel1.classList.add("toen");
    artikel2.classList.add("weg");
}

function artikel2tweg() {
    console.log("haai 2")
    artikel2.classList.add("toen");
    artikel1.classList.add("weg");

    artikel1.classList.remove("toen");
    artikel2.classList.remove("weg");
}

switchbutton.addEventListener("click", artikel1weg);
switchbutton2.addEventListener("click", artikel2tweg);