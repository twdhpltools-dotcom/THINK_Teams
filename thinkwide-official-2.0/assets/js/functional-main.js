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
  const $right = $('#feature_carousel').closest('.col-lg-8, .col-lg-12');

  let activeTitle = null;
  let isOpen = false;
  let animating = false;

  const features = {

    "Online Prescription": [
      ["Create Digital Prescriptions", "Create clear and structured prescriptions digitally with medicines, dosage and instructions."],
      ["Quick Medicine Selection", "Search and select medicines from a ready medicine list for faster prescription entry."],
      ["Set Dose & Duration", "Add dosage, frequency, timing and duration for every prescribed medicine."],
      ["Easy Prescription Access", "Keep prescriptions digitally available for convenient access and future reference."]
    ],

    "Patient App": [
      ["Book Tests Online", "Patients can select tests or packages and book lab visits or home collections easily."],
      ["Access Lab Reports", "View and download completed laboratory reports directly from the app."],
      ["Manage Family Members", "Add family members and manage their bookings and health records from one account."],
      ["Track Health Records", "Keep previous reports, prescriptions and diagnostic records organized in one place."]
    ],

    "Doctor App": [
      ["Access Patient Reports", "Doctors can securely view available patient investigation reports from one place."],
      ["View Report History", "Access previous diagnostic reports to review a patient's investigation history."],
      ["Create Digital Prescriptions", "Prepare structured prescriptions with medicines, dosage, duration and instructions."],
      ["Manage Patient Follow-Ups", "Keep patient consultations and follow-up information organized for easier reference."]
    ],

    "Collector App": [
      ["Manage Assigned Collections", "Collectors can view assigned home collection cases with patient and visit details."],
      ["Track Collection Status", "Update every step from accepting a case to reaching the patient and collecting samples."],
      ["Manage Samples & Barcodes", "Record collected samples, tube details and barcode information directly from the app."],
      ["Complete Sample Handover", "Record sample handover details to maintain a clear collection-to-lab workflow."]
    ],

    "Smart Report": [
      ["Make Reports Easier to Read", "Present laboratory results in a clear and patient-friendly digital format."],
      ["Highlight Important Results", "Help patients quickly identify values that require attention within their report."],
      ["Understand Result Trends", "Show previous and current results together to make changes over time easier to follow."],
      ["Deliver a Better Report Experience", "Turn a standard laboratory report into a more informative and engaging patient experience."]
    ]

  };

  $right.removeClass('col-lg-8').addClass('col-lg-12');

  $feature.css({
    display: 'none',
    opacity: '0',
    transform: 'translateX(-80px)',
    transition: 'transform .85s cubic-bezier(.22,1,.36,1), opacity .65s ease',
    willChange: 'transform, opacity'
  });

  function setContent(title) {

    let html = '';

    features[title].forEach(function (item, i) {
      html += `
        <li class="feature-types-box">
          <h6>${i + 1}. ${item[0]}</h6>
          <p>${item[1]}</p>
        </li>
      `;
    });

    $feature.find('ul').html(html);
  }

  function showFeature(title) {

    setContent(title);

    $feature.css({
      display: 'block',
      opacity: '0',
      transform: 'translateX(-80px)'
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        $feature.css({
          opacity: '1',
          transform: 'translateX(0)'
        });
      });
    });

    activeTitle = title;
    isOpen = true;
  }

  function hideFeature(callback) {

    animating = true;

    $feature.css({
      opacity: '0',
      transform: 'translateX(-80px)'
    });

    setTimeout(function () {

      $feature.css('display', 'none');

      isOpen = false;
      animating = false;

      if (callback) callback();

    }, 850);
  }

  $('#feature_carousel').on('click', '.feature-card', function () {

    if (animating) return;

    const title = $(this)
      .find('.feature-card-info h3')
      .text()
      .trim();

    if (!features[title]) return;


    /* SAME CARD → CLOSE */

    if (isOpen && activeTitle === title) {

      hideFeature(function () {
        activeTitle = null;
      });

      return;
    }


    /* DIFFERENT CARD → OUT → CHANGE → IN */

    if (isOpen) {

      hideFeature(function () {

        setTimeout(function () {
          showFeature(title);
        }, 150);

      });

      return;
    }


    /* FIRST OPEN */

    showFeature(title);

  });

});
/* ----------------------------------------- JS FOR CONCEPTUAL-FEATURE-SLIDER COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR FUNCTIONAL-ACCORDIAN START ---------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementById("accordionFaq");
  if (!accordion) return;

  const items = [...accordion.querySelectorAll(".accordion-item")];
  const delay = 5000;
  let timer;

  function closeOthers(activeItem) {
    items.forEach(function (item) {
      if (item === activeItem) return;

      const collapse = item.querySelector(".accordion-collapse");
      const instance = bootstrap.Collapse.getOrCreateInstance(collapse, {
        toggle: false
      });
      instance.hide();
    });
  }

  function startAccordion(item) {
    clearTimeout(timer);

    items.forEach(el => el.classList.remove("auto-active"));
    item.classList.add("auto-active");

    closeOthers(item);

    const currentIndex = items.indexOf(item);
    const nextIndex = (currentIndex + 1) % items.length;

    timer = setTimeout(function () {
      const nextCollapse = items[nextIndex].querySelector(".accordion-collapse");
      bootstrap.Collapse.getOrCreateInstance(nextCollapse).show();
    }, delay);
  }

  items.forEach(function (item) {
    const collapse = item.querySelector(".accordion-collapse");

    collapse.addEventListener("shown.bs.collapse", function () {
      startAccordion(item);
    });
  });

  const opened =
    items.find(item =>
      item.querySelector(".accordion-collapse").classList.contains("show")
    ) || items[0];

  startAccordion(opened);
});
/* ----------------------------------------- JS FOR FUNCTIONAL-ACCORDIAN COMPLETE ---------------------------------------------- */
/*------------------------------------------- JS FOR FUNCTIONAL-MAIN COMPLETE ------------------------------------------*/