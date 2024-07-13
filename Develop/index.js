// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
function getQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter Project Title: ",
            name: "title"
        },
        {
             type: "input",
             message: "Enter a description: ",
             name: "description"
         },
         {
             type: "input",
             message: "Enter Installation details: ",
             name: "installation"
         },
         {
             type: "input",
             message: "Credits:",
             name: "credit"
         },
         {
            type: "list",
            message: "choose a license: ",
            choices: ["MIT", "Standard", "Git"],
            name: "license"
         }
    ])
    .then((data) => {     
        writeToFile('./sampleREADME.md', data);
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var outStr =    '# ' + JSON.stringify(data.title) + '\n' +
                    '## discription: \n' + JSON.stringify(data.description) + '\n' +
                    '## installion: \n' + JSON.stringify(data.installation) + '\n' +
                    "## credits: \n" + JSON.stringify(data.credit) + '\n' +
                    '## license: \n' + JSON.stringify(data.license) + '\n'
    fs.writeFile(fileName, outStr,function (err){
    })
}

// TODO: Create a function to initialize app
function init() {
    getQuestions();
}

// Function call to initialize app
init();
