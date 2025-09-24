// frontend/app.js
// ===== Products (40 items) with categories and image paths =====
// frontend/app.js
// ===== Products with realistic names, categories, prices =====
// frontend/app.js
// ===== Products (40) with unique names, categories, prices =====
const products = [
  // T-Shirts (10)
  { id: "tshirt1", name: "Classic Polo Shirt", category: "T-Shirts", description: "Premium cotton polo with button collar.", price: 25, image: "images/tshirt1.jpg" },
  { id: "tshirt2", name: "Graphic Tee", category: "T-Shirts", description: "Trendy graphic print cotton t-shirt.", price: 18, image: "images/tshirt2.jpg" },
  { id: "tshirt3", name: "V-Neck Tee", category: "T-Shirts", description: "Slim-fit v-neck t-shirt for casual wear.", price: 20, image: "images/tshirt3.jpg" },
  { id: "tshirt4", name: "Oversized Hoodie", category: "T-Shirts", description: "Casual oversized hoodie with kangaroo pocket.", price: 35, image: "images/tshirt4.jpg" },
  { id: "tshirt5", name: "Sports Jersey", category: "T-Shirts", description: "Lightweight breathable jersey for workouts.", price: 28, image: "images/tshirt5.jpg" },
  { id: "tshirt6", name: "Henley Shirt", category: "T-Shirts", description: "3-button henley cotton t-shirt.", price: 22, image: "images/tshirt6.jpg" },
  { id: "tshirt7", name: "Long Sleeve Tee", category: "T-Shirts", description: "Comfortable long sleeve casual tee.", price: 27, image: "images/tshirt7.jpg" },
  { id: "tshirt8", name: "Striped Tee", category: "T-Shirts", description: "Modern striped pattern cotton t-shirt.", price: 19, image: "images/tshirt8.jpg" },
  { id: "tshirt9", name: "Basic White Tee", category: "T-Shirts", description: "Everyday classic plain white t-shirt.", price: 15, image: "images/tshirt9.jpg" },
  { id: "tshirt10", name: "Premium Black Tee", category: "T-Shirts", description: "High-quality cotton black t-shirt.", price: 30, image: "images/tshirt10.jpg" },

  // Shoes (10)
  { id: "shoe1", name: "Running Shoes", category: "Shoes", description: "Lightweight breathable running shoes.", price: 60, image: "images/shoe1.jpg" },
  { id: "shoe2", name: "High-top Sneakers", category: "Shoes", description: "Streetwear high-top sneakers.", price: 70, image: "images/shoe2.jpg" },
  { id: "shoe3", name: "Formal Leather Shoes", category: "Shoes", description: "Classic black leather office shoes.", price: 85, image: "images/shoe3.jpg" },
  { id: "shoe4", name: "Casual Slip-ons", category: "Shoes", description: "Comfortable casual slip-on shoes.", price: 45, image: "images/shoe4.jpg" },
  { id: "shoe5", name: "Trail Hiking Boots", category: "Shoes", description: "Durable hiking boots with strong grip.", price: 95, image: "images/shoe5.jpg" },
  { id: "shoe6", name: "Canvas Sneakers", category: "Shoes", description: "Classic low-top canvas sneakers.", price: 40, image: "images/shoe6.jpg" },
  { id: "shoe7", name: "Training Gym Shoes", category: "Shoes", description: "Lightweight gym training shoes.", price: 55, image: "images/shoe7.jpg" },
  { id: "shoe8", name: "Loafers", category: "Shoes", description: "Stylish slip-on leather loafers.", price: 65, image: "images/shoe8.jpg" },
  { id: "shoe9", name: "Sandals", category: "Shoes", description: "Comfortable open-toe sandals.", price: 35, image: "images/shoe9.jpg" },
  { id: "shoe10", name: "Designer Sneakers", category: "Shoes", description: "Premium branded sneakers.", price: 120, image: "images/shoe10.jpg" },

  // Watches (10)
  { id: "watch1", name: "Digital Sports Watch", category: "Watches", description: "Durable digital sports watch.", price: 55, image: "images/watch1.jpg" },
  { id: "watch2", name: "Leather Strap Watch", category: "Watches", description: "Elegant brown leather strap watch.", price: 120, image: "images/watch2.jpg" },
  { id: "watch3", name: "Luxury Gold Watch", category: "Watches", description: "Gold-plated premium luxury watch.", price: 250, image: "images/watch3.jpg" },
  { id: "watch4", name: "Smart Watch", category: "Watches", description: "Touchscreen smartwatch with fitness tracking.", price: 180, image: "images/watch4.jpg" },
  { id: "watch5", name: "Classic Silver Watch", category: "Watches", description: "Silver stainless steel wristwatch.", price: 140, image: "images/watch5.jpg" },
  { id: "watch6", name: "Minimalist Watch", category: "Watches", description: "Clean design minimalist wristwatch.", price: 90, image: "images/watch6.jpg" },
  { id: "watch7", name: "Diver’s Watch", category: "Watches", description: "Water-resistant diver’s watch.", price: 200, image: "images/watch7.jpg" },
  { id: "watch8", name: "Chronograph Watch", category: "Watches", description: "Multi-dial chronograph wristwatch.", price: 160, image: "images/watch8.jpg" },
  { id: "watch9", name: "Titanium Watch", category: "Watches", description: "Lightweight titanium wristwatch.", price: 300, image: "images/watch9.jpg" },
  { id: "watch10", name: "Luxury Diamond Watch", category: "Watches", description: "Luxury watch with diamond accents.", price: 500, image: "images/watch10.jpg" },

  // Bags (10)
  { id: "bag1", name: "Laptop Backpack", category: "Bags", description: "Spacious backpack with laptop sleeve.", price: 45, image: "images/bag1.jpg" },
  { id: "bag2", name: "Travel Duffel Bag", category: "Bags", description: "Durable duffel bag for travel.", price: 65, image: "images/bag2.jpg" },
  { id: "bag3", name: "Casual Shoulder Bag", category: "Bags", description: "Everyday stylish shoulder bag.", price: 40, image: "images/bag3.jpg" },
  { id: "bag4", name: "Leather Handbag", category: "Bags", description: "Premium leather handbag for women.", price: 95, image: "images/bag4.jpg" },
  { id: "bag5", name: "School Backpack", category: "Bags", description: "Lightweight backpack for students.", price: 30, image: "images/bag5.jpg" },
  { id: "bag6", name: "Gym Bag", category: "Bags", description: "Compact gym duffel bag.", price: 38, image: "images/bag6.jpg" },
  { id: "bag7", name: "Messenger Bag", category: "Bags", description: "Classic crossbody messenger bag.", price: 55, image: "images/bag7.jpg" },
  { id: "bag8", name: "Rolling Travel Bag", category: "Bags", description: "Carry-on rolling travel bag.", price: 110, image: "images/bag8.jpg" },
  { id: "bag9", name: "Mini Backpack", category: "Bags", description: "Compact mini backpack for casual outings.", price: 35, image: "images/bag9.jpg" },
  { id: "bag10", name: "Designer Tote Bag", category: "Bags", description: "Luxury branded tote bag.", price: 150, image: "images/bag10.jpg" },
];



