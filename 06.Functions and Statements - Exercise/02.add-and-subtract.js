function solve(firstNum, secondNum, thirdNum){
    function sum(){
        return firstNum + secondNum;
    }
    function subtract(){
        return sum() - thirdNum;
    }
    console.log(subtract());
}   

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);