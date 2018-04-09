/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    let paths = new Array(obstacleGrid.length).fill(null).map(() => new Array(obstacleGrid[0].length).fill(0))
    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].length; j++) {
            let top = i - 1 < 0 || j - 1 < 0 ? 0 : paths[i-1][j]
            let left = i - 1 < 0 || j - 1 < 0 ? 0 : paths[i][j-1]
            console.log(top, left)
            if (i === 0 && j === 0 && obstacleGrid[0][0] !== 1) paths[0][0] = 1
            else if (obstacleGrid[i][j] === 1) paths[i][j] = 0
            else paths[i][j] = top + left
            console.log(paths, top, left)
        }
    }
    return paths[paths.length - 1][paths[0].length - 1]
};

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
]))

console.log(uniquePathsWithObstacles([
    [1,0]
]))
