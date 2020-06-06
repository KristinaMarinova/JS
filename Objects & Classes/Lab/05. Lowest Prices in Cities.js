function lowestPricesInCities(array){

    let towns = [];
    let townsList=[];
    array.forEach(element => {
        let details = element.split(" | ");
        let town = details[0];
        let product = details[1];
        let price = Number(details[2]);

        if(towns.some(e => e.product === product && e.town === town)){           
            let obj = towns.find(e => e.product === product && e.town === town);
            obj.price = price;
        }
        else{           
            let obj = {
                town: town,
                product: product,
                price: price,
            };
            towns.push(obj);
        }
    });  

    let distArray = [];

    for (let index = 0; index < towns.length; index++) {
        const element = towns[index];
        
        if(distArray.some(e => e.product === element.product)){
            let obj = distArray.find(e => e.product === element.product);
            if(obj.price > element.price){
                obj.town = element.town,
                obj.price = element.price
            }
        }
        else{
            distArray.push(element);
        }
    }

   
    distArray.forEach(element => {
        console.log(`${element.product} -> ${element.price} (${element.town})`)
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