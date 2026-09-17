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

  user.addEventListener("input", checkLoginFields);
  pass.addEventListener("input", checkLoginFields);

  form.addEventListener("submit", function (e) {
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

/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/
const searchTexts=[
  "Search patient, Inv No ...",
  "Search by test name or study",
  "Search patient, case ID"
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

/*-------------------------------------- PRINT-SCREEN ----------------------------------------*/
document.querySelector(".submitted-btn.conf").addEventListener("click", function () {
  window.print();
});
/*-------------------------------------- PRINT-SCREEN ----------------------------------------*/

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

/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
const tatTimers = document.querySelectorAll(".tat-timer");

tatTimers.forEach(function (timer) {
  timer.dataset.seconds = 24 * 60 * 60;
});

setInterval(function () {
  tatTimers.forEach(function (timer) {
    let totalSeconds = Number(timer.dataset.seconds);

    if (totalSeconds <= 0) {
      timer.innerText = "Out";
      timer.classList.add("tat-out");
      return;
    }

    totalSeconds--;
    timer.dataset.seconds = totalSeconds;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    timer.innerText = hours + " Hours " + minutes + " Mins";
  });
}, 1000);
/*-------------------------------------- FILE-UPLOAD ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/