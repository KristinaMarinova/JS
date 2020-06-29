function fruit(name, weightGr, cost){
    let kg = weightGr / 1000;
    let money = kg * cost;
    return `I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${name}.`;
}
console.log(fruit('apple',1563, 2.35))

