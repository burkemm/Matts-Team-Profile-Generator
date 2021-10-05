// This imports the Employee class so we can extend it.
const Employee = require('./Employee')
// This creates the Engineer class and extends the Employee class
class Manager extends Employee {
  // This creates the constructor for name, id, email, and github. 
  // Name, id, and email are inherited from the employee class.
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // This adds the getofficeNumber() function to the Manager class.
  getofficeNumber() {
    return this.officeNumber;
  }
  // This adds the getRole() function to the Manager class.
  getRole() {
    return "Manager";
  }
}
// Exporting the Manager Class
module.exports = Manager;