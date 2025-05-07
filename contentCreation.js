//! Content Creation :

// let userName = prompt("Enter Your Name")
// let followers = Number(prompt("Enter the no of Followers"));
// let watchingTime =Number( prompt("Enter the no of watchingTime(In hrs)"));
// let docSubmitted = prompt("Document Submitted (True or False)")
// let subscription = prompt("Taken Subscription (True or False)")


// if((followers>=10000 && watchingTime >=10) || (subscription=="True")){
    
//     if (docSubmitted == "True"){
//         alert("You can verify your profile");
//         document.write(`${userName} : profile verified`)
//     }
//     else{
//         alert("You can not verify your profile");
//         document.write(`${userName} : profile is not verified`)
//     }
   
// }else{
//     alert("You can verify your profile")
//     document.write(`${userName} : profile is not verified`)
// }

//!------------------------------------------------Decision Statement-----------------------------------------------------
//& 1. If Statement

// if(followers >= 10000 && posts >= 100){
//     console.log("You can go for Verification");
// }
// if(submittedData == True){
//     console.log("Profile Verified");
// }
// if(userName == "Nikhil"){
//     if(password == "0000"){
//         console.log("Authenticated User");
//     }
// }

//! Ternary Operators

// var likes = parseInt(prompt("Enter total Likes"))
// document.write( (likes >= 1000) ? "Extra Features Added to account" : "Regular Features" );


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let addContent;
let delContent;
let delUser;
let addUser;
let editUI;
let editSiteDesign;

// let user = prompt("Enter the Admin or User")
// let m_User = (user == "admin") ? "admin" : "user";
// console.log(m_User);

// if(m_User == "admin"){

//     addContent = "True";
//     delContent = "True";
//     delUser = "True";
//     addUser = "True";
//     editUI = "True";
//     editSiteDesign = "True";

// }else if(m_User == "user"){

//     addContent = "True";
//     delContent = "True";
//     delUser = "False";
//     addUser = "False";
//     editUI = "False";
//     editSiteDesign = "False";

// }else{
//     console.log("Invalid User Data");
// }




//! Ternary operator

// let content = prompt("Enter Content")
// const contentLengthMessage = content.length > 100 ? 'Long content.' : 'Short content.'
// console.log(contentLengthMessage);


//! Looping statement
//  let contentPreview = '';
//  for (let i = 0; i < content.length && i < 50; i++) {
//      contentPreview += content[i];
//      document.write(contentPreview);
//  }

//  contentPreview += content.length > 50 ? '...' : '';

//  console.log(contentPreview);

//! Switch Case

// let field = prompt("Enter Field ( Technology, Home Decor , Medical, Food, Grocery, Skincare) ")
// switch(field){

//     case "Technology" :
//         console.log("Technology");
//         break;
//     case "Home Decor" :
//         console.log("Home Decor");
//         break;
//     case "Medical" :
//         console.log("Medical");
//         break;
//     case "Food" :
//         console.log("Food");
//         break;
//     case "Grocery" :
//         console.log("Grocery");
//         break;
//     case "Skincare" :
//         console.log("Skincare");
//         break;
//     default:
//         console.log("None Of These");
// }