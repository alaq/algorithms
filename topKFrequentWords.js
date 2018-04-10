/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let freq = {}
    for (let i = 0; i < words.length; i++) {
        freq[words[i]] = freq[words[i]] ? freq[words[i]] + 1 : 1
    }
    const freqOrder =  Object.keys(freq).sort((a, b) => freq[b] - freq[a])
    console.log(freqOrder)
    for (let i = 0; i < freqOrder.length - 1; i++) {
        if (freq[freqOrder[i]] === freq[freqOrder[i+1]] && freqOrder[i] < freqOrder[i+1]) {
            console.log('flip!')
            [freqOrder[i], freqOrder[i+1]] = [freqOrder[i+1], freqOrder[i]]
        }
    }
    return freqOrder.slice(0, k)
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3))
