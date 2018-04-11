/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = reverseList(l1)
    l2 = reverseList(l2)
    let sum = add(l1, l2)
    return reverseList(sum)
};

var reverseList = function(head) {
    let trail = null, lead = head
    while (lead !== null) {
        let nextNode = lead.next
        lead.next = trail
        trail = lead
        lead = nextNode
    }
    return trail
}

var add = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1

    let p1 = l1, p2 = l2, carry = 0, pSum, head

    while (p1 !== null || p2 !== null) {
        let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry
        carry = sum >= 10 ? 1 : 0
        let newEl = new ListNode(sum % 10)
        if (!head) head = newEl
        if (pSum) pSum.next = newEl 

        // Let's move the pointers
        if (pSum) pSum = pSum.next
        else pSum = newEl
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }

    if (carry === 1) pSum.next = new ListNode(1)

    return head
}
