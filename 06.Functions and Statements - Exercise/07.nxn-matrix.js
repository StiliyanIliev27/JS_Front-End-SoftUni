function matrix(input){
    const getNumberNTimes = (number, separator = ' ') => {
        return `${number}${separator}`.repeat(input).trim();
    };
    for(let i = 0; i < input; i++){
        console.log(getNumberNTimes(input));
    }
}

matrix(3);
matrix(7);