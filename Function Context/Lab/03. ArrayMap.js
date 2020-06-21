function arrayMap(array, func) {
    return array.reduce((acc, item) => [...acc, func(item)], [])
}

// let arr = [1,2,3,4];
// let func = (x)=>x*2;
// console.log(result(arr,func));

//let nums = [1,2,3,4,5];
//console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]