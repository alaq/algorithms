// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */

function bestTimeToBuyStock(prices) {
    let max = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
}

console.log(bestTimeToBuyStock([0,7,2,9,3]))
