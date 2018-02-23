function minNumberOfCoinsForChange(coins, target) {
  const mins = new Array(target + 1).fill(Infinity)
  mins[0] = 0
  for (const coin of coins) {
    for (let j = 0; j < mins.length; j++) {
      if (coin <= j) {
        mins[j] = Math.min(mins[j], 1 + mins[j - coin])
      }
    }
  }
  return mins[mins.length - 1]
}

console.log(minNumberOfCoinsForChange([1, 2, 5], 7))
