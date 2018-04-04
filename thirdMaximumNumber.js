/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    let max1, max2, max3
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (current === max1 || current === max2 || current === max3) continue
        else if (current > max1 || !max1) {
            max3 = max2
            max2 = max1
            max1 = current
        } else if (current > max2 || !max2) {
            max3 = max2
            max2 = current
        } else if (current > max3 || !max3) {
            max3 = current
        }
        console.log('max', max1, max2, max3)
    }
    if (max3 !== undefined) return max3
    else return max1
};

console.log(thirdMax([3,2,1]))
console.log(thirdMax([2,1]))
console.log(thirdMax([2,2,3,1]))
console.log(thirdMax([3,3,4,3,4,3,0,3,3]))
