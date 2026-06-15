/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/

/*-------------------------------------- PAGE-STEP ----------------------------------------*/
function showOnly(stepId) {
  const steps = ["loginScreenContact", "loginScreenOTP", "loginScreenDetails", "mainDashboard"];
  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === stepId) ? "flex" : "none";
  });
}

function loginPortal() {
  const contact = document.getElementById("doctorContact").value.trim();
  const error = document.getElementById("loginError");

  if (contact !== "00") {
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  showOnly("loginScreenOTP");
}

function loginPortal2() {
  const otp = getOTP();
  const error2 = document.getElementById("loginError2");

  if (otp !== "1234") {
    error2.classList.remove("d-none");
    return;
  }

  error2.classList.add("d-none");
  showOnly("loginScreenDetails");
}

function loginPortal3() {
  const select = document.getElementById("doctorProfileSelect");
  const error3 = document.getElementById("loginError3");

  // if (!select.value) {
  //   error3.classList.remove("d-none");
  //   return;
  // }

  error3.classList.add("d-none");
  showOnly("mainDashboard");
}
/*-------------------------------------- PAGE-STEP ----------------------------------------*/

/*-------------------------------------- CANVAS-CHART ----------------------------------------*/
// const canvas = document.getElementById("circleChart");
// const ctx = canvas.getContext("2d");

// const values = [
//   { label: "Completed", value: 72, color: "#0d6efd" },
//   { label: "Pending", value: 18, color: "#20c997" },
//   { label: "Rejected", value: 10, color: "#dc3545" }
// ];

// const total = values.reduce((a, b) => a + b.value, 0);
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2 - 10;
// const radius = 85;
// const lineWidth = 22;

// let progress = 0;
// const duration = 1400;
// let startTime = null;

// function drawBackgroundRing() {
//   ctx.beginPath();
//   ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
//   ctx.strokeStyle = "#e9edf3";
//   ctx.lineWidth = lineWidth;
//   ctx.stroke();
// }

// function drawArc(startAngle, endAngle, color) {
//   ctx.beginPath();
//   ctx.arc(centerX, centerY, radius, startAngle, endAngle);
//   ctx.strokeStyle = color;
//   ctx.lineWidth = lineWidth;
//   ctx.lineCap = "round";
//   ctx.stroke();
// }

// function drawText() {
//   ctx.fillStyle = "#111827";
//   ctx.font = "bold 26px Arial";
//   ctx.textAlign = "center";
//   ctx.fillText(Math.round(progress) + "%", centerX, centerY + 10);

//   ctx.fillStyle = "#6b7280";
//   ctx.font = "14px Arial";
//   ctx.fillText("Performance", centerX, centerY + 34);
// }

// function drawLegend() {
//   const startY = 205;
//   const gap = 22;

//   values.forEach((item, i) => {
//     const y = startY + i * gap;

//     ctx.fillStyle = item.color;
//     ctx.fillRect(35, y - 10, 10, 10);

//     ctx.fillStyle = "#374151";
//     ctx.font = "13px Arial";
//     ctx.textAlign = "left";
//     ctx.fillText(item.label, 52, y);

//     ctx.textAlign = "right";
//     ctx.fillText(item.value + "%", 340, y);
//   });
// }

// function render() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   drawBackgroundRing();

//   let currentAngle = -Math.PI / 2;
//   values.forEach(item => {
//     const slice = (item.value / total) * Math.PI * 2;
//     const sliceEnd = currentAngle + slice * (progress / 100);
//     drawArc(currentAngle, sliceEnd, item.color);
//     currentAngle += slice;
//   });

//   drawText();
//   drawLegend();
// }

// function animate(timestamp) {
//   if (!startTime) startTime = timestamp;
//   const elapsed = timestamp - startTime;
//   const t = Math.min(elapsed / duration, 1);
//   progress = t * 100;
//   render();

//   if (t < 1) requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);
/*-------------------------------------- CANVAS-CHART ----------------------------------------*/

/*-------------------------------------- OTP-INPUT ----------------------------------------*/
const otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 1);
    if (this.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && !this.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

function getOTP() {
  return Array.from(otpInputs).map(input => input.value).join('');
}
/*-------------------------------------- OTP-INPUT ----------------------------------------*/

/*-------------------------------------- CUSTOM-SELECT ----------------------------------------*/
function selectDoctorProfile(value) {
  if (value === "") {
    return;
  }

  console.log("Selected profile:", value);
}
/*-------------------------------------- CUSTOM-SELECT ----------------------------------------*/

/*-------------------------------------- PRE-LOADER ----------------------------------------*/

window.addEventListener("load", function () {
  document.getElementById("preloader").classList.add("hide");
});

/*-------------------------------------- PRE-LOADER ----------------------------------------*/

/*-------------------------------------- PDF-DOWNLOADER ----------------------------------------*/
function downloadPDF() {
  const a = document.createElement("a");
  a.href = "assets/images/sample.pdf";
  a.download = "sample.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
/*-------------------------------------- PDF-DOWNLOADER ----------------------------------------*/

/*-------------------------------------- CARD-SHOW ----------------------------------------*/
document.addEventListener("click", function (e) {
  const header = e.target.closest(".table-card-header");
  if (!header) return;

  const card = header.closest(".sub-heading-card");
  const body = card.querySelector(".table-card-body");

  document.querySelectorAll(".table-card-body").forEach(panel => {
    if (panel !== body) panel.classList.remove("show");
  });

  body.classList.toggle("show");
});
/*-------------------------------------- CARD-SHOW ----------------------------------------*/

/*-------------------------------------- SUBMENU-SHOW ----------------------------------------*/
function toggleSentTrackingMenu() {
  document.getElementById("send_tracking_sub").classList.toggle("show");
}

function toggleReferMenu() {
  document.getElementById("refer_sub").classList.toggle("show");
}
/*-------------------------------------- SUBMENU-SHOW ----------------------------------------*/

function getOTP() {
  return Array.from(otpInputs).map(input => input.value).join('');
}

function showSection(sectionId, btn){
  document.querySelectorAll(".portal-section").forEach(section => {
    section.classList.add("d-none");
  });

  document.getElementById(sectionId).classList.remove("d-none");

  document.querySelectorAll(".nav-btn").forEach(nav => {
    nav.classList.remove("active");
  });

  btn.classList.add("active");

  if(window.innerWidth < 992){
    document.getElementById("sidebar").classList.remove("show");
  }
}

// function toggleSidebar(){
//   document.getElementById("sidebar").classList.toggle("show");
// }

// function closeSidebar(){
//   document.getElementById("sidebar").classList.remove("show");
// }

// function filterByDateRange(tableId, fromId, toId){
//   const from = document.getElementById(fromId).value;
//   const to = document.getElementById(toId).value;

//   document.querySelectorAll(`#${tableId} tbody tr[data-date]`).forEach(row => {
//     const rowDate = row.getAttribute("data-date");

//     if((!from || rowDate >= from) && (!to || rowDate <= to)){
//       row.style.display = "";
//     } else {
//       row.style.display = "none";
//     }
//   });
// }

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = e.target.closest("[onclick='toggleSidebar()']");

  if (
    sidebar.classList.contains("show") &&
    !sidebar.contains(e.target) &&
    !toggleBtn
  ) {
    sidebar.classList.remove("show");
  }
});

