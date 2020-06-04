function print(array){
    let symbol = array.pop();
    return array.join(symbol);
}
console.log(print(['test','test',', ']));