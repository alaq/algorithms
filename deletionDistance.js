// NAIVE WAY

function deletionDistance(string1, string2) {
  const powerset1 = makePowerset(string1)
  const powerset2 = makePowerset(string2)
  for (let i = powerset1.length - 1; i >= 0; i--) {
    if (powerset2.includes(powerset1[i])) return string1.length + string2.length - 2 * powerset1[i].length
  }
}

function makePowerset(string) {
  let powerset = ['']
  for (let i = 0; i < string.length; i++) {
    var tempSet = []
    for (let j = 0; j < powerset.length; j++) {
      tempSet.push(powerset[j] + string[i])
    }
    powerset = powerset.concat(tempSet)
  }
  return powerset
}

console.log(deletionDistance('dog', 'drog'))

// DYNAMIC PROGRAMMING WAY

function deletionDistanceDynamicProgramming(string1, string2) {
  const matrix = new Array(string1.length + 1).fill(null).map(() => new Array(string2.length + 1).fill(null))

  string1 = [''].concat(string1.split(''))
  string2 = [''].concat(string2.split(''))

  for (let i = 0; i < string2.length; i++) {
    matrix[0][i] = i
  }

  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] = i
    for (let j = 1; j < matrix[0].length; j++) {
      if (string1[i] !== string2[j]) matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j]) + 1
      else if (string1[i] === string2[j]) matrix[i][j] = matrix[i - 1][j - 1]
    }
  }

  return matrix[matrix.length - 1][matrix[0].length - 1]
}

console.log(deletionDistanceDynamicProgramming('dog', 'drog'))
