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
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplaySpeed: 1500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      items: 3
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
        autoplayTimeout: 2500,
        autoplaySpeed: 2500,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        rtl: true,
        items: 1
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
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplaySpeed: 1500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      stagePadding: 20,
      items: 2
  });
});
/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) COMPLETE ---------------------------------------------- */

/*-------------------------------------- TOAST ----------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {

  const toast = document.getElementById("cartToast");
  const goToCartButton = document.getElementById("goToCartButton");
  let toastTimer;
  const TOAST_DURATION = 90000;

  function showCartToast() {
    clearTimeout(toastTimer);

    toast.classList.remove(
        "translate-y-[160%]",
        "opacity-0"
    );

    toast.classList.add(
        "translate-y-0",
        "opacity-100"
    );

    toastTimer = setTimeout(function () {
        hideCartToast();
    }, TOAST_DURATION);
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
    button.addEventListener("click", function () {
      showCartToast();
      button.classList.add("added");
      button.innerHTML = '<i class="bi bi-trash"></i> Remove';
    });
  });

  goToCartButton.addEventListener("click", function () {
    window.location.href = "cart.html";
  });
});
/*-------------------------------------- TOAST ----------------------------------------*/

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

/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
document.getElementById("FileUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    console.log(file.name);
  }
});
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/

/*-------------------------------------- ACCORDIAN ----------------------------------------*/
function toggleAccordion(head) {
  const body = head.nextElementSibling;
  const icon = head.querySelector(".pg-accordion-icon");

  body.classList.toggle("max-h-0");
  body.classList.toggle("py-0");
  body.classList.toggle("max-h-[500px]");
  body.classList.toggle("py-4");

  icon.classList.toggle("rotate-180");
}
/*-------------------------------------- ACCORDIAN ----------------------------------------*/

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