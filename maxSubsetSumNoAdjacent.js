function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0
  else if (array.length === 1) return array[0]

  let maxSums = [array[0], Math.max(array[0], array[1])]
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 2] + array[i], maxSums[i - 1])
  }
  return maxSums[array.length - 1]
}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
