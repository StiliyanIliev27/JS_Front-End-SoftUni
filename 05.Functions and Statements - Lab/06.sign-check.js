function signCheck(numOne, numTwo, numThree){
    let result = 'Positive';

    if(numOne > 0 && numTwo > 0 && numThree < 0){
        result = 'Negative';
    } else if(numTwo > 0 && numThree > 0 && numOne < 0){
        result = 'Negative';
    } else if(numOne > 0 && numThree > 0 && numTwo < 0){
        result = 'Negative';
    } else if(numOne < 0 && numTwo < 0 && numThree < 0){
        result = 'Negative';
    }

    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);