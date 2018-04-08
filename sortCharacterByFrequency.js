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
    const freqObj = Object.keys(freq)
        .sort((a, b) => freq[b] - freq[a])
        .reduce((a, v) => {
            a[v] = freq[v]
            return a; 
        },  {})
    let fString = ''
    for (letter in freqObj) {
        for (let i = 0; i < freqObj[letter]; i++) {
            fString += letter
        }
    }
    return fString
};

console.log(frequencySort('adrienaaaaghei'))
console.log(frequencySort("2a554442f544asfasssffffasss"))
