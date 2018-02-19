function invertBinaryTree(tree) {
  if (tree === null) return
  swap(tree)
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

function swap(tree) {
  const left = tree.right
  tree.right = tree.left
  tree.left = left
}
