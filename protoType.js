// Prototype is an object in which all the methods of the constructor Fn are present. And when any instance created by and that constructor wants to acesss the method. Instance can access these methods with the help of prototype.


// In JavaScript, everything is an object, including functions, arrays, and strings, which are specialized types of objects. JavaScript follows a prototype-based system, where objects inherit properties and methods from other objects through prototypes. This prototype mechanism plays a key role in how JavaScript handles inheritance and object relationships.

//! What is Prototype in JavaScript?
// In JavaScript, the prototype is a container for methods and properties. When methods or properties are added to the prototype of a function, array, or string, they become shared by all instances of that particular object type. 



// function Person(name, age){
//     this.nameOfPerson = name;
//     this.ageOfPerson = age;
// }

// Person.prototype.occupation = "Student";
// Person.prototype.printName = function (){
//     console.log(`The student name is ${this.nameOfPerson}`);
// }

// let person1 = new Person("nik",10)
// console.log(person1);
// console.log(Person.prototype);
// console.log(person1.__proto__);

// console.log(Person.prototype == person1.__proto__ );



//! Prototypal Inheritance

// Prototypal Inheritance is a feature in Js where object can inherit properties and methods from other objects via a prototype chain. Unlike class-based Inheritance. JS uses a prototype-based model, where objects inherit directly from other object. Every object in Js has an internal property called [[Prototype]] ( accessible via __proto__ or Object.getPrototypeOf()), which point to another object or null.

// When trying to access a property on an object, If it's not found directly on the object, JS looks for it in the object's prototype, and then in the prototype's prototype, and so on, until it finds the property or reaches the end of the chain.





// let arr = "rre"
// console.log(typeof arr);



// let object = {
//     name : "Nik",
//     city : "Banglore",
//     getIntro : function (){
//         console.log(this.name);
//     }
// }

// let object2 = {
//     name : "RAJ"
// }



// object2.__proto__ = object

// object2.getIntro()





//! Prototype Chaining : Prototype chaining is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal link to another object called its prototype. That prototype object also has a prototype, and so on, creating a chain of inherited properties and methods. The chain ends when a prototype with null is reached.