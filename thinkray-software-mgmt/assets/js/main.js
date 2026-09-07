/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
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

/*-------------------------------------- TIMER-COUNT ----------------------------------------*/
let timeLeft=30;
const timer=document.getElementById("otpTimer");

const countdown=setInterval(()=>{
  timeLeft--;
  timer.textContent=timeLeft;

  if(timeLeft<=0){
    clearInterval(countdown);
    timer.parentElement.innerHTML="Resend OTP";
  }
},1000);
/*-------------------------------------- TIMER-COUNT ----------------------------------------*/

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

/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/
const searchTexts=[
  "Search patient, Inv No ...",
  "Search by tests ...",
  "Search by health packages ...",
  "Search by reports, prescriptions ...",
  "Search by invoice number ...",
  "Search helps & faq's ..."
];

const searchInput=document.querySelector(".search-input input");
let textIndex=0,charIndex=0,isDeleting=false;

function animateSearchPlaceholder(){
  const text=searchTexts[textIndex];

  if(!isDeleting){
    charIndex++;
    searchInput.placeholder=text.slice(0,charIndex);

    if(charIndex===text.length){
      isDeleting=true;
      return setTimeout(animateSearchPlaceholder,1400);
    }
  }else{
    charIndex--;
    searchInput.placeholder=text.slice(0,charIndex);

    if(charIndex===0){
      isDeleting=false;
      textIndex=(textIndex+1)%searchTexts.length;
    }
  }
  setTimeout(animateSearchPlaceholder,isDeleting?35:55);
}

animateSearchPlaceholder();
/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/

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

/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/
function toggleProfileMenu(event) {
  event.stopPropagation();

  const menu = document.getElementById("ProfileSubMenu");
  menu.classList.toggle("active");
}

document.getElementById("ProfileSubMenu").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("click", function () {
  const menu = document.getElementById("ProfileSubMenu");
  menu.classList.remove("active");
});
/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/

/*-------------------------------------- SUB-MENU-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;

  subMenu.classList.toggle("open");
  const chevron = btn.querySelector(".bi-chevron-down");

  if (chevron) {
    chevron.classList.toggle("rotate");
  }
}
/*-------------------------------------- SUB-MENU-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/

/*-------------------------------------- PAGINATION ----------------------------------------*/
const totalItems = 100;

let currentPage = 1;
let itemsPerPage = 10;

const itemsPerPageSelect = document.getElementById("itemsPerPage");
const pageInfo = document.getElementById("pageInfo");

const firstPageBtn = document.getElementById("firstPageBtn");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const lastPageBtn = document.getElementById("lastPageBtn");

function updatePagination() {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  pageInfo.textContent = currentPage + " of " + totalPages;

  firstPageBtn.disabled = currentPage === 1;
  prevPageBtn.disabled = currentPage === 1;

  nextPageBtn.disabled = currentPage === totalPages;
  lastPageBtn.disabled = currentPage === totalPages;

  console.log({
    currentPage,
    itemsPerPage,
    totalPages
  });;
}

itemsPerPageSelect.addEventListener("change", function () {
  itemsPerPage = parseInt(this.value);

  currentPage = 1;

  updatePagination();
});

firstPageBtn.addEventListener("click", function () {
  currentPage = 1;

  updatePagination();
});

prevPageBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
  }

  updatePagination();
});

nextPageBtn.addEventListener("click", function () {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
  }

  updatePagination();
});

lastPageBtn.addEventListener("click", function () {
  currentPage = Math.ceil(totalItems / itemsPerPage);

  updatePagination();
});

updatePagination();
/*-------------------------------------- PAGINATION ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/