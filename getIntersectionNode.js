/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB, ca = 0, cb = 0
    while (a.next !== null) {
        a = a.next
        ca++
    }
    while (b.next !== null) {
        b = b.next
        cb++
    }
};
