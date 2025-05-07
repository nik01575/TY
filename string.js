//! Ways to create a String

//! 1.
// var name = "ABC"
//! 2.
// var name = 'ABC'
//! 3.
// var name = `{"TYSS" + 2345678}`   // String Concatenation
//! 4.
// var str1 = new String("function")    // Generate Object
//! 5.
// var str2 = String(true)

// console.log(str1==str2); // true
// console.log(str1===str2); // false

// console.log(typeof str1);
// console.log(typeof str2);

// console.log(str1);

//! String Methods

//& Static Methods

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