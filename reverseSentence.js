function reverseWords(s) {
  let i = 0
  while (i < s.length / 2) {
    s = s.substr(0, i) + s[s.length - i - 1] + s.substr(i + 1, s.length - 1 - i) + s[i] + s.substr(s.length - i)
    i++
  }
  return s
}

console.log(reverseWords('The quick brown fox jumped over the lazy dog.'))
