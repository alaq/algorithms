// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
    let valley = prices[0]
    let peak = prices[0]
    let profit = 0
    let i = 0
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i + 1] <= prices[i]) {
            i++
        }
        valley = prices[i]
        while (i < prices.length - 1 && prices[i + 1] >= prices[i]) {
            i++
        }
        peak = prices[i]
        profit += peak - valley
    }
    return profit
}

console.log(maxProfit([0,1,5,3,6,4]))
