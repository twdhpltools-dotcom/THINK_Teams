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
const BookingRScheduleSideBar = document.getElementById("BookingRScheduleSideBar");

function openBookingRScheduleMenuToggle() {
  BookingRScheduleSideBar.classList.remove("translate-y-full", "opacity-0");
  BookingRScheduleSideBar.classList.add("translate-y-0", "opacity-100");
}

document.addEventListener("click", function(e){
  if(BookingRScheduleSideBar.contains(e.target)) return;
  if(e.target.closest("[onclick='openBookingRScheduleMenuToggle()']")) return;

  BookingRScheduleSideBar.classList.add("translate-y-full", "opacity-0");
  BookingRScheduleSideBar.classList.remove("translate-y-0", "opacity-100");
});
/*-------------------------------------- BOOKING-RE-SCHEDULE-MENU-TOGGLE ----------------------------------------*/

/*-------------------------------------- BOOKING-PRESCRIPTION-MENU-TOGGLE ----------------------------------------*/
const BookingPrescriptionSideBar = document.getElementById("BookingPrescriptionSideBar");

function openBookingPrescriptionMenuToggle() {
  BookingPrescriptionSideBar.classList.remove("translate-y-full", "opacity-0");
  BookingPrescriptionSideBar.classList.add("translate-y-0", "opacity-100");
}

document.addEventListener("click", function(e){
  if(BookingPrescriptionSideBar.contains(e.target)) return;
  if(e.target.closest("[onclick='openBookingPrescriptionMenuToggle()']")) return;

  BookingPrescriptionSideBar.classList.add("translate-y-full", "opacity-0");
  BookingPrescriptionSideBar.classList.remove("translate-y-0", "opacity-100");
});
/*-------------------------------------- BOOKING-PRESCRIPTION-MENU-TOGGLE ----------------------------------------*/

/*-------------------------------------- ADD-PATIENT-MENU-TOGGLE ----------------------------------------*/
const AddPatientSideBar = document.getElementById("AddPatientSideBar");

function openAddPatientMenuToggle() {
  AddPatientSideBar.classList.remove("translate-y-full", "opacity-0");
  AddPatientSideBar.classList.add("translate-y-0", "opacity-100");
}

document.addEventListener("click", function(e){
  if(AddPatientSideBar.contains(e.target)) return;
  if(e.target.closest("[onclick='openAddPatientMenuToggle()']")) return;

  AddPatientSideBar.classList.add("translate-y-full", "opacity-0");
  AddPatientSideBar.classList.remove("translate-y-0", "opacity-100");
});
/*-------------------------------------- ADD-PATIENT-MENU-TOGGLE ----------------------------------------*/

/*-------------------------------------- REGISTERED-PATIENT-RE-SCHEDULE-MENU-TOGGLE ----------------------------------------*/
const RPatientRScheduleSideBar = document.getElementById("RPatientRScheduleSideBar");

function openRPatientRScheduleMenuToggle() {
  RPatientRScheduleSideBar.classList.remove("translate-y-full", "opacity-0");
  RPatientRScheduleSideBar.classList.add("translate-y-0", "opacity-100");
}

document.addEventListener("click", function(e){
  if(RPatientRScheduleSideBar.contains(e.target)) return;
  if(e.target.closest("[onclick='openRPatientRScheduleMenuToggle()']")) return;

  RPatientRScheduleSideBar.classList.add("translate-y-full", "opacity-0");
  RPatientRScheduleSideBar.classList.remove("translate-y-0", "opacity-100");
});
/*-------------------------------------- REGISTERED-PATIENT-RE-SCHEDULE-MENU-TOGGLE ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-MENU COMPLETE ------------------------------------------*/