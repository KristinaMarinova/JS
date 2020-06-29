function maxNum(matrix){
    let max = Number.MIN_SAFE_INTEGER;
    for(const row of matrix){
        row.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
    }
    return max;
}
console.log(maxNum(([[20, 50, 10], [8, 33, 145]])));