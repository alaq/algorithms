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
    if (value >= this.value) {
      if (this.right === null) this.right = new BST(value)
      else this.right.insert(value)
    } else if (value < this.value) {
      if (this.left === null) this.left = new BST(value)
      else this.left.insert(value)
    }
    // Do not edit the return statement of this method.
    return this
  }

  contains(value) {
    // Write your code here.
    if (value === this.value) return true
    if (value > this.value) {
      if (this.right === null) return false
      else return this.right.contains(value)
    } else {
      if (this.left === null) return false
      else return this.left.contains(value)
    }
  }

  remove(value, parent = null) {
    // Write your code here.
    if (value === this.value) {
      if (this.left && this.right) {
        this.value = this.right.getMin()
        this.right.remove(value, this)
      } else if (parent === null) {
        if (this.left) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          console.log('removing', this.value)
          this.value = null
        }
      } else if (this.left === null && parent.left === this) parent.left = this.left
      else if (this.left === null && parent.right === this) parent.right = this.left
      else if (this.right === null && parent.left === this) parent.left = this.right
      else if (this.right === null && parent.right === this) parent.right = this.right
    } else if (value > this.value && this.right) this.right.remove(value, this)
    else if (value < this.value && this.left) this.left.remove(value, this)
    // Do not edit the return statement of this method.
    return this
  }

  getMin() {
    if (this.left === null) return this.value
    else return this.left.getMin()
  }
}

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}

const tree = new BST(10).insert(5)
tree.insert(15)
console.log(inOrderTraverse(tree, []))
tree.insert(22)
console.log(inOrderTraverse(tree, []))
tree.insert(17)
console.log(inOrderTraverse(tree, []))
tree.insert(34)
console.log(inOrderTraverse(tree, []))
tree.insert(7)
console.log(inOrderTraverse(tree, []))
tree.insert(2)
console.log(inOrderTraverse(tree, []))
tree.insert(5)
console.log(inOrderTraverse(tree, []))
tree.insert(1)
console.log(inOrderTraverse(tree, []))
tree.insert(35)
console.log(inOrderTraverse(tree, []))
tree.insert(27)
console.log(inOrderTraverse(tree, []))
tree.insert(16)
console.log(inOrderTraverse(tree, []))
tree.insert(30)
console.log(inOrderTraverse(tree, []))
tree.remove(22)
console.log(inOrderTraverse(tree, []))
tree.remove(17)
console.log(inOrderTraverse(tree, []))
