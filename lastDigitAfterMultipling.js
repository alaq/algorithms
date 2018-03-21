function lastDigitAfterMultiplying (array) {
    let result = 1
    for (let i = 0 ; i < array.length; i++) {
        result *= array[i]
    }
    return result % 10
}

function lastDigitAfterMultiplyingBetter (array) {
    let result = 1
    for (let i = 0 ; i < array.length; i++) {
        result = (result * (array[i] % 10)) % 10
    }
    return result % 10
}

console.log(lastDigitAfterMultiplying([2, 4, 5]))
console.log(lastDigitAfterMultiplyingBetter([2, 4, 5]))
