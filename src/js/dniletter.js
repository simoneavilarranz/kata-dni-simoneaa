console.log("dniletter.js cargado");

const numbInput = document.getElementById("number-form");
const resultMessage = document.getElementById("result-message");
const calculateButton = document.getElementById("calculate-button");

export function showResult(message) {
  resultMessage.textContent = message;
  resultMessage.style.display = "block";
}

export function hideResult() {
  resultMessage.textContent = "";
  resultMessage.style.display = "none";
}

const letterList = "TRWAGMYFPDXBNJZSQVHLCKE";

export function dniLetter() {
  let numbResult = parseInt(numbInput.value) % 23;
  let letterPosition = letterList.charAt(numbResult);
  return letterPosition;
}

calculateButton.addEventListener("click", function () {
    hideResult();
    
    if (!/^\d{8}$/.test(numbInput.value)) {
        showResult ("Introduce un número de 8 dígitos y sin letras");
        numbInput.focus();
        return;
    }
    
    const letra = dniLetter();
    showResult (`La letra de tu DNI es ${letra}`);
});
