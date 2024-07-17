function findCharactersInRange(firstCh, secondCh){
    const firstChNum = firstCh.charCodeAt();
    const secondChNum = secondCh.charCodeAt();

    const arr = [firstChNum, secondChNum];
    arr.sort((a, b) => a - b);
    const startIndex = arr[0] + 1;
    const endIndex = arr[1] - 1;

    let chArr = [];

    for(let i = startIndex; i <= endIndex; i++){
        chArr.push(String.fromCharCode(i));
    }

    const result = chArr.join(' ');
    console.log(result);
}

findCharactersInRange('a', 'd');
findCharactersInRange('#', ':');
findCharactersInRange('C', '#');
