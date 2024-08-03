function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');

    const result = Number(firstNumber.value) - Number(secondNumber.value);
    const output = document.getElementById('result');
    output.textContent = result;
}