function caesarCipherEncryptor(string, key) {
  let cipher = ''
  for (let i = 0; i < string.length; i++) {
    cipher += String.fromCharCode((string.charCodeAt(i) + key - 97) % 26 + 97)
  }
  return cipher
}

console.log(caesarCipherEncryptor('xyz', 2))
