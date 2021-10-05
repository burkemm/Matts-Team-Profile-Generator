// This generates the Employee class and the constuctor of name, id, and email.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this. email = email;
  }
  // Adds the getrole() function to the employee class.
  getRole() {
    return "Employee";
  }
  // Adds the getemail() function to employee class.
  getEmail() {
    return this.email;
  }
  // Adds the getId() function to employee class.
  getId() {
    return this.id;
  }
  // Adds the getName() function to employee class.
  getName() {
    return this.name;
  }
}
// exporting the Employee class.
module.exports = Employee;