function orbit([width, height, x, y]) {
    const field = createField(width, height, x, y);
    field.forEach(row => console.log(row.join(' ')));

    function createField(width, height, x, y) {
        const matrix = [];
        for (let row = 0; row < height; row++) {
            matrix[row] = [];
            for (let col = 0; col < width; col++) {
                if (row === x && col === y) {
                    matrix[row].push(1);
                }
                else {
                    let value = Math.max((Math.abs(row - x)), Math.abs(col - y)) + 1;

                    matrix[row].push(value);
                }
            }
        }
        return matrix;
    }
}
orbit([5, 5, 0, 0])