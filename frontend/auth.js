// frontend/auth.js

// ✅ Handle Register
async function handleRegister(e) {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert("❌ " + (data.msg || "Registration failed"));
      return;
    }

    alert("✅ Registered successfully! Please log in.");
    window.location.href = "login.html";
  } catch (err) {
    console.error(err);
    alert("Server error, try again later.");
  }
}

// ✅ Handle Login
async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert("❌ " + (data.msg || "Login failed"));
      return;
    }

    // ✅ Save token + user in localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("✅ Welcome back, " + data.user.username + "!");
    window.location.href = "index.html";
  } catch (err) {
    console.error(err);
    alert("Server error, try again later.");
  }
}

// ✅ Attach listeners only if forms exist
document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  if (regForm) regForm.addEventListener("submit", handleRegister);
  if (loginForm) loginForm.addEventListener("submit", handleLogin);
});
