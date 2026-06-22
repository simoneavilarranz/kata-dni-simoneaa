document.getElementById("calculator").style.display ="none";

function openTest() {
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("button-call").style.display = "none";
}

function closeTest() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("button-call").style.display = "block";
}

document.getElementById('button-call').addEventListener('click', openTest);
document.getElementById('cancel-button').addEventListener('click', closeTest);