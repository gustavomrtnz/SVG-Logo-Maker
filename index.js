//TODO: Import necessary modules
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require('fs');


//TODO: Prompt user for input
inquirer
    .prompt([{
        type: 'input',
        name: 'textInput',
        message: 'Enter logo text',
        validate: function (input) {
            //TODO: Add function to validate input length
            if (input.length <= 3) {
                return 'Text must less than or equal to 3characters long.';
            }
            return true;
        },
        filter: function (input) {
            return input.toUpperCase();
        }


    }
    ])

//TODO: Add questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text of MAX 3 characters: ',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter color (red, blue, green, yellow, cyan, magenta): ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['circle', 'square', 'triangle'],
    },
]

    //TODO: Add answers to user input
    .then((answers) => {
        //TODO: Add if statement to create and write SVG file based on user input and write to file based on shape type
        if (answers.shape === 'circle') {
          
            const circle = new Circle(answers.text, answers.color, answers.shape);
            fs.writeFileSync('circle.svg', circle.render()), function(err){
                if(err) console.log(err);
                console.log('Circle SVG file created successfully');
            }

        } else if (answers.shape ==='square') {
            const square = new Square(answers.text, answers.color, answers.shape);
            fs.writeFileSync('square.svg', square.render()), function(err){
                if(err) console.log(err);
                console.log('Square SVG file created successfully');
            }

        } else if (answers.shape === 'triangle') {
            const triangle = new Triangle(answers.text, answers.color, answers.shape);
            fs.writeFileSync('triangle.svg', triangle.render()), function(err){
                if(err) console.log(err);
                console.log('Triangle SVG file created successfully');
            }

        } else {
            console.log('Invalid shape selected');
        }
    })