console.log("Hej, tu Marek Słowiński :) Witaj na kursie Frontend Developer");

let buttonElement = document.querySelector(".js-button");
let headerElement = document.querySelector(".header");
let navigationElement = document.querySelector(".navigation");
let headerElements = document.querySelectorAll(".article__header");
let subHeaderElements = document.querySelectorAll(".article__subHeader");
let changeBodyElement = document.querySelector(".body");
let changeFooterElement = document.querySelector(".footerContainer");

buttonElement.addEventListener("click", () => {
  if (buttonElement.innerText === "Change to dark") {
    buttonElement.innerText = "Change to bright";
    buttonElement.classList.toggle("changeButton");
    navigationElement.classList.toggle("changeNavigation");
    changeBodyElement.classList.toggle("changeBody");
    headerElement.classList.toggle("changeAllHeaders");
    changeFooterElement.classList.toggle("changeFooter");
    headerElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
    subHeaderElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
  } else if (buttonElement.innerText === "Change to bright") {
    buttonElement.innerText = "Change to dark";
    buttonElement.classList.toggle("changeButton");
    navigationElement.classList.toggle("changeNavigation");
    headerElement.classList.toggle("changeAllHeaders");
    changeBodyElement.classList.toggle("changeBody");
    changeFooterElement.classList.toggle("changeFooter");
    headerElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
    subHeaderElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
  }
});
