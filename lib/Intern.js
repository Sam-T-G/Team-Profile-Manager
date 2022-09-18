const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // gets the Intern's role
  getRole() {
    return "Intern";
  }

  // gets the Intern's school
  getSchool() {
    return this.school;
  }
}

// Intern class export
module.exports = Intern;
