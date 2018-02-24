function kadanesAlgorithm(array) {
  const max = [array[0]]
  for (let i = 1; i < array.length; i++) {
    max.push(Math.max(max[i - 1] + array[i], array[i]))
  }
  return Math.max(...max)
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
)
