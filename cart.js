let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice, itemId) {
    const quantity = parseInt(document.getElementById(itemId).value);
    const cartItem = { name: itemName, price: itemPrice, quantity: quantity };
    
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceEl = document.getElementById('total-price');

    cartItemsList.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(cartItemElement);
    });

    cartCount.textContent = cart.length;
    totalPriceEl.textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert(`Thank you for your order! Total: ${totalPrice.toFixed(2)}`);
    cart = [];
    updateCart();
}

