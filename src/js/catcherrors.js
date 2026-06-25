const numbInput = document.getElementById("number-form");
const errorMessage = document.getElementById("error-message");
const calculateButton = document.getElementById("calculate-button");
/*const passwordInput = document.getElementById('login-password');
const rememberCheckbox = document.getElementById('login-remember');
const loginBtn = document.getElementById('login-btn');*/

export function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

export function hideError() {
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

calculateButton.addEventListener("click", async function () {
  hideError();

  if (!/^\d{8}$/.test(numbInput.value)) {
    showError("Introduce un número de 8 dígitos");
    numbInput.focus();
    return;
  }
});
