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

/*-------------------------------------- BOOKING-DISCOUNT ----------------------------------------*/
function openBookingDiscountModal() {
  const BookingDiscountModal = document.getElementById("BookingDiscountModal");
  const BookingDiscountModalBox = document.getElementById("BookingDiscountModalBox");

  BookingDiscountModal.classList.remove("hidden");
  BookingDiscountModal.classList.add("flex");

  setTimeout(() => {
    BookingDiscountModalBox.classList.remove("opacity-0", "scale-95");
    BookingDiscountModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeBookingDiscountModal() {
  const BookingDiscountModal = document.getElementById("BookingDiscountModal");
  const BookingDiscountModalBox = document.getElementById("BookingDiscountModalBox");

  BookingDiscountModalBox.classList.add("opacity-0", "scale-95");
  BookingDiscountModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    BookingDiscountModal.classList.add("hidden");
    BookingDiscountModal.classList.remove("flex");
  }, 300);
}

document.getElementById("BookingDiscountModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBookingDiscountModal();
  }
});
/*-------------------------------------- BOOKING-DISCOUNT ----------------------------------------*/

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

/*-------------------------------------- TRANSACTION-SETUP ----------------------------------------*/
function openTransactionSetupModal() {
  const TransactionSetupModal = document.getElementById("TransactionSetupModal");
  const TransactionSetupModalBox = document.getElementById("TransactionSetupModalBox");

  TransactionSetupModal.classList.remove("hidden");
  TransactionSetupModal.classList.add("flex");

  setTimeout(() => {
    TransactionSetupModalBox.classList.remove("opacity-0", "scale-95");
    TransactionSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeTransactionSetupModal() {
  const TransactionSetupModal = document.getElementById("TransactionSetupModal");
  const TransactionSetupModalBox = document.getElementById("TransactionSetupModalBox");

  TransactionSetupModalBox.classList.add("opacity-0", "scale-95");
  TransactionSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    TransactionSetupModal.classList.add("hidden");
    TransactionSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("TransactionSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeTransactionSetupModal();
  }
});
/*-------------------------------------- TRANSACTION-SETUP ----------------------------------------*/

/*-------------------------------------- CONSULTANT-SETUP ----------------------------------------*/
function openConsultantSetupModal() {
  const ConsultantSetupModal = document.getElementById("ConsultantSetupModal");
  const ConsultantSetupModalBox = document.getElementById("ConsultantSetupModalBox");

  ConsultantSetupModal.classList.remove("hidden");
  ConsultantSetupModal.classList.add("flex");

  setTimeout(() => {
    ConsultantSetupModalBox.classList.remove("opacity-0", "scale-95");
    ConsultantSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeConsultantSetupModal() {
  const ConsultantSetupModal = document.getElementById("ConsultantSetupModal");
  const ConsultantSetupModalBox = document.getElementById("ConsultantSetupModalBox");

  ConsultantSetupModalBox.classList.add("opacity-0", "scale-95");
  ConsultantSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ConsultantSetupModal.classList.add("hidden");
    ConsultantSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ConsultantSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeConsultantSetupModal();
  }
});
/*-------------------------------------- CONSULTANT-SETUP ----------------------------------------*/

/*-------------------------------------- REGISTRATION-SETUP ----------------------------------------*/
function openRegSetupModal() {
  const RegSetupModal = document.getElementById("RegSetupModal");
  const RegSetupModalBox = document.getElementById("RegSetupModalBox");

  RegSetupModal.classList.remove("hidden");
  RegSetupModal.classList.add("flex");

  setTimeout(() => {
    RegSetupModalBox.classList.remove("opacity-0", "scale-95");
    RegSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegSetupModal() {
  const RegSetupModal = document.getElementById("RegSetupModal");
  const RegSetupModalBox = document.getElementById("RegSetupModalBox");

  RegSetupModalBox.classList.add("opacity-0", "scale-95");
  RegSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegSetupModal.classList.add("hidden");
    RegSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegSetupModal();
  }
});
/*-------------------------------------- REGISTRATION-SETUP ----------------------------------------*/

/*-------------------------------------- REGISTERED-PATIENT-SETUP ----------------------------------------*/
function openRPatientSetupModal() {
  const RPatientSetupModal = document.getElementById("RPatientSetupModal");
  const RPatientSetupModalBox = document.getElementById("RPatientSetupModalBox");

  RPatientSetupModal.classList.remove("hidden");
  RPatientSetupModal.classList.add("flex");

  setTimeout(() => {
    RPatientSetupModalBox.classList.remove("opacity-0", "scale-95");
    RPatientSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRPatientSetupModal() {
  const RPatientSetupModal = document.getElementById("RPatientSetupModal");
  const RPatientSetupModalBox = document.getElementById("RPatientSetupModalBox");

  RPatientSetupModalBox.classList.add("opacity-0", "scale-95");
  RPatientSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RPatientSetupModal.classList.add("hidden");
    RPatientSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RPatientSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRPatientSetupModal();
  }
});
/*-------------------------------------- REGISTERED-PATIENT-SETUP ----------------------------------------*/

/*-------------------------------------- REFER-IN-SETUP ----------------------------------------*/
function openReferInSetupModal() {
  const ReferInSetupModal = document.getElementById("ReferInSetupModal");
  const ReferInSetupModalBox = document.getElementById("ReferInSetupModalBox");

  ReferInSetupModal.classList.remove("hidden");
  ReferInSetupModal.classList.add("flex");

  setTimeout(() => {
    ReferInSetupModalBox.classList.remove("opacity-0", "scale-95");
    ReferInSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeReferInSetupModal() {
  const ReferInSetupModal = document.getElementById("ReferInSetupModal");
  const ReferInSetupModalBox = document.getElementById("ReferInSetupModalBox");

  ReferInSetupModalBox.classList.add("opacity-0", "scale-95");
  ReferInSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ReferInSetupModal.classList.add("hidden");
    ReferInSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ReferInSetupModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeReferInSetupModal();
  }
});
/*-------------------------------------- REFER-IN-SETUP ----------------------------------------*/

/*-------------------------------------- REFER-OUT-SETUP ----------------------------------------*/
function openReferOutSetupModal() {
  const ReferOutSetupModal = document.getElementById("ReferOutSetupModal");
  const ReferOutSetupModalBox = document.getElementById("ReferOutSetupModalBox");

  ReferOutSetupModal.classList.remove("hidden");
  ReferOutSetupModal.classList.add("flex");

  setTimeout(() => {
    ReferOutSetupModalBox.classList.remove("opacity-0", "scale-95");
    ReferOutSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeReferOutSetupModal() {
  const ReferOutSetupModal = document.getElementById("ReferOutSetupModal");
  const ReferOutSetupModalBox = document.getElementById("ReferOutSetupModalBox");

  ReferOutSetupModalBox.classList.add("opacity-0", "scale-95");
  ReferOutSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ReferOutSetupModal.classList.add("hidden");
    ReferOutSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ReferOutSetupModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeReferOutSetupModal();
  }
});
/*-------------------------------------- REFER-OUT-SETUP ----------------------------------------*/

/*-------------------------------------- EDIT-PROFILE ----------------------------------------*/
function openEditProfileModal() {
  const EditProfileModal = document.getElementById("EditProfileModal");
  const EditProfileModalBox = document.getElementById("EditProfileModalBox");

  EditProfileModal.classList.remove("hidden");
  EditProfileModal.classList.add("flex");

  setTimeout(() => {
    EditProfileModalBox.classList.remove("opacity-0", "scale-95");
    EditProfileModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeEditProfileModal() {
  const EditProfileModal = document.getElementById("EditProfileModal");
  const EditProfileModalBox = document.getElementById("EditProfileModalBox");

  EditProfileModalBox.classList.add("opacity-0", "scale-95");
  EditProfileModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    EditProfileModal.classList.add("hidden");
    EditProfileModal.classList.remove("flex");
  }, 300);
}

document.getElementById("EditProfileModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeEditProfileModal();
  }
});
/*-------------------------------------- EDIT-PROFILE ----------------------------------------*/

/*-------------------------------------- SHOW-PROFILE ----------------------------------------*/
function openShowProfileModal() {
  const ShowProfileModal = document.getElementById("ShowProfileModal");
  const ShowProfileModalBox = document.getElementById("ShowProfileModalBox");

  ShowProfileModal.classList.remove("hidden");
  ShowProfileModal.classList.add("flex");

  setTimeout(() => {
    ShowProfileModalBox.classList.remove("opacity-0", "scale-95");
    ShowProfileModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeShowProfileModal() {
  const ShowProfileModal = document.getElementById("ShowProfileModal");
  const ShowProfileModalBox = document.getElementById("ShowProfileModalBox");

  ShowProfileModalBox.classList.add("opacity-0", "scale-95");
  ShowProfileModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ShowProfileModal.classList.add("hidden");
    ShowProfileModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ShowProfileModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeShowProfileModal();
  }
});
/*-------------------------------------- SHOW-PROFILE ----------------------------------------*/

/*-------------------------------------- FLOAT-CALL ----------------------------------------*/
function openFloatCallModal() {
  const FloatCallModal = document.getElementById("FloatCallModal");
  const FloatCallModalBox = document.getElementById("FloatCallModalBox");

  FloatCallModal.classList.remove("hidden");
  FloatCallModal.classList.add("flex");

  setTimeout(() => {
    FloatCallModalBox.classList.remove("opacity-0", "scale-95");
    FloatCallModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeFloatCallModal() {
  const FloatCallModal = document.getElementById("FloatCallModal");
  const FloatCallModalBox = document.getElementById("FloatCallModalBox");

  FloatCallModalBox.classList.add("opacity-0", "scale-95");
  FloatCallModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    FloatCallModal.classList.add("hidden");
    FloatCallModal.classList.remove("flex");
  }, 300);
}

document.getElementById("FloatCallModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeFloatCallModal();
  }
});
/*-------------------------------------- FLOAT-CALL ----------------------------------------*/

/*-------------------------------------- LOGOUT-CONFIRMATION ----------------------------------------*/
function openLogOutConfModal() {
  const LogOutConfModal = document.getElementById("LogOutConfModal");
  const LogOutConfModalBox = document.getElementById("LogOutConfModalBox");

  LogOutConfModal.classList.remove("hidden");
  LogOutConfModal.classList.add("flex");

  setTimeout(() => {
    LogOutConfModalBox.classList.remove("opacity-0", "scale-95");
    LogOutConfModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeLogOutConfModal() {
  const LogOutConfModal = document.getElementById("LogOutConfModal");
  const LogOutConfModalBox = document.getElementById("LogOutConfModalBox");

  LogOutConfModalBox.classList.add("opacity-0", "scale-95");
  LogOutConfModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    LogOutConfModal.classList.add("hidden");
    LogOutConfModal.classList.remove("flex");
  }, 300);
}

document.getElementById("LogOutConfModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeLogOutConfModal();
  }
});
/*-------------------------------------- LOGOUT-CONFIRMATION ----------------------------------------*/
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/