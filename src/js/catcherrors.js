const numbInput = document.getElementById('number-form');
const errorMessage = document.getElementById('error-message');
const calculateButton = document.getElementById('calculate-button');
/*const passwordInput = document.getElementById('login-password');
const rememberCheckbox = document.getElementById('login-remember');
const loginBtn = document.getElementById('login-btn');*/

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

calculateButton.addEventListener('click', async function() {
    hideError();
    
    const invalidNumb = Number.length != 8;
    const invalidString = !Number;
    
    if (invalidNumb) {
        showError('Introduce un número de 8 dígitos');
        numbInput.focus();
        return;
    }
    
    if (invalidString) {
        showError('Introduce un número valido');
        numbInput.focus();
        return;
    }
})