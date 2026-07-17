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