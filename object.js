//! Object : An object is a programatical representation of a real life entity. 
//! In an object the data is stored in the form of key-value parir. Each key value pair is called a property and each property in the object is seperated by a comma.

//~ Syntax Of Object

{/* <identifier> = {
    key1: value1,
    ke2 : value2,
} */}



//! Example

// let student = {
//     name : "raj",
//     yob : 2002
// }
// console.log(student);
// console.log(student.name);

//! Literal : it is the value stored in the varible

// ! Ways to create Objects : 

// 1. Object literal 
// 2. Object Constructor
// 3. Object.assign
// 4. Object.create
// 5. Spread Operator
// 6. Constructor Function
// 7. ES6 Classes
// 8. Factory Function
// 9. Object.fromEntries



//* 1. Object literals
//* 2. Constructor Function
//* 3. Classes
//* 4. Methods



//! Object Literals

let emp = {
    eName : "nik",
    age : 22 ,
    isMarried : false,
    isDevorced : undefined,
    hasChildren : null,
    hobbies : ["swimming" , "Dancing" , "Reading"],
    address : {
        houseNo : 15,
        streetNo : 10,
        city : "Banglore",
        state : "Karnataka"
    },
    printName : function (){
        console.log("My name is nik");
    },
    printName2() {
        console.log("Hello");
    },
    a : name => {
        console.log("HEllo" +  " " + name);
    },
    1 : "number value",
    

   
};

// console.log(emp);
//! Rules for creating the key in an object

//1. The key has to be a string. Even if we create a key as a number, internally it will be stored as a string.
//2. They key cannot start with a number but it can contain a number or the key can be just a number
//3. Whenever we want to use a special character other than $ and _ as a key, then explicitly we have to wrap it with quotes.
//4. Inside an object each key name has to be unique.

//! NOTE : There is not specific order in which the properties are stored

// The possible data types for an object are string, number, boolean, symbol, BigInt, null, undefined, object, array, function
// Whenever we store function as a value inside an object, it is called a method.





//! Accessign the properties of an object

//* We have two ways to access the properties of an object.

//1. Dot Notation (.)
//2. Bracket Notation([])


//& 1. Dot Notation (.)

// console.log(emp.eName);
// console.log(emp.isMarried);
// console.log(emp.address.city);
// console.log(emp.hobbies[0]);
// emp.printName();
// emp.printName2();
// emp.a("qwertyu")



//& 2. Bracket Notation ([]) : It is used to access dynamic keys, and such keys are evaluated during runtime.
// console.log(emp[1]);
// console.log(emp["1"]);
// console.log(emp["eName"]);
// console.log(emp["age"]);
// console.log(emp["hobbies"]);
// console.log(emp["hobbies"]["1"]);
// console.log(emp["address"]["streetNo"]);
// emp["printName"]()
// emp["a"](567)


//& NOTE : If we try to access the key, which is not present int the object. It will give us undefined.
// let xyz = "empId";
// let abc = "age";
// console.log(emp[xyz]);
// console.log(emp["age"]);
// console.log(xyz);
// console.log(emp);



// let a = "age";
// let b = "hi";

// let obj = {
//     name : "nik",
//     [a] : 100,
//     gretting : [b],
//     create : "c"
// }
// console.log(obj);



//! Creating objects with built-in constructor

// let a = {
//     gender : "male"
// }

// let obj = new Object({
//     age : 17,
//     a
// });

// obj.name = "nik";
// console.log(obj);




//! Object Methods :

// let obj = {
//     name : "Nik",
//     age : 23,
//     occupation : "Student"
// }


//! 1 . Object.keys()

// console.log(Object.keys(obj));

//! 2 . Object.values()

// console.log(Object.values(obj));

//! 3 . Object.entries()

//~ Syntax Object.entries(obj)

// console.log(Object.entries(obj));

//! 4 Object.fromEntries()

// console.log(Object.fromEntries([
//     ["fName", "nik"],
//     ["lName", "raj"]
// ]));

//! 5 . Object.seal()
// Updation is possible.
// Deletion is not possible.
// Insertion is not possible.

// Object.seal(obj)
// obj.address = "New York";
// obj.occupation = "Student";

// console.log(obj);


//! 6 . Object.isSealed(): used to check whether object is sealed or not. You'll get boolean value.

// console.log(Object.isSealed(obj));

//! 7 . Object.freeze()
// Updation is not possible.
// Deletion is not possible.
// Insertion is not possible.

// Object.freeze(obj)
// obj.address = "New York";
// obj.occupation = "EMP";

// console.log(obj);


//! 8 . Object.isFrozen() : used to check whether object is freeze or not.

// console.log(Object.isFrozen(obj));

//! 9 . Object.defineProperty()


//~ Syntax : Object.defineProperty(obj, prop, {descriptor})

// let person = {};

// Object.defineProperty(person, "name", {
//     value : "Sushant",
//     writable : true,
// }, )

// console.log(person);


// let obj2 = Object.defineProperty( {}, "emp", {
//     value :  {
//         emp_name : "N",
//         emp_loc : "B"
//     }
// })
// console.log(obj2);

// let newObj = Object.defineProperty({} , "name" , 
//     {
//         value : {
//             userName : "N",
//             id : 1
//         }
//     }
// )

