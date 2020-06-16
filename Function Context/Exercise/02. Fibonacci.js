function getFibonator () {
    let n = 0;
 
    return function fib(){
        
        let arr = [1, 1];

        for (let i = 2; i < n + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }

        n++;
       return arr[n-1]
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13