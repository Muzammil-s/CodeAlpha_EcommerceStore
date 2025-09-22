// frontend/cart.js
const CART_KEY = "cart";

function loadCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const cart = loadCart();
  container.innerHTML = "";

  if (!cart.length) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    updateSummary(cart);
    return;
  }

  cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-row";
    el.innerHTML = `
      <img src="${item.image || 'https://via.placeholder.com/120x80'}" alt="${escapeHtml(item.name)}" />
      <div class="cart-info">
        <h4>${escapeHtml(item.name)}</h4>
        <p>Price: $${Number(item.price).toFixed(2)}</p>
        <div class="qty-controls">
          <button class="dec" data-id="${item.id}">-</button>
          <span class="qty">${item.qty}</span>
          <button class="inc" data-id="${item.id}">+</button>
          <button class="remove" data-id="${item.id}" style="margin-left:10px;background:#f66;">Remove</button>
        </div>
      </div>
      <div class="item-total">$${(item.price * item.qty).toFixed(2)}</div>
    `;
    container.appendChild(el);
  });

  // attach events
  container.querySelectorAll(".inc").forEach(b => {
    b.addEventListener("click", () => changeQty(b.dataset.id, 1));
  });
  container.querySelectorAll(".dec").forEach(b => {
    b.addEventListener("click", () => changeQty(b.dataset.id, -1));
  });
  container.querySelectorAll(".remove").forEach(b => {
    b.addEventListener("click", () => removeItem(b.dataset.id));
  });

  updateSummary(cart);
}

function changeQty(id, delta) {
  const cart = loadCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].qty = Math.max(1, (cart[idx].qty || 1) + delta);
  saveCart(cart);
}

function removeItem(id) {
  let cart = loadCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
}

function updateSummary(cart) {
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  const total = cart.reduce((s, i) => s + (Number(i.qty || 0) * Number(i.price || 0)), 0);
  document.getElementById("summary-count").innerText = `Items: ${count}`;
  document.getElementById("summary-total").innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  const cart = loadCart();
  if (!cart.length) return alert("Cart is empty.");
  // simulate checkout
  alert(`Checkout simulated. Total: $${cart.reduce((s,i)=>s + i.price * i.qty,0).toFixed(2)}`);
  localStorage.removeItem(CART_KEY);
  renderCart();
}

// small helper
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkout-btn").addEventListener("click", checkout);
  document.getElementById("clear-btn").addEventListener("click", () => {
    if (confirm("Clear cart?")) {
      localStorage.removeItem(CART_KEY);
      renderCart();
    }
  });
  renderCart();
});
