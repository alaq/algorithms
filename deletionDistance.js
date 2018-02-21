function deletionDistance(string1, string2) {
  const superSet1 = makeSuperSet(string1)
  const superSet2 = makeSuperSet(string2)
  for (let i = superSet1.length - 1; i >= 0; i--) {
    if (superSet2.includes(superSet1[i])) return string1.length + string2.length - 2 * superSet1[i].length
  }
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

console.log(deletionDistance('dog', 'frog'))
