function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "student" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userType", "student");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      "❌ Wrong username or password";
  }
}

// NEW: Guest Login
function guestLogin() {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userType", "guest");
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userType");
  window.location.href = "index.html";
}

// PROTECT DASHBOARD
if (window.location.pathname.includes("dashboard")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}