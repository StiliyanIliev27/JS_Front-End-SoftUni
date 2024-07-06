function solve(input = []){
    let oddSum = 0;
    let evenSum = 0;

    input.filter((num) => num % 2 !== 0)
    .forEach(function(num){
        oddSum += num;
    });
    input.filter((num) => num % 2 === 0)
    .forEach(function(num){
        evenSum += num;
    });

    const result = evenSum - oddSum;

    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);