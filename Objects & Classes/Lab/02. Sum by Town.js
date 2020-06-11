function sumOfTowns(array){
    let object = {};

    for (let i = 0; i < array.length; i+=2) {
        const key = array[i];
        const value = array[i + 1];
        
        if(object.hasOwnProperty(key)){
            object[key] += Number(value);
        }
        else{
            object[key] = Number(value);
        }
    }
    console.log(JSON.stringify(object));
}
sumOfTowns(['Sofia','20','Varna','3','Sofia','5','Varna','4']);