function solve(text, startIndex, countOfElements){
    const endIndex = startIndex + countOfElements;
    const result = text.substring(startIndex, endIndex);
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);