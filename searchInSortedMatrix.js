function searchInSortedMatrix(matrix, target) {
  let row = 0
  let column = matrix[0].length - 1
  while (row < matrix.length && column >= 0) {
    if (matrix[row][column] > target) column--
    else if (matrix[row][column] < target) row++
    else return [row, column]
  }
  return [-1, -1]
}

console.log(searchInSortedMatrix([[1, 4, 6, 9], [3, 5, 7, 10]], 7))
