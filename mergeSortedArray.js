/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = m + n
    m--
    n--
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m]
            m--
        } else {
            nums1[len] = nums2[n]
            n--
        }
    }
};

let nums1 = [0], m = 0, nums2 = [1], n = 1
merge(nums1, m, nums2, n)

console.log(nums1)
