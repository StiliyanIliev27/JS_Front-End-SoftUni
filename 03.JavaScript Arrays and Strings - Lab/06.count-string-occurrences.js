function solve(text, word){
    const pattern = `\\b${word}\\b`;
    const regEx = new RegExp(pattern, 'g');
    const result = text.match(regEx) || [];

    console.log(result.length);
}

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni');