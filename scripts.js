
// Login and Registration Form Validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (!email.value || !password.value) {
        if (!email.value) {
            email.classList.add('is-invalid');
        }
        if (!password.value) {
            password.classList.add('is-invalid');
        }
    } else {
        email.classList.remove('is-invalid');
        password.classList.remove('is-invalid');
        alert("Form submitted successfully!");
        // Perform actual form submission here
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.textContent = "Passwords do not match.";
    } else {
        confirmPassword.classList.remove('is-invalid');
        alert("Registration successful!");
        // Perform actual registration logic here
    }
});
