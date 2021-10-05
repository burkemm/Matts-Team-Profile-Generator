const Engineer = require('../lib/Engineer');
// this test verifies that github account is set by constructor.
test("Can set GitHUb account via constructor", () => {
  const answerValue = "GitHubUser";
  const developer = new Engineer("Foo", 1, "test@test.com", answerValue);
  expect(developer.github).toBe(answerValue);
});
// this test verifies the getRole function should return engineer.
test("getRole() should return \"Engineer\"", () => {
  const answerValue = "Engineer";
  const developer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(developer.getRole()).toBe(answerValue);
});
// this test verifies the github username is retrieved by the getgitHub function.
test("Can get GitHub username via getGithub()", () => {
  const answerValue = "GitHubUser";
  const developer = new Engineer("Foo", 1, "test@test.com", answerValue);
  expect(developer.getGithub()).toBe(answerValue);
});