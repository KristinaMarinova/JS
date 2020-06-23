function objectFactory(input) {
    let objects = JSON.parse(input);
    let obj = {};
    objects.forEach(element => {
        Object.keys(element).forEach(prop => {
            if (!obj.hasOwnProperty(prop)) {
                obj[prop] = element[prop];
            }
        })
    });
    return obj;
}
//console.log(objectFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));
console.log(objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`))