//Todo: Import necessary modules
const {Circle, Square, Triangle} = require("./shapes");


//TODO: Create test cases for each shape class
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />'
    );
  });
});

describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  

  describe("Square test", () => {
    test("test for a square with a purple background", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="50" height="200" width="200" fill="green" />'
      );
    });
  });
  
  module.exports = { Circle, Square, Triangle  };

// TODO: Run the test cases

