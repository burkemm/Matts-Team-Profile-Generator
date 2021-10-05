// This imports the Employee class so we can extend it.
const Employee = require('./Employee')
// This creates the Intern class and extends the Employee class
class Intern extends Employee {
  // This creates the constructor for name, id, email, and github. 
  // Name, id, and email are inherited from the employee class.
  constructor (name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }
  // This adds the getschool() function to the Intern class.
  getSchool() {
    return this.school;
  }
  // This adds the getRole() function to the Intern class.
  getRole() {
    return "Intern";
  }
}
// Exporting the Intern class.
module.exports = Intern;