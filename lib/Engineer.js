// This imports the Employee class so we can extend it.
const Employee = require('./Employee')
// This creates the Engineer class and extends the Employee class
class Engineer extends Employee {
  // This creates the constructor for name, id, email, and github. 
  // Name, id, and email are inherited from the employee class.
  constructor (name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }
  // This adds the getgithub() function to the Engineer class.
  getGithub() {
    return this.github;
  }
  // This adds the getRole() function to the Engineer class.
  getRole() {
    return "Engineer";
  }
}
// Exporting the Engineer class
module.exports = Engineer;