function timeToWalk(steps, lengthStep, kmPerH) {
    let distance = steps * lengthStep;
    let time = distance / kmPerH / 1000 * 60;
    let rest = Math.floor(distance / 500);
    let timeToSec = Math.ceil((time + rest) * 60);
    let result = new Date(null, null, null, null, null, timeToSec);
    return result.toTimeString().split(' ')[0];
}

console.log(timeToWalk(4000, 0.60, 5));
