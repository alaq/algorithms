// Find the inflexion point in stock prices

function inflexionPoint (prices) {
    let low = 0, high = prices.length - 1, p
    while (low < high) {
        p = parseInt((high + low)/2)
        if (prices[p-1] > prices[p] && prices[p+1] > prices[p]) return prices[p]
        else if (prices[p-1] > prices[p] && prices[p+1] < prices[p]) low = p + 1
        else high = p -1
    }
    return -1
}

console.log(inflexionPoint([7,6,4,1,3,5,7]))
