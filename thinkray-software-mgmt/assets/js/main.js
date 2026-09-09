/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/*-------------------------------------- SUB-MENU-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/
/*-------------------- SUB-MENU ----------------------*/
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;

  subMenu.classList.toggle("open");
  const chevron = btn.querySelector(".bi-chevron-down");

  if (chevron) {
    chevron.classList.toggle("rotate");
  }
}
/*-------------------- SUB-MENU ----------------------*/

/*-------------------- MOBILE-MENU ----------------------*/
function openMobileMenu() {
  const menu = document.getElementById("mobileMenuContent");

  menu.classList.toggle("open");
}
/*-------------------- MOBILE-MENU ----------------------*/
/*-------------------------------------- SUB-MENU-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/

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

/* ------------------------------------- PASSWORD-ICON ------------------------------------------ */
function togglePassword() {
  const password = document.querySelector('.default-pass');
  const eye = document.querySelector('.pass-eye-icon');
  
  if (password.type === 'password') {
    password.type = 'text';
    eye.className = 'fa fa-eye-slash pass-eye-icon';
  } else {
    password.type = 'password';
    eye.className = 'fa fa-eye pass-eye-icon';
  }
}
/* ------------------------------------- ASSWORD-ICON ------------------------------------------ */

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

/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/
const searchTexts=[
  "Search patient, Inv No ...",
  "Search by test name or study"
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

  if (!file) return;

  const previewBox = document.getElementById("FilePreview");
  const previewImage = document.getElementById("PreviewImage");
  const fileName = document.getElementById("FileName");
  const fileMeta = document.getElementById("FileMeta");

  previewImage.src = URL.createObjectURL(file);

  fileName.textContent = file.name;

  const fileSize = (file.size / 1024).toFixed(0);

  const img = new Image();

  img.onload = function () {
    fileMeta.textContent =
      "PNG · " + fileSize + " KB · " + img.width + "×" + img.height + " px";
  };

  img.src = previewImage.src;

  previewBox.classList.add("show");
});
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/

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

/*-------------------------------------- HTML-LIVE-EDIT ----------------------------------------*/
function editorCmd(command) {
  document.execCommand(command, false, null);
  document.getElementById("liveEditor").focus();
}

function formatBlock(value) {
  if (!value) return;

  document.execCommand("formatBlock", false, value);
  document.getElementById("liveEditor").focus();
}

function setTextColor(color) {
  document.execCommand("foreColor", false, color);
  document.getElementById("liveEditor").focus();
}
/*-------------------------------------- HTML-LIVE-EDIT ----------------------------------------*/

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
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/