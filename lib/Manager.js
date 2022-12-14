const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // gets the Employee's role
  getRole() {
    return "Manager";
  }

  // gets Manager office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Manager class export
module.exports = Manager;
