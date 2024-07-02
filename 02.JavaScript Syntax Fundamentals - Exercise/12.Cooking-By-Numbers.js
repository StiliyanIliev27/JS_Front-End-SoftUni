function cookingByNumbers(number, com1, com2, com3, com4, com5){
    let numberTemp = number;    
   
    for(let i = 1; i <= 5; i++){
        let currentCom = i === 1 ? com1 :
            i === 2 ? com2 : i === 3 ? com3 : 
            i === 4 ? com4 : com5;

        switch(currentCom){
            case 'chop':
                numberTemp /= 2;
            break;
            case 'dice':
                numberTemp = Math.sqrt(numberTemp);
            break;
            case 'spice':
                numberTemp += 1;
            break;
            case 'bake':
                numberTemp *= 3;
            break;
            default:
                numberTemp = numberTemp - (numberTemp * 0.2); 
            break;
        }    
        console.log(numberTemp);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
