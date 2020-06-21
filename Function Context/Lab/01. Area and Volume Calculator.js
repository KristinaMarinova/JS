function solve(area, vol, input) {
    let objects= JSON.parse(input);

    function calculate(obj){
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(vol.call(obj));
        return {area: areaObj, volume:volumeObj}
    }
    return objects.map(calculate);
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};