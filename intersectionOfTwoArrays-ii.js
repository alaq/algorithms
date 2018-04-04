/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    let inter = []
    for (let i = 0; i < nums1.length; i++) {
        const i2 = nums2.indexOf(nums1[i])
        if (i2 !== -1) {
            inter.push(nums1[i])
            nums1[i] = null
            nums2[i2] = null
        }
    }
    return inter
}

console.log(intersect([1,2,2,1], [2,2]))
