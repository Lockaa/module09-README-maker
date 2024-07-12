// TODO: Include packages needed for this application
inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
function getQuestions() {
    const questions = [];
    inquirer.prompt([
        {
        type: 'input',
        name: 'firstName',
        message: 'Please type your first name'
        },
        {
        type: 'input',
        name: 'lastName',
        message: 'Please type your last name'
        },
        {
        type: 'number',
        name: 'age',
        message: 'Please type your age'
        },
        {
        type: 'list',
        name: 'language',
        message: 'Please select your favorite programming language',
        choices: ['JS', 'Python', 'Java', 'Ruby', 'C++']
        }
    ]).then((answerObj) => {
        console.log(answerObj);
    });

    questions = answerObj;
    return questions;
}
  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data),function (err){
        console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {
    var fileName = ".. /README.md"
    var answers = getQuestions();
    writeToFile(fileName, answers);
}

// Function call to initialize app
init();
