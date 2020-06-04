function spiralMatrix(x, y) {
	
    const field = fill(x, y);

    let startRow = 0;
    let startCol = 0;
    let endRow = field.length;
    let endCol = field[startRow].length;

    spiral(startRow, startCol, endRow, endCol, field, 1);
    field.forEach(row => console.log(row.join(' ')));

    function fill(x, y) {
        const matrix = [];
        for (let row = 0; row < x; row++) {
            matrix[row] = [];
            for (let col = 0; col < y; col++) {
                matrix[row].push(false);
            }
        }
        return matrix;
    }

    function spiral(startRow, startCol, endRow, endCol, matrix, value) {
        for (let col = startCol; col < endCol; col++) { //Fills first row
            matrix[startRow][col] = value;
            value++;
        }
        startRow++;
        for (let row = startRow; row < endRow; row++) { //Fills last col
            matrix[row][endCol - 1] = value;
            value++;
        }
        endCol--;
        for (let col = endCol - 1; col >= startCol; col--) { //Fills last row
            matrix[endRow - 1][col] = value;
            value++;
        }
        endRow--;
        for (let row = endRow - 1; row >= startRow; row--) { //Fills first col
            matrix[row][startCol] = value;
            value++;
        }
        startCol++;

        if (endRow !== 0 || endCol != 0) {
            spiral(startRow, startCol, endRow, endCol, matrix, value)
        }
    }
}
spiralMatrix(3, 3)