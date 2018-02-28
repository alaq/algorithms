function balancedBrackets(string) {
  string = string.split('')
  const stack = []

  while (string.length) {
    // console.log({string, stack})
    let next = string.shift()
    if (next === '{') stack.push('{')
    else if (next === '(') stack.push('(')
    else if (next === '[') stack.push('[')
    else if (next === '}' && stack[stack.length - 1] === '{') stack.pop()
    else if (next === ')' && stack[stack.length - 1] === '(') stack.pop()
    else if (next === ']' && stack[stack.length - 1] === '[') stack.pop()
    else return false
  }

  if (stack.length) return false
  return true
}

console.log(balancedBrackets('(((((({{{{{[[[[[([)])]]]]]}}}}}))))))')) // false
console.log(balancedBrackets('()([])')) // true
