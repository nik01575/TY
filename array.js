// var eName = ["a","b","c","d"]

// Homogenous Array

// console.log(eName);
// console.log(eName.length);

//! the no of elements present in an array
//! array_length = index+1
//! index = array_length-1

// console.log(eName[0]);
// console.log(eName[1]);
// console.log(eName[2]);
// console.log(eName[3]);
// console.log(eName[4]); // Undefined

// eName[4] ="e"
// console.log(eName[4]);
// console.log(eName);
// delete eName[4];
// console.log(eName); // Undefined


// Heterogenous Array

// var emp_details = ["TYSS3094", "NIKHIL" , 24 , "Banglore" , true , ["HTML", "CSS" , "JS"], {
//     branch_location : "Btr",
//     branch_code : "QSP-BTR-123"
// }]


// console.log(emp_details);
// console.log(emp_details[6][1]);
// console.log(emp_details[7].branch_location);
// emp_details[7].branch_location="Noida";
// console.log(emp_details[7].branch_location);



// var arr1 = Array();
// console.log(arr1);
// console.log(arr1.length);
// arr1[0] = "a";
// arr1[1] = "b";
// arr1[2] = "c";
// arr1[3] = "d";
// arr1[4] = "e";
// console.log(arr1);


// var arr2 = new Array(3,3);
// console.log(arr2);
// console.log(arr2.length);
// arr2[0] = "a";
// arr2[1] = "b";
// arr2[2] = "c";
// arr2[3] = "d";
// arr2[4] = "e";
// console.log(arr2);

// No difference between both ways, the only difference is that new keyword introduced in ES9



//! Static Method

//~ Array.from

// Syntax
// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn , thisArg)

//! Shallow Copy

// Example 1

// var mul_2  = [2,4,6,8,[2]];
// var add_2 = Array.from(mul_2)
// console.log(add_2);
// mul_2[5][0] = 12;
// console.log(mul_2);
// console.log(add_2);

// var addup_2 = add_2
// console.log(addup_2);
// addup_2[5][0] = 20;
// console.log(mul_2);
// console.log(add_2);
// console.log(addup_2);


// Example 2

// var arr_cart = ["bag", "shoes", "watch", "belt"];
// console.log(arr_cart);
// var c1_cart = arr_cart;
// delete c1_cart[1]
// console.log(arr_cart);
// console.log(c1_cart);
// console.log(c1_cart === arr_cart);


// var chandu_cart = ["tote bag", "heels" , ["watch" , "bracelet"]]
// var c2_cart = Array.from(chandu_cart);
// console.log(chandu_cart);
// c2_cart[2][1] = "chains";
// console.log(chandu_cart);
// console.log(c2_cart);
// console.log(c2_cart === chandu_cart);
// console.log(c2_cart[2] === chandu_cart[2]);



//! Array.of

// console.log(Array.of(20,19,39, 22));
// console.log(Array.of());

// let arr = Array(7);
// console.log(arr);
// console.log(arr.length);




//! Instance Methods


//! pop : removing element at the last index
// var cart = ["laptop", "bag", "marker", "mobile", "ccd"];
// console.log("Pop");
// console.log(cart);
// cart.pop()
// console.log(cart);

//! pop : adding element at the end/ last index
// console.log("pop");
// console.log(cart);
// cart.push("pen")
// console.log(cart);

//! Shift : removing elemtnt at the first index
// console.log("Shift");
// console.log(cart);
// cart.shift();
// console.log(cart);

//! Unshift : adding elemtnt at the first index
// console.log("Unshift");
// console.log(cart);
// cart.unshift("pencil")
// console.log(cart);

//! slice( start-index, end-index) : doesn't affect original array
// console.log("Slice");
// var new_cart = cart.slice(1,3)
// console.log(cart);
// console.log(new_cart);

//! splice (start-index, end-index) : affect original array
// console.log("Splice");
// console.log(cart);
// var new_cart = cart.splice(1,3)
// console.log(new_cart);
// console.log(cart);

