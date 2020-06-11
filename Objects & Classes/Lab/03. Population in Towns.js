function populationsInTowns(array){
    let object = {};

    for (let i = 0; i < array.length; i++) {
        const elements = array[i].split(" <-> ");
        const key = elements[0];
        const value = Number(elements[1]);
        
        if(obj.hasOwnProperty(key)){
            obj[key] += value;
        }
        else{
            obj[key] = value;
        }   
    }

    for(const key in object){
        console.log(`${key} : ${obj[key]}`)
    }
}