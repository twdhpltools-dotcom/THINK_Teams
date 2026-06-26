/*------------------------------------------- JS FOR CUSTOM-MENU START ------------------------------------------*/
/*-------------------------------------- SIDEBAR-MENU-TOGGLE ----------------------------------------*/
function openSideBarMenuToggle() {
  const SideBar = document.getElementById("SideBar");

  SideBar.classList.toggle("translate-y-full");
  SideBar.classList.toggle("opacity-0");

  SideBar.classList.toggle("translate-y-0");
  SideBar.classList.toggle("opacity-100");
}
/*-------------------------------------- SIDEBAR-MENU-TOGGLE ----------------------------------------*/

/*-------------------------------------- BOOKING-RE-SCHEDULE-MENU-TOGGLE ----------------------------------------*/
function openBookingRScheduleMenuToggle() {
  const sidebar = document.getElementById("BookingRScheduleSideBar");

  BookingRScheduleSideBar.classList.toggle("translate-y-full");
  BookingRScheduleSideBar.classList.toggle("opacity-0");

  BookingRScheduleSideBar.classList.toggle("translate-y-0");
  BookingRScheduleSideBar.classList.toggle("opacity-100");
}
/*-------------------------------------- BOOKING-RE-SCHEDULE-MENU-TOGGLE ----------------------------------------*/

/*-------------------------------------- BOOKING-PRESCRIPTION-MENU-TOGGLE ----------------------------------------*/
function openBookingPrescriptionMenuToggle() {
  const sidebar = document.getElementById("BookingPrescriptionSideBar");

  BookingPrescriptionSideBar.classList.toggle("translate-y-full");
  BookingPrescriptionSideBar.classList.toggle("opacity-0");

  BookingPrescriptionSideBar.classList.toggle("translate-y-0");
  BookingPrescriptionSideBar.classList.toggle("opacity-100");
}
/*-------------------------------------- BOOKING-PRESCRIPTION-MENU-TOGGLE ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/