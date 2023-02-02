window.addEventListener("DOMContentLoaded", () => {
  const headerBG = document.querySelectorAll(".header__img");
  const tab = document.querySelectorAll(".header__content_item");
  const tabParent = document.querySelector(".header__content_pagination");
  const magazineSliderItem = document.querySelectorAll(".magazine_slider_item");
  const mobileNavButton = document.querySelector(".mobile-nav-button");
  const mobileNavIconn = document.querySelector(".mobile-nav-button__icon");
  const headerMenuBtns = document.querySelector(".header__menu_btns");

  mobileNavButton.addEventListener("click", function () {
    mobileNavIconn.classList.toggle("active");
    headerMenuBtns.classList.toggle("none");
  });

  function hideTabContent() {
    headerBG.forEach((item) => {
      //item.style.display ='none';
      item.classList.add("none");
      item.classList.remove("show", "fade");
    });
    tab.forEach((item) => {
      item.classList.remove("item__dot_hover");
    });
  }

  function showTabContent(i = 0) {
    headerBG[i].classList.add("show", "fade");
    headerBG[i].classList.remove("none");
    tab[i].classList.add("item__dot_hover");
  }
  hideTabContent();
  showTabContent();
  tabParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("header__content_item")) {
      tab.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
