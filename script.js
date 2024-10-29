function showTab(tabName) {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
    var tabButtons = document.querySelectorAll('.tab-button');

    if (tabName === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    }
}

function validateSignup() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;
    var errorMessage = document.getElementById('signup-error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    if (username && password && confirmPassword) {
        alert("Sign Up successful!");
        return true; 
    } else {
        errorMessage.textContent = "All fields are required!";
        return false;
    }
}
