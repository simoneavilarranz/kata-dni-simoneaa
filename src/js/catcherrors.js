const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const rememberCheckbox = document.getElementById('login-remember');
const errorMessage = document.getElementById('error-message');
const loginBtn = document.getElementById('login-btn');

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

loginBtn.addEventListener('click', async function() {
    hideError();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    if (!email) {
        showError('Please enter your email address');
        emailInput.focus();
        return;
    }
    
    if (!password) {
        showError('Please enter your password');
        passwordInput.focus();
        return;
    }
})