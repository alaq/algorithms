/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // First we search for the pivot
    let low = 0, high = nums.length - 1, mid, pivot = -1
    while (low < high) {
        mid = parseInt((low + high)/2)
        console.log('lmh' ,low, high, mid)
        if (nums[mid] > nums[mid + 1]) {
            pivot = mid
            break;
        }
        else if (nums[low] > nums[mid]) {
            high = mid
        }
        else if (nums[mid] > nums[high]) {
            low = mid
        }
        else if (nums[low] < nums[high]) {
            pivot = nums.length - 1
            break
        }
    }
    console.log('pivot', pivot)
    // let's figure out where the target is
    // now we do a binary search to find the target
    if (target === nums[0]) return 0
    else if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot)
    } else {
        return binarySearch(nums, target, pivot + 1, nums.length - 1)
    }

};

function binarySearch(arr, target, low, high) {
    while (low <= high) {
        let mid = parseInt((low + high)/2)
        if (arr[mid] === target) return mid
        if (arr[mid] > target) high = mid - 1
        else low = mid + 1
    }
    return -1
}

console.log(search([3,4,5,6,7,8,1,2], 7))
console.log(search([1,3], 3))
console.log(search([4,5,1,2,3],1))
