//TODO: Import necessary modules
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require('fs');


    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter MAX 3 letters for the logo text: '
            
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color for the logo text (e.g., #ff0000 for red): '
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter color for the logo shape (e.g., #00ff00 for green): '
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a logo shape:',
            choices: ['Circle', 'Square', 'Triangle']
        },
    ];

    inquirer.prompt(questions).then((answers) => {
        if (answers.shape === 'Circle') {
            const circle = new Circle(answers.shapeColor);
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                ${circle.render()}
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;
            fs.writeFileSync('circle.svg', svg);
        } else if (answers.shape === 'Square') {
            const square = new Square(answers.shapeColor);
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                ${square.render()}
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;
            fs.writeFileSync('square.svg', svg);
        } else if (answers.shape === 'Triangle') {
            const triangle = new Triangle(answers.shapeColor);
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                ${triangle.render()}
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;
            fs.writeFileSync('triangle.svg', svg);
        }
    });



