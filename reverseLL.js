function reverseLL (head) {
  if (!head || !head.next) {
    return head
  }

  let previousHead = head
  let currentHead = head.next

  while (currentHead) {
    let temp = currentHead.next
    currentHead.next = previousHead
    currentHead = temp
  }

  return currentHead
}
