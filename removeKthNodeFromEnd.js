function removeKthNodeFromEnd(head, k) {
  let pointer = head
  for (let i = 0; i < k - 1; i++) {
    // find pointer kth from start
    pointer = pointer.next
  }
  let kth = head
  let previous = kth
  while (pointer.next) {
    // find kth from end
    previous = kth
    kth = kth.next
    pointer = pointer.next
  }
  // let's delete kth since we reached the end
  console.log(previous.value, kth.value)
  if (head == previous) {
    head = head.next
  }
  previous.next = kth.next
}
