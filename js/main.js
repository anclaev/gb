$(document).ready(function () {
  const mMenuBtn = $(".m-menu-btn");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    tab.removeClass("active");
    $(this).toggleClass("active");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
    loop: true,
  });
});
