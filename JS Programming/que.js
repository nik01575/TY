//! JavaScript Program to Solve Quadratic Equation

// (root1,root2) = (-b ± √b2-4ac)/2

// let a = prompt("Enter 1st No")
// let b = prompt("Enter 1st No")
// let c = prompt("Enter 1st No")

// function quadEq( a , b , c){

//     let descriminant = b * b - 4 * a * c;
//     console.log(descriminant);

//     if(descriminant >=0){
//         let r1 = (-b + Math.sqrt(descriminant))/(2*a)
//         let r2 = (-b - Math.sqrt(descriminant))/(2*a)

    
//         return `Roots are ${r1} and ${r2}`
//     }else{
//         return `Enter valid Data`
//     }


// }

// let result = quadEq(a , b , c)
// console.log(result);


//! JavaScript Program to Convert Kilometers to Miles

// Get input from the user (you might adapt this for your specific use case)
// const kilometersInput = parseFloat(prompt("Enter distance in kilometers:"));

// function kilometersToMiles(kilometers) {
//     // 1 kilometer is approximately 0.621371 miles
//     const conversionFactor = 0.621371;
//     const miles = kilometers * conversionFactor;
//     return miles;
// }
  

  
//   // Check if the input is a valid number
//   if (!isNaN(kilometersInput)) {
//     const milesOutput = kilometersToMiles(kilometersInput);
//     console.log(`${kilometersInput} kilometers is equal to ${milesOutput} miles.`);
//   } else {
//     console.log("Invalid input. Please enter a number for kilometers.");
//   }
  
//! Javascript Program to Convert Celsius to Fahrenheit


// let celcius = parseFloat(prompt("Enter The Celcius"))


// function celToFar(cel){
//     const far = (cel * 9/5) +32
//     return far
// }


// if(!isNaN(celcius)){
//     let result = celToFar(celcius)
//     console.log(result);
// }else{
//     console.log("Enter valid Data");
// }



//! program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);




//! program to reverse a string

// function reverseString(str) {

//     // return a new array of strings
//     const arrayStrings = str.split("");
   
//     // reverse the new created array elements
//     const reverseArray = arrayStrings.reverse();
 
//     // join all elements of the array into a string
//     const joinArray = reverseArray.join("");
    
//     // return the reversed string
//     return joinArray;
// }
 
// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


//! program to check the number of occurrence of a character

// function countString(str, letter) {
//     let count = 0;

//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }

// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function
// const result = countString(string, letterToCheck);

// // displaying the result
// console.log(result);


//! program to find the factors of an integer

// // take input
// const num = prompt('Enter a positive number: ');

// console.log(`The factors of ${num} is:`);

// // looping through 1 to num
// for(let i = 1; i <= num; i++) {

//     // check if number is a factor
//     if(num % i == 0) {
//         console.log(i);
//     }
// }



// let str = 'rohan'
// str[0]=' '
// console.log(str);


//!
// const a = new String("hello world")
// const b = String("hello world")

// console.log(a=== "hello world");
// console.log(b=== "hello world");




function findPath(path){
    console.log(path);
    return String.raw`${path}`
}

console.log(findPath("D:\Edgedownloads"));





// let uname = "Abakash";

// console.log(uname[-1]);
// console.log(uname.at(-1));
// console.log(uname.charAt(-1));
// console.log(uname.charCodeAt(-1));



// const str = "Cats are the best!";

// console.log(str.endsWith("best!"));
// console.log(str.endsWith("best" , 17));



// const par = "I think Ruth's dog is cuter than your dog!";
// const search = "dog";

// const indx = par.indexOf(search)
// console.log(indx);


// const sen = "The quick brown fox jumps over the lazy dog";
// const word = "fox";

// console.log( sen.includes(word,16)); //true


// const str = "123456789";
// console.log(str.padEnd(15, "*")); // 123456789******


// const mood = "Happy!";
// console.log(`I feel ${mood.repeat(3)}`);  // I feel Happy!Happy!Happy!



// console.log('abcabc'.replaceAll('a','A'));



// let str = "The weather is so cool!"
// console.log(str.slice(18));


// let str = "Mozilla";
// console.log(str.slice(3,5));  // il


// const str = new String("foo")
// console.log(str);  // String {'foo'}
// console.log(str.valueOf()); //foo