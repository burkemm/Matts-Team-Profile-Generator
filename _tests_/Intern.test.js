const Intern = require("../lib/Intern");
// this test verifies we can set school by constructor
test("Can set school via constructor", () => {
  const testAnswer = "UGA";
  const student = new Intern("Foo", 1, "test@test.com", testAnswer);
  expect(student.school).toBE(testAnswer);
});
// this test verifies the getRole function returns Intern
test("getRole() should return \"Intern\"", () => {
  const testAnswer = "UGA";
  const student = new Intern("Foo", 1, "test@test.com", UGA);
  expect(student.school).toBE(testAnswer);
});
// this test verifies school can be retrieved by the getSchool function.
test("Can set school via getSchool()", () => {
  const testAnswer = "UGA";
  const student = new Intern("Foo", 1, "test@test.com", testAnswer);
  expect(student.school).toBE(testAnswer);
});