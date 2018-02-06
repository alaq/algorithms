// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array.includes(targetSum - array[i]) &&
//       array[i] !== targetSum - array[i]
//     )
//       return [array[i], targetSum - array[i]].sort((a, b) => a - b)
//   }
//   return []
// }

function twoNumberSum(array, targetSum) {
  let left = 0,
    right = array.length - 1
  array = array.sort((a, b) => a - b)
  while (left !== right) {
    if (array[left] + array[right] === targetSum)
      return [array[left], array[right]]
    else if (array[left] + array[right] > targetSum) right--
    else left++
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
