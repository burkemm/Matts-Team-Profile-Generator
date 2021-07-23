const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Employee instantiation", () => {
        it("Should create a new Employee class", () => {
          const obj = new Employee("Henry", 0, "nunya@test.com");
        
          expect(obj instanceof Employee).toEqual(true);
        });
      
        it("Should return Employee as a role", () => {
          const obj = new Employee("Henry", 0, "nunya@test.com");
        
          expect(obj.getRole()).toEqual("Employee");
        });
        
        it("Should return Henry as a name.", () => {
          const obj = new Employee("Henry", 0, "nunya@test.com");
        
          expect(obj.getName).toEqual("Henry");
        });
      
        it("Should return nunya@test.com as an email", () => {
          const obj = new Employee("Henry", 0, "nunya@test.com");
        
          expect(obj.getEmail()).toEqual("nunya@test.com");
        
        });
    });
});
