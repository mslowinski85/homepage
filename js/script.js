{
  const welcome = () => {
    console.log(
      "Hej, tu Marek Słowiński :) Witaj na kursie Frontend Developer"
    );
  };

  const buttonElementChange = (buttonElement) => {
    switch (buttonElement.innerText) {
      case "Change to dark":
        buttonElement.innerText = "Change to bright";
        buttonElementToggle(buttonElement);
        changeNavigationToggle();
        changeBodyElementToggle();
        headerElementsToggle();
        changeFooter();
        headerElementToggle();
        subHeaderElementsToggle();
        break;
      case "Change to bright":
        buttonElement.innerText = "Change to dark";
        buttonElementToggle(buttonElement);
        changeNavigationToggle();
        changeBodyElementToggle();
        headerElementsToggle();
        changeFooter();
        headerElementToggle();
        subHeaderElementsToggle();
        break;
    }
  };

  const buttonElementToggle = (buttonElement) => {
    return buttonElement.classList.toggle("changeButton");
  };

  const changeNavigationToggle = () => {
    const navigationElement = document.querySelector(".navigation");

    return navigationElement.classList.toggle("changeNavigation");
  };

  const changeBodyElementToggle = () => {
    const changeBodyElement = document.querySelector(".body");

    return changeBodyElement.classList.toggle("changeBody");
  };

  const headerElementToggle = () => {
    const headerElement = document.querySelector(".header");

    return headerElement.classList.toggle("changeAllHeaders");
  };

  const changeFooter = () => {
    const changeFooterElement = document.querySelector(".footerContainer");

    changeFooterElement.classList.toggle("changeFooter");
  };

  const headerElementsToggle = () => {
    const headerElements = document.querySelectorAll(".article__header");

    headerElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
  };

  const subHeaderElementsToggle = () => {
    const subHeaderElements = document.querySelectorAll(".article__subHeader");
    subHeaderElements.forEach((Element) => {
      Element.classList.toggle("changeAllHeaders");
    });
  };

  const onButtonClick = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElementChange(buttonElement);
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");

    welcome();
    buttonElement.addEventListener("click", onButtonClick);
  };

  init();
}
