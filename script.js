function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    // Store login status
    sessionStorage.setItem("loggedIn", "true");

    // Show popup only once
    sessionStorage.setItem("showPopup", "true");

    // Redirect to home page
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials");
  }
}

setTimeout(() => {
  document.getElementById("loginSuccessPopup").style.display = "none";
  window.location.href = "home.html";
}, 3000); // 9 seconds
