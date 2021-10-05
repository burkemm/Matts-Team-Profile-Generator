const Employee = require("../lib/Employee");
// this test verifies employee instance can be instantiated.
test("Can instantiate Employee instance", () => {
  const worker = new Employee();
  expect(typeof(worker)).toBe("object");
});
// this test verifies name can be set by constructor arguments.
test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const worker = new Employee(name);
  expect(worker.name).toBe(name);
});
// this test verifies id can be set by constructor arguments.
test("Can set id via constructor argument", () => {
  const answerValue = 100;
  const worker = new Employee("Foo", answerValue);
  expect(worker.id).toBe(answerValue);
});
// This test verifies email can be set by constructor arguments.
test("Can set email via constructor argument", () => {
  const answerValue = "test@test.com";
  const worker = new Employee("Foo", 1, answerValue);
  expect(worker.email).toBe(answerValue);
});

