/*------------------------------------------- JS FOR SHOW/HIDE-FUCNTIONALITY START ------------------------------------------*/
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;

  subMenu.classList.toggle("max-h-0");
  subMenu.classList.toggle("opacity-0");

  subMenu.classList.toggle("max-h-[180px]");
  subMenu.classList.toggle("opacity-100");
}
/*-------------------------------------- JS FOR SHOW/HIDE-FUCNTIONALITY COMPLETE ----------------------------------------*/