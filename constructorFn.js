// A constructor function in JavaScript serves as a blueprint for creating objects. It initializes and defines the properties and methods of objects of a specific type. Constructor functions are invoked using the new keyword. By convention, their names start with a capital letter.

function Student(dept){
    this.department = dept;
}

let student1 = new Student("Civil");
// console.log(student1);


// console.log(student1.department);


//! Whenever js comes across new keyword it perform the following four tasks

// 1. It creates a new object ({})
// 2. It will make the this keyword to point to the newly created object.
// 3. A reference for the prototype of the constructor is stored in the newly created object.
// 4. The newly created object is returned.


function Person(name, age){
    this.occupation = "Student";
    this.nameOfPerson = name;
    this.ageOfPerson = age;

    this.printName = function (){
        console.log(`The student name is ${this.nameOfPerson}`);
    }
}

let person1 = new Person("Rishab" , 5);  // Instantiation
// console.log(person1);
// console.log(Person);
// person1.printName()

// let person2 = new Person("NIk" , 15)
// console.log(person2);
// person2.printName()


// Any thing is created inside a constructor function will be stored inside the "instance of an object" - (copy of the object)





