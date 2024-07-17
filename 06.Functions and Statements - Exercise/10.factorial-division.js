function factorialDivision(firstNumber, secondNumber){
    function factorialCalculate(n){
        if(n === 1 || n === 0){
            return 1;
        }
        return n * (factorialCalculate(n - 1));
    }

    const firstFactorial = factorialCalculate(firstNumber);
    const secondFactorial = factorialCalculate(secondNumber);

    const result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);