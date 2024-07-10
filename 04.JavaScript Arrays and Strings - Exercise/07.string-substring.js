function solve(word, text){
    const tempText = text.toLocaleLowerCase();
    const searchWord = tempText.includes(word);
    console.log(searchWord ? word : `${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');