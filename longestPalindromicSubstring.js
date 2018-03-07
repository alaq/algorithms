function longestPalindromicSubstring(string) {
  let longest = [0, 0]
  for (let i = 0; i < string.length; i++) {
    let even = getLongestPalindrome(string, i, i + 1)
    let odd = getLongestPalindrome(string, i - 1, i + 1)
    let currentLongest = even[1] - even[0] - odd[1] + odd[0] > 0 ? even : odd
    longest = currentLongest[1] - currentLongest[0] - longest[1] + longest[0] > 0 ? currentLongest : longest
  }
  if (longest[0] === longest[1]) return string.charAt(longest[0])
  return string.slice(longest[0], longest[1])
}

function getLongestPalindrome(string, left, right) {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break
    left--
    right++
  }
  return [left + 1, right]
}

console.log('result:', longestPalindromicSubstring('a'))
