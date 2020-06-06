function sumOfTowns(array) {

    let obj = {};

    for (let i = 0; i < array.length; i += 2) {
        const key = array[i];
        const value = array[i + 1];

        if (obj.hasOwnProperty(key)) {
            obj[key] += Number(value);
        }
        else{
            obj[key] = Number(value);
        }

    }
    console.log(JSON.stringify(obj));
}
sumOfTowns(['Sofia','20','Varna','3','Sofia','5','Varna','4']);