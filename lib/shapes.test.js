//Todo: Import necessary modules
const {Circle, Square, Triangle} = require("./lib/shapes");


//TODO: Create test cases for each shape class
describe('Circle', () => {
    // TODO: Add test cases for calculating area and circumference
    it('should calculate area and circumference correctly', () => {
        const circle = new Circle(5);
        expect(circle.calculateArea()).toBeCloseTo(78.53981633974483, 2);
        expect(circle.calculateCircumference()).toBeCloseTo(31.41592653589793, 2);
    });
})

describe('Square', () => {
    // TODO: Add test cases for calculating area and perimeter
    it('should calculate area and perimeter correctly', () => {
        const square = new Square(5);
        expect(square.calculateArea()).toBe(25);
        expect(square.calculatePerimeter()).toBe(20);
    });
})

describe('Triangle', () => {
    // TODO: Add test cases for calculating area
    it('should calculate area correctly', () => {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.calculateArea()).toBeCloseTo(6, 2);
    });
})

// TODO: Run the test cases

