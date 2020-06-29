function getPerson(){

    function Person(first, last, age, email) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.email = email;
        this.toString = function () {
                    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`};     
    }

    let array = [];
    array.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    array.push(new Person('SoftUni'));
    array.push(new Person('Stephan', 'Johnson', 25));
    array.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return array;
}

getPerson();
