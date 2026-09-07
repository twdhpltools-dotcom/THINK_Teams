/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/
/*-------------------------------------- BOOKING-HC-ADDRESS-CANCEL ----------------------------------------*/
function openBookingHCAddCancelModal() {
  const BookingHCAddCancelModal = document.getElementById("BookingHCAddCancelModal");
  const BookingHCAddCancelModalBox = document.getElementById("BookingHCAddCancelModalBox");

  BookingHCAddCancelModal.classList.remove("hidden");
  BookingHCAddCancelModal.classList.add("flex");

  setTimeout(() => {
    BookingHCAddCancelModalBox.classList.remove("opacity-0", "scale-95");
    BookingHCAddCancelModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingHCAddCancelModal() {
  const BookingHCAddCancelModal = document.getElementById("BookingHCAddCancelModal");
  const BookingHCAddCancelModalBox = document.getElementById("BookingHCAddCancelModalBox");

  BookingHCAddCancelModalBox.classList.add("opacity-0", "scale-95");
  BookingHCAddCancelModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingHCAddCancelModal.classList.add("hidden");
    BookingHCAddCancelModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingHCAddCancelModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingHCAddCancelModal();
  }
});
/*-------------------------------------- BOOKING-HC-ADDRESS-CANCEL ----------------------------------------*/
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/