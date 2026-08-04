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

/*-------------------------------------- TIME-HOUR ----------------------------------------*/
function openTimeHrModal() {
  const TimeHrModal = document.getElementById("TimeHrModal");
  const TimeHrModalBox = document.getElementById("TimeHrModalBox");

  TimeHrModal.classList.remove("hidden");
  TimeHrModal.classList.add("flex");

  setTimeout(() => {
    TimeHrModalBox.classList.remove("opacity-0", "scale-95");
    TimeHrModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeTimeHrModal() {
  const TimeHrModal = document.getElementById("TimeHrModal");
  const TimeHrModalBox = document.getElementById("TimeHrModalBox");

  TimeHrModalBox.classList.add("opacity-0", "scale-95");
  TimeHrModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    TimeHrModal.classList.add("hidden");
    TimeHrModal.classList.remove("flex");
  }, 300);
}

document.getElementById("TimeHrModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeTimeHrModal();
  }
});
/*-------------------------------------- TIME-HOUR ----------------------------------------*/

/*-------------------------------------- TIME-MINUTE ----------------------------------------*/
function openTimeMnModal() {
  const TimeMnModal = document.getElementById("TimeMnModal");
  const TimeMnModalBox = document.getElementById("TimeMnModalBox");

  TimeMnModal.classList.remove("hidden");
  TimeMnModal.classList.add("flex");

  setTimeout(() => {
    TimeMnModalBox.classList.remove("opacity-0", "scale-95");
    TimeMnModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeTimeMnModal() {
  const TimeMnModal = document.getElementById("TimeMnModal");
  const TimeMnModalBox = document.getElementById("TimeMnModalBox");

  TimeMnModalBox.classList.add("opacity-0", "scale-95");
  TimeMnModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    TimeMnModal.classList.add("hidden");
    TimeMnModal.classList.remove("flex");
  }, 300);
}

document.getElementById("TimeMnModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeTimeMnModal();
  }
});
/*-------------------------------------- TIME-MINUTE ----------------------------------------*/

/*-------------------------------------- DOC-CONST-RE-SCHEDULE ----------------------------------------*/
function openDocConstRscheduleModal() {
  const DocConstRscheduleModal = document.getElementById("DocConstRscheduleModal");
  const DocConstRscheduleModalBox = document.getElementById("DocConstRscheduleModalBox");

  DocConstRscheduleModal.classList.remove("hidden");
  DocConstRscheduleModal.classList.add("flex");

  setTimeout(() => {
    DocConstRscheduleModalBox.classList.remove("opacity-0", "scale-95");
    DocConstRscheduleModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeDocConstRscheduleModal() {
  const DocConstRscheduleModal = document.getElementById("DocConstRscheduleModal");
  const DocConstRscheduleModalBox = document.getElementById("DocConstRscheduleModalBox");

  DocConstRscheduleModalBox.classList.add("opacity-0", "scale-95");
  DocConstRscheduleModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    DocConstRscheduleModal.classList.add("hidden");
    DocConstRscheduleModal.classList.remove("flex");
  }, 300);
}

document.getElementById("DocConstRscheduleModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeDocConstRscheduleModal();
  }
});
/*-------------------------------------- DOC-CONST-RE-SCHEDULE ----------------------------------------*/

/*-------------------------------------- DOC-CONST-CANCEL ----------------------------------------*/
function openDocConstCancelModal() {
  const DocConstCancelModal = document.getElementById("DocConstCancelModal");
  const DocConstCancelModalBox = document.getElementById("DocConstCancelModalBox");

  DocConstCancelModal.classList.remove("hidden");
  DocConstCancelModal.classList.add("flex");

  setTimeout(() => {
    DocConstCancelModalBox.classList.remove("opacity-0", "scale-95");
    DocConstCancelModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeDocConstCancelModal() {
  const DocConstCancelModal = document.getElementById("DocConstCancelModal");
  const DocConstCancelModalBox = document.getElementById("DocConstCancelModalBox");

  DocConstCancelModalBox.classList.add("opacity-0", "scale-95");
  DocConstCancelModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    DocConstCancelModal.classList.add("hidden");
    DocConstCancelModal.classList.remove("flex");
  }, 300);
}

document.getElementById("DocConstCancelModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeDocConstCancelModal();
  }
});
/*-------------------------------------- DOC-CONST-CANCEL ----------------------------------------*/

