document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#form-section form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const email = loginForm.querySelector("#email").value;
        const password = loginForm.querySelector("#password").value;
  
        // Example: Check if email and password are valid
        if (email && password) {
          alert("Login successful!");
          // Redirect to another page or perform other actions
        } else {
          alert("Please fill in all fields.");
        }
      });
    }
  });