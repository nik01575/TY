// let s = ["h", "e", "l", "l", "o"];

// var reverseString = function(s) {
//     return s.reverse()
// };

// var reverseString = function (s) {
//   for (let i = 0; i < s.length / 2; i++) {
//     let temp = s[i];
//     s[i] = s[s.length - i - 1];
//     s[s.length - i - 1] = temp;
//   }
//   return s;
// };

// var reverseString = function (s) {
//   let i =0;
//   let j = s.length -1;

//   while(i<j){
//     [s[i], s[j]] = [s[j], s[i]];
//     i++;
//     j--;
//   }
//   return s
  
// };
// co
// nsole.log(s);


function reverseString(str){
  let i=0;
  let j= str.length-1;

  while(i<j){
    let temp  = str[i]
    str[i] = str[j]
    str[j] = temp;

    i++
    j--
  }
  return str;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
