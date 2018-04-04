/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m + n
    while (len--) {
        if (nums1[m] > nums1[n]) {
            nums1[len] = nums1[m]
            m--
        } else {
            nums1[len] = nums1[n]
            n--
        }
    }
};

let nums1 = [1], m = 1, nums2 = [], n = 0
merge(nums1, m, nums2, n)

console.log(nums1)
