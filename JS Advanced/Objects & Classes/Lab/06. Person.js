function Person(first, last, age, email) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.email = email;
    this.toString = function () {
                return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`};     
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());