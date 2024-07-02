function vacation(groupQuantity, groupType, dayOfTheWeek){   
    const isFriday = dayOfTheWeek === 'Friday' ? true : false;
    const isSaturday = dayOfTheWeek === 'Saturday' ? true : false;
    const isSunday = dayOfTheWeek === 'Sunday' ? true : false;
    
    const isStudentsGroup = groupType === 'Students' ? true : false;
    const isBusinessGroup = groupType === 'Business' ? true : false;
    const isRegularGroup = groupType === 'Regular' ? true : false;

    let price = 0;

    if(isFriday){
        if(isStudentsGroup){          
            price = 8.45 * groupQuantity;      
            if(groupQuantity >= 30){
                price -= price * 0.15;
            }      
        } else if(isBusinessGroup){
            price = 10.90 * groupQuantity;
            if(groupQuantity >= 100){
                price -= 10.90 * 10;
            }
        } else if(isRegularGroup){
            price = 15 * groupQuantity;
            if(groupQuantity >= 10 && groupQuantity <= 20){
                price -= price * 0.05;
            }
        }
    } else if(isSaturday){
        if(isStudentsGroup){          
            price = 9.80 * groupQuantity;      
            if(groupQuantity >= 30){
                price -= price * 0.15;
            }      
        } else if(isBusinessGroup){
            price = 15.60 * groupQuantity;
            if(groupQuantity >= 100){
                price -= 10.90 * 10;
            }
        } else if(isRegularGroup){
            price = 20 * groupQuantity;
            if(groupQuantity >= 10 && groupQuantity <= 20){
                price -= price * 0.05;
            }
        }
    } else if(isSunday){
        if(isStudentsGroup){          
            price = 10.46 * groupQuantity;      
            if(groupQuantity >= 30){
                price -= price * 0.15;
            }      
        } else if(isBusinessGroup){
            price = 16 * groupQuantity;
            if(groupQuantity >= 100){
                price -= 10.90 * 10;
            }
        } else if(isRegularGroup){
            price = 22.50 * groupQuantity;
            if(groupQuantity >= 10 && groupQuantity <= 20){
                price -= price * 0.05;
            }
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday');
vacation(40, 'Regular', 'Saturday');