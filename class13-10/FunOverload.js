//the parent class
class Person {
    greet() {
    console.log("Hello. I am a person.");
    };
    }
    //the child class
    class Employee extends Person {
    greet() {
     
    console.log("Hello. I am an employee.");
    }
    }
    let per = new Person(); //parent class object
    let emp = new Employee(); //child class object
    per.greet();
    emp.greet();