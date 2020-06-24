function solve(){
    class Figure{
        constructor(units = "cm"){
            this.units = units;
        }
    
        changeUnits(newUnit){
            this.units = newUnit;
        }
    
    }
    
    class Circle extends Figure{
       constructor(radius, units = "cm"){
            super(units);
            this.radius = radius;
       }
    
       get radius(){
           return this._radius;
       }
       set radius(radius){
           if(this.units === "mm"){
               this._radius = radius * 10;
           }
           else if(this.units === "m"){
            this._radius = radius / 10;
           }
           else{
               this._radius = radius;
           }
       }
    
        changeUnits(newUnit){
            let oldUnit = this.units;
            if(oldUnit === "cm"){
                if(newUnit == "mm"){
                    this._radius *= 10;
                }
                else if(newUnit == "m"){
                    this._radius /= 100;
                }
            }
            else if(oldUnit === "mm"){
                if(newUnit == "cm"){
                    this._radius /= 10;
                }
                else if(newUnit == "m"){
                    this._radius /= 1000;
                }
            }
            else if(oldUnit === "m"){
                if(newUnit == "cm"){
                    this._radius *= 100;
                }
                else if(newUnit == "m"){
                    this._radius *= 1000;
                }
            }
            this.units = newUnit;
        }
    
        get area(){
            return  Math.PI * this.radius * this.radius;
        }
    
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    
    class Rectangle extends Figure{
        constructor(width, height, units = "cm"){
            super(units);
            this.width = width;
            this.height = height;
        }
    
        get width(){
            return this._width;
        }
        set width(width){
            if(this.units === "mm"){
                this._width = width * 10;
            }
            else if(this.units === "m"){
             this._width = width / 10;
            }
            else{
                this._width = width;
            }
        }
    
        get height(){
            return this._height;
        }
        set height(height){
            if(this.units === "mm"){
                this._height = height * 10;
            }
            else if(this.units === "m"){
             this._height = height / 10;
            }
            else{
                this._height = height;
            }
        }
    
        changeUnits(newUnit){
            let oldUnit = this.units;
            if(oldUnit === "cm"){
                if(newUnit == "mm"){
                    this._width *= 10;
                    this._height *= 10;
                }
                else if(newUnit == "m"){
                    this._width /= 100;
                    this._height /= 100;
                }
            }
            else if(oldUnit === "mm"){
                if(newUnit == "cm"){
                    this._width /= 10;
                    this._height /= 10;
                }
                else if(newUnit == "m"){
                    this._width /= 1000;
                    this._height /= 1000;
                }
            }
            else if(oldUnit === "m"){
                if(newUnit == "cm"){
                    this._width *= 100;
                    this._height *= 100;
                }
                else if(newUnit == "m"){
                    this._width *= 1000;
                    this._height *= 1000;
                }
            }
            this.units = newUnit;
        }
    
        get area(){
            return this.width * this.height;;
        }
    
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    
    return{
        Figure, 
        Circle,
        Rectangle
    }
}



let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50