function cook(arr) {
    let num = Number(arr.shift());
    for (const command of arr) {
        switch (command) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;
        }
    }
}

cook(['32',
    'chop',
    'chop',
    'chop',
    'chop',
    'chop'])