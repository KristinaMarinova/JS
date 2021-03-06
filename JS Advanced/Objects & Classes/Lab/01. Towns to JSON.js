function townsToJson(array){
    let objects = [];

    for (let i = 1; i < array.length; i++) {
        const elements = array[i].split("|")
        .filter(e => e.trim(e.length>0))
        .map(function (item){
            return item.trim()
        });

        const obj = {
            Town: elements[0],
            Latitude: parseFloat(Number(elements[1]).toFixed(2)),
            Longitude: parseFloat(Number(elements[1]).toFixed(2)),
        }
     
        objects.push(obj);
    }
    console.log(JSON.stringify(objects));
}
townsToJson(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])

townsToJson(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |'])