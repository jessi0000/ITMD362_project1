document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let errors = [];

    if (!username || username.length < 3) {
        errors.push("Username must be at least 3 characters long.");
    }

    if (!email.includes('@')) {
        errors.push("Please enter a valid email address.");
    }

    if (!password || password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    if (errors.length > 0) {
        alert("Errors:\n" + errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
    }
});
