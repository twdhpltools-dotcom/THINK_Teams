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
    loop: false,
    autoplay: false,
    autoplayTimeout: 1500,
    autoplaySpeed: 1500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    stagePadding: 5,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 6,
      },
      1024: {
        items: 9,
      }
    }
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
    autoplayTimeout: 4000,
    autoplaySpeed: 2500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      }
    }
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
    margin: 20,
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 2500,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      }
    }
  });
});
/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) COMPLETE ---------------------------------------------- */

/*-------------------------------------- USER-DYNAMIC-AVATAR ----------------------------------------*/
const avatarColors = {
  A:['#D32F2F','#FDECEC'],B:['#C2185B','#FCEAF2'],C:['#7B1FA2','#F5EAF8'],D:['#512DA8','#EEEAF8'],
  E:['#303F9F','#EBEDF8'],F:['#1976D2','#EAF4FD'],G:['#0288D1','#E8F7FD'],H:['#0097A7','#E6F8FA'],
  I:['#00796B','#E5F5F2'],J:['#388E3C','#ECF7ED'],K:['#689F38','#F1F7E8'],L:['#AFB42B','#F8F9E9'],
  M:['#F9A825','#FFF7E2'],N:['#F57C00','#FFF1E5'],O:['#E64A19','#FDECE7'],P:['#5D4037','#F1ECEA'],
  Q:['#616161','#F1F1F1'],R:['#455A64','#EDF1F3'],S:['#00838F','#E5F4F5'],T:['#2E7D32','#E8F3E9'],
  U:['#AD1457','#F8E8F0'],V:['#4527A0','#ECE8F6'],W:['#1565C0','#E8F0F9'],X:['#00695C','#E5F1EF'],
  Y:['#EF6C00','#FFF0E3'],Z:['#C62828','#F9E8E8']
};

function setMemberAvatars(){
  document.querySelectorAll('.member-avatar').forEach(avatar=>{
    const name=(avatar.getAttribute('data-name') || '').trim();
    const letter=name ? name.charAt(0).toUpperCase() : '?';
    const colors=avatarColors[letter] || ['#64748B','#F1F5F9'];

    avatar.style.backgroundColor=colors[1];

    const letterEl=avatar.querySelector('.member-avatar-letter');
    letterEl.textContent=letter;
    letterEl.style.color=colors[0];
  });
}
document.addEventListener('DOMContentLoaded',setMemberAvatars);
/*-------------------------------------- USER-DYNAMIC-AVATAR ----------------------------------------*/

/*-------------------------------------- SEARCH-BAR ANIMATION ----------------------------------------*/
const searchTexts=[
  "Search by reports, prescriptions ...",
  "Search by test name ...",
  "Search by doctor name ...",
  "Search by invoice number ..."
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

/*-------------------------------------- TIME-MOMENT-(INIT) ----------------------------------------*/
document.querySelectorAll(".the-moment").forEach(function(el){
  const date=moment(el.textContent.trim(),"MMM DD, YYYY");
  el.textContent=date.fromNow();
});
/*-------------------------------------- TIME-MOMENT-(INIT) ----------------------------------------*/

/*-------------------------------------- ADD-CART-TOAST ----------------------------------------*/
document.addEventListener("DOMContentLoaded",function(){
  const cartIcon=document.querySelector(".bi-cart3");
  const cartButton=cartIcon.closest("button");
  const cartCount=cartButton.querySelector("span");
  let count=parseInt(cartCount.textContent)||0;

  function animateCart(){
    cartIcon.style.color="var(--primary)";

    cartIcon.animate([
      {transform:"scale(1) rotate(0deg)"},
      {transform:"scale(1.35) rotate(-12deg)"},
      {transform:"scale(.9) rotate(8deg)"},
      {transform:"scale(1) rotate(0deg)"}
    ],{duration:450,easing:"ease-out"});

    cartCount.animate([
      {transform:"scale(1)"},
      {transform:"scale(1.5)"},
      {transform:"scale(1)"}
    ],{duration:350,easing:"ease-out"});

    setTimeout(()=>cartIcon.style.color="",500);
  }

  function updateCart(){
    cartCount.textContent=count;
    cartCount.classList.toggle("hidden",count===0);
    animateCart();
  }

  document.querySelectorAll(".cart-btn").forEach(function(button){
    button.addEventListener("click",function(event){
      event.stopPropagation();

      if(button.classList.contains("added")){
          button.classList.remove("added");
          button.innerHTML='Add to Cart';
          count=Math.max(0,count-1);
        }else{
          button.classList.add("added");
          button.innerHTML='<i class="bi bi-trash"></i>';
          count++;
        }
      updateCart();
    });
  });

  cartCount.classList.toggle("hidden",count===0);
});
/*-------------------------------------- ADD-CART-TOAST ----------------------------------------*/

/*-------------------------------------- ACCORDIAN ----------------------------------------*/
function toggleAccordion(head) {
  const body = head.nextElementSibling;
  const icon = head.querySelector(".pg-accordion-icon");

  body.classList.toggle("max-h-0");
  body.classList.toggle("pt-0");
  body.classList.toggle("max-h-[500px]");
  body.classList.toggle("pt-3");

  icon.classList.toggle("rotate-180");
}
/*-------------------------------------- ACCORDIAN ----------------------------------------*/

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

/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/
function openHomeCollectionRPDownloadMenu(btn) {
  const buttons = [...document.querySelectorAll('[onclick*="openHomeCollectionRPDownloadMenu"]')];
  const menus = document.querySelectorAll('.home_collection_rp_download_menu');
  const index = buttons.indexOf(btn);

  if(index !== -1 && menus[index]){
    menus[index].classList.toggle('hidden');
  }
}

function openNotfMenu(btn) {
  const buttons = [...document.querySelectorAll('[onclick*="openNotfMenu"]')];
  const menus = document.querySelectorAll('.notf_menu');
  const index = buttons.indexOf(btn);

  if(index !== -1 && menus[index]){
    menus[index].classList.toggle('hidden');
  }
}
/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/