/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

var connect = function(root) {
    let process = []
    if (root) process.push(root)
    while (process.length) {
        let nextLine = []
        for (let i = 0; i < process.length; i++) {
            process[i].next = process[i+1] || null
            if (process[i].left) nextLine.push(process[i].left)
            if (process[i].right) nextLine.push(process[i].right)
        }
        process = nextLine
    }
};