/*-------------------------------------- DOC-CONST-RE-BOOK ----------------------------------------*/
function openDocConstRBookModal() {
  const DocConstRBookModal = document.getElementById("DocConstRBookModal");
  const DocConstRBookModalBox = document.getElementById("DocConstRBookModalBox");

  DocConstRBookModal.classList.remove("hidden");
  DocConstRBookModal.classList.add("flex");

  setTimeout(() => {
    DocConstRBookModalBox.classList.remove("opacity-0", "scale-95");
    DocConstRBookModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeDocConstRBookModal() {
  const DocConstRBookModal = document.getElementById("DocConstRBookModal");
  const DocConstRBookModalBox = document.getElementById("DocConstRBookModalBox");

  DocConstRBookModalBox.classList.add("opacity-0", "scale-95");
  DocConstRBookModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    DocConstRBookModal.classList.add("hidden");
    DocConstRBookModal.classList.remove("flex");
  }, 300);
}

document.getElementById("DocConstRBookModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeDocConstRBookModal();
  }
});
/*-------------------------------------- DOC-CONST-RE-BOOK ----------------------------------------*/

/*-------------------------------------- DOC-CONST-DATE-PICKER ----------------------------------------*/
function openDocConstDPickerModal() {
  const DocConstDPickerModal = document.getElementById("DocConstDPickerModal");
  const DocConstDPickerModalBox = document.getElementById("DocConstDPickerModalBox");

  DocConstDPickerModal.classList.remove("hidden");
  DocConstDPickerModal.classList.add("flex");

  setTimeout(() => {
    DocConstDPickerModalBox.classList.remove("opacity-0", "scale-95");
    DocConstDPickerModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeDocConstDPickerModal() {
  const DocConstDPickerModal = document.getElementById("DocConstDPickerModal");
  const DocConstDPickerModalBox = document.getElementById("DocConstDPickerModalBox");

  DocConstDPickerModalBox.classList.add("opacity-0", "scale-95");
  DocConstDPickerModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    DocConstDPickerModal.classList.add("hidden");
    DocConstDPickerModal.classList.remove("flex");
  }, 300);
}

document.getElementById("DocConstDPickerModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeDocConstDPickerModal();
  }
});
/*-------------------------------------- DOC-CONST-DATE-PICKER ----------------------------------------*/

/*-------------------------------------- EDIT-PROFILE-(HEIGHT) ----------------------------------------*/
function openEditProfileHgtModal() {
  const EditProfileHgtModal = document.getElementById("EditProfileHgtModal");
  const EditProfileHgtModalBox = document.getElementById("EditProfileHgtModalBox");

  EditProfileHgtModal.classList.remove("hidden");
  EditProfileHgtModal.classList.add("flex");

  setTimeout(() => {
    EditProfileHgtModalBox.classList.remove("opacity-0", "scale-95");
    EditProfileHgtModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeEditProfileHgtModal() {
  const EditProfileHgtModal = document.getElementById("EditProfileHgtModal");
  const EditProfileHgtModalBox = document.getElementById("EditProfileHgtModalBox");

  EditProfileHgtModalBox.classList.add("opacity-0", "scale-95");
  EditProfileHgtModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    EditProfileHgtModal.classList.add("hidden");
    EditProfileHgtModal.classList.remove("flex");
  }, 300);
}

document.getElementById("EditProfileHgtModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeEditProfileHgtModal();
  }
});
/*-------------------------------------- EDIT-PROFILE-(HEIGHT) ----------------------------------------*/
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/