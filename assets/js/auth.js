const users = JSON.parse(localStorage.getItem('users')) || [];

// Register form submission
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user already exists
    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose another.');
        return;
    }

    // Save user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now login.');
    window.location.href = 'login.html';
});

// Login form submission
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
