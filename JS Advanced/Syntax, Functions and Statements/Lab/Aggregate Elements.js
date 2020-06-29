function aggregate(array) {
    function sum(array) {
        console.log(array.reduce((a, b) => a + b, 0));
    }
    function inverse(array) {
        console.log(array.reduce((a, b) => a + 1 / b, 0));
    }
    function concat(array) {
        console.log(array.reduce((a, b) => `${a}` + `${b}`));
    }
    sum(array);
    inverse(array)
    concat(array);
}

aggregate([1, 2, 3]);