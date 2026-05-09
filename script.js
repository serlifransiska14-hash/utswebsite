// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    if (username === "" || password === "") {

      loginMessage.textContent =
        "Username dan password wajib diisi";

      loginMessage.style.color = "red";

    } else {

      loginMessage.textContent = "Login berhasil";

      loginMessage.style.color = "green";

      localStorage.setItem("username", username);

      setTimeout(function() {

        window.location.href = "dashboard.html";

      }, 1000);
    }
  });
}

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const nama =
      document.getElementById("nama").value;

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("regPassword").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    const registerMessage =
      document.getElementById("registerMessage");

    if (
      nama === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {

      registerMessage.textContent =
        "Semua data wajib diisi";

      registerMessage.style.color = "red";

    } else if (password !== confirmPassword) {

      registerMessage.textContent =
        "Password tidak sama";

      registerMessage.style.color = "red";

    } else {

      registerMessage.textContent =
        "Register berhasil";

      registerMessage.style.color = "green";
    }
  });
}

// LUPA PASSWORD
const forgotForm =
  document.getElementById("forgotForm");

if (forgotForm) {

  forgotForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const email =
      document.getElementById("forgotEmail").value;

    const forgotMessage =
      document.getElementById("forgotMessage");

    if (email === "") {

      forgotMessage.textContent =
        "Email wajib diisi";

      forgotMessage.style.color = "red";

    } else {

      forgotMessage.textContent =
        "Link reset password telah dikirim";

      forgotMessage.style.color = "green";
    }
  });
}

// DASHBOARD
const welcomeText =
  document.getElementById("welcomeText");

if (welcomeText) {

  const username =
    localStorage.getItem("username");

  welcomeText.textContent =
    "Selamat datang, " + username;
}

// LOGOUT
const logoutBtn =
  document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", function() {

    localStorage.removeItem("username");

    window.location.href = "login.html";
  });
}