/**
 * @param {string[]} words
 * @return {number}
 */

const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const uniqueMorseRepresentations = function(words) {
    if (words.length === 1) return 1
    words = words.map(word => morseWord(word))
    console.log(words)
    const unique = [...new Set(words)]
    return unique.length
}

const morseWord = function(word) {
    let morse = ''
    for(let i = 0; i < word.length; i++) {
        morse += alphabet[word.charCodeAt(i) - 97]
    }
    return morse
};

// test
console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']) === 2);

