const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
// this test verifies if we can set an office number by constructor argument
test("Can set office number via constructor argument", () => {
  const answerValue = 100;
  const supervisor = new Manager("Foo", 1, "test@test.com", answerValue);
  expect(supervisor.officeNumber).toBe(answerValue);
});
// this test verifies the getRole function returns manager.
test("getRole() should return \"Manager\"", () => {
  const answerValue = "Manager";
  const supervisor = new Manager("Foo", 1, "test@test.com", 100);
  expect(supervisor.getRole()).toBe(answerValue);
});
// this test verifies retrieving office number by the getOffice function.
test("Can get office number via getOffice()", () => {
  const answerValue = 100;
  const supervisor= new Manager("Foo", 1, "test@test.com", answerValue);
  expect(supervisor.getOfficeNumber()).toBe(answerValue);
});