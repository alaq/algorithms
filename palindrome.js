// Solution #1
function isPalindrome(string) {
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return reversed === string
}

// Solution #2 - recursively
function isPalindromeRecursively(string, i = 0) {
  const j = string.length - 1 - i
  return i <= j ? true : string[i] === string[j] && isPalindromeRecursively(string, i + 1)
}

// Solution #3 - with pointers
function isPalindromeWithPointers(string) {
  let left = 0,
    right = string.length - 1
  while (left <= right) {
    left++
    right--
    if (string[left] !== string[right]) return false
  }
  return true
}

console.log(isPalindrome('abba'))
console.log(isPalindromeRecursively('abba'))
console.log(isPalindromeWithPointers('abba'))
