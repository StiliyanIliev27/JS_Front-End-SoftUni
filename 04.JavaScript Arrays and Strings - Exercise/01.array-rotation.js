function solve(input, rotations){
    let inputTemp = input;
    for(let i = 0; i < rotations; i++){
        const firstElement = inputTemp.shift();
        inputTemp.push(firstElement);
    }
    const result = inputTemp.join(' ');
    console.log(result);
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);