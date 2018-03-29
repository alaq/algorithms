// https://leetcode.com/problems/add-two-numbers/description/

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
  let sum = (getNumber(l1) + getNumber(l2))
    .toString()
    .split('')
    .reverse()
    .map(el => parseInt(el))
  return sum
}

const getNumber = function(node) {
  number = node.val.toString()
  while (node.next) {
    node = node.next
    number += node.val
  }
  console.log(number)
  return parseInt(number)
}