//! indexOf

// console.log(cart.indexOf("bag"));

//! includes 

// console.log(cart.includes("bag"));

//! concat 
// console.log("Concat Method");
// var c2 = ["jewe", "shirt", ["mobile", "tv"]]
// console.log(c2);
// cart = cart.concat(c2)
// console.log(cart);
// c2[0] ="tab"

// console.log(c2);
// console.log(cart);


//! at : you can pass negative as well as positive val. If you doesn't pass any val, it will give the value present at 1st index

// console.log(cart);
// console.log(cart.at(1));
// console.log(cart.at(-1));
// console.log(cart.at());

//! copyWithin (target, startIndex, endIndex)

// var num = [2 , 4, 6 , 8 , 10, 12 , 14]
// console.log(num.copyWithin(2,0));
// console.log("arr is " +num);
// console.log(num.copyWithin(1,2 ,3));
// console.log(num.copyWithin(0,3,6));
// console.log(num.copyWithin(3,1,6));
// console.log(num.copyWithin(3,1,6));


//! Entries


// var pid = ["TYSS1", "TYSS2" , "TYSS3" ,"TYSS4" , "TYSS5", "TYSS6"]

// console.log(pid);
// var eid = pid.entries();
// console.log(eid);
// console.log("Shushant", eid.next().value[1]);
// console.log("Shweta", eid.next().value[1]);
// console.log("yogesh", eid.next().value[1]);

// var z = "new Emp";
// console.log(z);

// console.log("chandana", eid.next().value[1]);
// console.log("diwakar", eid.next().value[1]);
// console.log("nik", eid.next().value[1]);


//! copywith (target, start, end)

// changes in the orginal array
// can't change the length of the array
// nothing will change before the target element
// extract the element between start and end ( excluding )


// let arr = [ 10,100,200,300,400,600];
// console.log(arr.copyWithin(3,0,3));  //  1 2 3 1 2 3 7
// console.log(arr.copyWithin(1,3,5));  // 1 2 3 4 5 1 7


// let arr2 = [ 1 ,2 , 3 , 1 , 2 , 3 ,7]
// console.log(arr2.length);
// console.log(arr2.copyWithin(4,3,5));  // 1 2 3 1 2 1 7


// let arr2 = [ 1 ,2 , 3 , 4 , 5 , 6 ,7 , 8 , 9 , 10 , 11]
// console.log(arr2.length);
// console.log(arr2.copyWithin(3,5,7));  // 1 2 3 6 7 6 7 8 9


// let arr2 = [ 10,20,30,1,2,20,30,80]
// console.log(arr2.length);
// console.log(arr2.copyWithin(1,6,8));  // 10 40 10

//! every

// let arr = [ 11, 20 , 30 , 40 , 50];

// let result = arr.every((m)=>{
//     return m>10;
// })
// console.log(result);

//! fill ( value, startIndx , endIndx)

// value : value you wants to fill to the array

// let arr = [ 11, 20 , 30 , 40 , 50, 60 , 70];
// console.log(arr.fill(0 , 2 , 4));
// console.log(arr.fill(99 , 1 , 4));
// console.log(arr.fill(7 , 3 , 4));
// Fill with 0 from position 2 until position 4
// console.log(arr.fill(0, 2, 4)); //[1, 2, 0, 0]



//! with (index, val)

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(-2, 10)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]





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


// const users = [
//     { fName : "akshay", lName : "saini" , age : 26},
//     { fName : "donald", lName : "trump" , age : 75},
//     { fName : "elon", lName : "musk" , age : 50},
//     { fName : "deepika", lName : "padukone" , age : 26},
// ]

// // const output = users.filter((x)=> x.age<30).map(x => x.fName)
// // console.log(output);

// const res = users.reduce((acc, val) => {
//     console.log(acc);
//     console.log(val);
//     if (val.age < 30) {
//         acc.push(val.fName);
//     }
//     return acc;
// }, []);
// console.log(res);