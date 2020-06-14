function subtract() {
    let firstField = document.getElementById("firstNumber");
    let secondField  = document.getElementById("secondNumber");
    let resultField  = document.getElementById("result");

    let result = Number(firstField.value) - Number(secondField.value);
    resultField.textContent = result;
}