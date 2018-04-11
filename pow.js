/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPowOld = function(x, n) {
    let result = 1
    if (n > 1) {
        while (n) {
            result *= x
            n--
        }
    } else if (n === 1) return x
    else if (n === 0) return 1
    else if (n < 0) {
        n = Math.abs(n)
        while (n) {
            result *= x
            n--
        }
        result = 1 / result
    }
    return result
};


var myPow = function(x, n) {
    if (n === 0) return 1
    if (n < 0) return 1 / myPow(x, -n)
    if (n % 2) return x * myPow(x, n-1)
    return myPow(x*x, n/2)
}

console.log(myPow(5,10))
