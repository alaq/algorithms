function deletionDistance(string1, string2) {
  console.log(string1)
}

function makeSuperSet(string) {
  let superSet = ['']
  for (let i = 0; i < string.length; i++) {
    var tempSet = []
    for (let j = 0; j < superSet.length; j++) {
      tempSet.push(superSet[j] + string[i])
    }
    superSet = superSet.concat(tempSet)
  }
  return superSet
}

console.log(makeSuperSet('hello'))
