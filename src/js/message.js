const resultMessage = document.getElementById("result-message");

export function showResult(message) {
    resultMessage.textContent = message;
    resultMessage.style.display = "block";
}

export function hideResult() {
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
}