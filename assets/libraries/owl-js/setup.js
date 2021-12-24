$(document).ready(function () {


$(".owl-categorys").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        
        items: 3,
      },
      
      758: {
        
        items: 5,
      },

      1000: {
        
        items: 10,
      },
    },
  });

 
  $(".product-list").owlCarousel({
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

  $(".owl-brands").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 1,
    responsive: {
      0: {
        
        items: 1,
      },
      568: {
     
        items: 3,
      },

      768: {
     
        items: 4,
      },


      1000: {
        items: 5,
      },

      1200:{
        
        items: 6,
      }
    },
  });

});
