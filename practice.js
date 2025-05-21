// let a = 10;

// function first() {
//   let b = 20;
//   function second() {
//     let c = 30;
//     console.log(a + b + c);
//   }
//   second();
//   console.log(a + b);
//   // console.log(c); // Uncommenting this would cause an error
// }

// first();
// console.log(a);




//! Currying

// function add(a,b){
//   return a+b;
// }
// console.log(add(2,2));



// function curriedApp(a){
//   return function(b){
//     return a+b;
//   }
//   // return curry2
// };

// let res = curriedApp(2)(2)
// console.log(res);

// let res = curriedApp(2)
// console.log(res(2));





//! Arrow Fn

// const curriedAdd = (a) => (b) => a+b ;

// let curriedfn = (a) => {
//   return (b) => { return a+b; }
// }

// console.log(curriedfn(2)(2));
// console.log(curriedAdd(2)(2));


// console.log(typeof undefined);


//~ String Methods :

// console.log( String.raw `Hello`);

// let str = "Hello My Name is Nikhil"

// console.log(String.fromCharCode(779));
// console.log(String.fromCodePoint(77922));


// console.log(str.at());
// console.log(str.charAt(-1));

// console.log(str.concat("raj"));

// console.log(str.indexOf("Nikhil"));

// console.log(str.isWellFormed());












//! Object Methods : 


//! 1. Object.assign()

const target = {
    a : 1,
    b : 2
};

const src1 = {
    b : 3,
    c : 4
}

console.log(target);
const res = Object.assign(target,src1)
console.log(res);


console.log(target == res);
console.log(target === res);

console.log({} == {})
