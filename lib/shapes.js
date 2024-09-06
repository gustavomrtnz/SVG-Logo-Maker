//Todo: create a Shape class with color property and setColor method to set color

class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}
//TODO: create classes to extend Shape class for Circle, Square, and Triangle
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

}

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }
    calculateArea() {
        return Math.pow(this.sideLength, 2);
    }

}
class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }

}

module.exports = { Circle, Square, Triangle };