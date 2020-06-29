function rotate(array){
    let rotations = Number(array.pop());
    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}
console.log(rotate(['1','2','3','4', '2']));