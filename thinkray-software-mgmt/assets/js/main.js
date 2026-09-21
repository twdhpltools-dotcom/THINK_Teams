/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/* ----------------------------------------- OWL-CAROUSEL (INIT) START ---------------------------------------------- */
$(document).ready(function(){
  var owl = $('#DashboardDocCarousel');
  
  owl.owlCarousel({
    margin: 10,
    loop: false,
    autoplay: false,
    autoplayTimeout: 1500,
    autoplaySpeed: 1500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    stagePadding: 5,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 6,
      },
      1024: {
        items: 9,
      }
    }
  });
});

$(document).ready(function () {
  const carousel = $("#DashboardBanCarousel");
  const indicator = $("#DashboardBanIndicator");
  const totalSlides = carousel.find(".item").length;
  indicator.css("width", (100 / totalSlides) + "%");

  carousel.owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      }
    }
  });

  carousel.on("changed.owl.carousel", function (event) {
    let currentIndex =
      event.item.index - event.relatedTarget._clones.length / 2;

    currentIndex =
      ((currentIndex % totalSlides) + totalSlides) % totalSlides;

    indicator.css(
      "transform",
      "translateX(" + (currentIndex * 100) + "%)"
    );
  });
});

$(document).ready(function(){
  var owl = $('#DashboardTestCarousel');
  
  owl.owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 2500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      }
    }
  });
});
/* ----------------------------------------- OWL-CAROUSEL (INIT) COMPLETE ---------------------------------------------- */
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/