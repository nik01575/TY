//! Inheritance in ES6 classes
// In JS we only have multi level inheritance

class Person{

    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }

    calcAge(){
        console.log(`My name is ${this.name} and my age is ${2025-this.yob}`);
    }
}

// ! extends keyword helps to inherit the properties and methods for child class 
//! extends keyword helps to create a new class based on existing class.

class Student extends Person{
    // here Student is the child and Person is the Parent
    constructor(name, yob, rollNo){
        //! super method will first call the parents constructor. methd and inside the super method we need to tell which properties should inherited from the parent class
        super(name,yob);
        this.rollNo = rollNo;
        this.name = name;
        this.yob = yob;
    }

    calcAge(){
        console.log("hii");
    }
}

let student1 = new Student("Nik", 2001, 21)
console.log(student1);



