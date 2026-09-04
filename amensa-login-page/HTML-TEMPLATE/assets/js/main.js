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
  errorBox = form.querySelector(".login-error-wrap"),
  validUser = "admin",
  validPass = "123456";

form.noValidate = true;

form.onsubmit = e => {
  const invalid =
    !user.value.trim() ||
    !pass.value.trim() ||
    user.value.trim() !== validUser ||
    pass.value !== validPass;

  error.innerText = invalid ? "⚠️ Incorrect Login Credesnsial." : "";
  errorBox.classList.toggle("show", invalid);

  if (invalid) {
    e.preventDefault();
    (!user.value.trim() ? user : !pass.value.trim() ? pass : user).focus();
  }
};
/* ----------------------------------------- JS FOR FORM-VALIDATION COMPLETE ---------------------------------------------- */
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/