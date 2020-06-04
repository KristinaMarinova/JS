function radar([speed, area]) {
    let speedLimit = { motorway: 130, interstate: 90, city: 50, residential: 20 };
    if (speedLimit[area] < speed) {
        let overLimit = speed - speedLimit[area];
        if (overLimit <= 20) {
            return 'speeding';
        }
        else if (overLimit <= 40) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }
}
console.log(radar([21, 'residential']));