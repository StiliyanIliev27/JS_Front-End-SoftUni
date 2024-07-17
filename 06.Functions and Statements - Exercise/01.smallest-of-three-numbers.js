function smallestNumbers(num1, num2, num3){
    const arr = [num1, num2, num3];
    const result = arr.sort((a, b) => a - b);
    console.log(result[0]);
}

smallestNumbers(2, 5, 3);
smallestNumbers(600, 342, 123);
smallestNumbers(25, 21, 4);
smallestNumbers(2, 2, 2);