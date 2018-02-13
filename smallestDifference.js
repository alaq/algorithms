function smallestDifference(array1, array2) {
  array1 = array1.sort((a, b) => a - b)
  array2 = array2.sort((a, b) => a - b)
  let pointer1 = 0,
    pointer2 = 0,
    smallest = [0, 0]
  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (Math.abs(array1[pointer1] - array2[pointer2]) === 0) {
      smallest = [pointer1, pointer2]
      break
    } else if (Math.abs(array1[pointer1] - array2[pointer2]) < Math.abs(array1[smallest[0]] - array2[smallest[1]])) {
      smallest = [pointer1, pointer2]
    }
    if (array1[pointer1] > array2[pointer2]) pointer2++
    else if (array1[pointer1] < array2[pointer2]) pointer1++
  }
  return [array1[smallest[0]], array2[smallest[1]]]
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
