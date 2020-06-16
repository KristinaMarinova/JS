class Hex{
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return "0x" + this.value.toString(16).substr(-4).toUpperCase();
    }

    plus(xejObj){
        let newValue = this.value + xejObj.value;
        let newHex = new Hex(newValue);
        return newHex;
    }

    minus(xejObj){
        let newValue = this.value - xejObj.value;
        let newHex = new Hex(newValue);
        return newHex;
    }

    static parse(string){
        var decimalVal = parseInt(string);
        return decimalVal;
    }
}

// let FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(Hex.parse("0xf"));