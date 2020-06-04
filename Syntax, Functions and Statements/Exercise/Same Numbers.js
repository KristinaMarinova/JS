function sameNumbers(num){
num = String(num);
let same = true;
let firstDigit = num[0];
let sum = 0;
    for (const digit of num) {
        if (digit !== firstDigit) {
            same = false;
        }
        sum += Number(digit);
    }
console.log(same, '\n', sum)
}


sameNumbers(2222);
sameNumbers(1234);