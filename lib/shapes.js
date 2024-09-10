//Todo: create a Shape class with color property and setColor method to set color

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

//Todo: create Circle class that extends Shape and implements render method to return a string representing a circle with specified color
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}

//Todo: create Square class that extends Shape and implements render method to return a string representing a square with specified color
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
    }
}


//Todo: create Triangle class that extends Shape and implements render method to return a string representing a triangle with specified color

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//Todo: export Circle, Square and Triangle classes
module.exports = {
    Circle,
    Square,
    Triangle
};