// ===== state =====
let currentCategory = "all";

// ===== render product grid (with optional category filter) =====
function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";

  const filtered = (currentCategory === "all")
    ? products
    : products.filter(p => p.category === currentCategory);

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.image}" alt="${escapeHtml(p.name)}">
      <h3 class="prod-title" data-cat="${p.category}">${escapeHtml(p.name)}</h3>
      <p class="cat-name">${escapeHtml(p.category)}</p>
      <p>${escapeHtml(p.description)}</p>
      <p><strong>$${Number(p.price).toFixed(2)}</strong></p>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => {
      addToCart(p);
      updateCartBadge();
      showToast(`${p.name} added to cart`);
    });

    div.appendChild(btn);
    list.appendChild(div);
  });
}

// ===== Cart helpers (localStorage key = 'cart') =====
function loadCart() {
  const raw = localStorage.getItem("cart");
  return raw ? JSON.parse(raw) : [];
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// add product (by object)
function addToCart(product) {
  const cart = loadCart();
  const idx = cart.findIndex(i => i.id === product.id);
  if (idx > -1) cart[idx].qty = (cart[idx].qty || 1) + 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  saveCart(cart);
}

// change qty
function changeQty(id, delta) {
  const cart = loadCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(cart);
  renderCart(); // if on cart page
  updateCartBadge();
}

// remove item
function removeItem(id) {
  let cart = loadCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  updateCartBadge();
}

// clear cart
function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
  updateCartBadge();
}

// checkout (simulate)
function checkout() {
  const cart = loadCart();
  if (!cart.length) return alert("Cart is empty.");

  const orderId = "ORD-" + Math.floor(Math.random()*100000);
  const total = cart.reduce((s, it) => s + it.price * it.qty, 0).toFixed(2);

  alert(`✅ Order placed!\nOrder ID: ${orderId}\nTotal: $${total}\nThank you for shopping.`);

  clearCart();
  window.location.href = "index.html";
}


