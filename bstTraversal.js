function inOrderTraverse(tree, array) {
  if (tree.left !== null) array.concat([inOrderTraverse(tree.left, array)])
  array.push(tree.value)
  if (tree.right !== null) array.concat([inOrderTraverse(tree.right, array)])
  return array
}

function preOrderTraverse(tree, array) {
  array.push(tree.value)
  if (tree.left !== null) array.concat([preOrderTraverse(tree.left, array)])
  if (tree.right !== null) array.concat([preOrderTraverse(tree.right, array)])
  return array
}

function postOrderTraverse(tree, array) {
  if (tree.left !== null) array.concat([postOrderTraverse(tree.left, array)])
  if (tree.right !== null) array.concat([postOrderTraverse(tree.right, array)])
  array.push(tree.value)
  return array
}
