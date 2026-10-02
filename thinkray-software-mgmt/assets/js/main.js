/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/
const searchTexts=[
  "Search patient, Inv No ...",
  "Search by test name or study",
  "Search patient, case ID",
  "Search notifications by patient name",
  "Search view name"
];

const searchInput=document.querySelector(".search-input input");
let textIndex=0,charIndex=0,isDeleting=false;

function animateSearchPlaceholder(){
  const text=searchTexts[textIndex];

    if (!isDeleting) {
    charIndex++;

    if (searchInput) {
      searchInput.placeholder = text.slice(0, charIndex);
    }

    if(charIndex===text.length){
      isDeleting=true;
      return setTimeout(animateSearchPlaceholder,1400);
    }
  }else{
    charIndex--;
    if (searchInput) {
      searchInput.placeholder = text.slice(0, charIndex);
    }

    if(charIndex===0){
      isDeleting=false;
      textIndex=(textIndex+1)%searchTexts.length;
    }
  }
  setTimeout(animateSearchPlaceholder,isDeleting?35:55);
}

animateSearchPlaceholder();
/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/

/*-------------------------------------- CHIP-ACTIVATOR ----------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".view-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});
/*-------------------------------------- CHIP-ACTIVATOR ----------------------------------------*/

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

/*-------------------------------------- DEFAULT-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/
/*-------------------- SELECT-RESPECTIVE ----------------------*/
const tdsBox = document.getElementById("tdsPercentageBox");

if (tdsBox) {
  tdsBox.style.display = "none";
}

function toggleTDS(select) {
  const box = document.getElementById("tdsPercentageBox");
  if (!box) return;

  const input = box.querySelector("input");

  if (select.value === "2") {
    box.style.display = "block";

    if (input) input.required = true;
  } else {
    box.style.display = "none";

    if (input) {
      input.required = false;
      input.value = "";
    }
  }
}
/*-------------------- SELECT-RESPECTIVE ----------------------*/
/*-------------------------------------- DEFAULT-SHOW/HIDE-FUCNTIONALITY ----------------------------------------*/

/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/
/*-------------------- PROFILE-MENU ----------------------*/
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
/*-------------------- PROFILE-MENU ----------------------*/

/*-------------------- ADMIN-SWITCH-MENU ----------------------*/
function toggleAdminSwitchMenu(event) {
  event.stopPropagation();

  const menu = document.getElementById("AdminSwitchSubMenu");
  menu.classList.toggle("active");
}

document.getElementById("AdminSwitchSubMenu")?.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("click", function () {
  document.getElementById("AdminSwitchSubMenu")?.classList.remove("active");
});
/*-------------------- ADMIN-SWITCH-MENU ----------------------*/
/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/

/*-------------------------------------- PG-VALIDATION----------------------------------------*/
/*-------------------------------------- LOGIN ----------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mainLoginForm");
  const user = document.getElementById("username");
  const pass = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const error = document.getElementById("loginError");

  const logins = {
    Centre_app: {
      password: "12345",
      page: "index.html"
    },
    Doctor_app: {
      password: "54321",
      page: "doctor-index.html"
    },
    Admin_app: {
      password: "00000",
      page: "admin-index.html"
    }
  };

  function checkLoginFields() {
    loginBtn.disabled =
      user.value.trim() === "" ||
      pass.value.trim() === "";

    error.innerText = "";
  }

  user?.addEventListener("input", checkLoginFields);
  pass?.addEventListener("input", checkLoginFields);

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = user.value.trim();
    const password = pass.value.trim();

    if (
      logins[username] &&
      logins[username].password === password
    ) {
      window.location.href = logins[username].page;
    } else {
      error.innerText =
        "You're trying to Log in, But These Credentials are not Matched ...";
    }
  });
});
/*-------------------------------------- LOGIN ----------------------------------------*/

/*-------------------------------------- INPUT-TEL ----------------------------------------*/
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
/*-------------------------------------- INPUT-TEL ----------------------------------------*/
/*-------------------------------------- PG-VALIDATION----------------------------------------*/

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
/* ------------------------------------- PASSWORD-ICON ------------------------------------------ */

/*-------------------------------------- PRINT-SCREEN ----------------------------------------*/
document.querySelector(".submitted-btn.conf")?.addEventListener("click", function () {
  window.print();
});
/*-------------------------------------- PRINT-SCREEN ----------------------------------------*/

/*-------------------------------------- CLICK-CHANGE ----------------------------------------*/
function markPaid(btn) {
  btn.classList.toggle("paid");
  btn.innerText = btn.classList.contains("paid") ? "Paid" : "Mark as Paid";
}
/*-------------------------------------- CLICK-CHANGE ----------------------------------------*/

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
  const group = btn.closest(".tab-group");

  group.querySelectorAll(".tab-content").forEach(content => {
    content.classList.add("hidden");
  });

  group.querySelectorAll(".tab-btn").forEach(button => {
    button.classList.remove("active");
  });

  group.querySelector("." + btn.dataset.tab).classList.remove("hidden");
  btn.classList.add("active");
}
/*-------------------------------------- TAB-CONTENT ----------------------------------------*/

/*-------------------------------------- ACCORDIAN ----------------------------------------*/
/*-------------------- FILTER-SEARCH ----------------------*/
function toggleFilter(btn) {
  btn.nextElementSibling.classList.toggle("hidden");
  btn.querySelector("i")?.classList.toggle("rotate");
}

function toggleStatus(btn) {
  btn.nextElementSibling.classList.toggle("hidden");
  btn.querySelector("i")?.classList.toggle("rotate");
}
/*-------------------- FILTER-SEARCH ----------------------*/
/*-------------------------------------- ACCORDIAN ----------------------------------------*/

/*-------------------------------------- PAGINATION-SORT ----------------------------------------*/
const totalItems = 95;

const range = document.querySelector(".page-range");
const limit = document.querySelector(".page-limit");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentPage = 1;

function updatePagination(){
  const perPage = Number(limit.value);

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  range.textContent = `${start} to ${end}`;

  prev.disabled = currentPage === 1;
  next.disabled = end >= totalItems;
}

next.addEventListener("click", function(){
  currentPage++;
  updatePagination();
});

prev.addEventListener("click", function(){
  if(currentPage > 1){
    currentPage--;
    updatePagination();
  }
});

limit.addEventListener("change", function(){
  currentPage = 1;
  updatePagination();
});

updatePagination();
/*-------------------------------------- PAGINATION-SORT ----------------------------------------*/

/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
document.getElementById("FileUpload")?.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const previewBox = document.getElementById("FilePreview");
  const previewImage = document.getElementById("PreviewImage");
  const fileName = document.getElementById("FileName");
  const fileMeta = document.getElementById("FileMeta");

  fileName.textContent = file.name;

  const fileURL = URL.createObjectURL(file);
  previewImage.src = fileURL;

  const fileSize = Math.round(file.size / 1024);

  const img = new Image();

  img.onload = function () {
    fileMeta.textContent =
      file.type.replace("image/", "").toUpperCase() +
      " · " + fileSize + " KB · " +
      img.width + "×" + img.height + " px";
  };

  img.src = fileURL;

  previewBox.classList.add("show");
});
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/