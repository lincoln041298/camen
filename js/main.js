$(document).ready(function () {
  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: 559,
    gutter: 0,
    // horizontalOrder: true,
    percentPosition: true,
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
  });

  $(".feedback-slide").owlCarousel({
    loop: true,
    margin: 7,
    autoplay: true,
    autoplayTimeout: 993000,
    smartSpeed: 1000,
    nav: true,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      575: {
        items: 4,
      },
    },
  });
  let iconHeadBar = document.querySelector(".icon-bar");
  let menu = document.querySelector(".header-menu");
  let overlayMobile = document.querySelector(".overlay-mobile");

  iconHeadBar.addEventListener("click", function () {
    menu.classList.toggle("active");
    overlayMobile.classList.toggle("active");
  });
  overlayMobile.addEventListener("click", function () {
    menu.classList.toggle("active");
    overlayMobile.classList.toggle("active");
  });
});
