export function openTest() {
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("button-call").style.display = "none";
}

export function closeTest() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("button-call").style.display = "block";
}

export function init() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById('button-call').addEventListener('click', openTest);
    document.getElementById('cancel-button').addEventListener('click', closeTest);
}