function getMoneyValue(text){
  return Number(String(text).replace(/[^0-9.-]+/g, "")) || 0;
}

function formatMoney(value){
  return "₹" + value.toLocaleString("en-IN");
}

function filterPointsTable(){
  const selectedBranch = document.getElementById("pointsBranch").value;
  const from = document.getElementById("pointsFromDate").value;
  const to = document.getElementById("pointsToDate").value;

  let referrerTotal = 0;
  let amountTotal = 0;
  let discountTotal = 0;
  let pointsTotal = 0;

  document.querySelectorAll("#pointsTable tbody tr[data-date]").forEach(row => {
    const rowDate = row.dataset.date;
    const rowBranch = row.dataset.branch;
    const showRow = (!selectedBranch || rowBranch === selectedBranch) && (!from || rowDate >= from) && (!to || rowDate <= to);

    row.style.display = showRow ? "" : "none";

    if(showRow){
      referrerTotal += getMoneyValue(row.cells[5].innerText);
      amountTotal += getMoneyValue(row.cells[6].innerText);
      discountTotal += getMoneyValue(row.cells[7].innerText);
      pointsTotal += getMoneyValue(row.cells[8].innerText);
    }
  });

  document.getElementById("pointsRefTotal").innerText = formatMoney(referrerTotal);
  document.getElementById("pointsAmountTotal").innerText = formatMoney(amountTotal);
  document.getElementById("pointsDiscountTotal").innerText = formatMoney(discountTotal);
  document.getElementById("pointsTotal").innerText = formatMoney(pointsTotal);
}

function filterAppointmentByDate(){
  const selectedDate = document.getElementById("appointmentDate").value;
  const selectedBranch = document.getElementById("appointmentBranch").value;

  document.querySelectorAll("#appointmentTable tbody tr[data-date]").forEach(row => {
    const matchDate = !selectedDate || row.dataset.date === selectedDate;
    const matchBranch = !selectedBranch || row.dataset.branch === selectedBranch;
    row.style.display = matchDate && matchBranch ? "" : "none";
  });
}


function filterBookingTable(){
  const selectedBranch = document.getElementById("bookingBranch").value;
  const selectedType = document.getElementById("bookingType").value;
  const selectedDate = document.getElementById("bookingDate").value;

  document.querySelectorAll("#bookingTable tbody tr[data-date]").forEach(row => {
    const matchBranch = !selectedBranch || row.dataset.branch === selectedBranch;
    const matchType = !selectedType || row.dataset.type === selectedType;
    const matchDate = !selectedDate || row.dataset.date === selectedDate;
    row.style.display = matchBranch && matchType && matchDate ? "" : "none";
  });
}

function openPrescription(button){
  const row = button.closest("tr");

  document.getElementById("rxInvoice").innerText = row.dataset.invoice;
  document.getElementById("rxPatient").innerText = row.dataset.patient;
  document.getElementById("rxAgeGender").innerText = row.dataset.age + " / " + row.dataset.gender;
  document.getElementById("rxContact").innerText = row.dataset.contact;
  document.getElementById("rxQueue").innerText = row.dataset.queue;
  document.getElementById("rxDoctor").innerText = row.dataset.doctor;
  document.getElementById("rxBranch").innerText = row.dataset.branch;
  document.getElementById("rxSchedule").innerText = row.dataset.schedule;

  const prescriptionModal = new bootstrap.Modal(document.getElementById("prescriptionModal"));
  prescriptionModal.show();
}

function filterDoctorsByDepartment(){
  const department = document.getElementById("departmentFilter").value;
  const availability = document.getElementById("availabilityFilter").value;
  const search = document.getElementById("doctorSearch").value.toLowerCase();

  document.querySelectorAll(".doctor-card-wrap").forEach(card => {
    const cardDepartment = card.dataset.department;
    const cardAvailability = card.dataset.availability;
    const cardName = card.dataset.name.toLowerCase();

    const matchDepartment = !department || cardDepartment === department;
    const matchAvailability = !availability || cardAvailability === availability;
    const matchSearch = !search || cardName.includes(search);

    card.style.display = matchDepartment && matchAvailability && matchSearch ? "" : "none";
  });
}
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/