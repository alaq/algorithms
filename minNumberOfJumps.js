function minNumberOfJumps(arr) {
  if (arr.length === 1) return 0
  let jumps = 1,
    maxReach = -Infinity,
    steps = arr[0]
  for (var i = 1; i < arr.length - 1; i++) {
    maxReach = Math.max(maxReach, arr[i] + i)
    steps--
    if (!steps) {
      jumps++
      steps = maxReach - i
    }
  }
  return jumps
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
