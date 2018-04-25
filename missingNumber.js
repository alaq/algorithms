function findMissing(array) {
  let i = 0
  while (array[i] !== i + 1 && i < array.length) {
    console.log('before', array)
    let temp = array[array[i] - 1]
    array[array[i] - 1] = array[i]
    array[i] = temp
    console.log('after', array)
    if (array[i] === i + 1) i++
    }
  return -1
}


function getDifferentNumber(array) {
  let n = array.length
  for (let i = 0; i < n; i++) {
    while (array[i] < n && array[array[i]] !== array[i]) {
      swap(array, i)
    }
  }
  return array
}

function swap(arr, i) {
  temp = arr[arr[i]]
  arr[arr[i]] = arr[i]
  arr[i] = temp
  return arr
}

console.log(getDifferentNumber([3,7,1,2,8,4,5]))
