/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const brackets = {
        '[' : ']',
        '(' : ')',
        '{' : '}',
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if(brackets.hasOwnProperty(s[i])) {
            stack.push(s[i])
        } else if (brackets[stack[stack.length - 1]] !== s[i]) return false
        else if (brackets[stack[stack.length - 1]] === s[i]) {
            stack.pop()
        }
    }
    return stack.length === 0
};

console.log(isValid('([]'))
