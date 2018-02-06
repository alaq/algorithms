function findClosestValueInBst(tree, target, closest) {
  if (!closest) closest = Infinity
  if (!tree) return closest
  if (Math.abs(target - closest) > Math.abs(target - tree.value))
    closest = tree.value
  if (tree.value > target) {
    return findClosestValueInBst(tree.left, target, closest)
  } else if (tree.value < target) {
    return findClosestValueInBst(tree.right, target, closest)
  } else {
    return closest
  }
}
