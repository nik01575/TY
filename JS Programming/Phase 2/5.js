var mostWordsFound = function (sentences) {
  let i = 0;
  let arr;
  let max =0;
  while (i < sentences.length) {
    
      // console.log(sentences[i]);
      arr = sentences[i].split(" ").join();

      max = arr.length;

      max = Math.max(max,arr.length);
    //   console.log(max);
    
    i++;
  }
  console.log(max);
};

// let res = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
let res = mostWordsFound([
  "w jrpihe zsyqn l dxchifbxlasaehj",
  "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom",
  "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
  "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
  "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
  "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
  "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
  "qstd zui nbbohtuk",
  "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
]);
// console.log(res);
