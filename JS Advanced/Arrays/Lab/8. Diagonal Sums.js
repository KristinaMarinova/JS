function diagonalSum(matrix){
    let minDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        minDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - 1 - i];
        
    }
    console.log(minDiagonal, secondDiagonal);
}

diagonalSum([[20, 40],
[10, 60]]);