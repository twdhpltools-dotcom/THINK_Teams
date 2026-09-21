/*------------------------------------------- JS FOR PG-VALIDATION START ------------------------------------------*/
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
/*-------------------------------------- JS FOR PG-VALIDATION COMPLETE ----------------------------------------*/