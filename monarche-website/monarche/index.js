// ============================================
// INDEX.JS — Home page JavaScript
// ============================================

// --- PAGE LOADER ---
// Runs when the whole page (images etc.) has loaded
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');

  // Wait 1 second, then fade out the loader
  setTimeout(function () {
    loader.style.opacity = '0';

    // After the fade (0.5s), fully hide it so it's not clickable
    setTimeout(function () {
      loader.style.display = 'none';
    }, 500);

  }, 1000); // 1000ms = 1 second
});


// --- MOBILE MENU TOGGLE ---
// Called by the ☰ button in the nav
function toggleMenu() {
  var links = document.getElementById('navLinks');
  links.classList.toggle('open'); // add/remove the 'open' class
}


// --- NEWSLETTER SUBSCRIBE ---
// Shows a confirmation message instead of reloading the page
function subscribe() {
  var input   = document.getElementById('emailInput');
  var message = document.getElementById('subMessage');

  // Check that the email field is not empty
  if (input.value.trim() === '') {
    message.style.color = '#cc0000';
    message.textContent = 'Please enter your email address.';
    return;
  }

  // Simple email format check (must contain @ and .)
  if (!input.value.includes('@') || !input.value.includes('.')) {
    message.style.color = '#cc0000';
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  // All good — show success message
  message.style.color = '#888';
  message.textContent = 'Thank you for joining the empire.';
  input.value = ''; // clear the input
}
