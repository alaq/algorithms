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
var isPalindrome = function(head) {
    let p1 = head
    while (p1.next) {
        p1 = p1.next
    }
    let p2 = head
    while (p2.next) {
        if (p1.val !== p2.val) return false
    }
    return true
};
