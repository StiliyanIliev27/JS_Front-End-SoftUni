function isNumberPalindrome(numbers){
   
    function checkIfNumberIsPalindrome(numbers){
        numbers.forEach((element) => {
            const reversedNumber = Number(element.toString().split('').reverse().join(''));
            const result = reversedNumber === element ? true : false;
            results.push(result);
        });       
    }

    let results = [];  
    checkIfNumberIsPalindrome(numbers);
   
    results.forEach((result) => {
        console.log(result);
    })
}

isNumberPalindrome([123, 323, 421, 121]);
isNumberPalindrome([32, 2, 232, 1010]);