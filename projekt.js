document.addEventListener('DOMContentLoaded', function() {
      console.log('Menu page loaded successfully');
    });
  
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".kontakt-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("Ditt mail har skickats");
    
  });
});
document.addEventListener('DOMContentLoaded'), () => {
  const cartCount = document.getElementById('cart-count');
  const priceTags = document.querySelectorAll('.price-tag');
}

const cartCount = document.getElementById('cart-count');
const burgerImages = document.querySelectorAll('burger.png');

let cartItems = 0;

burgerImages.forEach(img => {
  img.addEventListener('click', () => {
    
    cartItems++;
    cartCount.textContent = cartItems;

    
    img.style.transform = 'scale(1.2)';
    setTimeout(() => img.style.transform = 'scale(1)', 200);
  });
});
