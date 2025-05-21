// let xhr = new XMLHttpRequest()

// xhr.open("POST" , "https://fakestoreapi.com/products/1");

// let payload = {
//     name : "abc",
//     age : "22",
//     address : "new"
// }

// xhr.setRequestHeader("content-type", "application/JSON")
// let data = JSON.stringify(payload)
// console.log(data);


// xhr.send()
// console.log(xhr);

// xhr.onload = function(){
//     console.log("Data Fetched Successfully");
// }
// xhr.onerror = function(){
//     console.log("Error in the data");
// }


// let promise = new Promise((res,rej) => {
//     let success = true;
//     if(success){
//         res("Resolved")
//     }else{
//         rej("Rejected")
//     }
// })

// console.log(promise);

// promise.then((m)=>{
//     console.log(m);
// })
// promise.catch((m)=>{
//     console.log(m);
// })
// promise.finally(()=>{
//     console.log();
// })



// let promise = new Promise((res,rej) => {
//     let success = true;
//     if(success){
//         res("Resolved")
//     }else{
//         rej("Rejected")
//     }
// }).then((val)=>{
//     console.log(val);
// }).catch((val)=>{
//     console.log(val); 
// }).finally(()=>{
//     console.log("Finally");
// })



// let p1 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej("I am First Promise");
//     }, 1000);
// })

// let p2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         rej("I am Second Promise");
//     }, 1000);
// })

// let p3 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("I am Third Promise");
//     }, 2000);
// })

// let res = Promise.all([p1,p2,p3]).then((m)=>{
//     console.log(m);
// }).catch((val)=>{
//     console.log(val);
// })
// console.log(res);

// let res1 = Promise.race([p1,p2,p3]).then((m)=>{
//     console.log(m);
// }).catch((val)=>{
//     console.log(val);
// })
// console.log(res1);

// let res2 = Promise.any([p1,p2,p3]).then((m)=>{
//     console.log(m);
// }).catch((val)=>{
//     console.log(val);
// })
// console.log(res2);

// let res3 = Promise.allSettled([p1,p2,p3]).then((m)=>{
//     console.log(m);
// }).catch((val)=>{
//     console.log(val);
// })
// console.log(res3);





// let data = fetch("https://fakestoreapi.in/api/products")
// console.log(data);
// console.log(typeof data);

// data.then((res)=>{

//     console.log(res);

//     let newData = res.json()
//     console.log(newData);
//     newData.then((finalData)=>{
//         console.log(finalData.products);
//     })

// })

// let data = fetch("https://fakestoreapi.in/api/products")
// console.log(data);


// function asyncFunction1(callback) {
//   setTimeout(() => {
//     console.log("Async Function 1 Done");
//     callback();
//   }, 1000);
// }

// function asyncFunction2(callback) {
//   setTimeout(() => {
//     console.log("Async Function 2 Done");
//     callback();
//   }, 1000);
// }

// function asyncFunction3(callback) {
//   setTimeout(() => {
//     console.log("Async Function 3 Done");
//     callback();
//   }, 1000);
// }


// asyncFunction1(() => {
//   asyncFunction2(() => {
//     asyncFunction3(() => {
//       console.log("All Async Functions Completed");
//     });
//   });
// });

// asyncFunction1(() => {
//     console.log("executed");
// })
// asyncFunction2(() => {
//     console.log("executed");
// })
// asyncFunction3(() => {
//     console.log("executed");
// })




// async function getData(){
//     let data = await fetch('https://fakestoreapi.com/products')
//     let res = await data.json()
//     console.log(res);
// }

// getData()


// (async()=>{
//   let data = await fetch('https://fakestoreapi.com/products')
//     let res = await data.json()
//     console.log(res);
// })()

//! Try Catch

// try...catch blocks are designed to catch "synchronous errors" (exceptions) that occur within the try block. This means errors that happen immediately as the code is executed, one line after another.


//! Then Catch

// The .catch() method (often chained after .then()) is specifically designed to handle rejections of Promises. Promises are JavaScript objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.



  
//! Async Await : 

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

// The await keyword is used inside the async function to wait for the asynchronous operation.

// An await expression pauses the execution of the async function until the Promise it's waiting for settles. 

//! Top-level await : It is a feature that allows you to use the await keyword outside of an async function, specifically at the top level of a module. It essentially makes modules act as large async functions

// let data = await fetch('https://fakestoreapi.com/products')
//     let res = await data.json()
//     console.log(res);




//! Math.object


// Properties of Math Object :
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);


//~ Methods

// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()
// Math.random()
// Math.pow(base, )
// Math.round()
// Math.round()
// Math.round()
// Math.round()
// Math.round()

// console.log(Math.ceil(-4.8)); //rounds up to the nearest the next largest no
// console.log(Math.ceil(-4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.8));

// console.log(Math.floor(-4.8));  //rounds down to the nearest the next smallest no
// console.log(Math.floor(-4.2));
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.8));


// console.log(Math.trunc(-4.8));  // deleted the decimal no
// console.log(Math.trunc(-4.2));
// console.log(Math.trunc(4.2));
// console.log(Math.trunc(NaN));
// console.log(Math.trunc(Infinity));


// console.log(Math.random());  // generate random no 0.0-0.9
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.floor(Math.random()*100));
// console.log(Math.round(Math.random()*100));
// console.log(Math.trunc(Math.random()*100000));




// console.log(Math.pow(2,3));  // base^exponent
// console.log(Math.pow(3,2));
// console.log(Math.pow(2,2));
// console.log(Math.pow(3,5));


// console.log(Math.sqrt(2));  
// console.log(Math.sqrt(3));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(3));

let arr = [2 ,5 , 7]
let arr2 = [3 , 7 , 8]
// console.log(Math.max(2, 8 ,2));  
// console.log(Math.max([2 ,5 , 7], [3 , 7 , 8]));
// console.log(Math.max(false, true));
// console.log(Math.max(arr, arr2));


// console.log(Math.min(2, 8 ,-2));  
// console.log(Math.min([2 ,5 , 7], [3 , 7 , 8]));
// console.log(Math.min(false, true));
// console.log(Math.min(arr, arr2));


function otp (){
    
    console.log(Math.floor(1000+Math.random()*9000));
}

otp()