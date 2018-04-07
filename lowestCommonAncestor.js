/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root
    let right = lowestCommonAncestor(root.right, p, q)
    let left = lowestCommonAncestor(root.left, p, q)
    if (right && left) return root
    if (!right && !left) return null
    if (!right && left) return left
    if (right && !left) return right
};
