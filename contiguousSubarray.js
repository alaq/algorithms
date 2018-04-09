/*

  Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

  For example, given the array [-2,1,-3,4,-1,2,1,-5,4],

  the contiguous subarray [4,-1,2,1] has the largest sum = 6.

  return 6

  [-2,1,-3,4,-1,2,1,-5,4]
  [-2,1,-2,4, 3,5,6, 1,5]

*/// function csa(array) {
//     let max = new Array(array.length).fill(null)
//     max[0] = array[0]
//     for (let i = 1; i < array.length; i++) {
//         max[i] = Math.max(array[i], array[i] + max[i-1])
//     }
//     return Math.max(...max)
// }

function csa(array) {
    let max = array[0]
    let currentMax = array[0]
    for (let i = 1; i < array.length; i++) {
        currentMax = Math.max(array[i], array[i] + currentMax)
        if (currentMax > max) max = currentMax
    }
    return max
}

console.log(csa([-2,1,-3,4,-1,2,1,-5,4]))
