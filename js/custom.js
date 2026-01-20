// // $(window).on("load", function () {
// //   jQuery(".preloader").fadeOut("slow", function () {});
// // });

$(".herobanner").flexslider({
  animation: "fade",

  controlNav: false,

  directionNav: true,

  prevText: "",

  nextText: "",

  slideshowSpeed: 3000,

  animationSpeed: 1000,
});
$(".adslider").flexslider({
  animation: "slide",

  controlNav: false,

  directionNav: true,

  prevText: "",

  nextText: "",

  slideshowSpeed: 3000,

  animationSpeed: 600,
});

$(".owl-reviews").owlCarousel({
  loop: true,
  margin: 24,
  responsiveClass: true,
  items: 6,
  dots: false,
  autoplay: true,
  smartSpeed: 2000,
  autoplayTimeout: 5000,
  nav: true,
  center: false,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
      margin: 15,
    },
    420: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});
new WOW().init();

$(".toggle-menu a").on("click", function (e) {
  if (window.matchMedia("(max-width: 991px)").matches) {
    e.preventDefault();
    $(this).toggleClass("opened");
    $(".main-menu").toggleClass("active");
  }
});
