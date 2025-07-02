// var addDigits = function(num) {
//     while(num>=10){
//         let sum=0;
//         let str=num.toString();
//         for(let ch of str){
//             sum+=parseInt(ch)
//         }
//         num=sum;
//     }
//     return num;
// }


let num = 78;

var addDigits = function(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
};

//6