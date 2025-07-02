// var fizzBuzz = function (n) {
//   const arr = [];

//   for (let i = 1; i < n + 1; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else {
//       arr.push(i.toString());
//     }

//     console.log(i , i.toString());
//   }

//   // return arr;
// };


function fizzBuzz(num){

  let newArr = [];

  for(let i=1; i<=num; i++){
    if( i%15 ==0){
      newArr.push("fizzBuzz");
    }else if(i%3 == 0){
      newArr.push("fizz")
    }else if( i% 5 == 0){
      newArr.push("buzz")
    }else{
      newArr.push(i.toString())
    }
  }
  return newArr
}


console.log(fizzBuzz(15));
