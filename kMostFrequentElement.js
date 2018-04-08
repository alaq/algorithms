/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let freq = {}
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1
    }
    return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, k).map(el => +el)
};

console.log(topKFrequent([1,1,1,3,3,2], 2))
