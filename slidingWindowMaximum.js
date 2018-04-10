/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return []
    else if (nums.length <= k) return [Math.max(...nums)]
    let maxWindow = []
    for (let i = 0; i + k <= nums.length; i++) {
        maxWindow.push(Math.max(...nums.slice(i, i+k)))
    }
    return maxWindow
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
console.log(maxSlidingWindow([1,-1], 1))
