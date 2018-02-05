function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    if (
      array.includes(targetSum - array[i]) &&
      array[i] !== targetSum - array[i]
    )
      return [array[i], targetSum - array[i]].sort((a, b) => a - b)
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
