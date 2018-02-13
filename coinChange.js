function coinChange(coins, target) {
  if (target < 0) return Infinity
  if (target === 0) return 0
  if (coins.includes(target)) return 1
  else {
    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
      min = Math.min(min, coinChange(coins, target - coins[i]) + 1)
    }
    return min
  }
}

console.log(coinChange([25, 10, 5, 1], 32) === 4) // returns 4
console.log(coinChange([4, 3, 1], 6) === 2) // returns 2
