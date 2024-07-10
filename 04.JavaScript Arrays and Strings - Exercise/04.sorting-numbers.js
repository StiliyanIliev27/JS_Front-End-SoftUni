function solve(input){
    let newArr = [];
    input.sort((a, b) => a - b);
    let index = 0;
    for(let i = 0; i < input.length; i++){
        newArr[index++] = input[i];
        if(index === input.length){
            break;
        }
        newArr[index++] = input[input.length - 1 - i];
        if(index === input.length){
            break;
        }
    }
    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);