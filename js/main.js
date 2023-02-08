window.addEventListener("DOMContentLoaded", () => {
  const headerBG = document.querySelectorAll(".header__img");
  const tab = document.querySelectorAll(".header__content_item");
  const tabParent = document.querySelector(".header__content_pagination");
  const magazineSliderItem = document.querySelectorAll(".magazine_slider_item");
  const mobileNavButton = document.querySelector(".mobile-nav-button");
  const mobileNavIconn = document.querySelector(".mobile-nav-button__icon");
  const headerMenuBtns = document.querySelector(".header__menu_btns");
  const videoBtn = document.querySelector(".video_btn");
  const videoBtnImg = document.querySelector(".video_btn_img");
  const videoPlay = document.querySelector("#video__play");
  const videoPlace = document.querySelector(".video__place");

  // =====================budrgermenu===============//
  mobileNavButton.addEventListener("click", function () {
    mobileNavIconn.classList.toggle("active");
    headerMenuBtns.classList.toggle("hiden");
  });

  // =====================headerBgSlaider===============//
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
  // =====================Video===============//
  videoPlace.addEventListener("click", () => {
    function ToggleShowBtn(event) {
      if (event.type === "mouseleave") {
        videoBtn.classList.add("hiden");
      } else {
        videoBtn.classList.remove("hiden");
      }
    }
    if (videoPlay.paused) {
      videoPlay.play();
      videoBtnImg.src = "./img/video/pause-button-icon.svg";
      videoPlace.onmouseleave = ToggleShowBtn;
      videoPlace.onmouseenter = ToggleShowBtn;
      videoBtn.classList.add("hiden");
    } else {
      videoPlay.pause();
      videoBtnImg.src = "./img/video/video_btn.svg";
      videoBtn.classList.remove("hiden");
      videoPlace.onmouseleave = null;
      videoPlace.onmouseenter = null;
    }
  });
  // =====================owlCarousel===============//

  const owl = $(".owl-carousel");
  const windowInnerWidth = window.innerWidth;
  let a;
  function SetItems() {
    if (windowInnerWidth > 400) {
      a = 3;
    } else {
      a = 1;
    }
  }
  SetItems();
  owl.owlCarousel({
    items: a,
    loop: true,
  });
  // Go to the next item
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });


});
