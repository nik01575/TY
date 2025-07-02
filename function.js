//! Functions :
// Fn is a block of code which can be executed on function calling.
// Function are re-usable.

//~ Parameters :
// While declaring a function we design a parameter.
// Parameter are the variable that is required for function execution.
// There are two parameters : default parameter , rest parameter

//~ Arguments :
// Arguments are the values passed to a function block for its execution.


//~ Types of Functions // Ways of declaring JS Functions
// Function-declaration / Statement
// Function Expression
// Nested Function
// Arrow Function
// IIFE ( Immediate Invoking Function - call Expression)
// Higher order function
// Callback Function
// Recursive Function
// Generator Function



//! Normal Function // Function Declaration
// Function hoisting are possible.

//! Date of Year, age calculated 

// var year = Number (prompt("Enter your birth year"))

// function age_calculator(year){

//     var curr_age = 2025
//     var age = curr_age - year
//     console.log(age);
// }

// age_calculator(year)


//! Anonymous Fn

// Anonymous Fn  is a function without names.
// These function are not decclared using the typical function keyword followed by a name.
// Anonymous function are useful in situatin where a function is need for a short period and does not require reuse.
// Anonymous Fn can access the variable which is declared outside the function
// We can call these function only once.

// let name = "Nik";

//     (function (){
//         name = "raj"
//         console.log(name);
//     })()


//! Functional Expression
// Together first class function and identifier, it is known as first with expression.
// Function expressions can be named or anonmous.
// They are not hoisted , meaning they are accessible only after their definition
// Frequently used in callbacks, closures, and dynamic function creation
// Enable encapsulation of functionality within a limited scope.


// var theme = function (){

// }
// var theme = function theme(){

// }
// var theme = () => {

// }

//! First Class Function // First Citizen Function
// Function passed as a value to a variable is known as first class function.
// Together first class function and identifier, it is known as first class function.


//! IIFE ( Immediate Invoke Function Expression)
// A function that is immediately invoke right after its creation.
// No reusablity: use only once
// hoisting not possible.
// Avoid Global Pollution.
// Computing values with complex logic, such as using multiple statements as a sigle expression.


//& Standard IIFE
// (   
//     function (){

//     }
// )()

//& Arrow Function variant
// (
//     () => {

//     }
// )()

//& aync IIFE
// (
//     async () => {

//     }
// )()

// & Global variable pollution in JS refers to the unintentional modification or addition of vaiable and functions to the global scope. An immediately Invoked FUnction Expressioin is a design pattern used to create a private scope, preventing variable declared within it from polluting the global scope.


// (
//     function (){
//         let name = "raj"
//         console.log(name);
//         nam1 = 30
//         num2 = 50
//         var company = "VIRUS"

//         console.log(nam1 + num2);
//         console.log("Hello ! I am IIFE");
//     }
// )();

// console.log(name);
// console.log(company);




//! Nested Functions

// console.log("Normal Nested FUnction");

//^ Example 1

// function grandPar(){
//     console.log("Grand Parent");
//     function parent(){
//         console.log("Parent");
//         function child(){
//             console.log("Child");
//         }child()
//     }parent()
// }
// grandPar()

//^ Example 2

// function account_Holder(){
//     console.log("Account Holder Name is : NIK");
//     function account_detail(){
//         console.log("Account Balance is : 5000000");
//         function paid_Emi(){
//             console.log("EMI has to be paid");
//         }
//         function paid_rent(){
//             console.log("Rent is paid");
//         }
//         paid_Emi()
//         paid_rent()
//     }account_detail()
//     function account_topUp(){
//         console.log("Add more Bal");
//     }
//     account_topUp()
// }
// account_Holder()


//^ Example 3

// console.log("JS Nested Function- JS Currying");

// function nikhilgp(){
//     var acreg = 50;
//     var goldgp = 20;
//     console.log("Global acres : " + acreg);
//     console.log("Global gold : " + goldgp);

//     function nikhil_p(){
//         var acrep = 30;
//         var goldp = 10;
//         console.log("Lobal acres : " + acrep);
//         console.log("Local gold : " + goldp);

//         function nikhil(){
//             var acres = 100;
//             var golds = 20;
//             console.log("Local acres : " + acres);
//             console.log("Local gold : " + golds);

//             console.log(`local acres : ${acreg+acrep+acres}`);
//             console.log(`Gold : ${goldgp+goldp+golds}`);
//         }
//         return nikhil;
//     }
//     return nikhil_p;
// }
// nikhilgp()()();


//! Nested FUnction :

// A Function declared inside other function is said to be a nested function.
// Pattern of nested function can be 1-parent 1-child with n no of depts, or 1-parent multiple childs.
// Child function should be called in parent function block.
// Child function can utilise parent's function data, and the data flow is uni-directional.
// Other way of calling nested function, JavaScript Currying. Here child function should be return to parent function, and in function call multiple parenthesis can be utilise, which enter helps execution of its child function.
// JS Currying is possible, only when 1 parent has 1 Child. 

//! CLosure: 

