function insertionSort(array) {
  let sorted = [array.shift()]
  while (array.length) {
    const newElement = array.shift()
    console.log(sorted, newElement, array)
    for (let i = 0; i < sorted.length; i++) {
      const low = sorted[i] || 0
      const high = sorted[i + 1] || Infinity
      console.log('is', newElement, 'between', low, 'and', high)
      if (newElement <= sorted[0]) {
        sorted.unshift(newElement)
        break
      } else if (newElement >= sorted[sorted.length - 1]) {
        sorted.push(newElement)
      } else if (newElement > low && newElement <= high) {
        sorted = sorted.splice(i, 0, newElement)
        break
      }
    }
  }
  return sorted
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))
