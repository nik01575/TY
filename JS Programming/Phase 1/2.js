let s = "a";
let t = "aa";


// function difference(s,t){
//     for(let i=0; i<t.length; i++){
//         for(let j=0; j<s.length; i++){
//         if(s.includes(t[i]) == false){
//             return t[i]
//         }
//         }

//     }
// }
// console.log(difference(s,t));



// function difference(s,t){
//   for(let char of t){
//         if(s.includes(char)){
//             s = s.replace(char, "");
//         }else{
//             return char;
//         }
//     }
// }




function difference(s, t){
    for(let char of t){
        if(s.includes(char)){
            s = s.replace(char, "")
        }else{
            return char
        }
    }
}
console.log(difference(s,t));