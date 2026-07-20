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

/*-------------------------------------- BOOKING-HC-TIME-MENU ----------------------------------------*/
function openBookingHCTimeMenu() { 
    const BookingHCTimeMenu = document.getElementById("BookingHCTimeMenu"); 
    const BookingHCTimeMenuOverlay = document.getElementById("BookingHCTimeMenuOverlay"); 
 
    BookingHCTimeMenu.classList.toggle("translate-y-full"); 
    BookingHCTimeMenu.classList.toggle("opacity-0"); 
    BookingHCTimeMenu.classList.toggle("translate-y-0"); 
    BookingHCTimeMenu.classList.toggle("opacity-100"); 
 
    BookingHCTimeMenuOverlay.classList.toggle("opacity-0"); 
    BookingHCTimeMenuOverlay.classList.toggle("invisible"); 
}

function closeBookingHCTimeMenu() {
    const BookingHCTimeMenu = document.getElementById("BookingHCTimeMenu");
    const BookingHCTimeMenuOverlay = document.getElementById("BookingHCTimeMenuOverlay");

    BookingHCTimeMenu.classList.add("translate-y-full", "opacity-0");
    BookingHCTimeMenu.classList.remove("translate-y-0", "opacity-100");

    BookingHCTimeMenuOverlay.classList.add("opacity-0", "invisible");
    BookingHCTimeMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("BookingHCTimeMenuOverlay").addEventListener("click", function () {
        closeBookingHCTimeMenu();
    });
});
/*-------------------------------------- BOOKING-HC-TIME-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/