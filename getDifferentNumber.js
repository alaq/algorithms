// brute force
function getDifferentNumber(arr) {
    const arrCopy = arr.slice().sort((a, b) => a - b)
    for (let i = 0; i < Math.pow(2, 31); i++) {
        if (arrCopy[i] !== i) return i
    }
}

// Set method
function getDifferentNumberSet(arr) {
    const set = new Set(arr)
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(i)) return i
    }
    return arr.length
}

console.log(getDifferentNumberSet([5,2,4,1,0]))


// in place
function getDifferentNumberInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] < arr.length && arr[arr[i]] !== arr[i]) arr = swap(arr, i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) return i
    }
    return arr.length 
}

function swap(arr, i) {
    temp = arr[arr[i]]
    arr[arr[i]] = arr[i]
    arr[i] = temp
    return arr
}

console.log(getDifferentNumberInPlace([5,2,4,1,0]))

// other solution from pramp
function getDifferentNumberPramp(arr) {
    // your code goes here
    for (var i = 0, zero = false; i < arr.length; i++) {
        if (arr[i] === 0) zero = true
    }
    if (!zero) return 0
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i] >= 0 ? arr[i] : arr[i] * -1
        if (!arr[temp] || arr[temp] === 0) arr[temp] = -1
        else if (arr[temp] > 0) arr[temp] *= -1
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > 0) return i
    }
    return arr.length
}