// ===== render cart page =====
// ===== render cart page =====
function renderCart() {
  const container = document.getElementById("cart-items");
  const summaryCount = document.getElementById("summary-count");
  const summaryTotal = document.getElementById("summary-total");
  if (!container) return;

  const cart = loadCart();
  container.innerHTML = "";
  let total = 0;
  let count = 0;

  if (!cart.length) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;

      const el = document.createElement("div");
      el.className = "cart-item";
      el.innerHTML = `
        <div class="left">
          <img src="${item.image}" alt="${escapeHtml(item.name)}">
          <div>
            <div><strong>${escapeHtml(item.name)}</strong></div>
            <div>$${Number(item.price).toFixed(2)}</div>
          </div>
        </div>
        <div class="right">
          <div class="qty-controls">
            <button class="dec" data-id="${item.id}">-</button>
            <span class="qty">${item.qty}</span>
            <button class="inc" data-id="${item.id}">+</button>
            <button class="remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
      container.appendChild(el);
    });

    // attach handlers
    container.querySelectorAll(".inc").forEach(b => b.addEventListener("click", (e) => changeQty(e.target.dataset.id, 1)));
    container.querySelectorAll(".dec").forEach(b => b.addEventListener("click", (e) => changeQty(e.target.dataset.id, -1)));
    container.querySelectorAll(".remove").forEach(b => b.addEventListener("click", (e) => removeItem(e.target.dataset.id)));
  }

  summaryCount && (summaryCount.textContent = `Items: ${count}`);
  summaryTotal && (summaryTotal.textContent = `Total: $${total.toFixed(2)}`);
}


// ===== nav/category handling =====
function setupCategoryLinks() {
  document.querySelectorAll(".nav-link").forEach(a => {
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      const cat = a.dataset.cat;
      currentCategory = cat === "all" ? "all" : cat;
      renderProducts();
    });
  });

  // clicking product title filters by that product's category
  document.getElementById("product-list")?.addEventListener("click", (ev) => {
    const t = ev.target;
    if (t.classList.contains("prod-title")) {
      const cat = t.dataset.cat;
      currentCategory = cat;
      renderProducts();
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  });
}

// ===== cart badge =====
function updateCartBadge() {
  const cart = loadCart();
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  document.getElementById("cart-count") && (document.getElementById("cart-count").textContent = count);
}

// simple toast
function showToast(message) {
  const t = document.createElement("div");
  t.className = "simple-toast";
  t.innerText = message;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add("visible"), 10);
  setTimeout(() => { t.classList.remove("visible"); setTimeout(() => t.remove(), 300); }, 2000);
}

// escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

// ===== init on load =====
document.addEventListener("DOMContentLoaded", () => {
  setupCategoryLinks();
  renderProducts();
  renderCart();
  updateCartBadge();

  // ✅ User info display
 const userBox = document.getElementById("user-box");
const usernameDisplay = document.getElementById("username-display");
const logoutBtn = document.getElementById("logout-btn");

const user = localStorage.getItem("user");
if (user && usernameDisplay && userBox) {
  const parsed = JSON.parse(user);
  usernameDisplay.textContent = parsed.username;
  userBox.style.display = "inline-flex";
}


  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      alert("👋 Logged out successfully!");
      window.location.href = "login.html";
    });
  }

  // ✅ Cart page buttons
  const checkoutBtn = document.getElementById("checkout-btn");
  const clearBtn = document.getElementById("clear-btn");
  checkoutBtn && checkoutBtn.addEventListener("click", checkout);
  clearBtn && clearBtn.addEventListener("click", () => { 
    if (confirm("Clear cart?")) clearCart(); 
  });
});

function renderProductDetail() {
  const container = document.getElementById("product-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = products.find(pr => pr.id === id);

  if (!p) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="detail-card">
      <img src="${p.image}" alt="${escapeHtml(p.name)}" class="detail-img">
      <div>
        <h2>${escapeHtml(p.name)}</h2>
        <p><em>${escapeHtml(p.category)}</em></p>
        <p>${escapeHtml(p.description)}</p>
        <p><strong>$${p.price.toFixed(2)}</strong></p>
        <button id="add-detail-cart">Add to Cart</button>
      </div>
    </div>
  `;

  document.getElementById("add-detail-cart").addEventListener("click", () => {
    addToCart(p);
    updateCartBadge();
    alert(`${p.name} added to cart`);
  });
}
