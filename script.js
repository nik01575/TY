//! variable keyword
// var
// let 
// const

//~ Rules of Identifiers:

//!. Identifier can not start with number
//!. ONly _ and $ special characters are allowed
//!. Case sensitive
//!. Can't use reserved keywords as Identifier name.
//!. Can't use space between the variable names.

//
// var login = 10;
// console.log(login);

// var _ = 10;
// console.log(_);

// var $ = 10;
// console.log($);

// var abc4 = [ 5, 2,6, 7 ,3]
// console.log(abc4);



// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York"
//     }
//   };
  
//   console.dir(person, { colors: true, depth: 2 });
  


//! Datype :
//~ 1. Primitive DataType : Number, String, Null, undefined, Boolean, Symbol
//~ 2. NonPrimitive DataType : Array, Object

//& Primitive DataType
// var emp_Name = "NIk";
// console.log(emp_Name);
// emp_Name = "Raj"
// console.log(emp_Name);

//& Non-Primitive DataType
// var emps = [ "nik", "raj", "ris"]
// console.log(emps);
// emps[1] = "sha"
// console.log(emps);

// var emp1 = {
//   name: "NIk",
//   age: 22,
//   sal: "50k",
// }

// console.log(emp1);
// emp1.age = "25"
// console.log(emp1);


//! Typeof Operator ( For Primitive DataType )

var team_name = "Alpha"
console.log(typeof team_name);

var team_count = 24;
console.log(typeof team_count);

var rating = 5.2;
console.log(typeof rating);

var is_active = true;
console.log(typeof is_active);

var project = null;
console.log(typeof project);
console.log(typeof (typeof project));

var credit = Symbol
console.log(typeof credit);
console.log( typeof(typeof credit));

var income= 1n;
console.log(typeof income);

var initial_id;
console.log(initial_id);

var emp1 = {
  name: "NIk",
  age: 22,
  sal: "50k",
}
console.log(typeof emp1);
console.log( typeof( typeof emp1));










//Less Dropout
//Don't give notes on 1st class