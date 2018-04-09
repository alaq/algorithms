/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const paths = (new Array(m)).fill(null).map(() => new Array(n).fill(null))
    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].length; j++) {
            if (i === 0 || j === 0) paths[i][j] = 1
            else {
                paths[i][j] = paths[i-1][j] + paths[i][j-1]
            }
        }
    }
    return paths[m-1][n-1]
};

console.log(uniquePaths(3, 3))
