function powerset(array) {
  let power = [[]]
  for (const elem of array) {
    const tempPower = []
    for (let i = 0; i < power.length; i++) {
      tempPower.push(power[i].concat([elem]))
    }
    power = power.concat(tempPower)
  }
  return power
}

console.log(powerset([1, 2, 3]))
