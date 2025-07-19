// Event listener for form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Capture input values
  const name = document.getElementById("name").value.trim();
  const dept = document.getElementById("department").value.trim();
  const room = document.getElementById("room").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Simple field check
  if (!name || !dept || !room || !date || !time) {
    alert("Please fill in all fields!");
    return;
  }

  // Show confirmation message
  const msg = `
    ✅ <strong>${name}</strong> from <strong>${dept}</strong><br>
    Your study room <strong>${room}</strong> has been booked<br>
    on <strong>${date}</strong> at <strong>${time}</strong>.
  `;
  document.getElementById("confirmation").innerHTML = msg;

  // Reset the form
  document.getElementById("bookingForm").reset();
});
