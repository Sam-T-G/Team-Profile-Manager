const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
// const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

let mainElement = ``;

// const questions = {
//   Manager: [
//     {
//       type: "input",
//       name: "name",
//       message: "What is the manager's name?",
//     },
//   ],

//   Engineer: [
//     {
//       type: "input",
//       name: "name",
//       message: "What is the engineer's name?",
//     },
//   ],

//   Employee: [
//     {
//       type: "input",
//       name: "name",
//       message: "What is the employee's name?",
//     },
//   ],

//   Intern: [
//     {
//       type: "input",
//       name: "name",
//       message: "What is the intern's name?",
//     },
//   ],
// };

// initialize terminal by asking questions about project manager
function initialize() {
  console.log("Enter the project manager's information below.");

  const managerQuestions = questionsArray.concat(managerQuestion);

  inquirer.prompt(managerQuestions).then((response) => {
    const projectManager = new Manager(
      response.employeeName,
      response.employeeId,
      response.employeeEmail,
      response.managerOfficeNumber
    );
    const generatedCard = cardTemplates.generateManagerCard(projectManager);
    mainElement += generatedCard;

    askForAdditionalMember();
  });
}

// Ask if there are additional members and what roles they play within the team
function askForAdditionalMember() {
  inquirer
    .prompt({
      type: "list",
      message: "Would you to like to add another member to this group?",
      name: "isAdding",
      choices: ["Yes", "No"],
    })
    .then((response) => {
      if (response.isAdding === "Yes") {
        askEngineerOrIntern();
      } else {
        writeHTMLFile();
      }
    });
}

function askEngineerOrIntern() {
  inquirer
    .prompt({
      type: "list",
      message: "Are they an engineer or an intern?",
      name: "engOrInt",
      choices: ["Engineer", "Intern"],
    })
    .then((response) => {
      if (response.engOrInt === "Engineer") {
        createEngineerCard();
      } else {
        createInternCard();
      }
    });
}

function createEngineerCard() {
  const engineerQuestions = questionsArray.concat(engineerQuestion);

  inquirer.prompt(engineerQuestions).then((response) => {
    const projectEngineer = new Engineer(
      response.employeeName,
      response.employeeId,
      response.employeeEmail,
      response.engineerGithub
    );
    const generatedCard = cardTemplates.generateEngineerCard(projectEngineer);
    mainElement += generatedCard;

    askForAdditionalMember();
  });
}

function createInternCard() {
  const internQuestions = questionsArray.concat(internQuestion);

  inquirer.prompt(internQuestions).then((response) => {
    const projectIntern = new Intern(
      response.employeeName,
      response.employeeId,
      response.employeeEmail,
      response.internSchool
    );
    const generatedCard = cardTemplates.generateInternCard(projectIntern);
    mainElement += generatedCard;

    askForAdditionalMember();
  });
}

// Unique role questions
const managerQuestion = [
  {
    type: "input",
    message: "What is this person's office number?",
    name: "managerOfficeNumber",
  },
];

const engineerQuestion = [
  {
    type: "input",
    message: "What is this person's Github username?",
    name: "engineerGithub",
  },
];

const internQuestion = [
  {
    type: "input",
    message: "What school does this person go to?",
    name: "internSchool",
  },
];

// Write information onto an HTM file
function writeHTMLFile() {
  a;
  const htmlFile = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Project Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="bg-info m-2 p-4">
            <h1 class="text-white text-center">My Team</h1>
        </header>
        <main class="row mx-5 p-5 justify-content-around">
            ${mainElement}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
</html>
`;
  fs.writeFile("./dist/index.html", htmlFile, (err) =>
    err ? console.error(err) : console.log("Successfully created HTML file!")
  );

  createCssFile();
}

// HTML CSS file
function createCssFile() {
  const cssData = `
.card{
    max-width: 300px;
}    
`;
  fs.writeFile("./dist/style.css", cssData, (err) =>
    err ? console.error(err) : console.log("Successfully created CSS file!")
  );
}

initialize();
