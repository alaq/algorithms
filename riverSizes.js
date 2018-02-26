function riverSizes(matrix) {
  const visited = [...Array(matrix.length).keys()].map(i => Array(matrix[0].length).fill(false))
  let rivers = []

  function followRiver(i, j) {
    let size = 1,
      continues = true
    while (continues) {
      visited[i][j] = true
      continues = false
      if (matrix[i][j + 1] === 1) {
        size++
        j = j + 1
        continues = true
        continue
      } else if (i + 1 <= matrix.length - 1 && matrix[i + 1][j] === 1) {
        size++
        i = i + 1
        continues = true
        continue
      }
    }
    return size
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        rivers.push(followRiver(i, j))
      }
    }
  }
  return rivers
}

console.log(riverSizes([[0, 1, 1], [1, 0, 1]]))
