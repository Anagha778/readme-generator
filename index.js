// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const filepath = './dist/readme.md';
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username (Required) : ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'eaddress',
        message: 'What is your email address (Required) : ',
        validate: addressInput => {
            if (addressInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pname',
        message: 'What is your project name (Required) : ',
        validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdescription',
        message: 'Please provide decription of your project (Required) : ',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please provide project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdependency',
        message: 'Please provide command to install your project dependencies: '
    },
    {
        type: 'input',
        name: 'pusage',
        message: 'Please provide usage information for your project: '
    },
    {
        type: 'input',
        name: 'pcontributor',
        message: 'Please provide Contributor Covenant Code of Conduct: '
    },
    {
        type: 'input',
        name: 'ptest',
        message: 'Please provide tests executed for this project as part of testing: '
    },
    {
        type: 'list',
        name: 'plicense',
        message: 'Please choose license from below list: ',
        choices:['MIT',
                'Apache',
                'GPLv3',
                'Unlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = ()=> {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(projectdata =>{
    return generatePage(projectdata);
})
.then(pageReadme => {
    return writeToFile(filepath,pageReadme);
})
.catch(err => {
    console.log(err);
});