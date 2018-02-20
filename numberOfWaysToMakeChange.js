function numberOfWaysToMakeChange(n, denom) {
  const ways = (new Array(n + 1)).fill(0)
  ways[0] = 1
  for (let i = 0; i < denom.length; i++) {
    for (let j = 0; j < ways.length; j++){
      if (j >= denom[i]) ways[j] = ways[j] + ways[j-denom[i]]
    }
  }
  return ways[n]
}
