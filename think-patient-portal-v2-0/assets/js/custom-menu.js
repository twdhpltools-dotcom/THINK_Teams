/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/
function openSideBarMenu(){
const SideBarMenu=document.getElementById("SideBarMenu");
SideBarMenu.classList.remove("-translate-x-full","opacity-0");
SideBarMenu.classList.add("translate-x-0","opacity-100");
}

function closeSideBarMenu(){
const SideBarMenu=document.getElementById("SideBarMenu");
SideBarMenu.classList.remove("translate-x-0","opacity-100");
SideBarMenu.classList.add("-translate-x-full","opacity-0");
}
/*-------------------------------------- SIDEBAR-MENU ----------------------------------------*/

/*-------------------------------------- BOOKING-TIME-MENU ----------------------------------------*/
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
/*-------------------------------------- BOOKING-TIME-MENU ----------------------------------------*/

/*-------------------------------------- HOME-COLLECTION-STATUS-YES-MENU ----------------------------------------*/
function openHomeCollectionStatusYesMenu() { 
    const HomeCollectionStatusYesMenu = document.getElementById("HomeCollectionStatusYesMenu"); 
    const HomeCollectionStatusYesMenuOverlay = document.getElementById("HomeCollectionStatusYesMenuOverlay"); 
 
    HomeCollectionStatusYesMenu.classList.toggle("translate-y-full"); 
    HomeCollectionStatusYesMenu.classList.toggle("opacity-0"); 
    HomeCollectionStatusYesMenu.classList.toggle("translate-y-0"); 
    HomeCollectionStatusYesMenu.classList.toggle("opacity-100"); 
 
    HomeCollectionStatusYesMenuOverlay.classList.toggle("opacity-0"); 
    HomeCollectionStatusYesMenuOverlay.classList.toggle("invisible"); 
}

function closeHomeCollectionStatusYesMenu() {
    const HomeCollectionStatusYesMenu = document.getElementById("HomeCollectionStatusYesMenu");
    const HomeCollectionStatusYesMenuOverlay = document.getElementById("HomeCollectionStatusYesMenuOverlay");

    HomeCollectionStatusYesMenu.classList.add("translate-y-full", "opacity-0");
    HomeCollectionStatusYesMenu.classList.remove("translate-y-0", "opacity-100");

    HomeCollectionStatusYesMenuOverlay.classList.add("opacity-0", "invisible");
    HomeCollectionStatusYesMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("HomeCollectionStatusYesMenuOverlay").addEventListener("click", function () {
        closeHomeCollectionStatusYesMenu();
    });
});
/*-------------------------------------- HOME-COLLECTION-STATUS-YES-MENU ----------------------------------------*/

/*-------------------------------------- HOME-COLLECTION-STATUS-NO-MENU ----------------------------------------*/
function openHomeCollectionStatusNoMenu() { 
    const HomeCollectionStatusNoMenu = document.getElementById("HomeCollectionStatusNoMenu"); 
    const HomeCollectionStatusNoMenuOverlay = document.getElementById("HomeCollectionStatusNoMenuOverlay"); 
 
    HomeCollectionStatusNoMenu.classList.toggle("translate-y-full"); 
    HomeCollectionStatusNoMenu.classList.toggle("opacity-0"); 
    HomeCollectionStatusNoMenu.classList.toggle("translate-y-0"); 
    HomeCollectionStatusNoMenu.classList.toggle("opacity-100"); 
 
    HomeCollectionStatusNoMenuOverlay.classList.toggle("opacity-0"); 
    HomeCollectionStatusNoMenuOverlay.classList.toggle("invisible"); 
}

function closeHomeCollectionStatusNoMenu() {
    const HomeCollectionStatusNoMenu = document.getElementById("HomeCollectionStatusNoMenu");
    const HomeCollectionStatusNoMenuOverlay = document.getElementById("HomeCollectionStatusNoMenuOverlay");

    HomeCollectionStatusNoMenu.classList.add("translate-y-full", "opacity-0");
    HomeCollectionStatusNoMenu.classList.remove("translate-y-0", "opacity-100");

    HomeCollectionStatusNoMenuOverlay.classList.add("opacity-0", "invisible");
    HomeCollectionStatusNoMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("HomeCollectionStatusNoMenuOverlay").addEventListener("click", function () {
        closeHomeCollectionStatusNoMenu();
    });
});
/*-------------------------------------- HOME-COLLECTION-STATUS-NO-MENU ----------------------------------------*/

/*-------------------------------------- HISTORY-SORT-MENU ----------------------------------------*/
function openHistorySortMenu() { 
    const HistorySortMenu = document.getElementById("HistorySortMenu"); 
    const HistorySortMenuOverlay = document.getElementById("HistorySortMenuOverlay"); 
 
    HistorySortMenu.classList.toggle("translate-y-full"); 
    HistorySortMenu.classList.toggle("opacity-0"); 
    HistorySortMenu.classList.toggle("translate-y-0"); 
    HistorySortMenu.classList.toggle("opacity-100"); 
 
    HistorySortMenuOverlay.classList.toggle("opacity-0"); 
    HistorySortMenuOverlay.classList.toggle("invisible"); 
}

function closeHistorySortMenu() {
    const HistorySortMenu = document.getElementById("HistorySortMenu");
    const HistorySortMenuOverlay = document.getElementById("HistorySortMenuOverlay");

    HistorySortMenu.classList.add("translate-y-full", "opacity-0");
    HistorySortMenu.classList.remove("translate-y-0", "opacity-100");

    HistorySortMenuOverlay.classList.add("opacity-0", "invisible");
    HistorySortMenuOverlay.classList.remove("opacity-100");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("HistorySortMenuOverlay").addEventListener("click", function () {
        closeHistorySortMenu();
    });
});
/*-------------------------------------- HISTORY-SORT-MENU ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/