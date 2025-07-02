// // console.log(1 + "2" + 3);
// // console.log("1" + 2 + 3);
// // console.log(1 + 2 + "3");
// // console.log("1" + (2 + 3));


// // console.log("10" - 5);
// // console.log("10" * "5");
// // console.log("10" / "2");
// // console.log("Hello" - 5);

// // console.log(null + 1);
// // console.log(undefined + 1);
// // console.log(true + true);
// // console.log(false - 1);


// // console.log([] + {});
// // console.log({} + []); // Be careful with this one in browser console vs. Node.js!
// // console.log(1 + {});



// // console.log(NaN + 1);
// // console.log(NaN === NaN);
// // console.log(Number(""));
// // console.log(Number("  "));



// // console.log(null == undefined);
// // console.log(null == 0);
// // console.log(undefined == 0);



// // console.log("" == 0);
// // console.log("" == false);
// // console.log(0 == false);
// // console.log(" " == 0);


// // console.log([] == 0);
// // console.log([] == "");
// // console.log([0] == "");
// // console.log([0] == 0);

// console.log(false == "0");
// console.log(false == []);
// console.log(false == {});
// console.log(0 == "\n"); // newline character


// console.log(true == "1");
// console.log(true == [1]);
// console.log(true == "true");


// console.log(!!null);
// console.log(!!undefined);
// console.log(!!0);
// console.log(!!"");
// console.log(!!NaN);


// const a = 0 || "hello";
// const b = "" || "world";
// const c = "foo" && "bar";
// const d = null && "baz";


// const obj = {
//   valueOf: function() { return 10; },
//   toString: function() { return "20"; }
// };
// console.log(obj + 5);
// console.log("Result: " + obj);




// const trickyObj = {
//   [Symbol.toPrimitive](hint) {
//     if (hint === 'number') {
//       return 100;
//     }
//     if (hint === 'string') {
//       return 'hello';
//     }
//     // Default (or 'default' hint)
//     return true;
//   }
// };
// console.log(trickyObj + 1);
// console.log(String(trickyObj));
// console.log(trickyObj == true);



// const date = new Date(0); // Epoch
// console.log(date == 0);
// console.log(date > 0);
// console.log(date + 1);


// console.log(0 == -0);
// console.log(Infinity > 1e1000);
// console.log(NaN > 0);
// console.log(NaN < 0);
// console.log(NaN == NaN);


// console.log(+null);
// console.log(-undefined);



// console.log(!"");
// console.log(!"0");
// console.log(![]);
// console.log(!{});




//! Funtions
// Syntax : 

// function fun(){

// }

// fun()


// Named Function : 


// function addition( a ,b ){
//     return a+b;
// }

// let data = addition(5, 5)
// console.log(data);


//! Anonymous fn

// let i = function(){
//     console.log("Hii I am anonymous fn");
// }

// i()


//! Fn with expression

// let data =function(){

// }


// let a = 10




//! foreach, forin, forof

// let arr = [11 , 12 , 13  , 14, 15]

// arr.forEach((element, index)=>{
//     console.log(`${element} and ${index}`);
//     return `${element}`
// })



// for(let i of arr){
//     console.log(i);
//     return i
// }

// for(let i in arr){
//     console.log(i);
//     return i
// }



// let x = (()=>{
//     return arguments;
// })()

// console.log(x)


// function a(){
//     console.log(typeof b);
//     var b=10
// }
// a()  // Undefined


// (function (){
//     let x = (y=10);
//     z=2;
//     const a=7
// })()

// console.log(typeof x);  // Undefined
// console.log(typeof y);  // Number
// console.log(y);  // Number
// console.log(z);