/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
function toggleSideBarMenu() {
  const sideBar = document.getElementById("SideBarMenu");
  const pageSection = document.querySelector(".page-section");
  const topHeader = document.querySelector(".top-header");
  const toggleIcon = document.querySelector(".sidebar-menu-toggle img");

  sideBar?.classList.toggle("collapsed");
  pageSection?.classList.toggle("expanded");
  topHeader?.classList.toggle("expanded");
  toggleIcon?.classList.toggle("rotate");
}

window.addEventListener("DOMContentLoaded", function () {
  const sideBar = document.getElementById("SideBarMenu");
  const toggleIcon = document.querySelector(".sidebar-menu-toggle img");

  if (window.innerWidth <= 992) {
    sideBar?.classList.add("collapsed");
    toggleIcon?.classList.add("rotate");
  }
});
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/