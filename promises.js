// let data = fetch("./app.json")
// console.log(data);

// data.then((res)=>{

//     console.log(res);

//     let newData = res.json()
//     console.log(newData);
//     newData.then((finalData)=>{
//         console.log(finalData);
//     })

// })



// let res = Math.floor(Math.random(5.8)*10)

// let promise = new Promise((resolve, reject) => {
//     if(res > 5){
//         resolve("Successful")
//     }else{
//         reject("Failed")
//     }
// })

// console.log(promise);

// async function any() {
//     try {
//         let data = await promise;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// any()

// let promise = async ()=>{
//     try {
//         let res = await fetch('./app.json')
//         // console.log(res);
//         let data = res.json()
//         // console.log(data);
//         data.then((res)=>{
//             console.log(res);
//         }).catch((rej)=>{
//             console.log(rej);
//         })
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// promise()

// fetch gives response obj. and returns a promise




// let promise =new Promise((res, rej)=>{

//     let result = confirm("Enter Day")

//     if(result){
//         res("Fullfilled")
//     }else{
//         rej("failed")
//     }

// })

// Instance

// promise.then((m)=>{
//     console.log(m);
// }).catch((m)=>{
//     console.log(m);
// }).finally(()=>{
//     console.log("I am finally block");
// })



// let p1 = new Promise((res, rej)=>{
//     res("Fullfilled")
// })
// let p2 = new Promise((res, rej)=>{
//     res("Fullfilled")
// })
// let p3 = new Promise((res, rej)=>{
//     rej("Fullfilled")
// })


// let data = Promise.allSettled([p1,p2,p3])
// console.log(data);
// data.then((m)=>{
//     console.log(m);
// })


// let promise = fetch("https://api.escuelajs.co/api/v1/products")
// console.log(promise);

// promise.then((res)=>{

//     let newRes = res.json()
//     // console.log(newRes);
//     newRes.then((m)=>{
//         console.log(m);
//     })
// })




// async function abc(){
//     let promise = await fetch("https://api.escuelajs.co/api/v1/products")
//     let res = await promise.json()
//     console.log(res);
// }

// abc()

