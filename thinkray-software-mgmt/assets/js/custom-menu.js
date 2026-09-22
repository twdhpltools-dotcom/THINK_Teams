/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
function toggleSideBarMenu() {
  const sideBar = document.getElementById("SideBarMenu");
  const pageSection = document.querySelector(".page-section");
  const topHeader = document.querySelector(".top-header");

  sideBar.classList.toggle("collapsed");
  pageSection.classList.toggle("expanded");
  topHeader.classList.toggle("expanded");
}

window.addEventListener("DOMContentLoaded", function () {
  const sideBar = document.getElementById("SideBarMenu");

  if (window.innerWidth <= 992) {
    sideBar.classList.add("collapsed");
  }
});
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/