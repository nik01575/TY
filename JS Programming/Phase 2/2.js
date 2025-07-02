//! 

var merge = function(nums1, m, nums2, n) {
    for(let i=0;i<nums2.length; i++){
        nums1[m] = nums2[i];
        m++
    }
    return nums1.sort((a,b)=> a-b)
};

let res = merge([1,2,3,0,0,0] , 3 , [2,5,6], 3) 
console.log(res);