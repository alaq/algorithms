function validateBst(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true
  if (!tree.value) return false
  if (
    !tree.hasOwnProperty('value') ||
    !tree.hasOwnProperty('right') ||
    !tree.hasOwnProperty('left')
  )
    return false
  if (tree.value >= max || tree.value < min) return false
  if (tree.right && tree.right.value && tree.value > tree.right.value)
    return false
  if (tree.left && tree.left.value && tree.value <= tree.left.value)
    return false
  return (
    true &&
    validateBst(tree.left, min, tree.value) &&
    validateBst(tree.right, tree.value, max)
  )
}
