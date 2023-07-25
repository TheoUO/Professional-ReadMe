// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the project description?',
    },
    {
        name: 'contents',
        type: 'input',
        message: 'What is your table of contents?',
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'How do you install this?',
    },
    {
        name: 'Usage',
        type: 'input',
        message: 'How do you use this?',
    },
    {
        name: 'license',
        type: 'input',
        message: 'What license did you use?',
        choices: ['MIT']
    },
    {
        name: 'Test',
        type: 'input',
        message: 'What are the contributing tests?',
    },
    {
        name: 'questions',
        type: 'input',
        message: 'What questions did you have?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
