/*------------------------------------------- JS FOR CUSTOM-SUGGESTION-BOX START ------------------------------------------*/
/*-------------------------------------- LAB-VISIT-BOOKING-SEARCH-SUGGESTION-BOX ----------------------------------------*/
const BookingTestInput = document.getElementById("BookingTestSearchInput");
const BookingTestBox = document.getElementById("BookingTestSuggestions");

const tests = [
  { name: "CBC Test", price: "₹250" },
  { name: "CBC with ESR", price: "₹350" },
  { name: "CBC Peripheral Smear", price: "₹450" },
  { name: "Lipid Profile", price: "₹700" },
  { name: "Liver Function Test", price: "₹850" }
];

BookingTestInput.addEventListener("input", function () {
  const value = this.value.trim().toLowerCase();

  const result = tests.filter(test =>
    test.name.toLowerCase().includes(value)
  );

  BookingTestBox.innerHTML = value && result.length
    ? result.map(test => `
        <div class="flex items-center justify-between gap-x-3 py-2 px-4 border-b border-solid border-[var(--dark-primary)]/5 cursor-pointer hover:bg-[var(--primary)]/3 active:bg-[var(--primary)]/5">
          <div class="min-w-0 flex-1">
            <h6 class="truncate text-[80%] font-semibold text-[var(--dark-primary)]/90">${test.name}</h6>
            <p class="mt-[2px] text-[70%] font-semibold text-[var(--primary)]/90">${test.price}</p>
          </div>

          <button class="shrink-0 flex items-center rounded-sm border border-[var(--primary)] outline-none px-3 py-[2px] text-[75%] font-semibold text-[var(--primary)]">
            <i class="bi bi-plus text-[140%]"></i> Add
          </button>
        </div>
      `).join("")
    : "";

  BookingTestBox.classList.toggle("hidden", !value || !result.length);
});

document.addEventListener("click", function (e) {
  if (e.target !== BookingTestInput && !BookingTestBox.contains(e.target)) {
    BookingTestBox.classList.add("hidden");
  }
});
/*-------------------------------------- LAB-VISIT-BOOKING-SEARCH-SUGGESTION-BOX ----------------------------------------*/
/*------------------------------------------- JS FOR CUSTOM-SUGGESTION-BOX COMPLETE ------------------------------------------*/