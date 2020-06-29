function valid([x1, y1, x2, y2]) {
    let valid = (x1, y1, x2, y2) => {
        let dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        let checker = 'invalid';
        if (Number.isInteger(dist)) {
            checker = 'valid';
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checker}`);
    }
    valid(x1, y1, 0, 0);
    valid(x2, y2, 0, 0);
    valid(x1, y1, x2, y2);
}

valid([3, 0, 0, 4]);