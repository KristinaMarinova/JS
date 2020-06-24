function solve(obj) {
    let car = {
        model: obj.model,
        engine: function () {
            let currentPower = obj.power;
            let power = 0;
            let volume = 0;

            switch (true) {
                case currentPower <= 90: power = 90, volume = 1800; break;
                case currentPower <= 120: power = 120, volume = 2400; break;
                case currentPower <= 200: power = 200, volume = 3500; break;
            }

            return {
                power: power,
                volume: volume,
            }
        }(),
        carriage: function () {
            return {
                type: obj.carriage,
                color: obj.color,
            }
        }(),
        wheels: function () {
            let number = obj.wheelsize;
            if (number % 2 === 0) {
                number--;
            }
            return Array(4).fill(number);
        }()
    }
    return car;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));