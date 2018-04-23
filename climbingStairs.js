/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(num) {
  let ways = new Array(num).fill(0)
  for (let i = 0; i < num; i++) {
    if (i === 0) ways[0] = 1
    else if (i === 1) ways[1] = 2
    else {
      ways[i] = ways[i-1] + ways[i-2]
    }
  }
  return ways[ways.length - 1]
};
console.log(climbStairs(20))

var threeSteps = function(num) {
  let ways = new Array(num).fill(0)
  for (let i = 0; i < num; i++) {
    if (i === 0) ways[0] = 1
    else if (i === 1) ways[1] = 2
    else if (i === 2) ways[1] = 4
    else {
      ways[i] = ways[i-1] + ways[i-2] + ways[i-3]
    }
  }
  return ways[ways.length - 1]
};
console.log(threeSteps(3))
