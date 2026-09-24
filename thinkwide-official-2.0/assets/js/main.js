/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/

/*-------------------------------------- PRE-LOADER ----------------------------------------*/
window.addEventListener("load", function () {
  const preloader = document.getElementById("pg_pre_loader");
  if (preloader) {
    preloader.classList.add("hide");
    setTimeout(() => {
      preloader.remove();
    }, 300);
  }
});
/*-------------------------------------- PRE-LOADER ----------------------------------------*/

/* ----------------------------------------- JS FOR MOBILE-MANU-TOGGLER START ---------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mobileToggler");
    const mobileHeader = document.querySelector(".mobile-header");

    toggleBtn.addEventListener("click", function () {
        toggleBtn.classList.toggle("active");
        mobileHeader.classList.toggle("active");
    });
});
/* ----------------------------------------- JS FOR MOBILE-MANU-TOGGLER COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR STICKY HEADER START ---------------------------------------------- */
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".bottom-header").addClass("sticky");
    } else {
        $(".bottom-header").removeClass("sticky");
    }
});
/* ----------------------------------------- JS FOR STICKY HEADER COMPLETE ---------------------------------------------- */

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

/*-------------------------------------- INPUT-TEL-VALIDATION ----------------------------------------*/
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
/*-------------------------------------- INPUT-TEL-VALIDATION ----------------------------------------*/

/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) START ---------------------------------------------- */
$(document).ready(function(){
  var owl = $('#login_hero_carousel');
  var timeout = 4000;
  
  owl.owlCarousel({
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: timeout,
      autoplaySpeed: 800,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      onInitialized: startProgress,
      onTranslate: resetProgress,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
  });

  function startProgress() {
    $('.progress-bar').css({ width: '100%', transition: `width ${timeout}ms linear` });
  }

  function resetProgress() {
    $('.progress-bar').css({ width: 0, transition: 'none' });
    setTimeout(startProgress, 50);
  }
});

$(document).ready(function(){
  var owl = $('#feature_carousel');
  
  owl.owlCarousel({
      margin: 30,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#thinkray_feature_carousel');
  
  owl.owlCarousel({
      margin: 30,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#support_carousel');
  
  owl.owlCarousel({
      margin: 50,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#clients_one_carousel');
  
  owl.owlCarousel({
      margin: 50,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplaySpeed: 1500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#clients_two_carousel');
  
  owl.owlCarousel({
      margin: 50,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplaySpeed: 1500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      rtl: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#clients_three_carousel');
  
  owl.owlCarousel({
      margin: 50,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplaySpeed: 1500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        }
      }
  });
});

$(document).ready(function(){
  var owl = $('#teams_carousel');
  
  owl.owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1
  });
});

$(document).ready(function(){
  var owl = $('#payment_method_carousel');
  
  owl.owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      center: true,
      responsive: {
        0: {
          items: 4
        },
        450: {
          items: 3
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
  });
});
/* ----------------------------------------- JS FOR OWL-CAROUSEL (INIT) COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR PASSWORD-ICON START ---------------------------------------------- */
function togglePassword() {
  // const password = document.getElementById('login_pass');
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
/* ----------------------------------------- JS FOR PASSWORD-ICON COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR ANIMATE-ON-SCROLL (INIT) START ---------------------------------------------- */
AOS.init({
  offset: 100,
  duration: 900,
  easing: 'ease',
  once: true
});
/* ----------------------------------------- JS FOR ANIMATE-ON-SCROLL (INIT) COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR TOGGLE-SWITCH START ---------------------------------------------- */
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));
    
    this.classList.add('active');
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("admin_login_form").classList.add("active");
});
/* ----------------------------------------- JS FOR TOGGLE-SWITCH COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR COUNTER START ---------------------------------------------- */
$(document).ready(function () {
  let counted = false;

  $(window).on("scroll", function () {
    let sectionTop = $('section').offset().top - window.innerHeight;
    if (!counted && $(window).scrollTop() > sectionTop) {
      $('.counter').each(function () {
        let $this = $(this),
        countTo = $this.attr('data-count');

        $({ countNum: 0 }).animate(
          { countNum: countTo },
          {
              duration: 2000,
              easing: 'swing',
              step: function () {
                  let suffix = $this.data('suffix') || "";
                  $this.html(Math.floor(this.countNum) + " <span>" + suffix + "</span>");
              },
              complete: function () {
                  let suffix = $this.data('suffix') || "";
                  $this.html(this.countNum + " <span>" + suffix + "</span>");
              }
          }
        );
      });
      counted = true;
    }
  });
});
/* ----------------------------------------- JS FOR COUNTER COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR TARGETED-HIGHLIGHTER START ---------------------------------------------- */
const navItems = document.querySelectorAll('#targeted_nav li');
const sections = document.querySelectorAll('.targeted_scroll_division');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(li => li.classList.remove('active'));
      const activeLi = document.querySelector(
        `#targeted_nav li[data-target="${entry.target.id}"]`
      );
      if (activeLi) activeLi.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));
/* ----------------------------------------- JS FOR TARGETED-HIGHLIGHTER COMPLETE ---------------------------------------------- */

/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/