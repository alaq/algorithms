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
        let low = sorted[i]
        let high = sorted[i + 1]
        if (typeof sorted[i] !== 'number') low = -Infinity
        if (typeof sorted[i] !== 'number') high = Infinity
        if (newElement > low && newElement <= high) {
          sorted.splice(i + 1, 0, newElement)
          break
        }
      }
    }
  }
  return sorted
}

console.log(insertionSort([0, 0, 1, 3, 0, 5, 3, 4]))
