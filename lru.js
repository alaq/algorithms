var ListNode = function (key, val) {
  this.val = val
  this.key = key
  this.prev = null
  this.next = null
}

var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.head = null
  this.tail = null
}

LRUCache.prototype.get = function (key) {
  let node = this.map.get(key)
  if (node) return node.val
  else return -1
}

LRUCache.prototype.put = function (key, val) {
  let node = this.map.get(key)
  if (!node) {
    node = new ListNode(key, val)
    this.addToFront(node)
  } else {
    node.val = val
    this.moveToFront(node)
  }
  this.map.set(key, node)
  if (this.map.size > this.capacity) {
    this.deleteLast()
  }
}

LRUCache.prototype.addToFront = function (node) {
  if (this.head) {
    node.next = this.head
    this.head.prev = node
  }
  this.head = node
  node.prev = null
  if (!this.tail) this.tail = node
}

LRUCache.prototype.moveToFront = function(node) {
  if (node.prev && node.next) {
    node.prev.next = node.next
    node.next.prev = node.prev
  } else if (node === this.tail) {
    this.tail = node.prev
  }
  this.addToFront(node)
}

LRUCache.prototype.deleteLast = function () {
  console.log('delete last', this.tail.val)
  let newTail = this.tail.prev
  newTail.next = null
  let toDelete = this.tail
  this.tail = newTail
  this.map.delete(toDelete.key)
}

cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
console.log(cache.get(4));       // returns 4
