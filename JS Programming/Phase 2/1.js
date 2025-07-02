//! Remove Duplicates from Sorted Array

let nums = [0,0,1,1,1,2,2,3,3,4]


// function removeDuplicates(nums){
//     let i=0; 
//     let j=1;

//     while(i<j){
//         if(nums[i] == nums[j]){
//             delete nums[i]
//         }
//         i++;
//         if(j < nums.length){
//         j++;
//         }

//     }

//     return nums.filter(item => item !== undefined);
// }


var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};
console.log(removeDuplicates([1,2,1,2,4]));