class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        this._firstName = name;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(name) {
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    set fullName(name){
        var parts = name.split();
        if(parts.length === 2){
            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson