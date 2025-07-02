//! ForEach : forEach is a method used only on arrays.
//~ It executes a function once for each array element.
//~ You cannot break, continue, or use return to exit early (unlike a for loop).
//~ Ideal for executing side effects (like logging, updating DOM, etc.).

// forEach(callbackFn, thisArg)
// callbackFn : ( element, index, array)



//& Array
// const arr = [10, 20, 30];
// let res = arr.forEach(function (item, index) {
//   console.log(item, index);
//   return item;
// });
// console.log(res);// undefined


//~ Can be written using arrow functions:

// arr.forEach((value, index, array) => {
//   console.log(`${index}: ${value} (from array ${array})`);
// });




//! For of Loop : for...of is used to iterate over iterable items like arrays, strings, sets, maps, arguments, NodeLists.
// ~ can't used with object.
//~ Gives values, not keys/indexes.

// let str = "NIKHIL";

// let arr = [ 10, 20, 30, 40 , 50];

let obj = {
    name : "Nik",
    age : 23,
    occupation : "Student"
}


//& STRING

// for(let i of str){
//     console.log(i);
// }

//& ARRAY

// for(let i of arr){
//     console.log(i);
// }

//& OBJECT

// for(let i of obj){
//     console.log(i);
// }

//& ARGUMENT

// function args(data) {
//   let argument = arguments;
//   for (let i of argument) {
//     console.log(i);
//   }
// }

// args(2, 2, 5, 7, 2, "n", "i");

//& MAP

// const map = new Map([['a', 1],['b', 2]]);

// for (let [key, value] of map) {
//   console.log(key, value);
// }


//! For in Loop : only loop that will iterate over object. If you try to itterate on the array, it will return the index val.
//~ Used for objects, not arrays (although it can technically work on arrays — but not recommended).
//~ It includes inherited properties (from prototype chain) unless filtered.
//~ Useful when you want to loop through object keys.


// let arr = [ 10, 20, 30, 40 , 50];

// let obj = {
//     name : "Nik",
//     age : 23,
//     occupation : "Student"
// }

//& Array

// It gives string indexes, not numeric ones.
// Order is not guaranteed — better to use forEach or for...of.

// for(let i in arr){
//     console.log(i, arr[i]); 
// }


//& OBJECT

// for(let i in obj){
//     console.log(i);
// }
