const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// Output directories for the application after the user makes their selections
const OUTPUT_DIRECTORY = path.resolve(__dirname, "output")
const output = path.join(OUTPUT_DIRECTORY, "team.html");
// Calling the template page that will be used.
const render = require("..Matts-Team-Generator/src/template-page.js");
// Setting team persoannel and arrayID to empty arrays. ArrayID is for the selections from the user.
const teamPersonnel = [];
const arrayID = [];
// This is the big function that calls on the user to make their selections based on a series of questions.
function appTeamMenu() {
  // This nested function is for adding a new team manager. It prompts the user to enter the team manager name, id, email, and office number.
  function appendManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the team manager",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "There is a one character minimum requirement.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the ID of the team manager?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "There is a positive number minimum requirement.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email of the team manager?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "A valid email address is required.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the office number of the team manager?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "There is a positive number minimum requirement.";
        }
      }
    ]).then(answers => {
      // This takes the answers from the user and pushes them into an array.
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamPersonnel.push(manager);
      arrayID.push(answers.managerId);
      GenerateTeam();
    });
  }
  // This nested function prompts the user to make a selection choice.
  function GenerateTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Please make a team member selection for what you want to add.",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          appendEngineer();
          break;
        case "Intern":
          appendIntern();
          break;
        default:
          makeTeam();
      }
    });
  }
  // This nested function is for adding a new engineer. It prompts the user to add the engineer name, id, email, and github username.
  function appendEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "There is a one character minimum requirement.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID of the engineer?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (arrayID.includes(answer)) {
              return "This ID is unavailable. Please make another number entry.";
            } else {
              return true;
            }

          }
          return "There is a positive number minimum requirement.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email of the engineer?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "A valid email address is required.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the GitHub username of the engineer?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "There is a one character minimum requirement.";
        }
      }
    ]).then(answers => {
      // This takes the answers from the user and puts them into an array. 
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamPersonnel.push(engineer);
      arrayID.push(answers.engineerId);
      GenerateTeam();
    });
  }
  // This nested function is for adding a new intern. It prompts the user to add the intern name, id, email, and github username.
  function appendIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is name of your Intern?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "There is a one character minimum requirement.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is the ID of your intern?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (arrayID.includes(answer)) {
              return "This ID is unavailable. Please make another number entry.";
            } else {
              return true;
            }

          }
          return "There is a positive number minimum requirement.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email of your intern?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "A valid email address is required.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the school of your intern?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "There is a one character minimum requirement.";
        }
      }
    ]).then(answers => {
      // This takes the answers from the user and puts them into an array.
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamPersonnel.push(intern);
      arrayID.push(answers.internId);
      GenerateTeam();
    });
  }

  function makeTeam() {
    // This nested function creates the output directory if it doesn't exist already.
    if (!fs.existsSync(OUTPUT_DIRECTORY)) {
      fs.mkdirSync(OUTPUT_DIRECTORY)
    }
    fs.writeFileSync(output, render(teamPersonnel), "utf-8");
  }

  appendManager();

}
// Call the function to prompt the user.
appTeamMenu();
