/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    let array = traverse(root, [])
    return array[k - 1].val
};

var traverse = function(root, array = []) {
    array = array.concat([traverse(root.left, array)])
    if (array.length === k) return array
    array.push(root)
    if (array.length === k) return array
    return array.concat([traverse(root.right, array)])
}
