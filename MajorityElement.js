/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var n = Math.ceil((nums.length)/2);
    var hasEle = {};
    var num = 0;
    if(nums.length == 1 || nums.length == 2){
        return nums[0];
    }
    else{
     for(let i =0;i<nums.length; i++){
            if(hasEle[nums[i]]){
                hasEle[nums[i]]++;
                if(hasEle[nums[i]] == n){
                    num = nums[i];
                    break;
                }
            }
            else{
                hasEle[nums[i]] = 1;
            }
        }
    return num;       
}
};