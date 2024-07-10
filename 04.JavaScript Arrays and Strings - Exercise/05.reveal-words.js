function solve(words, text){
    const specialWords = words.split(', ');
    let result = text;
    specialWords.forEach((word) => {
        result = result.replace('*'.repeat(word.length), word);
    });   
    console.log(result);
}

solve('great','softuni is ***** place for learning new programming languages');
solve('great, learning','softuni is ***** place for ******** new programming languages');