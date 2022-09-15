const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

const questions = {
  Manager: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
  ],

  Engineer: [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
  ],

  Employee: [
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
  ],

  Intern: [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
  ],
};
