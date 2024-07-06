function solve(text, word){
    const result = text.replaceAll(word, '*'.repeat(word.length));

    console.log(result);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');