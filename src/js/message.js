export function showResult(message) {
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = message;
    resultMessage.style.display = "block";
}

export function hideResult() {
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
}