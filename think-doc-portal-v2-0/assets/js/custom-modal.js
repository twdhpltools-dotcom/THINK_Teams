/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/
/*-------------------------------------- BOOKING-SETUP ----------------------------------------*/
function openBookingSetupModal() {
  const BookingSetupModal = document.getElementById("BookingSetupModal");
  const BookingSetupModalBox = document.getElementById("BookingSetupModalBox");

  BookingSetupModal.classList.remove("hidden");
  BookingSetupModal.classList.add("flex");

  setTimeout(() => {
    BookingSetupModalBox.classList.remove("opacity-0", "scale-95");
    BookingSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingSetupModal() {
  const BookingSetupModal = document.getElementById("BookingSetupModal");
  const BookingSetupModalBox = document.getElementById("BookingSetupModalBox");

  BookingSetupModalBox.classList.add("opacity-0", "scale-95");
  BookingSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingSetupModal.classList.add("hidden");
    BookingSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingSetupModal();
  }
});
/*-------------------------------------- BOOKING-SETUP ----------------------------------------*/

/*-------------------------------------- BOOKING-CONFIRMATION ----------------------------------------*/
function openBookingConfModal() {
  const BookingConfModal = document.getElementById("BookingConfModal");
  const BookingConfModalBox = document.getElementById("BookingConfModalBox");

  BookingConfModal.classList.remove("hidden");
  BookingConfModal.classList.add("flex");

  setTimeout(() => {
    BookingConfModalBox.classList.remove("opacity-0", "scale-95");
    BookingConfModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingConfModal() {
  const BookingConfModal = document.getElementById("BookingConfModal");
  const BookingConfModalBox = document.getElementById("BookingConfModalBox");

  BookingConfModalBox.classList.add("opacity-0", "scale-95");
  BookingConfModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingConfModal.classList.add("hidden");
    BookingConfModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingConfModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingConfModal();
  }
});
/*-------------------------------------- BOOKING-CONFIRMATION ----------------------------------------*/

/*-------------------------------------- BOOKING-CANCEL-CONFIRMATION ----------------------------------------*/
function openBookingCancelConfModal() {
  const BookingCancelConfModal = document.getElementById("BookingCancelConfModal");
  const BookingCancelConfModalBox = document.getElementById("BookingCancelConfModalBox");

  BookingCancelConfModal.classList.remove("hidden");
  BookingCancelConfModal.classList.add("flex");

  setTimeout(() => {
    BookingCancelConfModalBox.classList.remove("opacity-0", "scale-95");
    BookingCancelConfModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingCancelConfModal() {
  const BookingCancelConfModal = document.getElementById("BookingCancelConfModal");
  const BookingCancelConfModalBox = document.getElementById("BookingCancelConfModalBox");

  BookingCancelConfModalBox.classList.add("opacity-0", "scale-95");
  BookingCancelConfModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingCancelConfModal.classList.add("hidden");
    BookingCancelConfModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingCancelConfModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingCancelConfModal();
  }
});
/*-------------------------------------- BOOKING-CANCEL-CONFIRMATION ----------------------------------------*/

/*-------------------------------------- BOOKING-RE-SCHEDULE ----------------------------------------*/
function openBookingRScheduleModal() {
  const BookingRScheduleModal = document.getElementById("BookingRScheduleModal");
  const BookingRScheduleModalBox = document.getElementById("BookingRScheduleModalBox");

  BookingRScheduleModal.classList.remove("hidden");
  BookingRScheduleModal.classList.add("flex");

  setTimeout(() => {
    BookingRScheduleModalBox.classList.remove("opacity-0", "scale-95");
    BookingRScheduleModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingRScheduleModal() {
  const BookingRScheduleModal = document.getElementById("BookingRScheduleModal");
  const BookingRScheduleModalBox = document.getElementById("BookingRScheduleModalBox");

  BookingRScheduleModalBox.classList.add("opacity-0", "scale-95");
  BookingRScheduleModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingRScheduleModal.classList.add("hidden");
    BookingRScheduleModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingRScheduleModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingRScheduleModal();
  }
});
/*-------------------------------------- BOOKING-RE-SCHEDULE ----------------------------------------*/

/*-------------------------------------- BOOKING-PAYMENT ----------------------------------------*/
function openBookingPaymentModal() {
  const BookingPaymentModal = document.getElementById("BookingPaymentModal");
  const BookingPaymentModalBox = document.getElementById("BookingPaymentModalBox");

  BookingPaymentModal.classList.remove("hidden");
  BookingPaymentModal.classList.add("flex");

  setTimeout(() => {
    BookingPaymentModalBox.classList.remove("opacity-0", "scale-95");
    BookingPaymentModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingPaymentModal() {
  const BookingPaymentModal = document.getElementById("BookingPaymentModal");
  const BookingPaymentModalBox = document.getElementById("BookingPaymentModalBox");

  BookingPaymentModalBox.classList.add("opacity-0", "scale-95");
  BookingPaymentModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingPaymentModal.classList.add("hidden");
    BookingPaymentModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingPaymentModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingPaymentModal();
  }
});
/*-------------------------------------- BOOKING-PAYMENT ----------------------------------------*/

/*-------------------------------------- BOOKING-REFUND ----------------------------------------*/
function openBookingRefundModal() {
  const BookingRefundModal = document.getElementById("BookingRefundModal");
  const BookingRefundModalBox = document.getElementById("BookingRefundModalBox");

  BookingRefundModal.classList.remove("hidden");
  BookingRefundModal.classList.add("flex");

  setTimeout(() => {
    BookingRefundModalBox.classList.remove("opacity-0", "scale-95");
    BookingRefundModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingRefundModal() {
  const BookingRefundModal = document.getElementById("BookingRefundModal");
  const BookingRefundModalBox = document.getElementById("BookingRefundModalBox");

  BookingRefundModalBox.classList.add("opacity-0", "scale-95");
  BookingRefundModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingRefundModal.classList.add("hidden");
    BookingRefundModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingRefundModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingRefundModal();
  }
});
/*-------------------------------------- BOOKING-REFUND ----------------------------------------*/

/*-------------------------------------- BOOKING-INVOICE-SHOWER ----------------------------------------*/
function openBookingInvShowerModal() {
  const BookingInvShowerModal = document.getElementById("BookingInvShowerModal");
  const BookingInvShowerModalBox = document.getElementById("BookingInvShowerModalBox");

  BookingInvShowerModal.classList.remove("hidden");
  BookingInvShowerModal.classList.add("flex");

  setTimeout(() => {
    BookingInvShowerModalBox.classList.remove("opacity-0", "scale-95");
    BookingInvShowerModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingInvShowerModal() {
  const BookingInvShowerModal = document.getElementById("BookingInvShowerModal");
  const BookingInvShowerModalBox = document.getElementById("BookingInvShowerModalBox");

  BookingInvShowerModalBox.classList.add("opacity-0", "scale-95");
  BookingInvShowerModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingInvShowerModal.classList.add("hidden");
    BookingInvShowerModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingInvShowerModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingInvShowerModal();
  }
});
/*-------------------------------------- BOOKING-INVOICE-SHOWER ----------------------------------------*/
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/