// console.log(newObj);



//~ Descriptor : A Descriptor in JS is an object that defines the properties and behavior of an object's property. Desscriptors provide fine-grained control over how properties are accessed, modified , and enumerated.

// Data Descriptors : These descriptors define properties that have a specific value. They have the following attributes.

// value : The value of the property.
// writable : A boolean value indicating whether the property's value can be changed. By default it is false, means we can't add another property.
// enumerable : A boolean value indicating whether the property will be included in for-in loops and Obje.keys() method. If it is false we can't access keys using .keys method or iterate on object using for-in loop.
// configurable : A boolean value indicating whether the property's descriptor can be changed or the property can be deleted. If it is false deletion of property is not possible.

//! 10 . Object.defineProperties() : The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

// Object.defineProperties(obj, props)

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value: 22
  },

});

// console.log(object1.property1);
// console.log(object1);


//! 11. Object assign()

// let a = {
//     name : "Nikhil",
//     address : "Banglore"
// }
// let b = {
//     name : "Rishab",
//     address : "Delhi",
//     isMarried : false
// }

// let newObj = Object.assign({},a, b )
// console.log(newObj);

// let arrObj = Object.assign([] , a)
// console.log(arrObj);

// console.log( typeof newObj);
// console.log( Array.isArray(newObj));

// console.log( typeof arrObj);
// console.log( Array.isArray(arrObj));



//! 12. Object.create() : The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.


// Object.create(proto)
// Object.create(proto, propertiesObject)


// const person = {
//     name : "raj",
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);

// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();
// // Expected output: "My name is Matthew. Am I human? true"

// person.printIntroduction();


//! 13. Object.getOwnPropertyDescriptor(): It returns an object describing the configuration of a specific property on a given object.The object returned is mutable but mutating it has no effect on the original property's configuration.

//~ Syntax : Object.getOwnPropertyDescriptor(obj, prop)

// const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

// console.log(descriptor1.configurable);
// console.log(descriptor1.writable);
// console.log(descriptor1.value);



//! 14. Object.getOwnPropertyDescriptors() : The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.

//~ Syntax : Object.getOwnPropertyDescriptors(obj)


// const descriptors1 = Object.getOwnPropertyDescriptors(object1);

// console.log(descriptors1.property1.writable);
// console.log(descriptors1.property1.configurable);
// Expected output: true

// console.log(descriptors1.property2.value);
// console.log(descriptors1.property2.configurable);
// Expected output: 42


//! 15. getOwnPropertyNames() : It returns an array of all properties found directly in a given array.

//~ Syntax : Object.getOwnPropertyNames(obj)

// console.log(Object.getOwnPropertyNames(object1));





// const a = Symbol("a");
// const b = Symbol.for("b");

// object1[a] = "localSymbol";
// object1[b] = "globalSymbol";

// console.log(Object.getOwnPropertySymbols(object1));





//! Object.groupBy : 


// const students = [
//   { name: 'Alice', grade: 'A' },
//   { name: 'Bob', grade: 'B' },
//   { name: 'Charlie', grade: 'A' },
//   { name: 'David', grade: 'C' },
//   { name: 'Eve', grade: 'B' },
// ];

// // Object.groupBy(object1, callbackFn)
// console.log(Object.groupBy(students, (students) => students.grade));


// console.log(object1.toString());
// function Dog(name) {
//   this.name = name;
// }

// const dog1 = new Dog("Gabby");

// Dog.prototype.toString = function dogToString() {
//   return `${this.name}`;
// };
// console.log(dog1.toString());

// console.log(Number ("sdsg"));

//! For of Loop : can't used with object. 

// let arr = [ 10, 20, 30, 40 , 50];

// let obj = {
//     name : "Nik",
//     age : 23,
//     occupation : "Student"
// }


// for( let i of arr){
//     console.log(i);
// }


//! For in Loop : only loop that will iterate over object.

// for( let i in arr){
//     console.log(i , arr[i]);
// }

// for( let i in obj){
//     console.log(i , obj[i]);
// }



//! Array.reduce() : The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It processes the array from left to right and carries an "accumulator" value along with it.

//~ Syntax : reduce(callbackFn, initialValue)

//~ CallbackFn : A function to execute for each element in the array. Its return value becomes the value of the accumulator.For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments: callbackFn(Accumulator , currentValue , currentIndex, array)
//~ initialValue : It's the starting point for the accumulation process. If you provide an initialValue, the accumulator in the first iteration of reduce() will be set to this value, and the reducer function will be executed on the first element of the array.


// const array1 = [1, 2, 3, 4];

// const initVal = 0;

// const sum = array1.reduce(
//   (acc, currVal) => acc + currVal,
//   initVal,
// );

// console.log(sum);


const users = [
    { fName : "akshay", lName : "saini" , age : 26},
    { fName : "donald", lName : "trump" , age : 75},
    { fName : "elon", lName : "musk" , age : 50},
    { fName : "deepika", lName : "padukone" , age : 26},
]

// const output = users.filter((x)=> x.age<30).map(x => x.fName)
// console.log(output);

const res = users.reduce((acc, val) => {
    console.log(acc);
    console.log(val);
    if (val.age < 30) {
        acc.push(val.fName);
    }
    return acc;
}, []);
console.log(res);