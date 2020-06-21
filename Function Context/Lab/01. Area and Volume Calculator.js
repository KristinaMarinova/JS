function solve(area, vol, input) {
    class Figure{
        constructor(x,y,z){
            this.x = Math.abs(x);
            this.y = Math.abs(y);
            this.z = Math.abs(z);
            this.GetArea = area;
            this.GetVol = vol;
        }
    }
    let objects = JSON.parse(input);
    let result = [];

    objects.forEach(element => {
        let fig = new Figure(element.x, element.y, element.z);

        let areaRes = fig.GetArea();
        let volRes = fig.GetVol();

        let newObj = {area: areaRes, volume: volRes}
        result.push(newObj);
    });
    return result;
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};