function carsFactory(array){
    let cars = {};

    array.forEach(element => {
        let details = element.split(" ");
        let command = details[0];

        if(command == "create" && details.length === 2){
            let name = details[1];
           if(!cars.hasOwnProperty(name)){
            cars[name] = {};
           }
        }
        else if(command == "create" && details.length === 4){
            let name = details[1];
            let inherit = details[3];           
            let inheritObject = cars[inherit];              
            if(!cars.hasOwnProperty(name)){
                cars[name] = Object.create(inheritObject);  
            }
        }
        else if(command == "set"){
            let name = details[1];
            let key = details[2];
            let value = details[3];
           if(cars.hasOwnProperty(name)){           
            cars[name][key] = value;
           }
        }
        else if(command == "print"){
            let name = details[1];
            if(cars.hasOwnProperty(name)){
                let car = cars[name];
                let result = [];
                for (let key in car) {
                    result.push(`${key}:${car[key]}`);
                }
                console.log(result.join(", "));
           }
        }
    });
}

carsFactory(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c2']);