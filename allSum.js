function allSum (target) {
  let output = []
  let result = []
  allSumRec(target, 0, 1, output, result)
  return result
}

function allSumRec (target, currentSum, start, output, result) {
  if (currentSum === target) {
    result.push(output.slice())
  }

  for (let i = start; i < target; i++) {
    let temp = currentSum + i
    if (temp <= target) {
      output.push(i)
      allSumRec(target, temp, i, output, result)
      output.pop()
    } else {
      return
    }
  }
}

console.log(allSum(5))
