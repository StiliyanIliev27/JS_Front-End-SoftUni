function calc() {
    const firstNumber = document.getElementById('num1').value;
    const secondNumber = document.getElementById('num2').value;
    let resultElement = document.getElementById('sum');
    resultElement.value = Number(firstNumber) + Number(secondNumber);
}
