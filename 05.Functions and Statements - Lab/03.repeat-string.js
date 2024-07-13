function repeatTextNtimes(text, repetitions){
    return text.repeat(repetitions);
} 

const firstResult = repeatTextNtimes('abc', 3);
console.log(firstResult);

const secondResult = repeatTextNtimes('String', 2);
console.log(secondResult);