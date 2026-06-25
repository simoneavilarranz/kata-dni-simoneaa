const letterList = "TRWAGMYFPDXBNJZSQVHLCKE";

export function dniLetter(numero) {
    let numbResult = parseInt(numero) % 23;
    return letterList.charAt(numbResult);
}