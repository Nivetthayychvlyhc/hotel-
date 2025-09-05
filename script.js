// Hotel Website Script

// --- Smooth Scroll for Navigation Links ---
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- Booking Form Submission ---
const bookingForm = document.querySelector("#booking form");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = bookingForm.querySelector("input[type='text']").value;
    const roomType = bookingForm.querySelector("select").value;

    alert(`Thank you ${name}! Your ${roomType} has been booked successfully.`);
    bookingForm.reset();
  });
}

// --- Optional Dark Mode Toggle ---
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 16px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.background = "#0f766e";
toggleBtn.style.color = "#fff";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.background = "#1e293b";
    document.body.style.color = "#f8fafc";
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#1e293b";
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
