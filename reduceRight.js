function reduceRight (array, start, fn) {
    for (let i = array.length - 1; i >= 0; i--) {
        start = fn(start, array[i])
    }
    return start
}

function reduceRightRecursive (array, start, fn) {
    if (array.length === 1) return fn(start, array[0])
    return reduceRightRecursive (array.slice(0, array.length - 1), fn(start, array[array.length - 1]), fn)
}
