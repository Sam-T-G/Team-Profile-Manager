const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Retrieves role
  getRole() {
    return "Engineer";
  }

  // Retrieves github acount
  getGithub() {
    return this.github;
  }
}

// Engineer class export
module.exports = Engineer;
