/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/

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

/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/