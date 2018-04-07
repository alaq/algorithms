/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums, low = 0, high = nums.length - 1) {
    if (!nums) return null
    let middle = nums[parseInt(low + high)/2]
    let node = new TreeNode(nums[middle])
    node.right = sortedArrayToBST(nums, middle + 1, high)
    node.left = sortedArrayToBST(nums, low, middle - 1)
};
