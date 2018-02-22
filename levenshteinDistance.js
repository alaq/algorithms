function levenshteinDistance(str1, str2) {
  const matrix = []
  for (let i = 0; i < str2.length + 1; i++) {
    let row = []
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    matrix.push(row)
  }

  for (let c = 1; c < str2.length + 1; c++) {
    for (let r = 1; r < str1.length + 1; r++) {
      if (str1[c - 1] === str2[r - 1]) matrix[c][r] = matrix[c - 1][r - 1]
      else matrix[c][r] = 1 + Math.min(matrix[c][r - 1], matrix[c - 1][r], matrix[c - 1][r - 1])
    }
  }
  return matrix[str2.length][str1.length]
}

console.dir(levenshteinDistance('abc', 'yabcx'))
