function riverSizes(matrix) {
  const visitedMatrix = [...Array(matrix.length).keys()].map(i =>
    Array(matrix[0].length)
  )

  function followRiver(row, column) {
    if (matrix[row][column] === 1 && visitedMatrix[row][column] !== 1) {
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      followRiver(i, j)
    }
  }

  return visitedMatrix
}

console.log(riverSizes([[0, 1], [1, 0]]))
