/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let i = 0
    let current = chars[0]
    let count = 0
    while (i < chars.length) {
        current = chars[i]
        let c = 0
        while (chars[i + c + 1] === current) {
            c++
        }
        if (c > 0) {
            chars.splice(i+1, c, c + 1)
        }
        i = i + c + 1
    }
    return chars.filter(char => char)
};

console.log(compress(['a', 'a', 'b', 'b', 'b']))
