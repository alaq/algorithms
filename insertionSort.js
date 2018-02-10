function insertionSort(array) {
  let sorted = [array.shift()]
  while (array.length) {
    const newElement = array.shift()
    if (newElement <= sorted[0]) {
      sorted.unshift(newElement)
    } else if (newElement >= sorted[sorted.length - 1]) {
      sorted.push(newElement)
    } else {
      for (let i = 0; i < sorted.length; i++) {
        const low = sorted[i] || -Infinity
        const high = sorted[i + 1] || Infinity
        if (newElement > low && newElement <= high) {
          sorted.splice(i + 1, 0, newElement)
          break
        }
      }
    }
  }
  return sorted
}

console.log(insertionSort([8, 5, 2, 9, 10, 6, 3]))
