$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        nav: false,
        items: 1,
      },
      568: {
        nav: false,
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  });
});
