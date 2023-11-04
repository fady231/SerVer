const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInput.value;

    fetch('/SignIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === 'ok') {
            message.textContent = 'Login successful';
        } else {
            message.textContent = 'Wrong password. Try again.';
        }
    })
    .catch((error) => {
        console.error(error);
        message.textContent = 'An error occurred. Please try again later.';
    });
});
