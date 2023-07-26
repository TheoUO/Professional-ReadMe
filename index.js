// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkDown = require('./utils/generateMarkdown');

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
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'none'],
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
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses =>{
    console.log("Creating Professional README.md File...");
    writeToFile("./README.md", generateMarkDown({...responses}));
    });
}

// Function call to initialize app
init();
