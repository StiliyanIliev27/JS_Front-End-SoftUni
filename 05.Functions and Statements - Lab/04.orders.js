function totalPriceOfAnOrder(product, quantity){
    function priceOfTheProduct(product){
        let price = 0;
        switch(product){
            case 'coffee':
                price = 1.50;
            break;
            case 'water':
                price = 1.00;
            break;
            case 'coke':
                price = 1.40;
            break;
            case 'snacks':
                price = 2.00;
            break;
        }
        return price;
    }
    const price = priceOfTheProduct(product) * quantity;
    console.log(price.toFixed(2));
}

totalPriceOfAnOrder('water', 5);
totalPriceOfAnOrder('coffee', 2);
