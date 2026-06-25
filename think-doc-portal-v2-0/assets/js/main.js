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

/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/
function openBookingSetupTLModal() {
  const modal = document.getElementById("BookingSetupTLModal");
  const box = document.getElementById("BookingSetupTLModalBox");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    box.classList.remove("opacity-0", "scale-95");
    box.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeCustomModal() {
  const modal = document.getElementById("BookingSetupTLModal");
  const box = document.getElementById("BookingSetupTLModalBox");

  box.classList.add("opacity-0", "scale-95");
  box.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingSetupTLModal").addEventListener("click", function(e) {
  if (e.target.id === "BookingSetupTLModal") {
    closeCustomModal();
  }
});
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/

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

/*-------------------------------------- MENU-TOGGLE ----------------------------------------*/
function openMenuToggle() {
  const sidebar = document.getElementById("sidebar");

  sidebar.classList.toggle("translate-y-full");
  sidebar.classList.toggle("opacity-0");

  sidebar.classList.toggle("translate-y-0");
  sidebar.classList.toggle("opacity-100");
}
/*-------------------------------------- MENU-TOGGLE ----------------------------------------*/

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

/*-------------------------------------- PRE-LOADER ----------------------------------------*/
window.addEventListener("load", function () {
  document.getElementById("PreLoader").classList.add("hide");
});
/*-------------------------------------- PRE-LOADER ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/