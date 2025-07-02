// import {a, b  ,c} from "./file1.js"
// import any from "./file1.js"

// console.log(a,b,c, any);


import {abc} from "./file1.js"
import {abc as secFun} from "./file2.js"  // Error : So we have to use alias , if in file1 and file2 both are exporting same variable or function using named export then for importing also we need to import using same name, and this will create conflict. So to avoid that conflict we can use alias using as

console.log(abc);
console.log(secFun);