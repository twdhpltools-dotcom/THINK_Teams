/*------------------------------------------- JS FOR FUNCTIONAL-MAIN START ------------------------------------------*/
/* ----------------------------------------- JS FOR EXCEPTIONAL-MONITOR-MOBILE-SLIDER START ---------------------------------------------- */
$(document).ready(function () {


  /* =============================
     CAROUSELS
  ============================== */

  const desktop = $(".desktop-carousel");

  const mobile = $(".mobile-carousel");



  /* Desktop = MASTER carousel */

  desktop.owlCarousel({

    items: 1,

    loop: true,

    autoplay: true,

    autoplayTimeout: 4000,

    autoplaySpeed: 900,

    smartSpeed: 900,

    mouseDrag: false,

    touchDrag: false,

    pullDrag: false,

    dots: false,

    nav: false

  });



  /* Mobile = SLAVE carousel */

  mobile.owlCarousel({

    items: 1,

    loop: true,

    autoplay: false,

    smartSpeed: 900,

    mouseDrag: false,

    touchDrag: false,

    pullDrag: false,

    dots: false,

    nav: false

  });



  /* =============================
     SYNCHRONIZE BOTH
  ============================== */

  desktop.on(
    "changed.owl.carousel",
    function (event) {

      /*
       Get real slide index.
       Owl creates clones when loop=true,
       therefore relative() is important.
      */

      const index =
        event.relatedTarget.relative(
          event.item.index
        );


      mobile.trigger(
        "to.owl.carousel",
        [
          index,
          900,
          true
        ]
      );

    }
  );



  /* =============================
     SHOW MOBILE
  ============================== */

  function showMobile() {

    const wrapper =
      document.getElementById(
        "deviceShowcase"
      );


    /* only show once */

    if (
      !wrapper.classList.contains(
        "phone-active"
      )
    ) {

      wrapper.classList.add(
        "phone-active"
      );


      /*
       immediately synchronize
       mobile with current
       monitor slide
      */

      const desktopData =
        desktop.data(
          "owl.carousel"
        );


      const index =
        desktopData.relative(
          desktopData.current()
        );


      mobile.trigger(
        "to.owl.carousel",
        [
          index,
          0,
          true
        ]
      );

    }

  }



  /* monitor click */

  $("#monitorDevice").on(
    "click",
    showMobile
  );



  /* keyboard support */

  $("#monitorDevice").on(
    "keydown",
    function (e) {

      if (
        e.key === "Enter" ||
        e.key === " "
      ) {

        e.preventDefault();

        showMobile();

      }

    }
  );


});
/* ----------------------------------------- JS FOR EXCEPTIONAL-MONITOR-MOBILE-SLIDER COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR CONCEPTUAL-FEATURE-SLIDER START ---------------------------------------------- */
$(document).ready(function () {

  const $feature = $('.feature-types');
  const $left = $feature.closest('.col-lg-4');
  const $right = $('#feature_carousel').closest('.col-lg-8');

  /* Feature content */
  const features = {

    "Online Prescription": [
      ["Upload Prescription", "Patients can easily upload their prescription online."],
      ["Select Tests", "Required tests can be selected directly from the prescription."],
      ["Book Online", "Complete the booking process quickly and conveniently."],
      ["Track Booking", "Patients can easily track their booking status."]
    ],

    "Doctor Portal": [
      ["Patient Management", "Manage patient information from one place."],
      ["View Reports", "Access patient diagnostic reports instantly."],
      ["Prescription Access", "Quickly review uploaded prescriptions."],
      ["Easy Monitoring", "Monitor patient activity through the portal."]
    ],

    "Patient App": [
      ["Book Tests", "Patients can book diagnostic tests directly."],
      ["View Reports", "Access reports anytime from the app."],
      ["Online Payment", "Pay outstanding bills securely online."],
      ["Track Appointments", "Check appointment and booking status easily."]
    ],

    "Collector App": [
      ["Receive Booking", "Collectors receive assigned collection bookings."],
      ["Sample Collection", "Manage sample collection efficiently."],
      ["Live Status", "Update collection status in real time."],
      ["Sample Handover", "Complete sample handover with proper tracking."]
    ],

    "Smart Report": [
      ["Automatic Analysis", "Report data is processed automatically."],
      ["AI Verification", "AI assists in validating report information."],
      ["Trend Analysis", "Previous results can be compared visually."],
      ["Smart Insights", "Patients receive easy-to-understand report insights."]
    ]
  };


  /* DEFAULT : LEFT HIDDEN + CAROUSEL FULL WIDTH */

  $left.hide();

  $right
    .removeClass('col-lg-8')
    .addClass('col-lg-12');


  /* CLICK CAROUSEL ITEM */

  $('#feature_carousel').on('click', '.feature-card', function () {

    const title = $(this)
      .find('.feature-card-info h3')
      .text()
      .trim();

    if (!features[title]) return;


    /* Generate left content */

    let html = '';

    features[title].forEach((item, i) => {

      html += `
                <li class="feature-types-box">
                    <h6>${i + 1}. ${item[0]}</h6>
                    <p>${item[1]}</p>
                </li>
            `;

    });

    $feature.find('ul').html(html);


    /* Make space for left portion */

    $right
      .removeClass('col-lg-12')
      .addClass('col-lg-8');


    /* Show + slide animation */

    if (!$left.is(':visible')) {

      $left
        .css({
          display: 'block',
          opacity: 0,
          transform: 'translateX(-35px)'
        })
        .animate(
          { opacity: 1 },
          {
            duration: 400,
            step: function () {
              $(this).css(
                'transform',
                'translateX(0)'
              );
            }
          }
        );

    } else {

      /* clicked another item */

      $feature
        .stop(true)
        .css({
          opacity: 0,
          transform: 'translateX(-15px)'
        })
        .animate(
          { opacity: 1 },
          {
            duration: 300,
            step: function () {
              $(this).css(
                'transform',
                'translateX(0)'
              );
            }
          }
        );
    }

    setTimeout(function () {
      $('#feature_carousel')
        .trigger('refresh.owl.carousel');
    }, 450);
  });
});
/* ----------------------------------------- JS FOR CONCEPTUAL-FEATURE-SLIDER COMPLETE ---------------------------------------------- */
/*------------------------------------------- JS FOR FUNCTIONAL-MAIN COMPLETE ------------------------------------------*/