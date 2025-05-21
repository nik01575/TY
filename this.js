// "use strict";
// a =  10

// console.log(window);

// let aa = 10;
// function abc (){
//     "use strict";
//     console.log(aa);
// console.log(this);
// }
// abc()

// function abca (){
//     this = NaN;
//     console.log(aa);
//     console.log(this);
// }
// abca()

// console.log(window);

//! In the global scope under strict and non-strict condition this will point to window.

//! This Keyword : The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same methd to be reused on different objects.

// pointing mechanishm, used to point object for which a function is executing.

// let obj = {
//     name : "nik",
//     printName : function(){
//         console.log(this.name);
//         console.log(this);
//     }
// }

// obj.printName()

// console.log(this.window);
// console.log(this);






//! In a function under non strict condition this will pint to window object.
//! In the strict mode the value of this inside a function in the global scope is undefined.


// function func() {
//     console.log(this);
// }
// func();




//! If we store "this" as a value in the object, it will point to the window object

//! Inside the method of the object in strict or non-strict condition, this will point to the current object.

// let a = {
//     val : "something",
//     print() {
//         console.log(this.val);
//         return "apple";
//     }
// }

// console.log(a["print"]());





//& Lexical scope, also known as static scope, determines a variable's accessibility in a program based on where it's declared in the code's structure. Essentially, a function has acccess to variables in its own scope and the scope of its parent functions, all the way up to the global scope. This means an inner function can access the variables from its outer functin, but not vice versa.


//& Lexical scope in JavaScript determines the accessibility of variables based on their physical location within the code. It means that a function has access to the variables declared in its own scope, as well as the scopes of its parent functions, and so on, up to the global scope. This creates a chain of scopes, where inner functions can access variables from outer functions, but not vice versa.
//& For example, if a variable is declared inside a function, it is only accessible within that function and any nested functions. If a variable is declared outside of any function, it is in the global scope and accessible from anywhere in the code.




//~ arrowFunction : It will depend based on the lexical scope.


// let person = {
//     val : this,
//     name: "abc",
//     address : "Banglore",

//     fun(){
//         console.log(this); // obj
//     },

//     printName : () => {
//         console.log(this); // window : lexical scoping
        
//     },
//     sayHello(){
//         console.log(this);  // object

//         let a = () => {
//             console.log(this); // object

//             function say(){
//                 console.log(this); // window
//             }
//             say()
//         }
//         a()
//     }
// }

// console.log(person.printName());
// console.log(person.val);
// person.sayHello()
// person.printName()
// person.fun()



// let x = (name, age)=>{
//     this.name = name ;
//     this.age = age;
// }
// let res = new x("a" , 22);
// console.log(res);




// function abc(a,b){
//     // console.log(a);
//     var c = a+b;
//     console.log(c);
// }
// abc();




// {
//     var a =10;
// }
// console.log(a);


// {
//     let b = 10;
// }
// console.log(b);