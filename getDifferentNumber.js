// brute force
function getDifferentNumber(arr) {
    const arrCopy = arr.slice().sort((a, b) => a - b)
    for (let i = 0; i < Math.pow(2, 31); i++) {
        if (arrCopy[i] !== i) return i
    }
}

function getDiffentNumberSet(arr) {
    const set = new Set(arr)
    return set
}

console.log(getDifferentNumberSet([5,2,4,1]))
