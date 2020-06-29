function gcd(a, b){
    for (let number = a; number > 0; number--)
    {
        if (a % number === 0 && b % number ===0) {
            return number;
        }     
    }
}

console.log(gcd(25, 5));