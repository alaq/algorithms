function quickSort (array) {
  qsRec(array, 0, array.length - 1)
  return array
}

function qsRec (array, l, h) {
  if (h > l) {
    let pivot = partition(array, l, h)
    qsRec(array, l, pivot - 1)
    qsRec(array, pivot + 1, h)
  }
}

function partition (array, low, high) {
  let i = low, j = high, pivotValue = array[low]
  while (i < j) {
    while (i <= high && array[i] <= pivotValue) {
      i++
    }
    while (array[j] > pivotValue) {
      j--
    }

    if (i < j) {
      swap(array, i, j)
      console.log(array)
    } else {
      break
    }
  }

  array[low] = array[j]
  array[j] = pivotValue

  return j
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(quickSort([55,23,26,2,18,78,23,8,2,3]))
