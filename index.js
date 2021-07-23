const inquirer = require('inquirer');
const fs = require('fs');


//inquirer to generate questions
inquirer.prompt(
  [
      {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'manager',
        validate: (value)=>{
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "What's your employee ID",
        name: 'employeeID',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "What's your email address?",
        name: 'email',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "What's your office number?",
        name: 'office',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        // Intern or Engineer selection
        type: 'list',
        message: "What would you like to do?",
        name: 'options',
        choices: ["Add an Engineer", "Add an Intern" , "Finish building my team"],
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "Do you have any contribution guidelines?",
        name: 'contribution',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: "Do you have any test instructions?",
        name: 'tests',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
        type: 'input',
        message: 'Do you have any questions?',
        name: 'questions',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
      type: 'input',
        message: 'Github: ',
        name: 'git',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      },
      {
      type: 'input',
        message: 'E-mail: ',
        name: 'email',
        validate: (value) => {
          if(value) {
            return true
          } else {
            return 'I need a value to continue.'}},
      }
  ]    
// these are my variables for each section.
).then(({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  git,
  email,
})=>{
// template to be used.
const template =`# ${title}
#Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contribution
${contribution}
## Tests
${tests}
## Questions
'This is my contact information!'
* Github : ${git}
* E-mail : ${email}`;
// Function to create our readme using FS.
createNewFile(title, template);
}
);
// creating our createNewFile function
function createNewFile(fileName, data){
  //FS
  fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err) => {
      if(err) {
        console.log(err);
      }
      console.log('Your README has been generated!');
  })
}
