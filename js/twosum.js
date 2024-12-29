/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    for(let i = 0; i < nums.length; i++) {
        y = target - nums[i]; 
        if(y in dict) {
            return [dict[y], i];
        }
        dict[nums[i]] = i;
    }
    return []; 
};