/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/
/*-------------------------------------- DASHBOARD-SETUP ----------------------------------------*/
function openDashboardSetupModal() {
  const DashboardSetupModal = document.getElementById("DashboardSetupModal");
  const DashboardSetupModalBox = document.getElementById("DashboardSetupModalBox");

  DashboardSetupModal.classList.remove("hidden");
  DashboardSetupModal.classList.add("flex");

  setTimeout(() => {
    DashboardSetupModalBox.classList.remove("opacity-0", "scale-95");
    DashboardSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeDashboardSetupModal() {
  const DashboardSetupModal = document.getElementById("DashboardSetupModal");
  const DashboardSetupModalBox = document.getElementById("DashboardSetupModalBox");

  DashboardSetupModalBox.classList.add("opacity-0", "scale-95");
  DashboardSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    DashboardSetupModal.classList.add("hidden");
    DashboardSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("DashboardSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeDashboardSetupModal();
  }
});
/*-------------------------------------- DASHBOARD-SETUP ----------------------------------------*/

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

/*-------------------------------------- CONSULTANT-REFER ----------------------------------------*/
function openConsultantReferModal() {
  const ConsultantReferModal = document.getElementById("ConsultantReferModal");
  const ConsultantReferModalBox = document.getElementById("ConsultantReferModalBox");

  ConsultantReferModal.classList.remove("hidden");
  ConsultantReferModal.classList.add("flex");

  setTimeout(() => {
    ConsultantReferModalBox.classList.remove("opacity-0", "scale-95");
    ConsultantReferModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeConsultantReferModal() {
  const ConsultantReferModal = document.getElementById("ConsultantReferModal");
  const ConsultantReferModalBox = document.getElementById("ConsultantReferModalBox");

  ConsultantReferModalBox.classList.add("opacity-0", "scale-95");
  ConsultantReferModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ConsultantReferModal.classList.add("hidden");
    ConsultantReferModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ConsultantReferModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeConsultantReferModal();
  }
});
/*-------------------------------------- CONSULTANT-REFER ----------------------------------------*/

/*-------------------------------------- CENTRE-SETUP ----------------------------------------*/
function openCentreSetupModal() {
  const CentreSetupModal = document.getElementById("CentreSetupModal");
  const CentreSetupModalBox = document.getElementById("CentreSetupModalBox");

  CentreSetupModal.classList.remove("hidden");
  CentreSetupModal.classList.add("flex");

  setTimeout(() => {
    CentreSetupModalBox.classList.remove("opacity-0", "scale-95");
    CentreSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeCentreSetupModal() {
  const CentreSetupModal = document.getElementById("CentreSetupModal");
  const CentreSetupModalBox = document.getElementById("CentreSetupModalBox");

  CentreSetupModalBox.classList.add("opacity-0", "scale-95");
  CentreSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    CentreSetupModal.classList.add("hidden");
    CentreSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("CentreSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeCentreSetupModal();
  }
});
/*-------------------------------------- CENTRE-SETUP ----------------------------------------*/

/*-------------------------------------- CENTRE-ADD ----------------------------------------*/
function openCentreAddModal() {
  const CentreAddModal = document.getElementById("CentreAddModal");
  const CentreAddModalBox = document.getElementById("CentreAddModalBox");

  CentreAddModal.classList.remove("hidden");
  CentreAddModal.classList.add("flex");

  setTimeout(() => {
    CentreAddModalBox.classList.remove("opacity-0", "scale-95");
    CentreAddModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeCentreAddModal() {
  const CentreAddModal = document.getElementById("CentreAddModal");
  const CentreAddModalBox = document.getElementById("CentreAddModalBox");

  CentreAddModalBox.classList.add("opacity-0", "scale-95");
  CentreAddModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    CentreAddModal.classList.add("hidden");
    CentreAddModal.classList.remove("flex");
  }, 300);
}

document.getElementById("CentreAddModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeCentreAddModal();
  }
});
/*-------------------------------------- CENTRE-ADD ----------------------------------------*/

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

/*-------------------------------------- REGISTRATION-REFER ----------------------------------------*/
function openRegReferModal() {
  const RegReferModal = document.getElementById("RegReferModal");
  const RegReferModalBox = document.getElementById("RegReferModalBox");

  RegReferModal.classList.remove("hidden");
  RegReferModal.classList.add("flex");

  setTimeout(() => {
    RegReferModalBox.classList.remove("opacity-0", "scale-95");
    RegReferModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegReferModal() {
  const RegReferModal = document.getElementById("RegReferModal");
  const RegReferModalBox = document.getElementById("RegReferModalBox");

  RegReferModalBox.classList.add("opacity-0", "scale-95");
  RegReferModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegReferModal.classList.add("hidden");
    RegReferModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegReferModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegReferModal();
  }
});
/*-------------------------------------- REGISTRATION-REFER ----------------------------------------*/

/*-------------------------------------- REGISTRATION-REFER-CENTRE ----------------------------------------*/
function openRegReferCentreModal() {
  const RegReferCentreModal = document.getElementById("RegReferCentreModal");
  const RegReferCentreModalBox = document.getElementById("RegReferCentreModalBox");

  RegReferCentreModal.classList.remove("hidden");
  RegReferCentreModal.classList.add("flex");

  setTimeout(() => {
    RegReferCentreModalBox.classList.remove("opacity-0", "scale-95");
    RegReferCentreModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegReferCentreModal() {
  const RegReferCentreModal = document.getElementById("RegReferCentreModal");
  const RegReferCentreModalBox = document.getElementById("RegReferCentreModalBox");

  RegReferCentreModalBox.classList.add("opacity-0", "scale-95");
  RegReferCentreModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegReferCentreModal.classList.add("hidden");
    RegReferCentreModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegReferCentreModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegReferCentreModal();
  }
});
/*-------------------------------------- REGISTRATION-REFER-CENTRE ----------------------------------------*/

/*-------------------------------------- REGISTRATION-REFER-CONSULTANT-SETUP ----------------------------------------*/
function openRegReferConsultantSetupModal() {
  const RegReferConsultantSetupModal = document.getElementById("RegReferConsultantSetupModal");
  const RegReferConsultantSetupModalBox = document.getElementById("RegReferConsultantSetupModalBox");

  RegReferConsultantSetupModal.classList.remove("hidden");
  RegReferConsultantSetupModal.classList.add("flex");

  setTimeout(() => {
    RegReferConsultantSetupModalBox.classList.remove("opacity-0", "scale-95");
    RegReferConsultantSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegReferConsultantSetupModal() {
  const RegReferConsultantSetupModal = document.getElementById("RegReferConsultantSetupModal");
  const RegReferConsultantSetupModalBox = document.getElementById("RegReferConsultantSetupModalBox");

  RegReferConsultantSetupModalBox.classList.add("opacity-0", "scale-95");
  RegReferConsultantSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegReferConsultantSetupModal.classList.add("hidden");
    RegReferConsultantSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegReferConsultantSetupModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegReferConsultantSetupModal();
  }
});
/*-------------------------------------- REGISTRATION-REFER-CONSULTANT-SETUP ----------------------------------------*/

/*-------------------------------------- REGISTRATION-REFER-CONSULTANT ----------------------------------------*/
function openRegReferConsultantModal() {
  const RegReferConsultantModal = document.getElementById("RegReferConsultantModal");
  const RegReferConsultantModalBox = document.getElementById("RegReferConsultantModalBox");

  RegReferConsultantModal.classList.remove("hidden");
  RegReferConsultantModal.classList.add("flex");

  setTimeout(() => {
    RegReferConsultantModalBox.classList.remove("opacity-0", "scale-95");
    RegReferConsultantModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegReferConsultantModal() {
  const RegReferConsultantModal = document.getElementById("RegReferConsultantModal");
  const RegReferConsultantModalBox = document.getElementById("RegReferConsultantModalBox");

  RegReferConsultantModalBox.classList.add("opacity-0", "scale-95");
  RegReferConsultantModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegReferConsultantModal.classList.add("hidden");
    RegReferConsultantModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegReferConsultantModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegReferConsultantModal();
  }
});
/*-------------------------------------- REGISTRATION-REFER-CONSULTANT ----------------------------------------*/

/*-------------------------------------- REGISTRATION-APPOINTMENT ----------------------------------------*/
function openRegAppointmentModal() {
  const RegAppointmentModal = document.getElementById("RegAppointmentModal");
  const RegAppointmentModalBox = document.getElementById("RegAppointmentModalBox");

  RegAppointmentModal.classList.remove("hidden");
  RegAppointmentModal.classList.add("flex");

  setTimeout(() => {
    RegAppointmentModalBox.classList.remove("opacity-0", "scale-95");
    RegAppointmentModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegAppointmentModal() {
  const RegAppointmentModal = document.getElementById("RegAppointmentModal");
  const RegAppointmentModalBox = document.getElementById("RegAppointmentModalBox");

  RegAppointmentModalBox.classList.add("opacity-0", "scale-95");
  RegAppointmentModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegAppointmentModal.classList.add("hidden");
    RegAppointmentModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegAppointmentModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegAppointmentModal();
  }
});
/*-------------------------------------- REGISTRATION-APPOINTMENT ----------------------------------------*/

/*-------------------------------------- REGISTRATION-VERIFY-MOBILE ----------------------------------------*/
function openRegVerifyMobileModal() {
  const RegVerifyMobileModal = document.getElementById("RegVerifyMobileModal");
  const RegVerifyMobileModalBox = document.getElementById("RegVerifyMobileModalBox");

  RegVerifyMobileModal.classList.remove("hidden");
  RegVerifyMobileModal.classList.add("flex");

  setTimeout(() => {
    RegVerifyMobileModalBox.classList.remove("opacity-0", "scale-95");
    RegVerifyMobileModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegVerifyMobileModal() {
  const RegVerifyMobileModal = document.getElementById("RegVerifyMobileModal");
  const RegVerifyMobileModalBox = document.getElementById("RegVerifyMobileModalBox");

  RegVerifyMobileModalBox.classList.add("opacity-0", "scale-95");
  RegVerifyMobileModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegVerifyMobileModal.classList.add("hidden");
    RegVerifyMobileModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegVerifyMobileModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegVerifyMobileModal();
  }
});
/*-------------------------------------- REGISTRATION-VERIFY-MOBILE ----------------------------------------*/

/*-------------------------------------- REGISTRATION-VERIFY-OTP ----------------------------------------*/
function openRegVerifyOtpModal() {
  const RegVerifyOtpModal = document.getElementById("RegVerifyOtpModal");
  const RegVerifyOtpModalBox = document.getElementById("RegVerifyOtpModalBox");

  RegVerifyOtpModal.classList.remove("hidden");
  RegVerifyOtpModal.classList.add("flex");

  setTimeout(() => {
    RegVerifyOtpModalBox.classList.remove("opacity-0", "scale-95");
    RegVerifyOtpModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeRegVerifyOtpModal() {
  const RegVerifyOtpModal = document.getElementById("RegVerifyOtpModal");
  const RegVerifyOtpModalBox = document.getElementById("RegVerifyOtpModalBox");

  RegVerifyOtpModalBox.classList.add("opacity-0", "scale-95");
  RegVerifyOtpModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    RegVerifyOtpModal.classList.add("hidden");
    RegVerifyOtpModal.classList.remove("flex");
  }, 300);
}

document.getElementById("RegVerifyOtpModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeRegVerifyOtpModal();
  }
});
/*-------------------------------------- REGISTRATION-VERIFY-OTP ----------------------------------------*/

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

/*-------------------------------------- WP-SUCCESS ----------------------------------------*/
function openWpSuccessModal() {
  const WpSuccessModal = document.getElementById("WpSuccessModal");
  const WpSuccessModalBox = document.getElementById("WpSuccessModalBox");

  WpSuccessModal.classList.remove("hidden");
  WpSuccessModal.classList.add("flex");

  setTimeout(() => {
    WpSuccessModalBox.classList.remove("opacity-0", "scale-95");
    WpSuccessModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeWpSuccessModal() {
  const WpSuccessModal = document.getElementById("WpSuccessModal");
  const WpSuccessModalBox = document.getElementById("WpSuccessModalBox");

  WpSuccessModalBox.classList.add("opacity-0", "scale-95");
  WpSuccessModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    WpSuccessModal.classList.add("hidden");
    WpSuccessModal.classList.remove("flex");
  }, 300);
}

document.getElementById("WpSuccessModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeWpSuccessModal();
  }
});
/*-------------------------------------- WP-SUCCESS ----------------------------------------*/

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

/*-------------------------------------- REFER-DIAGNOSTICS-SETUP ----------------------------------------*/
function openReferDiagnosticsSetupModal() {
  const ReferDiagnosticsSetupModal = document.getElementById("ReferDiagnosticsSetupModal");
  const ReferDiagnosticsSetupModalBox = document.getElementById("ReferDiagnosticsSetupModalBox");

  ReferDiagnosticsSetupModal.classList.remove("hidden");
  ReferDiagnosticsSetupModal.classList.add("flex");

  setTimeout(() => {
    ReferDiagnosticsSetupModalBox.classList.remove("opacity-0", "scale-95");
    ReferDiagnosticsSetupModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeReferDiagnosticsSetupModal() {
  const ReferDiagnosticsSetupModal = document.getElementById("ReferDiagnosticsSetupModal");
  const ReferDiagnosticsSetupModalBox = document.getElementById("ReferDiagnosticsSetupModalBox");

  ReferDiagnosticsSetupModalBox.classList.add("opacity-0", "scale-95");
  ReferDiagnosticsSetupModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ReferDiagnosticsSetupModal.classList.add("hidden");
    ReferDiagnosticsSetupModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ReferDiagnosticsSetupModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeReferDiagnosticsSetupModal();
  }
});
/*-------------------------------------- REFER-DIAGNOSTICS-SETUP ----------------------------------------*/

/*-------------------------------------- CLINIC-BLOCK ----------------------------------------*/
function openClinicBlockModal() {
  const ClinicBlockModal = document.getElementById("ClinicBlockModal");
  const ClinicBlockModalBox = document.getElementById("ClinicBlockModalBox");

  ClinicBlockModal.classList.remove("hidden");
  ClinicBlockModal.classList.add("flex");

  setTimeout(() => {
    ClinicBlockModalBox.classList.remove("opacity-0", "scale-95");
    ClinicBlockModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeClinicBlockModal() {
  const ClinicBlockModal = document.getElementById("ClinicBlockModal");
  const ClinicBlockModalBox = document.getElementById("ClinicBlockModalBox");

  ClinicBlockModalBox.classList.add("opacity-0", "scale-95");
  ClinicBlockModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ClinicBlockModal.classList.add("hidden");
    ClinicBlockModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ClinicBlockModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeClinicBlockModal();
  }
});
/*-------------------------------------- CLINIC-BLOCK ----------------------------------------*/

/*-------------------------------------- CLINIC-ADD ----------------------------------------*/
function openClinicAddModal() {
  const ClinicAddModal = document.getElementById("ClinicAddModal");
  const ClinicAddModalBox = document.getElementById("ClinicAddModalBox");

  ClinicAddModal.classList.remove("hidden");
  ClinicAddModal.classList.add("flex");

  setTimeout(() => {
    ClinicAddModalBox.classList.remove("opacity-0", "scale-95");
    ClinicAddModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeClinicAddModal() {
  const ClinicAddModal = document.getElementById("ClinicAddModal");
  const ClinicAddModalBox = document.getElementById("ClinicAddModalBox");

  ClinicAddModalBox.classList.add("opacity-0", "scale-95");
  ClinicAddModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ClinicAddModal.classList.add("hidden");
    ClinicAddModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ClinicAddModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeClinicAddModal();
  }
});
/*-------------------------------------- CLINIC-ADD ----------------------------------------*/

/*-------------------------------------- SCHEDULE-ADD ----------------------------------------*/
function openScheduleAddModal() {
  const ScheduleAddModal = document.getElementById("ScheduleAddModal");
  const ScheduleAddModalBox = document.getElementById("ScheduleAddModalBox");

  ScheduleAddModal.classList.remove("hidden");
  ScheduleAddModal.classList.add("flex");

  setTimeout(() => {
    ScheduleAddModalBox.classList.remove("opacity-0", "scale-95");
    ScheduleAddModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeScheduleAddModal() {
  const ScheduleAddModal = document.getElementById("ScheduleAddModal");
  const ScheduleAddModalBox = document.getElementById("ScheduleAddModalBox");

  ScheduleAddModalBox.classList.add("opacity-0", "scale-95");
  ScheduleAddModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ScheduleAddModal.classList.add("hidden");
    ScheduleAddModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ScheduleAddModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeScheduleAddModal();
  }
});
/*-------------------------------------- SCHEDULE-ADD ----------------------------------------*/

/*-------------------------------------- SCHEDULE-EDIT ----------------------------------------*/
function openScheduleEditModal() {
  const ScheduleEditModal = document.getElementById("ScheduleEditModal");
  const ScheduleEditModalBox = document.getElementById("ScheduleEditModalBox");

  ScheduleEditModal.classList.remove("hidden");
  ScheduleEditModal.classList.add("flex");

  setTimeout(() => {
    ScheduleEditModalBox.classList.remove("opacity-0", "scale-95");
    ScheduleEditModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeScheduleEditModal() {
  const ScheduleEditModal = document.getElementById("ScheduleEditModal");
  const ScheduleEditModalBox = document.getElementById("ScheduleEditModalBox");

  ScheduleEditModalBox.classList.add("opacity-0", "scale-95");
  ScheduleEditModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ScheduleEditModal.classList.add("hidden");
    ScheduleEditModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ScheduleEditModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeScheduleEditModal();
  }
});
/*-------------------------------------- SCHEDULE-EDIT ----------------------------------------*/

/*-------------------------------------- CLINIC-CANCEL-CONFIRMATION ----------------------------------------*/
function openSchCancelConfModal() {
  const SchCancelConfModal = document.getElementById("SchCancelConfModal");
  const SchCancelConfModalBox = document.getElementById("SchCancelConfModalBox");

  SchCancelConfModal.classList.remove("hidden");
  SchCancelConfModal.classList.add("flex");

  setTimeout(() => {
    SchCancelConfModalBox.classList.remove("opacity-0", "scale-95");
    SchCancelConfModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeSchCancelConfModal() {
  const SchCancelConfModal = document.getElementById("SchCancelConfModal");
  const SchCancelConfModalBox = document.getElementById("SchCancelConfModalBox");

  SchCancelConfModalBox.classList.add("opacity-0", "scale-95");
  SchCancelConfModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    SchCancelConfModal.classList.add("hidden");
    SchCancelConfModal.classList.remove("flex");
  }, 300);
}

document.getElementById("SchCancelConfModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeSchCancelConfModal();
  }
});
/*-------------------------------------- CLINIC-CANCEL-CONFIRMATION ----------------------------------------*/

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