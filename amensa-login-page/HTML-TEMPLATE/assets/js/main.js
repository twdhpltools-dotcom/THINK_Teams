/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/* ----------------------------------------- JS FOR PASSWORD-ICON START ---------------------------------------------- */
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
/* ----------------------------------------- JS FOR PASSWORD-ICON COMPLETE ---------------------------------------------- */

/* ----------------------------------------- JS FOR FORM-VALIDATION START ---------------------------------------------- */
const form = document.querySelector("form"),
  [user, pass] = form.querySelectorAll("input[required]"),
  error = form.querySelector(".login-error"),
  errorBox = form.querySelector(".login-error-wrap");

form.noValidate = true;

form.onsubmit = e => {
  let msg = !user.value.trim() ? "Please enter User Name." :
  !pass.value.trim() ? "Please enter Password." : "";

  error.innerText = msg;
  errorBox.classList.toggle("show", !!msg);

  if (msg) {
    e.preventDefault();
    (!user.value.trim() ? user : pass).focus();
  }
};
/* ----------------------------------------- JS FOR FORM-VALIDATION COMPLETE ---------------------------------------------- */
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/