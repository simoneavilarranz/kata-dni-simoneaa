// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { initCalculator } from "../js/dom.js";
import { showResult } from "../js/message.js";

describe("InvalidNumber", () => {
  it("should show error for invalid input", () => {
    document.body.innerHTML = '<input type="text" id="number-form"><div id="result-message"></div><button type="button" id="calculate-button">Calcular</button>';
    initCalculator();
    const numbInput = document.getElementById("number-form");
    numbInput.value = "abcd";
    const calculateButton = document.getElementById("calculate-button");
    calculateButton.click();
    const resultMessage = document.getElementById("result-message");
    expect(resultMessage.textContent).toBe("El dato introducido es incorrecto");
  });
});
