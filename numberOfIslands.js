/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    function discover(grid, visited, i, j) {
        if (j + 1 < grid[i].length && grid[i][j+1] === '1' && !visited[i][j+1]) {
            visited[i][j+1] = 1
            discover(grid, visited, i, j+1)
        }
        if (i + 1 < grid.length && grid[i+1][j] === '1') {
            visited[i+1][j] = 1
            discover(grid, visited, i+1, j)
        }
        if (grid[i][j-1] === '1' && !visited[i][j-1]) {
            visited[i][j-1] = 1
            discover(grid, visited, i, j-1)
        }
        if (i - 1 >= 0 && grid[i-1][j] === '1' && !visited[i-1][j]) {
            visited[i-1][j] = 1
            discover(grid, visited, i-1, j)
        }
    }

    let numberOfIslands = 0
    const visited = [...Array(grid.length).keys()].map(i => Array(grid[0].length).fill(false))
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                discover(grid, visited, i, j)
                numberOfIslands++
            }
        }
    }
    return numberOfIslands
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))
console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]))
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
