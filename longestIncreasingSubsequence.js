const seq = [1, 2, 5, 4]

// Brute force, recursive way
function longestIncreasingSubsequence(sequence, index = 0, base = -Infinity) {
    if (index === sequence.length) return 0

    const num = sequence[index]
    const excluding = longestIncreasingSubsequence(sequence, index + 1, base)
    if (base >= num) return excluding

    const including = 1 + longestIncreasingSubsequence(sequence, index + 1, num)

    return Math.max(excluding, including)
}

console.log(longestIncreasingSubsequence(seq)) // should return 3

// Dynamic programming
function lisDynamic(sequence) {
    const length = new Array(sequence.length).fill(null)
    for (let i = 0; i < sequence.length; i++) {
        let max = 1
        for (let j = 0; j < i; j++) {
            if (sequence[i] > sequence[j] && length[j] + 1 > max) max = length[j] + 1
        }
        length[i] = max
    }
    return Math.max(...length)
}

console.log(lisDynamic(seq)) // should return 3
