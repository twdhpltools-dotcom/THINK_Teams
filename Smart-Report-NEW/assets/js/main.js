/*------------------------------------------- JS FOR MAIN START ------------------------------------------*/
/*------------------------------------------- JS FOR RANGE-BAR START ------------------------------------------*/
document.querySelectorAll(".test-parameter-box").forEach(box => {
    const value = parseFloat(box.dataset.value) || 0;
    const percent = Math.max(0, Math.min(100, value));
    const p = percent.toFixed(2) + "%";

    const bar = box.querySelector(".mini-bar");
    const fillBg = box.querySelector(".mini-fill-bg");
    const fill = box.querySelector(".mini-fill");
    const marker = box.querySelector(".mini-marker");
    const text = box.querySelector(".test-parameter-range h3");

    fill.style.width = p;
    fillBg.style.width = `calc(${p} + 8px)`;
    marker.style.left = p;
    text.textContent = value.toFixed(2);

    bar.classList.remove("low", "normal", "high", "border");

    if (value < 50) {
        bar.classList.add("low");
    }
    else if (value > 70) {
        bar.classList.add("high");
    }
    else if (value === 50 || value === 70) {
        bar.classList.add("border");
    }
    else {
        bar.classList.add("normal");
    }
});
/*------------------------------------------- JS FOR RANGE-BAR COMPLETE ------------------------------------------*/
/*------------------------------------------- JS FOR MAIN COMPLETE ------------------------------------------*/