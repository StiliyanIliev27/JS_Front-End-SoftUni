function sameNumbers(number){
    let numberTemp = number;
    const lastDigit = numberTemp % 10;
    numberTemp = parseInt(numberTemp / 10);
    let sum = lastDigit;
    let isSame = true;

    while(numberTemp > 0){
        if(numberTemp % 10 !== lastDigit){
            isSame = false;
        }

        sum += numberTemp % 10;
        numberTemp = parseInt(numberTemp / 10);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);