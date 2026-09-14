/*------------------------------------------- JS FOR LOGIN-VALIDATION START ------------------------------------------*/
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
        "Oops! You're trying to Log in, But These Credentials are not Matched According to You ...";
    }
  });
});
/*------------------------------------------- JS FOR LOGIN-VALIDATION COMPLETE ------------------------------------------*/