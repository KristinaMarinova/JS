function sequence(n, k) {
    const result = [1];
    for (let index = 1; index < n; index++) {
        if (index >= k) {
            result.push(result.slice(index - k, index).reduce((a, b) => a + b));
        }
        else {
            result.push(result.reduce((a, b) => a + b));
        }
    }
    return result.join(' ');
}

console.log(sequence(6, 3));