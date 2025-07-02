// //! Objs:

// let emp = {
//     name : "Pooja",
//     age : 27,
//     isDeveloper : true,
//     skills : ["html", "css", "js"],
//     emp_details : {
//         id:123,
//         password : "abc",
//     },
//     say : function(){
//         console.log("Hii I am developer");
//     },
// }
// // console.log(emp);

// //! 

// // console.log(emp.name);
// //! add another property



// // console.log(emp);

// //! 

// // emp.age = 25;

// // console.log(emp);

// //! 

// // delete emp.age;

// // console.log(emp);

// // Object.values stores all the values inside the array

// // console.log(Object.keys(emp));
// // console.log(Object.values(emp));
// // console.log(Object.entries(emp));
// let newObj = emp

// Object.seal(emp);

// // emp.salary= "1.5 lakh";
// // delete emp.age;

// // console.log(emp);

// // console.log(Object.isSealed(emp));
// console.log(emp);


// console.log(newObj);

// delete newObj.name
// newObj.salary= "1.5 lakh";

// console.log(newObj);


// let emp = {
//     eName : "Sushant",
//     id : 1,
//     isPhotgrapher : true,
//     skills : [ "HTML", "CSS" , "JS"],
//     sayHello : function(){
//         console.log("Hii I am Developer");
//         return "Hello"
//     },
//     1 : "HELLO",
//     id: 2
// }

// console.log(emp.eName);
// console.log(emp.skills[1]);
// console.log(emp.sayHello());

// Operations

//! Add an element

// emp.location = "Banglore";
// console.log(emp);

//! Update 

// emp.id = 10

// console.log(emp);

//! Deletion

// delete emp.skills;

// console.log(emp);

// console.log(emp["1"]);


let bonus={
    sal:this.sal,
    june_bonus(HRA,pf){
        return this.sal+this.sal*0.10+HRA+pf
    },
    team:"alpha"
};

let emp={
    ename:"rishab",
    sal:35000
}
let emp2={
    ename:"Nikhil",
    sal:40000
}


console.log(bonus.june_bonus.apply(emp,[2345,3450]));
console.log(bonus.june_bonus.call(emp2,2345,890));

let a=bonus.june_bonus.bind(emp2);
console.log(a(2345,231));

