function solve(n, input){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(input[i]);
    }
    let output = ' ';
   
    arr.reverse().forEach(function(number) {
        output += number + ' ';
    });

    console.log(output.trim());
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);