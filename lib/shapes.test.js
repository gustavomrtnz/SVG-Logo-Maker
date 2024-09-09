//Todo: Import necessary modules
const {Circle, Square, Triangle} = require("./lib/shapes");


//TODO: Create test cases for each shape class
describe('Circle', () => { // add a test suite for Circle class
    it('should render a circle with the specified color', () => { // add a test case for rendering a circle with the specified color
        const circle = new Circle(); // create a Circle object with the specified color
        shape.setColor("red"); // set the color of the Circle object
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red">`); // define the expected output
    });
});

describe('Square', () => { // add a test suite for Square class
    it('should render a square with the specified color', () => { // add a test case for rendering a square with the specified color
        const square = new Square(); // create a Square object with the specified color
        shape.setColor("green"); // set the color of the Square object
        expect(square.render()).toEqual(`<rect x="50" height="200" width="200" fill="green">`); // define the expected output
    });
});


describe('Triangle', () => { // add a test suite for Triangle class
    it('should render a triangle with the specified color', () => { // add a test case for rendering a triangle with the specified color
        const triangle = new Triangle(); // create a Triangle object with the specified color
        shape.setColor("blue"); // set the color of the Triangle object
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100 200 150 0" fill="blue">`); // define the expected output
    });
});

// TODO: Run the test cases

