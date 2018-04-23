function bestTime (prices) {
  let min = prices[0], max = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max - min
}

console.log(bestTime([8,5,12,9,19,1]))
