// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let insert = string.slice(i);
      let current = this.root
      while (insert.length) {
        if (!current[insert[0]]) current[insert[0]] = {}
        current = current[insert[0]]
        insert = insert.slice(1)
      }
      current[this.endSymbol] = true
    }
  }

  contains(string) {
    let current = this.root
    while (string.length) {
      if (!(string[0] in current)) return false
      current = current[string[0]]
      string = string.slice(1)
    }
    return current[this.endSymbol] === true
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
