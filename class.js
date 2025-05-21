//! JS classes (introduced in ES6) provide a structured way to create objects with shared properties and methods.
//! The constructor() method is a special method that is automatically called when an instance of the class is created.
//! You can define methods inside the class to provide behaviour for objects created form the class.

class Employee {
    anything = "name";
    // b = this;
    static a = 100;   // Field members : are member present inside the class
    static empType = ["Developer","Trainer","HR","TL"]

    #skill = ["HTML","CSS","JS"];

    constructor(empId, name , designation){
        // this.new = this.b  // Data Members or instance member or instance field
        this.some = this
        // this.a = this.a;
        this.empid = empId;
        this.name = name;
        this.designation = designation;
    }

    printName(){
        // console.log(`${this.name} is an employee of testyantra`);
        console.log(this.#skill);
    }

    printEmp(){
        // for(let emp of this.empType){
        //     console.log(emp);
        // }
        console.log(this.a);
        
    }
}

let emp1 = new Employee(1, "yogesh", "trainer");
console.log(Employee.a);
console.log(emp1.printEmp());
console.log(Employee.printEmp());





//new keyword create instance

// console.log(emp1);
// console.log(emp1.empType);
// Employee.printName();


// emp1.printName();
// Employee.printName();

// console.log(Employee.empType);
// Employee.printEmp();
// emp1.printName();
// Employee.printEmp();


//& NOTE : If there is no constructor method inside the class by default the constructor method will be created in the class and it will be called when we use new keyword


// The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.
// The body of a class is executed in strict mode even without the "use strict" directive.
// A class element can be characterized by three aspects :

// kind : Getter, setter, method, or field
// Location : Static or instance
// Visibility : Public or Private.

//! Data Members or instance member or instance field : are the field present inside the constructor of the class and they will be the properties of the instances.

//! By default all the methods inside a class are created inside a class are created inside the prototype object.


// If we want to crate a private field or private methods, we have to attach # in the beginning of the field and methods. Private field and methods can only be used inside the body of the class.

// Private fields in JS classes are declared using a a has # prefix. These fields are only accessible from within the class body, enforcing encapsulation and preventing external modification or access. Private fields must be declared upfront with in the class declaration.

