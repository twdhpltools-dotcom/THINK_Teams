/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/*-------------------------------------- PRE-LOADER ----------------------------------------*/
window.addEventListener("load", function () {
  document.getElementById("PreLoader").classList.add("hide");
});
/*-------------------------------------- PRE-LOADER ----------------------------------------*/

/*-------------------------------------- OTP-INPUT ----------------------------------------*/
const otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 1);
    if (this.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && !this.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

function getOTP() {
  return Array.from(otpInputs).map(input => input.value).join('');
}
/*-------------------------------------- OTP-INPUT ----------------------------------------*/

/*-------------------------------------- PG-VALIDATION-(INPUT-TEL) ----------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");

      if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
      }
    });
  });
});
/*-------------------------------------- PG-VALIDATION-(INPUT-TEL) ----------------------------------------*/

/*-------------------------------------- PG-BACK-FUCNTIONALITY ----------------------------------------*/
document.querySelectorAll(".go-back-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.history.back();
  });
});
/*-------------------------------------- PG-BACK-FUCNTIONALITY ----------------------------------------*/

/*-------------------------------------- SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;

  subMenu.classList.toggle("max-h-0");
  subMenu.classList.toggle("opacity-0");

  subMenu.classList.toggle("max-h-[180px]");
  subMenu.classList.toggle("opacity-100");
}
/*-------------------------------------- SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/

/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) START ---------------------------------------------- */
$(document).ready(function(){
  var owl = $('#DashboardDocCarousel');
  
  owl.owlCarousel({
    margin: 8,
    loop: true,
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
/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) COMPLETE ---------------------------------------------- */

/*-------------------------------------- TOAST ----------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const toast = document.getElementById("cartToast");
  const toastBox = toast.querySelector(".pointer-events-auto");
  const goToCartButton = document.getElementById("goToCartButton");

  function showCartToast() {
    toast.classList.remove(
      "translate-y-[160%]",
      "opacity-0"
    );

    toast.classList.add(
      "translate-y-0",
      "opacity-100"
    );
  }

  function hideCartToast() {
    toast.classList.remove(
      "translate-y-0",
      "opacity-100"
    );

    toast.classList.add(
      "translate-y-[160%]",
      "opacity-0"
    );
  }

  document.querySelectorAll(".cart-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      showCartToast();

      button.classList.add("added");
      button.innerHTML = 'Remove';
    });
  });

  document.addEventListener(
    "pointerdown",
    function (event) {
      const toastIsOpen =
        toast.classList.contains("translate-y-0");

      if (!toastIsOpen) {
        return;
      }

      const clickedInsideToast =
        toastBox && toastBox.contains(event.target);

      const clickedCartButton =
        event.target.closest(".cart-btn");

      if (!clickedInsideToast && !clickedCartButton) {
        hideCartToast();
      }
    },
    true
  );

  if (goToCartButton) {
    goToCartButton.addEventListener("click", function () {
      window.location.href = "cart.html";
    });
  }
});
/*-------------------------------------- TOAST ----------------------------------------*/

/*-------------------------------------- ACCORDIAN ----------------------------------------*/
function toggleAccordion(head) {
  const body = head.nextElementSibling;
  const icon = head.querySelector(".pg-accordion-icon");

  body.classList.toggle("max-h-0");
  body.classList.toggle("pt-0");
  body.classList.toggle("max-h-[500px]");
  body.classList.toggle("pt-3");

  icon.classList.toggle("rotate-180");
}
/*-------------------------------------- ACCORDIAN ----------------------------------------*/

/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
document.getElementById("FileUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    console.log(file.name);
  }
});
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/

/*-------------------------------------- TAB-CONTENT ----------------------------------------*/
function openTab(btn) {
  document.querySelectorAll(".tab-content").forEach(content=>{
      content.classList.add("hidden");
  });

  document.querySelectorAll(".tab-btn").forEach(button=>{
      button.classList.remove("active");
  });

  document.getElementById(btn.dataset.tab).classList.remove("hidden");
  btn.classList.add("active");
}
/*-------------------------------------- TAB-CONTENT ----------------------------------------*/

/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/
function openHomeCollectionRPDownloadMenu(btn){
  const buttons = [...document.querySelectorAll('[onclick*="openHomeCollectionRPDownloadMenu"]')];
  const menus = document.querySelectorAll('.home_collection_rp_download_menu');
  const index = buttons.indexOf(btn);

  if(index !== -1 && menus[index]){
    menus[index].classList.toggle('hidden');
  }
}
/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/

/*-------------------------------------- CAMERA-SHOWER ----------------------------------------*/
function openUserCamera(input) {
  if(input.files.length > 0){
    const file = input.files[0];

    console.log(file);
    console.log(file.name);
  }
}
/*-------------------------------------- CAMERA-SHOWER ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/