//! Condition Statements : are used for checking the conditions
// if
// if-else
// else-if
// switch case


//! if statement

let age = parseInt( prompt("Enter the age") )

if(age >= 5 && age <=15  ){
    console.log("You are child and you can't access those websites");
}else if(age>15 && age< 18){
    console.log("You are teenager and you can't access those websites");   
}else if(age>18 && age< 30){
    console.log("You are adult and you can access those websites");   
}
else{
    console.log("Come after some years");
}

//! switch case

let no = parseInt( prompt("Enter the no ( 1-5) ") )
switch(no){

    case 1 : {
        console.log("clicked no 1");
        break;
    }
    case 2 : {
        console.log("clicked no 2");
        break;
    }
    case 3 : {
        console.log("clicked no 3");
        break;
    }
    case 4 : {
        console.log("clicked no 4");
        break;
    }
    case 5 : {
        console.log("clicked no 5");
        break;
    }
    default: {
        console.log("Invalid Data");
    }
}