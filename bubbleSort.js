function bubbleSort(array) {
  let change = false
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
      change = true
    }
    if (i === array.length - 2 && change) {
      i = -1
      change = false
    }
  }
  return array
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
