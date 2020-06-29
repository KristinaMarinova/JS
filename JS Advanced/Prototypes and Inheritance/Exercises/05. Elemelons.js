function solve(){
    class Melon{
        constructor(weight, melonSort){

            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
       
            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString(){
            let result = [
                `Element: ${this.constructor.name.slice(0, -5)}`,
                `Sort: ${this.melonSort}`,
                `Element Index: ${this.elementIndex}`
            ]

            return result.join("\n");
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.types = ["Water", "Fire", "Earth", "Air"];
        }

        morph(){
            let type = this.types.shift();
            this.types.push(type);
            return this;
        }

        toString(){       
            let result = [
                `Element: ${this.types[0]}`,
                `Sort: ${this.melonSort}`,
                `Element Index: ${this.elementIndex}`
            ]
    
            return result.join("\n");
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}


let melolemonmelon = new Melolemonmelon(10, "Smallsize");
melolemonmelon.morph();
melolemonmelon.morph();

console.log(melolemonmelon.toString());


//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100