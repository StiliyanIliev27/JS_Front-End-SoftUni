function fruit(typeOfFruit, weight, pricePerKg){
    const weightKg = weight / 1000;
    const price = weightKg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);