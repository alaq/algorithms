function bestTimeToBuyStock(prices) {
    let max = new Array(prices.length).fill(0)
    let min = new Array(prices.length).fill(0)
    for (let i = 1; i < prices.length; i++) {
        min[i] = Math.min(min[i-1], prices[i])
        max[i] = Math.max(max[i-1], max[i-1] + prices[i] - )

    }
    return max
}

console.log(bestTimeToBuyStock([0,7,2,9,3]))
