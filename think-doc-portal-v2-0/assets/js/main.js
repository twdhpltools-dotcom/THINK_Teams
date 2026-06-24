/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
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

/*-------------------------------------- CUSTOM-SELECT ----------------------------------------*/
// const doctorBtn = document.getElementById("DoctorProfileSelect");
// const doctorDropdown = document.getElementById("DoctorDropdown");
// const doctorChevron = document.getElementById("DoctorChevron");

// doctorBtn.addEventListener("click", function (e) {

//     e.stopPropagation();

//     doctorDropdown.classList.toggle("hidden");

//     doctorChevron.classList.toggle("rotate-180");
// });

// document.addEventListener("click", function (e) {

//     if (
//         !doctorBtn.contains(e.target) &&
//         !doctorDropdown.contains(e.target)
//     ) {
//         doctorDropdown.classList.add("hidden");
//         doctorChevron.classList.remove("rotate-180");
//     }
// });
/*-------------------------------------- CUSTOM-SELECT ----------------------------------------*/

/*-------------------------------------- PRE-LOADER ----------------------------------------*/
window.addEventListener("load", function () {
  document.getElementById("PreLoader").classList.add("hide");
});
/*-------------------------------------- PRE-LOADER ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/