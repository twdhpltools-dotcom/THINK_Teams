/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
function toggleSideBarMenu() {
  const sideBar = document.getElementById("SideBarMenu");
  const pageSection = document.querySelector(".page-section");
  const topHeader = document.querySelector(".top-header");

  sideBar.classList.toggle("collapsed");
  topHeader.classList.toggle("expanded");

}
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/