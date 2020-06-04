function operations(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b; break;
        case '-':
            return a - b; break;
        case '*':
            return a * b; break;
        case '/':
            return a / b; break;
        case '%':
            return a % b; break;
        case '**':
            return a**b; break;
    }
}
console.log(operations(10, 5, '+'));