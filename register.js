document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Here you can send the user data to your backend to save the account
    alert("Account created successfully! Please login.");
    window.location.href = "login.html";
});
