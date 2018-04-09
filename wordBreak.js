/**
 * @param {string} s
 * @return {boolean}
 */
var wordBreak = function(s, wd) {
    for (let i = 0; i <= s.length; i++) {
        console.log(wd)
        if (wd.includes(s.slice(0, i + 1))) {
            if (i === s.length - 1) return true
            else wordBreak(s.slice(i+1, wd))
        }
    }
};

const wd = ['leet', 'code']
console.log(wordBreak('leetcode', wd))
