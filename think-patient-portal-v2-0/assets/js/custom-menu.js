/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
function openSideBarMenu() {
    const SideBarMenu = document.getElementById("SideBarMenu");

    SideBarMenu.classList.remove("translate-y-full", "opacity-0");
    SideBarMenu.classList.add("translate-y-0", "opacity-100");
}

function closeSideBarMenu() {
    const SideBarMenu = document.getElementById("SideBarMenu");

    SideBarMenu.classList.remove("translate-y-0", "opacity-100");
    SideBarMenu.classList.add("translate-y-full", "opacity-0");
}
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/

/*-------------------------------------- BOOKING--TIME-MENU ----------------------------------------*/
function openBookingTimeMenu() { 
    const BookingTimeMenu = document.getElementById("BookingTimeMenu"); 
    const BookingTimeMenuOverlay = document.getElementById("BookingTimeMenuOverlay"); 
 
    BookingTimeMenu.classList.toggle("translate-y-full"); 
    BookingTimeMenu.classList.toggle("opacity-0"); 
    BookingTimeMenu.classList.toggle("translate-y-0"); 
    BookingTimeMenu.classList.toggle("opacity-100"); 
 
    BookingTimeMenuOverlay.classList.toggle("opacity-0"); 
    BookingTimeMenuOverlay.classList.toggle("invisible"); 
}

function closeBookingTimeMenu() {
    const BookingTimeMenu = document.getElementById("BookingTimeMenu");
    const BookingTimeMenuOverlay = document.getElementById("BookingTimeMenuOverlay");

    BookingTimeMenu.classList.add("translate-y-full", "opacity-0");
    BookingTimeMenu.classList.remove("translate-y-0", "opacity-100");

    BookingTimeMenuOverlay.classList.add("opacity-0", "invisible");
    BookingTimeMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("BookingTimeMenuOverlay").addEventListener("click", function () {
        closeBookingTimeMenu();
    });
});
/*-------------------------------------- BOOKING--TIME-MENU ----------------------------------------*/

/*-------------------------------------- BOOKING--TIME-MENU ----------------------------------------*/
function openHomeCollectionStatusMenu() { 
    const HomeCollectionStatusMenu = document.getElementById("HomeCollectionStatusMenu"); 
    const HomeCollectionStatusMenuOverlay = document.getElementById("HomeCollectionStatusMenuOverlay"); 
 
    HomeCollectionStatusMenu.classList.toggle("translate-y-full"); 
    HomeCollectionStatusMenu.classList.toggle("opacity-0"); 
    HomeCollectionStatusMenu.classList.toggle("translate-y-0"); 
    HomeCollectionStatusMenu.classList.toggle("opacity-100"); 
 
    HomeCollectionStatusMenuOverlay.classList.toggle("opacity-0"); 
    HomeCollectionStatusMenuOverlay.classList.toggle("invisible"); 
}

function closeHomeCollectionStatusMenu() {
    const HomeCollectionStatusMenu = document.getElementById("HomeCollectionStatusMenu");
    const HomeCollectionStatuseMenuOverlay = document.getElementById("HomeCollectionStatusMenuOverlay");

    HomeCollectionStatusMenu.classList.add("translate-y-full", "opacity-0");
    HomeCollectionStatusMenu.classList.remove("translate-y-0", "opacity-100");

    HomeCollectionStatusMenuOverlay.classList.add("opacity-0", "invisible");
    HomeCollectionStatusMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("HomeCollectionStatusMenuOverlay").addEventListener("click", function () {
        closeHomeCollectionStatusMenu();
    });
});
/*-------------------------------------- BOOKING--TIME-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/