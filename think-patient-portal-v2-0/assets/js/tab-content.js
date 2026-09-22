/*------------------------------------------- JS FOR TAB-CONTENT START ------------------------------------------*/
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
/*-------------------------------------- JS FOR TAB-CONTENT COMPLETE ----------------------------------------*/