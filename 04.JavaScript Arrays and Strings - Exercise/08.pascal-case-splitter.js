function solve(inputString){
    const regex = /[A-Z][a-z]*/g;
    const matches = inputString.matchAll(regex);
    const output = [];
    for(const match of matches){
        output.push(match);
    }
    console.log(output.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');