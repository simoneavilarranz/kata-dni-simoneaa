import { dniLetter } from "./calculator.js";
import { showResult, hideResult } from "./message.js";

export function initCalculator() {
    const numbInput = document.getElementById("number-form");
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", function () {

        const numero = parseInt(numbInput.value);

        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            showResult("El dato introducido es incorrecto");
            numbInput.focus();
            return;
        }

        const letra = dniLetter(numbInput.value);
        showResult(`La letra de tu DNI es ${letra}`);
    });
}