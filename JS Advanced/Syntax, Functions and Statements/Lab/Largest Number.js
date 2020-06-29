function maxNum(a, b, c) {
    let max = Number.MIN_SAFE_INTEGER;
    let arr = [a, b, c];
    arr.forEach
        (
            x => {
                if (max < x) {
                    max = x;
                }
            }
        );
        return `The largest number is ${max}.`;
}