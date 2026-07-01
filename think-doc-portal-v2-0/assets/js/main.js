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

function schSunDetailsShow() {
  const schsunoptionBox = document.getElementById("SchSunDetailsOption");

  schsunoptionBox.classList.toggle("py-0");
  schsunoptionBox.classList.toggle("max-h-0");
  schsunoptionBox.classList.toggle("opacity-0");

  schsunoptionBox.classList.toggle("py-4");
  schsunoptionBox.classList.toggle("max-h-[80px]");
  schsunoptionBox.classList.toggle("opacity-100");
}

function schMonDetailsShow() {
  const schmonoptionBox = document.getElementById("SchMonDetailsOption");

  schmonoptionBox.classList.toggle("py-0");
  schmonoptionBox.classList.toggle("max-h-0");
  schmonoptionBox.classList.toggle("opacity-0");

  schmonoptionBox.classList.toggle("py-4");
  schmonoptionBox.classList.toggle("max-h-[80px]");
  schmonoptionBox.classList.toggle("opacity-100");
}

function schTueDetailsShow() {
  const schtueoptionBox = document.getElementById("SchTueDetailsOption");

  schtueoptionBox.classList.toggle("py-0");
  schtueoptionBox.classList.toggle("max-h-0");
  schtueoptionBox.classList.toggle("opacity-0");

  schtueoptionBox.classList.toggle("py-4");
  schtueoptionBox.classList.toggle("max-h-[80px]");
  schtueoptionBox.classList.toggle("opacity-100");
}

function schWedDetailsShow() {
  const schwedoptionBox = document.getElementById("SchWedDetailsOption");

  schwedoptionBox.classList.toggle("py-0");
  schwedoptionBox.classList.toggle("max-h-0");
  schwedoptionBox.classList.toggle("opacity-0");

  schwedoptionBox.classList.toggle("py-4");
  schwedoptionBox.classList.toggle("max-h-[80px]");
  schwedoptionBox.classList.toggle("opacity-100");
}

function schThuDetailsShow() {
  const schthuoptionBox = document.getElementById("SchThuDetailsOption");

  schthuoptionBox.classList.toggle("py-0");
  schthuoptionBox.classList.toggle("max-h-0");
  schthuoptionBox.classList.toggle("opacity-0");

  schthuoptionBox.classList.toggle("py-4");
  schthuoptionBox.classList.toggle("max-h-[80px]");
  schthuoptionBox.classList.toggle("opacity-100");
}

function schFriDetailsShow() {
  const schfrioptionBox = document.getElementById("SchFriDetailsOption");

  schfrioptionBox.classList.toggle("py-0");
  schfrioptionBox.classList.toggle("max-h-0");
  schfrioptionBox.classList.toggle("opacity-0");

  schfrioptionBox.classList.toggle("py-4");
  schfrioptionBox.classList.toggle("max-h-[80px]");
  schfrioptionBox.classList.toggle("opacity-100");
}

function schSatDetailsShow() {
  const schsatoptionBox = document.getElementById("SchSatDetailsOption");

  schsatoptionBox.classList.toggle("py-0");
  schsatoptionBox.classList.toggle("max-h-0");
  schsatoptionBox.classList.toggle("opacity-0");

  schsatoptionBox.classList.toggle("py-4");
  schsatoptionBox.classList.toggle("max-h-[80px]");
  schsatoptionBox.classList.toggle("opacity-100");
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

/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
document.getElementById("FileUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    console.log(file.name);
  }
});
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/

/*-------------------------------------- ACCORDIAN ----------------------------------------*/
function toggleAccordion(head){
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
function openUserCamera(input){
  if(input.files.length > 0){

      const file = input.files[0];

      console.log(file);
      console.log(file.name);

  }
}
/*-------------------------------------- CAMERA-SHOWER ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/