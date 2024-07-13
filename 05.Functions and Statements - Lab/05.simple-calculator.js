const calculate = (firstNum, secondNum, operator) => {
    let result = 0;
    switch(operator){
        case 'multiply':
            result = firstNum * secondNum;
        break;
        case 'divide':
            result = firstNum / secondNum;
        break;
        case 'add':
            result = firstNum + secondNum;
        break;
        case 'subtract':
            result = firstNum - secondNum;
        break;
    }
    console.log(result);
}

calculate(5, 5, 'multiply');
calculate(40, 8, 'divide');
calculate(12, 19, 'add');
calculate(50, 13, 'subtract');