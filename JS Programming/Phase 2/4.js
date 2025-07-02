var lengthOfLastWord = function(s) {
    s= s.trim()
    let arr = s.split(" ");
    return arr[arr.length-1].length
};

var lengthOfLastWord = function (s) {
  return s.trimEnd().split(' ').pop().length
};


// let res = lengthOfLastWord("   fly me   to   the moon  ")
let res = lengthOfLastWord("Hello World");
console.log(res);