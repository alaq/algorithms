// https://leetcode.com/problems/first-unique-character-in-a-string/description/
// for Bloomberg

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let letters = []
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i+1) === 0) return i
        else if (s.slice(i + 1).indexOf(s[i]) === -1 && !letters.includes(s[i])) return i
        else letters.push(s[i])
    }
    return -1
};

console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('cc'))
console.log(firstUniqChar('aadadaad'))

var firstUniqChar2 = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i
    }
    return -1
};

console.log(firstUniqChar2('loveleetcode'))
console.log(firstUniqChar2('cc'))
console.log(firstUniqChar2('aadadaad'))
