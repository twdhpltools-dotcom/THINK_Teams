/*------------------------------------------- JS FOR PG-BACK-FUCNTIONALITY START ------------------------------------------*/
document.querySelectorAll(".go-back-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.history.back();
  });
});
/*-------------------------------------- JS FOR PG-BACK-FUCNTIONALITY COMPLETE ----------------------------------------*/