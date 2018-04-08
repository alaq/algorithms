/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => b - a)[k -1]
};

console.log(findKthLargest([2,4,7,1], 2))
