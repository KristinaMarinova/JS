function Spy(target, methodName) {
    this.count = 0;
    const method = target[methodName];
    target[method] = function (...args) {
        this.count++;
        return method.apply(this, args)
    }.bind(this);
}

// let obj = {
//     method:()=>"invoked"
// }
// let spy = Spy(obj,"method");

// obj.method();
// obj.method();
// obj.method();

// console.log(spy) // { count: 3 }

let spy = Spy(console, "log");

console.log(spy); // { count: 1 }
console.log(spy); // { count: 2 }
console.log(spy); // { count: 3 }