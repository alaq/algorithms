/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let array = []
    if (!root) return []
    if (root.left) {
        array = array.concat(inorderTraversal(root.left))
    }
    array.push(root.val)
    if (root.right) {
        array = array.concat(inorderTraversal(root.right))
    }
    return array
};
