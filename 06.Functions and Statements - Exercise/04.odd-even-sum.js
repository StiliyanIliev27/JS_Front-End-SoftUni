function solve(number){
    function printSumEvenAndOddDigits(num){
        let oddSum = 0;
        let evenSum = 0;
        while(num > 0){
            const currentDigit = num % 10;
            if(currentDigit % 2 === 0){
                evenSum += currentDigit;
            } else{
                oddSum += currentDigit;
            }
            num = parseInt(num / 10);
        }
        const result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
        return result;
    }
    console.log(printSumEvenAndOddDigits(number));
}

solve(1000435);
solve(3495892137259234);