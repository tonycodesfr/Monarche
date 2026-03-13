// ============================================
// APPOINTMENTS.JS — Form validation & submit
// ============================================

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}


// --- SET MINIMUM DATE ---
// Prevents users from booking dates in the past.
// Runs as soon as the page loads.
window.addEventListener('load', function () {
  var dateInput = document.getElementById('apptDate');
  var today     = new Date().toISOString().split('T')[0]; // gives "YYYY-MM-DD"
  dateInput.setAttribute('min', today);
});


// --- FORM SUBMISSION ---
// This runs when the user clicks "Book My Appointment"
// The 'event' parameter lets us stop the page from reloading
function submitAppointment(event) {
  event.preventDefault(); // stop default form reload behaviour

  var message = document.getElementById('apptMessage');

  // Collect all field values
  var firstName = document.getElementById('firstName').value.trim();
  var lastName  = document.getElementById('lastName').value.trim();
  var email     = document.getElementById('email').value.trim();
  var phone     = document.getElementById('phone').value.trim();
  var apptType  = document.getElementById('apptType').value;
  var interest  = document.getElementById('interest').value;
  var apptDate  = document.getElementById('apptDate').value;
  var apptTime  = document.getElementById('apptTime').value;

  // The 'required' attribute on inputs handles most validation,
  // but we do one extra check: make sure email contains @ and .
  if (!email.includes('@') || !email.includes('.')) {
    message.style.color = '#cc0000';
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  // All good — show success message and reset the form
  message.style.color = '#888';
  message.textContent =
    'Thank you, ' + firstName + '. Your appointment request for ' +
    apptDate + ' at ' + apptTime +
    ' has been received. We will contact you within 24 hours to confirm.';

  // Reset the form fields back to empty
  document.getElementById('apptForm').reset();
}
