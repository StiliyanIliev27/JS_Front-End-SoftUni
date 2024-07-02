function sumDigits(number){
    let numberTemp = number;
    let sum = 0;
    
    while(numberTemp > 0){
        let currentDigit = numberTemp % 10;
        sum += currentDigit;
        numberTemp = parseInt(numberTemp / 10);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);