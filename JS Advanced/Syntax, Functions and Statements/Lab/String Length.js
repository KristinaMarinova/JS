function stringLen(first, second, third) {
    let sum = first.length + second.length + third.length;
    let average = Math.floor(sum / 3);
    console.log(sum, '\n', average);
}

stringLen('chocolate', 'ice cream', 'cake');