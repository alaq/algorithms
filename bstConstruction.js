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

  remove(value, parent = null) {
    // Write your code here.
    if (value === this.value) {
      if (!this.left && !this.right) this.value = null
      else if (!this.left || !this.right) {
        // no child
        // one child
        if (!parent) console.log('damn')
        else if (!this.left && parent.left === this) parent.left = this.left
        else if (!this.left && parent.right === this) parent.right = this.left
        else if (!this.right && parent.left === this) parent.left = this.right
        else if (!this.right && parent.right === this) parent.right = this.right
      } else if (!parent) {
        if (this.left) {
          this.value = this.left.value
          this.left = this.left.left
          this.right = this.left.right
        } else if (this.right) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        }
      } else {
        // two children, first we find the minimum in the right sub tree
        this.value = this.right.getMin()
        this.right.remove(this.value, this)
      }
    }
    if (value > this.value && this.right) this.right.remove(value, this)
    if (value < this.value && this.left) this.left.remove(value, this)
    // Do not edit the return statement of this method.
    return this
  }

  getMin() {
    if (!this.left) return this.value
    else return this.left.getMin()
  }
}
