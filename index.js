//TODO: Import necessary modules
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");
const fs = require('fs');

//TODO: Implement the main program logic
class Logo {
    constructor() { // Initialize the logo with an empty array of shapes
                this.shapes = []; // Array to store shapes
    }

    addShape(shape) { // Add a new shape to the logo
        this.shapes.push(shape);
    }

    calculateAreaAndCircumference() {
        this.shapes.forEach(shape => {
            console.log(`\nArea of ${shape.constructor.name}: ${shape.calculateArea()}`);
            console.log(`Circumference of ${shape.constructor.name}: ${shape.calculateCircumference()}`);
        });
    
        if (this.shapes.length > 0) {
            console.log('\nTotal area:', this.calculateTotalArea());
            console.log('Total circumference:', this.calculateTotalCircumference());
        }
    
        this.saveToJSON();
    
        console.log('\nLogo saved to logo.json');
    
        process.exit(0);
    
}}
//TODO: Create and array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 charecters for the logo text:',

    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter a hex color code for the logo text:',
    },
    {
        type: 'input',
        name: 'background-color',
        message: 'Enter a hex color code for the logo background:',

    },
    {
        type: 'input',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]
//TODO: write to a new file 
fs.writeFile('logo.json', JSON.stringify({ shapes: [] }, null, 2), (err) => {
    if (err) throw err;
});