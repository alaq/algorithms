/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    if (!head) return false
    let t1 = head, t2 = head
    while (t1.next !== null && t2.next.next !== null) {
        t1 = t1.next
        t2 = t2.next.next
        if (t1 === t2) {
            return true
        }
    }
    return false
};
