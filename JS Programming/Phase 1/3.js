let s = "silent";
let t = "listen";

// function validAnagram(s,t){
//    let newArr = [];
//     for(let char of t){
//         if(s.includes(char)){
//             newArr.push(true)
//         }else{
//              newArr.push(false)
//         }
//     }

//     if(newArr.includes(false)){
//         return false;
//     }else{
//         return true;
//     }
// }

// function validAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   } else {
//     let c1 = s.split("").sort().join("");
//     let c2 = t.split("").sort().join("");

//     return c1 === c2;
//   }
// }



// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("")
// };


// var validAnagram = function(s, t) {
//     if (s.length !== t.length) return false;

//     const countS = Array(26).fill(0);
//     const countT = Array(26).fill(0);

//     for (let i = 0; i < s.length; i++) {
//         countS[s.charCodeAt(i) - 97]++;
//         countT[t.charCodeAt(i) - 97]++;
//     }
//     console.log(countS);
//     console.log(countT);
    
  

//     for (let i = 0; i < 26; i++) {
//         if (countS[i] !== countT[i]) return false;
//     }

//     return true;
// };

function validAnagram(s,t){
    return s.split("").sort().join() == t.split("").sort().join()
}

console.log(validAnagram(s, t));
