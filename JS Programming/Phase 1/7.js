// let accounts = [[1,5],[7,3],[3,5]];

// //! function to find the sum of array
// const sum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const maximumWealth = (accounts) => {
//   let wealthy_customer = 0;
//   for (let balance of accounts) {
//     const curr_wealth = sum(balance); // we will get total balance of the person
//     wealthy_customer = Math.max(wealthy_customer, curr_wealth);
//   }
//   return wealthy_customer;
// };

// console.log(maximumWealth(accounts));






let arr = [ [1 , 2], [ 4, 5 ,6], [9, 2 , 5]];

function sum(arr){
  let sum = 0;

  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum
}


function maximumWealth(arr){
  let maxWeath = 0;
  for(let count of arr){
     let res = sum(count)
    //  console.log(res);
     maxWeath = Math.max(maxWeath, res)
  }
  return maxWeath;
}

let res = maximumWealth(arr)
console.log(res);