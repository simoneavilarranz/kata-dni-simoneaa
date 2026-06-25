import { dniLetter } from "./calculator.js";
import { showResult, hideResult } from "./message.js";

const numbInput = document.getElementById("number-form");
const calculateButton = document.getElementById("calculate-button");

export function initCalculator() {
    calculateButton.addEventListener("click", function () {
        hideResult();

        if (!/^\d{8}$/.test(numbInput.value)) {
            showResult("El dato introducido es incorrecto");
            numbInput.focus();
            return;
        }

        const letra = dniLetter(numbInput.value);
        showResult(`La letra de tu DNI es ${letra}`);
    });
}