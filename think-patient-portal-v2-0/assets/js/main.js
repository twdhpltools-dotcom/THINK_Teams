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