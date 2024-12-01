const cart = [];

function addToCart(flower) {
  cart.push(flower);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';
  cart.forEach((item, index) => {
    cartContainer.innerHTML += `<p>${item} <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Logout button functionality
document.getElementById('logout-btn')?.addEventListener('click', function () {
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});
