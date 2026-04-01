// ============================================
// COLLECTIONS.JS — Filter & Nav
// ============================================

// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}


// --- FILTER PRODUCTS ---
// This runs when the user clicks a filter button
function filterProducts(clickedBtn) {

  // 1. Find which category was clicked (from the button's data-filter attribute)
  var category = clickedBtn.getAttribute('data-filter');

  // 2. Highlight the clicked button, remove highlight from others
  var allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  clickedBtn.classList.add('active');

  // 3. Loop through every product card and show/hide it
  var allCards = document.querySelectorAll('.product-card');
  allCards.forEach(function (card) {
    var cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) {
      card.classList.remove('hidden'); // show it
    } else {
      card.classList.add('hidden');    // hide it
    }
  });
}
