// CONTACT.JS — Contact form & nav


// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}


// --- CONTACT FORM SUBMISSION ---
function submitContact(event) {
  event.preventDefault(); // stop the page from reloading

  var message = document.getElementById('contactMessage');
  var name    = document.getElementById('cName').value.trim();
  var email   = document.getElementById('cEmail').value.trim();

  // Basic email check
  if (!email.includes('@') || !email.includes('.')) {
    message.style.color = '#cc0000';
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  // Success
  message.style.color = '#888';
  message.textContent =
    'Thank you, ' + name + '. Your message has been received. ' +
    'We will get back to you within 24–48 hours.';

  document.getElementById('contactForm').reset();
}
