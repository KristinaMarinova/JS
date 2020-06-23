function orderRectangle(array) {
    let rectangles = [];

    array.forEach(element => {
        [width, height] = element;
        let rectangle = {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                if (this.area() === other.area()) {
                    return other.width - this.width;
                }
                return other.area() - this.area();
            }
        }
        rectangles.push(rectangle);
    });

    let sortedRectangles = rectangles.sort((a, b) => a.compareTo(b));
    return sortedRectangles;
}
console.log(orderRectangle([[10, 5], [5, 12]]));