/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let i = 0, j = 1, c = 0
    while (i < nums.length && i + j < nums.length) {
        console.log({i, j})
        if (nums[i] === 0 && nums[i + j] !== 0) {
            console.log('swap', i, 'and', i + 1)
            swap(nums, i, i+j)
            i++
            j = 1
        } else {
            j++
        }
        console.log(nums)
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

let nums = [1, 0, 1] 
moveZeroes(nums)
console.log(nums)