// CLosure is a object created after execution of parent function block, if at all child function utilise parent function data.
// Child function can utilise closure because closure object address are stored in child function.
// Closure objects are light-weight, it holds only the data that is required for child function execution.
// It reduces the stack count.
// Cosure helps to achieve lexical scoping or scope chain. { Lexical means getting the data from parent to child}


//! Higher Order Function - generic task/ multiple
// A function which takes another function a s an argument or return a function as its result
// Call back function are called inside the HOF



//! Callback Function : A Function which is passed as an argument to another function.

// function calculator(a,b, task){
//     var res = task(a,b)
//     return res;
// }

// var added = calculator(10, 20, function add(a,b){return a+b})
// var dif = calculator(10, 20, function add(a,b){return a-b})

// console.log(added);
// console.log(dif);


//! Arrow Function : Shorter syntax for writing function expression.

//& Implicit return
// var add = (a, b) => 10+20;
// console.log(add());

//& Explicit return
// var emp = (sal, bonus)=>{
//     return sal+bonus;
// }
// console.log(emp(20000,500));
// console.log(emp(10000,500));



//! Argument Object : an array like object that contains the values of the arguments passed to the function

// function name(){
//     return arguments[0]+ arguments[1]
// }

//! Arguments object is not available in arrow function. It contains the values of the arguments passed to that function. It is not a true array, but it has a length property and can be accessed using indexed notation (e.g., arguments[0]).

// var num = () => {
//     return arguments[0]
// }
// console.log(num);








//! this keyword : refers to the object that is executing the current function

// var sal = 25000;

// function emp1(){
//     var sal = 30000;
//     console.log("Employee Salary : " + this.sal);  //25
//     console.log("Employee Salary : " + sal);   //30
// }
// emp1()

// function emp2 (){
//     var sal = 40000;
//     console.log("Employee Salary : " + this.sal);  // 25
//     console.log("Employee Salary : " + sal);   // 40
// }
// emp2();


// 25000 , 40000

// var emp2 = {
//     ename : "yogesh",
//     sal: 30000,
//     bonus : function (){
//         // here this refers to the current object 
//         // this keyword refers to the object that is executing the current function
//         // return this.sal+5500    // 30
//         // return sal+5500   //25
//         // return emp2.sal+5500   //30
//     }
// }

// // console.log(emp2.ename);
// console.log(emp2.bonus());

//! this keyword in arrow function used in an object method does not refer to the current object, it refers to the parent scope/ global scope

// var emp = {
//     ename : "yogesh",
//     sal : 30000,
//     bonus : ()=> {
//         // here this refers to the global object
//         // return emp.sal+5500    //30
//         // return this.sal+5500  // 25
//         // return sal+5500   //25
//     }
// }

// console.log(emp.ename);
// console.log(emp.bonus());



//! Generator Function : It is a special type of function that can pause its execution at any point and resume later. They are defined using the function* syntax and use the yield keyword to pause execution and return a value.

// The yield Keyword: Inside a generator function, the yield keyword is used to pause the function's execution and return a value to the caller.

// The next() Method: The generator object has a next() method. Calling next() resumes the execution of the generator function from where it was paused (after the yield statement).

// next() returns an object with two properties:
// value: The value yielded by the generator.
// done: A boolean indicating whether the generator function has finished executing

//~ Syntax :

// function* name(){
//    yield ""
//    yield 11
// }


function* pid(){
   yield 101;
   yield "102";
   yield 103;
   yield 104;
   yield 105;
   yield 106;
}

var generated_pid = pid()
console.log(generated_pid.next());
console.log(generated_pid.next());
console.log(generated_pid.next());
console.log(generated_pid.next());
console.log(generated_pid.next());
console.log(generated_pid.next());
console.log(generated_pid.next());

// var a = 20;
// var b = 30;

// console.log("clock", generated_pid.next().value);


// ~ Recursive Function
// A recursive function in JavaScript is a function that calls itself within its definition. It's a powerful technique for solving problems that can be broken down into smaller, self-similar problems.

// It solves a problem by solving smaller instances of the same problem.
// In developing essential component in developing effiecient divide and conquer algorithms.

// function launchCountdown(seconds) {
//     console.log(`T-minus ${seconds} seconds...`);

//     // Base Case: If we reach 0 or less, stop!
//     if (seconds <= 0) {
//         console.log("Launch!");
//         return; // This is the STOP condition
//     }

//     // Recursive Call: Call the function again for the next second
//     launchCountdown(seconds - 1); // Countdown the next second
// }

// launchCountdown(5); // Start the countdown from 5 seconds
// Expected Output:
// T-minus 5 seconds...
// T-minus 4 seconds...
// T-minus 3 seconds...
// T-minus 2 seconds...
// T-minus 1 seconds...
// T-minus 0 seconds...
// Launch!


// function sumUpTo(n) {
//     // Base case: If n is 1, the sum is 1.
//     if (n === 1) {
//       return 1;
//     } else {
//       // Recursive step: sum(n) = n + sum(n-1)
//       return n + sumUpTo(n - 1);
//     }
// }
  
// const number = 5;
// const sum = sumUpTo(number);
// console.log(`The sum of numbers from 1 to ${number} is: ${sum}`); // Output: The sum of numbers from 1 to 5 is: 15