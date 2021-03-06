// This is meant to be a demonstration of performance, between repeated array access and storing it in a variable

function repeat (array) {
    let sum = 0
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            sum += array[500]
        }
    }
    return sum
}

function noRepeat (array) {
    let sum = 0
    for (let i = 0; i < 1000; i++) {
        let arrayValue = array[500]
        for (let j = 0; j < 1000; j++) {
            sum += arrayValue
        }
    }
    return sum
}

const arr = []
for (let a = 0; a < 1000; a++) {
    arr.push(a)
}

let t1 = performance.now()
repeat(arr)
let t2 = performance.now()

let t3 = performance.now()
noRepeat(arr)
let t4 = performance.now()

console.log('repeat access:' ,t2 - t1, 'vs no repeat:', t4 - t3)
