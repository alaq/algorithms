function threeNumbersSum(array, target) {
  array = array.sort((a, b) => a - b)
  const sums = []
  for (let low = 0; low < array.length - 1; low++) {
    let middle = low + 1,
      high = array.length - 1
    while (middle < high) {
      let current = array[low] + array[middle] + array[high]
      if (current === target) {
        sums.push([array[low], array[middle], array[high]])
        middle++
      } else if (current > target) high--
      else if (current < target) middle++
    }
  }
  return sums
}

console.log(threeNumbersSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
