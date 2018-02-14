// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    // Write your code here.
    if (value > this.value) {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    } else if (value < this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    // Do not edit the return statement of this method.
    return this
  }

  contains(value) {
    // Write your code here.
    if (value === this.value) return true
    if (value > this.value) {
      if (!this.right) return false
      else return this.right.contains(value)
    } else {
      if (!this.left) return false
      else return this.left.contains(value)
    }
  }

  remove(value) {
    // Write your code here.
    if (value === this.value) {
      if (!this.left && !this.right) this.value = null
      else {
        
      }
    }
    if (value > this.value && this.right) this.right.remove(value)
    if (value < this.value && this.left) this.left.remove(value)
    // Do not edit the return statement of this method.
    return this
  }
}
