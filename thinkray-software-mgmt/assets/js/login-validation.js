/*------------------------------------------- JS FOR LOGIN-VALIDATION START ------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mainLoginForm");
  const user = document.getElementById("username");
  const pass = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const error = document.getElementById("loginError");

  const logins = {
    centre_app: {
      password: "12345",
      page: "index.html"
    },
    doctor_app: {
      password: "12345",
      page: "doctor-index.html"
    },
    admin_app: {
      password: "12345",
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
        "Oops! You're trying to Log in, But These Credentials are not Matched According to You ...";
    }
  });
});
/*------------------------------------------- JS FOR LOGIN-VALIDATION COMPLETE ------------------------------------------*/