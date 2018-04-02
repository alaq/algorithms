// https://leetcode.com/problems/first-unique-character-in-a-string/description/
// for Bloomberg

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i).indexOf(s[i]) === -1) return i
    }
    return -1
};

console.log(firstUniqChar('loveleetcode'))
