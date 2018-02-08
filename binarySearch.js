function binarySearch(array, target, left = 0, right = array.length - 1) {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] === target) return middle
    else if (array[middle] < target) left = middle + 1
    else right = middle - 1
  }
  return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
console.log(binarySearch([1, 5, 23, 111], 111))
