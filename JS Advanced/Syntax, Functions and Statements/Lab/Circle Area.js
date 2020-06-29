function area(input){
    if(typeof input==='number'){
        return (Math.PI * (input ** 2)).toFixed(2);
    }
    return `We can not calculate the circle area, because we receive a ${typeof input}.`;
}

console.log(area(5))