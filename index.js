const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please provide a description of your project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide some installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please provide instructions on how to install your project.")
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the uses for this project? Provide screenshots if needed.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list your credits including collaborators, third-party assets and/or tutorials used.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: [
                "Apache License 2.0 (Apache-2.0)",
                "GNU General Public License (GPL)",
                "GNU Lesser General Public License (LGPL)",
                "MIT license (MIT)",
                "Mozilla Public License 2.0 (MPL-2.0)",
                "None"
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the rules for contributing to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide testing instructions for your project'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
        .then(userResponse => {
            const readMe = generateMarkdown(userResponse);
            return writeToFile(readMe)
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
    {
        if (err) throw err;
        
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
