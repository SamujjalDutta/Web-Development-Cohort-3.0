class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log("Color is " + this.color);
    }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
console.log(area);     // Output: 8
rect.paint();          // Output: painting with color red
