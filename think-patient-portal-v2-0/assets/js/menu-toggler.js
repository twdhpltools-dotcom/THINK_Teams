/*------------------------------------------- JS FOR TOGGLER-MENU START ------------------------------------------*/
/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/
function openHomeCollectionRPDownloadMenu(btn) {
  const buttons = [...document.querySelectorAll('[onclick*="openHomeCollectionRPDownloadMenu"]')];
  const menus = document.querySelectorAll('.home_collection_rp_download_menu');
  const index = buttons.indexOf(btn);

  if(index !== -1 && menus[index]){
    menus[index].classList.toggle('hidden');
  }
}

function openNotfMenu(btn) {
  const buttons = [...document.querySelectorAll('[onclick*="openNotfMenu"]')];
  const menus = document.querySelectorAll('.notf_menu');
  const index = buttons.indexOf(btn);

  if(index !== -1 && menus[index]){
    menus[index].classList.toggle('hidden');
  }
}
/*-------------------------------------- TOGGLER-MENU ----------------------------------------*/

/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/
function toggleLocationMenu(e) {
  e.stopPropagation();
  const menu = document.getElementById("LocationSubMenu");

  menu.classList.toggle("opacity-0");
  menu.classList.toggle("translate-y-[-8px]");
  menu.classList.toggle("pointer-events-none");

  menu.classList.toggle("opacity-100");
  menu.classList.toggle("translate-y-0");
}

document.addEventListener("click", function () {
  const menu = document.getElementById("LocationSubMenu");

  menu.classList.add(
    "opacity-0",
    "translate-y-[-8px]",
    "pointer-events-none"
  );

  menu.classList.remove(
    "opacity-100",
    "translate-y-0"
  );
});
/*-------------------------------------- ANIMATED-TOGGLER-MENU ----------------------------------------*/
/*-------------------------------------- JS FOR TOGGLER-MENU COMPLETE ----------------------------------------*/