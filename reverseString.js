/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
    s = s.split('')
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - 1 - i]] =  [s[s.length - 1 - i], s[i]]
        console.log(s)
    }
    return s.join('')
};

console.log(reverseString('hello'))
