function helper(n, count) {
  if (n === 0) return count;
  
  if (n % 2 === 0){
    return helper(n / 2, ++count);
  }
  else return helper(n - 1, ++count);
}

var numberOfSteps = function (num) {
  return helper(num, 0);
};

let res = numberOfSteps(8);
console.log(res);
