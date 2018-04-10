/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    i = 0
    while (Math.pow(i+1, 2) <= x) {
        i++
    }
    return i
};

console.log(mySqrt(8))
console.log(mySqrt(4))
