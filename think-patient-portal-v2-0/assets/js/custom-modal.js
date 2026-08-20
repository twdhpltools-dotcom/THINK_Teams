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

/*-------------------------------------- PARAMETER-LIST ----------------------------------------*/
function openParamListModal() {
  const ParamListModal = document.getElementById("ParamListModal");
  const ParamListModalBox = document.getElementById("ParamListModalBox");

  ParamListModal.classList.remove("hidden");
  ParamListModal.classList.add("flex");

  setTimeout(() => {
    ParamListModalBox.classList.remove("opacity-0", "scale-95");
    ParamListModalBox.classList.add("opacity-100", "scale-100");
  }, 10);
}

function closeParamListModal() {
  const ParamListModal = document.getElementById("ParamListModal");
  const ParamListModalBox = document.getElementById("ParamListModalBox");

  ParamListModalBox.classList.add("opacity-0", "scale-95");
  ParamListModalBox.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    ParamListModal.classList.add("hidden");
    ParamListModal.classList.remove("flex");
  }, 300);
}

document.getElementById("ParamListModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeParamListModal();
  }
});
/*-------------------------------------- PARAMETER-LIST ----------------------------------------*/

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
/*-------------------------------------- CUSTOM-MODAL ----------------------------------------*/