/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {}
    for (let i = 0; i < s.length; i++) {
        if (freq.hasOwnProperty(s[i])) freq[s[i]]++
        else freq[s[i]] = 1
    }
    Object.entries(freq).sort((a, b))
};
