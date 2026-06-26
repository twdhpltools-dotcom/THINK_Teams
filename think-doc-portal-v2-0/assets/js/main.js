/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/*-------------------------------------- PRE-LOADER ----------------------------------------*/
window.addEventListener("load", function () {
  document.getElementById("PreLoader").classList.add("hide");
});
/*-------------------------------------- PRE-LOADER ----------------------------------------*/
/*-------------------------------------- LOG-IN SETUP ----------------------------------------*/
function LogOtp() {
  const mobile = document.getElementById("LogMobile");
  const otp = document.getElementById("LogOtp");

  mobile.classList.remove("active");
  mobile.classList.add("slide-left");

  otp.classList.add("active");
}
/*-------------------------------------- LOG-IN SETUP ----------------------------------------*/

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

/*-------------------------------------- SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;

  subMenu.classList.toggle("max-h-0");
  subMenu.classList.toggle("opacity-0");

  subMenu.classList.toggle("max-h-[180px]");
  subMenu.classList.toggle("opacity-100");
}

function bookingDetailsShow() {
  const optionBox = document.getElementById("BookingDetailsOption");

  optionBox.classList.toggle("py-0");
  optionBox.classList.toggle("max-h-0");
  optionBox.classList.toggle("opacity-0");

  optionBox.classList.toggle("py-4");
  optionBox.classList.toggle("max-h-[80px]");
  optionBox.classList.toggle("opacity-100");
}
/*-------------------------------------- SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/

/*-------------------------------------- TAB-CONTENT ----------------------------------------*/
function openTab(btn){
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
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/