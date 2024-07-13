// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
function getQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
             type: "input",
             message: "what is your location?",
             name: "location"
         },
         {
             type: "input",
             message: "Please put your linkedIn url here:",
             name: "linked"
         },
         {
             type: "input",
             message: "Please put your github url here:",
             name: "github"
        }
    ])
    .then((data) => {
        writeToFile('./index.html', data);
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data),function (err){
    })
}

// TODO: Create a function to initialize app
function init() {
    //var fileName = ".. /README.md"
    getQuestions();
}

// Function call to initialize app
init();
