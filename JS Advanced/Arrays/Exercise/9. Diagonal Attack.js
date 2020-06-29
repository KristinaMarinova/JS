function diagAttack(input) {
    const matrix = importInputToMatrix(input)
    if (checkDiagSum(matrix) === checkSecDiagSum(matrix)) {
        changeElements(matrix, checkDiagSum(matrix));
    }
    matrix.forEach(row => console.log(row.join(' ')));

    function checkDiagSum(matrix) {
        let sum = 0;
        for (let index = 0; index < matrix.length; index++) {
            sum += matrix[index][index];
        }
        return sum;
    }

    function checkSecDiagSum(matrix) {
        let sum = 0;
        for (let index = 0; index < matrix.length; index++) {
            sum += matrix[index][matrix.length - 1 - index];
        }
        return sum;
    }

    function importInputToMatrix(input) {
        const matrix = [];
        for (const line of input) {
            let row = line.split(' ').map(Number);
            matrix.push(row);
        }
        return matrix;
    }

    function changeElements(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if ((row !== col) && (col !== matrix[row].length - 1 - row)) {
                    matrix[row][col] = sum;
                }
            }
        }
    }
}

diagAttack(['5 3 12 3 1',

    '11 4 23 2 5',

    '101 12 3 21 10',

    '1 4 5 2 2',

    '5 22 33 11 1']
);