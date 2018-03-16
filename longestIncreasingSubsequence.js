// Brute force, recursive way
function longestIncreasingSubsequence(sequence, index = 0, base = -Infinity) {
    if (index === sequence.length) return 0

    const num = sequence[index]
    const excluding = longestIncreasingSubsequence(sequence, index + 1, base)
    if (base >= num) return excluding

    const including = 1 + longestIncreasingSubsequence(sequence, index + 1, num)
    
    return Math.max(excluding, including)
}

console.log(longestIncreasingSubsequence([1, 2, 5, 4])) // should return 3
