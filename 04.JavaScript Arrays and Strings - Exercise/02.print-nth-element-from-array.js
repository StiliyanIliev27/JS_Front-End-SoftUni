function solve(input, step){
    let newArr = [];
    input.forEach((element, index) => {
        if(index % step === 0){
            newArr.push(element);
        }
    })
    return newArr;
}

solve(['5','20', '31', '4', '20'], 2);