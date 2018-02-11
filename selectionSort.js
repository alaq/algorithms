function selectionSort(array) {
  const sorted = []
  while (array.length) {
    console.log(sorted, array)
    let minimum = Math.min.apply(null, array)
    let index = array.indexOf(minimum)
    array.splice(index, 1)
    sorted.push(minimum)
  }
  return sorted
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))
