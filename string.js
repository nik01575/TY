//! String : A string in JavaScript is a sequence of character and is used to store and manipulate Text. In javascript each character of a string is assigned an index string from 0.

//! Ways to create a String

//! 1.
// var name = "ABC"
//! 2.
// var name = 'ABC'
//! 3.
// var name = `{"TYSS" + 2345678}`   // String Concatenation
// we can add spaces and moves to next line using it.

//~ Tempelate Literals : Stings created with ``
// Single '' and Double " " does not allow extra white spaces inside the string whereas tempelate literals will allow us to add extra white spaces.
// Interpolation is only posiible when string is created with ``
// Interpolation : It refers to the process of embedding expression withing strings, using tempelate literals. Template literal are enclosed by (\`) instead of single ore double quotes and allow for the insertion of variables or expressions directly  into the string using the syntax.


//^ We can also create string using constructor but it is not recommended. But un-necessarily it will create extra time to create a string.
//! 4.
// var str1 = new String("function")    // Generate Object
//! 5.
// var str2 = String(true)



//^ Why we need single '' or double "" : If we want to show "" as string
// console.log(`"2345678"`);


// let str = 'This is "javascript" class'
// let str1 = "This is JavaScript's class"
// let str2 = 'This is "javascript" class'
// let str3 = "This is \"javascript\" class"


// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(str3);

//* String is primitive DataType. We can change the complete value of the string but we can't change the particular part of the string.
// let strings = "Hello"
// console.log(strings[0]);
// strings[0] = "U"
// console.log(strings);





// console.log(str1==str2); // true
// console.log(str1===str2); // false

// console.log(typeof str1);
// console.log(typeof str2);

// console.log(str1);






//! String Property

//~ length : It returns the no of characters of a string.

// let string = "qwertyui"
// console.log(string.length);


//! String Methods : 
// Any String method will not alter the orginal String.


//& Static Methods

//~ toUpperCase()
//~ toLowerCase()

//~ replace() 

// let str = "This in JS class. This class is boring."
// let str1 = str.replace("i", "W")
// console.log(str);
// console.log(str1);

// let txt = "I want to eat Apple and Apple"
// console.log(txt.replace("Apple", "Strawberry"));
// console.log(txt.replace(/apple/i, "Strawberry"));
// console.log(txt.replace(/apple/ig, "Strawberry"));
// console.log(txt.replace(/Apple/g, "Strawberry"));
// console.log(txt.replaceAll("Apple", "Strawberry"));

//~ replaceAll() 

// let str2 = str.replaceAll("This", "That")
// console.log(str2);

//~ trim()

// let sTrim = "         Hello From Code         "
// console.log(sTrim.trim());

//~ trimStart()
// console.log(sTrim.trimStart());

//~ trimEnd()
// console.log(sTrim.trimEnd());


//~ padStart() : It accepts two argument. First is total length of string and what should I have to add.

// let num = "55"
// console.log(num.padStart(4, "X"));

//~ padEnd() :

// console.log(num.padEnd(5, "X"));

//~ charAt() : give char

//~ charCodeAt() : give ascii value

// let str = "Nikhil";
// console.log(str.charCodeAt(0));

//~ Concat Method 

// let fName = "Nikhil"
// let lName = "Raj"

// console.log(fName + " "+ lName);
// console.log(fName.concat(" " ,lName));

//~ slice() :
//* It extracts a part of string and return the extracted part in  a new String. The method takes two parameters : start position, and end position(End not included).


//~ subString()
//* The difference is that start and end values less that 0 are treated as 0 in subString(). The substring() method does not change the orginal string. If start is greater than end, arguments are swapped (4,1) = (1,4). Start or end value less than 0 are treated as 0.

// let str = "HELLO WORLD"
// console.log(str.substring(4,1));
// console.log(str.slice(4,7));



// console.log(str.at(1));
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));
// console.log(str[1]);


//~ slice
let a = "hello world";

// console.log(a.slice(4,8));

//~ split

// console.log(a.split(" "));
// console.log(a.split(""));
// console.log(a.split());

//~ reverse() : it can't be used on string. So first we have to create out string to an array with the help of split method

// var taught = "ysae si efil";

// console.log(taught.split("").reverse().join(""));

//~ endswith

var photography = "photography is capturing memories wiht grace";

console.log(photography.endsWith("memories", 34));
console.log(photography.indexOf("memories"));

//~ startswith





//~ fromCharCode

// console.log(String.fromCharCode(78,73,75,72,73,76));
// console.log( typeof String.fromCharCode(78,73,75,72,73,76));

//~ fromCodePoint

// let emoji = String.fromCodePoint(0x1F604,0x1F605,0x1F606);
// console.log(emoji);
// console.log(typeof emoji);

//~ .raw()

// const my_name = "nik"

// String.raw  `Hi\n${my_name}!`


























//!-----------------------------------------------------TASK--------------------------------------------------------



//^ function that takes input emotion from the user and display its icon to the icon


// function showEmotion(){
//     let emo = prompt("Enter Your Current emotion")
//     let new_Emo = emo.toLowerCase();
//     console.log(new_Emo);

//     switch(new_Emo){
//         case "happy" : {
//             document.writeln(String.fromCodePoint(128522))
//             break
//         }
//         case "sad" : {
//             document.writeln(String.fromCodePoint(128532))
//             break
//         }
//         case "confused" : {
//             document.writeln(String.fromCodePoint(129300))
//             break
//         }
//         case "angry" : {
//             document.writeln(String.fromCodePoint(129324))
//             break
//         }
//         case "laugh" : {
//             document.writeln(String.fromCodePoint(128514))
//             break
//         }
//         case "hungry" : {
//             document.writeln(String.fromCodePoint(0x1F60B))
//             break
//         }

//     }
// }




// let string = "ABCDEF12345GHI";
// var char ="";
// var no="";
// // console.log(string.charCodeAt(0));

// for(let i=0; i<string.length; i++){
//     if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
//         // console.log(string.charAt(i));
//         char = char + string.charAt(i)
//     } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
//         // console.log(string.charAt(i));
//         no= no+ string.charAt(i)
//     }
// }

// console.log(`The character in the String are : ${char}`);
// console.log(`The number in the String are : ${no}`);





// let str1 = "rtyhj"
// console.log(str1);
// console.log(str1.at(2));
// console.log(str1.charAt(2));
// console.log(str1.charCodeAt(2));
// console.log(str1[2]);
// console.log(String.fromCharCode(121));
// console.log(String.fromCodePoint(121));

// fromCharCode(): Works best with numbers in the 0 to 65535 range.
// fromCodePoint(): Can handle numbers in the 0 to 1114111 range, encompassing all valid Unicode code points.

// fromCharCode() is like an older tool that works for most common letters but can get confused with special symbols.
// fromCodePoint() is a newer, smarter tool that understands all kinds of symbols, including the special ones.

// Use fromCharCode() if you are only dealing with basic characters within the original 16-bit range of Unicode.
// Always prefer fromCodePoint() when you need to ensure correct handling of all possible Unicode characters, especially if you might encounter emojis or characters from various international scripts.
