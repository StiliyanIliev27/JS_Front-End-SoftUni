function isPerfectNumber(number){
    const notPerfectNumberMessage = "It's not so perfect.";
    const perfectNumberMessage = 'We have a perfect number!';

    if(number % 2 !== 0){
        console.log(notPerfectNumberMessage);
        return;
    }

    const numberDivided = number / 2;
    let sum = 0;

    for(let i = 1; i <= numberDivided; i++){
        if(number % i !== 0){
            continue;
        }
        sum += i;
    }

    if(sum === number){
        console.log(perfectNumberMessage);
    } else{
        console.log(notPerfectNumberMessage);
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(1236498);