function solve(stock, ordered){
    function processProducts(products, productsToReturn){
        for(let i = 0; i < products.length / 2; i++){
            const product = products[i + i];
            const quantity = Number(products[i + i + 1]);
            
            if(!productsToReturn[product]){
                productsToReturn[product] = 0;
            }
            productsToReturn[product] += quantity;    
        }
        return productsToReturn;
    }

    const mixedProducts = {};
    processProducts(stock, mixedProducts);
    processProducts(ordered, mixedProducts);

    for(let mixedProduct in mixedProducts){
        console.log(`${mixedProduct} -> ${mixedProducts[mixedProduct]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);