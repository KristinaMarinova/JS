function oddNum(arr){
    const result = [];
    for (let i = 1; i < arr.length; i+=2) {
        result.unshift(arr[i] * 2);
    }
    return result.join(' ');
}

console.log(oddNum([10, 15, 20, 25, 5]));