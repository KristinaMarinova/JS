function lowestPricesInCities(array){
    let towns = [];
    let townsList = [];
    array.forEach(element => {
        let details = element.split(" | ");
        let town = details[0];
        let product = details[1];
        let price = Number(details[2]); 
    });

}
lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']);