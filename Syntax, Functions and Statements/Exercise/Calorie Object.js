function calorieObject(arr){
    let register = {}; 

    for (let i = 0; i < arr.length; i+=2) {
        register[arr[i]] = +(arr[i + 1]);
    }
    console.log(register);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);