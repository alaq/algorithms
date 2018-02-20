function pancakeSort(arr) {
  // your code goes here
  for (let i = arr.length; i >= 0; i--) {
    let max = arr.indexOf(Math.max(...arr.slice(0, i)))
    arr = flip(arr, max) // putting it at the front
    arr = flip(arr, i)
  }
  return arr
}

function flip(arr, k) {
  return arr
    .slice(0, k)
    .reverse()
    .concat(arr.slice(k, arr.length))
}

console.log('flip', flip([2, 1, 3, 4], 2))
console.log(pancakeSort([7, 2, 3, 4, 5]))
