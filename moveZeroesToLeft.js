function moveZeroes (array) {
  let read = array.length - 1
  let write = array.length - 1

  while (read >= 0) {
    if (array[read] !== 0) {
      console.log('swap', read, write)
      array[write] = array[read]
      write--
    } else {
      console.log('no swap')
    }
    read--
  }

  while (write >= 0) {
    array[write] = 0
    write--
  }
  return array
}

console.log(moveZeroes([1,10,20,0,59,63,0,88,0]))
