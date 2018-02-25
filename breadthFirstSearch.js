class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array) {
    const queue = [this]
    while (queue.length) {
      let current = queue[0]
      array.push(current.name)
      queue.shift()
      for (let child of current.children) {
        queue.push(child)
      }
    }
    return array
  }
}
