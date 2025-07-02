//! Method borrowing in JavaScript allows an object to use a method of another object as if it were its own. This is achieved using the call, apply, or bind methods, which are available on all functions in JavaScript. These methods allow you to explicitly set the this value within a function's execution context.

// explicitly wants that this points to any particular object
// Explicitely point on any object
// Code Repetition
// Memory Utilization

let student = {
    name : "Nik",
    course : "MERN",
    duration : "4-6 months",
    printCourse : function(branch, fee){
        console.log(
            this.name + 
            " is taking "
             + this.course + 
                ` in the ${branch} and her fee is ${fee}`);
    },
    printDuration(){
        console.log(`the duration of the course is ${this.duration}`);
    },
};


let student2 = {
    name : "RAJ",
    course : "JAVA",
    duration : "6 months",
};


function displayInfo(fees, branch){
    console.log(
        `${this.name} is taking ${this.course} whose duration is ${this.duration} and his fees is ${fees} and branch is ${branch}`
    );
}

//! Call : It is used to call a function with specified this value and argument provided individually. It accepts 2 arguments. 1st argument is the obj for which we want to call the method and second argument is passed to the method as the arguments.

// Syntax : method.call(object identifier where this keyword will point, arg1, arg2)

// student.printCourse.call( student2 , "Delhi" , 2000)
// student.printDuration.call( student2)

// displayInfo.call(student2 , 20000, "BTR")


//! Apply

// Call and apply are similar. Both call and apply helps us to set the context for execution of a function/method. The only difference is that in call args are passed normally by seperating with comma whereas in apply we need to pass the arguments as elements of an array.

// displayInfo.apply(student2, [ 3000, "Marathalli"])


//! Bind

// Bind return function

// Syntax Of Bind : Originalfunction.bind(thisArg[, arg1[, arg2[, ...]]])

// Identifier = method.bind(identifiier of the object to which we bind/tie the method)

// we can pass branch either while using bind syntax. If every time we wants same arguments. But we want different arguments at each invocation then we can pass the arguments while calling the fun.

// let abc = displayInfo.bind(student2, 2000, "BTR")
// abc()

// abc(2000, "BTR")

// math date shallow & deep