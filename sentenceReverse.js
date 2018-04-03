function reverseWords(arr) {
    // reverse array via swap
    // loop through array and reverese words
    mirror(arr)
    
    // now let's reverse words
    let wordStart = 0
    let endWord
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ' ' || i === arr.length) {
            endWord = i - 1;
            mirror(arr, wordStart, endWord)
            wordStart = i + 1
        }
    }
    return arr
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function mirror(arr, start = 0, end = arr.length - 1) {
    for (let i = 0; i < (end - start) / 2; i++) {
        swap(arr, start + i, end - i)
    }
}

reverseWords(['h', 'e', 'l', 'l'])
